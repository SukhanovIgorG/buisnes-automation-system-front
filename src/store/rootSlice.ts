import { createSlice } from "@reduxjs/toolkit"
import { submitAction } from "./store.actions"
import type { InitialStateTypes } from "./StoreTypes"

const initialState: InitialStateTypes = {
  formValue: {
    email: "sukhanovgarik@yandex.ru",
    tell: "+7 999 529-55-96",
    name: "",
    nickname: "",
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
}

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.formValue.email = action.payload
    },
    setTell: (state, action) => {
      state.formValue.tell = action.payload
    },
    setName: (state, action) => {
      state.formValue.name = action.payload
    },
    setNickName: (state, action) => {
      state.formValue.nickname = action.payload
    },
    setSerName: (state, action) => {
      state.formValue.sername = action.payload
    },
    setSex: (state, action) => {
      state.formValue.sex = action.payload
    },
    setAdvantages: (state, action) => {
      state.formValue.advantages = action.payload
    },
    setCheckbox: (state, action) => {
      state.formValue.checkbox = action.payload
    },
    setRadio: (state, action) => {
      state.formValue.radio = action.payload
    },
    setTextArea: (state, action) => {
      state.formValue.textarea = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitAction.pending, (state) => {
      state.loading = true
      state.error = undefined
    })
    builder.addCase(submitAction.fulfilled, (state, action) => {
      state.loading = false
      state.error = undefined
    })
    builder.addCase(submitAction.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
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
