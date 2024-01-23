<script lang="ts">
    import katex from "katex";
    export let math: string;
    export let displayMode: boolean = false;
    export let throwOnError: boolean = false;
    const macros = {
        "\\f": "#1f(#2)",
    };
    const options = {
        displayMode,
        throwOnError,
        macros,
    };
    $: katexString = katex.renderToString(math, options);
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css" integrity="sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI" crossorigin="anonymous">
</svelte:head>

<div class="w-full items-center">
    {@html katexString}
</div>