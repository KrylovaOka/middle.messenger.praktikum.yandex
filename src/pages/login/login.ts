import Form from '../../components/form';
import Validator from '../../core/validator';

export class LoginPage extends Form {
  validator = {
    login: new Validator({rules: {'required': true, 'min': 3, 'max': 20, 'lettersdigits': true}}),
    password: new Validator({rules: {'required': true, 'min': 8, 'max': 40, 'capitalizexist': true, 'digitexist': true}})
  }

  render() {
    return `
    <div class="centered-block__wrapper">
      <div class="centered-block__content block-shadow">
        <form class="form-default">
          <h1>Вход</h1>
          {{{Input
            name="login"
            label="Логин"
            ref="login"
            id="login"
            type="text"
            onBlur=onBlur
            onFocus=onFocus
          }}}
          {{{Input
            name="password"
            label="Пароль"
            ref="password"
            id="password" 
            type="password"
            onBlur=onBlur
            onFocus=onFocus
          }}}

          {{{Button
            text="Авторизоваться"
            onClick=onSubmit
          }}}
          <p><a href="#register">Нет аккаунта?</a></p>
        </form>
      </div>
    </div>     
    `;
  }
}
