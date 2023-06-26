<template>
  <div class="header">
    <div class="header__user-wrapper">
      <img src="../images/user.png" alt="user" />

      <div class="header__name-wrapper">
        <h3>Roberta da Silva</h3>
        <span class="header--hide">Tech Lead</span>
      </div>
    </div>

    <div class="header__menu">
      <img src="../images/zap.svg" />
      <div class="header__divisor"></div>
      <img src="../images/sino.svg" />
      <div class="header__divisor header--hide"></div>
      <img src="../images/volume.svg" class="header--hide" />
      <div class="header__divisor header--hide"></div>
      <img
        src="../images/toggle.svg"
        style="inline-size: 43px"
        class="header--hide"
      />
      <div class="header__divisor header--hide"></div>
      <img src="../images/logout.svg" class="header--hide" />
      <div ref="target">
        <img
          src="../images/vertical-white.svg"
          class="header__menu-mobile"
          @click="togglePopup"
          style="position: relative"
        />
        <div :class="['header__popup', { 'header__popup--show': showPopup }]">
          <div class="header__popup-item">
            <span>Volume</span>
            <img src="../images/volume.svg" />
          </div>
          <div class="header__popup-item">
            <span>Tema</span>
            <img src="../images/toggle.svg" />
          </div>
          <div class="header__popup-item">
            <span>Sair</span>
            <img src="../images/logout.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

let showPopup = ref(false);
function togglePopup() {
  showPopup.value = !showPopup.value;
}

const target = ref(null);
onClickOutside(target, () => (showPopup.value = false));
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  block-size: 100%;
  background: #333333;
  padding: 0 1.188rem 0 1rem;
  position: relative;

  &__user-wrapper {
    display: flex;
    align-items: center;
    block-size: 2.313rem;
    gap: 16px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    inline-size: 20.188rem;
    block-size: 1.813rem;

    > img {
      inline-size: 24px;
      cursor: pointer;
    }

    @media (width < 600px) {
      justify-content: flex-end;
      gap: 13px;
      align-items: center;
      inline-size: auto;
    }
  }

  &__name-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
    block-size: 31px;

    > span {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
      line-height: 9.1094px;
    }

    > h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      line-height: 13.375px;
    }

    @media (width < 600px) {
      display: grid;
      align-items: center;
    }
  }

  &__divisor {
    inline-size: 2px;
    block-size: 29px;
    background-color: #6e767b;
    border-radius: 9.33333px;
  }

  &--hide {
    display: block;

    @media (width < 600px) {
      display: none;
    }
  }

  &__popup {
    position: absolute;
    inset-inline-end: 15px;
    inset-block-end: -120px;
    inline-size: 160px;
    block-size: 108px;
    border-radius: 2px;
    border: 0.5px solid var(--cinza-30, #cecece);
    background: var(--branco, #fff);
    box-shadow: 0px 0px 6.136363506317139px 0px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 38px 31px 39px;
    grid-template-columns: 1fr;
    padding-inline: 12px;
    border-radius: 2px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.7s ease;
    z-index: 999999;
  }

  &__menu-mobile {
    display: none;
    block-size: 20px;
    cursor: pointer;

    @media (width < 600px) {
      display: block;
    }
  }

  &__popup-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-block-end: 1px solid #dedede;
    cursor: pointer;

    > span {
      color: #bab8b9;
      font-size: 16px;
    }

    > img {
      cursor: pointer;
    }
  }

  &__popup--show {
    pointer-events: all;
    opacity: 1;
  }
}
</style>
