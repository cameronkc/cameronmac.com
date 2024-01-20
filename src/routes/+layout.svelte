<script lang="ts">
	import { page } from '$app/stores';
    import '../app.css'

</script>

<svelte:head>
	<title>{$page.data.post?.title || 'cameronmac'}</title>
</svelte:head>
<nav>
	<ul>
		<li>
			<a href="/">home</a>
		</li>
		<li>
			<a href="/posts">posts</a>
		</li>
	</ul>
</nav>
<body>
<slot />
</body>

<style>
	a {
		text-decoration: underline;
	}
</style>