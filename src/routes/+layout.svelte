<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import { page } from '$app/stores';

</script>
<div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-white to-slate-100 text-gray-900 selection:bg-blue-200/60 selection:text-blue-800">
	<!-- Glassy floating nav -->
	<nav class="sticky top-3 z-40 mx-auto w-fit flex gap-4 px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm ring-1 ring-white/30 text-sm font-medium">
		<a href="/" class="px-2 py-1 rounded-full transition-colors { $page.url.pathname === '/' ? 'bg-blue-600/10 text-blue-800' : 'hover:bg-blue-50/60 hover:text-blue-700' }">Home</a>
		<a href="/about" class="px-2 py-1 rounded-full transition-colors { $page.url.pathname.startsWith('/about') ? 'bg-blue-600/10 text-blue-800' : 'hover:bg-blue-50/60 hover:text-blue-700' }">About</a>
		<a href="/experience" class="px-2 py-1 rounded-full transition-colors { $page.url.pathname.startsWith('/experience') ? 'bg-blue-600/10 text-blue-800' : 'hover:bg-blue-50/60 hover:text-blue-700' }">Experience</a>
		<a href="/certificate" class="px-2 py-1 rounded-full transition-colors { $page.url.pathname.startsWith('/certificate') ? 'bg-blue-600/10 text-blue-800' : 'hover:bg-blue-50/60 hover:text-blue-700' }">Certificates</a>
	</nav>

	<!-- Main content -->
	<main class="flex-1 p-4 sm:p-8">
		{@render children()}
	</main>
</div>
