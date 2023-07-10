import { ButtonProps } from "./buttonTypes"
import styles from "./Button.module.scss"

export const Button = ({ name, fill, func, id, type }: ButtonProps) => {
  return (
    <button
      onClick={func}
      className={fill ? styles.contained : styles.outlined}
      id={id}
      type={type}
    >
      {name}
    </button>
  )
}
