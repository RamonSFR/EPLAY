class Game {
  category: string
  description: string
  image: string
  infos: string[]
  systems: string
  title: string
  id: number

  constructor(id: number, description: string, image: string, infos: string[], systems: string, title: string, category: string) {
    this.id = id
    this.description = description
    this.category = category
    this.image = image
    this.infos = infos
    this.title = title
    this.systems = systems
  }
}

export default Game
