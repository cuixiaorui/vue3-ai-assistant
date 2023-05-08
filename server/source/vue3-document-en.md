Introduction [​](#introduction)
===============================

You are reading the documentation for Vue 3!

*   Vue 2 support will end on Dec 31, 2023. Learn more about [Vue 2 Extended LTS](https://v2.vuejs.org/lts/).
*   Vue 2 documentation has been moved to [v2.vuejs.org](https://v2.vuejs.org/).
*   Upgrading from Vue 2? Check out the [Migration Guide](https://v3-migration.vuejs.org/).

[

![Vue Mastery banner](https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png)

Learn Vue with video tutorials on VueMastery.com

![Vue Mastery Logo](https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png)

](https://www.vuemastery.com/courses/)

What is Vue? [​](#what-is-vue)
------------------------------

Vue (pronounced /vjuː/, like **view**) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

Here is a minimal example:

js

    import { createApp } from 'vue'
    
    createApp({
      data() {
        return {
          count: 0
        }
      }
    }).mount('#app')

template

    <div id="app">
      <button @click="count++">
        Count is: {{ count }}
      </button>
    </div>

**Result**

Count is: 0

The above example demonstrates the two core features of Vue:

*   **Declarative Rendering**: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.
    
*   **Reactivity**: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.
    

You may already have questions - don't worry. We will cover every little detail in the rest of the documentation. For now, please read along so you can have a high-level understanding of what Vue offers.

Prerequisites

The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with [this JavaScript overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). Prior experience with other frameworks helps, but is not required.

The Progressive Framework [​](#the-progressive-framework)
---------------------------------------------------------

Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

*   Enhancing static HTML without a build step
*   Embedding as Web Components on any page
*   Single-Page Application (SPA)
*   Fullstack / Server-Side Rendering (SSR)
*   Jamstack / Static Site Generation (SSG)
*   Targeting desktop, mobile, WebGL, and even the terminal

If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these.

If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more detail in [Ways of Using Vue](/guide/extras/ways-of-using-vue.html).

Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. Even if you are just a beginner now, the knowledge gained along the way will stay useful as you grow to tackle more ambitious goals in the future. If you are a veteran, you can pick the optimal way to leverage Vue based on the problems you are trying to solve, while retaining the same productivity. This is why we call Vue "The Progressive Framework": it's a framework that can grow with you and adapt to your needs.

Single-File Components [​](#single-file-components)
---------------------------------------------------

In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called **Single-File Component** (also known as `*.vue` files, abbreviated as **SFC**). A Vue SFC, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), and styles (CSS) in a single file. Here's the previous example, written in SFC format:

vue

    <script>
    export default {
      data() {
        return {
          count: 0
        }
      }
    }
    </script>
    
    <template>
      <button @click="count++">Count is: {{ count }}</button>
    </template>
    
    <style scoped>
    button {
      font-weight: bold;
    }
    </style>

SFC is a defining feature of Vue and is the recommended way to author Vue components **if** your use case warrants a build setup. You can learn more about the [how and why of SFC](/guide/scaling-up/sfc.html) in its dedicated section - but for now, just know that Vue will handle all the build tools setup for you.

API Styles [​](#api-styles)
---------------------------

Vue components can be authored in two different API styles: **Options API** and **Composition API**.

### Options API [​](#options-api)

With Options API, we define a component's logic using an object of options such as `data`, `methods`, and `mounted`. Properties defined by options are exposed on `this` inside functions, which points to the component instance:

vue

    <script>
    export default {
      // Properties returned from data() become reactive state
      // and will be exposed on `this`.
      data() {
        return {
          count: 0
        }
      },
    
      // Methods are functions that mutate state and trigger updates.
      // They can be bound as event listeners in templates.
      methods: {
        increment() {
          this.count++
        }
      },
    
      // Lifecycle hooks are called at different stages
      // of a component's lifecycle.
      // This function will be called when the component is mounted.
      mounted() {
        console.log(`The initial count is ${this.count}.`)
      }
    }
    </script>
    
    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNptkMFqxCAQhl9lkB522ZL0HNKlpa/Qo4e1ZpLIGhUdl5bgu9es2eSyIMio833zO7NP56pbRNawNkivHJ25wV9nPUGHvYiaYOYGoK7Bo5CkbgiBBOFy2AkSh2N5APmeojePCkDaaKiBt1KnZUuv3Ky0PppMsyYAjYJgigu0oEGYDsirYUAP0WULhqVrQhptF5qHQhnpcUJD+wyQaSpUd/Xp9NysVY/yT2qE0dprIS/vsds5Mg9mNVbaDofL94jZpUgJXUKBCvAy76ZUXY53CTd5tfX2k7kgnJzOCXIF0P5EImvgQ2olr++cbRE4O3+t6JxvXj0ptXVpye1tvbFY+ge/NJZt)

### Composition API [​](#composition-api)

With Composition API, we define a component's logic using imported API functions. In SFCs, Composition API is typically used with [`<script setup>`](/api/sfc-script-setup.html). The `setup` attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate. For example, imports and top-level variables / functions declared in `<script setup>` are directly usable in the template.

Here is the same component, with the exact same template, but using Composition API and `<script setup>` instead:

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // reactive state
    const count = ref(0)
    
    // functions that mutate state and trigger updates
    function increment() {
      count.value++
    }
    
    // lifecycle hooks
    onMounted(() => {
      console.log(`The initial count is ${count.value}.`)
    })
    </script>
    
    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNpNkMFqwzAQRH9lMYU4pNg9Bye09NxbjzrEVda2iLwS0spQjP69a+yYHnRYad7MaOfiw/tqSliciybqYDxDRE7+qsiM3gWGGQJ2r+DoyyVivEOGLrgRDkIdFCmqa1G0ms2EELllVKQdRQa9AHBZ+PLtuEm7RCKVd+ChZRjTQqwctHQHDqbvMUDyd7mKip4AGNIBRyQujzArgtW/mlqb8HRSlLcEazrUv9oiDM49xGGvXgp5uT5his5iZV1f3r4HFHvDprVbaxPhZf4XkKub/CDLaep1T7IhGRhHb6WoTADNT2KWpu/aGv24qGKvrIrr5+Z7hnneQnJu6hURvKl3ryL/ARrVkuI=)

### Which to Choose? [​](#which-to-choose)

Both API styles are fully capable of covering common use cases. They are different interfaces powered by the exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The fundamental concepts and knowledge about Vue are shared across the two styles.

The Options API is centered around the concept of a "component instance" (`this` as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.

You can learn more about the comparison between the two styles and the potential benefits of Composition API in the [Composition API FAQ](/guide/extras/composition-api-faq.html).

If you are new to Vue, here's our general recommendation:

*   For learning purposes, go with the style that looks easier to understand to you. Again, most of the core concepts are shared between the two styles. You can always pick up the other style later.
    
*   For production use:
    
    *   Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement.
        
    *   Go with Composition API + Single-File Components if you plan to build full applications with Vue.
        

You don't have to commit to only one style during the learning phase. The rest of the documentation will provide code samples in both styles where applicable, and you can toggle between them at any time using the **API Preference switches** at the top of the left sidebar.

Still Got Questions? [​](#still-got-questions)
----------------------------------------------

Check out our [FAQ](/about/faq.html).

Pick Your Learning Path [​](#pick-your-learning-path)
-----------------------------------------------------

Different developers have different learning styles. Feel free to pick a learning path that suits your preference - although we do recommend going over all of the content, if possible!

[

Try the Tutorial

For those who prefer learning things hands-on.

](/tutorial/)[

Read the Guide

The guide walks you through every aspect of the framework in full detail.

](/guide/quick-start.html)[

Check out the Examples

Explore examples of core features and common UI tasks.

](/examples/)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/introduction.md)
Quick Start [​](#quick-start)
=============================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Try Vue Online [​](#try-vue-online)
-----------------------------------

*   To quickly get a taste of Vue, you can try it directly in our [Playground](https://play.vuejs.org/#eNo9jcEKwjAMhl/lt5fpQYfXUQfefAMvvRQbddC1pUuHUPrudg4HIcmXjyRZXEM4zYlEJ+T0iEPgXjn6BB8Zhp46WUZWDjCa9f6w9kAkTtH9CRinV4fmRtZ63H20Ztesqiylphqy3R5UYBqD1UyVAPk+9zkvV1CKbCv9poMLiTEfR2/IXpSoXomqZLtti/IFwVtA9A==).
    
*   If you prefer a plain HTML setup without any build steps, you can use this [JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/) as your starting point.
    
*   If you are already familiar with Node.js and the concept of build tools, you can also try a complete build setup right within your browser on [StackBlitz](https://vite.new/vue).
    

Creating a Vue Application [​](#creating-a-vue-application)
-----------------------------------------------------------

Prerequisites

*   Familiarity with the command line
*   Install [Node.js](https://nodejs.org/) version 16.0 or higher

In this section we will introduce how to scaffold a Vue [Single Page Application](/guide/extras/ways-of-using-vue.html#single-page-application-spa) on your local machine. The created project will be using a build setup based on [Vite](https://vitejs.dev) and allow us to use Vue [Single-File Components](/guide/scaling-up/sfc.html) (SFCs).

Make sure you have an up-to-date version of [Node.js](https://nodejs.org/) installed, then run the following command in your command line (without the `>` sign):

    > npm init vue@latest

This command will install and execute [create-vue](https://github.com/vuejs/create-vue), the official Vue project scaffolding tool. You will be presented with prompts for several optional features such as TypeScript and testing support:

    ✔ Project name: … <your-project-name>
    ✔ Add TypeScript? … No / Yes
    ✔ Add JSX Support? … No / Yes
    ✔ Add Vue Router for Single Page Application development? … No / Yes
    ✔ Add Pinia for state management? … No / Yes
    ✔ Add Vitest for Unit testing? … No / Yes
    ✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
    ✔ Add ESLint for code quality? … No / Yes
    ✔ Add Prettier for code formatting? … No / Yes
    
    Scaffolding project in ./<your-project-name>...
    Done.

If you are unsure about an option, simply choose `No` by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:

    > cd <your-project-name>
    > npm install
    > npm run dev
    

You should now have your first Vue project running! Note that the example components in the generated project are written using the [Composition API](/guide/introduction.html#composition-api) and `<script setup>`, rather than the [Options API](/guide/introduction.html#options-api). Here are some additional tips:

*   The recommended IDE setup is [Visual Studio Code](https://code.visualstudio.com/) + [Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar). If you use other editors, check out the [IDE support section](/guide/scaling-up/tooling.html#ide-support).
*   More tooling details, including integration with backend frameworks, are discussed in the [Tooling Guide](/guide/scaling-up/tooling.html).
*   To learn more about the underlying build tool Vite, check out the [Vite docs](https://vitejs.dev).
*   If you choose to use TypeScript, check out the [TypeScript Usage Guide](./typescript/overview.html).

When you are ready to ship your app to production, run the following:

    > npm run build
    

This will create a production-ready build of your app in the project's `./dist` directory. Check out the [Production Deployment Guide](/guide/best-practices/production-deployment.html) to learn more about shipping your app to production.

[Next Steps >](#next-steps)

Using Vue from CDN [​](#using-vue-from-cdn)
-------------------------------------------

You can use Vue directly from a CDN via a script tag:

html

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

Here we are using [unpkg](https://unpkg.com/), but you can also use any CDN that serves npm packages, for example [jsdelivr](https://www.jsdelivr.com/package/npm/vue) or [cdnjs](https://cdnjs.com/libraries/vue). Of course, you can also download this file and serve it yourself.

When using Vue from a CDN, there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework. However, you won't be able to use the Single-File Component (SFC) syntax.

### Using the Global Build [​](#using-the-global-build)

The above link loads the _global build_ of Vue, where all top-level APIs are exposed as properties on the global `Vue` object. Here is a full example using the global build:

html

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <div id="app">{{ message }}</div>
    
    <script>
      const { createApp } = Vue
    
      createApp({
        data() {
          return {
            message: 'Hello Vue!'
          }
        }
      }).mount('#app')
    </script>

[JSFiddle demo](https://jsfiddle.net/yyx990803/nw1xg8Lj/)

### Using the ES Module Build [​](#using-the-es-module-build)

Throughout the rest of the documentation, we will be primarily using [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) syntax. Most modern browsers now support ES modules natively, so we can use Vue from a CDN via native ES modules like this:

html

    <div id="app">{{ message }}</div>
    
    <script type="module">
      import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    
      createApp({
        data() {
          return {
            message: 'Hello Vue!'
          }
        }
      }).mount('#app')
    </script>

Notice that we are using `<script type="module">`, and the imported CDN URL is pointing to the **ES modules build** of Vue instead.

[JSFiddle demo](https://jsfiddle.net/yyx990803/vo23c470/)

### Enabling Import maps [​](#enabling-import-maps)

In the above example, we are importing from the full CDN URL, but in the rest of the documentation you will see code like this:

js

    import { createApp } from 'vue'

We can teach the browser where to locate the `vue` import by using [Import Maps](https://caniuse.com/import-maps):

html

    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
        }
      }
    </script>
    
    <div id="app">{{ message }}</div>
    
    <script type="module">
      import { createApp } from 'vue'
    
      createApp({
        data() {
          return {
            message: 'Hello Vue!'
          }
        }
      }).mount('#app')
    </script>

[JSFiddle demo](https://jsfiddle.net/yyx990803/2ke1ab0z/)

You can also add entries for other dependencies to the import map - but make sure they point to the ES modules version of the library you intend to use.

Import Maps Browser Support

Import maps are supported by default in Chromium-based browsers, so we recommend using Chrome or Edge during the learning process.

If using Firefox, it is supported by default in version 108+ or by setting the `dom.importMaps.enabled` option to true in `about:config` for versions 102+.

If your preferred browser does not support import maps yet, you can polyfill it with [es-module-shims](https://github.com/guybedford/es-module-shims).

Notes on Production Use

The examples so far are using the development build of Vue - if you intend to use Vue from a CDN in production, make sure to check out the [Production Deployment Guide](/guide/best-practices/production-deployment.html#without-build-tools).

### Splitting Up the Modules [​](#splitting-up-the-modules)

As we dive deeper into the guide, we may need to split our code into separate JavaScript files so that they are easier to manage. For example:

html

    <!-- index.html -->
    <div id="app"></div>
    
    <script type="module">
      import { createApp } from 'vue'
      import MyComponent from './my-component.js'
    
      createApp(MyComponent).mount('#app')
    </script>

js

    // my-component.js
    export default {
      data() {
        return { count: 0 }
      },
      template: `<div>count is {{ count }}</div>`
    }

If you directly open the above `index.html` in your browser, you will find that it throws an error because ES modules cannot work over the `file://` protocol. In order for this to work, you need to serve your `index.html` over the `http://` protocol, with a local HTTP server.

To start a local HTTP server, first install [Node.js](https://nodejs.org/en/) and then run `npx serve` from the command line in the same directory where your HTML file is. You can also use any other HTTP server that can serve static files with the correct MIME types.

You may have noticed that the imported component's template is inlined as a JavaScript string. If you are using VSCode, you can install the [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) extension and prefix the strings with a `/*html*/` comment to get syntax highlighting for them.

### Using Composition API without a Build Step [​](#using-composition-api-without-a-build-step)

Many of the examples for Composition API will be using the `<script setup>` syntax. If you intend to use Composition API without a build step, consult the usage of the [`setup()` option](/api/composition-api-setup.html).

Next Steps [​](#next-steps)
---------------------------

If you skipped the [Introduction](/guide/introduction.html), we strongly recommend reading it before moving on to the rest of the documentation.

[

Continue with the Guide

The guide walks you through every aspect of the framework in full detail.

](/guide/essentials/application.html)[

Try the Tutorial

For those who prefer learning things hands-on.

](/tutorial/)[

Check out the Examples

Explore examples of core features and common UI tasks.

](/examples/)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/quick-start.md)
Creating a Vue Application [​](#creating-a-vue-application)
===========================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

The application instance [​](#the-application-instance)
-------------------------------------------------------

Every Vue application starts by creating a new **application instance** with the [`createApp`](/api/application.html#createapp) function:

js

    import { createApp } from 'vue'
    
    const app = createApp({
      /* root component options */
    })

The Root Component [​](#the-root-component)
-------------------------------------------

The object we are passing into `createApp` is in fact a component. Every app requires a "root component" that can contain other components as its children.

If you are using Single-File Components, we typically import the root component from another file:

js

    import { createApp } from 'vue'
    // import the root component App from a single-file component.
    import App from './App.vue'
    
    const app = createApp(App)

While many examples in this guide only need a single component, most real applications are organized into a tree of nested, reusable components. For example, a Todo application's component tree might look like this:

    App (root component)
    ├─ TodoList
    │  └─ TodoItem
    │     ├─ TodoDeleteButton
    │     └─ TodoEditButton
    └─ TodoFooter
       ├─ TodoClearButton
       └─ TodoStatistics

In later sections of the guide, we will discuss how to define and compose multiple components together. Before that, we will focus on what happens inside a single component.

Mounting the App [​](#mounting-the-app)
---------------------------------------

An application instance won't render anything until its `.mount()` method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string:

html

    <div id="app"></div>

js

    app.mount('#app')

The content of the app's root component will be rendered inside the container element. The container element itself is not considered part of the app.

The `.mount()` method should always be called after all app configurations and asset registrations are done. Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance.

### In-DOM Root Component Template [​](#in-dom-root-component-template)

The template for the root component is usually part of the component itself, but it is also possible to provide the template separately by writing it directly inside the mount container:

html

    <div id="app">
      <button @click="count++">{{ count }}</button>
    </div>

js

    import { createApp } from 'vue'
    
    const app = createApp({
      data() {
        return {
          count: 0
        }
      }
    })
    
    app.mount('#app')

Vue will automatically use the container's `innerHTML` as the template if the root component does not already have a `template` option.

In-DOM templates are often used in applications that are [using Vue without a build step](/guide/quick-start.html#using-vue-from-cdn). They can also be used in conjunction with server-side frameworks, where the root template might be generated dynamically by the server.

App Configurations [​](#app-configurations)
-------------------------------------------

The application instance exposes a `.config` object that allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components:

js

    app.config.errorHandler = (err) => {
      /* handle error */
    }

The application instance also provides a few methods for registering app-scoped assets. For example, registering a component:

js

    app.component('TodoDeleteButton', TodoDeleteButton)

This makes the `TodoDeleteButton` available for use anywhere in our app. We will discuss registration for components and other types of assets in later sections of the guide. You can also browse the full list of application instance APIs in its [API reference](/api/application.html).

Make sure to apply all app configurations before mounting the app!

Multiple application instances [​](#multiple-application-instances)
-------------------------------------------------------------------

You are not limited to a single application instance on the same page. The `createApp` API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets:

js

    const app1 = createApp({
      /* ... */
    })
    app1.mount('#container-1')
    
    const app2 = createApp({
      /* ... */
    })
    app2.mount('#container-2')

If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a large page, avoid mounting a single Vue application instance on the entire page. Instead, create multiple small application instances and mount them on the elements they are responsible for.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/application.md)
Template Syntax [​](#template-syntax)
=====================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

Under the hood, Vue compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, Vue can intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.

If you are familiar with Virtual DOM concepts and prefer the raw power of JavaScript, you can also [directly write render functions](/guide/extras/render-function.html) instead of templates, with optional JSX support. However, do note that they do not enjoy the same level of compile-time optimizations as templates.

Text Interpolation [​](#text-interpolation)
-------------------------------------------

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):

template

    <span>Message: {{ msg }}</span>

The mustache tag will be replaced with the value of the `msg` property [from the corresponding component instance](/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state). It will also be updated whenever the `msg` property changes.

Raw HTML [​](#raw-html)
-----------------------

The double mustaches interpret the data as plain text, not HTML. In order to output real HTML, you will need to use the [`v-html` directive](/api/built-in-directives.html#v-html):

template

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

Using text interpolation: <span style="color: red">This should be red.</span>

Using v-html directive: This should be red.

Here we're encountering something new. The `v-html` attribute you're seeing is called a **directive**. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here, we're basically saying "keep this element's inner HTML up-to-date with the `rawHtml` property on the current active instance."

The contents of the `span` will be replaced with the value of the `rawHtml` property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use `v-html` to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.

Security Warning

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS vulnerabilities](https://en.wikipedia.org/wiki/Cross-site_scripting). Only use `v-html` on trusted content and **never** on user-provided content.

Attribute Bindings [​](#attribute-bindings)
-------------------------------------------

Mustaches cannot be used inside HTML attributes. Instead, use a [`v-bind` directive](/api/built-in-directives.html#v-bind):

template

    <div v-bind:id="dynamicId"></div>

The `v-bind` directive instructs Vue to keep the element's `id` attribute in sync with the component's `dynamicId` property. If the bound value is `null` or `undefined`, then the attribute will be removed from the rendered element.

### Shorthand [​](#shorthand)

Because `v-bind` is so commonly used, it has a dedicated shorthand syntax:

template

    <div :id="dynamicId"></div>

Attributes that start with `:` may look a bit different from normal HTML, but it is in fact a valid character for attribute names and all Vue-supported browsers can parse it correctly. In addition, they do not appear in the final rendered markup. The shorthand syntax is optional, but you will likely appreciate it when you learn more about its usage later.

> For the rest of the guide, we will be using the shorthand syntax in code examples, as that's the most common usage for Vue developers.

### Boolean Attributes [​](#boolean-attributes)

[Boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) are attributes that can indicate true / false values by their presence on an element. For example, [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) is one of the most commonly used boolean attributes.

`v-bind` works a bit differently in this case:

template

    <button :disabled="isButtonDisabled">Button</button>

The `disabled` attribute will be included if `isButtonDisabled` has a [truthy value](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). It will also be included if the value is an empty string, maintaining consistency with `<button disabled="">`. For other [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) the attribute will be omitted.

### Dynamically Binding Multiple Attributes [​](#dynamically-binding-multiple-attributes)

If you have a JavaScript object representing multiple attributes that looks like this:

js

    const objectOfAttrs = {
      id: 'container',
      class: 'wrapper'
    }

js

    data() {
      return {
        objectOfAttrs: {
          id: 'container',
          class: 'wrapper'
        }
      }
    }

You can bind them to a single element by using `v-bind` without an argument:

template

    <div v-bind="objectOfAttrs"></div>

Using JavaScript Expressions [​](#using-javascript-expressions)
---------------------------------------------------------------

So far we've only been binding to simple property keys in our templates. But Vue actually supports the full power of JavaScript expressions inside all data bindings:

template

    {{ number + 1 }}
    
    {{ ok ? 'YES' : 'NO' }}
    
    {{ message.split('').reverse().join('') }}
    
    <div :id="`list-${id}`"></div>

These expressions will be evaluated as JavaScript in the data scope of the current component instance.

In Vue templates, JavaScript expressions can be used in the following positions:

*   Inside text interpolations (mustaches)
*   In the attribute value of any Vue directives (special attributes that start with `v-`)

### Expressions Only [​](#expressions-only)

Each binding can only contain **one single expression**. An expression is a piece of code that can be evaluated to a value. A simple check is whether it can be used after `return`.

Therefore, the following will **NOT** work:

template

    <!-- this is a statement, not an expression: -->
    {{ var a = 1 }}
    
    <!-- flow control won't work either, use ternary expressions -->
    {{ if (ok) { return message } }}

### Calling Functions [​](#calling-functions)

It is possible to call a component-exposed method inside a binding expression:

template

    <span :title="toTitleDate(date)">
      {{ formatDate(date) }}
    </span>

TIP

Functions called inside binding expressions will be called every time the component updates, so they should **not** have any side effects, such as changing data or triggering asynchronous operations.

### Restricted Globals Access [​](#restricted-globals-access)

Template expressions are sandboxed and only have access to a [restricted list of globals](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3). The list exposes commonly used built-in globals such as `Math` and `Date`.

Globals not explicitly included in the list, for example user-attached properties on `window`, will not be accessible in template expressions. You can, however, explicitly define additional globals for all Vue expressions by adding them to [`app.config.globalProperties`](/api/application.html#app-config-globalproperties).

Directives [​](#directives)
---------------------------

Directives are special attributes with the `v-` prefix. Vue provides a number of [built-in directives](/api/built-in-directives.html), including `v-html` and `v-bind` which we have introduced above.

Directive attribute values are expected to be single JavaScript expressions (with the exception of `v-for`, `v-on` and `v-slot`, which will be discussed in their respective sections later). A directive's job is to reactively apply updates to the DOM when the value of its expression changes. Take [`v-if`](/api/built-in-directives.html#v-if) as an example:

template

    <p v-if="seen">Now you see me</p>

Here, the `v-if` directive would remove / insert the `<p>` element based on the truthiness of the value of the expression `seen`.

### Arguments [​](#arguments)

Some directives can take an "argument", denoted by a colon after the directive name. For example, the `v-bind` directive is used to reactively update an HTML attribute:

template

    <a v-bind:href="url"> ... </a>
    
    <!-- shorthand -->
    <a :href="url"> ... </a>

Here, `href` is the argument, which tells the `v-bind` directive to bind the element's `href` attribute to the value of the expression `url`. In the shorthand, everything before the argument (i.e., `v-bind:`) is condensed into a single character, `:`.

Another example is the `v-on` directive, which listens to DOM events:

template

    <a v-on:click="doSomething"> ... </a>
    
    <!-- shorthand -->
    <a @click="doSomething"> ... </a>

Here, the argument is the event name to listen to: `click`. `v-on` has a corresponding shorthand, namely the `@` character. We will talk about event handling in more detail too.

### Dynamic Arguments [​](#dynamic-arguments)

It is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets:

template

    <!--
    Note that there are some constraints to the argument expression,
    as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
    -->
    <a v-bind:[attributeName]="url"> ... </a>
    
    <!-- shorthand -->
    <a :[attributeName]="url"> ... </a>

Here, `attributeName` will be dynamically evaluated as a JavaScript expression, and its evaluated value will be used as the final value for the argument. For example, if your component instance has a data property, `attributeName`, whose value is `"href"`, then this binding will be equivalent to `v-bind:href`.

Similarly, you can use dynamic arguments to bind a handler to a dynamic event name:

template

    <a v-on:[eventName]="doSomething"> ... </a>
    
    <!-- shorthand -->
    <a @[eventName]="doSomething">

In this example, when `eventName`'s value is `"focus"`, `v-on:[eventName]` will be equivalent to `v-on:focus`.

#### Dynamic Argument Value Constraints [​](#dynamic-argument-value-constraints)

Dynamic arguments are expected to evaluate to a string, with the exception of `null`. The special value `null` can be used to explicitly remove the binding. Any other non-string value will trigger a warning.

#### Dynamic Argument Syntax Constraints [​](#dynamic-argument-syntax-constraints)

Dynamic argument expressions have some syntax constraints because certain characters, such as spaces and quotes, are invalid inside HTML attribute names. For example, the following is invalid:

template

    <!-- This will trigger a compiler warning. -->
    <a :['foo' + bar]="value"> ... </a>

If you need to pass a complex dynamic argument, it's probably better to use a [computed property](./computed.html), which we will cover shortly.

When using in-DOM templates (templates directly written in an HTML file), you should also avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase:

template

    <a :[someAttr]="value"> ... </a>

The above will be converted to `:[someattr]` in in-DOM templates. If your component has a `someAttr` property instead of `someattr`, your code won't work. Templates inside Single-File Components are **not** subject to this constraint.

### Modifiers [​](#modifiers)

Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event:

template

    <form @submit.prevent="onSubmit">...</form>

You'll see other examples of modifiers later, [for `v-on`](./event-handling.html#event-modifiers) and [for `v-model`](./forms.html#modifiers), when we explore those features.

And finally, here's the full directive syntax visualized:

![directive syntax graph](/assets/directive.69c37117.png)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/template-syntax.md)
Reactivity Fundamentals [​](#reactivity-fundamentals)
=====================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

API Preference

This page and many other chapters later in the guide contain different content for the Options API and the Composition API. Your current preference is Options APIComposition API. You can toggle between the API styles using the "API Preference" switches at the top of the left sidebar.

Declaring Reactive State [​](#declaring-reactive-state)
-------------------------------------------------------

With the Options API, we use the `data` option to declare reactive state of a component. The option value should be a function that returns an object. Vue will call the function when creating a new component instance, and wrap the returned object in its reactivity system. Any top-level properties of this object are proxied on the component instance (`this` in methods and lifecycle hooks):

js

    export default {
      data() {
        return {
          count: 1
        }
      },
    
      // `mounted` is a lifecycle hook which we will explain later
      mounted() {
        // `this` refers to the component instance.
        console.log(this.count) // => 1
    
        // data can be mutated as well
        this.count = 2
      }
    }

[Try it in the Playground](https://play.vuejs.org/#eNpFUNFqhDAQ/JXBpzsoHu2j3B2U/oYPpnGtoetGkrW2iP/eRFsPApthd2Zndilex7H8mqioimu0wY16r4W+Rx8ULXVmYsVSC9AaNafz/gcC6RTkHwHWT6IVnne85rI+1ZLr5YJmyG1qG7gIA3Yd2R/LhN77T8y9sz1mwuyYkXazcQI2SiHz/7iP3VlQexeb5KKjEKEe2lPyMIxeSBROohqxVO4E6yV6ppL9xykTy83tOQvd7tnzoZtDwhrBO2GYNFloYWLyxrzPPOi44WWLWUt618txvASUhhRCKSHgbZt2scKy7HfCujGOqWL9BVfOgyI=)

These instance properties are only added when the instance is first created, so you need to ensure they are all present in the object returned by the `data` function. Where necessary, use `null`, `undefined` or some other placeholder value for properties where the desired value isn't yet available.

It is possible to add a new property directly to `this` without including it in `data`. However, properties added this way will not be able to trigger reactive updates.

Vue uses a `$` prefix when exposing its own built-in APIs via the component instance. It also reserves the prefix `_` for internal properties. You should avoid using names for top-level `data` properties that start with either of these characters.

### Reactive Proxy vs. Original [​](#reactive-proxy-vs-original)

In Vue 3, data is made reactive by leveraging [JavaScript Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Users coming from Vue 2 should be aware of the following edge case:

js

    export default {
      data() {
        return {
          someObject: {}
        }
      },
      mounted() {
        const newObject = {}
        this.someObject = newObject
    
        console.log(newObject === this.someObject) // false
      }
    }

When you access `this.someObject` after assigning it, the value is a reactive proxy of the original `newObject`. **Unlike in Vue 2, the original `newObject` is left intact and will not be made reactive: make sure to always access reactive state as a property of `this`.**

We can create a reactive object or array with the [`reactive()`](/api/reactivity-core.html#reactive) function:

js

    import { reactive } from 'vue'
    
    const state = reactive({ count: 0 })

Reactive objects are [JavaScript Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and behave just like normal objects. The difference is that Vue is able to track the property access and mutations of a reactive object. If you are curious about the details, we explain how Vue's reactivity system works in [Reactivity in Depth](/guide/extras/reactivity-in-depth.html) - but we recommend reading it after you have finished the main guide.

See also: [Typing Reactive](/guide/typescript/composition-api.html#typing-reactive)

To use reactive state in a component's template, declare and return them from a component's `setup()` function:

js

    import { reactive } from 'vue'
    
    export default {
      // `setup` is a special hook dedicated for the composition API.
      setup() {
        const state = reactive({ count: 0 })
    
        // expose the state to the template
        return {
          state
        }
      }
    }

template

    <div>{{ state.count }}</div>

Similarly, we can declare functions that mutate reactive state in the same scope and expose them as methods alongside the state:

js

    import { reactive } from 'vue'
    
    export default {
      setup() {
        const state = reactive({ count: 0 })
    
        function increment() {
          state.count++
        }
    
        // don't forget to expose the function as well.
        return {
          state,
          increment
        }
      }
    }

Exposed methods are typically used as event listeners:

template

    <button @click="increment">
      {{ state.count }}
    </button>

### `<script setup>` [​](#script-setup)

Manually exposing state and methods via `setup()` can be verbose. Luckily, it is only necessary when not using a build step. When using Single-File Components (SFCs), we can greatly simplify the usage with `<script setup>`:

vue

    <script setup>
    import { reactive } from 'vue'
    
    const state = reactive({ count: 0 })
    
    function increment() {
      state.count++
    }
    </script>
    
    <template>
      <button @click="increment">
        {{ state.count }}
      </button>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNpNjkEKgzAURK8yZFNF0K5FS3uPbGyIEKo/If64Cbl7fxWky2HePCarVwjtnqzq1bCZ6AJjs5zCQ5Nbg4+MjGgnw263KJijX3ET/qZJk/G0Cc8TW4wXVmUYn4h73FHqHzcnksYTHJloV0tc1ciacG7bA28aTUXT0J035IAEtmtYBJEEDO/ELJanWZz5jFpdOq0OAMj5X4kiQtl151CYobuMqnwBBoFaVA==)

Top-level imports and variables declared in `<script setup>` are automatically usable in the template of the same component.

> For the rest of the guide, we will be primarily using SFC + `<script setup>` syntax for the Composition API code examples, as that is the most common usage for Vue developers.

Declaring Methods [​](#declaring-methods)
-----------------------------------------

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/methods-in-vue-3?friend=vuejs "Free Vue.js Methods Lesson")

To add methods to a component instance we use the `methods` option. This should be an object containing the desired methods:

js

    export default {
      data() {
        return {
          count: 0
        }
      },
      methods: {
        increment() {
          this.count++
        }
      },
      mounted() {
        // methods can be called in lifecycle hooks, or other methods!
        this.increment()
      }
    }

Vue automatically binds the `this` value for `methods` so that it always refers to the component instance. This ensures that a method retains the correct `this` value if it's used as an event listener or callback. You should avoid using arrow functions when defining `methods`, as that prevents Vue from binding the appropriate `this` value:

js

    export default {
      methods: {
        increment: () => {
          // BAD: no `this` access here!
        }
      }
    }

Just like all other properties of the component instance, the `methods` are accessible from within the component's template. Inside a template they are most commonly used as event listeners:

template

    <button @click="increment">{{ count }}</button>

[Try it in the Playground](https://play.vuejs.org/#eNplj9EKwyAMRX8l+LSx0e65uLL9hy+dZlTWqtg4BuK/z1baDgZicsPJgUR2d656B2QN45P02lErDH6c9QQKn10YCKIwAKqj7nAsPYBHCt6sCUDaYKiBS8lpLuk8/yNSb9XUrKg20uOIhnYXAPV6qhbF6fRvmOeodn6hfzwLKkx+vN5OyIFwdENHmBMAfwQia+AmBy1fV8E2gWBtjOUASInXBcxLvN4MLH0BCe1i4Q==)

In the example above, the method `increment` will be called when the `<button>` is clicked.

### DOM Update Timing [​](#dom-update-timing)

When you mutate reactive state, the DOM is updated automatically. However, it should be noted that the DOM updates are not applied synchronously. Instead, Vue buffers them until the "next tick" in the update cycle to ensure that each component updates only once no matter how many state changes you have made.

To wait for the DOM update to complete after a state change, you can use the [nextTick()](/api/general.html#nexttick) global API:

js

    import { nextTick } from 'vue'
    
    function increment() {
      state.count++
      nextTick(() => {
        // access updated DOM
      })
    }

js

    import { nextTick } from 'vue'
    
    export default {
      methods: {
        increment() {
          this.count++
          nextTick(() => {
            // access updated DOM
          })
        }
      }
    }

### Deep Reactivity [​](#deep-reactivity)

In Vue, state is deeply reactive by default. This means you can expect changes to be detected even when you mutate nested objects or arrays:

js

    export default {
      data() {
        return {
          obj: {
            nested: { count: 0 },
            arr: ['foo', 'bar']
          }
        }
      },
      methods: {
        mutateDeeply() {
          // these will work as expected.
          this.obj.nested.count++
          this.obj.arr.push('baz')
        }
      }
    }

js

    import { reactive } from 'vue'
    
    const obj = reactive({
      nested: { count: 0 },
      arr: ['foo', 'bar']
    })
    
    function mutateDeeply() {
      // these will work as expected.
      obj.nested.count++
      obj.arr.push('baz')
    }

It is also possible to explicitly create [shallow reactive objects](/api/reactivity-advanced.html#shallowreactive) where the reactivity is only tracked at the root-level, but these are typically only needed in advanced use cases.

### Reactive Proxy vs. Original [​](#reactive-proxy-vs-original-1)

It is important to note that the returned value from `reactive()` is a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) of the original object, which is not equal to the original object:

js

    const raw = {}
    const proxy = reactive(raw)
    
    // proxy is NOT equal to the original.
    console.log(proxy === raw) // false

Only the proxy is reactive - mutating the original object will not trigger updates. Therefore, the best practice when working with Vue's reactivity system is to **exclusively use the proxied versions of your state**.

To ensure consistent access to the proxy, calling `reactive()` on the same object always returns the same proxy, and calling `reactive()` on an existing proxy also returns that same proxy:

js

    // calling reactive() on the same object returns the same proxy
    console.log(reactive(raw) === proxy) // true
    
    // calling reactive() on a proxy returns itself
    console.log(reactive(proxy) === proxy) // true

This rule applies to nested objects as well. Due to deep reactivity, nested objects inside a reactive object are also proxies:

js

    const proxy = reactive({})
    
    const raw = {}
    proxy.nested = raw
    
    console.log(proxy.nested === raw) // false

### Limitations of `reactive()` [​](#limitations-of-reactive)

The `reactive()` API has two limitations:

1.  It only works for object types (objects, arrays, and [collection types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections) such as `Map` and `Set`). It cannot hold [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) such as `string`, `number` or `boolean`.
    
2.  Since Vue's reactivity tracking works over property access, we must always keep the same reference to the reactive object. This means we can't easily "replace" a reactive object because the reactivity connection to the first reference is lost:
    
    js
    
        let state = reactive({ count: 0 })
        
        // the above reference ({ count: 0 }) is no longer being tracked (reactivity connection is lost!)
        state = reactive({ count: 1 })
    
    It also means that when we assign or destructure a reactive object's property into local variables, or when we pass that property into a function, we will lose the reactivity connection:
    
    js
    
        const state = reactive({ count: 0 })
        
        // n is a local variable that is disconnected
        // from state.count.
        let n = state.count
        // does not affect original state
        n++
        
        // count is also disconnected from state.count.
        let { count } = state
        // does not affect original state
        count++
        
        // the function receives a plain number and
        // won't be able to track changes to state.count
        callSomeFunction(state.count)
    

Reactive Variables with `ref()` [​](#reactive-variables-with-ref)
-----------------------------------------------------------------

To address the limitations of `reactive()`, Vue also provides a [`ref()`](/api/reactivity-core.html#ref) function which allows us to create reactive **"refs"** that can hold any value type:

js

    import { ref } from 'vue'
    
    const count = ref(0)

`ref()` takes the argument and returns it wrapped within a ref object with a `.value` property:

js

    const count = ref(0)
    
    console.log(count) // { value: 0 }
    console.log(count.value) // 0
    
    count.value++
    console.log(count.value) // 1

See also: [Typing Refs](/guide/typescript/composition-api.html#typing-ref)

Similar to properties on a reactive object, the `.value` property of a ref is reactive. In addition, when holding object types, ref automatically converts its `.value` with `reactive()`.

A ref containing an object value can reactively replace the entire object:

js

    const objectRef = ref({ count: 0 })
    
    // this works reactively
    objectRef.value = { count: 1 }

Refs can also be passed into functions or destructured from plain objects without losing reactivity:

js

    const obj = {
      foo: ref(1),
      bar: ref(2)
    }
    
    // the function receives a ref
    // it needs to access the value via .value but it
    // will retain the reactivity connection
    callSomeFunction(obj.foo)
    
    // still reactive
    const { foo, bar } = obj

In other words, `ref()` allows us to create a "reference" to any value and pass it around without losing reactivity. This capability is quite important as it is frequently used when extracting logic into [Composable Functions](/guide/reusability/composables.html).

### Ref Unwrapping in Templates [​](#ref-unwrapping-in-templates)

When refs are accessed as top-level properties in the template, they are automatically "unwrapped" so there is no need to use `.value`. Here's the previous counter example, using `ref()` instead:

vue

    <script setup>
    import { ref } from 'vue'
    
    const count = ref(0)
    
    function increment() {
      count.value++
    }
    </script>
    
    <template>
      <button @click="increment">
        {{ count }} <!-- no .value needed -->
      </button>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNo9jUEKgzAQRa8yZKMiaNclSnuP2dgwQqiZhDhxE3L3Riwu//DmvazeIQxHIvVUejfRBoGdJIUZ2brgo0CGSCsUWKN30FS0QUY2nncB4xMLTCfRPrrzviY2Yj2DZRPJEUvbQUaGix2OZUvU98gFWY9XsbbqEHJhW4TqAtCfJFItL7NZ851Q3TpUc87/cCl6vMD6pMfboMoPvd1Nzg==)

Note that the unwrapping only applies if the ref is a top-level property on the template render context. As an example, `object` is a top-level property, but `object.foo` is not.

So, given the following object:

js

    const object = { foo: ref(1) }

The following expression will **NOT** work as expected:

template

    {{ object.foo + 1 }}

The rendered result will be `[object Object]1` because `object.foo` is a ref object. We can fix that by making `foo` a top-level property:

js

    const { foo } = object

template

    {{ foo + 1 }}

Now the render result will be `2`.

One thing to note is that a ref will also be unwrapped if it is the final evaluated value of a text interpolation (i.e. a `{{ }}` tag), so the following will render `1`:

template

    {{ object.foo }}

This is just a convenience feature of text interpolation and is equivalent to `{{ object.foo.value }}`.

### Ref Unwrapping in Reactive Objects [​](#ref-unwrapping-in-reactive-objects)

When a `ref` is accessed or mutated as a property of a reactive object, it is also automatically unwrapped so it behaves like a normal property:

js

    const count = ref(0)
    const state = reactive({
      count
    })
    
    console.log(state.count) // 0
    
    state.count = 1
    console.log(count.value) // 1

If a new ref is assigned to a property linked to an existing ref, it will replace the old ref:

js

    const otherCount = ref(2)
    
    state.count = otherCount
    console.log(state.count) // 2
    // original ref is now disconnected from state.count
    console.log(count.value) // 1

Ref unwrapping only happens when nested inside a deep reactive object. It does not apply when it is accessed as a property of a [shallow reactive object](/api/reactivity-advanced.html#shallowreactive).

### Ref Unwrapping in Arrays and Collections [​](#ref-unwrapping-in-arrays-and-collections)

Unlike reactive objects, there is no unwrapping performed when the ref is accessed as an element of a reactive array or a native collection type like `Map`:

js

    const books = reactive([ref('Vue 3 Guide')])
    // need .value here
    console.log(books[0].value)
    
    const map = reactive(new Map([['count', ref(0)]]))
    // need .value here
    console.log(map.get('count').value)

### Stateful Methods [​](#stateful-methods)

In some cases, we may need to dynamically create a method function, for example creating a debounced event handler:

js

    import { debounce } from 'lodash-es'
    
    export default {
      methods: {
        // Debouncing with Lodash
        click: debounce(function () {
          // ... respond to click ...
        }, 500)
      }
    }

However, this approach is problematic for components that are reused because a debounced function is **stateful**: it maintains some internal state on the elapsed time. If multiple component instances share the same debounced function, they will interfere with one another.

To keep each component instance's debounced function independent of the others, we can create the debounced version in the `created` lifecycle hook:

js

    export default {
      created() {
        // each instance now has its own copy of debounced handler
        this.debouncedClick = _.debounce(this.click, 500)
      },
      unmounted() {
        // also a good idea to cancel the timer
        // when the component is removed
        this.debouncedClick.cancel()
      },
      methods: {
        click() {
          // ... respond to click ...
        }
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/reactivity-fundamentals.md)
Computed Properties [​](#computed-properties)
=============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/computed-properties-in-vue-3?friend=vuejs "Free Vue.js Computed Properties Lesson")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-computed-properties-in-vue-with-the-composition-api?friend=vuejs "Free Vue.js Computed Properties Lesson")

Basic Example [​](#basic-example)
---------------------------------

In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example, if we have an object with a nested array:

js

    export default {
      data() {
        return {
          author: {
            name: 'John Doe',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          }
        }
      }
    }

js

    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })

And we want to display different messages depending on if `author` already has some books or not:

template

    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that it performs a calculation depending on `author.books`. More importantly, we probably don't want to repeat ourselves if we need to include this calculation in the template more than once.

That's why for complex logic that includes reactive data, it is recommended to use a **computed property**. Here's the same example, refactored:

js

    export default {
      data() {
        return {
          author: {
            name: 'John Doe',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          }
        }
      },
      computed: {
        // a computed getter
        publishedBooksMessage() {
          // `this` points to the component instance
          return this.author.books.length > 0 ? 'Yes' : 'No'
        }
      }
    }

template

    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

[Try it in the Playground](https://play.vuejs.org/#eNqFkN1KxDAQhV/l0JsqaFfUq1IquwiKsF6JINaLbDNui20S8rO4lL676c82eCFCIDOZMzkzXxetlUoOjqI0ykypa2XzQtC3ktqC0ydzjUVXCIAzy87OpxjQZJ0WpwxgzlZSp+EBEKylFPGTrATuJcUXobST8sukeA8vQPzqCNe4xJofmCiJ48HV/FfbLLrxog0zdfmn4tYrXirC9mgs6WMcBB+nsJ+C8erHH0rZKmeJL0sot2tqUxHfDONuyRi2p4BggWCr2iQTgGTcLGlI7G2FHFe4Q/xGJoYn8SznQSbTQviTrRboPrHUqoZZ8hmQqfyRmTDFTC1bqalsFBN5183o/3NG33uvoWUwXYyi/gdTEpwK)

Here we have declared a computed property `publishedBooksMessage`.

Try to change the value of the `books` array in the application `data` and you will see how `publishedBooksMessage` is changing accordingly.

You can data-bind to computed properties in templates just like a normal property. Vue is aware that `this.publishedBooksMessage` depends on `this.author.books`, so it will update any bindings that depend on `this.publishedBooksMessage` when `this.author.books` changes.

See also: [Typing Computed Properties](/guide/typescript/options-api.html#typing-computed-properties)

vue

    <script setup>
    import { reactive, computed } from 'vue'
    
    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })
    
    // a computed ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })
    </script>
    
    <template>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNp1kE9Lw0AQxb/KI5dtoTainkoaaREUoZ5EEONhm0ybYLO77J9CCfnuzta0vdjbzr6Zeb95XbIwZroPlMySzJW2MR6OfDB5oZrWaOvRwZIsfbOnCUrdmuCpQo+N1S0ET4pCFarUynnI4GttMT9PjLpCAUq2NIN41bXCkyYxiZ9rrX/cDF/xDYiPQLjDDRbVXqqSHZ5DUw2tg3zP8lK6pvxHe2DtvSasDs6TPTAT8F2ofhzh0hTygm5pc+I1Yb1rXE3VMsKsyDm5JcY/9Y5GY8xzHI+wnIpVw4nTI/10R2rra+S4xSPEJzkBvvNNs310ztK/RDlLLjy1Zic9cQVkJn+R7gIwxJGlMXiWnZEq77orhH3Pq2NH9DjvTfpfSBSbmA==)

Here we have declared a computed property `publishedBooksMessage`. The `computed()` function expects to be passed a getter function, and the returned value is a **computed ref**. Similar to normal refs, you can access the computed result as `publishedBooksMessage.value`. Computed refs are also auto-unwrapped in templates so you can reference them without `.value` in template expressions.

A computed property automatically tracks its reactive dependencies. Vue is aware that the computation of `publishedBooksMessage` depends on `author.books`, so it will update any bindings that depend on `publishedBooksMessage` when `author.books` changes.

See also: [Typing Computed](/guide/typescript/composition-api.html#typing-computed)

Computed Caching vs. Methods [​](#computed-caching-vs-methods)
--------------------------------------------------------------

You may have noticed we can achieve the same result by invoking a method in the expression:

template

    <p>{{ calculateBooksMessage() }}</p>

js

    // in component
    methods: {
      calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      }
    }

js

    // in component
    function calculateBooksMessage() {
      return author.books.length > 0 ? 'Yes' : 'No'
    }

Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that **computed properties are cached based on their reactive dependencies.** A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as `author.books` has not changed, multiple access to `publishedBooksMessage` will immediately return the previously computed result without having to run the getter function again.

This also means the following computed property will never update, because `Date.now()` is not a reactive dependency:

js

    computed: {
      now() {
        return Date.now()
      }
    }

js

    const now = computed(() => Date.now())

In comparison, a method invocation will **always** run the function whenever a re-render happens.

Why do we need caching? Imagine we have an expensive computed property `list`, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on `list`. Without caching, we would be executing `list`’s getter many more times than necessary! In cases where you do not want caching, use a method call instead.

Writable Computed [​](#writable-computed)
-----------------------------------------

Computed properties are by default getter-only. If you attempt to assign a new value to a computed property, you will receive a runtime warning. In the rare cases where you need a "writable" computed property, you can create one by providing both a getter and a setter:

js

    export default {
      data() {
        return {
          firstName: 'John',
          lastName: 'Doe'
        }
      },
      computed: {
        fullName: {
          // getter
          get() {
            return this.firstName + ' ' + this.lastName
          },
          // setter
          set(newValue) {
            // Note: we are using destructuring assignment syntax here.
            [this.firstName, this.lastName] = newValue.split(' ')
          }
        }
      }
    }

Now when you run `this.fullName = 'John Doe'`, the setter will be invoked and `this.firstName` and `this.lastName` will be updated accordingly.

vue

    <script setup>
    import { ref, computed } from 'vue'
    
    const firstName = ref('John')
    const lastName = ref('Doe')
    
    const fullName = computed({
      // getter
      get() {
        return firstName.value + ' ' + lastName.value
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
    </script>

Now when you run `fullName.value = 'John Doe'`, the setter will be invoked and `firstName` and `lastName` will be updated accordingly.

Best Practices [​](#best-practices)
-----------------------------------

### Getters should be side-effect free [​](#getters-should-be-side-effect-free)

It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, **don't make async requests or mutate the DOM inside a computed getter!** Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Later in the guide we will discuss how we can perform side effects in reaction to state changes with [watchers](./watchers.html).

### Avoid mutating computed value [​](#avoid-mutating-computed-value)

The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot, so a computed return value should be treated as read-only and never be mutated - instead, update the source state it depends on to trigger new computations.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/computed.md)
Class and Style Bindings [​](#class-and-style-bindings)
=======================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

A common need for data binding is manipulating an element's class list and inline styles. Since `class` and `style` are both attributes, we can use `v-bind` to assign them a string value dynamically, much like with other attributes. However, trying to generate those values using string concatenation can be annoying and error-prone. For this reason, Vue provides special enhancements when `v-bind` is used with `class` and `style`. In addition to strings, the expressions can also evaluate to objects or arrays.

Binding HTML Classes [​](#binding-html-classes)
-----------------------------------------------

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/dynamic-css-classes-with-vue-3?friend=vuejs "Free Vue.js Dynamic CSS Classes Lesson")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-dynamic-css-classes-with-vue?friend=vuejs "Free Vue.js Dynamic CSS Classes Lesson")

### Binding to Objects [​](#binding-to-objects)

We can pass an object to `:class` (short for `v-bind:class`) to dynamically toggle classes:

template

    <div :class="{ active: isActive }"></div>

The above syntax means the presence of the `active` class will be determined by the [truthiness](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) of the data property `isActive`.

You can have multiple classes toggled by having more fields in the object. In addition, the `:class` directive can also co-exist with the plain `class` attribute. So given the following state:

js

    const isActive = ref(true)
    const hasError = ref(false)

js

    data() {
      return {
        isActive: true,
        hasError: false
      }
    }

And the following template:

template

    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>

It will render:

template

    <div class="static active"></div>

When `isActive` or `hasError` changes, the class list will be updated accordingly. For example, if `hasError` becomes `true`, the class list will become `"static active text-danger"`.

The bound object doesn't have to be inline:

js

    const classObject = reactive({
      active: true,
      'text-danger': false
    })

js

    data() {
      return {
        classObject: {
          active: true,
          'text-danger': false
        }
      }
    }

template

    <div :class="classObject"></div>

This will render the same result. We can also bind to a [computed property](./computed.html) that returns an object. This is a common and powerful pattern:

js

    const isActive = ref(true)
    const error = ref(null)
    
    const classObject = computed(() => ({
      active: isActive.value && !error.value,
      'text-danger': error.value && error.value.type === 'fatal'
    }))

js

    data() {
      return {
        isActive: true,
        error: null
      }
    },
    computed: {
      classObject() {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }

template

    <div :class="classObject"></div>

### Binding to Arrays [​](#binding-to-arrays)

We can bind `:class` to an array to apply a list of classes:

js

    const activeClass = ref('active')
    const errorClass = ref('text-danger')

js

    data() {
      return {
        activeClass: 'active',
        errorClass: 'text-danger'
      }
    }

template

    <div :class="[activeClass, errorClass]"></div>

Which will render:

template

    <div class="active text-danger"></div>

If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression:

template

    <div :class="[isActive ? activeClass : '', errorClass]"></div>

This will always apply `errorClass`, but `activeClass` will only be applied when `isActive` is truthy.

However, this can be a bit verbose if you have multiple conditional classes. That's why it's also possible to use the object syntax inside array syntax:

template

    <div :class="[{ active: isActive }, errorClass]"></div>

### With Components [​](#with-components)

> This section assumes knowledge of [Components](/guide/essentials/component-basics.html). Feel free to skip it and come back later.

When you use the `class` attribute on a component with a single root element, those classes will be added to the component's root element, and merged with any existing class already on it.

For example, if we have a component named `MyComponent` with the following template:

template

    <!-- child component template -->
    <p class="foo bar">Hi!</p>

Then add some classes when using it:

template

    <!-- when using the component -->
    <MyComponent class="baz boo" />

The rendered HTML will be:

template

    <p class="foo bar baz boo">Hi!</p>

The same is true for class bindings:

template

    <MyComponent :class="{ active: isActive }" />

When `isActive` is truthy, the rendered HTML will be:

template

    <p class="foo bar active">Hi!</p>

If your component has multiple root elements, you would need to define which element will receive this class. You can do this using the `$attrs` component property:

template

    <!-- MyComponent template using $attrs -->
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>

template

    <MyComponent class="baz" />

Will render:

html

    <p class="baz">Hi!</p>
    <span>This is a child component</span>

You can learn more about component attribute inheritance in [Fallthrough Attributes](/guide/components/attrs.html) section.

Binding Inline Styles [​](#binding-inline-styles)
-------------------------------------------------

### Binding to Objects [​](#binding-to-objects-1)

`:style` supports binding to JavaScript object values - it corresponds to an [HTML element's `style` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style):

js

    const activeColor = ref('red')
    const fontSize = ref(30)

js

    data() {
      return {
        activeColor: 'red',
        fontSize: 30
      }
    }

template

    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

Although camelCase keys are recommended, `:style` also supports kebab-cased CSS property keys (corresponds to how they are used in actual CSS) - for example:

template

    <div :style="{ 'font-size': fontSize + 'px' }"></div>

It is often a good idea to bind to a style object directly so that the template is cleaner:

js

    const styleObject = reactive({
      color: 'red',
      fontSize: '13px'
    })

js

    data() {
      return {
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    }

template

    <div :style="styleObject"></div>

Again, object style binding is often used in conjunction with computed properties that return objects.

### Binding to Arrays [​](#binding-to-arrays-1)

We can bind `:style` to an array of multiple style objects. These objects will be merged and applied to the same element:

template

    <div :style="[baseStyles, overridingStyles]"></div>

### Auto-prefixing [​](#auto-prefixing)

When you use a CSS property that requires a [vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) in `:style`, Vue will automatically add the appropriate prefix. Vue does this by checking at runtime to see which style properties are supported in the current browser. If the browser doesn't support a particular property then various prefixed variants will be tested to try to find one that is supported.

### Multiple Values [​](#multiple-values)

You can provide an array of multiple (prefixed) values to a style property, for example:

template

    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>

This will only render the last value in the array which the browser supports. In this example, it will render `display: flex` for browsers that support the unprefixed version of flexbox.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/class-and-style.md)
Conditional Rendering [​](#conditional-rendering)
=================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/conditional-rendering-in-vue-3?friend=vuejs "Free Vue.js Conditional Rendering Lesson")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-conditionals-in-vue?friend=vuejs "Free Vue.js Conditional Rendering Lesson")

`v-if` [​](#v-if)
-----------------

The directive `v-if` is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.

template

    <h1 v-if="awesome">Vue is awesome!</h1>

`v-else` [​](#v-else)
---------------------

You can use the `v-else` directive to indicate an "else block" for `v-if`:

template

    <button @click="awesome = !awesome">Toggle</button>
    
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

Toggle

Vue is awesome!
===============

[Try it in the Playground](https://play.vuejs.org/#eNpFjkEOgjAQRa8ydIMulLA1hegJ3LnqBskAjdA27RQXhHu4M/GEHsEiKLv5mfdf/sBOxux7j+zAuCutNAQOyZtcKNkZbQkGsFjBCJXVHcQBjYUSqtTKERR3dLpDyCZmQ9bjViiezKKgCIGwM21BGBIAv3oireBYtrK8ZYKtgmg5BctJ13WLPJnhr0YQb1Lod7JaS4G8eATpfjMinjTphC8wtg7zcwNKw/v5eC1fnvwnsfEDwaha7w==)

[Try it in the Playground](https://play.vuejs.org/#eNpFjj0OwjAMha9iMsEAFWuVVnACNqYsoXV/RJpEqVOQqt6DDYkTcgRSWoplWX7y56fXs6O1u84jixlvM1dbSoXGuzWOIMdCekXQCw2QS5LrzbQLckje6VEJglDyhq1pMAZyHidkGG9hhObRYh0EYWOVJAwKgF88kdFwyFSdXRPBZidIYDWvgqVkylIhjyb4ayOIV3votnXxfwrk2SPU7S/PikfVfsRnGFWL6akCbeD9fLzmK4+WSGz4AA5dYQY=)

A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

`v-else-if` [​](#v-else-if)
---------------------------

The `v-else-if`, as the name suggests, serves as an "else if block" for `v-if`. It can also be chained multiple times:

template

    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

Similar to `v-else`, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

`v-if` on `<template>` [​](#v-if-on-template)
---------------------------------------------

Because `v-if` is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use `v-if` on a `<template>` element, which serves as an invisible wrapper. The final rendered result will not include the `<template>` element.

template

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

`v-else` and `v-else-if` can also be used on `<template>`.

`v-show` [​](#v-show)
---------------------

Another option for conditionally displaying an element is the `v-show` directive. The usage is largely the same:

template

    <h1 v-show="ok">Hello!</h1>

The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the `display` CSS property of the element.

`v-show` doesn't support the `<template>` element, nor does it work with `v-else`.

`v-if` vs. `v-show` [​](#v-if-vs-v-show)
----------------------------------------

`v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also **lazy**: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.

In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render costs. So prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.

`v-if` with `v-for` [​](#v-if-with-v-for)
-----------------------------------------

Note

It's **not** recommended to use `v-if` and `v-for` on the same element due to implicit precedence. Refer to [style guide](/style-guide/rules-essential.html#avoid-v-if-with-v-for) for details.

When `v-if` and `v-for` are both used on the same element, `v-if` will be evaluated first. See the [list rendering guide](./list.html#v-for-with-v-if) for details.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/conditional.md)
List Rendering [​](#list-rendering)
===================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/list-rendering-in-vue-3?friend=vuejs "Free Vue.js List Rendering Lesson")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-list-rendering-in-vue?friend=vuejs "Free Vue.js List Rendering Lesson")

`v-for` [​](#v-for)
-------------------

We can use the `v-for` directive to render a list of items based on an array. The `v-for` directive requires a special syntax in the form of `item in items`, where `items` is the source data array and `item` is an **alias** for the array element being iterated on:

js

    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

js

    data() {
      return {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }

template

    <li v-for="item in items">
      {{ item.message }}
    </li>

Inside the `v-for` scope, template expressions have access to all parent scope properties. In addition, `v-for` also supports an optional second alias for the index of the current item:

js

    const parentMessage = ref('Parent')
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

js

    data() {
      return {
        parentMessage: 'Parent',
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }

template

    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

*   Parent - 0 - Foo
*   Parent - 1 - Bar

[Try it in the Playground](https://play.vuejs.org/#eNpdTsuqwjAQ/ZVDNlFQu5d64bpwJ7g3LopOJdAmIRlFCPl3p60PcDWcM+eV1X8Iq/uN1FrV6RxtYCTiW/gzzvbBR0ZGpBYFbfQ9tEi1ccadvUuM0ERyvKeUmithMyhn+jCSev4WWaY+vZ7HjH5Sr6F33muUhTR8uW0ThTuJua6mPbJEgGSErmEaENedxX3Z+rgxajbEL2DdhR5zOVOdUSIEDOf8M7IULCHsaPgiMa1eK4QcS6rOSkhdfapVeQLQEWnH)

[Try it in the Playground](https://play.vuejs.org/#eNpVTssKwjAQ/JUllyr0cS9V0IM3wbvxEOxWAm0a0m0phPy7m1aqhpDsDLMz48XJ2nwaUZSiGp5OWzpKg7PtHUGNjRpbAi8NQK1I7fbrLMkhjc5EJAn4WOXQ0BWHQb2whOS24CSN6qjXhN1Qwt1Dt2kufZ9ASOGXOyvH3GMNCdGdH75VsZVjwGa2VYQRUdVqmLKmdwcpdjEnBW1qnPf8wZIrBQujoff/RSEEyIDZZeGLeCn/dGJyCSlazSZVsUWL8AYme21i)

The variable scoping of `v-for` is similar to the following JavaScript:

js

    const parentMessage = 'Parent'
    const items = [
      /* ... */
    ]
    
    items.forEach((item, index) => {
      // has access to outer scope `parentMessage`
      // but `item` and `index` are only available in here
      console.log(parentMessage, item.message, index)
    })

Notice how the `v-for` value matches the function signature of the `forEach` callback. In fact, you can use destructuring on the `v-for` item alias similar to destructuring function arguments:

template

    <li v-for="{ message } in items">
      {{ message }}
    </li>
    
    <!-- with index alias -->
    <li v-for="({ message }, index) in items">
      {{ message }} {{ index }}
    </li>

For nested `v-for`, scoping also works similar to nested functions. Each `v-for` scope has access to parent scopes:

template

    <li v-for="item in items">
      <span v-for="childItem in item.children">
        {{ item.message }} {{ childItem }}
      </span>
    </li>

You can also use `of` as the delimiter instead of `in`, so that it is closer to JavaScript's syntax for iterators:

template

    <div v-for="item of items"></div>

`v-for` with an Object [​](#v-for-with-an-object)
-------------------------------------------------

You can also use `v-for` to iterate through the properties of an object. The iteration order will be based on the result of calling `Object.keys()` on the object:

js

    const myObject = reactive({
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    })

js

    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    }

template

    <ul>
      <li v-for="value in myObject">
        {{ value }}
      </li>
    </ul>

You can also provide a second alias for the property's name (a.k.a. key):

template

    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>

And another for the index:

template

    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>

[Try it in the Playground](https://play.vuejs.org/#eNo9jjFvgzAQhf/KE0sSCQKpqg7IqRSpQ9WlWycvBC6KW2NbcKaNEP+9B7Tx4nt33917Y3IKYT9ESspE9XVnAqMnjuFZO9MG3zFGdFTVbAbChEvnW2yE32inXe1dz2hv7+dPqhnHO7kdtQPYsKUSm1f/DfZoPKzpuYdx+JAL6cxUka++E+itcoQX/9cO8SzslZoTy+yhODxlxWN2KMR22mmn8jWrpBTB1AZbMc2KVbTyQ56yBkN28d1RJ9uhspFSfNEtFf+GfnZzjP/oOll2NQPjuM4xTftZyIaU5VwuN0SsqMqtWZxUvliq/J4jmX4BTCp08A==)

[Try it in the Playground](https://play.vuejs.org/#eNo9T8FqwzAM/RWRS1pImnSMHYI3KOwwdtltJ1/cRqXe3Ng4ctYS8u+TbVJjLD3rPelpLg7O7aaARVeI8eS1ozc54M1ZT9DjWQVDMMsBoFekNtucS/JIwQ8RSQI+1/vX8QdP1K2E+EmaDHZQftg/IAu9BaNHGkEP8B2wrFYxgAp0sZ6pn2pAeLepmEuSXDiy7oL9gduXT+3+pW6f631bZoqkJY/kkB6+onnswoDw6owijIhEMByjUBgNU322/lUWm0mZgBX84r1ifz3ettHmupYskjbanedch2XZRcAKTnnvGVIPBpkqGqPTJNGkkaJ5+CiWf4KkfBs=)

`v-for` with a Range [​](#v-for-with-a-range)
---------------------------------------------

`v-for` can also take an integer. In this case it will repeat the template that many times, based on a range of `1...n`.

template

    <span v-for="n in 10">{{ n }}</span>

Note here `n` starts with an initial value of `1` instead of `0`.

`v-for` on `<template>` [​](#v-for-on-template)
-----------------------------------------------

Similar to template `v-if`, you can also use a `<template>` tag with `v-for` to render a block of multiple elements. For example:

template

    <ul>
      <template v-for="item in items">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

`v-for` with `v-if` [​](#v-for-with-v-if)
-----------------------------------------

Note

It's **not** recommended to use `v-if` and `v-for` on the same element due to implicit precedence. Refer to [style guide](/style-guide/rules-essential.html#avoid-v-if-with-v-for) for details.

When they exist on the same node, `v-if` has a higher priority than `v-for`. That means the `v-if` condition will not have access to variables from the scope of the `v-for`:

template

    <!--
    This will throw an error because property "todo"
    is not defined on instance.
    -->
    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo.name }}
    </li>

This can be fixed by moving `v-for` to a wrapping `<template>` tag (which is also more explicit):

template

    <template v-for="todo in todos">
      <li v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </template>

Maintaining State with `key` [​](#maintaining-state-with-key)
-------------------------------------------------------------

When Vue is updating a list of elements rendered with `v-for`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.

This default mode is efficient, but **only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values)**.

To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique `key` attribute for each item:

template

    <div v-for="item in items" :key="item.id">
      <!-- content -->
    </div>

When using `<template v-for>`, the `key` should be placed on the `<template>` container:

template

    <template v-for="todo in todos" :key="todo.name">
      <li>{{ todo.name }}</li>
    </template>

Note

`key` here is a special attribute being bound with `v-bind`. It should not be confused with the property key variable when [using `v-for` with an object](#v-for-with-an-object).

[It is recommended](/style-guide/rules-essential.html#use-keyed-v-for) to provide a `key` attribute with `v-for` whenever possible, unless the iterated DOM content is simple (i.e. contains no components or stateful DOM elements), or you are intentionally relying on the default behavior for performance gains.

The `key` binding expects primitive values - i.e. strings and numbers. Do not use objects as `v-for` keys. For detailed usage of the `key` attribute, please see the [`key` API documentation](/api/built-in-special-attributes.html#key).

`v-for` with a Component [​](#v-for-with-a-component)
-----------------------------------------------------

> This section assumes knowledge of [Components](/guide/essentials/component-basics.html). Feel free to skip it and come back later.

You can directly use `v-for` on a component, like any normal element (don't forget to provide a `key`):

template

    <MyComponent v-for="item in items" :key="item.id" />

However, this won't automatically pass any data to the component, because components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props:

template

    <MyComponent
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />

The reason for not automatically injecting `item` into the component is because that makes the component tightly coupled to how `v-for` works. Being explicit about where its data comes from makes the component reusable in other situations.

Check out [this example of a simple todo list](https://play.vuejs.org/#eNp1U8Fu2zAM/RXCGGAHTWx02ylwgxZYB+ywYRhyq3dwLGYRYkuCJTsZjPz7KMmK3ay9JBQfH/meKA/Rk1Jp32G0jnJdtVwZ0Gg6tSkEb5RsDQzQ4h4usG9lAzGVxldoK5n8ZrAZsTQLCduRygAKUUmhDQg8WWyLZwMPtmESx4sAGkL0mH6xrMH+AHC2hvuljw03Na4h/iLBHBAY1wfUbsTFVcwoH28o2/KIIDuaQ0TTlvrwNu/TDe+7PDlKXZ6EZxTiN4kuRI3W0dk4u4yUf7bZfScqw6WAkrEf3m+y8AOcw7Qv6w5T1elDMhs7Nbq7e61gdmme60SQAvgfIhExiSSJeeb3SBukAy1D1aVBezL5XrYN9Csp1rrbNdykqsUehXkookl0EVGxlZHX5Q5rIBLhNHFlbRD6xBiUzlOeuZJQz4XqjI+BxjSSYe2pQWwRBZizV01DmsRWeJA1Qzv0Of2TwldE5hZRlVd+FkbuOmOksJLybIwtkmfWqg+7qz47asXpSiaN3lxikSVwwfC8oD+/sEnV+oh/qcxmU85mebepgLjDBD622Mg+oDrVquYVJm7IEu4XoXKTZ1dho3gnmdJhedEymn9ab3ysDPdc4M9WKp28xE5JbB+rzz/Trm3eK3LAu8/E7p2PNzYM/i3ChR7W7L7hsSIvR7L2Aal1EhqTp80vF95sw3WcG7r8A0XaeME=) to see how to render a list of components using `v-for`, passing different data to each instance.

Check out [this example of a simple todo list](https://play.vuejs.org/#eNqNVE2PmzAQ/SsjVIlEm4C27Qmx0a7UVuqhPVS5lT04eFKsgG2BSVJF+e8d2xhIu10tihR75s2bNx9wiZ60To49RlmUd2UrtNkUUjRatQa2iquvBhvYt6qBOEmDwQbEhQQoJJ4dlOOe9bWBi7WWiuIlStNlcJlYrivr5MywxdIDAVo0fSvDDUDiyeK3eDYZxLGLsI8hI7H9DHeYQuwjeAb3I9gFCFMjUXxSYCoELroKO6fZP17Mf6jev0i1ZQcE1RtHaFrWVW/l+/Ai3zd1clQ1O8k5Uzg+j1HUZePaSFwfvdGhfNIGTaW47bV3Mc6/+zZOfaaslegS18ZE9121mIm0Ep17ynN3N5M8CB4g44AC4Lq8yTFDwAPNcK63kPTL03HR6EKboWtm0N5MvldtA8e1klnX7xphEt3ikTbpoYimsoqIwJY0r9kOa6Ag8lPeta2PvE+cA3M7k6cOEvBC6n7UfVw3imPtQ8eiouAW/IY0mElsiZWqOdqkn5NfCXxB5G6SJRvj05By1xujpJWUp8PZevLUluqP/ajPploLasmk0Re3sJ4VCMnxvKQ//0JMqrID/iaYtSaCz+xudsHjLpPzscVGHYO3SzpdixIXLskK7pcBucnTUdgg3kkmcxhetIrmH4ebr8m/n4jC6FZp+z7HTlLsVx1p4M7odcXPr6+Lnb8YOne5+C2F6/D6DH2Hx5JqOlCJ7yz7IlBTbZsf7vjXVBzjvLDrH5T0lgo=) to see how to render a list of components using `v-for`, passing different data to each instance.

Array Change Detection [​](#array-change-detection)
---------------------------------------------------

### Mutation Methods [​](#mutation-methods)

Vue is able to detect when a reactive array's mutation methods are called and trigger necessary updates. These mutation methods are:

*   `push()`
*   `pop()`
*   `shift()`
*   `unshift()`
*   `splice()`
*   `sort()`
*   `reverse()`

### Replacing an Array [​](#replacing-an-array)

Mutation methods, as the name suggests, mutate the original array they are called on. In comparison, there are also non-mutating methods, e.g. `filter()`, `concat()` and `slice()`, which do not mutate the original array but **always return a new array**. When working with non-mutating methods, we should replace the old array with the new one:

js

    // `items` is a ref with array value
    items.value = items.value.filter((item) => item.message.match(/Foo/))

js

    this.items = this.items.filter((item) => item.message.match(/Foo/))

You might think this will cause Vue to throw away the existing DOM and re-render the entire list - luckily, that is not the case. Vue implements some smart heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.

Displaying Filtered/Sorted Results [​](#displaying-filtered-sorted-results)
---------------------------------------------------------------------------

Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.

For example:

js

    const numbers = ref([1, 2, 3, 4, 5])
    
    const evenNumbers = computed(() => {
      return numbers.value.filter((n) => n % 2 === 0)
    })

js

    data() {
      return {
        numbers: [1, 2, 3, 4, 5]
      }
    },
    computed: {
      evenNumbers() {
        return this.numbers.filter(n => n % 2 === 0)
      }
    }

template

    <li v-for="n in evenNumbers">{{ n }}</li>

In situations where computed properties are not feasible (e.g. inside nested `v-for` loops), you can use a method:

js

    const sets = ref([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ])
    
    function even(numbers) {
      return numbers.filter((number) => number % 2 === 0)
    }

js

    data() {
      return {
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
      }
    },
    methods: {
      even(numbers) {
        return numbers.filter(number => number % 2 === 0)
      }
    }

template

    <ul v-for="numbers in sets">
      <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>

Be careful with `reverse()` and `sort()` in a computed property! These two methods will mutate the original array, which should be avoided in computed getters. Create a copy of the original array before calling these methods:

diff

    - return numbers.reverse()
    + return [...numbers].reverse()

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/list.md)
Event Handling [​](#event-handling)
===================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/user-events-in-vue-3?friend=vuejs "Free Vue.js Events Lesson")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-user-events-in-vue-3?friend=vuejs "Free Vue.js Events Lesson")

Listening to Events [​](#listening-to-events)
---------------------------------------------

We can use the `v-on` directive, which we typically shorten to the `@` symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be `v-on:click="handler"` or with the shortcut, `@click="handler"`.

The handler value can be one of the following:

1.  **Inline handlers:** Inline JavaScript to be executed when the event is triggered (similar to the native `onclick` attribute).
    
2.  **Method handlers:** A property name or path that points to a method defined on the component.
    

Inline Handlers [​](#inline-handlers)
-------------------------------------

Inline handlers are typically used in simple cases, for example:

js

    const count = ref(0)

js

    data() {
      return {
        count: 0
      }
    }

template

    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>

[Try it in the Playground](https://play.vuejs.org/#eNo9jssKgzAURH/lko0tgrbbEqX+Q5fZaLxiqHmQ3LgJ+fdqFZcD58xMYp1z1RqRvRgP0itHEJCia4VR2llPkMDjBBkmbzUUG1oII4y0JhBIGw2hh2Znbo+7MLw+WjZ/C4TaLT3hnogPkcgaeMtFyW8j2GmXpWBtN47w5PWBHLhrPzPCKfWDXRHmPsCAaOBfgSOkdH3IGUhpDBWv9/e8vsZZ/gFFhFJN)

[Try it in the Playground](https://play.vuejs.org/#eNo9jcEKgzAQRH9lyKlF0PYqqdR/6DGXaLYo1RjiRgrivzepIizLzu7sm1XUzuVLIFEKObe+d1wpS183eYahtw4DY1UWMJr15ZpmxYAnDt7uF0BxOwXL5Evc0kbxlmyxxZLFyY2CaXSDZkqKZROYJ4tnO/Tt56HEgckyJaraGNxlsVt2u6teHeF40s20EDo9oyGy+CPIYF1xULBt4H6kOZeFiwBZnOFi+wH0B1hk)

Method Handlers [​](#method-handlers)
-------------------------------------

The logic for many event handlers will be more complex though, and likely isn't feasible with inline handlers. That's why `v-on` can also accept the name or path of a component method you'd like to call.

For example:

js

    const name = ref('Vue.js')
    
    function greet(event) {
      alert(`Hello ${name.value}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }

js

    data() {
      return {
        name: 'Vue.js'
      }
    },
    methods: {
      greet(event) {
        // `this` inside methods points to the current active instance
        alert(`Hello ${this.name}!`)
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
      }
    }

template

    <!-- `greet` is the name of the method defined above -->
    <button @click="greet">Greet</button>

[Try it in the Playground](https://play.vuejs.org/#eNpVj0FLxDAQhf/KMwjtXtq7dBcFQS/qzVMOrWFao2kSkkkvpf/dJIuCEBgm771vZnbx4H23JRJ3YogqaM+IxMlfpNWrd4GxI9CMA3NwK5psbaSVVjkbGXZaCediaJv3RN1XbE5FnZNVrJ3FEoi4pY0sn7BLC0yGArfjMxnjcLsXQrdNJtFxM+Ys0PcYa2CEjuBPylNYb4THtxdUobj0jH/YX3D963gKC5WyvGZ+xR7S5jf01yPzeblhWr2ZmErHw0dizivfK6PV91mKursUl6dSh/4qZ+vQ/+XE8QODonDi)

[Try it in the Playground](https://play.vuejs.org/#eNplUE1LxDAQ/StjEbYL0t5LXRQEvag3Tz00prNtNE1CMilC6X83SUkRhJDJfLz3Jm8tHo2pFo9FU7SOW2Ho0in8MdoSDHhlXhKsnQIYGLHyvL8BLJK3KmcAis3YwOnDY/XlTnt1i2G7i/eMNOnBNRkwWkQqcUFFByVAXUNPk3A9COXEgBkGRgtFDkgDTQjcWxuAwDiJBeMsMcUxszCJlsr+BaXUcLtGwiqut930579KST1IBd5Aqlgie3p/hdTIk+IK//bMGqleEbMjxjC+BZVDIv0+m9CpcNr6MDgkhLORjDBm1H56Iq3ggUvBv++7IhnUFZfnGNt6b4fRtj5wxfYL9p+Sjw==)

A method handler automatically receives the native DOM Event object that triggers it - in the example above, we are able to access the element dispatching the event via `event.target.tagName`.

See also: [Typing Event Handlers](/guide/typescript/composition-api.html#typing-event-handlers)

See also: [Typing Event Handlers](/guide/typescript/options-api.html#typing-event-handlers)

### Method vs. Inline Detection [​](#method-vs-inline-detection)

The template compiler detects method handlers by checking whether the `v-on` value string is a valid JavaScript identifier or property access path. For example, `foo`, `foo.bar` and `foo['bar']` are treated as method handlers, while `foo()` and `count++` are treated as inline handlers.

Calling Methods in Inline Handlers [​](#calling-methods-in-inline-handlers)
---------------------------------------------------------------------------

Instead of binding directly to a method name, we can also call methods in an inline handler. This allows us to pass the method custom arguments instead of the native event:

js

    function say(message) {
      alert(message)
    }

js

    methods: {
      say(message) {
        alert(message)
      }
    }

template

    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>

[Try it in the Playground](https://play.vuejs.org/#eNp9jTEOwjAMRa8SeSld6I5CBWdg9ZJGBiJSN2ocpKjq3UmpFDGx+Vn//b/ANYTjOxGcQEc7uyAqkqTQI98TW3ETq2jyYaQYzYNatSArZTzNUn/IK7Ludr2IBYTG4I3QRqKHJFJ6LtY7+zojbIXNk7yfmhahv5msvqS7PfnHGjJVp9w/hu7qKKwfEd1NSg==)

[Try it in the Playground](https://play.vuejs.org/#eNptjUEKwjAQRa8yZFO7sfsSi57B7WzGdjTBtA3NVC2ldzehEFwIw8D7vM9f1cX742tmVSsd2sl6aXDgjx8ngY7vNDuBFQeAnsWMXagToQAEWg49h0APLncDAIUcT5LzlKJsqRBfPF3ljQjCvXcknEj0bRYZBzi3zrbPE6o0UBhblKiaKy1grK52J/oA//23IcmNBD8dXeVBtX0BF0pXsg==)

Accessing Event Argument in Inline Handlers [​](#accessing-event-argument-in-inline-handlers)
---------------------------------------------------------------------------------------------

Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method using the special `$event` variable, or use an inline arrow function:

template

    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    
    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>

js

    function warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }

js

    methods: {
      warn(message, event) {
        // now we have access to the native event
        if (event) {
          event.preventDefault()
        }
        alert(message)
      }
    }

Event Modifiers [​](#event-modifiers)
-------------------------------------

It is a very common need to call `event.preventDefault()` or `event.stopPropagation()` inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

To address this problem, Vue provides **event modifiers** for `v-on`. Recall that modifiers are directive postfixes denoted by a dot.

*   `.stop`
*   `.prevent`
*   `.self`
*   `.capture`
*   `.once`
*   `.passive`

template

    <!-- the click event's propagation will be stopped -->
    <a @click.stop="doThis"></a>
    
    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit"></form>
    
    <!-- modifiers can be chained -->
    <a @click.stop.prevent="doThat"></a>
    
    <!-- just the modifier -->
    <form @submit.prevent></form>
    
    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div @click.self="doThat">...</div>

TIP

Order matters when using modifiers because the relevant code is generated in the same order. Therefore using `@click.prevent.self` will prevent **click's default action on the element itself and its children**, while `@click.self.prevent` will only prevent click's default action on the element itself.

The `.capture`, `.once`, and `.passive` modifiers mirror the [options of the native `addEventListener` method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options):

template

    <!-- use capture mode when adding the event listener -->
    <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
    <div @click.capture="doThis">...</div>
    
    <!-- the click event will be triggered at most once -->
    <a @click.once="doThis"></a>
    
    <!-- the scroll event's default behavior (scrolling) will happen -->
    <!-- immediately, instead of waiting for `onScroll` to complete  -->
    <!-- in case it contains `event.preventDefault()`                -->
    <div @scroll.passive="onScroll">...</div>

The `.passive` modifier is typically used with touch event listeners for [improving performance on mobile devices](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners).

TIP

Do not use `.passive` and `.prevent` together, because `.passive` already indicates to the browser that you _do not_ intend to prevent the event's default behavior, and you will likely see a warning from the browser if you do so.

Key Modifiers [​](#key-modifiers)
---------------------------------

When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for `v-on` or `@` when listening for key events:

template

    <!-- only call `submit` when the `key` is `Enter` -->
    <input @keyup.enter="submit" />

You can directly use any valid key names exposed via [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) as modifiers by converting them to kebab-case.

template

    <input @keyup.page-down="onPageDown" />

In the above example, the handler will only be called if `$event.key` is equal to `'PageDown'`.

### Key Aliases [​](#key-aliases)

Vue provides aliases for the most commonly used keys:

*   `.enter`
*   `.tab`
*   `.delete` (captures both "Delete" and "Backspace" keys)
*   `.esc`
*   `.space`
*   `.up`
*   `.down`
*   `.left`
*   `.right`

### System Modifier Keys [​](#system-modifier-keys)

You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:

*   `.ctrl`
*   `.alt`
*   `.shift`
*   `.meta`

Note

On Macintosh keyboards, meta is the command key (⌘). On Windows keyboards, meta is the Windows key (⊞). On Sun Microsystems keyboards, meta is marked as a solid diamond (◆). On certain keyboards, specifically MIT and Lisp machine keyboards and successors, such as the Knight keyboard, space-cadet keyboard, meta is labeled “META”. On Symbolics keyboards, meta is labeled “META” or “Meta”.

For example:

template

    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />
    
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>

TIP

Note that modifier keys are different from regular keys and when used with `keyup` events, they have to be pressed when the event is emitted. In other words, `keyup.ctrl` will only trigger if you release a key while holding down `ctrl`. It won't trigger if you release the `ctrl` key alone.

### `.exact` Modifier [​](#exact-modifier)

The `.exact` modifier allows control of the exact combination of system modifiers needed to trigger an event.

template

    <!-- this will fire even if Alt or Shift is also pressed -->
    <button @click.ctrl="onClick">A</button>
    
    <!-- this will only fire when Ctrl and no other keys are pressed -->
    <button @click.ctrl.exact="onCtrlClick">A</button>
    
    <!-- this will only fire when no system modifiers are pressed -->
    <button @click.exact="onClick">A</button>

Mouse Button Modifiers [​](#mouse-button-modifiers)
---------------------------------------------------

*   `.left`
*   `.right`
*   `.middle`

These modifiers restrict the handler to events triggered by a specific mouse button.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/event-handling.md)
Form Input Bindings [​](#form-input-bindings)
=============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/user-inputs-vue-devtools-in-vue-3?friend=vuejs "Free Lesson on User Inputs with Vue.js")

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-fundamentals-capi-user-inputs-in-vue?friend=vuejs "Free Lesson on User Inputs with Vue.js")

When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event listeners:

template

    <input
      :value="text"
      @input="event => text = event.target.value">

The `v-model` directive helps us simplify the above to:

template

    <input v-model="text">

In addition, `v-model` can be used on inputs of different types, `<textarea>`, and `<select>` elements. It automatically expands to different DOM property and event pairs based on the element it is used on:

*   `<input>` with text types and `<textarea>` elements use `value` property and `input` event;
*   `<input type="checkbox">` and `<input type="radio">` use `checked` property and `change` event;
*   `<select>` use `value` as a prop and `change` as an event.

Note

`v-model` will ignore the initial `value`, `checked` or `selected` attributes found on any form elements. It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side, using the [`data`](/api/options-state.html#data) option[reactivity APIs](/api/reactivity-core.html#reactivity-api-core).

Basic Usage [​](#basic-usage)
-----------------------------

### Text [​](#text)

template

    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

Message is:

[Try it in the Playground](https://play.vuejs.org/#eNo9jUEOgyAQRa8yYUO7aNkbNOkBegM2RseWRGACoxvC3TumxuX/+f+9ql5Ez31D1SlbpuyJoSBvNLjoA6XMUCHjAg2WnAJomWoXXZxSLAwBSxk/CP2xuWl9d9GaP0YAEhgDrSOjJABLw/s8+NJBrde/NWsOpWPrI20M+yOkGdfeqXPiFAhowm9aZ8zS4+wPv/RGjtZcJtV+YpNK1g==)

[Try it in the Playground](https://play.vuejs.org/#eNo9jdEKwjAMRX8l9EV90L2POvAD/IO+lDVqoetCmw6h9N/NmBuEJPeSc1PVg+i2FFS90nlMnngwEb80JwaHL1sCQzURwFm258u2AyTkkuKuACbM2b6xh9Nps9o6pEnp7ggWwThRsIyiADQNz40En3uodQ+C1nRHK8HaRyoMy3WaHYa7Uf8To0CCRvzMwWESH51n4cXvBNTd8Um1H0FuTq0=)

Note

For languages that require an [IME](https://en.wikipedia.org/wiki/Input_method) (Chinese, Japanese, Korean etc.), you'll notice that `v-model` doesn't get updated during IME composition. If you want to respond to these updates as well, use your own `input` event listener and `value` binding instead of using `v-model`.

### Multiline text [​](#multiline-text)

template

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

Multiline message is:

[Try it in the Playground](https://play.vuejs.org/#eNo9jktuwzAMRK9CaON24XrvKgZ6gN5AG8FmGgH6ECKdJjB891D5LYec9zCb+SH6Oq9oRmN5roEEGGWlyeWQqFSBDSoeYYdjLQk6rXYuuzyXzAIJmf0fwqF1Prru02U7PDQq0CCYKHrBlsQy+Tz9rlFCDBnfdOBRqfa7twhYrhEPzvyfgmCvnxlHoIp9w76dmbbtDe+7HdpaBQUv4it6OPepLBjV8Gw5AzpjxlOJC1a9+2WB1IZQRGhWVqsdXgb1tfDcbvYbJDRqLQ==)

[Try it in the Playground](https://play.vuejs.org/#eNo9jk2OwyAMha9isenMIpN9hok0B+gN2FjBbZEIscDpj6LcvaZpKiHg2X6f32L+mX+uM5nO2DLkwNK7RHeesoCnE85RYHEJwKPg1/f2B8gkc067AhipFDxTB4fDVlrro5ce237AKoRGjihUldjCmPqjLgkxJNoxEEqnrtp7TTEUeUT6c+Z2CUKNdgbdxZmaavt1pl+Wj3ldbcubUegumAnh2oyTp6iE95QzoDEGukzRU9Y6eg9jDcKRoFKLUm27E5RXxTu7WZ89/G4E)

Note that interpolation inside `<textarea>` won't work. Use `v-model` instead.

template

    <!-- bad -->
    <textarea>{{ text }}</textarea>
    
    <!-- good -->
    <textarea v-model="text"></textarea>

### Checkbox [​](#checkbox)

Single checkbox, boolean value:

template

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

false

[Try it in the Playground](https://play.vuejs.org/#eNpVjssKgzAURH/lko3tonVfotD/yEaTKw3Ni3gjLSH/3qhUcDnDnMNk9gzhviRkD8ZnGXUgmJFS6IXTNvhIkCHiBAWm6C00ddoIJ5z0biaQL5RvVNCtmwvFhFfheLuLqqIGQhvMQLgm4tqFREDfgJ1gGz36j2Cg1TkvN+sVmn+JqnbtrjDDiAYmH09En/PxphTebqsK8PY4wMoPslBUxQ==)

[Try it in the Playground](https://play.vuejs.org/#eNpVjtEKgzAMRX8l9Gl72Po+OmH/0ZdqI5PVNnSpOEr/fVVREEKSc0kuN4sX0X1KKB5Cfbs4EDfa40whMljsTXIMWXsAa9hcrtsOEJFT9DsBdG/sPmgfwDHhJpZl1FZLycO6AuNIzjAuxGrwlBj4R/jUYrVpw6wFDPbM020MFt0uoq2a3CycadFBH+Lpo8l5jwWlKLle1QcljwCi/AH7gFic)

We can also bind multiple checkboxes to the same array or [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) value:

js

    const checkedNames = ref([])

js

    export default {
      data() {
        return {
          checkedNames: []
        }
      }
    }

template

    <div>Checked names: {{ checkedNames }}</div>
    
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

Checked names: \[\]

JackJohnMike

In this case, the `checkedNames` array will always contain the values from the currently checked boxes.

[Try it in the Playground](https://play.vuejs.org/#eNqVkUtqwzAURbfy0CTtoNU8KILSWaHdQNWBIj8T1fohyybBeO+RbOc3i2e+vHvuMWggHyG89x2SLWGtijokaDF1gQunbfAxwQARaxihjt7CJlc3wgmnvGsTqAOqBqsfabGFXSm+/P69CsfovJVXckhog5EJcwJgle7558yBK+AWhuFxaRwZLbVCZ0K70CVIp4A7Qabi3h8FAV3l/C9Vk797abpy/lrim/UVmkt/Gc4HOv+EkXs0UPt4XeCFZHQ6lM4TZn9w9+YlrjFPCC/kKrPVDd6Zv5e4wjwv8ELezIxeX4qMZwHduAs=)

[Try it in the Playground](https://play.vuejs.org/#eNqVUc1qxCAQfpXBU3tovS9WKL0V2hdoenDjLGtjVNwxbAl592rMpru3DYjO5/cnOLLXEJ6HhGzHxKmNJpBsHJ6DjwQaDypZgrFxAFqRenisM0BEStFdEEB7xLZD/al6PO3g67veT+XIW16Cr+kZEPbBKsKMAIQ2g3yrAeBqwjjeRMI0CV5kxZ0dxoVEQL8BXxo2C/f+3DAwOuMf1XZ5HpRNhX5f4FPvNdqLfgnOBK+PsGqPFg4+rgmyOAWfiaK5o9kf3XXzArc0zxZZnJuae9PhVfPHAjc01wRZnP/Ngq8/xaY/yMW74g==)

### Radio [​](#radio)

template

    <div>Picked: {{ picked }}</div>
    
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>

Picked:

OneTwo

[Try it in the Playground](https://play.vuejs.org/#eNqFkDFuwzAMRa9CaHE7tNoDxUBP0A4dtTgWDQiRJUKmHQSG7x7KhpMMAbLxk3z/g5zVD9H3NKI6KDO02RPDgDxSbaPvKWWGGTJ2sECXUw+VrFY22timODCQb8/o4FhWPqrfiNWnjUZvRmIhgrGn0DCKAjDOT/XfCh1gnnd+WYwukwJYNj7SyMBXwqNVuXE+WQXeiUgRpZyaMJaR5BX11SeHQfTmJi1dnNiE5oQBupR3shbC6LX9Posvpdyz/jf1OksOe85ayVqIR5bR9z+o5Qbc6oCk)

[Try it in the Playground](https://play.vuejs.org/#eNqNkEEOAiEMRa/SsFEXyt7gJJ5AFy5ng1ITIgLBMmomc3eLOONSEwJ9Lf//pL3YxrjqMoq1ULdTspGa1uMjhkRg8KyzI+hbD2A06fmi1gAJKSc/EkC0pwuaNcx2Hme1OZSHLz5KTtYMhNfoNGEhUsZ2zf6j7vuPEQyDkmVSBPzJ+pgJ6Blx04qkjQ2tAGsYgkcuO+1yGXF6oeU1GHTM1Y1bsoY5fUQH55BGZcMKJd/t31l0L+WYdaj0V9Zb2bDim6XktAcxvADR+YWb)

### Select [​](#select)

Single select:

template

    <div>Selected: {{ selected }}</div>
    
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

Selected:

Please select oneABC

[Try it in the Playground](https://play.vuejs.org/#eNp1j7EOgyAQhl/lwmI7tO4Nmti+QJOuLFTPxASBALoQ3r2H2jYOjvff939wkTXWXucJ2Y1x37rBBvAYJlsLPYzWuAARHPaQoHdmhILQQmihW6N9RhW2ATuoMnQqirPQvFw9ZKAh4GiVDEgTAPdW6hpeW+sGMf4VKVEz73Mvs8sC5stoOlSVYF9SsEVGiLFhMBq6wcu3IsUs1YREEvFUKD1udjAaebnS+27dHOT3g/yxy+nHywM08PJ3KksfXwJ2dA==)

[Try it in the Playground](https://play.vuejs.org/#eNp1j1ELgyAUhf/KxZe2h633cEHbHxjstReXdxCYSt5iEP333XIJPQSinuN3jjqJyvvrOKAohAxN33oqa4tf73oCjR81GIKptgBakTqd4x6gRxp6uymAgAYbQl1AlkVvXhaeeMg8NbMg7LxRhKwAZPDKlvBK8WlKXTDPnFzOI7naMF46p9HcarFxtVgBRpyn1lnQbVBvwwWjMgMyycTToAr47wZnUeaR3mfL6sC/H/iPnc/vXS9gIfP0UTH/ACgWeYE=)

Note

If the initial value of your `v-model` expression does not match any of the options, the `<select>` element will render in an "unselected" state. On iOS this will cause the user not being able to select the first item because iOS does not fire a change event in this case. It is therefore recommended to provide a disabled option with an empty value, as demonstrated in the example above.

Multiple select (bound to array):

template

    <div>Selected: {{ selected }}</div>
    
    <select v-model="selected" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

Selected: \[\]

ABC

[Try it in the Playground](https://play.vuejs.org/#eNp1kL2OwjAQhF9l5Ya74i7QBhMJeARKTIESIyz5Z5VsAsjyu7NOQEBB5xl/M7vaKNaI/0OvRSlkV7cGCTpNPVbKG4ehJYjQ6hMkOLXBwYzRmfLK18F3GbW6Jt3AKkM/+8Ov8rKYeriBBWmH9kiaFYBszFDtHpkSYnwVpCSL/JtDDE4+DH8uNNqulHiCSoDrLRm0UyWzAckEX61l8Xh9+psv/vbD563HCSxk8bY0y45u47AJ2D/HHyDm4MU0dC5hMZ/jdal8Gg8wJkS6A3nRew4=)

[Try it in the Playground](https://play.vuejs.org/#eNp1UEEOgjAQ/MqmJz0oeMVKgj7BI3AgdI1NCjSwIIbwdxcqRA4mTbsznd2Z7CAia49diyIQsslrbSlMSuxtVRMofGStIRiSEkBllO32rgaokdq6XBBAgwZzQhVAnDpunB6++EhvncyAsLAmI2QEIJXuwvvaPAzrJBhH6U2/UxMLHQ/doagUmksiFmEioOCU2ho3krWVJV2VYSS9b7Xlr3/424bn1LMDA+n9hGbY0Hs2c4J4sU/dPl5a0TOAk+/b/rwsYO4Q4wdtRX7l)

Select options can be dynamically rendered with `v-for`:

js

    const selected = ref('A')
    
    const options = ref([
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ])

js

    export default {
      data() {
        return {
          selected: 'A',
          options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ]
        }
      }
    }

template

    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    
    <div>Selected: {{ selected }}</div>

[Try it in the Playground](https://play.vuejs.org/#eNplkMFugzAQRH9l5YtbKYU7IpFoP6CH9lb3EMGiWgLbMguthPzvXduEJMqNYUazb7yKxrlimVFUop5arx3BhDS7kzJ6dNYTrOCxhwC9tyNIjkpllGmtmWJ0wJawg2MMPclGPl9N60jzx+Z9KQPcRfhHFch3g/IAy3mYkVUjIRzu/M9fe+O/Pvo/Hm8b3jihzDdfr8s8gwewIBzdcCZkBVBnXFheRtvhcFTiwq9ECnAkQ3Okt54Dm9TmskYJqNLR3SyS3BsYct3CRYSFwGCpusx/M0qZTydKRXWnl9PHBlPFhv1lQ6jL6MZl+xoR/gFjPZTD)

[Try it in the Playground](https://play.vuejs.org/#eNp1kMFqxCAQhl9l8JIWtsk92IVtH6CH9lZ7COssDbgqZpJdCHn3nWiUXBZE/Mdvxv93Fifv62lE0Qo5nEPv6ags3r0LBBov3WgIZmUBdEfdy2s6AwSkMdisAAY0eCbULVSn6pCrzlPv7NDCb64AzEB4J+a+LFYHmDozYuyCpfTtqJ+b21Efz6j/gPtpn8xl7C8douaNl2xKUhaEV286QlYAMgWB6e3qNJp3JXIyJSLASErFyMUFBjbZ2xxXCWijkXJZR1kmsPF5g+s1ACybWdmkarLSpKejS0VS99Pxu3wzT8jOuF026+2arKQRywOBGJfE)

Value Bindings [​](#value-bindings)
-----------------------------------

For radio, checkbox and select options, the `v-model` binding values are usually static strings (or booleans for checkbox):

template

    <!-- `picked` is a string "a" when checked -->
    <input type="radio" v-model="picked" value="a" />
    
    <!-- `toggle` is either true or false -->
    <input type="checkbox" v-model="toggle" />
    
    <!-- `selected` is a string "abc" when the first option is selected -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>

But sometimes we may want to bind the value to a dynamic property on the current active instance. We can use `v-bind` to achieve that. In addition, using `v-bind` allows us to bind the input value to non-string values.

### Checkbox [​](#checkbox-1)

template

    <input
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no" />

`true-value` and `false-value` are Vue-specific attributes that only work with `v-model`. Here the `toggle` property's value will be set to `'yes'` when the box is checked, and set to `'no'` when unchecked. You can also bind them to dynamic values using `v-bind`:

template

    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue" />

Tip

The `true-value` and `false-value` attributes don't affect the input's `value` attribute, because browsers don't include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a form (e.g. "yes" or "no"), use radio inputs instead.

### Radio [​](#radio-1)

template

    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />

`pick` will be set to the value of `first` when the first radio input is checked, and set to the value of `second` when the second one is checked.

### Select Options [​](#select-options)

template

    <select v-model="selected">
      <!-- inline object literal -->
      <option :value="{ number: 123 }">123</option>
    </select>

`v-model` supports value bindings of non-string values as well! In the above example, when the option is selected, `selected` will be set to the object literal value of `{ number: 123 }`.

Modifiers [​](#modifiers)
-------------------------

### `.lazy` [​](#lazy)

By default, `v-model` syncs the input with the data after each `input` event (with the exception of IME composition as [stated above](#vmodel-ime-tip)). You can add the `lazy` modifier to instead sync after `change` events:

template

    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg" />

### `.number` [​](#number)

If you want user input to be automatically typecast as a number, you can add the `number` modifier to your `v-model` managed inputs:

template

    <input v-model.number="age" />

If the value cannot be parsed with `parseFloat()`, then the original value is used instead.

The `number` modifier is applied automatically if the input has `type="number"`.

### `.trim` [​](#trim)

If you want whitespace from user input to be trimmed automatically, you can add the `trim` modifier to your `v-model`\-managed inputs:

template

    <input v-model.trim="msg" />

`v-model` with Components [​](#v-model-with-components)
-------------------------------------------------------

> If you're not yet familiar with Vue's components, you can skip this for now.

HTML's built-in input types won't always meet your needs. Fortunately, Vue components allow you to build reusable inputs with completely customized behavior. These inputs even work with `v-model`! To learn more, read about [Usage with `v-model`](/guide/components/v-model.html) in the Components guide.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/forms.md)
Lifecycle Hooks [​](#lifecycle-hooks)
=====================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

Registering Lifecycle Hooks [​](#registering-lifecycle-hooks)
-------------------------------------------------------------

For example, the `onMounted``mounted` hook can be used to run code after the component has finished the initial rendering and created the DOM nodes:

vue

    <script setup>
    import { onMounted } from 'vue'
    
    onMounted(() => {
      console.log(`the component is now mounted.`)
    })
    </script>

js

    export default {
      mounted() {
        console.log(`the component is now mounted.`)
      }
    }

There are also other hooks which will be called at different stages of the instance's lifecycle, with the most commonly used being [`onMounted`](/api/composition-api-lifecycle.html#onmounted), [`onUpdated`](/api/composition-api-lifecycle.html#onupdated), and [`onUnmounted`](/api/composition-api-lifecycle.html#onunmounted).[`mounted`](/api/options-lifecycle.html#mounted), [`updated`](/api/options-lifecycle.html#updated), and [`unmounted`](/api/options-lifecycle.html#unmounted).

All lifecycle hooks are called with their `this` context pointing to the current active instance invoking it. Note this means you should avoid using arrow functions when declaring lifecycle hooks, as you won't be able to access the component instance via `this` if you do so.

When calling `onMounted`, Vue automatically associates the registered callback function with the current active component instance. This requires these hooks to be registered **synchronously** during component setup. For example, do not do this:

js

    setTimeout(() => {
      onMounted(() => {
        // this won't work.
      })
    }, 100)

Do note this doesn't mean that the call must be placed lexically inside `setup()` or `<script setup>`. `onMounted()` can be called in an external function as long as the call stack is synchronous and originates from within `setup()`.

Lifecycle Diagram [​](#lifecycle-diagram)
-----------------------------------------

Below is a diagram for the instance lifecycle. You don't need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.

![Component lifecycle diagram](/assets/lifecycle.16e4c08e.png)

Consult the [Lifecycle Hooks API reference](/api/composition-api-lifecycle.html)[Lifecycle Hooks API reference](/api/options-lifecycle.html) for details on all lifecycle hooks and their respective use cases.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/lifecycle.md)
Watchers [​](#watchers)
=======================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Basic Example [​](#basic-example)
---------------------------------

Computed properties allow us to declaratively compute derived values. However, there are cases where we need to perform "side effects" in reaction to state changes - for example, mutating the DOM, or changing another piece of state based on the result of an async operation.

With the Options API, we can use the [`watch` option](/api/options-state.html#watch) to trigger a function whenever a reactive property changes:

js

    export default {
      data() {
        return {
          question: '',
          answer: 'Questions usually contain a question mark. ;-)'
        }
      },
      watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
          if (newQuestion.includes('?')) {
            this.getAnswer()
          }
        }
      },
      methods: {
        async getAnswer() {
          this.answer = 'Thinking...'
          try {
            const res = await fetch('https://yesno.wtf/api')
            this.answer = (await res.json()).answer
          } catch (error) {
            this.answer = 'Error! Could not reach the API. ' + error
          }
        }
      }
    }

template

    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>

[Try it in the Playground](https://play.vuejs.org/#eNptUk2PmzAQ/SuvXAA1sdVrmt0qqnroqa3UIxcLhuCGjKk/wkYR/70OBJLuroRkPDPvzbznuSS7rhOnQMkm2brS6s4/F0wvnbEeFdUqtB6XgoFKeZXl0z9gyQfL8w34G8h5bXiDNF3NQcWuJxtDv25Zh+CCatszSsNeaYZakDgqexD4vM7TCT9cj2Ek65Uvm83cTUr0DTGdyN7RZaN4T24F32iHOnA5hnvdtrCBJ+RcnTH180wrmLaaL4s+QNd4LBOaK3r5UWfplzTHM9afHmoxdhV78rtRcpbPmVHEf1qO5BtTuUWNcmcu8QC9046kk4l4Qvq70XzQvBdC3CyKJfb8OEa01fn4OC7Wq15pj5qidVnaeN+5jZRncmxE72upOp0uY77ulU3gSCT+uOhXnt9yiy6U1zdBRtYa+9aK+9TfrgUf8NWEtgKbK6mKQN8Qdj+/C6T4iJHkXcsKjt9WLpsZL56OXas8xRuw7cYD2LlDXKYoT7K5b+OU22rugsdpfTQVtU9FMueLBHKikRNPpLtcbnuLYZjCW7m0TIZ/92UFiQ==)

The `watch` option also supports a dot-delimited path as the key:

js

    export default {
      watch: {
        // Note: only simple paths. Expressions are not supported.
        'some.nested.key'(newValue) {
          // ...
        }
      }
    }

With Composition API, we can use the [`watch` function](/api/reactivity-core.html#watch) to trigger a callback whenever a piece of reactive state changes:

vue

    <script setup>
    import { ref, watch } from 'vue'
    
    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')
    
    // watch works directly on a ref
    watch(question, async (newQuestion, oldQuestion) => {
      if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          answer.value = (await res.json()).answer
        } catch (error) {
          answer.value = 'Error! Could not reach the API. ' + error
        }
      }
    })
    </script>
    
    <template>
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNplkkGPmzAQhf/KKxdA3Rj1mpJUUdVDT22lHrlYxDRuYOzaJjRC/PcdxyGr3b2A7PfmmzcMc3awVlxGlW2z2rdO2wCvwmj3DenBGhcww6nuCZMM7QkLOmcG5FyRN9RQa8gH/BuVD9oQdtFb5Hm5KpL8pNx6/+vu8xj9KPv+CnYFqQnyhTFIdxb4vCkjpaFb32JVnyD9lVoUpKaVVmK3x9wQoLtXgtB0VP9/cOMveYk9Np/K5MM9l7jIflScLv990nTW9EcIwXNFR3DX1YwYk4dxyrNXTlIHdCrGyk8hWL+tqqvyZMQUukpaHYOnujdtilTLHPHXGyrKUiRH8i9obx+5UM4Z98j6Pu23qH/AVzP2R5CJRMl14aRw+PldIMdH3Bh3bnzxY+FcdZW2zPvlQ1CD7WVQfALquPToP/gzL4RHqsg89rJNWq3JjgGXzWCOqt812ao3GaqEqRKHcfO8/gDLkq7r6tEyW54Bf5TTlg==)

### Watch Source Types [​](#watch-source-types)

`watch`'s first argument can be different types of reactive "sources": it can be a ref (including computed refs), a reactive object, a getter function, or an array of multiple sources:

js

    const x = ref(0)
    const y = ref(0)
    
    // single ref
    watch(x, (newX) => {
      console.log(`x is ${newX}`)
    })
    
    // getter
    watch(
      () => x.value + y.value,
      (sum) => {
        console.log(`sum of x + y is: ${sum}`)
      }
    )
    
    // array of multiple sources
    watch([x, () => y.value], ([newX, newY]) => {
      console.log(`x is ${newX} and y is ${newY}`)
    })

Do note that you can't watch a property of a reactive object like this:

js

    const obj = reactive({ count: 0 })
    
    // this won't work because we are passing a number to watch()
    watch(obj.count, (count) => {
      console.log(`count is: ${count}`)
    })

Instead, use a getter:

js

    // instead, use a getter:
    watch(
      () => obj.count,
      (count) => {
        console.log(`count is: ${count}`)
      }
    )

Deep Watchers [​](#deep-watchers)
---------------------------------

`watch` is shallow by default: the callback will only trigger when the watched property has been assigned a new value - it won't trigger on nested property changes. If you want the callback to fire on all nested mutations, you need to use a deep watcher:

js

    export default {
      watch: {
        someObject: {
          handler(newValue, oldValue) {
            // Note: `newValue` will be equal to `oldValue` here
            // on nested mutations as long as the object itself
            // hasn't been replaced.
          },
          deep: true
        }
      }
    }

When you call `watch()` directly on a reactive object, it will implicitly create a deep watcher - the callback will be triggered on all nested mutations:

js

    const obj = reactive({ count: 0 })
    
    watch(obj, (newValue, oldValue) => {
      // fires on nested property mutations
      // Note: `newValue` will be equal to `oldValue` here
      // because they both point to the same object!
    })
    
    obj.count++

This should be differentiated with a getter that returns a reactive object - in the latter case, the callback will only fire if the getter returns a different object:

js

    watch(
      () => state.someObject,
      () => {
        // fires only when state.someObject is replaced
      }
    )

You can, however, force the second case into a deep watcher by explicitly using the `deep` option:

js

    watch(
      () => state.someObject,
      (newValue, oldValue) => {
        // Note: `newValue` will be equal to `oldValue` here
        // *unless* state.someObject has been replaced
      },
      { deep: true }
    )

Use with Caution

Deep watch requires traversing all nested properties in the watched object, and can be expensive when used on large data structures. Use it only when necessary and beware of the performance implications.

Eager Watchers [​](#eager-watchers)
-----------------------------------

`watch` is lazy by default: the callback won't be called until the watched source has changed. But in some cases we may want the same callback logic to be run eagerly - for example, we may want to fetch some initial data, and then re-fetch the data whenever relevant state changes.

We can force a watcher's callback to be executed immediately by declaring it using an object with a `handler` function and the `immediate: true` option:

js

    export default {
      // ...
      watch: {
        question: {
          handler(newQuestion) {
            // this will be run immediately on component creation.
          },
          // force eager callback execution
          immediate: true
        }
      }
      // ...
    }

The initial execution of the handler function will happen just before the `created` hook. Vue will have already processed the `data`, `computed`, and `methods` options, so those properties will be available on the first invocation.

We can force a watcher's callback to be executed immediately by passing the `immediate: true` option:

js

    watch(source, (newValue, oldValue) => {
      // executed immediately, then again when `source` changes
    }, { immediate: true })

`watchEffect()` [​](#watcheffect)
---------------------------------

It is common for the watcher callback to use exactly the same reactive state as the source. For example, consider the following code, which uses a watcher to load a remote resource whenever the `todoId` ref changes:

js

    const todoId = ref(1)
    const data = ref(null)
    
    watch(todoId, async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      )
      data.value = await response.json()
    }, { immediate: true })

In particular, notice how the watcher uses `todoId` twice, once as the source and then again inside the callback.

This can be simplified with [`watchEffect()`](/api/reactivity-core.html#watcheffect). `watchEffect()` allows us to track the callback's reactive dependencies automatically. The watcher above can be rewritten as:

js

    watchEffect(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      )
      data.value = await response.json()
    })

Here, the callback will run immediately, there's no need to specify `immediate: true`. During its execution, it will automatically track `todoId.value` as a dependency (similar to computed properties). Whenever `todoId.value` changes, the callback will be run again. With `watchEffect()`, we no longer need to pass `todoId` explicitly as the source value.

You can check out [this example](/examples/#fetching-data) of `watchEffect()` and reactive data-fetching in action.

For examples like these, with only one dependency, the benefit of `watchEffect()` is relatively small. But for watchers that have multiple dependencies, using `watchEffect()` removes the burden of having to maintain the list of dependencies manually. In addition, if you need to watch several properties in a nested data structure, `watchEffect()` may prove more efficient than a deep watcher, as it will only track the properties that are used in the callback, rather than recursively tracking all of them.

TIP

`watchEffect` only tracks dependencies during its **synchronous** execution. When using it with an async callback, only properties accessed before the first `await` tick will be tracked.

### `watch` vs. `watchEffect` [​](#watch-vs-watcheffect)

`watch` and `watchEffect` both allow us to reactively perform side effects. Their main difference is the way they track their reactive dependencies:

*   `watch` only tracks the explicitly watched source. It won't track anything accessed inside the callback. In addition, the callback only triggers when the source has actually changed. `watch` separates dependency tracking from the side effect, giving us more precise control over when the callback should fire.
    
*   `watchEffect`, on the other hand, combines dependency tracking and side effect into one phase. It automatically tracks every reactive property accessed during its synchronous execution. This is more convenient and typically results in terser code, but makes its reactive dependencies less explicit.
    

Callback Flush Timing [​](#callback-flush-timing)
-------------------------------------------------

When you mutate reactive state, it may trigger both Vue component updates and watcher callbacks created by you.

By default, user-created watcher callbacks are called **before** Vue component updates. This means if you attempt to access the DOM inside a watcher callback, the DOM will be in the state before Vue has applied any updates.

If you want to access the DOM in a watcher callback **after** Vue has updated it, you need to specify the `flush: 'post'` option:

js

    export default {
      // ...
      watch: {
        key: {
          handler() {},
          flush: 'post'
        }
      }
    }

js

    watch(source, callback, {
      flush: 'post'
    })
    
    watchEffect(callback, {
      flush: 'post'
    })

Post-flush `watchEffect()` also has a convenience alias, `watchPostEffect()`:

js

    import { watchPostEffect } from 'vue'
    
    watchPostEffect(() => {
      /* executed after Vue updates */
    })

`this.$watch()` [​](#this-watch)
--------------------------------

It's also possible to imperatively create watchers using the [`$watch()` instance method](/api/component-instance.html#watch):

js

    export default {
      created() {
        this.$watch('question', (newQuestion) => {
          // ...
        })
      }
    }

This is useful when you need to conditionally set up a watcher, or only watch something in response to user interaction. It also allows you to stop the watcher early.

Stopping a Watcher [​](#stopping-a-watcher)
-------------------------------------------

Watchers declared using the `watch` option or the `$watch()` instance method are automatically stopped when the owner component is unmounted, so in most cases you don't need to worry about stopping the watcher yourself.

In the rare case where you need to stop a watcher before the owner component unmounts, the `$watch()` API returns a function for that:

js

    const unwatch = this.$watch('foo', callback)
    
    // ...when the watcher is no longer needed:
    unwatch()

Watchers declared synchronously inside `setup()` or `<script setup>` are bound to the owner component instance, and will be automatically stopped when the owner component is unmounted. In most cases, you don't need to worry about stopping the watcher yourself.

The key here is that the watcher must be created **synchronously**: if the watcher is created in an async callback, it won't be bound to the owner component and must be stopped manually to avoid memory leaks. Here's an example:

vue

    <script setup>
    import { watchEffect } from 'vue'
    
    // this one will be automatically stopped
    watchEffect(() => {})
    
    // ...this one will not!
    setTimeout(() => {
      watchEffect(() => {})
    }, 100)
    </script>

To manually stop a watcher, use the returned handle function. This works for both `watch` and `watchEffect`:

js

    const unwatch = watchEffect(() => {})
    
    // ...later, when no longer needed
    unwatch()

Note that there should be very few cases where you need to create watchers asynchronously, and synchronous creation should be preferred whenever possible. If you need to wait for some async data, you can make your watch logic conditional instead:

js

    // data to be loaded asynchronously
    const data = ref(null)
    
    watchEffect(() => {
      if (data.value) {
        // do something when data is loaded
      }
    })

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/watchers.md)
Template Refs [​](#template-refs)
=================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

While Vue's declarative rendering model abstracts away most of the direct DOM operations for you, there may still be cases where we need direct access to the underlying DOM elements. To achieve this, we can use the special `ref` attribute:

template

    <input ref="input">

`ref` is a special attribute, similar to the `key` attribute discussed in the `v-for` chapter. It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted. This may be useful when you want to, for example, programmatically focus an input on component mount, or initialize a 3rd party library on an element.

Accessing the Refs [​](#accessing-the-refs)
-------------------------------------------

To obtain the reference with Composition API, we need to declare a ref with the same name:

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // declare a ref to hold the element reference
    // the name must match template ref value
    const input = ref(null)
    
    onMounted(() => {
      input.value.focus()
    })
    </script>
    
    <template>
      <input ref="input" />
    </template>

If not using `<script setup>`, make sure to also return the ref from `setup()`:

js

    export default {
      setup() {
        const input = ref(null)
        // ...
        return {
          input
        }
      }
    }

The resulting ref is exposed on `this.$refs`:

vue

    <script>
    export default {
      mounted() {
        this.$refs.input.focus()
      }
    }
    </script>
    
    <template>
      <input ref="input" />
    </template>

Note that you can only access the ref **after the component is mounted.** If you try to access `$refs.input``input` in a template expression, it will be `null` on the first render. This is because the element doesn't exist until after the first render!

If you are trying to watch the changes of a template ref, make sure to account for the case where the ref has `null` value:

js

    watchEffect(() => {
      if (input.value) {
        input.value.focus()
      } else {
        // not mounted yet, or the element was unmounted (e.g. by v-if)
      }
    })

See also: [Typing Template Refs](/guide/typescript/composition-api.html#typing-template-refs)

Refs inside `v-for` [​](#refs-inside-v-for)
-------------------------------------------

> Requires v3.2.25 or above

When `ref` is used inside `v-for`, the corresponding ref should contain an Array value, which will be populated with the elements after mount:

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    const list = ref([
      /* ... */
    ])
    
    const itemRefs = ref([])
    
    onMounted(() => console.log(itemRefs.value))
    </script>
    
    <template>
      <ul>
        <li v-for="item in list" ref="itemRefs">
          {{ item }}
        </li>
      </ul>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNpFjs1qwzAQhF9l0CU2uDZtb8UOlJ576bXqwaQyCGRJyCsTEHr3rGwnOehnd2e+nSQ+vW/XqMSH6JdL0J6wKIr+LK2evQuEhKCmBs5+u2hJ/SNjCm7GiV0naaW9OLsQjOZrKNrq97XBW4P3v/o51qTmHzUtd8k+e0CrqsZwRpIWGI0KVN0N7TqaqNp59JUuEt2SutKXY5elmimZT9/t2Tk1F+z0ZiTFFdBHs738Mxrry+TCIEWhQ9sttRQl0tEsK6U4HEBKW3LkfDA6o3dst3H77rFM5BtTfm/P)

When `ref` is used inside `v-for`, the resulting ref value will be an array containing the corresponding elements:

vue

    <script>
    export default {
      data() {
        return {
          list: [
            /* ... */
          ]
        }
      },
      mounted() {
        console.log(this.$refs.items)
      }
    }
    </script>
    
    <template>
      <ul>
        <li v-for="item in list" ref="items">
          {{ item }}
        </li>
      </ul>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNpFjk0KwjAQha/yCC4Uaou6kyp4DuOi2KkGYhKSiQildzdNa4WQmTc/37xeXJwr35HEUdTh7pXjszT0cdYzWuqaqBm9NEDbcLPeTDngiaM3PwVoFfiI667AvsDhNpWHMQzF+L9sNEztH3C3JlhNpbaPNT9VKFeeulAqplfY5D1p0qurxVQSqel0w5QUUEedY8q0wnvbWX+SYgRAmWxIiuSzm4tBinkc6HvkuSE7TIBKq4lZZWhdLZfE8AWp4l3T)

It should be noted that the ref array does **not** guarantee the same order as the source array.

Function Refs [​](#function-refs)
---------------------------------

Instead of a string key, the `ref` attribute can also be bound to a function, which will be called on each component update and gives you full flexibility on where to store the element reference. The function receives the element reference as the first argument:

template

    <input :ref="(el) => { /* assign el to a property or ref */ }">

Note we are using a dynamic `:ref` binding so we can pass it a function instead of a ref name string. When the element is unmounted, the argument will be `null`. You can, of course, use a method instead of an inline function.

Ref on Component [​](#ref-on-component)
---------------------------------------

> This section assumes knowledge of [Components](/guide/essentials/component-basics.html). Feel free to skip it and come back later.

`ref` can also be used on a child component. In this case the reference will be that of a component instance:

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    import Child from './Child.vue'
    
    const child = ref(null)
    
    onMounted(() => {
      // child.value will hold an instance of <Child />
    })
    </script>
    
    <template>
      <Child ref="child" />
    </template>

vue

    <script>
    import Child from './Child.vue'
    
    export default {
      components: {
        Child
      },
      mounted() {
        // this.$refs.child will hold an instance of <Child />
      }
    }
    </script>
    
    <template>
      <Child ref="child" />
    </template>

If the child component is using Options API or not using `<script setup>`, theThe referenced instance will be identical to the child component's `this`, which means the parent component will have full access to every property and method of the child component. This makes it easy to create tightly coupled implementation details between the parent and the child, so component refs should be only used when absolutely needed - in most cases, you should try to implement parent / child interactions using the standard props and emit interfaces first.

An exception here is that components using `<script setup>` are **private by default**: a parent component referencing a child component using `<script setup>` won't be able to access anything unless the child component chooses to expose a public interface using the `defineExpose` macro:

vue

    <script setup>
    import { ref } from 'vue'
    
    const a = 1
    const b = ref(2)
    
    // Compiler macros, such as defineExpose, don't need to be imported
    defineExpose({
      a,
      b
    })
    </script>

When a parent gets an instance of this component via template refs, the retrieved instance will be of the shape `{ a: number, b: number }` (refs are automatically unwrapped just like on normal instances).

See also: [Typing Component Template Refs](/guide/typescript/composition-api.html#typing-component-template-refs)

The `expose` option can be used to limit the access to a child instance:

js

    export default {
      expose: ['publicData', 'publicMethod'],
      data() {
        return {
          publicData: 'foo',
          privateData: 'bar'
        }
      },
      methods: {
        publicMethod() {
          /* ... */
        },
        privateMethod() {
          /* ... */
        }
      }
    }

In the above example, a parent referencing this component via template ref will only be able to access `publicData` and `publicMethod`.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/template-refs.md)
Components Basics [​](#components-basics)
=========================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components:

![Component Tree](/assets/components.7fbb3771.png)

This is very similar to how we nest native HTML elements, but Vue implements its own component model that allow us to encapsulate custom content and logic in each component. Vue also plays nicely with native Web Components. If you are curious about the relationship between Vue Components and native Web Components, [read more here](/guide/extras/web-components.html).

Defining a Component [​](#defining-a-component)
-----------------------------------------------

When using a build step, we typically define each Vue component in a dedicated file using the `.vue` extension - known as a [Single-File Component](/guide/scaling-up/sfc.html) (SFC for short):

vue

    <script>
    export default {
      data() {
        return {
          count: 0
        }
      }
    }
    </script>
    
    <template>
      <button @click="count++">You clicked me {{ count }} times.</button>
    </template>

vue

    <script setup>
    import { ref } from 'vue'
    
    const count = ref(0)
    </script>
    
    <template>
      <button @click="count++">You clicked me {{ count }} times.</button>
    </template>

When not using a build step, a Vue component can be defined as a plain JavaScript object containing Vue-specific options:

js

    export default {
      data() {
        return {
          count: 0
        }
      },
      template: `
        <button @click="count++">
          You clicked me {{ count }} times.
        </button>`
    }

js

    import { ref } from 'vue'
    
    export default {
      setup() {
        const count = ref(0)
        return { count }
      },
      template: `
        <button @click="count++">
          You clicked me {{ count }} times.
        </button>`
      // or `template: '#my-template-element'`
    }

The template is inlined as a JavaScript string here, which Vue will compile on the fly. You can also use an ID selector pointing to an element (usually native `<template>` elements) - Vue will use its content as the template source.

The example above defines a single component and exports it as the default export of a `.js` file, but you can use named exports to export multiple components from the same file.

Using a Component [​](#using-a-component)
-----------------------------------------

TIP

We will be using SFC syntax for the rest of this guide - the concepts around components are the same regardless of whether you are using a build step or not. The [Examples](/examples/) section shows component usage in both scenarios.

To use a child component, we need to import it in the parent component. Assuming we placed our counter component inside a file called `ButtonCounter.vue`, the component will be exposed as the file's default export:

vue

    <script>
    import ButtonCounter from './ButtonCounter.vue'
    
    export default {
      components: {
        ButtonCounter
      }
    }
    </script>
    
    <template>
      <h1>Here is a child component!</h1>
      <ButtonCounter />
    </template>

To expose the imported component to our template, we need to [register](/guide/components/registration.html) it with the `components` option. The component will then be available as a tag using the key it is registered under.

vue

    <script setup>
    import ButtonCounter from './ButtonCounter.vue'
    </script>
    
    <template>
      <h1>Here is a child component!</h1>
      <ButtonCounter />
    </template>

With `<script setup>`, imported components are automatically made available to the template.

It's also possible to globally register a component, making it available to all components in a given app without having to import it. The pros and cons of global vs. local registration is discussed in the dedicated [Component Registration](/guide/components/registration.html) section.

Components can be reused as many times as you want:

template

    <h1>Here are many child components!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />

[Try it in the Playground](https://play.vuejs.org/#eNqVUE1LxDAQ/StjLqusNHotcfHj4l8QcontLBtsJiGdiFL6301SdrEqyEJyeG9m3ps3k3gIoXlPKFqhxi7awDtN1gUfGR4Ts6cnn4gxwj56B5tGrtgyutEEoAk/6lCPe5MGhqmwnc9KhMRjuxCwFi3UrCk/JU/uGTC6MBjGglgdbnfPGBFM/s7QJ3QHO/TfxC+UzD21d72zPItU8uQrrsWvnKsT/ZW2N2wur45BI3KKdETlFlmphZsF58j/RgdQr3UJuO8G273daVFFtlstahngxSeoNezBIUzTYgPzDGwdjk1VkYvMj4jzF0nwsyQ=)

[Try it in the Playground](https://play.vuejs.org/#eNqVj91KAzEQhV/lmJsqlY3eSlr8ufEVhNys6ZQGNz8kE0GWfXez2SJUsdCLuZiZM9+ZM4qnGLvPQuJBqGySjYxMXOJWe+tiSIznwhz8SyieKWGfgsOqkyfTGbDSXsmFUG9rw+Ti0DPNHavD/faVEqGv5Xr/BXOwww4mVBNPnvOVklXTtKeO8qKhkj++4lb8+fL/mCMS7TEdAy6BtDfBZ65fVgA2s+L67uZMUEC9N0s8msGaj40W7Xa91qKtgbdQ0Ha0gyOM45E+TWDrKHeNIhfMr0DTN4U0me8=)

Notice that when clicking on the buttons, each one maintains its own, separate `count`. That's because each time you use a component, a new **instance** of it is created.

In SFCs, it's recommended to use `PascalCase` tag names for child components to differentiate from native HTML elements. Although native HTML tag names are case-insensitive, Vue SFC is a compiled format so we are able to use case-sensitive tag names in it. We are also able to use `/>` to close a tag.

If you are authoring your templates directly in a DOM (e.g. as the content of a native `<template>` element), the template will be subject to the browser's native HTML parsing behavior. In such cases, you will need to use `kebab-case` and explicit closing tags for components:

template

    <!-- if this template is written in the DOM -->
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>

See [DOM template parsing caveats](#dom-template-parsing-caveats) for more details.

Passing Props [​](#passing-props)
---------------------------------

If we are building a blog, we will likely need a component representing a blog post. We want all the blog posts to share the same visual layout, but with different content. Such a component won't be useful unless you can pass data to it, such as the title and content of the specific post we want to display. That's where props come in.

Props are custom attributes you can register on a component. To pass a title to our blog post component, we must declare it in the list of props this component accepts, using the [`props`](/api/options-state.html#props) option[`defineProps`](/api/sfc-script-setup.html#defineprops-defineemits) macro:

vue

    <!-- BlogPost.vue -->
    <script>
    export default {
      props: ['title']
    }
    </script>
    
    <template>
      <h4>{{ title }}</h4>
    </template>

When a value is passed to a prop attribute, it becomes a property on that component instance. The value of that property is accessible within the template and on the component's `this` context, just like any other component property.

vue

    <!-- BlogPost.vue -->
    <script setup>
    defineProps(['title'])
    </script>
    
    <template>
      <h4>{{ title }}</h4>
    </template>

`defineProps` is a compile-time macro that is only available inside `<script setup>` and does not need to be explicitly imported. Declared props are automatically exposed to the template. `defineProps` also returns an object that contains all the props passed to the component, so that we can access them in JavaScript if needed:

js

    const props = defineProps(['title'])
    console.log(props.title)

See also: [Typing Component Props](/guide/typescript/composition-api.html#typing-component-props)

If you are not using `<script setup>`, props should be declared using the `props` option, and the props object will be passed to `setup()` as the first argument:

js

    export default {
      props: ['title'],
      setup(props) {
        console.log(props.title)
      }
    }

A component can have as many props as you like and, by default, any value can be passed to any prop.

Once a prop is registered, you can pass data to it as a custom attribute, like this:

template

    <BlogPost title="My journey with Vue" />
    <BlogPost title="Blogging with Vue" />
    <BlogPost title="Why Vue is so fun" />

In a typical app, however, you'll likely have an array of posts in your parent component:

js

    export default {
      // ...
      data() {
        return {
          posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
          ]
        }
      }
    }

js

    const posts = ref([
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ])

Then want to render a component for each one, using `v-for`:

template

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
     />

[Try it in the Playground](https://play.vuejs.org/#eNp9UU1rhDAU/CtDLrawVfpxklRo74We2kPtQdaoaTUJ8bmtiP+9ia6uC2VBgjOZeXnz3sCejAkPnWAx4+3eSkNJqmRjtCU817p81S2hsLpBEEYL4Q1BqoBUid9Jmosi62rC4Nm9dn4lFLXxTGAt5dG482eeUXZ1vdxbQZ1VCwKM0zr3x4KBATKPcbsDSapFjOClx5d2JtHjR1KFN9fTsfbWcXdy+CZKqcqL+vuT/r3qvQqyRatRdMrpF/nn/DNhd7iPR+v8HCDRmDoj4RHxbfyUDjeFto8p8yEh1Rw2ZV4JxN+iP96FMvest8RTTws/gdmQ8HUr7ikere+yHduu62y//y3NWG38xIOpeODyXcoE8OohGYZ5VhhHHjl83sD4B3XgyGI=)

[Try it in the Playground](https://play.vuejs.org/#eNp9kU9PhDAUxL/KpBfWBCH+OZEuid5N9qSHrQezFKhC27RlDSF8d1tYQBP1+N78OpN5HciD1sm54yQj1J6M0A6Wu07nTIpWK+MwwPASI0qjWkQejVbpsVHVQVl30ZJ0WQRHjwFMnpT0gPZLi32w2h2DMEAUGW5iOOEaniF66vGuOiN5j0/hajx7B4zxxt5ubIiphKz+IO828qXugw5hYRXKTnqSydcrJmk61/VF/eB4q5s3x8Pk6FJjauDO16Uye0ZCBwg5d2EkkED2wfuLlogibMOTbMpf9tMwP8jpeiMfRdM1l8Tk+/F++Y6Cl0Lyg1Ha7o7R5Bn9WwSg9X0+DPMxMI409fPP1PELlVmwdQ==)

Notice how `v-bind` is used to pass dynamic prop values. This is especially useful when you don't know the exact content you're going to render ahead of time.

That's all you need to know about props for now, but once you've finished reading this page and feel comfortable with its content, we recommend coming back later to read the full guide on [Props](/guide/components/props.html).

Listening to Events [​](#listening-to-events)
---------------------------------------------

As we develop our `<BlogPost>` component, some features may require communicating back up to the parent. For example, we may decide to include an accessibility feature to enlarge the text of blog posts, while leaving the rest of the page at its default size.

In the parent, we can support this feature by adding a `postFontSize` data propertyref:

js

    data() {
      return {
        posts: [
          /* ... */
        ],
        postFontSize: 1
      }
    }

js

    const posts = ref([
      /* ... */
    ])
    
    const postFontSize = ref(1)

Which can be used in the template to control the font size of all blog posts:

template

    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
       />
    </div>

Now let's add a button to the `<BlogPost>` component's template:

vue

    <!-- BlogPost.vue, omitting <script> -->
    <template>
      <div class="blog-post">
        <h4>{{ title }}</h4>
        <button>Enlarge text</button>
      </div>
    </template>

The button doesn't do anything yet - we want clicking the button to communicate to the parent that it should enlarge the text of all posts. To solve this problem, components provide a custom events system. The parent can choose to listen to any event on the child component instance with `v-on` or `@`, just as we would with a native DOM event:

template

    <BlogPost
      ...
      @enlarge-text="postFontSize += 0.1"
     />

Then the child component can emit an event on itself by calling the built-in [**`$emit`** method](/api/component-instance.html#emit), passing the name of the event:

vue

    <!-- BlogPost.vue, omitting <script> -->
    <template>
      <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
      </div>
    </template>

Thanks to the `@enlarge-text="postFontSize += 0.1"` listener, the parent will receive the event and update the value of `postFontSize`.

[Try it in the Playground](https://play.vuejs.org/#eNqNUsFOg0AQ/ZUJMaGNbbHqidCmmujNxMRED9IDhYWuhV0CQy0S/t1ZYIEmaiRkw8y8N/vmMZVxl6aLY8EM23ByP+Mprl3Bk1RmCPexjJ5ljhBmMgFzYemEIpiuAHAFOzXQgIVeESNUKutL4gsmMLfbBPStVFTP1Bl46E2mup4xLDKhI4CUsMR+1zFABTywYTkD5BgzG8ynEj4kkVgJnxz38Eqaut5jxvXAUCIiLqI/8TcD/m1fKhTwHHIJYSEIr+HbnqikPkqBL/yLSMs23eDooNexel8pQJaksYeMIgAn4EewcyxjtnKNCsK+zbgpXILJEnW30bCIN7ZTPcd5KDNqoWjARWufa+iyfWBlV13wYJRvJtWVJhiKGyZiL4vYHNkJO8wgaQVXi6UGr51+Ndq5LBqMvhyrH9eYGePtOVu3n3YozWSqFsBsVJmt3SzhzVaYY2nm9l82+7GX5zTGjlTM1SyNmy5SeX+7rqr2r0NdOxbFXWVXIEoBGz/m/oHIF0rB5Pz6KTV6aBOgEo7Vsn51ov4GgAAf2A==)

[Try it in the Playground](https://play.vuejs.org/#eNp1Uk1PwkAQ/SuTxqQYgYp6ahaiJngzITHRA/UAZQor7W7TnaK16X93th8UEuHEvPdm5s3bls5Tmo4POTq+I0yYyZTAIOXpLFAySXVGUEKGEVQQZToBl6XukXqO9XahDbXc2OsAO5FlAIEKtWJByqCBqR01WFqiBLnxYTIEkhSjD+5rAV86zxQW8C1pB+88Aaphr73rtXbNVqrtBeV9r/zYFZYHacBoiHLFykB9Xgfq1NmLVvQmf7E1OGFaeE0anAMXhEkarwhtRWIjD+AbKmKcBk4JUdvtn8+6ARcTu87hLuCf6NJpSoDDKNIZj7BtIFUTUuB0tL/HomXHcnOC18d1TF305COqeJVtcUT4Q62mtzSF2/GkE8/E8b1qh8Ljw/if8I7nOkPn9En/+Ug2GEmFi0ynZrB0azOujbfB54kki5+aqumL8bING28Yr4xh+2vePrI39CnuHmZl2TwwVJXwuG6ZdU6kFTyGsQz33HyFvH5wvvyaB80bACwgvKbrYgLVH979DQc=)

We can optionally declare emitted events using the [`emits`](/api/options-state.html#emits) option[`defineEmits`](/api/sfc-script-setup.html#defineprops-defineemits) macro:

vue

    <!-- BlogPost.vue -->
    <script>
    export default {
      props: ['title'],
      emits: ['enlarge-text']
    }
    </script>

vue

    <!-- BlogPost.vue -->
    <script setup>
    defineProps(['title'])
    defineEmits(['enlarge-text'])
    </script>

This documents all the events that a component emits and optionally [validates them](/guide/components/events.html#events-validation). It also allows Vue to avoid implicitly applying them as native listeners to the child component's root element.

Similar to `defineProps`, `defineEmits` is only usable in `<script setup>` and doesn't need to be imported. It returns an `emit` function that is equivalent to the `$emit` method. It can be used to emit events in the `<script setup>` section of a component, where `$emit` isn't directly accessible:

vue

    <script setup>
    const emit = defineEmits(['enlarge-text'])
    
    emit('enlarge-text')
    </script>

See also: [Typing Component Emits](/guide/typescript/composition-api.html#typing-component-emits)

If you are not using `<script setup>`, you can declare emitted events using the `emits` option. You can access the `emit` function as a property of the setup context (passed to `setup()` as the second argument):

js

    export default {
      emits: ['enlarge-text'],
      setup(props, ctx) {
        ctx.emit('enlarge-text')
      }
    }

That's all you need to know about custom component events for now, but once you've finished reading this page and feel comfortable with its content, we recommend coming back later to read the full guide on [Custom Events](/guide/components/events.html).

Content Distribution with Slots [​](#content-distribution-with-slots)
---------------------------------------------------------------------

Just like with HTML elements, it's often useful to be able to pass content to a component, like this:

template

    <AlertBox>
      Something bad happened.
    </AlertBox>

Which might render something like:

This is an Error for Demo Purposes

Something bad happened.

This can be achieved using Vue's custom `<slot>` element:

vue

    <template>
      <div class="alert-box">
        <strong>This is an Error for Demo Purposes</strong>
        <slot />
      </div>
    </template>
    
    <style scoped>
    .alert-box {
      /* ... */
    }
    </style>

As you'll see above, we use the `<slot>` as a placeholder where we want the content to go – and that's it. We're done!

[Try it in the Playground](https://play.vuejs.org/#eNpVUcFOwzAM/RUTDruwFhCaUCmThsQXcO0lbbKtIo0jx52Kpv07TreWouTynl+en52z2oWQnXqrClXGhtrA28q3XUBi2DlL/IED7Ak7WGX5RKQHq8oDVN4Oo9TYve4dwzmxDcp7bz3HAs5/LpfKyy3zuY0Atl1wmm1CXE5SQeLNX9hZPrb+ALU2cNQhWG9NNkrnLKIt89lGPahlyDTVogVAadoTNE7H+F4pnZTrGodKjUUpRyb0h+0nEdKdRL3CW7GmfNY5ZLiiMhfP/ynG0SL/OAuxwWCNMNncbVqSQyrgfrPZvCVcIxkrxFMYIKJrDZA1i8qatGl72ehLGEY6aGNkNwU8P96YWjffB8Lem/Xkvn9NR6qy+fRd14FSgopvmtQmzTT9Toq9VZdfIpa5jQ==)

[Try it in the Playground](https://play.vuejs.org/#eNpVUEtOwzAQvcpgFt3QBBCqUAiRisQJ2GbjxG4a4Xis8aQKqnp37PyUyqv3mZn3fBVH55JLr0Umcl9T6xi85t4VpW07h8RwNJr4Cwc4EXawS9KFiGO70ubpNBcmAmDdOSNZR8T5Yg0IoOQf7DSfW9tAJRWcpXPaapWM1nVt8ObpukY8ie29GHNzAiBX7QVqI73/LIWMzn2FQylGMcieCW1TfBMhPYSoE5zFitLVZ5BhQnkadt6nGKt5/jMafI1Oq8Ak6zW4xrEaDVIGj4fD4SPiCknpQLy4ATyaVgFptVH2JFXb+wze3DDSTioV/iaD1+eZqWT92xD2Vu2X7af3+IJ6G7/UToVigpJnTzwTO42eWDnELsTtH/wUqH4=)

That's all you need to know about slots for now, but once you've finished reading this page and feel comfortable with its content, we recommend coming back later to read the full guide on [Slots](/guide/components/slots.html).

Dynamic Components [​](#dynamic-components)
-------------------------------------------

Sometimes, it's useful to dynamically switch between components, like in a tabbed interface:

[Open example in the Playground](https://play.vuejs.org/#eNqNVE2PmzAQ/Ssj9kArLSHbrXpwk1X31mMPvS17cIxJrICNbJMmivLfO/7AEG2jRiDkefP85sNmztlr3y8OA89ItjJMi96+VFJ0vdIWfqqOQ6NVB/midIYj5sn9Sxlrkt9b14RXzXbiMElEO5IAKsmPnljzhg6thbNDmcLdkktrSADAJ/IYlj5MXEc9Z1w8VFNLP30ed2luBy1HC4UHrVH2N90QyJ1kHnUALN1gtLeIQu6juEUMkb8H5sXHqiS+qzK1Cw3Lu76llqMFsKrFAVhLjVlXWc07VWUeR89msFbhhhAWDkWjNJIwPgjp06iy5CV7fgrOOTgKv+XoKIIgpnoGyiymSmZ1wnq9dqJweZ8p/GCtYHtUmBMdLXFitgDnc9ju68b0yxDO1WzRTEcFRLiUJsEqSw3wwi+rMpFDj0psEq5W5ax1aBp7at1y4foWzq5R0hYN7UR7ImCoNIXhWjTfnW+jdM01gaf+CEa1ooYHzvnMVWhaiwEP90t/9HBP61rILQJL3POMHw93VG+FLKzqUYx3c2yjsOaOwNeRO2B8zKHlzBKQWJNH1YHrplV/iiMBOliFILYNK5mOKdSTMviGCTyNojFdTKBoeWNT3s8f/Vpsd7cIV61gjHkXnotR6OqVkJbrQKdsv9VqkDWBh2bpnn8VXaDcHPexE4wFzsojO9eDUOSVPF+65wN/EW7sHRsi5XaFqaexn+EH9Xcpe8zG2eWG3O0/NVzUaeJMk+jGhUXlNPXulw5j8w7t2bi8X32cuf/Vv/wF/SL98A==)

[Open example in the Playground](https://play.vuejs.org/#eNqNVMGOmzAQ/ZURe2BXCiHbrXpwk1X31mMPvS1V5RiTWAEb2SZNhPLvHdvggLZRE6TIM/P8/N5gpk/e2nZ57HhCkrVhWrQWDLdd+1pI0bRKW/iuGg6VVg2ky9wFDp7G8g9lrIl1H80Bb5rtxfFKMcRzUA+aV3AZQKEEhWRKGgus05pL+5NuYeNwj6mTkT4VckRYujVY63GT17twC6/Fr4YjC3kp5DoPNtEgBpY3bU0txwhgXYojsJoasymSkjeqSHweK9vOWoUbXIC/Y1YpjaDH3wt39hMI6TUUSYSQAz8jArPT5Mj+nmIhC6zpAu1TZlEhmXndbBwpXH5NGL6xWrADMsyaMj1lkAzQ92E7mvYe8nCcM24xZApbL5ECiHCSnP73KyseGnvh6V/XedwS2pVjv3C1ziddxNDYc+2WS9fC8E4qJW1W0UbUZwKGSpMZrkX11dW2SpdcE3huT2BULUp44JxPSpmmpegMgU/tyadbWpZC7jCxwj0v+OfTDdU7ITOrWiTjzTS3Vei8IfB5xHZ4PmqoObMEJHryWXXkuqrVn+xEgHZWYRKbh06uLyv4iQq+oIDnkXSQiwKymlc26n75WNdit78FmLWCMeZL+GKMwlKrhLRcBzhlh51WnSwJPFQr9/zLdIZ007w/O6bR4MQe2bseBJMzer5yzwf8MtzbOzYMkNsOY0+HfoZv1d+lZJGMg8fNqdsfbbio4b77uRVv7I0Li8xxZN1PHWbeHdyTWXc/+zgw/8t/+QsROe9h)

The above is made possible by Vue's `<component>` element with the special `is` attribute:

template

    <!-- Component changes when currentTab changes -->
    <component :is="currentTab"></component>

template

    <!-- Component changes when currentTab changes -->
    <component :is="tabs[currentTab]"></component>

In the example above, the value passed to `:is` can contain either:

*   the name string of a registered component, OR
*   the actual imported component object

You can also use the `is` attribute to create regular HTML elements.

When switching between multiple components with `<component :is="...">`, a component will be unmounted when it is switched away from. We can force the inactive components to stay "alive" with the built-in [`<KeepAlive>` component](/guide/built-ins/keep-alive.html).

DOM Template Parsing Caveats [​](#dom-template-parsing-caveats)
---------------------------------------------------------------

If you are writing your Vue templates directly in the DOM, Vue will have to retrieve the template string from the DOM. This leads to some caveats due to browsers' native HTML parsing behavior.

TIP

It should be noted that the limitations discussed below only apply if you are writing your templates directly in the DOM. They do NOT apply if you are using string templates from the following sources:

*   Single-File Components
*   Inlined template strings (e.g. `template: '...'`)
*   `<script type="text/x-template">`

### Case Insensitivity [​](#case-insensitivity)

HTML tags and attribute names are case-insensitive, so browsers will interpret any uppercase characters as lowercase. That means when you’re using in-DOM templates, PascalCase component names and camelCased prop names or `v-on` event names all need to use their kebab-cased (hyphen-delimited) equivalents:

js

    // camelCase in JavaScript
    const BlogPost = {
      props: ['postTitle'],
      emits: ['updatePost'],
      template: `
        <h3>{{ postTitle }}</h3>
      `
    }

template

    <!-- kebab-case in HTML -->
    <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

### Self Closing Tags [​](#self-closing-tags)

We have been using self-closing tags for components in previous code samples:

template

    <MyComponent />

This is because Vue's template parser respects `/>` as an indication to end any tag, regardless of its type.

In DOM templates, however, we must always include explicit closing tags:

template

    <my-component></my-component>

This is because the HTML spec only allows [a few specific elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) to omit closing tags, the most common being `<input>` and `<img>`. For all other elements, if you omit the closing tag, the native HTML parser will think you never terminated the opening tag. For example, the following snippet:

template

    <my-component /> <!-- we intend to close the tag here... -->
    <span>hello</span>

will be parsed as:

template

    <my-component>
      <span>hello</span>
    </my-component> <!-- but the browser will close it here. -->

### Element Placement Restrictions [​](#element-placement-restrictions)

Some HTML elements, such as `<ul>`, `<ol>`, `<table>` and `<select>` have restrictions on what elements can appear inside them, and some elements such as `<li>`, `<tr>`, and `<option>` can only appear inside certain other elements.

This will lead to issues when using components with elements that have such restrictions. For example:

template

    <table>
      <blog-post-row></blog-post-row>
    </table>

The custom component `<blog-post-row>` will be hoisted out as invalid content, causing errors in the eventual rendered output. We can use the special [`is` attribute](/api/built-in-special-attributes.html#is) as a workaround:

template

    <table>
      <tr is="vue:blog-post-row"></tr>
    </table>

TIP

When used on native HTML elements, the value of `is` must be prefixed with `vue:` in order to be interpreted as a Vue component. This is required to avoid confusion with native [customized built-in elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example).

That's all you need to know about DOM template parsing caveats for now - and actually, the end of Vue's _Essentials_. Congratulations! There's still more to learn, but first, we recommend taking a break to play with Vue yourself - build something fun, or check out some of the [Examples](/examples/) if you haven't already.

Once you feel comfortable with the knowledge you've just digested, move on with the guide to learn more about components in depth.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/essentials/component-basics.md)
Component Registration [​](#component-registration)
===================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-3-global-vs-local-vue-components?friend=vuejs "Free Vue.js Component Registration Lesson")

A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is encountered in a template. There are two ways to register components: global and local.

Global Registration [​](#global-registration)
---------------------------------------------

We can make components available globally in the current [Vue application](/guide/essentials/application.html) using the `app.component()` method:

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.component(
      // the registered name
      'MyComponent',
      // the implementation
      {
        /* ... */
      }
    )

If using SFCs, you will be registering the imported `.vue` files:

js

    import MyComponent from './App.vue'
    
    app.component('MyComponent', MyComponent)

The `app.component()` method can be chained:

js

    app
      .component('ComponentA', ComponentA)
      .component('ComponentB', ComponentB)
      .component('ComponentC', ComponentC)

Globally registered components can be used in the template of any component within this application:

template

    <!-- this will work in any component inside the app -->
    <ComponentA/>
    <ComponentB/>
    <ComponentC/>

This even applies to all subcomponents, meaning all three of these components will also be available _inside each other_.

Local Registration [​](#local-registration)
-------------------------------------------

While convenient, global registration has a few drawbacks:

1.  Global registration prevents build systems from removing unused components (a.k.a "tree-shaking"). If you globally register a component but end up not using it anywhere in your app, it will still be included in the final bundle.
    
2.  Global registration makes dependency relationships less explicit in large applications. It makes it difficult to locate a child component's implementation from a parent component using it. This can affect long-term maintainability similar to using too many global variables.
    

Local registration scopes the availability of the registered components to the current component only. It makes the dependency relationship more explicit, and is more tree-shaking friendly.

When using SFC with `<script setup>`, imported components can be locally used without registration:

vue

    <script setup>
    import ComponentA from './ComponentA.vue'
    </script>
    
    <template>
      <ComponentA />
    </template>

In non-`<script setup>`, you will need to use the `components` option:

js

    import ComponentA from './ComponentA.js'
    
    export default {
      components: {
        ComponentA
      },
      setup() {
        // ...
      }
    }

Local registration is done using the `components` option:

vue

    <script>
    import ComponentA from './ComponentA.vue'
    
    export default {
      components: {
        ComponentA
      }
    }
    </script>
    
    <template>
      <ComponentA />
    </template>

For each property in the `components` object, the key will be the registered name of the component, while the value will contain the implementation of the component. The above example is using the ES2015 property shorthand and is equivalent to:

js

    export default {
      components: {
        ComponentA: ComponentA
      }
      // ...
    }

Note that **locally registered components are _not_ also available in descendant components**. In this case, `ComponentA` will be made available to the current component only, not any of its child or descendant components.

Component Name Casing [​](#component-name-casing)
-------------------------------------------------

Throughout the guide, we are using PascalCase names when registering components. This is because:

1.  PascalCase names are valid JavaScript identifiers. This makes it easier to import and register components in JavaScript. It also helps IDEs with auto-completion.
    
2.  `<PascalCase />` makes it more obvious that this is a Vue component instead of a native HTML element in templates. It also differentiates Vue components from custom elements (web components).
    

This is the recommended style when working with SFC or string templates. However, as discussed in [DOM Template Parsing Caveats](/guide/essentials/component-basics.html#dom-template-parsing-caveats), PascalCase tags are not usable in DOM templates.

Luckily, Vue supports resolving kebab-case tags to components registered using PascalCase. This means a component registered as `MyComponent` can be referenced in the template via both `<MyComponent>` and `<my-component>`. This allows us to use the same JavaScript component registration code regardless of template source.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/registration.md)
Props [​](#props)
=================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-3-reusable-components-with-props?friend=vuejs "Free Vue.js Props Lesson")

Props Declaration [​](#props-declaration)
-----------------------------------------

Vue components require explicit props declaration so that Vue knows what external props passed to the component should be treated as fallthrough attributes (which will be discussed in [its dedicated section](/guide/components/attrs.html)).

In SFCs using `<script setup>`, props can be declared using the `defineProps()` macro:

vue

    <script setup>
    const props = defineProps(['foo'])
    
    console.log(props.foo)
    </script>

In non-`<script setup>` components, props are declared using the [`props`](/api/options-state.html#props) option:

js

    export default {
      props: ['foo'],
      setup(props) {
        // setup() receives props as the first argument.
        console.log(props.foo)
      }
    }

Notice the argument passed to `defineProps()` is the same as the value provided to the `props` options: the same props options API is shared between the two declaration styles.

Props are declared using the [`props`](/api/options-state.html#props) option:

js

    export default {
      props: ['foo'],
      created() {
        // props are exposed on `this`
        console.log(this.foo)
      }
    }

In addition to declaring props using an array of strings, we can also use the object syntax:

js

    export default {
      props: {
        title: String,
        likes: Number
      }
    }

js

    // in <script setup>
    defineProps({
      title: String,
      likes: Number
    })

js

    // in non-<script setup>
    export default {
      props: {
        title: String,
        likes: Number
      }
    }

For each property in the object declaration syntax, the key is the name of the prop, while the value should be the constructor function of the expected type.

This not only documents your component, but will also warn other developers using your component in the browser console if they pass the wrong type. We will discuss more details about [prop validation](#prop-validation) further down this page.

See also: [Typing Component Props](/guide/typescript/options-api.html#typing-component-props)

If you are using TypeScript with `<script setup>`, it's also possible to declare props using pure type annotations:

vue

    <script setup lang="ts">
    defineProps<{
      title?: string
      likes?: number
    }>()
    </script>

More details: [Typing Component Props](/guide/typescript/composition-api.html#typing-component-props)

Prop Passing Details [​](#prop-passing-details)
-----------------------------------------------

### Prop Name Casing [​](#prop-name-casing)

We declare long prop names using camelCase because this avoids having to use quotes when using them as property keys, and allows us to reference them directly in template expressions because they are valid JavaScript identifiers:

js

    defineProps({
      greetingMessage: String
    })

js

    export default {
      props: {
        greetingMessage: String
      }
    }

template

    <span>{{ greetingMessage }}</span>

Technically, you can also use camelCase when passing props to a child component (except in [DOM templates](/guide/essentials/component-basics.html#dom-template-parsing-caveats)). However, the convention is using kebab-case in all cases to align with HTML attributes:

template

    <MyComponent greeting-message="hello" />

We use [PascalCase for component tags](/guide/components/registration.html#component-name-casing) when possible because it improves template readability by differentiating Vue components from native elements. However, there isn't as much practical benefit in using camelCase when passing props, so we choose to follow each language's conventions.

### Static vs. Dynamic Props [​](#static-vs-dynamic-props)

So far, you've seen props passed as static values, like in:

template

    <BlogPost title="My journey with Vue" />

You've also seen props assigned dynamically with `v-bind` or its `:` shortcut, such as in:

template

    <!-- Dynamically assign the value of a variable -->
    <BlogPost :title="post.title" />
    
    <!-- Dynamically assign the value of a complex expression -->
    <BlogPost :title="post.title + ' by ' + post.author.name" />

### Passing Different Value Types [​](#passing-different-value-types)

In the two examples above, we happen to pass string values, but _any_ type of value can be passed to a prop.

#### Number [​](#number)

template

    <!-- Even though `42` is static, we need v-bind to tell Vue that -->
    <!-- this is a JavaScript expression rather than a string.       -->
    <BlogPost :likes="42" />
    
    <!-- Dynamically assign to the value of a variable. -->
    <BlogPost :likes="post.likes" />

#### Boolean [​](#boolean)

template

    <!-- Including the prop with no value will imply `true`. -->
    <BlogPost is-published />
    
    <!-- Even though `false` is static, we need v-bind to tell Vue that -->
    <!-- this is a JavaScript expression rather than a string.          -->
    <BlogPost :is-published="false" />
    
    <!-- Dynamically assign to the value of a variable. -->
    <BlogPost :is-published="post.isPublished" />

#### Array [​](#array)

template

    <!-- Even though the array is static, we need v-bind to tell Vue that -->
    <!-- this is a JavaScript expression rather than a string.            -->
    <BlogPost :comment-ids="[234, 266, 273]" />
    
    <!-- Dynamically assign to the value of a variable. -->
    <BlogPost :comment-ids="post.commentIds" />

#### Object [​](#object)

template

    <!-- Even though the object is static, we need v-bind to tell Vue that -->
    <!-- this is a JavaScript expression rather than a string.             -->
    <BlogPost
      :author="{
        name: 'Veronica',
        company: 'Veridian Dynamics'
      }"
     />
    
    <!-- Dynamically assign to the value of a variable. -->
    <BlogPost :author="post.author" />

### Binding Multiple Properties Using an Object [​](#binding-multiple-properties-using-an-object)

If you want to pass all the properties of an object as props, you can use [`v-bind` without an argument](/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes) (`v-bind` instead of `:prop-name`). For example, given a `post` object:

js

    export default {
      data() {
        return {
          post: {
            id: 1,
            title: 'My Journey with Vue'
          }
        }
      }
    }

js

    const post = {
      id: 1,
      title: 'My Journey with Vue'
    }

The following template:

template

    <BlogPost v-bind="post" />

Will be equivalent to:

template

    <BlogPost :id="post.id" :title="post.title" />

One-Way Data Flow [​](#one-way-data-flow)
-----------------------------------------

All props form a **one-way-down binding** between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent's state, which can make your app's data flow harder to understand.

In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should **not** attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console:

js

    const props = defineProps(['foo'])
    
    // ❌ warning, props are readonly!
    props.foo = 'bar'

js

    export default {
      props: ['foo'],
      created() {
        // ❌ warning, props are readonly!
        this.foo = 'bar'
      }
    }

There are usually two cases where it's tempting to mutate a prop:

1.  **The prop is used to pass in an initial value; the child component wants to use it as a local data property afterwards.** In this case, it's best to define a local data property that uses the prop as its initial value:
    
    js
    
        const props = defineProps(['initialCounter'])
        
        // counter only uses props.initialCounter as the initial value;
        // it is disconnected from future prop updates.
        const counter = ref(props.initialCounter)
    
    js
    
        export default {
          props: ['initialCounter'],
          data() {
            return {
              // counter only uses this.initialCounter as the initial value;
              // it is disconnected from future prop updates.
              counter: this.initialCounter
            }
          }
        }
    
2.  **The prop is passed in as a raw value that needs to be transformed.** In this case, it's best to define a computed property using the prop's value:
    
    js
    
        const props = defineProps(['size'])
        
        // computed property that auto-updates when the prop changes
        const normalizedSize = computed(() => props.size.trim().toLowerCase())
    
    js
    
        export default {
          props: ['size'],
          computed: {
            // computed property that auto-updates when the prop changes
            normalizedSize() {
              return this.size.trim().toLowerCase()
            }
          }
        }
    

### Mutating Object / Array Props [​](#mutating-object-array-props)

When objects and arrays are passed as props, while the child component cannot mutate the prop binding, it **will** be able to mutate the object or array's nested properties. This is because in JavaScript objects and arrays are passed by reference, and it is unreasonably expensive for Vue to prevent such mutations.

The main drawback of such mutations is that it allows the child component to affect parent state in a way that isn't obvious to the parent component, potentially making it more difficult to reason about the data flow in the future. As a best practice, you should avoid such mutations unless the parent and child are tightly coupled by design. In most cases, the child should [emit an event](/guide/components/events.html) to let the parent perform the mutation.

Prop Validation [​](#prop-validation)
-------------------------------------

Components can specify requirements for their props, such as the types you've already seen. If a requirement is not met, Vue will warn you in the browser's JavaScript console. This is especially useful when developing a component that is intended to be used by others.

To specify prop validations, you can provide an object with validation requirements to the `defineProps()` macro`props` option, instead of an array of strings. For example:

js

    defineProps({
      // Basic type check
      //  (`null` and `undefined` values will allow any type)
      propA: Number,
      // Multiple possible types
      propB: [String, Number],
      // Required string
      propC: {
        type: String,
        required: true
      },
      // Number with a default value
      propD: {
        type: Number,
        default: 100
      },
      // Object with a default value
      propE: {
        type: Object,
        // Object or array defaults must be returned from
        // a factory function. The function receives the raw
        // props received by the component as the argument.
        default(rawProps) {
          return { message: 'hello' }
        }
      },
      // Custom validator function
      propF: {
        validator(value) {
          // The value must match one of these strings
          return ['success', 'warning', 'danger'].includes(value)
        }
      },
      // Function with a default value
      propG: {
        type: Function,
        // Unlike object or array default, this is not a factory 
        // function - this is a function to serve as a default value
        default() {
          return 'Default function'
        }
      }
    })

TIP

Code inside the `defineProps()` argument **cannot access other variables declared in `<script setup>`**, because the entire expression is moved to an outer function scope when compiled.

js

    export default {
      props: {
        // Basic type check
        //  (`null` and `undefined` values will allow any type)
        propA: Number,
        // Multiple possible types
        propB: [String, Number],
        // Required string
        propC: {
          type: String,
          required: true
        },
        // Number with a default value
        propD: {
          type: Number,
          default: 100
        },
        // Object with a default value
        propE: {
          type: Object,
          // Object or array defaults must be returned from
          // a factory function. The function receives the raw
          // props received by the component as the argument.
          default(rawProps) {
            return { message: 'hello' }
          }
        },
        // Custom validator function
        propF: {
          validator(value) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger'].includes(value)
          }
        },
        // Function with a default value
        propG: {
          type: Function,
          // Unlike object or array default, this is not a factory 
          // function - this is a function to serve as a default value
          default() {
            return 'Default function'
          }
        }
      }
    }

Additional details:

*   All props are optional by default, unless `required: true` is specified.
    
*   An absent optional prop other than `Boolean` will have `undefined` value.
    
*   The `Boolean` absent props will be cast to `false`. You can change this by setting a `default` for it — i.e.: `default: undefined` to behave as a non-Boolean prop.
    
*   If a `default` value is specified, it will be used if the resolved prop value is `undefined` - this includes both when the prop is absent, or an explicit `undefined` value is passed.
    

When prop validation fails, Vue will produce a console warning (if using the development build).

If using [Type-based props declarations](/api/sfc-script-setup.html#typescript-only-features) , Vue will try its best to compile the type annotations into equivalent runtime prop declarations. For example, `defineProps<{ msg: string }>` will be compiled into `{ msg: { type: String, required: true }}`.

Note

Note that props are validated **before** a component instance is created, so instance properties (e.g. `data`, `computed`, etc.) will not be available inside `default` or `validator` functions.

### Runtime Type Checks [​](#runtime-type-checks)

The `type` can be one of the following native constructors:

*   `String`
*   `Number`
*   `Boolean`
*   `Array`
*   `Object`
*   `Date`
*   `Function`
*   `Symbol`

In addition, `type` can also be a custom class or constructor function and the assertion will be made with an `instanceof` check. For example, given the following class:

js

    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
      }
    }

You could use it as a prop's type:

js

    defineProps({
      author: Person
    })

js

    export default {
      props: {
        author: Person
      }
    }

Vue will use `instanceof Person` to validate whether the value of the `author` prop is indeed an instance of the `Person` class.

Boolean Casting [​](#boolean-casting)
-------------------------------------

Props with `Boolean` type have special casting rules to mimic the behavior of native boolean attributes. Given a `<MyComponent>` with the following declaration:

js

    defineProps({
      disabled: Boolean
    })

js

    export default {
      props: {
        disabled: Boolean
      }
    }

The component can be used like this:

template

    <!-- equivalent of passing :disabled="true" -->
    <MyComponent disabled />
    
    <!-- equivalent of passing :disabled="false" -->
    <MyComponent />

When a prop is declared to allow multiple types, e.g.

js

    defineProps({
      disabled: [Boolean, Number]
    })

js

    export default {
      props: {
        disabled: [Boolean, Number]
      }
    }

The casting rules for `Boolean` will apply regardless of type appearance order.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/props.md)
Component Events [​](#component-events)
=======================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/defining-custom-events-emits?friend=vuejs "Free Vue.js Lesson on Defining Custom Events")

Emitting and Listening to Events [​](#emitting-and-listening-to-events)
-----------------------------------------------------------------------

A component can emit custom events directly in template expressions (e.g. in a `v-on` handler) using the built-in `$emit` method:

template

    <!-- MyComponent -->
    <button @click="$emit('someEvent')">click me</button>

The `$emit()` method is also available on the component instance as `this.$emit()`:

js

    export default {
      methods: {
        submit() {
          this.$emit('someEvent')
        }
      }
    }

The parent can then listen to it using `v-on`:

template

    <MyComponent @some-event="callback" />

The `.once` modifier is also supported on component event listeners:

template

    <MyComponent @some-event.once="callback" />

Like components and props, event names provide an automatic case transformation. Notice we emitted a camelCase event, but can listen for it using a kebab-cased listener in the parent. As with [props casing](/guide/components/props.html#prop-name-casing), we recommend using kebab-cased event listeners in templates.

TIP

Unlike native DOM events, component emitted events do **not** bubble. You can only listen to the events emitted by a direct child component. If there is a need to communicate between sibling or deeply nested components, use an external event bus or a [global state management solution](/guide/scaling-up/state-management.html).

Event Arguments [​](#event-arguments)
-------------------------------------

It's sometimes useful to emit a specific value with an event. For example, we may want the `<BlogPost>` component to be in charge of how much to enlarge the text by. In those cases, we can pass extra arguments to `$emit` to provide this value:

template

    <button @click="$emit('increaseBy', 1)">
      Increase by 1
    </button>

Then, when we listen to the event in the parent, we can use an inline arrow function as the listener, which allows us to access the event argument:

template

    <MyButton @increase-by="(n) => count += n" />

Or, if the event handler is a method:

template

    <MyButton @increase-by="increaseCount" />

Then the value will be passed as the first parameter of that method:

js

    methods: {
      increaseCount(n) {
        this.count += n
      }
    }

js

    function increaseCount(n) {
      count.value += n
    }

TIP

All extra arguments passed to `$emit()` after the event name will be forwarded to the listener. For example, with `$emit('foo', 1, 2, 3)` the listener function will receive three arguments.

Declaring Emitted Events [​](#declaring-emitted-events)
-------------------------------------------------------

A component can explicitly declare the events it will emit using the [`defineEmits()`](/api/sfc-script-setup.html#defineprops-defineemits) macro[`emits`](/api/options-state.html#emits) option:

vue

    <script setup>
    defineEmits(['inFocus', 'submit'])
    </script>

The `$emit` method that we used in the `<template>` isn't accessible within the `<script setup>` section of a component, but `defineEmits()` returns an equivalent function that we can use instead:

vue

    <script setup>
    const emit = defineEmits(['inFocus', 'submit'])
    
    function buttonClick() {
      emit('submit')
    }
    </script>

The `defineEmits()` macro **cannot** be used inside a function, it must be placed directly within `<script setup>`, as in the example above.

If you're using an explicit `setup` function instead of `<script setup>`, events should be declared using the [`emits`](/api/options-state.html#emits) option, and the `emit` function is exposed on the `setup()` context:

js

    export default {
      emits: ['inFocus', 'submit'],
      setup(props, ctx) {
        ctx.emit('submit')
      }
    }

As with other properties of the `setup()` context, `emit` can safely be destructured:

js

    export default {
      emits: ['inFocus', 'submit'],
      setup(props, { emit }) {
        emit('submit')
      }
    }

js

    export default {
      emits: ['inFocus', 'submit']
    }

The `emits` option also supports an object syntax, which allows us to perform runtime validation of the payload of the emitted events:

vue

    <script setup>
    const emit = defineEmits({
      submit(payload) {
        // return `true` or `false` to indicate
        // validation pass / fail
      }
    })
    </script>

If you are using TypeScript with `<script setup>`, it's also possible to declare emitted events using pure type annotations:

vue

    <script setup lang="ts">
    const emit = defineEmits<{
      (e: 'change', id: number): void
      (e: 'update', value: string): void
    }>()
    </script>

More details: [Typing Component Emits](/guide/typescript/composition-api.html#typing-component-emits)

js

    export default {
      emits: {
        submit(payload) {
          // return `true` or `false` to indicate
          // validation pass / fail
        }
      }
    }

See also: [Typing Component Emits](/guide/typescript/options-api.html#typing-component-emits)

Although optional, it is recommended to define all emitted events in order to better document how a component should work. It also allows Vue to exclude known listeners from [fallthrough attributes](/guide/components/attrs.html#v-on-listener-inheritance), avoiding edge cases caused by DOM events manually dispatched by 3rd party code.

TIP

If a native event (e.g., `click`) is defined in the `emits` option, the listener will now only listen to component-emitted `click` events and no longer respond to native `click` events.

Events Validation [​](#events-validation)
-----------------------------------------

Similar to prop type validation, an emitted event can be validated if it is defined with the object syntax instead of the array syntax.

To add validation, the event is assigned a function that receives the arguments passed to the `this.$emit``emit` call and returns a boolean to indicate whether the event is valid or not.

vue

    <script setup>
    const emit = defineEmits({
      // No validation
      click: null,
    
      // Validate submit event
      submit: ({ email, password }) => {
        if (email && password) {
          return true
        } else {
          console.warn('Invalid submit event payload!')
          return false
        }
      }
    })
    
    function submitForm(email, password) {
      emit('submit', { email, password })
    }
    </script>

js

    export default {
      emits: {
        // No validation
        click: null,
    
        // Validate submit event
        submit: ({ email, password }) => {
          if (email && password) {
            return true
          } else {
            console.warn('Invalid submit event payload!')
            return false
          }
        }
      },
      methods: {
        submitForm(email, password) {
          this.$emit('submit', { email, password })
        }
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/events.md)
Component v-model [​](#component-v-model)
=========================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

`v-model` can be used on a component to implement a two-way binding.

First let's revisit how `v-model` is used on a native element:

template

    <input v-model="searchText" />

Under the hood, the template compiler expands `v-model` to the more verbose equivalent for us. So the above code does the same as the following:

template

    <input
      :value="searchText"
      @input="searchText = $event.target.value"
    />

When used on a component, `v-model` instead expands to this:

template

    <CustomInput
      :modelValue="searchText"
      @update:modelValue="newValue => searchText = newValue"
    />

For this to actually work though, the `<CustomInput>` component must do two things:

1.  Bind the `value` attribute of a native `<input>` element to the `modelValue` prop
2.  When a native `input` event is triggered, emit an `update:modelValue` custom event with the new value

Here's that in action:

vue

    <!-- CustomInput.vue -->
    <script>
    export default {
      props: ['modelValue'],
      emits: ['update:modelValue']
    }
    </script>
    
    <template>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>

vue

    <!-- CustomInput.vue -->
    <script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
    </script>
    
    <template>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>

Now `v-model` should work perfectly with this component:

template

    <CustomInput v-model="searchText" />

[Try it in the Playground](https://play.vuejs.org/#eNqFkctqwzAQRX9lEAEn4Np744aWrvoD3URdiHiSGvRCHpmC8b93JDfGKYGCkJjXvTrSJF69r8aIohHtcA69p6O0vfEuELzFgZx5tz4SXIIzUFT1JpfGCmmlxe/c3uFFRU0wSQtwdqxh0dLQwHSnNJep3ilS+8PSCxCQYrC3CMDgMKgrNlB8odaOXVJ2TgdvvNp6vSwHhMZrRcgRQLs1G5+M61A/S/ErKQXUR5immwXMWW1VEKX4g3j3Mo9QfXCeKU9FtvpQmp/lM0Oi6RP/qYieebHZNvyL0acLLODNmGYSxCogxVJ6yW1c2iWz/QOnEnY48kdUpMIVGSllD8t8zVZb+PkHqPG4iw==)

[Try it in the Playground](https://play.vuejs.org/#eNp9j81qwzAQhF9lEQE7kNp344SW0kNvPfVS9WDidSrQH9LKF+N37yoOxoSQm7QzO9/sJN68r8aEohFtPAflCSJS8idplfEuEEwQcIAZhuAMFGwtVuk9RXLm0/pEN7mqN7Ocy2YAac/ORgKDMXYXhGOOLIs/1NoVe2nbekEzlD+ExuuOkH8A7ZYxvhjXoz5KcUuSAuoTTNOaPM85bU0QB3HX58GdPQ7K4ldwPpY/xZXw3Wmu/svVFvHDKMpi8j3HNneeZ/VVBucXQDPmjVx+XZdikV6vNpZ2yKTyAecAOxzRUkVduCCfkqf7Zb9m1Pbo+R9ZkqZn)

Another way of implementing `v-model` within this component is to use a writable `computed` property with both a getter and a setter. The `get` method should return the `modelValue` property and the `set` method should emit the corresponding event:

vue

    <!-- CustomInput.vue -->
    <script>
    export default {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      computed: {
        value: {
          get() {
            return this.modelValue
          },
          set(value) {
            this.$emit('update:modelValue', value)
          }
        }
      }
    }
    </script>
    
    <template>
      <input v-model="value" />
    </template>

vue

    <!-- CustomInput.vue -->
    <script setup>
    import { computed } from 'vue'
    
    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
    
    const value = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
    })
    </script>
    
    <template>
      <input v-model="value" />
    </template>

`v-model` arguments [​](#v-model-arguments)
-------------------------------------------

By default, `v-model` on a component uses `modelValue` as the prop and `update:modelValue` as the event. We can modify these names passing an argument to `v-model`:

template

    <MyComponent v-model:title="bookTitle" />

In this case, the child component should expect a `title` prop and emit an `update:title` event to update the parent value:

vue

    <!-- MyComponent.vue -->
    <script setup>
    defineProps(['title'])
    defineEmits(['update:title'])
    </script>
    
    <template>
      <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNp9kE1rwzAMhv+KMIW00DXsGtKyMXYc7D7vEBplM8QfOHJoCfnvk+1QsjJ2svVKevRKk3h27jAGFJWoh7NXjmBACu4kjdLOeoIJPHYwQ+ethoJLi1vq7fpi+WfQ0JI+lCstcrkYQJqzNQMBKeoRjhG4LcYHbVvsofFfQUcCXhrteix20tRl9sIuOCBkvSHkCKD+fjxN04Ka57rkOOlrMwu7SlVHKdIrBZRcWpc3ntiLO7t/nKHFThl899YN248ikYpP9pj1V60o6sG1TMwDU/q/FZRxgeIPgK4uGcQLSZGlamz6sHKd1afUxOoGeeT298A9bHCMKxBfE3mTSNjl1vud5x8qNa76)

vue

    <!-- MyComponent.vue -->
    <script>
    export default {
      props: ['title'],
      emits: ['update:title']
    }
    </script>
    
    <template>
      <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNqFUNFqwzAM/BVhCm6ha9hryMrGnvcFdR9Mo26B2DGuHFJC/n2yvZakDAohtuTTne5G8eHcrg8oSlFdTr5xtFe2Ma7zBF/Xz45vFi3B2XcG5K6Y9eKYVFZZHBK8xrMOLcGoLMDphrqUMC6Ypm18rzXp9SZjATxS8PZWAVBDLZYg+xfT1diC9t/BxGEctHFtlI2wKR78468q7ttzQcgoTcgVQPXzuh/HzAnTVBVcp/58qz+lMqHelEinElAwtCrufGIrHhJYBPdfEs53jkM4yEQpj8k+miYmc5DBcRKYZeXxqZXGukDZPF1dWhQHUiK3yl63YbZ97r6nIe6uoup6KbmFFfbRCnHGyI4iwyaPPnqffgGMlsEM)

Multiple `v-model` bindings [​](#multiple-v-model-bindings)
-----------------------------------------------------------

By leveraging the ability to target a particular prop and event as we learned before with [`v-model` arguments](#v-model-arguments), we can now create multiple `v-model` bindings on a single component instance.

Each `v-model` will sync to a different prop, without the need for extra options in the component:

template

    <UserName
      v-model:first-name="first"
      v-model:last-name="last"
    />

vue

    <script setup>
    defineProps({
      firstName: String,
      lastName: String
    })
    
    defineEmits(['update:firstName', 'update:lastName'])
    </script>
    
    <template>
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
      />
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)"
      />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNqNUc1qwzAMfhVjCk6hTdg1pGWD7bLDGIydlh1Cq7SGxDaOEjaC332yU6cdFNpLsPRJ348y8idj0qEHnvOi21lpkHWAvdmWSrZGW2Qjs1Azx2qrWyZoVMzQZwf2rWrhhKVZbHhGGivVTqsOWS0tfTeeKBGv+qjEMkJNdUaeNXigyCYjZIEKhNY0FQJVjBXHh+04nvicY/QOBM4VGUFhJHrwBWPDutV7aPKwslbU35Q8FCX/P+GJ4oB/T3hGpEU2m+ArfpnxytX2UEsF71abLhk9QxDzCzn7QCvVYeW7XuGyWSpH0eP6SyuxS75Eb/akOpn302LFYi8SiO8bJ5PK9DhFxV/j0yH8zOnzoWr6+SbhbifkMSwSsgByk1zzsoABFKZY2QNgGpiW57Pdrx2z3JCeI99Svvxh7g8muf2x)

vue

    <script>
    export default {
      props: {
        firstName: String,
        lastName: String
      },
      emits: ['update:firstName', 'update:lastName']
    }
    </script>
    
    <template>
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
      />
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)"
      />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNqNkk1rg0AQhv/KIAETSJRexYYWeuqhl9JTt4clmSSC7i7rKCnif+/ObtYkELAiujPzztejQ/JqTNZ3mBRJ2e5sZWgrVNUYbQm+WrQfskE4WN1AmuXRwQmpUELh2Qv3eJBdTTAIBbDTLluhoraA4VpjXHNwL0kuV0EIYJE6q6IFcKhsSwWk7/qkUq/nq5be+aa5JztGfrmHu8t8GtoZhI2pJaGzAMrT03YYQk0YR3BnruSOZe5CXhKnC3X7TaP3WBc+ZaOc/1kk3hDJvYILRQGfQzx3Rct8GiJZJ7fA7gg/AmesNszMrUIXFpxbwCfZSh09D0Hc7tbN6sAWm4qZf6edcZgxrMHSdA3RF7PTn1l8lTIdhbXp1/CmhOeJRNHLupv4eIaXyItPdJEFD7R8NM0Ce/d/ZCTtESnzlVZXhP/vHbeZaT0tPdf59uONfx7mDVM=)

Handling `v-model` modifiers [​](#handling-v-model-modifiers)
-------------------------------------------------------------

When we were learning about form input bindings, we saw that `v-model` has [built-in modifiers](/guide/essentials/forms.html#modifiers) - `.trim`, `.number` and `.lazy`. In some cases, you might also want the `v-model` on your custom input component to support custom modifiers.

Let's create an example custom modifier, `capitalize`, that capitalizes the first letter of the string provided by the `v-model` binding:

template

    <MyComponent v-model.capitalize="myText" />

Modifiers added to a component `v-model` will be provided to the component via the `modelModifiers` prop. In the below example, we have created a component that contains a `modelModifiers` prop that defaults to an empty object:

vue

    <script setup>
    const props = defineProps({
      modelValue: String,
      modelModifiers: { default: () => ({}) }
    })
    
    defineEmits(['update:modelValue'])
    
    console.log(props.modelModifiers) // { capitalize: true }
    </script>
    
    <template>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>

vue

    <script>
    export default {
      props: {
        modelValue: String,
        modelModifiers: {
          default: () => ({})
        }
      },
      emits: ['update:modelValue'],
      created() {
        console.log(this.modelModifiers) // { capitalize: true }
      }
    }
    </script>
    
    <template>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>

Notice the component's `modelModifiers` prop contains `capitalize` and its value is `true` - due to it being set on the `v-model` binding `v-model.capitalize="myText"`.

Now that we have our prop set up, we can check the `modelModifiers` object keys and write a handler to change the emitted value. In the code below we will capitalize the string whenever the `<input />` element fires an `input` event.

vue

    <script setup>
    const props = defineProps({
      modelValue: String,
      modelModifiers: { default: () => ({}) }
    })
    
    const emit = defineEmits(['update:modelValue'])
    
    function emitValue(e) {
      let value = e.target.value
      if (props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      emit('update:modelValue', value)
    }
    </script>
    
    <template>
      <input type="text" :value="modelValue" @input="emitValue" />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNp9Us1Og0AQfpUJF5ZYqV4JNTaNxyYmVi/igdCh3QR2N7tDIza8u7NLpdU0nmB+v5/ZY7Q0Jj10GGVR7iorDYFD6sxDoWRrtCU4gsUaBqitbiHm1ngqrfuV5j+Fik7ldH6R83u5GaBQlVaOoO03+Emw8BtFHCeFyucjKMNxQNiapiTkCGCzlw6kMh1BVRpJZSO/0AEe0Pa0l2oHve6AYdBmvj+/ZHO4bfUWm/Q8uSiiEb6IYM4A+XxCi2bRH9ZX3BgVGKuNYwFbrKXCZx+Jo0cPcG9l02EGL2SZ3mxKr/VW1hKty9hMniy7hjIQCSweQByHBIZCDWzGDwi20ps0Yjxx4MR73Jktc83OOPFHGKk7VZHUKkyFgsAEAqcG2Qif4WWYUml3yOp8wldlDSLISX+TvPDstAemLeGbVvvSLkncJSnpV2PQrkqHLOfmVHeNrFDcMz3w0iBQE1cUzMYBbuS2f55CPj4D6o0/I41HzMKsP+u0kLOPoZWzkx1X7j18A8s0DEY=)

vue

    <script>
    export default {
      props: {
        modelValue: String,
        modelModifiers: {
          default: () => ({})
        }
      },
      emits: ['update:modelValue'],
      methods: {
        emitValue(e) {
          let value = e.target.value
          if (this.modelModifiers.capitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1)
          }
          this.$emit('update:modelValue', value)
        }
      }
    }
    </script>
    
    <template>
      <input type="text" :value="modelValue" @input="emitValue" />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNqFks1qg0AQgF9lkIKGpqa9iikNOefUtJfaw6KTZEHdZR1DbPDdO7saf0qgIq47//PNXL2N1uG5Ri/y4io1UtNrUspCK0Owa7aK/0osCQ5GFeCHq4nMuvlJCZCUeHEOGR5EnRNcrTS92VURXGex2qXVZ4JEsOhsAQxSbcrbDaBo9nihCHyXAaC1B3/4jVdDoXwhLHQuCPkGsD/JCmSpa4JUaEkilz9YAZ7RNHSS5REaVQPXgCay9vG0rPNToTLMw9FznXhdHYkHK04Qr4Zs3tL7g2JG8B4QbZS2LLqGXK5PkdcYwTsZrs1R6RU7lcmDRDPaM7AuWARMbf0KwbVdTNk4dyyk5f3l15r5YjRm8b+dQYF0UtkY1jo4fYDDLAByZBxWCmvAkIQ5IvdoBTcLeYCAiVbhvNwJvEk4GIK5M0xPwmwoeF6EpD60RrMVFXJXj72+ymWKwUvfXt+gfVzGB1tzcKfDZec+o/LfxsTdtlCj7bSpm3Xk4tjpD8FZ+uZMWTowu7MW7S+CWR77)

For `v-model` bindings with both argument and modifiers, the generated prop name will be `arg + "Modifiers"`. For example:

template

    <MyComponent v-model:title.capitalize="myText">

The corresponding declarations should be:

js

    const props = defineProps(['title', 'titleModifiers'])
    defineEmits(['update:title'])
    
    console.log(props.titleModifiers) // { capitalize: true }

js

    export default {
      props: ['title', 'titleModifiers'],
      emits: ['update:title'],
      created() {
        console.log(this.titleModifiers) // { capitalize: true }
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/v-model.md)
Fallthrough Attributes [​](#fallthrough-attributes)
===================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

Attribute Inheritance [​](#attribute-inheritance)
-------------------------------------------------

A "fallthrough attribute" is an attribute or `v-on` event listener that is passed to a component, but is not explicitly declared in the receiving component's [props](./props.html) or [emits](./events.html#declaring-emitted-events). Common examples of this include `class`, `style`, and `id` attributes.

When a component renders a single root element, fallthrough attributes will be automatically added to the root element's attributes. For example, given a `<MyButton>` component with the following template:

template

    <!-- template of <MyButton> -->
    <button>click me</button>

And a parent using this component with:

template

    <MyButton class="large" />

The final rendered DOM would be:

html

    <button class="large">click me</button>

Here, `<MyButton>` did not declare `class` as an accepted prop. Therefore, `class` is treated as a fallthrough attribute and automatically added to `<MyButton>`'s root element.

### `class` and `style` Merging [​](#class-and-style-merging)

If the child component's root element already has existing `class` or `style` attributes, it will be merged with the `class` and `style` values that are inherited from the parent. Suppose we change the template of `<MyButton>` in the previous example to:

template

    <!-- template of <MyButton> -->
    <button class="btn">click me</button>

Then the final rendered DOM would now become:

html

    <button class="btn large">click me</button>

### `v-on` Listener Inheritance [​](#v-on-listener-inheritance)

The same rule applies to `v-on` event listeners:

template

    <MyButton @click="onClick" />

The `click` listener will be added to the root element of `<MyButton>`, i.e. the native `<button>` element. When the native `<button>` is clicked, it will trigger the `onClick` method of the parent component. If the native `<button>` already has a `click` listener bound with `v-on`, then both listeners will trigger.

### Nested Component Inheritance [​](#nested-component-inheritance)

If a component renders another component as its root node, for example, we refactored `<MyButton>` to render a `<BaseButton>` as its root:

template

    <!-- template of <MyButton/> that simply renders another component -->
    <BaseButton />

Then the fallthrough attributes received by `<MyButton>` will be automatically forwarded to `<BaseButton>`.

Note that:

1.  Forwarded attributes do not include any attributes that are declared as props, or `v-on` listeners of declared events by `<MyButton>` - in other words, the declared props and listeners have been "consumed" by `<MyButton>`.
    
2.  Forwarded attributes may be accepted as props by `<BaseButton>`, if declared by it.
    

Disabling Attribute Inheritance [​](#disabling-attribute-inheritance)
---------------------------------------------------------------------

If you do **not** want a component to automatically inherit attributes, you can set `inheritAttrs: false` in the component's options.

If using `<script setup>`, you will need to declare this option using a separate, normal `<script>` block:

vue

    <script>
    // use normal <script> to declare options
    export default {
      inheritAttrs: false
    }
    </script>
    
    <script setup>
    // ...setup logic
    </script>

The common scenario for disabling attribute inheritance is when attributes need to be applied to other elements besides the root node. By setting the `inheritAttrs` option to `false`, you can take full control over where the fallthrough attributes should be applied.

These fallthrough attributes can be accessed directly in template expressions as `$attrs`:

template

    <span>Fallthrough attributes: {{ $attrs }}</span>

The `$attrs` object includes all attributes that are not declared by the component's `props` or `emits` options (e.g., `class`, `style`, `v-on` listeners, etc.).

Some notes:

*   Unlike props, fallthrough attributes preserve their original casing in JavaScript, so an attribute like `foo-bar` needs to be accessed as `$attrs['foo-bar']`.
    
*   A `v-on` event listener like `@click` will be exposed on the object as a function under `$attrs.onClick`.
    

Using our `<MyButton>` component example from the [previous section](#attribute-inheritance) - sometimes we may need to wrap the actual `<button>` element with an extra `<div>` for styling purposes:

template

    <div class="btn-wrapper">
      <button class="btn">click me</button>
    </div>

We want all fallthrough attributes like `class` and `v-on` listeners to be applied to the inner `<button>`, not the outer `<div>`. We can achieve this with `inheritAttrs: false` and `v-bind="$attrs"`:

template

    <div class="btn-wrapper">
      <button class="btn" v-bind="$attrs">click me</button>
    </div>

Remember that [`v-bind` without an argument](/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes) binds all the properties of an object as attributes of the target element.

Attribute Inheritance on Multiple Root Nodes [​](#attribute-inheritance-on-multiple-root-nodes)
-----------------------------------------------------------------------------------------------

Unlike components with a single root node, components with multiple root nodes do not have an automatic attribute fallthrough behavior. If `$attrs` are not bound explicitly, a runtime warning will be issued.

template

    <CustomLayout id="custom-layout" @click="changeValue" />

If `<CustomLayout>` has the following multi-root template, there will be a warning because Vue cannot be sure where to apply the fallthrough attributes:

template

    <header>...</header>
    <main>...</main>
    <footer>...</footer>

The warning will be suppressed if `$attrs` is explicitly bound:

template

    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>

Accessing Fallthrough Attributes in JavaScript [​](#accessing-fallthrough-attributes-in-javascript)
---------------------------------------------------------------------------------------------------

If needed, you can access a component's fallthrough attributes in `<script setup>` using the `useAttrs()` API:

vue

    <script setup>
    import { useAttrs } from 'vue'
    
    const attrs = useAttrs()
    </script>

If not using `<script setup>`, `attrs` will be exposed as a property of the `setup()` context:

js

    export default {
      setup(props, ctx) {
        // fallthrough attributes are exposed as ctx.attrs
        console.log(ctx.attrs)
      }
    }

Note that although the `attrs` object here always reflects the latest fallthrough attributes, it isn't reactive (for performance reasons). You cannot use watchers to observe its changes. If you need reactivity, use a prop. Alternatively, you can use `onUpdated()` to perform side effects with the latest `attrs` on each update.

If needed, you can access a component's fallthrough attributes via the `$attrs` instance property:

js

    export default {
      created() {
        console.log(this.$attrs)
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/attrs.md)
Slots [​](#slots)
=================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-3-component-slots?friend=vuejs "Free Vue.js Slots Lesson")

Slot Content and Outlet [​](#slot-content-and-outlet)
-----------------------------------------------------

We have learned that components can accept props, which can be JavaScript values of any type. But how about template content? In some cases, we may want to pass a template fragment to a child component, and let the child component render the fragment within its own template.

For example, we may have a `<FancyButton>` component that supports usage like this:

template

    <FancyButton>
      Click me! <!-- slot content -->
    </FancyButton>

The template of `<FancyButton>` looks like this:

template

    <button class="fancy-btn">
      <slot></slot> <!-- slot outlet -->
    </button>

The `<slot>` element is a **slot outlet** that indicates where the parent-provided **slot content** should be rendered.

![slot diagram](/assets/slots.dbdaf1e8.png)

And the final rendered DOM:

html

    <button class="fancy-btn">Click me!</button>

[Try it in the Playground](https://play.vuejs.org/#eNpdUdlqAyEU/ZVbQ0kLMdNsXabTQFvoV8yLcRkkjopLSQj596oTwqRvnuM9y9UT+rR2/hs5qlHjqZM2gOch2m2rZW+NC/BDND1+xRCMBuFMD9N5NeKyeNrqphrUSZdA4L1VJPCEAJrRdCEAvpWke+g5NHcYg1cmADU6cB0A4zzThmYckqimupqiGfpXILe/zdwNhaki3n+0SOR5vAu6ReU++efUajtqYGJQ/FIg5w8Wt9FlOx+OKh/nV1c4ZVNqlHE1TIQQ7xnvCN13zkTNalBSc+Jw5wiTac2H1WLDeDeDyXrJVm9LWG7uE3hev3AhHge1cYwnO200L4QljEnd1bCxB1g82UNhe+I6qQs5kuGcE30NrxeaRudzOWtkemeXuHP5tLIKOv8BN+mw3w==)

[Try it in the Playground](https://play.vuejs.org/#eNpdUdtOwzAM/RUThAbSurIbl1ImARJf0ZesSapoqROlKdo07d9x0jF1SHmIT+xzcY7sw7nZTy9Zwcqu9tqFTYW6ddYH+OZYHz77ECyC8raFySwfYXFsUiFAhXKfBoRUvDcBjhGtLbGgxNAVcLziOlVIp8wvelQE2TrDg6QKoBx1JwDgy+h6B62E8ibLoDM2kAAGoocsiz1VKMfmCCrzCymbsn/GY95rze1grja8694rpmJ/tg1YsfRO/FE134wc2D4YeTYQ9QeKa+mUrgsHE6+zC+vfjoz1Bdwqpd5iveX1rvG2R1GA0Si5zxrPhaaY98v5WshmCrerhVi+LmCxvqPiafUslXoYpq0XkuiQ1p4Ax4XQ2BSwdnuYP7p9QlvuG40JHI1lUaenv3o5w3Xvu2jOWU179oQNn5aisNMvLBvDOg==)

With slots, the `<FancyButton>` is responsible for rendering the outer `<button>` (and its fancy styling), while the inner content is provided by the parent component.

Another way to understand slots is by comparing them to JavaScript functions:

js

    // parent component passing slot content
    FancyButton('Click me!')
    
    // FancyButton renders slot content in its own template
    function FancyButton(slotContent) {
      return `<button class="fancy-btn">
          ${slotContent}
        </button>`
    }

Slot content is not just limited to text. It can be any valid template content. For example, we can pass in multiple elements, or even other components:

template

    <FancyButton>
      <span style="color:red">Click me!</span>
      <AwesomeIcon name="plus" />
    </FancyButton>

[Try it in the Playground](https://play.vuejs.org/#eNp1UmtOwkAQvspQYtCEgrx81EqCJibeoX+W7bRZaHc3+1AI4QyewH8ewvN4Aa/gbgtNIfFf5+vMfI/ZXbCQcvBmMYiCWFPFpAGNxsp5wlkphTLwQjjdPlljBIdMiRJ6g2EL88O9pnnxjlqU+EpbzS3s0BwPaypH4gqDpSyIQVcBxK3VFQDwXDC6hhJdlZi4zf3fRKwl4aDNtsDHJKCiECqiW8KTYH5c1gEnwnUdJ9rCh/XeM6Z42AgN+sFZAj6+Ux/LOjFaEK2diMz3h0vjNfj/zokuhPFU3lTdfcpShVOZcJ+DZgHs/HxtCrpZlj34eknoOlfC8jSCgnEkKswVSRlyczkZzVLM+9CdjtPJ/RjGswtX3ExvMcuu6mmhUnTruOBYAZKkKeN5BDO5gdG13FRoSVTOeAW2xkLPY3UEdweYWqW9OCkYN6gctq9uXllx2Z09CJ9dJwzBascI7nBYihWDldUGMqEgdTVIq6TQqCEMfUpNSD+fX7/fH+3b7P8AdGP6wA==)

[Try it in the Playground](https://play.vuejs.org/#eNptUltu2zAQvMpGQZEWsOzGiftQ1QBpgQK9g35oaikwkUiCj9aGkTPkBPnLIXKeXCBXyJKKBdoIoA/tYGd3doa74tqY+b+ARVXUjltp/FWj5GC09fCHKb79FbzXCoTVA5zNFxkWaWdT8/V/dHrAvzxrzrC3ZoBG4SYRWhQs9B52EeWapihU3lWwyxfPDgbfNYq+ejEppcLjYHrmkSqAOqMmAOB3L/ktDEhV4+v8gMR/l1M7wxQ4v+3xZ1Nw3Wtb8S1TTXG1H3cCJIO69oxc5mLUcrSrXkxSi1lxZGT0//CS9Wg875lzJELE/nLto4bko69dr31cFc8auw+3JHvSEfQ7nwbsHY9HwakQ4kes14zfdlYH1VbQS4XMlp1lraRMPl6cr1rsZnB6uWwvvi9hufpAxZfLryjEp5GtbYs0TlGICTCsbaXqKliZDZx/NpuEDsx2UiUwo5VxT6Dkv73BPFgXxRktlUdL2Jh6OoW8O3pX0buTsoTgaCNQcDjoGwk3wXkQ2tJLGzSYYI126KAso0uTSc8Pjy9P93k2d6+NyRKa)

By using slots, our `<FancyButton>` is more flexible and reusable. We can now use it in different places with different inner content, but all with the same fancy styling.

Vue components' slot mechanism is inspired by the [native Web Component `<slot>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot), but with additional capabilities that we will see later.

Render Scope [​](#render-scope)
-------------------------------

Slot content has access to the data scope of the parent component, because it is defined in the parent. For example:

template

    <span>{{ message }}</span>
    <FancyButton>{{ message }}</FancyButton>

Here both `{{ message }}` interpolations will render the same content.

Slot content does **not** have access to the child component's data. Expressions in Vue templates can only access the scope it is defined in, consistent with JavaScript's lexical scoping. In other words:

> Expressions in the parent template only have access to the parent scope; expressions in the child template only have access to the child scope.

Fallback Content [​](#fallback-content)
---------------------------------------

There are cases when it's useful to specify fallback (i.e. default) content for a slot, to be rendered only when no content is provided. For example, in a `<SubmitButton>` component:

template

    <button type="submit">
      <slot></slot>
    </button>

We might want the text "Submit" to be rendered inside the `<button>` if the parent didn't provide any slot content. To make "Submit" the fallback content, we can place it in between the `<slot>` tags:

template

    <button type="submit">
      <slot>
        Submit <!-- fallback content -->
      </slot>
    </button>

Now when we use `<SubmitButton>` in a parent component, providing no content for the slot:

template

    <SubmitButton />

This will render the fallback content, "Submit":

html

    <button type="submit">Submit</button>

But if we provide content:

template

    <SubmitButton>Save</SubmitButton>

Then the provided content will be rendered instead:

html

    <button type="submit">Save</button>

[Try it in the Playground](https://play.vuejs.org/#eNp1kMsKwjAQRX9lzMaNbfcSC/oL3WbT1ikU8yKZFEX8d5MGgi2YVeZxZ86dN7taWy8B2ZlxP7rZEnikYFuhZ2WNI+jCoGa6BSKjYXJGwbFufpNJfhSaN1kflTEgVFb2hDEC4IeqguARpl7KoR8fQPgkqKpc3Wxo1lxRWWeW+Y4wBk9x9V9d2/UL8g1XbOJN4WAntodOnrecQ2agl8WLYH7tFyw5olj10iR3EJ+gPCxDFluj0YS6EAqKR8mi9M3Td1ifLxWShcU=)

[Try it in the Playground](https://play.vuejs.org/#eNp1UEEOwiAQ/MrKxYu1d4Mm+gWvXChuk0YKpCyNxvh3lxIb28SEA8zuDDPzEucQ9mNCcRAymqELdFKu64MfCK6p6Tu6JCLvoB18D9t9/Qtm4lY5AOXwMVFu2OpkCV4ZNZ51HDqKhwLAQjIjb+X4yHr+mh+EfbCakF8AclNVkCJCq61ttLkD4YOgqsp0YbGesJkVBj92NwSTIrH3v7zTVY8oF8F4SdazD7ET69S5rqXPpnigZ8CjEnHaVyInIp5G63O6XIGiIlZMzrGMd8RVfR0q4lIKKV+L+srW+wNTTZq3)

Named Slots [​](#named-slots)
-----------------------------

There are times when it's useful to have multiple slot outlets in a single component. For example, in a `<BaseLayout>` component with the following template:

template

    <div class="container">
      <header>
        <!-- We want header content here -->
      </header>
      <main>
        <!-- We want main content here -->
      </main>
      <footer>
        <!-- We want footer content here -->
      </footer>
    </div>

For these cases, the `<slot>` element has a special attribute, `name`, which can be used to assign a unique ID to different slots so you can determine where content should be rendered:

template

    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>

A `<slot>` outlet without `name` implicitly has the name "default".

In a parent component using `<BaseLayout>`, we need a way to pass multiple slot content fragments, each targeting a different slot outlet. This is where **named slots** come in.

To pass a named slot, we need to use a `<template>` element with the `v-slot` directive, and then pass the name of the slot as an argument to `v-slot`:

template

    <BaseLayout>
      <template v-slot:header>
        <!-- content for the header slot -->
      </template>
    </BaseLayout>

`v-slot` has a dedicated shorthand `#`, so `<template v-slot:header>` can be shortened to just `<template #header>`. Think of it as "render this template fragment in the child component's 'header' slot".

![named slots diagram](/assets/named-slots.ebb7b207.png)

Here's the code passing content for all three slots to `<BaseLayout>` using the shorthand syntax:

template

    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
    
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
    
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>

When a component accepts both a default slot and named slots, all top-level non-`<template>` nodes are implicitly treated as content for the default slot. So the above can also be written as:

template

    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
    
      <!-- implicit default slot -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>

Now everything inside the `<template>` elements will be passed to the corresponding slots. The final rendered HTML will be:

html

    <div class="container">
      <header>
        <h1>Here might be a page title</h1>
      </header>
      <main>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </main>
      <footer>
        <p>Here's some contact info</p>
      </footer>
    </div>

[Try it in the Playground](https://play.vuejs.org/#eNp9UsFuwjAM/RWrHLgMOi5o6jIkdtphn9BLSF0aKU2ixEVjiH+fm8JoQdvRfu/5xS8+ZVvvl4cOsyITUQXtCSJS5zel1a13geBdRvyUR9cR1MG1MF/mt1YvnZdW5IOWVVwQtt5IQq4AxI2cau5ccZg1KCsMlz4jzWrzgQGh1fuGYIcgwcs9AmkyKHKGLyPykcfD1Apr2ZmrHUN+s+U5Qe6D9A3ULgA1bCK1BeUsoaWlyPuVb3xbgbSOaQGcxRH8v3XtHI0X8mmfeYToWkxmUhFoW7s/JvblJLERmj1l0+T7T5tqK30AZWSMb2WW3LTFUGZXp/u8o3EEVrbI9AFjLn8mt38fN9GIPrSp/p4/Yoj7OMZ+A/boN9KInPeZZpAOLNLRDAsPZDgN4p0L/NQFOV/Ayn9x6EZXMFNKvQ4E5YwLBczW6/WlU3NIi6i/sYDn5Qu2qX1OF51MsvMPkrIEHg==)

[Try it in the Playground](https://play.vuejs.org/#eNp9UkFuwjAQ/MoqHLiUpFxQlaZI9NRDn5CLSTbEkmNb9oKgiL934wRwQK3ky87O7njGPicba9PDHpM8KXzlpKV1qWVnjSP4FB6/xcnsCRpnOpin2R3qh+alBig1HgO9xkbsFcG5RyvDOzRq8vkAQLSury+l5lNkN1EuCDurBCFXAMWdH2pGrn2YtShqdCPOnXa5/kKH0MldS7BFEGDFDoEkKSwybo8rskjjaevo4L7Wrje8x4mdE7aFxjiglkWE1GxQE9tLi8xO+LoGoQ3THLD/qP2/dGMMxYZs8DP34E2HQUxUBFI35o+NfTlJLOomL8n04frXns7W8gCVEt5/lElQkxpdmVyVHvP2yhBo0SHThx5z+TEZvl1uMlP0oU3nH/kRo3iMI9Ybes960UyRsZ9pBuGDeTqpwfBAvn7NrXF81QUZm8PSHjl0JWuYVVX1PhAqo4zLYbZarUak4ZAWXv5gDq/pG3YBHn50EEkuv5irGBk=)

Again, it may help you understand named slots better using the JavaScript function analogy:

js

    // passing multiple slot fragments with different names
    BaseLayout({
      header: `...`,
      default: `...`,
      footer: `...`
    })
    
    // <BaseLayout> renders them in different places
    function BaseLayout(slots) {
      return `<div class="container">
          <header>${slots.header}</header>
          <main>${slots.default}</main>
          <footer>${slots.footer}</footer>
        </div>`
    }

Dynamic Slot Names [​](#dynamic-slot-names)
-------------------------------------------

[Dynamic directive arguments](/guide/essentials/template-syntax.html#dynamic-arguments) also work on `v-slot`, allowing the definition of dynamic slot names:

template

    <base-layout>
      <template v-slot:[dynamicSlotName]>
        ...
      </template>
    
      <!-- with shorthand -->
      <template #[dynamicSlotName]>
        ...
      </template>
    </base-layout>

Do note the expression is subject to the [syntax constraints](/guide/essentials/template-syntax.html#directives) of dynamic directive arguments.

Scoped Slots [​](#scoped-slots)
-------------------------------

As discussed in [Render Scope](#render-scope), slot content does not have access to state in the child component.

However, there are cases where it could be useful if a slot's content can make use of data from both the parent scope and the child scope. To achieve that, we need a way for the child to pass data to a slot when rendering it.

In fact, we can do exactly that - we can pass attributes to a slot outlet just like passing props to a component:

template

    <!-- <MyComponent> template -->
    <div>
      <slot :text="greetingMessage" :count="1"></slot>
    </div>

Receiving the slot props is a bit different when using a single default slot vs. using named slots. We are going to show how to receive props using a single default slot first, by using `v-slot` directly on the child component tag:

template

    <MyComponent v-slot="slotProps">
      {{ slotProps.text }} {{ slotProps.count }}
    </MyComponent>

![scoped slots diagram](/assets/scoped-slots.1c6d5876.svg)

[Try it in the Playground](https://play.vuejs.org/#eNp9kMEKgzAMhl8l9OJlU3aVOhg7C3uAXsRlTtC2tFE2pO++dA5xMnZqk+b/8/2dxMnadBxQ5EL62rWWwCMN9qh021vjCMrn2fBNoya4OdNDkmarXhQnSstsVrOOC8LedhVhrEiuHca97wwVSsTj4oz1SvAUgKJpgqWZEj4IQoCvZm0Gtgghzss1BDvIbFkqdmID+CNdbbQnaBwitbop0fuqQSgguWPXmX+JePe1HT/QMtJBHnE51MZOCcjfzPx04JxsydPzp2Szxxo7vABY1I/p)

[Try it in the Playground](https://play.vuejs.org/#eNqFkNFqxCAQRX9l8CUttAl9DbZQ+rzQD/AlJLNpwKjoJGwJ/nvHpAnusrAg6FzHO567iE/nynlCUQsZWj84+lBmGJ31BKffL8sng4bg7O0IRVllWnpWKAOgDF7WBx2em0kTLElt975QbwLkhkmIyvCS1TGXC8LR6YYwVSTzH8yvQVt6VyJt3966oAR38XhaFjjEkvBCECNcia2d2CLyOACZQ7CDrI6h4kXcAF7lcg+za6h5et4JPdLkzV4B9B6RBtOfMISmxxqKH9TarrGtATxMgf/bDfM/qExEUCdEDuLGXAmoV06+euNs2JK7tyCrzSNHjX9aurQf)

The props passed to the slot by the child are available as the value of the corresponding `v-slot` directive, which can be accessed by expressions inside the slot.

You can think of a scoped slot as a function being passed into the child component. The child component then calls it, passing props as arguments:

js

    MyComponent({
      // passing the default slot, but as a function
      default: (slotProps) => {
        return `${slotProps.text} ${slotProps.count}`
      }
    })
    
    function MyComponent(slots) {
      const greetingMessage = 'hello'
      return `<div>${
        // call the slot function with props!
        slots.default({ text: greetingMessage, count: 1 })
      }</div>`
    }

In fact, this is very close to how scoped slots are compiled, and how you would use scoped slots in manual [render functions](/guide/extras/render-function.html).

Notice how `v-slot="slotProps"` matches the slot function signature. Just like with function arguments, we can use destructuring in `v-slot`:

template

    <MyComponent v-slot="{ text, count }">
      {{ text }} {{ count }}
    </MyComponent>

### Named Scoped Slots [​](#named-scoped-slots)

Named scoped slots work similarly - slot props are accessible as the value of the `v-slot` directive: `v-slot:name="slotProps"`. When using the shorthand, it looks like this:

template

    <MyComponent>
      <template #header="headerProps">
        {{ headerProps }}
      </template>
    
      <template #default="defaultProps">
        {{ defaultProps }}
      </template>
    
      <template #footer="footerProps">
        {{ footerProps }}
      </template>
    </MyComponent>

Passing props to a named slot:

template

    <slot name="header" message="hello"></slot>

Note the `name` of a slot won't be included in the props because it is reserved - so the resulting `headerProps` would be `{ message: 'hello' }`.

If you are mixing named slots with the default scoped slot, you need to use an explicit `<template>` tag for the default slot. Attempting to place the `v-slot` directive directly on the component will result in a compilation error. This is to avoid any ambiguity about the scope of the props of the default slot. For example:

template

    <!-- This template won't compile -->
    <template>
      <MyComponent v-slot="{ message }">
        <p>{{ message }}</p>
        <template #footer>
          <!-- message belongs to the default slot, and is not available here -->
          <p>{{ message }}</p>
        </template>
      </MyComponent>
    </template>

Using an explicit `<template>` tag for the default slot helps to make it clear that the `message` prop is not available inside the other slot:

template

    <template>
      <MyComponent>
        <!-- Use explicit default slot -->
        <template #default="{ message }">
          <p>{{ message }}</p>
        </template>
    
        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </MyComponent>
    </template>

### Fancy List Example [​](#fancy-list-example)

You may be wondering what would be a good use case for scoped slots. Here's an example: imagine a `<FancyList>` component that renders a list of items - it may encapsulate the logic for loading remote data, using the data to display a list, or even advanced features like pagination or infinite scrolling. However, we want it to be flexible with how each item looks and leave the styling of each item to the parent component consuming it. So the desired usage may look like this:

template

    <FancyList :api-url="url" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>

Inside `<FancyList>`, we can render the same `<slot>` multiple times with different item data (notice we are using `v-bind` to pass an object as slot props):

template

    <ul>
      <li v-for="item in items">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>

[Try it in the Playground](https://play.vuejs.org/#eNqFU11r20AQ/CtbhWIHZMlxkjZVHUMf2r6EUkgolCgPZ2mlHDndHXcnU9fVf++evixDP16Md9cztzszPgQftI52NQZJsLaZ4dqBRVfrTSp5pZVx8InJbH/HrYPCqApmUTx2PHCWynXcIQlDhcNKC+aQKoD1EZ0wzRe1EbdpQJ9pAIlGs9CsROpcLNOgBRBkIIAzTl9peICtyvch1BaNZBWGIPgLWmhGDKFyvoNMMGsJ4HGTGU315tCxQNOsY3/dcTTCKnSMYNs90I+HxwgAv3yjf7PpvkxJ1jE9Pmwfn95/FIvqkyGV1u0Fgs2Uxpw6kV8ADh5XKOkWlv/EBJbRDVbvfTNTQpkEzq5W25ubS2o1rfaeZBOEwYktf/fzAAYLaHo3OwdTmSlJHmmjtIVbyLHgEr/6av44642bhTAbLJs9nR9RXm6PIt75YzeIY6hU9kKtSpGTOaPDCnTZM5dlKmmjB16hqt18fg63m+7mlibaMVEjkT12enauJTC7b1WCe6Gchc81z5H2GUyi+ccdk/Bd1dRtDUpgtYQmpGXchOUbcT/UThnO/D0T/BdaUXAGD6hFTWuyI9EFEfltnkjxkKrlkm78V+hrMaRBcNgteEHhetWdJ1CW7nkSzjvFchIliqIhQIKfoAtl+kgDl51I09xbEgT8DWPuCbPlMh/reIxmz7yO2wX/k0aAWnTGAAlhKY5+vnB7TXJJJbHNJIBmuT8ggWv9o29tWfZSGlXLPCGoRGYWpaEzUbr55cV1jmXoU5xfvlvB6vo1FW+u3mJRnLf4Vms6vX97yk+ejo9UzJRcenf++O5ZURQD3fgnaX4DS1Wb6Q==)

[Try it in the Playground](https://play.vuejs.org/#eNqNVNtq20AQ/ZWpQnECujhO0qaqY+hD25fQl4RCifKwllbKktXushcT1/W/d1bSSnYJNCCEZmbPmcuZ1S76olS6cTTKo6UpNVN2VQjWKqktfCOi3N4yY6HWsoVZmo0eD5kVAqAQ9KU7XNGaOG5h572lRAZBhTV574CJzJv7QuCzzMaMaFjaKk4sRQtgOeUmiiVO85siwncRQa6oThRpKHrO50XUnUdEwMMJw08M7mAtq20MzlAtSEtj4OyZGkweMIiq2AZKToxBgMcdxDCqVrueBfb7ZaaOQiOspZYgbL0FPBySIQD+eMeQc99/HJIsM0weqs+O258mjfZREE1jt5yCKaWiFXpSX0A/5loKmxj2m+YwT69p+7kXg0udw8nlYn19fYGufvSeZBXF0ZGmR2vwmrJKS4WiPswGWWYxzIIgs8fYH6mIJadnQXdNrdMiWAB+yJ7gsXdgLfjqcK10wtJqgmYZ+spnpGgl6up5oaa2fGKi6U8Yau9ZS6Wzpwi7WU1p7BMzaZcLbuBh0q2XM4fZXTc+uOPSGvjuWEWxlaAexr9uiIBf0qG3Uy6HxXwo9B+mn47CvbNSM+LHccDxAyvmjMA9Vdxh1WQiO0eywBVGEaN3Pj972wVxPKwOZ7BJWI2b+K5rOOVUNPbpYJNvJalwZmmahm3j7AhdSz3sPzDRS3R4SQwOCXxP4yVBzJqJarSzcY8H5mXWFfif1QVwPGjGcQWTLp7YrcLxCfyDdAuMW0cq30AOV+plcK1J+dxoXJkqR6igRCeNxjbxp3N6cX5V0Sb2K19dfFrA4uo9Gh8uP9K6Puvw3eyx9SH3IT/qPCZpiW6Y8Gq9mvekrutAN96o/V99ALPj)

### Renderless Components [​](#renderless-components)

The `<FancyList>` use case we discussed above encapsulates both reusable logic (data fetching, pagination etc.) and visual output, while delegating part of the visual output to the consumer component via scoped slots.

If we push this concept a bit further, we can come up with components that only encapsulate logic and do not render anything by themselves - visual output is fully delegated to the consumer component with scoped slots. We call this type of component a **Renderless Component**.

An example renderless component could be one that encapsulates the logic of tracking the current mouse position:

template

    <MouseTracker v-slot="{ x, y }">
      Mouse is at: {{ x }}, {{ y }}
    </MouseTracker>

[Try it in the Playground](https://play.vuejs.org/#eNqNUcFqhDAQ/ZUhF12w2rO4Cz301t5aaCEX0dki1SQko6uI/96J7i4qLPQQmHmZ9+Y9ZhQvxsRdiyIVmStsZQgcUmtOUlWN0ZbgXbcOP2xe/KKFs9UNBHGyBj09kCpLFj4zuSFsTJ0T+o6yjUb35GpNRylG6CMYYJKCpwAkzWNQOcgphZG/YZoiX/DQNAttFjMrS+6LRCT2rh6HGsHiOQKtmKIIS19+qmZpYLrmXIKxM1Vo5Yj9HD0vfD7ckGGF3LDWlOyHP/idYPQCfdzldTtjscl/8MuDww78lsqHVHdTYXjwCpdKlfoS52X52qGit8oRKrRhwHYdNrrDILouPbCNVZCtgJ1n/6Xx8JYAmT8epD3fr5cC0oGLQYpkd4zpD27R0vA=)

[Try it in the Playground](https://play.vuejs.org/#eNqVUU1rwzAM/SvCl7SQJTuHdLDDbttthw18MbW6hjW2seU0oeS/T0lounQfUDBGepaenvxO4tG5rIkoClGGra8cPUhT1c56ghcbA756tf1EDztva0iy/Ds4NCbSAEiD7diicafigeA0oFvLPAYNhWICYEE5IL00fMp8Hs0JYe0OinDIqFyIaO7CwdJGihO0KXTcLriK59NYBlUARTyMn6Hv0yHgIp7ARAvl3FXm8yCRiuu1Fv/x23JakVqtz3t5pOjNOQNoC7hPz0nHyRSzEr7Ghxppb/XlZ6JjRlzhTAlA+ypkLWwAM6c+8G2BdzP+/pPbRkOoL/KOldH2mCmtnxr247kKhAb9KuHKgLVtMEkn2knG+sIVzV9sfmy8hfB/swHKwV0oWja4lQKKjoNOivzKrf4L/JPqaQ==)

While an interesting pattern, most of what can be achieved with Renderless Components can be achieved in a more efficient fashion with Composition API, without incurring the overhead of extra component nesting. Later, we will see how we can implement the same mouse tracking functionality as a [Composable](/guide/reusability/composables.html).

That said, scoped slots are still useful in cases where we need to both encapsulate logic **and** compose visual output, like in the `<FancyList>` example.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/slots.md)
Provide / Inject [​](#provide-inject)
=====================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the [Components Basics](/guide/essentials/component-basics.html). Read that first if you are new to components.

Prop Drilling [​](#prop-drilling)
---------------------------------

Usually, when we need to pass data from the parent to a child component, we use [props](/guide/components/props.html). However, imagine the case where we have a large component tree, and a deeply nested component needs something from a distant ancestor component. With only props, we would have to pass the same prop across the entire parent chain:

![prop drilling diagram](/assets/prop-drilling.11201220.png)

Notice although the `<Footer>` component may not care about these props at all, it still needs to declare and pass them along just so `<DeepChild>` can access them. If there is a longer parent chain, more components would be affected along the way. This is called "props drilling" and definitely isn't fun to deal with.

We can solve props drilling with `provide` and `inject`. A parent component can serve as a **dependency provider** for all its descendants. Any component in the descendant tree, regardless of how deep it is, can **inject** dependencies provided by components up in its parent chain.

![Provide/inject scheme](/assets/provide-inject.3e0505e4.png)

Provide [​](#provide)
---------------------

To provide data to a component's descendants, use the [`provide()`](/api/composition-api-dependency-injection.html#provide) function:

vue

    <script setup>
    import { provide } from 'vue'
    
    provide(/* key */ 'message', /* value */ 'hello!')
    </script>

If not using `<script setup>`, make sure `provide()` is called synchronously inside `setup()`:

js

    import { provide } from 'vue'
    
    export default {
      setup() {
        provide(/* key */ 'message', /* value */ 'hello!')
      }
    }

The `provide()` function accepts two arguments. The first argument is called the **injection key**, which can be a string or a `Symbol`. The injection key is used by descendant components to lookup the desired value to inject. A single component can call `provide()` multiple times with different injection keys to provide different values.

The second argument is the provided value. The value can be of any type, including reactive state such as refs:

js

    import { ref, provide } from 'vue'
    
    const count = ref(0)
    provide('key', count)

Providing reactive values allows the descendant components using the provided value to establish a reactive connection to the provider component.

To provide data to a component's descendants, use the [`provide`](/api/options-composition.html#provide) option:

js

    export default {
      provide: {
        message: 'hello!'
      }
    }

For each property in the `provide` object, the key is used by child components to locate the correct value to inject, while the value is what ends up being injected.

If we need to provide per-instance state, for example data declared via the `data()`, then `provide` must use a function value:

js

    export default {
      data() {
        return {
          message: 'hello!'
        }
      },
      provide() {
        // use function syntax so that we can access `this`
        return {
          message: this.message
        }
      }
    }

However, do note this does **not** make the injection reactive. We will discuss [making injections reactive](#working-with-reactivity) below.

App-level Provide [​](#app-level-provide)
-----------------------------------------

In addition to providing data in a component, we can also provide at the app level:

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.provide(/* key */ 'message', /* value */ 'hello!')

App-level provides are available to all components rendered in the app. This is especially useful when writing [plugins](/guide/reusability/plugins.html), as plugins typically wouldn't be able to provide values using components.

Inject [​](#inject)
-------------------

To inject data provided by an ancestor component, use the [`inject()`](/api/composition-api-dependency-injection.html#inject) function:

vue

    <script setup>
    import { inject } from 'vue'
    
    const message = inject('message')
    </script>

If the provided value is a ref, it will be injected as-is and will **not** be automatically unwrapped. This allows the injector component to retain the reactivity connection to the provider component.

[Full provide + inject Example with Reactivity](https://play.vuejs.org/#eNqFUUFugzAQ/MrKF1IpxfeIVKp66Kk/8MWFDXYFtmUbpArx967BhURRU9/WOzO7MzuxV+fKcUB2YlWovXYRAsbBvQije2d9hAk8Xo7gvB11gzDDxdseCuIUG+ZN6a7JjZIvVRIlgDCcw+d3pmvTglz1okJ499I0C3qB1dJQT9YRooVaSdNiACWdQ5OICj2WwtTWhAg9hiBbhHNSOxQKu84WT8LkNQ9FBhTHXyg1K75aJHNUROxdJyNSBVBp44YI43NvG+zOgmWWYGt7dcipqPhGZEe2ef07wN3lltD+lWN6tNkV/37+rdKjK2rzhRTt7f3u41xhe37/xJZGAL2PLECXa9NKdD/a6QTTtGnP88LgiXJtYv4BaLHhvg==)

Again, if not using `<script setup>`, `inject()` should only be called synchronously inside `setup()`:

js

    import { inject } from 'vue'
    
    export default {
      setup() {
        const message = inject('message')
        return { message }
      }
    }

To inject data provided by an ancestor component, use the [`inject`](/api/options-composition.html#inject) option:

js

    export default {
      inject: ['message'],
      created() {
        console.log(this.message) // injected value
      }
    }

Injections are resolved **before** the component's own state, so you can access injected properties in `data()`:

js

    export default {
      inject: ['message'],
      data() {
        return {
          // initial data based on injected value
          fullMessage: this.message
        }
      }
    }

[Full provide + inject example](https://play.vuejs.org/#eNqNkcFqwzAQRH9l0EUthOhuRKH00FO/oO7B2JtERZaEvA4F43+vZCdOTAIJCImRdpi32kG8h7A99iQKobs6msBvpTNt8JHxcTC2wS76FnKrJpVLZelKR39TSUO7qreMoXRA7ZPPkeOuwHByj5v8EqI/moZeXudCIBL30Z0V0FLXVXsqIA9krU8R+XbMR9rS0mqhS4KpDbZiSgrQc5JKQqvlRWzEQnyvuc9YuWbd4eXq+TZn0IvzOeKr8FvsNcaK/R6Ocb9Uc4FvefpE+fMwP0wH8DU7wB77nIo6x6a2hvNEME5D0CpbrjnHf+8excI=)

### Injection Aliasing [​](#injection-aliasing)

When using the array syntax for `inject`, the injected properties are exposed on the component instance using the same key. In the example above, the property was provided under the key `"message"`, and injected as `this.message`. The local key is the same as the injection key.

If we want to inject the property using a different local key, we need to use the object syntax for the `inject` option:

js

    export default {
      inject: {
        /* local key */ localMessage: {
          from: /* injection key */ 'message'
        }
      }
    }

Here, the component will locate a property provided with the key `"message"`, and then expose it as `this.localMessage`.

### Injection Default Values [​](#injection-default-values)

By default, `inject` assumes that the injected key is provided somewhere in the parent chain. In the case where the key is not provided, there will be a runtime warning.

If we want to make an injected property work with optional providers, we need to declare a default value, similar to props:

js

    // `value` will be "default value"
    // if no data matching "message" was provided
    const value = inject('message', 'default value')

In some cases, the default value may need to be created by calling a function or instantiating a new class. To avoid unnecessary computation or side effects in case the optional value is not used, we can use a factory function for creating the default value:

js

    const value = inject('key', () => new ExpensiveClass())

js

    export default {
      // object syntax is required
      // when declaring default values for injections
      inject: {
        message: {
          from: 'message', // this is optional if using the same key for injection
          default: 'default value'
        },
        user: {
          // use a factory function for non-primitive values that are expensive
          // to create, or ones that should be unique per component instance.
          default: () => ({ name: 'John' })
        }
      }
    }

Working with Reactivity [​](#working-with-reactivity)
-----------------------------------------------------

When using reactive provide / inject values, **it is recommended to keep any mutations to reactive state inside of the _provider_ whenever possible**. This ensures that the provided state and its possible mutations are co-located in the same component, making it easier to maintain in the future.

There may be times when we need to update the data from an injector component. In such cases, we recommend providing a function that is responsible for mutating the state:

vue

    <!-- inside provider component -->
    <script setup>
    import { provide, ref } from 'vue'
    
    const location = ref('North Pole')
    
    function updateLocation() {
      location.value = 'South Pole'
    }
    
    provide('location', {
      location,
      updateLocation
    })
    </script>

vue

    <!-- in injector component -->
    <script setup>
    import { inject } from 'vue'
    
    const { location, updateLocation } = inject('location')
    </script>
    
    <template>
      <button @click="updateLocation">{{ location }}</button>
    </template>

Finally, you can wrap the provided value with [`readonly()`](/api/reactivity-core.html#readonly) if you want to ensure that the data passed through `provide` cannot be mutated by the injector component.

vue

    <script setup>
    import { ref, provide, readonly } from 'vue'
    
    const count = ref(0)
    provide('read-only-count', readonly(count))
    </script>

In order to make injections reactively linked to the provider, we need to provide a computed property using the [computed()](/api/reactivity-core.html#computed) function:

js

    import { computed } from 'vue'
    
    export default {
      data() {
        return {
          message: 'hello!'
        }
      },
      provide() {
        return {
          // explicitly provide a computed property
          message: computed(() => this.message)
        }
      }
    }

[Full provide + inject Example with Reactivity](https://play.vuejs.org/#eNqNUctqwzAQ/JVFFyeQxnfjBEoPPfULqh6EtYlV9EKWTcH43ytZtmPTQA0CsdqZ2dlRT16tPXctkoKUTeWE9VeqhbLGeXirheRwc0ZBds7HKkKzBdBDZZRtPXIYJlzqU40/I4LjjbUyIKmGEWw0at8UgZrUh1PscObZ4ZhQAA596/RcAShsGnbHArIapTRBP74O8Up060wnOO5QmP0eAvZyBV+L5jw1j2tZqsMp8yWRUHhUVjKPoQIohQ460L0ow1FeKJlEKEnttFweijJfiORElhCf5f3umObb0B9PU/I7kk17PJj7FloN/2t7a2Pj/Zkdob+x8gV8ZlMs2de/8+14AXwkBngD9zgVqjg2rNXPvwjD+EdlHilrn8MvtvD1+Q==)

The `computed()` function is typically used in Composition API components, but can also be used to complement certain use cases in Options API. You can learn more about its usage by reading the [Reactivity Fundamentals](/guide/essentials/reactivity-fundamentals.html) and [Computed Properties](/guide/essentials/computed.html) with the API Preference set to Composition API.

Temporary Config Required

The above usage requires setting `app.config.unwrapInjectedRef = true` to make injections automatically unwrap computed refs. This will become the default behavior in Vue 3.3 and this config is introduced temporarily to avoid breakage. It will no longer be required after 3.3.

Working with Symbol Keys [​](#working-with-symbol-keys)
-------------------------------------------------------

So far, we have been using string injection keys in the examples. If you are working in a large application with many dependency providers, or you are authoring components that are going to be used by other developers, it is best to use Symbol injection keys to avoid potential collisions.

It's recommended to export the Symbols in a dedicated file:

js

    // keys.js
    export const myInjectionKey = Symbol()

js

    // in provider component
    import { provide } from 'vue'
    import { myInjectionKey } from './keys.js'
    
    provide(myInjectionKey, {
      /* data to provide */
    })

js

    // in injector component
    import { inject } from 'vue'
    import { myInjectionKey } from './keys.js'
    
    const injected = inject(myInjectionKey)

See also: [Typing Provide / Inject](/guide/typescript/composition-api.html#typing-provide-inject)

js

    // in provider component
    import { myInjectionKey } from './keys.js'
    
    export default {
      provide() {
        return {
          [myInjectionKey]: {
            /* data to provide */
          }
        }
      }
    }

js

    // in injector component
    import { myInjectionKey } from './keys.js'
    
    export default {
      inject: {
        injected: { from: myInjectionKey }
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/provide-inject.md)
Async Components [​](#async-components)
=======================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Basic Usage [​](#basic-usage)
-----------------------------

In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it's needed. To make that possible, Vue has a [`defineAsyncComponent`](/api/general.html#defineasynccomponent) function:

js

    import { defineAsyncComponent } from 'vue'
    
    const AsyncComp = defineAsyncComponent(() => {
      return new Promise((resolve, reject) => {
        // ...load component from server
        resolve(/* loaded component */)
      })
    })
    // ... use `AsyncComp` like a normal component

As you can see, `defineAsyncComponent` accepts a loader function that returns a Promise. The Promise's `resolve` callback should be called when you have retrieved your component definition from the server. You can also call `reject(reason)` to indicate the load has failed.

[ES module dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) also returns a Promise, so most of the time we will use it in combination with `defineAsyncComponent`. Bundlers like Vite and webpack also support the syntax (and will use it as bundle split points), so we can use it to import Vue SFCs:

js

    import { defineAsyncComponent } from 'vue'
    
    const AsyncComp = defineAsyncComponent(() =>
      import('./components/MyComponent.vue')
    )

The resulting `AsyncComp` is a wrapper component that only calls the loader function when it is actually rendered on the page. In addition, it will pass along any props and slots to the inner component, so you can use the async wrapper to seamlessly replace the original component while achieving lazy loading.

As with normal components, async components can be [registered globally](/guide/components/registration.html#global-registration) using `app.component()`:

js

    app.component('MyComponent', defineAsyncComponent(() =>
      import('./components/MyComponent.vue')
    ))

You can also use `defineAsyncComponent` when [registering a component locally](/guide/components/registration.html#local-registration):

vue

    <script>
    import { defineAsyncComponent } from 'vue'
    
    export default {
      components: {
        AdminPage: defineAsyncComponent(() =>
          import('./components/AdminPageComponent.vue')
        )
      }
    }
    </script>
    
    <template>
      <AdminPage />
    </template>

They can also be defined directly inside their parent component:

vue

    <script setup>
    import { defineAsyncComponent } from 'vue'
    
    const AdminPage = defineAsyncComponent(() =>
      import('./components/AdminPageComponent.vue')
    )
    </script>
    
    <template>
      <AdminPage />
    </template>

Loading and Error States [​](#loading-and-error-states)
-------------------------------------------------------

Asynchronous operations inevitably involve loading and error states - `defineAsyncComponent()` supports handling these states via advanced options:

js

    const AsyncComp = defineAsyncComponent({
      // the loader function
      loader: () => import('./Foo.vue'),
    
      // A component to use while the async component is loading
      loadingComponent: LoadingComponent,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
    
      // A component to use if the load fails
      errorComponent: ErrorComponent,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3000
    })

If a loading component is provided, it will be displayed first while the inner component is being loaded. There is a default 200ms delay before the loading component is shown - this is because on fast networks, an instant loading state may get replaced too fast and end up looking like a flicker.

If an error component is provided, it will be displayed when the Promise returned by the loader function is rejected. You can also specify a timeout to show the error component when the request is taking too long.

Using with Suspense [​](#using-with-suspense)
---------------------------------------------

Async components can be used with the `<Suspense>` built-in component. The interaction between `<Suspense>` and async components is documented in the [dedicated chapter for `<Suspense>`](/guide/built-ins/suspense.html).

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/components/async.md)
Composables [​](#composables)
=============================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

TIP

This section assumes basic knowledge of Composition API. If you have been learning Vue with Options API only, you can set the API Preference to Composition API (using the toggle at the top of the left sidebar) and re-read the [Reactivity Fundamentals](/guide/essentials/reactivity-fundamentals.html) and [Lifecycle Hooks](/guide/essentials/lifecycle.html) chapters.

What is a "Composable"? [​](#what-is-a-composable)
--------------------------------------------------

In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse **stateful logic**.

When building frontend applications, we often need to reuse logic for common tasks. For example, we may need to format dates in many places, so we extract a reusable function for that. This formatter function encapsulates **stateless logic**: it takes some input and immediately returns expected output. There are many libraries out there for reusing stateless logic - for example [lodash](https://lodash.com/) and [date-fns](https://date-fns.org/), which you may have heard of.

By contrast, stateful logic involves managing state that changes over time. A simple example would be tracking the current position of the mouse on a page. In real-world scenarios, it could also be more complex logic such as touch gestures or connection status to a database.

Mouse Tracker Example [​](#mouse-tracker-example)
-------------------------------------------------

If we were to implement the mouse tracking functionality using the Composition API directly inside a component, it would look like this:

vue

    <script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    
    const x = ref(0)
    const y = ref(0)
    
    function update(event) {
      x.value = event.pageX
      y.value = event.pageY
    }
    
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    </script>
    
    <template>Mouse position is at: {{ x }}, {{ y }}</template>

But what if we want to reuse the same logic in multiple components? We can extract the logic into an external file, as a composable function:

js

    // mouse.js
    import { ref, onMounted, onUnmounted } from 'vue'
    
    // by convention, composable function names start with "use"
    export function useMouse() {
      // state encapsulated and managed by the composable
      const x = ref(0)
      const y = ref(0)
    
      // a composable can update its managed state over time.
      function update(event) {
        x.value = event.pageX
        y.value = event.pageY
      }
    
      // a composable can also hook into its owner component's
      // lifecycle to setup and teardown side effects.
      onMounted(() => window.addEventListener('mousemove', update))
      onUnmounted(() => window.removeEventListener('mousemove', update))
    
      // expose managed state as return value
      return { x, y }
    }

And this is how it can be used in components:

vue

    <script setup>
    import { useMouse } from './mouse.js'
    
    const { x, y } = useMouse()
    </script>
    
    <template>Mouse position is at: {{ x }}, {{ y }}</template>

Mouse position is at: 0, 0

[Try it in the Playground](https://play.vuejs.org/#eNqNkj1rwzAQhv/KocUOGKVzSAIdurVjoQUvJj4XlfgkJNmxMfrvPcmJkkKHLrbu69H7SlrEszFyHFDsxN6drDIeHPrBHGtSvdHWwwKDwzfNHwjQWd1DIbd9jOW3K2qq6aTJxb6pgpl7Dnmg3NS0365YBnLgsTfnxiNHACvUaKe80gTKQeN3sDAIQqjignEhIvKYqMRta1acFVrsKtDEQPLYxuU7cV8Msmg2mdTilIa6gU5p27tYWKKq1c3ENphaPrGFW25+yMXsHWFaFlfiiOSvFIBJjs15QJ5JeWmaL/xYS/Mfpc9YYrPxl52ULOpwhIuiVl9k07Yvsf9VOY+EtizSWfR6xKK6itgkvQ/+fyNs6v4XJXIsPwVL+WprCiL8AEUxw5s=)

As we can see, the core logic remains identical - all we had to do was move it into an external function and return the state that should be exposed. Just like inside a component, you can use the full range of [Composition API functions](/api/#composition-api) in composables. The same `useMouse()` functionality can now be used in any component.

The cooler part about composables though, is that you can also nest them: one composable function can call one or more other composable functions. This enables us to compose complex logic using small, isolated units, similar to how we compose an entire application using components. In fact, this is why we decided to call the collection of APIs that make this pattern possible Composition API.

For example, we can extract the logic of adding and removing a DOM event listener into its own composable:

js

    // event.js
    import { onMounted, onUnmounted } from 'vue'
    
    export function useEventListener(target, event, callback) {
      // if you want, you can also make this
      // support selector strings as target
      onMounted(() => target.addEventListener(event, callback))
      onUnmounted(() => target.removeEventListener(event, callback))
    }

And now our `useMouse()` composable can be simplified to:

js

    // mouse.js
    import { ref } from 'vue'
    import { useEventListener } from './event'
    
    export function useMouse() {
      const x = ref(0)
      const y = ref(0)
    
      useEventListener(window, 'mousemove', (event) => {
        x.value = event.pageX
        y.value = event.pageY
      })
    
      return { x, y }
    }

TIP

Each component instance calling `useMouse()` will create its own copies of `x` and `y` state so they won't interfere with one another. If you want to manage shared state between components, read the [State Management](/guide/scaling-up/state-management.html) chapter.

Async State Example [​](#async-state-example)
---------------------------------------------

The `useMouse()` composable doesn't take any arguments, so let's take a look at another example that makes use of one. When doing async data fetching, we often need to handle different states: loading, success, and error:

vue

    <script setup>
    import { ref } from 'vue'
    
    const data = ref(null)
    const error = ref(null)
    
    fetch('...')
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
    </script>
    
    <template>
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="data">
        Data loaded:
        <pre>{{ data }}</pre>
      </div>
      <div v-else>Loading...</div>
    </template>

It would be tedious to have to repeat this pattern in every component that needs to fetch data. Let's extract it into a composable:

js

    // fetch.js
    import { ref } from 'vue'
    
    export function useFetch(url) {
      const data = ref(null)
      const error = ref(null)
    
      fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
    
      return { data, error }
    }

Now in our component we can just do:

vue

    <script setup>
    import { useFetch } from './fetch.js'
    
    const { data, error } = useFetch('...')
    </script>

`useFetch()` takes a static URL string as input - so it performs the fetch only once and is then done. What if we want it to re-fetch whenever the URL changes? We can achieve that by also accepting refs as an argument:

js

    // fetch.js
    import { ref, isRef, unref, watchEffect } from 'vue'
    
    export function useFetch(url) {
      const data = ref(null)
      const error = ref(null)
    
      function doFetch() {
        // reset state before fetching..
        data.value = null
        error.value = null
        // unref() unwraps potential refs
        fetch(unref(url))
          .then((res) => res.json())
          .then((json) => (data.value = json))
          .catch((err) => (error.value = err))
      }
    
      if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
      } else {
        // otherwise, just fetch once
        // and avoid the overhead of a watcher
        doFetch()
      }
    
      return { data, error }
    }

This version of `useFetch()` now accepts both static URL strings and refs of URL strings. When it detects that the URL is a dynamic ref using [`isRef()`](/api/reactivity-utilities.html#isref), it sets up a reactive effect using [`watchEffect()`](/api/reactivity-core.html#watcheffect). The effect will run immediately and will also track the URL ref as a dependency. Whenever the URL ref changes, the data will be reset and fetched again.

Here's [the updated version of `useFetch()`](https://play.vuejs.org/#eNptVMFu2zAM/RXOl7hYancYdgnSYAO2nTZsKLadfFFsulHrSIYkJwuC/PtISnbdrpc4ksjH9x4pnbNPfV8cBsxW2drXTvcBPIah31RG73vrApzBYbuE2u77IWADF2id3cOCkhazoMHjVwz1bjovynGrePAUWZnaGh9gqzz+dh3cwmIXQu9XZfngrek7VePOdg26Ipx6XdsGCypaBttYXxJATNcNZRKjfPFucTVuDoI3UszzK7jdTIXeUk5xUN2AFD9mnKFRQS0BnbNuSYDBnYj67aQjJ0yKX5fRFfKDFgH3xDMgrQC+WdVAb4XTijfW2yEEa+Bw3Vp3W2UatIEPVQYf607Xj7zD5HWVbc5n0HC5rMuYIuhVWDf6QNm6pVAhRpEMTND95oft/Rv4wtuApGIwAR02KyAsCS726L26R8HlBkpi4jRREKWEe8ffWX0KLal8/Bd5YOcxkmGvKOczfaAj2Vx23TtkHXwWS9L6VYwNO6XNfVEU4/m6nKzMltlsUGgOn8+d9nf8GYysjorCvrQt1uHFIFYG/0peO5g6aJL8rJNwZlKx98I4DpEZOu7yeCI+Pj/iQ+VPpn4CbmzETaAAZUkZdG3AB1IEW6T+I7QcJLJjFJeNc0gVGD1ux979vz+Htt0BIexQBj2GMqWds8YOvjuBt6DDwkNwqn6kS6o8qAmgwR5NQzNzgu1pbmEu0kfxhP0nsRC30w144sJXJCkWXOWCbnWtVUclOnUC4qpMQz2Jw0uRVSD3jkoHCHqPdkgleZsAYpkrOOqu4ys4OCMqaTep1G3UpXiPr0gqbSnMHbWPrsRYQdlyNgOJCdfaJwEhaiQvSV5kJP1hkaKaWy3oz9oUIymLRtOa0a8L1Gwi5DiNwMs+YorkD/3wh7TkMs1i7Hx45MWlKormixrt8Fq4iXpDTxr8vvtGF2F0gbPmXUzzKOQuwDduhj05tYSHgRyIyNbUieE0zDOmqRWvvZGrMYFjJfyVQajMdFemtkdKCdngEX7S5SVaeZ7mmws8kBx5uxN/MuZXAohv+uQ2m/ldhV0RJ45ON3BTvJ/1g4sJ8Ni1l+bEEC6ZMx95WfPFXZxgWS2unlJTP5fw/uYmekW/l+zyD/mIah0=), with an artificial delay and randomized error for demo purposes.

Conventions and Best Practices [​](#conventions-and-best-practices)
-------------------------------------------------------------------

### Naming [​](#naming)

It is a convention to name composable functions with camelCase names that start with "use".

### Input Arguments [​](#input-arguments)

A composable can accept ref arguments even if it doesn't rely on them for reactivity. If you are writing a composable that may be used by other developers, it's a good idea to handle the case of input arguments being refs instead of raw values. The [`unref()`](/api/reactivity-utilities.html#unref) utility function will come in handy for this purpose:

js

    import { unref } from 'vue'
    
    function useFeature(maybeRef) {
      // if maybeRef is indeed a ref, its .value will be returned
      // otherwise, maybeRef is returned as-is
      const value = unref(maybeRef)
    }

If your composable creates reactive effects when the input is a ref, make sure to either explicitly watch the ref with `watch()`, or call `unref()` inside a `watchEffect()` so that it is properly tracked.

### Return Values [​](#return-values)

You have probably noticed that we have been exclusively using `ref()` instead of `reactive()` in composables. The recommended convention is for composables to always return a plain, non-reactive object containing multiple refs. This allows it to be destructured in components while retaining reactivity:

js

    // x and y are refs
    const { x, y } = useMouse()

Returning a reactive object from a composable will cause such destructures to lose the reactivity connection to the state inside the composable, while the refs will retain that connection.

If you prefer to use returned state from composables as object properties, you can wrap the returned object with `reactive()` so that the refs are unwrapped. For example:

js

    const mouse = reactive(useMouse())
    // mouse.x is linked to original ref
    console.log(mouse.x)

template

    Mouse position is at: {{ mouse.x }}, {{ mouse.y }}

### Side Effects [​](#side-effects)

It is OK to perform side effects (e.g. adding DOM event listeners or fetching data) in composables, but pay attention to the following rules:

*   If you are working on an application that uses [Server-Side Rendering](/guide/scaling-up/ssr.html) (SSR), make sure to perform DOM-specific side effects in post-mount lifecycle hooks, e.g. `onMounted()`. These hooks are only called in the browser, so you can be sure that code inside them has access to the DOM.
    
*   Remember to clean up side effects in `onUnmounted()`. For example, if a composable sets up a DOM event listener, it should remove that listener in `onUnmounted()` as we have seen in the `useMouse()` example. It can be a good idea to use a composable that automatically does this for you, like the `useEventListener()` example.
    

### Usage Restrictions [​](#usage-restrictions)

Composables should only be called **synchronously** in `<script setup>` or the `setup()` hook. In some cases, you can also call them in lifecycle hooks like `onMounted()`.

These are the contexts where Vue is able to determine the current active component instance. Access to an active component instance is necessary so that:

1.  Lifecycle hooks can be registered to it.
    
2.  Computed properties and watchers can be linked to it, so that they can be disposed when the instance is unmounted to prevent memory leaks.
    

TIP

`<script setup>` is the only place where you can call composables **after** using `await`. The compiler automatically restores the active instance context for you after the async operation.

Extracting Composables for Code Organization [​](#extracting-composables-for-code-organization)
-----------------------------------------------------------------------------------------------

Composables can be extracted not only for reuse, but also for code organization. As the complexity of your components grow, you may end up with components that are too large to navigate and reason about. Composition API gives you the full flexibility to organize your component code into smaller functions based on logical concerns:

vue

    <script setup>
    import { useFeatureA } from './featureA.js'
    import { useFeatureB } from './featureB.js'
    import { useFeatureC } from './featureC.js'
    
    const { foo, bar } = useFeatureA()
    const { baz } = useFeatureB(foo)
    const { qux } = useFeatureC(baz)
    </script>

To some extent, you can think of these extracted composables as component-scoped services that can talk to one another.

Using Composables in Options API [​](#using-composables-in-options-api)
-----------------------------------------------------------------------

If you are using Options API, composables must be called inside `setup()`, and the returned bindings must be returned from `setup()` so that they are exposed to `this` and the template:

js

    import { useMouse } from './mouse.js'
    import { useFetch } from './fetch.js'
    
    export default {
      setup() {
        const { x, y } = useMouse()
        const { data, error } = useFetch('...')
        return { x, y, data, error }
      },
      mounted() {
        // setup() exposed properties can be accessed on `this`
        console.log(this.x)
      }
      // ...other options
    }

Comparisons with Other Techniques [​](#comparisons-with-other-techniques)
-------------------------------------------------------------------------

### vs. Mixins [​](#vs-mixins)

Users coming from Vue 2 may be familiar with the [mixins](/api/options-composition.html#mixins) option, which also allows us to extract component logic into reusable units. There are three primary drawbacks to mixins:

1.  **Unclear source of properties**: when using many mixins, it becomes unclear which instance property is injected by which mixin, making it difficult to trace the implementation and understand the component's behavior. This is also why we recommend using the refs + destructure pattern for composables: it makes the property source clear in consuming components.
    
2.  **Namespace collisions**: multiple mixins from different authors can potentially register the same property keys, causing namespace collisions. With composables, you can rename the destructured variables if there are conflicting keys from different composables.
    
3.  **Implicit cross-mixin communication**: multiple mixins that need to interact with one another have to rely on shared property keys, making them implicitly coupled. With composables, values returned from one composable can be passed into another as arguments, just like normal functions.
    

For the above reasons, we no longer recommend using mixins in Vue 3. The feature is kept only for migration and familiarity reasons.

### vs. Renderless Components [​](#vs-renderless-components)

In the component slots chapter, we discussed the [Renderless Component](/guide/components/slots.html#renderless-components) pattern based on scoped slots. We even implemented the same mouse tracking demo using renderless components.

The main advantage of composables over renderless components is that composables do not incur the extra component instance overhead. When used across an entire application, the amount of extra component instances created by the renderless component pattern can become a noticeable performance overhead.

The recommendation is to use composables when reusing pure logic, and use components when reusing both logic and visual layout.

### vs. React Hooks [​](#vs-react-hooks)

If you have experience with React, you may notice that this looks very similar to custom React hooks. Composition API was in part inspired by React hooks, and Vue composables are indeed similar to React hooks in terms of logic composition capabilities. However, Vue composables are based on Vue's fine-grained reactivity system, which is fundamentally different from React hooks' execution model. This is discussed in more detail in the [Composition API FAQ](/guide/extras/composition-api-faq.html#comparison-with-react-hooks).

Further Reading [​](#further-reading)
-------------------------------------

*   [Reactivity In Depth](/guide/extras/reactivity-in-depth.html): for a low-level understanding of how Vue's reactivity system works.
*   [State Management](/guide/scaling-up/state-management.html): for patterns of managing state shared by multiple components.
*   [Testing Composables](/guide/scaling-up/testing.html#testing-composables): tips on unit testing composables.
*   [VueUse](https://vueuse.org/): an ever-growing collection of Vue composables. The source code is also a great learning resource.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/reusability/composables.md)
Custom Directives [​](#custom-directives)
=========================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Introduction [​](#introduction)
-------------------------------

In addition to the default set of directives shipped in core (like `v-model` or `v-show`), Vue also allows you to register your own custom directives.

We have introduced two forms of code reuse in Vue: [components](/guide/essentials/component-basics.html) and [composables](./composables.html). Components are the main building blocks, while composables are focused on reusing stateful logic. Custom directives, on the other hand, are mainly intended for reusing logic that involves low-level DOM access on plain elements.

A custom directive is defined as an object containing lifecycle hooks similar to those of a component. The hooks receive the element the directive is bound to. Here is an example of a directive that focuses an input when the element is inserted into the DOM by Vue:

vue

    <script setup>
    // enables v-focus in templates
    const vFocus = {
      mounted: (el) => el.focus()
    }
    </script>
    
    <template>
      <input v-focus />
    </template>

js

    const focus = {
      mounted: (el) => el.focus()
    }
    
    export default {
      directives: {
        // enables v-focus in template
        focus
      }
    }

template

    <input v-focus />

Assuming you haven't clicked elsewhere on the page, the input above should be auto-focused. This directive is more useful than the `autofocus` attribute because it works not just on page load - it also works when the element is dynamically inserted by Vue.

In `<script setup>`, any camelCase variable that starts with the `v` prefix can be used as a custom directive. In the example above, `vFocus` can be used in the template as `v-focus`.

If not using `<script setup>`, custom directives can be registered using the `directives` option:

js

    export default {
      setup() {
        /*...*/
      },
      directives: {
        // enables v-focus in template
        focus: {
          /* ... */
        }
      }
    }

Similar to components, custom directives must be registered so that they can be used in templates. In the example above, we are using local registration via the `directives` option.

It is also common to globally register custom directives at the app level:

js

    const app = createApp({})
    
    // make v-focus usable in all components
    app.directive('focus', {
      /* ... */
    })

TIP

Custom directives should only be used when the desired functionality can only be achieved via direct DOM manipulation. Prefer declarative templating using built-in directives such as `v-bind` when possible because they are more efficient and server-rendering friendly.

Directive Hooks [​](#directive-hooks)
-------------------------------------

A directive definition object can provide several hook functions (all optional):

js

    const myDirective = {
      // called before bound element's attributes
      // or event listeners are applied
      created(el, binding, vnode, prevVnode) {
        // see below for details on arguments
      },
      // called right before the element is inserted into the DOM.
      beforeMount(el, binding, vnode, prevVnode) {},
      // called when the bound element's parent component
      // and all its children are mounted.
      mounted(el, binding, vnode, prevVnode) {},
      // called before the parent component is updated
      beforeUpdate(el, binding, vnode, prevVnode) {},
      // called after the parent component and
      // all of its children have updated
      updated(el, binding, vnode, prevVnode) {},
      // called before the parent component is unmounted
      beforeUnmount(el, binding, vnode, prevVnode) {},
      // called when the parent component is unmounted
      unmounted(el, binding, vnode, prevVnode) {}
    }

### Hook Arguments [​](#hook-arguments)

Directive hooks are passed these arguments:

*   `el`: the element the directive is bound to. This can be used to directly manipulate the DOM.
    
*   `binding`: an object containing the following properties.
    
    *   `value`: The value passed to the directive. For example in `v-my-directive="1 + 1"`, the value would be `2`.
    *   `oldValue`: The previous value, only available in `beforeUpdate` and `updated`. It is available whether or not the value has changed.
    *   `arg`: The argument passed to the directive, if any. For example in `v-my-directive:foo`, the arg would be `"foo"`.
    *   `modifiers`: An object containing modifiers, if any. For example in `v-my-directive.foo.bar`, the modifiers object would be `{ foo: true, bar: true }`.
    *   `instance`: The instance of the component where the directive is used.
    *   `dir`: the directive definition object.
*   `vnode`: the underlying VNode representing the bound element.
    
*   `prevNode`: the VNode representing the bound element from the previous render. Only available in the `beforeUpdate` and `updated` hooks.
    

As an example, consider the following directive usage:

template

    <div v-example:foo.bar="baz">

The `binding` argument would be an object in the shape of:

js

    {
      arg: 'foo',
      modifiers: { bar: true },
      value: /* value of `baz` */,
      oldValue: /* value of `baz` from previous update */
    }

Similar to built-in directives, custom directive arguments can be dynamic. For example:

template

    <div v-example:[arg]="value"></div>

Here the directive argument will be reactively updated based on `arg` property in our component state.

Note

Apart from `el`, you should treat these arguments as read-only and never modify them. If you need to share information across hooks, it is recommended to do so through element's [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Function Shorthand [​](#function-shorthand)
-------------------------------------------

It's common for a custom directive to have the same behavior for `mounted` and `updated`, with no need for the other hooks. In such cases we can define the directive as a function:

template

    <div v-color="color"></div>

js

    app.directive('color', (el, binding) => {
      // this will be called for both `mounted` and `updated`
      el.style.color = binding.value
    })

Object Literals [​](#object-literals)
-------------------------------------

If your directive needs multiple values, you can also pass in a JavaScript object literal. Remember, directives can take any valid JavaScript expression.

template

    <div v-demo="{ color: 'white', text: 'hello!' }"></div>

js

    app.directive('demo', (el, binding) => {
      console.log(binding.value.color) // => "white"
      console.log(binding.value.text) // => "hello!"
    })

Usage on Components [​](#usage-on-components)
---------------------------------------------

When used on components, custom directives will always apply to a component's root node, similar to [Fallthrough Attributes](/guide/components/attrs.html).

template

    <MyComponent v-demo="test" />

template

    <!-- template of MyComponent -->
    
    <div> <!-- v-demo directive will be applied here -->
      <span>My component content</span>
    </div>

Note that components can potentially have more than one root node. When applied to a multi-root component, a directive will be ignored and a warning will be thrown. Unlike attributes, directives can't be passed to a different element with `v-bind="$attrs"`. In general, it is **not** recommended to use custom directives on components.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/reusability/custom-directives.md)
Plugins [​](#plugins)
=====================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Introduction [​](#introduction)
-------------------------------

Plugins are self-contained code that usually add app-level functionality to Vue. This is how we install a plugin:

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.use(myPlugin, {
      /* optional options */
    })

A plugin is defined as either an object that exposes an `install()` method, or simply a function that acts as the install function itself. The install function receives the [app instance](/api/application.html) along with additional options passed to `app.use()`, if any:

js

    const myPlugin = {
      install(app, options) {
        // configure the app
      }
    }

There is no strictly defined scope for a plugin, but common scenarios where plugins are useful include:

1.  Register one or more global components or custom directives with [`app.component()`](/api/application.html#app-component) and [`app.directive()`](/api/application.html#app-directive).
    
2.  Make a resource [injectable](/guide/components/provide-inject.html) throughout the app by calling [`app.provide()`](/api/application.html#app-provide).
    
3.  Add some global instance properties or methods by attaching them to [`app.config.globalProperties`](/api/application.html#app-config-globalproperties).
    
4.  A library that needs to perform some combination of the above (e.g. [vue-router](https://github.com/vuejs/vue-router-next)).
    

Writing a Plugin [​](#writing-a-plugin)
---------------------------------------

In order to better understand how to create your own Vue.js plugins, we will create a very simplified version of a plugin that displays `i18n` (short for [Internationalization](https://en.wikipedia.org/wiki/Internationalization_and_localization)) strings.

Let's begin by setting up the plugin object. It is recommended to create it in a separate file and export it, as shown below to keep the logic contained and separate.

js

    // plugins/i18n.js
    export default {
      install: (app, options) => {
        // Plugin code goes here
      }
    }

We want to create a translation function. This function will receive a dot-delimited `key` string, which we will use to look up the translated string in the user-provided options. This is the intended usage in templates:

template

    <h1>{{ $translate('greetings.hello') }}</h1>

Since this function should be globally available in all templates, we will make it so by attaching it to `app.config.globalProperties` in our plugin:

js

    // plugins/i18n.js
    export default {
      install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$translate = (key) => {
          // retrieve a nested property in `options`
          // using `key` as the path
          return key.split('.').reduce((o, i) => {
            if (o) return o[i]
          }, options)
        }
      }
    }

Our `$translate` function will take a string such as `greetings.hello`, look inside the user provided configuration and return the translated value.

The object containing the translated keys should be passed to the plugin during installation via additional parameters to `app.use()`:

js

    import i18nPlugin from './plugins/i18n'
    
    app.use(i18nPlugin, {
      greetings: {
        hello: 'Bonjour!'
      }
    })

Now, our initial expression `$translate('greetings.hello')` will be replaced by `Bonjour!` at runtime.

See also: [Augmenting Global Properties](/guide/typescript/options-api.html#augmenting-global-properties)

TIP

Use global properties scarcely, since it can quickly become confusing if too many global properties injected by different plugins are used throughout an app.

### Provide / Inject with Plugins [​](#provide-inject-with-plugins)

Plugins also allow us to use `inject` to provide a function or attribute to the plugin's users. For example, we can allow the application to have access to the `options` parameter to be able to use the translations object.

js

    // plugins/i18n.js
    export default {
      install: (app, options) => {
        app.config.globalProperties.$translate = (key) => {
          return key.split('.').reduce((o, i) => {
            if (o) return o[i]
          }, options)
        }
    
        app.provide('i18n', options)
      }
    }

Plugin users will now be able to inject the plugin options into their components using the `i18n` key:

vue

    <script setup>
    import { inject } from 'vue'
    
    const i18n = inject('i18n')
    
    console.log(i18n.greetings.hello)
    </script>

js

    export default {
      inject: ['i18n'],
      created() {
        console.log(this.i18n.greetings.hello)
      }
    }

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/reusability/plugins.md)
Transition [​](#transition)
===========================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Vue offers two built-in components that can help work with transitions and animations in response to changing state:

*   `<Transition>` for applying animations when an element or component is entering and leaving the DOM. This is covered on this page.
    
*   `<TransitionGroup>` for applying animations when an element or component is inserted into, removed from, or moved within a `v-for` list. This is covered in [the next chapter](/guide/built-ins/transition-group.html).
    

Aside from these two components, we can also apply animations in Vue using other techniques such as toggling CSS classes or state-driven animations via style bindings. These additional techniques are covered in the [Animation Techniques](/guide/extras/animation.html) chapter.

The `<Transition>` Component [​](#the-transition-component)
-----------------------------------------------------------

`<Transition>` is a built-in component: this means it is available in any component's template without having to register it. It can be used to apply enter and leave animations on elements or components passed to it via its default slot. The enter or leave can be triggered by one of the following:

*   Conditional rendering via `v-if`
*   Conditional display via `v-show`
*   Dynamic components toggling via the `<component>` special element
*   Changing the special `key` attribute

This is an example of the most basic usage:

template

    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>

css

    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

Toggle Fade

hello

[Try it in the Playground](https://play.vuejs.org/#eNpVkEFuwyAQRa8yZZNWqu1sunFJ1N4hSzYUjRNUDAjGVJHluxcCipIV/OG/pxEr+/a+TwuykfGogvYEEWnxR2H17F0gWCHgBBtMwc2wy9WdsMIqZ2OuXtwfHErhlcKCb8LyoVoynwPh7I0kzAmA/yxEzsKXMlr9HgRr9Es5BTue3PlskA+1VpFTkDZq0i3niYfU6anRmbqgMY4PZeH8OjwBfHhYIMdIV1OuferQEoZOKtIJ328TgzJhm8BabHR3jeC8VJqusO8/IqCM+CnsVqR3V/mfRxO5amnkCPuK5B+6rcG2fydshks=)

[Try it in the Playground](https://play.vuejs.org/#eNpVkMFuAiEQhl9lyqlNuouXXrZo2nfwuBeKs0qKQGBAjfHdZZfVrAmB+f/M/2WGK/v1vs0JWcdEVEF72vQWz94Fgh0OMhmCa28BdpLk+0etAQJSCvahAOLBnTqgkLA6t/EpVzmCP7lFEB69kYRFAYi/ROQs/Cij1f+6ZyMG1vA2vj3bbN1+b1Dw2lYj2yBt1KRnXRwPudHDnC6pAxrjBPe1n78EBF8MUGSkixnLNjdoCUMjFemMn5NjUGacnboqPVkdOC+Vpgus2q8IKCN+T+suWENwxyWJXKXMyQ5WNVJ+aBqD3e6VSYoi)

TIP

`<Transition>` only supports a single element or component as its slot content. If the content is a component, the component must also have only one single root element.

When an element in a `<Transition>` component is inserted or removed, this is what happens:

1.  Vue will automatically sniff whether the target element has CSS transitions or animations applied. If it does, a number of [CSS transition classes](#transition-classes) will be added / removed at appropriate timings.
    
2.  If there are listeners for [JavaScript hooks](#javascript-hooks), these hooks will be called at appropriate timings.
    
3.  If no CSS transitions / animations are detected and no JavaScript hooks are provided, the DOM operations for insertion and/or removal will be executed on the browser's next animation frame.
    

CSS-Based Transitions [​](#css-based-transitions)
-------------------------------------------------

### Transition Classes [​](#transition-classes)

There are six classes applied for enter / leave transitions.

![Transition Diagram](/assets/transition-classes.f0f7b3c9.png)

1.  `v-enter-from`: Starting state for enter. Added before the element is inserted, removed one frame after the element is inserted.
    
2.  `v-enter-active`: Active state for enter. Applied during the entire entering phase. Added before the element is inserted, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.
    
3.  `v-enter-to`: Ending state for enter. Added one frame after the element is inserted (at the same time `v-enter-from` is removed), removed when the transition/animation finishes.
    
4.  `v-leave-from`: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
    
5.  `v-leave-active`: Active state for leave. Applied during the entire leaving phase. Added immediately when a leaving transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.
    
6.  `v-leave-to`: Ending state for leave. Added one frame after a leaving transition is triggered (at the same time `v-leave-from` is removed), removed when the transition/animation finishes.
    

`v-enter-active` and `v-leave-active` give us the ability to specify different easing curves for enter / leave transitions, which we'll see an example of in the following sections.

### Named Transitions [​](#named-transitions)

A transition can be named via the `name` prop:

template

    <Transition name="fade">
      ...
    </Transition>

For a named transition, its transition classes will be prefixed with its name instead of `v`. For example, the applied class for the above transition will be `fade-enter-active` instead of `v-enter-active`. The CSS for the fade transition should look like this:

css

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

### CSS Transitions [​](#css-transitions)

`<Transition>` is most commonly used in combination with [native CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions), as seen in the basic example above. The `transition` CSS property is a shorthand that allows us to specify multiple aspects of a transition, including properties that should be animated, duration of the transition, and [easing curves](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).

Here is a more advanced example that transitions multiple properties, with different durations and easing curves for enter and leave:

template

    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>

css

    /*
      Enter and leave animations can use different
      durations and timing functions.
    */
    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }
    
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    
    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }

Toggle Slide + Fade

hello

[Try it in the Playground](https://play.vuejs.org/#eNqFkc9uwjAMxl/F6wXQKIVNk1AX0HbZC4zDDr2E4EK0NIkStxtDvPviFQ0OSFzyx/m+n+34kL16P+lazMpMRBW0J4hIrV9WVjfeBYIDBKzhCHVwDQySdFDZyipnY5Lu3BcsWDCk0OKosqLoKcmfLoSNN5KQbyTWLZGz8KKMVp+LKju573ivsuXKbbcG4d3oDcI9vMkNiqL3JD+AWAVpoyadGFY2yATW5nVSJj9rkspDl+v6hE/hHRrjRMEdpdfiDEkBUVxWaEWkveHj5AzO0RKGXCrSHcKBIfSPKEEaA9PJYwSUEXPX0nNlj8y6RBiUHd5AzCOodq1VvsYfjWE4G6fgEy/zMcxG17B9ZTyX8bV85C5y1S40ZX/kdj+GD1P/zVQA56XStC9h2idJI/z7huz4CxoVvE4=)

[Try it in the Playground](https://play.vuejs.org/#eNqFkc1uwjAMgF/F6wk0SmHTJNQFtF32AuOwQy+hdSFamkSJ08EQ776EbMAkJKTIf7I/O/Y+ezVm3HvMyoy52gpDi0rh1mhL0GDLvSTYVwqg4cQHw2QDWCRv1Z8H4Db6qwSyHlPkEFUQ4bHixA0OYWckJ4wesZUn0gpeainqz3mVRQzM4S7qKlss9XotEd6laBDu4Y03yIpUE+oB2NJy5QSJwFC8w0iIuXkbMkN9moUZ6HPR/uJDeINSalaYxCjOkBBgxeWEijnayWiOz+AcFaHNeU2ix7QCOiFK4FLCZPzoALnDXHt6Pq7hP0Ii7/EGYuag9itR5yv8FmgH01EIPkUxG8F0eA2bJmut7kbX+pG+6NVq28WTBTN+92PwMDHbSAXQhteCdiVMUpNwwuMassMP8kfAJQ==)

### CSS Animations [​](#css-animations)

[Native CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) are applied in the same way as CSS transitions, with the difference being that `*-enter-from` is not removed immediately after the element is inserted, but on an `animationend` event.

For most CSS animations, we can simply declare them under the `*-enter-active` and `*-leave-active` classes. Here's an example:

template

    <Transition name="bounce">
      <p v-if="show" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>

css

    .bounce-enter-active {
      animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.25);
      }
      100% {
        transform: scale(1);
      }
    }

Toggle

Hello here is some bouncy text!

[Try it in the Playground](https://play.vuejs.org/#eNqNksGOgjAQhl9lJNmoBwRNvCAa97YP4JFLbQZsLG3TDqzG+O47BaOezCYkpfB9/0wHbsm3c4u+w6RIyiC9cgQBqXO7yqjWWU9wA4813KH2toUpo9PKVEZaExg92V/YRmBGvsN5ZcpsTGGfN4St04Iw7qg8dkTWwF5qJc/bKnnYk7hWye5gm0ZjmY0YKwDlwQsTFCnWjGiRpaPtjETG43smHPSpqh9pVQKBrjpyrfCNMilZV8Aqd5cNEF4oFVo1pgCJhtBvnjEAP6i1hRN6BBUg2BZhKHUdvMmjWhYHE9dXY/ygzN4PasqhB75djM2mQ7FUSFI9wi0GCJ6uiHYxVsFUGcgX67CpzP0lahQ9/k/kj9CjDzgG7M94rT1PLLxhQ0D+Na4AFI9QW98WEKTQOMvnLAOwDrD+wC0Xq/Ubusw/sU+QL/45hskk9z8Bddbn)

[Try it in the Playground](https://play.vuejs.org/#eNqNUs2OwiAQfpWxySZ66I8mXioa97YP4LEXrNNKpEBg2tUY330pqOvJmBBgyPczP1yTb2OyocekTJirrTC0qRSejbYEB2x4LwmulQI4cOLTWbwDWKTeqkcE4I76twSyPcaX23j4zS+WP3V9QNgZyQnHiNi+J9IKtrUU9WldJaMMrGEynlWy2em2lcjyCPMUALazXDlBwtMU79CT9rpXNXp4tGYGhlQ0d7UqAUcXOeI6bluhUtKmhEVhzisgPFPKpWhVCTUqQrt6ygD8oJQajmgRhAOnO4RgdQm8yd0tNzGv/D8x/8Dy10IVCzn4axaTTYNZymsSA8YuciU6PrLL6IKpUFBkS7cKXXwQJfIBPyP6IQ1oHUaB7QkvjfUdcy+wIFB8PeZIYwmNtl0JruYSp8XMk+/TXL7BzbPF8gU6L95hn8D4OUJnktsfM1vavg==)

### Custom Transition Classes [​](#custom-transition-classes)

You can also specify custom transition classes by passing the following props to `<Transition>`:

*   `enter-from-class`
*   `enter-active-class`
*   `enter-to-class`
*   `leave-from-class`
*   `leave-active-class`
*   `leave-to-class`

These will override the conventional class names. This is especially useful when you want to combine Vue's transition system with an existing CSS animation library, such as [Animate.css](https://daneden.github.io/animate.css/):

template

    <!-- assuming Animate.css is included on the page -->
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show">hello</p>
    </Transition>

[Try it in the Playground](https://play.vuejs.org/#eNqNUctuwjAQ/BXXF9oDsZB6ogbRL6hUcbSEjLMhpn7JXtNWiH/vhqS0R3zxPmbWM+szf02pOVXgSy6LyTYhK4A1rVWwPsWM7MwydOzCuhw9mxF0poIKJoZC0D5+stUAeMRc4UkFKcYpxKcEwSenEYYM5b4ixsA2xlnzsVJ8Yj8Mt+LrbTwcHEgxwojCmNxmHYpFG2kaoxO0B2KaWjD6uXG6FCiKj00ICHmuDdoTjD2CavJBCna7KWjZrYK61b9cB5pI93P3sQYDbxXf7aHHccpVMolO7DS33WSQjPXgXJRi2Cl1xZ8nKkjxf0dBFvx2Q7iZtq94j5jKUgjThmNpjIu17ZzO0JjohT7qL+HsvohJWWNKEc/NolncKt6Goar4y/V7rg/wyw9zrLOy)

[Try it in the Playground](https://play.vuejs.org/#eNqNUcFuwjAM/RUvp+1Ao0k7sYDYF0yaOFZCJjU0LE2ixGFMiH9f2gDbcVKU2M9+tl98Fm8hNMdMYi5U0tEEXraOTsFHho52mC3DuXUAHTI+PlUbIBLn6G4eQOr91xw4ZqrIZXzKVY6S97rFYRqCRabRY7XNzN7BSlujPxetGMvAAh7GtxXLtd/vLSlZ0woFQK0jumTY+FJt7ORwoMLUObEfZtpiSpRaUYPkmOIMNZsj1VhJRWeGMsFmczU6uCOMHd64lrCQ/s/d+uw0vWf+MPuea5Vp5DJ0gOPM7K4Ci7CerPVKhipJ/moqgJJ//8ipxN92NFdmmLbSip45pLmUunOH1Gjrc7ezGKnRfpB4wJO0ZpvkdbJGpyRfmufm+Y4Mxo1oK16n9UwNxOUHwaK3iQ==)

### Using Transitions and Animations Together [​](#using-transitions-and-animations-together)

Vue needs to attach event listeners in order to know when a transition has ended. It can either be `transitionend` or `animationend`, depending on the type of CSS rules applied. If you are only using one or the other, Vue can automatically detect the correct type.

However, in some cases you may want to have both on the same element, for example having a CSS animation triggered by Vue, along with a CSS transition effect on hover. In these cases, you will have to explicitly declare the type you want Vue to care about by passing the `type` prop, with a value of either `animation` or `transition`:

template

    <Transition type="animation">...</Transition>

### Nested Transitions and Explicit Transition Durations [​](#nested-transitions-and-explicit-transition-durations)

Although the transition classes are only applied to the direct child element in `<Transition>`, we can transition nested elements using nested CSS selectors:

template

    <Transition name="nested">
      <div v-if="show" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>

css

    /* rules that target nested elements */
    .nested-enter-active .inner,
    .nested-leave-active .inner {
      transition: all 0.3s ease-in-out;
    }
    
    .nested-enter-from .inner,
    .nested-leave-to .inner {
      transform: translateX(30px);
      opacity: 0;
    }
    
    /* ... other necessary CSS omitted */

We can even add a transition delay to the nested element on enter, which creates a staggered enter animation sequence:

css

    /* delay enter of nested element for staggered effect */
    .nested-enter-active .inner {
      transition-delay: 0.25s;
    }

However, this creates a small issue. By default, the `<Transition>` component attempts to automatically figure out when the transition has finished by listening to the **first** `transitionend` or `animationend` event on the root transition element. With a nested transition, the desired behavior should be waiting until the transitions of all inner elements have finished.

In such cases you can specify an explicit transition duration (in milliseconds) using the `duration` prop on the `<transition>` component. The total duration should match the delay plus transition duration of the inner element:

template

    <Transition :duration="550">...</Transition>

Toggle

Hello

[Try it in the Playground](https://play.vuejs.org/#eNqVVMtu2zAQ/JWtekjiRo80cIGoStCil3yADy2gC02tJCIUKZCUncDwv3cpyrbstmgLGxC53J2ZnaW0i772fbIZMMqjwnIjegcW3dA/lUp0vTYOdmCwhj3URndwRalXpSoV18pSaqu38OgTrp0Z8KZURRpQqJ42DrteMoe0AyjWg3NawRcuBX95LKOp+p1/ltHTSjeNxCINaaFkZZiywgkqqwbD/IIKl8usjECxDmmj0DqsqN4XUEklNrCJRT0RUCKXzFra6sGhOSZOqYdDodTpsHT+94xS6mNyStkHjuO6SE8KKVCks45pa92b9MtkpL6FZGSBHR26NeMvjdGDqnJ4j4ifPV7PqkqoJof7rH8dI51QcYuiaV0Od1mI7v0BoU5otAQ4g+Ocz9KCQzEq0hAz7sQGScoUlcg2OEWDMHfsKAcmJWTJvQVkFmOSQo0E5HQBFUr2BiMA6Jq0G6IAlNj55yI9UV+SAJxI4hEmJ5qPSxuwLzX7q3d7ieb0DKnWpsvD0rv/49r7dzMaqHvGhfMEB3CSvkXgTFF7Vs+kQCA4tGBhsDSMQ9RSmDtt7Flrc1en+f4i9ex0mtd/ujzSeJfPJf5NyuVE/9HsPzVCnp9wf2/995n16WK8ge6Z7iaw8XICg28tMSA8fIL10IBQ0DJVyZnR08RmFtkkvHirVligv9KOkrGiZKrXriVFa6O3Fmk62hwpHj7Als4QKMOzBZSWWVgjKqjFK1YjtLdxflWSLLsL9tAHbXyJo/1PJETL1g==)

If necessary, you can also specify separate values for enter and leave durations using an object:

template

    <Transition :duration="{ enter: 500, leave: 800 }">...</Transition>

### Performance Considerations [​](#performance-considerations)

You may notice that the animations shown above are mostly using properties like `transform` and `opacity`. These properties are efficient to animate because:

1.  They do not affect the document layout during the animation, so they do not trigger expensive CSS layout calculation on every animation frame.
    
2.  Most modern browsers can leverage GPU hardware acceleration when animating `transform`.
    

In comparison, properties like `height` or `margin` will trigger CSS layout, so they are much more expensive to animate, and should be used with caution. We can check resources like [CSS-Triggers](https://csstriggers.com/) to see which properties will trigger layout if we animate them.

JavaScript Hooks [​](#javascript-hooks)
---------------------------------------

You can hook into the transition process with JavaScript by listening to events on the `<Transition>` component:

html

    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <!-- ... -->
    </Transition>

js

    // called before the element is inserted into the DOM.
    // use this to set the "enter-from" state of the element
    function onBeforeEnter(el) {}
    
    // called one frame after the element is inserted.
    // use this to start the entering animation.
    function onEnter(el, done) {
      // call the done callback to indicate transition end
      // optional if used in combination with CSS
      done()
    }
    
    // called when the enter transition has finished.
    function onAfterEnter(el) {}
    function onEnterCancelled(el) {}
    
    // called before the leave hook.
    // Most of the time, you should just use the leave hook
    function onBeforeLeave(el) {}
    
    // called when the leave transition starts.
    // use this to start the leaving animation.
    function onLeave(el, done) {
      // call the done callback to indicate transition end
      // optional if used in combination with CSS
      done()
    }
    
    // called when the leave transition has finished and the
    // element has been removed from the DOM.
    function onAfterLeave(el) {}
    
    // only available with v-show transitions
    function onLeaveCancelled(el) {}

js

    export default {
      // ...
      methods: {
        // called before the element is inserted into the DOM.
        // use this to set the "enter-from" state of the element
        onBeforeEnter(el) {},
    
        // called one frame after the element is inserted.
        // use this to start the animation.
        onEnter(el, done) {
          // call the done callback to indicate transition end
          // optional if used in combination with CSS
          done()
        },
    
        // called when the enter transition has finished.
        onAfterEnter(el) {},
        onEnterCancelled(el) {},
    
        // called before the leave hook.
        // Most of the time, you should just use the leave hook.
        onBeforeLeave(el) {},
    
        // called when the leave transition starts.
        // use this to start the leaving animation.
        onLeave(el, done) {
          // call the done callback to indicate transition end
          // optional if used in combination with CSS
          done()
        },
    
        // called when the leave transition has finished and the
        // element has been removed from the DOM.
        onAfterLeave(el) {},
    
        // only available with v-show transitions
        onLeaveCancelled(el) {}
      }
    }

These hooks can be used in combination with CSS transitions / animations or on their own.

When using JavaScript-only transitions, it is usually a good idea to add the `:css="false"` prop. This explicitly tells Vue to skip auto CSS transition detection. Aside from being slightly more performant, this also prevents CSS rules from accidentally interfering with the transition:

template

    <Transition
      ...
      :css="false"
    >
      ...
    </Transition>

With `:css="false"`, we are also fully responsible for controlling when the transition ends. In this case, the `done` callbacks are required for the `@enter` and `@leave` hooks. Otherwise, the hooks will be called synchronously and the transition will finish immediately.

Here's a demo using the [GreenSock library](https://greensock.com/) to perform the animations. You can, of course, use any other animation library you want, for example [Anime.js](https://animejs.com/) or [Motion One](https://motion.dev/).

Toggle

[Try it in the Playground](https://play.vuejs.org/#eNqNVMtu2zAQ/JUti8I2YD3i1GigKmnaorcCveTQArpQFCWzlkiCpBwHhv+9Sz1qKYckJ3FnlzvD2YVO5KvW4aHlJCGpZUZoB5a7Vt9lUjRaGQcnMLyEM5RGNbDA0sX/VGWpHnB/xEQmmZIWe+zUI9z6m0tnWr7ymbKVzAklQclvvFSG/5COmyWvV3DKJHTdQiRHZN0jAJbRmv9OIA432/UE+jODlKZMuKcErnx8RrazP8woR7I1FEryKaVTU8aiNdRfwWZTQtQwi1HAGF/YB4BTyxNY8JpaJ1go5K/WLTfhdg1Xq8V4SX5Xja65w0ovaCJ8Jvsnpwc+l525F2XH4ac3Cj8mcB3HbxE9qnvFMRzJ0K3APuhIjPefmTTyvWBAGvWbiDuIgeNYRh3HCCDNW+fQmHtWC7a/zciwaO/8NyN3D6qqap5GfVnXAC89GCqt8Bp77vu827+A+53AJrOFzMhQdMnO8dqPpMO74Yx4wqxFtKS1HbBOMdIX4gAMffVp71+Qq2NG4BCIcngBKk8jLOvfGF30IpBGEwcwtO6p9sdwbNXPIadsXxnVyiKB9x83+c3N9WePN9RUQgZO6QQ2sT524KMo3M5Pf4h3XFQ7NwFyZQpuAkML0doEtvEHhPvRDPRkTfq/QNDgRvy1SuIvpFOSDQmbkWTckf7hHsjIzjltkyhqpd5XIVNN5HNfGlW09eAcMp3J+R+pEn7L)

[Try it in the Playground](https://play.vuejs.org/#eNqNVFFvmzAQ/is3pimNlABNF61iaddt2tukvfRhk/xiwIAXsJF9pKmq/PedDTSwh7ZSFLjvzvd9/nz4KfjatuGhE0ES7GxmZIu3TMmm1QahtLyFwugGFu51wRQAU+Lok7koeFcjPDk058gvlv07gBHYGTVGALbSDwmg6USPnNzjtHL/jcBK5zZxxQwZavVNFNqIHwqF8RUAWs2jn4IffCfqQz+mik5lKLWi3GT1hagHRU58aAUSshpV2YzX4ncCcbjZDp099GcG6ZZnEh8TuPR8S0/oTJhQjmQryLUSU0rUU8a8M9wtoWZTQtIwi0nAGJ/ZB0BwKxJYiJpblFko1a8OLzbhdgWXy8WzP99109YCqdIJmgifyfYuzmUzfFF2HH56o/BjAldx/BbRo7pXHKMjGbrl1IcciWn9fyaNfC8YsIueR5wCFFTGUVAEsEs7pOmDu6yW2f6GBW5o4QbeuScLbu91WdZiF/VlvgEtujdcWek09tx3qZ+/tXAzQU1mA8mCoeicneO1OxKP9yM+4ElmLaEFr+2AecVEn8sDZOSrSzv/1qk+sgAOa1kMOyDlu4jK+j1GZ70E7KKJAxRafKzdazi26s8h5dm+NLpTeQLvP27S6+urz/7T5aaUao26TWATt0cPPsgcK3f6Q1wJWVY4AVJtcmHWhueyo89+G38guD+agT5YBf39s25oIv5arehu8krYkLAs8BeG86DfuANYUCG2NomiTrX7Msx0E7ncl0bnXT04566M4PQPykWaWw==)

Reusable Transitions [​](#reusable-transitions)
-----------------------------------------------

Transitions can be reused through Vue's component system. To create a reusable transition, we can create a component that wraps the `<Transition>` component and passes down the slot content:

vue

    <!-- MyTransition.vue -->
    <script>
    // JavaScript hooks logic...
    </script>
    
    <template>
      <!-- wrap the built-in Transition component -->
      <Transition
        name="my-transition"
        @enter="onEnter"
        @leave="onLeave">
        <slot></slot> <!-- pass down slot content -->
      </Transition>
    </template>
    
    <style>
    /*
      Necessary CSS...
      Note: avoid using <style scoped> here since it
      does not apply to slot content.
    */
    </style>

Now `MyTransition` can be imported and used just like the built-in version:

template

    <MyTransition>
      <div v-if="show">Hello</div>
    </MyTransition>

Transition on Appear [​](#transition-on-appear)
-----------------------------------------------

If you also want to apply a transition on the initial render of a node, you can add the `appear` prop:

template

    <Transition appear>
      ...
    </Transition>

Transition Between Elements [​](#transition-between-elements)
-------------------------------------------------------------

In addition to toggling an element with `v-if` / `v-show`, we can also transition between two elements using `v-if` / `v-else` / `v-else-if`, as long as we make sure that there is only one element being shown at any given moment:

template

    <Transition>
      <button v-if="docState === 'saved'">Edit</button>
      <button v-else-if="docState === 'edited'">Save</button>
      <button v-else-if="docState === 'editing'">Cancel</button>
    </Transition>

Click to cycle through states:

Edit

[Try it in the Playground](https://play.vuejs.org/#eNqdk8tu2zAQRX9loI0SoLLcFN2ostEi6BekmwLa0NTYJkKRBDkSYhj+9wxJO3ZegBGu+Lhz7syQ3Bd/nJtNIxZN0QbplSMISKNbdkYNznqCPXhcwwHW3g5QsrTsTGekNYGgt/KBBCEsouimDGLCvrztTFtnGGN4QTg4zbK4ojY4YSDQTuOiKwbhN8pUXm221MDd3D11xfJeK/kIZEHupEagrbfjZssxzAgNs5nALIC2VxNILUJg1IpMxWmRUAY9U6IZ2/3zwgRFyhowYoieQaseq9ElDaTRrkYiVkyVWrPiXNdiAcequuIkPo3fMub5Sg4l9oqSevmXZ22dwR8YoQ74kdsL4Go7ZTbR74HT/KJfJlxleGrG8l4YifqNYVuf251vqOYr4llbXz4C06b75+ns1a3BPsb0KrBy14Aymnerlbby8Vc8cTajG35uzFITpu0t5ufzHQdeH6LBsezEO0eJVbB6pBiVVLPTU6jQEPpKyMj8dnmgkQs+HmQcvVTIQK1hPrv7GQAFt9eO9Bk6fZ8Ub52Qiri8eUo+4dbWD02exh79v/nBP+H2PStnwz/jelJ1geKvk/peHJ4BoRZYow==)

Transition Modes [​](#transition-modes)
---------------------------------------

In the previous example, the entering and leaving elements are animated at the same time, and we had to make them `position: absolute` to avoid the layout issue when both elements are present in the DOM.

However, in some cases this isn't an option, or simply isn't the desired behavior. We may want the leaving element to be animated out first, and for the entering element to only be inserted **after** the leaving animation has finished. Orchestrating such animations manually would be very complicated - luckily, we can enable this behavior by passing `<Transition>` a `mode` prop:

template

    <Transition mode="out-in">
      ...
    </Transition>

Here's the previous demo with `mode="out-in"`:

Click to cycle through states:

Edit

`<Transition>` also supports `mode="in-out"`, although it's much less frequently used.

Transition Between Components [​](#transition-between-components)
-----------------------------------------------------------------

`<Transition>` can also be used around [dynamic components](/guide/essentials/component-basics.html#dynamic-components):

template

    <Transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </Transition>

 A B

Component A

[Try it in the Playground](https://play.vuejs.org/#eNqtksFugzAMhl/F4tJNKtDLLoxWKnuDacdcUnC3SCGJiMmEqr77EkgLbXfYYZyI8/v77dinZG9M5npMiqS0dScMgUXqzY4p0RrdEZzAfnEp9fc7HuEMx063sPIZq6viTbdmHy+yfDwF5K2guhFUUcBUnkNvcelBGrjTooHaC7VCRXBAoT6hQTRyAH2w2DlsmKq1sgS8JuEwUCfxdgF7Gqt5ZqrMp+58X/5A2BrJCcOJSskPKP0v+K8UyvQENBjcsqTjjdAsAZe2ukHpI3dm/q5wXPZBPFqxZAf7gCrzGfufDlVwqB4cPjqurCChFSjeBvGRN+iTA9afdE+pUD43FjG/bSHsb667Mr9qJot89vCBMl8+oiotDTL8ZsE39UnYpRN0fQlK5A5jEE6BSVdiAdrwWtAAm+zFAnKLr0ydA3pJDDt0x/PrMrJifgGbKdFPfCwpWU+TuWz5omzfVCNcfJJ5geL8pqtFn5E07u7fSHFOj6TzDyUDNEM=)

[Try it in the Playground](https://play.vuejs.org/#eNqtks9ugzAMxl/F4tJNamGXXVhWqewVduSSgStFCkkUDFpV9d0XJyn9t8MOkxBg5/Pvi+Mci51z5TxhURdi7LxytG2NGpz1BB92cDvYezvAqqxixNLVjaC5ETRZ0Br8jpIe93LSBMfWAHRBYQ0aGms4Jvw6Q05rFvSS5NNzEgN4pMmbcwQgO1Izsj5CalhFRLDj1RN/wis8olpaCQHh4LQk5IiEll+owy+XCGXcREAHh+9t4WWvbFvAvBlsjzpk7gx5TeqJtdG4LbawY5KoLtR/NGjYoHkw+PTSjIqUNWDkwOK97DHUMjVEdqKNMqE272E5dajV+JvpVlSLJllUF4+QENX1ERox0kHzb8m+m1CEfpOgYYgpqVHOmJNpgLQQa7BOdooO8FK+joByxLc4tlsiX6s7HtnEyvU1vKTCMO+4pWKdBnO+0FfbDk31as5HsvR+Hl9auuozk+J1/hspz+mRdPoBYtonzg==)

Dynamic Transitions [​](#dynamic-transitions)
---------------------------------------------

`<Transition>` props like `name` can also be dynamic! It allows us to dynamically apply different transitions based on state change:

template

    <Transition :name="transitionName">
      <!-- ... -->
    </Transition>

This can be useful when you've defined CSS transitions / animations using Vue's transition class conventions and want to switch between them.

You can also apply different behavior in JavaScript transition hooks based on the current state of your component. Finally, the ultimate way of creating dynamic transitions is through [reusable transition components](#reusable-transitions) that accept props to change the nature of the transition(s) to be used. It may sound cheesy, but the only limit really is your imagination.

* * *

**Related**

*   [`<Transition>` API reference](/api/built-in-components.html#transition)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/transition.md)
TransitionGroup [​](#transitiongroup)
=====================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

`<TransitionGroup>` is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a list.

Differences from `<Transition>` [​](#differences-from-transition)
-----------------------------------------------------------------

`<TransitionGroup>` supports the same props, CSS transition classes, and JavaScript hook listeners as `<Transition>`, with the following differences:

*   By default, it doesn't render a wrapper element. But you can specify an element to be rendered with the `tag` prop.
    
*   [Transition modes](./transition.html#transition-modes) are not available, because we are no longer alternating between mutually exclusive elements.
    
*   Elements inside are **always required** to have a unique `key` attribute.
    
*   CSS transition classes will be applied to individual elements in the list, **not** to the group / container itself.
    

TIP

When used in [DOM templates](/guide/essentials/component-basics.html#dom-template-parsing-caveats), it should be referenced as `<transition-group>`.

Enter / Leave Transitions [​](#enter-leave-transitions)
-------------------------------------------------------

Here is an example of applying enter / leave transitions to a `v-for` list using `<TransitionGroup>`:

template

    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>

css

    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

Add at random indexRemove at random index

*   1
*   2
*   3
*   4
*   5

Move Transitions [​](#move-transitions)
---------------------------------------

The above demo has some obvious flaws: when an item is inserted or removed, its surrounding items instantly "jump" into place instead of moving smoothly. We can fix this by adding a few additional CSS rules:

css

    .list-move, /* apply transition to moving elements */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
    
    /* ensure leaving items are taken out of layout flow so that moving
       animations can be calculated correctly. */
    .list-leave-active {
      position: absolute;
    }

Now it looks much better - even animating smoothly when the whole list is shuffled:

AddRemoveShuffle

*   1
*   2
*   3
*   4
*   5

[Full Example](/examples/#list-transition)

Staggering List Transitions [​](#staggering-list-transitions)
-------------------------------------------------------------

By communicating with JavaScript transitions through data attributes, it's also possible to stagger transitions in a list. First, we render the index of an item as a data attribute on the DOM element:

template

    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) in computedList"
        :key="item.msg"
        :data-index="index"
      >
        {{ item.msg }}
      </li>
    </TransitionGroup>

Then, in JavaScript hooks, we animate the element with a delay based on the data attribute. This example is using the [GreenSock library](https://greensock.com/) to perform the animation:

js

    function onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }

*   Bruce Lee
*   Jackie Chan
*   Chuck Norris
*   Jet Li
*   Kung Fury

[Full Example in the Playground](https://play.vuejs.org/#eNqlVMuu0zAQ/ZVRNklRm7QLWETtBW4FSFCxYkdYmGSSmjp28KNQVfl3xk7SFyvEponPGc+cOTPNOXrbdenRYZRHa1Nq3lkwaF33VEjedkpbOIPGeg6lajtnsYIeaq1aiOlSfAlqDOtG3L8SUchSSWNBcPrZwNdCAqVqTZND/KxdibBDjKGf3xIfWXngCNs9k4/Udu/KA3xWWnPz1zW0sOOP6CcnG3jv9ImIQn67SvrpUJ9IE/WVxPHsSkw97gbN0zFJZrB5grNPrskcLUNXac2FRZ0k3GIbIvxLSsVTq3bqF+otM5jMUi5L4So0SSicHplwOKOyfShdO1lariQo+Yy10vhO+qwoZkNFFKmxJ4Gp6ljJrRe+vMP3yJu910swNXqXcco1h0pJHDP6CZHEAAcAYMydwypYCDAkJRdX6Sts4xGtUDAKotIVs9Scpd4q/A0vYJmuXo5BSm7JOIEW81DVo77VR207ZEf8F23LB23T+X9VrbNh82nn6UAz7ASzSCeANZe0AnBctIqqbIoojLCIIBvoL5pJw31DH7Ry3VDKsoYinSii4ZyXxhBQM2Fwwt58D7NeoB8QkXfDvwRd2XtceOsCHkwc8KCINAk+vADJppQUFjZ0DsGVGT3uFn1KSjoPeKLoaYtvCO/rIlz3vH9O5FiU/nXny/pDT6YGKZngg0/Zg1GErrMbp6N5NHxJFi3N/4dRkj5IYf5ULxCmiPJpI4rIr4kHimhvbWfyLHOyOzQpNZZ57jXNy4nRGFLTR/0fWBqe7w==)

[Full Example in the Playground](https://play.vuejs.org/#eNqtVE2P0zAQ/SujXNqgNmkPcIjaBbYCJKg4cSMcTDJNTB07+KNsVfW/M3aabNpyQltViT1vPPP8Zian6H3bJgeHURatTKF5ax9yyZtWaQuVYS3stGpg4peTXOayUNJYEJwea/ieS4ATNKbKYPKoXYGwRZzAeTYGPrNizxE2NZO30KZ2xR6+Kq25uTuGFrb81vrFyQo+On0kIJc/PCV8CmxL3DEnLJy8e8ksm8bdGkCjdVr2O4DfDvWRgtGN/JYC0SOkKVTTOotl1jv3hi3d+DngENILkey4sKinU26xiWH9AH6REN/Eqq36g3rDDE7jhMtCuBLN1NbcJIFEHN9RaNDWqjQDAyUfcac0fpA+CYoRCRSJsUeBiWpZwe2RSrK4w2rkVe2rdYG6LD5uH3EGpZI4iuurTdwDNBjpRJclg+UlhP914UnMZfIGm8kIKVEwciYivhoGLQlQ4hO8gkWyfD1yVHJDKgu0mAUmPXLuxRkYb5Ed8H8YL/7BeGx7Oa6hkLmk/yodBoo21BKtYBZpB7DikroKDvNGUeZ1HoVmyCNIO/ibZtJwy5X8pJVru9CWVeTpRB51+6wwhgw7Jgz2tnc/Q6/M0ZeWwKvmGZye0Wu78PIGexC6swdGxEnw/q6HOYUkt9DwMwhKxfS6GpY+KPHc45G8+6EYAV7reTjucf/uwUtSmvvTME1wDuISlVTwTqf0RiiyrtKR0tEs6r5l84b645dRkr5zoT8oXwBMHg2Tlke+jbwhj2prW5OlqZPtvkroYqnH3lK9nLgI46scnf8Cn22kBA==)

* * *

**Related**

*   [`<TransitionGroup>` API reference](/api/built-in-components.html#transitiongroup)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/transition-group.md)
KeepAlive [​](#keepalive)
=========================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

`<KeepAlive>` is a built-in component that allows us to conditionally cache component instances when dynamically switching between multiple components.

Basic Usage [​](#basic-usage)
-----------------------------

In the Component Basics chapter, we introduced the syntax for [Dynamic Components](/guide/essentials/component-basics.html#dynamic-components), using the `<component>` special element:

template

    <component :is="activeComponent" />

By default, an active component instance will be unmounted when switching away from it. This will cause any changed state it holds to be lost. When this component is displayed again, a new instance will be created with only the initial state.

In the example below, we have two stateful components - A contains a counter, while B contains a message synced with an input via `v-model`. Try updating the state of one of them, switch away, and then switch back to it:

 A B

Current component: A

count: 0+

You'll notice that when switched back, the previous changed state would have been reset.

Creating fresh component instance on switch is normally useful behavior, but in this case, we'd really like the two component instances to be preserved even when they are inactive. To solve this problem, we can wrap our dynamic component with the `<KeepAlive>` built-in component:

template

    <!-- Inactive components will be cached! -->
    <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive>

Now, the state will be persisted across component switches:

 A B

Current component: A

count: 0+

[Try it in the Playground](https://play.vuejs.org/#eNqtUsFOwzAM/RWrl4IGC+cqq2h3RFw495K12YhIk6hJi1DVf8dJSllBaAJxi+2XZz8/j0lhzHboeZIl1NadMA4sd73JKyVaozsHI9hnJqV+feJHmODY6RZS/JEuiL1uTTEXtiREnnINKFeAcgZUqtbKOqj7ruPKwe6s2VVguq4UJXEynAkDx1sjmeMYAdBGDFBLZu2uShre6ioJeaxIduAyp0KZ3oF7MxwRHWsEQmC4bXXDJWbmxpjLBiZ7DwptMUFyKCiJNP/BWUbO8gvnA+emkGKIgkKqRrRWfh+Z8MIWwpySpfbxn6wJKMGV4IuSs0UlN1HVJae7bxYvBuk+2IOIq7sLnph8P9u5DJv5VfpWWLaGqTzwZTCOM/M0IaMvBMihd04ruK+lqF/8Ajxms8EFbCiJxR8khsP6ncQosLWnWV6a/kUf2nqu75Fby04chA0iPftaYryhz6NBRLjdtajpHZTWPio=)

[Try it in the Playground](https://play.vuejs.org/#eNqtU8tugzAQ/JUVl7RKWveMXFTIseofcHHAiawasPxArRD/3rVNSEhbpVUrIWB3x7PM7jAkuVL3veNJmlBTaaFsVraiUZ22sO0alcNedw2s7kmIPHS1ABQLQDEBAMqWvwVQzffMSQuDz1aI6VreWpPCEBtsJppx4wE1s+zmNoIBNLdOt8cIjzut8XAKq3A0NAIY/QNveFEyi8DA8kZJZjlGALQWPVSSGfNYJjVvujIJeaxItuMyo6JVzoJ9VxwRmtUCIdDfNV3NJWam5j7HpPOY8BEYkwxySiLLP1AWkbK4oHzmXOVS9FFOSM3jhFR4WTNfRslcO54nSwJKcCD4RsnZmJJNFPXJEl8t88quOuc39fCrHalsGyWcnJL62apYNoq12UQ8DLEFjCMy+kKA7Jy1XQtPlRTVqx+Jx6zXOJI1JbH4jejg3T+KbswBzXnFlz9Tjes/V/3CjWEHDsL/OYNvdCE8Wu3kLUQEhy+ljh+brFFu)

TIP

When used in [DOM templates](/guide/essentials/component-basics.html#dom-template-parsing-caveats), it should be referenced as `<keep-alive>`.

Include / Exclude [​](#include-exclude)
---------------------------------------

By default, `<KeepAlive>` will cache any component instance inside. We can customize this behavior via the `include` and `exclude` props. Both props can be a comma-delimited string, a `RegExp`, or an array containing either types:

template

    <!-- comma-delimited string -->
    <KeepAlive include="a,b">
      <component :is="view" />
    </KeepAlive>
    
    <!-- regex (use `v-bind`) -->
    <KeepAlive :include="/a|b/">
      <component :is="view" />
    </KeepAlive>
    
    <!-- Array (use `v-bind`) -->
    <KeepAlive :include="['a', 'b']">
      <component :is="view" />
    </KeepAlive>

The match is checked against the component's [`name`](/api/options-misc.html#name) option, so components that need to be conditionally cached by `KeepAlive` must explicitly declare a `name` option.

TIP

Since version 3.2.34, a single-file component using `<script setup>` will automatically infer its `name` option based on the filename, removing the need to manually declare the name.

Max Cached Instances [​](#max-cached-instances)
-----------------------------------------------

We can limit the maximum number of component instances that can be cached via the `max` prop. When `max` is specified, `<KeepAlive>` behaves like an [LRU cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)): if the number of cached instances is about to exceed the specified max count, the least recently accessed cached instance will be destroyed to make room for the new one.

template

    <KeepAlive :max="10">
      <component :is="activeComponent" />
    </KeepAlive>

Lifecycle of Cached Instance [​](#lifecycle-of-cached-instance)
---------------------------------------------------------------

When a component instance is removed from the DOM but is part of a component tree cached by `<KeepAlive>`, it goes into a **deactivated** state instead of being unmounted. When a component instance is inserted into the DOM as part of a cached tree, it is **activated**.

A kept-alive component can register lifecycle hooks for these two states using [`onActivated()`](/api/composition-api-lifecycle.html#onactivated) and [`onDeactivated()`](/api/composition-api-lifecycle.html#ondeactivated):

vue

    <script setup>
    import { onActivated, onDeactivated } from 'vue'
    
    onActivated(() => {
      // called on initial mount
      // and every time it is re-inserted from the cache
    })
    
    onDeactivated(() => {
      // called when removed from the DOM into the cache
      // and also when unmounted
    })
    </script>

A kept-alive component can register lifecycle hooks for these two states using [`activated`](/api/options-lifecycle.html#activated) and [`deactivated`](/api/options-lifecycle.html#deactivated) hooks:

js

    export default {
      activated() {
        // called on initial mount
        // and every time it is re-inserted from the cache
      },
      deactivated() {
        // called when removed from the DOM into the cache
        // and also when unmounted
      }
    }

Note that:

*   `onActivated``activated` is also called on mount, and `onDeactivated``deactivated` on unmount.
    
*   Both hooks work for not only the root component cached by `<KeepAlive>`, but also descendant components in the cached tree.
    

* * *

**Related**

*   [`<KeepAlive>` API reference](/api/built-in-components.html#keepalive)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/keep-alive.md)
Teleport [​](#teleport)
=======================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/vue-3-teleport?friend=vuejs "Free Vue.js Teleport Lesson")

`<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

Basic Usage [​](#basic-usage)
-----------------------------

Sometimes we may run into the following scenario: a part of a component's template belongs to it logically, but from a visual standpoint, it should be displayed somewhere else in the DOM, outside of the Vue application.

The most common example of this is when building a full-screen modal. Ideally, we want the modal's button and the modal itself to live within the same component, since they are both related to the open / close state of the modal. But that means the modal will be rendered alongside the button, deeply nested in the application's DOM hierarchy. This can create some tricky issues when positioning the modal via CSS.

Consider the following HTML structure.

template

    <div class="outer">
      <h3>Vue Teleport Example</h3>
      <div>
        <MyModal />
      </div>
    </div>

And here is the implementation of `<MyModal>`:

vue

    <script setup>
    import { ref } from 'vue'
    
    const open = ref(false)
    </script>
    
    <template>
      <button @click="open = true">Open Modal</button>
    
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </template>
    
    <style scoped>
    .modal {
      position: fixed;
      z-index: 999;
      top: 20%;
      left: 50%;
      width: 300px;
      margin-left: -150px;
    }
    </style>

vue

    <script>
    export default {
      data() {
        return {
          open: false
        }
      }
    }
    </script>
    
    <template>
      <button @click="open = true">Open Modal</button>
    
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </template>
    
    <style scoped>
    .modal {
      position: fixed;
      z-index: 999;
      top: 20%;
      left: 50%;
      width: 300px;
      margin-left: -150px;
    }
    </style>

The component contains a `<button>` to trigger the opening of the modal, and a `<div>` with a class of `.modal`, which will contain the modal's content and a button to self-close.

When using this component inside the initial HTML structure, there are a number of potential issues:

*   `position: fixed` only places the element relative to the viewport when no ancestor element has `transform`, `perspective` or `filter` property set. If, for example, we intend to animate the ancestor `<div class="outer">` with a CSS transform, it would break the modal layout!
    
*   The modal's `z-index` is constrained by its containing elements. If there is another element that overlaps with `<div class="outer">` and has a higher `z-index`, it would cover our modal.
    

`<Teleport>` provides a clean way to work around these, by allowing us to break out of the nested DOM structure. Let's modify `<MyModal>` to use `<Teleport>`:

template

    <button @click="open = true">Open Modal</button>
    
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>

The `to` target of `<Teleport>` expects a CSS selector string or an actual DOM node. Here, we are essentially telling Vue to "**teleport** this template fragment **to** the **`body`** tag".

You can click the button below and inspect the `<body>` tag via your browser's devtools:

Open Modal

You can combine `<Teleport>` with [`<Transition>`](./transition.html) to create animated modals - see [Example here](/examples/#modal).

TIP

The teleport `to` target must be already in the DOM when the `<Teleport>` component is mounted. Ideally, this should be an element outside the entire Vue application. If targeting another element rendered by Vue, you need to make sure that element is mounted before the `<Teleport>`.

Using with Components [​](#using-with-components)
-------------------------------------------------

`<Teleport>` only alters the rendered DOM structure - it does not affect the logical hierarchy of the components. That is to say, if `<Teleport>` contains a component, that component will remain a logical child of the parent component containing the `<Teleport>`. Props passing and event emitting will continue to work the same way.

This also means that injections from a parent component work as expected, and that the child component will be nested below the parent component in the Vue Devtools, instead of being placed where the actual content moved to.

Disabling Teleport [​](#disabling-teleport)
-------------------------------------------

In some cases, we may want to conditionally disable `<Teleport>`. For example, we may want to render a component as an overlay for desktop, but inline on mobile. `<Teleport>` supports the `disabled` prop which can be dynamically toggled:

template

    <Teleport :disabled="isMobile">
      ...
    </Teleport>

Where the `isMobile` state can be dynamically updated by detecting media query changes.

Multiple Teleports on the Same Target [​](#multiple-teleports-on-the-same-target)
---------------------------------------------------------------------------------

A common use case would be a reusable `<Modal>` component, with the potential for multiple instances to be active at the same time. For this kind of scenario, multiple `<Teleport>` components can mount their content to the same target element. The order will be a simple append - later mounts will be located after earlier ones within the target element.

Given the following usage:

template

    <Teleport to="#modals">
      <div>A</div>
    </Teleport>
    <Teleport to="#modals">
      <div>B</div>
    </Teleport>

The rendered result would be:

html

    <div id="modals">
      <div>A</div>
      <div>B</div>
    </div>

* * *

**Related**

*   [`<Teleport>` API reference](/api/built-in-components.html#teleport)
*   [Handling Teleports in SSR](/guide/scaling-up/ssr.html#teleports)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/teleport.md)
Suspense [​](#suspense)
=======================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Experimental Feature

`<Suspense>` is an experimental feature. It is not guaranteed to reach stable status and the API may change before it does.

`<Suspense>` is a built-in component for orchestrating async dependencies in a component tree. It can render a loading state while waiting for multiple nested async dependencies down the component tree to be resolved.

Async Dependencies [​](#async-dependencies)
-------------------------------------------

To explain the problem `<Suspense>` is trying to solve and how it interacts with these async dependencies, let's imagine a component hierarchy like the following:

    <Suspense>
    └─ <Dashboard>
       ├─ <Profile>
       │  └─ <FriendStatus> (component with async setup())
       └─ <Content>
          ├─ <ActivityFeed> (async component)
          └─ <Stats> (async component)

In the component tree there are multiple nested components whose rendering depends on some async resource to be resolved first. Without `<Suspense>`, each of them will need to handle its own loading / error and loaded states. In the worst case scenario, we may see three loading spinners on the page, with content displayed at different times.

The `<Suspense>` component gives us the ability to display top-level loading / error states while we wait on these nested async dependencies to be resolved.

There are two types of async dependencies that `<Suspense>` can wait on:

1.  Components with an async `setup()` hook. This includes components using `<script setup>` with top-level `await` expressions.
    
2.  [Async Components](/guide/components/async.html).
    

### `async setup()` [​](#async-setup)

A Composition API component's `setup()` hook can be async:

js

    export default {
      async setup() {
        const res = await fetch(...)
        const posts = await res.json()
        return {
          posts
        }
      }
    }

If using `<script setup>`, the presence of top-level `await` expressions automatically makes the component an async dependency:

vue

    <script setup>
    const res = await fetch(...)
    const posts = await res.json()
    </script>
    
    <template>
      {{ posts }}
    </template>

### Async Components [​](#async-components)

Async components are **"suspensible"** by default. This means that if it has a `<Suspense>` in the parent chain, it will be treated as an async dependency of that `<Suspense>`. In this case, the loading state will be controlled by the `<Suspense>`, and the component's own loading, error, delay and timeout options will be ignored.

The async component can opt-out of `Suspense` control and let the component always control its own loading state by specifying `suspensible: false` in its options.

Loading State [​](#loading-state)
---------------------------------

The `<Suspense>` component has two slots: `#default` and `#fallback`. Both slots only allow for **one** immediate child node. The node in the default slot is shown if possible. If not, the node in the fallback slot will be shown instead.

template

    <Suspense>
      <!-- component with nested async dependencies -->
      <Dashboard />
    
      <!-- loading state via #fallback slot -->
      <template #fallback>
        Loading...
      </template>
    </Suspense>

On initial render, `<Suspense>` will render its default slot content in memory. If any async dependencies are encountered during the process, it will enter a **pending** state. During the pending state, the fallback content will be displayed. When all encountered async dependencies have been resolved, `<Suspense>` enters a **resolved** state and the resolved default slot content is displayed.

If no async dependencies were encountered during the initial render, `<Suspense>` will directly go into a resolved state.

Once in a resolved state, `<Suspense>` will only revert to a pending state if the root node of the `#default` slot is replaced. New async dependencies nested deeper in the tree will **not** cause the `<Suspense>` to revert to a pending state.

When a revert happens, fallback content will not be immediately displayed. Instead, `<Suspense>` will display the previous `#default` content while waiting for the new content and its async dependencies to be resolved. This behavior can be configured with the `timeout` prop: `<Suspense>` will switch to fallback content if it takes longer than `timeout` to render the new default content. A `timeout` value of `0` will cause the fallback content to be displayed immediately when default content is replaced.

Events [​](#events)
-------------------

The `<Suspense>` component emits 3 events: `pending`, `resolve` and `fallback`. The `pending` event occurs when entering a pending state. The `resolve` event is emitted when new content has finished resolving in the `default` slot. The `fallback` event is fired when the contents of the `fallback` slot are shown.

The events could be used, for example, to show a loading indicator in front of the old DOM while new components are loading.

Error Handling [​](#error-handling)
-----------------------------------

`<Suspense>` currently does not provide error handling via the component itself - however, you can use the [`errorCaptured`](/api/options-lifecycle.html#errorcaptured) option or the [`onErrorCaptured()`](/api/composition-api-lifecycle.html#onerrorcaptured) hook to capture and handle async errors in the parent component of `<Suspense>`.

Combining with Other Components [​](#combining-with-other-components)
---------------------------------------------------------------------

It is common to want to use `<Suspense>` in combination with the [`<Transition>`](./transition.html) and [`<KeepAlive>`](./keep-alive.html) components. The nesting order of these components is important to get them all working correctly.

In addition, these components are often used in conjunction with the `<RouterView>` component from [Vue Router](https://router.vuejs.org/).

The following example shows how to nest these components so that they all behave as expected. For simpler combinations you can remove the components that you don't need:

template

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>
    
              <!-- loading state -->
              <template #fallback>
                Loading...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>

Vue Router has built-in support for [lazily loading components](https://router.vuejs.org/guide/advanced/lazy-loading.html) using dynamic imports. These are distinct from async components and currently they will not trigger `<Suspense>`. However, they can still have async components as descendants and those can trigger `<Suspense>` in the usual way.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/built-ins/suspense.md)
Single-File Components [​](#single-file-components)
===================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Introduction [​](#introduction)
-------------------------------

Vue Single-File Components (a.k.a. `*.vue` files, abbreviated as **SFC**) is a special file format that allows us to encapsulate the template, logic, **and** styling of a Vue component in a single file. Here's an example SFC:

vue

    <script>
    export default {
      data() {
        return {
          greeting: 'Hello World!'
        }
      }
    }
    </script>
    
    <template>
      <p class="greeting">{{ greeting }}</p>
    </template>
    
    <style>
    .greeting {
      color: red;
      font-weight: bold;
    }
    </style>

vue

    <script setup>
    import { ref } from 'vue'
    const greeting = ref('Hello World!')
    </script>
    
    <template>
      <p class="greeting">{{ greeting }}</p>
    </template>
    
    <style>
    .greeting {
      color: red;
      font-weight: bold;
    }
    </style>

As we can see, Vue SFC is a natural extension of the classic trio of HTML, CSS and JavaScript. The `<template>`, `<script>`, and `<style>` blocks encapsulate and colocate the view, logic and styling of a component in the same file. The full syntax is defined in the [SFC Syntax Specification](/api/sfc-spec.html).

Why SFC [​](#why-sfc)
---------------------

While SFCs require a build step, there are numerous benefits in return:

*   Author modularized components using familiar HTML, CSS and JavaScript syntax
*   [Colocation of inherently coupled concerns](#what-about-separation-of-concerns)
*   Pre-compiled templates without runtime compilation cost
*   [Component-scoped CSS](/api/sfc-css-features.html)
*   [More ergonomic syntax when working with Composition API](/api/sfc-script-setup.html)
*   More compile-time optimizations by cross-analyzing template and script
*   [IDE support](/guide/scaling-up/tooling.html#ide-support) with auto-completion and type-checking for template expressions
*   Out-of-the-box Hot-Module Replacement (HMR) support

SFC is a defining feature of Vue as a framework, and is the recommended approach for using Vue in the following scenarios:

*   Single-Page Applications (SPA)
*   Static Site Generation (SSG)
*   Any non-trivial frontend where a build step can be justified for better development experience (DX).

That said, we do realize there are scenarios where SFCs can feel like overkill. This is why Vue can still be used via plain JavaScript without a build step. If you are just looking for enhancing largely static HTML with light interactions, you can also check out [petite-vue](https://github.com/vuejs/petite-vue), a 6 kB subset of Vue optimized for progressive enhancement.

How It Works [​](#how-it-works)
-------------------------------

Vue SFC is a framework-specific file format and must be pre-compiled by [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) into standard JavaScript and CSS. A compiled SFC is a standard JavaScript (ES) module - which means with proper build setup you can import an SFC like a module:

js

    import MyComponent from './MyComponent.vue'
    
    export default {
      components: {
        MyComponent
      }
    }

`<style>` tags inside SFCs are typically injected as native `<style>` tags during development to support hot updates. For production they can be extracted and merged into a single CSS file.

You can play with SFCs and explore how they are compiled in the [Vue SFC Playground](https://play.vuejs.org/).

In actual projects, we typically integrate the SFC compiler with a build tool such as [Vite](https://vitejs.dev/) or [Vue CLI](http://cli.vuejs.org/) (which is based on [webpack](https://webpack.js.org/)), and Vue provides official scaffolding tools to get you started with SFCs as fast as possible. Check out more details in the [SFC Tooling](/guide/scaling-up/tooling.html) section.

What About Separation of Concerns? [​](#what-about-separation-of-concerns)
--------------------------------------------------------------------------

Some users coming from a traditional web development background may have the concern that SFCs are mixing different concerns in the same place - which HTML/CSS/JS were supposed to separate!

To answer this question, it is important for us to agree that **separation of concerns is not equal to the separation of file types**. The ultimate goal of engineering principles is to improve the maintainability of codebases. Separation of concerns, when applied dogmatically as separation of file types, does not help us reach that goal in the context of increasingly complex frontend applications.

In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable.

Note even if you don't like the idea of Single-File Components, you can still leverage its hot-reloading and pre-compilation features by separating your JavaScript and CSS into separate files using [Src Imports](/api/sfc-spec.html#src-imports).

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/sfc.md)
Tooling [​](#tooling)
=====================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Try It Online [​](#try-it-online)
---------------------------------

You don't need to install anything on your machine to try out Vue SFCs - there are online playgrounds that allow you to do so right in the browser:

*   [Vue SFC Playground](https://play.vuejs.org)
    *   Always deployed from latest commit
    *   Designed for inspecting component compilation results
*   [Vue + Vite on StackBlitz](https://vite.new/vue)
    *   IDE-like environment running actual Vite dev server in the browser
    *   Closest to local setup

It is also recommended to use these online playgrounds to provide reproductions when reporting bugs.

Project Scaffolding [​](#project-scaffolding)
---------------------------------------------

### Vite [​](#vite)

[Vite](https://vitejs.dev/) is a lightweight and fast build tool with first-class Vue SFC support. It is created by Evan You, who is also the author of Vue!

To get started with Vite + Vue, simply run:

    $ npm init vue@latest

This command will install and execute [create-vue](https://github.com/vuejs/create-vue), the official Vue project scaffolding tool.

*   To learn more about Vite, check out the [Vite docs](https://vitejs.dev).
*   To configure Vue-specific behavior in a Vite project, for example passing options to the Vue compiler, check out the docs for [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme).

Both online playgrounds mentioned above also support downloading files as a Vite project.

### Vue CLI [​](#vue-cli)

[Vue CLI](https://cli.vuejs.org/) is the official webpack-based toolchain for Vue. It is now in maintenance mode and we recommend starting new projects with Vite unless you rely on specific webpack-only features. Vite will provide superior developer experience in most cases.

For information on migrating from Vue CLI to Vite:

*   [Vue CLI -> Vite Migration Guide from VueSchool.io](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
*   [Tools / Plugins that help with auto migration](https://github.com/vitejs/awesome-vite#vue-cli)

### Note on In-Browser Template Compilation [​](#note-on-in-browser-template-compilation)

When using Vue without a build step, component templates are written either directly in the page's HTML or as inlined JavaScript strings. In such cases, Vue needs to ship the template compiler to the browser in order to perform on-the-fly template compilation. On the other hand, the compiler would be unnecessary if we pre-compile the templates with a build step. To reduce client bundle size, Vue provides [different "builds"](https://unpkg.com/browse/vue@3/dist/) optimized for different use cases.

*   Build files that start with `vue.runtime.*` are **runtime-only builds**: they do not include the compiler. When using these builds, all templates must be pre-compiled via a build step.
    
*   Build files that do not include `.runtime` are **full builds**: they include the compiler and support compiling templates directly in the browser. However, they will increase the payload by ~14kb.
    

Our default tooling setups use the runtime-only build since all templates in SFCs are pre-compiled. If, for some reason, you need in-browser template compilation even with a build step, you can do so by configuring the build tool to alias `vue` to `vue/dist/vue.esm-bundler.js` instead.

If you are looking for a lighter-weight alternative for no-build-step usage, check out [petite-vue](https://github.com/vuejs/petite-vue).

IDE Support [​](#ide-support)
-----------------------------

*   The recommended IDE setup is [VSCode](https://code.visualstudio.com/) + the [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension. The extension provides syntax highlighting, TypeScript support, and intellisense for template expressions and component props.
    
    TIP
    
    Volar replaces [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), our previous official VSCode extension for Vue 2. If you have Vetur currently installed, make sure to disable it in Vue 3 projects.
    
*   [WebStorm](https://www.jetbrains.com/webstorm/) also provides great built-in support for Vue SFCs.
    
*   Other IDEs that support the [Language Service Protocol](https://microsoft.github.io/language-server-protocol/) (LSP) can also leverage Volar's core functionalities via LSP:
    
    *   Sublime Text support via [LSP-Volar](https://github.com/sublimelsp/LSP-volar).
        
    *   vim / Neovim support via [coc-volar](https://github.com/yaegassy/coc-volar).
        
    *   emacs support via [lsp-mode](https://emacs-lsp.github.io/lsp-mode/page/lsp-volar/)
        

Browser Devtools [​](#browser-devtools)
---------------------------------------

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3?friend=vuejs "Free Vue.js Devtools Lesson")

The Vue browser devtools extension allows you to explore a Vue app's component tree, inspect the state of individual components, track state management events, and profile performance.

![devtools screenshot](https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png)

*   [Documentation](https://devtools.vuejs.org/)
*   [Chrome Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
*   [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
*   [Standalone Electron app](https://devtools.vuejs.org/guide/installation.html#standalone)

TypeScript [​](#typescript)
---------------------------

Main article: [Using Vue with TypeScript](/guide/typescript/overview.html).

*   [Volar](https://github.com/johnsoncodehk/volar) provides type checking for SFCs using `<script lang="ts">` blocks, including template expressions and cross-component props validation.
    
*   Use [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) for performing the same type checking from the command line, or for generating `d.ts` files for SFCs.
    

Testing [​](#testing)
---------------------

Main article: [Testing Guide](/guide/scaling-up/testing.html).

*   [Cypress](https://www.cypress.io/) is recommended for E2E tests. It can also be used for component testing for Vue SFCs via the [Cypress Component Test Runner](https://docs.cypress.io/guides/component-testing/introduction).
    
*   [Vitest](https://vitest.dev/) is a test runner created by Vue / Vite team members that focuses on speed. It is specifically designed for Vite-based applications to provide the same instant feedback loop for unit / component testing.
    
*   [Jest](https://jestjs.io/) can be made to work with Vite via [vite-jest](https://github.com/sodatea/vite-jest). However, this is only recommended if you have existing Jest-based test suites that you need to migrate over to a Vite-based setup, as Vitest provides similar functionalities with a much more efficient integration.
    

Linting [​](#linting)
---------------------

The Vue team maintains [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue), an [ESLint](https://eslint.org/) plugin that supports SFC-specific linting rules.

Users previously using Vue CLI may be used to having linters configured via webpack loaders. However when using a Vite-based build setup, our general recommendation is:

1.  `npm install -D eslint eslint-plugin-vue`, then follow `eslint-plugin-vue`'s [configuration guide](https://eslint.vuejs.org/user-guide/#usage).
    
2.  Setup ESLint IDE extensions, for example [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), so you get linter feedback right in your editor during development. This also avoids unnecessary linting cost when starting the dev server.
    
3.  Run ESLint as part of the production build command, so you get full linter feedback before shipping to production.
    
4.  (Optional) Setup tools like [lint-staged](https://github.com/okonet/lint-staged) to automatically lint modified files on git commit.
    

Formatting [​](#formatting)
---------------------------

*   The [Volar](https://github.com/johnsoncodehk/volar) VSCode extension provides formatting for Vue SFCs out of the box.
    
*   Alternatively, [Prettier](https://prettier.io/) provides built-in Vue SFC formatting support.
    

SFC Custom Block Integrations [​](#sfc-custom-block-integrations)
-----------------------------------------------------------------

Custom blocks are compiled into imports to the same Vue file with different request queries. It is up to the underlying build tool to handle these import requests.

*   If using Vite, a custom Vite plugin should be used to transform matched custom blocks into executable JavaScript. [Example](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks)
    
*   If using Vue CLI or plain webpack, a webpack loader should be configured to transform the matched blocks. [Example](https://vue-loader.vuejs.org/guide/custom-blocks.html)
    

Lower-Level Packages [​](#lower-level-packages)
-----------------------------------------------

### `@vue/compiler-sfc` [​](#vue-compiler-sfc)

*   [Docs](https://github.com/vuejs/core/tree/main/packages/compiler-sfc)

This package is part of the Vue core monorepo and is always published with the same version as the main `vue` package. It is included as a dependency of the main `vue` package and proxied under `vue/compiler-sfc` so you don't need to install it individually.

The package itself provides lower-level utilities for processing Vue SFCs and is only meant for tooling authors that need to support Vue SFCs in custom tools.

TIP

Always prefer using this package via the `vue/compiler-sfc` deep import since this ensures its version is in sync with the Vue runtime.

### `@vitejs/plugin-vue` [​](#vitejs-plugin-vue)

*   [Docs](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)

Official plugin that provides Vue SFC support in Vite.

### `vue-loader` [​](#vue-loader)

*   [Docs](https://vue-loader.vuejs.org/)

The official loader that provides Vue SFC support in webpack. If you are using Vue CLI, also see [docs on modifying `vue-loader` options in Vue CLI](https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader).

Other Online Playgrounds [​](#other-online-playgrounds)
-------------------------------------------------------

*   [VueUse Playground](https://play.vueuse.org)
*   [Vue + Vite on Repl.it](https://replit.com/@templates/VueJS-with-Vite)
*   [Vue on CodeSandbox](https://codesandbox.io/s/vue-3)
*   [Vue on Codepen](https://codepen.io/pen/editor/vue)
*   [Vue on Components.studio](https://components.studio/create/vue3)
*   [Vue on WebComponents.dev](https://webcomponents.dev/create/cevue)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/tooling.md)
Routing [​](#routing)
=====================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Client-Side vs. Server-Side Routing [​](#client-side-vs-server-side-routing)
----------------------------------------------------------------------------

Routing on the server side means the server sending a response based on the URL path that the user is visiting. When we click on a link in a traditional server-rendered web app, the browser receives an HTML response from the server and reloads the entire page with the new HTML.

In a [Single-Page Application](https://developer.mozilla.org/en-US/docs/Glossary/SPA) (SPA), however, the client-side JavaScript can intercept the navigation, dynamically fetch new data, and update the current page without full page reloads. This typically results in a more snappy user experience, especially for use cases that are more like actual "applications", where the user is expected to perform many interactions over a long period of time.

In such SPAs, the "routing" is done on the client side, in the browser. A client-side router is responsible for managing the application's rendered view using browser APIs such as [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) or the [`hashchange` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event).

Official Router [​](#official-router)
-------------------------------------

[Watch a Free Video Course on Vue School](https://vueschool.io/courses/vue-router-4-for-everyone?friend=vuejs "Free Vue Router Course")

Vue is well-suited for building SPAs. For most SPAs, it's recommended to use the officially-supported [Vue Router library](https://github.com/vuejs/router). For more details, see Vue Router's [documentation](https://router.vuejs.org/).

Simple Routing from Scratch [​](#simple-routing-from-scratch)
-------------------------------------------------------------

If you only need very simple routing and do not wish to involve a full-featured router library, you can do so with [Dynamic Components](/guide/essentials/component-basics.html#dynamic-components) and update the current component state by listening to browser [`hashchange` events](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event) or using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).

Here's a bare-bone example:

vue

    <script setup>
    import { ref, computed } from 'vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import NotFound from './NotFound.vue'
    
    const routes = {
      '/': Home,
      '/about': About
    }
    
    const currentPath = ref(window.location.hash)
    
    window.addEventListener('hashchange', () => {
      currentPath.value = window.location.hash
    })
    
    const currentView = computed(() => {
      return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
    </script>
    
    <template>
      <a href="#/">Home</a> |
      <a href="#/about">About</a> |
      <a href="#/non-existent-path">Broken Link</a>
      <component :is="currentView" />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNptUk1vgkAQ/SsTegAThZp4MmhikzY9mKanXkoPWxjLRpgly6JN1P/eWb5Eywlm572ZN2/m5GyKwj9U6CydsIy1LAyUaKpiHZHMC6UNnEDjbgqxyovKYAIX2GmVg8sktwe9qhzbdz+wga15TW++VWX6fB3dAt6UeVEVJT2me2hhEcWKSgOamVjCCk4RAbiBu6xbT5tI2ML8VDeI6HLlxZXWSOZdmJTJPJB3lJSoo5+pWBipyE9FmU4soU2IJHk+MGUrS4OE2nMtIk4F/aA7BW8Cq3WjYlDbP4isQu4wVp0F1Q1uFH1IPDK+c9cb1NW8B03tyJ//uvhlJmP05hM4n60TX/bb2db0CoNmpbxMDgzmRSYMcgQQCkjZhlXkPASRs7YmhoFYw/k+WXvKiNrTcQgpmuFv7ZOZFSyQ4U9a7ZFgK2lvSTXFDqmIQbCUJTMHFkQOBAwKg16kM3W6O7K3eSs+nbeK+eee1V/XKK0dY4Q3vLhR6uJxMUK8/AFKaB6k)

vue

    <script>
    import Home from './Home.vue'
    import About from './About.vue'
    import NotFound from './NotFound.vue'
    
    const routes = {
      '/': Home,
      '/about': About
    }
    
    export default {
      data() {
        return {
          currentPath: window.location.hash
        }
      },
      computed: {
        currentView() {
          return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
      },
      mounted() {
        window.addEventListener('hashchange', () => {
    		  this.currentPath = window.location.hash
    		})
      }
    }
    </script>
    
    <template>
      <a href="#/">Home</a> |
      <a href="#/about">About</a> |
      <a href="#/non-existent-path">Broken Link</a>
      <component :is="currentView" />
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNptUstO6zAQ/ZVR7iKtVJKLxCpKK3Gli1ggxIoNZmGSKbFoxpEzoUi0/87YeVBKNonHPmfOmcdndN00yXuHURblbeFMwxtFpm6sY7i1NcLW2RriJPWBB8bT8/WL7Xh6D9FPwL3lG9tROWHGiwGmqLDUMjhhYgtr+FQEEKdxFqRXfaR9YrkKAoqOnocfQaDEre523PNKzXqx7M8ADrlzNEYAReccEj9orjLYGyrtPtnZQrOxlFS6rXqgZJdPUC5s3YivMhuTDCkeDe6/dSalvognrkybnIgl7c4UuLhcwuHgS3v2/7EPvzRruRXJ7/SDU12W/98l451pGQndIvaWi0rTK8YrEPx64ymKFQOce5DOzlfs4cdlkA+NzdNpBSRgrJudZpQIINdQOdyuVfQnVdHGzydP9QYO549hXIII45qHkKUL/Ail8EUjBgX+z9k3JLgz9OZJgeInYElAkJlWmCcDUBGkAsrTyWS0isYV9bv803x1OTiWwzlrWtxZ2lDGDO90mWepV3+vZojHL3QQKQE=)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/routing.md)
State Management [​](#state-management)
=======================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

What is State Management? [​](#what-is-state-management)
--------------------------------------------------------

Technically, every Vue component instance already "manages" its own reactive state. Take a simple counter component as an example:

vue

    <script setup>
    import { ref } from 'vue'
    
    // state
    const count = ref(0)
    
    // actions
    function increment() {
      count.value++
    }
    </script>
    
    <!-- view -->
    <template>{{ count }}</template>

vue

    <script>
    export default {
      // state
      data() {
        return {
          count: 0
        }
      },
      // actions
      methods: {
        increment() {
          this.count++
        }
      }
    }
    </script>
    
    <!-- view -->
    <template>{{ count }}</template>

It is a self-contained unit with the following parts:

*   The **state**, the source of truth that drives our app;
*   The **view**, a declarative mapping of the **state**;
*   The **actions**, the possible ways the state could change in reaction to user inputs from the **view**.

This is a simple representation of the concept of "one-way data flow":

![state flow diagram](/assets/state-flow.a8bc738e.png)

However, the simplicity starts to break down when we have **multiple components that share a common state**:

1.  Multiple views may depend on the same piece of state.
2.  Actions from different views may need to mutate the same piece of state.

For case one, a possible workaround is by "lifting" the shared state up to a common ancestor component, and then pass it down as props. However, this quickly gets tedious in component trees with deep hierarchies, leading to another problem known as [Prop Drilling](/guide/components/provide-inject.html#prop-drilling).

For case two, we often find ourselves resorting to solutions such as reaching for direct parent / child instances via template refs, or trying to mutate and synchronize multiple copies of the state via emitted events. Both of these patterns are brittle and quickly lead to unmaintainable code.

A simpler and more straightforward solution is to extract the shared state out of the components, and manage it in a global singleton. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

Simple State Management with Reactivity API [​](#simple-state-management-with-reactivity-api)
---------------------------------------------------------------------------------------------

In Options API, reactive data is declared using the `data()` option. Internally, the object returned by `data()` is made reactive via the [`reactive()`](/api/reactivity-core.html#reactive) function, which is also available as a public API.

If you have a piece of state that should be shared by multiple instances, you can use [`reactive()`](/api/reactivity-core.html#reactive) to create a reactive object, and then import it into multiple components:

js

    // store.js
    import { reactive } from 'vue'
    
    export const store = reactive({
      count: 0
    })

vue

    <!-- ComponentA.vue -->
    <script setup>
    import { store } from './store.js'
    </script>
    
    <template>From A: {{ store.count }}</template>

vue

    <!-- ComponentB.vue -->
    <script setup>
    import { store } from './store.js'
    </script>
    
    <template>From B: {{ store.count }}</template>

vue

    <!-- ComponentA.vue -->
    <script>
    import { store } from './store.js'
    
    export default {
      data() {
        return {
          store
        }
      }
    }
    </script>
    
    <template>From A: {{ store.count }}</template>

vue

    <!-- ComponentB.vue -->
    <script>
    import { store } from './store.js'
    
    export default {
      data() {
        return {
          store
        }
      }
    }
    </script>
    
    <template>From B: {{ store.count }}</template>

Now whenever the `store` object is mutated, both `<ComponentA>` and `<ComponentB>` will update their views automatically - we have a single source of truth now.

However, this also means any component importing `store` can mutate it however they want:

template

    <template>
      <button @click="store.count++">
        From B: {{ store.count }}
      </button>
    </template>

While this works in simple cases, global state that can be arbitrarily mutated by any component is not going to be very maintainable in the long run. To ensure the state-mutating logic is centralized like the state itself, it is recommended to define methods on the store with names that express the intention of the actions:

js

    // store.js
    import { reactive } from 'vue'
    
    export const store = reactive({
      count: 0,
      increment() {
        this.count++
      }
    })

template

    <template>
      <button @click="store.increment()">
        From B: {{ store.count }}
      </button>
    </template>

[Try it in the Playground](https://play.vuejs.org/#eNrNkk1uwyAQha8yYpNEiUzXllPVrtRTeJNSqtLGgGBsVbK4ewdwnT9FWWSTFczwmPc+xMhqa4uhl6xklRdOWQQvsbfPrVadNQ7h1dCqpcYaPp3pYFHwQyteXVxKm0tpM0krnm3IgAqUnd3vUFIFUB1Z8bNOkzoVny+wDTuNcZ1gBI/GSQhzqlQX3/5Gng81pA1t33tEo+FF7JX42bYsT1BaONlRguWqZZMU4C261CWMk3EhTK8RQphm8Twse/BscoUsvdqDkTX3kP3nI6aZwcmdQDUcMPJPabX8TQphtCf0RLqd1csxuqQAJTxtYnEUGtIpAH4pn1Ou17FDScOKhT+QNAVM)

[Try it in the Playground](https://play.vuejs.org/#eNrdU8FqhDAU/JVHLruyi+lZ3FIt9Cu82JilaTWR5CkF8d8bE5O1u1so9FYQzAyTvJnRTKTo+3QcOMlIbpgWPT5WUnS90gjPyr4ll1jAWasOdim9UMum3a20vJWWqxSgkvzTyRt+rocWYVpYFoQm8wRsJh+viHLBcyXtk9No2ALkXd/WyC0CyDfW6RVTOiancQM5ku+x7nUxgUGlOcwxn8Ppu7HJ7udqaqz3SYikOQ5aBgT+OA9slt9kasToFnb5OiAqCU+sFezjVBHvRUimeWdT7JOKrFKAl8VvYatdI6RMDRJhdlPtWdQf5mdQP+SHdtyX/IftlH9pJyS1vcQ2NK8ZivFSiL8BsQmmpMG1s1NU79frYA1k8OD+/I3pUA6+CeNdHg6hmoTMX9pPSnk=)

TIP

Note the click handler uses `store.increment()` with parentheses - this is necessary to call the method with the proper `this` context since it's not a component method.

Although here we are using a single reactive object as a store, you can also share reactive state created using other [Reactivity APIs](/api/reactivity-core.html) such as `ref()` or `computed()`, or even return global state from a [Composable](/guide/reusability/composables.html):

js

    import { ref } from 'vue'
    
    // global state, created in module scope
    const globalCount = ref(1)
    
    export function useCount() {
      // local state, created per-component
      const localCount = ref(1)
    
      return {
        globalCount,
        localCount
      }
    }

The fact that Vue's reactivity system is decoupled from the component model makes it extremely flexible.

SSR Considerations [​](#ssr-considerations)
-------------------------------------------

If you are building an application that leverages [Server-Side Rendering (SSR)](./ssr.html), the above pattern can lead to issues due to the store being a singleton shared across multiple requests. This is discussed in [more details](./ssr.html#cross-request-state-pollution) in the SSR guide.

Pinia [​](#pinia)
-----------------

While our hand-rolled state management solution will suffice in simple scenarios, there are many more things to consider in large-scale production applications:

*   Stronger conventions for team collaboration
*   Integrating with the Vue DevTools, including timeline, in-component inspection, and time-travel debugging
*   Hot Module Replacement
*   Server-Side Rendering support

[Pinia](https://pinia.vuejs.org) is a state management library that implements all of the above. It is maintained by the Vue core team, and works with both Vue 2 and Vue 3.

Existing users may be familiar with [Vuex](https://vuex.vuejs.org/), the previous official state management library for Vue. With Pinia serving the same role in the ecosystem, Vuex is now in maintenance mode. It still works, but will no longer receive new features. It is recommended to use Pinia for new applications.

Pinia started out as an exploration of what the next iteration of Vuex could look like, incorporating many ideas from core team discussions for Vuex 5. Eventually, we realized that Pinia already implements most of what we wanted in Vuex 5, and decided to make it the new recommendation instead.

Compared to Vuex, Pinia provides a simpler API with less ceremony, offers Composition-API-style APIs, and most importantly, has solid type inference support when used with TypeScript.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/state-management.md)
Testing [​](#testing)
=====================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Why Test? [​](#why-test)
------------------------

Automated tests help you and your team build complex Vue applications quickly and confidently by preventing regressions and encouraging you to break apart your application into testable functions, modules, classes, and components. As with any application, your new Vue app can break in many ways, and it's important that you can catch these issues and fix them before releasing.

In this guide, we'll cover basic terminology and provide our recommendations on which tools to choose for your Vue 3 application.

There is one Vue-specific section covering composables. See [Testing Composables](#testing-composables) below for more details.

When to Test [​](#when-to-test)
-------------------------------

Start testing early! We recommend you begin writing tests as soon as you can. The longer you wait to add tests to your application, the more dependencies your application will have, and the harder it will be to start.

Testing Types [​](#testing-types)
---------------------------------

When designing your Vue application's testing strategy, you should leverage the following testing types:

*   **Unit**: Checks that inputs to a given function, class, or composable are producing the expected output or side effects.
*   **Component**: Checks that your component mounts, renders, can be interacted with, and behaves as expected. These tests import more code than unit tests, are more complex, and require more time to execute.
*   **End-to-end**: Checks features that span multiple pages and make real network requests against your production-built Vue application. These tests often involve standing up a database or other backend.

Each testing type plays a role in your application's testing strategy and each will protect you against different types of issues.

Overview [​](#overview)
-----------------------

We will briefly discuss what each of these are, how they can be implemented for Vue applications, and provide some general recommendations.

Unit Testing [​](#unit-testing)
-------------------------------

Unit tests are written to verify that small, isolated units of code are working as expected. A unit test usually covers a single function, class, composable, or module. Unit tests focus on logical correctness and only concern themselves with a small portion of the application's overall functionality. They may mock large parts of your application's environment (e.g. initial state, complex classes, 3rd party modules, and network requests).

In general, unit tests will catch issues with a function's business logic and logical correctness.

Take for example this `increment` function:

js

    // helpers.js
    export function increment (current, max = 10) {
      if (current < max) {
        return current + 1
      }
      return current
    }

Because it's very self-contained, it'll be easy to invoke the increment function and assert that it returns what it's supposed to, so we'll write a Unit Test.

If any of these assertions fail, it's clear that the issue is contained within the `increment` function.

js

    // helpers.spec.js
    import { increment } from './helpers'
    
    describe('increment', () => {
      test('increments the current number by 1', () => {
        expect(increment(0, 10)).toBe(1)
      })
    
      test('does not increment the current number over the max', () => {
        expect(increment(10, 10)).toBe(10)
      })
    
      test('has a default max of 10', () => {
        expect(increment(10)).toBe(10)
      })
    })

As mentioned previously, unit testing is typically applied to self-contained business logic, components, classes, modules, or functions that do not involve UI rendering, network requests, or other environmental concerns.

These are typically plain JavaScript / TypeScript modules unrelated to Vue. In general, writing unit tests for business logic in Vue applications does not differ significantly from applications using other frameworks.

There are two instances where you DO unit test Vue-specific features:

1.  Composables
2.  Components

### Composables [​](#composables)

One category of functions specific to Vue applications are [Composables](/guide/reusability/composables.html), which may require special handling during tests. See [Testing Composables](#testing-composables) below for more details.

### Unit Testing Components [​](#unit-testing-components)

A component can be tested in two ways:

1.  Whitebox: Unit Testing
    
    Tests that are "Whitebox tests" are aware of the implementation details and dependencies of a component. They are focused on **isolating** the component under test. These tests will usually involve mocking some, if not all of your component's children, as well as setting up plugin state and dependencies (e.g. Pinia).
    
2.  Blackbox: Component Testing
    
    Tests that are "Blackbox tests" are unaware of the implementation details of a component. These tests mock as little as possible to test the integration of your component and the entire system. They usually render all child components and are considered more of an "integration test". See the [Component Testing recommendations](#component-testing) below.
    

### Recommendation [​](#recommendation)

*   [Vitest](https://vitest.dev/)
    
    Since the official setup created by `create-vue` is based on [Vite](https://vitejs.dev/), we recommend using a unit testing framework that can leverage the same configuration and transform pipeline directly from Vite. [Vitest](https://vitest.dev/) is a unit testing framework designed specifically for this purpose, created and maintained by Vue / Vite team members. It integrates with Vite-based projects with minimal effort, and is blazing fast.
    

### Other Options [​](#other-options)

*   [Peeky](https://peeky.dev/) is another fast unit test runner with first-class Vite integration. It is also created by a Vue core team member and offers a GUI-based testing interface.
    
*   [Jest](https://jestjs.io/) is a popular unit testing framework, and can be made to work with Vite via the [vite-jest](https://github.com/sodatea/vite-jest) package. However, we only recommend Jest if you have an existing Jest test suite that needs to be migrated over to a Vite-based project, as Vitest offers a more seamless integration and better performance.
    

Component Testing [​](#component-testing)
-----------------------------------------

In Vue applications, components are the main building blocks of the UI. Components are therefore the natural unit of isolation when it comes to validating your application's behavior. From a granularity perspective, component testing sits somewhere above unit testing and can be considered a form of integration testing. Much of your Vue Application should be covered by a component test and we recommend that each Vue component has its own spec file.

Component tests should catch issues relating to your component's props, events, slots that it provides, styles, classes, lifecycle hooks, and more.

Component tests should not mock child components, but instead test the interactions between your component and its children by interacting with the components as a user would. For example, a component test should click on an element like a user would instead of programmatically interacting with the component.

Component tests should focus on the component's public interfaces rather than internal implementation details. For most components, the public interface is limited to: events emitted, props, and slots. When testing, remember to **test what a component does, not how it does it**.

**DO**

*   For **Visual** logic: assert correct render output based on inputted props and slots.
    
*   For **Behavioral** logic: assert correct render updates or emitted events in response to user input events.
    
    In the below example, we demonstrate a Stepper component that has a DOM element labeled "increment" and can be clicked. We pass a prop called `max` that prevents the Stepper from being incremented past `2`, so if we click the button 3 times, the UI should still say `2`.
    
    We know nothing about the implementation of Stepper, only that the "input" is the `max` prop and the "output" is the state of the DOM as the user will see it.
    

Vue Test Utils

Cypress

Testing Library

js

    const { getByText } = render(Stepper, {
      props: {
        max: 1
      }
    })
    
    getByText('0') // Implicit assertion that "0" is within the component
    
    const button = getByText('increment')
    
    // Dispatch a click event to our increment button.
    await fireEvent.click(button)
    
    getByText('1')
    
    await fireEvent.click(button)

js

    const valueSelector = '[data-testid=stepper-value]'
    const buttonSelector = '[data-testid=increment]'
    
    const wrapper = mount(Stepper, {
      props: {
        max: 1
      }
    })
    
    expect(wrapper.find(valueSelector).text()).toContain('0')
    
    await wrapper.find(buttonSelector).trigger('click')
    
    expect(wrapper.find(valueSelector).text()).toContain('1')

js

    const valueSelector = '[data-testid=stepper-value]'
    const buttonSelector = '[data-testid=increment]'
    
    mount(Stepper, {
      props: {
        max: 1
      }
    })
    
    cy.get(valueSelector).should('be.visible').and('contain.text', '0')
      .get(buttonSelector).click()
      .get(valueSelector).should('contain.text', '1')

*   **DON'T**
    
    Don't assert the private state of a component instance or test the private methods of a component. Testing implementation details makes the tests brittle, as they are more likely to break and require updates when the implementation changes.
    
    The component's ultimate job is rendering the correct DOM output, so tests focusing on the DOM output provide the same level of correctness assurance (if not more) while being more robust and resilient to change.
    
    Don't rely exclusively on snapshot tests. Asserting HTML strings does not describe correctness. Write tests with intentionality.
    
    If a method needs to be tested thoroughly, consider extracting it into a standalone utility function and write a dedicated unit test for it. If it cannot be extracted cleanly, it may be tested as a part of a component, integration, or end-to-end test that covers it.
    

### Recommendation [​](#recommendation-1)

*   [Vitest](https://vitest.dev/) for components or composables that render headlessly (e.g. the [`useFavicon`](https://vueuse.org/core/useFavicon/#usefavicon) function in VueUse). Components and DOM can be tested using [`@vue/test-utils`](https://github.com/vuejs/test-utils).
    
*   [Cypress Component Testing](https://on.cypress.io/component) for components whose expected behavior depends on properly rendering styles or triggering native DOM events. Can be used with Testing Library via [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro).
    

The main differences between Vitest and browser-based runners are speed and execution context. In short, browser-based runners, like Cypress, can catch issues that node-based runners, like Vitest, cannot (e.g. style issues, real native DOM events, cookies, local storage, and network failures), but browser-based runners are _orders of magnitude slower than Vitest_ because they do open a browser, compile your stylesheets, and more. Cypress is a browser-based runner that supports component testing. Please read [Vitest's comparison page](https://vitest.dev/guide/comparisons.html#cypress) for the latest information comparing Vitest and Cypress.

### Mounting Libraries [​](#mounting-libraries)

Component testing often involves mounting the component being tested in isolation, triggering simulated user input events, and asserting on the rendered DOM output. There are dedicated utility libraries that make these tasks simpler.

*   [`@vue/test-utils`](https://github.com/vuejs/test-utils) is the official low-level component testing library that was written to provide users access to Vue specific APIs. It's also the lower-level library `@testing-library/vue` is built on top of.
    
*   [`@testing-library/vue`](https://github.com/testing-library/vue-testing-library) is a Vue testing library focused on testing components without relying on implementation details. Its guiding principle is that the more tests resemble the way software is used, the more confidence they can provide.
    

We recommend using `@vue/test-utils` for testing components in applications. `@testing-library/vue` has issues with testing asynchronous component with Suspense, so it should be used with caution.

### Other Options [​](#other-options-1)

*   [Nightwatch](https://v2.nightwatchjs.org/) is an E2E test runner with Vue Component Testing support. ([Example Project](https://github.com/nightwatchjs-community/todo-vue) in Nightwatch v2)

E2E Testing [​](#e2e-testing)
-----------------------------

While unit tests provide developers with some degree of confidence, unit and component tests are limited in their abilities to provide holistic coverage of an application when deployed to production. As a result, end-to-end (E2E) tests provide coverage on what is arguably the most important aspect of an application: what happens when users actually use your applications.

End-to-end tests focus on multi-page application behavior that makes network requests against your production-built Vue application. They often involve standing up a database or other backend and may even be run against a live staging environment.

End-to-end tests will often catch issues with your router, state management library, top-level components (e.g. an App or Layout), public assets, or any request handling. As stated above, they catch critical issues that may be impossible to catch with unit tests or component tests.

End-to-end tests do not import any of your Vue application's code, but instead rely completely on testing your application by navigating through entire pages in a real browser.

End-to-end tests validate many of the layers in your application. They can either target your locally built application, or even a live Staging environment. Testing against your Staging environment not only includes your frontend code and static server, but all associated backend services and infrastructure.

> The more your tests resemble the way your software is used, the more confidence they can give you. - [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106) - Author of the Testing Library

By testing how user actions impact your application, E2E tests are often the key to higher confidence in whether an application is functioning properly or not.

### Choosing an E2E Testing Solution [​](#choosing-an-e2e-testing-solution)

While end-to-end (E2E) testing on the web has gained a negative reputation for unreliable (flaky) tests and slowing down development processes, modern E2E tools have made strides forward to create more reliable, interactive, and useful tests. When choosing an E2E testing framework, the following sections provide some guidance on things to keep in mind when choosing a testing framework for your application.

#### Cross-browser testing [​](#cross-browser-testing)

One of the primary benefits that end-to-end (E2E) testing is known for is its ability to test your application across multiple browsers. While it may seem desirable to have 100% cross-browser coverage, it is important to note that cross browser testing has diminishing returns on a team's resources due the additional time and machine power required to run them consistently. As a result, it is important to be mindful of this trade-off when choosing the amount of cross-browser testing your application needs.

#### Faster feedback loops [​](#faster-feedback-loops)

One of the primary problems with end-to-end (E2E) tests and development is that running the entire suite takes a long time. Typically, this is only done in continuous integration and deployment (CI/CD) pipelines. Modern E2E testing frameworks have helped to solve this by adding features like parallelization, which allows for CI/CD pipelines to often run magnitudes faster than before. In addition, when developing locally, the ability to selectively run a single test for the page you are working on while also providing hot reloading of tests can help to boost a developer's workflow and productivity.

#### First-class debugging experience [​](#first-class-debugging-experience)

While developers have traditionally relied on scanning logs in a terminal window to help determine what went wrong in a test, modern end-to-end (E2E) test frameworks allow developers to leverage tools that they are already familiar with, e.g. browser developer tools.

#### Visibility in headless mode [​](#visibility-in-headless-mode)

When end-to-end (E2E) tests are run in continuous integration / deployment pipelines, they are often run in headless browsers (i.e., no visible browser is opened for the user to watch). A critical feature of modern E2E testing frameworks is the ability to see snapshots and/or videos of the application during testing, providing some insight into why errors are happening. Historically, it was tedious to maintain these integrations.

### Recommendation [​](#recommendation-2)

*   [Cypress](https://www.cypress.io/)
    
    Overall, we believe Cypress provides the most complete E2E solution with features like an informative graphical interface, excellent debuggability, built-in assertions and stubs, flake-resistance, parallelization, and snapshots. As mentioned above, it also provides support for [Component Testing](https://docs.cypress.io/guides/component-testing/introduction). However, it only supports Chromium-based browsers and Firefox.
    

### Other Options [​](#other-options-2)

*   [Playwright](https://playwright.dev/) is also a great E2E testing solution with a wider range of browser support (mainly WebKit). See [Why Playwright](https://playwright.dev/docs/why-playwright) for more details.
    
*   [Nightwatch v2](https://v2.nightwatchjs.org/) is an E2E testing solution based on [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver). This gives it the widest browser support range.
    

Recipes [​](#recipes)
---------------------

### Adding Vitest to a Project [​](#adding-vitest-to-a-project)

In a Vite-based Vue project, run:

sh

    > npm install -D vitest happy-dom @testing-library/vue

Next, update the Vite configuration to add the `test` option block:

js

    // vite.config.js
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      // ...
      test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom'
      }
    })

TIP

If you are using TypeScript, add `vitest/globals` to the `types` field in your `tsconfig.json`.

json

    // tsconfig.json
    
    {
      "compilerOptions": {
        "types": ["vitest/globals"]
      }
    }

Then create a file ending in `*.test.js` in your project. You can place all test files in a test directory in project root, or in test directories next to your source files. Vitest will automatically search for them using the naming convention.

js

    // MyComponent.test.js
    import { render } from '@testing-library/vue'
    import MyComponent from './MyComponent.vue'
    
    test('it should work', () => {
      const { getByText } = render(MyComponent, {
        props: {
          /* ... */
        }
      })
    
      // assert output
      getByText('...')
    })

Finally, update `package.json` to add the test script and run it:

json

    {
      // ...
      "scripts": {
        "test": "vitest"
      }
    }

sh

    > npm test

### Testing Composables [​](#testing-composables)

> This section assumes you have read the [Composables](/guide/reusability/composables.html) section.

When it comes to testing composables, we can divide them into two categories: composables that do not rely on a host component instance, and composables that do.

A composable depends on a host component instance when it uses the following APIs:

*   Lifecycle hooks
*   Provide / Inject

If a composable only uses Reactivity APIs, then it can be tested by directly invoking it and asserting its returned state / methods:

js

    // counter.js
    import { ref } from 'vue'
    
    export function useCounter() {
      const count = ref(0)
      const increment = () => count.value++
    
      return {
        count,
        increment
      }
    }

js

    // counter.test.js
    import { useCounter } from './counter.js'
    
    test('useCounter', () => {
      const { count, increment } = useCounter()
      expect(count.value).toBe(0)
    
      increment()
      expect(count.value).toBe(1)
    })

A composable that relies on lifecycle hooks or Provide / Inject needs to be wrapped in a host component to be tested. We can create a helper like the following:

js

    // test-utils.js
    import { createApp } from 'vue'
    
    export function withSetup(composable) {
      let result
      const app = createApp({
        setup() {
          result = composable()
          // suppress missing template warning
          return () => {}
        }
      })
      app.mount(document.createElement('div'))
      // return the result and the app instance
      // for testing provide / unmount
      return [result, app]
    }

js

    import { withSetup } from './test-utils'
    import { useFoo } from './foo'
    
    test('useFoo', () => {
      const [result, app] = withSetup(() => useFoo(123))
      // mock provide for testing injections
      app.provide(...)
      // run assertions
      expect(result.foo.value).toBe(1)
      // trigger onUnmounted hook if needed
      app.unmount()
    })

For more complex composables, it could also be easier to test it by writing tests against the wrapper component using [Component Testing](#component-testing) techniques.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/testing.md)
Server-Side Rendering (SSR) [​](#server-side-rendering-ssr)
===========================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Overview [​](#overview)
-----------------------

### What is SSR? [​](#what-is-ssr)

Vue.js is a framework for building client-side applications. By default, Vue components produce and manipulate DOM in the browser as output. However, it is also possible to render the same components into HTML strings on the server, send them directly to the browser, and finally "hydrate" the static markup into a fully interactive app on the client.

A server-rendered Vue.js app can also be considered "isomorphic" or "universal", in the sense that the majority of your app's code runs on both the server **and** the client.

### Why SSR? [​](#why-ssr)

Compared to a client-side Single-Page Application (SPA), the advantage of SSR primarily lies in:

*   **Faster time-to-content**: this is more prominent on slow internet or slow devices. Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed, so your user will see a fully-rendered page sooner. In addition, data fetching is done on the server-side for the initial visit, which likely has a faster connection to your database than the client. This generally results in improved [Core Web Vitals](https://web.dev/vitals/) metrics, better user experience, and can be critical for applications where time-to-content is directly associated with conversion rate.
    
*   **Unified mental model**: you get to use the same language and the same declarative, component-oriented mental model for developing your entire app, instead of jumping back and forth between a backend templating system and a frontend framework.
    
*   **Better SEO**: the search engine crawlers will directly see the fully rendered page.
    
    TIP
    
    As of now, Google and Bing can index synchronous JavaScript applications just fine. Synchronous being the key word there. If your app starts with a loading spinner, then fetches content via Ajax, the crawler will not wait for you to finish. This means if you have content fetched asynchronously on pages where SEO is important, SSR might be necessary.
    

There are also some trade-offs to consider when using SSR:

*   Development constraints. Browser-specific code can only be used inside certain lifecycle hooks; some external libraries may need special treatment to be able to run in a server-rendered app.
    
*   More involved build setup and deployment requirements. Unlike a fully static SPA that can be deployed on any static file server, a server-rendered app requires an environment where a Node.js server can run.
    
*   More server-side load. Rendering a full app in Node.js is going to be more CPU-intensive than just serving static files, so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies.
    

Before using SSR for your app, the first question you should ask is whether you actually need it. It mostly depends on how important time-to-content is for your app. For example, if you are building an internal dashboard where an extra few hundred milliseconds on initial load doesn't matter that much, SSR would be an overkill. However, in cases where time-to-content is absolutely critical, SSR can help you achieve the best possible initial load performance.

### SSR vs. SSG [​](#ssr-vs-ssg)

**Static Site Generation (SSG)**, also referred to as pre-rendering, is another popular technique for building fast websites. If the data needed to server-render a page is the same for every user, then instead of rendering the page every time a request comes in, we can render it only once, ahead of time, during the build process. Pre-rendered pages are generated and served as static HTML files.

SSG retains the same performance characteristics of SSR apps: it provides great time-to-content performance. At the same time, it is cheaper and easier to deploy than SSR apps because the output is static HTML and assets. The keyword here is **static**: SSG can only be applied to pages consuming static data, i.e. data that is known at build time and does not change between deploys. Every time the data changes, a new deployment is needed.

If you're only investigating SSR to improve the SEO of a handful of marketing pages (e.g. `/`, `/about`, `/contact`, etc.), then you probably want SSG instead of SSR. SSG is also great for content-based websites such as documentation sites or blogs. In fact, this website you are reading right now is statically generated using [VitePress](https://vitepress.vuejs.org/), a Vue-powered static site generator.

Basic Tutorial [​](#basic-tutorial)
-----------------------------------

### Rendering an App [​](#rendering-an-app)

Let's take a look at the most bare-bones example of Vue SSR in action.

1.  Create a new directory and `cd` into it
2.  Run `npm init -y`
3.  Add `"type": "module"` in `package.json` so that Node.js runs in [ES modules mode](https://nodejs.org/api/esm.html#modules-ecmascript-modules).
4.  Run `npm install vue`
5.  Create an `example.js` file:

js

    // this runs in Node.js on the server.
    import { createSSRApp } from 'vue'
    // Vue's server-rendering API is exposed under `vue/server-renderer`.
    import { renderToString } from 'vue/server-renderer'
    
    const app = createSSRApp({
      data: () => ({ count: 1 }),
      template: `<button @click="count++">{{ count }}</button>`
    })
    
    renderToString(app).then((html) => {
      console.log(html)
    })

Then run:

sh

    > node example.js

It should print the following to the command line:

    <button>1</button>

[`renderToString()`](/api/ssr.html#rendertostring) takes a Vue app instance and returns a Promise that resolves to the rendered HTML of the app. It is also possible to stream rendering using the [Node.js Stream API](https://nodejs.org/api/stream.html) or [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API). Check out the [SSR API Reference](/api/ssr.html) for full details.

We can then move the Vue SSR code into a server request handler, which wraps the application markup with the full page HTML. We will be using [`express`](https://expressjs.com/) for the next steps:

*   Run `npm install express`
*   Create the following `server.js` file:

js

    import express from 'express'
    import { createSSRApp } from 'vue'
    import { renderToString } from 'vue/server-renderer'
    
    const server = express()
    
    server.get('/', (req, res) => {
      const app = createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button @click="count++">{{ count }}</button>`
      })
    
      renderToString(app).then((html) => {
        res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Vue SSR Example</title>
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
        </html>
        `)
      })
    })
    
    server.listen(3000, () => {
      console.log('ready')
    })

Finally, run `node server.js` and visit `http://localhost:3000`. You should see the page working with the button.

[Try it on StackBlitz](https://stackblitz.com/fork/vue-ssr-example-basic?file=index.js)

### Client Hydration [​](#client-hydration)

If you click the button, you'll notice the number doesn't change. The HTML is completely static on the client since we are not loading Vue in the browser.

To make the client-side app interactive, Vue needs to perform the **hydration** step. During hydration, it creates the same Vue application that was run on the server, matches each component to the DOM nodes it should control, and attaches DOM event listeners.

To mount an app in hydration mode, we need to use [`createSSRApp()`](/api/application.html#createssrapp) instead of `createApp()`:

js

    // this runs in the browser.
    import { createSSRApp } from 'vue'
    
    const app = createSSRApp({
      // ...same app as on server
    })
    
    // mounting an SSR app on the client assumes
    // the HTML was pre-rendered and will perform
    // hydration instead of mounting new DOM nodes.
    app.mount('#app')

### Code Structure [​](#code-structure)

Notice how we need to reuse the same app implementation as on the server. This is where we need to start thinking about code structure in an SSR app - how do we share the same application code between the server and the client?

Here we will demonstrate the most bare-bones setup. First, let's split the app creation logic into a dedicated file, `app.js`:

js

    // app.js (shared between server and client)
    import { createSSRApp } from 'vue'
    
    export function createApp() {
      return createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button @click="count++">{{ count }}</button>`
      })
    }

This file and its dependencies are shared between the server and the client - we call them **universal code**. There are a number of things you need to pay attention to when writing universal code, as we will [discuss below](#writing-ssr-friendly-code).

Our client entry imports the universal code, creates the app, and performs the mount:

js

    // client.js
    import { createApp } from './app.js'
    
    createApp().mount('#app')

And the server uses the same app creation logic in the request handler:

js

    // server.js (irrelevant code omitted)
    import { createApp } from './app.js'
    
    server.get('/', (req, res) => {
      const app = createApp()
      renderToString(app).then(html => {
        // ...
      })
    })

In addition, in order to load the client files in the browser, we also need to:

1.  Serve client files by adding `server.use(express.static('.'))` in `server.js`.
2.  Load the client entry by adding `<script type="module" src="/client.js"></script>` to the HTML shell.
3.  Support usage like `import * from 'vue'` in the browser by adding an [Import Map](https://github.com/WICG/import-maps) to the HTML shell.

[Try the completed example on StackBlitz](https://stackblitz.com/fork/vue-ssr-example?file=index.js). The button is now interactive!

Higher Level Solutions [​](#higher-level-solutions)
---------------------------------------------------

Moving from the example to a production-ready SSR app involves a lot more. We will need to:

*   Support Vue SFCs and other build step requirements. In fact, we will need to coordinate two builds for the same app: one for the client, and one for the server.
    
    TIP
    
    Vue components are compiled differently when used for SSR - templates are compiled into string concatenations instead of Virtual DOM render functions for more efficient rendering performance.
    
*   In the server request handler, render the HTML with the correct client-side asset links and optimal resource hints. We may also need to switch between SSR and SSG mode, or even mix both in the same app.
    
*   Manage routing, data fetching, and state management stores in a universal manner.
    

A complete implementation would be quite complex and depends on the build toolchain you have chosen to work with. Therefore, we highly recommend going with a higher-level, opinionated solution that abstracts away the complexity for you. Below we will introduce a few recommended SSR solutions in the Vue ecosystem.

### Nuxt [​](#nuxt)

[Nuxt](https://nuxt.com/) is a higher-level framework built on top of the Vue ecosystem which provides a streamlined development experience for writing universal Vue applications. Better yet, you can also use it as a static site generator! We highly recommend giving it a try.

### Quasar [​](#quasar)

[Quasar](https://quasar.dev) is a complete Vue-based solution that allows you to target SPA, SSR, PWA, mobile app, desktop app, and browser extension all using one codebase. It not only handles the build setup, but also provides a full collection of Material Design compliant UI components.

### Vite SSR [​](#vite-ssr)

Vite provides built-in [support for Vue server-side rendering](https://vitejs.dev/guide/ssr.html), but it is intentionally low-level. If you wish to go directly with Vite, check out [vite-plugin-ssr](https://vite-plugin-ssr.com/), a community plugin that abstracts away many challenging details for you.

You can also find an example Vue + Vite SSR project using manual setup [here](https://github.com/vitejs/vite-plugin-vue/tree/main/playground/ssr-vue), which can serve as a base to build upon. Note this is only recommended if you are experienced with SSR / build tools and really want to have complete control over the higher-level architecture.

Writing SSR-friendly Code [​](#writing-ssr-friendly-code)
---------------------------------------------------------

Regardless of your build setup or higher-level framework choice, there are some principles that apply in all Vue SSR applications.

### Reactivity on the Server [​](#reactivity-on-the-server)

During SSR, each request URL maps to a desired state of our application. There is no user interaction and no DOM updates, so reactivity is unnecessary on the server. By default, reactivity is disabled during SSR for better performance.

### Component Lifecycle Hooks [​](#component-lifecycle-hooks)

Since there are no dynamic updates, lifecycle hooks such as `mounted``onMounted` or `updated``onUpdated` will **NOT** be called during SSR and will only be executed on the client. The only hooks that are called during SSR are `beforeCreate` and `created`

You should avoid code that produces side effects that need cleanup in `beforeCreate` and `created``setup()` or the root scope of `<script setup>`. An example of such side effects is setting up timers with `setInterval`. In client-side only code we may setup a timer and then tear it down in `beforeUnmount``onBeforeUnmount` or `unmounted``onUnmounted`. However, because the unmount hooks will never be called during SSR, the timers will stay around forever. To avoid this, move your side-effect code into `mounted``onMounted` instead.

### Access to Platform-Specific APIs [​](#access-to-platform-specific-apis)

Universal code cannot assume access to platform-specific APIs, so if your code directly uses browser-only globals like `window` or `document`, they will throw errors when executed in Node.js, and vice-versa.

For tasks that are shared between server and client but with different platform APIs, it's recommended to wrap the platform-specific implementations inside a universal API, or use libraries that do this for you. For example, you can use [`node-fetch`](https://github.com/node-fetch/node-fetch) to use the same fetch API on both server and client.

For browser-only APIs, the common approach is to lazily access them inside client-only lifecycle hooks such as `mounted``onMounted`.

Note that if a third-party library is not written with universal usage in mind, it could be tricky to integrate it into a server-rendered app. You _might_ be able to get it working by mocking some of the globals, but it would be hacky and may interfere with the environment detection code of other libraries.

### Cross-Request State Pollution [​](#cross-request-state-pollution)

In the State Management chapter, we introduced a [simple state management pattern using Reactivity APIs](./state-management.html#simple-state-management-with-reactivity-api). In an SSR context, this pattern requires some additional adjustments.

The pattern declares shared state in a JavaScript module's root scope. This makes them **singletons** - i.e. there is only one instance of the reactive object throughout the entire lifecycle of our application. This works as expected in a pure client-side Vue application, since the modules in our application are initialized fresh for each browser page visit.

However, in an SSR context, the application modules are typically initialized only once on the server, when the server boots up. The same module instances will be reused across multiple server requests, and so will our singleton state objects. If we mutate the shared singleton state with data specific to one user, it can be accidentally leaked to a request from another user. We call this **cross-request state pollution.**

We can technically re-initialize all the JavaScript modules on each request, just like we do in browsers. However, initializing JavaScript modules can be costly, so this would significantly affect server performance.

The recommended solution is to create a new instance of the entire application - including the router and global stores - on each request. Then, instead of directly importing it in our components, we provide the shared state using [app-level provide](/guide/components/provide-inject.html#app-level-provide) and inject it in components that need it:

js

    // app.js (shared between server and client)
    import { createSSRApp } from 'vue'
    import { createStore } from './store.js'
    
    // called on each request
    export function createApp() {
      const app = createSSRApp(/* ... */)
      // create new instance of store per request
      const store = createStore(/* ... */)
      // provide store at the app level
      app.provide('store', store)
      // also expose store for hydration purposes
      return { app, store }
    }

State Management libraries like Pinia are designed with this in mind. Consult [Pinia's SSR guide](https://pinia.vuejs.org/ssr/) for more details.

### Hydration Mismatch [​](#hydration-mismatch)

If the DOM structure of the pre-rendered HTML does not match the expected output of the client-side app, there will be a hydration mismatch error. Hydration mismatch is most commonly introduced by the following causes:

1.  The template contains invalid HTML nesting structure, and the rendered HTML got "corrected" by the browser's native HTML parsing behavior. For example, a common gotcha is that [`<div>` cannot be placed inside `<p>`](https://stackoverflow.com/questions/8397852/why-cant-the-p-tag-contain-a-div-tag-inside-it):
    
    html
    
        <p><div>hi</div></p>
    
    If we produce this in our server-rendered HTML, the browser will terminate the first `<p>` when `<div>` is encountered and parse it into the following DOM structure:
    
    html
    
        <p></p>
        <div>hi</div>
        <p></p>
    
2.  The data used during render contains randomly generated values. Since the same application will run twice - once on the server, and once on the client - the random values are not guaranteed to be the same between the two runs. There are two ways to avoid random-value-induced mismatches:
    
    1.  Use `v-if` + `onMounted` to render the part that depends on random values only on the client. Your framework may also have built-in features to make this easier, for example the `<ClientOnly>` component in VitePress.
        
    2.  Use a random number generator library that supports generating with seeds, and guarantee the server run and the client run are using the same seed (e.g. by including the seed in serialized state and retrieving it on the client).
        
3.  The server and the client are in different time zones. Sometimes, we may want to convert a timestamp into the user's local time. However, the timezone during the server run and the timezone during the client run are not always the same, and we may not reliably know the user's timezone during the server run. In such cases, the local time conversion should also be performed as a client-only operation.
    

When Vue encounters a hydration mismatch, it will attempt to automatically recover and adjust the pre-rendered DOM to match the client-side state. This will lead to some rendering performance loss due to incorrect nodes being discarded and new nodes being mounted, but in most cases, the app should continue to work as expected. That said, it is still best to eliminate hydration mismatches during development.

### Custom Directives [​](#custom-directives)

Since most custom directives involve direct DOM manipulation, they are ignored during SSR. However, if you want to specify how a custom directive should be rendered (i.e. what attributes it should add to the rendered element), you can use the `getSSRProps` directive hook:

js

    const myDirective = {
      mounted(el, binding) {
        // client-side implementation:
        // directly update the DOM
        el.id = binding.value
      },
      getSSRProps(binding) {
        // server-side implementation:
        // return the props to be rendered.
        // getSSRProps only receives the directive binding.
        return {
          id: binding.value
        }
      }
    }

### Teleports [​](#teleports)

Teleports require special handling during SSR. If the rendered app contains Teleports, the teleported content will not be part of the rendered string. An easier solution is to conditionally render the Teleport on mount.

If you do need to hydrate teleported content, they are exposed under the `teleports` property of the ssr context object:

js

    const ctx = {}
    const html = await renderToString(app, ctx)
    
    console.log(ctx.teleports) // { '#teleported': 'teleported content' }

You need to inject the teleport markup into the correct location in your final page HTML similar to how you need to inject the main app markup.

TIP

Avoid targeting `body` when using Teleports and SSR together - usually, `<body>` will contain other server-rendered content which makes it impossible for Teleports to determine the correct starting location for hydration.

Instead, prefer a dedicated container, e.g. `<div id="teleported"></div>` which contains only teleported content.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/scaling-up/ssr.md)
Production Deployment [​](#production-deployment)
=================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Development vs. Production [​](#development-vs-production)
----------------------------------------------------------

During development, Vue provides a number of features to improve the development experience:

*   Warning for common errors and pitfalls
*   Props / events validation
*   [Reactivity debugging hooks](/guide/extras/reactivity-in-depth.html#reactivity-debugging)
*   Devtools integration

However, these features become useless in production. Some of the warning checks can also incur a small amount of performance overhead. When deploying to production, we should drop all the unused, development-only code branches for smaller payload size and better performance.

Without Build Tools [​](#without-build-tools)
---------------------------------------------

If you are using Vue without a build tool by loading it from a CDN or self-hosted script, make sure to use the production build (dist files that end in `.prod.js`) when deploying to production. Production builds are pre-minified with all development-only code branches removed.

*   If using global build (accessing via the `Vue` global): use `vue.global.prod.js`.
*   If using ESM build (accessing via native ESM imports): use `vue.esm-browser.prod.js`.

Consult the [dist file guide](https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use) for more details.

With Build Tools [​](#with-build-tools)
---------------------------------------

Projects scaffolded via `create-vue` (based on Vite) or Vue CLI (based on webpack) are pre-configured for production builds.

If using a custom setup, make sure that:

1.  `vue` resolves to `vue.runtime.esm-bundler.js`.
2.  The [compile time feature flags](https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags) are properly configured.
3.  `process.env.NODE_ENV` is replaced with `"production"` during build.

Additional references:

*   [Vite production build guide](https://vitejs.dev/guide/build.html)
*   [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
*   [Vue CLI deployment guide](https://cli.vuejs.org/guide/deployment.html)

Tracking Runtime Errors [​](#tracking-runtime-errors)
-----------------------------------------------------

The [app-level error handler](/api/application.html#app-config-errorhandler) can be used to report errors to tracking services:

js

    import { createApp } from 'vue'
    
    const app = createApp(...)
    
    app.config.errorHandler = (err, instance, info) => {
      // report error to tracking services
    }

Services such as [Sentry](https://docs.sentry.io/platforms/javascript/guides/vue/) and [Bugsnag](https://docs.bugsnag.com/platforms/javascript/vue/) also provide official integrations for Vue.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/best-practices/production-deployment.md)
Performance [​](#performance)
=============================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Overview [​](#overview)
-----------------------

Vue is designed to be performant for most common use cases without much need for manual optimizations. However, there are always challenging scenarios where extra fine-tuning is needed. In this section, we will discuss what you should pay attention to when it comes to performance in a Vue application.

First, let's discuss the two major aspects of web performance:

*   **Page Load Performance**: how fast the application shows content and becomes interactive on the initial visit. This is usually measured using web vital metrics like [Largest Contentful Paint (LCP)](https://web.dev/lcp/) and [First Input Delay (FID)](https://web.dev/fid/).
    
*   **Update Performance**: how fast the application updates in response to user input. For example, how fast a list updates when the user types in a search box, or how fast the page switches when the user clicks a navigation link in a Single-Page Application (SPA).
    

While it would be ideal to maximize both, different frontend architectures tend to affect how easy it is to attain desired performance in these aspects. In addition, the type of application you are building greatly influences what you should prioritize in terms of performance. Therefore, the first step of ensuring optimal performance is picking the right architecture for the type of application you are building:

*   Consult [Ways of Using Vue](/guide/extras/ways-of-using-vue.html) to see how you can leverage Vue in different ways.
    
*   Jason Miller discusses the types of web applications and their respective ideal implementation / delivery in [Application Holotypes](https://jasonformat.com/application-holotypes/).
    

Profiling Options [​](#profiling-options)
-----------------------------------------

To improve performance, we need to first know how to measure it. There are a number of great tools that can help in this regard:

For profiling load performance of production deployments:

*   [PageSpeed Insights](https://pagespeed.web.dev/)
*   [WebPageTest](https://www.webpagetest.org/)

For profiling performance during local development:

*   [Chrome DevTools Performance Panel](https://developer.chrome.com/docs/devtools/evaluate-performance/)
    *   [`app.config.performance`](/api/application.html#app-config-performance) enables Vue-specific performance markers in Chrome DevTools' performance timeline.
*   [Vue DevTools Extension](/guide/scaling-up/tooling.html#browser-devtools) also provides a performance profiling feature.

Page Load Optimizations [​](#page-load-optimizations)
-----------------------------------------------------

There are many framework-agnostic aspects for optimizing page load performance - check out [this web.dev guide](https://web.dev/fast/) for a comprehensive round up. Here, we will primarily focus on techniques that are specific to Vue.

### Choosing the Right Architecture [​](#choosing-the-right-architecture)

If your use case is sensitive to page load performance, avoid shipping it as a pure client-side SPA. You want your server to be directly sending HTML containing the content the users want to see. Pure client-side rendering suffers from slow time-to-content. This can be mitigated with [Server-Side Rendering (SSR)](/guide/extras/ways-of-using-vue.html#fullstack-ssr) or [Static Site Generation (SSG)](/guide/extras/ways-of-using-vue.html#jamstack-ssg). Check out the [SSR Guide](/guide/scaling-up/ssr.html) to learn about performing SSR with Vue. If your app doesn't have rich interactivity requirements, you can also use a traditional backend server to render the HTML and enhance it with Vue on the client.

If your main application has to be an SPA, but has marketing pages (landing, about, blog), ship them separately! Your marketing pages should ideally be deployed as static HTML with minimal JS, by using SSG.

### Bundle Size and Tree-shaking [​](#bundle-size-and-tree-shaking)

One of the most effective ways to improve page load performance is shipping smaller JavaScript bundles. Here are a few ways to reduce bundle size when using Vue:

*   Use a build step if possible.
    
    *   Many of Vue's APIs are ["tree-shakable"](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) if bundled via a modern build tool. For example, if you don't use the built-in `<Transition>` component, it won't be included in the final production bundle. Tree-shaking can also remove other unused modules in your source code.
        
    *   When using a build step, templates are pre-compiled so we don't need to ship the Vue compiler to the browser. This saves **14kb** min+gzipped JavaScript and avoids the runtime compilation cost.
        
*   Be cautious of size when introducing new dependencies! In real-world applications, bloated bundles are most often a result of introducing heavy dependencies without realizing it.
    
    *   If using a build step, prefer dependencies that offer ES module formats and are tree-shaking friendly. For example, prefer `lodash-es` over `lodash`.
        
    *   Check a dependency's size and evaluate whether it is worth the functionality it provides. Note if the dependency is tree-shaking friendly, the actual size increase will depend on the APIs you actually import from it. Tools like [bundlejs.com](https://bundlejs.com/) can be used for quick checks, but measuring with your actual build setup will always be the most accurate.
        
*   If you are using Vue primarily for progressive enhancement and prefer to avoid a build step, consider using [petite-vue](https://github.com/vuejs/petite-vue) (only **6kb**) instead.
    

### Code Splitting [​](#code-splitting)

Code splitting is where a build tool splits the application bundle into multiple smaller chunks, which can then be loaded on demand or in parallel. With proper code splitting, features required at page load can be downloaded immediately, with additional chunks being lazy loaded only when needed, thus improving performance.

Bundlers like Rollup (which Vite is based upon) or webpack can automatically create split chunks by detecting the ESM dynamic import syntax:

js

    // lazy.js and its dependencies will be split into a separate chunk
    // and only loaded when `loadLazy()` is called.
    function loadLazy() {
      return import('./lazy.js')
    }

Lazy loading is best used on features that are not immediately needed after initial page load. In Vue applications, this can be used in combination with Vue's [Async Component](/guide/components/async.html) feature to create split chunks for component trees:

js

    import { defineAsyncComponent } from 'vue'
    
    // a separate chunk is created for Foo.vue and its dependencies.
    // it is only fetched on demand when the async component is
    // rendered on the page.
    const Foo = defineAsyncComponent(() => import('./Foo.vue'))

For applications using Vue Router, it is strongly recommended to use lazy loading for route components. Vue Router has explicit support for lazy loading, separate from `defineAsyncComponent`. See [Lazy Loading Routes](https://router.vuejs.org/guide/advanced/lazy-loading.html) for more details.

Update Optimizations [​](#update-optimizations)
-----------------------------------------------

### Props Stability [​](#props-stability)

In Vue, a child component only updates when at least one of its received props has changed. Consider the following example:

template

    <ListItem
      v-for="item in list"
      :id="item.id"
      :active-id="activeId" />

Inside the `<ListItem>` component, it uses its `id` and `activeId` props to determine whether it is the currently active item. While this works, the problem is that whenever `activeId` changes, **every** `<ListItem>` in the list has to update!

Ideally, only the items whose active status changed should update. We can achieve that by moving the active status computation into the parent, and make `<ListItem>` directly accept an `active` prop instead:

template

    <ListItem
      v-for="item in list"
      :id="item.id"
      :active="item.id === activeId" />

Now, for most components the `active` prop will remain the same when `activeId` changes, so they no longer need to update. In general, the idea is keeping the props passed to child components as stable as possible.

### `v-once` [​](#v-once)

`v-once` is a built-in directive that can be used to render content that relies on runtime data but never needs to update. The entire sub-tree it is used on will be skipped for all future updates. Consult its [API reference](/api/built-in-directives.html#v-once) for more details.

### `v-memo` [​](#v-memo)

`v-memo` is a built-in directive that can be used to conditionally skip the update of large sub-trees or `v-for` lists. Consult its [API reference](/api/built-in-directives.html#v-memo) for more details.

General Optimizations [​](#general-optimizations)
-------------------------------------------------

> The following tips affect both page load and update performance.

### Virtualize Large Lists [​](#virtualize-large-lists)

One of the most common performance issues in all frontend applications is rendering large lists. No matter how performant a framework is, rendering a list with thousands of items **will** be slow due to the sheer number of DOM nodes that the browser needs to handle.

However, we don't necessarily have to render all these nodes upfront. In most cases, the user's screen size can display only a small subset of our large list. We can greatly improve the performance with **list virtualization**, the technique of only rendering the items that are currently in or close to the viewport in a large list.

Implementing list virtualization isn't easy, luckily there are existing community libraries that you can directly use:

*   [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)
*   [vue-virtual-scroll-grid](https://github.com/rocwang/vue-virtual-scroll-grid)
*   [vueuc/VVirtualList](https://github.com/07akioni/vueuc)

### Reduce Reactivity Overhead for Large Immutable Structures [​](#reduce-reactivity-overhead-for-large-immutable-structures)

Vue's reactivity system is deep by default. While this makes state management intuitive, it does create a certain level of overhead when the data size is large, because every property access triggers proxy traps that perform dependency tracking. This typically becomes noticeable when dealing with large arrays of deeply nested objects, where a single render needs to access 100,000+ properties, so it should only affect very specific use cases.

Vue does provide an escape hatch to opt-out of deep reactivity by using [`shallowRef()`](/api/reactivity-advanced.html#shallowref) and [`shallowReactive()`](/api/reactivity-advanced.html#shallowreactive). Shallow APIs create state that is reactive only at the root level, and exposes all nested objects untouched. This keeps nested property access fast, with the trade-off being that we must now treat all nested objects as immutable, and updates can only be triggered by replacing the root state:

js

    const shallowArray = shallowRef([
      /* big list of deep objects */
    ])
    
    // this won't trigger updates...
    shallowArray.value.push(newObject)
    // this does:
    shallowArray.value = [...shallowArray.value, newObject]
    
    // this won't trigger updates...
    shallowArray.value[0].foo = 1
    // this does:
    shallowArray.value = [
      {
        ...shallowArray.value[0],
        foo: 1
      },
      ...shallowArray.value.slice(1)
    ]

### Avoid Unnecessary Component Abstractions [​](#avoid-unnecessary-component-abstractions)

Sometimes we may create [renderless components](/guide/components/slots.html#renderless-components) or higher-order components (i.e. components that render other components with extra props) for better abstraction or code organization. While there is nothing wrong with this, do keep in mind that component instances are much more expensive than plain DOM nodes, and creating too many of them due to abstraction patterns will incur performance costs.

Note that reducing only a few instances won't have noticeable effect, so don't sweat it if the component is rendered only a few times in the app. The best scenario to consider this optimization is again in large lists. Imagine a list of 100 items where each item component contains many child components. Removing one unnecessary component abstraction here could result in a reduction of hundreds of component instances.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/best-practices/performance.md)
Accessibility [​](#accessibility)
=================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Web accessibility (also known as a11y) refers to the practice of creating websites that can be used by anyone — be that a person with a disability, a slow connection, outdated or broken hardware or simply someone in an unfavorable environment. For example, adding subtitles to a video would help both your deaf and hard-of-hearing users and your users who are in a loud environment and can't hear their phone. Similarly, making sure your text isn't too low contrast will help both your low-vision users and your users who are trying to use their phone in bright sunlight.

Ready to start but aren’t sure where?

Checkout the [Planning and managing web accessibility guide](https://www.w3.org/WAI/planning-and-managing/) provided by [World Wide Web Consortium (W3C)](https://www.w3.org/)

Skip link [​](#skip-link)
-------------------------

You should add a link at the top of each page that goes directly to the main content area so users can skip content that is repeated on multiple Web pages.

Typically this is done on the top of `App.vue` as it will be the first focusable element on all your pages:

template

    <ul class="skip-links">
      <li>
        <a href="#main" ref="skipLink" class="skip-link">Skip to main content</a>
      </li>
    </ul>

To hide the link unless it is focused, you can add the following style:

css

    .skip-link {
      white-space: nowrap;
      margin: 1em auto;
      top: 0;
      position: fixed;
      left: 50%;
      margin-left: -72px;
      opacity: 0;
    }
    .skip-link:focus {
      opacity: 1;
      background-color: white;
      padding: 0.5em;
      border: 1px solid black;
    }

Once a user changes route, bring focus back to the skip link. This can be achieved by calling focus on the skip link's template ref (assuming usage of `vue-router`):

vue

    <script>
    export default {
      watch: {
        $route() {
          this.$refs.skipLink.focus()
        }
      }
    }
    </script>

vue

    <script setup>
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    
    const route = useRoute()
    const skipLink = ref()
    
    watch(
      () => route.path,
      () => {
        skipLink.value.focus()
      }
    )
    </script>

[Read documentation on skip link to main content](https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html)

Content Structure [​](#content-structure)
-----------------------------------------

One of the most important pieces of accessibility is making sure that design can support accessible implementation. Design should consider not only color contrast, font selection, text sizing, and language, but also how the content is structured in the application.

### Headings [​](#headings)

Users can navigate an application through headings. Having descriptive headings for every section of your application makes it easier for users to predict the content of each section. When it comes to headings, there are a couple of recommended accessibility practices:

*   Nest headings in their ranking order: `<h1>` - `<h6>`
*   Don’t skip headings within a section
*   Use actual heading tags instead of styling text to give the visual appearance of headings

[Read more about headings](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

template

    <main role="main" aria-labelledby="main-title">
      <h1 id="main-title">Main title</h1>
      <section aria-labelledby="section-title-1">
        <h2 id="section-title-1"> Section Title </h2>
        <h3>Section Subtitle</h3>
        <!-- Content -->
      </section>
      <section aria-labelledby="section-title-2">
        <h2 id="section-title-2"> Section Title </h2>
        <h3>Section Subtitle</h3>
        <!-- Content -->
        <h3>Section Subtitle</h3>
        <!-- Content -->
      </section>
    </main>

### Landmarks [​](#landmarks)

[Landmarks](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) provide programmatic access to sections within an application. Users who rely on assistive technology can navigate to each section of the application and skip over content. You can use [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) to help you achieve this.

HTML

ARIA Role

Landmark Purpose

header

role="banner"

Prime heading: title of the page

nav

role="navigation"

Collection of links suitable for use when navigating the document or related documents

main

role="main"

The main or central content of the document.

footer

role="contentinfo"

Information about the parent document: footnotes/copyrights/links to privacy statement

aside

role="complementary"

Supports the main content, yet is separated and meaningful on its own content

_Not available_

role="search"

This section contains the search functionality for the application

form

role="form"

Collection of form-associated elements

section

role="region"

Content that is relevant and that users will likely want to navigate to. Label must be provided for this element

Tip:

It is recommended to use landmark HTML elements with redundant landmark role attributes in order to maximize compatibility with legacy [browsers that don’t support HTML5 semantic elements](https://caniuse.com/#feat=html5semantic).

[Read more about landmarks](https://www.w3.org/TR/wai-aria-1.2/#landmark_roles)

Semantic Forms [​](#semantic-forms)
-----------------------------------

When creating a form, you can use the following elements: `<form>`, `<label>`, `<input>`, `<textarea>`, and `<button>`

Labels are typically placed on top or to the left of the form fields:

template

    <form action="/dataCollectionLocation" method="post" autocomplete="on">
      <div v-for="item in formItems" :key="item.id" class="form-item">
        <label :for="item.id">{{ item.label }}: </label>
        <input
          :type="item.type"
          :id="item.id"
          :name="item.id"
          v-model="item.value"
        />
      </div>
      <button type="submit">Submit</button>
    </form>

Notice how you can include `autocomplete='on'` on the form element and it will apply to all inputs in your form. You can also set different [values for autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for each input.

### Labels [​](#labels)

Provide labels to describe the purpose of all form control; linking `for` and `id`:

template

    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name" />

If you inspect this element in your chrome developer tools and open the Accessibility tab inside the Elements tab, you will see how the input gets its name from the label:

![Chrome Developer Tools showing input accessible name from label](/assets/AccessibleLabelChromeDevTools.8d40e8fa.png)

Warning:

Though you might have seen labels wrapping the input fields like this:

template

    <label>
      Name:
      <input type="text" name="name" id="name" v-model="name" />
    </label>

Explicitly setting the labels with a matching id is better supported by assistive technology.

#### `aria-label` [​](#aria-label)

You can also give the input an accessible name with [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

template

    <label for="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      v-model="name"
      :aria-label="nameLabel"
    />

Feel free to inspect this element in Chrome DevTools to see how the accessible name has changed:

![Chrome Developer Tools showing input accessible name from aria-label](/assets/AccessibleARIAlabelDevTools.2b376a03.png)

#### `aria-labelledby` [​](#aria-labelledby)

Using [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) is similar to `aria-label` except it is used if the label text is visible on screen. It is paired to other elements by their `id` and you can link multiple `id`s:

template

    <form
      class="demo"
      action="/dataCollectionLocation"
      method="post"
      autocomplete="on"
    >
      <h1 id="billing">Billing</h1>
      <div class="form-item">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          aria-labelledby="billing name"
        />
      </div>
      <button type="submit">Submit</button>
    </form>

![Chrome Developer Tools showing input accessible name from aria-labelledby](/assets/AccessibleARIAlabelledbyDevTools.56ced2ed.png)

#### `aria-describedby` [​](#aria-describedby)

[aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) is used the same way as `aria-labelledby` except provides a description with additional information that the user might need. This can be used to describe the criteria for any input:

template

    <form
      class="demo"
      action="/dataCollectionLocation"
      method="post"
      autocomplete="on"
    >
      <h1 id="billing">Billing</h1>
      <div class="form-item">
        <label for="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          aria-labelledby="billing name"
          aria-describedby="nameDescription"
        />
        <p id="nameDescription">Please provide first and last name.</p>
      </div>
      <button type="submit">Submit</button>
    </form>

You can see the description by inspecting Chrome DevTools:

![Chrome Developer Tools showing input accessible name from aria-labelledby and description with aria-describedby](/assets/AccessibleARIAdescribedby.659c43af.png)

### Placeholder [​](#placeholder)

Avoid using placeholders as they can confuse many users.

One of the issues with placeholders is that they don't meet the [color contrast criteria](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) by default; fixing the color contrast makes the placeholder look like pre-populated data in the input fields. Looking at the following example, you can see that the Last Name placeholder which meets the color contrast criteria looks like pre-populated data:

![Accessible placeholder](/assets/AccessiblePlaceholder.5dfc1226.png)

template

    <form
      class="demo"
      action="/dataCollectionLocation"
      method="post"
      autocomplete="on"
    >
      <div v-for="item in formItems" :key="item.id" class="form-item">
        <label :for="item.id">{{ item.label }}: </label>
        <input
          type="text"
          :id="item.id"
          :name="item.id"
          v-model="item.value"
          :placeholder="item.placeholder"
        />
      </div>
      <button type="submit">Submit</button>
    </form>

css

    /* https://www.w3schools.com/howto/howto_css_placeholder.asp */
    
    #lastName::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: black;
      opacity: 1; /* Firefox */
    }
    
    #lastName:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: black;
    }
    
    #lastName::-ms-input-placeholder {
      /* Microsoft Edge */
      color: black;
    }

It is best to provide all the information the user needs to fill out forms outside any inputs.

### Instructions [​](#instructions)

When adding instructions for your input fields, make sure to link it correctly to the input. You can provide additional instructions and bind multiple ids inside an [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). This allows for more flexible design.

template

    <fieldset>
      <legend>Using aria-labelledby</legend>
      <label id="date-label" for="date">Current Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        aria-labelledby="date-label date-instructions"
      />
      <p id="date-instructions">MM/DD/YYYY</p>
    </fieldset>

Alternatively, you can attach the instructions to the input with [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby):

template

    <fieldset>
      <legend>Using aria-describedby</legend>
      <label id="dob" for="dob">Date of Birth:</label>
      <input type="date" name="dob" id="dob" aria-describedby="dob-instructions" />
      <p id="dob-instructions">MM/DD/YYYY</p>
    </fieldset>

### Hiding Content [​](#hiding-content)

Usually it is not recommended to visually hide labels, even if the input has an accessible name. However, if the functionality of the input can be understood with surrounding content, then we can hide the visual label.

Let's look at this search field:

template

    <form role="search">
      <label for="search" class="hidden-visually">Search: </label>
      <input type="text" name="search" id="search" v-model="search" />
      <button type="submit">Search</button>
    </form>

We can do this because the search button will help visual users identify the purpose of the input field.

We can use CSS to visually hide elements but keep them available for assistive technology:

css

    .hidden-visually {
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      padding: 0;
      height: 1px;
      width: 1px;
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
    }

#### `aria-hidden="true"` [​](#aria-hidden-true)

Adding `aria-hidden="true"` will hide the element from assistive technology but leave it visually available for other users. Do not use it on focusable elements, purely on decorative, duplicated or offscreen content.

template

    <p>This is not hidden from screen readers.</p>
    <p aria-hidden="true">This is hidden from screen readers.</p>

### Buttons [​](#buttons)

When using buttons inside a form, you must set the type to prevent submitting the form. You can also use an input to create buttons:

template

    <form action="/dataCollectionLocation" method="post" autocomplete="on">
      <!-- Buttons -->
      <button type="button">Cancel</button>
      <button type="submit">Submit</button>
    
      <!-- Input buttons -->
      <input type="button" value="Cancel" />
      <input type="submit" value="Submit" />
    </form>

### Functional Images [​](#functional-images)

You can use this technique to create functional images.

*   Input fields
    
    *   These images will act as a submit type button on forms
    
    template
    
        <form role="search">
          <label for="search" class="hidden-visually">Search: </label>
          <input type="text" name="search" id="search" v-model="search" />
          <input
            type="image"
            class="btnImg"
            src="https://img.icons8.com/search"
            alt="Search"
          />
        </form>
    
*   Icons
    

template

    <form role="search">
      <label for="searchIcon" class="hidden-visually">Search: </label>
      <input type="text" name="searchIcon" id="searchIcon" v-model="searchIcon" />
      <button type="submit">
        <i class="fas fa-search" aria-hidden="true"></i>
        <span class="hidden-visually">Search</span>
      </button>
    </form>

Standards [​](#standards)
-------------------------

The World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) develops web accessibility standards for the different components:

*   [User Agent Accessibility Guidelines (UAAG)](https://www.w3.org/WAI/standards-guidelines/uaag/)
    *   web browsers and media players, including some aspects of assistive technologies
*   [Authoring Tool Accessibility Guidelines (ATAG)](https://www.w3.org/WAI/standards-guidelines/atag/)
    *   authoring tools
*   [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
    *   web content - used by developers, authoring tools, and accessibility evaluation tools

### Web Content Accessibility Guidelines (WCAG) [​](#web-content-accessibility-guidelines-wcag)

[WCAG 2.1](https://www.w3.org/TR/WCAG21/) extends on [WCAG 2.0](https://www.w3.org/TR/WCAG20/) and allows implementation of new technologies by addressing changes to the web. The W3C encourages use of the most current version of WCAG when developing or updating Web accessibility policies.

#### WCAG 2.1 Four Main Guiding Principles (abbreviated as POUR): [​](#wcag-2-1-four-main-guiding-principles-abbreviated-as-pour)

*   [Perceivable](https://www.w3.org/TR/WCAG21/#perceivable)
    *   Users must be able to perceive the information being presented
*   [Operable](https://www.w3.org/TR/WCAG21/#operable)
    *   Interface forms, controls, and navigation are operable
*   [Understandable](https://www.w3.org/TR/WCAG21/#understandable)
    *   Information and the operation of user interface must be understandable to all users
*   [Robust](https://www.w3.org/TR/WCAG21/#robust)
    *   Users must be able to access the content as technologies advance

#### Web Accessibility Initiative – Accessible Rich Internet Applications (WAI-ARIA) [​](#web-accessibility-initiative-–-accessible-rich-internet-applications-wai-aria)

W3C's WAI-ARIA provides guidance on how to build dynamic content and advanced user interface controls.

*   [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
*   [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/)

Resources [​](#resources)
-------------------------

### Documentation [​](#documentation)

*   [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
*   [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
*   [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
*   [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/)

### Assistive Technologies [​](#assistive-technologies)

*   Screen Readers
    *   [NVDA](https://www.nvaccess.org/download/)
    *   [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
    *   [JAWS](https://www.freedomscientific.com/products/software/jaws/?utm_term=jaws%20screen%20reader&utm_source=adwords&utm_campaign=All+Products&utm_medium=ppc&hsa_tgt=kwd-394361346638&hsa_cam=200218713&hsa_ad=296201131673&hsa_kw=jaws%20screen%20reader&hsa_grp=52663682111&hsa_net=adwords&hsa_mt=e&hsa_src=g&hsa_acc=1684996396&hsa_ver=3&gclid=Cj0KCQjwnv71BRCOARIsAIkxW9HXKQ6kKNQD0q8a_1TXSJXnIuUyb65KJeTWmtS6BH96-5he9dsNq6oaAh6UEALw_wcB)
    *   [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
*   Zooming Tools
    *   [MAGic](https://www.freedomscientific.com/products/software/magic/)
    *   [ZoomText](https://www.zoomtext.com/)
    *   [Magnifier](https://support.microsoft.com/en-us/help/11542/windows-use-magnifier-to-make-things-easier-to-see)

### Testing [​](#testing)

*   Automated Tools
    *   [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
    *   [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
    *   [ARC Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?hl=en-US)
*   Color Tools
    *   [WebAim Color Contrast](https://webaim.org/resources/contrastchecker/)
    *   [WebAim Link Color Contrast](https://webaim.org/resources/linkcontrastchecker)
*   Other Helpful Tools
    *   [HeadingMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en%E2%80%A6)
    *   [Color Oracle](https://colororacle.org)
    *   [Focus Indicator](https://chrome.google.com/webstore/detail/focus-indicator/heeoeadndnhebmfebjccbhmccmaoedlf?hl=en-US%E2%80%A6)
    *   [NerdeFocus](https://chrome.google.com/webstore/detail/nerdefocus/lpfiljldhgjecfepfljnbjnbjfhennpd?hl=en-US%E2%80%A6)
    *   [Visual Aria](https://chrome.google.com/webstore/detail/visual-aria/lhbmajchkkmakajkjenkchhnhbadmhmk?hl=en-US)
    *   [Silktide Website Accessibility Simulator](https://chrome.google.com/webstore/detail/silktide-website-accessib/okcpiimdfkpkjcbihbmhppldhiebhhaf?hl=en-US)

### Users [​](#users)

The World Health Organization estimates that 15% of the world's population has some form of disability, 2-4% of them severely so. That is an estimated 1 billion people worldwide; making people with disabilities the largest minority group in the world.

There are a huge range of disabilities, which can be divided roughly into four categories:

*   _[Visual](https://webaim.org/articles/visual/)_ - These users can benefit from the use of screen readers, screen magnification, controlling screen contrast, or braille display.
*   _[Auditory](https://webaim.org/articles/auditory/)_ - These users can benefit from captioning, transcripts or sign language video.
*   _[Motor](https://webaim.org/articles/motor/)_ - These users can benefit from a range of [assistive technologies for motor impairments](https://webaim.org/articles/motor/assistive): voice recognition software, eye tracking, single-switch access, head wand, sip and puff switch, oversized trackball mouse, adaptive keyboard or other assistive technologies.
*   _[Cognitive](https://webaim.org/articles/cognitive/)_ - These users can benefit from supplemental media, structural organization of content, clear and simple writing.

Check out the following links from WebAim to understand from users:

*   [Web Accessibility Perspectives: Explore the Impact and Benefits for Everyone](https://www.w3.org/WAI/perspective-videos/)
*   [Stories of Web Users](https://www.w3.org/WAI/people-use-web/user-stories/)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/best-practices/accessibility.md)
Security [​](#security)
=======================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Reporting Vulnerabilities [​](#reporting-vulnerabilities)
---------------------------------------------------------

When a vulnerability is reported, it immediately becomes our top concern, with a full-time contributor dropping everything to work on it. To report a vulnerability, please email [security@vuejs.org](mailto:security@vuejs.org).

While the discovery of new vulnerabilities is rare, we also recommend always using the latest versions of Vue and its official companion libraries to ensure your application remains as secure as possible.

Rule No.1: Never Use Non-trusted Templates [​](#rule-no-1-never-use-non-trusted-templates)
------------------------------------------------------------------------------------------

The most fundamental security rule when using Vue is **never use non-trusted content as your component template**. Doing so is equivalent to allowing arbitrary JavaScript execution in your application - and worse, could lead to server breaches if the code is executed during server-side rendering. An example of such usage:

js

    Vue.createApp({
      template: `<div>` + userProvidedString + `</div>` // NEVER DO THIS
    }).mount('#app')

Vue templates are compiled into JavaScript, and expressions inside templates will be executed as part of the rendering process. Although the expressions are evaluated against a specific rendering context, due to the complexity of potential global execution environments, it is impractical for a framework like Vue to completely shield you from potential malicious code execution without incurring unrealistic performance overhead. The most straightforward way to avoid this category of problems altogether is to make sure the contents of your Vue templates are always trusted and entirely controlled by you.

What Vue Does to Protect You [​](#what-vue-does-to-protect-you)
---------------------------------------------------------------

### HTML content [​](#html-content)

Whether using templates or render functions, content is automatically escaped. That means in this template:

template

    <h1>{{ userProvidedString }}</h1>

if `userProvidedString` contained:

js

    '<script>alert("hi")</script>'

then it would be escaped to the following HTML:

template

    &lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;

thus preventing the script injection. This escaping is done using native browser APIs, like `textContent`, so a vulnerability can only exist if the browser itself is vulnerable.

### Attribute bindings [​](#attribute-bindings)

Similarly, dynamic attribute bindings are also automatically escaped. That means in this template:

template

    <h1 :title="userProvidedString">
      hello
    </h1>

if `userProvidedString` contained:

js

    '" onclick="alert(\'hi\')'

then it would be escaped to the following HTML:

template

    &quot; onclick=&quot;alert('hi')

thus preventing the close of the `title` attribute to inject new, arbitrary HTML. This escaping is done using native browser APIs, like `setAttribute`, so a vulnerability can only exist if the browser itself is vulnerable.

Potential Dangers [​](#potential-dangers)
-----------------------------------------

In any web application, allowing unsanitized, user-provided content to be executed as HTML, CSS, or JavaScript is potentially dangerous, so it should be avoided wherever possible. There are times when some risk may be acceptable, though.

For example, services like CodePen and JSFiddle allow user-provided content to be executed, but it's in a context where this is expected and sandboxed to some extent inside iframes. In the cases when an important feature inherently requires some level of vulnerability, it's up to your team to weigh the importance of the feature against the worst-case scenarios the vulnerability enables.

### HTML Injection [​](#html-injection)

As you learned earlier, Vue automatically escapes HTML content, preventing you from accidentally injecting executable HTML into your application. However, **in cases where you know the HTML is safe**, you can explicitly render HTML content:

*   Using a template:
    
    template
    
        <div v-html="userProvidedHtml"></div>
    
*   Using a render function:
    
    js
    
        h('div', {
          innerHTML: this.userProvidedHtml
        })
    
*   Using a render function with JSX:
    
    jsx
    
        <div innerHTML={this.userProvidedHtml}></div>
    

WARNING

User-provided HTML can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that HTML can ever be exposed to it. Additionally, allowing users to write their own Vue templates brings similar dangers.

### URL Injection [​](#url-injection)

In a URL like this:

template

    <a :href="userProvidedUrl">
      click me
    </a>

There's a potential security issue if the URL has not been "sanitized" to prevent JavaScript execution using `javascript:`. There are libraries such as [sanitize-url](https://www.npmjs.com/package/@braintree/sanitize-url) to help with this, but note: if you're ever doing URL sanitization on the frontend, you already have a security issue. **User-provided URLs should always be sanitized by your backend before even being saved to a database.** Then the problem is avoided for _every_ client connecting to your API, including native mobile apps. Also note that even with sanitized URLs, Vue cannot help you guarantee that they lead to safe destinations.

### Style Injection [​](#style-injection)

Looking at this example:

template

    <a
      :href="sanitizedUrl"
      :style="userProvidedStyles"
    >
      click me
    </a>

Let's assume that `sanitizedUrl` has been sanitized, so that it's definitely a real URL and not JavaScript. With the `userProvidedStyles`, malicious users could still provide CSS to "click jack", e.g. styling the link into a transparent box over the "Log in" button. Then if `https://user-controlled-website.com/` is built to resemble the login page of your application, they might have just captured a user's real login information.

You may be able to imagine how allowing user-provided content for a `<style>` element would create an even greater vulnerability, giving that user full control over how to style the entire page. That's why Vue prevents rendering of style tags inside templates, such as:

template

    <style>{{ userProvidedStyles }}</style>

To keep your users fully safe from clickjacking, we recommend only allowing full control over CSS inside a sandboxed iframe. Alternatively, when providing user control through a style binding, we recommend using its [object syntax](/guide/essentials/class-and-style.html#binding-to-objects-1) and only allowing users to provide values for specific properties it's safe for them to control, like this:

template

    <a
      :href="sanitizedUrl"
      :style="{
        color: userProvidedColor,
        background: userProvidedBackground
      }"
    >
      click me
    </a>

### JavaScript Injection [​](#javascript-injection)

We strongly discourage ever rendering a `<script>` element with Vue, since templates and render functions should never have side effects. However, this isn't the only way to include strings that would be evaluated as JavaScript at runtime.

Every HTML element has attributes with values accepting strings of JavaScript, such as `onclick`, `onfocus`, and `onmouseenter`. Binding user-provided JavaScript to any of these event attributes is a potential security risk, so it should be avoided.

WARNING

User-provided JavaScript can never be considered 100% safe unless it's in a sandboxed iframe or in a part of the app where only the user who wrote that JavaScript can ever be exposed to it.

Sometimes we receive vulnerability reports on how it's possible to do cross-site scripting (XSS) in Vue templates. In general, we do not consider such cases to be actual vulnerabilities because there's no practical way to protect developers from the two scenarios that would allow XSS:

1.  The developer is explicitly asking Vue to render user-provided, unsanitized content as Vue templates. This is inherently unsafe, and there's no way for Vue to know the origin.
    
2.  The developer is mounting Vue to an entire HTML page which happens to contain server-rendered and user-provided content. This is fundamentally the same problem as #1, but sometimes devs may do it without realizing it. This can lead to possible vulnerabilities where the attacker provides HTML which is safe as plain HTML but unsafe as a Vue template. The best practice is to **never mount Vue on nodes that may contain server-rendered and user-provided content**.
    

Best Practices [​](#best-practices)
-----------------------------------

The general rule is that if you allow unsanitized, user-provided content to be executed (as either HTML, JavaScript, or even CSS), you might open yourself up to attacks. This advice actually holds true whether using Vue, another framework, or even no framework.

Beyond the recommendations made above for [Potential Dangers](#potential-dangers), we also recommend familiarizing yourself with these resources:

*   [HTML5 Security Cheat Sheet](https://html5sec.org/)
*   [OWASP's Cross Site Scripting (XSS) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

Then use what you learn to also review the source code of your dependencies for potentially dangerous patterns, if any of them include 3rd-party components or otherwise influence what's rendered to the DOM.

Backend Coordination [​](#backend-coordination)
-----------------------------------------------

HTTP security vulnerabilities, such as cross-site request forgery (CSRF/XSRF) and cross-site script inclusion (XSSI), are primarily addressed on the backend, so they aren't a concern of Vue's. However, it's still a good idea to communicate with your backend team to learn how to best interact with their API, e.g., by submitting CSRF tokens with form submissions.

Server-Side Rendering (SSR) [​](#server-side-rendering-ssr)
-----------------------------------------------------------

There are some additional security concerns when using SSR, so make sure to follow the best practices outlined throughout [our SSR documentation](/guide/scaling-up/ssr.html) to avoid vulnerabilities.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/best-practices/security.md)
Using Vue with TypeScript [​](#using-vue-with-typescript)
=========================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

A type system like TypeScript can detect many common errors via static analysis at build time. This reduces the chance of runtime errors in production, and also allows us to more confidently refactor code in large-scale applications. TypeScript also improves developer ergonomics via type-based auto-completion in IDEs.

Vue is written in TypeScript itself and provides first-class TypeScript support. All official Vue packages come with bundled type declarations that should work out-of-the-box.

Project Setup [​](#project-setup)
---------------------------------

[`create-vue`](https://github.com/vuejs/create-vue), the official project scaffolding tool, offers the options to scaffold a [Vite](https://vitejs.dev/)\-powered, TypeScript-ready Vue project.

### Overview [​](#overview)

With a Vite-based setup, the dev server and the bundler are transpilation-only and do not perform any type-checking. This ensures the Vite dev server stays blazing fast even when using TypeScript.

*   During development, we recommend relying on a good [IDE setup](#ide-support) for instant feedback on type errors.
    
*   If using SFCs, use the [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) utility for command line type checking and type declaration generation. `vue-tsc` is a wrapper around `tsc`, TypeScript's own command line interface. It works largely the same as `tsc` except that it supports Vue SFCs in addition to TypeScript files. You can run `vue-tsc` in watch mode in parallel to the Vite dev server, or use a Vite plugin like [vite-plugin-checker](https://vite-plugin-checker.netlify.app/) which runs the checks in a separate worker thread.
    
*   Vue CLI also provides TypeScript support, but is no longer recommended. See [notes below](#note-on-vue-cli-and-ts-loader).
    

### IDE Support [​](#ide-support)

*   [Visual Studio Code](https://code.visualstudio.com/) (VSCode) is strongly recommended for its great out-of-the-box support for TypeScript.
    
    *   [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) is the official VSCode extension that provides TypeScript support inside Vue SFCs, along with many other great features.
        
        TIP
        
        Volar replaces [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), our previous official VSCode extension for Vue 2. If you have Vetur currently installed, make sure to disable it in Vue 3 projects.
        
    *   [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) is also needed to get type support for `*.vue` imports in TS files.
        
*   [WebStorm](https://www.jetbrains.com/webstorm/) also provides out-of-the-box support for both TypeScript and Vue. Other JetBrains IDEs support them too, either out of the box or via [a free plugin](https://plugins.jetbrains.com/plugin/9442-vue-js).
    

### Configuring `tsconfig.json` [​](#configuring-tsconfig-json)

Projects scaffolded via `create-vue` include pre-configured `tsconfig.json`. The base config is abstracted in the [`@vue/tsconfig`](https://github.com/vuejs/tsconfig) package. Inside the project, we use [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) to ensure correct types for code running in different environments (e.g. app code and test code should have different global variables).

When configuring `tsconfig.json` manually, some notable options include:

*   [`compilerOptions.isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules) is set to `true` because Vite uses [esbuild](https://esbuild.github.io/) for transpiling TypeScript and is subject to single-file transpile limitations.
    
*   If you're using Options API, you need to set [`compilerOptions.strict`](https://www.typescriptlang.org/tsconfig#strict) to `true` (or at least enable [`compilerOptions.noImplicitThis`](https://www.typescriptlang.org/tsconfig#noImplicitThis), which is a part of the `strict` flag) to leverage type checking of `this` in component options. Otherwise `this` will be treated as `any`.
    
*   If you have configured resolver aliases in your build tool, for example the `@/*` alias configured by default in a `create-vue` project, you need to also configure it for TypeScript via [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths).
    

See also:

*   [Official TypeScript compiler options docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
*   [esbuild TypeScript compilation caveats](https://esbuild.github.io/content-types/#typescript-caveats)

### Volar Takeover Mode [​](#volar-takeover-mode)

> This section only applies for VSCode + Volar.

To get Vue SFCs and TypeScript working together, Volar creates a separate TS language service instance patched with Vue-specific support, and uses it in Vue SFCs. At the same time, plain TS files are still handled by VSCode's built-in TS language service, which is why we need [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to support Vue SFC imports in TS files. This default setup works, but for each project we are running two TS language service instances: one from Volar, one from VSCode's built-in service. This is a bit inefficient and can lead to performance issues in large projects.

Volar provides a feature called "Takeover Mode" to improve performance. In takeover mode, Volar provides support for both Vue and TS files using a single TS language service instance.

To enable Takeover Mode, you need to disable VSCode's built-in TS language service in **your project's workspace only** by following these steps:

1.  In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
2.  Type `built` and select "Extensions: Show Built-in Extensions".
3.  Type `typescript` in the extension search box (do not remove `@builtin` prefix).
4.  Click the little gear icon of "TypeScript and JavaScript Language Features", and select "Disable (Workspace)".
5.  Reload the workspace. Takeover mode will be enabled when you open a Vue or TS file.

![](/assets/takeover-mode.54f7bbf6.png)

### Note on Vue CLI and `ts-loader` [​](#note-on-vue-cli-and-ts-loader)

In webpack-based setups such as Vue CLI, it is common to perform type checking as part of the module transform pipeline, for example with `ts-loader`. This, however, isn't a clean solution because the type system needs knowledge of the entire module graph to perform type checks. Individual module's transform step simply is not the right place for the task. It leads to the following problems:

*   `ts-loader` can only type check post-transform code. This doesn't align with the errors we see in IDEs or from `vue-tsc`, which map directly back to the source code.
    
*   Type checking can be slow. When it is performed in the same thread / process with code transformations, it significantly affects the build speed of the entire application.
    
*   We already have type checking running right in our IDE in a separate process, so the cost of dev experience slow down simply isn't a good trade-off.
    

If you are currently using Vue 3 + TypeScript via Vue CLI, we strongly recommend migrating over to Vite. We are also working on CLI options to enable transpile-only TS support, so that you can switch to `vue-tsc` for type checking.

General Usage Notes [​](#general-usage-notes)
---------------------------------------------

### `defineComponent()` [​](#definecomponent)

To let TypeScript properly infer types inside component options, we need to define components with [`defineComponent()`](/api/general.html#definecomponent):

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // type inference enabled
      props: {
        name: String,
        msg: { type: String, required: true }
      },
      data() {
        return {
          count: 1
        }
      },
      mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
      }
    })

`defineComponent()` also supports inferring the props passed to `setup()` when using Composition API without `<script setup>`:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // type inference enabled
      props: {
        message: String
      },
      setup(props) {
        props.message // type: string | undefined
      }
    })

See also:

*   [Note on webpack Treeshaking](/api/general.html#note-on-webpack-treeshaking)
*   [type tests for `defineComponent`](https://github.com/vuejs/core/blob/main/packages/dts-test/defineComponent.test-d.tsx)

TIP

`defineComponent()` also enables type inference for components defined in plain JavaScript.

### Usage in Single-File Components [​](#usage-in-single-file-components)

To use TypeScript in SFCs, add the `lang="ts"` attribute to `<script>` tags. When `lang="ts"` is present, all template expressions also enjoy stricter type checking.

vue

    <script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
      data() {
        return {
          count: 1
        }
      }
    })
    </script>
    
    <template>
      <!-- type checking and auto-completion enabled -->
      {{ count.toFixed(2) }}
    </template>

`lang="ts"` can also be used with `<script setup>`:

vue

    <script setup lang="ts">
    // TypeScript enabled
    import { ref } from 'vue'
    
    const count = ref(1)
    </script>
    
    <template>
      <!-- type checking and auto-completion enabled -->
      {{ count.toFixed(2) }}
    </template>

### TypeScript in Templates [​](#typescript-in-templates)

The `<template>` also supports TypeScript in binding expressions when `<script lang="ts">` or `<script setup lang="ts">` is used. This is useful in cases where you need to perform type casting in template expressions.

Here's a contrived example:

vue

    <script setup lang="ts">
    let x: string | number = 1
    </script>
    
    <template>
      <!-- error because x could be a string -->
      {{ x.toFixed(2) }}
    </template>

This can be worked around with an inline type cast:

vue

    <script setup lang="ts">
    let x: string | number = 1
    </script>
    
    <template>
      {{ (x as number).toFixed(2) }}
    </template>

TIP

If using Vue CLI or a webpack-based setup, TypeScript in template expressions requires `vue-loader@^16.8.0`.

API-Specific Recipes [​](#api-specific-recipes)
-----------------------------------------------

*   [TS with Composition API](./composition-api.html)
*   [TS with Options API](./options-api.html)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/typescript/overview.md)
TypeScript with Composition API [​](#typescript-with-composition-api)
=====================================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the overview on [Using Vue with TypeScript](./overview.html).

Typing Component Props [​](#typing-component-props)
---------------------------------------------------

### Using `<script setup>` [​](#using-script-setup)

When using `<script setup>`, the `defineProps()` macro supports inferring the props types based on its argument:

vue

    <script setup lang="ts">
    const props = defineProps({
      foo: { type: String, required: true },
      bar: Number
    })
    
    props.foo // string
    props.bar // number | undefined
    </script>

This is called "runtime declaration", because the argument passed to `defineProps()` will be used as the runtime `props` option.

However, it is usually more straightforward to define props with pure types via a generic type argument:

vue

    <script setup lang="ts">
    const props = defineProps<{
      foo: string
      bar?: number
    }>()
    </script>

This is called "type-based declaration". The compiler will try to do its best to infer the equivalent runtime options based on the type argument. In this case, our second example compiles into the exact same runtime options as the first example.

You can use either type-based declaration OR runtime declaration, but you cannot use both at the same time.

We can also move the props types into a separate interface:

vue

    <script setup lang="ts">
    interface Props {
      foo: string
      bar?: number
    }
    
    const props = defineProps<Props>()
    </script>

#### Syntax Limitations [​](#syntax-limitations)

In order to generate the correct runtime code, the generic argument for `defineProps()` must be one of the following:

*   An object literal type:
    
    ts
    
        defineProps<{ /*... */ }>()
    
*   A reference to an interface or object literal type **in the same file**:
    
    ts
    
        interface Props {/* ... */}
        
        defineProps<Props>()
    

The interface or object literal type can contain references to types imported from other files, however, the generic argument itself passed to `defineProps` **cannot** be an imported type:

ts

    import { Props } from './other-file'
    
    // NOT supported
    defineProps<Props>()

This is because Vue components are compiled in isolation and the compiler currently does not crawl imported files in order to analyze the source type. This limitation could be removed in a future release.

### Props Default Values [​](#props-default-values)

When using type-based declaration, we lose the ability to declare default values for the props. This can be resolved by the `withDefaults` compiler macro:

ts

    export interface Props {
      msg?: string
      labels?: string[]
    }
    
    const props = withDefaults(defineProps<Props>(), {
      msg: 'hello',
      labels: () => ['one', 'two']
    })

This will be compiled to equivalent runtime props `default` options. In addition, the `withDefaults` helper provides type checks for the default values, and ensures the returned `props` type has the optional flags removed for properties that do have default values declared.

### Without `<script setup>` [​](#without-script-setup)

If not using `<script setup>`, it is necessary to use `defineComponent()` to enable props type inference. The type of the props object passed to `setup()` is inferred from the `props` option.

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      props: {
        message: String
      },
      setup(props) {
        props.message // <-- type: string
      }
    })

### Complex prop types [​](#complex-prop-types)

With type-based declaration, a prop can use a complex type much like any other type:

vue

    <script setup lang="ts">
    interface Book {
      title: string
      author: string
      year: number
    }
    
    const props = defineProps<{
      book: Book
    }>()
    </script>

For runtime declaration, we can use the `PropType` utility type:

ts

    import type { PropType } from 'vue'
    
    const props = defineProps({
      book: Object as PropType<Book>
    })

This works in much the same way if we're specifying the `props` option directly:

ts

    import { defineComponent } from 'vue'
    import type { PropType } from 'vue'
    
    export default defineComponent({
      props: {
        book: Object as PropType<Book>
      }
    })

The `props` option is more commonly used with the Options API, so you'll find more detailed examples in the guide to [TypeScript with Options API](/guide/typescript/options-api.html#typing-component-props). The techniques shown in those examples also apply to runtime declarations using `defineProps()`.

Typing Component Emits [​](#typing-component-emits)
---------------------------------------------------

In `<script setup>`, the `emit` function can also be typed using either runtime declaration OR type declaration:

vue

    <script setup lang="ts">
    // runtime
    const emit = defineEmits(['change', 'update'])
    
    // type-based
    const emit = defineEmits<{
      (e: 'change', id: number): void
      (e: 'update', value: string): void
    }>()
    </script>

The type argument should be a type literal with [Call Signatures](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures). The type literal will be used as the type of the returned `emit` function. As we can see, the type declaration gives us much finer-grained control over the type constraints of emitted events.

When not using `<script setup>`, `defineComponent()` is able to infer the allowed events for the `emit` function exposed on the setup context:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      emits: ['change'],
      setup(props, { emit }) {
        emit('change') // <-- type check / auto-completion
      }
    })

Typing `ref()` [​](#typing-ref)
-------------------------------

Refs infer the type from the initial value:

ts

    import { ref } from 'vue'
    
    // inferred type: Ref<number>
    const year = ref(2020)
    
    // => TS Error: Type 'string' is not assignable to type 'number'.
    year.value = '2020'

Sometimes we may need to specify complex types for a ref's inner value. We can do that by using the `Ref` type:

ts

    import { ref } from 'vue'
    import type { Ref } from 'vue'
    
    const year: Ref<string | number> = ref('2020')
    
    year.value = 2020 // ok!

Or, by passing a generic argument when calling `ref()` to override the default inference:

ts

    // resulting type: Ref<string | number>
    const year = ref<string | number>('2020')
    
    year.value = 2020 // ok!

If you specify a generic type argument but omit the initial value, the resulting type will be a union type that includes `undefined`:

ts

    // inferred type: Ref<number | undefined>
    const n = ref<number>()

Typing `reactive()` [​](#typing-reactive)
-----------------------------------------

`reactive()` also implicitly infers the type from its argument:

ts

    import { reactive } from 'vue'
    
    // inferred type: { title: string }
    const book = reactive({ title: 'Vue 3 Guide' })

To explicitly type a `reactive` property, we can use interfaces:

ts

    import { reactive } from 'vue'
    
    interface Book {
      title: string
      year?: number
    }
    
    const book: Book = reactive({ title: 'Vue 3 Guide' })

TIP

It's not recommended to use the generic argument of `reactive()` because the returned type, which handles nested ref unwrapping, is different from the generic argument type.

Typing `computed()` [​](#typing-computed)
-----------------------------------------

`computed()` infers its type based on the getter's return value:

ts

    import { ref, computed } from 'vue'
    
    const count = ref(0)
    
    // inferred type: ComputedRef<number>
    const double = computed(() => count.value * 2)
    
    // => TS Error: Property 'split' does not exist on type 'number'
    const result = double.value.split('')

You can also specify an explicit type via a generic argument:

ts

    const double = computed<number>(() => {
      // type error if this doesn't return a number
    })

Typing Event Handlers [​](#typing-event-handlers)
-------------------------------------------------

When dealing with native DOM events, it might be useful to type the argument we pass to the handler correctly. Let's take a look at this example:

vue

    <script setup lang="ts">
    function handleChange(event) {
      // `event` implicitly has `any` type
      console.log(event.target.value)
    }
    </script>
    
    <template>
      <input type="text" @change="handleChange" />
    </template>

Without type annotation, the `event` argument will implicitly have a type of `any`. This will also result in a TS error if `"strict": true` or `"noImplicitAny": true` are used in `tsconfig.json`. It is therefore recommended to explicitly annotate the argument of event handlers. In addition, you may need to use type assertions when accessing the properties of `event`:

ts

    function handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }

Typing Provide / Inject [​](#typing-provide-inject)
---------------------------------------------------

Provide and inject are usually performed in separate components. To properly type injected values, Vue provides an `InjectionKey` interface, which is a generic type that extends `Symbol`. It can be used to sync the type of the injected value between the provider and the consumer:

ts

    import { provide, inject } from 'vue'
    import type { InjectionKey } from 'vue'
    
    const key = Symbol() as InjectionKey<string>
    
    provide(key, 'foo') // providing non-string value will result in error
    
    const foo = inject(key) // type of foo: string | undefined

It's recommended to place the injection key in a separate file so that it can be imported in multiple components.

When using string injection keys, the type of the injected value will be `unknown`, and needs to be explicitly declared via a generic type argument:

ts

    const foo = inject<string>('foo') // type: string | undefined

Notice the injected value can still be `undefined`, because there is no guarantee that a provider will provide this value at runtime.

The `undefined` type can be removed by providing a default value:

ts

    const foo = inject<string>('foo', 'bar') // type: string

If you are sure that the value is always provided, you can also force cast the value:

ts

    const foo = inject('foo') as string

Typing Template Refs [​](#typing-template-refs)
-----------------------------------------------

Template refs should be created with an explicit generic type argument and an initial value of `null`:

vue

    <script setup lang="ts">
    import { ref, onMounted } from 'vue'
    
    const el = ref<HTMLInputElement | null>(null)
    
    onMounted(() => {
      el.value?.focus()
    })
    </script>
    
    <template>
      <input ref="el" />
    </template>

Note that for strict type safety, it is necessary to use optional chaining or type guards when accessing `el.value`. This is because the initial ref value is `null` until the component is mounted, and it can also be set to `null` if the referenced element is unmounted by `v-if`.

Typing Component Template Refs [​](#typing-component-template-refs)
-------------------------------------------------------------------

Sometimes you might need to annotate a template ref for a child component in order to call its public method. For example, we have a `MyModal` child component with a method that opens the modal:

vue

    <!-- MyModal.vue -->
    <script setup lang="ts">
    import { ref } from 'vue'
    
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)
    
    defineExpose({
      open
    })
    </script>

In order to get the instance type of `MyModal`, we need to first get its type via `typeof`, then use TypeScript's built-in `InstanceType` utility to extract its instance type:

vue

    <!-- App.vue -->
    <script setup lang="ts">
    import MyModal from './MyModal.vue'
    
    const modal = ref<InstanceType<typeof MyModal> | null>(null)
    
    const openModal = () => {
      modal.value?.open()
    }
    </script>

Note if you want to use this technique in TypeScript files instead of Vue SFCs, you need to enable Volar's [Takeover Mode](./overview.html#volar-takeover-mode).

In cases where the exact type of the component isn't available or isn't important, `ComponentPublicInstance` can be used instead. This will only include properties that are shared by all components, such as `$el`:

ts

    import { ref } from 'vue'
    import type { ComponentPublicInstance } from 'vue'
    
    const child = ref<ComponentPublicInstance | null>(null)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/typescript/composition-api.md)
TypeScript with Options API [​](#typescript-with-options-api)
=============================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

> This page assumes you've already read the overview on [Using Vue with TypeScript](./overview.html).

TIP

While Vue does support TypeScript usage with Options API, it is recommended to use Vue with TypeScript via Composition API as it offers simpler, more efficient and more robust type inference.

Typing Component Props [​](#typing-component-props)
---------------------------------------------------

Type inference for props in Options API requires wrapping the component with `defineComponent()`. With it, Vue is able to infer the types for the props based on the `props` option, taking additional options such as `required: true` and `default` into account:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // type inference enabled
      props: {
        name: String,
        id: [Number, String],
        msg: { type: String, required: true },
        metadata: null
      },
      mounted() {
        this.name // type: string | undefined
        this.id // type: number | string | undefined
        this.msg // type: string
        this.metadata // type: any
      }
    })

However, the runtime `props` options only support using constructor functions as a prop's type - there is no way to specify complex types such as objects with nested properties or function call signatures.

To annotate complex props types, we can use the `PropType` utility type:

ts

    import { defineComponent } from 'vue'
    import type { PropType } from 'vue'
    
    interface Book {
      title: string
      author: string
      year: number
    }
    
    export default defineComponent({
      props: {
        book: {
          // provide more specific type to `Object`
          type: Object as PropType<Book>,
          required: true
        },
        // can also annotate functions
        callback: Function as PropType<(id: number) => void>
      },
      mounted() {
        this.book.title // string
        this.book.year // number
    
        // TS Error: argument of type 'string' is not
        // assignable to parameter of type 'number'
        this.callback?.('123')
      }
    })

### Caveats [​](#caveats)

If your TypeScript version is less than `4.7`, you have to be careful when using function values for `validator` and `default` prop options - make sure to use arrow functions:

ts

    import { defineComponent } from 'vue'
    import type { PropType } from 'vue'
    
    interface Book {
      title: string
      year?: number
    }
    
    export default defineComponent({
      props: {
        bookA: {
          type: Object as PropType<Book>,
          // Make sure to use arrow functions if your TypeScript version is less than 4.7
          default: () => ({
            title: 'Arrow Function Expression'
          }),
          validator: (book: Book) => !!book.title
        }
      }
    })

This prevents TypeScript from having to infer the type of `this` inside these functions, which, unfortunately, can cause the type inference to fail. It was a previous [design limitation](https://github.com/microsoft/TypeScript/issues/38845), and now has been improved in [TypeScript 4.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#improved-function-inference-in-objects-and-methods).

Typing Component Emits [​](#typing-component-emits)
---------------------------------------------------

We can declare the expected payload type for an emitted event using the object syntax of the `emits` option. Also, all non-declared emitted events will throw a type error when called:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      emits: {
        addBook(payload: { bookName: string }) {
          // perform runtime validation
          return payload.bookName.length > 0
        }
      },
      methods: {
        onSubmit() {
          this.$emit('addBook', {
            bookName: 123 // Type error!
          })
    
          this.$emit('non-declared-event') // Type error!
        }
      }
    })

Typing Computed Properties [​](#typing-computed-properties)
-----------------------------------------------------------

A computed property infers its type based on its return value:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      data() {
        return {
          message: 'Hello!'
        }
      },
      computed: {
        greeting() {
          return this.message + '!'
        }
      },
      mounted() {
        this.greeting // type: string
      }
    })

In some cases, you may want to explicitly annotate the type of a computed property to ensure its implementation is correct:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      data() {
        return {
          message: 'Hello!'
        }
      },
      computed: {
        // explicitly annotate return type
        greeting(): string {
          return this.message + '!'
        },
    
        // annotating a writable computed property
        greetingUppercased: {
          get(): string {
            return this.greeting.toUpperCase()
          },
          set(newValue: string) {
            this.message = newValue.toUpperCase()
          }
        }
      }
    })

Explicit annotations may also be required in some edge cases where TypeScript fails to infer the type of a computed property due to circular inference loops.

Typing Event Handlers [​](#typing-event-handlers)
-------------------------------------------------

When dealing with native DOM events, it might be useful to type the argument we pass to the handler correctly. Let's take a look at this example:

vue

    <script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
      methods: {
        handleChange(event) {
          // `event` implicitly has `any` type
          console.log(event.target.value)
        }
      }
    })
    </script>
    
    <template>
      <input type="text" @change="handleChange" />
    </template>

Without type annotation, the `event` argument will implicitly have a type of `any`. This will also result in a TS error if `"strict": true` or `"noImplicitAny": true` are used in `tsconfig.json`. It is therefore recommended to explicitly annotate the argument of event handlers. In addition, you may need to use type assertions when accessing the properties of `event`:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      methods: {
        handleChange(event: Event) {
          console.log((event.target as HTMLInputElement).value)
        }
      }
    })

Augmenting Global Properties [​](#augmenting-global-properties)
---------------------------------------------------------------

Some plugins install globally available properties to all component instances via [`app.config.globalProperties`](/api/application.html#app-config-globalproperties). For example, we may install `this.$http` for data-fetching or `this.$translate` for internationalization. To make this play well with TypeScript, Vue exposes a `ComponentCustomProperties` interface designed to be augmented via [TypeScript module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

ts

    import axios from 'axios'
    
    declare module 'vue' {
      interface ComponentCustomProperties {
        $http: typeof axios
        $translate: (key: string) => string
      }
    }

See also:

*   [TypeScript unit tests for component type extensions](https://github.com/vuejs/core/blob/main/packages/dts-test/componentTypeExtensions.test-d.tsx)

### Type Augmentation Placement [​](#type-augmentation-placement)

We can put this type augmentation in a `.ts` file, or in a project-wide `*.d.ts` file. Either way, make sure it is included in `tsconfig.json`. For library / plugin authors, this file should be specified in the `types` property in `package.json`.

In order to take advantage of module augmentation, you will need to ensure the augmentation is placed in a [TypeScript module](https://www.typescriptlang.org/docs/handbook/modules.html). That is to say, the file needs to contain at least one top-level `import` or `export`, even if it is just `export {}`. If the augmentation is placed outside of a module, it will overwrite the original types rather than augmenting them!

ts

    // Does not work, overwrites the original types.
    declare module 'vue' {
      interface ComponentCustomProperties {
        $translate: (key: string) => string
      }
    }

ts

    // Works correctly
    export {}
    
    declare module 'vue' {
      interface ComponentCustomProperties {
        $translate: (key: string) => string
      }
    }

Augmenting Custom Options [​](#augmenting-custom-options)
---------------------------------------------------------

Some plugins, for example `vue-router`, provide support for custom component options such as `beforeRouteEnter`:

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      beforeRouteEnter(to, from, next) {
        // ...
      }
    })

Without proper type augmentation, the arguments of this hook will implicitly have `any` type. We can augment the `ComponentCustomOptions` interface to support these custom options:

ts

    import { Route } from 'vue-router'
    
    declare module 'vue' {
      interface ComponentCustomOptions {
        beforeRouteEnter?(to: Route, from: Route, next: () => void): void
      }
    }

Now the `beforeRouteEnter` option will be properly typed. Note this is just an example - well-typed libraries like `vue-router` should automatically perform these augmentations in their own type definitions.

The placement of this augmentation is subject the [same restrictions](#type-augmentation-placement) as global property augmentations.

See also:

*   [TypeScript unit tests for component type extensions](https://github.com/vuejs/core/blob/main/packages/dts-test/componentTypeExtensions.test-d.tsx)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/typescript/options-api.md)
Ways of Using Vue [​](#ways-of-using-vue)
=========================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

We believe there is no "one size fits all" story for the web. This is why Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways to strike the optimal balance between stack complexity, developer experience and end performance.

Standalone Script [​](#standalone-script)
-----------------------------------------

Vue can be used as a standalone script file - no build step required! If you have a backend framework already rendering most of the HTML, or your frontend logic isn't complex enough to justify a build step, this is the easiest way to integrate Vue into your stack. You can think of Vue as a more declarative replacement of jQuery in such cases.

Vue also provides an alternative distribution called [petite-vue](https://github.com/vuejs/petite-vue) that is specifically optimized for progressively enhancing existing HTML. It has a smaller feature set, but is extremely lightweight and uses an implementation that is more efficient in no-build-step scenarios.

Embedded Web Components [​](#embedded-web-components)
-----------------------------------------------------

You can use Vue to [build standard Web Components](/guide/extras/web-components.html) that can be embedded in any HTML page, regardless of how they are rendered. This option allows you to leverage Vue in a completely consumer-agnostic fashion: the resulting web components can be embedded in legacy applications, static HTML, or even applications built with other frameworks.

Single-Page Application (SPA) [​](#single-page-application-spa)
---------------------------------------------------------------

Some applications require rich interactivity, deep session depth, and non-trivial stateful logic on the frontend. The best way to build such applications is to use an architecture where Vue not only controls the entire page, but also handles data updates and navigation without having to reload the page. This type of application is typically referred to as a Single-Page Application (SPA).

Vue provides core libraries and [comprehensive tooling support](/guide/scaling-up/tooling.html) with amazing developer experience for building modern SPAs, including:

*   Client-side router
*   Blazing fast build tool chain
*   IDE support
*   Browser devtools
*   TypeScript integrations
*   Testing utilities

SPAs typically require the backend to expose API endpoints - but you can also pair Vue with solutions like [Inertia.js](https://inertiajs.com) to get the SPA benefits while retaining a server-centric development model.

Fullstack / SSR [​](#fullstack-ssr)
-----------------------------------

Pure client-side SPAs are problematic when the app is sensitive to SEO and time-to-content. This is because the browser will receive a largely empty HTML page, and has to wait until the JavaScript is loaded before rendering anything.

Vue provides first-class APIs to "render" a Vue app into HTML strings on the server. This allows the server to send back already-rendered HTML, allowing end users to see the content immediately while the JavaScript is being downloaded. Vue will then "hydrate" the application on the client side to make it interactive. This is called [Server-Side Rendering (SSR)](/guide/scaling-up/ssr.html) and it greatly improves Core Web Vital metrics such as [Largest Contentful Paint (LCP)](https://web.dev/lcp/).

There are higher-level Vue-based frameworks built on top of this paradigm, such as [Nuxt](https://nuxt.com/), which allow you to develop a fullstack application using Vue and JavaScript.

JAMStack / SSG [​](#jamstack-ssg)
---------------------------------

Server-side rendering can be done ahead of time if the required data is static. This means we can pre-render an entire application into HTML and serve them as static files. This improves site performance and makes deployment a lot simpler since we no longer need to dynamically render pages on each request. Vue can still hydrate such applications to provide rich interactivity on the client. This technique is commonly referred to as Static-Site Generation (SSG), also known as [JAMStack](https://jamstack.org/what-is-jamstack/).

There are two flavors of SSG: single-page and multi-page. Both flavors pre-render the site into static HTML, the difference is that:

*   After the initial page load, a single-page SSG "hydrates" the page into an SPA. This requires more upfront JS payload and hydration cost, but subsequent navigations will be faster, since it only needs to partially update the page content instead of reloading the entire page.
    
*   A multi-page SSG loads a new page on every navigation. The upside is that it can ship minimal JS - or no JS at all if the page requires no interaction! Some multi-page SSG frameworks such as [Astro](https://astro.build/) also support "partial hydration" - which allows you to use Vue components to create interactive "islands" inside static HTML.
    

Single-page SSGs are better suited if you expect non-trivial interactivity, deep session lengths, or persisted elements / state across navigations. Otherwise, multi-page SSG would be the better choice.

The Vue team also maintains a static-site generator called [VitePress](https://vitepress.vuejs.org/), which powers this website you are reading right now! VitePress supports both flavors of SSG. [Nuxt](https://nuxt.com/) also supports SSG. You can even mix SSR and SSG for different routes in the same Nuxt app.

Beyond the Web [​](#beyond-the-web)
-----------------------------------

Although Vue is primarily designed for building web applications, it is by no means limited to just the browser. You can:

*   Build desktop apps with [Electron](https://www.electronjs.org/) or [Tauri](https://tauri.studio/en/)
*   Build mobile apps with [Ionic Vue](https://ionicframework.com/docs/vue/overview)
*   Build desktop and mobile apps from the same codebase with [Quasar](https://quasar.dev/)
*   Use Vue's [Custom Renderer API](/api/custom-renderer.html) to build custom renderers targeting [WebGL](https://troisjs.github.io/) or even [the terminal](https://github.com/vue-terminal/vue-termui)!

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/ways-of-using-vue.md)
Composition API FAQ [​](#composition-api-faq)
=============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

TIP

This FAQ assumes prior experience with Vue - in particular, experience with Vue 2 while primarily using Options API.

What is Composition API? [​](#what-is-composition-api)
------------------------------------------------------

[Watch a free video lesson on Vue School](https://vueschool.io/lessons/introduction-to-the-vue-js-3-composition-api?friend=vuejs "Free Composition API Lesson")

Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an umbrella term that covers the following APIs:

*   [Reactivity API](/api/reactivity-core.html), e.g. `ref()` and `reactive()`, that allows us to directly create reactive state, computed state, and watchers.
    
*   [Lifecycle Hooks](/api/composition-api-lifecycle.html), e.g. `onMounted()` and `onUnmounted()`, that allow us to programmatically hook into the component lifecycle.
    
*   [Dependency Injection](/api/composition-api-dependency-injection.html), i.e. `provide()` and `inject()`, that allow us to leverage Vue's dependency injection system while using Reactivity APIs.
    

Composition API is a built-in feature of Vue 3 and [Vue 2.7](https://blog.vuejs.org/posts/vue-2-7-naruto.html). For older Vue 2 versions, use the officially maintained [`@vue/composition-api`](https://github.com/vuejs/composition-api) plugin. In Vue 3, it is also primarily used together with the [`<script setup>`](/api/sfc-script-setup.html) syntax in Single-File Components. Here's a basic example of a component using Composition API:

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // reactive state
    const count = ref(0)
    
    // functions that mutate state and trigger updates
    function increment() {
      count.value++
    }
    
    // lifecycle hooks
    onMounted(() => {
      console.log(`The initial count is ${count.value}.`)
    })
    </script>
    
    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>

Despite an API style based on function composition, **Composition API is NOT functional programming**. Composition API is based on Vue's mutable, fine-grained reactivity paradigm, whereas functional programming emphasizes immutability.

If you are interested in learning how to use Vue with Composition API, you can set the site-wide API preference to Composition API using the toggle at the top of the left sidebar, and then go through the guide from the beginning.

Why Composition API? [​](#why-composition-api)
----------------------------------------------

### Better Logic Reuse [​](#better-logic-reuse)

The primary advantage of Composition API is that it enables clean, efficient logic reuse in the form of [Composable functions](/guide/reusability/composables.html). It solves [all the drawbacks of mixins](/guide/reusability/composables.html#vs-mixins), the primary logic reuse mechanism for Options API.

Composition API's logic reuse capability has given rise to impressive community projects such as [VueUse](https://vueuse.org/), an ever-growing collection of composable utilities. It also serves as a clean mechanism for easily integrating stateful third-party services or libraries into Vue's reactivity system, for example [immutable data](/guide/extras/reactivity-in-depth.html#immutable-data), [state machines](/guide/extras/reactivity-in-depth.html#state-machines), and [RxJS](/guide/extras/reactivity-in-depth.html#rxjs).

### More Flexible Code Organization [​](#more-flexible-code-organization)

Many users love that we write organized code by default with Options API: everything has its place based on the option it falls under. However, Options API poses serious limitations when a single component's logic grows beyond a certain complexity threshold. This limitation is particularly prominent in components that need to deal with multiple **logical concerns**, which we have witnessed first hand in many production Vue 2 apps.

Take the folder explorer component from Vue CLI's GUI as an example: this component is responsible for the following logical concerns:

*   Tracking current folder state and displaying its content
*   Handling folder navigation (opening, closing, refreshing...)
*   Handling new folder creation
*   Toggling show favorite folders only
*   Toggling show hidden folders
*   Handling current working directory changes

The [original version](https://github.com/vuejs/vue-cli/blob/a09407dd5b9f18ace7501ddb603b95e31d6d93c0/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404) of the component was written in Options API. If we give each line of code a color based on the logical concern it is dealing with, this is how it looks:

![folder component before](/assets/options-api.4c42b509.png)

Notice how code dealing with the same logical concern is forced to be split under different options, located in different parts of the file. In a component that is several hundred lines long, understanding and navigating a single logical concern requires constantly scrolling up and down the file, making it much more difficult than it should be. In addition, if we ever intend to extract a logical concern into a reusable utility, it takes quite a bit of work to find and extract the right pieces of code from different parts of the file.

Here's the same component, before and after the [refactor into Composition API](https://gist.github.com/yyx990803/8854f8f6a97631576c14b63c8acd8f2e):

![folder component after](/assets/composition-api-after.e3f2c350.png)

Notice how the code related to the same logical concern can now be grouped together: we no longer need to jump between different options blocks while working on a specific logical concern. Moreover, we can now move a group of code into an external file with minimal effort, since we no longer need to shuffle the code around in order to extract them. This reduced friction for refactoring is key to the long-term maintainability in large codebases.

### Better Type Inference [​](#better-type-inference)

In recent years, more and more frontend developers are adopting [TypeScript](https://www.typescriptlang.org/) as it helps us write more robust code, make changes with more confidence, and provides a great development experience with IDE support. However, the Options API, originally conceived in 2013, was designed without type inference in mind. We had to implement some [absurdly complex type gymnastics](https://github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts#L132-L165) to make type inference work with the Options API. Even with all this effort, type inference for Options API can still break down for mixins and dependency injection.

This had led many developers who wanted to use Vue with TS to lean towards Class API powered by `vue-class-component`. However, a class-based API heavily relies on ES decorators, a language feature that was only a stage 2 proposal when Vue 3 was being developed in 2019. We felt it was too risky to base an official API on an unstable proposal. Since then, the decorators proposal has gone through yet another complete overhaul, and finally reached stage 3 in 2022. In addition, class-based API suffers from logic reuse and organization limitations similar to Options API.

In comparison, Composition API utilizes mostly plain variables and functions, which are naturally type friendly. Code written in Composition API can enjoy full type inference with little need for manual type hints. Most of the time, Composition API code will look largely identical in TypeScript and plain JavaScript. This also makes it possible for plain JavaScript users to benefit from partial type inference.

### Smaller Production Bundle and Less Overhead [​](#smaller-production-bundle-and-less-overhead)

Code written in Composition API and `<script setup>` is also more efficient and minification-friendly than Options API equivalent. This is because the template in a `<script setup>` component is compiled as a function inlined in the same scope of the `<script setup>` code. Unlike property access from `this`, the compiled template code can directly access variables declared inside `<script setup>`, without an instance proxy in between. This also leads to better minification because all the variable names can be safely shortened.

Relationship with Options API [​](#relationship-with-options-api)
-----------------------------------------------------------------

### Trade-offs [​](#trade-offs)

Some users moving from Options API found their Composition API code less organized, and concluded that Composition API is "worse" in terms of code organization. We recommend users with such opinions to look at that problem from a different perspective.

It is true that Composition API no longer provides the "guard rails" that guide you to put your code into respective buckets. In return, you get to author component code like how you would write normal JavaScript. This means **you can and should apply any code organization best practices to your Composition API code as you would when writing normal JavaScript**. If you can write well-organized JavaScript, you should also be able to write well-organized Composition API code.

Options API does allow you to "think less" when writing component code, which is why many users love it. However, in reducing the mental overhead, it also locks you into the prescribed code organization pattern with no escape hatch, which can make it difficult to refactor or improve code quality in larger scale projects. In this regard, Composition API provides better long term scalability.

### Does Composition API cover all use cases? [​](#does-composition-api-cover-all-use-cases)

Yes in terms of stateful logic. When using Composition API, there are only a few options that may still be needed: `props`, `emits`, `name`, and `inheritAttrs`. If using `<script setup>`, then `inheritAttrs` is typically the only option that may require a separate normal `<script>` block.

If you intend to exclusively use Composition API (along with the options listed above), you can shave a few kbs off your production bundle via a [compile-time flag](https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags) that drops Options API related code from Vue. Note this also affects Vue components in your dependencies.

### Can I use both APIs together? [​](#can-i-use-both-apis-together)

Yes. You can use Composition API via the [`setup()`](/api/composition-api-setup.html) option in an Options API component.

However, we only recommend doing so if you have an existing Options API codebase that needs to integrate with new features / external libraries written with Composition API.

### Will Options API be deprecated? [​](#will-options-api-be-deprecated)

No, we do not have any plan to do so. Options API is an integral part of Vue and the reason many developers love it. We also realize that many of the benefits of Composition API only manifest in larger-scale projects, and Options API remains a solid choice for many low-to-medium-complexity scenarios.

Relationship with Class API [​](#relationship-with-class-api)
-------------------------------------------------------------

We no longer recommend using Class API with Vue 3, given that Composition API provides great TypeScript integration with additional logic reuse and code organization benefits.

Comparison with React Hooks [​](#comparison-with-react-hooks)
-------------------------------------------------------------

Composition API provides the same level of logic composition capabilities as React Hooks, but with some important differences.

React Hooks are invoked repeatedly every time a component updates. This creates a number of caveats that can confuse even seasoned React developers. It also leads to performance optimization issues that can severely affect development experience. Here are some examples:

*   Hooks are call-order sensitive and cannot be conditional.
    
*   Variables declared in a React component can be captured by a hook closure and become "stale" if the developer fails to pass in the correct dependencies array. This leads to React developers relying on ESLint rules to ensure correct dependencies are passed. However, the rule is often not smart enough and over-compensates for correctness, which leads to unnecessary invalidation and headaches when edge cases are encountered.
    
*   Expensive computations require the use of `useMemo`, which again requires manually passing in the correct dependencies array.
    
*   Event handlers passed to child components cause unnecessary child updates by default, and require explicit `useCallback` as an optimization. This is almost always needed, and again requires a correct dependencies array. Neglecting this leads to over-rendering apps by default and can cause performance issues without realizing it.
    
*   The stale closure problem, combined with Concurrent features, makes it difficult to reason about when a piece of hooks code is run, and makes working with mutable state that should persist across renders (via `useRef`) cumbersome.
    

In comparison, Vue Composition API:

*   Invokes `setup()` or `<script setup>` code only once. This makes the code align better with the intuitions of idiomatic JavaScript usage as there are no stale closures to worry about. Composition API calls are also not sensitive to call order and can be conditional.
    
*   Vue's runtime reactivity system automatically collects reactive dependencies used in computed properties and watchers, so there's no need to manually declare dependencies.
    
*   No need to manually cache callback functions to avoid unnecessary child updates. In general, Vue's fine-grained reactivity system ensures child components only update when they need to. Manual child-update optimizations are rarely a concern for Vue developers.
    

We acknowledge the creativity of React Hooks, and it is a major source of inspiration for Composition API. However, the issues mentioned above do exist in its design and we noticed Vue's reactivity model happens to provide a way around them.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/composition-api-faq.md)
Reactivity in Depth [​](#reactivity-in-depth)
=============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

One of Vue’s most distinctive features is the unobtrusive reactivity system. Component state consists of reactive JavaScript objects. When you modify them, the view updates. It makes state management simple and intuitive, but it’s also important to understand how it works to avoid some common gotchas. In this section, we are going to dig into some of the lower-level details of Vue’s reactivity system.

What is Reactivity? [​](#what-is-reactivity)
--------------------------------------------

This term comes up in programming quite a bit these days, but what do people mean when they say it? Reactivity is a programming paradigm that allows us to adjust to changes in a declarative manner. The canonical example that people usually show, because it’s a great one, is an Excel spreadsheet:

A

B

C

0

1

1

2

2

3

Here cell A2 is defined via a formula of `= A0 + A1` (you can click on A2 to view or edit the formula), so the spreadsheet gives us 3. No surprises there. But if you update A0 or A1, you'll notice that A2 automagically updates too.

JavaScript doesn’t usually work like this. If we were to write something comparable in JavaScript:

js

    let A0 = 1
    let A1 = 2
    let A2 = A0 + A1
    
    console.log(A2) // 3
    
    A0 = 2
    console.log(A2) // Still 3

When we mutate `A0`, `A2` does not change automatically.

So how would we do this in JavaScript? First, in order to re-run the code that updates `A2`, let's wrap it in a function:

js

    let A2
    
    function update() {
      A2 = A0 + A1
    }

Then, we need to define a few terms:

*   The `update()` function produces a **side effect**, or **effect** for short, because it modifies the state of the program.
    
*   `A0` and `A1` are considered **dependencies** of the effect, as their values are used to perform the effect. The effect is said to be a **subscriber** to its dependencies.
    

What we need is a magic function that can invoke `update()` (the **effect**) whenever `A0` or `A1` (the **dependencies**) change:

js

    whenDepsChange(update)

This `whenDepsChange()` function has the following tasks:

1.  Track when a variable is read. E.g. when evaluating the expression `A0 + A1`, both `A0` and `A1` are read.
    
2.  If a variable is read when there is a currently running effect, make that effect a subscriber to that variable. E.g. because `A0` and `A1` are read when `update()` is being executed, `update()` becomes a subscriber to both `A0` and `A1` after the first call.
    
3.  Detect when a variable is mutated. E.g. when `A0` is assigned a new value, notify all its subscriber effects to re-run.
    

How Reactivity Works in Vue [​](#how-reactivity-works-in-vue)
-------------------------------------------------------------

We can't really track the reading and writing of local variables like in the example. There's just no mechanism for doing that in vanilla JavaScript. What we **can** do though, is intercept the reading and writing of **object properties**.

There are two ways of intercepting property access in JavaScript: [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) / [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Vue 2 used getter / setters exclusively due to browser support limitations. In Vue 3, Proxies are used for reactive objects and getter / setters are used for refs. Here's some pseudo-code that illustrates how they work:

js

    function reactive(obj) {
      return new Proxy(obj, {
        get(target, key) {
          track(target, key)
          return target[key]
        },
        set(target, key, value) {
          target[key] = value
          trigger(target, key)
        }
      })
    }
    
    function ref(value) {
      const refObject = {
        get value() {
          track(refObject, 'value')
          return value
        },
        set value(newValue) {
          value = newValue
          trigger(refObject, 'value')
        }
      }
      return refObject
    }

TIP

Code snippets here and below are meant to explain the core concepts in the simplest form possible, so many details are omitted, and edge cases ignored.

This explains a few [limitations of reactive objects](/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive) that we have discussed in the fundamentals section:

*   When you assign or destructure a reactive object's property to a local variable, the reactivity is "disconnected" because access to the local variable no longer triggers the get / set proxy traps.
    
*   The returned proxy from `reactive()`, although behaving just like the original, has a different identity if we compare it to the original using the `===` operator.
    

Inside `track()`, we check whether there is a currently running effect. If there is one, we lookup the subscriber effects (stored in a Set) for the property being tracked, and add the effect to the Set:

js

    // This will be set right before an effect is about
    // to be run. We'll deal with this later.
    let activeEffect
    
    function track(target, key) {
      if (activeEffect) {
        const effects = getSubscribersForProperty(target, key)
        effects.add(activeEffect)
      }
    }

Effect subscriptions are stored in a global `WeakMap<target, Map<key, Set<effect>>>` data structure. If no subscribing effects Set was found for a property (tracked for the first time), it will be created. This is what the `getSubscribersForProperty()` function does, in short. For simplicity, we will skip its details.

Inside `trigger()`, we again lookup the subscriber effects for the property. But this time we invoke them instead:

js

    function trigger(target, key) {
      const effects = getSubscribersForProperty(target, key)
      effects.forEach((effect) => effect())
    }

Now let's circle back to the `whenDepsChange()` function:

js

    function whenDepsChange(update) {
      const effect = () => {
        activeEffect = effect
        update()
        activeEffect = null
      }
      effect()
    }

It wraps the raw `update` function in an effect that sets itself as the current active effect before running the actual update. This enables `track()` calls during the update to locate the current active effect.

At this point, we have created an effect that automatically tracks its dependencies, and re-runs whenever a dependency changes. We call this a **Reactive Effect**.

Vue provides an API that allows you to create reactive effects: [`watchEffect()`](/api/reactivity-core.html#watcheffect). In fact, you may have noticed that it works pretty similarly to the magical `whenDepsChange()` in the example. We can now rework the original example using actual Vue APIs:

js

    import { ref, watchEffect } from 'vue'
    
    const A0 = ref(0)
    const A1 = ref(1)
    const A2 = ref()
    
    watchEffect(() => {
      // tracks A0 and A1
      A2.value = A0.value + A1.value
    })
    
    // triggers the effect
    A0.value = 2

Using a reactive effect to mutate a ref isn't the most interesting use case - in fact, using a computed property makes it more declarative:

js

    import { ref, computed } from 'vue'
    
    const A0 = ref(0)
    const A1 = ref(1)
    const A2 = computed(() => A0.value + A1.value)
    
    A0.value = 2

Internally, `computed` manages its invalidation and re-computation using a reactive effect.

So what's an example of a common and useful reactive effect? Well, updating the DOM! We can implement simple "reactive rendering" like this:

js

    import { ref, watchEffect } from 'vue'
    
    const count = ref(0)
    
    watchEffect(() => {
      document.body.innerHTML = `count is: ${count.value}`
    })
    
    // updates the DOM
    count.value++

In fact, this is pretty close to how a Vue component keeps the state and the DOM in sync - each component instance creates a reactive effect to render and update the DOM. Of course, Vue components use much more efficient ways to update the DOM than `innerHTML`. This is discussed in [Rendering Mechanism](./rendering-mechanism.html).

The `ref()`, `computed()` and `watchEffect()` APIs are all part of the Composition API. If you have only been using Options API with Vue so far, you'll notice that Composition API is closer to how Vue's reactivity system works under the hood. In fact, in Vue 3 the Options API is implemented on top of the Composition API. All property access on the component instance (`this`) triggers getter / setters for reactivity tracking, and options like `watch` and `computed` invoke their Composition API equivalents internally.

Runtime vs. Compile-time Reactivity [​](#runtime-vs-compile-time-reactivity)
----------------------------------------------------------------------------

Vue's reactivity system is primarily runtime-based: the tracking and triggering are all performed while the code is running directly in the browser. The pros of runtime reactivity are that it can work without a build step, and there are fewer edge cases. On the other hand, this makes it constrained by the syntax limitations of JavaScript, leading to the need of value containers like Vue refs.

Some frameworks, such as [Svelte](https://svelte.dev/), choose to overcome such limitations by implementing reactivity during compilation. It analyzes and transforms the code in order to simulate reactivity. The compilation step allows the framework to alter the semantics of JavaScript itself - for example, implicitly injecting code that performs dependency analysis and effect triggering around access to locally defined variables. The downside is that such transforms require a build step, and altering JavaScript semantics is essentially creating a language that looks like JavaScript but compiles into something else.

The Vue team did explore this direction via an experimental feature called [Reactivity Transform](/guide/extras/reactivity-transform.html), but in the end we have decided that it would not be a good fit for the project due to [the reasoning here](https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028).

Reactivity Debugging [​](#reactivity-debugging)
-----------------------------------------------

It's great that Vue's reactivity system automatically tracks dependencies, but in some cases we may want to figure out exactly what is being tracked, or what is causing a component to re-render.

### Component Debugging Hooks [​](#component-debugging-hooks)

We can debug what dependencies are used during a component's render and which dependency is triggering an update using the `renderTracked``onRenderTracked` and `renderTriggered``onRenderTriggered` lifecycle hooks. Both hooks will receive a debugger event which contains information on the dependency in question. It is recommended to place a `debugger` statement in the callbacks to interactively inspect the dependency:

vue

    <script setup>
    import { onRenderTracked, onRenderTriggered } from 'vue'
    
    onRenderTracked((event) => {
      debugger
    })
    
    onRenderTriggered((event) => {
      debugger
    })
    </script>

js

    export default {
      renderTracked(event) {
        debugger
      },
      renderTriggered(event) {
        debugger
      }
    }

TIP

Component debug hooks only work in development mode.

The debug event objects have the following type:

ts

    type DebuggerEvent = {
      effect: ReactiveEffect
      target: object
      type:
        | TrackOpTypes /* 'get' | 'has' | 'iterate' */
        | TriggerOpTypes /* 'set' | 'add' | 'delete' | 'clear' */
      key: any
      newValue?: any
      oldValue?: any
      oldTarget?: Map<any, any> | Set<any>
    }

### Computed Debugging [​](#computed-debugging)

We can debug computed properties by passing `computed()` a second options object with `onTrack` and `onTrigger` callbacks:

*   `onTrack` will be called when a reactive property or ref is tracked as a dependency.
*   `onTrigger` will be called when the watcher callback is triggered by the mutation of a dependency.

Both callbacks will receive debugger events in the [same format](#debugger-event) as component debug hooks:

js

    const plusOne = computed(() => count.value + 1, {
      onTrack(e) {
        // triggered when count.value is tracked as a dependency
        debugger
      },
      onTrigger(e) {
        // triggered when count.value is mutated
        debugger
      }
    })
    
    // access plusOne, should trigger onTrack
    console.log(plusOne.value)
    
    // mutate count.value, should trigger onTrigger
    count.value++

TIP

`onTrack` and `onTrigger` computed options only work in development mode.

### Watcher Debugging [​](#watcher-debugging)

Similar to `computed()`, watchers also support the `onTrack` and `onTrigger` options:

js

    watch(source, callback, {
      onTrack(e) {
        debugger
      },
      onTrigger(e) {
        debugger
      }
    })
    
    watchEffect(callback, {
      onTrack(e) {
        debugger
      },
      onTrigger(e) {
        debugger
      }
    })

TIP

`onTrack` and `onTrigger` watcher options only work in development mode.

Integration with External State Systems [​](#integration-with-external-state-systems)
-------------------------------------------------------------------------------------

Vue's reactivity system works by deeply converting plain JavaScript objects into reactive proxies. The deep conversion can be unnecessary or sometimes unwanted when integrating with external state management systems (e.g. if an external solution also uses Proxies).

The general idea of integrating Vue's reactivity system with an external state management solution is to hold the external state in a [`shallowRef`](/api/reactivity-advanced.html#shallowref). A shallow ref is only reactive when its `.value` property is accessed - the inner value is left intact. When the external state changes, replace the ref value to trigger updates.

### Immutable Data [​](#immutable-data)

If you are implementing an undo / redo feature, you likely want to take a snapshot of the application's state on every user edit. However, Vue's mutable reactivity system isn't best suited for this if the state tree is large, because serializing the entire state object on every update can be expensive in terms of both CPU and memory costs.

[Immutable data structures](https://en.wikipedia.org/wiki/Persistent_data_structure) solve this by never mutating the state objects - instead, it creates new objects that share the same, unchanged parts with old ones. There are different ways of using immutable data in JavaScript, but we recommend using [Immer](https://immerjs.github.io/immer/) with Vue because it allows you to use immutable data while keeping the more ergonomic, mutable syntax.

We can integrate Immer with Vue via a simple composable:

js

    import produce from 'immer'
    import { shallowRef } from 'vue'
    
    export function useImmer(baseState) {
      const state = shallowRef(baseState)
      const update = (updater) => {
        state.value = produce(state.value, updater)
      }
    
      return [state, update]
    }

[Try it in the Playground](https://play.vuejs.org/#eNplU8Fu2zAM/RXOlzpAYu82zEu67lhgpw3bJcrBs5VYqywJkpxmMPzvoyjZNRodbJF84iOppzH7ZkxxHXhWZXvXWGE8OO4H88iU6I22HkYYHH/ue25hgrPVPTwUpQh28dc9MAXAVKOV83AUnvduC4Npa8+fg3GCw3I8PwbwGD64vPCSV8Cy77y2Cn4PnGXbFGu1wpC36EPHRO67c78cD6fgVfgOiOB9gnMtXczA1GnDFFPnQTVeaAVeXy6SSsyFavltE/OvKs+pGTg8zsxkHwl9KgIBtvbhzkl0yIWU+zIOFEeJBgKNxORoAewHSX/cSQHX3VnbA8vyMXa3pfqxb0i1CRXZWZb6w1U1snYOT40JvQ4+NVI0Lxi865NliTisMRHChOVSNaUUscCSKtyXq7LRdP6fDNvYPw3G85vftbzRtg6TrUAKxXe+s3q4dF/mQdC5bJtFTe362qB4tELVURKWAthhNc87+OhSw2V33htXleWgzMulaHQfFfj0ufhYfCpb4XySJHc9Zv7a63aQqKh0+xNRR8kiZ1K2sYhqeBI1xVHPi+xdV0upX3/w8yJ8fCiIYIrfCLPIaZH4n9rxnx7nlQQVH4YLHpTLW8YV8A0W1Ye4PO7sZiU/ylFca4mSP8yl5yvv/O4sZcSmw8/iW8bXdSTcjDiFgUz/AcH6WZQ=)

### State Machines [​](#state-machines)

[State Machine](https://en.wikipedia.org/wiki/Finite-state_machine) is a model for describing all the possible states an application can be in, and all the possible ways it can transition from one state to another. While it may be overkill for simple components, it can help make complex state flows more robust and manageable.

One of the most popular state machine implementations in JavaScript is [XState](https://xstate.js.org/). Here's a composable that integrates with it:

js

    import { createMachine, interpret } from 'xstate'
    import { shallowRef } from 'vue'
    
    export function useMachine(options) {
      const machine = createMachine(options)
      const state = shallowRef(machine.initialState)
      const service = interpret(machine)
        .onTransition((newState) => (state.value = newState))
        .start()
      const send = (event) => service.send(event)
    
      return [state, send]
    }

[Try it in the Playground](https://play.vuejs.org/#eNp1U81unDAQfpWRL7DSFqqqUiXEJumhyqVVpDa3ugcKZtcJjC1syEqId8/YBu/uIRcEM9/P/DGz71pn0yhYwUpTD1JbMMKO+o6j7LUaLMwwGvGrqk8SBSzQDqqHJMv7EMleTMIRgGOt0Fj4a2xlxZ5EsPkHhytuOjucbApIrDoeO5HsfQCllVVHUYlVbeW0xr2OKcCzHCwkKQAK3fP56fHx5w/irSyqbfFMgA+h0cKBHZYey45jmYfeqWv6sKLXHbnTF0D5f7RWITzUnaxfD5y5ztIkSCY7zjwKYJ5DyVlf2fokTMrZ5sbZDu6Bs6e25QwK94b0svgKyjwYkEyZR2e2Z2H8n/pK04wV0oL8KEjWJwxncTicnb23C3F2slabIs9H1K/HrFZ9HrIPX7Mv37LPuTC5xEacSfa+V83YEW+bBfleFkuW8QbqQZDEuso9rcOKQQ/CxosIHnQLkWJOVdept9+ijSA6NEJwFGePaUekAdFwr65EaRcxu9BbOKq1JDqnmzIi9oL0RRDu4p1u/ayH9schrhlimGTtOLGnjeJRAJnC56FCQ3SFaYriLWjA4Q7SsPOp6kYnEXMbldKDTW/ssCFgKiaB1kusBWT+rkLYjQiAKhkHvP2j3IqWd5iMQ+M=)

### RxJS [​](#rxjs)

[RxJS](https://rxjs.dev/) is a library for working with asynchronous event streams. The [VueUse](https://vueuse.org/) library provides the [`@vueuse/rxjs`](https://vueuse.org/rxjs/readme.html) add-on for connecting RxJS streams with Vue's reactivity system.

Connection to Signals [​](#connection-to-signals)
-------------------------------------------------

Quite a few other frameworks have introduced reactivity primitives similar to refs from Vue's Composition API, under the term "signals":

*   [Solid Signals](https://www.solidjs.com/docs/latest/api#createsignal)
*   [Angular Signals](https://github.com/angular/angular/discussions/49090)
*   [Preact Signals](https://preactjs.com/guide/v10/signals/)
*   [Qwik Signals](https://qwik.builder.io/docs/components/state/#usesignal)

Fundamentally, signals are the same kind of reactivity primitive as Vue refs. It's a value container that provides dependency tracking on access, and side-effect triggering on mutation. This reactivity-primitive-based paradigm isn't a particularly new concept in the frontend world: it dates back to implementations like [Knockout observables](https://knockoutjs.com/documentation/observables.html) and [Meteor Tracker](https://docs.meteor.com/api/tracker.html) from more than a decade ago. Vue Options API and the React state management library [MobX](https://mobx.js.org/) are also based on the same principles, but hide the primitives behind object properties.

Although not a necessary trait for something to qualify as signals, today the concept is often discussed alongside the rendering model where updates are performed through fine-grained subscriptions. Due to the use of Virtual DOM, Vue currently [relies on compilers to achieve similar optimizations](/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom). However, we are also exploring a new Solid-inspired compilation strategy (Vapor Mode) that does not rely on Virtual DOM and takes more advantage of Vue's built-in reactivity system.

### API Design Trade-Offs [​](#api-design-trade-offs)

The design of Preact and Qwik's signals are very similar to Vue's [shallowRef](/api/reactivity-advanced.html#shallowref): all three provide a mutable interface via the `.value` property. We will focus the discussion on Solid and Angular signals.

#### Solid Signals [​](#solid-signals)

Solid's `createSignal()` API design emphasizes read / write segregation. Signals are exposed as a read-only getter and a separate setter:

js

    const [count, setCount] = createSignal(0)
    
    count() // access the value
    setCount(1) // update the value

Notice how the `count` signal can be passed down without the setter. This ensures that the state can never be mutated unless the setter is also explicitly exposed. Whether this safety guarantee justifies the more verbose syntax could be subject to the requirement of the project and personal taste - but in case you prefer this API style, you can easily replicate it in Vue:

js

    import { shallowRef, triggerRef } from 'vue'
    
    export function createSignal(value, options) {
      const r = shallowRef(value)
      const get = () => r.value
      const set = (v) => {
        r.value = typeof v === 'function' ? v(r.value) : v
        if (options?.equals === false) triggerRef(r)
      }
      return [get, set]
    }

[Try it in the Playground](https://play.vuejs.org/#eNpdUk1TgzAQ/Ss7uQAjgr12oNXxH+ix9IAYaDQkMV/qMPx3N6G0Uy9Msu/tvn2PTORJqcI7SrakMp1myoKh1qldI9iopLYwQadpa+krG0TLYYZeyxGSojSSs/d7E8vFh0ka0YhOCmPh0EknbB4mPYfTEeqbIelD1oiqXPRQCS+WjoojAW8A1Wmzm1A39KYZzHNVYiUib85aKeCx46z7rBuySqQe6h14uINN1pDIBWACVUcqbGwtl17EqvIiR3LyzwcmcXFuTi3n8vuF9jlYzYaBajxfMsDcomv6E/m9E51luN2NV99yR3OQKkAmgykss+SkMZerxMLEZFZ4oBYJGAA600VEryAaD6CPaJwJKwnr9ldR2WMedV1Dsi6WwB58emZlsAV/zqmH9LzfvqBfruUmNvZ4QN7VearjenP4aHwmWsABt4x/+tiImcx/z27Jqw==)

#### Angular Signals [​](#angular-signals)

Angular is undergoing some fundamental changes by foregoing dirty-checking and introducing its own implementation of a reactivity primitive. The Angular Signal API looks like this:

js

    const count = signal(0)
    
    count() // access the value
    count.set(1) // set new value
    count.update((v) => v + 1) // update based on previous value
    
    // mutate deep objects with same identity
    const state = signal({ count: 0 })
    state.mutate((o) => {
      o.count++
    })

Again, we can easily replicate the API in Vue:

js

    import { shallowRef, triggerRef } from 'vue'
    
    export function signal(initialValue) {
      const r = shallowRef(initialValue)
      const s = () => r.value
      s.set = (value) => {
        r.value = value
      }
      s.update = (updater) => {
        r.value = updater(r.value)
      }
      s.mutate = (mutator) => {
        mutator(r.value)
        triggerRef(r)
      }
      return s
    }

[Try it in the Playground](https://play.vuejs.org/#eNp9UslOwzAQ/ZVRLiRQEsqxpBUIvoADp0goTd3U4DiWl4AU5d8ZL3E3iZtn5r1Z3vOYvAiRD4Ykq6RUjaRCgyLaiE3FaSd6qWEERVteswU0fSeMJjuYYC/7Dm7youatYbW895D8S91UvOJNz5VGuOEa1oGePmRzYdebLSNYmRumaQbrjSfg8xYeEVsWfh/cBANNOsFqTTACKA/LzavrTtUKxjEyp6kssDZj3vygAPJjL1Bbo3XP4blhtPleV4nrlBuxw1npYLca4A6WWZU4PADljSQd4drRC8//rxfKaW+f+ZJg4oJbFvG8ZJFcaYreHL041Iz1P+9kvwAtadsS6d7Rm1rB55VRaLAzhvy6NnvDG01x1WAN5VTTmn3UzJAMRrudd0pa++LEc9wRpRDlHZT5YGu2pOzhWHAJWxvnakxOHufFxqx/4MxzcEinIYP+eV5ntOe5Rx94IYjopxOZUhnIEr+4xPMrjuG1LPFftkTj5DNJGhwYBZ4BJz3DV56FmJLpD1DrKXU=)

Compared to Vue refs, Solid and Angular's getter-based API style provide some interesting trade-offs when used in Vue components:

*   `()` is slightly less verbose than `.value`, but updating the value is more verbose.
*   There is no ref-unwrapping: accessing values always require `()`. This makes value access consistent everywhere. This also means you can pass raw signals down as component props.

Whether these API styles suit you is to some extent subjective. Our goal here is to demonstrate the underlying similarity and trade-offs between these different API designs. We also want to show that Vue is flexible: you are not really locked into the existing APIs. Should it be necessary, you can create your own reactivity primitive API to suit more specific needs.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/reactivity-in-depth.md)
Rendering Mechanism [​](#rendering-mechanism)
=============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

How does Vue take a template and turn it into actual DOM nodes? How does Vue update those DOM nodes efficiently? We will attempt to shed some light on these questions here by diving into Vue's internal rendering mechanism.

Virtual DOM [​](#virtual-dom)
-----------------------------

You have probably heard about the term "virtual DOM", which Vue's rendering system is based upon.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM. The concept was pioneered by [React](https://reactjs.org/), and has been adapted in many other frameworks with different implementations, including Vue.

Virtual DOM is more of a pattern than a specific technology, so there is no one canonical implementation. We can illustrate the idea using a simple example:

js

    const vnode = {
      type: 'div',
      props: {
        id: 'hello'
      },
      children: [
        /* more vnodes */
      ]
    }

Here, `vnode` is a plain JavaScript object (a "virtual node") representing a `<div>` element. It contains all the information that we need to create the actual element. It also contains more children vnodes, which makes it the root of a virtual DOM tree.

A runtime renderer can walk a virtual DOM tree and construct a real DOM tree from it. This process is called **mount**.

If we have two copies of virtual DOM trees, the renderer can also walk and compare the two trees, figuring out the differences, and apply those changes to the actual DOM. This process is called **patch**, also known as "diffing" or "reconciliation".

The main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer.

Render Pipeline [​](#render-pipeline)
-------------------------------------

At the high level, this is what happens when a Vue component is mounted:

1.  **Compile**: Vue templates are compiled into **render functions**: functions that return virtual DOM trees. This step can be done either ahead-of-time via a build step, or on-the-fly by using the runtime compiler.
    
2.  **Mount**: The runtime renderer invokes the render functions, walks the returned virtual DOM tree, and creates actual DOM nodes based on it. This step is performed as a [reactive effect](./reactivity-in-depth.html), so it keeps track of all reactive dependencies that were used.
    
3.  **Patch**: When a dependency used during mount changes, the effect re-runs. This time, a new, updated Virtual DOM tree is created. The runtime renderer walks the new tree, compares it with the old one, and applies necessary updates to the actual DOM.
    

![render pipeline](/assets/render-pipeline.03805016.png)

Templates vs. Render Functions [​](#templates-vs-render-functions)
------------------------------------------------------------------

Vue templates are compiled into virtual DOM render functions. Vue also provides APIs that allow us to skip the template compilation step and directly author render functions. Render functions are more flexible than templates when dealing with highly dynamic logic, because you can work with vnodes using the full power of JavaScript.

So why does Vue recommend templates by default? There are a number of reasons:

1.  Templates are closer to actual HTML. This makes it easier to reuse existing HTML snippets, apply accessibility best practices, style with CSS, and for designers to understand and modify.
    
2.  Templates are easier to statically analyze due to their more deterministic syntax. This allows Vue's template compiler to apply many compile-time optimizations to improve the performance of the virtual DOM (which we will discuss below).
    

In practice, templates are sufficient for most use cases in applications. Render functions are typically only used in reusable components that need to deal with highly dynamic rendering logic. Render function usage is discussed in more detail in [Render Functions & JSX](./render-function.html).

Compiler-Informed Virtual DOM [​](#compiler-informed-virtual-dom)
-----------------------------------------------------------------

The virtual DOM implementation in React and most other virtual-DOM implementations are purely runtime: the reconciliation algorithm cannot make any assumptions about the incoming virtual DOM tree, so it has to fully traverse the tree and diff the props of every vnode in order to ensure correctness. In addition, even if a part of the tree never changes, new vnodes are always created for them on each re-render, resulting in unnecessary memory pressure. This is one of the most criticized aspect of virtual DOM: the somewhat brute-force reconciliation process sacrifices efficiency in return for declarativeness and correctness.

But it doesn't have to be that way. In Vue, the framework controls both the compiler and the runtime. This allows us to implement many compile-time optimizations that only a tightly-coupled renderer can take advantage of. The compiler can statically analyze the template and leave hints in the generated code so that the runtime can take shortcuts whenever possible. At the same time, we still preserve the capability for the user to drop down to the render function layer for more direct control in edge cases. We call this hybrid approach **Compiler-Informed Virtual DOM**.

Below, we will discuss a few major optimizations done by the Vue template compiler to improve the virtual DOM's runtime performance.

### Static Hoisting [​](#static-hoisting)

Quite often there will be parts in a template that do not contain any dynamic bindings:

template

    <div>
      <div>foo</div> <!-- hoisted -->
      <div>bar</div> <!-- hoisted -->
      <div>{{ dynamic }}</div>
    </div>

[Inspect in Template Explorer](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2PmZvbzwvZGl2PiA8IS0tIGhvaXN0ZWQgLS0+XG4gIDxkaXY+YmFyPC9kaXY+IDwhLS0gaG9pc3RlZCAtLT5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj5cbiIsIm9wdGlvbnMiOnsiaG9pc3RTdGF0aWMiOnRydWV9fQ==)

The `foo` and `bar` divs are static - re-creating vnodes and diffing them on each re-render is unnecessary. The Vue compiler automatically hoists their vnode creation calls out of the render function, and reuses the same vnodes on every render. The renderer is also able to completely skip diffing them when it notices the old vnode and the new vnode are the same one.

In addition, when there are enough consecutive static elements, they will be condensed into a single "static vnode" that contains the plain HTML string for all these nodes ([Example](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb1wiPmZvbzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj4iLCJzc3IiOmZhbHNlLCJvcHRpb25zIjp7ImhvaXN0U3RhdGljIjp0cnVlfX0=)). These static vnodes are mounted by directly setting `innerHTML`. They also cache their corresponding DOM nodes on initial mount - if the same piece of content is reused elsewhere in the app, new DOM nodes are created using native `cloneNode()`, which is extremely efficient.

### Patch Flags [​](#patch-flags)

For a single element with dynamic bindings, we can also infer a lot of information from it at compile time:

template

    <!-- class binding only -->
    <div :class="{ active }"></div>
    
    <!-- id and value bindings only -->
    <input :id="id" :value="value">
    
    <!-- text children only -->
    <div>{{ dynamic }}</div>

[Inspect in Template Explorer](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2IDpjbGFzcz1cInsgYWN0aXZlIH1cIj48L2Rpdj5cblxuPGlucHV0IDppZD1cImlkXCIgOnZhbHVlPVwidmFsdWVcIj5cblxuPGRpdj57eyBkeW5hbWljIH19PC9kaXY+Iiwib3B0aW9ucyI6e319)

When generating the render function code for these elements, Vue encodes the type of update each of them needs directly in the vnode creation call:

js

    createElementVNode("div", {
      class: _normalizeClass({ active: _ctx.active })
    }, null, 2 /* CLASS */)

The last argument, `2`, is a [patch flag](https://github.com/vuejs/core/blob/main/packages/shared/src/patchFlags.ts). An element can have multiple patch flags, which will be merged into a single number. The runtime renderer can then check against the flags using [bitwise operations](https://en.wikipedia.org/wiki/Bitwise_operation) to determine whether it needs to do certain work:

js

    if (vnode.patchFlag & PatchFlags.CLASS /* 2 */) {
      // update the element's class
    }

Bitwise checks are extremely fast. With the patch flags, Vue is able to do the least amount of work necessary when updating elements with dynamic bindings.

Vue also encodes the type of children a vnode has. For example, a template that has multiple root nodes is represented as a fragment. In most cases, we know for sure that the order of these root nodes will never change, so this information can also be provided to the runtime as a patch flag:

js

    export function render() {
      return (_openBlock(), _createElementBlock(_Fragment, null, [
        /* children */
      ], 64 /* STABLE_FRAGMENT */))
    }

The runtime can thus completely skip child-order reconciliation for the root fragment.

### Tree Flattening [​](#tree-flattening)

Taking another look at the generated code from the previous example, you'll notice the root of the returned virtual DOM tree is created using a special `createElementBlock()` call:

js

    export function render() {
      return (_openBlock(), _createElementBlock(_Fragment, null, [
        /* children */
      ], 64 /* STABLE_FRAGMENT */))
    }

Conceptually, a "block" is a part of the template that has stable inner structure. In this case, the entire template has a single block because it does not contain any structural directives like `v-if` and `v-for`.

Each block tracks any descendant nodes (not just direct children) that have patch flags. For example:

template

    <div> <!-- root block -->
      <div>...</div>         <!-- not tracked -->
      <div :id="id"></div>   <!-- tracked -->
      <div>                  <!-- not tracked -->
        <div>{{ bar }}</div> <!-- tracked -->
      </div>
    </div>

The result is a flattened array that contains only the dynamic descendant nodes:

    div (block root)
    - div with :id binding
    - div with {{ bar }} binding

When this component needs to re-render, it only needs to traverse the flattened tree instead of the full tree. This is called **Tree Flattening**, and it greatly reduces the number of nodes that need to be traversed during virtual DOM reconciliation. Any static parts of the template are effectively skipped.

`v-if` and `v-for` directives will create new block nodes:

template

    <div> <!-- root block -->
      <div>
        <div v-if> <!-- if block -->
          ...
        <div>
      </div>
    </div>

A child block is tracked inside the parent block's array of dynamic descendants. This retains a stable structure for the parent block.

### Impact on SSR Hydration [​](#impact-on-ssr-hydration)

Both patch flags and tree flattening also greatly improve Vue's [SSR Hydration](/guide/scaling-up/ssr.html#client-hydration) performance:

*   Single element hydration can take fast paths based on the corresponding vnode's patch flag.
    
*   Only block nodes and their dynamic descendants need to be traversed during hydration, effectively achieving partial hydration at the template level.
    

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/rendering-mechanism.md)
Render Functions & JSX [​](#render-functions-jsx)
=================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Vue recommends using templates to build applications in the vast majority of cases. However, there are situations where we need the full programmatic power of JavaScript. That's where we can use the **render function**.

> If you are new to the concept of virtual DOM and render functions, make sure to read the [Rendering Mechanism](/guide/extras/rendering-mechanism.html) chapter first.

Basic Usage [​](#basic-usage)
-----------------------------

### Creating Vnodes [​](#creating-vnodes)

Vue provides an `h()` function for creating vnodes:

js

    import { h } from 'vue'
    
    const vnode = h(
      'div', // type
      { id: 'foo', class: 'bar' }, // props
      [
        /* children */
      ]
    )

`h()` is short for **hyperscript** - which means "JavaScript that produces HTML (hypertext markup language)". This name is inherited from conventions shared by many virtual DOM implementations. A more descriptive name could be `createVnode()`, but a shorter name helps when you have to call this function many times in a render function.

The `h()` function is designed to be very flexible:

js

    // all arguments except the type are optional
    h('div')
    h('div', { id: 'foo' })
    
    // both attributes and properties can be used in props
    // Vue automatically picks the right way to assign it
    h('div', { class: 'bar', innerHTML: 'hello' })
    
    // props modifiers such as `.prop` and `.attr` can be added
    // with `.` and `^` prefixes respectively
    h('div', { '.name': 'some-name', '^width': '100' })
    
    // class and style have the same object / array
    // value support that they have in templates
    h('div', { class: [foo, { bar }], style: { color: 'red' } })
    
    // event listeners should be passed as onXxx
    h('div', { onClick: () => {} })
    
    // children can be a string
    h('div', { id: 'foo' }, 'hello')
    
    // props can be omitted when there are no props
    h('div', 'hello')
    h('div', [h('span', 'hello')])
    
    // children array can contain mixed vnodes and strings
    h('div', ['hello', h('span', 'hello')])

The resulting vnode has the following shape:

js

    const vnode = h('div', { id: 'foo' }, [])
    
    vnode.type // 'div'
    vnode.props // { id: 'foo' }
    vnode.children // []
    vnode.key // null

Note

The full `VNode` interface contains many other internal properties, but it is strongly recommended to avoid relying on any properties other than the ones listed here. This avoids unintended breakage in case the internal properties are changed.

### Declaring Render Functions [​](#declaring-render-functions)

When using templates with Composition API, the return value of the `setup()` hook is used to expose data to the template. When using render functions, however, we can directly return the render function instead:

js

    import { ref, h } from 'vue'
    
    export default {
      props: {
        /* ... */
      },
      setup(props) {
        const count = ref(1)
    
        // return the render function
        return () => h('div', props.msg + count.value)
      }
    }

The render function is declared inside `setup()` so it naturally has access to the props and any reactive state declared in the same scope.

In addition to returning a single vnode, you can also return strings or arrays:

js

    export default {
      setup() {
        return () => 'hello world!'
      }
    }

js

    import { h } from 'vue'
    
    export default {
      setup() {
        // use an array to return multiple root nodes
        return () => [
          h('div'),
          h('div'),
          h('div')
        ]
      }
    }

TIP

Make sure to return a function instead of directly returning values! The `setup()` function is called only once per component, while the returned render function will be called multiple times.

We can declare render functions using the `render` option:

js

    import { h } from 'vue'
    
    export default {
      data() {
        return {
          msg: 'hello'
        }
      },
      render() {
        return h('div', this.msg)
      }
    }

The `render()` function has access to the component instance via `this`.

In addition to returning a single vnode, you can also return strings or arrays:

js

    export default {
      render() {
        return 'hello world!'
      }
    }

js

    import { h } from 'vue'
    
    export default {
      render() {
        // use an array to return multiple root nodes
        return [
          h('div'),
          h('div'),
          h('div')
        ]
      }
    }

If a render function component doesn't need any instance state, they can also be declared directly as a function for brevity:

js

    function Hello() {
      return 'hello world!'
    }

That's right, this is a valid Vue component! See [Functional Components](#functional-components) for more details on this syntax.

### Vnodes Must Be Unique [​](#vnodes-must-be-unique)

All vnodes in the component tree must be unique. That means the following render function is invalid:

js

    function render() {
      const p = h('p', 'hi')
      return h('div', [
        // Yikes - duplicate vnodes!
        p,
        p
      ])
    }

If you really want to duplicate the same element/component many times, you can do so with a factory function. For example, the following render function is a perfectly valid way of rendering 20 identical paragraphs:

js

    function render() {
      return h(
        'div',
        Array.from({ length: 20 }).map(() => {
          return h('p', 'hi')
        })
      )
    }

JSX / TSX [​](#jsx-tsx)
-----------------------

[JSX](https://facebook.github.io/jsx/) is an XML-like extension to JavaScript that allows us to write code like this:

jsx

    const vnode = <div>hello</div>

Inside JSX expressions, use curly braces to embed dynamic values:

jsx

    const vnode = <div id={dynamicId}>hello, {userName}</div>

`create-vue` and Vue CLI both have options for scaffolding projects with pre-configured JSX support. If you are configuring JSX manually, please refer to the documentation of [`@vue/babel-plugin-jsx`](https://github.com/vuejs/jsx-next) for details.

Although first introduced by React, JSX actually has no defined runtime semantics and can be compiled into various different outputs. If you have worked with JSX before, do note that **Vue JSX transform is different from React's JSX transform**, so you can't use React's JSX transform in Vue applications. Some notable differences from React JSX include:

*   You can use HTML attributes such as `class` and `for` as props - no need to use `className` or `htmlFor`.
*   Passing children to components (i.e. slots) [works differently](#passing-slots).

Vue's type definition also provides type inference for TSX usage. When using TSX, make sure to specify `"jsx": "preserve"` in `tsconfig.json` so that TypeScript leaves the JSX syntax intact for Vue JSX transform to process.

Render Function Recipes [​](#render-function-recipes)
-----------------------------------------------------

Below we will provide some common recipes for implementing template features as their equivalent render functions / JSX.

### `v-if` [​](#v-if)

Template:

template

    <div>
      <div v-if="ok">yes</div>
      <span v-else>no</span>
    </div>

Equivalent render function / JSX:

js

    h('div', [ok.value ? h('div', 'yes') : h('span', 'no')])

jsx

    <div>{ok.value ? <div>yes</div> : <span>no</span>}</div>

js

    h('div', [this.ok ? h('div', 'yes') : h('span', 'no')])

jsx

    <div>{this.ok ? <div>yes</div> : <span>no</span>}</div>

### `v-for` [​](#v-for)

Template:

template

    <ul>
      <li v-for="{ id, text } in items" :key="id">
        {{ text }}
      </li>
    </ul>

Equivalent render function / JSX:

js

    h(
      'ul',
      // assuming `items` is a ref with array value
      items.value.map(({ id, text }) => {
        return h('li', { key: id }, text)
      })
    )

jsx

    <ul>
      {items.value.map(({ id, text }) => {
        return <li key={id}>{text}</li>
      })}
    </ul>

js

    h(
      'ul',
      this.items.map(({ id, text }) => {
        return h('li', { key: id }, text)
      })
    )

jsx

    <ul>
      {this.items.map(({ id, text }) => {
        return <li key={id}>{text}</li>
      })}
    </ul>

### `v-on` [​](#v-on)

Props with names that start with `on` followed by an uppercase letter are treated as event listeners. For example, `onClick` is the equivalent of `@click` in templates.

js

    h(
      'button',
      {
        onClick(event) {
          /* ... */
        }
      },
      'click me'
    )

jsx

    <button
      onClick={(event) => {
        /* ... */
      }}
    >
      click me
    </button>

#### Event Modifiers [​](#event-modifiers)

For the `.passive`, `.capture`, and `.once` event modifiers, they can be concatenated after the event name using camelCase.

For example:

js

    h('input', {
      onClickCapture() {
        /* listener in capture mode */
      },
      onKeyupOnce() {
        /* triggers only once */
      },
      onMouseoverOnceCapture() {
        /* once + capture */
      }
    })

jsx

    <input
      onClickCapture={() => {}}
      onKeyupOnce={() => {}}
      onMouseoverOnceCapture={() => {}}
    />

For other event and key modifiers, the [`withModifiers`](/api/render-function.html#withmodifiers) helper can be used:

js

    import { withModifiers } from 'vue'
    
    h('div', {
      onClick: withModifiers(() => {}, ['self'])
    })

jsx

    <div onClick={withModifiers(() => {}, ['self'])} />

### Components [​](#components)

To create a vnode for a component, the first argument passed to `h()` should be the component definition. This means when using render functions, it is unnecessary to register components - you can just use the imported components directly:

js

    import Foo from './Foo.vue'
    import Bar from './Bar.jsx'
    
    function render() {
      return h('div', [h(Foo), h(Bar)])
    }

jsx

    function render() {
      return (
        <div>
          <Foo />
          <Bar />
        </div>
      )
    }

As we can see, `h` can work with components imported from any file format as long as it's a valid Vue component.

Dynamic components are straightforward with render functions:

js

    import Foo from './Foo.vue'
    import Bar from './Bar.jsx'
    
    function render() {
      return ok.value ? h(Foo) : h(Bar)
    }

jsx

    function render() {
      return ok.value ? <Foo /> : <Bar />
    }

If a component is registered by name and cannot be imported directly (for example, globally registered by a library), it can be programmatically resolved by using the [`resolveComponent()`](/api/render-function.html#resolvecomponent) helper.

### Rendering Slots [​](#rendering-slots)

In render functions, slots can be accessed from the `setup()` context. Each slot on the `slots` object is a **function that returns an array of vnodes**:

js

    export default {
      props: ['message'],
      setup(props, { slots }) {
        return () => [
          // default slot:
          // <div><slot /></div>
          h('div', slots.default()),
    
          // named slot:
          // <div><slot name="footer" :text="message" /></div>
          h(
            'div',
            slots.footer({
              text: props.message
            })
          )
        ]
      }
    }

JSX equivalent:

jsx

    // default
    <div>{slots.default()}</div>
    
    // named
    <div>{slots.footer({ text: props.message })}</div>

In render functions, slots can be accessed from [`this.$slots`](/api/component-instance.html#slots):

js

    export default {
      props: ['message'],
      render() {
        return [
          // <div><slot /></div>
          h('div', this.$slots.default()),
    
          // <div><slot name="footer" :text="message" /></div>
          h(
            'div',
            this.$slots.footer({
              text: this.message
            })
          )
        ]
      }
    }

JSX equivalent:

jsx

    // <div><slot /></div>
    <div>{this.$slots.default()}</div>
    
    // <div><slot name="footer" :text="message" /></div>
    <div>{this.$slots.footer({ text: this.message })}</div>

### Passing Slots [​](#passing-slots)

Passing children to components works a bit differently from passing children to elements. Instead of an array, we need to pass either a slot function, or an object of slot functions. Slot functions can return anything a normal render function can return - which will always be normalized to arrays of vnodes when accessed in the child component.

js

    // single default slot
    h(MyComponent, () => 'hello')
    
    // named slots
    // notice the `null` is required to avoid
    // the slots object being treated as props
    h(MyComponent, null, {
      default: () => 'default slot',
      foo: () => h('div', 'foo'),
      bar: () => [h('span', 'one'), h('span', 'two')]
    })

JSX equivalent:

jsx

    // default
    <MyComponent>{() => 'hello'}</MyComponent>
    
    // named
    <MyComponent>{{
      default: () => 'default slot',
      foo: () => <div>foo</div>,
      bar: () => [<span>one</span>, <span>two</span>]
    }}</MyComponent>

Passing slots as functions allows them to be invoked lazily by the child component. This leads to the slot's dependencies being tracked by the child instead of the parent, which results in more accurate and efficient updates.

### Built-in Components [​](#built-in-components)

[Built-in components](/api/built-in-components.html) such as `<KeepAlive>`, `<Transition>`, `<TransitionGroup>`, `<Teleport>` and `<Suspense>` must be imported for use in render functions:

js

    import { h, KeepAlive, Teleport, Transition, TransitionGroup } from 'vue'
    
    export default {
      setup () {
        return () => h(Transition, { mode: 'out-in' }, /* ... */)
      }
    }

js

    import { h, KeepAlive, Teleport, Transition, TransitionGroup } from 'vue'
    
    export default {
      render () {
        return h(Transition, { mode: 'out-in' }, /* ... */)
      }
    }

### `v-model` [​](#v-model)

The `v-model` directive is expanded to `modelValue` and `onUpdate:modelValue` props during template compilation—we will have to provide these props ourselves:

js

    export default {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      setup(props, { emit }) {
        return () =>
          h(SomeComponent, {
            modelValue: props.modelValue,
            'onUpdate:modelValue': (value) => emit('update:modelValue', value)
          })
      }
    }

js

    export default {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      render() {
        return h(SomeComponent, {
          modelValue: this.modelValue,
          'onUpdate:modelValue': (value) => this.$emit('update:modelValue', value)
        })
      }
    }

### Custom Directives [​](#custom-directives)

Custom directives can be applied to a vnode using [`withDirectives`](/api/render-function.html#withdirectives):

js

    import { h, withDirectives } from 'vue'
    
    // a custom directive
    const pin = {
      mounted() { /* ... */ },
      updated() { /* ... */ }
    }
    
    // <div v-pin:top.animate="200"></div>
    const vnode = withDirectives(h('div'), [
      [pin, 200, 'top', { animate: true }]
    ])

If the directive is registered by name and cannot be imported directly, it can be resolved using the [`resolveDirective`](/api/render-function.html#resolvedirective) helper.

### Template Refs [​](#template-refs)

With the Composition API, template refs are created by passing the `ref()` itself as a prop to the vnode:

js

    import { h, ref } from 'vue'
    
    export default {
      setup() {
        const divEl = ref()
    
        // <div ref="divEl">
        return () => h('div', { ref: divEl })
      }
    }

With the Options API, template refs are created by passing the ref name as a string in the vnode props:

js

    export default {
      render() {
        // <div ref="divEl">
        return h('div', { ref: 'divEl' })
      }
    }

Functional Components [​](#functional-components)
-------------------------------------------------

Functional components are an alternative form of component that don't have any state of their own. They act like pure functions: props in, vnodes out. They are rendered without creating a component instance (i.e. no `this`), and without the usual component lifecycle hooks.

To create a functional component we use a plain function, rather than an options object. The function is effectively the `render` function for the component.

The signature of a functional component is the same as the `setup()` hook:

js

    function MyComponent(props, { slots, emit, attrs }) {
      // ...
    }

As there is no `this` reference for a functional component, Vue will pass in the `props` as the first argument:

js

    function MyComponent(props, context) {
      // ...
    }

The second argument, `context`, contains three properties: `attrs`, `emit`, and `slots`. These are equivalent to the instance properties [`$attrs`](/api/component-instance.html#attrs), [`$emit`](/api/component-instance.html#emit), and [`$slots`](/api/component-instance.html#slots) respectively.

Most of the usual configuration options for components are not available for functional components. However, it is possible to define [`props`](/api/options-state.html#props) and [`emits`](/api/options-state.html#emits) by adding them as properties:

js

    MyComponent.props = ['value']
    MyComponent.emits = ['click']

If the `props` option is not specified, then the `props` object passed to the function will contain all attributes, the same as `attrs`. The prop names will not be normalized to camelCase unless the `props` option is specified.

For functional components with explicit `props`, [attribute fallthrough](/guide/components/attrs.html) works much the same as with normal components. However, for functional components that don't explicitly specify their `props`, only the `class`, `style`, and `onXxx` event listeners will be inherited from the `attrs` by default. In either case, `inheritAttrs` can be set to `false` to disable attribute inheritance:

js

    MyComponent.inheritAttrs = false

Functional components can be registered and consumed just like normal components. If you pass a function as the first argument to `h()`, it will be treated as a functional component.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/render-function.md)
Vue and Web Components [​](#vue-and-web-components)
===================================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is an umbrella term for a set of web native APIs that allows developers to create reusable custom elements.

We consider Vue and Web Components to be primarily complementary technologies. Vue has excellent support for both consuming and creating custom elements. Whether you are integrating custom elements into an existing Vue application, or using Vue to build and distribute custom elements, you are in good company.

Using Custom Elements in Vue [​](#using-custom-elements-in-vue)
---------------------------------------------------------------

Vue [scores a perfect 100% in the Custom Elements Everywhere tests](https://custom-elements-everywhere.com/libraries/vue/results/results.html). Consuming custom elements inside a Vue application largely works the same as using native HTML elements, with a few things to keep in mind:

### Skipping Component Resolution [​](#skipping-component-resolution)

By default, Vue will attempt to resolve a non-native HTML tag as a registered Vue component before falling back to rendering it as a custom element. This will cause Vue to emit a "failed to resolve component" warning during development. To let Vue know that certain elements should be treated as custom elements and skip component resolution, we can specify the [`compilerOptions.isCustomElement` option](/api/application.html#app-config-compileroptions).

If you are using Vue with a build setup, the option should be passed via build configs since it is a compile-time option.

#### Example In-Browser Config [​](#example-in-browser-config)

js

    // Only works if using in-browser compilation.
    // If using build tools, see config examples below.
    app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-')

#### Example Vite Config [​](#example-vite-config)

js

    // vite.config.js
    import vue from '@vitejs/plugin-vue'
    
    export default {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              // treat all tags with a dash as custom elements
              isCustomElement: (tag) => tag.includes('-')
            }
          }
        })
      ]
    }

#### Example Vue CLI Config [​](#example-vue-cli-config)

js

    // vue.config.js
    module.exports = {
      chainWebpack: config => {
        config.module
          .rule('vue')
          .use('vue-loader')
          .tap(options => ({
            ...options,
            compilerOptions: {
              // treat any tag that starts with ion- as custom elements
              isCustomElement: tag => tag.startsWith('ion-')
            }
          }))
      }
    }

### Passing DOM Properties [​](#passing-dom-properties)

Since DOM attributes can only be strings, we need to pass complex data to custom elements as DOM properties. When setting props on a custom element, Vue 3 automatically checks DOM-property presence using the `in` operator and will prefer setting the value as a DOM property if the key is present. This means that, in most cases, you won't need to think about this if the custom element follows the [recommended best practices](https://web.dev/custom-elements-best-practices/).

However, there could be rare cases where the data must be passed as a DOM property, but the custom element does not properly define/reflect the property (causing the `in` check to fail). In this case, you can force a `v-bind` binding to be set as a DOM property using the `.prop` modifier:

template

    <my-element :user.prop="{ name: 'jack' }"></my-element>
    
    <!-- shorthand equivalent -->
    <my-element .user="{ name: 'jack' }"></my-element>

Building Custom Elements with Vue [​](#building-custom-elements-with-vue)
-------------------------------------------------------------------------

The primary benefit of custom elements is that they can be used with any framework, or even without a framework. This makes them ideal for distributing components where the end consumer may not be using the same frontend stack, or when you want to insulate the end application from the implementation details of the components it uses.

### defineCustomElement [​](#definecustomelement)

Vue supports creating custom elements using exactly the same Vue component APIs via the [`defineCustomElement`](/api/general.html#definecustomelement) method. The method accepts the same argument as [`defineComponent`](/api/general.html#definecomponent), but instead returns a custom element constructor that extends `HTMLElement`:

template

    <my-vue-element></my-vue-element>

js

    import { defineCustomElement } from 'vue'
    
    const MyVueElement = defineCustomElement({
      // normal Vue component options here
      props: {},
      emits: {},
      template: `...`,
    
      // defineCustomElement only: CSS to be injected into shadow root
      styles: [`/* inlined css */`]
    })
    
    // Register the custom element.
    // After registration, all `<my-vue-element>` tags
    // on the page will be upgraded.
    customElements.define('my-vue-element', MyVueElement)
    
    // You can also programmatically instantiate the element:
    // (can only be done after registration)
    document.body.appendChild(
      new MyVueElement({
        // initial props (optional)
      })
    )

#### Lifecycle [​](#lifecycle)

*   A Vue custom element will mount an internal Vue component instance inside its shadow root when the element's [`connectedCallback`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks) is called for the first time.
    
*   When the element's `disconnectedCallback` is invoked, Vue will check whether the element is detached from the document after a microtask tick.
    
    *   If the element is still in the document, it's a move and the component instance will be preserved;
        
    *   If the element is detached from the document, it's a removal and the component instance will be unmounted.
        

#### Props [​](#props)

*   All props declared using the `props` option will be defined on the custom element as properties. Vue will automatically handle the reflection between attributes / properties where appropriate.
    
    *   Attributes are always reflected to corresponding properties.
        
    *   Properties with primitive values (`string`, `boolean` or `number`) are reflected as attributes.
        
*   Vue also automatically casts props declared with `Boolean` or `Number` types into the desired type when they are set as attributes (which are always strings). For example, given the following props declaration:
    
    js
    
        props: {
          selected: Boolean,
          index: Number
        }
    
    And the custom element usage:
    
    template
    
        <my-element selected index="1"></my-element>
    
    In the component, `selected` will be cast to `true` (boolean) and `index` will be cast to `1` (number).
    

#### Events [​](#events)

Events emitted via `this.$emit` or setup `emit` are dispatched as native [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#adding_custom_data_%E2%80%93_customevent) on the custom element. Additional event arguments (payload) will be exposed as an array on the CustomEvent object as its `detail` property.

#### Slots [​](#slots)

Inside the component, slots can be rendered using the `<slot/>` element as usual. However, when consuming the resulting element, it only accepts [native slots syntax](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots):

*   [Scoped slots](/guide/components/slots.html#scoped-slots) are not supported.
    
*   When passing named slots, use the `slot` attribute instead of the `v-slot` directive:
    
    template
    
        <my-element>
          <div slot="named">hello</div>
        </my-element>
    

#### Provide / Inject [​](#provide-inject)

The [Provide / Inject API](/guide/components/provide-inject.html#provide-inject) and its [Composition API equivalent](/api/composition-api-dependency-injection.html#provide) also work between Vue-defined custom elements. However, note that this works **only between custom elements**. i.e. a Vue-defined custom element won't be able to inject properties provided by a non-custom-element Vue component.

### SFC as Custom Element [​](#sfc-as-custom-element)

`defineCustomElement` also works with Vue Single-File Components (SFCs). However, with the default tooling setup, the `<style>` inside the SFCs will still be extracted and merged into a single CSS file during production build. When using an SFC as a custom element, it is often desirable to inject the `<style>` tags into the custom element's shadow root instead.

The official SFC toolings support importing SFCs in "custom element mode" (requires `@vitejs/plugin-vue@^1.4.0` or `vue-loader@^16.5.0`). An SFC loaded in custom element mode inlines its `<style>` tags as strings of CSS and exposes them under the component's `styles` option. This will be picked up by `defineCustomElement` and injected into the element's shadow root when instantiated.

To opt-in to this mode, simply end your component file name with `.ce.vue`:

js

    import { defineCustomElement } from 'vue'
    import Example from './Example.ce.vue'
    
    console.log(Example.styles) // ["/* inlined css */"]
    
    // convert into custom element constructor
    const ExampleElement = defineCustomElement(Example)
    
    // register
    customElements.define('my-example', ExampleElement)

If you wish to customize what files should be imported in custom element mode (for example, treating _all_ SFCs as custom elements), you can pass the `customElement` option to the respective build plugins:

*   [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#using-vue-sfcs-as-custom-elements)
*   [vue-loader](https://github.com/vuejs/vue-loader/tree/next#v16-only-options)

### Tips for a Vue Custom Elements Library [​](#tips-for-a-vue-custom-elements-library)

When building custom elements with Vue, the elements will rely on Vue's runtime. There is a ~16kb baseline size cost depending on how many features are being used. This means it is not ideal to use Vue if you are shipping a single custom element - you may want to use vanilla JavaScript, [petite-vue](https://github.com/vuejs/petite-vue), or frameworks that specialize in small runtime size. However, the base size is more than justifiable if you are shipping a collection of custom elements with complex logic, as Vue will allow each component to be authored with much less code. The more elements you are shipping together, the better the trade-off.

If the custom elements will be used in an application that is also using Vue, you can choose to externalize Vue from the built bundle so that the elements will be using the same copy of Vue from the host application.

It is recommended to export the individual element constructors to give your users the flexibility to import them on-demand and register them with desired tag names. You can also export a convenience function to automatically register all elements. Here's an example entry point of a Vue custom element library:

js

    import { defineCustomElement } from 'vue'
    import Foo from './MyFoo.ce.vue'
    import Bar from './MyBar.ce.vue'
    
    const MyFoo = defineCustomElement(Foo)
    const MyBar = defineCustomElement(Bar)
    
    // export individual elements
    export { MyFoo, MyBar }
    
    export function register() {
      customElements.define('my-foo', MyFoo)
      customElements.define('my-bar', MyBar)
    }

If you have many components, you can also leverage build tool features such as Vite's [glob import](https://vitejs.dev/guide/features.html#glob-import) or webpack's [`require.context`](https://webpack.js.org/guides/dependency-management/#requirecontext) to load all components from a directory.

Web Components vs. Vue Components [​](#web-components-vs-vue-components)
------------------------------------------------------------------------

Some developers believe that framework-proprietary component models should be avoided, and that exclusively using Custom Elements makes an application "future-proof". Here we will try to explain why we believe that this is an overly simplistic take on the problem.

There is indeed a certain level of feature overlap between Custom Elements and Vue Components: they both allow us to define reusable components with data passing, event emitting, and lifecycle management. However, Web Components APIs are relatively low-level and bare-bones. To build an actual application, we need quite a few additional capabilities which the platform does not cover:

*   A declarative and efficient templating system;
    
*   A reactive state management system that facilitates cross-component logic extraction and reuse;
    
*   A performant way to render the components on the server and hydrate them on the client (SSR), which is important for SEO and [Web Vitals metrics such as LCP](https://web.dev/vitals/). Native custom elements SSR typically involves simulating the DOM in Node.js and then serializing the mutated DOM, while Vue SSR compiles into string concatenation whenever possible, which is much more efficient.
    

Vue's component model is designed with these needs in mind as a coherent system.

With a competent engineering team, you could probably build the equivalent on top of native Custom Elements - but this also means you are taking on the long-term maintenance burden of an in-house framework, while losing out on the ecosystem and community benefits of a mature framework like Vue.

There are also frameworks built using Custom Elements as the basis of their component model, but they all inevitably have to introduce their proprietary solutions to the problems listed above. Using these frameworks entails buying into their technical decisions on how to solve these problems - which, despite what may be advertised, doesn't automatically insulate you from potential future churns.

There are also some areas where we find custom elements to be limiting:

*   Eager slot evaluation hinders component composition. Vue's [scoped slots](/guide/components/slots.html#scoped-slots) are a powerful mechanism for component composition, which can't be supported by custom elements due to native slots' eager nature. Eager slots also mean the receiving component cannot control when or whether to render a piece of slot content.
    
*   Shipping custom elements with shadow DOM scoped CSS today requires embedding the CSS inside JavaScript so that they can be injected into shadow roots at runtime. They also result in duplicated styles in markup in SSR scenarios. There are [platform features](https://github.com/whatwg/html/pull/4898/) being worked on in this area - but as of now they are not yet universally supported, and there are still production performance / SSR concerns to be addressed. In the meanwhile, Vue SFCs provide [CSS scoping mechanisms](/api/sfc-css-features.html) that support extracting the styles into plain CSS files.
    

Vue will always stay up to date with the latest standards in the web platform, and we will happily leverage whatever the platform provides if it makes our job easier. However, our goal is to provide solutions that work well and work today. That means we have to incorporate new platform features with a critical mindset - and that involves filling the gaps where the standards fall short while that is still the case.

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/web-components.md)
Animation Techniques [​](#animation-techniques)
===============================================

Ad[Build and deploy your own ChatGPT bot with JavaScript in 5 minutes](https://aircode.io)

Vue provides the [`<Transition>`](/guide/built-ins/transition.html) and [`<TransitionGroup>`](/guide/built-ins/transition-group.html) components for handling enter / leave and list transitions. However, there are many other ways of using animations on the web, even in a Vue application. Here we will discuss a few additional techniques.

Class-based Animations [​](#class-based-animations)
---------------------------------------------------

For elements that are not entering / leaving the DOM, we can trigger animations by dynamically adding a CSS class:

js

    const disabled = ref(false)
    
    function warnDisabled() {
      disabled.value = true
      setTimeout(() => {
        disabled.value = false
      }, 1500)
    }

js

    export default {
      data() {
        return {
          disabled: false
        }
      },
      methods: {
        warnDisabled() {
          this.disabled = true
          setTimeout(() => {
            this.disabled = false
          }, 1500)
        }
      }
    }

template

    <div :class="{ shake: disabled }">
      <button @click="warnDisabled">Click me</button>
      <span v-if="disabled">This feature is disabled!</span>
    </div>

css

    .shake {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
    }
    
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
    
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
    
      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
    
      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }

Click me

State-driven Animations [​](#state-driven-animations)
-----------------------------------------------------

Some transition effects can be applied by interpolating values, for instance by binding a style to an element while an interaction occurs. Take this example for instance:

js

    const x = ref(0)
    
    function onMousemove(e) {
      x.value = e.clientX
    }

js

    export default {
      data() {
        return {
          x: 0
        }
      },
      methods: {
        onMousemove(e) {
          this.x = e.clientX
        }
      }
    }

template

    <div
      @mousemove="onMousemove"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <p>Move your mouse across this div...</p>
      <p>x: {{ x }}</p>
    </div>

css

    .movearea {
      transition: 0.3s background-color ease;
    }

Move your mouse across this div...

x: 0

In addition to color, you can also use style bindings to animate transform, width, or height. You can even animate SVG paths using spring physics - after all, they are all attribute data bindings:

Drag Me

[Source code](https://play.vuejs.org/#eNqlVmtv2zYU/SsXboE6mC3bSdwVmpM9MAz9sAIdsA8b5gGhRUrWKpEESTl2DP/3HZKSbbkuUKBA4Ij3ce65D15pP/hZ62TTiEE6WNjMlNqRFa7Rj0tZ1loZR3sygmWu3IgRZarWjROcDpQbVdMbeL45WvKdZHWZ2VbXHZP/LGyWMlPSOloLxoV5L8pi7eiBZrdTr6uEo9L+alhRlLKAPGeVFZ2PdQzwD6CyTWk6oh1+6dBpM2g6isNgch4jWPeCHm4u2Xxkbg2QLrvh8IYeHmm/lARg1xhJTx+moyn9fnfr//nf1/tzzMMfr/dZsj1AnCW7Azhe6J+W8jwsfp2Q7qOypSuV/ELsaMt3Xp3saNxL48yA1Vp4DFg+ojA/0i2ldH/GPqAROcOkzZWpU3oKzxVzYui5wnPS4hz09gZsydc3Us4bidqCZWiD79FQ3ERMgagiydZMFoL/qZpsLSziX4r+mf4LRmgn9ZvsTBOEATjZBjDNCvHXSeiTj8K/wadHR8lv5ZLT8MSnhUFVA5PeyHxHw5YZutCyRW2C9alJLc+jya5n8VmXZsm865MP6hEugp61pevIRUOUDjVouX8hoWsXy8uPF5ThBvtRiGKQGXVPX3OdzozdTov0hGu1QdAR8cYwTzil76e4vrkpA/+Ubt+Fe+ydQzljhotJ3ETYQTg4UWs/qDgRLXi5aQtWMWsflgPuU2OrSiwHUfFTrRoruHqW0B5H9qh1fgyC+Ko6ONdqI6CNA9b3vK4KXo0OiLElfS8h+TVdcKsEC5B9bcgW+dpNcUx1BR09l9ytccASwmkdeoDj/C2OrRPctN9oqQ962nAwz8uqguzV3W/z2S9zOCwm3rILNkG07hmFPgaOGDD3/OiDWEygvWbY7jVESq3bVT6ti1UHkPeiqtQJontaTM46jWMAIJspLTgkybHRcaxXLPtUGNVIPs5UpUxKr/I8/yGo1HZs1wwj4N8T93pLs7f4McWKYdv5F4j/S2bzm2AeKpr6ra63QRCLium87yRouskrj7cuORcyCGtmcKfgCCtijVNBqttEUyxfJIN3UhA7sXVjVpUFFBnqIUwQ56jO2JYvuDUzED3JnlsOd9NpEGJQzNgPSwahVDKirpRBY8aG8bKxKb0LCLhByaqIVTqxYSurKrxhIhulUZrwWIkciPH5ZVxKLvw7toWJjccFT9o2XqL2cjy6z2IlGOe4/rFAp8aUL0HYUoeoF6t78/U72nUEXwvnRYqFuxX153VbqYpHYEy1nySM0GA0iF8q45ppfJUoia+eEG/ZKuxykHZbE6vl9AHj5bgHzmmbTiYZl4n9tNMYwYSLzaRn2O2xweF/7cIdbA==)

Animating with Watchers [​](#animating-with-watchers)
-----------------------------------------------------

With some creativity, we can use watchers to animate anything based on some numerical state. For example, we can animate the number itself:

js

    import { ref, reactive, watch } from 'vue'
    import gsap from 'gsap'
    
    const number = ref(0)
    const tweened = reactive({
      number: 0
    })
    
    watch(number, (n) => {
      gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
    })

template

    Type a number: <input v-model.number="number" />
    <p>{{ tweened.number.toFixed(0) }}</p>

js

    import gsap from 'gsap'
    
    export default {
      data() {
        return {
          number: 0,
          tweened: 0
        }
      },
      watch: {
        number(n) {
          gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
        }
      }
    }

template

    Type a number: <input v-model.number="number" />
    <p>{{ tweened.toFixed(0) }}</p>

Type a number: 

0

[Try it in the Playground](https://play.vuejs.org/#eNpNUstygzAM/BWNLyEzBDKd6YWSdHrpsacefSGgJG7xY7BImhL+vTKv9ILllXYlr+jEm3PJpUWRidyXjXIEHql1e2mUdrYh6KDBY8yfoiR1wRiuBZVn6OHYWA0r5q6W2pMv3ISHkBPSlNZ4AtPqAzawC2LRdj3DdEU0WA34qB910sBUnsFWmp6LpRmaRo9UHMLIrGG3h4EBQ/OEbDRpxjx51TYFKWtYKHmOF9WP4Qzs+x22EDoA9NLwmaejC/x+vhBqVxeEfAPIK3WBsi6830lRobZSDDjA580hFIt8roxrCS4bbSuskxFmzhhIAenEy92id1CnzZzfd91szETmZ72rH6zYOej7PA3rYXrKE3GUp//m5KunWx3C5CE6enS0hjZXVKczZXCwdfWyoF79YgZPqBliJ9iGSUTEYlzuRrO9X94a/lUGNTklvBTZvAMpwhYCIMWZyPksTVvjvk9JaXUacq9sSlujFJPnvej/AElH3FQ=)

[Try it in the Playground](https://play.vuejs.org/#eNpNUctugzAQ/JWVLyESj6hSL5Sm6qXHnnr0xYENuAXbwus8Svj3GlxIJEvendHMvgb2bkx6cshyVtiyl4b2XMnO6J6gtsLAsdcdbKZwwxVXeJmpCo/CtQQDVwCVIBFtQwzQI7leLRmAct0B+xx28YLQGVFh5aGAjNM3zvRZUNnkizhII7V6w9xTSjqiRtoYBqhcL0hq5c3S5/hu/blKbzfYwbh9LMWVf0W2zusTws60gnDK6OtqEMTaeSGVcQSnpNMVtmmAXzkLAWeQzarCQNkKaz1zkHWysPthWNryjX/IC1bRbgvjWGTG64rssbQqLF3bKUzvHmH6o1aUnFHWDeVw0G31sqJW/mIOT9h5KEw2m7CYhUsmnV/at9XKX3n24v+E5WxdNmfTbieAs4bI2DzLnDI/dVrqLpu4Nz+/a5GzZYls/AM3dcFx)

[Edit this page on GitHub](https://github.com/vuejs/docs/edit/main/src/guide/extras/animation.md)
