import React,{Component} from "react";
import Course from "./src/Course";
class Student extends Component{
    render(){
    return (
        <div>
            <h2>Student Component (Class)</h2>
            <p> Name: Neha</p>
            <Course/>
        </div>
    );
}
}

export default Student;