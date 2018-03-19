<template>
  <div class="pp-home">
      <div class="pp-title">Home</div>
       <v-text-field
          name="input-1"
          label="search (ex : sun, star..)"
          v-model="keyword"
          @input="getData()"
          @change="getData()"
        ></v-text-field>
        
      <div v-for="data in results" v-if="keyword.length > 0">
        <img class="pp-image-box" :src="data.links[0].href">
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      msg: "search",
      keyword: "",
      url : "https://images-api.nasa.gov/search?q=",
      results : null
    };
  },


  methods: {
  
    getData() {
      axios
        .get(
          this.url + this.keyword + '&media_type=image'
        )
        .then(response => {
          console.log(response.data);
          this.results = response.data.collection.items
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.pp-home {
  .pp-title {
    font-size: 50px;
    font-weight: bold;
  }

  .pp-button {
    width: 70px;
    text-align: center;
    border: 1px solid black;
  }

  .pp-image-box {
    margin: 3px;
    float: left;
    width: 300px;
    height: 300px;
  }
}
</style>


