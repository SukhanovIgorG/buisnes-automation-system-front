import { Box, Typography } from '@mui/material';
import { Header, Footer, Copyright } from '../../components';
import { useSelector } from 'react-redux';
import { InitialStateTypes } from '../../store';
import { Link } from 'react-router-dom';

import styles from "./Main.module.scss"

export default function Main() {

  const loggedIn = useSelector((state: InitialStateTypes) => state.loggedIn)

  return (
      <Box className={styles.wrapper}>
      <Header loggedIn={loggedIn} />
      <Typography variant="h1" gutterBottom>
        Добро пожаловать в систему автоматизации бизнес процессов
      </Typography>
      <Typography variant="body1" gutterBottom>
        А тут вы читаете о том почему стоит выбрать нас и какие проблемы мы поможем вам решить, но эту статью я пока не написал.
      </Typography>
      <Link to="/pricing" className={styles.link}>
        Тарифы
      </Link>
      <Link to="/pricing" className={styles.link}>
        Партнеры
      </Link>
      <Footer>
        <Copyright></Copyright>
      </Footer>
    </Box>
  )
}
