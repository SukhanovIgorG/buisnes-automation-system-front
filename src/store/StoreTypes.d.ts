// export interface formValueTypes {
//   email: string
//   tell: string
//   name: string
//   nickname: string
//   sername: string
//   sex: " " | "man" | "woman"
//   advantages: {
//     field: string
//   }[]
//   checkbox: {
//     one: string
//     two: string
//     tree: string
//   }
//   radio: ""
//   textarea: ""
// }

import { Order } from "../types"

export interface InitialStateTypes {
  formNewOrder: Order
  loading: boolean
  error: unknown | string
  loggedIn: boolean
  currentUser: { }
}
