import * as consts from '../constants'
import  balanceReducers from './balanceReducers'

describe('balance reducers',()=>{
   
    const balance=10;
    const setBlanaceAction={
        type:consts.SET_BALANCE,
        balance    
     }
    it('should set the store balance',()=>{

        expect(balanceReducers(undefined,setBlanaceAction))
        .toEqual({balance})

    })



})