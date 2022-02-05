<template>
  <div id="app">
    <div class="wrapper">
      <BrandHeader/>
      <router-view />
      <router-view v-if="$route.name !== 'Home'" name="inner" />
      <BrandFooter/>
    </div>
  </div>
</template>

<script>


import BrandHeader from "./components/BrandHeader/BrandHeader";
import BrandFooter from "./components/BrandFooter/BrandFooter";

export default {
  name: 'App',
  components: {
    BrandFooter,
    BrandHeader
  },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
</style>
