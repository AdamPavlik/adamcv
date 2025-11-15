<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
</script>

<div
class="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-white to-slate-100 text-gray-900 selection:bg-blue-200/60 selection:text-blue-800"
>
	<!-- Glassy floating nav -->
	<nav
		class="sticky top-3 z-40 mx-auto w-fit flex gap-2 sm:gap-4 px-3 sm:px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm ring-1 ring-white/30 text-sm font-medium"
	>
		<a
			href={resolve('/')}
			class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors {$page.url.pathname === '/'
				? 'bg-blue-600/10 text-blue-800'
				: 'hover:bg-blue-50/60 hover:text-blue-700'}"
		>
			<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			</svg>
			<span class="hidden sm:inline">Home</span>
		</a>
		<a
			href={resolve('/about')}
			class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors {$page.url.pathname.startsWith('/about')
				? 'bg-blue-600/10 text-blue-800'
				: 'hover:bg-blue-50/60 hover:text-blue-700'}"
		>
			<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			</svg>
			<span class="hidden sm:inline">About</span>
		</a>
		<a
			href={resolve('/assistant')}
			class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors {$page.url.pathname.startsWith('/assistant')
				? 'bg-blue-600/10 text-blue-800'
				: 'hover:bg-blue-50/60 hover:text-blue-700'}"
		>
			<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
			<span class="hidden sm:inline">AI Assistant</span>
		</a>
		<a
			href={resolve('/experience')}
			class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors {$page.url.pathname.startsWith('/experience')
				? 'bg-blue-600/10 text-blue-800'
				: 'hover:bg-blue-50/60 hover:text-blue-700'}"
		>
			<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
			<span class="hidden sm:inline">Experience</span>
		</a>
		<a
			href={resolve('/certificate')}
			class="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-colors {$page.url.pathname.startsWith('/certificate')
				? 'bg-blue-600/10 text-blue-800'
				: 'hover:bg-blue-50/60 hover:text-blue-700'}"
		>
			<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
			</svg>
			<span class="hidden sm:inline">Certificates</span>
		</a>
	</nav>

	<!-- Main content -->
	<main class="flex-1 w-full max-w-full md:max-w-[90%] mx-auto px-0 sm:px-4 sm:pt-0 mt-0 sm:mt-2">
		{@render children()}
	</main>
</div>
