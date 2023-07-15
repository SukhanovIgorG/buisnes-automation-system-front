import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setDate, setSerName, setName, setSex } from "../../../store/rootSlice"
import { joiResolver } from "@hookform/resolvers/joi"
import dayjs from "dayjs"
import InputMask from "react-input-mask"

import type { InitialStateTypes } from "../../../store/StoreTypes"
import type { Order } from "../../../types"

import {
  ButtonsGroup,
  FormContainer,
  Button,
  LinkButton,
} from "../../../components"
import { schema } from "./constants"
import styles from "./OrderForm.module.scss"

export const OrderForm = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const date = useSelector(
  //   (state: InitialStateTypes) => state.formNewOrder.date,
  // )
  const { date, name, sername, workers, } = useSelector((state: InitialStateTypes) => state.formNewOrder)
  // const sername = useSelector(
  //   (state: InitialStateTypes) => state.formNewOrder.sername,
  // )
  // const workers = useSelector((state: InitialStateTypes) => state.formNewOrder.workers)

  const [formOpen, setFormOpen] = useState(false)

  const defaultValuesForm = {
    date: date || dayjs(new Date).format('YYYY-MM-DD HH:mm'),
    name,
    sername,
    workers,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    control
  } = useForm<Order>({
    defaultValues: defaultValuesForm,
    resolver: joiResolver(schema),
  })

  const onSubmit = (data: Order) => {
    // dispatch(setDate(data.date))
    // dispatch(setSerName(data.name))
    // dispatch(setName(data.sername))
    // dispatch(setSex(data.sex))
    // navigate("/steptwo")
  }
  const dateChecker = (val: string | null) => {
    let date = val ? val : new Date()
    dispatch(setDate(dayjs(`${date}`).format('YYYY-MM-DD HH:mm')))
    setValue('date', dayjs(`${date}`).format('YYYY-MM-DD HH:mm'))
  }

  return (
    <FormContainer>
      <form className={styles.form_so} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_input}>
          <label>Дата проведения:</label>
          <InputMask
            mask="2099-99-99 99:99"
            placeholder="2023-07-15 18:00"
            {...register("date")}
            onBlur={() => dispatch(setDate(getValues('date')))}
          />
          <p className={styles.errors}>{errors?.date?.message}</p>
        </div>
        <div className={styles.container_input}>
          <label>Имя заказчика:</label>
          <input
            {...register("name")}
            placeholder="Иванов Иван Иванович"
            onBlur={() => dispatch(setName(getValues('name')))}
          />
          <p className={styles.errors}>{errors?.name?.message}</p>
        </div>
        <div className={styles.container_input}>
          <label>Sername:</label>
          <input {...register("sername")} placeholder="Placeholder" />
          <p className={styles.errors}>{errors?.sername?.message}</p>
        </div>
        <div className={styles.container_select}>
          <label htmlFor={"workers"}>Столы</label>
          <select {...register("workers")} id="field-workers" className={styles.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p className={styles.errors}>{errors?.workers?.message}</p>
        </div>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Далее"
            fill={true}
            id="button-next"
            type="submit"
          ></Button>
        </ButtonsGroup>
      </form>
    </FormContainer>
  )
}
