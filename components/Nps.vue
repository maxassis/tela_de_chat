<template>
  <div class="nps">
    <div class="nps__title">
      <span>Histórico de NPS</span>
      <div class="nps__icon">
        <img src="../images/x.svg" />
      </div>
    </div>

    <div class="nps__search-wrapper">
      <div class="nps__search">
        <img src="../images/up.svg" />
        <span>Mostrar mais recentes</span>
      </div>
      <div class="nps__icon2">
        <img src="../images/alert.svg" />
      </div>
    </div>

    <div class="nps__items-wrapper">
        <NpsCard color="nps__green"/>
        <NpsCard color="nps__red"/>
        <NpsCard color="nps__yellow"/>
        <NpsCard color="nps__red"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.nps {
  padding: 16px 19px 0 20px;
  block-size: 100%;

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
    background: #F7F7F8;
    border-radius: 2px;
  }

  &__items-wrapper {
    overflow-x: hidden;
    max-block-size: calc(100dvh - 300px);
  }
}
</style>
