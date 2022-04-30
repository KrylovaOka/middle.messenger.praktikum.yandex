import Block from '../../core/Block';
import { withStore, withRouter } from '../../utils';

export class Page404 extends Block {
  public static componentName = 'Page404';

  render() {
    return `
      {{{ErrorPage code="404" text="Не туда попали"}}}
    `;
  }
}

export default withRouter(Page404);