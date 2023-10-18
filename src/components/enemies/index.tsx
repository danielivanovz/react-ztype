interface EnemiesProps {
  word: string
  x: number
  y: number
  typedWord?: string
}

export const Enemies: React.FC<EnemiesProps> = ({ word, x, y, typedWord = "" }) => {
  return (
    <div style={{ position: "absolute", left: `${x}px`, top: `${y}px` }}>
      {Array.from(word).map((char, index) => (
        <span key={index} className={getCharClass(index, char, typedWord)}>
          {char}
        </span>
      ))}
    </div>
  )
}

const getCharClass = (index: number, char: string, typedWord: string): string => {
  if (index >= typedWord.length) {
    return "text-black"
  }

  if (char.toLowerCase() === typedWord[index]?.toLowerCase()) {
    return "text-green-200"
  }

  return "text-red-200"
}
