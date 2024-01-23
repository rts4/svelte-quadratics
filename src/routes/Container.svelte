<script lang="ts">
    import CoefficientField from "./CoefficientField.svelte";
    import ClearButton from "./ClearButton.svelte";
    import Katex from "./Katex.svelte";
    import { roots, vertex, roundTwo } from "./calculation";

    let a = 0;
    let b = 0;
    let c = 0;
    $: {
        if (a > 999 || a < -999)
            a = 0;
        else if (b > 999 || b < -999)
            b = 0;
        else if (c > 999 || c < -999)
            c = 0;
    }
    $: calculatedRoots = roots(a, b, c);
    $: calculatedVertex = vertex(a, b, c);

    function clearValues() {
        a = 0;
        b = 0;
        c = 0;
    }
</script>

<div class="flex h-screen place-items-center">
    <div class="container mx-auto p-5 my-5 text-white rounded-3xl flex flex-wrap justify-center justify-items-center quicksand-reg" id="main-container">
        <h3 class="text-2xl rounded-3xl p-2" id="mid-section">Quadratic Calculator</h3>
        <br />
        <Katex math={"ax^2+bx+c\\implies x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"} displayMode />
        <br />
        <p class="w-full text-center p-1">Input the three coefficients in your relation in the fields below.</p>
        <CoefficientField bind:coefficient_value={a} coefficient_name="a" />
        <CoefficientField bind:coefficient_value={b} coefficient_name="b" />
        <CoefficientField bind:coefficient_value={c} coefficient_name="c" />
        <ClearButton on:clear_values={clearValues} />
        <br />
        <br />
        {#if a !== 0 && a !== null}
            <p class="w-full justify-center text-center p-4">Standard form: <Katex math={`\\f\\relax{x} = ${a === null ? 0 : a != 1 ? a : ""}x^2 ${b === null || b === 0 ? "" : (b == 1 || b == -1) ? `${b < 0 ? '-' : '+'} x` : b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`} ${c === null || c === 0 ? "" : c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`}`} /></p>
        {/if}
        {#if calculatedRoots !== null}
            {#if !(isNaN(calculatedRoots[0]) || isNaN(calculatedRoots[1]))}
                <p class="w-full justify-center text-center p-2">Factored form: <Katex math={`\\f\\relax{x} = ${a}(x ${calculatedRoots[0] < 0 ? `+ ${Math.abs(roundTwo(calculatedRoots[0]))}` : `- ${roundTwo(calculatedRoots[0])}`})(x ${calculatedRoots[1] < 0 ? `+ ${Math.abs(roundTwo(calculatedRoots[1]))}` : `- ${roundTwo(calculatedRoots[1])}`})`} /></p>
            {/if}
        {/if}
        {#if calculatedVertex !== null}
            {#if !(isNaN(calculatedVertex[0]) || isNaN(calculatedVertex[1]))}
                <p class="w-full justify-center text-center p-2">Vertex form: <Katex math={`\\f\\relax{x} = ${a}(x ${calculatedVertex[0] < 0 ? `+ ${Math.abs(roundTwo(calculatedVertex[0]))}` : `- ${roundTwo(calculatedVertex[0])}`})^2 ${calculatedVertex[1] < 0 ? `- ${Math.abs(roundTwo(calculatedVertex[1]))}` : `+ ${roundTwo(calculatedVertex[1])}`}`} /></p>
            {/if}
        {/if}
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: rgb(15, 15, 15);
        overflow: scroll;
    }
    #main-container {
        background-color: rgb(30, 30, 30);
    }
    #mid-section {
        background-color: rgb(45, 45, 45);
    }
    .quicksand-reg {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
</style>