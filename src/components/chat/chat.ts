import Block from '../../core/Block';

import '../../styles/profile.scss';

type MessageProp = {
    author?: string;
    text: string;
    created: string;
}

interface ChatProps {
    name: string;
    image?: string;
    forRead?: number;
    active: boolean;
    lastMessage?: MessageProp;
    onClick?: () => void;
}

export class Chat extends Block {
  constructor(
      {name, image, forRead, active = false, lastMessage = {} as MessageProp, onClick}: ChatProps
    ) {
    super({name, image, forRead, active, lastMessage, events: {click: onClick}});
  }

  render() {
    return `
    <div class="chat-block {{#if active}}active{{/if}}" id = "${this.id}">
        <div class="chat-block__image">
            {{#if image}}<img src="{{image}}">{{/if}}
        </div>
        <div class="chat-block__message">
            <p class="chat-block__message-title">{{name}}</p>
            <p>
                {{#if lastMessage.author}}
                <span class="chat-block__message-author">
                {{lastMessage.author}}:
                </span>
                {{/if}}
                {{lastMessage.text}}
            </p>
        </div>
        <div class="chat-block__info">
            <span class="chat-block__info-date">{{lastMessage.created}}</span>
            {{#if forRead}}<span class="chat-block__info-amount">{{forRead}}</span>{{/if}}
        </div>
    </div>
    `;
  }
}