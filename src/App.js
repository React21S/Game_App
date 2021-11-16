
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
    pace:1500,
    rounds:0,
    gameStart:false
  }

  timer=undefined;


  // clickHandler handler
  clickHandler = (id)=>{
    // To stop the game if click wrong button
    if(this.state.current !==id){
      this.stopHandler();
      return;
    }
  this.setState({
    score:this.state.score+10,
    rounds:0, 
  })
  };

  // active area for game highlighted handler
  nextCircle =()=>{
    // To stop the game if start button does not click
    if(this.state.rounds >= 5){
      this.stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive=getRndInteger(1, 4)
    } while (nextActive ===this.state.current);

    this.setState({
      current:nextActive,
      pace: this.state.pace * 0.95,
      rounds:this.state.rounds + 1,
    });
    this.timer = setTimeout(this.nextCircle, this.state.pace)
  };

  // Start Handler
  startHandler=()=>{
    this.nextCircle();
    this.setState({gameStart:true})
  };

  // Stop Handler
  stopHandler=()=>{
    clearTimeout(this.timer);
    this.setState({
      showGameOver:true,  
      current:0,
      gameStart:false,
    })
  };

  // Close Handler
  closeHandler =()=>{
  this.setState({
    showGameOver:false, 
    score:0, 
    pace:1500,
    rounds:0,
  })
  };


  // Render 
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          {this.state.showGameOver && <GameOver 
          score={this.state.score} 
          close={this.closeHandler}/>}

          <h1>Speed Counter Game </h1>
      
          <div className="circles">
            {
              circles.map(circle=>(<Circle 
                key={circle.id} 
                color={circle.color} 
                id={circle.id} 
                click={()=>this.clickHandler(circle.id)}
               
              active={this.state.current === circle.id}
                />
              ))
            }
          </div>
          
          <p>Your Score : {this.state.score}</p>
          <div>
            <button disabled={this.state.gameStart} type="submit" onClick={this.startHandler}>Start Game</button>
            <button onClick={this.stopHandler}>End Game</button>
          </div>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default App;


