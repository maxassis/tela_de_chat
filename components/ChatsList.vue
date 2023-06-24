<template>
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
    <input v-model="name" class="input" type="text" placeholder="Nome" />
    <input v-model="tel" class="input" type="text" placeholder="Número do whatsapp" />
    <select
      v-model="departamento"
      :class="[departamento != '' ? 'border-green' : '']"
    >
      <option selected style="color: pink" value="">
        Usuário ou departamento
      </option>
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
      <select
        v-model="qualquer"
        :class="[qualquer != '' ? 'border-green' : '']"
        style="inline-size: 106px"
      >
        <option value="">Qualquer</option>
        <option value="1">Todas as tags</option>
      </select>
    </div>

    <div class="inputs-section__group2">
      <div :class="[showInput ? 'border-green' : '']">
        <span :style="showInput ? 'color: #333333' : 'color: gray'"
          >Mostrar tags</span
        >
        <div class="toggle-switch">
          <input
            v-model="showInput"
            value="1"
            class="toggle-input"
            id="toggle"
            type="checkbox"
          />
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
    <div :class="['checks__single-item', inputSelected.includes('archive') ? 'item--selected' : '']">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
          <path stroke="#DEDEDE" stroke-linecap="round" stroke-linejoin="round" d="M12.25 4.667v7.583H1.75V4.667M13.417 1.75H.583v2.917h12.834V1.75ZM5.833 7h2.334"/>
      </svg>
      <input v-model="inputSelected" type="checkbox" value="archive" />
    </div>
    <div :class="['checks__single-item', inputSelected.includes('mail') ? 'item--selected2' : '']">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none">
          <path fill="#DEDEDE" d="M16.15 4.675a3.825 3.825 0 1 1-7.65 0 3.825 3.825 0 0 1 7.65 0ZM13.901 3.7a.426.426 0 0 0-.602-.602l-.974.975-.974-.975a.425.425 0 1 0-.602.602l.975.974-.975.974a.426.426 0 0 0 .602.602l.974-.975.974.975a.425.425 0 1 0 .602-.602l-.975-.974.975-.974Zm.55 8.624V8.84a4.68 4.68 0 0 0 .85-.559v4.044a2.125 2.125 0 0 1-2.126 2.125h-9.35A2.125 2.125 0 0 1 1.7 12.325v-6.8A2.125 2.125 0 0 1 3.825 3.4h4.001a4.657 4.657 0 0 0-.157.85H3.825A1.275 1.275 0 0 0 2.55 5.525v.257l5.95 3.5 1.225-.721c.276.184.573.34.887.465l-1.896 1.115a.426.426 0 0 1-.362.033l-.07-.033L2.55 6.768v5.557A1.275 1.275 0 0 0 3.825 13.6h9.35a1.275 1.275 0 0 0 1.275-1.275Z"/>
      </svg>
      <input v-model="inputSelected" type="checkbox" value="mail"  />
    </div>
    <div :class="['checks__single-item', inputSelected.includes('star') ? 'item--selected' : '']" >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
        <path stroke="#DEDEDE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.167" d="m7 1.167 1.802 3.651 4.031.59-2.916 2.84.688 4.014L7 10.366l-3.605 1.896.688-4.014-2.916-2.84 4.03-.59L7 1.167Z"/>
      </svg>
      <input v-model="inputSelected" type="checkbox" value="star" />
    </div>
    <div :class="['checks__single-item', inputSelected.includes('transmission') ? 'item--selected2' : '']">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
          <path fill="#DEDEDE" fill-rule="evenodd" d="M2.998 5.58a5.55 5.55 0 0 1 1.62-3.88l-.71-.7a6.45 6.45 0 0 0 0 9.16l.71-.7a5.55 5.55 0 0 1-1.62-3.88Zm1.06 0a4.42 4.42 0 0 0 1.32 3.17l.71-.71a3.27 3.27 0 0 1-.76-1.12 3.45 3.45 0 0 1 0-2.67 3.22 3.22 0 0 1 .76-1.13l-.71-.71a4.46 4.46 0 0 0-1.32 3.17Zm7.65 3.21-.71-.71c.33-.32.59-.704.76-1.13a3.448 3.448 0 0 0 0-2.67 3.219 3.219 0 0 0-.76-1.13l.71-.7a4.47 4.47 0 0 1 0 6.34ZM13.068 1l-.71.71a5.43 5.43 0 0 1 0 7.74l.71.71a6.451 6.451 0 0 0 0-9.16ZM9.993 5.43a1.5 1.5 0 0 1-.245.98 2 2 0 0 1-.27.23l3.44 7.73-.92.4-.77-1.73h-5.54l-.77 1.73-.92-.4 3.44-7.73a1.52 1.52 0 0 1-.33-1.63 1.55 1.55 0 0 1 .56-.68 1.5 1.5 0 0 1 2.325 1.1Zm-1.595-.34a.52.52 0 0 0-.25.14.52.52 0 0 0-.11.22.48.48 0 0 0 0 .29c.04.09.102.17.18.23a.54.54 0 0 0 .28.08.51.51 0 0 0 .5-.5.54.54 0 0 0-.08-.28.58.58 0 0 0-.23-.18.48.48 0 0 0-.29 0Zm.23 2.05h-.27l-.87 1.94h2l-.86-1.94Zm2.2 4.94-.89-2h-2.88l-.89 2h4.66Z" clip-rule="evenodd"/>
      </svg>
      <input v-model="inputSelected" type="checkbox" value="transmission" />
    </div>
  </div>

  <div :class="['list', { up: hide }]">
    <div class="list__top-bar">
      <div class="list__hidden-list" @click="toggleHide">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none">
            <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.333" d="M9 5 5 1 1 5"/>
        </svg>
        <span>{{ hide ? "Mostrar filtros" : "Esconder filtros" }}</span>
      </div>
      <span class="list__clean" @click="clear()">Limpar</span>
    </div>

    <Cards :size="hide" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let hide = ref<boolean>(false);
