// import { useState } from "react/cjs/react.production.min";
import React, {useEffect,useState} from 'react';

export const Timer = ({startTime,endTime})=>{
    console.log("hello",startTime)
    const [timer,setTimer] = useState(startTime);
    useEffect(()=>{
        const id = setInterval(()=>{
            setTimer((ele)=>{
                if(ele<=endTime){
                    clearInterval(id);
                    return endTime;
                }
                return ele-1
            })
        },1000)
        
        return () => {
            console.log("Unmounter Timer");
            clearInterval(id)
        }
    },[])
    return <div>Timer: {timer}</div>
}