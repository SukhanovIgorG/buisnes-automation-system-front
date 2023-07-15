import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import { useSelector, useDispatch } from "react-redux"
import { AnyAction } from "@reduxjs/toolkit"
import type { InitialStateTypes } from '../../store';

import { loginAction } from "../../store/store.actions"
import { Typography, Box } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

// import { Header } from '../../components';
// import { apiErrorController } from '../../utils/errorController';

import type { LoginFormInput } from './login.d';
import { schema } from './shema';

import styles from './login.module.scss';

function Login () {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const globalError = useSelector((state: InitialStateTypes) => state.error)
  const loggedIn = useSelector((state: InitialStateTypes) => state.loggedIn)
  console.log('globalError :>> ', globalError);
  console.log('loggedIn :>> ', loggedIn);

  const [errorApi, setErrorApi] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>({
    resolver: joiResolver(schema),
  });

  useEffect(() => {
    loggedIn ? navigate('/') : null;
  }, [loggedIn])


  const onSubmit = useCallback(
    (data: LoginFormInput) => {
      dispatch(loginAction(data) as unknown as AnyAction)
    },
    [dispatch],
  )

  return (
    <Box className={styles.container}>
      {/* <Header loggedIn={false}></Header> */}
      <Box className={styles.form_box_log}>
        <Box className={styles.form_value}>
          <Box
            component={'form'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography
              variant="h3"
              className={styles.title}
            >
              Вход
            </Typography>
            <Box className={styles.inputbox}>
              <AccountCircle className={styles.ion_icon}></AccountCircle>
              <Box component="input"
                {...register("login")}
                className={styles.input}
                type="login"
                disabled={isLoading}
              ></Box>
              <Box
                component={'label'}
                className={styles.inputbox_label}
              >
                Логин
              </Box>
            </Box>
            <Box
              component={'span'}
              className={styles.input_error}
            >
              {errors.login?.message}
            </Box>
            <Box className={styles.inputbox}>
              <Lock className={styles.ion_icon}></Lock>
              <Box component="input"
                className={styles.input}
                type="password"
                {...register("password")}
                disabled={isLoading}
              ></Box>
              <Box
                component={'label'}
                className={styles.inputbox_label}
              >
                Пароль
              </Box>
            </Box>
            <Box
              component={'span'}
              className={styles.input_error}
            >
              {errors.password?.message}
            </Box>
            <Box
              component={'button'}
              className={styles.button}
              disabled={isLoading}
            >
              Войти
            </Box>
            <Box
              component={'span'}
              className={styles.input_error}
            >
              {errorApi}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;