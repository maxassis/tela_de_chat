<template>
    <div class="menu" > 

        <div class="menu__itens-wrapper">
        <div :class="['menu__item', {'menu--blue': option === 'user'}]" @click="changeOption('user')" aria-label="Informações do chat" data-balloon-pos="left" >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'notes'}]" @click="changeOption('notes')" aria-label="Anotações internas" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M11.667 1.667H5a1.667 1.667 0 0 0-1.667 1.666v13.334A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.667-1.666v-10l-5-5Z"/>
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M11.666 1.667v5h5M13.333 10.833H6.666M13.333 14.167H6.666M8.333 7.5H6.667"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'funnels'}]" @click="changeOption('funnels')" aria-label="Funil" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path fill="#BAB8B9" d="M6.732 15.175a1.278 1.278 0 0 1-.584-.149 1.24 1.24 0 0 1-.663-1.099V7.845L.355 2.208a1.255 1.255 0 0 1 .927-2.09h13.395a1.255 1.255 0 0 1 .928 2.09l-5.13 5.637v4.413a1.24 1.24 0 0 1-.554 1.038l-2.495 1.668c-.205.137-.447.21-.694.21ZM1.282 1.366l5.123 5.637c.21.23.326.53.327.842v6.082l2.495-1.668V7.845c.001-.311.118-.611.328-.842l5.122-5.637H1.282Z"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'chatbot'}]" @click="changeOption('chatbot')" aria-label="Diálogos do chatbot" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none">
                <path fill="#BAB8B9" d="M3.912 5.464a1.182 1.182 0 1 0 2.365 0 1.182 1.182 0 0 0-2.365 0ZM14.79.26H1.39a.63.63 0 0 0-.631.631v13.006c0 .35.282.631.63.631H14.79a.63.63 0 0 0 .63-.63V.891a.63.63 0 0 0-.63-.63Zm-.63 13.007H2.02V1.523h12.14v11.745ZM9.903 5.464a1.182 1.182 0 1 0 2.364 0 1.182 1.182 0 0 0-2.364 0Zm4.93 10.957H1.347c-.325 0-.587.282-.587.63v.71c0 .087.065.158.146.158h14.368c.08 0 .146-.071.146-.158v-.71c.002-.348-.26-.63-.585-.63Zm-3.748-7.41h-5.99a.158.158 0 0 0-.158.158v1.182c0 .087.07.158.158.158h5.99a.158.158 0 0 0 .158-.158V9.17a.158.158 0 0 0-.158-.158Z"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'historic'}]" @click="changeOption('historic')" aria-label="Histórico de atendimento" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.23" d="M15.72 17.467V8.733M10.48 17.467V3.493M5.24 17.467v-5.24"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'delegated'}]" @click="changeOption('delegated')" aria-label="Histórico de usuários delegados" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13.333 17.5v-1.667A3.333 3.333 0 0 0 10 12.5H4.167a3.333 3.333 0 0 0-3.334 3.333V17.5M7.083 9.167a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM14.167 9.167l1.666 1.666L19.167 7.5"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'nps'}]" @click="changeOption('nps')" aria-label="Histórico de NPS" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.203" d="M18.117 13.572A8.54 8.54 0 1 1 6.833 2.417"/>
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.203" d="M18.792 10.25a8.543 8.543 0 0 0-8.542-8.542v8.542h8.542Z"/>
            </svg>
        </div>
        <div :class="['menu__item', {'menu--blue': option === 'midias'}]" @click="changeOption('midias')" aria-label="Midias" data-balloon-pos="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="none">
                <path stroke="#BAB8B9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M1.204 1.522 12.976 9.09 1.204 16.657V1.522Z"/>
            </svg>
        </div>
        <div class="menu__item" @click="changeOption('')" aria-label="Fechar" data-balloon-pos="left">
            <img src="../images/close.svg" />
        </div>
        </div>
        
    </div>


</template>

<script setup lang="ts">
import options from '../store/options';
const { changeOption, option } = options()

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

        &:hover {
            background-color: #4E73DF;

            svg{
            path {
                stroke: #FFF;
            }
        }
        }

    }

    &__options--closed {
        display: none;
    }

    &--blue {
        background-color: #4E73DF;

        svg{
        path {
            stroke: #FFF;
        }
    }
    }
}

</style>