import {ref, readonly} from 'vue'

export const option = ref("")

export default () => {

  function changeOption(value: string) {
    option.value = value
    //console.log(option.value)
  }

  return {
    option: readonly(option),
    changeOption
  }
}
