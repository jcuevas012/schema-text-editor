import { createStore, applyMiddleware }  from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'
// const stateTransformer = (state) => {
//     if (Iterable.isIterable(state)) return state.toJS()
//     else return state
//   }
  
  const logger = createLogger({

  })
  


export default function setupStore(initilState){
    return createStore(rootReducer, initilState, applyMiddleware(logger))
}