<script>
  import Tile from "./Tile.svelte";

  export let board;
  export let onclick;

  let board2 = (board.length <= 4);
  let board4 = (board.length <= 16 && board.length > 4);
  let board6 = (board.length > 16);
</script>

<style>
.board {
  display: inline-grid;
  text-align: center;
  gap: 5px;
  padding: 5px;
  background: rgb(171, 120, 17);
  margin: auto;
}

.board.board2 {
  /* width: calc(2*205px - 5px); */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.board.board4 {
  /* width: calc(4*205px - 5px); */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.board.board6 {
  /* width: calc(6*205px - 5px); */
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
</style>

<div class="board" class:board2 class:board4 class:board6>
  {#each board as {tile, state}, i}
    <Tile
      tile={tile}
      good={state === "known"}
      hidden={state === "hidden"}
      onclick={() => onclick(i)}
    />
  {/each}
</div>
