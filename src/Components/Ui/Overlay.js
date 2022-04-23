import React from "react";


const Overlay = (props) => {
    return(
    <div className="bg-black opacity-40 w-full h-full absolute left-0" onClick={() => props.clear()}>
    </div>
    )
}

export default Overlay

