<template>
    <div class="menu" v-bind:style= "[menu ? 'borderInlineStart: 0' : 'borderInlineStart: 0.5px solid #dedede69']">

        <div class="menu__itens-wrapper">
        <div class="menu__item" @click="showMenu">
            <img src="../images/user.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/file.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/funil.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/robot.svg"  />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/graph.svg"/>
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/user-check.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/pie.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/play.svg" />
        </div>
        <div class="menu__item" @click="showMenu">
            <img src="../images/close.svg" />
        </div>
        </div>
        
    </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';

const menu = ref(false); 
defineExpose( { menu })
const emit = defineEmits(['menu'])

function showMenu() {
    emit('menu', menu.value);
    menu.value = !menu.value;
}




</script>




<style lang="scss" scoped>

.menu {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    block-size: 100%;
    padding: 16px 16px 0 0;
    
   &__itens-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-inline-size: 62px;
    block-size: 847px;
   }

    &__item {
        display: grid;
        place-items: center;
        inline-size: 30px;
        block-size: 30px;background: #FFFFFF;
        border-radius: 3.33333px;
        margin-block-end: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
        cursor: pointer;
    }

    &__options--closed {
        display: none;
    }
}

</style>