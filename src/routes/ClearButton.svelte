<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const clearDispatch = createEventDispatcher();
    function handleClearEvent() {
        clearDispatch("clear_values");
    }
</script>

<button class="btn btn-danger" on:click={handleClearEvent}>Clear Values</button>