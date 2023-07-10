import type { ModalWindowType } from "./modalWindowTypes"

import styles from "./ModalWindow.module.scss"

export const ModalWindow = ({
  children,
  onClose,
  visible,
}: ModalWindowType) => {
  const handleClose = (): void => {
    onClose()
  }

  return (
    <div
      className={visible ? styles.modal_wrapper : styles.modal_not_visible}
      onClick={handleClose}
    >
      {children}
    </div>
  )
}
