import Block from '../../core/Block';

export class TempPage extends Block {
  constructor() {
     const props = {
        links: [
            {
                href: "#err404",
                text: "страница 404"     
            },
            {
                href: "#err500",
                text: "страница 5**"     
            },
            {
                href: "#login",
                text: "вход"     
            },
            {
                href: "#register",
                text: "регистрация"     
            },
            {
                href: "#profile",
                text: "профиль"     
            },
            {
                href: "#editprofile",
                text: "Изменить данные"     
            },
            {    
                href: "#editpassword",
                text: "Изменить пароль"     
            },
            {    
                href: "#chat",
                text: "Чат"    
            }    
        ]
     }  
     super(props);
  }
    

  render() {
    return `
    <div class="centered-block__wrapper accent-bg">
        <div class="centered-block__content">
        {{#each links}}    
        <p><a href="{{href}}">{{text}}</a></p>
        {{/each}} 
        <div class="centered-block">
    </div>
    `;
  }
}