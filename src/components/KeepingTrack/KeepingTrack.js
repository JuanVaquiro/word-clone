import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function KeepingTrackuesses({ guess, answer }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED)
    .map((_, index) =>
      guess[index] ? guess[index] : ''
    )
  return (
    <div className="guess-results">
      {
        rows.map((item) =>
        (
          <Guess
            itemCell={item}
            answer={answer}
            key={Math.random()}
            className="guess"
          />
        ))
      }
    </div>
  )
}

export default KeepingTrackuesses;
