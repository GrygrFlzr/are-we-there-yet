<script>
    import { createLocalization } from '$components/Lang';
    import { getContext } from 'svelte';

    const lang = getContext('lang');

    // look ahead for `{`
    // or look behind for `}`
    const splitRegex = /(?={)|(?<=})/g;

    let key = '';
    let fallbackKey = undefined;
    let className = '';
    export { key, fallbackKey, className as class };

    /**
     * @param {string} text
     */
    function splitString(text) {
        return text.split(splitRegex);
    }

    $: localization = createLocalization($lang);
    $: localize = localization.localize;
    $: text = localize(key, fallbackKey);
    $: pieces = splitString(text);
</script>

<div class={className}>
    {#each pieces as piece (piece)}
        {#if piece === '{0}'}
            <slot name="0" />
        {:else if piece === '{1}'}
            <slot name="1" />
        {:else if piece === '{2}'}
            <slot name="2" />
        {:else}
            {piece}
        {/if}
    {/each}
</div>
{#if false}<slot />{/if}
