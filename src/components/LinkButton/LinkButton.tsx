import { ButtonProps } from "./buttonTypes"
import styles from "./Button.module.scss"
import { Link } from "react-router-dom"

export const LinkButton = ({ name, fill, route, id }: ButtonProps) => {
  return (
    <Link
      to={route}
      className={fill ? styles.contained : styles.outlined}
      id={id}
    >
      {name}
    </Link>
  )
}
