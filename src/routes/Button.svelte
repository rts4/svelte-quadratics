<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function fireClickEvent() {
        dispatch("submit", true);
    }
</script>

<button class="btn btn-primary" on:click={fireClickEvent}>
    Calculate
</button>