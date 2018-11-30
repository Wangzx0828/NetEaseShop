
import {GET_HOMEDATA} from './mutation-types'

export default {
  [GET_HOMEDATA](state,{homedata}){
    state.homedata = homedata;
  }
}
