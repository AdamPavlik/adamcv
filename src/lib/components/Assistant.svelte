
 <script lang="ts">
 import { onMount } from 'svelte';

 const LAMBDA_URL =
 	'https://oo3l4sdaz6gbpfkd3cprdz4ne40piukc.lambda-url.eu-central-1.on.aws';
 const MAX_HISTORY = 12;
 const STORAGE_KEY = 'assistant_chat_history_v1';

 interface Message {
 	role: 'user' | 'assistant';
 	content: string;
 }

	const DEFAULT_GREETING: Message = {
		role: 'assistant',
		content:
			"Hello! I'm Adam's AI Assistant. Ask me anything about Adam's experience, skills, projects, or any tech-related topics!"
	};

	let messages: Message[] = [DEFAULT_GREETING];
	let question = '';
	let isLoading = false;
	let error: string | null = null;
	let chatContainer: HTMLDivElement;
	let inputTextarea: HTMLTextAreaElement;

 function isMessage(obj: unknown): obj is Message {
		if (!obj || typeof obj !== 'object') return false;
		const o = obj as Record<string, unknown>;
		const role = o.role;
		const content = o.content;
		return (
			(role === 'user' || role === 'assistant') &&
			typeof content === 'string'
		);
	}

	function safeParseMessages(raw: string | null): Message[] | null {
		if (!raw) return null;
		try {
			const parsed = JSON.parse(raw) as unknown;
			if (!Array.isArray(parsed)) return null;
			const valid = parsed.filter(isMessage) as Message[];
			return valid.length ? valid.slice(-MAX_HISTORY) : null;
		} catch {
			return null;
		}
	}

	function loadMessagesFromStorage(): Message[] | null {
		if (typeof window === 'undefined') return null;
		return safeParseMessages(localStorage.getItem(STORAGE_KEY));
	}

	function saveMessagesToStorage(msgs: Message[]) {
		if (typeof window === 'undefined') return;
		try {
			const toStore = msgs.slice(-MAX_HISTORY);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
		} catch {
			// ignore storage errors
		}
	}

	function clearChat() {
		messages = [DEFAULT_GREETING];
		question = '';
		error = null;
		saveMessagesToStorage(messages);
		scrollToBottom();
	}

	function scrollToBottom() {
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 100);
	}

	async function askAssistant(event: Event) {
		event.preventDefault();
		error = null;
		const q = question.trim();
		if (!q || isLoading) return;

		// Add user message to local state
		messages = [...messages, { role: 'user', content: q }];
		question = '';
		isLoading = true;
		scrollToBottom();

		// Reset textarea height
		if (inputTextarea) {
			inputTextarea.style.height = 'auto';
		}

		// Build payload for Lambda:
		// - history = previous messages (without the latest user message)
		// - question = latest user message text
		const historyToSend = messages
			.slice(0, -1)          // drop the last user message
			.slice(-MAX_HISTORY);  // keep only last N messages for context

		const payload = {
			history: historyToSend,
			question: q
		};

		try {
			const res = await fetch(LAMBDA_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			if (!res.ok || !res.body) {
				const text = await res.text().catch(() => '');
				throw new Error(`Lambda error: ${res.status} ${text}`);
			}

			// Add assistant message placeholder (will be filled as we stream)
			messages = [...messages, { role: 'assistant', content: '' }];
			scrollToBottom();

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let full = '';

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				const chunk = decoder.decode(value, { stream: true });
				full += chunk;

				// Update the last message (assistant's response) as we stream
				messages = [
					...messages.slice(0, -1),
					{ role: 'assistant', content: full }
				];
				scrollToBottom();
			}
		} catch (e: unknown) {
			console.error(e);
			let msg = 'Unknown error';
			if (typeof e === 'string') {
				msg = e;
			} else if (e && typeof e === 'object' && 'message' in e) {
				const m = (e as { message?: unknown }).message;
				if (typeof m === 'string') msg = m;
			}
			error = msg;
			// Remove the empty assistant message on error (if it exists)
			if (messages[messages.length - 1]?.role === 'assistant' &&
				messages[messages.length - 1]?.content === '') {
				messages = messages.slice(0, -1);
			}
		} finally {
			isLoading = false;
		}
	}

	function handleInput() {
		if (inputTextarea) {
			inputTextarea.style.height = 'auto';
			inputTextarea.style.height = `${Math.min(inputTextarea.scrollHeight, 200)}px`;
		}
	}

	// Persist messages to localStorage whenever they change, but only after hydration
	let hasHydrated = false;
	$: if (hasHydrated) saveMessagesToStorage(messages);

 onMount(() => {
 	const stored = loadMessagesFromStorage();
 	if (stored && stored.length) {
 		messages = stored;
 	} else {
 		messages = [DEFAULT_GREETING];
 	}
 	hasHydrated = true;
 	scrollToBottom();
 });
 </script>

