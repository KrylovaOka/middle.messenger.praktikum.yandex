import Form from '../../components/form';
import Validator from '../../core/validator';
import { withStore } from '../../utils';
import { edit } from '../../services/user';

import '../../styles/profile.scss';

export class EditprofilePage extends Form {
  public forAuthorized = true;

  validator = {
    login: new Validator({rules: {'required': true, 'min': 3, 'max': 20, 'lettersdigits': true}}),
    password: new Validator({rules: {'required': true, 'min': 8, 'max': 40, 'capitalizexist': true, 'digitexist': true}}),
    email: new Validator({rules: {'required': true, 'email': true}}),
    first_name: new Validator({rules: {'required': true, 'cirillic': true, 'capitalizfirst': true}}),
    second_name: new Validator({rules: {'required': true, 'cirillic': true, 'capitalizfirst': true}}),
    phone: new Validator({rules: {'phone': true}}),
  }

  submitHandler = function(formObject: any){
    window.store.dispatch(edit, formObject);
  }; 

  render() {
    let userData: User  = {
      login: '',
      email: '', 
      firstName: '',
      lastName:  '',
      displayName: '',
      phone: ''
    };
    if ( this.state.store && (this.state.store as AppState).isLoading ) {
      userData = (this.state.store as AppState).user as User;
    }   
   
    return `
    <div class="centered-block__wrapper">
      {{#if store.state.isLoading}}
        <div class="back-column centered">
          {{{Link
            to="/profile"
            class="back-btn"
          }}}    
        </div>
        <div class="centered full-block">
            <div class="full-block__wrapper">
                <div class="avatar-block">
                    <img class="avatar-img" src="{{store.state.user.avatar}}">
                </div>
                <form class="form-default form-inline">
                {{#if store.state.formError}}
                <p class="error text-center">{{store.state.formError}}</p>
                {{/if}}
                {{{Input
                    value="${userData.email}" 
                    name="email"
                    label="??????????"
                    ref="email"
                    type="text"
                    onBlur=onBlur
                    onFocus=onFocus
                }}}
                {{{Input
                    value="${userData.login}" 
                    name="login"
                    label="??????????"
                    ref="login"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Input
                    value="${userData.firstName}" 
                    name="first_name"
                    label="??????"
                    ref="first_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Input
                    value="${userData.lastName}" 
                    name="second_name"
                    label="??????????????"
                    ref="second_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}} 
                {{{Input
                    value="${userData.displayName}" 
                    name="display_name"
                    label="?????? ?? ????????"
                    ref="display_name"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}} 
                {{{Input
                    value="${userData.phone}" 
                    name="phone"
                    label="??????????????"
                    ref="phone"
                    type="text"
                    onFocus=onFocus
                    onBlur=onBlur
                }}}
                {{{Button
                    text="??????????????????"
                    onClick=onSubmit
                }}}          
                </form>
            </div>    
        </div>
      {{else}}
      <div>loadind...</div>
      {{/if}}         
    </div>
    `;
  }
}

export default withStore(EditprofilePage);