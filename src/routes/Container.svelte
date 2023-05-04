<script lang="ts">
    import CoefficientField from "./CoefficientField.svelte";
    import Button from "./Button.svelte";
    import Katex from "svelte-katex";

    let a = 0;
    let b = 0;
    let c = 0;
</script>

<div class="container-md bg-secondary text-white p-5 my-5 mx-auto">
    <h3>Quadratic Calculator</h3>
    <br />
    <p>Input the three coefficients in your relation in the fields below.</p>
    <CoefficientField bind:coefficient_value={a} coefficient_name="a" />
    <CoefficientField bind:coefficient_value={b} coefficient_name="b" />
    <CoefficientField bind:coefficient_value={c} coefficient_name="c" />
    <Button />
    <br />
    <br />
    <p>Standard form: <Katex>f(x) = x^2</Katex></p>
    <p>Factored form: <Katex>f(x) = (x + 1.5)(x + 3)</Katex></p>
    <p>Vertex form: <Katex>f(x) = (x - 3)^2 + 7</Katex></p>
</div>