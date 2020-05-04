<template>
  <div id="app">
    <router-link to="/" class="tohome"><H2 >web前端笔记本</H2></router-link>
    
    <div id="nav">
      <!-- <router-link to="/" class="tohome"><h2 >web前端笔记本</h2></router-link> -->
      <!-- <router-link to="/">首页</router-link> | -->
     
    </div>
    <router-view/>
  </div>
</template>

<style>
.tohome {
   text-decoration: none;
   color: black;
}
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
