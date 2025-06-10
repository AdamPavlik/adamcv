<script lang="ts">
	import { certificates } from '$lib/components/data/certificate';
	import { onMount } from 'svelte';

	// State for the full-size image modal
	let showModal = false;
	let selectedImage = '';

	// Function to open the modal with the selected image
	function openImageModal(imageUrl: string) {
		selectedImage = imageUrl;
		showModal = true;
	}

	// Function to close the modal
	function closeModal() {
		showModal = false;
	}

	// Handle ESC key press to close modal
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}

	// Add and remove event listeners
	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h2 class="text-3xl font-bold mb-10 relative">
		<span class="inline-block pb-2 border-b-4 border-indigo-500">Certificates</span>
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each certificates as certificate}
			<div
				class="group bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 flex flex-col h-full overflow-hidden"
			>
				<!-- Certificate Image -->
				<div
					class="relative h-56 overflow-hidden cursor-pointer"
					on:click={() => openImageModal(certificate.imageUrl)}
				>
					<img
						alt={certificate.title}
						src={certificate.imageUrl}
						class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-12 w-12 text-white/80 transform transition-transform duration-300 group-hover:scale-125"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>

				<!-- Certificate Content -->
				<div class="p-5 flex flex-col flex-grow">
					<h3
						class="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 mb-2"
					>
						{certificate.title}
					</h3>
					<p class="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">{certificate.description}</p>

					<!-- Certificate Details -->
					<div class="space-y-2 mb-4">
						<div class="flex items-center text-xs text-gray-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 mr-2 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span class="font-medium">Issued:</span>
							<span class="ml-1">{certificate.issuedDate}</span>
						</div>
						{#if certificate.expirationDate}
							<div class="flex items-center text-xs text-gray-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 mr-2 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="font-medium">Expires:</span>
								<span class="ml-1">{certificate.expirationDate}</span>
							</div>
						{/if}
						<div class="flex items-center text-xs text-gray-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4 mr-2 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								/>
							</svg>
							<span class="font-medium">Issuer:</span>
							<span class="ml-1">{certificate.issuer}</span>
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200/80">
						<a
							href={certificate.verificationLink}
							target="_blank"
							rel="noopener noreferrer"
							class="flex-1 px-4 py-2 text-slate-900 font-medium bg-white/40 border border-slate-200/50 backdrop-blur-md rounded-lg hover:bg-white/60 transition-colors duration-300 inline-flex items-center justify-center text-center"
						>
							Verify
						</a>
						{#if certificate.pdfUrl}
							<a
								href={certificate.pdfUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-4 py-2 text-slate-700 font-medium bg-white/20 border border-slate-200/30 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors duration-300 inline-flex items-center justify-center text-center"
							>
								View PDF
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Full-size Image Modal -->
{#if showModal}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity duration-300"
		on:click={closeModal}
	>
		<div class="relative max-w-4xl w-full" on:click|stopPropagation>
			<!-- Close Button -->
			<button
				class="absolute -top-4 -right-4 z-10 p-2 bg-white shadow-lg text-gray-700 hover:text-red-600 rounded-full transition-all duration-200"
				on:click={closeModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Full-size Image -->
			<img src={selectedImage} alt="Certificate Full View" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
		</div>
	</div>
{/if}
