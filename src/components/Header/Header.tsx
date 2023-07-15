import {menuItemsLogin, menuItemsUnLogin} from './constants';

import {Logo} from '../';
import {NavMenu} from '../';

import styles from './header.module.scss';

export const Header = ({ loggedIn } : {loggedIn: boolean}) => {
  return (
    <header className={styles.container}>
      <Logo />
      <NavMenu
        menuItems={loggedIn ? menuItemsLogin : menuItemsUnLogin}
      ></NavMenu>
    </header>
  );
};
