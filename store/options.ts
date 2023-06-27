import {ref, readonly} from 'vue'

let option = ref("")
let closeOption = ref(false)

export default () => {
  function changeOption(value: string) {
     if(!value) {
      closeOption.value = false
      setTimeout(() => {
        option.value = "*"
      }, 500);
      
      
      
      return
     } 
  
    option.value = value
    closeOption.value = true
    //console.log(option.value)
  }

  return {
    option: readonly(option),
    changeOption,
    closeOption
  }
}
