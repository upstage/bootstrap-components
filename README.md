# Bootstrap Components

> Handlebars templates and data files for all Bootstrap components.

This is a work in progress. As a proof of concept, we created some grunt tasks to:

1. `grunt-components`: This task simple creates some starter files and folders for the components. It creates way too much crap right now, the goal is to generate a data file (JSON/YAML), and a template for each component. We may also include the `.less` file for each component, as well as the compiled `.css` and `.html` files.
2. `grunt-get`: Downloads Bootstrap's built HTML from [getbootstrap.com](http://getbootstrap.com). This seemed a less hacky alternative than converting Bootstrap's liquid templates to Handlebars, and then compiling them locally.
3. `grunt-reverse`: Automatically extract "components" from Bootstrap's HTML using Cheerio. Nothing too complicated (I'm probably doing it wrong since I'm completely new to Cheerio), all we're doing here is grabbing any HTML inside elements with the class `.bs-example`, and saving each example to a separate file.
    * Also organizes the components into a close proximity of the corresponding folders they would actually belong in if the components were organized this way natively.
    * Also extract some "starter text" from each component, and save it to a JSON file in the corresponding directory. This isn't intended to be complete, or correct. Just a head start.
4. `grunt-matter`: Adds YAML front matter to each template. Currently, we're only adding a `title` property, since the goal is to just get a head start.
5. `assemble`: To let us know that everything is working correctly, we generate HTML with [Assemble](http://assemble.io), which, well, you just have to see this for yourself to know how absolutely mind-blowingly cool this is :-)... it just works.

## Getting started

First, just download this project or install with git. Then install Bootstrap with Bower (or if you want the latest, pull it down with git):

```bash
bower install bootstrap
```

However you download Bootstrap, make sure it's in the `vendor` directory. Then run `grunt`. If something breaks, well, that makes sense because we're not finished with it yet. In any case, please feel free to provide feedback or even lend a helping hand.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## Authors

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)


**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)


## License
Copyright (c) 2013 Jon Schlinkert, Brian Woodward, community.
Released under the [MIT license](LICENSE-MIT).

