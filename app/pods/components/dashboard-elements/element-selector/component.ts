import Component from '@glimmer/component';

interface DashboardElementsElementSelectorArgs {
  type: string;
  element: string;
  color: string;
}
interface ObjectString {
  [key: string]: string
}
const deLocation: ObjectString =
{
  list: 'dashboard-elements/list-elements/',
  mobile: 'dashboard-elements/mobile-elements/',
  standard: 'dashboard-elements/'
};

const wrapperLocation: ObjectString =
{
  list: 'dashboard-elements/wrappers/list-wrapper',
  mobile: 'dashboard-elements/wrappers/mobile-wrapper',
  standard: 'dashboard-elements/wrappers/standard-wrapper'
};

export default class DashboardElementsElementSelector extends Component<DashboardElementsElementSelectorArgs> {
  get deDirectory() {
    console.log("type:", this.args.type);
    return deLocation[`${this.args.type}`];
  }
  get deComponent() {
    let componentPath = this.deDirectory+this.args.element;
    console.log("componentPath:", componentPath);
    return componentPath;
  }
  get wrappingComponentPath() {
    let wrapperPath = wrapperLocation[`${this.args.type}`];

    console.log("wrappingPath:", wrapperPath);
    return wrapperPath;
  }
}
