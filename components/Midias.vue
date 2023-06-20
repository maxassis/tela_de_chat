<template>
  <div class="midia">
    <div class="midia__title">
      <span>Midias</span>
      <div class="midia__icon">
        <img src="../images/x.svg" />
      </div>
    </div>
    <div class="midia__search-wrapper">
      <div class="midia__search">
        <img src="../images/up.svg" />
        <span>Mostrar mais recentes</span>
      </div>
      <div class="midia__icon2">
        <img src="../images/alert.svg" />
      </div>
    </div>

    <div class="midia__select">
      <div
        :class="[
          'midia__select-item',
          { 'midia__select-item--selected': opt === 'midia' },
        ]"
        @click="check('midia')"
      >
        Mídias
      </div>
      <div
        :class="[
          'midia__select-item',
          { 'midia__select-item--selected': opt === 'documents' },
        ]"
        @click="check('documents')"
      >
        Documentos
      </div>
      <div
        :class="[
          'midia__select-item',
          { 'midia__select-item--selected': opt === 'figure' },
        ]"
        @click="check('figure')"
      >
        Figurinhas
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>

    <div class="midia__single-item">
      <div class="midia__left">
        <div class="midia__icon-wrapper">
          <img src="../images/img.svg" />
        </div>
        <div class="midia__name-wrapper">
          <h3>Nome do arquivo</h3>
          <span>17/03/22 às 10:45</span>
        </div>
      </div>
      <div class="midia__options-wrapper">
        <div class="midia__option">
          <img src="../images/download.svg" />
        </div>
        <div class="midia__option">
          <img src="../images/send.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let opt = ref("");

function check(type: string) {
  opt.value = type;
  console.log(opt.value);
}
</script>

<style lang="scss" scoped>
.midia {
  padding: 16px 19px 0 20px;

  &__title {
    display: flex;
    inline-size: 279px;
    block-size: 31px;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 12px;

    > span {
      font-weight: 500;
      font-size: 14px;
      line-height: 40px;
      color: #333333;
    }
  }

  &__icon {
    display: grid;
    place-items: center;
    inline-size: 24px;
    block-size: 24px;
    background: #ffffff;
    border: 1px solid rgba(92, 92, 92, 0.04);
    border-radius: 12px;
  }

  &__search-wrapper {
    block-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: 16px;
  }

  &__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 155px;
    padding-inline: 4px;
    block-size: 24px;
    background: #f7f7f8;
    border-radius: 2px;

    > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: rgba(51, 51, 51, 0.5);
    }
  }

  &__icon2 {
    inline-size: 30px;
    block-size: 30px;
    background: #f7f7f8;
    border-radius: 2px;
  }

  &__select {
    display: grid;
    grid-template-columns: 84px 1fr 1fr;
    grid-template-rows: 100%;
    inline-size: 279px;
    block-size: 29px;
    border-radius: 3px;
    background: #1fbd89;
    margin-block-end: 15px;
  }

  &__select-item {
    display: grid;
    place-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    background: #1fbd89;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.5s ease;
  }

  &__select-item--selected {
    background: #ffffff;
    color: #333333;
    border: 1px solid #1fbd89;
  }

  &__single-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 279px;
    block-size: 62px;
    border: 1px solid #cecece;
    border-radius: 3px;
    margin-block-end: 10px;
    padding-inline: 18px 22px;
  }

  &__left {
    display: flex;
    gap: 11px;
  }

  &__icon-wrapper {
    display: grid;
    place-items: center;
    inline-size: 32px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #e7f3ef;
  }

  &__name-wrapper {
    h3 {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: #333333;
    }

    span {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: rgba(51, 51, 51, 0.5);
    }
  }

  &__options-wrapper {
    display: flex;
    gap: 8px;
  }

  &__option {
    display: grid;
    place-items: center;
    inline-size: 30px;
    block-size: 30px;
    background: #eef1f3;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
