<script lang="ts">
    import CoefficientField from "./CoefficientField.svelte";
    import Button from "./Button.svelte";
    import Katex from "./Katex.svelte";
    import { roots, vertex, roundTwo } from "./calculation";

    let a = 0;
    let b = 0;
    let c = 0;
    $: calculatedRoots = roots(a, b, c);
    $: calculatedVertex = vertex(a, b, c);
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>Quadratic Calculator</h3>
    <br />
    <Katex math={"ax^2+bx+c\\implies x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"} displayMode />
    <br />
    <p>Input the three coefficients in your relation in the fields below.</p>
    <CoefficientField bind:coefficient_value={a} coefficient_name="a" />
    <CoefficientField bind:coefficient_value={b} coefficient_name="b" />
    <CoefficientField bind:coefficient_value={c} coefficient_name="c" />
    <br />
    <p>Standard form: <Katex math={`\\f\\relax{x} = ${a === null ? 0 : a != 1 ? a : ""}x^2 ${b === null || b === 0 ? "" : (b == 1 || b == -1) ? `${b < 0 ? '-' : '+'} x` : b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`} ${c === null || c === 0 ? "" : c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`}`} /></p>
    {#if calculatedRoots !== null}
        {#if !(isNaN(calculatedRoots[0]) || isNaN(calculatedRoots[1]))}
            <p>Factored form: <Katex math={`\\f\\relax{x} = (x ${calculatedRoots[0] < 0 ? `+ ${Math.abs(roundTwo(calculatedRoots[0]))}` : `- ${roundTwo(calculatedRoots[0])}`})(x ${calculatedRoots[1] < 0 ? `+ ${Math.abs(roundTwo(calculatedRoots[1]))}` : `- ${roundTwo(calculatedRoots[1])}`})`} /></p>
        {/if}
    {/if}
    {#if calculatedVertex !== null}
        {#if !(isNaN(calculatedVertex[0]) || isNaN(calculatedVertex[1]))}
            <p>Vertex form: <Katex math={`\\f\\relax{x} = (x ${calculatedVertex[0] < 0 ? `+ ${Math.abs(roundTwo(calculatedVertex[0]))}` : `- ${roundTwo(calculatedVertex[0])}`})^2 ${calculatedVertex[0] < 0 ? `- ${Math.abs(roundTwo(calculatedVertex[1]))}` : `+ ${roundTwo(calculatedVertex[1])}`}`} /></p>
        {/if}
    {/if}
</div>