let name = ref<string>("");
let tel = ref<string>("");
let departamento = ref<string>("");
let funil = ref<string>("");
let tags = ref<string>("");
let qualquer = ref<string>("");
let order = ref<string>("");
let showInput = ref<boolean>(false);
let inputSelected = ref<string[]>([]);

function clear() {
name.value = "";
tel.value = "";
departamento.value = "";
funil.value = "";
tags.value = "";
qualquer.value = "";
order.value = "";
showInput.value = false;
inputSelected.value = [];
}


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

    > input {
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
  border-block-end: 1px solid #dedede;

  > input,
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

  > select {
    color: gray;
  }

  &__group1 {
    display: flex;
    block-size: 32px;
    gap: 8px;

    > select {
      color: gray;
    }
  }

  &__group2 {
    display: flex;
    gap: 8px;
    block-size: 32px;
    color: gray;

    > div {
      display: flex;
      align-items: center;
      min-inline-size: 142px;
      block-size: 32px;
      border: 1px solid #dedede;
      border-radius: 2px;
      padding-inline-start: 10px;

      > span {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #333333;
      }
    }

    > select {
      color: gray;
    }
  }
}

.checks {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    block-size: 56px;
    border-block-end: 1px solid #dedede;
    padding: 16px;
    gap: 8px;
  }

  &__single-item {
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: 65px;
    block-size: 24px;
    background: #ffffff;
    border: 0.5px solid #dedede;
    border-radius: 20px;
    gap: 12px;
    position: relative;

    svg {
      inset-inline-start: 12px;
      position: absolute;
    }

    input {
      appearance: none;
      border: 1.14286px solid #aab9c3;
      border-radius: 1.06667px;
      inline-size: 14px;
      block-size: 14px;
      position: absolute;
      inset-inline-end: 12px;

      &:checked {
        background: #1fbd89;
        border: 0;

        &::after {
          content: "";
          inline-size: 8px;
          block-size: 5px;
          border-inline-end: 2.5px solid white;
          border-block-start: 2.5px solid white;
          position: absolute;
          inset-inline-start: 3.2px;
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
    border-block-end: 1px solid #dedede;
    background-color: #ffffff;
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
    color: #bab8b9;
    cursor: pointer;
    box-shadow: 0px 0px 6.13636px rgba(0, 0, 0, 0.1);
    padding-inline-start: 8px;
    transition: color 0.3s ease;

    &:hover {
      color: #333333;

      svg {
        transition: rotate 0.5s ease;

        path {
          stroke: #333333;
        }
      }
    }
  }

  &__clean {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #bab8b9;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #333333;
    }
  }
}

.up {
  transform: translateY(-383px);

  svg {
    rotate: 180deg;
  }
}

.item--selected {
  border-color: #1fbd89 !important;

  svg {
  path{
    stroke: #333333 !important;
  }
}
}

.item--selected2 {
  border-color: #1fbd89 !important;

svg {
path{
  fill: #333333 !important;
}
}
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
  background-color: #1fbd89;
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
  background-color: #1fbd89;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
  transform: translateX(13px);
}

/* Light tema */
.toggle-switch.light .toggle-label {
  background-color: #1fbd89;
}

.toggle-switch.light .toggle-input:checked + .toggle-label {
  background-color: #1fbd89;
}

.toggle-switch.light .toggle-input:checked + .toggle-label::before {
  transform: translateX(6px);
}

/* Dark tema */
.toggle-switch.dark .toggle-label {
  background-color: #1fbd89;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label {
  background-color: #1fbd89;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label::before {
  transform: translateX(16px);
}
</style>
