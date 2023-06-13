<template>
  <div class="message-search">
    <div class="message-search__input-wrapper">
      <div class="message-search__icon">
        <img src="../images/lupa.svg" style="width: 20px" />
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

  <div class="list">
    <div class="list__top-bar">
      <div class="list__hidden-list">
        <img src="../images/up.svg" />
        <span>Esconder filtros</span>
      </div>
      <span class="list__clean">Limpar</span>
    </div>
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
          width: 10px;
          height: 5px;
          border-right: 2.5px solid white;
          border-top: 2.5px solid white;
          position: absolute;
          left: 2.5px;
          top: 4px;
          transform: rotate(130deg);
        }
      }
    }
  }
}

.list {
  
  &__top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    block-size: 54px;
    padding-inline: 16px;
    border-bottom: 1px solid #dedede;
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
  }


}
</style>
