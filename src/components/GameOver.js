import React from 'react';


// const closePopupHandler=()=>{
//     window.location.reload();
// }

const GameOver = (props) => {
    let comments ="";
    if (props.score <= 60){
        comments = "You can do better 😀 ";
    }
    else if(props.score>=60 && props.score <=90){
        comments = " You almost get to 100 😁"
    }
    else if(props.score>=90 && props.score <=120){
        comments = " You can do better 👏 "
    }
    else if(props.score>=120 && props.score <=150){
        comments = "Well done 🍕"
    }
    else if(props.score>=150 && props.score <=200){
        comments = "WOW you are game Player 🍷 "
    }
    else if(props.score>=200){
        comments = "Get Chocolate Ice Cream 🍦"
    }
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