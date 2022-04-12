import React from "react";


const Overlay = (props) => {
    return(
    <div className="bg-black opacity-40 w-full h-full absolute" onClick={() => props.clear()}>
    </div>
    )
}

export default Overlay

