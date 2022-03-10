// import { useState } from "react/cjs/react.production.min";
import React, {useEffect,useState} from 'react';

export const Timer = ({startTime,endTime})=>{

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
        console.log("yes")
    },[])
    return <div>Timer: {timer}</div>
}