import { CenterPosition, EnemiesData } from "../types"
import { DISTANCE_THRESHOLD, RANDOM_RADIUS_OFFSET } from "./constants"

export const distanceToCenter = (enemy: EnemiesData, centerPosition: CenterPosition) =>
  Math.sqrt(Math.pow(centerPosition.x - enemy.x, 2) + Math.pow(centerPosition.y - enemy.y, 2))
export const angleToCenter = (enemy: EnemiesData, centerPosition: CenterPosition) =>
  Math.atan2(enemy.y - centerPosition.y, enemy.x - centerPosition.x) * (180 / Math.PI) + 90

export const generateRandomPosition = (
  aroundX: number,
  aroundY: number,
  radius: number = window.innerWidth / 2 - RANDOM_RADIUS_OFFSET
): CenterPosition => {
  const randomAngle = Math.random() * 2 * Math.PI
  const randomDistance = Math.random() * radius + RANDOM_RADIUS_OFFSET
  return {
    x: aroundX + randomDistance * Math.cos(randomAngle),
    y: aroundY + randomDistance * Math.sin(randomAngle),
  }
}

export const isEnemyAtCenter = (enemy: EnemiesData, center: CenterPosition): boolean => distanceToCenter(enemy, center) < DISTANCE_THRESHOLD
