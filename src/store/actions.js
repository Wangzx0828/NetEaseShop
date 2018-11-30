import {reqDatahome,reqDatanav,reqDatatopic} from '../api'
import {GET_HOMEDATA} from './mutation-types'
export default {
  //异步获取home数据
  async getDatahome({commit},cb){
    const result = await reqDatahome();
    if(result.code === 0 ){
      const homedata = result.data
      commit(GET_HOMEDATA,{homedata})
      typeof cb === 'function' && cb();
    }
  }
}
