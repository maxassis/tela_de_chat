import {ref, readonly} from 'vue'

let option = ref("user")
let closeOption = ref(false)

export default () => {
  function changeOption(value: string) {
     if(!value) {
      closeOption.value = false
      option.value = "*"
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
