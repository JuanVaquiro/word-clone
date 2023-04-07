import { useState } from "react";

function InputWrapper({ handleGuess }) {
  const [guess, setGuess] = useState('')
  const handleSumbit = (event) => {
    event.preventDefault()
    const TextUpCase = guess.toUpperCase()
    handleGuess(TextUpCase)
    setGuess('')
  }
  return (
    <form
      onSubmit={handleSumbit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        title='Only 5 latter word'
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(event) => { setGuess(event.target.value) }}
        required
      />
    </form>
  )
}

export default InputWrapper;
