<script lang="ts">
	import type { LayoutData } from './$types'
	export let data: LayoutData
</script>

<div class="wrapper">
	<article class="content">
		<main>
			<slot />
		</main>
	</article>
	<article>
		<aside class="side">
			{#each data.posts as { slug, title }}
				<li>
					<i><a href="/posts/{slug}">{title}</a></i>
				</li>
			{/each}
		</aside>
	</article>
	<div class="ad"></div>
	<footer class="main-footer">
		<i>cameron mac</i>
	</footer>
</div>

<style>
	.wrapper {
		display: grid;
		gap: 20px;
		grid-template-areas:
			'content'
			'sidebar'
			'ad'
			'footer';
	}
	.content {
		grid-area: content;
	}
	.side {
		grid-area: sidebar;
		justify-content: left;
	}

	.side li a {
		font-size: 0.8rem;
	}
	.ad {
		grid-area: ad;
	}
	.main-footer {
		grid-area: footer;
	}

	@media (min-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr 3fr;
			grid-template-areas:
				'sidebar content'
				'ad      footer';
		}

		.side {

		}
	}
	.content {
		margin-bottom: 2rem;
	}


</style>
