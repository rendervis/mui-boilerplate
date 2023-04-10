import { createReducer } from "@reduxjs/toolkit"
import { addInput } from "./actions"
import { nanoid } from "nanoid"



const initialState: any = {
  inputs: [
    {
      id: nanoid(),
      name: "First input",
    },
  ],
}

export const adminReducer = createReducer(initialState, (builder) => {
  builder.addCase(addInput, (state, { payload }) => {
    state.pages = state.pages.concat(payload)
  })
})
