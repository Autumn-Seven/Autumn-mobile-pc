<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
html,body{
  margin:0;
  padding: 0;
}
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color:#8a8484;
}
ul{
  padding:0;
  margin: 0;
}
li{
  list-style:none;
  padding:0;
  margin: 0;
}
#app {
  font-family: "Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
