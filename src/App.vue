<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <div class="py-5 flex place-content-center header-light">
        <div class=" w-2/6">
          <div class="flex justify-between w-full py-14">
            <h1 class="text-white font-bold text-4xl tracking-widest">TODO</h1>
            <button type="button">
              <img :src="'/images/ICON-MOON.SVG'" class="w-6">
            </button>

          </div>
          <div class="bg-white flex rounded-lg px-4 py-3 gap-3">
            <div class="place-content-center self-center">
              <input type="checkbox" class="self-center checkbox-rounded border m-0 p-0">
            </div>
            <div class="place-content-center w-full self-center">
              <input type="text" placeholder="Create a new to do..." class="self-center text-gray-300 w-full leading-none">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.header-light{
  background-image: url("/images/bg-desktop-light.jpg");
  background-position: center;
  min-height: 280px;
}

.checkbox-rounded{
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50% !important;
  cursor: pointer;
  vertical-align: middle;
}
</style>


