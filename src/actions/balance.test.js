import * as consts from '../constants'
import * as actions from './balance'
describe(' balance actions',()=>{

    const balance=0;
    it('should create an action to set the balance',()=>{
       const expectedAction={
           type:consts.SET_BALANCE,
           balance
        
        }
        expect(actions.setBalance(balance))
        .toEqual(expectedAction)
        
    })
})