import { checkGuess } from "../../game-helpers"

function Guess({ itemCell, answer }) {
  const valueChar = itemCell !== ''
  const tryListChar = Array(5).fill({ letter: '', status: '' })
  const charactersStatus = valueChar
    ? checkGuess(itemCell, answer)
    : tryListChar
  console.log(charactersStatus)

  return (
    <p className="guess">
      {
        charactersStatus.map((char) => (
          <span
            key={Math.random()}
            className={`cell ${char.status}`}>
            {char.letter}
          </span>
        ))
      }
    </p>
  )
}

export default Guess;
