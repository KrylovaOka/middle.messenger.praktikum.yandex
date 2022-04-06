import Form from '../../components/form';
import Validator from '../../core/validator';

import '../../styles/profile.scss';
import '../../styles/chat.scss';

import chatData from './chats.json'

export class ChatPage extends Form {
  constructor() {
    const props = {
      userImage: "./static/images/no-foto.png",
      userName: "Ваня",
      chats: chatData
    }
    super(props);
  }

  validator = {
    message: new Validator({rules: {'required': true}})
  }

  activeChat: any = null;

  protected getStateFromProps(props?: any) {
    super.getStateFromProps(props);
    
    const extState = {
      onClick: (e: InputEvent) => {
        const element = (e.target as HTMLElement).closest('[id]'); 

        if (element === null) {
          return;
        }

        if (this.activeChat !== null) {
          const oldActiveComponent = this.children[this.activeChat];
          this.updateChild(oldActiveComponent, {active: false });
        }

        const newActiveComponent = this.children[element.id];
        this.updateChild(newActiveComponent, {active: true });
        this.activeChat = element.id;
      },
    }

    this.setState(extState);
  }


  render() {
    const chats = this.state.chats;

    return `
    <div class="centered-block__wrapper">
        <div class="back-column">
          <div class="user-block">
            <div class="chat-block__image"><img src="{{userImage}}"></div>
            <a href="#" class="menu-button"></a>
          </div>
          {{#each chats}}
            {{{Chat
                ref=ref
                name=name
                forRead=forRead
                active=active
                lastMessage=lastMessage
                onClick=@root.onClick
            }}}
          {{/each}}  
        </div>
        <div class="full-block stretched">
            <div class="user-block">
                <div class="chat-block__image"><img src="{{userImage}}"></div>
                <span class="user-name">{{userName}}</span>
                <a href="#" class="menu-button"></a>
            </div>
            <div class="message-block__wrapper">
            </div>  
            <div class="form-block">      
                <form class="form-chats">
                {{{Input
                    name="message"
                    ref="message"
                    placeholder="Сообщение" 
                    type="text"
                    onBlur=onBlur
                    onFocus=onFocus
                }}}
                {{{Button
                    bClass="back-btn" 
                    text=""
                    onClick=onSubmit
                }}}          
                </form>
            </div>
        </div        
    </div>
    `;
  }
}