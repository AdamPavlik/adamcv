<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>
<div class="flex flex-row">
	<!-- Main Content Area -->
	<div class="flex-1 p-2 sm:p-6 overflow-auto">
		{@render children()}
	</div>
</div>
