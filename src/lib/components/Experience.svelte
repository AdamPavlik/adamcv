<script lang="ts">
	import { experienceList } from '$lib/components/data/experience';
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
	<h2 class="text-3xl font-bold mb-10 relative">
		<span class="inline-block pb-2 border-b-4 border-indigo-500">Experience</span>
	</h2>

	<div class="relative">
		<!-- Vertical Timeline Bar -->
		<div class="hidden sm:block absolute left-6 -ml-px w-0.5 h-full bg-gray-200" aria-hidden="true" />

		<ol class="flex flex-col gap-12">
			{#each experienceList as experience}
				<li class="relative sm:pl-20">
					<!-- Logo and Timeline Dot -->
					<div
						class="hidden sm:flex absolute top-0 left-0 w-12 h-12 items-center justify-center"
					>
						<div
							class="w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center ring-4 ring-white/80"
						>
							<img
								src="{experience.imageUrl}"
								alt="{experience.company} Logo"
								class="w-10 h-10 object-contain rounded-md"
							/>
						</div>
					</div>

					<!-- Content Card -->
					<div
						class="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
					>
						<div class="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
							<h3 class="text-xl font-bold text-gray-900">{experience.title}</h3>
							<time
								class="text-sm font-medium text-gray-600 mt-1 sm:mt-0 bg-gray-100/80 px-3 py-1 rounded-full"
								>{experience.timeRange}</time
							>
						</div>
						<h4
							class="text-lg font-semibold text-indigo-700 mb-4 pb-3 border-b border-gray-200/80"
						>
							{experience.company}
						</h4>
						<p class="mb-5 text-gray-700 leading-relaxed">{experience.description}</p>
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
							<!-- Responsibilities -->
							<div class="bg-gray-50/60 p-4 rounded-xl border border-gray-200/80">
								<h5 class="font-semibold text-gray-800 mb-2 flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 mr-1.5 text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
									Key Responsibilities:
								</h5>
								<ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
									{#each experience.responsibilities as responsibility}
										<li>{responsibility}</li>
									{/each}
								</ul>
							</div>
							<!-- Achievements -->
							<div class="bg-gray-50/60 p-4 rounded-xl border border-gray-200/80">
								<h5 class="font-semibold text-gray-800 mb-2 flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 mr-1.5 text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Key Achievements:
								</h5>
								<ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
									{#each experience.achievements as achievement}
										<li>{achievement}</li>
									{/each}
								</ul>
							</div>
						</div>
						<!-- Skills -->
						<div class="mt-5 pt-4 border-t border-gray-200/80">
							<h5 class="font-semibold text-gray-800 mb-2 flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 mr-1.5 text-indigo-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
								Skills:
							</h5>
							<div class="flex flex-wrap gap-2">
								{#each experience.skills as skill}
									<span
										class="px-3 py-1 bg-blue-100/70 text-blue-800 text-xs font-medium rounded-full"
									>
										{skill}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
