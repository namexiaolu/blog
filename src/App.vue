<template>
  <div id="app">
    <H2>web前端笔记本</H2>
    <div id="nav">
      
      <router-link to="/">首页</router-link> |
      <router-link to="/Article">文章展示</router-link>丨
      <router-link to="/login">归档</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
