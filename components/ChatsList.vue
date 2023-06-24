<template>
  {{ showInput }}
  <div class="message-search">
    <div class="message-search__input-wrapper">
      <div class="message-search__icon">
        <img src="../images/lupa.svg" style="inline-size: 20px" />
      </div>
      <input type="text" placeholder="Pesquisar mensagem" />
    </div>
    <img src="../images/add.svg" />
  </div>
  <div class="inputs-section">
    <input class="input" type="text" placeholder="Nome" />
    <input class="input" type="text" placeholder="Número do whatsapp" />
    <select v-model="departamento" :class="[departamento != '' ? 'border-green' : '']">
      <option selected style="color: pink" value="">Usuário ou departamento</option>
      <option value="1">Financeiro</option>
      <option value="2">Comercial</option>
    </select>
    <select v-model="funil" :class="[funil != '' ? 'border-green' : '']">
      <option value="">Filtrar por etapa do funil</option>
      <option value="1">Etapa 1</option>
      <option value="2">Etapa 2</option>
    </select>

    <div class="inputs-section__group1">
      <select v-model="tags" :class="[tags != '' ? 'border-green' : '']">
        <option value="">Filtrar por tags</option>
        <option value="1">Tag 1</option>
        <option value="2">Tag 2</option>
      </select>
      <select v-model="qualquer" :class="[qualquer != '' ? 'border-green' : '']" style="inline-size: 106px">
        <option value="">Qualquer</option>
        <option value=1>Todas as tags</option>
      </select>
    </div>

    <div class="inputs-section__group2">
      <div>
        <span :style="showInput ? 'color: #333333' : 'color: gray'">Mostrar tags</span>
        <div class="toggle-switch">
          <input v-model="showInput" value="1" class="toggle-input" id="toggle" type="checkbox">
          <label class="toggle-label" for="toggle"></label>
        </div>
      </div>
      <select v-model="order" :class="[order != '' ? 'border-green' : '']">
        <option value="">Ordenar por</option>
        <option value="1">Mais novo</option>
        <option value="2">Data de criação</option>
      </select>
    </div>
  </div>

  <div class="checks__wrapper">
    <div class="checks__single-item">
      <img src="../images/archive.svg" />
      <input type="checkbox" />
    </div>
    <div class="checks__single-item">
      <img src="../images/mail.svg" />
      <input type="checkbox" />
    </div>
    <div class="checks__single-item">
      <img src="../images/star.svg" />
      <input type="checkbox" />
    </div>
    <div class="checks__single-item">
      <img src="../images/transmission.svg" />
      <input type="checkbox" />
    </div>
  </div>

  <div :class="['list', { 'up': hide }]">
    <div class="list__top-bar">
      <div class="list__hidden-list" @click="toggleHide">
        <img src="../images/up.svg" />
        <span>{{ hide ? 'Mostrar filtros' : 'Esconder filtros' }}</span>
      </div>
      <span class="list__clean">Limpar</span>
    </div>

    <Cards :size="hide" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let hide = ref<boolean>(false)

let departamento = ref<string>('')
let funil = ref<string>('')
let tags = ref<string>('')
let qualquer = ref<string>('')
let order = ref<string>('')
let showInput = ref<boolean>(false)

function toggleHide(): void {
  hide.value = hide.value ? false : true;
}

</script>





<style scoped lang="scss">
.message-search {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  padding-inline: 1rem;
  inline-size: 100%;
  block-size: 3.938rem;
  background: #f7f7f8;
  border-block-end: 1px solid #dedede;

  &__input-wrapper {
    inline-size: 238px;
    display: flex;

    >input {
      inline-size: 100%;
      block-size: 2rem;
      outline: none;
      padding-inline-start: 10px;
      font-size: 12px;
    }
  }

  &__icon {
    display: grid;
    place-items: center;
    min-inline-size: 32px;
    block-size: 32px;
    background-color: #aab9c3;
  }
}

.inputs-section {
  display: grid;
  inline-size: 100%;
  block-size: 264px;
  padding: 16px;
  border-bottom: 1px solid #dedede;

  >input,
  select {
    inline-size: 100%;
    block-size: 32px;
    outline: none;
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 2px;
    padding-inline-start: 10px;
    font-size: 12px;
  }

  >select {
    color: gray;
  }

  &__group1 {
    display: flex;
    block-size: 32px;
    gap: 8px;

    >select {
      color: gray;
    }
  }

  &__group2 {
    display: flex;
    gap: 8px;
    block-size: 32px;
    color: gray;

    >div {
      display: flex;
      align-items: center;
      min-inline-size: 142px;
      block-size: 32px;
      border: 1px solid #dedede;
      border-radius: 2px;
      padding-inline-start: 10px;

      >span {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #333333;
      }
    }

    >select {
      color: gray;
    }
  }
}

.checks {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 56px;
    border-bottom: 1px solid #dedede;
    padding: 16px;
    gap: 8px;
  }

  &__single-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 24px;
    background: #ffffff;
    border: 0.5px solid #dedede;
    border-radius: 20px;
    gap: 12px;
    position: relative;

    img {
      left: 12px;
      position: absolute;
    }

    input {
      appearance: none;
      border: 1.14286px solid #aab9c3;
      border-radius: 1.06667px;
      width: 14px;
      height: 14px;
      position: absolute;
      right: 12px;

      &:checked {
        background: #1fbd89;
        border: 0;

        &::after {
          content: "";
          inline-size: 10px;
          block-size: 5px;
          border-inline-end: 2.5px solid white;
          border-block-start: 2.5px solid white;
          position: absolute;
          inset-inline-start: 2.5px;
          inset-block-start: 4px;
          transform: rotate(130deg);
        }
      }
    }
  }
}

.list {
  block-size: calc(100dvh - 436px);
  transition: transform 0.5s linear;

  &__top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    block-size: 54px;
    padding-inline: 16px;
    border-bottom: 1px solid #dedede;
    background-color: #FFFFFF;
  }

  &__hidden-list {
    inline-size: 104px;
    block-size: 22px;
    background: #ffffff;
    border-radius: 2px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #BAB8B9;
    cursor: pointer;
    box-shadow: 0px 0px 6.13636px rgba(0, 0, 0, 0.1);
    padding-inline-start: 8px;
  }

  &__clean {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #BAB8B9;
    cursor: pointer;

    &:hover {
      color: #1fbd89;
    }


  }


}

.up {
  transform: translateY(-383px);
}

// Toggle button

/* Genel stil */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 27.857px;
  height: 15px;
  margin: 10px;
}

/* Giriş stil */
.toggle-switch .toggle-input {
  display: none;
}

/* Anahtarın stilinin etrafındaki etiketin stil */
.toggle-switch .toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 27.857px;
  height: 15px;
  background-color: #1FBD89;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* Anahtarın yuvarlak kısmının stil */
.toggle-switch .toggle-label::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: 1.22px;
  left: 1.2px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

/* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
.toggle-switch .toggle-input:checked + .toggle-label {
  background-color: #1FBD89;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
  transform: translateX(13px);
}

/* Light tema */
.toggle-switch.light .toggle-label {
  background-color: #1FBD89;
}

.toggle-switch.light .toggle-input:checked + .toggle-label {
  background-color: #1FBD89;
}

.toggle-switch.light .toggle-input:checked + .toggle-label::before {
  transform: translateX(6px);
}

/* Dark tema */
.toggle-switch.dark .toggle-label {
  background-color: #1FBD89;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label {
  background-color: #1FBD89;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label::before {
  transform: translateX(16px);
}

</style>
