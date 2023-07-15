import { Typography } from '@mui/material';
import { Header } from '../../components';
import styles from "./Main.module.scss"
import { useSelector } from 'react-redux';
import { InitialStateTypes } from '../../store';

export default function Main() {

  const loggedIn = useSelector((state: InitialStateTypes) => state.loggedIn)

  return (
    <div className={styles.wrapper}>
      <Header loggedIn={loggedIn} />
      <Typography variant="h1" gutterBottom>
        Добро пожаловать в систему автоматизации бизнес процессов
      </Typography>
      <Typography variant="body1" gutterBottom>
        А тут вы читаете о том почему стоит выбрать нас и какие проблемы мы поможем вам решить, но эту статью я пока не написал.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        Тарифы
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        Партнеры
      </Typography>
    </div>
  )
}
