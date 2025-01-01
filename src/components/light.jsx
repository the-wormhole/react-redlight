function Light({customClass,...props}){
    return <div className={`w-28 h-28 ml-3 rounded-full ${customClass}`} {...props}></div>
}

export default Light;