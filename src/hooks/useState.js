import {mapState,useStore} from 'vuex'
import {computed} from 'vue'
export function useState(mapper){

    const store =useStore()
   
    const storeState={}
    const storeStateFns=mapState(mapper)
    Object.keys(storeStateFns).forEach(fnKey=>{
      const fn=storeStateFns[fnKey].bind({$store:store})
      storeState[fnKey]=computed(fn)
    })
    return storeState

}