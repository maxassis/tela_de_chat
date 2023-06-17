<template>
    <div class="funnels">
        <div class="funnels__title">
            <span>Funil</span>
            <div class="funnels__icon">
                <img src="../images/x.svg" />
            </div>
        </div>

        <div class="funnels__stage">
            <span>Etapas de funil</span>
            <div class="funnels__stage-icon">
                <img src="../images/lupa.svg" />
            </div>
        </div>

        <SingleFunnel />
        <SingleFunnel />


    </div>



</template>

<script setup lang="ts">

function toggle() {
    alert('teste')
}

</script>


<style lang="scss" scoped>

.funnels {
    padding: 16px 19px 0 19px;

    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-inline-size: 279px;
        block-size: 31px;

        >span {
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
        background: #FFFFFF;
        border: 1px solid rgba(92, 92, 92, 0.04);
        border-radius: 12px;
    }

    &__stage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-inline-size: 279px;
        block-size: 30px;
        margin: 12px 0;

        >span {
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            display: flex;
            align-items: center;
            color: #333333;
        }
    }

    &__stage-icon {
        display: grid;
        place-items: center;
        inline-size: 30px;
        block-size: 30px;
        background: #AAB9C3;
        border-radius: 2px;
    }

    // &__single-note {
    //     display: grid;
    //     justify-content: space-between;
    //     align-items: center;
    //     //min-inline-size: 279px;
    //     block-size: 55px;
    //     background: rgba(170, 185, 195, 0.1);
    //     border-radius: 3px;
        
    // }

    // &__top {
    //     min-inline-size: 279px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     padding: 10px 10px 10px 18px;
    // }


    // &__title-wrapper {
    //     block-size: 35px;

    //     >h3 {
    //         font-weight: 600;
    //         font-size: 14px;
    //         line-height: 16px;
    //         color: #333333;
    //     }

    //     span {
    //         font-weight: 400;
    //         font-size: 10px;
    //         line-height: 12px;
    //         color: #BAB8B9;
    //     }

    // }

    // &__toggle-icon {
    //     display: grid;
    //     place-items: center;
    //     inline-size: 18px;
    //     block-size: 18px;
    //     background: #AAB9C3;
    //     border-radius: 1.06667px;
    //     cursor: pointer;
    // }
}



</style>