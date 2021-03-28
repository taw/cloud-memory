<script>
  export let hidden;
  export let tile;
  export let onclick;
  export let good;
</script>

<style>
.tile {
  width: 15vmin;
  height: 15vmin;
  line-height: 15vmin;
  text-align: center;
  font-size: 5vmin;
  cursor: pointer;
  position: relative;

  perspective: 1000px;
  transform-style: preserve-3d;
  transition: 0.5s ease;
}

.hidden {
  transform: rotateY(180deg);
}

.tile * {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.front {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(40, 150, 229);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
}

.good .front {
  background: rgb(41, 233, 169);
}

.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(228, 117, 228);
  transform: rotateY(180deg);
}

img {
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>

<div class="tile" class:hidden class:good on:click={onclick}>
  <div class="back">☁️🐈</div>
  <div class="front">
    <img src="pics/{tile}"/>
  </div>
</div>
