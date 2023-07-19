import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import style from './Footer.module.scss'

interface FooterProps {
  children?: React.ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <>
      <Box
        component="footer"
        className={style.wrapper}
      >
        <Container maxWidth="sm">
          {children}
        </Container>
      </Box>
    </>
  );
}