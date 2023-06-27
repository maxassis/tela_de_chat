<template>
  <div class="messages">
    <div class="messages__top">
      <div class="messages__name">
        <img
          class="messages__arrow"
          src="../images/left-arrow.svg"
          @click="changeScreen('chatlist')"
        />
        <img src="../images/user1.png" />
        <div>
          <h3>Vanderlei Silva</h3>
          <span class="messages__status-mobile">AGUARDANDO</span>
        </div>
      </div>

      <div class="messages__menu-top">
        <div class="messages__box-status">
          <span>AGUARDANDO</span>
        </div>
        <div class="messages__search">
          <img src="../images/lupa.svg" />
        </div>
        <img
          class="messages__vertical"
          src="../images/vertical.svg"
        />
        <img
          class="messages__horizontal"
          src="../images/group-vertical.svg"
        />
      </div>
    </div>

    <div class="messages__scroll-wrapper">
      <div class="messages__date">
        <span>HOJE, 13/03/2023</span>
      </div>

      <div class="messages__received">
        <img src="../images/user1.png" />
        <div class="messages__msg-wrapper">
          <div class="messages__msg-receive">
            <span
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
      </div>

      <div class="messages__send">
        <div class="messages__msg-wrapper">
          <div class="messages__msg-send">
            <span
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
        <img src="../images/user.png" />
      </div>

      <div class="messages__received">
        <img src="../images/user1.png" />
        <div class="messages__msg-wrapper">
          <div class="messages__msg-receive">
            <span
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
      </div>

      <div class="messages__send">
        <div class="messages__msg-wrapper">
          <div class="messages__msg-send">
            <span
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
        <img src="../images/user.png" />
      </div>

      <div class="messages__send">
        <div class="messages__msg-wrapper">
          <div class="messages__msg-send">
            <span
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
        <img src="../images/user.png" />
      </div>

      <div class="messages__send">
        <div class="messages__msg-wrapper">
          <div class="messages__msg-send">
            <span
              >The standard Lorem Ipsum passage, used since the 1500s "Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914
              translation by H. Rackham "But I must explain to you how all this
              mistaken idea of denouncing pleasure and praising pain was born
              and I will give you a complete account of the system, and expound
              the actual teachings of the great explorer of the truth, the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?" Section 1.10.33 of "de Finibus
              Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat." 1914 translation by H. Rackham "On the other hand, we
              denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound to ensue; and equal blame belongs to those
              who fail in their duty through weakness of will, which is the same
              as saying through shrinking from toil and pain. These cases are
              perfectly simple and easy to distinguish. In a free hour, when our
              power of choice is untrammelled and when nothing prevents our
              being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing to the claims of duty or the obligations of business it will
              frequently occur that pleasures have to be repudiated and
              annoyances accepted. The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to
              secure other greater pleasures, or else he endures pains to avoid
              worse pains."</span
            >
          </div>
          <span>10:23 AM</span>
        </div>
        <img src="../images/user.png" />
      </div>
    </div>

    <div class="messages__bottom">
      <div class="messages__send-msg-bottom">
        <div class="messages__plus" ref="target">
          <div :class="['messages__menu',{'messages__menu-item--show': plusMenu}]" >
            <div class="messages__menu-item">
              <img src="../images/plus1.svg" />
            </div>
            <div class="messages__menu-item" style="--color:#36B9CC">
              <img src="../images/plus2.svg" />
            </div>
            <div class="messages__menu-item" style="--color:#4E73DF">
              <img src="../images/plus3.svg" />
            </div>
            <div class="messages__menu-item" style="--color:#1FBD89">
              <img src="../images/plus4.svg" />
            </div>
          </div>
          <img src="../images/plus.svg" @click="openPlus()"/>
        </div>
        <div class="messages__input-wrapper">
          <textarea type="text" />
        </div>
        <div class="messages__record">
          <img src="../images/mic.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import toogleScreen from '@/store/toggleScreen';

let plusMenu = ref(false);
const target = ref(null)
const { changeScreen } = toogleScreen()

onClickOutside(target, () => {
  if(plusMenu.value){
    plusMenu.value = false
  }
})

function openPlus() {
  if(plusMenu.value){
    plusMenu.value = false
  }
  else {
    plusMenu.value = true
  }

}

</script>

