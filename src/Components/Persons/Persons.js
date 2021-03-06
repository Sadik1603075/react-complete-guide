import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index)=>
{
        console.log('Persons..js is rendering..');
        return <Person
                    name={person.name} 
                    age={person.age} 
                    changed={ (event) => props.changed(event,person.id) }
                    click ={ () => props.click(index)}
                    key ={person.id}
               />
});

export default persons;