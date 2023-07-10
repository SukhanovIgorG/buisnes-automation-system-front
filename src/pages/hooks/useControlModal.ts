import { useCallback, useState } from "react"

export const useControlModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return { isOpen, onOpenModal, onCloseModal }
}
