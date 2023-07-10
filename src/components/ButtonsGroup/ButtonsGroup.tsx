import { ButtonsGroupProps } from "./buttonGroupTypes"
import styles from "./ButtonsGroup.module.scss"

export const ButtonsGroup = ({ children }: ButtonsGroupProps) => {
  return <div className={styles.buttons_container}>{children}</div>
}
