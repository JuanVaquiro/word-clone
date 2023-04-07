import { Fragment, useState } from 'react';
import KeepingTrackGuesses from '../KeepingTrack';
import InputWrapper from '../InputWrapper';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([])
  const handleGuess = (text) => {
    const inputText = {
      guess: text,
      id: Math.random()
    }
    const inputsTrys = [...guess, inputText]
    setGuess(inputsTrys)
  }
  console.log(guess)
  return (
    <Fragment>
      <KeepingTrackGuesses guess={guess} />
      <InputWrapper handleGuess={handleGuess} />
    </Fragment>
  )
}

export default Game;
