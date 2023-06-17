<template>
  <div class="container">
    <div :class="['external-container',  {'menu--open': option !== ''}]">
      <Header />
      <div class="chat-list">
        <ChatsList />
      </div>
      <div class="messages">
        <Messages />
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
import {option} from './store/options';


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
  ],
});

console.log("main", option.value)
</script>

<style scoped lang="scss">
.external-container {
  display: grid;
  grid-template-rows: 3.313rem calc(100% - 3.313rem);
  grid-template-columns: 19.813rem minmax(39.375rem, 66.313rem) 0px 3.875rem;
  inline-size: 100%;
  block-size: 100dvh;
  //border: 1px solid#DEDEDE;
  border: 1px solid red;
  border-top: 0;
  overflow: hidden;
  transition: grid-template-columns 0.5s linear;
}

.header {
  grid-column: 1/5;
  grid-row: 1 / 2;
  // border: 1px solid red;
}

.chat-list {
  grid-column: 1/2;
  grid-row: 2 / 3;
}

.messages {
  grid-column: 2/3;
  grid-row: 2 / 3;
}

.options {
  grid-column: 3/4;
  grid-row: 2 / 3;
  overflow: hidden;
}

.menu {
  grid-column: 4/5;
  grid-row: 2 / 3;
  //background-color:#FFFFFF;
}

.menu--open {
  grid-template-columns: 19.813rem minmax(39.375rem, 66.313rem) 19.813rem 3.875rem;
  padding-inline: 0;
  margin: 0;
  //grid-template-columns: 19.813rem minmax(39.375rem, 66.313rem) calc(3.875rem + 19.813rem)
  //grid-template-columns: 19.813rem 1061px calc(3.875rem + 19.813rem);
}


</style>


