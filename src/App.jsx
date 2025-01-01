import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

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
      <div className="mt-40 flex w-full justify-center rotate-90">
        <div className="bg-black h-32 w-96 rounded-2xl flex items-center">
          <div className={`${isRed?"bg-red-600":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
          <div className={`${isYellow?"bg-yellow-300":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
          <div className={`${isGreen?"bg-green-600":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
        </div>
      </div>
      <div className="mt-40 flex w-full justify-center">
        <div className="bg-black h-32 w-96 rounded-2xl flex items-center">
          <div className={`${isRed?"bg-red-600":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
          <div className={`${isYellow?"bg-yellow-300":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
          <div className={`${isGreen?"bg-green-600":"bg-gray-600"} w-28 h-28 ml-3 rounded-full`}></div>
        </div>
      </div>
    </>
  )
}
