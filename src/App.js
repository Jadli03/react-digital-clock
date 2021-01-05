import React, { useState } from "react";

const App = () => { 
    
    let time = new Date().toLocaleTimeString();
    const [ctime,setTime] = useState(time);

    const updateTime =() =>{
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000);

    return(
        <>
        <div className="clock">
            <h1> {ctime} </h1>
        </div>
        </>
    );
};

export default App;
