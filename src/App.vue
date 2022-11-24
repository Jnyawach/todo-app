<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <div class="py-3 flex place-content-center header-light">
        <div class=" w-2/6">
          <div class="flex justify-between w-full py-14">
            <h1 class="text-white font-bold text-4xl tracking-widest">TODO</h1>
            <button type="button">
              <img :src="'/images/ICON-MOON.SVG'" class="w-6">
            </button>

          </div>
          <div class="bg-white flex rounded-lg p-4 gap-5 shadow-2xl">
            <div class="place-content-center self-center">
              <div class="round">
                <input type="checkbox" checked id="checkbox" />
                <label for="checkbox"></label>
              </div>
            </div>
            <div class="place-content-center w-full self-center">
              <input type="text" placeholder="Create a new to do..." class="self-center text-gray-300
              w-full leading-none focus:border-0 focus:outline-0 text-gray-300">
            </div>
          </div>
          <!---Available tasks-->
          <div class="bg-white rounded-lg mt-5 divide-y">
            <div class="flex p-4 gap-5 ">
              <div class="place-content-center self-center">
                <div class="round">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center self-center">
                <div class="round">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center self-center">
                <div class="round">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center self-center">
                <div class="round">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 ">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center self-center">
                <div class="round">
                  <input type="checkbox"  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 ">Complete Todo App on Frontend Mentor</p>
              </div>
            </div>
            <div class="flex justify-between p-3 todo-footer">
              <div class="self-center">
                <p class="text-sm font-semibold">10 items left</p>
              </div>
              <div class="flex gap-2">
                <div>
                  <input type="radio" class="hidden peer" id="all-lists" name="sort">
                  <label for="all-lists" class="cursor-pointer hover:text-bright-100 peer-checked:text-bright-100 text-sm font-semibold">All</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="active-lists" name="sort">
                  <label for="active-lists" class="cursor-pointer hover:text-bright-100 peer-checked:text-bright-100 text-sm font-semibold">Active</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="complete-lists" name="sort">
                  <label for="complete-lists" class="cursor-pointer hover:text-bright-100 peer-checked:text-bright-100 text-sm font-semibold">Completed</label>
                </div>
              </div>
              <div>
                <button class="text-sm font-semibold">Clear Completed</button>
              </div>

            </div>
          </div>

          <!-- End of available tasks-->
          <!-- Drag to reorder list-->
          <div class="mt-9">
            <p class="text-center font-semibold text-blue-200 text-sm">Drag and drop to reorder lists</p>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.header-light{

  min-height: 100vh;
  background: linear-gradient(0deg, #d2d3db 70%, rgba(0, 0, 0, 0) 30%), url('/images/bg-desktop-light.jpg');
}

/*checkbox styling*/

.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #9394a5;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #57ddff;
  background: linear-gradient(110deg, #57ddff 0%, #c186de 70%);
  border: none;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

input[type="text"]::placeholder{
  color: #9394a5;
}
.todo-footer{
  color:#9394a5 ;
}
</style>


