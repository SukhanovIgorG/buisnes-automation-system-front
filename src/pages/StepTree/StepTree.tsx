import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"
import { setTextArea } from "../../store/rootSlice"
import { submitAction } from "../../store/store.actions"
import { joiResolver } from "@hookform/resolvers/joi"
import { schema } from "./constants"

import type { InitialStateTypes, formValueTypes } from "../../store/StoreTypes"

import {
  FormContainer,
  ButtonsGroup,
  Button,
  LinkButton,
  StepperLine,
  Status,
} from "../../components"

import styles from "./StepTree.module.scss"
import { useControlModal } from "../hooks"
import { AnyAction } from "@reduxjs/toolkit"

export default function StepTree() {
  const dispatch = useDispatch()
  const textarea = useSelector(
    (state: InitialStateTypes) => state.formValue.textarea,
  )
  const full = useSelector((state: InitialStateTypes) => state.formValue)

  const [modal, setModal] = useState<"ok" | "error">()
  const { isOpen, onOpenModal, onCloseModal } = useControlModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValueTypes>({
    defaultValues: {
      textarea,
    },
    resolver: joiResolver(schema),
  })

  const onSubmit = useCallback(
    (data: formValueTypes) => {
      const dto = {
        data: full,
        modal: (status: "ok" | "error") => {
          setModal(status)
        },
      }
      dispatch(setTextArea(data.textarea))
      dispatch(submitAction(dto) as unknown as AnyAction)
      onOpenModal()
    },
    [dispatch, full, onOpenModal],
  )

  return (
    <FormContainer>
      <StepperLine step={3} total={3}></StepperLine>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <label htmlFor="field-about">About</label>
          <textarea
            {...register("textarea")}
            name="textarea"
            rows={5}
            cols={8}
            placeholder="placeholder"
            id="field-about"
            className={styles.textarea}
          ></textarea>
        </div>
        <p className={styles.errors}>{errors?.textarea?.message}</p>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/steptwo"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Отправить"
            type="submit"
            fill={true}
            id="button-send"
          ></Button>
        </ButtonsGroup>
      </form>
      {modal && (
        <Status status={modal} visible={isOpen} onClose={onCloseModal}></Status>
      )}
    </FormContainer>
  )
}
