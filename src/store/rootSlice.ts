import { createSlice } from "@reduxjs/toolkit"
import { loginAction, submitAction } from "./store.actions"
import type { InitialStateTypes } from "./StoreTypes"

const initialState: InitialStateTypes = {
  formNewOrder: {
    date: "",
    email: "sukhanovgarik@yandex.ru",
    tell: "+7 999 529-55-96",
    name: "",
    sername: "",
    sex: " ",
    advantages: [],
    checkbox: {
      one: "",
      two: "",
      tree: "",
    },
    radio: "",
    textarea: "",
  },
  loading: false,
  error: "",
  loggedIn: false,
  currentUser: {}
}

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setNickName: (state, action) => {
      state.formNewOrder.date = action.payload
    },
    setEmail: (state, action) => {
      state.formNewOrder.email = action.payload
    },
    setTell: (state, action) => {
      state.formNewOrder.tell = action.payload
    },
    setName: (state, action) => {
      state.formNewOrder.name = action.payload
    },
    setSerName: (state, action) => {
      state.formNewOrder.sername = action.payload
    },
    setSex: (state, action) => {
      state.formNewOrder.sex = action.payload
    },
    setAdvantages: (state, action) => {
      state.formNewOrder.advantages = action.payload
    },
    setCheckbox: (state, action) => {
      state.formNewOrder.checkbox = action.payload
    },
    setRadio: (state, action) => {
      state.formNewOrder.radio = action.payload
    },
    setTextArea: (state, action) => {
      state.formNewOrder.textarea = action.payload
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(submitAction.pending, (state) => {
    //   state.loading = true
    //   state.error = undefined
    // })
    // builder.addCase(submitAction.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.error = undefined
    // })
    // builder.addCase(submitAction.rejected, (state, { payload }) => {
    //   state.loading = false
    //   state.error = payload
    // })
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true
      state.error = undefined
    })
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = undefined
      state.loggedIn = true
      state.currentUser = payload.user
      localStorage.setItem('JWT', payload.token)
    })
    builder.addCase(loginAction.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.loggedIn = false
      state.currentUser = {}
    })
  },
})

export const reducer = rootSlice.reducer
export const {
  setEmail,
  setTell,
  setName,
  setNickName,
  setSerName,
  setSex,
  setAdvantages,
  setCheckbox,
  setRadio,
  setTextArea,
} = rootSlice.actions
