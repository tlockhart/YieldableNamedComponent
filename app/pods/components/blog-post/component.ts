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

}
