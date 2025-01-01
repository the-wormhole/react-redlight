import Light from "./light.jsx"

function CompleteLight({customClass="",isRed,isGreen,isYellow,...props}){
    return(       
    <div className={`mt-40 flex w-full justify-center ${customClass}`} {...props}>
        <div className="bg-black h-32 w-96 rounded-2xl flex items-center">
            <Light customClass={`${isRed?"bg-red-600":"bg-gray-500"}`}/>
            <Light customClass={`${isYellow?"bg-yellow-300":"bg-gray-500"}`}/>
            <Light customClass={`${isGreen?"bg-green-600":"bg-gray-500"}`}/>
        </div>
  </div>)
}

export default CompleteLight