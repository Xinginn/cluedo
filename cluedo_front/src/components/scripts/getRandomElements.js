import { roll } from "./roll"

export function getRandomElements(arr, nbElement = 1) {
  let result = []
  const newArray = [...arr]
  for (let index = 0; index < nbElement; index++) {
    const randomIndex = roll(newArray.length)
    result.push(newArray.splice(randomIndex, 1)[0])
  }
  return result
}