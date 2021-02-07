<script>
    export let theme = 'light';
    export let header;
</script>

<div class:dark={theme === 'dark'}>
    <div class="app-card">
        <h1 class="app-card-header">
            {#if header}
                {header}
            {:else if theme === 'light'}
                Light theme
            {:else}
                Dark theme
            {/if}
        </h1>
        <slot />
    </div>
</div>

<style>
    .app-card {
        @apply px-8 pt-4 pb-8 flex flex-col gap-4 shadow-lg rounded-b-lg border-t-2;
        @apply bg-gray-50 dark:bg-gray-800;
        @apply border-purple-500 dark:border-red-700;
        @apply text-gray-700 dark:text-gray-50;
        @apply transition-colors;
    }
    .app-card-header {
        @apply text-4xl py-2 text-center;
        @apply transition-colors;
    }
</style>
