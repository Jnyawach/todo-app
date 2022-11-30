import { ref } from "vue"
import axios from "axios"
export function useDrag(base_url:string, tasks:any) {
    const oldIndex = ref('')
    const newIndex = ref('')
    const tasksNew=ref(tasks)
    const onEnd=(evt:any) => {
        // console.log(evt)
         oldIndex.value=evt.oldIndex;
         newIndex.value=evt.newIndex;
         tasksNew.value.map((task:any, index:any) => {
             task.order=index+1
           
         })
        // console.log(tasksNew.value)
         axios.post(base_url+'/updateAll',{
           tasks:tasksNew.value
         })
         .then(function(response){
        
       //console.log(response)
       })
     }

    return{ 
        oldIndex,
        newIndex,
        onEnd
    }
}