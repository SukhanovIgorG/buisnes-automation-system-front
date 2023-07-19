import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Button, Link, CssBaseline, Grid, Toolbar, Typography, GlobalStyles, Container } from '@mui/material';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';

import { AppHeader, Copyright, Header, Footer } from '../../components';
import { tiers } from './constants';

import style from './Pricing.module.scss'

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <Box className={style.wrapper}>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Header loggedIn={false} />
        <Typography
          component="h1"
          variant="h2"
          align="center"
        >
          Тарифы
        </Typography>
      </Container>
      <Footer>
        <Copyright/>
      </Footer>
    </Box>
  );
}