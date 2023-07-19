import { Typography, Link, Box } from "@mui/material";

import style from "./Copyright.module.scss"

export const Copyright = (props: any) => {
  return (
    <Box className={style.main}>
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link href="https://BAS.COM/license" sx={{textDecoration: 'none'}}>
          BUSINESS AUTOMATION SYSTEM
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}