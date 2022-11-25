<script setup lang="ts">
import { useDark,useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <main>
    <div>
      <div class="py-3 flex place-content-center  px-4" :class="isDark?'header-dark':'header-light'">
        <div class="sm:w-3/4 md:w-2/4 lg:w-2/6">
          <div class="flex justify-between w-full py-8 lg:py-14">
            <h1 class="text-white font-bold text-3xl tracking-widest">TODO</h1>
            <button type="button" @click="toggleDark()" class="transition-all text-white text-xl">
              <span v-if="isDark"><i class="fa-solid fa-sun-bright"></i></span>
              <span v-else><i class="fa-solid fa-moon"></i></span>
            </button>

          </div>
          <div class="bg-gray-50 dark:bg-blue-500 flex rounded-lg p-4 gap-3 shadow-2xl">
            <div class="place-content-center">
              <label>
                <input type="checkbox" class="hidden peer ">
                <div class="border-2 border-gray-300 dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                  <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                </div>
              </label>
            </div>
            <div class="place-content-center w-full self-center">
              <input type="text" placeholder="Create a new to do..." class="text-gray-300 placeholder-gray-300
              w-full leading-none focus:border-0 focus:outline-0 bg-transparent
              dark:text-blue-200 dark:placeholder-blue-200">
            </div>
          </div>
          <!---Available tasks-->
          <div class="bg-gray-50 rounded-lg mt-5 divide-y dark:bg-blue-500 dark:divide-blue-400 shadow-xl">
            <div class="flex p-4 gap-5 ">
              <div class="place-content-center">
                <label>
                  <input type="checkbox" class="hidden peer">
                  <div class="border-2 border-gray-300 dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                    <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                  </div>
                </label>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center">
                <label>
                  <input type="checkbox" class="hidden peer">
                  <div class="border-2 border-gray-300 dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                    <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                  </div>
                </label>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center">
                <label>
                  <input type="checkbox" class="hidden peer">
                  <div class="border-2 border-gray-300 dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                    <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                  </div>
                </label>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center">
                <label>
                  <input type="checkbox" class="hidden peer">
                  <div class="border-2 border-gray-300  dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                    <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                  </div>
                </label>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300">Complete the assignment</p>
              </div>
            </div>
            <div class="flex p-4 gap-5">
              <div class="place-content-center">
                <label>
                  <input type="checkbox" class="hidden peer">
                  <div class="border-2 border-gray-300  dark:border-blue-300 rounded-full flex h-5
                w-5 place-content-center peer-checked:[&>span]:flex cursor-pointer check
                 peer-checked:border-0 peer-checked:bg-gradient-to-r from-secondary-100 to-secondary-200">
                    <span class="text-white  self-center hidden text-sm"><i class="fas fa-check"></i></span>
                  </div>
                </label>
              </div>
              <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300">Complete Todo App on Frontend Mentor</p>
              </div>
            </div>
            <div class="flex justify-between p-3 todo-footer">
              <div class="self-center">
                <p class="text-sm font-semibold text-gray-300 dark:text-gray-400">10 items left</p>
              </div>
              <div class="flex gap-2 hidden md:flex ">
                <div>
                  <input type="radio" class="hidden peer" id="all-lists" name="sort">
                  <label for="all-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">All</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="active-lists" name="sort">
                  <label for="active-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">Active</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="complete-lists" name="sort">
                  <label for="complete-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">Completed</label>
                </div>
              </div>
              <div>
                <button class="text-sm font-semibold text-gray-300 hover:text-blue-600">Clear Completed</button>
              </div>

            </div>
          </div>

          <!-- End of available tasks-->
          <div class="flex gap-2 justify-center md:hidden bg-gray-50 dark:bg-blue-500 shadow-xl mt-5 p-3 rounded-lg font-bold">
            <div>
              <input type="radio" class="hidden peer" id="all-lists2" name="sort">
              <label for="all-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">All</label>
            </div>
            <div>
              <input type="radio" class="hidden peer" id="active-lists2" name="sort">
              <label for="active-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">Active</label>
            </div>
            <div>
              <input type="radio" class="hidden peer" id="complete-lists2" name="sort">
              <label for="complete-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 peer-checked:text-bright-100 text-sm font-semibold">Completed</label>
            </div>
          </div>
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
  background: linear-gradient(0deg, #d2d3db 78%, rgba(0, 0, 0, 0) 22%), url('/images/bg-desktop-light.jpg');
  background-repeat: no-repeat;
}

.header-dark{
  min-height: 100vh;
  background: linear-gradient(0deg, #161722 78%, rgba(0, 0, 0, 0) 22%), url('/images/bg-desktop-dark.jpg');
  background-repeat: no-repeat;
}
/*
Media withs
*/
@media only screen and (max-width: 375px){
.header-light{
  background: linear-gradient(0deg, #d2d3db 75%, rgba(0, 0, 0, 0) 25%), url('/images/bg-mobile-light.jpg');
  background-repeat: no-repeat;
  background-size: cover;

}
  .header-dark{
    background: linear-gradient(0deg, #d2d3db 75%, rgba(0, 0, 0, 0) 25%), url('/images/bg-mobile-dark.jpg');
    background-repeat: no-repeat;
    background-size: cover;

  }
}



</style>


