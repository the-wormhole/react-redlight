import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";
import Light from "./components/light.jsx"
import CompleteLight from "./components/complete-light";

export default function App() {

  const [isRed,setIsRed] = useState(false);
  const [isYellow,setIsYellow] = useState(false);
  const [isGreen,setIsGreen] = useState(true);

  useEffect(() => {
    if(isGreen){
      setTimeout(()=>{
        setIsGreen(false)
        setIsYellow(true);
      },2000)
    }else if(isYellow){
      setTimeout(()=>{
        setIsYellow(false);
        setIsRed(true);
      },1000)
    }else{
      setTimeout(()=>{
        setIsRed(false)
        setIsGreen(true);
      },2000)
    }
  },[isRed,isYellow,isGreen]);

  return (
    <>
      <CompleteLight customClass="rotate-90" isRed={isRed} isYellow={isYellow} isGreen={isGreen}/>
      <CompleteLight isRed={isRed} isYellow={isYellow} isGreen={isGreen}/>
    </>
  )
}
