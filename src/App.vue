<template>
  <div id="app">
    <loading-page></loading-page>
    <NavBar/>
    <MegaMan />
    <!-- <FAQs/> -->
    <Footer/>
    <FooterCopyright/>
  </div>
</template>

<script>
// import LoadingPage from "./components/LoadingPage.vue"
import NavBar from "./components/NavBar.vue"
import MegaMan from "./components/MegaMan.vue";
import Footer from "./components/Footer.vue"
import FooterCopyright from "./components/FooterCopyright.vue"
// import FAQs from "./components/FAQs.vue"
export default {
  name: "App",
  components: {
    // LoadingPage,
     NavBar, 
     MegaMan, 
     Footer , FooterCopyright, 
    //  FAQs
  }
};
</script>

<style>
@import "./assets/css/font-face.css";
#app {
  font-family: 'ProximaNova';
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b9b7c0;
  /* margin-top: 60px; */
}
body {
  letter-spacing: 0.02em;
  line-height: 1.8 !important;
  word-wrap: break-word;
}
*{
margin: 0;
padding:0;
box-sizing: border-box;
}
li {
  margin: 0 10px;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
/* } */
a{
  color: #fff !important;
}
a:hover{
  color:#d31c32 !important;
  text-decoration: none !important;
}
</style>
