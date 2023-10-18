import { useCallback, useEffect, useState } from "react"

import { center, ENEMY_CREATION_INTERVAL, ENEMY_MOVEMENT_INTERVAL, words } from "../lib/constants"
import { angleToCenter, generateRandomPosition, isEnemyAtCenter } from "../lib/utils"
import { EnemiesData } from "../types"

export const useGameEngine = () => {
  const [enemies, setEnemies] = useState<EnemiesData[]>([])
  const [currentWord, setCurrentWord] = useState<string>("")
  const [score, setScore] = useState<number>(0)
  const [triangleRotation, setTriangleRotation] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(false)

  const restartGame = useCallback(() => {
    setEnemies([])
    setCurrentWord("")
    setScore(0)
    setTriangleRotation(0)
    setGameOver(false)
  }, [])

  const createEnemy = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    const position = generateRandomPosition(center.x, center.y)
    return {
      id: Date.now().toString(),
      word: words[randomIndex],
      type: words[randomIndex],
      x: position.x,
      y: position.y,
    }
  }, [])

  const addRandomEnemy = useCallback(() => {
    if (gameOver) return
    const newEnemy = createEnemy()
    setEnemies((prevEnemies) => [...prevEnemies, newEnemy])
  }, [gameOver, createEnemy])

  const moveEnemyTowardsCenter = useCallback(() => {
    if (gameOver) return

    setEnemies((prevEnemies) => {
      const newEnemies = prevEnemies.map((enemy) => {
        const angle = angleToCenter(enemy, center)
        return {
          ...enemy,
          x: enemy.x + Math.cos(angle),
          y: enemy.y + Math.sin(angle),
        }
      })

      if (newEnemies.some((e) => isEnemyAtCenter(e, center))) {
        setGameOver(true)
      }

      return newEnemies
    })
  }, [gameOver])

  useEffect(() => {
    const enemyCreationInterval = setInterval(addRandomEnemy, ENEMY_CREATION_INTERVAL)
    const enemyMovementInterval = setInterval(moveEnemyTowardsCenter, ENEMY_MOVEMENT_INTERVAL)

    return () => {
      clearInterval(enemyCreationInterval)
      clearInterval(enemyMovementInterval)
    }
  }, [addRandomEnemy, moveEnemyTowardsCenter])

  return {
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
  }
}
