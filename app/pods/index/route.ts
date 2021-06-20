import Route from '@ember/routing/route';

export default class Index extends Route{
  async model(){
    let data = [
      {
      title: 'Title 1',
      body: 'Body 1 from the Index Route',
      author: 'Author 1',
      componentName: 'foo-component',
      color: 'blue',
      type: 'mobile',
      element: 'installation-group'
    },
    {
      title: 'Title 2',
      body: 'Body 2 from the Index Route',
      author: 'Author2',
      componentName: 'bar-component',
      color: 'red',
      type: 'standard',
      element: 'generic-group'
    },
    {
      title: 'Title 3',
      body: 'Body 3 from the Index Route',
      author: 'Author3',
      componentName: 'bar-component',
      color: 'red',
      type: 'list',
      element: 'installation-group'
    },
  ];
    return data;
  }
}
