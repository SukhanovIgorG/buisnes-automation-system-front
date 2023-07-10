import styles from "./FormContainer.module.scss"
import { FormContainerProps } from "./formContainerTypes"

export function FormContainer({ children }: FormContainerProps) {
  return <div className={styles.container}>{children}</div>
}
