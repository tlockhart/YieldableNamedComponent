# contextual-components

This application demonstrates a call to a contextual component that yields and formats props as an html component.  See the files below for details:
1. app\pods\index\route.ts - Contains all the data for the index route.
2. app\pods\index\template.hbs - Loops through the 3 author records from the model data and passes the data, as attributes, on specific components.
3. app\pods\components\blog-post\template.hbs - Calls the yield formatted data

Note: data Model is hard coded within route.
## Ways to pass data
1. #### Simple Method:  Pass data as an attribute. ####
    1. **Example: Passing attributes in index/template.hbs**
    2. <ComponentName @attr={{attributeValue}}/>
2. #### Yield Data in a Block: Pass a whole section of code to be rendered to screen. ####
    1. **Example: Passing ComponentName BlockPost in index/template.hbs**
        ```
        {{each @model as |post|}}<ComponentName @attr={{attributeValue}}>Author Name: {{post.author}}</ComponentName> {{/each}}
        ```
    2. **Example: BlogPost Component**
        ```
        {{yield}}
        ```
3. #### Call A component directly and pass named attributes: ####
    1. **Example: Passing Component in index/template.hbs** 
    2. **Note: componentName = foo-component**
        1. 
        ```{{#each @model as |post|}}
            {{component post.componentName post=post}}
          {{/each}}
        ```
    2. **Example: foo-component**
        ```
            <div>author: {{@author}}</div>
            <div>title: {{@title}}</div>
            <div>body: {{@body}}</div>
            <br>
        ```
4. #### Complex logic: Passes data attributes and a editStyle(markdown-style) formatting component into blog-post component.  blog-post yields the component and passes the attributes to markdown-style for display!  MarkdownStyle determines how the attributes will be rendered.  Component instances are instantiated with the as keyword.  component_ref is an instance of blog-post, that is instantiated for each data record in @model. ####
    1. **Example: Passing editStyle component = markdown-style in index/template.hbs** 
      ```
      {{#each @model as |route_post|}}
        <BlogPost
          @editStyle="markdown-style"
          @indexRouteBody={{route_post.body}}
          @indexRouteColor={{route_post.color}}
          @indexRouteTitle={{route_post.title}}
          @indexRouteAuthor={{route_post.author}} as |component_ref|>
          <p>
            Route Author:
            {{component_ref.author}}
          </p>
          <p>
            Route Title:
            {{component_ref.title}}
          </p>
          <p>
            Route Body:
            {{component_ref.body}}
          </p>
        </BlogPost>
      ```
    2. **Example: blog-post component**
      ```
        {{yield (hash
        author=(component @editStyle        indexRouteDisplay=@indexRouteAuthor   indexRouteColor=@indexRouteColor)

        title=(component @editStyle indexRouteDisplay=@indexRouteTitle indexRouteColor=@indexRouteColor)

        body=(component @editStyle indexRouteDisplay=@indexRouteBody indexRouteColor=@indexRouteColor))
        }}
      ```
5. #### Most Complex Logic: Instantiate an element-selector component directly, for each data record in @model, passing it data attributes from @model.  Use a component reference deWrap to access the data from the element-selector component and pass the wrapper component helper into the element-selector block.  The element-selector/template.hbs yields the  contents of the wrapper component, defined in the hash object. The wrapper hash object, instantiates a specific wrapping-component, by calling the wrappingComponentPath method in element-selector/component.ts.<br /><br /> The wrappingComponentPath method selects the correct component Path to be displayed, based on the type that is passed as an attribute in the element-selector.  Since the @model data has three different types, all three wrappers will be displayed. Note: The standard-wrapper component knows how to display itself, by using the style color (red), which was passed as an argument from @model data, during the instantiation of the element-selector. ####
    1. **Example: Instantiate element-selector component and passing a specific component into the block, in index/template.hbs** 
    ```
      {{#each @model as |route_post|}}
        <DashboardElements::ElementSelector
          @type={{route_post.type}}
          @element={{route_post.element}} 
          @color={{route_post.color}} as |deWrap|
        >
          {{component deWrap.wrapper}}
          {{log "wrapper" deWrap.wrapper}}
        </DashboardElements::ElementSelector>
      {{/each}}
    ```
    2. **Example: Yield a specific wrapping component and pass it all the attributes that were sent to element-selector, in element-selector/template.hbs** 
    ```
      <div>
      {{yield (hash
        wrapper=(component this.wrappingComponentPath 
        type=@type 
        element=@element
        color=@color
        dePath=this.deComponent)
      )}}
      </div>
    ```
    3. **Example: standard-wrapper knows how to display its name and format it with the color passed to it from element-selector/template.hbs.  It also calls the dashboard-elements/generic-group child component(by calling the dePath method), to display its name.  It converts the component helpers braces style notation into angle-bracket notation.  The de-component then displays its componentType, based on the type it received during instantiation, in standard/wrapper/template.hbs** 
    ```
    <p style="color: {{@color}};">
      Standard  Wrapper
    </p>
    {{!-- CALLS GENERIC_GROUP, but style with the standard Wrapper style --}}
    <b>
    {{#let (component this.dePath) as |DeComponent|}}
      <DeComponent
        @type={{@type}}
      as |deRef|>
        Check that type passed is correct: {{deRef.componentType}}
      </DeComponent>
    {{/let}}
    ```
    3. **Example: The dashboard-elements/generic-group yields the type that was sent to it from the standard-wrapper template.**
    ```
    <p>dashboard-element/generic-group</p>
    <div>
      {{yield (hash
        componentType = @type
      )}}
    </div>
    ```
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd contextual-components`
* `npm install`

## Running / Development

* `ember serve` or 'ember s'
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
