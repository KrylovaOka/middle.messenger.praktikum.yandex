import Block from '../../../core/Block';
import './errorpage.scss';

interface ErrorProps {
  code: string;
  text: string;
}

export class ErrorPage extends Block {
  constructor({code, text}: ErrorProps) {
    super({code, text});
  }

  render() {
    return `
    <div class="centered-block__wrapper accent-bg">
        <div class="centered-block__content">
            <h1>{{ code }}</h1>
            <h2>{{ text }}</h2>
            <p class="back-link"><a href="#chat">Назад к чатам</a></p>
        <div class="centered-block">
    </div>
    `;
  }
}