import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNickName, setSerName, setName, setSex } from "../../../store/rootSlice"
import { joiResolver } from "@hookform/resolvers/joi"

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
  const navigate = useNavigate()
  const date = useSelector(
    (state: InitialStateTypes) => state.formNewOrder.date,
  )
  const name = useSelector((state: InitialStateTypes) => state.formNewOrder.name)
  const sername = useSelector(
    (state: InitialStateTypes) => state.formNewOrder.sername,
  )
  const sex = useSelector((state: InitialStateTypes) => state.formNewOrder.sex)

  const [formOpen, setFormOpen] = useState(false)

  const defaultValuesForm = {
    date,
    name,
    sername,
    sex,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: defaultValuesForm,
    resolver: joiResolver(schema),
  })

  const onSubmit = (data: Order) => {
    dispatch(setNickName(data.date))
    dispatch(setSerName(data.name))
    dispatch(setName(data.sername))
    dispatch(setSex(data.sex))
    navigate("/steptwo")
  }
  return (
    <FormContainer>
        <form className={styles.form_so} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container_input}>
            <label>Дата:</label>
          <input {...register("date")} placeholder="Placeholder"/>
            <p className={styles.errors}>{errors?.date?.message}</p>
          </div>
          <div className={styles.container_input}>
            <label>Name:</label>
            <input {...register("name")} placeholder="Placeholder" />
            <p className={styles.errors}>{errors?.name?.message}</p>
          </div>
          <div className={styles.container_input}>
            <label>Sername:</label>
            <input {...register("sername")} placeholder="Placeholder" />
            <p className={styles.errors}>{errors?.sername?.message}</p>
          </div>
          <div className={styles.container_select}>
            <label htmlFor={"sex"}>Sex</label>
            <select {...register("sex")} id="field-sex" className={styles.select}>
              <option value=" ">Не выбрано</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            <p className={styles.errors}>{errors?.sex?.message}</p>
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
