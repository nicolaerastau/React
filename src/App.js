import React, { Component } from 'react';
import './App.css';
import staff from './Person/staff.png';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'George', age: 28, position:'Frontend developer'},
      {name: 'Nick', age: 50, position:'Backend developer'},
      {name: 'Kalle', age: 40, position:'Frontend developer'},
      {name: 'Lars', age: 26, position:'Frontend developer'},
      {name: 'Matias', age: 30, position:'Frontend developer'},
    ]

  }

 changeTeamHandler = () => {
   this.setState({
     persons: [
       {name : 'Nick', age: 50, position:'Frontend developer'},
       {name: 'Harry', age: 35,  position:'Frontend developer'},
       {name: 'Charlie', age:26, position:'Backend developer'},
       {name : 'Oscar', age: 29, position:'Backend developer'},
       {name: 'Thomas', age: 32, position:'Backend developer'},
       {name: 'James', age: 42,position:'Frontend developer'}
     ]
   })
}

  render() {
  const style = {
      backgroundColor: 'rgb(144, 12, 26)',
      color: "white",
      font: 'inherit',
      border: '1px solid black',
      padding:' 2px 7px',
      cursor: 'pointer',

    };

    return (
      <div className="App">
        <h1>React App</h1>
        <button
         style={style}
         onClick={this.changeTeamHandler}>Switch Team</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            position={this.state.persons[0].position}
            changed={this.nameChangedHandler}>My hobbies: Computer
            <div className= 'image'>
              <img style={{width: '150px', height: '135px'}} src={staff} alt=''/>
              </div>
        </Person>


        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            position={this.state.persons[1].position}
            changed={this.nameChangedHandler}>My hobbies: Football
            <div className= 'image'>
              <img style={{width: '150px', height: '135px'}} src={staff} alt=''/>
            </div>
        </Person>

        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            position={this.state.persons[2].position}
            changed={this.nameChangedHandler}>My hobbies:Racing
            <div className= 'image'>
              <img style={{width: '150px', height: '135px'}} src={staff} alt=''/>
            </div>
        </Person>

        <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
            position={this.state.persons[3].position}
            changed={this.nameChangedHandler}>My hobbies: Music
            <div className= 'image'>
              <img style={{width: '150px', height: '135px'}} src={staff} alt=''/>
            </div>
        </Person>

        <Person
            name={this.state.persons[4].name}
            age={this.state.persons[4].age}
            position={this.state.persons[4].position}
            changed={this.nameChangedHandler}>My hobbies: Sport
            <div className= 'image'>
              <img style={{width: '150px', height: '135px'}} src={staff} alt=''/>
            </div>
        </Person>
    </div>
    );
  }
}


export default App;
