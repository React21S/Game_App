import React from 'react';


const closePopupHandler=()=>{
    window.location.reload();
}

const GameOver = (props) => {

    return (
        <div className="popup">
            <div className="overlay">
            <button onClick={closePopupHandler}>X</button>
                <h1> Game Over </h1>
                <div>
                    <p> Your Score was : <span>{props.score} </span></p>
                </div>
            </div>

        </div>
    );
};

export default GameOver;