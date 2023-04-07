
function KeepingTrackuesses({ guess }) {
  return (
    <div className="guess-results">
      {
        guess.map((item) =>
        (
          <p key={item.id} className="guess">{item.guess}</p>
        )
        )
      }
    </div>
  )
}

export default KeepingTrackuesses;
