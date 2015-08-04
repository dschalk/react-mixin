The Facebook React blog post for   says:

```
Today, we're happy to release React v0.13!

The most notable new feature is support for ES6 classes, which allows developers to have more flexibility when writing components. Our eventual goal is for ES6 classes to replace React.createClass completely, but until we have a replacement for current mixin use cases and support for class property initializers in the language, we don't plan to deprecate React.createClass.
```
I have been developing a React project using ES6 and the class constructor syntax despite the frustration of not having ready access to mixins. When I discovered that Frankie Bagnardi's [react-mixin](https://github.com/brigand/react-mixin) worked right out of the box for most of the mixins I tried, I felt compelled to share the news. 

This repo demonstrates that the React mixins in the library obtained with "npm install react" are readily available for use in an ES6 component. The precise location is "node_modules/react/lib/. The code for incorporating the mixins is at the end of the Component_1 example, and also at the end of this README file.

reactMixin(Component_1.prototype, require('./set-timeout-mixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/ReactComponentWithPureRenderMixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/LinkedStateMixin'));
reactMixin(Component_1.prototype, require('./node_modules/react/lib/AutoFocusMixin'));








