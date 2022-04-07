import Form from '../../components/form';
import Validator from '../../core/validator';

import '../../styles/profile.scss';

export class EditprofilePage extends Form {
  constructor() {
    const props = {
      userImage: "./static/images/no-foto.png",
      userData: {
        email:        "ivanov@yandex.ru",      
        login:        "IvanovIvan",      
        first_name:   "Иван",
        last_name:    "Иванов",
        diaplay_name: "Ваня",
        phone:        "+7(921)555-55-55"
      }
    }
    super(props);
  }

  validator = {
    login: new Validator({rules: {'required': true, 'min': 3, 'max': 20, 'lettersdigits': true}}),
    password: new Validator({rules: {'required': true, 'min': 8, 'max': 40, 'capitalizexist': true, 'digitexist': true}}),
    email: new Validator({rules: {'required': true, 'email': true}}),
    first_name: new Validator({rules: {'required': true, 'cirillic': true, 'capitalizfirst': true}}),
    last_name: new Validator({rules: {'required': true, 'cirillic': true, 'capitalizfirst': true}}),
    phone: new Validator({rules: {'phone': true}}),
  }

  render() {
    const data: Record<string, unknown> = this.state.userData as Record<string, unknown>;
    
    return `
    <div class="centered-block__wrapper">
        <div class="back-column centered">
            <a href="#profile" class="back-btn"></a>
        </div>
        <div class="centered full-block">
            <div class="full-block__wrapper">
                <div class="avatar-block">
                    <img src="{{{userImage}}}">
                    <a href="#" class="avatar-block__link">Поменять аватар</a>
                </div>
                <form class="form-default form-inline">
                {{{Input
                    value="${data.email}" 
                    name="email"
                    label="Почта"
                    ref="email"
                    type="text"
                    onBlur=onBlur
                    onFocus=onFocus
                }}}
                {{{Input
                    value="${data.login}" 
                    name="login"
                    label="Логин"
                    ref="login"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Input
                    value="${data.first_name}" 
                    name="first_name"
                    label="Имя"
                    ref="first_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Input
                    value="${data.last_name}" 
                    name="last_name"
                    label="Фамилия"
                    ref="last_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}} 
                {{{Input
                    value="${data.diaplay_name}" 
                    name="display_name"
                    label="Имя в чате"
                    ref="display_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}} 
                {{{Input
                    value="${data.phone}" 
                    name="phone"
                    label="Телефон"
                    ref="phone"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Button
                    text="Сохранить"
                    onClick=onSubmit
                }}}          
                </form>
            </div>    
        </div>
    </div>
    `;
  }
}