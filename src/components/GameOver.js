import React from 'react';

const GameOver = (props) => {
    const {score, close}=props
    let comments =`${
        (score <= 60)
        ?"You can do better 😀 "
        :(score>=60 && score <=90)
        ?" You almost get to 100 😁"
        :(score>=90 && score <=120)
        ?"You are doing great 👏 "
        :(score>=120 && score <=150)
        ?"Well done 🍕"
        :(score>=150 && score <=200)
        ?"WOW you are game Player 🍷 "
        :(score>=200)
        ?"Get Chocolate Ice Cream 🍦"
        :""
    } `
    
    
    return (
        <div className="popup">
            <div className="overlay">
            <button onClick={close}>X</button>
                <h1> Game Over </h1>
                <div>
                    <p> Your Score was : <span>{score} </span></p>
                    <p>{comments}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default GameOver;