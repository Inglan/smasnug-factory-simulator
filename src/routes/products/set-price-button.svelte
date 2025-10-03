<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import type { StateProduct } from "$lib/types";

    let { product }: { product: StateProduct } = $props();
</script>

<Button>Set price</Button>
