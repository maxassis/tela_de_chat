<template>
    <div class="historic">
        <div class="historic__title">
            <span>Histórico de atendimento</span>
            <div class="historic__close">
                <img src="../images/x.svg" />
            </div>
        </div>
        
        <div class="historic__search-wrapper">
            <div class="historic__search">
                <img src="../images/up.svg" />
                <span>Mostrar mais recentes</span>
            </div>

            <div class="historic__icons-wrapper">
                <div class="historic__alert">
                    <img src="../images/alert.svg" />
                </div>
                <div class="historic__lupa">
                    <img src="../images/lupa.svg" />
                </div>
            </div>
        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="red-status">ABERTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="blue-status">ATENDIMENTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="yellow-status">AGUARDANDO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="green-status">FECHADO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="red-status">ABERTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="blue-status">ATENDIMENTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="red-status">ABERTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="blue-status">ATENDIMENTO</span>
            </div>

        </div>

        <div class="historic__item">
            <div class="historic__name-wrapper">
                <h3>Nome Sobrenome</h3>
                <span>17/03/22 às 10:45</span>
                <span class="historic__time">27min 5seg</span>
            </div>
            
            <div class="historic__status-wrapper">
                <h3>STATUS</h3>
                <span class="red-status">ABERTO</span>
            </div>

        </div>

    </div>


</template>

<style lang="scss" scoped>

.historic {
    padding: 16px 20px 0 20px;

    &__title {
        block-size: 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block-end: 12px;

        >span {
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            color: #333333;
        }
    }

    &__close {
        display: grid;
        place-items: center;
        inline-size: 24px;
        block-size: 24px;
        background: #FFFFFF;
        border: 1px solid rgba(92, 92, 92, 0.04);
        border-radius: 12px;
        
    }

    &__search-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        block-size: 30px;
        margin-block-end: 12px;
    }

    &__search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        inline-size: 155px;
        block-size: 24px;
        background: #F7F7F8;
        border-radius: 2px;
        padding-inline: 4px;

        >span {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: rgba(51, 51, 51, 0.5);
        }
    }


    &__icons-wrapper {
        display: flex;
        gap: 9px;
    }

    &__alert {
        display: grid;
        place-items: center;
        background: #EEEEF1;
        inline-size: 30px;
        block-size: 30px;
    }

    &__lupa {
        @extend .historic__alert;
        background: #AAB9C3;
    }

    &__item {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        inline-size: 279px;
        block-size: 75px;
        padding: 10px 0 10px 18px;
        background: #F8F9FC;
        border-radius: 3px;
        margin-block-end: 8px;
    }

    &__name-wrapper {
        

        >h3 {
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            display: flex;
            align-items: center;
            color: #333333;
        }

        >span {
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            color: #AAB9C3;
        }

    }

    &__time {
        display: block; 
        margin-block-start: 5px;
    }



    &__status-wrapper {
        display: grid;
        place-content: center;

        >h3 {
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            display: flex;
            align-items: center;
            color: rgba(51, 51, 51, 0.5);
            justify-self: center;
            block-size: 18px;
        }

        >span {
            font-weight: 600;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            padding: 3px 13px;
            border-radius: 36.8182px;
        }
    }

}

.red-status {
    background-color: #D65745;
}

.blue-status {
    background-color: #5296D5;
}

.yellow-status {
    background-color: #EAC645;
}

.green-status {
    background-color: #55B938;
}

</style>