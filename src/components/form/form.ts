import Block from '../../core/Block';
import Validator from '../../core/validator';
import '../../styles/form.scss';

type validatorType = {
  [key: string]: Validator
}

export class Form extends Block {
  validator: validatorType = {};

  validateChild(element: HTMLInputElement): boolean {
    const value = element.value;
    const component = this.children[element.id];
    let error = '';
    
    if (Object.keys(this.validator).includes(component.rName)) {
      error = this.validator[component.rName].validate(value);
    }  

    component.updateComponentChild({text: error});

    if (error === '') {
      return true;
    }

    return false;
  }

  protected getStateFromProps(props?: Record<string, unknown>) {
    Object.assign(this.state, props);
    
    const extState = {
      onSubmit: () => {
        const formData: {[key: string]: string} = {};
        
        let isValidForm = true;
        for (const ref in this.refs){
          const element = this.refs[ref].querySelector(`input`) as HTMLInputElement; 
          if(element !== null){
            if (!this.validateChild(element)) {
              isValidForm = false;
            }
            formData[ref] = element.value;
          }
        }

        if (isValidForm) {
          console.log('action/login', formData);
        }  
      },
      onBlur: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        this.validateChild(element);
      },
      onFocus: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const component = this.children[element.id];
        component.updateComponentChild({text: ''});
      }
    }

    this.setState(extState);
  }
}
