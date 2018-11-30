import ajax from './ajax'

export const reqDatahome = () => ajax('/homedata')
export const reqDatanav = () => ajax('/topicdata')
export const reqDatatopic = () => ajax('/navdata')
