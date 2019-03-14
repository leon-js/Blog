import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Clock from './Person/Clock'

class App extends Component {

  constructor( props ){
    super( props )
    this.state = {
      persons:[
        {id: 1,name: '梁李昊',school: '温州商学院'},
        {id: 2,name: '黄佳琪',school: '绍兴学院'},
        {id: 3,name: '梁思恬',school: '杭州学院'}
      ]
    }
  }

  preventPop(name, e){    //事件对象e要放在最后
    e.preventDefault();
    alert(name);
    console.log(1)
  }

  swichNameHandler = ( name,e ) => {
    e.preventDefault();
    this.setState({
      name: name
    })
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const aaa = this.state.user
    console.log(aaa)
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow,
      aaa: '创建成功'
    })
    console.log(aaa)
  }

  deletePersonHandler = (personIndex,e) => {
    e.preventDefault();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      outline: 'none' 
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        // <Person
        //       changed={this.nameChangedHandler}
        //       myclick={this.swichNameHandler.bind(this,'黄佳琪')} name = { this.state.name } school = { this.state.school } />
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
              changed={(event) => this.nameChangedHandler(event,person.id)}
              myclick={this.deletePersonHandler.bind(this,index)}
              // 需要传值的情况下用箭头函数可以防止直接自动执行
              // myclick={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name} 
              school={person.school}/>
            })
          }
        </div>
      )

      style.backgroundColor = 'red';
    }

    // const classes = ["red","bold"].join(" ")
    const classes = [];

    if(this.state.persons.length <= 2 ){
      classes.push("red");
      console.log(classes)
    }

    if(this.state.persons.length <= 1){
      classes.push("bold");
      console.log(classes)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="App-body">
            <p className={classes.join(" ")}>大家好</p>
            <button style={ style } onClick={ this.togglePersonsHandler}>内容切换</button>
            {persons}
            {/* { this.state.showPersons?
              <Person
              changed={this.nameChangedHandler}
              myclick={this.swichNameHandler.bind(this,'黄佳琪')} name = { this.state.name } school = { this.state.school } /> :null
            } */}
          <Clock />
        </div>
      </div>
    );
  }

}

export default App;
