<template>
  <div id="app">

<v-app>

<header>
    <v-toolbar app>
      <img>
      <div class="pp-menu">
       <router-link to="/home">Home</router-link> 
      </div>

      <div class="pp-menu">
       <router-link to="/page1">Page1</router-link> 
      </div>

      <div class="pp-menu">
       <router-link to="/page2">Page2</router-link> 
      </div>
  </v-toolbar>
</header>

  
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer app>
    <div>Papyrus Version.0.1</div>
  </v-footer>

</v-app>
    




  </div>
</template>

<script>
import Home from "./components/home.vue";
import Page1 from "./components/page1.vue";
import Page2 from "./components/page2.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/page1", component: Page1 },
    { path: "/page2", component: Page2 }
  ]
});

export default {
  name: "app",
  router,
  data() {
    return {
      msg: "Welcome to front of Papyrus"
    };
  }
};
</script>

<style lang="scss">
#app {

header {

  .pp-menu {
    display: inline-block;
    font-size: 30px;
    
    
  }

}

.pp-side-menu {
  font-size: 40px;
  line-height: 5;
}

.pp-content-container {

}

footer {
  font-size: 20px;
  font-weight: bold;
  background-color: cadetblue;

}


}
</style>
