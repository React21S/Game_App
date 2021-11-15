
import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Circle from './components/Circle';
import {circles} from "./components/circles";
import GameOver from './components/GameOver';

const getRndInteger=(min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component {
  state = {
    score:0,
    current:0,
    showGameOver: false, 
  }




timer=undefined;
pace = 1500;

// clickHandler handler
clickHandler = ()=>{
this.setState({
  score:this.state.score+10,
})
}

nextCircle =()=>{
  let nextActive;
  do {
    nextActive=getRndInteger(1, 4)
  } while (nextActive ===this.state.current);

  this.setState({
    current:nextActive
  });

  this.pace *=0.95;
  this.timer = setTimeout(this.nextCircle, this.pace)
};

// Start Handler
startHandler=()=>{
  this.nextCircle();
}

// Stop Handler
stopHandler=()=>{
  clearTimeout(this.timer);
  this.setState({showGameOver:true})
}
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          {this.state.showGameOver && <GameOver score={this.state.score}/>}
          <h1>Speed Counter Game </h1>
      
          <div className="circles">
            {
              circles.map(circle=>(<Circle 
                key={circle.id} 
                color={circle.color} 
                id={circle.id} 
                click={this.clickHandler}
               
              active={this.state.current === circle.id}
                />
              ))
            }
          </div>
          
          <p>Your Score : {this.state.score}</p>
          <div>
            <button type="submit" onClick={this.startHandler}>Start Game</button>
            <button onClick={this.stopHandler}>End Game</button>
          </div>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default App;


