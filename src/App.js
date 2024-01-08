import React, { useState, useEffect } from 'react';
import '../src/App.css'
const App = () => {
    const [userChoice, setUserChoice] = useState('paper');
    const [computerChoice, setComputerChoice] = useState('paper');
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);
    const [turnResult, setTurnResult] = useState(null);
    const [result, setResult] = useState('Let\'s see who wins');
    const [gameOver, setGameOver] = useState(false);
    const choices = ['rock', 'paper', 'scissors'];

    const handleOnClick =(choice) => {
      setUserChoice(choice) 
      generateComputerChoice()
    }
    const generateComputerChoice = () =>{
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setComputerChoice(randomChoice)
    }
    const reset = () =>{
      window.location.reload()
    }
    useEffect(() => {
      const comboMoves = userChoice + computerChoice;
      if (userPoints <= 4 && computerPoints <= 4) {
        if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
          const updatedUserPoints = userPoints + 1;
          setUserPoints(updatedUserPoints);
          setTurnResult('User got the point');
          if (updatedUserPoints === 5) {
            setGameOver(true);
            setResult('User wins');
          }
        }
  
        if (comboMoves === 'paperscissors' ||comboMoves === 'scissorsrock' ||comboMoves === 'rockpaper') {
          const updatedComputerPoints = computerPoints + 1
          setComputerPoints(updatedComputerPoints)
          setTurnResult('Computer got the points')
          if (updatedComputerPoints === 5) {
            setGameOver(true);
            setResult('Computer wins');
          }
        }
        if (comboMoves === 'scissorsscissors' ||comboMoves === 'rockrock' ||comboMoves === 'paperpaper') {
          setTurnResult('No one got the points')
        }

      }
    }, [userChoice, computerChoice]);

    return (
        <div className='App'>
        <h1 className='heading'>Rock Paper Scissors</h1>
        <div className='score'>
            <h1>User Points: {userPoints}</h1>
            <h1>Computer Points: {computerPoints}</h1>
        </div>
        <div className='choices'>
            <div className='choice-user'>
                <img className='user-hand' src={`./images/${userChoice}.png`} alt="User's Choice" />
            </div>
            <div className='choice-comp'>
                <img className='comp-hand' src={`../images/${computerChoice}.png`} alt="Computer's Choice" />
            </div>
        </div>
        
        <div className='button-div'>
          {choices.map((choice, index) => (
            <button className='button' key={index} onClick={() => handleOnClick(choice)} disabled={gameOver}>
              {choice}
            </button>
          ))}
        </div>

        <div className='result'>
          <h1>Turn Result: {turnResult}</h1>
          <h1>Final Result: {result}</h1>
        </div>
        <div className='button-div'>
          {gameOver && 
          <button className='button' onClick={() => reset()}>Restart game</button>}
        </div>

        </div>
    );
    }
export default App;