<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
	<div
		class="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl"
	>
		<div class="flex flex-col h-[calc(100vh-12rem)] max-h-[800px]">
			<!-- Header -->
			<div class="flex-shrink-0 pb-6 mb-6 border-b border-gray-200/50">
				<div class="flex items-center justify-between gap-3">
					<div>
						<h2 class="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Adam's AI Assistant</h2>
						<p class="text-gray-600 text-sm">Ask me anything about Adam's experience, skills, or tech topics</p>
					</div>
					<button
						type="button"
						on:click={clearChat}
						disabled={isLoading}
						class="px-3 sm:px-4 py-2 bg-white/80 border border-gray-200/70 text-gray-700 rounded-xl shadow-sm hover:bg-white hover:shadow transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
					>
						New chat
					</button>
				</div>
			</div>

			<!-- Chat Messages Container -->
			<div
				bind:this={chatContainer}
				class="flex-1 overflow-y-auto px-2 sm:px-4 py-4 space-y-4 scroll-smooth min-h-0"
			>
				{#each messages as message (message)}
					<div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3">
						{#if message.role === 'assistant'}
							<div
								class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
								AI
							</div>
						{/if}
						<div
							class="max-w-[85%] sm:max-w-[75%] lg:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm {message.role === 'user'
								? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
								: 'bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 text-gray-900'}"
						>
							<div class="whitespace-pre-wrap break-words leading-relaxed text-sm sm:text-base">
								{message.content || (isLoading && message.role === 'assistant' ? 'Thinking...' : '')}
							</div>
							{#if isLoading && message.role === 'assistant' && !message.content}
								<div class="flex gap-1.5 mt-3">
									<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
									<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
									<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
								</div>
							{/if}
						</div>
						{#if message.role === 'user'}
							<div
								class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
								You
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Error Message -->
			{#if error}
				<div class="flex-shrink-0 px-2 sm:px-4 py-3">
					<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
						<strong>Error:</strong> {error}
					</div>
				</div>
			{/if}

			<!-- Input Area -->
			<div class="flex-shrink-0 pt-4 mt-4 border-t border-gray-200/50">
				<form on:submit|preventDefault={askAssistant} class="flex gap-3 items-end">
					<div class="flex-1 relative">
						<textarea
							bind:this={inputTextarea}
							bind:value={question}
							on:input={handleInput}
							placeholder="Ask about Adam's experience, skills, or any tech topic..."
							disabled={isLoading}
							rows="1"
							class="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
							style="max-height: 200px; overflow-y: auto;"
						></textarea>
					</div>
					<button
						type="submit"
						disabled={isLoading || !question.trim()}
						class="flex-shrink-0 px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md flex items-center gap-2 text-sm sm:text-base"
					>
						{#if isLoading}
							<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							<span class="hidden sm:inline">Sending...</span>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
									 stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
							<span class="hidden sm:inline">Send</span>
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>