<script>
	import { certificates } from '$lib/components/data/certificate.ts';
	import { onMount } from 'svelte';

	// State for the full-size image modal
	let showModal = false;
	let selectedImage = '';

	// Function to open the modal with the selected image
	function openImageModal(imageUrl) {
		selectedImage = imageUrl;
		showModal = true;
	}

	// Function to close the modal
	function closeModal() {
		showModal = false;
	}

	// Handle ESC key press to close modal
	function handleKeydown(event) {
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

<section class="container mx-auto px-0 sm:px-4 py-12">
	<h2 class="text-3xl font-bold mb-10 relative">
		<span class="inline-block pb-2 border-b-2 border-blue-600">Certificates</span>
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each certificates as certificate, i (i)}
			<div class="group bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 overflow-hidden flex flex-col h-full">
				<!-- Certificate Image -->
				<div class="relative h-48 overflow-hidden flex items-center justify-center bg-gray-50">
					<img 
						alt="{certificate.title}" 
						src={certificate.imageUrl} 
						class="max-w-full max-h-48 object-contain transition-all duration-500 group-hover:scale-105 p-2 rounded border border-gray-200 cursor-pointer"
						on:click={() => openImageModal(certificate.imageUrl)}
					/>
				</div>

				<!-- Certificate Content -->
				<div class="p-5 flex flex-col flex-grow">
					<div class="mb-4">
						<h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300 mb-2 cursor-pointer" on:click={() => openImageModal(certificate.imageUrl)}>{certificate.title}</h3>
						<p class="text-sm text-gray-700 leading-relaxed mb-3">{certificate.description}</p>
					</div>

					<!-- Certificate Details -->
					<div class="mt-auto">
						<div class="flex flex-wrap gap-2 mb-4">
							<span class="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full inline-flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								{certificate.issuedDate}
							</span>
							{#if certificate.expirationDate}
								<span class="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full inline-flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Expires: {certificate.expirationDate}
								</span>
							{/if}
							<span class="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full inline-flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
								{certificate.issuer}
							</span>
						</div>

						<!-- Action Buttons -->
						<div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
							<a 
								href={certificate.verificationLink} 
								target="_blank" 
								rel="noopener noreferrer" 
								class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
							>
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Verify
							</a>
							{#if certificate.pdfUrl}
								<a 
									href={certificate.pdfUrl} 
									target="_blank" 
									rel="noopener noreferrer" 
									class="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300 inline-flex items-center"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
									View PDF
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Full-size Image Modal -->
{#if showModal}
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-black/70 transition-opacity duration-300" on:click={closeModal}>
	<div class="relative max-w-screen-lg max-h-screen" on:click|stopPropagation>
		<!-- Close Button -->
		<button 
			class="absolute -top-3 -right-3 z-10 p-2.5 bg-white shadow-lg hover:shadow-xl text-red-600 hover:text-red-700 rounded-full transition-all duration-200 border-2 border-red-200 hover:border-red-300 flex items-center justify-center"
			on:click={closeModal}
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Full-size Image -->
		<img 
			src={selectedImage} 
			alt="Certificate Full View" 
			class="max-w-full max-h-[90vh] object-contain bg-white p-2 rounded shadow-xl"
		/>
	</div>
</div>
{/if}
