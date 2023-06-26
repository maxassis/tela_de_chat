<template>
    <div class="notes">
        <div class="notes__title-wrapper">
            <span>Anotações internas</span>
            <div>
                <img src="../images/x.svg" @click="changeOption('')" style="cursor: pointer" />
            </div>
        </div>

        <div class="notes__new">
            <div class="notes__display">
                <img src="../images/up.svg" />
                <span>Mostrar mais recentes</span>
            </div>
            <div class="notes__add">
                <img src="../images/plus_white.svg" />
            </div>
        </div>

        <div class="notes__single-note ">
            <div class="notes__title">
                <div class="notes__name">
                    <h3>Nome Sobrenome</h3>
                    <span>20/03/22 às 12:15</span>
                </div>
                <div class="notes__trash">
                    <img src="../images/trash.svg" />
                </div>
            </div>

            <p class="notes__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>

        </div>

        <div class="notes__single-note ">
            <div class="notes__title">
                <div class="notes__name">
                    <h3>Nome Sobrenome</h3>
                    <span>20/03/22 às 12:15</span>
                </div>
                <div class="notes__trash">
                    <img src="../images/trash.svg" />
                </div>
            </div>

            <p class="notes__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>

        </div>

        <div class="notes__single-note ">
            <div class="notes__title">
                <div class="notes__name">
                    <h3>Nome Sobrenome</h3>
                    <span>20/03/22 às 12:15</span>
                </div>
                <div class="notes__trash">
                    <img src="../images/trash.svg" />
                </div>
            </div>

            <p class="notes__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>

        </div>
    </div>
</template>

<script setup lang="ts">
import options from '../store/options';
const { changeOption } = options()

</script>



<style lang="scss" scoped>
.notes {
    padding: 16px 19px 0 19px;

    &__title-wrapper {
        min-inline-size: 279px;
        block-size: 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        >span {
        min-inline-size: 169px;    
        font-weight: 500;
        font-size: 14px;
        line-height: 40px;
        color: #333333;
        }

        >div {
            display: grid;
            place-items: center;
            inline-size: 24px;
            block-size: 24px;
            background: #FFFFFF;
            border: 1px solid rgba(92, 92, 92, 0.04);
            border-radius: 12px;
        }
    }

    &__new {
        min-inline-size: 279px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block-start: 12px;
        block-size: 30px;
        margin-block-end: 15px;
        
    }

    &__display {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        min-inline-size: 173px;
        block-size: 24px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: rgba(51, 51, 51, 0.5);
        background: rgba(228, 229, 232, 0.3);
    }

    &__add {
        display: grid;
        place-items: center;
        inline-size: 30px;
        block-size: 30px;
        background-color: #1FBD89;

        >img {
            block-size: 16px;
        }
    }

    &__single-note {
        display: grid;
        align-content: space-between;
        inline-size: 279px;
        background: rgba(255, 242, 125, 0.2);
        border-radius: 3px;
        cursor: pointer;
        padding: 20px 18px 18px 18px;
        margin-block-end: 8px;
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        block-size: 30px;
    }

    &__trash {
        display: grid;
        place-items: center;
        inline-size: 30px;
        block-size: 30px;
        background: #FFFFFF;
        border: 1px solid rgba(51, 51, 51, 0.5);
        border-radius: 2px;
    }

    &__name {
        display: flex;
        flex-direction: column;
        gap: 8px;

        >h3 {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #333333;
        }

        >span {
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;
            color: #333333;
        }
    }

    &__text {
        margin-block-start: 19px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        text-align: justify;
    }

}

</style>