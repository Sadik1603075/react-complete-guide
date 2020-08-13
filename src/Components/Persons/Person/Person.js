import React from 'react';
import Classes from'./Person.css'

const person = (props) =>
{

    console.log('Person.js Rendering... ');
 
return(
     <div className={Classes.Person} >
         <p onClick = {props.click} >Hello I am {props.name} from reactapp.And I'm {props.age} years old</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed}  value={props.name}/>
    </div>
);
}
export default person;

/* 
import React from 'react';
import './Person.css'
import Radium from 'radium';
const person = (props) =>
{
    const style ={
        '@media (min-width: 500px)':{
            width:'450px'
        }
    };
return(
     <div className="Person" style={style}>
         <p onClick = {props.click} >Hello I am {props.name} from reactapp.And I'm {props.age} years old</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed}  value={props.name}/>
    </div>
);
}
export default Radium(person);*/