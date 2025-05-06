import React, { useEffect, useState } from 'react';


export default function Timer() {
  let time = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(time);
  


  useEffect(() => {
    const interval = setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setCurrTime(time);
    },1000);
    return () => clearInterval(interval, 1000);
  }, [])
   
    
  
  return (
  <>
    <div className="timer fw-600"><h3>{currTime}</h3></div>
  </>
  )
}
