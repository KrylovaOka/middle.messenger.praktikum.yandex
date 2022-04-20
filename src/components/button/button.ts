import Block from '../../core/Block';

interface ButtonProps {
  text: string;
  bClass?: string;
  onClick?: () => void;
}

export class Button extends Block {
  constructor({text, bClass = "accent-btn", onClick}: ButtonProps) {
    super({text, bClass, events: {click: onClick}});
  }

  protected render(): string {
    return `
      <div class="button">
        <button class="{{bClass}}" type="button">{{text}}</button>
      </div>
    `;
  }
}
