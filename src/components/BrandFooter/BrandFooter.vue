<template>
  <div class="brand-footer">
    <p class="brand-footer__copyright">
      © 2021 Haymarket Media, Inc. All rights reserved.
    </p>
    <div class="brand-footer__links">
      <a
          target="_blank"
          href="https://www.haymarketmediaus.com/haymarket-media-medical-privacy-policy/"
      >Privacy Policy</a
      >
      <a
          target="_blank"
          href="https://www.haymarketmediaus.com/haymarket-media-inc-us-terms-conditions/"
      >Terms &amp; Conditions</a
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "BrandFooter",
  components: {},
  data() {
    return {
      backButton: false,
    };
  },
};
</script>

<style scoped lang="scss">
.brand-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  padding: 0 50px;
  margin: 0 auto;
  height: 50px;
  z-index: 2000;
  background-color: #ffffff;
  box-sizing: border-box;

  &__copyright {
    margin-right: 20px;
  }

  &__copyright, a {
    font-family: "Open Sans", sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #142847;
    z-index: 3;
  }

  &__links  {
    a {
      margin-right: 20px;
      position: relative;
      cursor: pointer;
    }
  }
}

</style>
