import { CenterPosition } from "../types"

export const RANDOM_RADIUS_OFFSET = 200
export const DISTANCE_THRESHOLD = 20
export const ENEMY_CREATION_INTERVAL = 1000
export const ENEMY_MOVEMENT_INTERVAL = 20

const isWindowDefined = typeof window !== "undefined"
export const center: CenterPosition = isWindowDefined ? { x: window.innerWidth / 2, y: window.innerHeight / 2 } : { x: 0, y: 0 }

export const words = ["apple", "banana", "cherry", "durian", "eggplant", "fig", "grape", "honeydew", "jackfruit", "kiwi"]
