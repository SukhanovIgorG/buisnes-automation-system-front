export interface Order {
  date: string
  tell: string
  email: string
  name: string
  sername: string
  workers: string
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

export interface NewOrder {
      banquetNum: number,
      date: string,
      peopleCount: number,
      description: string,
      workers: [],
      managers: [],
      customer: People,
      price: number,
      discount: number,
      prepayment: number,
      payment: number,
      goods: []
}