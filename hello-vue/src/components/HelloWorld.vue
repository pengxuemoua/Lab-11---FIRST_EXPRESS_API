<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>{{ helloMessage }}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      helloMessage: ''
    }
  },
  props: {
    msg: String
  },
  mounted() { // the mounted function gets called as the vue componenets come onto the screen. 
    // this is the place for inital set up, configuration and fetching data.
    // anything that needs to happen as the app is loaded.

    //getHelloMessage is returning a promise
    this.$hello_api.getHelloMessage().then( resp => {
      this.helloMessage = resp.message
    }) 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
