import React from 'react';
import Classes from './Cockpit.css';


const cockpit =(props) => 
{ 
    const classs=[];
    let btnClass = '';

    if(props.showPerson)
       btnClass = Classes.Red;

  if(props.person.length<=2)
  {
    classs.push(Classes.red);
  }
  if(props.person.length<=1)
  classs.push(Classes.bold);


    return <div className={Classes.Cockpit}>
          <p className={classs.join(' ')}>{props.title}</p>
        <button
         className = {btnClass}
         onClick={props.clicked}>SwitchName</button>
    </div>

}
 
export default cockpit;
