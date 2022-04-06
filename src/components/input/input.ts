import Block from '../../core/Block';

interface InputProps {
  onBlur?: () => void;
  onFocus?: () => void;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  type?: 'text' | 'password' | 'email';
}

export class Input extends Block {
  constructor({onBlur = () => {}, onFocus = () => {}, name, value = '', error = '', label, type = 'text', placeholder}: InputProps) {
    super({name, label, type, value, error, placeholder, events: {blur: onBlur, focus: onFocus}});
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;
    if (!events) {
      return;
    }
    Object.entries(events).forEach(([event, listener]) => {
      this.element!.querySelector(`input`)!.addEventListener(event, listener);
    });
  }

  protected render(): string {
    const { error, value } = this.state;

    return `
      <div class="form-group">
        <label for="{{name}}" class="form-label">{{label}}</label>
        <input type="{{type}}" name="{{name}}" id = "${this.id}" placeholder="{{placeholder}}" blur = "{{onBlur}}" class="form-input" value="${value}">
        {{{Error
          text="${error}"
        }}}
      </div>
    `
  }
}
