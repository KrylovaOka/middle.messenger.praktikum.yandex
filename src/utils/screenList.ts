import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ProfilePage from '../pages/profile';
import EditprofilePage from '../pages/editprofile';
import EditpasswordPage from '../pages/editpassword';
import ChatPage from '../pages/chat';
import Page404 from '../pages/page404';
import Page500 from '../pages/page500';
import TempPage from '../pages/temp';

import { Block } from '../core';

export enum Screens {
  Register = 'register',
  Login = 'login',
  Profile = 'profile',
  Editprofile = 'editprofile',
  Editpassword = 'editpassword',
  Chat = 'chat',
  NotFound = 'notfound',
  Temp = 'temp'
}

const map: Record<Screens, typeof Block> = {
  [Screens.Register]: RegisterPage,
  [Screens.Login]: LoginPage,
  [Screens.Profile]: ProfilePage,
  [Screens.Editprofile]: EditprofilePage,
  [Screens.Editpassword]: EditpasswordPage,
  [Screens.Chat]: ChatPage,
  [Screens.NotFound]: Page404,
  [Screens.Temp]: TempPage
};

export const getScreenComponent = (screen: Screens): typeof Block => {
  return map[screen];
};