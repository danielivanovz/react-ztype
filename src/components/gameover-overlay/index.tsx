interface GameOverOverlayProps {
  score: number
  onRetry: () => void
}

const Config = {
  title: "Game Over",
  score: "Score: ",
  retry: "Try Again",
}

export const GameOverOverlay: React.FC<GameOverOverlayProps> = ({ score, onRetry }) => (
  <div className="bg-gray-800 flex flex-col items-center justify-center border border-spacing-3 border-neutral-800 px-12 py-6 rounded-md shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-500 ease-in-out">
    <div className="text-4xl text-slate-50">{Config.title}</div>
    <div className="text-2xl text-slate-50">
      {Config.score}
      {score}
    </div>
    <button className="bg-slate-50 text-gray-700 border border-spacing-3 border-neutral-800 px-4 py-2 rounded-md mt-4" onClick={onRetry}>
      {Config.retry}
    </button>
  </div>
)
