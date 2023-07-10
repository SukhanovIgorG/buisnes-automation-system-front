export interface StatusProps {
  status: "ok" | "error"
  visible: boolean
  onClose: () => void
}
