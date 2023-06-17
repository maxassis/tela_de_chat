<template>
  <div :class="['funnel__single-note', { 'funnel__single-note--open': open }]">
    <div class="funnel__top">
      <div class="funnel__title-wrapper">
        <h3>Título do funil</h3>
        <span>04 ETAPAS</span>
      </div>
      <div class="funnel__toggle-icon" @click="toggle">
        <img src="../images/seta-branca.svg" />
      </div>

    </div>

    <div>

    <div class="funnel__options">
      <span>Exemplo de título de funil </span>
      <div class="funnel__icons">
        <div class="funnel__ok">
            <img src="../images/check.svg" />
        </div>
        <div class="funnel__delete">
            <img src="../images/x-white.svg" />
        </div>
      </div>
    </div>

     <div class="funnel__options">
      <span>Exemplo de título de funil </span>
      <div class="funnel__icons">
        <div class="funnel__ok">
            <img src="../images/check.svg" />
        </div>
        <div class="funnel__delete">
            <img src="../images/x-white.svg" />
        </div>
      </div>
    </div>

    <div class="funnel__options">
      <span>Exemplo de título de funil </span>
      <div class="funnel__icons">
        <div class="funnel__ok">
            <img src="../images/check.svg" />
        </div>
        <div class="funnel__delete">
            <img src="../images/x-white.svg" />
        </div>
      </div>
    </div>

    <div class="funnel__options">
      <span>Exemplo de título de funil </span>
      <div class="funnel__icons">
        <div class="funnel__ok">
            <img src="../images/check.svg" />
        </div>
        <div class="funnel__delete">
            <img src="../images/x-white.svg" />
        </div>
      </div>
    </div> 

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
function toggle() {
  open.value = !open.value;
}
</script>

<style lang="scss" scoped>
.funnel {
  &__single-note {
    display: grid;
    grid-template-rows: 55px 0px;
    background: rgba(170, 185, 195, 0.1);
    border-radius: 3px;
    margin-block-end: 10px;
    transition: grid-template-rows 0.5s linear;
    overflow: hidden;
  }

  &__single-note--open {
    grid-template-rows: 55px 115px;
    overflow: hidden;
  }

  &__top {
    display: grid;
    min-inline-size: 279px;
    block-size: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 18px;
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title-wrapper {
    block-size: 35px;

    > h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #333333;
    }

    span {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #bab8b9;
    }
  }

  &__toggle-icon {
    display: grid;
    place-items: center;
    inline-size: 18px;
    block-size: 18px;
    background: #aab9c3;
    border-radius: 1.06667px;
    cursor: pointer;
  }

  &__options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: 18px 10px;
    margin-block-end: 10px;

    > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #333333;
    }
  }

  &__icons {
    display: flex;
    gap: 7.12px;
  }

  &__ok {
    inline-size: 18px;
    block-size: 18px;
    display: grid;
    place-items: center;
    background-color: #55b938;
  }

  &__delete {
    @extend .funnel__ok;
    background-color: #d65745;
  }
}
</style>
