<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
     <button @click="decrement">-1</button>
  </div>

</template>

<script>

import {mapState,useStore} from 'vuex'
import {computed} from 'vue'
export default {
  // computed:{
  //   ...mapState(['counter'])

  // },
  methods:{
    increment(){
      this.$store.commit('increment')

    },
    decrement(){
       this.$store.commit('decrement')
    }
  },
  setup() {
    
   const store =useStore()
   const sCounter=computed(()=> store.state.counter)
   const storeState={}
   const storeStateFns=mapState(['counter'])
   Object.keys(storeStateFns).forEach(fnKey=>{
     const fn=storeStateFns[fnKey].bind({$store:store})
     storeState[fnKey]=computed(fn)
   })

   return {
     sCounter,
     ...storeState
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
