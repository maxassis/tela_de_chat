<template>
    <div :class="['cards-wrapper', {'fullsize': size}]">
    <div class="card" v-for="card in cardsInfo">
        <img src="../images/user1.png" />

        <div class="card__infos">
            <div class="card__name-wrapper">
                <h3 class="card__name">{{card.name}}</h3>

                <div class="card__user-status">
                    <span class="card__status yellow">
                        AGUARDANDO
                    </span>
                    <span class="card__number">1</span>
                </div>
            </div>

            <div class="card__message">
                <div class="card__message-text">
                    <h3>Este é um exemplo de mensagem</h3>
                </div>
                <div class="card__hour-wrapper">
                    <span class="card__hour">19:21</span>
                    <img src="../images/online.svg" />
                </div>
            </div>

            <div class="card__show-status">
                <div class="card__single-tag blue"></div>
                <div class="card__single-tag pink"></div>
                <div class="card__single-tag blue-light"></div>
                <div class="card__single-tag orange"></div>
            </div>

        </div>
    </div>

</div>

    
</template>


<script setup lang="ts">
import { cardsInfo } from "../list_cards"

const {size} = defineProps<{size: boolean}>()


</script>


<style lang="scss" scoped>

.cards-wrapper {
    overflow: scroll;
    block-size: calc(100% - 54px);
    background-color: #FFFFFF;
}

.card {
    display: grid;
    grid-template-columns: 62px 1fr;
    inline-size: 317px;
    block-size: 91px;
    border-bottom: 1px solid #dedede;

    >img {
        margin: 19px 0 0 16px;
    }

    &__infos {
        padding: 18px 16px 0 0;
    }

    &__name-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    &__name {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
    }

    &__user-status {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

    }

    &__status {
        display: grid;
        place-items: center;
        inline-size: 81px;
        block-size: 15px;       
        border-radius: 23.2415px;
        font-weight: 600;
        font-size: 8px;
        line-height: 5.6875px;
        letter-spacing: 0.05em;
    }

    &__number {
        display: grid;
        place-items: center;
        min-inline-size: 15px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: #1FBD89;
        font-weight: 400;
        font-size: 8px;
        line-height: 9px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        padding-inline: 3px;
    }

    &__message {
        margin-top: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;    
    }

    &__message-text {
        max-inline-size: 180px;
       
        >h3 {
            font-weight: 400;
            font-size: 12px;
            line-height: 8.5313px;
            line-height: 14px;
            color: #AAB9C3;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    &__hour-wrapper {
        display: flex;
        align-items: center;
        gap: 8.67px;
    }

    &__hour {
        font-weight: 400;
        font-size: 8px;
        line-height: 9px;
        color: #AAB9C3;
    }

    &__show-status {
        margin-top: 7px;
        display: flex;
        gap: 2px;
    }

    &__single-tag {
        inline-size: 11px;
        aspect-ratio: 1;
        border-radius: 50%;
        
    }

}

.yellow {
    background-color:#EAC645;
    color: #FFFFFF;
}

.blue {
    background: #1E02CE;
}

.pink {
    background: #B202CE;
}

.blue-light {
    background: #237BBB;
}

.orange {
    background: #E25F16;
}

.fullsize {
  block-size: auto;
}

</style>