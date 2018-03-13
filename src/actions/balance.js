import * as consts from '../constants'
export const setBalance=balance=>{
    return{
        type:consts.SET_BALANCE,
        balance
    }
}