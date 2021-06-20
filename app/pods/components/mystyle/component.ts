import Component from '@glimmer/component';

interface MystyleArgs {
    indexRouteColor: string;
    indexRouteAuthor: string;
}

export default class Mystyle extends Component<MystyleArgs> {
    constructor(owner: unknown, args: MystyleArgs) {
        super(owner, args);
        console.log("Called markdownStyle");
        console.log(`Color: ${this.args.indexRouteColor}`);
    }
    get color() {
        return "red";
    }
}
