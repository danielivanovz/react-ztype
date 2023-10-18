import { Enemies } from "./components/enemies"
import { GameOverOverlay } from "./components/gameover-overlay"
import { Ship } from "./components/ship"
import { useGameEngine } from "./hooks/useGameEngine"
import { useKeyboardInput } from "./hooks/useKeyboardInput"
import { center } from "./lib/constants"
import { angleToCenter, distanceToCenter } from "./lib/utils"

export default function App() {
  const {
    enemies,
    setEnemies,
    currentWord,
    setCurrentWord,
    score,
    setScore,
    triangleRotation,
    setTriangleRotation,
    gameOver,
    restartGame,
  } = useGameEngine()

  const findClosestEnemy = (typedWord: string) => {
    const matchingEnemies = enemies.filter((enemy) =>
      enemy.word.startsWith(typedWord.toLowerCase())
    )

    if (matchingEnemies.length === 0) return null

    return matchingEnemies.sort(
      (a, b) => distanceToCenter(a, center) - distanceToCenter(b, center)
    )[0]
  }

  const handleUserInput = (event: KeyboardEvent) => {
    if (event.key.length > 1) return

    const updatedWord = currentWord + event.key
    const closestEnemy = findClosestEnemy(updatedWord)

    if (!closestEnemy) {
      return setCurrentWord("")
    }

    setTriangleRotation(angleToCenter(closestEnemy, center))

    if (closestEnemy.word.toLowerCase() === updatedWord.toLowerCase()) {
      setCurrentWord("")
      setEnemies((prev) => prev.filter((enemy) => enemy.id !== closestEnemy.id))
      setScore((prevScore) => prevScore + 1)
    } else {
      setCurrentWord(updatedWord)
    }
  }

  useKeyboardInput(handleUserInput)

  const renderedEnemies = enemies.map((enemy) => (
    <Enemies
      key={enemy.id}
      {...enemy}
      typedWord={enemy.word.startsWith(currentWord) ? currentWord : ""}
    />
  ))

  return (
    <div className="flex overflow-hidden font-mono items-center justify-center h-screen bg-stone-50 relative">
      <Ship rotation={triangleRotation} />
      <div className="absolute top-4 left-4 text-white">Score: {score}</div>
      {renderedEnemies}
      {gameOver && <GameOverOverlay score={score} onRetry={restartGame} />}
    </div>
  )
}
