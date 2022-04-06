import Form from '../../components/form';
import Validator from '../../core/validator';

import '../../styles/profile.scss';

export class EditpasswordPage extends Form {
  constructor() {
    const props = {
      userImage: "./static/images/no-foto.png",
    }
    super(props);
  }

  validator = {
    oldPassword: new Validator({rules: {'required': true, 'min': 8, 'max': 40, 'capitalizexist': true, 'digitexist': true}}),
    newPassword: new Validator({rules: {'required': true, 'min': 8, 'max': 40, 'capitalizexist': true, 'digitexist': true}})
  }

  render() {
    return `
    <div class="centered-block__wrapper">
        <div class="back-column centered">
            <a href="#profile" class="back-btn"></a>
        </div>
        <div class="centered full-block">
            <div class="full-block__wrapper">
                <div class="avatar-block">
                    <img src="{{userImage}}">
                    <a href="#" class="avatar-block__link">Поменять аватар</a>
                </div>
                <form class="form-default form-inline">
                {{{Input
                    name="oldPassword"
                    label="Старый пароль"
                    ref="oldPassword"
                    type="password"
                    onBlur=onBlur
                    onFocus=onFocus
                }}}
                {{{Input
                    name="newPassword"
                    label="Новый пароль"
                    ref="newPassword"
                    type="password"
                    onBlur=onBlur
                    onFocus=onFocus
                }}}
                {{{Input
                    name="newPasswordConfirm"
                    label="Новый пароль (еще раз)"
                    ref="newPasswordConfirm"
                    type="password"
                    onBlur=onBlur
                    onFocus=onFocus
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