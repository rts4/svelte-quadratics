<script lang="ts">
    export let coefficient_name: string;
    export let coefficient_value: number;
</script>

<div class="w-full justify-center items-center p-3 flex">
    <span class="rounded-l-3xl px-3 border border-gray-500">{coefficient_name}</span>
    <input type="number" bind:value={coefficient_value} class="px-3 rounded-r-3xl border border-gray-500" placeholder="Coefficient {coefficient_name}" />
</div>

<style lang="postcss">
    input[type=number] {
        background-color: rgb(20, 20, 20);
        -moz-appearance: textfield;
    }
    span {
        background-color: rgb(45, 45, 45);
    }
</style>