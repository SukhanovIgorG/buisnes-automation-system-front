import { User } from './'

export interface Order extends NewOrder{
  _id: string
  worldId: string
  createdAt: Date
  updatedAt: Date
  creator: {}
}

export interface NewOrder {
  date: string
  peopleCount: number
  description: string
  workers: []
  managers: []
  customer: People
  price: number
  discount: number
  prepayment: number
  payment: number
  goods: []
}