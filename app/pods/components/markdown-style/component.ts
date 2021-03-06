import Component from '@glimmer/component';

interface MarkdownStyleArgs {
    indexRouteColor: string;
    indexRouteAuthor: string;
    indexRouteBody: string;
}

export default class MarkdownStyle extends Component<MarkdownStyleArgs> {
    constructor(owner: unknown, args: MarkdownStyleArgs) {
        super(owner, args);
        console.log("Called markdownStyle");
        console.log(`Color: ${this.args.indexRouteColor}`);
    }
}
