export interface Order {
  date: string
  tell: string
  email: string
  name: string
  sername: string
  sex: " " | "man" | "woman"
  advantages: {
    field: string
  }[]
  checkbox: {
    one: string
    two: string
    tree: string
  }
  radio: ""
  textarea: ""
}