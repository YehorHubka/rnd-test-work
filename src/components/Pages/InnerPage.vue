<template>
   <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
   >
<!--   <div class="text-box" :class="{fading: fadingIn, fadingOut: !fadingIn}">-->
   <div class="text-box" >
      <h2>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      <p class="p__bigger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
   </div>
   </transition>
</template>

<script>
   import gsap from 'gsap'

   export default {
      name: 'InnerPage',
      data() {
         return {

         }
      },
      methods: {
         beforeEnter(el) {
            el.style.transform = 'translateY(-50px)'
            el.style.opacity = 0
         },
         enter(el) {
            gsap.to(el, {
               duration: 1,
               y: 0,
               opacity: 1,
               ease: 'ease'
            })
         },
         beforeLeave(el) {
            el.style.transform = 'translateY(0px)'
            el.style.opacity = 1
         },
         leave(el){
            gsap.to(el, {
               duration: 0,
               y: 50,
               opacity: 0,
               ease: 'ease'
            })
         }
      },
      mounted() {

      },
   }
</script>

<style lang="scss" scoped>
   .text-box{
      width: calc(100% - 100px);
      max-width: 940px;
      margin: 0 auto;
      padding: 60px 0 110px;
      transition: all ease 0.7s;
      transition-delay: 0.7s;
      transform: translateY(60px);
      opacity: 0;
      &.fading{
         opacity: 1;
         transform: translateY(0px);
      }
      h2 {
         font-weight: bold;
         font-size: 32px;
         line-height: 40px;
         color: #515153;
         margin: 0 0 40px;
      }
      p{
         font-size: 16px;
         line-height: 24px;
         color: #000000;
         margin: 0 0 42px;
         &.p__bigger{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: #515153;
         }
         &:last-child{
            margin-bottom: 0;
         }
      }
   }
</style>