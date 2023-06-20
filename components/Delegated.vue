<template>
  <div class="delegated">
    <div class="delegated__title">
      <span>Histórico de usuários delegados</span>
      <div class="delegated__icon">
        <img src="../images/x.svg" />
      </div>
    </div>

    <div class="delegated__search-wrapper">
      <div class="delegated__search">
        <img src="../images/up.svg" />
        <span>Mostrar mais recentes</span>
      </div>
      <div class="delegated__icons-wrapper">
        <div class="delegated__information">
          <img src="../images/alert.svg" />
        </div>
        <div class="delegated__lupa">
          <img src="../images/lupa.svg" />
        </div>
      </div>
    </div>

    <div class="delegated__table">
      <div class="delegated__header">
        <span>delegado por</span>
        <span>data e hora</span>
      </div>

      <div class="delegated__body">
        <div class="delegated__item">
          <div class="delegated__left">
            <div>
              <span>Chatbot</span>
            </div>
            <ul>
              <li>Usuário 01</li>
              <li>Usuário 02</li>
            </ul>
          </div>

          <div class="delegated__right">
            <div>
              <span
                >10/03/2022<br />
                às 10:00</span
              >
            </div>
          </div>
        </div>

        <div class="delegated__item">
          <div class="delegated__left">
            <div>
              <span>Chatbot</span>
            </div>
            <ul>
              <li>Usuário 01</li>
              <li>Usuário 02</li>
            </ul>
          </div>

          <div class="delegated__right">
            <div>
              <span
                >10/03/2022<br />
                às 10:00</span
              >
            </div>
          </div>
        </div>

        <div class="delegated__item">
          <div class="delegated__left">
            <div>
              <span>Chatbot</span>
            </div>
            <ul>
              <li>Usuário 01</li>
              <li>Usuário 02</li>
            </ul>
          </div>

          <div class="delegated__right">
            <div>
              <span
                >10/03/2022<br />
                às 10:00</span
              >
            </div>
          </div>
        </div>

        <div class="delegated__item">
          <div class="delegated__left">
            <div>
              <span>Chatbot</span>
            </div>
            <ul>
              <li>Usuário 01</li>
              <li>Usuário 02</li>
            </ul>
          </div>

          <div class="delegated__right">
            <div>
              <span
                >10/03/2022<br />
                às 10:00</span
              >
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delegated {
  padding: 16px 20px 0 20px;

  &__title {
    display: flex;
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

  &__icons-wrapper {
    display: flex;
    gap: 8px;
  }

  &__information {
    block-size: 30px;
    inline-size: 30px;
    background: #f7f7f8;
    border-radius: 2px;
  }

  &__lupa {
    display: grid;
    place-content: center;
    block-size: 30px;
    inline-size: 30px;
    background: #aab9c3;
    border-radius: 2px;

    > img {
      block-size: 16px;
      inline-size: 16px;
    }
  }

  &__table {
    display: grid;
    grid-template-rows: 38px 1fr;
    grid-template-columns: 1fr;
    inline-size: 279px;
    block-size: 390px;
    border: 0.5px solid rgba(168, 168, 168, 0.1);
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background: #aab9c3;
    border-radius: 3px 3px 0px 0px;

    > span {
      justify-self: center;
      align-self: center;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  &__item {
    display: grid;
    grid-template-columns: 129px 1fr;
    grid-template-rows: 1fr;
    border-block-end: 0.5px solid rgba(168, 168, 168, 0.1);
  }

  &__left {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 34px 52px;

    > div {
      display: grid;
      place-items: center;  
      inline-size: 100%;
      block-size: 100%;
      border-block-end: 0.5px solid rgba(168, 168, 168, 0.1);

      > span {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
      }
    }

    > span {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #333333;
      margin: auto;
    }

    > ul {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      margin: auto;
      color: #333333;
    }
  }

  &__right {
    display: grid;
    place-content: center;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: rgba(51, 51, 51, 0.5);
    border-inline-start: 0.5px solid rgba(168, 168, 168, 0.1);

    > div {
      inline-size: 100%;
      block-size: 100%;
    }
  }
}
</style>

