import { ReactNode } from "react"

export interface ModalWindowType {
  onClose: () => void
  children: ReactNode
  visible: boolean
}
