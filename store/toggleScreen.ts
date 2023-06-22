import { ref } from 'vue'

export let chatlist = ref(false)
export let messages = ref(false)

export default () => {
  function changeScreen(value: string) {
  
    if(value === "chatlist") {
      chatlist.value = true
      messages.value = false
    } else {
      chatlist.value = false
      messages.value = true
    }
    //console.log("chatlist", chatlist, "messages", messages)
  }

  return {
    changeScreen
  }
}