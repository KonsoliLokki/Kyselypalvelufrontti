import React from 'react';
import axios from 'axios';

function SendAnswer(allanswers) {


    const sendAnswers = (e) => {

        e.preventDefault();

        if(allanswers.allanswers.length === 0){

            const url = "";
            axios.post(url, allanswers);
        }

    }




console.log(allanswers.allanswers.length)
if(allanswers.allanswers.length === 0) {

    return(
        <div>

        </div>
    )
}

else{
    return(
<div>
{allanswers.allanswers.map (a => {
    return(
        <p key = {a}> {a}</p>
    )
})}
</div>

    )
}

}

export default SendAnswer;