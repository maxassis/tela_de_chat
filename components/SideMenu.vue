<template>
    <div class="menu" > 

        <div class="menu__itens-wrapper">
        <div class="menu__item" @click="changeOption('user')" aria-label="Informações do chat" data-balloon-pos="left" >
            <img src="../images/user.svg" />
        </div>
        <div class="menu__item" @click="changeOption('notes')" aria-label="Anotações internas" data-balloon-pos="left">
            <img src="../images/file.svg" />
        </div>
        <div class="menu__item" @click="changeOption('funnels')" aria-label="Funil" data-balloon-pos="left">
            <img src="../images/funil.svg" />
        </div>
        <div class="menu__item" @click="changeOption('chatbot')" aria-label="Diálogos do chatbot" data-balloon-pos="left">
            <img src="../images/robot.svg"  />
        </div>
        <div class="menu__item" @click="changeOption('historic')" aria-label="Histórico de atendimento" data-balloon-pos="left">
            <img src="../images/graph.svg"/>
        </div>
        <div class="menu__item" @click="changeOption('delegated')" aria-label="Histórico de usuários delegados" data-balloon-pos="left">
            <img src="../images/user-check.svg" />
        </div>
        <div class="menu__item" @click="changeOption('nps')" aria-label="Histórico de NPS" data-balloon-pos="left">
            <img src="../images/pie.svg" />
        </div>
        <div class="menu__item" @click="changeOption('midias')" aria-label="Midias" data-balloon-pos="left">
            <img src="../images/play.svg" />
        </div>
        <div class="menu__item" @click="changeOption('')" aria-label="Fechar" data-balloon-pos="left">
            <img src="../images/close.svg" />
        </div>
        </div>
        
    </div>


</template>

<script setup lang="ts">
import options from '../store/options';
const { changeOption } = options()
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