<template>

      <div class="wrapper" :class="{'innerOpened': notHome, 'comeHome': !notHome}">
        <div class="home"
             :class="['home-bg-' + activeBox]"
        >
          <router-link to="/" @click.native="defaultState" class="go-home-btn" >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
            </svg>
          </router-link>

          <h1 class="home__header" v-if="activeBox !== -1">
            {{ boxes[zeroState].des}}
            <small v-if="boxes[zeroState].hasOwnProperty('footnote')">
              {{ boxes[zeroState].footnote}}
            </small>
            <span class="scrolling">
              <span class="scrolling__circle">
                <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C20.1797 0 26 5.8203 26 13V25C26 32.1797 20.1797 38 13 38C5.8203 38 0 32.1797 0 25V13C0 5.8203 5.8203 0 13 0ZM13 2C6.92487 2 2 6.92487 2 13V25C2 31.0751 6.92487 36 13 36C19.0751 36 24 31.0751 24 25V13C24 6.92487 19.0751 2 13 2ZM12 9H14V17H12V9Z" fill="white"/>
                </svg>
              </span>
              <span class="scrolling__arrow">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.58998L14.59 -1.71661e-05L16 1.41998L8 9.41998L0 1.41998L1.41 0.00998306L7 5.58998L8 6.5235L9 5.58998Z" fill="white"/>
                </svg>
              </span>
            </span>
          </h1>
          <h1 class="home__header" v-else>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit: <nobr>Ut enim</nobr>
          </h1>

            <div class="home__nav">
              <div
                   @mouseenter="activeBox = idx, zeroState = activeBox"
                   @mouseleave="noHovered"
                   v-for="(box, idx) in boxes"
                   @click="activeBox = idx"
                   class="box"
                   :key="idx"
              >
                <p class="box__des">{{ box.des }}</p>
                <p v-if="box.footnote" class="box__footnote">{{ box.footnote }}</p>
                <router-link :to="box.url" class="box__link">
                  <span>Learn More</span>
                  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.17 7L15.58 1.41L17 0L25 8L17 16L15.59 14.59L21.17 9H0V7H21.17Z" fill="white" />
                  </svg>
                </router-link>
              </div>
            </div>

        </div>
      </div>

</template>

<script>
 // import gsap from 'gsap'

  export default {
    name: 'Home',
    data() {
      return {
        zeroState: 0,
        activeBox: -1,
        pageId: this.$route.params.patientIdx,
        boxes: [
          {
            img: "/assets/img/patient1.jpeg",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
            url: "/patient/0",
          },
          {
            img: "/assets/img/patient2.jpeg",
            des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            url: "/patient/1",
          },
          {
            img: "/assets/img/patient3.jpeg",
            des: "Quis nostrud exercitation ullamco laboris nisi ut aliquipea commodo consequat.",
            footnote: "Lorem ipsum dolor sit amet, consectetur.",
            url: "/patient/2",
          }
        ]
      }
    },
    methods: {
      noHovered() {
        if(!this.notHome){
          this.activeBox = -1
        }
      },
      defaultState(){
        setTimeout(() => {
          this.activeBox = -1
        }, 2000)
      },
    },
    computed: {
      checkInner() {
        return this.notHome ? this.pageId : this.activeBox
      },
      notHome() {
        return this.currentPage !== 'Home'
      },
      currentPage() {
        return this.$route.name;
      },
    },
    mounted() {
      if (this.notHome){
        this.activeBox = this.pageId
      }
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    height: calc(100vh - 50px);
    width: calc(100% - 100px);
    margin: 0 auto;
  }

  .home {
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    padding: 50px;
    background-image: url('~@/assets/img/home.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all linear 0.5s;
    position: relative;

    &-bg-0 {
      background-image: url('~@/assets/img/patient1.jpeg');
    }
    &-bg-1 {
      background-image: url('~@/assets/img/patient2.jpeg');
    }
    &-bg-2 {
      background-image: url('~@/assets/img/patient3.jpeg');
    }

    &__header {
      width: 60%;
      max-width: 798px;
      margin: 50px auto 0;
      display: block;
      font-weight: 600;
      font-size: 40px;
      line-height: 49px;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      position: relative;
      small {
        display: block;
        font-size: 14px;
      }
      .scrolling{
        position: absolute;
        left: -30px;
        top:50%;
        margin-top: -31px;
        text-align: center;
        opacity: 0;
        transition: all ease-in 0.5s;
        transition-delay: 1.2s;
        &__circle{
          display: block;
          margin-bottom: 14px;
          & svg{
            display: block;
            margin: 0 auto;
          }
        }
        &__arrow{
          animation: scrolling-arrow 1s ease-in-out 0s infinite alternate;
          display: block;
          & svg{
            display: block;
            margin: 0 auto;
          }
        }
      }
    }

    &__nav {
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      min-height: 195px;
      max-height: 195px;
      background-color: rgba(58, 198, 231, .7);
      opacity: 0.8;
      display: flex;
      align-content: center;
      justify-content: center;
      transition: all ease 0.4s ;
      &:hover{
        background-color: transparent;
      }

      .box {
        width: calc(100% / 3);
        cursor: pointer;
        padding: 45px 20px 22px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:nth-child(1) {
          padding-left: 50px;
        }

        &:nth-child(3) {
          padding-right: 50px;
        }

        &__des {
          opacity: 1;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: #fff;
          max-width: 80%;
          transition: all ease 0.4s ;
          max-height: 100px;
        }

        &:hover .box__des{
          opacity: 0;
          max-height: 0;
          overflow: hidden;
        }

        &__footnote {
          margin-top: 7px;
          font-style: normal;
          font-weight: 600;
          font-size: 10px;
          line-height: 18px;
          color: #FFFFFF;
          transition: all ease 0.4s ;
          max-height: 40px;
        }

        &:hover .box__footnote{
          opacity: 0;
          max-height: 0;
          overflow: hidden;
        }

        &__link {
          margin-top: 12px;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          color: #fff;
          text-transform: uppercase;
          display: flex;
          align-content: center;
          text-decoration: none;

          span {
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .go-home-btn{
    position: absolute;
    top: 84px;
    left: 34px;
    z-index: 2;
    opacity: 0;
    transition: all ease-in 0.5s;
    transition-delay: 1.2s;
  }

  .innerOpened {
    .go-home-btn {
      opacity: 1;
    }
  }

  .innerOpened {
    .scrolling {
      opacity: 1;
    }
  }

  @keyframes scrolling-arrow {
    0%{
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(4px)
    }
  }

  .innerOpened {
    overflow: hidden;
    height: 382px;
    transition: all linear 0.7s;
    transition-delay: 0.7s;
    & .home{
      &__nav{
        visibility: hidden;
        bottom: -195px;
        transition: bottom linear 0.7s;
      }
    }
  }

  .comeHome {
    height: calc(100vh - 50px);
    transition: all ease-in 0.5s;
    transition-delay: 1.2s;
    & .home{
      &__nav{
        bottom: 0;
        transition: bottom linear 0.5s;
        transition-delay: 1.7s;
      }
    }
  }
</style>