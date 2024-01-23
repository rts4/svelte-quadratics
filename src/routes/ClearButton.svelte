<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const clearDispatch = createEventDispatcher();
    function handleClearEvent() {
        clearDispatch("clear_values");
    }
</script>

<button class="p-2 rounded-3xl border border-red-600" on:click={handleClearEvent}>Clear Values</button>

<style lang="postcss">
    button {
        background-color: rgb(20, 20, 20);
    }
    button:hover {
        background-color: rgb(10, 10, 10);
    }
    button:active {
        background-color: rgb(5, 5, 5);
    }
</style>