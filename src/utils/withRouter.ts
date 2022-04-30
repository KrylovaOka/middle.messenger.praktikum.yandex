import { Block, Router } from './../core';

export function withRouter(Component: typeof Block) {
  return class extends Component {
    public static componentName = Component.name;

    constructor(props: P & { router: Router }) {
      super({ ...props, router: window.router });
    }
  };
}