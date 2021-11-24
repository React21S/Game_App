import React from 'react';

const GameOver = (props) => {
    
    let comments =`${
    (props.score <= 60)
    ?"You can do better 😀 "
    :(props.score>=60 && props.score <=90)
    ?" You almost get to 100 😁"
    :(props.score>=90 && props.score <=120)
    ?"You are doing great 👏 "
    :(props.score>=120 && props.score <=150)
    ?"Well done 🍕"
    :(props.score>=150 && props.score <=200)
    ?"WOW you are game Player 🍷 "
    :(props.score>=200)
    ?"Get Chocolate Ice Cream 🍦"
    :""
    } `
    
    
    return (
        <div className="popup">
            <div className="overlay">
            <button onClick={props.close}>X</button>
                <h1> Game Over </h1>
                <div>
                    <p> Your Score was : <span>{props.score} </span></p>
                    <p>{comments}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default GameOver;