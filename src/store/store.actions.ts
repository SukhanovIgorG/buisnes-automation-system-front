import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { formValueTypes } from "./StoreTypes"

export interface OptionsDefault {
  rejectValue: string
}

export interface submitActionPayload {
  data: formValueTypes
  modal: (arg: "ok" | "error") => void
}

export const submitAction = createAsyncThunk<
  void,
  submitActionPayload,
  OptionsDefault
>("root/submitAction", async (payload, { rejectWithValue }) => {
  console.log("payload :>> ", payload)
  const { modal, data } = payload
  try {
    const res = await axios.post(
      "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
      data,
    )
    if (res.status === 200) {
      modal("ok")
    } else {
      modal("error")
    }
  } catch (error) {
    modal("error")
    return rejectWithValue("Ошибка отправки")
  }
})
