import Block from '../../core/Block';
import '../../styles/profile.scss';

interface ProfileProps {
    userName: string;
    userImage?: string;
    userData?: Array<Record<string, unknown>>;
    links?:  Array<Record<string, unknown>>;
}

export class ProfilePage extends Block {
  constructor() {
     const props: ProfileProps = {
        userName: "Ваня", 
        userImage: "./static/images/no-foto.png",
        userData: [
            {
              label: "Почта",
              data: "ivanov@yandex.ru"      
            },
            {
                label: "Логин",
                data: "IvanovIvan"
            },      
            {
                label: "Имя",
                data:  "Иван"
            },
            {      
                label: "Фамилия",
                data:  "Иванов"  
            },
            {    
                label: "Имя в чате",
                data:  "Ваня"
            },
            {      
                label: "Телефон",
                data:  "+7(921)555-55-55"   
            }              
        ],
        links: [
            {
                href: "#editprofile",
                text: "Изменить данные"     
            },
            {    
                href: "#editpassword",
                text: "Изменить пароль"     
            },
            {    
                href: "#",
                text: "Выйти"    
            }    
        ]
     }  
     super(props as unknown as Record<string, unknown>);
  }
    

  render() {
    return `
    <div class="centered-block__wrapper">
        <div class="back-column centered">
            <a href="#" class="back-btn"></a>
        </div>
        <div class="centered full-block">
            <div class="full-block__wrapper">
                <div class="avatar-block">
                    <img src="{{userImage}}">
                    <a href="#" class="avatar-block__link">Поменять аватар</a>
                </div>
                <h2>{{userName}}</h2>
                <div class="user-info">
                {{#each userData}}
                    <div class="user-info__block">
                        <dt class="user-info__label">{{label}}</dt>
                        <dd class="user-info__data">{{data}}</dd>
                    </div>    
                {{/each}}    
                </div>
                {{#each links}}  
                <p>
                {{{Link
                    text=this.text
                    to=href 
                }}}
                </p>
                {{/each}}
            </div>    
        </div>
    </div>
    `;
  }
}