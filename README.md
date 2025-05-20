<p align="center"><img src="./src/assets/images/icons/logo.svg" width="125px"></p>

#



![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

EPLAY is a simulated video game ecommerce platform made for the "Front-end Engineer" course at EBAC

## Functionalities

- Displays multiple game with their tags and categories
- Displays a different random game every time user access the page
- Exclusive product page for every game avaliable
- Shopping Cart
- Validated Checkout

## Instalation requirements

- Git
- Node

## Installation

```bash
# Clone the repository
git clone https://github.com/RamonSFR/EPLAY.git
cd EPLAY

# Install dependencies
npm install
```

## Run server

```bash
npm run dev
```

## Connecting to your API

All the games data comes from an API that you can change to your own to display your custom games

### go to the path

```
  📁 EPLAY
│-- 📁 src
│     │-- 📁 services
│     │    │-- api.ts
│     │
│     │
│     │
│     │
│     │
│     │
```

### change the API Path to yours

```bash
export const ApiPath = 'https://your-api/'
```

### and configure your endpoints
notice that the type Game has the following structure
```bash
Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string[]
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
```
so make sure your api have the same or change the code to attend to it
