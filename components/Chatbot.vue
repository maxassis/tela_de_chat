<template>
    <div class="chatbot">
        <div class="chatbot__title">
            <span>Diálogos do chatbot</span>
            <div class="chatbot__icon">
                <img src="@/images/x.svg" alt="" @click="changeOption('')" style="cursor: pointer">
            </div>
        </div>
        <div class="chatbot__context-wrapper">
            <span>Contextos do robô</span>
            <img src="../images/alert.svg" />           
        </div>

        <div class="chatbot__table">
           <div class="chatbot__header">
               <span>CONTEXTO</span>
               <span>VALOR</span>
           </div>
           <div class="chatbot__body">
            <div class="chatbot__item">
                <span>Contexto 1</span>
                <span class="chatbot__value">Valor 1</span>
                <img src="../images/trash-red.svg" />
            </div>

            <div class="chatbot__item">
                <span>Contexto 1</span>
                <span class="chatbot__value">Valor 1</span>
                <img src="../images/trash-red.svg" />
            </div>

            <div class="chatbot__item">
                <span>Contexto 1</span>
                <span class="chatbot__value">Valor 1</span>
                <img src="../images/trash-red.svg" />
            </div>

            <div class="chatbot__item">
                <span>Contexto 1</span>
                <span class="chatbot__value">Valor 1</span>
                <img src="../images/trash-red.svg" />
            </div>

            <div class="chatbot__item">
                <span>Contexto 1</span>
                <span class="chatbot__value">Valor 1</span>
                <img src="../images/trash-red.svg" />
            </div>
           </div>
        </div>

        <div class="chatbot__divisor"></div>

        <div class="chatbot__context-wrapper" style="margin-block-end: 18px">
            <span>Histórico de diálogos acionados</span>
            <img src="../images/alert.svg" />           
        </div>

        <div class="chatbot__order-wrapper">
            <div class="chatbot__order">
                <img src="../images/up.svg" />
                <span>Mostrar mais recentes</span>
            </div>

            <div class="chatbot__lupa-icon">
                <img src="../images/lupa.svg" />
            </div>       
        </div>

        <div class="chatbot__table2">
            <div class="chatbot__header">
               <span>Diálogo</span>
               <span>VALOR</span>
               <span>VALOR</span>
           </div>

           <div class="chatbot__table2-body">
                <div class="chatbot__table2-item">
                    <span>Nome</span>
                    <div class="chatbot__status-wrapper">
                        <div class="chatbot__status-green">
                            <div class="chatbot__status-ball-green"></div>
                            <span>Executado</span>
                        </div>
                        <span>10/03/2022 às 10:00</span>
                    </div>
                    <img src="../images/dialog.svg" />
                </div>

                <div class="chatbot__table2-item">
                    <span>Nome</span>
                    <div class="chatbot__status-wrapper">
                        <div class="chatbot__status-green">
                            <div class="chatbot__status-ball-green"></div>
                            <span>Executado</span>
                        </div>
                        <span>10/03/2022 às 10:00</span>
                    </div>
                    <img src="../images/user.svg" />
                </div>

                <div class="chatbot__table2-item">
                    <span>Nome</span>
                    <div class="chatbot__status-wrapper">
                        <div class="chatbot__status-red">
                            <div class="chatbot__status-ball-red"></div>
                            <span>Executado</span>
                        </div>
                        <span>10/03/2022 às 10:00</span>
                    </div>
                    <img src="../images/chatbot.svg" />
                </div>
           </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import options from '../store/options';
const { changeOption } = options()

</script>

<style lang="scss" scoped>

.chatbot {
    padding: 16px 18px 0 20px;

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

&__context-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    block-size: 31px;
    inline-size: 279px;
    margin-block-end: 10px;

    >span {
        font-weight: 500;
        font-size: 14px;
        line-height: 40px;
        display: flex;
        align-items: center;
        color: #333333;
    }

}

&__table {
    display: grid;
    grid-template-rows: 38px 151px;
    grid-template-columns: 1fr 1fr 1fr;
    inline-size: 279px;
    block-size: 189px;
    border: 0.5px solid rgba(168, 168, 168, 0.1);
    border-radius: 3px 3px 0px 0px;
    margin-block-end: 18px;
}

&__header {
    grid-column: 1/4;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #AAB9C3;
    border-radius: 3px 3px 0px 0px;

    >span {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        justify-self: center;
        align-self: center;
    }
}

&__body {
    grid-column: 1/4;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);

}

&__item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    &:not(:last-child) {
            border-block-end: 0.5px solid rgba(168, 168, 168, 0.1);
        }

    :where(span, img) {
        justify-self: center;
        align-self: center;
    }

    >span {       
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    }

    img {
        cursor: pointer;
    }
}

&__value {
    inline-size: 100%;
    display: grid;
    border-inline-start: 0.5px solid rgba(168, 168, 168, 0.1);
    border-inline-end: 0.5px solid rgba(168, 168, 168, 0.1);
    block-size: 100%;
    place-items: center;
    
}


&__divisor {
    inline-size: 279px;
    block-size: 1px;
    background: rgba(168, 168, 168, 0.5);
    margin-block-end: 19px;
}

&__order-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    inline-size: 279px;
    block-size: 30px;
    margin-block-end: 18px;
}

&__order {
    inline-size: 154px;
    block-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F6F6F6;
    padding-inline: 4px 4px;
    cursor: pointer;

    >span {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: rgba(51, 51, 51, 0.5);
    }
}

&__lupa-icon {
    block-size: 30px;
    inline-size: 30px;
    display: grid;
    place-items: center;
    background: #AAB9C3;
    border-radius: 2px;
}

&__table2 {
    inline-size: 279px;
    block-size: 173px;
    display: grid;
    grid-template-rows: 38px 135px;
    grid-template-columns: 1fr;
    border: 0.5px solid rgba(168, 168, 168, 0.1);
}

&__table2-body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);

}

&__table2-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    &:not(:last-child) {
            border-block-end: 0.5px solid rgba(168, 168, 168, 0.1);
        }

    :where(img, div) {
        justify-self: center;
        align-self: center;
    }

    >span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    justify-self: center;
    align-self: center;
    }
}

&__status-wrapper {
    inline-size: 100%;
    block-size: 100%;
    place-content: center;
    display: grid;
    border-inline-end: 1px solid rgba(168, 168, 168, 0.1);
    border-inline-start: 1px solid rgba(168, 168, 168, 0.1);

   >span {
    font-weight: 400;
    font-size: 8.77333px;
    line-height: 10px;
    color: #333333;
   }
}

&__status-green {
    display: flex;
    align-items: center;

    gap: 3.85px;
    background-color: rgba(51, 51, 51, 0.05);
    padding: 2px 4px;
    border-radius: 7.69091px;
    margin-block-end: 8px;

    >span {
        font-weight: 500;
        font-size: 9.22909px;
        line-height: 11px;
        color: #55B938;
    }
}

&__status-red {
    @extend .chatbot__status-green;

    >span {
        color: #D65745;
    }
}



&__status-ball-green {
    inline-size: 4.61px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #55B938;
}

&__status-ball-red {
    @extend .chatbot__status-ball-green;
    background-color: #D65745;
}

}
</style>