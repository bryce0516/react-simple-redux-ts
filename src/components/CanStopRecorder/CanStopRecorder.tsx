import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { midstop, selectDateStart, start, stop } from '../../redux/canStopRecorder';
import cx from 'classnames'

export interface Props {
  
}
 
const addZero = (num: number) => (num < 10 ? `0${num}`: `${num}`);
const CanStopRecorder = () => {
  const dispatch = useDispatch();
  let dateStart = useSelector(selectDateStart)
  let interval = useRef<number>(0)
  const [count, setCount] = useState<number>(0);
  const [canStop, setCanStop ] = useState<boolean>(false)
  const [second , setSecond] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, sethours] = useState<number>(0);
  const [click , setClick] = useState<number>(0);

  const timeHandle = () => { 
    if(dateStart === 0 ) {
      dateStart = dateStart + 1
      if(dateStart === 1) {
        dispatch(start())
        interval.current = window.setInterval(() => {
          setSecond(second => second + 1)
        }, 1000)
        return 
      }
    }
    if(dateStart === 1) {
      dateStart = dateStart + 1 
      if(dateStart === 2) {
        window.clearInterval(interval.current)
        dispatch(midstop())
        return 
      }
    }
  }

  const dbClickHandle = () => {
    window.clearInterval(interval.current)
    dispatch(stop())
      setSecond(0)
      setMinutes(0)
      sethours(0)
      window.clearInterval(interval.current)
  } 

  if(second === 60) {
    setSecond(0)
    setMinutes(minutes => minutes + 1)
  }
  if(minutes === 60) {
    setMinutes(0)
    sethours(hours => hours + 1)
  }
  if(hours === 1) {
    alert('Time is done')
    setSecond(0)
    setMinutes(0)
    sethours(0)
    window.clearInterval(interval.current)
  }

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current)
    }
  },[])

  return (  
    <>
      <div>
        this is can stop recorder, if you did onclick stop state else if did double click can be initial state
      </div>
      <div className={cx('recorder', {'recorder-started': dateStart})}>
        <button className="recorder-record" onClick={timeHandle} onDoubleClick={dbClickHandle}>
          <span></span>
        </button>
        {/* <div>{minutes} : {second}</div> */}
        <div className="recorder-counter">{addZero(hours)}:{addZero(minutes)}:{addZero(second)}</div>
      </div>
    </>
  );
}
 
export default CanStopRecorder;