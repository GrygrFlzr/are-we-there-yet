<script>
    import { onMount } from 'svelte';

    const positionColors = {
        TL: 'bg-red-100 text-red-800 border-red-200',
        TLC: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        ENC: 'bg-green-100 text-green-800 border-green-200',
        ED: 'bg-blue-100 text-blue-800 border-blue-200',
        TM: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        TS: 'bg-purple-100 text-purple-800 border-purple-200',
        QC: 'bg-pink-100 text-pink-800 border-pink-200',
    };

    export let position;

    let innerWidth;
    let tooltip;
    let customTranslate = '';
    let rect;
    let shouldMoveLeft = false;
    let shouldMoveRight = false;

    onMount(() => {
        innerWidth = document.body.scrollWidth;
    });

    function recalculate() {
        rect = tooltip ? tooltip.getBoundingClientRect() : undefined;
    }

    $: colors =
        positionColors[position.acronym] ||
        'bg-gray-100 text-gray-800 border-gray-200';

    // prevent tooltip from escaping widget
    $: tooltip, recalculate();
    $: tooltipRightEdge = rect ? rect.width + rect.left : 0;
    $: shouldMoveLeft =
        shouldMoveLeft ||
        (rect && innerWidth ? tooltipRightEdge >= innerWidth - 4 : false);
    $: tooltipLeftEdge = rect ? rect.left : 5;
    $: shouldMoveRight =
        shouldMoveRight || (rect ? tooltipLeftEdge <= 4 : false);
    $: if (shouldMoveLeft) {
        customTranslate = '--tw-translate-x: -85%;';
    } else if (shouldMoveRight) {
        customTranslate = '--tw-translate-x: -15%;';
    } else {
        customTranslate = '';
    }
</script>

<span
    class="cursor-default group relative rounded border px-1 inline-block align-middle {colors}"
>
    <span>{position.acronym}</span>
    <!-- Tooltip -->
    <span
        bind:this={tooltip}
        class="z-50 rounded-sm px-2 py-1 pointer-events-none opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity shadow border text-xs absolute whitespace-nowrap left-1/2 transform bottom-6 text-center -translate-x-1/2 {colors}"
        style={customTranslate}
    >
        {position.name}
    </span>
</span>
