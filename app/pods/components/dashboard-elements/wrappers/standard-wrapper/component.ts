import Component from '@glimmer/component';

interface DashboardElementsWrappersStandardWrapperArgs {
  type: string;
  element: string;
  color: string;
  dePath: string;
}

export default class DashboardElementsWrappersStandardWrapper extends Component<DashboardElementsWrappersStandardWrapperArgs> {
  get dePath() {
    console.log("dePath = ", this.args.dePath);
    return this.args.dePath;
  }
}
