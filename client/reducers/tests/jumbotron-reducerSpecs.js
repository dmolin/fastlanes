const {describe, it} = global;
import {expect} from 'chai';
import jumbotronReducer,{initialState} from '../jumbotron-reducer'
import {slideTo} from '../../actions/jumbotron-actions'
import sinon from 'sinon';

describe('reducers.jumbotron.slide', () => {
  it('should return a new state with the new activeIndex', () => {
    const state = initialState
    const newState = jumbotronReducer(state, slideTo(1))
    expect(newState.activeIndex).to.equal(1)
    expect(newState.highestIndex).to.equal(1)
  })

  it("doesn't update the highest index if the current one if higher in value", () => {
    const state = Object.assign({}, initialState, {highestIndex:5})
    const newState = jumbotronReducer(state, slideTo(3))
    expect(newState.activeIndex).to.equal(3)
    expect(newState.highestIndex).to.equal(5)
  })
})