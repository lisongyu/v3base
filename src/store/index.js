import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:0,
    books:[
      {
        name:'深入Vuejs',price:120,count:3
      },
      {
        name:'深入Webpack',price:10,count:5
      },
      {
        name:'深入js',price:1200,count:30
      }
    ]
  },
  getters:{
    totalPrice(state){
      let totalPrice=0;
      for(const book of state.books){
        totalPrice+=book.count*book.price
      }
      return totalPrice
    

    }
  },
  mutations: {
    increment(state){
      state.counter++

    },
    decrement(state){
      state.counter--

    }
  },
  actions: {
  },
  modules: {
  }
})
