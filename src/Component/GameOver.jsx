export default function GameOver({ winner, onSelected }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} won !</p>}
      {!winner && <p>It's a draw !</p>}
      <button onClick={onSelected}>Rematch</button>
    </div>
  );
}
