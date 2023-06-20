<template>
    <div
        :class="[
          'nps__single-nps',
          { 'nps__single-nps--hidde': open },
          color
        ]"
      >
        <div class="nps__single-nps-wrapper">
          <span class="nps__hour">17/03/22 às 10:45</span>
          <div class="nps__nps-title">
            <h3>Título do atendimento</h3>
            <div class="nps__nps-icon" @click="toggle">
              <img src="../images/seta-branca.svg" />
            </div>
          </div>
          <span class="nps__note">Nota 10</span>
        </div>

        <div class="nps__body">
          <span>Comentário:</span>
          <p style="margin-block-end: 10px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span>Usuários e departamentos delegados: </span>
          <p>Lorem Ipsum</p>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let {color} = defineProps<{color: string}>()
let open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>


<style lang="scss" scoped>

.nps {

  &__single-nps {
    display: grid;
    grid-template-rows: 84px 122px;
    grid-template-columns: 1fr;
    inline-size: 278px;
    border-radius: 3px;
    overflow: hidden;
    transition: grid-template-rows 0.5s ease;
    margin-block-end: 10px;
  }

  &__green {
    background: #e7f3ef;
    border: 1px solid #55b938;
  }

  &__red {
    background: rgba(248, 106, 107, 0.05);
    border: 1px solid #d65745;
  }

  &__yellow {
    background: rgba(255, 193, 7, 0.2);
    border: 1px solid #eac645;
  }

  &__single-nps--hidde {
    grid-template-rows: 84px 0px;
  }

  &__single-nps-wrapper {
    padding-inline: 18px;
    margin-block: auto;
  }

  &__nps-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #333333;
    }
  }

  &__hour {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
  }

  &__note {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: #333333;
    margin-block-start: 4px;
  }

  &__nps-icon {
    display: grid;
    place-items: center;
    block-size: 16px;
    inline-size: 16px;
    background-color: #aab9c3;
    cursor: pointer;
  }

  &__body {
    inline-size: 100%;
    block-size: 100%;
    padding-inline: 18px;
    padding-block-end: 16px;
    overflow: hidden;

    span {
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;
      color: #333333;
      margin-block-end: 2px;
    }

    > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: rgba(51, 51, 51, 0.5);
    }
  }

}

</style>