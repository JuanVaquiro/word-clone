
function HappyBanner({ numGusses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numGusses} guesses</strong>.
      </p>
    </div>
  )
}

export default HappyBanner;
