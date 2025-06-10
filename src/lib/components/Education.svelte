<script lang="ts">
	import { education } from '$lib/components/data/education';
</script>

<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
	<h2 class="text-3xl font-bold mb-10 relative">
		<span class="inline-block pb-2 border-b-4 border-indigo-500">Education</span>
	</h2>

	<div
		class="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500"
	>
		<div class="flex flex-col sm:flex-row items-center gap-6">
			<div class="flex-shrink-0">
				<div
					class="w-24 h-24 p-2 bg-white rounded-lg shadow-md flex items-center justify-center ring-4 ring-white/80"
				>
					<img
						src={education.logoUrl}
						alt="{education.university} Logo"
						class="max-w-full max-h-full object-contain"
					/>
				</div>
			</div>
			<div class="flex-grow text-center sm:text-left">
				<h3 class="text-2xl font-bold text-gray-900">{education.university}</h3>
				<p class="text-lg text-slate-700 mt-1">{education.degree}</p>
				<p class="text-md text-slate-500 mt-2">{education.years}</p>
			</div>
		</div>
	</div>
</section> 