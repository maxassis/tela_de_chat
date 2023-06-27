<template>
  <div class="container">
    <div :class="['external-container',  {'menu--open': closeOption}, {'chalist--open': chatlist }, {'messages--open' : messages && !menu}, {'menu-mobile--open': menu}]" >
      <Header />
      <div class="chat-list">
        <ChatsList/>
      </div>
      <div class="messages" >
        <Messages :showMenu="showMenu"/>
      </div>
      <div class="options">
        <Options />
      </div>
      <div class="menu">
        <SideMenu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import options from '@/store/options';
import {chatlist, messages} from '@/store/toggleScreen';
import { ref } from 'vue';

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: 'href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap',
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/balloon-css/balloon.min.css",
    }
  ],
})

const { closeOption } = options();

let menu = ref(false);
function showMenu() {
  menu.value = true
  console.log(menu.value)
}

</script>

<style scoped lang="scss">
.external-container {
  display: grid;
  grid-template-rows: 3.313rem calc(100% - 3.313rem);
 // grid-template-columns: 19.813rem minmax(39.375rem, 66.313rem) 0px 3.875rem;
  grid-template-columns: 19.813rem 1fr 0px 3.875rem;
  width: 100%;
  block-size: 100dvh;
  border: 1px solid#DEDEDE;
  border-block-start: 0;
  transition: grid-template-columns 0.5s linear;

  @media (max-width: 1440px) {
    border: 0;
  }
 
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 0px 0 0 !important;
  }    
}

.header {
  grid-column: 1/5;
  grid-row: 1 / 2;
}

.chat-list {
  grid-column: 1/2;
  grid-row: 2 / 3;
}

.messages {
  grid-column: 2/3;
  grid-row: 2 / 3;
  // overflow: hidden;
}

.options {
  grid-column: 3/4;
  grid-row: 2 / 3;
  overflow: hidden;

}

.menu {
  grid-column: 4/5;
  grid-row: 2 / 3;
  background-color: #FFF;

  @media (max-width: 1200px) {
    display: none;
    pointer-events: none;
  }
  
}

.menu--open {
   grid-template-columns: 19.813rem 1fr 19.813rem 3.875rem;
}

.menu-mobile--open {
  grid-template-columns: 0 1fr auto 0 !important;
}

.messages--open {

  @media(max-width: 1200px) {
    grid-template-columns: 0 1fr 0 0 !important;
 }
}

.chalist--open {

 @media(max-width: 910px) {
  grid-template-columns: 1fr 0 0 0 !important;
 }
}

</style>


