<template>
    <div class="user items">
      <div class="user__informations">
        <span>Informações do chat</span>
        <div class="user__icons-wrapper">
          <div class="user__icons">
            <img src="../images/star2 .svg" />
          </div>
          <div class="user__icons">
            <img src="../images/link.svg" />
          </div>
          <div class="user__icons">
            <img src="../images/x.svg" @click="changeOption('')" style="cursor: pointer" />
          </div>
        </div>
      </div>

      <input
        class="user__input"
        type="text"
        style="margin-block-start: 12px"
        placeholder="Nome"
      />
      <input class="user__input" type="text" placeholder="Numero" />
      <div class="user__checkbox-wrapper">
        <div class="user__checkbox">
          <span>Arquivar chat</span>
          <input type="checkbox" />
        </div>
        <div class="user__checkbox">
          <span>Chatbot</span>
          <input type="checkbox" />
        </div>
      </div>

      <div class="user__resp-wrapper">
        <div>
          <span class="user__resp-title">Responsável</span>
        </div>
        <div class="user__resp">
          <select>
            <option>Enola Sauer</option>
            <option>Abagail O'Hara</option>
          </select>
          <button>
            Delegar <br />
            para fila
          </button>
        </div>
      </div>

      <div class="tags">
        <div class="tags__title">
          <span>Tags</span>
          <div class="tags__icon">
            <img src="../images/plus_white.svg" />
          </div>
        </div>

        <div class="tags__wrapper">
          <div style="background: #1e02ce" class="tags__item">Nome da tag</div>
          <div style="background: rgba(178, 2, 206, 0.5)" class="tags__item">
            Nome da tag
          </div>
          <div style="background: rgba(35, 123, 187, 0.5)" class="tags__item">
            Nome da tag
          </div>
          <div style="background: rgba(226, 95, 22, 0.5)" class="tags__item">
            Nome da tag
          </div>
        </div>
      </div>

      <div class="fields">
        <div class="fields__title">
          <span>Campos personalizados</span>
          <div class="fields__icon">
            <img src="../images/config.svg" />
          </div>
        </div>
      </div>

      <div class="fields__inputs-wrapper">
        <span>Nome da empresa</span>
        <input class="input" type="text" placeholder="" />
        <span>CNPJ:</span>
        <input class="input" type="text" placeholder=""/>
        <span>E-mail: </span>
        <input class="input" type="text" placeholder=""/>
        <span>Data de cadastro:</span>
        <input class="input" type="text" placeholder=""/>
        <span>Dados da conta:</span>
        <input class="input" type="text" placeholder=""/>
        <span>Aparelho de origem:</span>
        <input class="input" type="text" placeholder=""/>
        <span>Aparelho de origem:</span>
        <input class="input" type="text" placeholder=""/>
        <span>Número do ZapGuru:</span>
        <input class="input" type="text" placeholder=""/>
      </div>
    </div>
</template>

<script setup lang="ts">
import options from '../store/options';
const { changeOption } = options()

</script>


<style lang="scss" scoped>
.user {
  &__informations {
    block-size: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      font-weight: 500;
      font-size: 14px;
      line-height: 40px;
      color: #333333;
    }
  }

  &__icons-wrapper {
    display: flex;
    align-items: center;
  }

  &__icons {
    display: grid;
    place-items: center;
    gap: 10px;
    inline-size: 24px;
    block-size: 24px;
    background: #ffffff;
    border: 1px solid rgba(92, 92, 92, 0.04);
    border-radius: 12px;
  }

  &__input {
    inline-size: 100%;
    block-size: 32px;
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 2px;
    margin-block-start: 8px;
    padding-inline-start: 10px;
    outline: none;

    &::placeholder {
      font-size: 12px;
    }

    &:focus {
      box-shadow: 0px 0px 6.13636px rgba(0, 0, 0, 0.1);
      border-color: #1fbd89;
    }
  }

  &__checkbox-wrapper {
    inline-size: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 8px;
    margin-block-end: 24px;
  }

  &__checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    inline-size: 132px;
    block-size: 32px;
    border: 1px solid #dedede;
    border-radius: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #cecece;
    padding-inline: 10px;
    

    input {
      //appearance: none;
      inline-size: 14px;
      block-size: 14px;
      border: 1px solid #CECECE;
      accent-color: #1fbd89;
    }


  }

  &__resp-wrapper {
    block-size: 107px;
    border-block: 1px solid #dedede;
    padding-block-start: 12px;
  }

  &__resp-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 9.9531px;
    color: #333333;
    margin-block-end: 8px;
  }

  &__resp {
    inline-size: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-start: 15px;

    :where(select, button) {
      block-size: 32px;
      background: #ffffff;
      border-radius: 2px;
      display: flex;
      font-weight: 400;
    }

    > select {
      inline-size: min(100%, 190px);
      padding-inline-start: 10px;
      font-size: 14px;
      line-height: 16px;
      border: 1px solid #dedede;
      color: #cecece;
    }

    > button {
      display: grid;
      place-content: center;
      inline-size: min(100%, 77px);
      font-size: 10px;
      line-height: 12px;
      border: 1px solid #aab9c3;
      color: #aab9c3;
      cursor: pointer;
    }
  }
}

.tags {
  padding-block-start: 12px;
  padding-block-end: 18px;
  border-bottom: 1px solid #dedede;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend .user__resp-title;
  }

  &__icon {
    display: grid;
    place-items: center;
    inline-size: 20px;
    block-size: 20px;
    background-color: #aab9c3;
  }

  &__wrapper {
    display: grid;
    gap: 8px;
    grid-template-columns: 107px 107px;
    grid-template-rows: 23px 23px;
    margin-block-start: 15px;
  }

  &__item {
    display: grid;
    place-items: center;
    width: 107px;
    height: 23px;
    cursor: pointer;
    border-radius: 36.8182px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
  }
}

.fields {
  padding-block-start: 16px;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend .user__resp-title;
  }

  &__icon {
    @extend .tags__icon;
  }

  &__inputs-wrapper {
    display: grid;
    gap: 6px 0;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(8, 32px);
    margin-block-start: 18px;

    > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #bab8b9;
      align-self: center;
    }
  }
}

.items {
  width: 279px;
  margin: 16px 19px 0 19px;
}

</style>