import { ref, watch } from "vue";
import axios from "axios";
export function useTask(base_url: string) {
  const newTask = ref<string>("");
  const addTask = ref<boolean>();
  const tasks = ref([]);
  const sort = ref("");

  axios.get(base_url).then(function (response) {
    // handle success
    tasks.value = response.data.tasks;
  });

  //add a new task
  watch(addTask, () => {
    if (addTask.value) {
      let currentDate = new Date().getTime();
      axios
        .post(base_url, {
          name: newTask.value,
          status: "active",
        })
        .then(function (response) {
          // console.log(response)
          tasks.value = response.data.tasks;
          newTask.value = "";
          addTask.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  //delete a to do list
  const deleteTodo = (id: number) => {
    axios
      .delete(base_url + "/" + id)
      .then(function (response) {
        tasks.value = response.data.tasks;
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //mark a todo as complete
  const markComplete = (id: number) => {
    axios
      .patch(base_url + "/" + id)
      .then(function (response) {
        tasks.value = response.data.tasks;
        //console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //clear all completed tasks
  const clearComplete = () => {
    axios
      .get(base_url + "/clearComplete")
      .then(function (response) {
        //console.log(response)
        tasks.value = response.data.tasks;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //sort to do list
  watch(sort, () => {
    axios
      .get(base_url, {
        params: {
          sort: sort.value,
        },
      })
      .then(function (response) {
        // handle success
        //console.log(sort)
        tasks.value = response.data.tasks;
      });
  });

  return {
    newTask,
    addTask,
    tasks,
    deleteTodo,
    markComplete,
    clearComplete,
    sort,
  };
}
