<script lang="ts">
    import { firstTimeDialogState } from "$lib/state.svelte";
    import { buttonVariants } from "$lib/components/ui/button";
    import { init } from "$lib/game/loop.svelte";
    import * as Dialog from "$lib/components/ui/dialog/index.js";

    onMount(init);

    import { onMount } from "svelte";
</script>

<Dialog.Root bind:open={$firstTimeDialogState.shown}>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Welcome to Smasnug Factory Simulator!</Dialog.Title>
            <Dialog.Description>
                This game is in its early stages, so a lot of stuff isn't
                working. Expect bugs, glitches, random things not being
                implemented, edge cases, and unexpected behavior. Don't complain
                to me if you lose your progress. I'm probably not going to fix
                or change anything to be honest, because I have <a
                    class="underline"
                    href="https://github.com/Inglan?tab=repositories&type=source"
                >
                    better things to do.</a
                >
                <br />
                <br />
                Tip: Start by buying a factory.
            </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
            <Dialog.Close class={buttonVariants()}>Close</Dialog.Close>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
