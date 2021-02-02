import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { midstop, selectDateStart, start, stop } from '../../redux/canStopRecorder';
import cx from 'classnames'

export interface Props {
  
}
 
const addZero = (num: number) => (num < 10 ? `0${num}`: `${num}`);
const CanStopRecorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart)
  const started = dateStart !== '';
  let interval = useRef<number>(0)
  const [count, setCount] = useState<number>(0);
  const [canStop, setCanStop ] = useState<boolean>(false)

  const handleClick = () => {
    if(started) {
      if(canStop) {
        window.clearInterval(interval.current)
        dispatch(midstop())
      } else {
        console.log('pass')
        dispatch(start())
        interval.current = window.setInterval(()=>{
          setCount(count => count + 1)
        },1000)
      }
    } else {
      dispatch(start())
      interval.current = window.setInterval(()=>{
        setCount(count => count + 1)
      },1000)
    }
  }

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current)
    }
  },[])

  let seconds = started ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000) : 0
  console.log('dateStart',dateStart)
  const hours = seconds ? Math.floor(seconds/ 60 /60) : 0;

  seconds -= hours * 60 * 60;
  const minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;  

  return (  
    <>
      <div>
        this is can stop recorder
      </div>
      <div className={cx('recorder', {'recorder-started': started})}>
        <button className="recorder-record" onClick={handleClick}>
          <span></span>
        </button>
        <div className="recorder-counter">{addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}</div>
      </div>
    </>
  );
}
 
export default CanStopRecorder;