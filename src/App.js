
import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Circle from './components/Circle';
import {circles} from "./components/circles"


class App extends Component {
  state = {
    circles:circles,
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <h1>Game Speed</h1>
          <div className="circles">
            {
              this.state.circles.map(circle=>(<Circle 
                key={circle.id} 
                color={circle.color} 
                id={circle.id} />
              ))
            }
          </div>
          
          <p>Your Score:</p>
          <div>
            <button>Start Game</button>
            <button>Stop Game</button>
          </div>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default App;


