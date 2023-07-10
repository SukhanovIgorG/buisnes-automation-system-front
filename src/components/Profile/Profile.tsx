import { Link } from "../Link/Link"
import styles from "./Profile.module.scss"

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>ИС</div>
      <div className={styles.info_wrapper}>
        <h1>Игорь Суханов</h1>
        <div className={styles.link_wrapper}>
          <Link name="Telegram" link="https://t.me/garik_sukhanov"></Link>
          <Link name="GitHub" link="https://github.com/SukhanovIgorG"></Link>
          <Link
            name="Resume"
            link="https://voronezh.hh.ru/resume/c0bcea48ff07ec45c50039ed1f365373674d79"
          ></Link>
        </div>
      </div>
    </div>
  )
}
