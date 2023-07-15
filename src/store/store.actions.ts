import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { formValueTypes } from "./StoreTypes"
import type { LoginFormInput } from "../pages/Login/login.d"

export interface OptionsDefault {
  rejectValue: string
}

export interface submitActionPayload {
  data: formValueTypes
  modal: (arg: "ok" | "error") => void
}

// export interface User {
//   name: string,
//   email: string,
//   login: string,
//   tell: string,
//   placeId: string,
//   photo: string,
// }

// export interface loginActionPayload {
//   token: string
//   user: User
// }


export const submitAction = createAsyncThunk<
  any,
  submitActionPayload,
  OptionsDefault
>("root/submitAction", async (payload, { rejectWithValue }) => {
  console.log("payload :>> ", payload)
  const { modal, data } = payload
  // try {
  //   const res = await axios.post(
  //     "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
  //     data,
  //   )
  //   if (res.status === 200) {
  //     modal("ok")
  //   } else {
  //     modal("error")
  //   }
  // } catch (error) {
  //   modal("error")
  //   return rejectWithValue("Ошибка отправки")
  // }
})
export const loginAction = createAsyncThunk<
  any,
  LoginFormInput,
  OptionsDefault
>("root/loginAction", async (payload, { rejectWithValue }) => {
  try {
    console.log('payload :>> ', payload);
    const res = await axios.post(
      "http://localhost:7777/login",
      payload,
    )
    return res.data
  } catch (err: any) {
    console.log('ошибка авторизации', err?.message);
    return rejectWithValue(err?.message || "Ошибка авторизации")
  }
})
