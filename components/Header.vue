<template>
  <div class="header">
    <div class="header__user-wrapper">
      <img src="../public/images/user.png" alt="user" />

      <div class="header__name-wrapper">
        <h3>Roberta da Silva</h3>
        <span>Tech Lead</span>
      </div>
    </div>

    <div class="header__menu">
      <img src="../public/images/zap.svg" />
      <div class="header__divisor"></div>
      <img src="../public/images/sino.svg" />
      <div class="header__divisor"></div>
      <img src="../public/images/volume.svg" />
      <div class="header__divisor"></div>
      <img src="../public/images/toggle.svg" style="width: 43px" />
      <div class="header__divisor"></div>
      <img src="../public/images/logout.svg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  block-size: 100%;
  background: #333333;
  padding: 0 1.188rem 0 1rem;

  &__user-wrapper {
    display: flex;
    align-items: center;
    height: 2.313rem;
    gap: 16px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    inline-size: 20.188rem;
    block-size: 1.813rem;

    > img {
      width: 24px;
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
  }

  &__divisor {
    inline-size: 2px;
    block-size: 29px;
    background-color: #6e767b;
    border-radius: 9.33333px;
  }
}
</style>
