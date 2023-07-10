import { TextareaProps } from "./textareaTypes"
import styles from "./Textarea.module.scss"

export const Textarea = ({
  name,
  id,
  placeholder,
  title,
  rows,
  cols,
}: TextareaProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{title}</label>
      <textarea
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        id={id}
        className={styles.textarea}
      ></textarea>
    </div>
  )
}