<style lang="scss" scoped>
.messages {
  display: grid;
  grid-template-rows: auto 1fr auto;
  block-size: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 6.13636px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  container-type: inline-size;
  container-name: messages;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    block-size: 94px;
    border-radius: 10px 10px 0 0;
    padding-inline: 20px 20.75px;
    border-block-end: 1px solid #dedede;

    @media (max-width: 600px) {
      block-size: 78px;
      padding-inline: 19.78px 17px;
    }
  }

  &__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 18px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #333333;

  }

  &__arrow {
    cursor: pointer;
    margin-inline-end: 5px;
    display: none;

  @media (max-width: 1200px) {
  display: inline-block;
  } 

  }

  &__status-mobile {
    display: none;
    padding: 2px 5px;
    background: #eac645;
    border-radius: 1.53656px;
    font-weight: 600;
    font-size: 10.7559px;
    line-height: 13px;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin-block-start: 8px;

  }

  &__menu-top {
    display: flex;
    justify-content: flex-end;
    block-size: 27px;
    position: relative;
  }

  &__box-status {
    display: grid;
    place-items: center;
    inline-size: 100%;
    max-inline-size: 157px;
    block-size: 100%;
    background-color: #eac645;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-inline: 28px;
  }

  &__search {
    display: grid;
    place-items: center;
    min-inline-size: 30px;
    block-size: 30px;
    background: #aab9c3;
    margin-inline-start: 18px;
  }

  &__vertical {
    margin-inline-start: 13.75px;
    cursor: pointer;
  }

  &__horizontal {
    display: none;
    inline-size: 20px;
    cursor: pointer;
  }

  &__menu-invisible {
    position: absolute;
    inset-inline-end: 30px;
    inset-block-end: 734px;
    display: none;

    @media (max-width: 1340px) {
      display: block;
    }
  }

  &__scroll-wrapper {
    background-color: #f8f9fc;
    border-block-end: 1px solid #dedede;
    padding-inline: 24px;
    overflow-x: hidden;
  }

  &__date {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    color: #bab8b9;
    margin-block: 20px 24px;
  }

  &__received {
    display: flex;
    gap: 18px;
    // padding-inline-start: 24px;
    margin-block-end: 25px;

    > img {
      inline-size: 40px;
      block-size: 40px;
    }
  }

  &__send {
    display: flex;
    justify-content: flex-end;
    gap: 18px;
    // padding-inline-end: 24px;
    margin-block-end: 25px;

    > img {
      inline-size: 40px;
      block-size: 40px;
    }
  }

  &__bottom {
    display: flex;
    padding: 25px 24px 0 24px;
    block-size: 123px;
  }

  &__send-msg-bottom {
    max-inline-size: 725px;
    inline-size: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22px;
    margin-inline: auto;
    block-size: 49px;
  }

  &__plus {
    position: relative;
    cursor: pointer;
  }

  &__menu {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    inline-size: 52px;
    block-size: 172px;
    border-radius: 2px;
    border: 0.5px solid var(--cinza-30, #CECECE);
    background: var(--branco, #FFF);
    box-shadow: 0px 0px 6.136363506317139px 0px rgba(0, 0, 0, 0.10);
    position: absolute;
    inset-block-start: -181px;
    inset-inline-end: -9.5px;
    opacity: 0;
    transition: opacity 0.7s ease;
  }

  &__menu-item {
    --color: #8995B2;
    display: grid;
    place-items: center;
    inline-size: 32px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color);
    margin: auto;
  }

  &__menu-item--show {
    opacity: 1;
  }

  &__msg-wrapper {
    max-inline-size: 432px;
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    inline-size: fit-content;

    > span {
      font-weight: 400;
      font-size: 8px;
      line-height: 9px;
      color: #bab8b9;
    }
  }

  &__msg-receive {
    inline-size: 100%;
    background: #e8e9ec;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    padding: 12px;
  }

  &__msg-send {
    @extend .messages__msg-receive;
    background: #e7f3ef;
  }

  &__input-wrapper {
    inline-size: min(100%, 573px);
    block-size: 100%;
    position: relative;

    &::before {
      content: url(../images/smiley.svg);
      position: absolute;
      inset-inline-end: 16.64px;
      inset-block-start: 13px;
    }

    > textarea {
      inline-size: 100%;
      block-size: 100%;
      background: #f8f9fc;
      border-radius: 7.36364px;
      outline: none;
      padding-inline: 15px 60px;
      padding-block-start: 13px;
      border: 0;
      resize: none;
    }
  }

  &__record {
    display: grid;
    place-items: center;
    min-inline-size: 49px;
    block-size: 49px;
    background: #1fbd89;
    border-radius: 2px;
    cursor: pointer;
  }
}


@container messages (max-width: 601px) {
  .messages {
    &__name {
      font-size: 12px;
      line-height: 14px;
    }

    &__box-status {
      display: none;
    }

    &__search {
      display: none;
    }

    &__status-mobile {
    display: inline-block;
    }

    &__bottom {
      block-size: 73px;
      align-items: center;
      padding-block-start: 0;
      padding-inline: 16px;

    }

    &__vertical {
      display: none;
    }

    &__horizontal {
      display: block;
    }

  }
}
</style>

