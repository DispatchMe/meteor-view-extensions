View Extensions [![Build Status](https://travis-ci.org/DispatchMe/meteor-view-extensions.svg?branch=master)](https://travis-ci.org/DispatchMe/meteor-view-extensions)
======

##Usage

`meteor add dispatch:view-extensions`

```
var view = Template.myTemplate.constructView();

// Here are a few extension methods you can use

// Render the view without attaching it
view.render();

// Access the dom nodes
view.nodes();

// Attach the view to a dom node or another view.
view.attach(document.body);

// Set the data context
view.setData({ foo: "bar" });

// Extend the data context without overwriting it
view.setData({ extended: true }, true);

```