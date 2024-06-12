import React, { useState } from "react";

const Boards = () => {
    const [dice, setDice] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [winner,setWinner] = useState('Start Playing');

    const updateDice = () => {
        const playerDice1 = Math.floor(Math.random() * 6) + 1; 
        const playerDice2 = Math.floor(Math.random() * 6) + 1; 

        if(playerDice1 > playerDice2){
            setWinner('Player-1');
        }
        else if(playerDice1 < playerDice2){
            setWinner('Player-2');
        }
         else{
            setWinner('Draw')
         }

        setDice(playerDice1);
        setDice2(playerDice2);
    }

    return (
        <div className="bg-black w-4/5 md:w-3/5 lg:w-2/5 text-red-400 flex flex-col justify-center items-center gap-6 md:gap-14 p-10 md:p-14 rounded-2xl">
            <h1 className="text-3xl font-semibold text-center">{winner}</h1>

           <div className="flex w-full">
           <div className="flex flex-col gap-4 w-4/5 md:w-full items-center">
                <h2 className='text-2xl'>Player-1</h2>
                <img className='hover:rotate-180 duration-200' src={`./images/${dice}.svg`} alt="dice" />
            </div>
            <div className="flex flex-col gap-4 w-4/5 md:w-full items-center">
                <h2 className='text-2xl'>Player-2</h2>
                <img className='hover:rotate-180 duration-200' src={`./images/${dice2}.svg`} alt="dice" />
            </div>
           </div>
            <button className='bg-red-600 py-2 px-8 text-lg text-white font-semibold rounded-md' onClick={updateDice}>Play</button>
        </div>
    );
}

export default Boards;
