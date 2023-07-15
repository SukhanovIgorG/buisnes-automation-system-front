import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSerName, setName, setSex } from "../../store/rootSlice"
import { joiResolver } from "@hookform/resolvers/joi"

import type { InitialStateTypes } from "../../store/StoreTypes"
import { OrderForm } from './OrderForm/OrderForm'

import {
  ButtonsGroup,
  FormContainer,
  Button,
  LinkButton,
  StepperLine,
} from "../../components"
import { schema } from "./constants"
import styles from "./Orders.module.scss"
import { useState } from "react"

export default function Orders() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const date = useSelector(
  //   (state: InitialStateTypes) => state.formNewOrder.date,
  // )
  // const name = useSelector((state: InitialStateTypes) => state.formNewOrder.name)
  // const sername = useSelector(
  //   (state: InitialStateTypes) => state.formNewOrder.sername,
  // )
  // const sex = useSelector((state: InitialStateTypes) => state.formNewOrder.sex)

  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setFormOpen(prev => !prev)}
        className={styles.buttonNewOrder}>
        {formOpen ? 'Закрыть' : 'Новый заказ'}
      </button>
      {formOpen && <OrderForm />
      }
    </div>
  )
}
