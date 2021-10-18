<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" >About</router-link>
    <div @click="goAbout">跳转About</div>
  </div>
  <router-view v-slot='props'>
    <transition name="why">
    <component :is="props.Component"></component>
    </transition>
  </router-view>
</template>

<script>

import {useRouter} from 'vue-router'
export default {
  setup() {
    const router =useRouter();
    const goAbout=()=>{
      router.push('/about')
    }
    return {
      goAbout
    }
  }
  
}
</script>

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
.why-enter-from,.why-leave-to{
  opacity: 0;
}
.why-enter-active,.why-leave-active{
  transition:opacity 1s ease;
}

</style>
