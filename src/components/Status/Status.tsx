import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { ModalWindow, Button } from "../"

import type { StatusProps } from "./statusTypes"

import iconOk from "./assets/icon_ok.png"
import iconError from "./assets/icon_error.png"

import styles from "./Status.module.scss"

export const Status = ({ status, visible, onClose }: StatusProps) => {
  const navigate = useNavigate()

  const isStatusOk = useMemo(() => {
    return status === "ok" ? true : false
  }, [status])

  return (
    <ModalWindow visible={visible} onClose={onClose}>
      <div className={styles.container_status}>
        <p className={styles.header}>
          {isStatusOk ? "Форма успешно отправлена" : "Ошибка"}
        </p>
        <img
          src={isStatusOk ? iconOk : iconError}
          alt={isStatusOk ? "Успешно" : "Ошибка"}
        />
        <Button
          func={() => {
            return isStatusOk ? navigate("/") : onClose()
          }}
          name={isStatusOk ? "На главную" : "Закрыть"}
          fill={true}
          id={isStatusOk ? "button-to-main" : "button-close"}
          type="button"
        ></Button>
      </div>
    </ModalWindow>
  )
}
