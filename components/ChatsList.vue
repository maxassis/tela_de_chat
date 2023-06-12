<template>
  <div class="message-search">
    <div class="message-search__input-wrapper">
      <div class="message-search__icon">
        <img src="../public/images/lupa.svg" style="width: 20px" />
      </div>
      <input type="text" placeholder="Pesquisar mensagem" />
    </div>
    <img src="../public/images/add.svg" />
  </div>

  <div class="inputs-section">
    <input type="text" placeholder="nome" />
    <input type="text" placeholder="Número do whatsapp" />
    <select>
      <option selected style="color: pink">Usuário ou departamento</option>
      <option>Financeiro</option>
    </select>
    <select>
      <option>Filtrar por etapa do funil</option>
    </select>

    <div class="inputs-section__group1">
      <select>
        <option>Filtrar por tags</option>
      </select>
      <select style="inline-size: 106px">
        <option>Qualquer</option>
      </select>
    </div>

    <div class="inputs-section__group2">
      <div>
        <span>Mostrar tags</span>
      </div>
      <select>
        <option>Ordenar por</option>
      </select>
    </div>
  </div>

  <div class="checks-wrapper">

    <div></div>
    <div></div>
    <div></div>
    <div></div>


  </div>
</template>

<style scoped lang="scss">
.message-search {
  display: inline-flex;
  align-items: center;
  gap: 23px;
  padding-inline: 1rem;
  inline-size: 100%;
  block-size: 3.938rem;
  background: #f7f7f8;
  border-bottom: 1px solid #dedede;

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
  border-bottom: 1px solid #dedede;

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

.checks-wrapper {
  display: flex;
  align-items: center;
  block-size: 56px;
  border-bottom: 1px solid #dedede;
}
</style>
