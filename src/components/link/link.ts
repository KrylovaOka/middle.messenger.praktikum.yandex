import Block from '../../core/Block';

interface LinkProps {
  text: string;
  to: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({...props});
  }

  render() {
    return `<a href="{{to}}">{{text}}</a>`;
  }
}