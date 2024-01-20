<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData


</script>

<!-- Displays most recent blog post -->
<div>
    {#each data.posts as {title, content, Id }}
        {#if Id > data.posts.length - 1}
            <h1>{title}</h1>
            <p>{content}</p>
        {/if}
    {/each}
</div>