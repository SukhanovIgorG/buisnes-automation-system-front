export interface ButtonProps {
  name: string
  fill: boolean
  func?: () => void
  id: string
  type: "button" | "submit" | "reset" | undefined
}
