import { LinkProps } from "./linkTypes"
import styles from "./Link.module.scss"

export const Link = ({ link, name }: LinkProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <a href={link} target="_blank" className={styles.link_name}>
        {name}
      </a>
    </div>
  )
}
