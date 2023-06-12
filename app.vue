<template>
  <div class="container">
    <div class="external-container">
      <Header />

      
        <div class="chat-list">
          <ChatsList />
        </div>
        <div class="messages">messages</div>
        <div class="menu">menu</div> 
       
    
    </div>
  </div>
</template>

<style scoped lang="scss">
.external-container {
  display: grid;
  grid-template-rows: 3.313rem calc(100dvh - 3.313rem);
  grid-template-columns: 19.813rem minmax(39.375rem, 66.313rem) 3.875rem;
  inline-size: 100%;
  block-size: 100%;
  // border: 1px solid red;

 

}

.header {
  grid-column: 1/4;
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

.menu {
  grid-column: 3/4;
  grid-row: 2 / 3;
}
</style>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

