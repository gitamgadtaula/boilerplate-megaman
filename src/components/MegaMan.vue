<template>
  <div class="hello">
  <landing-page></landing-page>
  <tokenomics></tokenomics>
  <benefits></benefits>
  <gamification></gamification>
  <start-crypto></start-crypto>
  <about></about>
  
  </div>
</template>

<script>

import LandingPage from "./LandingPage.vue"
import Tokenomics from './Tokenomics.vue'
import Benefits from './Benefits.vue'
import Gamification from "./Gamification.vue"
import StartCrypto from "./StartCrypto.vue"
import About from "./About.vue"


export default {
  name: "MegaMan",
  components: { LandingPage,  Tokenomics, Benefits, Gamification, StartCrypto, About },
  props: {
     msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
