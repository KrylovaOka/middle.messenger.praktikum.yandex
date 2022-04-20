import './styles/base.scss';

import { renderPage, registerComponent }  from './core';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import EditprofilePage from './pages/editprofile';
import EditpasswordPage from './pages/editpassword';
import ChatPage from './pages/chat';
import Page404 from './pages/page404';
import Page500 from './pages/page500';
import TempPage from './pages/temp';

import Input from './components/input';
import Link from './components/link';
import Button from './components/button';
import Chat from './components/chat';
import Error from './components/error';
import ErrorPage from './components/layouts/errorpage';

registerComponent(Input, "Input");
registerComponent(Button, "Button");
registerComponent(Link, "Link");
registerComponent(Chat, "Chat");
registerComponent(Error, "Error");
registerComponent(ErrorPage, "ErrorPage");

function rerenderPage(hash: string){
  switch(hash){
    case '#': 
    case '': 
      renderPage(TempPage);
      break;
    case '#login': 
      renderPage(LoginPage);
      break;
    case '#register': 
      renderPage(RegisterPage);
      break;
    case '#profile': 
      renderPage(ProfilePage);
      break;
      case '#editprofile': 
      renderPage(EditprofilePage);
      break;
      case '#editpassword': 
      renderPage(EditpasswordPage);
      break;
    case '#chat': 
      renderPage(ChatPage);
      break;
    case '#err404': 
      renderPage(Page404);
      break;  
    case '#err500': 
      renderPage(Page500);
      break;  
    default:
      renderPage(Page404);
      break;  
  } 
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e){
      rerenderPage((e.target! as HTMLAnchorElement).hash);
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  rerenderPage(document.location.hash);
});
