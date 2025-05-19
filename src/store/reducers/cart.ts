import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const item = action.payload

      if (state.items.find((i) => i.id === item.id)) {
        alert('Item already in cart')
      } else {
        state.items.push(item)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
