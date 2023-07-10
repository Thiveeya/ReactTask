import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function BaseDefault({title,styles,children}){
    const history = useHistory();
    return(
        <>
        
            <div className="navbar">
                <Button onClick={()=>history.push("/")} variant="danger">Home</Button>
                <Button onClick={()=>history.push("/students")} variant="danger">Student</Button>
                <Button onClick={()=>history.push("/teacher")} variant="danger">Teacher</Button>
            </div>
            <div className={styles}>{title}</div>
            <div className="main-body">{children}</div>
        </>
    )
}