import Component from '@glimmer/component';

interface BlogPostArgs {
    title?: string;
    body?: string;
    author?: string;
    editStyle?: string;
    indexRouteBody?: string;
    indexRouteColor?: string;
    indexRouteTitle?: string;
    indexRouteAuthor?: string;
}

export default class BlogPost extends Component<BlogPostArgs> {
    constructor(owner: unknown, args: BlogPostArgs){
        super(owner, args);
        console.log(`BlogPost EditStyle: ${this.args.editStyle}`);
        console.log(`BlogPost Author: ${this.args.author}`);
    }
    get author() {
        return this.args.author;
    }
    get title() {
        console.log(`Title: ${this.args.title}`)
        return this.args.title;
    }
    get editStyle() {
        console.log(`EditStyle: ${this.args.editStyle}`)
        return this.args.editStyle;
    }
}
