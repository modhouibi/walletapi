import * as consts from '../constants'

const balanceReducers=(state={balance:0},action)=>{

    switch(action.type){

        case consts.SET_BALANCE:
        return{
            balance:action.balance
        }

        default:
        return state;
    }


}

export default balanceReducers