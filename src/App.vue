<script setup lang="ts">
import { useDark,useToggle } from "@vueuse/core";
import axios from "axios";
import {ref, watch} from "vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const newTask=ref('')
const tasks=ref(null)
const error=ref(null)
const sort=ref('')
const base_url='http://127.0.0.1:8000/api/todos'

//create new to do list
const addTask=ref('')
axios.get(base_url)
    .then(function (response) {
      // handle success
      tasks.value=response.data.tasks;
      
    })
//create new row
watch(addTask, ()=>{
  if (addTask.value){
    let currentDate=new Date().getTime()
    axios.post(base_url, {
      name:newTask.value,
      status:'active'
    })
        .then(function (response) {
          tasks.value=response.data.tasks;
          newTask.value='';
          addTask.value='';

        })
        .catch(function (error) {
          console.log(error);
        });

  }
})
//sort to do list
watch(sort, ()=>{
  axios.get(base_url,{
    params:{
      sort:sort.value
    }
  })
  .then(function (response) {
      // handle success
      //console.log(sort)
      tasks.value=response.data.tasks;
     
    })
})

//delete a todo list

let deleteTodo=(id)=>{
  axios.delete(base_url+'/'+id)
  .then(function(response){
    tasks.value=response.data.tasks;
   // console.log(response)
  })
  .catch(function (error) {
          console.log(error);
        });
}

//clear all completed tasks
const clearComplete=()=>{
  axios.get(base_url+'/clearComplete')
  .then(function(response){
    console.log(response)
    tasks.value=response.data.tasks;
   
  })
  .catch(function (error) {
          console.log(error);
        });
}

//mark a todo as complete
const markComplete=(id)=>{
  
  axios.patch(base_url+'/'+id)
  .then(function(response){
    tasks.value=response.data.tasks;
    console.log(response)
  })
  .catch(function (error) {
          console.log(error);
        });
}

//draging
const startDrag=(event, task)=>{
  console.log(task)
  event.dataTransfer.dropEffect='move'
  event.dataTransfer.dropAllowed='move'
  event.dataTransfer.setData('taskId',task.id)
}

const onDrop=(event,level)=>{
  const taskId=event.dataTransfer.getData('taskId')
  const task=tasks.value.find((task)=>task.id==taskId)
  task.id=level
}


</script>

<template>
  
  <main>
    <div>
      <div class="py-3 flex place-content-center  px-4" :class="isDark?'header-dark':'header-light'">
        <div class="w-full md:w-2/4 lg:w-2/6">
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
                <input type="checkbox" class="hidden peer " :disabled="!newTask" v-model="addTask">
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
              dark:text-blue-200 dark:placeholder-blue-200" v-model="newTask">
            </div>
          </div>
          <!---Available tasks-->
          <div class="bg-gray-50 w-full rounded-lg mt-5 divide-y dark:bg-blue-500 dark:divide-blue-400 shadow-xl">
            
              <div v-for="task in tasks" class="flex p-4 gap-3 w-full" :key="task.id" draggable="true" 
              @dragstart="startDrag($event, task)" @drop="onDrop($event,1)" @dragenter.prevent @dragover.prevent>
              
              <div class="place-content-center">
                <div  class="border-2 border-gray-300 dark:border-blue-300 rounded-full flex h-5
                  w-5 place-content-center  cursor-pointer" :class="task.status=='complete'?'border-0 bg-gradient-to-r from-secondary-100 to-secondary-200':''"
                   @click="markComplete(task.id)">        
                      <span class=" text-white text-sm self-center" :class="task.status=='complete'?'flex':'hidden'">
                        <i class="fas fa-check"></i>
                        </span>
                      
                </div>
               
              </div>
              <div class="flex justify-between w-full">
                <div class="place-content-center w-full self-center">
                <p class="text-gray-400 text-sm md:text-base dark:text-gray-300 self-center" :class="task.status=='complete'?'line-through':''">{{task.name}}</p>
                </div>
               <!--delete task-->
                <div class="place-content-center self-center text-end ">
                  <button class="text-lg dark:text-gray-300 text-gray-400 " @click="deleteTodo(task.id)">
                  <span><i class="fa-light fa-xmark"></i></span>
                   </button>
               </div>
              </div>
              </div>
   
            <div class="flex justify-between p-3 todo-footer">
            
              <div class="self-center">
                <p class="text-sm font-semibold text-gray-300 dark:text-gray-400">10 items left</p>
              </div>
              <div class="gap-2 hidden md:flex ">
                <div>
                  <input type="radio" class="hidden peer" id="all-lists"  value="" v-model="sort">
                  <label for="all-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">All</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="active-lists"  value="active" v-model="sort">
                  <label for="active-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">Active</label>
                </div>
                <div>
                  <input type="radio" class="hidden peer" id="complete-lists"  value="complete" v-model="sort">
                  <label for="complete-lists" class="cursor-pointer text-gray-300 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">Completed</label>
                </div>
              </div>
              <div>
                <button class="text-sm font-semibold text-gray-300 hover:text-blue-600 dark:hover:text-white" @click="clearComplete">Clear Completed</button>
              </div>

            </div>

          </div>

          <!-- End of available tasks-->
          <div class="flex gap-2 justify-center md:hidden bg-gray-50 dark:bg-blue-500 shadow-xl mt-5 p-3 rounded-lg font-bold">
            <div>
              <input type="radio" class="hidden peer" id="all-lists2"  value="" v-model="sort">
              <label for="all-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">All</label>
            </div>
            <div>
              <input type="radio" class="hidden peer" id="active-lists2"  value="active" v-model="sort">
              <label for="active-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">Active</label>
            </div>
            <div>
              <input type="radio" class="hidden peer" id="complete-lists2"  value="complete" v-model="sort">
              <label for="complete-lists2" class="cursor-pointer text-gray-300 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white peer-checked:text-bright-100 text-sm font-semibold">Completed</label>
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
  background: linear-gradient(0deg, #d2d3db 82%, rgba(0, 0, 0, 0) 18%), url('/images/bg-desktop-light.jpg');
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
  background: linear-gradient(0deg, #d2d3db 76%, rgba(0, 0, 0, 0) 24%), url('/images/bg-mobile-light.jpg');
  background-repeat: no-repeat;
  

}
  .header-dark{
    background: linear-gradient(0deg, #d2d3db 76%, rgba(0, 0, 0, 0) 24%), url('/images/bg-mobile-dark.jpg');
    background-repeat: no-repeat;
    

  }
}



</style>


