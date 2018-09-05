<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.textField {
  width: 500px;
}

.container {
  padding: 60px 0px 40px 0px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 60%;
  background-color: lightgray;
}

.button {
  margin-bottom: 20px;
}
</style>
