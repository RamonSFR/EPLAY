import type { Game } from "../../pages/Home"

const getTotal = (items: Game[]) => {

  const total = items.reduce((acc, item) => {
    if (item.prices.current === undefined) {
      return 0
    }
    return acc + item.prices.current
  }, 0)
  return total
}

export default getTotal
