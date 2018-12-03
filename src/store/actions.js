import {reqDatahome,reqDatanav,reqDatatopic} from '../api'
import {GET_HOMEDATA,GET_GOODSDATA,GET_NAVDATA} from './mutation-types'
export default {
  //异步获取home数据
  async getDatahome({commit},cb){
    const result = await reqDatahome();
    if(result.code === 0 ){
      const homedata = result.data
      commit(GET_HOMEDATA,{homedata})
      typeof cb === 'function' && cb();
    }
  },
  //异步获取goods数据
  async getDataGoods({commit},cb){
    const result = await reqDatatopic();
    if(result.code === 0 ){
      const goodsdata = result.data
      commit(GET_GOODSDATA,{goodsdata})
      typeof cb === 'function' && cb();
    }
  },
  //异步获取nav数据
  async getDataNav({commit},cb){
    const result = await reqDatanav();
    if(result.code === 0 ){
      const navdata = result.data
      commit(GET_NAVDATA,{navdata})
      typeof cb === 'function' && cb();
    }
  }
}
