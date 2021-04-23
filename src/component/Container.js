import React,{useState} from "react";
import {Button,Divider} from '@material-ui/core';
import {useSelector, useDispatch} from "react-redux";
import {getTime} from "./redux/action";


function Container(){
const numOfClick = useSelector(state=>state.numOfClick);
const now = useSelector(state=>state.now);
const content = useSelector(state=> state.content);
const dispatch = useDispatch();

    
    setInterval(handleTime,1000);
    const [currentTime,setCurrentTime]=useState(new Date(). toLocaleTimeString());
    function handleTime(){
        const cTime=new Date(). toLocaleTimeString();
        setCurrentTime(cTime);
    }

    return(
        <>
        <div className="div1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfarRj6ZapjQwTjbwUJqarxDhtiRREkXiVEA&usqp=CAU" alt="time-logo"></img></div>
        <div className="div2"><h1>Current time is: {currentTime} </h1></div>
        <div className="div3">
        <Button onClick={()=>dispatch(getTime())} variant="outlined">
        Click Here
      </Button></div>
        <div className="div4"><span>{content.map(x=>{
            return (
                <>{x} 
                <Divider />
                </>
            );
        })}</span></div>
        <div className="div5"><h1>You clicked {numOfClick} times. </h1></div>
        </>
    );
}


export default Container;