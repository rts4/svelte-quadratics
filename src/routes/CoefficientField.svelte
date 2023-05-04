<script lang="ts">
    export let coefficient_name: string;
    export let coefficient_value: number;
</script>

<div class="input-group mb-3 mx-auto">
    <span class="input-group-text">{coefficient_name}</span>
    <input type="number" bind:value={coefficient_value} class="form-control" placeholder="Coefficient {coefficient_name}" />
</div>