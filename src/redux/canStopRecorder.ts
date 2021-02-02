import { Action } from 'redux'
import {RootState} from "./store"

interface CanStopRecorderState {
  dateStart : string;
}

const START = 'canstop/start'
const STOP = 'canstop/stop'
const MIDSTOP = 'canstop/midstop'
const MIDSTART = 'canstop/midstart'

type StartAction = Action<typeof START>
type StopAction = Action<typeof STOP>
type MidStopAction = Action<typeof MIDSTOP>
type MidStartAction = Action<typeof MIDSTART>

export const start = ():StartAction => ({  
  type: START
})

export const stop = ():StopAction => ({
  type: STOP
})

export const midstop = ():MidStopAction => ({
  type: MIDSTOP
})

export const midstart = ():MidStartAction => ({
  type: MIDSTART
})


export const selectCanStopRecorderState = (rootState: RootState) => rootState.canStopRecorder
export const selectDateStart = (rootState: RootState) => selectCanStopRecorderState(rootState).dateStart

const initialState: CanStopRecorderState = {
  dateStart: ''
}

const canStopRecorderReducer = (
  state: CanStopRecorderState = initialState, 
  action: StartAction | StopAction | MidStopAction | MidStartAction
) => {
  switch(action.type) {
    case START:
      return { ...state, dateStart: new Date().toISOString() }
    case STOP:
      return { ...state, dateStart: ''};
    case MIDSTOP:
      return {...state}
    case MIDSTART:
      return {...state, dateStart: }
    default:
      return state;
  }
}

export default canStopRecorderReducer