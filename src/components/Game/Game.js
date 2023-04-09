import { Fragment, useState } from 'react';
import KeepingTrackGuesses from '../KeepingTrack';
import InputWrapper from '../InputWrapper';
import HappyBanner from '../HappyBanner/HappyBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([])
  const handleGuess = (text) => {
    const inputText = text
    const inputsTrys = [...guess, inputText]
    setGuess(inputsTrys)
  }

  const statusWin = guess === answer
  console.log(guess)
  console.log(answer)
  console.log(statusWin)

  return (
    <Fragment>
      <KeepingTrackGuesses guess={guess} answer={answer} />
      <InputWrapper handleGuess={handleGuess} />
      {statusWin && <HappyBanner numGusses={guess.length} />}
    </Fragment>
  )
}

export default Game;
