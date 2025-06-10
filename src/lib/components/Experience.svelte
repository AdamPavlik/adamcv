<script>
	import { experienceList } from '$lib/components/data/experience.ts';
</script>

<section class="container mx-auto px-0 sm:px-4 py-12">
	<h2 class="text-3xl font-bold mb-10 relative">
		<span class="inline-block pb-2 border-b-2 border-blue-600">Experience</span>
	</h2>

	<ol class="flex flex-col gap-10">
		{#each experienceList as experience, i (i)}
			<li class="group">
				<div
					class="flex flex-col md:flex-row gap-6 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:border-blue-200 transition-all duration-300 border border-gray-100 group-hover:border-blue-100">
					<!-- Company Logo -->
					<div class="flex-shrink-0 flex items-start justify-center md:w-28 md:border-r md:border-gray-100 md:pr-4">
						<div class="p-1 bg-white rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
							<img
								src="{experience.imageUrl}"
								alt="{experience.company} Logo"
								class="w-20 h-20 object-contain rounded-md">
						</div>
					</div>
					<!-- Content -->
					<div class="flex-grow">
						<div class="flex flex-col md:flex-row md:items-center justify-between mb-3">
							<h3
								class="text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">{experience.title}</h3>
							<time
								class="text-sm font-medium text-gray-700 mt-1 md:mt-0 bg-gray-50 px-3 py-1 rounded-full md:ml-2">{experience.timeRange}</time>
						</div>
						<h4 class="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">{experience.company}</h4>
						<p class="mb-5 text-gray-700 leading-relaxed">{experience.description}</p>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
							<!-- Responsibilities -->
							<div class="mb-4 bg-gray-50/70 p-4 rounded-lg">
								<h5 class="text-sm font-semibold text-gray-800 mb-2 flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-600" fill="none"
											 viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
									</svg>
									Key Responsibilities:
								</h5>
								<ul class="list-disc pl-5 space-y-1.5">
									{#each experience.responsibilities as responsibility, i (i)}
										<li class="text-sm text-gray-700">{responsibility}</li>
									{/each}
								</ul>
							</div>
							<!-- Achievements -->
							<div class="mb-4 bg-gray-50/70 p-4 rounded-lg">
								<h5 class="text-sm font-semibold text-gray-800 mb-2 flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-600" fill="none"
											 viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Key Achievements:
								</h5>
								<ul class="list-disc pl-5 space-y-1.5">
									{#each experience.achievements as achievement, i (i)}
										<li class="text-sm text-gray-700">{achievement}</li>
									{/each}
								</ul>
							</div>
						</div>
						<!-- Skills -->
						<div class="mt-4 pt-4 border-t border-gray-100">
							<h5 class="text-sm font-semibold text-gray-800 mb-2 flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-600" fill="none"
										 viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								Skills:
							</h5>
							<div class="flex flex-wrap gap-2">
								{#each experience.skills as skill, i (i)}
								<span
									class="px-3 py-1.5 bg-blue-50 text-blue-800 text-xs font-medium rounded-full transition-all duration-300 hover:bg-blue-100 hover:shadow-sm hover:-translate-y-0.5 inline-flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-blue-600" fill="none"
												 viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
														d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									{skill}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ol>
</section>
