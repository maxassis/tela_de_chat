<template>
    <div class="header">
        <div class="header__user-wrapper">
            <img src="../public/images/user.png" alt="user" />

            <div class="header__name-wrapper">
                <h3>Roberta da Silva</h3>
                <span>Tech Lead</span>
            </div>

        </div>

        <div class="header__menu red"></div>



    </div>


</template>



<style scoped lang="scss">
    .header{
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
            inline-size: 20.188rem;
            block-size: 1.813rem;
        }

        &__name-wrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            gap: 2px;
            block-size: 31px;

            >span {
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 10px;
                line-height: 12px;
                color: #FFFFFF;
                line-height: 9.1094px;
            }

            >h3 {
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
                line-height: 13.375px;
            }
        }



    }

</style>