<template>
  <div id="app">
    
    <header>
      <div class="pp-menu">
       <router-link to="/home">Home</router-link> 
      </div>

      <div class="pp-menu">
       <router-link to="/page1">Page1</router-link> 
      </div>

      <div class="pp-menu">
       <router-link to="/page2">Page2</router-link> 
      </div>
    </header>

    <div class="pp-content-container">
      <router-view></router-view>
    </div>

    <footer>
      <div>footer</div>
    </footer>



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
  background-color: rgb(216,216,216);

  .pp-menu {
    display: inline-block;
    font-size: 30px;
    padding: 30px;
    
    
  }

}

.pp-content-container {

}

footer {
  font-size: 20px;
  font-weight: bold;
  height: 100px;
  background-color: cadetblue;

}


}
</style>
