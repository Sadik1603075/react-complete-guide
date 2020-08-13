import React, { Component } from 'react';
import Person from '../Components/Persons/Persons';
import Classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {

  constructor(props)
  {
    super(props);
    console.log('[app.js] constructor');

    /*this.state={
     
        person :
         [
            {id:'knd12' ,name : "Sadik",age:24},
            {id:'lks89' , name : "Jafor",age:24},
            {id:'ksa80' ,name : "Nahid",age:23}
         ],
        showPerson:false
    }*/
  }

  state = 
  {
    person :
     [
        {id:'knd12' ,name : "Sadik",age:24},
        {id:'lks89' , name : "Jafor",age:24},
        {id:'ksa80' ,name : "Nahid",age:23}
     ],
    showPerson:false
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log('[app.js] getDerivedStateFromProps',props );
    // always return an updated state , if we need to update our props before rendering then this life cycle hook is called
    return state;
  }

deletePersonHandler=(personIdx) =>{
  const persons =[...this.state.person];
  persons.splice(personIdx,1);
  this.setState({person:persons});
}


nameChangedHandler =(event,id)=>
{
  const personIdx = this.state.person.findIndex(p =>
    {
      return p.id===id;
    });

    const person = {...this.state.person[personIdx]};

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIdx] = person;
    this.setState({person:persons});
}

togglePersonHandler=()=>
{
  this.setState({showPerson:!this.state.showPerson})
}

componentDidMount()
{
  console.log('[app.js]componentDidMount is called');
}
  render(){
    console.log('app.js Render');

  let person = null; 

  if(this.state.showPerson)
      {
        person = <Person
                  persons = {this.state.person}
                  click =   {this.deletePersonHandler}
                  changed = {this.nameChangedHandler} 
                 />
      }

  return (

     <div className={Classes.App}>
      <Cockpit
        title ={this.props.apptitle}
        showPerson = {this.state.showPerson}
        person = {this.state.person}
        clicked = {this.togglePersonHandler}
      />
      {person}
        
     </div>
 
  );
  }
}
export default App;










/*
import React, { Component } from 'react';
import Person from '../Components/Persons/Persons';
import Classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {

  state = 
  {
    person :
     [
        {id:'knd12' ,name : "Sadik",age:24},
        {id:'lks89' , name : "Jafor",age:24},
        {id:'ksa80' ,name : "Nahid",age:23}
     ],
    showPerson:false
  }



SwitchNameHandler =(newName)=>
{
  this.setState
  (
    {
      person :
       [
        {name : newName,age:30},
        {name : "Shibly",age:30},
        {name : "Nahid",age:23}
       ]
    }

  )
  //console.log('Hello i am noob developer');
}

deletePersonHandler=(personIdx) =>{
  const persons =[...this.state.person];
  persons.splice(personIdx,1);
  this.setState({person:persons});
}


nameChangedHandler =(event,id)=>
{
  const personIdx = this.state.person.findIndex(p =>
    {
      return p.id===id;
    });

    const person = {...this.state.person[personIdx]};

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIdx] = person;
    this.setState({person:persons});

    //const person = Object.assign({},this.state.person[personIdx]);
}



togglePersonHandler=()=>
{
  this.setState({showPerson:!this.state.showPerson})
}
  render(){

    const style = {
      backgroundColor : 'green',
      color:'white',
      font :'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
  }
  let person = null; 

  if(this.state.showPerson)
      {
        person = <Person
                  persons = {this.state.person}
                  click =   {this.deletePersonHandler}
                  changed = {this.nameChangedHandler} 
                 />
        style.backgroundColor='red';
      }

  const classs=[];
  if(this.state.person.length<=2)
  {
    classs.push(Classes.red);
  }
  if(this.state.person.length<=1)
  classs.push(Classes.bold);


  return (

     <div className="App">
        <p className={classs.join(' ')}>Hello I'm a react developer</p>
        <button
        className="btnclass" 
        onClick={this.togglePersonHandler} style={style}>SwitchName</button>
        {person}
     </div>
 
  );
  }
  //return React.createElement('div',null,'Hi','I\'m a react app');
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a react app'));
}

export default App;


  <Cockpit
  showPerson = {this.state.showPerson}
  persons = {this.state.person}
  clicked = {this.togglePersonHandler}
   />
*/

/*
import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium,{StyleRoot} from 'radium';


class App extends Component {

  state = 
  {
    person :
     [
        {id:'knd12' ,name : "Sadik",age:24},
        {id:'lks89' , name : "Jafor",age:24},
        {id:'ksa80' ,name : "Nahid",age:23}
     ],
    showPerson:false
  }



SwitchNameHandler =(newName)=>
{
  this.setState
  (
    {
      person :
       [
        {name : newName,age:30},
        {name : "Shibly",age:30},
        {name : "Nahid",age:23}
       ]
    }

  )
  //console.log('Hello i am noob developer');
}

deletePersonHandler=(personIdx) =>{
  const persons =[...this.state.person];
  persons.splice(personIdx,1);
  this.setState({person:persons});
}


nameChangedHandler =(event,id)=>
{
  const personIdx = this.state.person.findIndex(p =>
    {
      return p.id===id;
    });

    const person = {...this.state.person[personIdx]};

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIdx] = person;
    this.setState({person:persons});

    //const person = Object.assign({},this.state.person[personIdx]);
}



togglePersonHandler=()=>
{
  this.setState({showPerson:!this.state.showPerson})
}
  render(){

    const style = {
      backgroundColor : 'green',
      color:'white',
      font :'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':
      {
        backgroundColor : 'lightgreen',
        color:'black'
      }
  }
  let person = null;

  if(this.state.showPerson)
  {
    person=
    (
     <div>
       {
         this.state.person.map( (per,idx) =>
            {
              return <Person
               name={per.name} 
               age={per.age} 
               changed={(event)=>this.nameChangedHandler(event,per.id)}
               click ={()=>this.deletePersonHandler(idx)}
               key ={per.id}/>
            }
          )
        }
     </div>
    );
    style.backgroundColor='red';
    style[':hover']=
    {
      backgroundColor : 'salmon',
      color:'black'
    }
  }
  const classs=[];
  if(this.state.person.length<=2)
  {
    classs.push('red');
  }
  if(this.state.person.length<=1)
  classs.push('bold');


  return (
    <StyleRoot>
     <div className="App">
        <p className={classs.join(' ')}>Hello I'm a react developer</p>
        <button onClick={this.togglePersonHandler} style={style}>SwitchName</button>
        {person}
     </div>
     </StyleRoot>
  );
  }
  //return React.createElement('div',null,'Hi','I\'m a react app');
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a react app'));
}

export default Radium(App);
*/ 
