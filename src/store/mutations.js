
import {GET_HOMEDATA,GET_GOODSDATA,GET_NAVDATA,GET_CATELIST} from './mutation-types'

export default {
  [GET_HOMEDATA](state,{homedata}){
    state.homedata = homedata;
  },
  [GET_GOODSDATA](state,{goodsdata}){
    state.goodsdata = goodsdata;
  },
  [GET_NAVDATA](state,{navdata}){
    state.navdata = navdata;
  },
  [GET_CATELIST](state,{catelist}){
    state.catelist = catelist
  },
}
