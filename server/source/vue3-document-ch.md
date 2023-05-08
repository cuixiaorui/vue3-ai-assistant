简介 [​](#introduction)
=====================

你正在阅读的是 Vue 3 的文档！

*   Vue 2 将于 2023 年 12 月 31 日停止维护。详见 [Vue 2 延长 LTS](https://v2.vuejs.org/lts/)。
*   Vue 2 中文文档已迁移至 [v2.cn.vuejs.org](https://v2.cn.vuejs.org/)。
*   想从 Vue 2 升级？请参考[迁移指南](https://v3-migration.vuejs.org/)。

[

![Vue Mastery banner](https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png)

在 VueMastery 上观看视频课程学习 Vue

![Vue Mastery Logo](https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png)

](https://www.vuemastery.com/courses/)

什么是 Vue？ [​](#what-is-vue)
--------------------------

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

下面是一个最基本的示例：

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

**结果展示**

Count is: 0

上面的示例展示了 Vue 的两个核心功能：

*   **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
    
*   **响应性**：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。
    

你可能已经有了些疑问——先别急，在后续的文档中我们会详细介绍每一个细节。现在，请继续看下去，以确保你对 Vue 作为一个框架到底提供了什么有一个宏观的了解。

预备知识

文档接下来的内容会假设你对 HTML、CSS 和 JavaScript 已经基本熟悉。如果你对前端开发完全陌生，最好不要直接从一个框架开始进行入门学习——最好是掌握了基础知识再回到这里。你可以通过这篇 [JavaScript 概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)来检验你的 JavaScript 知识水平。如果之前有其他框架的经验会很有帮助，但也不是必须的。

渐进式框架 [​](#the-progressive-framework)
-------------------------------------

Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

*   无需构建步骤，渐进式增强静态的 HTML
*   在任何页面中作为 Web Components 嵌入
*   单页应用 (SPA)
*   全栈 / 服务端渲染 (SSR)
*   Jamstack / 静态站点生成 (SSG)
*   开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

如果你是初学者，可能会觉得这些概念有些复杂。别担心！理解教程和指南的内容只需要具备基础的 HTML 和 JavaScript 知识。即使你不是这些方面的专家，也能够跟得上。

如果你是有经验的开发者，希望了解如何以最合适的方式在项目中引入 Vue，或者是对上述的这些概念感到好奇，我们在[使用 Vue 的多种方式](/guide/extras/ways-of-using-vue.html)中讨论了有关它们的更多细节。

无论再怎么灵活，Vue 的核心知识在所有这些用例中都是通用的。即使你现在只是一个初学者，随着你的不断成长，到未来有能力实现更复杂的项目时，这一路上获得的知识依然会适用。如果你已经是一个老手，你可以根据实际场景来选择使用 Vue 的最佳方式，在各种场景下都可以保持同样的开发效率。这就是为什么我们将 Vue 称为“渐进式框架”：它是一个可以与你共同成长、适应你不同需求的框架。

单文件组件 [​](#single-file-components)
----------------------------------

在大多数启用了构建工具的 Vue 项目中，我们可以使用一种类似 HTML 格式的文件来书写 Vue 组件，它被称为**单文件组件** (也被称为 `*.vue` 文件，英文 Single-File Components，缩写为 **SFC**)。顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。下面我们将用单文件组件的格式重写上面的计数器示例：

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

单文件组件是 Vue 的标志性功能。如果你的用例需要进行构建，我们推荐用它来编写 Vue 组件。你可以在后续相关章节里了解更多关于[单文件组件的用法及用途](/guide/scaling-up/sfc.html)。但你暂时只需要知道 Vue 会帮忙处理所有这些构建工具的配置就好。

API 风格 [​](#api-styles)
-----------------------

Vue 的组件可以按两种不同的风格书写：**选项式 API** 和**组合式 API**。

### 选项式 API (Options API) [​](#options-api)

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

vue

    <script>
    export default {
      // data() 返回的属性将会成为响应式的状态
      // 并且暴露在 `this` 上
      data() {
        return {
          count: 0
        }
      },
    
      // methods 是一些用来更改状态与触发更新的函数
      // 它们可以在模板中作为事件监听器绑定
      methods: {
        increment() {
          this.count++
        }
      },
    
      // 生命周期钩子会在组件生命周期的各个不同阶段被调用
      // 例如这个函数就会在组件挂载完成后被调用
      mounted() {
        console.log(`The initial count is ${this.count}.`)
      }
    }
    </script>
    
    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>

[在演练场中尝试一下](https://play.vuejs.org/#eNptkMFqxCAQhl9lkB522ZL0HNKlpa/Qo4e1ZpLIGhUdl5bgu9es2eSyIMio833zO7NP56pbRNawNkivHJ25wV9nPUGHvYiaYOYGoK7Bo5CkbgiBBOFy2AkSh2N5APmeojePCkDaaKiBt1KnZUuv3Ky0PppMsyYAjYJgigu0oEGYDsirYUAP0WULhqVrQhptF5qHQhnpcUJD+wyQaSpUd/Xp9NysVY/yT2qE0dprIS/vsds5Mg9mNVbaDofL94jZpUgJXUKBCvAy76ZUXY53CTd5tfX2k7kgnJzOCXIF0P5EImvgQ2olr++cbRE4O3+t6JxvXj0ptXVpye1tvbFY+ge/NJZt)

### 组合式 API (Composition API) [​](#composition-api)

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [`<script setup>`](/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

下面是使用了组合式 API 与 `<script setup>` 改造后和上面的模板完全一样的组件：

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // 响应式状态
    const count = ref(0)
    
    // 用来修改状态、触发更新的函数
    function increment() {
      count.value++
    }
    
    // 生命周期钩子
    onMounted(() => {
      console.log(`The initial count is ${count.value}.`)
    })
    </script>
    
    <template>
      <button @click="increment">Count is: {{ count }}</button>
    </template>

[在演练场中尝试一下](https://play.vuejs.org/#eNpNkMFqwzAQRH9lMYU4pNg9Bye09NxbjzrEVda2iLwS0spQjP69a+yYHnRYad7MaOfiw/tqSliciybqYDxDRE7+qsiM3gWGGQJ2r+DoyyVivEOGLrgRDkIdFCmqa1G0ms2EELllVKQdRQa9AHBZ+PLtuEm7RCKVd+ChZRjTQqwctHQHDqbvMUDyd7mKip4AGNIBRyQujzArgtW/mlqb8HRSlLcEazrUv9oiDM49xGGvXgp5uT5his5iZV1f3r4HFHvDprVbaxPhZf4XkKub/CDLaep1T7IhGRhHb6WoTADNT2KWpu/aGv24qGKvrIrr5+Z7hnneQnJu6hURvKl3ryL/ARrVkuI=)

### 该选哪一个？ [​](#which-to-choose)

两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

选项式 API 以“组件实例”的概念为中心 (即上述例子中的 `this`)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。

组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。

在[组合式 API FAQ](/guide/extras/composition-api-faq.html) 章节中，你可以了解更多关于这两种 API 风格的对比以及组合式 API 所带来的潜在收益。

如果你是使用 Vue 的新手，这里是我们的大致建议：

*   在学习的过程中，推荐采用更易于自己理解的风格。再强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉了一种风格以后，你也能够很快地理解另一种风格。
    
*   在生产项目中：
    
    *   当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用 Vue，例如渐进增强的应用场景，推荐采用选项式 API。
        
    *   当你打算用 Vue 构建完整的单页应用，推荐采用组合式 API + 单文件组件。
        

在学习阶段，你不必只固守一种风格。在接下来的文档中我们会为你提供一系列两种风格的代码供你参考，你可以随时通过左上角的 **API 风格偏好**来做切换。

还有其他问题？ [​](#still-got-questions)
---------------------------------

请查看我们的 [FAQ](/about/faq.html)。

选择你的学习路径 [​](#pick-your-learning-path)
--------------------------------------

不同的开发者有不同的学习方式。尽管在可能的情况下，我们推荐你通读所有内容，但你还是可以自由地选择一种自己喜欢的学习路径！

[

尝试互动教程

适合喜欢边动手边学的读者。

](/tutorial/)[

继续阅读该指南

该指南会带你深入了解框架所有方面的细节。

](/guide/quick-start.html)[

查看示例

浏览核心功能和常见用户界面的示例。

](/examples/)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/introduction.md)
快速上手 [​](#quick-start)
======================

线上尝试 Vue [​](#try-vue-online)
-----------------------------

*   想要快速体验 Vue，你可以直接试试我们的[演练场](https://play.vuejs.org/#eNo9jcEKwjAMhl/lt5fpQYfXUQfefAMvvRQbddC1pUuHUPrudg4HIcmXjyRZXEM4zYlEJ+T0iEPgXjn6BB8Zhp46WUZWDjCa9f6w9kAkTtH9CRinV4fmRtZ63H20Ztesqiylphqy3R5UYBqD1UyVAPk+9zkvV1CKbCv9poMLiTEfR2/IXpSoXomqZLtti/IFwVtA9A==)。
    
*   如果你更喜欢不用任何构建的原始 HTML，可以使用 [JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/) 入门。
    
*   如果你已经比较熟悉 Node.js 和构建工具等概念，还可以直接在浏览器中打开 [StackBlitz](https://vite.new/vue) 来尝试完整的构建设置。
    

创建一个 Vue 应用 [​](#creating-a-vue-application)
--------------------------------------------

前提条件

*   熟悉命令行
*   已安装 16.0 或更高版本的 [Node.js](https://nodejs.org/)

在本节中，我们将介绍如何在本地搭建 Vue [单页应用](/guide/extras/ways-of-using-vue.html#single-page-application-spa)。创建的项目将使用基于 [Vite](https://vitejs.dev) 的构建设置，并允许我们使用 Vue 的[单文件组件](/guide/scaling-up/sfc.html) (SFC)。

确保你安装了最新版本的 [Node.js](https://nodejs.org/)，然后在命令行中运行以下命令 (不要带上 `>` 符号)：

    > npm init vue@latest

这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：

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

如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

    > cd <your-project-name>
    > npm install
    > npm run dev
    

你现在应该已经运行起来了你的第一个 Vue 项目！请注意，生成的项目中的示例组件使用的是[组合式 API](/guide/introduction.html#composition-api) 和 `<script setup>`，而非[选项式 API](/guide/introduction.html#options-api)。下面是一些补充提示：

*   推荐的 IDE 配置是 [Visual Studio Code](https://code.visualstudio.com/) + [Volar 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。如果使用其他编辑器，参考 [IDE 支持章节](/guide/scaling-up/tooling.html#ide-support)。
*   更多工具细节，包括与后端框架的整合，我们会在[工具链指南](/guide/scaling-up/tooling.html)进行讨论。
*   要了解构建工具 Vite 更多背后的细节，请查看 [Vite 文档](https://cn.vitejs.dev)。
*   如果你选择使用 TypeScript，请阅读 [TypeScript 使用指南](./typescript/overview.html)。

当你准备将应用发布到生产环境时，请运行：

    > npm run build
    

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读[生产环境部署指南](/guide/best-practices/production-deployment.html)。

[下一步>](#next-steps)

通过 CDN 使用 Vue [​](#using-vue-from-cdn)
--------------------------------------

你可以借助 script 标签直接通过 CDN 来使用 Vue：

html

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

这里我们使用了 [unpkg](https://unpkg.com/)，但你也可以使用任何提供 npm 包服务的 CDN，例如 [jsdelivr](https://www.jsdelivr.com/package/npm/vue) 或 [cdnjs](https://cdnjs.com/libraries/vue)。当然，你也可以下载此文件并自行提供服务。

通过 CDN 使用 Vue 时，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，你将无法使用单文件组件 (SFC) 语法。

### 使用全局构建版本 [​](#using-the-global-build)

上面的例子使用了_全局构建版本_的 Vue，该版本的所有顶层 API 都以属性的形式暴露在了全局的 `Vue` 对象上。这里有一个使用全局构建版本的例子：

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

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/nw1xg8Lj/)

### 使用 ES 模块构建版本 [​](#using-the-es-module-build)

在本文档的其余部分我们使用的主要是 [ES 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)语法。现代浏览器大多都已原生支持 ES 模块。因此我们可以像这样通过 CDN 以及原生 ES 模块使用 Vue：

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

注意我们使用了 `<script type="module">`，且导入的 CDN URL 指向的是 Vue 的 **ES 模块构建版本**。

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/vo23c470/)

### 启用 Import maps [​](#enabling-import-maps)

在上面的示例中，我们使用了完整的 CDN URL 来导入，但在文档的其余部分中，你将看到如下代码：

js

    import { createApp } from 'vue'

我们可以使用[导入映射表 (Import Maps)](https://caniuse.com/import-maps) 来告诉浏览器如何定位到导入的 `vue`：

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

[JSFiddle 中的示例](https://jsfiddle.net/yyx990803/2ke1ab0z/)

你也可以在映射表中添加其他的依赖——但请务必确保你使用的是该库的 ES 模块版本。

导入映射表的浏览器支持情况

目前只有基于 Chromium 的浏览器支持导入映射表，所以我们推荐你在学习过程中使用 Chrome 或 Edge。

如果你使用的是 Firefox 浏览器，则该功能默认在 108+ 版本或通过启用 `about:config` 中的 `dom.importMaps.enabled` 选项支持。

如果你更喜欢那些还不支持导入映射表的浏览器，你可以使用 [es-module-shims](https://github.com/guybedford/es-module-shims) 来进行 polyfill。

生产环境中的注意事项

到目前为止示例中使用的都是 Vue 的开发构建版本——如果你打算在生产中通过 CDN 使用 Vue，请务必查看[生产环境部署指南](/guide/best-practices/production-deployment.html#without-build-tools)。

### 拆分模块 [​](#splitting-up-the-modules)

随着对这份指南的逐步深入，我们可能需要将代码分割成单独的 JavaScript 文件，以便更容易管理。例如：

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

如果直接在浏览器中打开了上面的 `index.html`，你会发现它抛出了一个错误，因为 ES 模块不能通过 `file://` 协议工作。为了使其工作，你需要使用本地 HTTP 服务器通过 `http://` 协议提供 `index.html`。

要启动一个本地的 HTTP 服务器，请先安装 [Node.js](https://nodejs.org/zh/)，然后通过命令行在 HTML 文件所在文件夹下运行 `npx serve`。你也可以使用其他任何可以基于正确的 MIME 类型服务静态文件的 HTTP 服务器。

可能你也注意到了，这里导入的组件模板是内联的 JavaScript 字符串。如果你正在使用 VSCode，你可以安装 [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) 扩展，然后在字符串前加上一个前缀注释 `/*html*/` 以高亮语法。

### 无需构建的组合式 API 用法 [​](#using-composition-api-without-a-build-step)

组合式 API 的许多示例将使用 `<script setup>` 语法。如果你想在无需构建的情况下使用组合式 API，请参阅 [`setup()` 选项](/api/composition-api-setup.html)。

下一步 [​](#next-steps)
--------------------

如果你尚未阅读[简介](/guide/introduction.html)，我们强烈推荐你在移步到后续文档之前返回去阅读一下。

[

继续阅读该指南

该指南会带你深入了解框架所有方面的细节。

](/guide/essentials/application.html)[

尝试互动教程

适合喜欢边动手边学的读者。

](/tutorial/)[

查看示例

浏览核心功能和常见用户界面的示例。

](/examples/)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/quick-start.md)
创建一个 Vue 应用 [​](#creating-a-vue-application)
============================================

应用实例 [​](#the-application-instance)
-----------------------------------

每个 Vue 应用都是通过 [`createApp`](/api/application.html#createapp) 函数创建一个新的 **应用实例**：

js

    import { createApp } from 'vue'
    
    const app = createApp({
      /* 根组件选项 */
    })

根组件 [​](#the-root-component)
----------------------------

我们传入 `createApp` 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

js

    import { createApp } from 'vue'
    // 从一个单文件组件中导入根组件
    import App from './App.vue'
    
    const app = createApp(App)

虽然本指南中的许多示例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的。例如，一个待办事项 (Todos) 应用的组件树可能是这样的：

    App (root component)
    ├─ TodoList
    │  └─ TodoItem
    │     ├─ TodoDeleteButton
    │     └─ TodoEditButton
    └─ TodoFooter
       ├─ TodoClearButton
       └─ TodoStatistics

我们会在指南的后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底发生了什么。

挂载应用 [​](#mounting-the-app)
---------------------------

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

html

    <div id="app"></div>

js

    app.mount('#app')

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

### DOM 中的根组件模板 [​](#in-dom-root-component-template)

根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供：

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

当根组件没有设置 `template` 选项时，Vue 将自动使用容器的 `innerHTML` 作为模板。

DOM 内模板通常用于[无构建步骤](/guide/quick-start.html#using-vue-from-cdn)的 Vue 应用程序。它们也可以与服务器端框架一起使用，其中根模板可能是由服务器动态生成的。

应用配置 [​](#app-configurations)
-----------------------------

应用实例会暴露一个 `.config` 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

js

    app.config.errorHandler = (err) => {
      /* 处理错误 */
    }

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

js

    app.component('TodoDeleteButton', TodoDeleteButton)

这使得 `TodoDeleteButton` 在应用的任何地方都是可用的。我们会在指南的后续章节中讨论关于组件和其他资源的注册。你也可以在 [API 参考](/api/application.html)中浏览应用实例 API 的完整列表。

确保在挂载应用实例之前完成所有应用配置！

多个应用实例 [​](#multiple-application-instances)
-------------------------------------------

应用实例并不只限于一个。`createApp` API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。

js

    const app1 = createApp({
      /* ... */
    })
    app1.mount('#container-1')
    
    const app2 = createApp({
      /* ... */
    })
    app2.mount('#container-2')

如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需的元素上去。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/application.md)
模板语法 [​](#template-syntax)
==========================

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持[直接手写渲染函数](/guide/extras/render-function.html)而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

文本插值 [​](#text-interpolation)
-----------------------------

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

template

    <span>Message: {{ msg }}</span>

双大括号标签会被替换为[相应组件实例中](/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state) `msg` 属性的值。同时每次 `msg` 属性更改时它也会同步更新。

原始 HTML [​](#raw-html)
----------------------

双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 [`v-html` 指令](/api/built-in-directives.html#v-html)：

template

    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

Using text interpolation: <span style="color: red">This should be red.</span>

Using v-html directive: This should be red.

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个**指令**。指令由 `v-` 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` 属性保持同步。

`span` 的内容将会被替换为 `rawHtml` 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 `v-html` 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。

安全警告

在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 [XSS 漏洞](https://en.wikipedia.org/wiki/Cross-site_scripting)。请仅在内容安全可信时再使用 `v-html`，并且**永远不要**使用用户提供的 HTML 内容。

Attribute 绑定 [​](#attribute-bindings)
-------------------------------------

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 [`v-bind` 指令](/api/built-in-directives.html#v-bind)：

template

    <div v-bind:id="dynamicId"></div>

`v-bind` 指令指示 Vue 将元素的 `id` attribute 与组件的 `dynamicId` 属性保持一致。如果绑定的值是 `null` 或者 `undefined`，那么该 attribute 将会从渲染的元素上移除。

### 简写 [​](#shorthand)

因为 `v-bind` 非常常用，我们提供了特定的简写语法：

template

    <div :id="dynamicId"></div>

开头为 `:` 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的 DOM 中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。

> 接下来的指引中，我们都将在示例中使用简写语法，因为这是在实际开发中更常见的用法。

### 布尔型 Attribute [​](#boolean-attributes)

[布尔型 attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes#%E5%B8%83%E5%B0%94%E5%80%BC%E5%B1%9E%E6%80%A7) 依据 true / false 值来决定 attribute 是否应该存在于该元素上。[`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) 就是最常见的例子之一。

`v-bind` 在这种场景下的行为略有不同：

template

    <button :disabled="isButtonDisabled">Button</button>

当 `isButtonDisabled` 为[真值](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)或一个空字符串 (即 `<button disabled="">`) 时，元素会包含这个 `disabled` attribute。而当其为其他[假值](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)时 attribute 将被忽略。

### 动态绑定多个值 [​](#dynamically-binding-multiple-attributes)

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：

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

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上：

template

    <div v-bind="objectOfAttrs"></div>

使用 JavaScript 表达式 [​](#using-javascript-expressions)
----------------------------------------------------

至此，我们仅在模板中绑定了一些简单的属性名。但是 Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：

template

    {{ number + 1 }}
    
    {{ ok ? 'YES' : 'NO' }}
    
    {{ message.split('').reverse().join('') }}
    
    <div :id="`list-${id}`"></div>

这些表达式都会被作为 JavaScript ，以当前组件实例为作用域解析执行。

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

*   在文本插值中 (双大括号)
*   在任何 Vue 指令 (以 `v-` 开头的特殊 attribute) attribute 的值中

### 仅支持表达式 [​](#expressions-only)

每个绑定仅支持**单一表达式**，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 `return` 后面。

因此，下面的例子都是**无效**的：

template

    <!-- 这是一个语句，而非表达式 -->
    {{ var a = 1 }}
    
    <!-- 条件控制也不支持，请使用三元表达式 -->
    {{ if (ok) { return message } }}

### 调用函数 [​](#calling-functions)

可以在绑定的表达式中使用一个组件暴露的方法：

template

    <span :title="toTitleDate(date)">
      {{ formatDate(date) }}
    </span>

TIP

绑定在表达式中的方法在组件每次更新时都会被重新调用，因此**不**应该产生任何副作用，比如改变数据或触发异步操作。

### 受限的全局访问 [​](#restricted-globals-access)

模板中的表达式将被沙盒化，仅能够访问到[有限的全局对象列表](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3)。该列表中会暴露常用的内置全局对象，比如 `Math` 和 `Date`。

没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 `window` 上的属性。然而，你也可以自行在 [`app.config.globalProperties`](/api/application.html#app-config-globalproperties) 上显式地添加它们，供所有的 Vue 表达式使用。

指令 Directives [​](#directives)
------------------------------

指令是带有 `v-` 前缀的特殊 attribute。Vue 提供了许多[内置指令](/api/built-in-directives.html)，包括上面我们所介绍的 `v-bind` 和 `v-html`。

指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 `v-for`、`v-on` 和 `v-slot`)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 [`v-if`](/api/built-in-directives.html#v-if) 为例：

template

    <p v-if="seen">Now you see me</p>

这里，`v-if` 指令会基于表达式 `seen` 的值的真假来移除/插入该 `<p>` 元素。

### 参数 Arguments [​](#arguments)

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 `v-bind` 指令来响应式地更新一个 HTML attribute：

template

    <a v-bind:href="url"> ... </a>
    
    <!-- 简写 -->
    <a :href="url"> ... </a>

这里 `href` 就是一个参数，它告诉 `v-bind` 指令将表达式 `url` 的值绑定到元素的 `href` attribute 上。在简写中，参数前的一切 (例如 `v-bind:`) 都会被缩略为一个 `:` 字符。

另一个例子是 `v-on` 指令，它将监听 DOM 事件：

template

    <a v-on:click="doSomething"> ... </a>
    
    <!-- 简写 -->
    <a @click="doSomething"> ... </a>

这里的参数是要监听的事件名称：`click`。`v-on` 有一个相应的缩写，即 `@` 字符。我们之后也会讨论关于事件处理的更多细节。

### 动态参数 [​](#dynamic-arguments)

同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：

template

    <!--
    注意，参数表达式有一些约束，
    参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
    -->
    <a v-bind:[attributeName]="url"> ... </a>
    
    <!-- 简写 -->
    <a :[attributeName]="url"> ... </a>

这里的 `attributeName` 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 `attributeName`，其值为 `"href"`，那么这个绑定就等价于 `v-bind:href`。

相似地，你还可以将一个函数绑定到动态的事件名称上：

template

    <a v-on:[eventName]="doSomething"> ... </a>
    
    <!-- 简写 -->
    <a @[eventName]="doSomething">

在此示例中，当 `eventName` 的值是 `"focus"` 时，`v-on:[eventName]` 就等价于 `v-on:focus`。

#### 动态参数值的限制 [​](#dynamic-argument-value-constraints)

动态参数中表达式的值应当是一个字符串，或者是 `null`。特殊值 `null` 意为显式移除该绑定。其他非字符串的值会触发警告。

#### 动态参数语法的限制 [​](#dynamic-argument-syntax-constraints)

动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。例如下面的示例：

template

    <!-- 这会触发一个编译器警告 -->
    <a :['foo' + bar]="value"> ... </a>

如果你需要传入一个复杂的动态参数，我们推荐使用[计算属性](./computed.html)替换复杂的表达式，也是 Vue 最基础的概念之一，我们很快就会讲到。

当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：

template

    <a :[someAttr]="value"> ... </a>

上面的例子将会在 DOM 内嵌模板中被转换为 `:[someattr]`。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板**不**受此限制。

### 修饰符 Modifiers [​](#modifiers)

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`：

template

    <form @submit.prevent="onSubmit">...</form>

之后在讲到 [`v-on`](./event-handling.html#event-modifiers) 和 [`v-model`](./forms.html#modifiers) 的功能时，你将会看到其他修饰符的例子。

最后，在这里你可以直观地看到完整的指令语法：

![指令语法图](/assets/directive.69c37117.png)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/template-syntax.md)
响应式基础 [​](#reactivity-fundamentals)
===================================

API 参考

本页和后面很多页面中都分别包含了选项式 API 和组合式 API 的示例代码。现在你选择的是 选项式 API组合式 API。你可以使用左侧侧边栏顶部的 “API 风格偏好” 开关在 API 风格之间切换。

声明响应式状态 [​](#declaring-reactive-state)
--------------------------------------

选用选项式 API 时，会用 `data` 选项来声明组件的响应式状态。此选项的值应为返回一个对象的函数。Vue 将在创建新组件实例的时候调用此函数，并将函数返回的对象用响应式系统进行包装。此对象的所有顶层属性都会被代理到组件实例 (即方法和生命周期钩子中的 `this`) 上。

js

    export default {
      data() {
        return {
          count: 1
        }
      },
    
      // `mounted` 是生命周期钩子，之后我们会讲到
      mounted() {
        // `this` 指向当前组件实例
        console.log(this.count) // => 1
    
        // 数据属性也可以被更改
        this.count = 2
      }
    }

[在演练场中尝试一下](https://play.vuejs.org/#eNpFUNFqhDAQ/JXBpzsoHu2j3B2U/oYPpnGtoetGkrW2iP/eRFsPApthd2Zndilex7H8mqioimu0wY16r4W+Rx8ULXVmYsVSC9AaNafz/gcC6RTkHwHWT6IVnne85rI+1ZLr5YJmyG1qG7gIA3Yd2R/LhN77T8y9sz1mwuyYkXazcQI2SiHz/7iP3VlQexeb5KKjEKEe2lPyMIxeSBROohqxVO4E6yV6ppL9xykTy83tOQvd7tnzoZtDwhrBO2GYNFloYWLyxrzPPOi44WWLWUt618txvASUhhRCKSHgbZt2scKy7HfCujGOqWL9BVfOgyI=)

这些实例上的属性仅在实例首次创建时被添加，因此你需要确保它们都出现在 `data` 函数返回的对象上。若所需的值还未准备好，在必要时也可以使用 `null`、`undefined` 或者其他一些值占位。

虽然也可以不在 `data` 上定义，直接向组件实例添加新属性，但这个属性将无法触发响应式更新。

Vue 在组件实例上暴露的内置 API 使用 `$` 作为前缀。它同时也为内部属性保留 `_` 前缀。因此，你应该避免在顶层 `data` 上使用任何以这些字符作前缀的属性。

### 响应式代理 vs. 原始值 [​](#reactive-proxy-vs-original)

在 Vue 3 中，数据是基于 [JavaScript Proxy（代理）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 实现响应式的。使用过 Vue 2 的用户可能需要注意下面这样的边界情况：

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

当你在赋值后再访问 `this.someObject`，此值已经是原来的 `newObject` 的一个响应式代理。**与 Vue 2 不同的是，这里原始的 `newObject` 不会变为响应式：请确保始终通过 `this` 来访问响应式状态。**

我们可以使用 [`reactive()`](/api/reactivity-core.html#reactive) 函数创建一个响应式对象或数组：

js

    import { reactive } from 'vue'
    
    const state = reactive({ count: 0 })

响应式对象其实是 [JavaScript Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，其行为表现与一般对象相似。不同之处在于 Vue 能够跟踪对响应式对象属性的访问与更改操作。如果你对这其中的细节感到好奇，我们在 [深入响应式系统](/guide/extras/reactivity-in-depth.html) 一章中会进行解释，但我们推荐你先读完这里的主要指南。

TypeScript 用户请参阅：[为响应式对象标注类型](/guide/typescript/composition-api.html#typing-reactive)

要在组件模板中使用响应式状态，需要在 `setup()` 函数中定义并返回。

js

    import { reactive } from 'vue'
    
    export default {
      // `setup` 是一个专门用于组合式 API 的特殊钩子函数
      setup() {
        const state = reactive({ count: 0 })
    
        // 暴露 state 到模板
        return {
          state
        }
      }
    }

template

    <div>{{ state.count }}</div>

自然，我们也可以在同一个作用域下定义更新响应式状态的函数，并将他们作为方法与状态一起暴露出去：

js

    import { reactive } from 'vue'
    
    export default {
      setup() {
        const state = reactive({ count: 0 })
    
        function increment() {
          state.count++
        }
    
        // 不要忘记同时暴露 increment 函数
        return {
          state,
          increment
        }
      }
    }

暴露的方法通常会被用作事件监听器：

template

    <button @click="increment">
      {{ state.count }}
    </button>

### `<script setup>` [​](#script-setup)

在 `setup()` 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 `<script setup>` 来大幅度地简化代码。

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpNjkEKgzAURK8yZFNF0K5FS3uPbGyIEKo/If64Cbl7fxWky2HePCarVwjtnqzq1bCZ6AJjs5zCQ5Nbg4+MjGgnw263KJijX3ET/qZJk/G0Cc8TW4wXVmUYn4h73FHqHzcnksYTHJloV0tc1ciacG7bA28aTUXT0J035IAEtmtYBJEEDO/ELJanWZz5jFpdOq0OAMj5X4kiQtl151CYobuMqnwBBoFaVA==)

`<script setup>` 中的顶层的导入和变量声明可在同一组件的模板中直接使用。你可以理解为模板中的表达式和 `<script setup>` 中的代码处在同一个作用域中。

> 在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + `<script setup>` 的语法，因为大多数 Vue 开发者都会这样使用。

声明方法 [​](#declaring-methods)
----------------------------

要为组件添加方法，我们需要用到 `methods` 选项。它应该是一个包含所有方法的对象：

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
        // 在其他方法或是生命周期中也可以调用方法
        this.increment()
      }
    }

Vue 自动为 `methods` 中的方法绑定了永远指向组件实例的 `this`。这确保了方法在作为事件监听器或回调函数时始终保持正确的 `this`。你不应该在定义 `methods` 时使用箭头函数，因为箭头函数没有自己的 `this` 上下文。

js

    export default {
      methods: {
        increment: () => {
          // 反例：无法访问此处的 `this`!
        }
      }
    }

和组件实例上的其他属性一样，方法也可以在模板上被访问。在模板中它们常常被用作事件监听器：

template

    <button @click="increment">{{ count }}</button>

[在演练场中尝试一下](https://play.vuejs.org/#eNplj9EKwyAMRX8l+LSx0e65uLL9hy+dZlTWqtg4BuK/z1baDgZicsPJgUR2d656B2QN45P02lErDH6c9QQKn10YCKIwAKqj7nAsPYBHCt6sCUDaYKiBS8lpLuk8/yNSb9XUrKg20uOIhnYXAPV6qhbF6fRvmOeodn6hfzwLKkx+vN5OyIFwdENHmBMAfwQia+AmBy1fV8E2gWBtjOUASInXBcxLvN4MLH0BCe1i4Q==)

在上面的例子中，`increment` 方法会在 `<button>` 被点击时调用。

### DOM 更新时机 [​](#dom-update-timing)

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 [nextTick()](/api/general.html#nexttick) 这个全局 API：

js

    import { nextTick } from 'vue'
    
    function increment() {
      state.count++
      nextTick(() => {
        // 访问更新后的 DOM
      })
    }

js

    import { nextTick } from 'vue'
    
    export default {
      methods: {
        increment() {
          this.count++
          nextTick(() => {
            // 访问更新后的 DOM
          })
        }
      }
    }

### 深层响应性 [​](#deep-reactivity)

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。

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
          // 以下都会按照期望工作
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
      // 以下都会按照期望工作
      obj.nested.count++
      obj.arr.push('baz')
    }

你也可以直接创建一个[浅层响应式对象](/api/reactivity-advanced.html#shallowreactive)。它们仅在顶层具有响应性，一般仅在某些特殊场景中需要。

### 响应式代理 vs. 原始对象 [​](#reactive-proxy-vs-original-1)

值得注意的是，`reactive()` 返回的是一个原始对象的 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，它和原始对象是不相等的：

js

    const raw = {}
    const proxy = reactive(raw)
    
    // 代理对象和原始对象不是全等的
    console.log(proxy === raw) // false

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 **仅使用你声明对象的代理版本**。

为保证访问代理的一致性，对同一个原始对象调用 `reactive()` 会总是返回同样的代理对象，而对一个已存在的代理对象调用 `reactive()` 会返回其本身：

js

    // 在同一个对象上调用 reactive() 会返回相同的代理
    console.log(reactive(raw) === proxy) // true
    
    // 在一个代理上调用 reactive() 会返回它自己
    console.log(reactive(proxy) === proxy) // true

这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理：

js

    const proxy = reactive({})
    
    const raw = {}
    proxy.nested = raw
    
    console.log(proxy.nested === raw) // false

### `reactive()` 的局限性 [​](#limitations-of-reactive)

`reactive()` API 有两条限制：

1.  仅对对象类型有效（对象、数组和 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E4%BD%BF%E7%94%A8%E9%94%AE%E7%9A%84%E9%9B%86%E5%90%88%E5%AF%B9%E8%B1%A1)），而对 `string`、`number` 和 `boolean` 这样的 [原始类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 无效。
    
2.  因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：
    
    js
    
        let state = reactive({ count: 0 })
        
        // 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
        state = reactive({ count: 1 })
    

同时这也意味着当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，我们会失去响应性：

js

    const state = reactive({ count: 0 })
    
    // n 是一个局部变量，同 state.count
    // 失去响应性连接
    let n = state.count
    // 不影响原始的 state
    n++
    
    // count 也和 state.count 失去了响应性连接
    let { count } = state
    // 不会影响原始的 state
    count++
    
    // 该函数接收一个普通数字，并且
    // 将无法跟踪 state.count 的变化
    callSomeFunction(state.count)

用 `ref()` 定义响应式变量 [​](#reactive-variables-with-ref)
---------------------------------------------------

`reactive()` 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 [`ref()`](/api/reactivity-core.html#ref) 方法来允许我们创建可以使用任何值类型的响应式 **ref**：

js

    import { ref } from 'vue'
    
    const count = ref(0)

`ref()` 将传入参数的值包装为一个带 `.value` 属性的 ref 对象：

js

    const count = ref(0)
    
    console.log(count) // { value: 0 }
    console.log(count.value) // 0
    
    count.value++
    console.log(count.value) // 1

TypeScript 用户请参阅：[为 ref 标注类型](/guide/typescript/composition-api.html#typing-ref)

和响应式对象的属性类似，ref 的 `.value` 属性也是响应式的。同时，当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`。

一个包含对象类型值的 ref 可以响应式地替换整个对象：

js

    const objectRef = ref({ count: 0 })
    
    // 这是响应式的替换
    objectRef.value = { count: 1 }

ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：

js

    const obj = {
      foo: ref(1),
      bar: ref(2)
    }
    
    // 该函数接收一个 ref
    // 需要通过 .value 取值
    // 但它会保持响应性
    callSomeFunction(obj.foo)
    
    // 仍然是响应式的
    const { foo, bar } = obj

简言之，`ref()` 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。这个功能很重要，因为它经常用于将逻辑提取到 [组合函数](/guide/reusability/composables.html) 中。

### ref 在模板中的解包 [​](#ref-unwrapping-in-templates)

当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 `.value`。下面是之前的计数器例子，用 `ref()` 代替：

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
        {{ count }} <!-- 无需 .value -->
      </button>
    </template>

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jUEKgzAQRa8yZKMiaNclSnuP2dgwQqiZhDhxE3L3Riwu//DmvazeIQxHIvVUejfRBoGdJIUZ2brgo0CGSCsUWKN30FS0QUY2nncB4xMLTCfRPrrzviY2Yj2DZRPJEUvbQUaGix2OZUvU98gFWY9XsbbqEHJhW4TqAtCfJFItL7NZ851Q3TpUc87/cCl6vMD6pMfboMoPvd1Nzg==)

请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， `object` 是顶层属性，但 `object.foo` 不是。

所以我们给出以下 object：

js

    const object = { foo: ref(1) }

下面的表达式将**不会**像预期的那样工作：

template

    {{ object.foo + 1 }}

渲染的结果会是一个 `[object Object]1`，因为 `object.foo` 是一个 ref 对象。我们可以通过将 `foo` 改成顶层属性来解决这个问题：

js

    const { foo } = object

template

    {{ foo + 1 }}

现在渲染结果将是 `2`。

需要注意的是，如果一个 ref 是文本插值（即一个 `{{ }}` 符号）计算的最终值，它也将被解包。因此下面的渲染结果将为 `1`：

template

    {{ object.foo }}

这只是文本插值的一个方便功能，相当于 `{{ object.foo.value }}`。

### ref 在响应式对象中的解包 [​](#ref-unwrapping-in-reactive-objects)

当一个 `ref` 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样：

js

    const count = ref(0)
    const state = reactive({
      count
    })
    
    console.log(state.count) // 0
    
    state.count = 1
    console.log(count.value) // 1

如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：

js

    const otherCount = ref(2)
    
    state.count = otherCount
    console.log(state.count) // 2
    // 原始 ref 现在已经和 state.count 失去联系
    console.log(count.value) // 1

只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为[浅层响应式对象](/api/reactivity-advanced.html#shallowreactive)的属性被访问时不会解包。

#### 数组和集合类型的 ref 解包 [​](#ref-unwrapping-in-arrays-and-collections)

跟响应式对象不同，当 ref 作为响应式数组或像 `Map` 这种原生集合类型的元素被访问时，不会进行解包。

js

    const books = reactive([ref('Vue 3 Guide')])
    // 这里需要 .value
    console.log(books[0].value)
    
    const map = reactive(new Map([['count', ref(0)]]))
    // 这里需要 .value
    console.log(map.get('count').value)

### 有状态方法 [​](#stateful-methods)

在某些情况下，我们可能需要动态地创建一个方法函数，比如创建一个预置防抖的事件处理器：

js

    import { debounce } from 'lodash-es'
    
    export default {
      methods: {
        // 使用 Lodash 的防抖函数
        click: debounce(function () {
          // ... 对点击的响应 ...
        }, 500)
      }
    }

不过这种方法对于被重用的组件来说是有问题的，因为这个预置防抖的函数是 **有状态的**：它在运行时维护着一个内部状态。如果多个组件实例都共享这同一个预置防抖的函数，那么它们之间将会互相影响。

要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 `created` 生命周期钩子中创建这个预置防抖的函数：

js

    export default {
      created() {
        // 每个实例都有了自己的预置防抖的处理函数
        this.debouncedClick = _.debounce(this.click, 500)
      },
      unmounted() {
        // 最好是在组件卸载时
        // 清除掉防抖计时器
        this.debouncedClick.cancel()
      },
      methods: {
        click() {
          // ... 对点击的响应 ...
        }
      }
    }

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/reactivity-fundamentals.md)
计算属性 [​](#computed-properties)
==============================

基础示例 [​](#basic-example)
------------------------

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：

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

我们想根据 `author` 是否已有一些书籍来展示不同的信息：

template

    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

这里的模板看起来有些复杂。我们必须认真看好一会儿才能明白它的计算依赖于 `author.books`。更重要的是，如果在模板中需要不止一次这样的计算，我们可不想将这样的代码在模板里重复好多遍。

因此我们推荐使用**计算属性**来描述依赖响应式状态的复杂逻辑。这是重构后的示例：

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
        // 一个计算属性的 getter
        publishedBooksMessage() {
          // `this` 指向当前组件实例
          return this.author.books.length > 0 ? 'Yes' : 'No'
        }
      }
    }

template

    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkN1KxDAQhV/l0JsqaFfUq1IquwiKsF6JINaLbDNui20S8rO4lL676c82eCFCIDOZMzkzXxetlUoOjqI0ykypa2XzQtC3ktqC0ydzjUVXCIAzy87OpxjQZJ0WpwxgzlZSp+EBEKylFPGTrATuJcUXobST8sukeA8vQPzqCNe4xJofmCiJ48HV/FfbLLrxog0zdfmn4tYrXirC9mgs6WMcBB+nsJ+C8erHH0rZKmeJL0sot2tqUxHfDONuyRi2p4BggWCr2iQTgGTcLGlI7G2FHFe4Q/xGJoYn8SznQSbTQviTrRboPrHUqoZZ8hmQqfyRmTDFTC1bqalsFBN5183o/3NG33uvoWUwXYyi/gdTEpwK)

我们在这里定义了一个计算属性 `publishedBooksMessage`。

更改此应用的 `data` 中 `books` 数组的值后，可以看到 `publishedBooksMessage` 也会随之改变。

在模板中使用计算属性的方式和一般的属性并无二致。Vue 会检测到 `this.publishedBooksMessage` 依赖于 `this.author.books`，所以当 `this.author.books` 改变时，任何依赖于 `this.publishedBooksMessage` 的绑定都将同时更新。

也可参考：[为计算属性标记类型](/guide/typescript/options-api.html#typing-computed-properties)

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
    
    // 一个计算属性 ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })
    </script>
    
    <template>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </template>

[在演练场中尝试一下](https://play.vuejs.org/#eNp1kE9Lw0AQxb/KI5dtoTainkoaaREUoZ5EEONhm0ybYLO77J9CCfnuzta0vdjbzr6Zeb95XbIwZroPlMySzJW2MR6OfDB5oZrWaOvRwZIsfbOnCUrdmuCpQo+N1S0ET4pCFarUynnI4GttMT9PjLpCAUq2NIN41bXCkyYxiZ9rrX/cDF/xDYiPQLjDDRbVXqqSHZ5DUw2tg3zP8lK6pvxHe2DtvSasDs6TPTAT8F2ofhzh0hTygm5pc+I1Yb1rXE3VMsKsyDm5JcY/9Y5GY8xzHI+wnIpVw4nTI/10R2rra+S4xSPEJzkBvvNNs310ztK/RDlLLjy1Zic9cQVkJn+R7gIwxJGlMXiWnZEq77orhH3Pq2NH9DjvTfpfSBSbmA==)

我们在这里定义了一个计算属性 `publishedBooksMessage`。`computed()` 方法期望接收一个 getter 函数，返回值为一个**计算属性 ref**。和其他一般的 ref 类似，你可以通过 `publishedBooksMessage.value` 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 `.value`。

Vue 的计算属性会自动追踪响应式依赖。它会检测到 `publishedBooksMessage` 依赖于 `author.books`，所以当 `author.books` 改变时，任何依赖于 `publishedBooksMessage` 的绑定都会同时更新。

也可参考：[为计算属性标注类型](/guide/typescript/composition-api.html#typing-computed)

计算属性缓存 vs 方法 [​](#computed-caching-vs-methods)
----------------------------------------------

你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：

template

    <p>{{ calculateBooksMessage() }}</p>

js

    // 组件中
    methods: {
      calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      }
    }

js

    // 组件中
    function calculateBooksMessage() {
      return author.books.length > 0 ? 'Yes' : 'No'
    }

若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 `author.books` 不改变，无论多少次访问 `publishedBooksMessage` 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

这也解释了为什么下面的计算属性永远不会更新，因为 `Date.now()` 并不是一个响应式依赖：

js

    computed: {
      now() {
        return Date.now()
      }
    }

js

    const now = computed(() => Date.now())

相比之下，方法调用**总是**会在重渲染发生时再次执行函数。

为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性 `list`，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 `list`。没有缓存的话，我们会重复执行非常多次 `list` 的 getter，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。

可写计算属性 [​](#writable-computed)
------------------------------

计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

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
            // 注意：我们这里使用的是解构赋值语法
            [this.firstName, this.lastName] = newValue.split(' ')
          }
        }
      }
    }

现在当你再运行 `this.fullName = 'John Doe'` 时，setter 会被调用而 `this.firstName` 和 `this.lastName` 会随之更新。

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
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
    </script>

现在当你再运行 `fullName.value = 'John Doe'` 时，setter 会被调用而 `firstName` 和 `lastName` 会随之更新。

最佳实践 [​](#best-practices)
-------------------------

### Getter 不应有副作用 [​](#getters-should-be-side-effect-free)

计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，**不要在 getter 中做异步请求或者更改 DOM**！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用[监听器](./watchers.html)根据其他响应式状态的变更来创建副作用。

### 避免直接修改计算属性值 [​](#avoid-mutating-computed-value)

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/computed.md)
Class 与 Style 绑定 [​](#class-and-style-bindings)
===============================================

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

绑定 HTML class [​](#binding-html-classes)
----------------------------------------

### 绑定对象 [​](#binding-to-objects)

我们可以给 `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 class：

template

    <div :class="{ active: isActive }"></div>

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的[真假值](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)。

你可以在对象中写多个字段来操作多个 class。此外，`:class` 指令也可以和一般的 `class` attribute 共存。举例来说，下面这样的状态：

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

配合以下模板：

template

    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>

渲染的结果会是：

template

    <div class="static active"></div>

当 `isActive` 或者 `hasError` 改变时，class 列表会随之更新。举例来说，如果 `hasError` 变为 `true`，class 列表也会变成 `"static active text-danger"`。

绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：

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

这也会渲染出相同的结果。我们也可以绑定一个返回对象的[计算属性](./computed.html)。这是一个常见且很有用的技巧：

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

### 绑定数组 [​](#binding-to-arrays)

我们可以给 `:class` 绑定一个数组来渲染多个 CSS class：

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

渲染的结果是：

template

    <div class="active text-danger"></div>

如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式：

template

    <div :class="[isActive ? activeClass : '', errorClass]"></div>

`errorClass` 会一直存在，但 `activeClass` 只会在 `isActive` 为真时才存在。

然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象：

template

    <div :class="[{ active: isActive }, errorClass]"></div>

### 在组件上使用 [​](#with-components)

> 本节假设你已经有 [Vue 组件](/guide/essentials/component-basics.html)的知识基础。如果没有，你也可以暂时跳过，以后再阅读。

对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上，并与该元素上已有的 class 合并。

举例来说，如果你声明了一个组件名叫 `MyComponent`，模板如下：

template

    <!-- 子组件模板 -->
    <p class="foo bar">Hi!</p>

在使用时添加一些 class：

template

    <!-- 在使用组件时 -->
    <MyComponent class="baz boo" />

渲染出的 HTML 为：

template

    <p class="foo bar baz boo">Hi!</p>

Class 的绑定也是同样的：

template

    <MyComponent :class="{ active: isActive }" />

当 `isActive` 为真时，被渲染的 HTML 会是：

template

    <p class="foo bar active">Hi!</p>

如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 `$attrs` 属性来实现指定：

template

    <!-- MyComponent 模板使用 $attrs 时 -->
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>

template

    <MyComponent class="baz" />

这将被渲染为：

html

    <p class="baz">Hi!</p>
    <span>This is a child component</span>

你可以在[透传 Attribute](/guide/components/attrs.html) 一章中了解更多组件的 attribute 继承的细节。

绑定内联样式 [​](#binding-inline-styles)
----------------------------------

### 绑定对象 [​](#binding-to-objects-1)

`:style` 支持绑定 JavaScript 对象值，对应的是 [HTML 元素的 `style` 属性](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)：

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

尽管推荐使用 camelCase，但 `:style` 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：

template

    <div :style="{ 'font-size': fontSize + 'px' }"></div>

直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁：

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

同样的，如果样式对象需要更复杂的逻辑，也可以使用返回样式对象的计算属性。

### 绑定数组 [​](#binding-to-arrays-1)

我们还可以给 `:style` 绑定一个包含多个样式对象的数组。这些对象会被合并后渲染到同一元素上：

template

    <div :style="[baseStyles, overridingStyles]"></div>

### 自动前缀 [​](#auto-prefixing)

当你在 `:style` 中使用了需要[浏览器特殊前缀](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀，以找到哪一个是被支持的。

### 样式多值 [​](#multiple-values)

你可以对一个样式属性提供多个 (不同前缀的) 值，举例来说：

template

    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>

数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别前缀的浏览器中都会渲染为 `display: flex`。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/class-and-style.md)
条件渲染 [​](#conditional-rendering)
================================

`v-if` [​](#v-if)
-----------------

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

template

    <h1 v-if="awesome">Vue is awesome!</h1>

`v-else` [​](#v-else)
---------------------

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

template

    <button @click="awesome = !awesome">Toggle</button>
    
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

Toggle

Vue is awesome!
===============

[在演练场中尝试一下](https://play.vuejs.org/#eNpFjkEOgjAQRa8ydIMulLA1hegJ3LnqBskAjdA27RQXhHu4M/GEHsEiKLv5mfdf/sBOxux7j+zAuCutNAQOyZtcKNkZbQkGsFjBCJXVHcQBjYUSqtTKERR3dLpDyCZmQ9bjViiezKKgCIGwM21BGBIAv3oireBYtrK8ZYKtgmg5BctJ13WLPJnhr0YQb1Lod7JaS4G8eATpfjMinjTphC8wtg7zcwNKw/v5eC1fnvwnsfEDwaha7w==)

[在演练场中尝试一下](https://play.vuejs.org/#eNpFjj0OwjAMha9iMsEAFWuVVnACNqYsoXV/RJpEqVOQqt6DDYkTcgRSWoplWX7y56fXs6O1u84jixlvM1dbSoXGuzWOIMdCekXQCw2QS5LrzbQLckje6VEJglDyhq1pMAZyHidkGG9hhObRYh0EYWOVJAwKgF88kdFwyFSdXRPBZidIYDWvgqVkylIhjyb4ayOIV3votnXxfwrk2SPU7S/PikfVfsRnGFWL6akCbeD9fLzmK4+WSGz4AA5dYQY=)

一个 `v-else` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则它将不会被识别。

`v-else-if` [​](#v-else-if)
---------------------------

顾名思义，`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用：

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

和 `v-else` 类似，一个使用 `v-else-if` 的元素必须紧跟在一个 `v-if` 或一个 `v-else-if` 元素后面。

`<template>` 上的 `v-if` [​](#v-if-on-template)
---------------------------------------------

因为 `v-if` 是一个指令，他必须依附于某个元素。但如果我们想要切换不止一个元素呢？在这种情况下我们可以在一个 `<template>` 元素上使用 `v-if`，这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 `<template>` 元素。

template

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

`v-else` 和 `v-else-if` 也可以在 `<template>` 上使用。

`v-show` [​](#v-show)
---------------------

另一个可以用来按条件显示一个元素的指令是 `v-show`。其用法基本一样：

template

    <h1 v-show="ok">Hello!</h1>

不同之处在于 `v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS 属性。

`v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。

`v-if` vs. `v-show` [​](#v-if-vs-v-show)
----------------------------------------

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。

总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

`v-if` 和 `v-for` [​](#v-if-with-v-for)
--------------------------------------

警告

同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。请查看[风格指南](/style-guide/rules-essential.html#avoid-v-if-with-v-for)获得更多信息。

当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，`v-if` 会首先被执行。请查看[列表渲染指南](./list.html#v-for-with-v-if)获取更多细节。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/conditional.md)
列表渲染 [​](#list-rendering)
=========================

`v-for` [​](#v-for)
-------------------

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的**别名**：

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

在 `v-for` 块中可以完整地访问父作用域内的属性和变量。`v-for` 也支持使用可选的第二个参数表示当前项的位置索引。

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpdTsuqwjAQ/ZVDNlFQu5d64bpwJ7g3LopOJdAmIRlFCPl3p60PcDWcM+eV1X8Iq/uN1FrV6RxtYCTiW/gzzvbBR0ZGpBYFbfQ9tEi1ccadvUuM0ERyvKeUmithMyhn+jCSev4WWaY+vZ7HjH5Sr6F33muUhTR8uW0ThTuJua6mPbJEgGSErmEaENedxX3Z+rgxajbEL2DdhR5zOVOdUSIEDOf8M7IULCHsaPgiMa1eK4QcS6rOSkhdfapVeQLQEWnH)

[在演练场中尝试一下](https://play.vuejs.org/#eNpVTssKwjAQ/JUllyr0cS9V0IM3wbvxEOxWAm0a0m0phPy7m1aqhpDsDLMz48XJ2nwaUZSiGp5OWzpKg7PtHUGNjRpbAi8NQK1I7fbrLMkhjc5EJAn4WOXQ0BWHQb2whOS24CSN6qjXhN1Qwt1Dt2kufZ9ASOGXOyvH3GMNCdGdH75VsZVjwGa2VYQRUdVqmLKmdwcpdjEnBW1qnPf8wZIrBQujoff/RSEEyIDZZeGLeCn/dGJyCSlazSZVsUWL8AYme21i)

`v-for` 变量的作用域和下面的 JavaScript 代码很类似：

js

    const parentMessage = 'Parent'
    const items = [
      /* ... */
    ]
    
    items.forEach((item, index) => {
      // 可以访问外层的 `parentMessage`
      // 而 `item` 和 `index` 只在这个作用域可用
      console.log(parentMessage, item.message, index)
    })

注意 `v-for` 是如何对应 `forEach` 回调的函数签名的。实际上，你也可以在定义 `v-for` 的变量别名时使用解构，和解构函数参数类似：

template

    <li v-for="{ message } in items">
      {{ message }}
    </li>
    
    <!-- 有 index 索引时 -->
    <li v-for="({ message }, index) in items">
      {{ message }} {{ index }}
    </li>

对于多层嵌套的 `v-for`，作用域的工作方式和函数的作用域很类似。每个 `v-for` 作用域都可以访问到父级作用域：

template

    <li v-for="item in items">
      <span v-for="childItem in item.children">
        {{ item.message }} {{ childItem }}
      </span>
    </li>

你也可以使用 `of` 作为分隔符来替代 `in`，这更接近 JavaScript 的迭代器语法：

template

    <div v-for="item of items"></div>

`v-for` 与对象 [​](#v-for-with-an-object)
--------------------------------------

你也可以使用 `v-for` 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 `Object.keys()` 的返回值来决定。

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

可以通过提供第二个参数表示属性名 (例如 key)：

template

    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>

第三个参数表示位置索引：

template

    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jjFvgzAQhf/KE0sSCQKpqg7IqRSpQ9WlWycvBC6KW2NbcKaNEP+9B7Tx4nt33917Y3IKYT9ESspE9XVnAqMnjuFZO9MG3zFGdFTVbAbChEvnW2yE32inXe1dz2hv7+dPqhnHO7kdtQPYsKUSm1f/DfZoPKzpuYdx+JAL6cxUka++E+itcoQX/9cO8SzslZoTy+yhODxlxWN2KMR22mmn8jWrpBTB1AZbMc2KVbTyQ56yBkN28d1RJ9uhspFSfNEtFf+GfnZzjP/oOll2NQPjuM4xTftZyIaU5VwuN0SsqMqtWZxUvliq/J4jmX4BTCp08A==)

[在演练场中尝试一下](https://play.vuejs.org/#eNo9T8FqwzAM/RWRS1pImnSMHYI3KOwwdtltJ1/cRqXe3Ng4ctYS8u+TbVJjLD3rPelpLg7O7aaARVeI8eS1ozc54M1ZT9DjWQVDMMsBoFekNtucS/JIwQ8RSQI+1/vX8QdP1K2E+EmaDHZQftg/IAu9BaNHGkEP8B2wrFYxgAp0sZ6pn2pAeLepmEuSXDiy7oL9gduXT+3+pW6f631bZoqkJY/kkB6+onnswoDw6owijIhEMByjUBgNU322/lUWm0mZgBX84r1ifz3ettHmupYskjbanedch2XZRcAKTnnvGVIPBpkqGqPTJNGkkaJ5+CiWf4KkfBs=)

在 `v-for` 里使用范围值 [​](#v-for-with-a-range)
-----------------------------------------

`v-for` 可以直接接受一个整数值。在这种用例中，会将该模板基于 `1...n` 的取值范围重复多次。

template

    <span v-for="n in 10">{{ n }}</span>

注意此处 `n` 的初值是从 `1` 开始而非 `0`。

`<template>` 上的 `v-for` [​](#v-for-on-template)
-----------------------------------------------

与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 `v-for` 来渲染一个包含多个元素的块。例如：

template

    <ul>
      <template v-for="item in items">
        <li>{{ item.msg }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

`v-for` 与 `v-if` [​](#v-for-with-v-if)
--------------------------------------

注意

同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。请转阅[风格指南](/style-guide/rules-essential.html#avoid-v-if-with-v-for)查看更多细节。

当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名：

template

    <!--
     这会抛出一个错误，因为属性 todo 此时
     没有在该实例上定义
    -->
    <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo.name }}
    </li>

在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

template

    <template v-for="todo in todos">
      <li v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </template>

通过 key 管理状态 [​](#maintaining-state-with-key)
--------------------------------------------

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 `key` attribute：

template

    <div v-for="item in items" :key="item.id">
      <!-- 内容 -->
    </div>

当你使用 `<template v-for>` 时，`key` 应该被放置在这个 `<template>` 容器上：

template

    <template v-for="todo in todos" :key="todo.name">
      <li>{{ todo.name }}</li>
    </template>

注意

`key` 在这里是一个通过 `v-bind` 绑定的特殊 attribute。请不要和[在 `v-for` 中使用对象](#v-for-with-an-object)里所提到的对象属性名相混淆。

[推荐](/style-guide/rules-essential.html#use-keyed-v-for)在任何可行的时候为 `v-for` 提供一个 `key` attribute，除非所迭代的 DOM 内容非常简单 (例如：不包含组件或有状态的 DOM 元素)，或者你想有意采用默认行为来提高性能。

`key` 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 `v-for` 的 key。关于 `key` attribute 的更多用途细节，请参阅 [`key` API 文档](/api/built-in-special-attributes.html#key)。

组件上使用 `v-for` [​](#v-for-with-a-component)
------------------------------------------

> 这一小节假设你已了解[组件](/guide/essentials/component-basics.html)的相关知识，或者你也可以先跳过这里，之后再回来看。

我们可以直接在组件上使用 `v-for`，和在一般的元素上使用没有区别 (别忘记提供一个 `key`)：

template

    <MyComponent v-for="item in items" :key="item.id" />

但是，这不会自动将任何数据传递给组件，因为组件有自己独立的作用域。为了将迭代后的数据传递到组件中，我们还需要传递 props：

template

    <MyComponent
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />

不自动将 `item` 注入组件的原因是，这会使组件与 `v-for` 的工作方式紧密耦合。明确其数据的来源可以使组件在其他情况下重用。

这里是一个简单的 [Todo List 的例子](https://play.vuejs.org/#eNp1U8Fu2zAM/RXCGGAHTWx02ylwgxZYB+ywYRhyq3dwLGYRYkuCJTsZjPz7KMmK3ay9JBQfH/meKA/Rk1Jp32G0jnJdtVwZ0Gg6tSkEb5RsDQzQ4h4usG9lAzGVxldoK5n8ZrAZsTQLCduRygAKUUmhDQg8WWyLZwMPtmESx4sAGkL0mH6xrMH+AHC2hvuljw03Na4h/iLBHBAY1wfUbsTFVcwoH28o2/KIIDuaQ0TTlvrwNu/TDe+7PDlKXZ6EZxTiN4kuRI3W0dk4u4yUf7bZfScqw6WAkrEf3m+y8AOcw7Qv6w5T1elDMhs7Nbq7e61gdmme60SQAvgfIhExiSSJeeb3SBukAy1D1aVBezL5XrYN9Csp1rrbNdykqsUehXkookl0EVGxlZHX5Q5rIBLhNHFlbRD6xBiUzlOeuZJQz4XqjI+BxjSSYe2pQWwRBZizV01DmsRWeJA1Qzv0Of2TwldE5hZRlVd+FkbuOmOksJLybIwtkmfWqg+7qz47asXpSiaN3lxikSVwwfC8oD+/sEnV+oh/qcxmU85mebepgLjDBD622Mg+oDrVquYVJm7IEu4XoXKTZ1dho3gnmdJhedEymn9ab3ysDPdc4M9WKp28xE5JbB+rzz/Trm3eK3LAu8/E7p2PNzYM/i3ChR7W7L7hsSIvR7L2Aal1EhqTp80vF95sw3WcG7r8A0XaeME=)，展示了如何通过 `v-for` 来渲染一个组件列表，并向每个实例中传入不同的数据。

这里是一个简单的 [Todo List 的例子](https://play.vuejs.org/#eNqNVE2PmzAQ/SsjVIlEm4C27Qmx0a7UVuqhPVS5lT04eFKsgG2BSVJF+e8d2xhIu10tihR75s2bNx9wiZ60To49RlmUd2UrtNkUUjRatQa2iquvBhvYt6qBOEmDwQbEhQQoJJ4dlOOe9bWBi7WWiuIlStNlcJlYrivr5MywxdIDAVo0fSvDDUDiyeK3eDYZxLGLsI8hI7H9DHeYQuwjeAb3I9gFCFMjUXxSYCoELroKO6fZP17Mf6jev0i1ZQcE1RtHaFrWVW/l+/Ai3zd1clQ1O8k5Uzg+j1HUZePaSFwfvdGhfNIGTaW47bV3Mc6/+zZOfaaslegS18ZE9121mIm0Ep17ynN3N5M8CB4g44AC4Lq8yTFDwAPNcK63kPTL03HR6EKboWtm0N5MvldtA8e1klnX7xphEt3ikTbpoYimsoqIwJY0r9kOa6Ag8lPeta2PvE+cA3M7k6cOEvBC6n7UfVw3imPtQ8eiouAW/IY0mElsiZWqOdqkn5NfCXxB5G6SJRvj05By1xujpJWUp8PZevLUluqP/ajPploLasmk0Re3sJ4VCMnxvKQ//0JMqrID/iaYtSaCz+xudsHjLpPzscVGHYO3SzpdixIXLskK7pcBucnTUdgg3kkmcxhetIrmH4ebr8m/n4jC6FZp+z7HTlLsVx1p4M7odcXPr6+Lnb8YOne5+C2F6/D6DH2Hx5JqOlCJ7yz7IlBTbZsf7vjXVBzjvLDrH5T0lgo=)，展示了如何通过 `v-for` 来渲染一个组件列表，并向每个实例中传入不同的数据。

数组变化侦测 [​](#array-change-detection)
-----------------------------------

### 变更方法 [​](#mutation-methods)

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：

*   `push()`
*   `pop()`
*   `shift()`
*   `unshift()`
*   `splice()`
*   `sort()`
*   `reverse()`

### 替换一个数组 [​](#replacing-an-array)

变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变 (immutable) 方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是**返回一个新数组**。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：

js

    // `items` 是一个数组的 ref
    items.value = items.value.filter((item) => item.message.match(/Foo/))

js

    this.items = this.items.filter((item) => item.message.match(/Foo/))

你可能认为这将导致 Vue 丢弃现有的 DOM 并重新渲染整个列表——幸运的是，情况并非如此。Vue 实现了一些巧妙的方法来最大化对 DOM 元素的重用，因此用另一个包含部分重叠对象的数组来做替换，仍会是一种非常高效的操作。

展示过滤或排序后的结果 [​](#displaying-filtered-sorted-results)
----------------------------------------------------

有时，我们希望显示数组经过过滤或排序后的内容，而不实际变更或重置原始数据。在这种情况下，你可以创建返回已过滤或已排序数组的计算属性。

举例来说：

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

在计算属性不可行的情况下 (例如在多层嵌套的 `v-for` 循环中)，你可以使用以下方法：

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

在计算属性中使用 `reverse()` 和 `sort()` 的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本：

diff

    - return numbers.reverse()
    + return [...numbers].reverse()

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/list.md)
事件处理 [​](#event-handling)
=========================

监听事件 [​](#listening-to-events)
------------------------------

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="handler"` 或 `@click="handler"`。

事件处理器 (handler) 的值可以是：

1.  **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)。
    
2.  **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径。
    

内联事件处理器 [​](#inline-handlers)
-----------------------------

内联事件处理器通常用于简单场景，例如：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jssKgzAURH/lko0tgrbbEqX+Q5fZaLxiqHmQ3LgJ+fdqFZcD58xMYp1z1RqRvRgP0itHEJCia4VR2llPkMDjBBkmbzUUG1oII4y0JhBIGw2hh2Znbo+7MLw+WjZ/C4TaLT3hnogPkcgaeMtFyW8j2GmXpWBtN47w5PWBHLhrPzPCKfWDXRHmPsCAaOBfgSOkdH3IGUhpDBWv9/e8vsZZ/gFFhFJN)

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jcEKgzAQRH9lyKlF0PYqqdR/6DGXaLYo1RjiRgrivzepIizLzu7sm1XUzuVLIFEKObe+d1wpS183eYahtw4DY1UWMJr15ZpmxYAnDt7uF0BxOwXL5Evc0kbxlmyxxZLFyY2CaXSDZkqKZROYJ4tnO/Tt56HEgckyJaraGNxlsVt2u6teHeF40s20EDo9oyGy+CPIYF1xULBt4H6kOZeFiwBZnOFi+wH0B1hk)

方法事件处理器 [​](#method-handlers)
-----------------------------

随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 `v-on` 也可以接受一个方法名或对某个方法的调用。

举例来说：

js

    const name = ref('Vue.js')
    
    function greet(event) {
      alert(`Hello ${name.value}!`)
      // `event` 是 DOM 原生事件
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
        // 方法中的 `this` 指向当前活跃的组件实例
        alert(`Hello ${this.name}!`)
        // `event` 是 DOM 原生事件
        if (event) {
          alert(event.target.tagName)
        }
      }
    }

template

    <!-- `greet` 是上面定义过的方法名 -->
    <button @click="greet">Greet</button>

[在演练场中尝试一下](https://play.vuejs.org/#eNpVj0FLxDAQhf/KMwjtXtq7dBcFQS/qzVMOrWFao2kSkkkvpf/dJIuCEBgm771vZnbx4H23JRJ3YogqaM+IxMlfpNWrd4GxI9CMA3NwK5psbaSVVjkbGXZaCediaJv3RN1XbE5FnZNVrJ3FEoi4pY0sn7BLC0yGArfjMxnjcLsXQrdNJtFxM+Ys0PcYa2CEjuBPylNYb4THtxdUobj0jH/YX3D963gKC5WyvGZ+xR7S5jf01yPzeblhWr2ZmErHw0dizivfK6PV91mKursUl6dSh/4qZ+vQ/+XE8QODonDi)

[在演练场中尝试一下](https://play.vuejs.org/#eNplUE1LxDAQ/StjEbYL0t5LXRQEvag3Tz00prNtNE1CMilC6X83SUkRhJDJfLz3Jm8tHo2pFo9FU7SOW2Ho0in8MdoSDHhlXhKsnQIYGLHyvL8BLJK3KmcAis3YwOnDY/XlTnt1i2G7i/eMNOnBNRkwWkQqcUFFByVAXUNPk3A9COXEgBkGRgtFDkgDTQjcWxuAwDiJBeMsMcUxszCJlsr+BaXUcLtGwiqut930579KST1IBd5Aqlgie3p/hdTIk+IK//bMGqleEbMjxjC+BZVDIv0+m9CpcNr6MDgkhLORjDBm1H56Iq3ggUvBv++7IhnUFZfnGNt6b4fRtj5wxfYL9p+Sjw==)

方法事件处理器会自动接收原生 DOM 事件并触发执行。在上面的例子中，我们能够通过被触发事件的 `event.target.tagName` 访问到该 DOM 元素。

你也可以看看[为事件处理器标注类型](/guide/typescript/composition-api.html#typing-event-handlers)这一章了解更多。

你也可以看看[为事件处理器标注类型](/guide/typescript/options-api.html#typing-event-handlers)这一章了解更多。

### 方法与内联事件判断 [​](#method-vs-inline-detection)

模板编译器会通过检查 `v-on` 的值是否是合法的 JavaScript 标识符或属性访问路径来断定是何种形式的事件处理器。举例来说，`foo`、`foo.bar` 和 `foo['bar']` 会被视为方法事件处理器，而 `foo()` 和 `count++` 会被视为内联事件处理器。

在内联处理器中调用方法 [​](#calling-methods-in-inline-handlers)
----------------------------------------------------

除了直接绑定方法名，你还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp9jTEOwjAMRa8SeSld6I5CBWdg9ZJGBiJSN2ocpKjq3UmpFDGx+Vn//b/ANYTjOxGcQEc7uyAqkqTQI98TW3ETq2jyYaQYzYNatSArZTzNUn/IK7Ludr2IBYTG4I3QRqKHJFJ6LtY7+zojbIXNk7yfmhahv5msvqS7PfnHGjJVp9w/hu7qKKwfEd1NSg==)

[在演练场中尝试一下](https://play.vuejs.org/#eNptjUEKwjAQRa8yZFO7sfsSi57B7WzGdjTBtA3NVC2ldzehEFwIw8D7vM9f1cX742tmVSsd2sl6aXDgjx8ngY7vNDuBFQeAnsWMXagToQAEWg49h0APLncDAIUcT5LzlKJsqRBfPF3ljQjCvXcknEj0bRYZBzi3zrbPE6o0UBhblKiaKy1grK52J/oA//23IcmNBD8dXeVBtX0BF0pXsg==)

在内联事件处理器中访问事件参数 [​](#accessing-event-argument-in-inline-handlers)
-----------------------------------------------------------------

有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数：

template

    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    
    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>

js

    function warn(message, event) {
      // 这里可以访问原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }

js

    methods: {
      warn(message, event) {
        // 这里可以访问 DOM 原生事件
        if (event) {
          event.preventDefault()
        }
        alert(message)
      }
    }

事件修饰符 [​](#event-modifiers)
---------------------------

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。

为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**。修饰符是用 `.` 表示的指令后缀，包含以下这些：

*   `.stop`
*   `.prevent`
*   `.self`
*   `.capture`
*   `.once`
*   `.passive`

template

    <!-- 单击事件将停止传递 -->
    <a @click.stop="doThis"></a>
    
    <!-- 提交事件将不再重新加载页面 -->
    <form @submit.prevent="onSubmit"></form>
    
    <!-- 修饰语可以使用链式书写 -->
    <a @click.stop.prevent="doThat"></a>
    
    <!-- 也可以只有修饰符 -->
    <form @submit.prevent></form>
    
    <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <div @click.self="doThat">...</div>

TIP

使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 `@click.prevent.self` 会阻止**元素及其子元素的所有点击事件的默认行为**，而 `@click.self.prevent` 则只会阻止对元素本身的点击事件的默认行为。

`.capture`、`.once` 和 `.passive` 修饰符与[原生 `addEventListener` 事件](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options)相对应：

template

    <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
    <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
    <div @click.capture="doThis">...</div>
    
    <!-- 点击事件最多被触发一次 -->
    <a @click.once="doThis"></a>
    
    <!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
    <!-- 以防其中包含 `event.preventDefault()` -->
    <div @scroll.passive="onScroll">...</div>

`.passive` 修饰符一般用于触摸事件的监听器，可以用来[改善移动端设备的滚屏性能](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD)。

TIP

请勿同时使用 `.passive` 和 `.prevent`，因为 `.passive` 已经向浏览器表明了你_不想_阻止事件的默认行为。如果你这么做了，则 `.prevent` 会被忽略，并且浏览器会抛出警告。

按键修饰符 [​](#key-modifiers)
-------------------------

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

template

    <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
    <input @keyup.enter="submit" />

你可以直接使用 [`KeyboardEvent.key`](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。

template

    <input @keyup.page-down="onPageDown" />

在上面的例子中，仅会在 `$event.key` 为 `'PageDown'` 时调用事件处理。

### 按键别名 [​](#key-aliases)

Vue 为一些常用的按键提供了别名：

*   `.enter`
*   `.tab`
*   `.delete` (捕获“Delete”和“Backspace”两个按键)
*   `.esc`
*   `.space`
*   `.up`
*   `.down`
*   `.left`
*   `.right`

### 系统按键修饰符 [​](#system-modifier-keys)

你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。

*   `.ctrl`
*   `.alt`
*   `.shift`
*   `.meta`

注意

在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)。在 Sun 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta 也被标识为“META”或“Meta”。

举例来说：

template

    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />
    
    <!-- Ctrl + 点击 -->
    <div @click.ctrl="doSomething">Do something</div>

TIP

请注意，系统按键修饰符和常规按键不同。与 `keyup` 事件一起使用时，该按键必须在事件发出时处于按下状态。换句话说，`keyup.ctrl` 只会在你仍然按住 `ctrl` 但松开了另一个键时被触发。若你单独松开 `ctrl` 键将不会触发。

### `.exact` 修饰符 [​](#exact-modifier)

`.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。

template

    <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
    <button @click.ctrl="onClick">A</button>
    
    <!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
    <button @click.ctrl.exact="onCtrlClick">A</button>
    
    <!-- 仅当没有按下任何系统按键时触发 -->
    <button @click.exact="onClick">A</button>

鼠标按键修饰符 [​](#mouse-button-modifiers)
------------------------------------

*   `.left`
*   `.right`
*   `.middle`

这些修饰符将处理程序限定为由特定鼠标按键触发的事件。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/event-handling.md)
表单输入绑定 [​](#form-input-bindings)
================================

在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：

template

    <input
      :value="text"
      @input="event => text = event.target.value">

`v-model` 指令帮我们简化了这一步骤：

template

    <input v-model="text">

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

*   文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` property 并侦听 `input` 事件；
*   `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` property 并侦听 `change` 事件；
*   `<select>` 会绑定 `value` property 并侦听 `change` 事件。

注意

`v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。你应该在 JavaScript 中使用`data` 选项响应式系统的 API 来声明该初始值。

基本用法 [​](#basic-usage)
----------------------

### 文本 [​](#text)

template

    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

Message is:

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jUEOgyAQRa8yYUO7aNkbNOkBegM2RseWRGACoxvC3TumxuX/+f+9ql5Ez31D1SlbpuyJoSBvNLjoA6XMUCHjAg2WnAJomWoXXZxSLAwBSxk/CP2xuWl9d9GaP0YAEhgDrSOjJABLw/s8+NJBrde/NWsOpWPrI20M+yOkGdfeqXPiFAhowm9aZ8zS4+wPv/RGjtZcJtV+YpNK1g==)

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jdEKwjAMRX8l9EV90L2POvAD/IO+lDVqoetCmw6h9N/NmBuEJPeSc1PVg+i2FFS90nlMnngwEb80JwaHL1sCQzURwFm258u2AyTkkuKuACbM2b6xh9Nps9o6pEnp7ggWwThRsIyiADQNz40En3uodQ+C1nRHK8HaRyoMy3WaHYa7Uf8To0CCRvzMwWESH51n4cXvBNTd8Um1H0FuTq0=)

注意

对于需要使用 [IME](https://en.wikipedia.org/wiki/Input_method) 的语言 (中文，日文和韩文等)，你会发现 `v-model` 不会在 IME 输入还在拼字阶段时触发更新。如果你的确想在拼字阶段也触发更新，请直接使用自己的 `input` 事件监听器和 `value` 绑定而不要使用 `v-model`。

### 多行文本 [​](#multiline-text)

template

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

Multiline message is:

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jktuwzAMRK9CaON24XrvKgZ6gN5AG8FmGgH6ECKdJjB891D5LYec9zCb+SH6Oq9oRmN5roEEGGWlyeWQqFSBDSoeYYdjLQk6rXYuuzyXzAIJmf0fwqF1Prru02U7PDQq0CCYKHrBlsQy+Tz9rlFCDBnfdOBRqfa7twhYrhEPzvyfgmCvnxlHoIp9w76dmbbtDe+7HdpaBQUv4it6OPepLBjV8Gw5AzpjxlOJC1a9+2WB1IZQRGhWVqsdXgb1tfDcbvYbJDRqLQ==)

[在演练场中尝试一下](https://play.vuejs.org/#eNo9jk2OwyAMha9isenMIpN9hok0B+gN2FjBbZEIscDpj6LcvaZpKiHg2X6f32L+mX+uM5nO2DLkwNK7RHeesoCnE85RYHEJwKPg1/f2B8gkc067AhipFDxTB4fDVlrro5ce237AKoRGjihUldjCmPqjLgkxJNoxEEqnrtp7TTEUeUT6c+Z2CUKNdgbdxZmaavt1pl+Wj3ldbcubUegumAnh2oyTp6iE95QzoDEGukzRU9Y6eg9jDcKRoFKLUm27E5RXxTu7WZ89/G4E)

注意在 `<textarea>` 中是不支持插值表达式的。请使用 `v-model` 来替代：

template

    <!-- 错误 -->
    <textarea>{{ text }}</textarea>
    
    <!-- 正确 -->
    <textarea v-model="text"></textarea>

### 复选框 [​](#checkbox)

单一的复选框，绑定布尔类型值：

template

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

false

[在演练场中尝试一下](https://play.vuejs.org/#eNpVjssKgzAURH/lko3tonVfotD/yEaTKw3Ni3gjLSH/3qhUcDnDnMNk9gzhviRkD8ZnGXUgmJFS6IXTNvhIkCHiBAWm6C00ddoIJ5z0biaQL5RvVNCtmwvFhFfheLuLqqIGQhvMQLgm4tqFREDfgJ1gGz36j2Cg1TkvN+sVmn+JqnbtrjDDiAYmH09En/PxphTebqsK8PY4wMoPslBUxQ==)

[在演练场中尝试一下](https://play.vuejs.org/#eNpVjtEKgzAMRX8l9Gl72Po+OmH/0ZdqI5PVNnSpOEr/fVVREEKSc0kuN4sX0X1KKB5Cfbs4EDfa40whMljsTXIMWXsAa9hcrtsOEJFT9DsBdG/sPmgfwDHhJpZl1FZLycO6AuNIzjAuxGrwlBj4R/jUYrVpw6wFDPbM020MFt0uoq2a3CycadFBH+Lpo8l5jwWlKLle1QcljwCi/AH7gFic)

我们也可以将多个复选框绑定到同一个数组或[集合](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)的值：

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

在这个例子中，`checkedNames` 数组将始终包含所有当前被选中的框的值。

[在演练场中尝试一下](https://play.vuejs.org/#eNqVkUtqwzAURbfy0CTtoNU8KILSWaHdQNWBIj8T1fohyybBeO+RbOc3i2e+vHvuMWggHyG89x2SLWGtijokaDF1gQunbfAxwQARaxihjt7CJlc3wgmnvGsTqAOqBqsfabGFXSm+/P69CsfovJVXckhog5EJcwJgle7558yBK+AWhuFxaRwZLbVCZ0K70CVIp4A7Qabi3h8FAV3l/C9Vk797abpy/lrim/UVmkt/Gc4HOv+EkXs0UPt4XeCFZHQ6lM4TZn9w9+YlrjFPCC/kKrPVDd6Zv5e4wjwv8ELezIxeX4qMZwHduAs=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqVUc1qxCAQfpXBU3tovS9WKL0V2hdoenDjLGtjVNwxbAl592rMpru3DYjO5/cnOLLXEJ6HhGzHxKmNJpBsHJ6DjwQaDypZgrFxAFqRenisM0BEStFdEEB7xLZD/al6PO3g67veT+XIW16Cr+kZEPbBKsKMAIQ2g3yrAeBqwjjeRMI0CV5kxZ0dxoVEQL8BXxo2C/f+3DAwOuMf1XZ5HpRNhX5f4FPvNdqLfgnOBK+PsGqPFg4+rgmyOAWfiaK5o9kf3XXzArc0zxZZnJuae9PhVfPHAjc01wRZnP/Ngq8/xaY/yMW74g==)

### 单选按钮 [​](#radio)

template

    <div>Picked: {{ picked }}</div>
    
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>

Picked:

OneTwo

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkDFuwzAMRa9CaHE7tNoDxUBP0A4dtTgWDQiRJUKmHQSG7x7KhpMMAbLxk3z/g5zVD9H3NKI6KDO02RPDgDxSbaPvKWWGGTJ2sECXUw+VrFY22timODCQb8/o4FhWPqrfiNWnjUZvRmIhgrGn0DCKAjDOT/XfCh1gnnd+WYwukwJYNj7SyMBXwqNVuXE+WQXeiUgRpZyaMJaR5BX11SeHQfTmJi1dnNiE5oQBupR3shbC6LX9Posvpdyz/jf1OksOe85ayVqIR5bR9z+o5Qbc6oCk)

[在演练场中尝试一下](https://play.vuejs.org/#eNqNkEEOAiEMRa/SsFEXyt7gJJ5AFy5ng1ITIgLBMmomc3eLOONSEwJ9Lf//pL3YxrjqMoq1ULdTspGa1uMjhkRg8KyzI+hbD2A06fmi1gAJKSc/EkC0pwuaNcx2Hme1OZSHLz5KTtYMhNfoNGEhUsZ2zf6j7vuPEQyDkmVSBPzJ+pgJ6Blx04qkjQ2tAGsYgkcuO+1yGXF6oeU1GHTM1Y1bsoY5fUQH55BGZcMKJd/t31l0L+WYdaj0V9Zb2bDim6XktAcxvADR+YWb)

### 选择器 [​](#select)

单个选择器的示例如下：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp1j7EOgyAQhl/lwmI7tO4Nmti+QJOuLFTPxASBALoQ3r2H2jYOjvff939wkTXWXucJ2Y1x37rBBvAYJlsLPYzWuAARHPaQoHdmhILQQmihW6N9RhW2ATuoMnQqirPQvFw9ZKAh4GiVDEgTAPdW6hpeW+sGMf4VKVEz73Mvs8sC5stoOlSVYF9SsEVGiLFhMBq6wcu3IsUs1YREEvFUKD1udjAaebnS+27dHOT3g/yxy+nHywM08PJ3KksfXwJ2dA==)

[在演练场中尝试一下](https://play.vuejs.org/#eNp1j1ELgyAUhf/KxZe2h633cEHbHxjstReXdxCYSt5iEP333XIJPQSinuN3jjqJyvvrOKAohAxN33oqa4tf73oCjR81GIKptgBakTqd4x6gRxp6uymAgAYbQl1AlkVvXhaeeMg8NbMg7LxRhKwAZPDKlvBK8WlKXTDPnFzOI7naMF46p9HcarFxtVgBRpyn1lnQbVBvwwWjMgMyycTToAr47wZnUeaR3mfL6sC/H/iPnc/vXS9gIfP0UTH/ACgWeYE=)

注意

如果 `v-model` 表达式的初始值不匹配任何一个选择项，`<select>` 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change 事件。因此，我们建议提供一个空值的禁用选项，如上面的例子所示。

多选 (值绑定到一个数组)：

template

    <div>Selected: {{ selected }}</div>
    
    <select v-model="selected" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

Selected: \[\]

ABC

[在演练场中尝试一下](https://play.vuejs.org/#eNp1kL2OwjAQhF9l5Ya74i7QBhMJeARKTIESIyz5Z5VsAsjyu7NOQEBB5xl/M7vaKNaI/0OvRSlkV7cGCTpNPVbKG4ehJYjQ6hMkOLXBwYzRmfLK18F3GbW6Jt3AKkM/+8Ov8rKYeriBBWmH9kiaFYBszFDtHpkSYnwVpCSL/JtDDE4+DH8uNNqulHiCSoDrLRm0UyWzAckEX61l8Xh9+psv/vbD563HCSxk8bY0y45u47AJ2D/HHyDm4MU0dC5hMZ/jdal8Gg8wJkS6A3nRew4=)

[在演练场中尝试一下](https://play.vuejs.org/#eNp1UEEOgjAQ/MqmJz0oeMVKgj7BI3AgdI1NCjSwIIbwdxcqRA4mTbsznd2Z7CAia49diyIQsslrbSlMSuxtVRMofGStIRiSEkBllO32rgaokdq6XBBAgwZzQhVAnDpunB6++EhvncyAsLAmI2QEIJXuwvvaPAzrJBhH6U2/UxMLHQ/doagUmksiFmEioOCU2ho3krWVJV2VYSS9b7Xlr3/424bn1LMDA+n9hGbY0Hs2c4J4sU/dPl5a0TOAk+/b/rwsYO4Q4wdtRX7l)

选择器的选项可以使用 `v-for` 动态渲染：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNplkMFugzAQRH9l5YtbKYU7IpFoP6CH9lb3EMGiWgLbMguthPzvXduEJMqNYUazb7yKxrlimVFUop5arx3BhDS7kzJ6dNYTrOCxhwC9tyNIjkpllGmtmWJ0wJawg2MMPclGPl9N60jzx+Z9KQPcRfhHFch3g/IAy3mYkVUjIRzu/M9fe+O/Pvo/Hm8b3jihzDdfr8s8gwewIBzdcCZkBVBnXFheRtvhcFTiwq9ECnAkQ3Okt54Dm9TmskYJqNLR3SyS3BsYct3CRYSFwGCpusx/M0qZTydKRXWnl9PHBlPFhv1lQ6jL6MZl+xoR/gFjPZTD)

[在演练场中尝试一下](https://play.vuejs.org/#eNp1kMFqxCAQhl9l8JIWtsk92IVtH6CH9lZ7COssDbgqZpJdCHn3nWiUXBZE/Mdvxv93Fifv62lE0Qo5nEPv6ags3r0LBBov3WgIZmUBdEfdy2s6AwSkMdisAAY0eCbULVSn6pCrzlPv7NDCb64AzEB4J+a+LFYHmDozYuyCpfTtqJ+b21Efz6j/gPtpn8xl7C8douaNl2xKUhaEV286QlYAMgWB6e3qNJp3JXIyJSLASErFyMUFBjbZ2xxXCWijkXJZR1kmsPF5g+s1ACybWdmkarLSpKejS0VS99Pxu3wzT8jOuF026+2arKQRywOBGJfE)

值绑定 [​](#value-bindings)
------------------------

对于单选按钮，复选框和选择器选项，`v-model` 绑定的值通常是静态的字符串 (或者对复选框是布尔值)：

template

    <!-- `picked` 在被选择时是字符串 "a" -->
    <input type="radio" v-model="picked" value="a" />
    
    <!-- `toggle` 只会为 true 或 false -->
    <input type="checkbox" v-model="toggle" />
    
    <!-- `selected` 在第一项被选中时为字符串 "abc" -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>

但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 `v-bind` 来实现。此外，使用 `v-bind` 还使我们可以将选项值绑定为非字符串的数据类型。

### 复选框 [​](#checkbox-1)

template

    <input
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no" />

`true-value` 和 `false-value` 是 Vue 特有的 attributes，仅支持和 `v-model` 配套使用。这里 `toggle` 属性的值会在选中时被设为 `'yes'`，取消选择时设为 `'no'`。你同样可以通过 `v-bind` 将其绑定为其他动态值：

template

    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue" />

提示

`true-value` 和 `false-value` attributes 不会影响 `value` attribute，因为浏览器在表单提交时，并不会包含未选择的复选框。为了保证这两个值 (例如：“yes”和“no”) 的其中之一被表单提交，请使用单选按钮作为替代。

### 单选按钮 [​](#radio-1)

template

    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />

`pick` 会在第一个按钮选中时被设为 `first`，在第二个按钮选中时被设为 `second`。

### 选择器选项 [​](#select-options-2)

template

    <select v-model="selected">
      <!-- 内联对象字面量 -->
      <option :value="{ number: 123 }">123</option>
    </select>

`v-model` 同样也支持非字符串类型的值绑定！在上面这个例子中，当某个选项被选中，`selected` 会被设为该对象字面量值 `{ number: 123 }`。

修饰符 [​](#modifiers)
-------------------

### `.lazy` [​](#lazy)

默认情况下，`v-model` 会在每次 `input` 事件后更新数据 ([IME 拼字阶段的状态](#vmodel-ime-tip)例外)。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据：

template

    <!-- 在 "change" 事件后同步更新而不是 "input" -->
    <input v-model.lazy="msg" />

### `.number` [​](#number)

如果你想让用户输入自动转换为数字，你可以在 `v-model` 后添加 `.number` 修饰符来管理输入：

template

    <input v-model.number="age" />

如果该值无法被 `parseFloat()` 处理，那么将返回原始值。

`number` 修饰符会在输入框有 `type="number"` 时自动启用。

### `.trim` [​](#trim)

如果你想要默认自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim` 修饰符：

template

    <input v-model.trim="msg" />

组件上的 `v-model` [​](#v-model-with-components)
--------------------------------------------

> 如果你还不熟悉 Vue 的组件，那么现在可以跳过这个部分。

HTML 的内置表单输入类型并不总能满足所有需求。幸运的是，我们可以使用 Vue 构建具有自定义行为的可复用输入组件，并且这些输入组件也支持 `v-model`！要了解更多关于此的内容，请在组件指引中阅读[配合 `v-model` 使用](/guide/components/v-model.html)。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/forms.md)
生命周期钩子 [​](#lifecycle-hooks)
============================

每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。

注册周期钩子 [​](#registering-lifecycle-hooks)
----------------------------------------

举例来说，`onMounted``mounted` 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：

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

还有其他一些钩子，会在实例生命周期的不同阶段被调用，最常用的是 [`onMounted`](/api/composition-api-lifecycle.html#onmounted)、[`onUpdated`](/api/composition-api-lifecycle.html#onupdated) 和 [`onUnmounted`](/api/composition-api-lifecycle.html#onunmounted)。所有生命周期钩子的完整参考及其用法请参考 [API 索引](/api/composition-api-lifecycle.html)。[`mounted`](/api/options-lifecycle.html#mounted)、[`updated`](/api/options-lifecycle.html#updated) 和 [`unmounted`](/api/options-lifecycle.html#unmounted)。

所有生命周期钩子函数的 `this` 上下文都会自动指向当前调用它的组件实例。注意：避免用箭头函数来定义生命周期钩子，因为如果这样的话你将无法在函数中通过 `this` 获取组件实例。

当调用 `onMounted` 时，Vue 会自动将回调函数注册到当前正被初始化的组件实例上。这意味着这些钩子应当在组件初始化时被**同步**注册。例如，请不要这样做：

js

    setTimeout(() => {
      onMounted(() => {
        // 异步注册时当前组件实例已丢失
        // 这将不会正常工作
      })
    }, 100)

注意这并不意味着对 `onMounted` 的调用必须放在 `setup()` 或 `<script setup>` 内的词法上下文中。`onMounted()` 也可以在一个外部函数中调用，只要调用栈是同步的，且最终起源自 `setup()` 就可以。

生命周期图示 [​](#lifecycle-diagram)
------------------------------

下面是实例生命周期的图表。你现在并不需要完全理解图中的所有内容，但以后它将是一个有用的参考。

![组件生命周期图示](/assets/lifecycle.16e4c08e.png)

有关所有生命周期钩子及其各自用例的详细信息，请参考[生命周期钩子 API 索引](/api/composition-api-lifecycle.html)[生命周期钩子 API 索引](/api/options-lifecycle.html)。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/lifecycle.md)
侦听器 [​](#watchers)
==================

基本示例 [​](#basic-example)
------------------------

计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。

在选项式 API 中，我们可以使用 [`watch` 选项](/api/options-state.html#watch)在每次响应式属性发生变化时触发一个函数。

js

    export default {
      data() {
        return {
          question: '',
          answer: 'Questions usually contain a question mark. ;-)'
        }
      },
      watch: {
        // 每当 question 改变时，这个函数就会执行
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

[在演练场中尝试一下](https://play.vuejs.org/#eNptUk2PmzAQ/SuvXAA1sdVrmt0qqnroqa3UIxcLhuCGjKk/wkYR/70OBJLuroRkPDPvzbznuSS7rhOnQMkm2brS6s4/F0wvnbEeFdUqtB6XgoFKeZXl0z9gyQfL8w34G8h5bXiDNF3NQcWuJxtDv25Zh+CCatszSsNeaYZakDgqexD4vM7TCT9cj2Ek65Uvm83cTUr0DTGdyN7RZaN4T24F32iHOnA5hnvdtrCBJ+RcnTH180wrmLaaL4s+QNd4LBOaK3r5UWfplzTHM9afHmoxdhV78rtRcpbPmVHEf1qO5BtTuUWNcmcu8QC9046kk4l4Qvq70XzQvBdC3CyKJfb8OEa01fn4OC7Wq15pj5qidVnaeN+5jZRncmxE72upOp0uY77ulU3gSCT+uOhXnt9yiy6U1zdBRtYa+9aK+9TfrgUf8NWEtgKbK6mKQN8Qdj+/C6T4iJHkXcsKjt9WLpsZL56OXas8xRuw7cYD2LlDXKYoT7K5b+OU22rugsdpfTQVtU9FMueLBHKikRNPpLtcbnuLYZjCW7m0TIZ/92UFiQ==)

`watch` 选项也支持把键设置成用 `.` 分隔的路径：

js

    export default {
      watch: {
        // 注意：只能是简单的路径，不支持表达式。
        'some.nested.key'(newValue) {
          // ...
        }
      }
    }

在组合式 API 中，我们可以使用 [`watch` 函数](/api/reactivity-core.html#watch)在每次响应式状态发生变化时触发回调函数：

vue

    <script setup>
    import { ref, watch } from 'vue'
    
    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')
    
    // 可以直接侦听一个 ref
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

[在演练场中尝试一下](https://play.vuejs.org/#eNplkkGPmzAQhf/KKxdA3Rj1mpJUUdVDT22lHrlYxDRuYOzaJjRC/PcdxyGr3b2A7PfmmzcMc3awVlxGlW2z2rdO2wCvwmj3DenBGhcww6nuCZMM7QkLOmcG5FyRN9RQa8gH/BuVD9oQdtFb5Hm5KpL8pNx6/+vu8xj9KPv+CnYFqQnyhTFIdxb4vCkjpaFb32JVnyD9lVoUpKaVVmK3x9wQoLtXgtB0VP9/cOMveYk9Np/K5MM9l7jIflScLv990nTW9EcIwXNFR3DX1YwYk4dxyrNXTlIHdCrGyk8hWL+tqqvyZMQUukpaHYOnujdtilTLHPHXGyrKUiRH8i9obx+5UM4Z98j6Pu23qH/AVzP2R5CJRMl14aRw+PldIMdH3Bh3bnzxY+FcdZW2zPvlQ1CD7WVQfALquPToP/gzL4RHqsg89rJNWq3JjgGXzWCOqt812ao3GaqEqRKHcfO8/gDLkq7r6tEyW54Bf5TTlg==)

### 侦听数据源类型 [​](#watch-source-types)

`watch` 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：

js

    const x = ref(0)
    const y = ref(0)
    
    // 单个 ref
    watch(x, (newX) => {
      console.log(`x is ${newX}`)
    })
    
    // getter 函数
    watch(
      () => x.value + y.value,
      (sum) => {
        console.log(`sum of x + y is: ${sum}`)
      }
    )
    
    // 多个来源组成的数组
    watch([x, () => y.value], ([newX, newY]) => {
      console.log(`x is ${newX} and y is ${newY}`)
    })

注意，你不能直接侦听响应式对象的属性值，例如:

js

    const obj = reactive({ count: 0 })
    
    // 错误，因为 watch() 得到的参数是一个 number
    watch(obj.count, (count) => {
      console.log(`count is: ${count}`)
    })

这里需要用一个返回该属性的 getter 函数：

js

    // 提供一个 getter 函数
    watch(
      () => obj.count,
      (count) => {
        console.log(`count is: ${count}`)
      }
    )

深层侦听器 [​](#deep-watchers)
-------------------------

`watch` 默认是浅层的：被侦听的属性，仅在被赋新值时，才会触发回调函数——而嵌套属性的变化不会触发。如果想侦听所有嵌套的变更，你需要深层侦听器：

js

    export default {
      watch: {
        someObject: {
          handler(newValue, oldValue) {
            // 注意：在嵌套的变更中，
            // 只要没有替换对象本身，
            // 那么这里的 `newValue` 和 `oldValue` 相同
          },
          deep: true
        }
      }
    }

直接给 `watch()` 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发：

js

    const obj = reactive({ count: 0 })
    
    watch(obj, (newValue, oldValue) => {
      // 在嵌套的属性变更时触发
      // 注意：`newValue` 此处和 `oldValue` 是相等的
      // 因为它们是同一个对象！
    })
    
    obj.count++

相比之下，一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调：

js

    watch(
      () => state.someObject,
      () => {
        // 仅当 state.someObject 被替换时触发
      }
    )

你也可以给上面这个例子显式地加上 `deep` 选项，强制转成深层侦听器：

js

    watch(
      () => state.someObject,
      (newValue, oldValue) => {
        // 注意：`newValue` 此处和 `oldValue` 是相等的
        // *除非* state.someObject 被整个替换了
      },
      { deep: true }
    )

谨慎使用

深度侦听需要遍历被侦听对象中的所有嵌套的属性，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能。

即时回调的侦听器 [​](#eager-watchers)
-----------------------------

`watch` 默认是懒执行的：仅当数据源变化时，才会执行回调。但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调。举例来说，我们想请求一些初始数据，然后在相关状态更改时重新请求数据。

我们可以用一个对象来声明侦听器，这个对象有 `handler` 方法和 `immediate: true` 选项，这样便能强制回调函数立即执行：

js

    export default {
      // ...
      watch: {
        question: {
          handler(newQuestion) {
            // 在组件实例创建时会立即调用
          },
          // 强制立即执行回调
          immediate: true
        }
      }
      // ...
    }

回调函数的初次执行就发生在 `created` 钩子之前。Vue 此时已经处理了 `data`、`computed` 和 `methods` 选项，所以这些属性在第一次调用时就是可用的。

我们可以通过传入 `immediate: true` 选项来强制侦听器的回调立即执行：

js

    watch(source, (newValue, oldValue) => {
      // 立即执行，且当 `source` 改变时再次执行
    }, { immediate: true })

`watchEffect()` [​](#watcheffect)
---------------------------------

侦听器的回调使用与源完全相同的响应式状态是很常见的。例如下面的代码，在每当 `todoId` 的引用发生变化时使用侦听器来加载一个远程资源：

js

    const todoId = ref(1)
    const data = ref(null)
    
    watch(todoId, async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      )
      data.value = await response.json()
    }, { immediate: true })

特别是注意侦听器是如何两次使用 `todoId` 的，一次是作为源，另一次是在回调中。

我们可以用 [`watchEffect` 函数](/api/reactivity-core.html#watcheffect) 来简化上面的代码。`watchEffect()` 允许我们自动跟踪回调的响应式依赖。上面的侦听器可以重写为：

js

    watchEffect(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      )
      data.value = await response.json()
    })

这个例子中，回调会立即执行，不需要指定 `immediate: true`。在执行期间，它会自动追踪 `todoId.value` 作为依赖（和计算属性类似）。每当 `todoId.value` 变化时，回调会再次执行。有了 `watchEffect()`，我们不再需要明确传递 `todoId` 作为源值。

你可以参考一下[这个例子](/examples/#fetching-data) 的 `watchEffect` 和响应式的数据请求的操作。

对于这种只有一个依赖项的例子来说，`watchEffect()` 的好处相对较小。但是对于有多个依赖项的侦听器来说，使用 `watchEffect()` 可以消除手动维护依赖列表的负担。此外，如果你需要侦听一个嵌套数据结构中的几个属性，`watchEffect()` 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。

TIP

`watchEffect` 仅会在其**同步**执行期间，才追踪依赖。在使用异步回调时，只有在第一个 `await` 正常工作前访问到的属性才会被追踪。

### `watch` vs. `watchEffect` [​](#watch-vs-watcheffect)

`watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

*   `watch` 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
    
*   `watchEffect`，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。
    

回调的触发时机 [​](#callback-flush-timing)
-----------------------------------

当你更改了响应式状态，它可能会同时触发 Vue 组件更新和侦听器回调。

默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新**之前**被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。

如果想在侦听器回调中能访问被 Vue 更新**之后**的 DOM，你需要指明 `flush: 'post'` 选项：

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

后置刷新的 `watchEffect()` 有个更方便的别名 `watchPostEffect()`：

js

    import { watchPostEffect } from 'vue'
    
    watchPostEffect(() => {
      /* 在 Vue 更新后执行 */
    })

`this.$watch()` [​](#this-watch)
--------------------------------

我们也可以使用组件实例的 [`$watch()` 方法](/api/component-instance.html#watch)来命令式地创建一个侦听器：

js

    export default {
      created() {
        this.$watch('question', (newQuestion) => {
          // ...
        })
      }
    }

如果要在特定条件下设置一个侦听器，或者只侦听响应用户交互的内容，这方法很有用。它还允许你提前停止该侦听器。

停止侦听器 [​](#stopping-a-watcher)
------------------------------

用 `watch` 选项或者 `$watch()` 实例方法声明的侦听器，会在宿主组件卸载时自动停止。因此，在大多数场景下，你无需关心怎么停止它。

在少数情况下，你的确需要在组件卸载之前就停止一个侦听器，这时可以调用 `$watch()` API 返回的函数：

js

    const unwatch = this.$watch('foo', callback)
    
    // ...当该侦听器不再需要时
    unwatch()

在 `setup()` 或 `<script setup>` 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，你无需关心怎么停止一个侦听器。

一个关键点是，侦听器必须用**同步**语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。如下方这个例子：

vue

    <script setup>
    import { watchEffect } from 'vue'
    
    // 它会自动停止
    watchEffect(() => {})
    
    // ...这个则不会！
    setTimeout(() => {
      watchEffect(() => {})
    }, 100)
    </script>

要手动停止一个侦听器，请调用 `watch` 或 `watchEffect` 返回的函数：

js

    const unwatch = watchEffect(() => {})
    
    // ...当该侦听器不再需要时
    unwatch()

注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑：

js

    // 需要异步请求得到的数据
    const data = ref(null)
    
    watchEffect(() => {
      if (data.value) {
        // 数据加载后执行某些操作...
      }
    })

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/watchers.md)
模板引用 [​](#template-refs)
========================

虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 `ref` attribute：

template

    <input ref="input">

`ref` 是一个特殊的 attribute，和 `v-for` 章节中提到的 `key` 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。这可能很有用，比如说在组件挂载时将焦点设置到一个 input 元素上，或在一个元素上初始化一个第三方库。

访问模板引用 [​](#accessing-the-refs)
-------------------------------

为了通过组合式 API 获得该模板引用，我们需要声明一个同名的 ref：

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // 声明一个 ref 来存放该元素的引用
    // 必须和模板里的 ref 同名
    const input = ref(null)
    
    onMounted(() => {
      input.value.focus()
    })
    </script>
    
    <template>
      <input ref="input" />
    </template>

如果不使用 `<script setup>`，需确保从 `setup()` 返回 ref：

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

挂载结束后引用都会被暴露在 `this.$refs` 之上：

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

注意，你只可以**在组件挂载后**才能访问模板引用。如果你想在模板中的表达式上访问 `$refs.input``input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还不存在呢！

如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 `null` 的情况：

js

    watchEffect(() => {
      if (input.value) {
        input.value.focus()
      } else {
        // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
      }
    })

也可参考：[为模板引用标注类型](/guide/typescript/composition-api.html#typing-template-refs)

`v-for` 中的模板引用 [​](#refs-inside-v-for)
--------------------------------------

> 需要 v3.2.25 及以上版本

当在 `v-for` 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpFjs1qwzAQhF9l0CU2uDZtb8UOlJ576bXqwaQyCGRJyCsTEHr3rGwnOehnd2e+nSQ+vW/XqMSH6JdL0J6wKIr+LK2evQuEhKCmBs5+u2hJ/SNjCm7GiV0naaW9OLsQjOZrKNrq97XBW4P3v/o51qTmHzUtd8k+e0CrqsZwRpIWGI0KVN0N7TqaqNp59JUuEt2SutKXY5elmimZT9/t2Tk1F+z0ZiTFFdBHs738Mxrry+TCIEWhQ9sttRQl0tEsK6U4HEBKW3LkfDA6o3dst3H77rFM5BtTfm/P)

当在 `v-for` 中使用模板引用时，相应的引用中包含的值是一个数组：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpFjk0KwjAQha/yCC4Uaou6kyp4DuOi2KkGYhKSiQildzdNa4WQmTc/37xeXJwr35HEUdTh7pXjszT0cdYzWuqaqBm9NEDbcLPeTDngiaM3PwVoFfiI667AvsDhNpWHMQzF+L9sNEztH3C3JlhNpbaPNT9VKFeeulAqplfY5D1p0qurxVQSqel0w5QUUEedY8q0wnvbWX+SYgRAmWxIiuSzm4tBinkc6HvkuSE7TIBKq4lZZWhdLZfE8AWp4l3T)

应该注意的是，ref 数组**并不**保证与源数组相同的顺序。

函数模板引用 [​](#function-refs)
--------------------------

除了使用字符串值作名字，`ref` attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：

template

    <input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">

注意我们这里需要使用动态的 `:ref` 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 `el` 参数会是 `null`。你当然也可以绑定一个组件方法而不是内联函数。

组件上的 ref [​](#ref-on-component)
-------------------------------

> 这一小节假设你已了解[组件](/guide/essentials/component-basics.html)的相关知识，或者你也可以先跳过这里，之后再回来看。

模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例：

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    import Child from './Child.vue'
    
    const child = ref(null)
    
    onMounted(() => {
      // child.value 是 <Child /> 组件的实例
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
        // this.$refs.child 是 <Child /> 组件的实例
      }
    }
    </script>
    
    <template>
      <Child ref="child" />
    </template>

如果一个子组件使用的是选项式 API 或没有使用 `<script setup>`，被引用的组件实例和该子组件的 `this` 完全一致，这意味着父组件对子组件的每一个属性和方法都有完全的访问权。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。

有一个例外的情况，使用了 `<script setup>` 的组件是**默认私有**的：一个父组件无法访问到一个使用了 `<script setup>` 的子组件中的任何东西，除非子组件在其中通过 `defineExpose` 宏显式暴露：

vue

    <script setup>
    import { ref } from 'vue'
    
    const a = 1
    const b = ref(2)
    
    // 像 defineExpose 这样的编译器宏不需要导入
    defineExpose({
      a,
      b
    })
    </script>

当父组件通过模板引用获取到了该组件的实例时，得到的实例类型为 `{ a: number, b: number }` (ref 都会自动解包，和一般的实例一样)。

TypeScript 用户请参考：[为组件的模板引用标注类型](/guide/typescript/composition-api.html#typing-component-template-refs)

`expose` 选项可以用于限制对子组件实例的访问：

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

在上面这个例子中，父组件通过模板引用访问到子组件实例后，仅能访问 `publicData` 和 `publicMethod`。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/template-refs.md)
组件基础 [​](#components-basics)
============================

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构：

![组件树](/assets/components.7fbb3771.png)

这和我们嵌套 HTML 元素的方式类似，Vue 实现了自己的组件模型，使我们可以在每个组件内封装自定义内容与逻辑。Vue 同样也能很好地配合原生 Web Component。如果你想知道 Vue 组件与原生 Web Components 之间的关系，可以[阅读此章节](/guide/extras/web-components.html)。

定义一个组件 [​](#defining-a-component)
---------------------------------

当使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的 `.vue` 文件中，这被叫做[单文件组件](/guide/scaling-up/sfc.html) (简称 SFC)：

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

当不使用构建步骤时，一个 Vue 组件以一个包含 Vue 特定选项的 JavaScript 对象来定义：

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
      // 或者 `template: '#my-template-element'`
    }

这里的模板是一个内联的 JavaScript 字符串，Vue 将会在运行时编译它。你也可以使用 ID 选择器来指向一个元素 (通常是原生的 `<template>` 元素)，Vue 将会使用其内容作为模板来源。

上面的例子中定义了一个组件，并在一个 `.js` 文件里默认导出了它自己，但你也可以通过具名导出在一个文件中导出多个组件。

使用组件 [​](#using-a-component)
----------------------------

TIP

我们会在接下来的指引中使用 SFC 语法，无论你是否使用构建步骤，组件相关的概念都是相同的。[示例](/examples/)一节中展示了两种场景中的组件使用情况。

要使用一个子组件，我们需要在父组件中导入它。假设我们把计数器组件放在了一个叫做 `ButtonCounter.vue` 的文件中，这个组件将会以默认导出的形式被暴露给外部。

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

若要将导入的组件暴露给模板，我们需要在 `components` 选项上[注册](/guide/components/registration.html)它。这个组件将会以其注册时的名字作为模板中的标签名。

vue

    <script setup>
    import ButtonCounter from './ButtonCounter.vue'
    </script>
    
    <template>
      <h1>Here is a child component!</h1>
      <ButtonCounter />
    </template>

通过 `<script setup>`，导入的组件都在模板中直接可用。

当然，你也可以全局地注册一个组件，使得它在当前应用中的任何组件上都可以使用，而不需要额外再导入。关于组件的全局注册和局部注册两种方式的利弊，我们放在了[组件注册](/guide/components/registration.html)这一章节中专门讨论。

组件可以被重用任意多次：

template

    <h1>Here is a child component!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />

[在演练场中尝试一下](https://play.vuejs.org/#eNqVUE1LxDAQ/StjLqusNHotcfHj4l8QcontLBtsJiGdiFL6301SdrEqyEJyeG9m3ps3k3gIoXlPKFqhxi7awDtN1gUfGR4Ts6cnn4gxwj56B5tGrtgyutEEoAk/6lCPe5MGhqmwnc9KhMRjuxCwFi3UrCk/JU/uGTC6MBjGglgdbnfPGBFM/s7QJ3QHO/TfxC+UzD21d72zPItU8uQrrsWvnKsT/ZW2N2wur45BI3KKdETlFlmphZsF58j/RgdQr3UJuO8G273daVFFtlstahngxSeoNezBIUzTYgPzDGwdjk1VkYvMj4jzF0nwsyQ=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqVj91KAzEQhV/lmJsqlY3eSlr8ufEVhNys6ZQGNz8kE0GWfXez2SJUsdCLuZiZM9+ZM4qnGLvPQuJBqGySjYxMXOJWe+tiSIznwhz8SyieKWGfgsOqkyfTGbDSXsmFUG9rw+Ti0DPNHavD/faVEqGv5Xr/BXOwww4mVBNPnvOVklXTtKeO8qKhkj++4lb8+fL/mCMS7TEdAy6BtDfBZ65fVgA2s+L67uZMUEC9N0s8msGaj40W7Xa91qKtgbdQ0Ha0gyOM45E+TWDrKHeNIhfMr0DTN4U0me8=)

你会注意到，每当点击这些按钮时，每一个组件都维护着自己的状态，是不同的 `count`。这是因为每当你使用一个组件，就创建了一个新的**实例**。

在单文件组件中，推荐为子组件使用 `PascalCase` 的标签名，以此来和原生的 HTML 元素作区分。虽然原生 HTML 标签名是不区分大小写的，但 Vue 单文件组件是可以在编译中区分大小写的。我们也可以使用 `/>` 来关闭一个标签。

如果你是直接在 DOM 中书写模板 (例如原生 `<template>` 元素的内容)，模板的编译需要遵从浏览器中 HTML 的解析行为。在这种情况下，你应该需要使用 `kebab-case` 形式并显式地关闭这些组件的标签。

template

    <!-- 如果是在 DOM 中书写该模板 -->
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>

请看 [DOM 模板解析注意事项](#dom-template-parsing-caveats)了解更多细节。

传递 props [​](#passing-props)
----------------------------

如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到 props。

Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给博客文章组件一个标题，我们必须在组件的 props 列表上声明它。这里要用到 [`props`](/api/options-state.html#props) 选项[`defineProps`](/api/sfc-script-setup.html#defineprops-defineemits) 宏：

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

当一个值被传递给 prop 时，它将成为该组件实例上的一个属性。该属性的值可以像其他组件属性一样，在模板和组件的 `this` 上下文中访问。

vue

    <!-- BlogPost.vue -->
    <script setup>
    defineProps(['title'])
    </script>
    
    <template>
      <h4>{{ title }}</h4>
    </template>

`defineProps` 是一个仅 `<script setup>` 中可用的编译宏命令，并不需要显式地导入。声明的 props 会自动暴露给模板。`defineProps` 会返回一个对象，其中包含了可以传递给组件的所有 props：

js

    const props = defineProps(['title'])
    console.log(props.title)

TypeScript 用户请参考：[为组件 props 标注类型](/guide/typescript/composition-api.html#typing-component-props)

如果你没有使用 `<script setup>`，props 必须以 `props` 选项的方式声明，props 对象会作为 `setup()` 函数的第一个参数被传入：

js

    export default {
      props: ['title'],
      setup(props) {
        console.log(props.title)
      }
    }

一个组件可以有任意多的 props，默认情况下，所有 prop 都接受任意类型的值。

当一个 prop 被注册后，可以像这样以自定义 attribute 的形式传递数据给它：

template

    <BlogPost title="My journey with Vue" />
    <BlogPost title="Blogging with Vue" />
    <BlogPost title="Why Vue is so fun" />

在实际应用中，我们可能在父组件中会有如下的一个博客文章数组：

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

这种情况下，我们可以使用 `v-for` 来渲染它们：

template

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
     />

[在演练场中尝试一下](https://play.vuejs.org/#eNp9UU1rhDAU/CtDLrawVfpxklRo74We2kPtQdaoaTUJ8bmtiP+9ia6uC2VBgjOZeXnz3sCejAkPnWAx4+3eSkNJqmRjtCU817p81S2hsLpBEEYL4Q1BqoBUid9Jmosi62rC4Nm9dn4lFLXxTGAt5dG482eeUXZ1vdxbQZ1VCwKM0zr3x4KBATKPcbsDSapFjOClx5d2JtHjR1KFN9fTsfbWcXdy+CZKqcqL+vuT/r3qvQqyRatRdMrpF/nn/DNhd7iPR+v8HCDRmDoj4RHxbfyUDjeFto8p8yEh1Rw2ZV4JxN+iP96FMvest8RTTws/gdmQ8HUr7ikere+yHduu62y//y3NWG38xIOpeODyXcoE8OohGYZ5VhhHHjl83sD4B3XgyGI=)

[在演练场中尝试一下](https://play.vuejs.org/#eNp9kU9PhDAUxL/KpBfWBCH+OZEuid5N9qSHrQezFKhC27RlDSF8d1tYQBP1+N78OpN5HciD1sm54yQj1J6M0A6Wu07nTIpWK+MwwPASI0qjWkQejVbpsVHVQVl30ZJ0WQRHjwFMnpT0gPZLi32w2h2DMEAUGW5iOOEaniF66vGuOiN5j0/hajx7B4zxxt5ubIiphKz+IO828qXugw5hYRXKTnqSydcrJmk61/VF/eB4q5s3x8Pk6FJjauDO16Uye0ZCBwg5d2EkkED2wfuLlogibMOTbMpf9tMwP8jpeiMfRdM1l8Tk+/F++Y6Cl0Lyg1Ha7o7R5Bn9WwSg9X0+DPMxMI409fPP1PELlVmwdQ==)

留意我们是如何使用 `v-bind` 来传递动态 prop 值的。当事先不知道要渲染的确切内容时，这一点特别有用。

以上就是目前你需要了解的关于 props 的全部了。如果你看完本章节后还想知道更多细节，我们推荐你深入阅读关于 props 的[完整指引](/guide/components/props.html)。

监听事件 [​](#listening-to-events)
------------------------------

让我们继续关注我们的 `<BlogPost>` 组件。我们会发现有时候它需要与父组件进行交互。例如，要在此处实现 A11y 的需求，将博客文章的文字能够放大，而页面的其余部分仍使用默认字号。

在父组件中，我们可以添加一个 `postFontSize` 数据属性ref 来实现这个效果：

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

在模板中用它来控制所有博客文章的字体大小：

template

    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
       />
    </div>

然后，给 `<BlogPost>` 组件添加一个按钮：

vue

    <!-- BlogPost.vue, 省略了 <script> -->
    <template>
      <div class="blog-post">
        <h4>{{ title }}</h4>
        <button>Enlarge text</button>
      </div>
    </template>

这个按钮目前还没有做任何事情，我们想要点击这个按钮来告诉父组件它应该放大所有博客文章的文字。要解决这个问题，组件实例提供了一个自定义事件系统。父组件可以通过 `v-on` 或 `@` 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样：

template

    <BlogPost
      ...
      @enlarge-text="postFontSize += 0.1"
     />

子组件可以通过调用内置的 [**`$emit`** 方法](/api/component-instance.html#emit)，通过传入事件名称来抛出一个事件：

vue

    <!-- BlogPost.vue, 省略了 <script> -->
    <template>
      <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
      </div>
    </template>

因为有了 `@enlarge-text="postFontSize += 0.1"` 的监听，父组件会接收这一事件，从而更新 `postFontSize` 的值。

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUsFOg0AQ/ZUJMaGNbbHqidCmmujNxMRED9IDhYWuhV0CQy0S/t1ZYIEmaiRkw8y8N/vmMZVxl6aLY8EM23ByP+Mprl3Bk1RmCPexjJ5ljhBmMgFzYemEIpiuAHAFOzXQgIVeESNUKutL4gsmMLfbBPStVFTP1Bl46E2mup4xLDKhI4CUsMR+1zFABTywYTkD5BgzG8ynEj4kkVgJnxz38Eqaut5jxvXAUCIiLqI/8TcD/m1fKhTwHHIJYSEIr+HbnqikPkqBL/yLSMs23eDooNexel8pQJaksYeMIgAn4EewcyxjtnKNCsK+zbgpXILJEnW30bCIN7ZTPcd5KDNqoWjARWufa+iyfWBlV13wYJRvJtWVJhiKGyZiL4vYHNkJO8wgaQVXi6UGr51+Ndq5LBqMvhyrH9eYGePtOVu3n3YozWSqFsBsVJmt3SzhzVaYY2nm9l82+7GX5zTGjlTM1SyNmy5SeX+7rqr2r0NdOxbFXWVXIEoBGz/m/oHIF0rB5Pz6KTV6aBOgEo7Vsn51ov4GgAAf2A==)

[在演练场中尝试一下](https://play.vuejs.org/#eNp1Uk1PwkAQ/SuTxqQYgYp6ahaiJngzITHRA/UAZQor7W7TnaK16X93th8UEuHEvPdm5s3bls5Tmo4POTq+I0yYyZTAIOXpLFAySXVGUEKGEVQQZToBl6XukXqO9XahDbXc2OsAO5FlAIEKtWJByqCBqR01WFqiBLnxYTIEkhSjD+5rAV86zxQW8C1pB+88Aaphr73rtXbNVqrtBeV9r/zYFZYHacBoiHLFykB9Xgfq1NmLVvQmf7E1OGFaeE0anAMXhEkarwhtRWIjD+AbKmKcBk4JUdvtn8+6ARcTu87hLuCf6NJpSoDDKNIZj7BtIFUTUuB0tL/HomXHcnOC18d1TF305COqeJVtcUT4Q62mtzSF2/GkE8/E8b1qh8Ljw/if8I7nOkPn9En/+Ug2GEmFi0ynZrB0azOujbfB54kki5+aqumL8bING28Yr4xh+2vePrI39CnuHmZl2TwwVJXwuG6ZdU6kFTyGsQz33HyFvH5wvvyaB80bACwgvKbrYgLVH979DQc=)

我们可以通过 [`emits`](/api/options-state.html#emits) 选项[`defineEmits`](/api/sfc-script-setup.html#defineprops-defineemits) 宏来声明需要抛出的事件：

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

这声明了一个组件可能触发的所有事件，还可以对事件的参数进行[验证](/guide/components/events.html#validate-emitted-events)。同时，这还可以让 Vue 避免将它们作为原生事件监听器隐式地应用于子组件的根元素。

和 `defineProps` 类似，`defineEmits` 仅可用于 `<script setup>` 之中，并且不需要导入，它返回一个等同于 `$emit` 方法的 `emit` 函数。它可以被用于在组件的 `<script setup>` 中抛出事件，因为此处无法直接访问 `$emit`：

vue

    <script setup>
    const emit = defineEmits(['enlarge-text'])
    
    emit('enlarge-text')
    </script>

TypeScript 用户请参考：[为组件 emits 标注类型](/guide/typescript/composition-api.html#typing-component-emits)

如果你没有在使用 `<script setup>`，你可以通过 `emits` 选项定义组件会抛出的事件。你可以从 `setup()` 函数的第二个参数，即 setup 上下文对象上访问到 `emit` 函数：

js

    export default {
      emits: ['enlarge-text'],
      setup(props, ctx) {
        ctx.emit('enlarge-text')
      }
    }

以上就是目前你需要了解的关于组件自定义事件的所有知识了。如果你看完本章节后还想知道更多细节，请深入阅读[组件事件](/guide/components/events.html)章节。

通过插槽来分配内容 [​](#content-distribution-with-slots)
-----------------------------------------------

一些情况下我们会希望能和 HTML 元素一样向组件中传递内容：

template

    <AlertBox>
      Something bad happened.
    </AlertBox>

我们期望能渲染成这样：

This is an Error for Demo Purposes

Something bad happened.

这可以通过 Vue 的自定义 `<slot>` 元素来实现：

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

如上所示，我们使用 `<slot>` 作为一个占位符，父组件传递进来的内容就会渲染在这里。

[在演练场中尝试一下](https://play.vuejs.org/#eNpVUcFOwzAM/RUTDruwFhCaUCmThsQXcO0lbbKtIo0jx52Kpv07TreWouTynl+en52z2oWQnXqrClXGhtrA28q3XUBi2DlL/IED7Ak7WGX5RKQHq8oDVN4Oo9TYve4dwzmxDcp7bz3HAs5/LpfKyy3zuY0Atl1wmm1CXE5SQeLNX9hZPrb+ALU2cNQhWG9NNkrnLKIt89lGPahlyDTVogVAadoTNE7H+F4pnZTrGodKjUUpRyb0h+0nEdKdRL3CW7GmfNY5ZLiiMhfP/ynG0SL/OAuxwWCNMNncbVqSQyrgfrPZvCVcIxkrxFMYIKJrDZA1i8qatGl72ehLGEY6aGNkNwU8P96YWjffB8Lem/Xkvn9NR6qy+fRd14FSgopvmtQmzTT9Toq9VZdfIpa5jQ==)

[在演练场中尝试一下](https://play.vuejs.org/#eNpVUEtOwzAQvcpgFt3QBBCqUAiRisQJ2GbjxG4a4Xis8aQKqnp37PyUyqv3mZn3fBVH55JLr0Umcl9T6xi85t4VpW07h8RwNJr4Cwc4EXawS9KFiGO70ubpNBcmAmDdOSNZR8T5Yg0IoOQf7DSfW9tAJRWcpXPaapWM1nVt8ObpukY8ie29GHNzAiBX7QVqI73/LIWMzn2FQylGMcieCW1TfBMhPYSoE5zFitLVZ5BhQnkadt6nGKt5/jMafI1Oq8Ak6zW4xrEaDVIGj4fD4SPiCknpQLy4ATyaVgFptVH2JFXb+wze3DDSTioV/iaD1+eZqWT92xD2Vu2X7af3+IJ6G7/UToVigpJnTzwTO42eWDnELsTtH/wUqH4=)

以上就是目前你需要了解的关于插槽的所有知识了。如果你看完本章节后还想知道更多细节，请深入阅读[组件插槽](/guide/components/slots.html)章节。

动态组件 [​](#dynamic-components)
-----------------------------

有些场景会需要在两个组件间来回切换，比如 Tab 界面：

[在演练场中查看示例](https://play.vuejs.org/#eNqNVE2PmzAQ/Ssj9kArLSHbrXpwk1X31mMPvS17cIxJrICNbJMmivLfO/7AEG2jRiDkefP85sNmztlr3y8OA89ItjJMi96+VFJ0vdIWfqqOQ6NVB/midIYj5sn9Sxlrkt9b14RXzXbiMElEO5IAKsmPnljzhg6thbNDmcLdkktrSADAJ/IYlj5MXEc9Z1w8VFNLP30ed2luBy1HC4UHrVH2N90QyJ1kHnUALN1gtLeIQu6juEUMkb8H5sXHqiS+qzK1Cw3Lu76llqMFsKrFAVhLjVlXWc07VWUeR89msFbhhhAWDkWjNJIwPgjp06iy5CV7fgrOOTgKv+XoKIIgpnoGyiymSmZ1wnq9dqJweZ8p/GCtYHtUmBMdLXFitgDnc9ju68b0yxDO1WzRTEcFRLiUJsEqSw3wwi+rMpFDj0psEq5W5ax1aBp7at1y4foWzq5R0hYN7UR7ImCoNIXhWjTfnW+jdM01gaf+CEa1ooYHzvnMVWhaiwEP90t/9HBP61rILQJL3POMHw93VG+FLKzqUYx3c2yjsOaOwNeRO2B8zKHlzBKQWJNH1YHrplV/iiMBOliFILYNK5mOKdSTMviGCTyNojFdTKBoeWNT3s8f/Vpsd7cIV61gjHkXnotR6OqVkJbrQKdsv9VqkDWBh2bpnn8VXaDcHPexE4wFzsojO9eDUOSVPF+65wN/EW7sHRsi5XaFqaexn+EH9Xcpe8zG2eWG3O0/NVzUaeJMk+jGhUXlNPXulw5j8w7t2bi8X32cuf/Vv/wF/SL98A==)

[在演练场中查看示例](https://play.vuejs.org/#eNqNVMGOmzAQ/ZURe2BXCiHbrXpwk1X31mMPvS1V5RiTWAEb2SZNhPLvHdvggLZRE6TIM/P8/N5gpk/e2nZ57HhCkrVhWrQWDLdd+1pI0bRKW/iuGg6VVg2ky9wFDp7G8g9lrIl1H80Bb5rtxfFKMcRzUA+aV3AZQKEEhWRKGgus05pL+5NuYeNwj6mTkT4VckRYujVY63GT17twC6/Fr4YjC3kp5DoPNtEgBpY3bU0txwhgXYojsJoasymSkjeqSHweK9vOWoUbXIC/Y1YpjaDH3wt39hMI6TUUSYSQAz8jArPT5Mj+nmIhC6zpAu1TZlEhmXndbBwpXH5NGL6xWrADMsyaMj1lkAzQ92E7mvYe8nCcM24xZApbL5ECiHCSnP73KyseGnvh6V/XedwS2pVjv3C1ziddxNDYc+2WS9fC8E4qJW1W0UbUZwKGSpMZrkX11dW2SpdcE3huT2BULUp44JxPSpmmpegMgU/tyadbWpZC7jCxwj0v+OfTDdU7ITOrWiTjzTS3Vei8IfB5xHZ4PmqoObMEJHryWXXkuqrVn+xEgHZWYRKbh06uLyv4iQq+oIDnkXSQiwKymlc26n75WNdit78FmLWCMeZL+GKMwlKrhLRcBzhlh51WnSwJPFQr9/zLdIZ007w/O6bR4MQe2bseBJMzer5yzwf8MtzbOzYMkNsOY0+HfoZv1d+lZJGMg8fNqdsfbbio4b77uRVv7I0Li8xxZN1PHWbeHdyTWXc/+zgw/8t/+QsROe9h)

上面的例子是通过 Vue 的 `<component>` 元素和特殊的 `is` attribute 实现的：

template

    <!-- currentTab 改变时组件也改变 -->
    <component :is="currentTab"></component>

template

    <!-- currentTab 改变时组件也改变 -->
    <component :is="tabs[currentTab]"></component>

在上面的例子中，被传给 `:is` 的值可以是以下几种：

*   被注册的组件名
*   导入的组件对象

你也可以使用 `is` attribute 来创建一般的 HTML 元素。

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 [`<KeepAlive>` 组件](/guide/built-ins/keep-alive.html)强制被切换掉的组件仍然保持“存活”的状态。

DOM 模板解析注意事项 [​](#dom-template-parsing-caveats)
-----------------------------------------------

如果你想在 DOM 中直接书写 Vue 模板，Vue 则必须从 DOM 中获取模板字符串。由于浏览器的原生 HTML 解析行为限制，有一些需要注意的事项。

TIP

请注意下面讨论只适用于直接在 DOM 中编写模板的情况。如果你使用来自以下来源的字符串模板，就不需要顾虑这些限制了：

*   单文件组件
*   内联模板字符串 (例如 `template: '...'`)
*   `<script type="text/x-template">`

### 大小写区分 [​](#case-insensitivity)

HTML 标签和属性名称是不分大小写的，所以浏览器会把任何大写的字符解释为小写。这意味着当你使用 DOM 内的模板时，无论是 PascalCase 形式的组件名称、camelCase 形式的 prop 名称还是 v-on 的事件名称，都需要转换为相应等价的 kebab-case (短横线连字符) 形式：

js

    // JavaScript 中的 camelCase
    const BlogPost = {
      props: ['postTitle'],
      emits: ['updatePost'],
      template: `
        <h3>{{ postTitle }}</h3>
      `
    }

template

    <!-- HTML 中的 kebab-case -->
    <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

### 闭合标签 [​](#self-closing-tags)

我们在上面的例子中已经使用过了闭合标签 (self-closing tag)：

template

    <MyComponent />

这是因为 Vue 的模板解析器支持任意标签使用 `/>` 作为标签关闭的标志。

然而在 DOM 模板中，我们必须显式地写出关闭标签：

template

    <my-component></my-component>

这是由于 HTML 只允许[一小部分特殊的元素](https://html.spec.whatwg.org/multipage/syntax.html#void-elements)省略其关闭标签，最常见的就是 `<input>` 和 `<img>`。对于其他的元素来说，如果你省略了关闭标签，原生的 HTML 解析器会认为开启的标签永远没有结束，用下面这个代码片段举例来说：

template

    <my-component /> <!-- 我们想要在这里关闭标签... -->
    <span>hello</span>

将被解析为：

template

    <my-component>
      <span>hello</span>
    </my-component> <!-- 但浏览器会在这里关闭标签 -->

### 元素位置限制 [​](#element-placement-restrictions)

某些 HTML 元素对于放在其中的元素类型有限制，例如 `<ul>`，`<ol>`，`<table>` 和 `<select>`，相应的，某些元素仅在放置于特定元素中时才会显示，例如 `<li>`，`<tr>` 和 `<option>`。

这将导致在使用带有此类限制元素的组件时出现问题。例如：

template

    <table>
      <blog-post-row></blog-post-row>
    </table>

自定义的组件 `<blog-post-row>` 将作为无效的内容被忽略，因而在最终呈现的输出中造成错误。我们可以使用特殊的 [`is` attribute](/api/built-in-special-attributes.html#is) 作为一种解决方案：

template

    <table>
      <tr is="vue:blog-post-row"></tr>
    </table>

TIP

当使用在原生 HTML 元素上时，`is` 的值必须加上前缀 `vue:` 才可以被解析为一个 Vue 组件。这一点是必要的，为了避免和原生的[自定义内置元素](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example)相混淆。

以上就是你需要了解的关于 DOM 模板解析的所有注意事项，同时也是 Vue _基础_部分的所有内容。祝贺你！虽然还有很多需要学习的，但你可以先暂停一下，去用 Vue 做一些有趣的东西，或者研究一些[示例](/examples/)。

完成了本页的阅读后，回顾一下你刚才所学到的知识，如果还想知道更多细节，我们推荐你继续阅读关于组件的完整指引。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/essentials/component-basics.md)
组件注册 [​](#component-registration)
=================================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

一个 Vue 组件在使用前需要先被“注册”，这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册。

全局注册 [​](#global-registration)
------------------------------

我们可以使用 [Vue 应用实例](/guide/essentials/application.html)的 `app.component()` 方法，让组件在当前 Vue 应用中全局可用。

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.component(
      // 注册的名字
      'MyComponent',
      // 组件的实现
      {
        /* ... */
      }
    )

如果使用单文件组件，你可以注册被导入的 `.vue` 文件：

js

    import MyComponent from './App.vue'
    
    app.component('MyComponent', MyComponent)

`app.component()` 方法可以被链式调用：

js

    app
      .component('ComponentA', ComponentA)
      .component('ComponentB', ComponentB)
      .component('ComponentC', ComponentC)

全局注册的组件可以在此应用的任意组件的模板中使用：

template

    <!-- 这在当前应用的任意组件中都可用 -->
    <ComponentA/>
    <ComponentB/>
    <ComponentC/>

所有的子组件也可以使用全局注册的组件，这意味着这三个组件也都可以在_彼此内部_使用。

局部注册 [​](#local-registration)
-----------------------------

全局注册虽然很方便，但有以下几个问题：

1.  全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的 JS 文件中。
    
2.  全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性。
    

相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。它的优点是使组件之间的依赖关系更加明确，并且对 tree-shaking 更加友好。

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：

vue

    <script setup>
    import ComponentA from './ComponentA.vue'
    </script>
    
    <template>
      <ComponentA />
    </template>

如果没有使用 `<script setup>`，则需要使用 `components` 选项来显式注册：

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

局部注册需要使用 `components` 选项：

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

对于每个 `components` 对象里的属性，它们的 key 名就是注册的组件名，而值就是相应组件的实现。上面的例子中使用的是 ES2015 的缩写语法，等价于：

js

    export default {
      components: {
        ComponentA: ComponentA
      }
      // ...
    }

请注意：**局部注册的组件在后代组件中并_不_可用**。在这个例子中，`ComponentA` 注册后仅在当前组件可用，而在任何的子组件或更深层的子组件中都不可用。

组件名格式 [​](#component-name-casing)
---------------------------------

在整个指引中，我们都使用 PascalCase 作为组件名的注册格式，这是因为：

1.  PascalCase 是合法的 JavaScript 标识符。这使得在 JavaScript 中导入和注册组件都很容易，同时 IDE 也能提供较好的自动补全。
    
2.  `<PascalCase />` 在模板中更明显地表明了这是一个 Vue 组件，而不是原生 HTML 元素。同时也能够将 Vue 组件和自定义元素 (web components) 区分开来。
    

在单文件组件和内联字符串模板中，我们都推荐这样做。但是，PascalCase 的标签名在 DOM 模板中是不可用的，详情参见 [DOM 模板解析注意事项](/guide/essentials/component-basics.html#dom-template-parsing-caveats)。

为了方便，Vue 支持将模板中使用 kebab-case 的标签解析为使用 PascalCase 注册的组件。这意味着一个以 `MyComponent` 为名注册的组件，在模板中可以通过 `<MyComponent>` 或 `<my-component>` 引用。这让我们能够使用同样的 JavaScript 组件注册代码来配合不同来源的模板。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/registration.md)
Props [​](#props)
=================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

Props 声明 [​](#props-declaration)
--------------------------------

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribute，我们会在[专门的章节](/guide/components/attrs.html)中讨论)。

在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 宏来声明：

vue

    <script setup>
    const props = defineProps(['foo'])
    
    console.log(props.foo)
    </script>

在没有使用 `<script setup>` 的组件中，prop 可以使用 [`props`](/api/options-state.html#props) 选项来声明：

js

    export default {
      props: ['foo'],
      setup(props) {
        // setup() 接收 props 作为第一个参数
        console.log(props.foo)
      }
    }

注意传递给 `defineProps()` 的参数和提供给 `props` 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。

props 需要使用 [`props`](/api/options-state.html#props) 选项来定义：

js

    export default {
      props: ['foo'],
      created() {
        // props 会暴露到 `this` 上
        console.log(this.foo)
      }
    }

除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

js

    export default {
      props: {
        title: String,
        likes: Number
      }
    }

js

    // 使用 <script setup>
    defineProps({
      title: String,
      likes: Number
    })

js

    // 非 <script setup>
    export default {
      props: {
        title: String,
        likes: Number
      }
    }

对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 `number` 类型，则可使用 `Number` 构造函数作为其声明的值。

对象形式的 props 声明不仅可以一定程度上作为组件的文档，而且如果其他开发者在使用你的组件时传递了错误的类型，也会在浏览器控制台中抛出警告。我们将在本章节稍后进一步讨论有关 [prop 校验](#prop-validation)的更多细节。

TypeScript 用户请参考：[为组件 Props 标注类型](/guide/typescript/options-api.html#typing-component-props)

如果你正在搭配 TypeScript 使用 `<script setup>`，也可以使用类型标注来声明 props：

vue

    <script setup lang="ts">
    defineProps<{
      title?: string
      likes?: number
    }>()
    </script>

更多关于基于类型的声明的细节请参考[组件 props 类型标注](/guide/typescript/composition-api.html#typing-component-props)。

传递 prop 的细节 [​](#prop-passing-details)
--------------------------------------

### Prop 名字格式 [​](#prop-name-casing)

如果一个 prop 的名字很长，应使用 camelCase 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。

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

虽然理论上你也可以在向子组件传递 props 时使用 camelCase 形式 (使用 [DOM 模板](/guide/essentials/component-basics.html#dom-template-parsing-caveats)时例外)，但实际上为了和 HTML attribute 对齐，我们通常会将其写为 kebab-case 形式：

template

    <MyComponent greeting-message="hello" />

对于组件名我们推荐使用 [PascalCase](/guide/components/registration.html#component-name-casing)，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。然而对于传递 props 来说，使用 camelCase 并没有太多优势，因此我们推荐更贴近 HTML 的书写风格。

### 静态 vs. 动态 Prop [​](#static-vs-dynamic-props)

至此，你已经见过了很多像这样的静态值形式的 props：

template

    <BlogPost title="My journey with Vue" />

相应地，还有使用 `v-bind` 或缩写 `:` 来进行动态绑定的 props：

template

    <!-- 根据一个变量的值动态传入 -->
    <BlogPost :title="post.title" />
    
    <!-- 根据一个更复杂表达式的值动态传入 -->
    <BlogPost :title="post.title + ' by ' + post.author.name" />

### 传递不同的值类型 [​](#passing-different-value-types)

在上述的两个例子中，我们只传入了字符串值，但实际上**任何**类型的值都可以作为 props 的值被传递。

#### Number [​](#number)

template

    <!-- 虽然 `42` 是个常量，我们还是需要使用 v-bind -->
    <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
    <BlogPost :likes="42" />
    
    <!-- 根据一个变量的值动态传入 -->
    <BlogPost :likes="post.likes" />

#### Boolean [​](#boolean)

template

    <!-- 仅写上 prop 但不传值，会隐式转换为 `true` -->
    <BlogPost is-published />
    
    <!-- 虽然 `false` 是静态的值，我们还是需要使用 v-bind -->
    <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
    <BlogPost :is-published="false" />
    
    <!-- 根据一个变量的值动态传入 -->
    <BlogPost :is-published="post.isPublished" />

#### Array [​](#array)

template

    <!-- 虽然这个数组是个常量，我们还是需要使用 v-bind -->
    <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
    <BlogPost :comment-ids="[234, 266, 273]" />
    
    <!-- 根据一个变量的值动态传入 -->
    <BlogPost :comment-ids="post.commentIds" />

#### Object [​](#object)

template

    <!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
    <!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
    <BlogPost
      :author="{
        name: 'Veronica',
        company: 'Veridian Dynamics'
      }"
     />
    
    <!-- 根据一个变量的值动态传入 -->
    <BlogPost :author="post.author" />

### 使用一个对象绑定多个 prop [​](#binding-multiple-properties-using-an-object)

如果你想要将一个对象的所有属性都当作 props 传入，你可以使用[没有参数的 `v-bind`](/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes)，即只使用 `v-bind` 而非 `:prop-name`。例如，这里有一个 `post` 对象：

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

以及下面的模板：

template

    <BlogPost v-bind="post" />

而这实际上等价于：

template

    <BlogPost :id="post.id" :title="post.title" />

单向数据流 [​](#one-way-data-flow)
-----------------------------

所有的 props 都遵循着**单向绑定**原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。

另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你**不应该**在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：

js

    const props = defineProps(['foo'])
    
    // ❌ 警告！prop 是只读的！
    props.foo = 'bar'

js

    export default {
      props: ['foo'],
      created() {
        // ❌ 警告！prop 是只读的！
        this.foo = 'bar'
      }
    }

导致你想要更改一个 prop 的需求通常来源于以下两种场景：

1.  **prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性**。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：
    
    js
    
        const props = defineProps(['initialCounter'])
        
        // 计数器只是将 props.initialCounter 作为初始值
        // 像下面这样做就使 prop 和后续更新无关了
        const counter = ref(props.initialCounter)
    
    js
    
        export default {
          props: ['initialCounter'],
          data() {
            return {
              // 计数器只是将 this.initialCounter 作为初始值
              // 像下面这样做就使 prop 和后续更新无关了
              counter: this.initialCounter
            }
          }
        }
    
2.  **需要对传入的 prop 值做进一步的转换**。在这种情况中，最好是基于该 prop 值定义一个计算属性：
    
    js
    
        const props = defineProps(['size'])
        
        // 该 prop 变更时计算属性也会自动更新
        const normalizedSize = computed(() => props.size.trim().toLowerCase())
    
    js
    
        export default {
          props: ['size'],
          computed: {
            // 该 prop 变更时计算属性也会自动更新
            normalizedSize() {
              return this.size.trim().toLowerCase()
            }
          }
        }
    

### 更改对象 / 数组类型的 props [​](#mutating-object-array-props)

当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然**可以**更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动，虽然可能生效，但有很大的性能损耗，比较得不偿失。

这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该[抛出一个事件](/guide/components/events.html)来通知父组件做出改变。

Prop 校验 [​](#prop-validation)
-----------------------------

Vue 组件可以更细致地声明对传入的 props 的校验要求。比如我们上面已经看到过的类型声明，如果传入的值不满足类型要求，Vue 会在浏览器控制台中抛出警告来提醒使用者。这在开发给其他开发者使用的组件时非常有用。

要声明对 props 的校验，你可以向 `defineProps()` 宏`props` 选项提供一个带有 props 校验选项的对象，例如：

js

    defineProps({
      // 基础类型检查
      // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
      propA: Number,
      // 多种可能的类型
      propB: [String, Number],
      // 必传，且为 String 类型
      propC: {
        type: String,
        required: true
      },
      // Number 类型的默认值
      propD: {
        type: Number,
        default: 100
      },
      // 对象类型的默认值
      propE: {
        type: Object,
        // 对象或数组的默认值
        // 必须从一个工厂函数返回。
        // 该函数接收组件所接收到的原始 prop 作为参数。
        default(rawProps) {
          return { message: 'hello' }
        }
      },
      // 自定义类型校验函数
      propF: {
        validator(value) {
          // The value must match one of these strings
          return ['success', 'warning', 'danger'].includes(value)
        }
      },
      // 函数类型的默认值
      propG: {
        type: Function,
        // 不像对象或数组的默认，这不是一个
        // 工厂函数。这会是一个用来作为默认值的函数
        default() {
          return 'Default function'
        }
      }
    })

TIP

`defineProps()` 宏中的参数**不可以访问 `<script setup>` 中定义的其他变量**，因为在编译时整个表达式都会被移到外部的函数中。

js

    export default {
      props: {
        // 基础类型检查
        //（给出 `null` 和 `undefined` 值则会跳过任何类型检查）
        propA: Number,
        // 多种可能的类型
        propB: [String, Number],
        // 必传，且为 String 类型
        propC: {
          type: String,
          required: true
        },
        // Number 类型的默认值
        propD: {
          type: Number,
          default: 100
        },
        // 对象类型的默认值
        propE: {
          type: Object,
          // 对象或者数组应当用工厂函数返回。
          // 工厂函数会收到组件所接收的原始 props
          // 作为参数
          default(rawProps) {
            return { message: 'hello' }
          }
        },
        // 自定义类型校验函数
        propF: {
          validator(value) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger'].includes(value)
          }
        },
        // 函数类型的默认值
        propG: {
          type: Function,
          // 不像对象或数组的默认，这不是一个
          // 工厂函数。这会是一个用来作为默认值的函数
          default() {
            return 'Default function'
          }
        }
      }
    }

一些补充细节：

*   所有 prop 默认都是可选的，除非声明了 `required: true`。
    
*   除 `Boolean` 外的未传递的可选 prop 将会有一个默认值 `undefined`。
    
*   `Boolean` 类型的未传递 prop 将被转换为 `false`。这可以通过为它设置 `default` 来更改——例如：设置为 `default: undefined` 将与非布尔类型的 prop 的行为保持一致。
    
*   如果声明了 `default` 值，那么在 prop 的值被解析为 `undefined` 时，无论 prop 是未被传递还是显式指明的 `undefined`，都会改为 `default` 值。
    

当 prop 的校验失败后，Vue 会抛出一个控制台警告 (在开发模式下)。

如果使用了[基于类型的 prop 声明](/api/sfc-script-setup.html#typescript-only-features) ，Vue 会尽最大努力在运行时按照 prop 的类型标注进行编译。举例来说，`defineProps<{ msg: string }>` 会被编译为 `{ msg: { type: String, required: true }}`。

注意

注意 prop 的校验是在组件实例被创建**之前**，所以实例的属性 (比如 `data`、`computed` 等) 将在 `default` 或 `validator` 函数中不可用。

### 运行时类型检查 [​](#runtime-type-checks)

校验选项中的 `type` 可以是下列这些原生构造函数：

*   `String`
*   `Number`
*   `Boolean`
*   `Array`
*   `Object`
*   `Date`
*   `Function`
*   `Symbol`

另外，`type` 也可以是自定义的类或构造函数，Vue 将会通过 `instanceof` 来检查类型是否匹配。例如下面这个类：

js

    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
      }
    }

你可以将其作为一个 prop 的类型：

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

Vue 会通过 `instanceof Person` 来校验 `author` prop 的值是否是 `Person` 类的一个实例。

Boolean 类型转换 [​](#boolean-casting)
----------------------------------

为了更贴近原生 boolean attributes 的行为，声明为 `Boolean` 类型的 props 有特别的类型转换规则。以带有如下声明的 `<MyComponent>` 组件为例：

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

该组件可以被这样使用：

template

    <!-- 等同于传入 :disabled="true" -->
    <MyComponent disabled />
    
    <!-- 等同于传入 :disabled="false" -->
    <MyComponent />

当一个 prop 被声明为允许多种类型时，例如：

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

无论声明类型的顺序如何，`Boolean` 类型的特殊转换规则都会被应用。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/props.md)
组件事件 [​](#component-events)
===========================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

触发与监听事件 [​](#emitting-and-listening-to-events)
----------------------------------------------

在组件的模板表达式中，可以直接使用 `$emit` 方法触发自定义事件 (例如：在 `v-on` 的处理函数中)：

template

    <!-- MyComponent -->
    <button @click="$emit('someEvent')">click me</button>

`$emit()` 方法在组件实例上也同样以 `this.$emit()` 的形式可用：

js

    export default {
      methods: {
        submit() {
          this.$emit('someEvent')
        }
      }
    }

父组件可以通过 `v-on` (缩写为 `@`) 来监听事件：

template

    <MyComponent @some-event="callback" />

同样，组件的事件监听器也支持 `.once` 修饰符：

template

    <MyComponent @some-event.once="callback" />

像组件与 prop 一样，事件的名字也提供了自动的格式转换。注意这里我们触发了一个以 camelCase 形式命名的事件，但在父组件中可以使用 kebab-case 形式来监听。与 [prop 大小写格式](/guide/components/props.html#prop-name-casing)一样，在模板中我们也推荐使用 kebab-case 形式来编写监听器。

TIP

和原生 DOM 事件不一样，组件触发的事件**没有冒泡机制**。你只能监听直接子组件触发的事件。平级组件或是跨越多层嵌套的组件间通信，应使用一个外部的事件总线，或是使用一个[全局状态管理方案](/guide/scaling-up/state-management.html)。

事件参数 [​](#event-arguments)
--------------------------

有时候我们会需要在触发事件时附带一个特定的值。举例来说，我们想要 `<BlogPost>` 组件来管理文本会缩放得多大。在这个场景下，我们可以给 `$emit` 提供一个额外的参数：

template

    <button @click="$emit('increaseBy', 1)">
      Increase by 1
    </button>

然后我们在父组件中监听事件，我们可以先简单写一个内联的箭头函数作为监听器，此函数会接收到事件附带的参数：

template

    <MyButton @increase-by="(n) => count += n" />

或者，也可以用一个组件方法来作为事件处理函数：

template

    <MyButton @increase-by="increaseCount" />

该方法也会接收到事件所传递的参数：

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

所有传入 `$emit()` 的额外参数都会被直接传向监听器。举例来说，`$emit('foo', 1, 2, 3)` 触发后，监听器函数将会收到这三个参数值。

声明触发的事件 [​](#declaring-emitted-events)
--------------------------------------

组件可以显式地通过 [`defineEmits()`](/api/sfc-script-setup.html#defineprops-defineemits) 宏[`emits`](/api/options-state.html#emits) 选项来声明它要触发的事件：

vue

    <script setup>
    defineEmits(['inFocus', 'submit'])
    </script>

我们在 `<template>` 中使用的 `$emit` 方法不能在组件的 `<script setup>` 部分中使用，但 `defineEmits()` 会返回一个相同作用的函数供我们使用：

vue

    <script setup>
    const emit = defineEmits(['inFocus', 'submit'])
    
    function buttonClick() {
      emit('submit')
    }
    </script>

`defineEmits()` 宏**不能**在子函数中使用。如上所示，它必须直接放置在 `<script setup>` 的顶级作用域下。

如果你显式地使用了 `setup` 函数而不是 `<script setup>`，则事件需要通过 [`emits`](/api/options-state.html#emits) 选项来定义，`emit` 函数也被暴露在 `setup()` 的上下文对象上：

js

    export default {
      emits: ['inFocus', 'submit'],
      setup(props, ctx) {
        ctx.emit('submit')
      }
    }

与 `setup()` 上下文对象中的其他属性一样，`emit` 可以安全地被解构：

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

这个 `emits` 选项还支持对象语法，它允许我们对触发事件的参数进行验证：

vue

    <script setup>
    const emit = defineEmits({
      submit(payload) {
        // 通过返回值为 `true` 还是为 `false` 来判断
        // 验证是否通过
      }
    })
    </script>

如果你正在搭配 TypeScript 使用 `<script setup>`，也可以使用纯类型标注来声明触发的事件：

vue

    <script setup lang="ts">
    const emit = defineEmits<{
      (e: 'change', id: number): void
      (e: 'update', value: string): void
    }>()
    </script>

TypeScript 用户请参考：[如何为组件所抛出事件标注类型](/guide/typescript/composition-api.html#typing-component-emits)

js

    export default {
      emits: {
        submit(payload) {
          // 通过返回值为 `true` 还是为 `false` 来判断
          // 验证是否通过
        }
      }
    }

TypeScript 用户请参考：[如何为组件所抛出的事件标注类型](/guide/typescript/options-api.html#typing-component-emits)。

尽管事件声明是可选的，我们还是推荐你完整地声明所有要触发的事件，以此在代码中作为文档记录组件的用法。同时，事件声明能让 Vue 更好地将事件和[透传 attribute](/guide/components/attrs.html#v-on-listener-inheritance) 作出区分，从而避免一些由第三方代码触发的自定义 DOM 事件所导致的边界情况。

TIP

如果一个原生事件的名字 (例如 `click`) 被定义在 `emits` 选项中，则监听器只会监听组件触发的 `click` 事件而不会再响应原生的 `click` 事件。

事件校验 [​](#events-validation)
----------------------------

和对 props 添加类型校验的方式类似，所有触发的事件也可以使用对象形式来描述。

要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 `this.$emit``emit` 的内容，返回一个布尔值来表明事件是否合法。

vue

    <script setup>
    const emit = defineEmits({
      // 没有校验
      click: null,
    
      // 校验 submit 事件
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
        // 没有校验
        click: null,
    
        // 校验 submit 事件
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

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/events.md)
组件 v-model [​](#component-v-model)
==================================

`v-model` 可以在组件上使用以实现双向绑定。

首先让我们回忆一下 `v-model` 在原生元素上的用法：

template

    <input v-model="searchText" />

在代码背后，模板编译器会对 `v-model` 进行更冗长的等价展开。因此上面的代码其实等价于下面这段：

template

    <input
      :value="searchText"
      @input="searchText = $event.target.value"
    />

而当使用在一个组件上时，`v-model` 会被展开为如下的形式：

template

    <CustomInput
      :modelValue="searchText"
      @update:modelValue="newValue => searchText = newValue"
    />

要让这个例子实际工作起来，`<CustomInput>` 组件内部需要做两件事：

1.  将内部原生 `<input>` 元素的 `value` attribute 绑定到 `modelValue` prop
2.  当原生的 `input` 事件触发时，触发一个携带了新值的 `update:modelValue` 自定义事件

这里是相应的代码：

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

现在 `v-model` 可以在这个组件上正常工作了：

template

    <CustomInput v-model="searchText" />

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkctqwzAQRX9lEAEn4Np744aWrvoD3URdiHiSGvRCHpmC8b93JDfGKYGCkJjXvTrSJF69r8aIohHtcA69p6O0vfEuELzFgZx5tz4SXIIzUFT1JpfGCmmlxe/c3uFFRU0wSQtwdqxh0dLQwHSnNJep3ilS+8PSCxCQYrC3CMDgMKgrNlB8odaOXVJ2TgdvvNp6vSwHhMZrRcgRQLs1G5+M61A/S/ErKQXUR5immwXMWW1VEKX4g3j3Mo9QfXCeKU9FtvpQmp/lM0Oi6RP/qYieebHZNvyL0acLLODNmGYSxCogxVJ6yW1c2iWz/QOnEnY48kdUpMIVGSllD8t8zVZb+PkHqPG4iw==)

[在演练场中尝试一下](https://play.vuejs.org/#eNp9j81qwzAQhF9lEQE7kNp344SW0kNvPfVS9WDidSrQH9LKF+N37yoOxoSQm7QzO9/sJN68r8aEohFtPAflCSJS8idplfEuEEwQcIAZhuAMFGwtVuk9RXLm0/pEN7mqN7Ocy2YAac/ORgKDMXYXhGOOLIs/1NoVe2nbekEzlD+ExuuOkH8A7ZYxvhjXoz5KcUuSAuoTTNOaPM85bU0QB3HX58GdPQ7K4ldwPpY/xZXw3Wmu/svVFvHDKMpi8j3HNneeZ/VVBucXQDPmjVx+XZdikV6vNpZ2yKTyAecAOxzRUkVduCCfkqf7Zb9m1Pbo+R9ZkqZn)

另一种在组件内实现 `v-model` 的方式是使用一个可写的，同时具有 getter 和 setter 的 `computed` 属性。`get` 方法需返回 `modelValue` prop，而 `set` 方法需触发相应的事件：

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

`v-model` 的参数 [​](#v-model-arguments)
-------------------------------------

默认情况下，`v-model` 在组件上都是使用 `modelValue` 作为 prop，并以 `update:modelValue` 作为对应的事件。我们可以通过给 `v-model` 指定一个参数来更改这些名字：

template

    <MyComponent v-model:title="bookTitle" />

在这个例子中，子组件应声明一个 `title` prop，并通过触发 `update:title` 事件更新父组件值：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp9kE1rwzAMhv+KMIW00DXsGtKyMXYc7D7vEBplM8QfOHJoCfnvk+1QsjJ2svVKevRKk3h27jAGFJWoh7NXjmBACu4kjdLOeoIJPHYwQ+ethoJLi1vq7fpi+WfQ0JI+lCstcrkYQJqzNQMBKeoRjhG4LcYHbVvsofFfQUcCXhrteix20tRl9sIuOCBkvSHkCKD+fjxN04Ka57rkOOlrMwu7SlVHKdIrBZRcWpc3ntiLO7t/nKHFThl899YN248ikYpP9pj1V60o6sG1TMwDU/q/FZRxgeIPgK4uGcQLSZGlamz6sHKd1afUxOoGeeT298A9bHCMKxBfE3mTSNjl1vud5x8qNa76)

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

[在演练场中尝试一下](https://play.vuejs.org/#eNqFUNFqwzAM/BVhCm6ha9hryMrGnvcFdR9Mo26B2DGuHFJC/n2yvZakDAohtuTTne5G8eHcrg8oSlFdTr5xtFe2Ma7zBF/Xz45vFi3B2XcG5K6Y9eKYVFZZHBK8xrMOLcGoLMDphrqUMC6Ypm18rzXp9SZjATxS8PZWAVBDLZYg+xfT1diC9t/BxGEctHFtlI2wKR78468q7ttzQcgoTcgVQPXzuh/HzAnTVBVcp/58qz+lMqHelEinElAwtCrufGIrHhJYBPdfEs53jkM4yEQpj8k+miYmc5DBcRKYZeXxqZXGukDZPF1dWhQHUiK3yl63YbZ97r6nIe6uoup6KbmFFfbRCnHGyI4iwyaPPnqffgGMlsEM)

多个 `v-model` 绑定 [​](#multiple-v-model-bindings)
-----------------------------------------------

利用刚才在 [`v-model` 参数](#v-model-arguments)小节中学到的指定参数与事件名的技巧，我们可以在单个组件实例上创建多个 `v-model` 双向绑定。

组件上的每一个 `v-model` 都会同步不同的 prop，而无需额外的选项：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUc1qwzAMfhVjCk6hTdg1pGWD7bLDGIydlh1Cq7SGxDaOEjaC332yU6cdFNpLsPRJ348y8idj0qEHnvOi21lpkHWAvdmWSrZGW2Qjs1Azx2qrWyZoVMzQZwf2rWrhhKVZbHhGGivVTqsOWS0tfTeeKBGv+qjEMkJNdUaeNXigyCYjZIEKhNY0FQJVjBXHh+04nvicY/QOBM4VGUFhJHrwBWPDutV7aPKwslbU35Q8FCX/P+GJ4oB/T3hGpEU2m+ArfpnxytX2UEsF71abLhk9QxDzCzn7QCvVYeW7XuGyWSpH0eP6SyuxS75Eb/akOpn302LFYi8SiO8bJ5PK9DhFxV/j0yH8zOnzoWr6+SbhbifkMSwSsgByk1zzsoABFKZY2QNgGpiW57Pdrx2z3JCeI99Svvxh7g8muf2x)

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

[在演练场中尝试一下](https://play.vuejs.org/#eNqNkk1rg0AQhv/KIAETSJRexYYWeuqhl9JTt4clmSSC7i7rKCnif+/ObtYkELAiujPzztejQ/JqTNZ3mBRJ2e5sZWgrVNUYbQm+WrQfskE4WN1AmuXRwQmpUELh2Qv3eJBdTTAIBbDTLluhoraA4VpjXHNwL0kuV0EIYJE6q6IFcKhsSwWk7/qkUq/nq5be+aa5JztGfrmHu8t8GtoZhI2pJaGzAMrT03YYQk0YR3BnruSOZe5CXhKnC3X7TaP3WBc+ZaOc/1kk3hDJvYILRQGfQzx3Rct8GiJZJ7fA7gg/AmesNszMrUIXFpxbwCfZSh09D0Hc7tbN6sAWm4qZf6edcZgxrMHSdA3RF7PTn1l8lTIdhbXp1/CmhOeJRNHLupv4eIaXyItPdJEFD7R8NM0Ce/d/ZCTtESnzlVZXhP/vHbeZaT0tPdf59uONfx7mDVM=)

处理 `v-model` 修饰符 [​](#handling-v-model-modifiers)
-------------------------------------------------

在学习输入绑定时，我们知道了 `v-model` 有一些[内置的修饰符](/guide/essentials/forms.html#modifiers)，例如 `.trim`，`.number` 和 `.lazy`。在某些场景下，你可能想要一个自定义组件的 `v-model` 支持自定义的修饰符。

我们来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

template

    <MyComponent v-model.capitalize="myText" />

组件的 `v-model` 上所添加的修饰符，可以通过 `modelModifiers` prop 在组件内访问到。在下面的组件中，我们声明了 `modelModifiers` 这个 prop，它的默认值是一个空对象：

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

注意这里组件的 `modelModifiers` prop 包含了 `capitalize` 且其值为 `true`，因为它在模板中的 `v-model` 绑定 `v-model.capitalize="myText"` 上被使用了。

有了这个 prop，我们就可以检查 `modelModifiers` 对象的键，并编写一个处理函数来改变抛出的值。在下面的代码里，我们就是在每次 `<input />` 元素触发 `input` 事件时将值的首字母大写：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp9Us1Og0AQfpUJF5ZYqV4JNTaNxyYmVi/igdCh3QR2N7tDIza8u7NLpdU0nmB+v5/ZY7Q0Jj10GGVR7iorDYFD6sxDoWRrtCU4gsUaBqitbiHm1ngqrfuV5j+Fik7ldH6R83u5GaBQlVaOoO03+Emw8BtFHCeFyucjKMNxQNiapiTkCGCzlw6kMh1BVRpJZSO/0AEe0Pa0l2oHve6AYdBmvj+/ZHO4bfUWm/Q8uSiiEb6IYM4A+XxCi2bRH9ZX3BgVGKuNYwFbrKXCZx+Jo0cPcG9l02EGL2SZ3mxKr/VW1hKty9hMniy7hjIQCSweQByHBIZCDWzGDwi20ps0Yjxx4MR73Jktc83OOPFHGKk7VZHUKkyFgsAEAqcG2Qif4WWYUml3yOp8wldlDSLISX+TvPDstAemLeGbVvvSLkncJSnpV2PQrkqHLOfmVHeNrFDcMz3w0iBQE1cUzMYBbuS2f55CPj4D6o0/I41HzMKsP+u0kLOPoZWzkx1X7j18A8s0DEY=)

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

[在演练场中尝试一下](https://play.vuejs.org/#eNqFks1qg0AQgF9lkIKGpqa9iikNOefUtJfaw6KTZEHdZR1DbPDdO7saf0qgIq47//PNXL2N1uG5Ri/y4io1UtNrUspCK0Owa7aK/0osCQ5GFeCHq4nMuvlJCZCUeHEOGR5EnRNcrTS92VURXGex2qXVZ4JEsOhsAQxSbcrbDaBo9nihCHyXAaC1B3/4jVdDoXwhLHQuCPkGsD/JCmSpa4JUaEkilz9YAZ7RNHSS5REaVQPXgCay9vG0rPNToTLMw9FznXhdHYkHK04Qr4Zs3tL7g2JG8B4QbZS2LLqGXK5PkdcYwTsZrs1R6RU7lcmDRDPaM7AuWARMbf0KwbVdTNk4dyyk5f3l15r5YjRm8b+dQYF0UtkY1jo4fYDDLAByZBxWCmvAkIQ5IvdoBTcLeYCAiVbhvNwJvEk4GIK5M0xPwmwoeF6EpD60RrMVFXJXj72+ymWKwUvfXt+gfVzGB1tzcKfDZec+o/LfxsTdtlCj7bSpm3Xk4tjpD8FZ+uZMWTowu7MW7S+CWR77)

对于又有参数又有修饰符的 `v-model` 绑定，生成的 prop 名将是 `arg + "Modifiers"`。举例来说：

template

    <MyComponent v-model:title.capitalize="myText">

相应的声明应该是：

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

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/v-model.md)
透传 Attributes [​](#fallthrough-attributes)
==========================================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

Attributes 继承 [​](#attribute-inheritance)
-----------------------------------------

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 [props](./props.html) 或 [emits](./events.html#defining-custom-events) 的 attribute 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。举例来说，假如我们有一个 `<MyButton>` 组件，它的模板长这样：

template

    <!-- <MyButton> 的模板 -->
    <button>click me</button>

一个父组件使用了这个组件，并且传入了 `class`：

template

    <MyButton class="large" />

最后渲染出的 DOM 结果是：

html

    <button class="large">click me</button>

这里，`<MyButton>` 并没有将 `class` 声明为一个它所接受的 prop，所以 `class` 被视作透传 attribute，自动透传到了 `<MyButton>` 的根元素上。

### 对 `class` 和 `style` 的合并 [​](#class-and-style-merging)

如果一个子组件的根元素已经有了 `class` 或 `style` attribute，它会和从父组件上继承的值合并。如果我们将之前的 `<MyButton>` 组件的模板改成这样：

template

    <!-- <MyButton> 的模板 -->
    <button class="btn">click me</button>

则最后渲染出的 DOM 结果会变成：

html

    <button class="btn large">click me</button>

### `v-on` 监听器继承 [​](#v-on-listener-inheritance)

同样的规则也适用于 `v-on` 事件监听器：

template

    <MyButton @click="onClick" />

`click` 监听器会被添加到 `<MyButton>` 的根元素，即那个原生的 `<button>` 元素之上。当原生的 `<button>` 被点击，会触发父组件的 `onClick` 方法。同样的，如果原生 `button` 元素自身也通过 `v-on` 绑定了一个事件监听器，则这个监听器和从父组件继承的监听器都会被触发。

### 深层组件继承 [​](#nested-component-inheritance)

有些情况下一个组件会在根节点上渲染另一个组件。例如，我们重构一下 `<MyButton>`，让它在根节点上渲染 `<BaseButton>`：

template

    <!-- <MyButton/> 的模板，只是渲染另一个组件 -->
    <BaseButton />

此时 `<MyButton>` 接收的透传 attribute 会直接继续传给 `<BaseButton>`。

请注意：

1.  透传的 attribute 不会包含 `<MyButton>` 上声明过的 props 或是针对 `emits` 声明事件的 `v-on` 侦听函数，换句话说，声明过的 props 和侦听函数被 `<MyButton>`“消费”了。
    
2.  透传的 attribute 若符合声明，也可以作为 props 传入 `<BaseButton>`。
    

禁用 Attributes 继承 [​](#disabling-attribute-inheritance)
------------------------------------------------------

如果你**不想要**一个组件自动地继承 attribute，你可以在组件选项中设置 `inheritAttrs: false`。

如果你使用了 `<script setup>`，你需要一个额外的 `<script>` 块来书写这个选项声明：

vue

    <script>
    // 使用普通的 <script> 来声明选项
    export default {
      inheritAttrs: false
    }
    </script>
    
    <script setup>
    // ...setup 部分逻辑
    </script>

最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 `inheritAttrs` 选项为 `false`，你可以完全控制透传进来的 attribute 被如何使用。

这些透传进来的 attribute 可以在模板的表达式中直接用 `$attrs` 访问到。

template

    <span>Fallthrough attribute: {{ $attrs }}</span>

这个 `$attrs` 对象包含了除组件所声明的 `props` 和 `emits` 之外的所有其他 attribute，例如 `class`，`style`，`v-on` 监听器等等。

有几点需要注意：

*   和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 `foo-bar` 这样的一个 attribute 需要通过 `$attrs['foo-bar']` 来访问。
    
*   像 `@click` 这样的一个 `v-on` 事件监听器将在此对象下被暴露为一个函数 `$attrs.onClick`。
    

现在我们要再次使用一下[之前小节](#attribute-inheritance)中的 `<MyButton>` 组件例子。有时候我们可能为了样式，需要在 `<button>` 元素外包装一层 `<div>`：

template

    <div class="btn-wrapper">
      <button class="btn">click me</button>
    </div>

我们想要所有像 `class` 和 `v-on` 监听器这样的透传 attribute 都应用在内部的 `<button>` 上而不是外层的 `<div>` 上。我们可以通过设定 `inheritAttrs: false` 和使用 `v-bind="$attrs"` 来实现：

template

    <div class="btn-wrapper">
      <button class="btn" v-bind="$attrs">click me</button>
    </div>

小提示：[没有参数的 `v-bind`](/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes) 会将一个对象的所有属性都作为 attribute 应用到目标元素上。

多根节点的 Attributes 继承 [​](#attribute-inheritance-on-multiple-root-nodes)
----------------------------------------------------------------------

和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 `$attrs` 没有被显式绑定，将会抛出一个运行时警告。

template

    <CustomLayout id="custom-layout" @click="changeValue" />

如果 `<CustomLayout>` 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。

template

    <header>...</header>
    <main>...</main>
    <footer>...</footer>

如果 `$attrs` 被显式绑定，则不会有警告：

template

    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>

在 JavaScript 中访问透传 Attributes [​](#accessing-fallthrough-attributes-in-javascript)
----------------------------------------------------------------------------------

如果需要，你可以在 `<script setup>` 中使用 `useAttrs()` API 来访问一个组件的所有透传 attribute：

vue

    <script setup>
    import { useAttrs } from 'vue'
    
    const attrs = useAttrs()
    </script>

如果没有使用 `<script setup>`，`attrs` 会作为 `setup()` 上下文对象的一个属性暴露：

js

    export default {
      setup(props, ctx) {
        // 透传 attribute 被暴露为 ctx.attrs
        console.log(ctx.attrs)
      }
    }

需要注意的是，虽然这里的 `attrs` 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 prop。或者你也可以使用 `onUpdated()` 使得在每次更新时结合最新的 `attrs` 执行副作用。

如果需要，你可以通过 `$attrs` 这个实例属性来访问组件的所有透传 attribute：

js

    export default {
      created() {
        console.log(this.$attrs)
      }
    }

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/attrs.md)
插槽 Slots [​](#slots)
====================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

插槽内容与出口 [​](#slot-content-and-outlet)
-------------------------------------

在之前的章节中，我们已经了解到组件能够接收任意类型的 JavaScript 值作为 props，但组件要如何接收模板内容呢？在某些场景中，我们可能想要为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段。

举例来说，这里有一个 `<FancyButton>` 组件，可以像这样使用：

template

    <FancyButton>
      Click me! <!-- 插槽内容 -->
    </FancyButton>

而 `<FancyButton>` 的模板是这样的：

template

    <button class="fancy-btn">
      <slot></slot> <!-- 插槽出口 -->
    </button>

`<slot>` 元素是一个**插槽出口** (slot outlet)，标示了父元素提供的**插槽内容** (slot content) 将在哪里被渲染。

![插槽图示](/assets/slots.dbdaf1e8.png)

最终渲染出的 DOM 是这样：

html

    <button class="fancy-btn">Click me!</button>

[在演练场中尝试一下](https://play.vuejs.org/#eNpdUdlqAyEU/ZVbQ0kLMdNsXabTQFvoV8yLcRkkjopLSQj596oTwqRvnuM9y9UT+rR2/hs5qlHjqZM2gOch2m2rZW+NC/BDND1+xRCMBuFMD9N5NeKyeNrqphrUSZdA4L1VJPCEAJrRdCEAvpWke+g5NHcYg1cmADU6cB0A4zzThmYckqimupqiGfpXILe/zdwNhaki3n+0SOR5vAu6ReU++efUajtqYGJQ/FIg5w8Wt9FlOx+OKh/nV1c4ZVNqlHE1TIQQ7xnvCN13zkTNalBSc+Jw5wiTac2H1WLDeDeDyXrJVm9LWG7uE3hev3AhHge1cYwnO200L4QljEnd1bCxB1g82UNhe+I6qQs5kuGcE30NrxeaRudzOWtkemeXuHP5tLIKOv8BN+mw3w==)

[在演练场中尝试一下](https://play.vuejs.org/#eNpdUdtOwzAM/RUThAbSurIbl1ImARJf0ZesSapoqROlKdo07d9x0jF1SHmIT+xzcY7sw7nZTy9Zwcqu9tqFTYW6ddYH+OZYHz77ECyC8raFySwfYXFsUiFAhXKfBoRUvDcBjhGtLbGgxNAVcLziOlVIp8wvelQE2TrDg6QKoBx1JwDgy+h6B62E8ibLoDM2kAAGoocsiz1VKMfmCCrzCymbsn/GY95rze1grja8694rpmJ/tg1YsfRO/FE134wc2D4YeTYQ9QeKa+mUrgsHE6+zC+vfjoz1Bdwqpd5iveX1rvG2R1GA0Si5zxrPhaaY98v5WshmCrerhVi+LmCxvqPiafUslXoYpq0XkuiQ1p4Ax4XQ2BSwdnuYP7p9QlvuG40JHI1lUaenv3o5w3Xvu2jOWU179oQNn5aisNMvLBvDOg==)

通过使用插槽，`<FancyButton>` 仅负责渲染外层的 `<button>` (以及相应的样式)，而其内部的内容由父组件提供。

理解插槽的另一种方式是和下面的 JavaScript 函数作类比，其概念是类似的：

js

    // 父元素传入插槽内容
    FancyButton('Click me!')
    
    // FancyButton 在自己的模板中渲染插槽内容
    function FancyButton(slotContent) {
      return `<button class="fancy-btn">
          ${slotContent}
        </button>`
    }

插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件：

template

    <FancyButton>
      <span style="color:red">Click me!</span>
      <AwesomeIcon name="plus" />
    </FancyButton>

[在演练场中尝试一下](https://play.vuejs.org/#eNp1UmtOwkAQvspQYtCEgrx81EqCJibeoX+W7bRZaHc3+1AI4QyewH8ewvN4Aa/gbgtNIfFf5+vMfI/ZXbCQcvBmMYiCWFPFpAGNxsp5wlkphTLwQjjdPlljBIdMiRJ6g2EL88O9pnnxjlqU+EpbzS3s0BwPaypH4gqDpSyIQVcBxK3VFQDwXDC6hhJdlZi4zf3fRKwl4aDNtsDHJKCiECqiW8KTYH5c1gEnwnUdJ9rCh/XeM6Z42AgN+sFZAj6+Ux/LOjFaEK2diMz3h0vjNfj/zokuhPFU3lTdfcpShVOZcJ+DZgHs/HxtCrpZlj34eknoOlfC8jSCgnEkKswVSRlyczkZzVLM+9CdjtPJ/RjGswtX3ExvMcuu6mmhUnTruOBYAZKkKeN5BDO5gdG13FRoSVTOeAW2xkLPY3UEdweYWqW9OCkYN6gctq9uXllx2Z09CJ9dJwzBascI7nBYihWDldUGMqEgdTVIq6TQqCEMfUpNSD+fX7/fH+3b7P8AdGP6wA==)

[在演练场中尝试一下](https://play.vuejs.org/#eNptUltu2zAQvMpGQZEWsOzGiftQ1QBpgQK9g35oaikwkUiCj9aGkTPkBPnLIXKeXCBXyJKKBdoIoA/tYGd3doa74tqY+b+ARVXUjltp/FWj5GC09fCHKb79FbzXCoTVA5zNFxkWaWdT8/V/dHrAvzxrzrC3ZoBG4SYRWhQs9B52EeWapihU3lWwyxfPDgbfNYq+ejEppcLjYHrmkSqAOqMmAOB3L/ktDEhV4+v8gMR/l1M7wxQ4v+3xZ1Nw3Wtb8S1TTXG1H3cCJIO69oxc5mLUcrSrXkxSi1lxZGT0//CS9Wg875lzJELE/nLto4bko69dr31cFc8auw+3JHvSEfQ7nwbsHY9HwakQ4kes14zfdlYH1VbQS4XMlp1lraRMPl6cr1rsZnB6uWwvvi9hufpAxZfLryjEp5GtbYs0TlGICTCsbaXqKliZDZx/NpuEDsx2UiUwo5VxT6Dkv73BPFgXxRktlUdL2Jh6OoW8O3pX0buTsoTgaCNQcDjoGwk3wXkQ2tJLGzSYYI126KAso0uTSc8Pjy9P93k2d6+NyRKa)

通过使用插槽，`<FancyButton>` 组件更加灵活和具有可复用性。现在组件可以用在不同的地方渲染各异的内容，但同时还保证都具有相同的样式。

Vue 组件的插槽机制是受[原生 Web Component `<slot>` 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)的启发而诞生，同时还做了一些功能拓展，这些拓展的功能我们后面会学习到。

渲染作用域 [​](#render-scope)
------------------------

插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。举例来说：

template

    <span>{{ message }}</span>
    <FancyButton>{{ message }}</FancyButton>

这里的两个 `{{ message }}` 插值表达式渲染的内容都是一样的。

插槽内容**无法访问**子组件的数据。Vue 模板中的表达式只能访问其定义时所处的作用域，这和 JavaScript 的词法作用域规则是一致的。换言之：

> 父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。

默认内容 [​](#fallback-content)
---------------------------

在外部没有提供任何内容的情况下，可以为插槽指定默认内容。比如有这样一个 `<SubmitButton>` 组件：

template

    <button type="submit">
      <slot></slot>
    </button>

如果我们想在父组件没有提供任何插槽内容时在 `<button>` 内渲染“Submit”，只需要将“Submit”写在 `<slot>` 标签之间来作为默认内容：

template

    <button type="submit">
      <slot>
        Submit <!-- 默认内容 -->
      </slot>
    </button>

现在，当我们在父组件中使用 `<SubmitButton>` 且没有提供任何插槽内容时：

template

    <SubmitButton />

“Submit”将会被作为默认内容渲染：

html

    <button type="submit">Submit</button>

但如果我们提供了插槽内容：

template

    <SubmitButton>Save</SubmitButton>

那么被显式提供的内容会取代默认内容：

html

    <button type="submit">Save</button>

[在演练场中尝试一下](https://play.vuejs.org/#eNp1kMsKwjAQRX9lzMaNbfcSC/oL3WbT1ikU8yKZFEX8d5MGgi2YVeZxZ86dN7taWy8B2ZlxP7rZEnikYFuhZ2WNI+jCoGa6BSKjYXJGwbFufpNJfhSaN1kflTEgVFb2hDEC4IeqguARpl7KoR8fQPgkqKpc3Wxo1lxRWWeW+Y4wBk9x9V9d2/UL8g1XbOJN4WAntodOnrecQ2agl8WLYH7tFyw5olj10iR3EJ+gPCxDFluj0YS6EAqKR8mi9M3Td1ifLxWShcU=)

[在演练场中尝试一下](https://play.vuejs.org/#eNp1UEEOwiAQ/MrKxYu1d4Mm+gWvXChuk0YKpCyNxvh3lxIb28SEA8zuDDPzEucQ9mNCcRAymqELdFKu64MfCK6p6Tu6JCLvoB18D9t9/Qtm4lY5AOXwMVFu2OpkCV4ZNZ51HDqKhwLAQjIjb+X4yHr+mh+EfbCakF8AclNVkCJCq61ttLkD4YOgqsp0YbGesJkVBj92NwSTIrH3v7zTVY8oF8F4SdazD7ET69S5rqXPpnigZ8CjEnHaVyInIp5G63O6XIGiIlZMzrGMd8RVfR0q4lIKKV+L+srW+wNTTZq3)

具名插槽 [​](#named-slots)
----------------------

有时在一个组件中包含多个插槽出口是很有用的。举例来说，在一个 `<BaseLayout>` 组件中，有如下模板：

template

    <div class="container">
      <header>
        <!-- 标题内容放这里 -->
      </header>
      <main>
        <!-- 主要内容放这里 -->
      </main>
      <footer>
        <!-- 底部内容放这里 -->
      </footer>
    </div>

对于这种场景，`<slot>` 元素可以有一个特殊的 attribute `name`，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容：

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

这类带 `name` 的插槽被称为具名插槽 (named slots)。没有提供 `name` 的 `<slot>` 出口会隐式地命名为“default”。

在父组件中使用 `<BaseLayout>` 时，我们需要一种方式将多个插槽内容传入到各自目标插槽的出口。此时就需要用到**具名插槽**了：

要为具名插槽传入内容，我们需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令：

template

    <BaseLayout>
      <template v-slot:header>
        <!-- header 插槽的内容放这里 -->
      </template>
    </BaseLayout>

`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。

![具名插槽图示](/assets/named-slots.ebb7b207.png)

下面我们给出完整的、向 `<BaseLayout>` 传递插槽内容的代码，指令均使用的是缩写形式：

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

当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 `<template>` 节点都被隐式地视为默认插槽的内容。所以上面也可以写成：

template

    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
    
      <!-- 隐式的默认插槽 -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    
      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>

现在 `<template>` 元素中的所有内容都将被传递到相应的插槽。最终渲染出的 HTML 如下：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp9UsFuwjAM/RWrHLgMOi5o6jIkdtphn9BLSF0aKU2ixEVjiH+fm8JoQdvRfu/5xS8+ZVvvl4cOsyITUQXtCSJS5zel1a13geBdRvyUR9cR1MG1MF/mt1YvnZdW5IOWVVwQtt5IQq4AxI2cau5ccZg1KCsMlz4jzWrzgQGh1fuGYIcgwcs9AmkyKHKGLyPykcfD1Apr2ZmrHUN+s+U5Qe6D9A3ULgA1bCK1BeUsoaWlyPuVb3xbgbSOaQGcxRH8v3XtHI0X8mmfeYToWkxmUhFoW7s/JvblJLERmj1l0+T7T5tqK30AZWSMb2WW3LTFUGZXp/u8o3EEVrbI9AFjLn8mt38fN9GIPrSp/p4/Yoj7OMZ+A/boN9KInPeZZpAOLNLRDAsPZDgN4p0L/NQFOV/Ayn9x6EZXMFNKvQ4E5YwLBczW6/WlU3NIi6i/sYDn5Qu2qX1OF51MsvMPkrIEHg==)

[在演练场中尝试一下](https://play.vuejs.org/#eNp9UkFuwjAQ/MoqHLiUpFxQlaZI9NRDn5CLSTbEkmNb9oKgiL934wRwQK3ky87O7njGPicba9PDHpM8KXzlpKV1qWVnjSP4FB6/xcnsCRpnOpin2R3qh+alBig1HgO9xkbsFcG5RyvDOzRq8vkAQLSury+l5lNkN1EuCDurBCFXAMWdH2pGrn2YtShqdCPOnXa5/kKH0MldS7BFEGDFDoEkKSwybo8rskjjaevo4L7Wrje8x4mdE7aFxjiglkWE1GxQE9tLi8xO+LoGoQ3THLD/qP2/dGMMxYZs8DP34E2HQUxUBFI35o+NfTlJLOomL8n04frXns7W8gCVEt5/lElQkxpdmVyVHvP2yhBo0SHThx5z+TEZvl1uMlP0oU3nH/kRo3iMI9Ybes960UyRsZ9pBuGDeTqpwfBAvn7NrXF81QUZm8PSHjl0JWuYVVX1PhAqo4zLYbZarUak4ZAWXv5gDq/pG3YBHn50EEkuv5irGBk=)

使用 JavaScript 函数来类比可能更有助于你来理解具名插槽：

js

    // 传入不同的内容给不同名字的插槽
    BaseLayout({
      header: `...`,
      default: `...`,
      footer: `...`
    })
    
    // <BaseLayout> 渲染插槽内容到对应位置
    function BaseLayout(slots) {
      return `<div class="container">
          <header>${slots.header}</header>
          <main>${slots.default}</main>
          <footer>${slots.footer}</footer>
        </div>`
    }

动态插槽名 [​](#dynamic-slot-names)
------------------------------

[动态指令参数](/guide/essentials/template-syntax.html#dynamic-arguments)在 `v-slot` 上也是有效的，即可以定义下面这样的动态插槽名：

template

    <base-layout>
      <template v-slot:[dynamicSlotName]>
        ...
      </template>
    
      <!-- 缩写为 -->
      <template #[dynamicSlotName]>
        ...
      </template>
    </base-layout>

注意这里的表达式和动态指令参数受相同的[语法限制](/guide/essentials/template-syntax.html#directives)。

作用域插槽 [​](#scoped-slots)
------------------------

在上面的[渲染作用域](#render-scope)中我们讨论到，插槽的内容无法访问到子组件的状态。

然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。

我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：

template

    <!-- <MyComponent> 的模板 -->
    <div>
      <slot :text="greetingMessage" :count="1"></slot>
    </div>

当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。下面我们将先展示默认插槽如何接受 props，通过子组件标签上的 `v-slot` 指令，直接接收到了一个插槽 props 对象：

template

    <MyComponent v-slot="slotProps">
      {{ slotProps.text }} {{ slotProps.count }}
    </MyComponent>

![scoped slots diagram](/assets/scoped-slots.1c6d5876.svg)

[在演练场中尝试一下](https://play.vuejs.org/#eNp9kMEKgzAMhl8l9OJlU3aVOhg7C3uAXsRlTtC2tFE2pO++dA5xMnZqk+b/8/2dxMnadBxQ5EL62rWWwCMN9qh021vjCMrn2fBNoya4OdNDkmarXhQnSstsVrOOC8LedhVhrEiuHca97wwVSsTj4oz1SvAUgKJpgqWZEj4IQoCvZm0Gtgghzss1BDvIbFkqdmID+CNdbbQnaBwitbop0fuqQSgguWPXmX+JePe1HT/QMtJBHnE51MZOCcjfzPx04JxsydPzp2Szxxo7vABY1I/p)

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkNFqxCAQRX9l8CUttAl9DbZQ+rzQD/AlJLNpwKjoJGwJ/nvHpAnusrAg6FzHO567iE/nynlCUQsZWj84+lBmGJ31BKffL8sng4bg7O0IRVllWnpWKAOgDF7WBx2em0kTLElt975QbwLkhkmIyvCS1TGXC8LR6YYwVSTzH8yvQVt6VyJt3966oAR38XhaFjjEkvBCECNcia2d2CLyOACZQ7CDrI6h4kXcAF7lcg+za6h5et4JPdLkzV4B9B6RBtOfMISmxxqKH9TarrGtATxMgf/bDfM/qExEUCdEDuLGXAmoV06+euNs2JK7tyCrzSNHjX9aurQf)

子组件传入插槽的 props 作为了 `v-slot` 指令的值，可以在插槽内的表达式中访问。

你可以将作用域插槽类比为一个传入子组件的函数。子组件会将相应的 props 作为参数传给它：

js

    MyComponent({
      // 类比默认插槽，将其想成一个函数
      default: (slotProps) => {
        return `${slotProps.text} ${slotProps.count}`
      }
    })
    
    function MyComponent(slots) {
      const greetingMessage = 'hello'
      return `<div>${
        // 在插槽函数调用时传入 props
        slots.default({ text: greetingMessage, count: 1 })
      }</div>`
    }

实际上，这已经和作用域插槽的最终代码编译结果、以及手动编写[渲染函数](/guide/extras/render-function.html)时使用作用域插槽的方式非常类似了。

`v-slot="slotProps"` 可以类比这里的函数签名，和函数的参数类似，我们也可以在 `v-slot` 中使用解构：

template

    <MyComponent v-slot="{ text, count }">
      {{ text }} {{ count }}
    </MyComponent>

### 具名作用域插槽 [​](#named-scoped-slots)

具名作用域插槽的工作方式也是类似的，插槽 props 可以作为 `v-slot` 指令的值被访问到：`v-slot:name="slotProps"`。当使用缩写时是这样：

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

向具名插槽中传入 props：

template

    <slot name="header" message="hello"></slot>

注意插槽上的 `name` 是一个 Vue 特别保留的 attribute，不会作为 props 传递给插槽。因此最终 `headerProps` 的结果是 `{ message: 'hello' }`。

如果你同时使用了具名插槽与默认插槽，则需要为默认插槽使用显式的 `<template>` 标签。尝试直接为组件添加 `v-slot` 指令将导致编译错误。这是为了避免因默认插槽的 props 的作用域而困惑。举例：

template

    <!-- 该模板无法编译 -->
    <template>
      <MyComponent v-slot="{ message }">
        <p>{{ message }}</p>
        <template #footer>
          <!-- message 属于默认插槽，此处不可用 -->
          <p>{{ message }}</p>
        </template>
      </MyComponent>
    </template>

为默认插槽使用显式的 `<template>` 标签有助于更清晰地指出 `message` 属性在其他插槽中不可用：

template

    <template>
      <MyComponent>
        <!-- 使用显式的默认插槽 -->
        <template #default="{ message }">
          <p>{{ message }}</p>
        </template>
    
        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </MyComponent>
    </template>

### 高级列表组件示例 [​](#fancy-list-example)

你可能想问什么样的场景才适合用到作用域插槽，这里我们来看一个 `<FancyList>` 组件的例子。它会渲染一个列表，并同时会封装一些加载远端数据的逻辑、使用数据进行列表渲染、或者是像分页或无限滚动这样更进阶的功能。然而我们希望它能够保留足够的灵活性，将对单个列表元素内容和样式的控制权留给使用它的父组件。我们期望的用法可能是这样的：

template

    <FancyList :api-url="url" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>

在 `<FancyList>` 之中，我们可以多次渲染 `<slot>` 并每次都提供不同的数据 (注意我们这里使用了 `v-bind` 来传递插槽的 props)：

template

    <ul>
      <li v-for="item in items">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>

[在演练场中尝试一下](https://play.vuejs.org/#eNqFU11r20AQ/CtbhWIHZMlxkjZVHUMf2r6EUkgolCgPZ2mlHDndHXcnU9fVf++evixDP16Md9cztzszPgQftI52NQZJsLaZ4dqBRVfrTSp5pZVx8InJbH/HrYPCqApmUTx2PHCWynXcIQlDhcNKC+aQKoD1EZ0wzRe1EbdpQJ9pAIlGs9CsROpcLNOgBRBkIIAzTl9peICtyvch1BaNZBWGIPgLWmhGDKFyvoNMMGsJ4HGTGU315tCxQNOsY3/dcTTCKnSMYNs90I+HxwgAv3yjf7PpvkxJ1jE9Pmwfn95/FIvqkyGV1u0Fgs2Uxpw6kV8ADh5XKOkWlv/EBJbRDVbvfTNTQpkEzq5W25ubS2o1rfaeZBOEwYktf/fzAAYLaHo3OwdTmSlJHmmjtIVbyLHgEr/6av44642bhTAbLJs9nR9RXm6PIt75YzeIY6hU9kKtSpGTOaPDCnTZM5dlKmmjB16hqt18fg63m+7mlibaMVEjkT12enauJTC7b1WCe6Gchc81z5H2GUyi+ccdk/Bd1dRtDUpgtYQmpGXchOUbcT/UThnO/D0T/BdaUXAGD6hFTWuyI9EFEfltnkjxkKrlkm78V+hrMaRBcNgteEHhetWdJ1CW7nkSzjvFchIliqIhQIKfoAtl+kgDl51I09xbEgT8DWPuCbPlMh/reIxmz7yO2wX/k0aAWnTGAAlhKY5+vnB7TXJJJbHNJIBmuT8ggWv9o29tWfZSGlXLPCGoRGYWpaEzUbr55cV1jmXoU5xfvlvB6vo1FW+u3mJRnLf4Vms6vX97yk+ejo9UzJRcenf++O5ZURQD3fgnaX4DS1Wb6Q==)

[在演练场中尝试一下](https://play.vuejs.org/#eNqNVNtq20AQ/ZWpQnECujhO0qaqY+hD25fQl4RCifKwllbKktXushcT1/W/d1bSSnYJNCCEZmbPmcuZ1S76olS6cTTKo6UpNVN2VQjWKqktfCOi3N4yY6HWsoVZmo0eD5kVAqAQ9KU7XNGaOG5h572lRAZBhTV574CJzJv7QuCzzMaMaFjaKk4sRQtgOeUmiiVO85siwncRQa6oThRpKHrO50XUnUdEwMMJw08M7mAtq20MzlAtSEtj4OyZGkweMIiq2AZKToxBgMcdxDCqVrueBfb7ZaaOQiOspZYgbL0FPBySIQD+eMeQc99/HJIsM0weqs+O258mjfZREE1jt5yCKaWiFXpSX0A/5loKmxj2m+YwT69p+7kXg0udw8nlYn19fYGufvSeZBXF0ZGmR2vwmrJKS4WiPswGWWYxzIIgs8fYH6mIJadnQXdNrdMiWAB+yJ7gsXdgLfjqcK10wtJqgmYZ+spnpGgl6up5oaa2fGKi6U8Yau9ZS6Wzpwi7WU1p7BMzaZcLbuBh0q2XM4fZXTc+uOPSGvjuWEWxlaAexr9uiIBf0qG3Uy6HxXwo9B+mn47CvbNSM+LHccDxAyvmjMA9Vdxh1WQiO0eywBVGEaN3Pj972wVxPKwOZ7BJWI2b+K5rOOVUNPbpYJNvJalwZmmahm3j7AhdSz3sPzDRS3R4SQwOCXxP4yVBzJqJarSzcY8H5mXWFfif1QVwPGjGcQWTLp7YrcLxCfyDdAuMW0cq30AOV+plcK1J+dxoXJkqR6igRCeNxjbxp3N6cX5V0Sb2K19dfFrA4uo9Gh8uP9K6Puvw3eyx9SH3IT/qPCZpiW6Y8Gq9mvekrutAN96o/V99ALPj)

### 无渲染组件 [​](#renderless-components)

上面的 `<FancyList>` 案例同时封装了可重用的逻辑 (数据获取、分页等) 和视图输出，但也将部分视图输出通过作用域插槽交给了消费者组件来管理。

如果我们将这个概念拓展一下，可以想象的是，一些组件可能只包括了逻辑而不需要自己渲染内容，视图输出通过作用域插槽全权交给了消费者组件。我们将这种类型的组件称为**无渲染组件**。

这里有一个无渲染组件的例子，一个封装了追踪当前鼠标位置逻辑的组件：

template

    <MouseTracker v-slot="{ x, y }">
      Mouse is at: {{ x }}, {{ y }}
    </MouseTracker>

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUcFqhDAQ/ZUhF12w2rO4Cz301t5aaCEX0dki1SQko6uI/96J7i4qLPQQmHmZ9+Y9ZhQvxsRdiyIVmStsZQgcUmtOUlWN0ZbgXbcOP2xe/KKFs9UNBHGyBj09kCpLFj4zuSFsTJ0T+o6yjUb35GpNRylG6CMYYJKCpwAkzWNQOcgphZG/YZoiX/DQNAttFjMrS+6LRCT2rh6HGsHiOQKtmKIIS19+qmZpYLrmXIKxM1Vo5Yj9HD0vfD7ckGGF3LDWlOyHP/idYPQCfdzldTtjscl/8MuDww78lsqHVHdTYXjwCpdKlfoS52X52qGit8oRKrRhwHYdNrrDILouPbCNVZCtgJ1n/6Xx8JYAmT8epD3fr5cC0oGLQYpkd4zpD27R0vA=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqVUU1rwzAM/SvCl7SQJTuHdLDDbttthw18MbW6hjW2seU0oeS/T0lounQfUDBGepaenvxO4tG5rIkoClGGra8cPUhT1c56ghcbA756tf1EDztva0iy/Ds4NCbSAEiD7diicafigeA0oFvLPAYNhWICYEE5IL00fMp8Hs0JYe0OinDIqFyIaO7CwdJGihO0KXTcLriK59NYBlUARTyMn6Hv0yHgIp7ARAvl3FXm8yCRiuu1Fv/x23JakVqtz3t5pOjNOQNoC7hPz0nHyRSzEr7Ghxppb/XlZ6JjRlzhTAlA+ypkLWwAM6c+8G2BdzP+/pPbRkOoL/KOldH2mCmtnxr247kKhAb9KuHKgLVtMEkn2knG+sIVzV9sfmy8hfB/swHKwV0oWja4lQKKjoNOivzKrf4L/JPqaQ==)

虽然这个模式很有趣，但大部分能用无渲染组件实现的功能都可以通过组合式 API 以另一种更高效的方式实现，并且还不会带来额外组件嵌套的开销。之后我们会在[组合式函数](/guide/reusability/composables.html)一章中介绍如何更高效地实现追踪鼠标位置的功能。

尽管如此，作用域插槽在需要**同时**封装逻辑、组合视图界面时还是很有用，就像上面的 `<FancyList>` 组件那样。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/slots.md)
依赖注入 [​](#provide-inject)
=========================

> 此章节假设你已经看过了[组件基础](/guide/essentials/component-basics.html)。若你还不了解组件是什么，请先阅读该章节。

Prop 逐级透传问题 [​](#prop-drilling)
-------------------------------

通常情况下，当我们需要从父组件向子组件传递数据时，会使用 [props](/guide/components/props.html)。想象一下这样的结构：有一些多层级嵌套的组件，形成了一颗巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦：

![Prop 逐级透传的过程图示](/assets/prop-drilling.11201220.png)

注意，虽然这里的 `<Footer>` 组件可能根本不关心这些 props，但为了使 `<DeepChild>` 能访问到它们，仍然需要定义并向下传递。如果组件链路非常长，可能会影响到更多这条路上的组件。这一问题被称为“prop 逐级透传”，显然是我们希望尽量避免的情况。

`provide` 和 `inject` 可以帮助我们解决这一问题。 [\[1\]](#footnote-1) 一个父组件相对于其所有的后代组件，会作为**依赖提供者**。任何后代的组件树，无论层级有多深，都可以**注入**由父组件提供给整条链路的依赖。

![Provide/inject 模式](/assets/provide-inject.3e0505e4.png)

Provide (提供) [​](#provide)
--------------------------

要为组件后代提供数据，需要使用到 [`provide()`](/api/composition-api-dependency-injection.html#provide) 函数：

vue

    <script setup>
    import { provide } from 'vue'
    
    provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
    </script>

如果不使用 `<script setup>`，请确保 `provide()` 是在 `setup()` 同步调用的：

js

    import { provide } from 'vue'
    
    export default {
      setup() {
        provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
      }
    }

`provide()` 函数接收两个参数。第一个参数被称为**注入名**，可以是一个字符串或是一个 `Symbol`。后代组件会用注入名来查找期望注入的值。一个组件可以多次调用 `provide()`，使用不同的注入名，注入不同的依赖值。

第二个参数是提供的值，值可以是任意类型，包括响应式的状态，比如一个 ref：

js

    import { ref, provide } from 'vue'
    
    const count = ref(0)
    provide('key', count)

提供的响应式状态使后代组件可以由此和提供者建立响应式的联系。

要为组件后代提供数据，需要使用到 [`provide`](/api/options-composition.html#provide) 选项：

js

    export default {
      provide: {
        message: 'hello!'
      }
    }

对于 `provide` 对象上的每一个属性，后代组件会用其 key 为注入名查找期望注入的值，属性的值就是要提供的数据。

如果我们需要提供依赖当前组件实例的状态 (比如那些由 `data()` 定义的数据属性)，那么可以以函数形式使用 `provide`：

js

    export default {
      data() {
        return {
          message: 'hello!'
        }
      },
      provide() {
        // 使用函数的形式，可以访问到 `this`
        return {
          message: this.message
        }
      }
    }

然而，请注意这**不会**使注入保持响应性。我们会在后续小节中讨论如何[让注入转变为响应式](#working-with-reactivity)。

应用层 Provide [​](#app-level-provide)
-----------------------------------

除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖：

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')

在应用级别提供的数据在该应用内的所有组件中都可以注入。这在你编写[插件](/guide/reusability/plugins.html)时会特别有用，因为插件一般都不会使用组件形式来提供值。

Inject (注入) [​](#inject)
------------------------

要注入上层组件提供的数据，需使用 [`inject()`](/api/composition-api-dependency-injection.html#inject) 函数：

vue

    <script setup>
    import { inject } from 'vue'
    
    const message = inject('message')
    </script>

如果提供的值是一个 ref，注入进来的会是该 ref 对象，而**不会**自动解包为其内部的值。这使得注入方组件能够通过 ref 对象保持了和供给方的响应性链接。

[带有响应性的 provide + inject 完整示例](https://play.vuejs.org/#eNqFUUFugzAQ/MrKF1IpxfeIVKp66Kk/8MWFDXYFtmUbpArx967BhURRU9/WOzO7MzuxV+fKcUB2YlWovXYRAsbBvQije2d9hAk8Xo7gvB11gzDDxdseCuIUG+ZN6a7JjZIvVRIlgDCcw+d3pmvTglz1okJ499I0C3qB1dJQT9YRooVaSdNiACWdQ5OICj2WwtTWhAg9hiBbhHNSOxQKu84WT8LkNQ9FBhTHXyg1K75aJHNUROxdJyNSBVBp44YI43NvG+zOgmWWYGt7dcipqPhGZEe2ef07wN3lltD+lWN6tNkV/37+rdKjK2rzhRTt7f3u41xhe37/xJZGAL2PLECXa9NKdD/a6QTTtGnP88LgiXJtYv4BaLHhvg==)

同样的，如果没有使用 `<script setup>`，`inject()` 需要在 `setup()` 内同步调用：

js

    import { inject } from 'vue'
    
    export default {
      setup() {
        const message = inject('message')
        return { message }
      }
    }

要注入上层组件提供的数据，需使用 [`inject`](/api/options-composition.html#inject) 选项来声明：

js

    export default {
      inject: ['message'],
      created() {
        console.log(this.message) // injected value
      }
    }

注入会在组件自身的状态**之前**被解析，因此你可以在 `data()` 中访问到注入的属性：

js

    export default {
      inject: ['message'],
      data() {
        return {
          // 基于注入值的初始数据
          fullMessage: this.message
        }
      }
    }

[完整的 provide + inject 示例](https://play.vuejs.org/#eNqNkcFqwzAQRH9l0EUthOhuRKH00FO/oO7B2JtERZaEvA4F43+vZCdOTAIJCImRdpi32kG8h7A99iQKobs6msBvpTNt8JHxcTC2wS76FnKrJpVLZelKR39TSUO7qreMoXRA7ZPPkeOuwHByj5v8EqI/moZeXudCIBL30Z0V0FLXVXsqIA9krU8R+XbMR9rS0mqhS4KpDbZiSgrQc5JKQqvlRWzEQnyvuc9YuWbd4eXq+TZn0IvzOeKr8FvsNcaK/R6Ocb9Uc4FvefpE+fMwP0wH8DU7wB77nIo6x6a2hvNEME5D0CpbrjnHf+8excI=)

### 注入别名 [​](#injection-aliasing)

当以数组形式使用 `inject`，注入的属性会以同名的 key 暴露到组件实例上。在上面的例子中，提供的属性名为 `"message"`，注入后以 `this.message` 的形式暴露。访问的本地属性名和注入名是相同的。

如果我们想要用一个不同的本地属性名注入该属性，我们需要在 `inject` 选项的属性上使用对象的形式：

js

    export default {
      inject: {
        /* 本地属性名 */ localMessage: {
          from: /* 注入来源名 */ 'message'
        }
      }
    }

这里，组件本地化了原注入名 `"message"` 所提供的属性，并将其暴露为 `this.localMessage`。

### 注入默认值 [​](#injection-default-values)

默认情况下，`inject` 假设传入的注入名会被某个祖先链上的组件提供。如果该注入名的确没有任何组件提供，则会抛出一个运行时警告。

如果在注入一个值时不要求必须有提供者，那么我们应该声明一个默认值，和 props 类似：

js

    // 如果没有祖先组件提供 "message"
    // `value` 会是 "这是默认值"
    const value = inject('message', '这是默认值')

在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值：

js

    const value = inject('key', () => new ExpensiveClass())

js

    export default {
      // 当声明注入的默认值时
      // 必须使用对象形式
      inject: {
        message: {
          from: 'message', // 当与原注入名同名时，这个属性是可选的
          default: 'default value'
        },
        user: {
          // 对于非基础类型数据，如果创建开销比较大，或是需要确保每个组件实例
          // 需要独立数据的，请使用工厂函数
          default: () => ({ name: 'John' })
        }
      }
    }

和响应式数据配合使用 [​](#working-with-reactivity)
----------------------------------------

当提供 / 注入响应式的数据时，**建议尽可能将任何对响应式状态的变更都保持在供给方组件中**。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。

有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数：

vue

    <!-- 在供给方组件内 -->
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

    <!-- 在注入方组件 -->
    <script setup>
    import { inject } from 'vue'
    
    const { location, updateLocation } = inject('location')
    </script>
    
    <template>
      <button @click="updateLocation">{{ location }}</button>
    </template>

最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 [`readonly()`](/api/reactivity-core.html#readonly) 来包装提供的值。

vue

    <script setup>
    import { ref, provide, readonly } from 'vue'
    
    const count = ref(0)
    provide('read-only-count', readonly(count))
    </script>

为保证注入方和供给方之间的响应性链接，我们需要使用 [computed()](/api/reactivity-core.html#computed) 函数提供一个计算属性：

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
          // 显式提供一个计算属性
          message: computed(() => this.message)
        }
      }
    }

[带有响应性的 provide + inject 完整示例](https://play.vuejs.org/#eNqNUctqwzAQ/JVFFyeQxnfjBEoPPfULqh6EtYlV9EKWTcH43ytZtmPTQA0CsdqZ2dlRT16tPXctkoKUTeWE9VeqhbLGeXirheRwc0ZBds7HKkKzBdBDZZRtPXIYJlzqU40/I4LjjbUyIKmGEWw0at8UgZrUh1PscObZ4ZhQAA596/RcAShsGnbHArIapTRBP74O8Up060wnOO5QmP0eAvZyBV+L5jw1j2tZqsMp8yWRUHhUVjKPoQIohQ460L0ow1FeKJlEKEnttFweijJfiORElhCf5f3umObb0B9PU/I7kk17PJj7FloN/2t7a2Pj/Zkdob+x8gV8ZlMs2de/8+14AXwkBngD9zgVqjg2rNXPvwjD+EdlHilrn8MvtvD1+Q==)

`computed()` 函数常用于组合式 API 风格的组件中，但它同样还可以用于补充选项式 API 风格的某些用例。你可以通过阅读[响应式系统基础](/guide/essentials/reactivity-fundamentals.html)和[计算属性](/guide/essentials/computed.html)两个章节了解更多组合式的 API 风格。

临时配置要求

上面的用例需要设置 `app.config.unwrapInjectedRef = true` 以保证注入会自动解包这个计算属性。这将会在 Vue 3.3 后成为一个默认行为，而我们暂时在此告知此项配置以避免后续升级对代码的破坏性。在 3.3 后就不需要这样做了。

使用 Symbol 作注入名 [​](#working-with-symbol-keys)
---------------------------------------------

至此，我们已经了解了如何使用字符串作为注入名。但如果你正在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。

我们通常推荐在一个单独的文件中导出这些注入名 Symbol：

js

    // keys.js
    export const myInjectionKey = Symbol()

js

    // 在供给方组件中
    import { provide } from 'vue'
    import { myInjectionKey } from './keys.js'
    
    provide(myInjectionKey, { /*
      要提供的数据
    */ });

js

    // 注入方组件
    import { inject } from 'vue'
    import { myInjectionKey } from './keys.js'
    
    const injected = inject(myInjectionKey)

TypeScript 用户请参考：[为 Provide / Inject 标注类型](/guide/typescript/composition-api.html#typing-provide-inject)

js

    // 在供给方组件中
    import { myInjectionKey } from './keys.js'
    
    export default {
      provide() {
        return {
          [myInjectionKey]: {
            /* 要提供的数据 */
          }
        }
      }
    }

js

    // 注入方组件
    import { myInjectionKey } from './keys.js'
    
    export default {
      inject: {
        injected: { from: myInjectionKey }
      }
    }

**译者注**

\[1\] 在本章及后续章节中，“**提供**”将成为对应 Provide 的一个专有概念

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/provide-inject.md)
异步组件 [​](#async-components)
===========================

基本用法 [​](#basic-usage)
----------------------

在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 [`defineAsyncComponent`](/api/general.html#defineasynccomponent) 方法来实现此功能：

js

    import { defineAsyncComponent } from 'vue'
    
    const AsyncComp = defineAsyncComponent(() => {
      return new Promise((resolve, reject) => {
        // ...从服务器获取组件
        resolve(/* 获取到的组件 */)
      })
    })
    // ... 像使用其他一般组件一样使用 `AsyncComp`

如你所见，`defineAsyncComponent` 方法接收一个返回 Promise 的加载函数。这个 Promise 的 `resolve` 回调方法应该在从服务器获得组件定义时调用。你也可以调用 `reject(reason)` 表明加载失败。

[ES 模块动态导入](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)也会返回一个 Promise，所以多数情况下我们会将它和 `defineAsyncComponent` 搭配使用。类似 Vite 和 Webpack 这样的构建工具也支持此语法 (并且会将它们作为打包时的代码分割点)，因此我们也可以用它来导入 Vue 单文件组件：

js

    import { defineAsyncComponent } from 'vue'
    
    const AsyncComp = defineAsyncComponent(() =>
      import('./components/MyComponent.vue')
    )

最后得到的 `AsyncComp` 是一个外层包装过的组件，仅在页面需要它渲染时才会调用加载内部实际组件的函数。它会将接收到的 props 和插槽传给内部组件，所以你可以使用这个异步的包装组件无缝地替换原始组件，同时实现延迟加载。

与普通组件一样，异步组件可以使用 `app.component()` [全局注册](/guide/components/registration.html#global-registration)：

js

    app.component('MyComponent', defineAsyncComponent(() =>
      import('./components/MyComponent.vue')
    ))

你也可以在[局部注册组件](/guide/components/registration.html#local-registration)时使用 `defineAsyncComponent`：

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

也可以直接在父组件中直接定义它们：

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

加载与错误状态 [​](#loading-and-error-states)
--------------------------------------

异步操作不可避免地会涉及到加载和错误状态，因此 `defineAsyncComponent()` 也支持在高级选项中处理这些状态：

js

    const AsyncComp = defineAsyncComponent({
      // 加载函数
      loader: () => import('./Foo.vue'),
    
      // 加载异步组件时使用的组件
      loadingComponent: LoadingComponent,
      // 展示加载组件前的延迟时间，默认为 200ms
      delay: 200,
    
      // 加载失败后展示的组件
      errorComponent: ErrorComponent,
      // 如果提供了一个 timeout 时间限制，并超时了
      // 也会显示这里配置的报错组件，默认值是：Infinity
      timeout: 3000
    })

如果提供了一个加载组件，它将在内部组件加载时先行显示。在加载组件显示之前有一个默认的 200ms 延迟——这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。

如果提供了一个报错组件，则它会在加载器函数返回的 Promise 抛错时被渲染。你还可以指定一个超时时间，在请求耗时超过指定时间时也会渲染报错组件。

搭配 Suspense 使用 [​](#using-with-suspense)
----------------------------------------

异步组件可以搭配内置的 `<Suspense>` 组件一起使用，若想了解 `<Suspense>` 和异步组件之间交互，请参阅 [`<Suspense>`](/guide/built-ins/suspense.html) 章节。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/components/async.md)
组合式函数 [​](#composables)
=======================

TIP

此章节假设你已经对组合式 API 有了基本的了解。如果你只学习过选项式 API，你可以使用左侧边栏上方的切换按钮将 API 风格切换为组合式 API 后，重新阅读[响应性基础](/guide/essentials/reactivity-fundamentals.html)和[生命周期钩子](/guide/essentials/lifecycle.html)两个章节。

什么是“组合式函数”？ [​](#what-is-a-composable)
--------------------------------------

在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用**有状态逻辑**的函数。

当构建前端应用时，我们常常需要复用公共任务的逻辑。例如为了在不同地方格式化时间，我们可能会抽取一个可复用的日期格式化函数。这个函数封装了**无状态的逻辑**：它在接收一些输入后立刻返回所期望的输出。复用无状态逻辑的库有很多，比如你可能已经用过的 [lodash](https://lodash.com/) 或是 [date-fns](https://date-fns.org/)。

相比之下，有状态逻辑负责管理会随时间而变化的状态。一个简单的例子是跟踪当前鼠标在页面中的位置。在实际应用中，也可能是像触摸手势或与数据库的连接状态这样的更复杂的逻辑。

鼠标跟踪器示例 [​](#mouse-tracker-example)
-----------------------------------

如果我们要直接在组件中使用组合式 API 实现鼠标跟踪功能，它会是这样的：

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

但是，如果我们想在多个组件中复用这个相同的逻辑呢？我们可以把这个逻辑以一个组合式函数的形式提取到外部文件中：

js

    // mouse.js
    import { ref, onMounted, onUnmounted } from 'vue'
    
    // 按照惯例，组合式函数名以“use”开头
    export function useMouse() {
      // 被组合式函数封装和管理的状态
      const x = ref(0)
      const y = ref(0)
    
      // 组合式函数可以随时更改其状态。
      function update(event) {
        x.value = event.pageX
        y.value = event.pageY
      }
    
      // 一个组合式函数也可以挂靠在所属组件的生命周期上
      // 来启动和卸载副作用
      onMounted(() => window.addEventListener('mousemove', update))
      onUnmounted(() => window.removeEventListener('mousemove', update))
    
      // 通过返回值暴露所管理的状态
      return { x, y }
    }

下面是它在组件中使用的方式：

vue

    <script setup>
    import { useMouse } from './mouse.js'
    
    const { x, y } = useMouse()
    </script>
    
    <template>Mouse position is at: {{ x }}, {{ y }}</template>

Mouse position is at: 0, 0

[在演练场中尝试一下](https://play.vuejs.org/#eNqNkj1rwzAQhv/KocUOGKVzSAIdurVjoQUvJj4XlfgkJNmxMfrvPcmJkkKHLrbu69H7SlrEszFyHFDsxN6drDIeHPrBHGtSvdHWwwKDwzfNHwjQWd1DIbd9jOW3K2qq6aTJxb6pgpl7Dnmg3NS0365YBnLgsTfnxiNHACvUaKe80gTKQeN3sDAIQqjignEhIvKYqMRta1acFVrsKtDEQPLYxuU7cV8Msmg2mdTilIa6gU5p27tYWKKq1c3ENphaPrGFW25+yMXsHWFaFlfiiOSvFIBJjs15QJ5JeWmaL/xYS/Mfpc9YYrPxl52ULOpwhIuiVl9k07Yvsf9VOY+EtizSWfR6xKK6itgkvQ/+fyNs6v4XJXIsPwVL+WprCiL8AEUxw5s=)

如你所见，核心逻辑完全一致，我们做的只是把它移到一个外部函数中去，并返回需要暴露的状态。和在组件中一样，你也可以在组合式函数中使用所有的[组合式 API](/api/#composition-api)。现在，`useMouse()` 的功能可以在任何组件中轻易复用了。

更酷的是，你还可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。这使得我们可以像使用多个组件组合成整个应用一样，用多个较小且逻辑独立的单元来组合形成复杂的逻辑。实际上，这正是为什么我们决定将实现了这一设计模式的 API 集合命名为组合式 API。

举例来说，我们可以将添加和清除 DOM 事件监听器的逻辑也封装进一个组合式函数中：

js

    // event.js
    import { onMounted, onUnmounted } from 'vue'
    
    export function useEventListener(target, event, callback) {
      // 如果你想的话，
      // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
      onMounted(() => target.addEventListener(event, callback))
      onUnmounted(() => target.removeEventListener(event, callback))
    }

有了它，之前的 `useMouse()` 组合式函数可以被简化为：

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

每一个调用 `useMouse()` 的组件实例会创建其独有的 `x`、`y` 状态拷贝，因此他们不会互相影响。如果你想要在组件之间共享状态，请阅读[状态管理](/guide/scaling-up/state-management.html)这一章。

异步状态示例 [​](#async-state-example)
--------------------------------

`useMouse()` 组合式函数没有接收任何参数，因此让我们再来看一个需要接收一个参数的组合式函数示例。在做异步数据请求时，我们常常需要处理不同的状态：加载中、加载成功和加载失败。

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

如果在每个需要获取数据的组件中都要重复这种模式，那就太繁琐了。让我们把它抽取成一个组合式函数：

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

现在我们在组件里只需要：

vue

    <script setup>
    import { useFetch } from './fetch.js'
    
    const { data, error } = useFetch('...')
    </script>

`useFetch()` 接收一个静态的 URL 字符串作为输入，所以它只执行一次请求，然后就完成了。但如果我们想让它在每次 URL 变化时都重新请求呢？那我们可以让它同时允许接收 ref 作为参数：

js

    // fetch.js
    import { ref, isRef, unref, watchEffect } from 'vue'
    
    export function useFetch(url) {
      const data = ref(null)
      const error = ref(null)
    
      function doFetch() {
        // 在请求之前重设状态...
        data.value = null
        error.value = null
        // unref() 解包可能为 ref 的值
        fetch(unref(url))
          .then((res) => res.json())
          .then((json) => (data.value = json))
          .catch((err) => (error.value = err))
      }
    
      if (isRef(url)) {
        // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
        watchEffect(doFetch)
      } else {
        // 否则只请求一次
        // 避免监听器的额外开销
        doFetch()
      }
    
      return { data, error }
    }

这个版本的 `useFetch()` 现在同时可以接收静态的 URL 字符串和 URL 字符串的 ref。当通过 [`isRef()`](/api/reactivity-utilities.html#isref) 检测到 URL 是一个动态 ref 时，它会使用 [`watchEffect()`](/api/reactivity-core.html#watcheffect) 启动一个响应式的 effect。该 effect 会立刻执行一次，并在此过程中将 URL 的 ref 作为依赖进行跟踪。当 URL 的 ref 发生改变时，数据就会被重置，并重新请求。

这里是一个[升级版的 `useFetch()`](https://play.vuejs.org/#eNptVMFu2zAM/RXOl7hYancYdgnSYAO2nTZsKLadfFFsulHrSIYkJwuC/PtISnbdrpc4ksjH9x4pnbNPfV8cBsxW2drXTvcBPIah31RG73vrApzBYbuE2u77IWADF2id3cOCkhazoMHjVwz1bjovynGrePAUWZnaGh9gqzz+dh3cwmIXQu9XZfngrek7VePOdg26Ipx6XdsGCypaBttYXxJATNcNZRKjfPFucTVuDoI3UszzK7jdTIXeUk5xUN2AFD9mnKFRQS0BnbNuSYDBnYj67aQjJ0yKX5fRFfKDFgH3xDMgrQC+WdVAb4XTijfW2yEEa+Bw3Vp3W2UatIEPVQYf607Xj7zD5HWVbc5n0HC5rMuYIuhVWDf6QNm6pVAhRpEMTND95oft/Rv4wtuApGIwAR02KyAsCS726L26R8HlBkpi4jRREKWEe8ffWX0KLal8/Bd5YOcxkmGvKOczfaAj2Vx23TtkHXwWS9L6VYwNO6XNfVEU4/m6nKzMltlsUGgOn8+d9nf8GYysjorCvrQt1uHFIFYG/0peO5g6aJL8rJNwZlKx98I4DpEZOu7yeCI+Pj/iQ+VPpn4CbmzETaAAZUkZdG3AB1IEW6T+I7QcJLJjFJeNc0gVGD1ux979vz+Htt0BIexQBj2GMqWds8YOvjuBt6DDwkNwqn6kS6o8qAmgwR5NQzNzgu1pbmEu0kfxhP0nsRC30w144sJXJCkWXOWCbnWtVUclOnUC4qpMQz2Jw0uRVSD3jkoHCHqPdkgleZsAYpkrOOqu4ys4OCMqaTep1G3UpXiPr0gqbSnMHbWPrsRYQdlyNgOJCdfaJwEhaiQvSV5kJP1hkaKaWy3oz9oUIymLRtOa0a8L1Gwi5DiNwMs+YorkD/3wh7TkMs1i7Hx45MWlKormixrt8Fq4iXpDTxr8vvtGF2F0gbPmXUzzKOQuwDduhj05tYSHgRyIyNbUieE0zDOmqRWvvZGrMYFjJfyVQajMdFemtkdKCdngEX7S5SVaeZ7mmws8kBx5uxN/MuZXAohv+uQ2m/ldhV0RJ45ON3BTvJ/1g4sJ8Ni1l+bEEC6ZMx95WfPFXZxgWS2unlJTP5fw/uYmekW/l+zyD/mIah0=)，出于演示目的，我们人为地设置了延迟和随机报错。

约定和最佳实践 [​](#conventions-and-best-practices)
--------------------------------------------

### 命名 [​](#naming)

组合式函数约定用驼峰命名法命名，并以“use”作为开头。

### 输入参数 [​](#input-arguments)

尽管其响应性不依赖 ref，组合式函数仍可接收 ref 参数。如果编写的组合式函数会被其他开发者使用，你最好在处理输入参数时兼容 ref 而不只是原始的值。[`unref()`](/api/reactivity-utilities.html#unref) 工具函数会对此非常有帮助：

js

    import { unref } from 'vue'
    
    function useFeature(maybeRef) {
      // 若 maybeRef 确实是一个 ref，它的 .value 会被返回
      // 否则，maybeRef 会被原样返回
      const value = unref(maybeRef)
    }

如果你的组合式函数在接收 ref 为参数时会产生响应式 effect，请确保使用 `watch()` 显式地监听此 ref，或者在 `watchEffect()` 中调用 `unref()` 来进行正确的追踪。

### 返回值 [​](#return-values)

你可能已经注意到了，我们一直在组合式函数中使用 `ref()` 而不是 `reactive()`。我们推荐的约定是组合式函数始终返回一个包含多个 ref 的普通的非响应式对象，这样该对象在组件中被解构为 ref 之后仍可以保持响应性：

js

    // x 和 y 是两个 ref
    const { x, y } = useMouse()

从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，ref 则可以维持这一响应性连接。

如果你更希望以对象属性的形式来使用组合式函数中返回的状态，你可以将返回的对象用 `reactive()` 包装一次，这样其中的 ref 会被自动解包，例如：

js

    const mouse = reactive(useMouse())
    // mouse.x 链接到了原来的 x ref
    console.log(mouse.x)

template

    Mouse position is at: {{ mouse.x }}, {{ mouse.y }}

### 副作用 [​](#side-effects)

在组合式函数中的确可以执行副作用 (例如：添加 DOM 事件监听器或者请求数据)，但请注意以下规则：

*   如果你的应用用到了[服务端渲染](/guide/scaling-up/ssr.html) (SSR)，请确保在组件挂载后才调用的生命周期钩子中执行 DOM 相关的副作用，例如：`onMounted()`。这些钩子仅会在浏览器中被调用，因此可以确保能访问到 DOM。
    
*   确保在 `onUnmounted()` 时清理副作用。举例来说，如果一个组合式函数设置了一个事件监听器，它就应该在 `onUnmounted()` 中被移除 (就像我们在 `useMouse()` 示例中看到的一样)。当然也可以像之前的 `useEventListener()` 示例那样，使用一个组合式函数来自动帮你做这些事。
    

### 使用限制 [​](#usage-restrictions)

组合式函数在 `<script setup>` 或 `setup()` 钩子中，应始终被**同步地**调用。在某些场景下，你也可以在像 `onMounted()` 这样的生命周期钩子中使用他们。

这个限制是为了让 Vue 能够确定当前正在被执行的到底是哪个组件实例，只有能确认当前组件实例，才能够：

1.  将生命周期钩子注册到该组件实例上
    
2.  将计算属性和监听器注册到该组件实例上，以便在该组件被卸载时停止监听，避免内存泄漏。
    

TIP

`<script setup>` 是唯一在调用 `await` **之后**仍可调用组合式函数的地方。编译器会在异步操作之后自动为你恢复当前的组件实例。

通过抽取组合式函数改善代码结构 [​](#extracting-composables-for-code-organization)
------------------------------------------------------------------

抽取组合式函数不仅是为了复用，也是为了代码组织。随着组件复杂度的增高，你可能会最终发现组件多得难以查询和理解。组合式 API 会给予你足够的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数：

vue

    <script setup>
    import { useFeatureA } from './featureA.js'
    import { useFeatureB } from './featureB.js'
    import { useFeatureC } from './featureC.js'
    
    const { foo, bar } = useFeatureA()
    const { baz } = useFeatureB(foo)
    const { qux } = useFeatureC(baz)
    </script>

在某种程度上，你可以将这些提取出的组合式函数看作是可以相互通信的组件范围内的服务。

在选项式 API 中使用组合式函数 [​](#using-composables-in-options-api)
--------------------------------------------------------

如果你正在使用选项式 API，组合式函数必须在 `setup()` 中调用。且其返回的绑定必须在 `setup()` 中返回，以便暴露给 `this` 及其模板：

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
        // setup() 暴露的属性可以在通过 `this` 访问到
        console.log(this.x)
      }
      // ...其他选项
    }

与其他模式的比较 [​](#comparisons-with-other-techniques)
------------------------------------------------

### 和 Mixin 的对比 [​](#vs-mixins)

Vue 2 的用户可能会对 [mixins](/api/options-composition.html#mixins) 选项比较熟悉。它也让我们能够把组件逻辑提取到可复用的单元里。然而 mixins 有三个主要的短板：

1.  **不清晰的数据来源**：当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref + 解构模式的理由：让属性的来源在消费组件时一目了然。
    
2.  **命名空间冲突**：多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。
    
3.  **隐式的跨 mixin 交流**：多个 mixin 需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。
    

基于上述理由，我们不再推荐在 Vue 3 中继续使用 mixin。保留该功能只是为了项目迁移的需求和照顾熟悉它的用户。

### 和无渲染组件的对比 [​](#vs-renderless-components)

在组件插槽一章中，我们讨论过了基于作用域插槽的[无渲染组件](/guide/components/slots.html#renderless-components)。我们甚至用它实现了一样的鼠标追踪器示例。

组合式函数相对于无渲染组件的主要优势是：组合式函数不会产生额外的组件实例开销。当在整个应用中使用时，由无渲染组件产生的额外组件实例会带来无法忽视的性能开销。

我们推荐在纯逻辑复用时使用组合式函数，在需要同时复用逻辑和视图布局时使用无渲染组件。

### 和 React Hooks 的对比 [​](#vs-react-hooks)

如果你有 React 的开发经验，你可能注意到组合式函数和自定义 React hooks 非常相似。组合式 API 的一部分灵感正来自于 React hooks，Vue 的组合式函数也的确在逻辑组合能力上与 React hooks 相近。然而，Vue 的组合式函数是基于 Vue 细粒度的响应性系统，这和 React hooks 的执行模型有本质上的不同。这一话题在[组合式 API 的常见问题](/guide/extras/composition-api-faq.html#comparison-with-react-hooks)中有更细致的讨论。

延伸阅读 [​](#further-reading)
--------------------------

*   [深入响应性原理](/guide/extras/reactivity-in-depth.html)：理解 Vue 响应性系统的底层细节。
*   [状态管理](/guide/scaling-up/state-management.html)：多个组件间共享状态的管理模式。
*   [测试组合式函数](/guide/scaling-up/testing.html#testing-composables)：组合式函数的单元测试技巧。
*   [VueUse](https://vueuse.org/)：一个日益增长的 Vue 组合式函数集合。源代码本身就是一份不错的学习资料。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/reusability/composables.md)
自定义指令 [​](#custom-directives)
=============================

介绍 [​](#introduction)
---------------------

除了 Vue 内置的一系列指令 (比如 `v-model` 或 `v-show`) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。

我们已经介绍了两种在 Vue 中重用代码的方式：[组件](/guide/essentials/component-basics.html)和[组合式函数](./composables.html)。组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑。另一方面，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。下面是一个自定义指令的例子，当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦：

vue

    <script setup>
    // 在模板中启用 v-focus
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
        // 在模板中启用 v-focus
        focus
      }
    }

template

    <input v-focus />

假设你还未点击页面中的其他地方，那么上面这个 input 元素应该会被自动聚焦。该指令比 `autofocus` attribute 更有用，因为它不仅仅可以在页面加载完成后生效，还可以在 Vue 动态插入元素后生效。

在 `<script setup>` 中，任何以 `v` 开头的驼峰式命名的变量都可以被用作一个自定义指令。在上面的例子中，`vFocus` 即可以在模板中以 `v-focus` 的形式使用。

在没有使用 `<script setup>` 的情况下，自定义指令需要通过 `directives` 选项注册：

js

    export default {
      setup() {
        /*...*/
      },
      directives: {
        // 在模板中启用 v-focus
        focus: {
          /* ... */
        }
      }
    }

和组件类似，自定义指令在模板中使用前必须先注册。在上面的例子中，我们使用 `directives` 选项完成了指令的局部注册。

将一个自定义指令全局注册到应用层级也是一种常见的做法：

js

    const app = createApp({})
    
    // 使 v-focus 在所有组件中都可用
    app.directive('focus', {
      /* ... */
    })

TIP

只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 `v-bind` 这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好。

指令钩子 [​](#directive-hooks)
--------------------------

一个指令的定义对象可以提供几种钩子函数 (都是可选的)：

js

    const myDirective = {
      // 在绑定元素的 attribute 前
      // 或事件监听器应用前调用
      created(el, binding, vnode, prevVnode) {
        // 下面会介绍各个参数的细节
      },
      // 在元素被插入到 DOM 前调用
      beforeMount(el, binding, vnode, prevVnode) {},
      // 在绑定元素的父组件
      // 及他自己的所有子节点都挂载完成后调用
      mounted(el, binding, vnode, prevVnode) {},
      // 绑定元素的父组件更新前调用
      beforeUpdate(el, binding, vnode, prevVnode) {},
      // 在绑定元素的父组件
      // 及他自己的所有子节点都更新后调用
      updated(el, binding, vnode, prevVnode) {},
      // 绑定元素的父组件卸载前调用
      beforeUnmount(el, binding, vnode, prevVnode) {},
      // 绑定元素的父组件卸载后调用
      unmounted(el, binding, vnode, prevVnode) {}
    }

### 钩子参数 [​](#hook-arguments)

指令的钩子会传递以下几种参数：

*   `el`：指令绑定到的元素。这可以用于直接操作 DOM。
    
*   `binding`：一个对象，包含以下属性。
    
    *   `value`：传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值是 `2`。
    *   `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
    *   `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
    *   `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
    *   `instance`：使用该指令的组件实例。
    *   `dir`：指令的定义对象。
*   `vnode`：代表绑定元素的底层 VNode。
    
*   `prevNode`：之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。
    

举例来说，像下面这样使用指令：

template

    <div v-example:foo.bar="baz">

`binding` 参数会是一个这样的对象：

js

    {
      arg: 'foo',
      modifiers: { bar: true },
      value: /* `baz` 的值 */,
      oldValue: /* 上一次更新时 `baz` 的值 */
    }

和内置指令类似，自定义指令的参数也可以是动态的。举例来说：

template

    <div v-example:[arg]="value"></div>

这里指令的参数会基于组件的 `arg` 数据属性响应式地更新。

Note

除了 `el` 外，其他参数都是只读的，不要更改它们。若你需要在不同的钩子间共享信息，推荐通过元素的 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) attribute 实现。

简化形式 [​](#function-shorthand)
-----------------------------

对于自定义指令来说，一个很常见的情况是仅仅需要在 `mounted` 和 `updated` 上实现相同的行为，除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令，如下所示：

template

    <div v-color="color"></div>

js

    app.directive('color', (el, binding) => {
      // 这会在 `mounted` 和 `updated` 时都调用
      el.style.color = binding.value
    })

对象字面量 [​](#object-literals)
---------------------------

如果你的指令需要多个值，你可以向它传递一个 JavaScript 对象字面量。别忘了，指令也可以接收任何合法的 JavaScript 表达式。

template

    <div v-demo="{ color: 'white', text: 'hello!' }"></div>

js

    app.directive('demo', (el, binding) => {
      console.log(binding.value.color) // => "white"
      console.log(binding.value.text) // => "hello!"
    })

在组件上使用 [​](#usage-on-components)
--------------------------------

当在组件上使用自定义指令时，它会始终应用于组件的根节点，和[透传 attributes](/guide/components/attrs.html) 类似。

template

    <MyComponent v-demo="test" />

template

    <!-- MyComponent 的模板 -->
    
    <div> <!-- v-demo 指令会被应用在此处 -->
      <span>My component content</span>
    </div>

需要注意的是组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 `v-bind="$attrs"` 来传递给一个不同的元素。总的来说，**不**推荐在组件上使用自定义指令。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/reusability/custom-directives.md)
插件 [​](#plugins)
================

介绍 [​](#introduction)
---------------------

插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。下面是如何安装一个插件的示例：

js

    import { createApp } from 'vue'
    
    const app = createApp({})
    
    app.use(myPlugin, {
      /* 可选的选项 */
    })

一个插件可以是一个拥有 `install()` 方法的对象，也可以直接是一个安装函数本身。安装函数会接收到安装它的[应用实例](/api/application.html)和传递给 `app.use()` 的额外选项作为参数：

js

    const myPlugin = {
      install(app, options) {
        // 配置此应用
      }
    }

插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

1.  通过 [`app.component()`](/api/application.html#app-component) 和 [`app.directive()`](/api/application.html#app-directive) 注册一到多个全局组件或自定义指令。
    
2.  通过 [`app.provide()`](/api/application.html#app-provide) 使一个资源[可被注入](/guide/components/provide-inject.html)进整个应用。
    
3.  向 [`app.config.globalProperties`](/api/application.html#app-config-globalproperties) 中添加一些全局实例属性或方法
    
4.  一个可能上述三种都包含了的功能库 (例如 [vue-router](https://github.com/vuejs/vue-router-next))。
    

编写一个插件 [​](#writing-a-plugin)
-----------------------------

为了更好地理解如何构建 Vue.js 插件，我们可以试着写一个简单的 `i18n` ([国际化 (Internationalization)](https://en.wikipedia.org/wiki/Internationalization_and_localization) 的缩写) 插件。

让我们从设置插件对象开始。建议在一个单独的文件中创建并导出它，以保证更好地管理逻辑，如下所示：

js

    // plugins/i18n.js
    export default {
      install: (app, options) => {
        // 在这里编写插件代码
      }
    }

我们希望有一个翻译函数，这个函数接收一个以 `.` 作为分隔符的 `key` 字符串，用来在用户提供的翻译字典中查找对应语言的文本。期望的使用方式如下：

template

    <h1>{{ $translate('greetings.hello') }}</h1>

这个函数应当能够在任意模板中被全局调用。这一点可以通过在插件中将它添加到 `app.config.globalProperties` 上来实现：

js

    // plugins/i18n.js
    export default {
      install: (app, options) => {
        // 注入一个全局可用的 $translate() 方法
        app.config.globalProperties.$translate = (key) => {
          // 获取 `options` 对象的深层属性
          // 使用 `key` 作为索引
          return key.split('.').reduce((o, i) => {
            if (o) return o[i]
          }, options)
        }
      }
    }

我们的 `$translate` 函数会接收一个例如 `greetings.hello` 的字符串，在用户提供的翻译字典中查找，并返回翻译得到的值。

用于查找的翻译字典对象则应当在插件被安装时作为 `app.use()` 的额外参数被传入：

js

    import i18nPlugin from './plugins/i18n'
    
    app.use(i18nPlugin, {
      greetings: {
        hello: 'Bonjour!'
      }
    })

这样，我们一开始的表达式 `$translate('greetings.hello')` 就会在运行时被替换为 `Bonjour!` 了。

TypeScript 用户请参考：[扩展全局属性](/guide/typescript/options-api.html#augmenting-global-properties)

TIP

请谨慎使用全局属性，如果在整个应用中使用不同插件注入的太多全局属性，很容易让应用变得难以理解和维护。

### 插件中的 Provide / Inject [​](#provide-inject-with-plugins)

在插件中，我们可以通过 `provide` 来为插件用户供给一些内容。举例来说，我们可以将插件接收到的 `options` 参数提供给整个应用，让任何组件都能使用这个翻译字典对象。

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

现在，插件用户就可以在他们的组件中以 `i18n` 为 key 注入并访问插件的选项对象了。

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

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/reusability/plugins.md)
Transition [​](#transition)
===========================

Vue 提供了两个内置组件，可以帮助你制作基于状态变化的过渡和动画：

*   `<Transition>` 会在一个元素或组件进入和离开 DOM 时应用动画。本章节会介绍如何使用它。
    
*   `<TransitionGroup>` 会在一个 `v-for` 列表中的元素或组件被插入，移动，或移除时应用动画。我们将在[下一章节](/guide/built-ins/transition-group.html)中介绍。
    

除了这两个组件，我们也可以通过其他技术手段来应用动画，比如切换 CSS class 或用状态绑定样式来驱动动画。这些其他的方法会在[动画技巧](/guide/extras/animation.html)章节中展开。

`<Transition>` 组件 [​](#the-transition-component)
------------------------------------------------

`<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：

*   由 `v-if` 所触发的切换
*   由 `v-show` 所触发的切换
*   由特殊元素 `<component>` 切换的动态组件
*   改变特殊的 `key` 属性

以下是最基本用法的示例：

template

    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>

css

    /* 下面我们会解释这些 class 是做什么的 */
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

Toggle

hello

[在演练场中尝试一下](https://play.vuejs.org/#eNpVkEFuwyAQRa8yZZNWqu1sunFJ1N4hSzYUjRNUDAjGVJHluxcCipIV/OG/pxEr+/a+TwuykfGogvYEEWnxR2H17F0gWCHgBBtMwc2wy9WdsMIqZ2OuXtwfHErhlcKCb8LyoVoynwPh7I0kzAmA/yxEzsKXMlr9HgRr9Es5BTue3PlskA+1VpFTkDZq0i3niYfU6anRmbqgMY4PZeH8OjwBfHhYIMdIV1OuferQEoZOKtIJ328TgzJhm8BabHR3jeC8VJqusO8/IqCM+CnsVqR3V/mfRxO5amnkCPuK5B+6rcG2fydshks=)

[在演练场中尝试一下](https://play.vuejs.org/#eNpVkMFuAiEQhl9lyqlNuouXXrZo2nfwuBeKs0qKQGBAjfHdZZfVrAmB+f/M/2WGK/v1vs0JWcdEVEF72vQWz94Fgh0OMhmCa28BdpLk+0etAQJSCvahAOLBnTqgkLA6t/EpVzmCP7lFEB69kYRFAYi/ROQs/Cij1f+6ZyMG1vA2vj3bbN1+b1Dw2lYj2yBt1KRnXRwPudHDnC6pAxrjBPe1n78EBF8MUGSkixnLNjdoCUMjFemMn5NjUGacnboqPVkdOC+Vpgus2q8IKCN+T+suWENwxyWJXKXMyQ5WNVJ+aBqD3e6VSYoi)

TIP

`<Transition>` 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。

当一个 `<Transition>` 组件中的元素被插入或移除时，会发生下面这些事情：

1.  Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 [CSS 过渡 class](#transition-classes) 会在适当的时机被添加和移除。
    
2.  如果有作为监听器的 [JavaScript 钩子](#javascript-hooks)，这些钩子函数会在适当时机被调用。
    
3.  如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。
    

基于 CSS 的过渡效果 [​](#css-based-transitions)
----------------------------------------

### CSS 过渡 class [​](#transition-classes)

一共有 6 个应用于进入与离开过渡效果的 CSS class。

![过渡图示](/assets/transition-classes.f0f7b3c9.png)

1.  `v-enter-from`：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。
    
2.  `v-enter-active`：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型。
    
3.  `v-enter-to`：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 `v-enter-from` 被移除的同时)，在过渡或动画完成之后移除。
    
4.  `v-leave-from`：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。
    
5.  `v-leave-active`：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型。
    
6.  `v-leave-to`：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 `v-leave-from` 被移除的同时)，在过渡或动画完成之后移除。
    

`v-enter-active` 和 `v-leave-active` 给我们提供了为进入和离开动画指定不同速度曲线的能力，我们将在下面的小节中看到一个示例。

### 为过渡效果命名 [​](#named-transitions)

我们可以给 `<Transition>` 组件传一个 `name` prop 来声明一个过渡效果名：

template

    <Transition name="fade">
      ...
    </Transition>

对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 `v` 作为前缀。比如，上方例子中被应用的 class 将会是 `fade-enter-active` 而不是 `v-enter-active`。这个“fade”过渡的 class 应该是这样：

css

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

### CSS 的 transition [​](#css-transitions)

`<Transition>` 一般都会搭配[原生 CSS 过渡](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)一起使用，正如你在上面的例子中所看到的那样。这个 `transition` CSS 属性是一个简写形式，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和[速度曲线](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)。

下面是一个更高级的例子，它使用了不同的持续时间和速度曲线来过渡多个属性：

template

    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>

css

    /*
      进入和离开动画可以使用不同
      持续时间和速度曲线。
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

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkc9uwjAMxl/F6wXQKIVNk1AX0HbZC4zDDr2E4EK0NIkStxtDvPviFQ0OSFzyx/m+n+34kL16P+lazMpMRBW0J4hIrV9WVjfeBYIDBKzhCHVwDQySdFDZyipnY5Lu3BcsWDCk0OKosqLoKcmfLoSNN5KQbyTWLZGz8KKMVp+LKju573ivsuXKbbcG4d3oDcI9vMkNiqL3JD+AWAVpoyadGFY2yATW5nVSJj9rkspDl+v6hE/hHRrjRMEdpdfiDEkBUVxWaEWkveHj5AzO0RKGXCrSHcKBIfSPKEEaA9PJYwSUEXPX0nNlj8y6RBiUHd5AzCOodq1VvsYfjWE4G6fgEy/zMcxG17B9ZTyX8bV85C5y1S40ZX/kdj+GD1P/zVQA56XStC9h2idJI/z7huz4CxoVvE4=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqFkc1uwjAMgF/F6wk0SmHTJNQFtF32AuOwQy+hdSFamkSJ08EQ776EbMAkJKTIf7I/O/Y+ezVm3HvMyoy52gpDi0rh1mhL0GDLvSTYVwqg4cQHw2QDWCRv1Z8H4Db6qwSyHlPkEFUQ4bHixA0OYWckJ4wesZUn0gpeainqz3mVRQzM4S7qKlss9XotEd6laBDu4Y03yIpUE+oB2NJy5QSJwFC8w0iIuXkbMkN9moUZ6HPR/uJDeINSalaYxCjOkBBgxeWEijnayWiOz+AcFaHNeU2ix7QCOiFK4FLCZPzoALnDXHt6Pq7hP0Ii7/EGYuag9itR5yv8FmgH01EIPkUxG8F0eA2bJmut7kbX+pG+6NVq28WTBTN+92PwMDHbSAXQhteCdiVMUpNwwuMassMP8kfAJQ==)

### CSS 的 animation [​](#css-animations)

[原生 CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)和 CSS transition 的应用方式基本上是相同的，只有一点不同，那就是 `*-enter-from` 不是在元素插入后立即移除，而是在一个 `animationend` 事件触发时被移除。

对于大多数的 CSS 动画，我们可以简单地在 `*-enter-active` 和 `*-leave-active` class 下声明它们。下面是一个示例：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNqNksGOgjAQhl9lJNmoBwRNvCAa97YP4JFLbQZsLG3TDqzG+O47BaOezCYkpfB9/0wHbsm3c4u+w6RIyiC9cgQBqXO7yqjWWU9wA4813KH2toUpo9PKVEZaExg92V/YRmBGvsN5ZcpsTGGfN4St04Iw7qg8dkTWwF5qJc/bKnnYk7hWye5gm0ZjmY0YKwDlwQsTFCnWjGiRpaPtjETG43smHPSpqh9pVQKBrjpyrfCNMilZV8Aqd5cNEF4oFVo1pgCJhtBvnjEAP6i1hRN6BBUg2BZhKHUdvMmjWhYHE9dXY/ygzN4PasqhB75djM2mQ7FUSFI9wi0GCJ6uiHYxVsFUGcgX67CpzP0lahQ9/k/kj9CjDzgG7M94rT1PLLxhQ0D+Na4AFI9QW98WEKTQOMvnLAOwDrD+wC0Xq/Ubusw/sU+QL/45hskk9z8Bddbn)

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUs2OwiAQfpWxySZ66I8mXioa97YP4LEXrNNKpEBg2tUY330pqOvJmBBgyPczP1yTb2OyocekTJirrTC0qRSejbYEB2x4LwmulQI4cOLTWbwDWKTeqkcE4I76twSyPcaX23j4zS+WP3V9QNgZyQnHiNi+J9IKtrUU9WldJaMMrGEynlWy2em2lcjyCPMUALazXDlBwtMU79CT9rpXNXp4tGYGhlQ0d7UqAUcXOeI6bluhUtKmhEVhzisgPFPKpWhVCTUqQrt6ygD8oJQajmgRhAOnO4RgdQm8yd0tNzGv/D8x/8Dy10IVCzn4axaTTYNZymsSA8YuciU6PrLL6IKpUFBkS7cKXXwQJfIBPyP6IQ1oHUaB7QkvjfUdcy+wIFB8PeZIYwmNtl0JruYSp8XMk+/TXL7BzbPF8gU6L95hn8D4OUJnktsfM1vavg==)

### 自定义过渡 class [​](#custom-transition-classes)

你也可以向 `<Transition>` 传递以下的 props 来指定自定义的过渡 class：

*   `enter-from-class`
*   `enter-active-class`
*   `enter-to-class`
*   `leave-from-class`
*   `leave-active-class`
*   `leave-to-class`

你传入的这些 class 会覆盖相应阶段的默认 class 名。这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 [Animate.css](https://daneden.github.io/animate.css/)：

template

    <!-- 假设你已经在页面中引入了 Animate.css -->
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show">hello</p>
    </Transition>

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUctuwjAQ/BXXF9oDsZB6ogbRL6hUcbSEjLMhpn7JXtNWiH/vhqS0R3zxPmbWM+szf02pOVXgSy6LyTYhK4A1rVWwPsWM7MwydOzCuhw9mxF0poIKJoZC0D5+stUAeMRc4UkFKcYpxKcEwSenEYYM5b4ixsA2xlnzsVJ8Yj8Mt+LrbTwcHEgxwojCmNxmHYpFG2kaoxO0B2KaWjD6uXG6FCiKj00ICHmuDdoTjD2CavJBCna7KWjZrYK61b9cB5pI93P3sQYDbxXf7aHHccpVMolO7DS33WSQjPXgXJRi2Cl1xZ8nKkjxf0dBFvx2Q7iZtq94j5jKUgjThmNpjIu17ZzO0JjohT7qL+HsvohJWWNKEc/NolncKt6Goar4y/V7rg/wyw9zrLOy)

[在演练场中尝试一下](https://play.vuejs.org/#eNqNUcFuwjAM/RUvp+1Ao0k7sYDYF0yaOFZCJjU0LE2ixGFMiH9f2gDbcVKU2M9+tl98Fm8hNMdMYi5U0tEEXraOTsFHho52mC3DuXUAHTI+PlUbIBLn6G4eQOr91xw4ZqrIZXzKVY6S97rFYRqCRabRY7XNzN7BSlujPxetGMvAAh7GtxXLtd/vLSlZ0woFQK0jumTY+FJt7ORwoMLUObEfZtpiSpRaUYPkmOIMNZsj1VhJRWeGMsFmczU6uCOMHd64lrCQ/s/d+uw0vWf+MPuea5Vp5DJ0gOPM7K4Ci7CerPVKhipJ/moqgJJ//8ipxN92NFdmmLbSip45pLmUunOH1Gjrc7ezGKnRfpB4wJO0ZpvkdbJGpyRfmufm+Y4Mxo1oK16n9UwNxOUHwaK3iQ==)

### 同时使用 transition 和 animation [​](#using-transitions-and-animations-together)

Vue 需要附加事件监听器，以便知道过渡何时结束。可以是 `transitionend` 或 `animationend`，这取决于你所应用的 CSS 规则。如果你仅仅使用二者的其中之一，Vue 可以自动探测到正确的类型。

然而在某些场景中，你或许想要在同一个元素上同时使用它们两个。举例来说，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡。此时你需要显式地传入 `type` prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 `animation` 或 `transition`：

template

    <Transition type="animation">...</Transition>

### 深层级过渡与显式过渡时长 [​](#nested-transitions-and-explicit-transition-durations)

尽管过渡 class 仅能应用在 `<Transition>` 的直接子元素上，我们还是可以使用深层级的 CSS 选择器，在深层级的元素上触发过渡效果。

template

    <Transition name="nested">
      <div v-if="show" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>

css

    /* 应用于嵌套元素的规则 */
    .nested-enter-active .inner,
    .nested-leave-active .inner {
      transition: all 0.3s ease-in-out;
    }
    
    .nested-enter-from .inner,
    .nested-leave-to .inner {
      transform: translateX(30px);
      opacity: 0;
    }
    
    /* ... 省略了其他必要的 CSS */

我们甚至可以在深层元素上添加一个过渡延迟，从而创建一个带渐进延迟的动画序列：

css

    /* 延迟嵌套元素的进入以获得交错效果 */
    .nested-enter-active .inner {
      transition-delay: 0.25s;
    }

然而，这会带来一个小问题。默认情况下，`<Transition>` 组件会通过监听过渡根元素上的**第一个** `transitionend` 或者 `animationend` 事件来尝试自动判断过渡何时结束。而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成。

在这种情况下，你可以通过向 `<Transition>` 组件传入 `duration` prop 来显式指定过渡的持续时间 (以毫秒为单位)。总持续时间应该匹配延迟加上内部元素的过渡持续时间：

template

    <Transition :duration="550">...</Transition>

Toggle

Hello

[在演练场中尝试一下](https://play.vuejs.org/#eNqVVMtu2zAQ/JWtekjiRo80cIGoStCil3yADy2gC02tJCIUKZCUncDwv3cpyrbstmgLGxC53J2ZnaW0i772fbIZMMqjwnIjegcW3dA/lUp0vTYOdmCwhj3URndwRalXpSoV18pSaqu38OgTrp0Z8KZURRpQqJ42DrteMoe0AyjWg3NawRcuBX95LKOp+p1/ltHTSjeNxCINaaFkZZiywgkqqwbD/IIKl8usjECxDmmj0DqsqN4XUEklNrCJRT0RUCKXzFra6sGhOSZOqYdDodTpsHT+94xS6mNyStkHjuO6SE8KKVCks45pa92b9MtkpL6FZGSBHR26NeMvjdGDqnJ4j4ifPV7PqkqoJof7rH8dI51QcYuiaV0Od1mI7v0BoU5otAQ4g+Ocz9KCQzEq0hAz7sQGScoUlcg2OEWDMHfsKAcmJWTJvQVkFmOSQo0E5HQBFUr2BiMA6Jq0G6IAlNj55yI9UV+SAJxI4hEmJ5qPSxuwLzX7q3d7ieb0DKnWpsvD0rv/49r7dzMaqHvGhfMEB3CSvkXgTFF7Vs+kQCA4tGBhsDSMQ9RSmDtt7Flrc1en+f4i9ex0mtd/ujzSeJfPJf5NyuVE/9HsPzVCnp9wf2/995n16WK8ge6Z7iaw8XICg28tMSA8fIL10IBQ0DJVyZnR08RmFtkkvHirVligv9KOkrGiZKrXriVFa6O3Fmk62hwpHj7Als4QKMOzBZSWWVgjKqjFK1YjtLdxflWSLLsL9tAHbXyJo/1PJETL1g==)

如果有必要的话，你也可以用对象的形式传入，分开指定进入和离开所需的时间：

template

    <Transition :duration="{ enter: 500, leave: 800 }">...</Transition>

### 性能考量 [​](#performance-considerations)

你可能注意到我们上面例子中展示的动画所用到的 CSS 属性大多是 `transform` 和 `opacity` 之类的。用这些属性制作动画非常高效，因为：

1.  他们在动画过程中不会影响到 DOM 结构，因此不会每一帧都触发昂贵的 CSS 布局重新计算。
    
2.  大多数的现代浏览器都可以在执行 `transform` 动画时利用 GPU 进行硬件加速。
    

相比之下，像 `height` 或者 `margin` 这样的属性会触发 CSS 布局变动，因此执行它们的动画效果更昂贵，需要谨慎使用。我们可以在 [CSS-Triggers](https://csstriggers.com/) 这类的网站查询哪些属性会在执行动画时触发 CSS 布局变动。

JavaScript 钩子 [​](#javascript-hooks)
------------------------------------

你可以通过监听 `<Transition>` 组件事件的方式在过渡过程中挂上钩子函数：

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

    // 在元素被插入到 DOM 之前被调用
    // 用这个来设置元素的 "enter-from" 状态
    function onBeforeEnter(el) {}
    
    // 在元素被插入到 DOM 之后的下一帧被调用
    // 用这个来开始进入动画
    function onEnter(el, done) {
      // 调用回调函数 done 表示过渡结束
      // 如果与 CSS 结合使用，则这个回调是可选参数
      done()
    }
    
    // 当进入过渡完成时调用。
    function onAfterEnter(el) {}
    function onEnterCancelled(el) {}
    
    // 在 leave 钩子之前调用
    // 大多数时候，你应该只会用到 leave 钩子
    function onBeforeLeave(el) {}
    
    // 在离开过渡开始时调用
    // 用这个来开始离开动画
    function onLeave(el, done) {
      // 调用回调函数 done 表示过渡结束
      // 如果与 CSS 结合使用，则这个回调是可选参数
      done()
    }
    
    // 在离开过渡完成、
    // 且元素已从 DOM 中移除时调用
    function onAfterLeave(el) {}
    
    // 仅在 v-show 过渡中可用
    function onLeaveCancelled(el) {}

js

    export default {
      // ...
      methods: {
        // 在元素被插入到 DOM 之前被调用
        // 用这个来设置元素的 "enter-from" 状态
        onBeforeEnter(el) {},
    
        // 在元素被插入到 DOM 之后的下一帧被调用
        // 用这个来开始进入动画
        onEnter(el, done) {
          // 调用回调函数 done 表示过渡结束
          // 如果与 CSS 结合使用，则这个回调是可选参数
          done()
        },
    
        // 当进入过渡完成时调用。
        onAfterEnter(el) {},
        onEnterCancelled(el) {},
    
        // 在 leave 钩子之前调用
        // 大多数时候，你应该只会用到 leave 钩子
        onBeforeLeave(el) {},
    
        // 在离开过渡开始时调用
        // 用这个来开始离开动画
        onLeave(el, done) {
          // 调用回调函数 done 表示过渡结束
          // 如果与 CSS 结合使用，则这个回调是可选参数
          done()
        },
    
        // 在离开过渡完成、
        // 且元素已从 DOM 中移除时调用
        onAfterLeave(el) {},
    
        // 仅在 v-show 过渡中可用
        onLeaveCancelled(el) {}
      }
    }

这些钩子可以与 CSS 过渡或动画结合使用，也可以单独使用。

在使用仅由 JavaScript 执行的动画时，最好是添加一个 `:css="false"` prop。这显式地向 Vue 表明可以跳过对 CSS 过渡的自动探测。除了性能稍好一些之外，还可以防止 CSS 规则意外地干扰过渡效果。

template

    <Transition
      ...
      :css="false"
    >
      ...
    </Transition>

在有了 `:css="false"` 后，我们就自己全权负责控制什么时候过渡结束了。这种情况下对于 `@enter` 和 `@leave` 钩子来说，回调函数 `done` 就是必须的。否则，钩子将被同步调用，过渡将立即完成。

这里是使用 [GreenSock 库](https://greensock.com/)执行动画的一个示例，你也可以使用任何你想要的库，比如 [Anime.js](https://animejs.com/) 或者 [Motion One](https://motion.dev/)。

Toggle

[在演练场中尝试一下](https://play.vuejs.org/#eNqNVMtu2zAQ/JUti8I2YD3i1GigKmnaorcCveTQArpQFCWzlkiCpBwHhv+9Sz1qKYckJ3FnlzvD2YVO5KvW4aHlJCGpZUZoB5a7Vt9lUjRaGQcnMLyEM5RGNbDA0sX/VGWpHnB/xEQmmZIWe+zUI9z6m0tnWr7ymbKVzAklQclvvFSG/5COmyWvV3DKJHTdQiRHZN0jAJbRmv9OIA432/UE+jODlKZMuKcErnx8RrazP8woR7I1FEryKaVTU8aiNdRfwWZTQtQwi1HAGF/YB4BTyxNY8JpaJ1go5K/WLTfhdg1Xq8V4SX5Xja65w0ovaCJ8Jvsnpwc+l525F2XH4ac3Cj8mcB3HbxE9qnvFMRzJ0K3APuhIjPefmTTyvWBAGvWbiDuIgeNYRh3HCCDNW+fQmHtWC7a/zciwaO/8NyN3D6qqap5GfVnXAC89GCqt8Bp77vu827+A+53AJrOFzMhQdMnO8dqPpMO74Yx4wqxFtKS1HbBOMdIX4gAMffVp71+Qq2NG4BCIcngBKk8jLOvfGF30IpBGEwcwtO6p9sdwbNXPIadsXxnVyiKB9x83+c3N9WePN9RUQgZO6QQ2sT524KMo3M5Pf4h3XFQ7NwFyZQpuAkML0doEtvEHhPvRDPRkTfq/QNDgRvy1SuIvpFOSDQmbkWTckf7hHsjIzjltkyhqpd5XIVNN5HNfGlW09eAcMp3J+R+pEn7L)

[在演练场中尝试一下](https://play.vuejs.org/#eNqNVFFvmzAQ/is3pimNlABNF61iaddt2tukvfRhk/xiwIAXsJF9pKmq/PedDTSwh7ZSFLjvzvd9/nz4KfjatuGhE0ES7GxmZIu3TMmm1QahtLyFwugGFu51wRQAU+Lok7koeFcjPDk058gvlv07gBHYGTVGALbSDwmg6USPnNzjtHL/jcBK5zZxxQwZavVNFNqIHwqF8RUAWs2jn4IffCfqQz+mik5lKLWi3GT1hagHRU58aAUSshpV2YzX4ncCcbjZDp099GcG6ZZnEh8TuPR8S0/oTJhQjmQryLUSU0rUU8a8M9wtoWZTQtIwi0nAGJ/ZB0BwKxJYiJpblFko1a8OLzbhdgWXy8WzP99109YCqdIJmgifyfYuzmUzfFF2HH56o/BjAldx/BbRo7pXHKMjGbrl1IcciWn9fyaNfC8YsIueR5wCFFTGUVAEsEs7pOmDu6yW2f6GBW5o4QbeuScLbu91WdZiF/VlvgEtujdcWek09tx3qZ+/tXAzQU1mA8mCoeicneO1OxKP9yM+4ElmLaEFr+2AecVEn8sDZOSrSzv/1qk+sgAOa1kMOyDlu4jK+j1GZ70E7KKJAxRafKzdazi26s8h5dm+NLpTeQLvP27S6+urz/7T5aaUao26TWATt0cPPsgcK3f6Q1wJWVY4AVJtcmHWhueyo89+G38guD+agT5YBf39s25oIv5arehu8krYkLAs8BeG86DfuANYUCG2NomiTrX7Msx0E7ncl0bnXT04566M4PQPykWaWw==)

可复用过渡效果 [​](#reusable-transitions)
----------------------------------

得益于 Vue 的组件系统，过渡效果是可以被封装复用的。要创建一个可被复用的过渡，我们需要为 `<Transition>` 组件创建一个包装组件，并向内传入插槽内容：

vue

    <!-- MyTransition.vue -->
    <script>
    // JavaScript 钩子逻辑...
    </script>
    
    <template>
      <!-- 包装内置的 Transition 组件 -->
      <Transition
        name="my-transition"
        @enter="onEnter"
        @leave="onLeave">
        <slot></slot> <!-- 向内传递插槽内容 -->
      </Transition>
    </template>
    
    <style>
    /*
      必要的 CSS...
      注意：避免在这里使用 <style scoped>
      因为那不会应用到插槽内容上
    */
    </style>

现在 `MyTransition` 可以在导入后像内置组件那样使用了：

template

    <MyTransition>
      <div v-if="show">Hello</div>
    </MyTransition>

出现时过渡 [​](#transition-on-appear)
--------------------------------

如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 `appear` prop：

template

    <Transition appear>
      ...
    </Transition>

元素间过渡 [​](#transition-between-elements)
---------------------------------------

除了通过 `v-if` / `v-show` 切换一个元素，我们也可以通过 `v-if` / `v-else` / `v-else-if` 在几个组件间进行切换，只要确保任一时刻只会有一个元素被渲染即可：

template

    <Transition>
      <button v-if="docState === 'saved'">Edit</button>
      <button v-else-if="docState === 'edited'">Save</button>
      <button v-else-if="docState === 'editing'">Cancel</button>
    </Transition>

Click to cycle through states:

Edit

[在演练场中尝试一下](https://play.vuejs.org/#eNqdk8tu2zAQRX9loI0SoLLcFN2ostEi6BekmwLa0NTYJkKRBDkSYhj+9wxJO3ZegBGu+Lhz7syQ3Bd/nJtNIxZN0QbplSMISKNbdkYNznqCPXhcwwHW3g5QsrTsTGekNYGgt/KBBCEsouimDGLCvrztTFtnGGN4QTg4zbK4ojY4YSDQTuOiKwbhN8pUXm221MDd3D11xfJeK/kIZEHupEagrbfjZssxzAgNs5nALIC2VxNILUJg1IpMxWmRUAY9U6IZ2/3zwgRFyhowYoieQaseq9ElDaTRrkYiVkyVWrPiXNdiAcequuIkPo3fMub5Sg4l9oqSevmXZ22dwR8YoQ74kdsL4Go7ZTbR74HT/KJfJlxleGrG8l4YifqNYVuf251vqOYr4llbXz4C06b75+ns1a3BPsb0KrBy14Aymnerlbby8Vc8cTajG35uzFITpu0t5ufzHQdeH6LBsezEO0eJVbB6pBiVVLPTU6jQEPpKyMj8dnmgkQs+HmQcvVTIQK1hPrv7GQAFt9eO9Bk6fZ8Ub52Qiri8eUo+4dbWD02exh79v/nBP+H2PStnwz/jelJ1geKvk/peHJ4BoRZYow==)

过渡模式 [​](#transition-modes)
---------------------------

在之前的例子中，进入和离开的元素都是在同时开始动画的，因此我们不得不将它们设为 `position: absolute` 以避免二者同时存在时出现的布局问题。

然而，很多情况下这可能并不符合需求。我们可能想要先执行离开动画，然后在其完成**之后**再执行元素的进入动画。手动编排这样的动画是非常复杂的，好在我们可以通过向 `<Transition>` 传入一个 `mode` prop 来实现这个行为：

template

    <Transition mode="out-in">
      ...
    </Transition>

将之前的例子改为 `mode="out-in"` 后是这样：

Click to cycle through states:

Edit

`<Transition>` 也支持 `mode="in-out"`，虽然这并不常用。

组件间过渡 [​](#transition-between-components)
-----------------------------------------

`<Transition>` 也可以作用于[动态组件](/guide/essentials/component-basics.html#dynamic-components)之间的切换：

template

    <Transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </Transition>

 A B

Component A

[在演练场中尝试一下](https://play.vuejs.org/#eNqtksFugzAMhl/F4tJNKtDLLoxWKnuDacdcUnC3SCGJiMmEqr77EkgLbXfYYZyI8/v77dinZG9M5npMiqS0dScMgUXqzY4p0RrdEZzAfnEp9fc7HuEMx063sPIZq6viTbdmHy+yfDwF5K2guhFUUcBUnkNvcelBGrjTooHaC7VCRXBAoT6hQTRyAH2w2DlsmKq1sgS8JuEwUCfxdgF7Gqt5ZqrMp+58X/5A2BrJCcOJSskPKP0v+K8UyvQENBjcsqTjjdAsAZe2ukHpI3dm/q5wXPZBPFqxZAf7gCrzGfufDlVwqB4cPjqurCChFSjeBvGRN+iTA9afdE+pUD43FjG/bSHsb667Mr9qJot89vCBMl8+oiotDTL8ZsE39UnYpRN0fQlK5A5jEE6BSVdiAdrwWtAAm+zFAnKLr0ydA3pJDDt0x/PrMrJifgGbKdFPfCwpWU+TuWz5omzfVCNcfJJ5geL8pqtFn5E07u7fSHFOj6TzDyUDNEM=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqtks9ugzAMxl/F4tJNamGXXVhWqewVduSSgStFCkkUDFpV9d0XJyn9t8MOkxBg5/Pvi+Mci51z5TxhURdi7LxytG2NGpz1BB92cDvYezvAqqxixNLVjaC5ETRZ0Br8jpIe93LSBMfWAHRBYQ0aGms4Jvw6Q05rFvSS5NNzEgN4pMmbcwQgO1Izsj5CalhFRLDj1RN/wis8olpaCQHh4LQk5IiEll+owy+XCGXcREAHh+9t4WWvbFvAvBlsjzpk7gx5TeqJtdG4LbawY5KoLtR/NGjYoHkw+PTSjIqUNWDkwOK97DHUMjVEdqKNMqE272E5dajV+JvpVlSLJllUF4+QENX1ERox0kHzb8m+m1CEfpOgYYgpqVHOmJNpgLQQa7BOdooO8FK+joByxLc4tlsiX6s7HtnEyvU1vKTCMO+4pWKdBnO+0FfbDk31as5HsvR+Hl9auuozk+J1/hspz+mRdPoBYtonzg==)

动态过渡 [​](#dynamic-transitions)
------------------------------

`<Transition>` 的 props (比如 `name`) 也可以是动态的！这让我们可以根据状态变化动态地应用不同类型的过渡：

template

    <Transition :name="transitionName">
      <!-- ... -->
    </Transition>

这个特性的用处是可以提前定义好多组 CSS 过渡或动画的 class，然后在它们之间动态切换。

你也可以根据你的组件的当前状态在 JavaScript 过渡钩子中应用不同的行为。最后，创建动态过渡的终极方式还是创建[可复用的过渡组件](#reusable-transitions)，并让这些组件根据动态的 props 来改变过渡的效果。掌握了这些技巧后，就真的只有你想不到，没有做不到的了。

* * *

**参考**

*   [`<Transition>` API 参考](/api/built-in-components.html#transition)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/built-ins/transition.md)
TransitionGroup [​](#transitiongroup)
=====================================

`<TransitionGroup>` 是一个内置组件，用于对 `v-for` 列表中的元素或组件的插入、移除和顺序改变添加动画效果。

和 `<Transition>` 的区别 [​](#differences-from-transition)
------------------------------------------------------

`<TransitionGroup>` 支持和 `<Transition>` 基本相同的 props、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：

*   默认情况下，它不会渲染一个容器元素。但你可以通过传入 `tag` prop 来指定一个元素作为容器元素来渲染。
    
*   [过渡模式](./transition.html#transition-modes)在这里不可用，因为我们不再是在互斥的元素之间进行切换。
    
*   列表中的每个元素都**必须**有一个独一无二的 `key` attribute。
    
*   CSS 过渡 class 会被应用在列表内的元素上，**而不是**容器元素上。
    

TIP

当在 [DOM 模板](/guide/essentials/component-basics.html#dom-template-parsing-caveats)中使用时，组件名需要写为 `<transition-group>`。

进入 / 离开动画 [​](#enter-leave-transitions)
---------------------------------------

这里是 `<TransitionGroup>` 对一个 `v-for` 列表添加进入 / 离开动画的示例：

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

在任意位置添加一项移除任意位置上的一项

*   1
*   2
*   3
*   4
*   5

移动动画 [​](#move-transitions)
---------------------------

上面的示例有一些明显的缺陷：当某一项被插入或移除时，它周围的元素会立即发生“跳跃”而不是平稳地移动。我们可以通过添加一些额外的 CSS 规则来解决这个问题：

css

    .list-move, /* 对移动中的元素应用的过渡 */
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
    
    /* 确保将离开的元素从布局流中删除
      以便能够正确地计算移动的动画。 */
    .list-leave-active {
      position: absolute;
    }

现在它看起来好多了，甚至对整个列表执行洗牌的动画也都非常流畅：

添加删除重新排序

*   1
*   2
*   3
*   4
*   5

[完整的示例](/examples/#list-transition)

渐进延迟列表动画 [​](#staggering-list-transitions)
------------------------------------------

通过在 JavaScript 钩子中读取元素的 data attribute，我们可以实现带渐进延迟的列表动画。首先，我们把每一个元素的索引渲染为该元素上的一个 data attribute：

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

接着，在 JavaScript 钩子中，我们基于当前元素的 data attribute 对该元素的进场动画添加一个延迟。以下是一个基于 [GreenSock library](https://greensock.com/) 的动画示例：

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

[在演练场中查看完整示例](https://play.vuejs.org/#eNqlVMuu0zAQ/ZVRNklRm7QLWETtBW4FSFCxYkdYmGSSmjp28KNQVfl3xk7SFyvEponPGc+cOTPNOXrbdenRYZRHa1Nq3lkwaF33VEjedkpbOIPGeg6lajtnsYIeaq1aiOlSfAlqDOtG3L8SUchSSWNBcPrZwNdCAqVqTZND/KxdibBDjKGf3xIfWXngCNs9k4/Udu/KA3xWWnPz1zW0sOOP6CcnG3jv9ImIQn67SvrpUJ9IE/WVxPHsSkw97gbN0zFJZrB5grNPrskcLUNXac2FRZ0k3GIbIvxLSsVTq3bqF+otM5jMUi5L4So0SSicHplwOKOyfShdO1lariQo+Yy10vhO+qwoZkNFFKmxJ4Gp6ljJrRe+vMP3yJu910swNXqXcco1h0pJHDP6CZHEAAcAYMydwypYCDAkJRdX6Sts4xGtUDAKotIVs9Scpd4q/A0vYJmuXo5BSm7JOIEW81DVo77VR207ZEf8F23LB23T+X9VrbNh82nn6UAz7ASzSCeANZe0AnBctIqqbIoojLCIIBvoL5pJw31DH7Ry3VDKsoYinSii4ZyXxhBQM2Fwwt58D7NeoB8QkXfDvwRd2XtceOsCHkwc8KCINAk+vADJppQUFjZ0DsGVGT3uFn1KSjoPeKLoaYtvCO/rIlz3vH9O5FiU/nXny/pDT6YGKZngg0/Zg1GErrMbp6N5NHxJFi3N/4dRkj5IYf5ULxCmiPJpI4rIr4kHimhvbWfyLHOyOzQpNZZ57jXNy4nRGFLTR/0fWBqe7w==)

[在演练场中查看完整示例](https://play.vuejs.org/#eNqtVE2P0zAQ/SujXNqgNmkPcIjaBbYCJKg4cSMcTDJNTB07+KNsVfW/M3aabNpyQltViT1vPPP8Zian6H3bJgeHURatTKF5ax9yyZtWaQuVYS3stGpg4peTXOayUNJYEJwea/ieS4ATNKbKYPKoXYGwRZzAeTYGPrNizxE2NZO30KZ2xR6+Kq25uTuGFrb81vrFyQo+On0kIJc/PCV8CmxL3DEnLJy8e8ksm8bdGkCjdVr2O4DfDvWRgtGN/JYC0SOkKVTTOotl1jv3hi3d+DngENILkey4sKinU26xiWH9AH6REN/Eqq36g3rDDE7jhMtCuBLN1NbcJIFEHN9RaNDWqjQDAyUfcac0fpA+CYoRCRSJsUeBiWpZwe2RSrK4w2rkVe2rdYG6LD5uH3EGpZI4iuurTdwDNBjpRJclg+UlhP914UnMZfIGm8kIKVEwciYivhoGLQlQ4hO8gkWyfD1yVHJDKgu0mAUmPXLuxRkYb5Ed8H8YL/7BeGx7Oa6hkLmk/yodBoo21BKtYBZpB7DikroKDvNGUeZ1HoVmyCNIO/ibZtJwy5X8pJVru9CWVeTpRB51+6wwhgw7Jgz2tnc/Q6/M0ZeWwKvmGZye0Wu78PIGexC6swdGxEnw/q6HOYUkt9DwMwhKxfS6GpY+KPHc45G8+6EYAV7reTjucf/uwUtSmvvTME1wDuISlVTwTqf0RiiyrtKR0tEs6r5l84b645dRkr5zoT8oXwBMHg2Tlke+jbwhj2prW5OlqZPtvkroYqnH3lK9nLgI46scnf8Cn22kBA==)

* * *

**参考**

*   [`<TransitionGroup>` API 参考](/api/built-in-components.html#transitiongroup)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/built-ins/transition-group.md)
KeepAlive [​](#keepalive)
=========================

`<KeepAlive>` 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。

基本使用 [​](#basic-usage)
----------------------

在组件基础章节中，我们已经介绍了通过特殊的 `<component>` 元素来实现[动态组件](/guide/essentials/component-basics.html#dynamic-components)的用法：

template

    <component :is="activeComponent" />

默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。

在下面的例子中，你会看到两个有状态的组件——A 有一个计数器，而 B 有一个通过 `v-model` 同步 input 框输入内容的文字展示。尝试先更改一下任意一个组件的状态，然后切走，再切回来：

 A B

Current component: A

count: 0+

你会发现在切回来之后，之前已更改的状态都被重置了。

在切换时创建新的组件实例通常是有意义的，但在这个例子中，我们的确想要组件能在被“切走”的时候保留它们的状态。要解决这个问题，我们可以用 `<KeepAlive>` 内置组件将这些动态组件包装起来：

template

    <!-- 非活跃的组件将会被缓存！ -->
    <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive>

现在，在组件切换时状态也能被保留了：

 A B

Current component: A

count: 0+

[在演练场中尝试一下](https://play.vuejs.org/#eNqtUsFOwzAM/RWrl4IGC+cqq2h3RFw495K12YhIk6hJi1DVf8dJSllBaAJxi+2XZz8/j0lhzHboeZIl1NadMA4sd73JKyVaozsHI9hnJqV+feJHmODY6RZS/JEuiL1uTTEXtiREnnINKFeAcgZUqtbKOqj7ruPKwe6s2VVguq4UJXEynAkDx1sjmeMYAdBGDFBLZu2uShre6ioJeaxIduAyp0KZ3oF7MxwRHWsEQmC4bXXDJWbmxpjLBiZ7DwptMUFyKCiJNP/BWUbO8gvnA+emkGKIgkKqRrRWfh+Z8MIWwpySpfbxn6wJKMGV4IuSs0UlN1HVJae7bxYvBuk+2IOIq7sLnph8P9u5DJv5VfpWWLaGqTzwZTCOM/M0IaMvBMihd04ruK+lqF/8Ajxms8EFbCiJxR8khsP6ncQosLWnWV6a/kUf2nqu75Fby04chA0iPftaYryhz6NBRLjdtajpHZTWPio=)

[在演练场中尝试一下](https://play.vuejs.org/#eNqtU8tugzAQ/JUVl7RKWveMXFTIseofcHHAiawasPxArRD/3rVNSEhbpVUrIWB3x7PM7jAkuVL3veNJmlBTaaFsVraiUZ22sO0alcNedw2s7kmIPHS1ABQLQDEBAMqWvwVQzffMSQuDz1aI6VreWpPCEBtsJppx4wE1s+zmNoIBNLdOt8cIjzut8XAKq3A0NAIY/QNveFEyi8DA8kZJZjlGALQWPVSSGfNYJjVvujIJeaxItuMyo6JVzoJ9VxwRmtUCIdDfNV3NJWam5j7HpPOY8BEYkwxySiLLP1AWkbK4oHzmXOVS9FFOSM3jhFR4WTNfRslcO54nSwJKcCD4RsnZmJJNFPXJEl8t88quOuc39fCrHalsGyWcnJL62apYNoq12UQ8DLEFjCMy+kKA7Jy1XQtPlRTVqx+Jx6zXOJI1JbH4jejg3T+KbswBzXnFlz9Tjes/V/3CjWEHDsL/OYNvdCE8Wu3kLUQEhy+ljh+brFFu)

TIP

在 [DOM 模板](/guide/essentials/component-basics.html#dom-template-parsing-caveats)中使用时，它应该被写为 `<keep-alive>`。

包含/排除 [​](#include-exclude)
---------------------------

`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 `exclude` prop 来定制该行为。这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组：

template

    <!-- 以英文逗号分隔的字符串 -->
    <KeepAlive include="a,b">
      <component :is="view" />
    </KeepAlive>
    
    <!-- 正则表达式 (需使用 `v-bind`) -->
    <KeepAlive :include="/a|b/">
      <component :is="view" />
    </KeepAlive>
    
    <!-- 数组 (需使用 `v-bind`) -->
    <KeepAlive :include="['a', 'b']">
      <component :is="view" />
    </KeepAlive>

它会根据组件的 [`name`](/api/options-misc.html#name) 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项。

TIP

在 3.2.34 或以上的版本中，使用 `<script setup>` 的单文件组件会自动根据文件名生成对应的 `name` 选项，无需再手动声明。

最大缓存实例数 [​](#max-cached-instances)
----------------------------------

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后类似一个 [LRU 缓存](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU))：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

template

    <KeepAlive :max="10">
      <component :is="activeComponent" />
    </KeepAlive>

缓存实例的生命周期 [​](#lifecycle-of-cached-instance)
--------------------------------------------

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为**不活跃**状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新**被激活**。

一个持续存在的组件可以通过 [`onActivated()`](/api/composition-api-lifecycle.html#onactivated) 和 [`onDeactivated()`](/api/composition-api-lifecycle.html#ondeactivated) 注册相应的两个状态的生命周期钩子：

vue

    <script setup>
    import { onActivated, onDeactivated } from 'vue'
    
    onActivated(() => {
      // 调用时机为首次挂载
      // 以及每次从缓存中被重新插入时
    })
    
    onDeactivated(() => {
      // 在从 DOM 上移除、进入缓存
      // 以及组件卸载时调用
    })
    </script>

一个持续存在的组件可以通过 [`activated`](/api/options-lifecycle.html#activated) 和 [`deactivated`](/api/options-lifecycle.html#deactivated) 选项来注册相应的两个状态的生命周期钩子：

js

    export default {
      activated() {
        // 在首次挂载、
        // 以及每次从缓存中被重新插入的时候调用
      },
      deactivated() {
        // 在从 DOM 上移除、进入缓存
        // 以及组件卸载时调用
      }
    }

请注意：

*   `onActivated``activated` 在组件挂载时也会调用，并且 `onDeactivated``deactivated` 在组件卸载时也会调用。
    
*   这两个钩子不仅适用于 `<KeepAlive>` 缓存的根组件，也适用于缓存树中的后代组件。
    

* * *

**参考**

*   [`<KeepAlive>` API 参考](/api/built-in-components.html#keepalive)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/built-ins/keep-alive.md)
Teleport [​](#teleport)
=======================

`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

基本用法 [​](#basic-usage)
----------------------

有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。

这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身是在同一个组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。

试想下面这样的 HTML 结构：

template

    <div class="outer">
      <h3>Tooltips with Vue 3 Teleport</h3>
      <div>
        <MyModal />
      </div>
    </div>

接下来我们来看看 `<MyModal>` 的实现：

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

这个组件中有一个 `<button>` 按钮来触发打开模态框，和一个 class 名为 `.modal` 的 `<div>`，它包含了模态框的内容和一个用来关闭的按钮。

当在初始 HTML 结构中使用这个组件时，会有一些潜在的问题：

*   `position: fixed` 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 `transform`、`perspective` 或者 `filter` 样式属性。也就是说如果我们想要用 CSS `transform` 为祖先节点 `<div class="outer">` 设置动画，就会不小心破坏模态框的布局！
    
*   这个模态框的 `z-index` 受限于它的容器元素。如果有其他元素与 `<div class="outer">` 重叠并有更高的 `z-index`，则它会覆盖住我们的模态框。
    

`<Teleport>` 提供了一个更简单的方式来解决此类问题，让我们不需要再顾虑 DOM 结构的问题。让我们用 `<Teleport>` 改写一下 `<MyModal>`：

template

    <button @click="open = true">Open Modal</button>
    
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>

`<Teleport>` 接收一个 `to` prop 来指定传送的目标。`to` 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段**传送到 `body`** 标签下”。

你可以点击下面这个按钮，然后通过浏览器的开发者工具，在 `<body>` 标签下找到模态框元素：

Open Modal

我们也可以将 `<Teleport>` 和 [`<Transition>`](./transition.html) 结合使用来创建一个带动画的模态框。你可以看看[这个示例](/examples/#modal)。

TIP

`<Teleport>` 挂载时，传送的 `to` 目标必须已经存在于 DOM 中。理想情况下，这应该是整个 Vue 应用 DOM 树外部的一个元素。如果目标元素也是由 Vue 渲染的，你需要确保在挂载 `<Teleport>` 之前先挂载该元素。

搭配组件使用 [​](#using-with-components)
----------------------------------

`<Teleport>` 只改变了渲染的 DOM 结构，它不会影响组件间的逻辑关系。也就是说，如果 `<Teleport>` 包含了一个组件，那么该组件始终和这个使用了 `<teleport>` 的组件保持逻辑上的父子关系。传入的 props 和触发的事件也会照常工作。

这也意味着来自父组件的注入也会按预期工作，子组件将在 Vue Devtools 中嵌套在父级组件下面，而不是放在实际内容移动到的地方。

禁用 Teleport [​](#disabling-teleport)
------------------------------------

在某些场景下可能需要视情况禁用 `<Teleport>`。举例来说，我们想要在桌面端将一个组件当做浮层来渲染，但在移动端则当作行内组件。我们可以通过对 `<Teleport>` 动态地传入一个 `disabled` prop 来处理这两种不同情况。

template

    <Teleport :disabled="isMobile">
      ...
    </Teleport>

这里的 `isMobile` 状态可以根据 CSS media query 的不同结果动态地更新。

多个 Teleport 共享目标 [​](#multiple-teleports-on-the-same-target)
------------------------------------------------------------

一个可重用的模态框组件可能同时存在多个实例。对于此类场景，多个 `<Teleport>` 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。

比如下面这样的用例：

template

    <Teleport to="#modals">
      <div>A</div>
    </Teleport>
    <Teleport to="#modals">
      <div>B</div>
    </Teleport>

渲染的结果为：

html

    <div id="modals">
      <div>A</div>
      <div>B</div>
    </div>

* * *

**参考**

*   [`<Teleport>` API 参考](/api/built-in-components.html#teleport)
*   [在 SSR 中处理 Teleports](/guide/scaling-up/ssr.html#teleports)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/built-ins/teleport.md)
Suspense [​](#suspense)
=======================

实验性功能

`<Suspense>` 是一项实验性功能。它不一定会最终成为稳定功能，并且在稳定之前相关 API 也可能会发生变化。

`<Suspense>` 是一个内置组件，用来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。

异步依赖 [​](#async-dependencies)
-----------------------------

要了解 `<Suspense>` 所解决的问题和它是如何与异步依赖进行交互的，我们需要想象这样一种组件层级结构：

    <Suspense>
    └─ <Dashboard>
       ├─ <Profile>
       │  └─ <FriendStatus>（组件有异步的 setup()）
       └─ <Content>
          ├─ <ActivityFeed> （异步组件）
          └─ <Stats>（异步组件）

在这个组件树中有多个嵌套组件，要渲染出它们，首先得解析一些异步资源。如果没有 `<Suspense>`，则它们每个都需要处理自己的加载、报错和完成状态。在最坏的情况下，我们可能会在页面上看到三个旋转的加载态，在不同的时间显示出内容。

有了 `<Suspense>` 组件后，我们就可以在等待整个多层级组件树中的各个异步依赖获取结果时，在顶层展示出加载中或加载失败的状态。

`<Suspense>` 可以等待的异步依赖有两种：

1.  带有异步 `setup()` 钩子的组件。这也包含了使用 `<script setup>` 时有顶层 `await` 表达式的组件。
    
2.  [异步组件](/guide/components/async.html)。
    

### `async setup()` [​](#async-setup)

组合式 API 中组件的 `setup()` 钩子可以是异步的：

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

如果使用 `<script setup>`，那么顶层 `await` 表达式会自动让该组件成为一个异步依赖：

vue

    <script setup>
    const res = await fetch(...)
    const posts = await res.json()
    </script>
    
    <template>
      {{ posts }}
    </template>

### 异步组件 [​](#async-components)

异步组件默认就是**“suspensible”**的。这意味着如果组件关系链上有一个 `<Suspense>`，那么这个异步组件就会被当作这个 `<Suspense>` 的一个异步依赖。在这种情况下，加载状态是由 `<Suspense>` 控制，而该组件自己的加载、报错、延时和超时等选项都将被忽略。

异步组件也可以通过在选项中指定 `suspensible: false` 表明不用 `Suspense` 控制，并让组件始终自己控制其加载状态。

加载中状态 [​](#loading-state)
-------------------------

`<Suspense>` 组件有两个插槽：`#default` 和 `#fallback`。两个插槽都只允许**一个**直接子节点。在可能的时候都将显示默认槽中的节点。否则将显示后备槽中的节点。

template

    <Suspense>
      <!-- 具有深层异步依赖的组件 -->
      <Dashboard />
    
      <!-- 在 #fallback 插槽中显示 “正在加载中” -->
      <template #fallback>
        Loading...
      </template>
    </Suspense>

在初始渲染时，`<Suspense>` 将在内存中渲染其默认的插槽内容。如果在这个过程中遇到任何异步依赖，则会进入**挂起**状态。在挂起状态期间，展示的是后备内容。当所有遇到的异步依赖都完成后，`<Suspense>` 会进入**完成**状态，并将展示出默认插槽的内容。

如果在初次渲染时没有遇到异步依赖，`<Suspense>` 会直接进入完成状态。

进入完成状态后，只有当默认插槽的根节点被替换时，`<Suspense>` 才会回到挂起状态。组件树中新的更深层次的异步依赖**不会**造成 `<Suspense>` 回退到挂起状态。

发生回退时，后备内容不会立即展示出来。相反，`<Suspense>` 在等待新内容和异步依赖完成时，会展示之前 `#default` 插槽的内容。这个行为可以通过一个 `timeout` prop 进行配置：在等待渲染新内容耗时超过 `timeout` 之后，`<Suspense>` 将会切换为展示后备内容。若 `timeout` 值为 `0` 将导致在替换默认内容时立即显示后备内容。

事件 [​](#events)
---------------

`<Suspense>` 组件会触发三个事件：`pending`、`resolve` 和 `fallback`。`pending` 事件是在进入挂起状态时触发。`resolve` 事件是在 `default` 插槽完成获取新内容时触发。`fallback` 事件则是在 `fallback` 插槽的内容显示时触发。

例如，可以使用这些事件在加载新组件时在之前的 DOM 最上层显示一个加载指示器。

错误处理 [​](#error-handling)
-------------------------

`<Suspense>` 组件自身目前还不提供错误处理，不过你可以使用 [`errorCaptured`](/api/options-lifecycle.html#errorcaptured) 选项或者 [`onErrorCaptured()`](/api/composition-api-lifecycle.html#onerrorcaptured) 钩子，在使用到 `<Suspense>` 的父组件中捕获和处理异步错误。

和其他组件结合 [​](#combining-with-other-components)
---------------------------------------------

我们常常会将 `<Suspense>` 和 [`<Transition>`](./transition.html)、[`<KeepAlive>`](./keep-alive.html) 等组件结合。要保证这些组件都能正常工作，嵌套的顺序非常重要。

另外，这些组件都通常与 [Vue Router](https://router.vuejs.org/zh/) 中的 `<RouterView>` 组件结合使用。

下面的示例展示了如何嵌套这些组件，使它们都能按照预期的方式运行。若想组合得更简单，你也可以删除一些你不需要的组件：

template

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- 主要内容 -->
              <component :is="Component"></component>
    
              <!-- 加载中状态 -->
              <template #fallback>
                正在加载...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>

Vue Router 使用动态导入对[懒加载组件](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)进行了内置支持。这些与异步组件不同，目前他们不会触发 `<Suspense>`。但是，它们仍然可以有异步组件作为后代，这些组件可以照常触发 `<Suspense>`。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/built-ins/suspense.md)
单文件组件 [​](#single-file-components)
==================================

介绍 [​](#introduction)
---------------------

Vue 的单文件组件 (即 `*.vue` 文件，英文 Single-File Component，简称 **SFC**) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：

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

如你所见，Vue 的单文件组件是网页开发中 HTML、CSS 和 JavaScript 三种语言经典组合的自然延伸。`<template>`、`<script>` 和 `<style>` 三个块在同一个文件中封装、组合了组件的视图、逻辑和样式。完整的语法定义可以查阅 [SFC 语法说明](/api/sfc-spec.html)。

为什么要使用 SFC [​](#why-sfc)
------------------------

使用 SFC 必须使用构建工具，但作为回报带来了以下优点：

*   使用熟悉的 HTML、CSS 和 JavaScript 语法编写模块化的组件
*   [让本来就强相关的关注点自然内聚](#what-about-separation-of-concerns)
*   预编译模板，避免运行时的编译开销
*   [组件作用域的 CSS](/api/sfc-css-features.html)
*   [在使用组合式 API 时语法更简单](/api/sfc-script-setup.html)
*   通过交叉分析模板和逻辑代码能进行更多编译时优化
*   [更好的 IDE 支持](/guide/scaling-up/tooling.html#ide-support)，提供自动补全和对模板中表达式的类型检查
*   开箱即用的模块热更新 (HMR) 支持

SFC 是 Vue 框架提供的一个功能，并且在下列场景中都是官方推荐的项目组织方式：

*   单页面应用 (SPA)
*   静态站点生成 (SSG)
*   任何值得引入构建步骤以获得更好的开发体验 (DX) 的项目

当然，在一些轻量级场景下使用 SFC 会显得有些杀鸡用牛刀。因此 Vue 同样也可以在无构建步骤的情况下以纯 JavaScript 方式使用。如果你的用例只需要给静态 HTML 添加一些简单的交互，你可以看看 [petite-vue](https://github.com/vuejs/petite-vue)，它是一个 6 kB 左右、预优化过的 Vue 子集，更适合渐进式增强的需求。

SFC 是如何工作的 [​](#how-it-works)
-----------------------------

Vue SFC 是一个框架指定的文件格式，因此必须交由 [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 JavaScript(ES) 模块，这也意味着在构建配置正确的前提下，你可以像导入其他 ES 模块一样导入 SFC：

js

    import MyComponent from './MyComponent.vue'
    
    export default {
      components: {
        MyComponent
      }
    }

SFC 中的 `<style>` 标签一般会在开发时注入成原生的 `<style>` 标签以支持热更新，而生产环境下它们会被抽取、合并成单独的 CSS 文件。

你可以在 [Vue SFC 演练场](https://play.vuejs.org/)中实际使用一下单文件组件，同时可以看到它们最终被编译后的样子。

在实际项目中，我们一般会使用集成了 SFC 编译器的构建工具，比如 [Vite](https://cn.vitejs.dev/) 或者 [Vue CLI](https://cli.vuejs.org/zh/) (基于 [webpack](https://webpack.js.org/))，Vue 官方也提供了脚手架工具来帮助你尽可能快速地上手开发 SFC。更多细节请查看 [SFC 工具链](/guide/scaling-up/tooling.html)章节。

如何看待关注点分离？ [​](#what-about-separation-of-concerns)
--------------------------------------------------

一些有着传统 Web 开发背景的用户可能会因为 SFC 将不同的关注点集合在一处而有所顾虑，觉得 HTML/CSS/JS 应当是分离开的！

要回答这个问题，我们必须对这一点达成共识：**前端开发的关注点不是完全基于文件类型分离的**。前端工程化的最终目的都是为了能够更好地维护代码。关注点分离不应该是教条式地将其视为文件类型的区别和分离，仅仅这样并不够帮我们在日益复杂的前端应用的背景下提高开发效率。

在现代的 UI 开发中，我们发现与其将代码库划分为三个巨大的层，相互交织在一起，不如将它们划分为松散耦合的组件，再按需组合起来。在一个组件中，其模板、逻辑和样式本就是有内在联系的、是耦合的，将它们放在一起，实际上使组件更有内聚性和可维护性。

即使你不喜欢单文件组件这样的形式而仍然选择拆分单独的 JavaScript 和 CSS 文件，也没关系，你还是可以通过[资源导入](/api/sfc-spec.html#src-imports)功能获得热更新和预编译等功能的支持。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/sfc.md)
工具链 [​](#tooling)
=================

在线尝试 [​](#try-it-online)
------------------------

你不需要在机器上安装任何东西，也可以尝试基于单文件组件的 Vue 开发体验。我们提供了一个在线的演练场，可以在浏览器中访问：

*   [Vue SFC 演练场](https://play.vuejs.org)
    *   自动随着 Vue 仓库最新的提交更新
    *   支持检查编译输出的结果
*   [StackBlitz 中的 Vue + Vite](https://vite.new/vue)
    *   类似 IDE 的环境，但实际是在浏览器中运行 Vite 开发服务器
    *   和本地开发效果更接近

在报告 Bug 时，我们也建议使用这些在线演练场来提供最小化重现。

项目脚手架 [​](#project-scaffolding)
-------------------------------

### Vite [​](#vite)

[Vite](https://cn.vitejs.dev/) 是一个轻量级的、速度极快的构建工具，对 Vue SFC 提供第一优先级支持。作者是尤雨溪，同时也是 Vue 的作者！

要使用 Vite 来创建一个 Vue 项目，非常简单：

    $ npm init vue@latest

这个命令会安装和执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 提供的官方脚手架工具。跟随命令行的提示继续操作即可。

*   要学习更多关于 Vite 的知识，请查看 [Vite 官方文档](https://cn.vitejs.dev)。
*   若要了解如何为一个 Vite 项目配置 Vue 相关的特殊行为，比如向 Vue 编译器传递相关选项，请查看 [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme) 的文档。

上面提到的两种在线演练场也支持将文件作为一个 Vite 项目下载。

### Vue CLI [​](#vue-cli)

[Vue CLI](https://cli.vuejs.org/zh/) 是官方提供的基于 Webpack 的 Vue 工具链，它现在处于维护模式。我们建议使用 Vite 开始新的项目，除非你依赖特定的 Webpack 的特性。在大多数情况下，Vite 将提供更优秀的开发体验。

关于从 Vue CLI 迁移到 Vite 的资源：

*   [VueSchool.io 的 Vue CLI -> Vite 迁移指南](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
*   [迁移支持工具 / 插件](https://github.com/vitejs/awesome-vite#vue-cli)

### 浏览器内模板编译注意事项 [​](#note-on-in-browser-template-compilation)

当以无构建步骤方式使用 Vue 时，组件模板要么是写在页面的 HTML 中，或者是内联的 JavaScript 字符串。在这些场景中，为了执行动态模板编译，Vue 需要将模板编译器运行在浏览器中。相对的，如果我们使用了构建步骤，由于提前编译了模板，那么就无须再在浏览器中运行了。为了减小打包出的客户端代码体积，Vue 提供了[多种格式的“构建文件”](https://unpkg.com/browse/vue@3/dist/)以适配不同场景下的优化需求。

*   前缀为 `vue.runtime.*` 的文件是**只包含运行时的版本**：不包含编译器，当使用这个版本时，所有的模板都必须由构建步骤预先编译。
    
*   名称中不包含 `.runtime` 的文件则是**完全版**：即包含了编译器，并支持在浏览器中直接编译模板。然而，体积也会因此增长大约 14kb。
    

默认的工具链中都会使用仅含运行时的版本，因为所有 SFC 中的模板都已经被预编译了。如果因为某些原因，在有构建步骤时，你仍需要浏览器内的模板编译，你可以更改构建工具配置，将 `vue` 改为相应的版本 `vue/dist/vue.esm-bundler.js`。

如果你需要一种更轻量级，不依赖构建步骤的替代方案，也可以看看 [petite-vue](https://github.com/vuejs/petite-vue)。

IDE 支持 [​](#ide-support)
------------------------

*   推荐使用的 IDE 是 [VSCode](https://code.visualstudio.com/)，配合 [Vue 语言特性 (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 插件。该插件提供了语法高亮、TypeScript 支持，以及模板内表达式与组件 props 的智能提示。
    
    TIP
    
    Volar 取代了我们之前为 Vue 2 提供的官方 VSCode 扩展 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)。如果你之前已经安装了 Vetur，请确保在 Vue 3 的项目中禁用它。
    
*   [WebStorm](https://www.jetbrains.com/webstorm/) 同样也为 Vue 的单文件组件提供了很好的内置支持。
    
*   其他支持[语言服务协议](https://microsoft.github.io/language-server-protocol/) (LSP) 的 IDE 也可以通过 LSP 享受到 Volar 所提供的核心功能：
    
    *   Sublime Text 通过 [LSP-Volar](https://github.com/sublimelsp/LSP-volar) 支持。
        
    *   vim / Neovim 通过 [coc-volar](https://github.com/yaegassy/coc-volar) 支持。
        
    *   emacs 通过 [lsp-mode](https://emacs-lsp.github.io/lsp-mode/page/lsp-volar/) 支持。
        

浏览器开发者插件 [​](#browser-devtools)
-------------------------------

Vue 的浏览器开发者插件使我们可以浏览一个 Vue 应用的组件树，查看各个组件的状态，追踪状态管理的事件，还可以进行组件性能分析。

![devtools 截图](https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png)

*   [文档](https://devtools.vuejs.org/)
*   [Chrome 插件商店页](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
*   [Firefox 所属插件页](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
*   [独立的 Electron 应用所属插件](https://devtools.vuejs.org/guide/installation.html#standalone)

TypeScript [​](#typescript)
---------------------------

具体细节请参考章节：[配合 TypeScript 使用 Vue](/guide/typescript/overview.html)。

*   [Volar](https://github.com/johnsoncodehk/volar) 插件能够为 `<script lang="ts">` 块提供类型检查，也能对模板内表达式和组件之间 props 提供自动补全和类型验证。
    
*   使用 [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) 可以在命令行中执行相同的类型检查，通常用来生成单文件组件的 `d.ts` 文件。
    

测试 [​](#testing)
----------------

具体细节请参考章节：[测试指南](/guide/scaling-up/testing.html)。

*   [Cypress](https://www.cypress.io/) 推荐用于 E2E 测试。也可以通过 [Cypress 组件测试运行器](https://docs.cypress.io/guides/component-testing/introduction)来给 Vue SFC 作单文件组件测试。
    
*   [Vitest](https://vitest.dev/) 是一个追求更快运行速度的测试运行器，由 Vue / Vite 团队成员开发。主要针对基于 Vite 的应用设计，可以为组件提供即时响应的测试反馈。
    
*   [Jest](https://jestjs.io/) 可以通过 [vite-jest](https://github.com/sodatea/vite-jest) 配合 Vite 使用。不过只推荐在你已经有一套基于 Jest 的测试集、且想要迁移到基于 Vite 的开发配置时使用，因为 Vitest 也能够提供类似的功能，且后者与 Vite 的集成更方便高效。
    

代码规范 [​](#linting)
------------------

Vue 团队维护着 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 项目，它是一个 [ESLint](https://eslint.org/) 插件，会提供 SFC 相关规则的定义。

之前使用 Vue CLI 的用户可能习惯于通过 webpack loader 来配置规范检查器。然而，若基于 Vite 构建，我们一般推荐：

1.  `npm install -D eslint eslint-plugin-vue`，然后遵照 `eslint-plugin-vue` 的[指引](https://eslint.vuejs.org/user-guide/#usage)进行配置。
    
2.  启用 ESLint IDE 插件，比如 [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，然后你就可以在开发时获得规范检查器的反馈。这同时也避免了启动开发服务器时不必要的规范检查。
    
3.  将 ESLint 格式检查作为一个生产构建的步骤，保证你可以在最终打包时获得完整的规范检查反馈。
    
4.  (可选) 启用类似 [lint-staged](https://github.com/okonet/lint-staged) 一类的工具在 git commit 提交时自动执行规范检查。
    

格式化 [​](#formatting)
--------------------

*   [Volar](https://github.com/johnsoncodehk/volar) VSCode 插件为 Vue SFC 提供了开箱即用的格式化功能。
    
*   除此之外，[Prettier](https://prettier.io/) 也提供了内置的 Vue SFC 格式化支持。
    

SFC 自定义块集成 [​](#sfc-custom-block-integrations)
----------------------------------------------

自定义块被编译成导入到同一 Vue 文件的不同请求查询。这取决于底层构建工具如何处理这类导入请求。

*   如果使用 Vite，需使用一个自定义 Vite 插件将自定义块转换为可执行的 JavaScript 代码。[示例](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks)。
    
*   如果使用 Vue CLI 或只是 webpack，需要使用一个 loader 来配置如何转换匹配到的自定义块。[示例](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)。
    

底层库 [​](#lower-level-packages)
------------------------------

### `@vue/compiler-sfc` [​](#vue-compiler-sfc)

*   [文档](https://github.com/vuejs/core/tree/main/packages/compiler-sfc)

这个包是 Vue 核心 monorepo 的一部分，并始终和 `vue` 主包版本号保持一致。它已经成为 `vue` 主包的一个依赖并代理到了 `vue/compiler-sfc` 目录下，因此你无需单独安装它。

这个包本身提供了处理 Vue SFC 的底层的功能，并只适用于需要支持 Vue SFC 相关工具链的开发者。

TIP

请始终选择通过 `vue/compiler-sfc` 的深度导入来使用这个包，因为这样可以确保其与 Vue 运行时版本同步。

### `@vitejs/plugin-vue` [​](#vitejs-plugin-vue)

*   [文档](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)

为 Vite 提供 Vue SFC 支持的官方插件。

### `vue-loader` [​](#vue-loader)

*   [文档](https://vue-loader.vuejs.org/zh/)

为 webpack 提供 Vue SFC 支持的官方 loader。如果你正在使用 Vue CLI，也可以看看[如何在 Vue CLI 中更改 `vue-loader` 选项的文档](https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9-loader-%E9%80%89%E9%A1%B9)。

其他在线演练场 [​](#other-online-playgrounds)
--------------------------------------

*   [VueUse Playground](https://play.vueuse.org)
*   [Vue + Vite on Repl.it](https://replit.com/@templates/VueJS-with-Vite)
*   [Vue on CodeSandbox](https://codesandbox.io/s/vue-3)
*   [Vue on Codepen](https://codepen.io/pen/editor/vue)
*   [Vue on Components.studio](https://components.studio/create/vue3)
*   [Vue on WebComponents.dev](https://webcomponents.dev/create/cevue)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/tooling.md)
路由 [​](#routing)
================

客户端 vs. 服务端路由 [​](#client-side-vs-server-side-routing)
------------------------------------------------------

服务端路由指的是服务器根据用户访问的 URL 路径返回不同的响应结果。当我们在一个传统的服务端渲染的 web 应用中点击一个链接时，浏览器会从服务端获得全新的 HTML，然后重新加载整个页面。

然而，在[单页面应用](https://developer.mozilla.org/en-US/docs/Glossary/SPA)中，客户端的 JavaScript 可以拦截页面的跳转请求，动态获取新的数据，然后在无需重新加载的情况下更新当前页面。这样通常可以带来更顺滑的用户体验，尤其是在更偏向“应用”的场景下，因为这类场景下用户通常会在很长的一段时间中做出多次交互。

在这类单页应用中，“路由”是在客户端执行的。一个客户端路由器的职责就是利用诸如 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 或是 [`hashchange` 事件](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)这样的浏览器 API 来管理应用当前应该渲染的视图。

官方路由 [​](#official-router)
--------------------------

Vue 很适合用来构建单页面应用。对于大多数此类应用，都推荐使用官方支持的[路由库](https://github.com/vuejs/router)。要了解更多细节，请查看 [Vue Router 的文档](https://router.vuejs.org/zh/)。

从头开始实现一个简单的路由 [​](#simple-routing-from-scratch)
-----------------------------------------------

如果你只需要一个简单的页面路由，而不想为此引入一整个路由库，你可以通过[动态组件](/guide/essentials/component-basics.html#dynamic-components)的方式，监听浏览器 [`hashchange` 事件](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)或使用 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 来更新当前组件。

下面是一个简单的例子：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNptUk1vgkAQ/SsTegAThZp4MmhikzY9mKanXkoPWxjLRpgly6JN1P/eWb5Eywlm572ZN2/m5GyKwj9U6CydsIy1LAyUaKpiHZHMC6UNnEDjbgqxyovKYAIX2GmVg8sktwe9qhzbdz+wga15TW++VWX6fB3dAt6UeVEVJT2me2hhEcWKSgOamVjCCk4RAbiBu6xbT5tI2ML8VDeI6HLlxZXWSOZdmJTJPJB3lJSoo5+pWBipyE9FmU4soU2IJHk+MGUrS4OE2nMtIk4F/aA7BW8Cq3WjYlDbP4isQu4wVp0F1Q1uFH1IPDK+c9cb1NW8B03tyJ//uvhlJmP05hM4n60TX/bb2db0CoNmpbxMDgzmRSYMcgQQCkjZhlXkPASRs7YmhoFYw/k+WXvKiNrTcQgpmuFv7ZOZFSyQ4U9a7ZFgK2lvSTXFDqmIQbCUJTMHFkQOBAwKg16kM3W6O7K3eSs+nbeK+eee1V/XKK0dY4Q3vLhR6uJxMUK8/AFKaB6k)

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

[在演练场中尝试一下](https://play.vuejs.org/#eNptUstO6zAQ/ZVR7iKtVJKLxCpKK3Gli1ggxIoNZmGSKbFoxpEzoUi0/87YeVBKNonHPmfOmcdndN00yXuHURblbeFMwxtFpm6sY7i1NcLW2RriJPWBB8bT8/WL7Xh6D9FPwL3lG9tROWHGiwGmqLDUMjhhYgtr+FQEEKdxFqRXfaR9YrkKAoqOnocfQaDEre523PNKzXqx7M8ADrlzNEYAReccEj9orjLYGyrtPtnZQrOxlFS6rXqgZJdPUC5s3YivMhuTDCkeDe6/dSalvognrkybnIgl7c4UuLhcwuHgS3v2/7EPvzRruRXJ7/SDU12W/98l451pGQndIvaWi0rTK8YrEPx64ymKFQOce5DOzlfs4cdlkA+NzdNpBSRgrJudZpQIINdQOdyuVfQnVdHGzydP9QYO549hXIII45qHkKUL/Ail8EUjBgX+z9k3JLgz9OZJgeInYElAkJlWmCcDUBGkAsrTyWS0isYV9bv803x1OTiWwzlrWtxZ2lDGDO90mWepV3+vZojHL3QQKQE=)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/routing.md)
状态管理 [​](#state-management)
===========================

什么是状态管理？ [​](#what-is-state-management)
---------------------------------------

理论上来说，每一个 Vue 组件实例都已经在“管理”它自己的响应式状态了。我们以一个简单的计数器组件为例：

vue

    <script setup>
    import { ref } from 'vue'
    
    // 状态
    const count = ref(0)
    
    // 动作
    function increment() {
      count.value++
    }
    </script>
    
    <!-- 视图 -->
    <template>{{ count }}</template>

vue

    <script>
    export default {
      // 状态
      data() {
        return {
          count: 0
        }
      },
      // 动作
      methods: {
        increment() {
          this.count++
        }
      }
    }
    </script>
    
    <!-- 视图 -->
    <template>{{ count }}</template>

它是一个独立的单元，由以下几个部分组成：

*   **状态**：驱动整个应用的数据源；
*   **视图**：对**状态**的一种声明式映射；
*   **交互**：状态根据用户在**视图**中的输入而作出相应变更的可能方式。

下面是“单向数据流”这一概念的简单图示：

![state flow diagram](/assets/state-flow.a8bc738e.png)

然而，当我们有**多个组件共享一个共同的状态**时，就没有这么简单了：

1.  多个视图可能都依赖于同一份状态。
2.  来自不同视图的交互也可能需要更改同一份状态。

对于情景 1，一个可行的办法是将共享状态“提升”到共同的祖先组件上去，再通过 props 传递下来。然而在深层次的组件树结构中这么做的话，很快就会使得代码变得繁琐冗长。这会导致另一个问题：[Prop 逐级透传问题](/guide/components/provide-inject.html#prop-drilling)。

对于情景 2，我们经常发现自己会直接通过模板引用获取父/子实例，或者通过触发的事件尝试改变和同步多个状态的副本。但这些模式的健壮性都不甚理想，很容易就会导致代码难以维护。

一个更简单直接的解决方案是抽取出组件间的共享状态，放在一个全局单例中来管理。这样我们的组件树就变成了一个大的“视图”，而任何位置上的组件都可以访问其中的状态或触发动作。

用响应式 API 做简单状态管理 [​](#simple-state-management-with-reactivity-api)
------------------------------------------------------------------

在选项式 API 中，响应式数据是用 `data()` 选项声明的。在内部，`data()` 的返回值对象会通过 [`reactive()`](/api/reactivity-core.html#reactive) 这个公开的 API 函数转为响应式。

如果你有一部分状态需要在多个组件实例间共享，你可以使用 [`reactive()`](/api/reactivity-core.html#reactive) 来创建一个响应式对象，并将它导入到多个组件中：

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

现在每当 `store` 对象被更改时，`<ComponentA>` 与 `<ComponentB>` 都会自动更新它们的视图。现在我们有了单一的数据源。

然而，这也意味着任意一个导入了 `store` 的组件都可以随意修改它的状态：

template

    <template>
      <button @click="store.count++">
        From B: {{ store.count }}
      </button>
    </template>

虽然这在简单的情况下是可行的，但从长远来看，可以被任何组件任意改变的全局状态是不太容易维护的。为了确保改变状态的逻辑像状态本身一样集中，建议在 store 上定义方法，方法的名称应该要能表达出行动的意图：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNrNkk1uwyAQha8yYpNEiUzXllPVrtRTeJNSqtLGgGBsVbK4ewdwnT9FWWSTFczwmPc+xMhqa4uhl6xklRdOWQQvsbfPrVadNQ7h1dCqpcYaPp3pYFHwQyteXVxKm0tpM0krnm3IgAqUnd3vUFIFUB1Z8bNOkzoVny+wDTuNcZ1gBI/GSQhzqlQX3/5Gng81pA1t33tEo+FF7JX42bYsT1BaONlRguWqZZMU4C261CWMk3EhTK8RQphm8Twse/BscoUsvdqDkTX3kP3nI6aZwcmdQDUcMPJPabX8TQphtCf0RLqd1csxuqQAJTxtYnEUGtIpAH4pn1Ou17FDScOKhT+QNAVM)

[在演练场中尝试一下](https://play.vuejs.org/#eNrdU8FqhDAU/JVHLruyi+lZ3FIt9Cu82JilaTWR5CkF8d8bE5O1u1so9FYQzAyTvJnRTKTo+3QcOMlIbpgWPT5WUnS90gjPyr4ll1jAWasOdim9UMum3a20vJWWqxSgkvzTyRt+rocWYVpYFoQm8wRsJh+viHLBcyXtk9No2ALkXd/WyC0CyDfW6RVTOiancQM5ku+x7nUxgUGlOcwxn8Ppu7HJ7udqaqz3SYikOQ5aBgT+OA9slt9kasToFnb5OiAqCU+sFezjVBHvRUimeWdT7JOKrFKAl8VvYatdI6RMDRJhdlPtWdQf5mdQP+SHdtyX/IftlH9pJyS1vcQ2NK8ZivFSiL8BsQmmpMG1s1NU79frYA1k8OD+/I3pUA6+CeNdHg6hmoTMX9pPSnk=)

TIP

请注意这里点击的处理函数使用了 `store.increment()`，带上了圆括号作为内联表达式调用，因为它并不是组件的方法，并且必须要以正确的 `this` 上下文来调用。

除了我们这里用到的单个响应式对象作为一个 store 之外，你还可以使用其他[响应式 API](/api/reactivity-core.html) 例如 `ref()` 或是 `computed()`，或是甚至通过一个[组合式函数](/guide/reusability/composables.html)来返回一个全局状态：

js

    import { ref } from 'vue'
    
    // 全局状态，创建在模块作用域下
    const globalCount = ref(1)
    
    export function useCount() {
      // 局部状态，每个组件都会创建
      const localCount = ref(1)
    
      return {
        globalCount,
        localCount
      }
    }

事实上，Vue 的响应性系统与组件层是解耦的，这使得它非常灵活。

SSR 相关细节 [​](#ssr-considerations)
---------------------------------

如果你正在构建一个需要利用[服务端渲染 (SSR)](./ssr.html) 的应用，由于 store 是跨多个请求共享的单例，上述模式可能会导致问题。这在 SSR 指引那一章节会讨论[更多细节](./ssr.html#cross-request-state-pollution)。

Pinia [​](#pinia)
-----------------

虽然我们的手动状态管理解决方案在简单的场景中已经足够了，但是在大规模的生产应用中还有很多其他事项需要考虑：

*   更强的团队协作约定
*   与 Vue DevTools 集成，包括时间轴、组件内部审查和时间旅行调试
*   模块热更新 (HMR)
*   服务端渲染支持

[Pinia](https://pinia.vuejs.org/zh/) 就是一个实现了上述需求的状态管理库，由 Vue 核心团队维护，对 Vue 2 和 Vue 3 都可用。

现有用户可能对 [Vuex](https://vuex.vuejs.org/zh/) 更熟悉，它是 Vue 之前的官方状态管理库。由于 Pinia 在生态系统中能够承担相同的职责且能做得更好，因此 Vuex 现在处于维护模式。它仍然可以工作，但不再接受新的功能。对于新的应用，建议使用 Pinia。

事实上，Pinia 最初正是为了探索 Vuex 的下一个版本而开发的，因此整合了核心团队关于 Vuex 5 的许多想法。最终，我们意识到 Pinia 已经实现了我们想要在 Vuex 5 中提供的大部分内容，因此决定将其作为新的官方推荐。

相比于 Vuex，Pinia 提供了更简洁直接的 API，并提供了组合式风格的 API，最重要的是，在使用 TypeScript 时它提供了更完善的类型推导。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/state-management.md)
测试 [​](#testing)
================

为什么需要测试 [​](#why-test)
----------------------

自动化测试能够预防无意引入的 bug，并鼓励开发者将应用分解为可测试、可维护的函数、模块、类和组件。这能够帮助你和你的团队更快速、自信地构建复杂的 Vue 应用。与任何应用一样，新的 Vue 应用可能会以多种方式崩溃，因此，在发布前发现并解决这些问题就变得十分重要。

在本篇指引中，我们将介绍一些基本术语，并就你的 Vue 3 应用应选择哪些工具提供一些建议。

还有一个特定用于 Vue 的小节，介绍了组合式函数的测试，详情请参阅[测试组合式函数](#testing-composables)。

何时测试 [​](#when-to-test)
-----------------------

越早越好！我们建议你尽快开始编写测试。拖得越久，应用就会有越多的依赖和复杂性，想要开始添加测试也就越困难。

测试的类型 [​](#testing-types)
-------------------------

当设计你的 Vue 应用的测试策略时，你应该利用以下几种测试类型：

*   **单元测试**：检查给定函数、类或组合式函数的输入是否产生预期的输出或副作用。
*   **组件测试**：检查你的组件是否正常挂载和渲染、是否可以与之互动，以及表现是否符合预期。这些测试比单元测试导入了更多的代码，更复杂，需要更多时间来执行。
*   **端到端测试**：检查跨越多个页面的功能，并对生产构建的 Vue 应用进行实际的网络请求。这些测试通常涉及到建立一个数据库或其他后端。

每种测试类型在你的应用的测试策略中都发挥着作用，保护你免受不同类型的问题的影响。

总览 [​](#overview)
-----------------

我们将简要地讨论这些测试是什么，以及如何在 Vue 应用中实现它们，并提供一些普适性建议。

单元测试 [​](#unit-testing)
-----------------------

编写单元测试是为了验证小的、独立的代码单元是否按预期工作。一个单元测试通常覆盖一个单个函数、类、组合式函数或模块。单元测试侧重于逻辑上的正确性，只关注应用整体功能的一小部分。他们可能会模拟你的应用环境的很大一部分（如初始状态、复杂的类、第三方模块和网络请求）。

一般来说，单元测试将捕获函数的业务逻辑和逻辑正确性的问题。

以这个 `increment` 函数为例：

js

    // helpers.js
    export function increment (current, max = 10) {
      if (current < max) {
        return current + 1
      }
      return current
    }

因为它很独立，可以很容易地调用 `increment` 函数并断言它是否返回了所期望的内容，所以我们将编写一个单元测试。

如果任何一条断言失败了，那么问题一定是出在 `increment` 函数上。

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

如前所述，单元测试通常适用于独立的业务逻辑、组件、类、模块或函数，不涉及 UI 渲染、网络请求或其他环境问题。

这些通常是与 Vue 无关的纯 JavaScript/TypeScript 模块。一般来说，在 Vue 应用中为业务逻辑编写单元测试与使用其他框架的应用没有明显区别。

但有两种情况，你必须对 Vue 的特定功能进行单元测试：

1.  组合式函数
2.  组件

### 组合式函数 [​](#composables)

有一类 Vue 应用中特有的函数被称为 [组合式函数](/guide/reusability/composables.html)，在测试过程中可能需要特殊处理。 你可以跳转到下方查看 [测试组合式函数](#testing-composables) 了解更多细节。

### 组件的单元测试 [​](#unit-testing-components)

一个组件可以通过两种方式测试：

1.  白盒：单元测试
    
    白盒测试知晓一个组件的实现细节和依赖关系。它们更专注于将组件进行更 **独立** 的测试。这些测试通常会涉及到模拟一些组件的部分子组件，以及设置插件的状态和依赖性（例如 Pinia）。
    
2.  黑盒：组件测试
    
    黑盒测试不知晓一个组件的实现细节。这些测试尽可能少地模拟，以测试组件在整个系统中的集成情况。它们通常会渲染所有子组件，因而会被认为更像一种“集成测试”。请查看下方的[组件测试建议](#component-testing)作进一步了解。
    

### 推荐方案 [​](#recommendation)

*   [Vitest](https://vitest.dev/)
    
    因为由 `create-vue` 创建的官方项目配置是基于 [Vite](https://cn.vitejs.dev/) 的，所以我们推荐你使用一个可以利用同一套 Vite 配置和转换管道的单元测试框架。[Vitest](https://cn.vitest.dev/) 正是一个针对此目标设计的单元测试框架，它由 Vue / Vite 团队成员开发和维护。在 Vite 的项目集成它会非常简单，而且速度非常快。
    

### 其他选择 [​](#other-options)

*   [Peeky](https://peeky.dev/) 是另一速度极快的单元测试运行器，对 Vite 集成提供第一优先级支持。它也是由 Vue 核心团队成员创建的，并提供了一个基于图形用户界面（GUI）的测试界面。
    
*   [Jest](https://jestjs.io/) 是一个广受欢迎的单元测试框架，并可通过 [vite-jest](https://github.com/sodatea/vite-jest) 这个包在 Vite 中使用。不过，我们只推荐你在已有一套 Jest 测试配置、且需要迁移到基于 Vite 的项目时使用它，因为 Vitest 提供了更无缝的集成和更好的性能。
    

组件测试 [​](#component-testing)
----------------------------

在 Vue 应用中，主要用组件来构建用户界面。因此，当验证应用的行为时，组件是一个很自然的独立单元。从粒度的角度来看，组件测试位于单元测试之上，可以被认为是集成测试的一种形式。你的 Vue 应用中大部分内容都应该由组件测试来覆盖，我们建议每个 Vue 组件都应有自己的组件测试文件。

组件测试应该捕捉组件中的 prop、事件、提供的插槽、样式、CSS class 名、生命周期钩子，和其他相关的问题。

组件测试不应该模拟子组件，而应该像用户一样，通过与组件互动来测试组件和其子组件之间的交互。例如，组件测试应该像用户那样点击一个元素，而不是编程式地与组件进行交互。

组件测试主要需要关心组件的公开接口而不是内部实现细节。对于大部分的组件来说，公开接口包括触发的事件、prop 和插槽。当进行测试时，请记住，**测试这个组件做了什么，而不是测试它是怎么做到的**。

*   **推荐的做法**
    
    *   对于 **视图** 的测试：根据输入 prop 和插槽断言渲染输出是否正确。
    *   对于 **交互** 的测试：断言渲染的更新是否正确或触发的事件是否正确地响应了用户输入事件。
    
    在下面的例子中，我们展示了一个步进器（Stepper）组件，它拥有一个标记为 `increment` 的可点击的 DOM 元素。我们还传入了一个名为 `max` 的 prop 防止步进器增长超过 `2`，因此如果我们点击了按钮 3 次，视图将仍然显示 `2`。
    
    我们不了解这个步进器的实现细节，只知道“输入”是这个 `max` prop，“输出”是这个组件状态所呈现出的视图。
    

Vue Test Utils

Cypress

Testing Library

js

    const { getByText } = render(Stepper, {
      props: {
        max: 1
      }
    })
    
    getByText('0') // 隐式断言 "0" 在这个组件中
    
    const button = getByText('increment')
    
    // 向我们的增长按钮发送一个点击事件。
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

*   **应避免的做法**
    
    不要去断言一个组件实例的私有状态或测试一个组件的私有方法。测试实现细节会使测试代码太脆弱，因为当实现发生变化时，它们更有可能失败并需要更新重写。
    
    组件的最终工作是渲染正确的 DOM 输出，所以专注于 DOM 输出的测试提供了足够的正确性保证（如果你不需要更多其他方面测试的话），同时更加健壮、需要的改动更少。
    
    不要完全依赖快照测试。断言 HTML 字符串并不能完全说明正确性。应当编写有意图的测试。
    
    如果一个方法需要测试，把它提取到一个独立的实用函数中，并为它写一个专门的单元测试。如果它不能被直截了当地抽离出来，那么对它的调用应该作为交互测试的一部分。
    

### 推荐方案 [​](#recommendation-1)

*   [Vitest](https://vitest.dev/) 对于组件和组合式函数都采用无头渲染的方式 (例如 VueUse 中的 [`useFavicon`](https://vueuse.org/core/useFavicon/#usefavicon) 函数)。组件和 DOM 都可以通过 [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro) 来测试。
    
*   [Cypress 组件测试](https://on.cypress.io/component) 会预期其准确地渲染样式或者触发原生 DOM 事件。可以搭配 [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro) 这个库一同进行测试。
    

Vitest 和基于浏览器的运行器之间的主要区别是速度和执行上下文。简而言之，基于浏览器的运行器，如 Cypress，可以捕捉到基于 Node 的运行器（如 Vitest）所不能捕捉的问题（比如样式问题、原生 DOM 事件、Cookies、本地存储和网络故障），但基于浏览器的运行器比 Vitest _慢几个数量级_，因为它们要执行打开浏览器，编译样式表以及其他步骤。Cypress 是一个基于浏览器的运行器，支持组件测试。请阅读 [Vitest 文档的“比较”这一章](https://vitest.dev/guide/comparisons.html#cypress) 了解 Vitest 和 Cypress 最新的比较信息。

### 组件挂载库 [​](#mounting-libraries)

组件测试通常涉及到单独挂载被测试的组件，触发模拟的用户输入事件，并对渲染的 DOM 输出进行断言。有一些专门的工具库可以使这些任务变得更简单。

*   [`@testing-library/vue`](https://github.com/testing-library/vue-testing-library) 是一个 Vue 的测试库，专注于测试组件而不依赖其他实现细节。因其良好的设计使得代码重构也变得非常容易。它的指导原则是，测试代码越接近软件的使用方式，它们就越值得信赖。
    
*   [`@vue/test-utils`](https://github.com/vuejs/test-utils) 是官方的底层组件测试库，用来提供给用户访问 Vue 特有的 API。`@testing-library/vue` 也是基于此库构建的。
    

我们推荐使用 `@testing-library/vue` 测试应用中的组件, 因为它更匹配整个应用的测试优先级。只有在你构建高级组件、并需要测试内部的 Vue 特有 API 时再使用 `@vue/test-utils`。

### 其他选择 [​](#other-options-1)

*   [Nightwatch](https://v2.nightwatchjs.org/) 是一个端到端测试运行器，支持 Vue 的组件测试。（Nightwatch v2 版本的 [示例项目](https://github.com/nightwatchjs-community/todo-vue)）

端到端（E2E）测试 [​](#e2e-testing)
----------------------------

虽然单元测试为所写的代码提供了一定程度的验证，但单元测试和组件测试在部署到生产时，对应用整体覆盖的能力有限。因此，端到端测试针对的可以说是应用最重要的方面：当用户实际使用你的应用时发生了什么。

端到端测试的重点是多页面的应用表现，针对你的应用在生产环境下进行网络请求。他们通常需要建立一个数据库或其他形式的后端，甚至可能针对一个预备上线的环境运行。

端到端测试通常会捕捉到路由、状态管理库、顶级组件（常见为 App 或 Layout）、公共资源或任何请求处理方面的问题。如上所述，它们可以捕捉到单元测试或组件测试无法捕捉的关键问题。

端到端测试不导入任何 Vue 应用的代码，而是完全依靠在真实浏览器中浏览整个页面来测试你的应用。

端到端测试验证了你的应用中的许多层。可以在你的本地构建的应用中，甚至是一个预上线的环境中运行。针对预上线环境的测试不仅包括你的前端代码和静态服务器，还包括所有相关的后端服务和基础设施。

> 你的测试越是类似于你的软件的使用方式，它们就越能值得你信赖。- [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106) - Testing Library 的作者

通过测试用户操作如何影响你的应用，端到端测试通常是提高应用能否正常运行的置信度的关键。

### 选择一个端到端测试解决方案 [​](#choosing-an-e2e-testing-solution)

虽然因为不可靠且拖慢了开发过程，市面上对 Web 上的端到端测试的评价并不好，但现代端到端工具已经在创建更可靠、更有用和交互性更好的测试方面取得了很大进步。在选择端到端测试框架时，以下小节会为你给应用选择测试框架时需要注意的事项提供一些指导。

#### 跨浏览器测试 [​](#cross-browser-testing)

端到端测试的一个主要优点是你可以了解你的应用在多个不同浏览器上运行的情况。尽管理想情况应该是 100% 的跨浏览器覆盖率，但很重要的一点是跨浏览器测试对团队资源的回报是递减的，因为需要额外的时间和机器来持续运行它们。因此，在选择应用所需的跨浏览器测试的数量时，注意权衡是很有必要的。

#### 更快的反馈 [​](#faster-feedback-loops)

端到端测试和相应开发过程的主要问题之一是，运行整个套件需要很长的时间。通常情况下，这只在持续集成和部署（CI/CD）管道中进行。现代的端到端测试框架通过增加并行化等功能来帮助解决这个问题，这使得 CI/CD 管道的运行速度比以前快了几倍。此外，在本地开发时，能够有选择地为你正在工作的页面运行单个测试，同时还提供测试的热重载，大大提高了开发者的工作流程和生产力。

#### 第一优先级的调试体验 [​](#first-class-debugging-experience)

传统上，开发者依靠扫描终端窗口中的日志来帮助确定测试中出现的问题，而现代端到端测试框架允许开发者利用他们已经熟悉的工具，例如浏览器开发工具。

#### 无头模式下的可见性 [​](#visibility-in-headless-mode)

当端到端测试在 CI/CD 管道中运行时，它们通常在无头浏览器（即不带界面的浏览器）中运行。因此，当错误发生时，现代端到端测试框架的一个关键特性是能够在不同的测试阶段查看应用的快照、视频，从而深入了解错误的原因。而在很早以前，要手动维护这些集成是非常繁琐的。

### 推荐方案 [​](#recommendation-2)

*   [Cypress](https://www.cypress.io/)
    
    总的来说，我们认为 Cypress 提供了最完整的端到端解决方案，其具有信息丰富的图形界面、出色的调试性、内置断言和存根、抗剥落性、并行化和快照等诸多特性。而且如上所述，它还提供对 [组件测试](https://docs.cypress.io/guides/component-testing/introduction) 的支持。不过，它只支持测试基于 Chromium 的浏览器和 Firefox。
    

### 其他选项 [​](#other-options-2)

*   [Playwright](https://playwright.dev/) 也是一个非常好的端到端测试解决方案，支持测试范围更广的浏览器品类（主要是 WebKit 型的）。查看这篇文章 [《为什么选择 Playwright》](https://playwright.dev/docs/why-playwright) 了解更多细节。
    
*   [Nightwatch v2](https://v2.nightwatchjs.org/) 是一个基于 [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver) 的端到端测试解决方案。它的浏览器品类支持范围是最广的。
    

用例指南 [​](#recipes)
------------------

### 添加 Vitest 到项目中 [​](#adding-vitest-to-a-project)

在一个基于 Vite 的 Vue 项目中，运行如下命令：

sh

    > npm install -D vitest happy-dom @testing-library/vue

接着，更新你的 Vite 配置，添加上 `test` 选项：

js

    // vite.config.js
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      // ...
      test: {
        // 启用类似 jest 的全局测试 API
        globals: true,
        // 使用 happy-dom 模拟 DOM
        // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
        environment: 'happy-dom'
      }
    })

TIP

如果你在使用 TypeScript，请将 `vitest/globals` 添加到 `tsconfig.json` 的 `types` 字段当中。

json

    // tsconfig.json
    
    {
     "compilerOptions": {
        "types": ["vitest/globals"]
      }
    }

接着在你的项目中创建名字以 `*.test.js` 结尾的文件。你可以把所有的测试文件放在项目根目录下的 `test` 目录中，或者放在源文件旁边的 `test` 目录中。Vitest 会使用命名规则自动搜索它们。

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
    
      // 断言输出
      getByText('...')
    })

最后，在 `package.json` 之中添加测试命令，然后运行它：

json

    {
      // ...
      "scripts": {
        "test": "vitest"
      }
    }

sh

    > npm test

### 测试组合式函数 [​](#testing-composables)

> 这一小节假设你已经读过了[组合式函数](/guide/reusability/composables.html)这一章。

当涉及到测试组合式函数时，我们可以根据是否依赖宿主组件实例把它们分为两类。

当一个组合式函数使用以下 API 时，它依赖于一个宿主组件实例：

*   生命周期钩子
*   供给/注入

如果一个组合式程序只使用响应式 API，那么它可以通过直接调用并断言其返回的状态或方法来进行测试。

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

一个依赖生命周期钩子或供给/注入的组合式函数需要被包装在一个宿主组件中才可以测试。我们可以创建下面这样的帮手函数：

js

    // test-utils.js
    import { createApp } from 'vue'
    
    export function withSetup(composable) {
      let result
      const app = createApp({
        setup() {
          result = composable()
          // 忽略模板警告
          return () => {}
        }
      })
      app.mount(document.createElement('div'))
      // 返回结果与应用实例
      // 用来测试供给和组件卸载
      return [result, app]
    }

js

    import { withSetup } from './test-utils'
    import { useFoo } from './foo'
    
    test('useFoo', () => {
      const [result, app] = withSetup(() => useFoo(123))
      // 为注入的测试模拟一方供给
      app.provide(...)
      // 执行断言
      expect(result.foo.value).toBe(1)
      // 如果需要的话可以这样触发
      app.unmount()
    })

对于更复杂的组合式函数，通过使用[组件测试](#component-testing)编写针对这个包装器组件的测试，这会容易很多。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/testing.md)
服务端渲染 (SSR) [​](#server-side-rendering-ssr)
===========================================

总览 [​](#overview)
-----------------

### 什么是 SSR？ [​](#what-is-ssr)

Vue.js 是一个用于构建客户端应用的框架。默认情况下，Vue 组件的职责是在浏览器中生成和操作 DOM。然而，Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。

一个由服务端渲染的 Vue.js 应用也可以被认为是“同构的”(Isomorphic) 或“通用的”(Universal)，因为应用的大部分代码同时运行在服务端**和**客户端。

### 为什么要用 SSR？ [​](#why-ssr)

与客户端的单页应用 (SPA) 相比，SSR 的优势主要在于：

*   **更快的首屏加载**：这一点在慢网速或者运行缓慢的设备上尤为重要。服务端渲染的 HTML 无需等到所有的 JavaScript 都下载并执行完成之后才显示，所以你的用户将会更快地看到完整渲染的页面。除此之外，数据获取过程在首次访问时在服务端完成，相比于从客户端获取，可能有更快的数据库连接。这通常可以带来更高的[核心 Web 指标](https://web.dev/vitals/)评分、更好的用户体验，而对于那些“首屏加载速度与转化率直接相关”的应用来说，这点可能至关重要。
    
*   **统一的心智模型**：你可以使用相同的语言以及相同的声明式、面向组件的心智模型来开发整个应用，而不需要在后端模板系统和前端框架之间来回切换。
    
*   **更好的 SEO**：搜索引擎爬虫可以直接看到完全渲染的页面。
    
    TIP
    
    截至目前，Google 和 Bing 可以很好地对同步 JavaScript 应用进行索引。这里的“同步”是关键词。如果你的应用以一个 loading 动画开始，然后通过 Ajax 获取内容，爬虫并不会等到内容加载完成再抓取。也就是说，如果 SEO 对你的页面至关重要，而你的内容又是异步获取的，那么 SSR 可能是必需的。
    

使用 SSR 时还有一些权衡之处需要考量：

*   开发中的限制。浏览器端特定的代码只能在某些生命周期钩子中使用；一些外部库可能需要特殊处理才能在服务端渲染的应用中运行。
    
*   更多的与构建配置和部署相关的要求。服务端渲染的应用需要一个能让 Node.js 服务器运行的环境，不像完全静态的 SPA 那样可以部署在任意的静态文件服务器上。
    
*   更高的服务端负载。在 Node.js 中渲染一个完整的应用要比仅仅托管静态文件更加占用 CPU 资源，因此如果你预期有高流量，请为相应的服务器负载做好准备，并采用合理的缓存策略。
    

在为你的应用使用 SSR 之前，你首先应该问自己是否真的需要它。这主要取决于首屏加载速度对应用的重要程度。例如，如果你正在开发一个内部的管理面板，初始加载时的那额外几百毫秒对你来说并不重要，这种情况下使用 SSR 就没有太多必要了。然而，在内容展示速度极其重要的场景下，SSR 可以尽可能地帮你实现最优的初始加载性能。

### SSR vs. SSG [​](#ssr-vs-ssg)

**静态站点生成** (Static-Site Generation，缩写为 SSG)，也被称为预渲染，是另一种流行的构建快速网站的技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们可以只渲染一次，提前在构建过程中完成，而不是每次请求进来都重新渲染页面。预渲染的页面生成后作为静态 HTML 文件被服务器托管。

SSG 保留了和 SSR 应用相同的性能表现：它带来了优秀的首屏加载性能。同时，它比 SSR 应用的花销更小，也更容易部署，因为它输出的是静态 HTML 和资源文件。这里的关键词是**静态**：SSG 仅可以用于消费静态数据的页面，即数据在构建期间就是已知的，并且在多次部署期间不会改变。每当数据变化时，都需要重新部署。

如果你调研 SSR 只是为了优化为数不多的营销页面的 SEO (例如 `/`、`/about` 和 `/contact` 等)，那么你可能需要 SSG 而不是 SSR。SSG 也非常适合构建基于内容的网站，比如文档站点或者博客。事实上，你现在正在阅读的这个网站就是使用 [VitePress](https://vitepress.vuejs.org/) 静态生成的，它是一个由 Vue 驱动的静态站点生成器。

基础教程 [​](#basic-tutorial)
-------------------------

### 渲染一个应用 [​](#rendering-an-app)

让我们来看一个 Vue SSR 最基础的实战示例。

1.  创建一个新的文件夹，`cd` 进入
2.  执行 `npm init -y`
3.  在 `package.json` 中添加 `"type": "module"` 使 Node.js 以 [ES modules mode](https://nodejs.org/api/esm.html#modules-ecmascript-modules) 运行
4.  执行 `npm install vue`
5.  创建一个 `example.js` 文件：

js

    // 此文件运行在 Node.js 服务器上
    import { createSSRApp } from 'vue'
    // Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
    import { renderToString } from 'vue/server-renderer'
    
    const app = createSSRApp({
      data: () => ({ count: 1 }),
      template: `<button @click="count++">{{ count }}</button>`
    })
    
    renderToString(app).then((html) => {
      console.log(html)
    })

接着运行：

sh

    > node example.js

它应该会在命令行中打印出如下内容：

    <button>1</button>

[`renderToString()`](/api/ssr.html#rendertostring) 接收一个 Vue 应用实例作为参数，返回一个 Promise，当 Promise resolve 时得到应用渲染的 HTML。当然你也可以使用 [Node.js Stream API](https://nodejs.org/api/stream.html) 或者 [Web Streams API](https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API) 来执行流式渲染。查看 [SSR API 参考](/api/ssr.html)获取完整的相关细节。

然后我们可以把 Vue SSR 的代码移动到一个服务器请求处理函数里，它将应用的 HTML 片段包装为完整的页面 HTML。接下来的几步我们将会使用 [`express`](https://expressjs.com/)：

*   执行 `npm install express`
*   创建下面的 `server.js` 文件：

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

最后，执行 `node server.js`，访问 `http://localhost:3000`。你应该可以看到页面中的按钮了。

[在 StackBlitz 上试试](https://stackblitz.com/fork/vue-ssr-example-basic?file=index.js)

### 客户端激活 [​](#client-hydration)

如果你点击该按钮，你会发现数字并没有改变。这段 HTML 在客户端是完全静态的，因为我们没有在浏览器中加载 Vue。

为了使客户端的应用可交互，Vue 需要执行一个**激活**步骤。在激活过程中，Vue 会创建一个与服务端完全相同的应用实例，然后将每个组件与它应该控制的 DOM 节点相匹配，并添加 DOM 事件监听器。

为了在激活模式下挂载应用，我们应该使用 [`createSSRApp()`](/api/application.html#createssrapp) 而不是 `createApp()`：

js

    // 该文件运行在浏览器中
    import { createSSRApp } from 'vue'
    
    const app = createSSRApp({
      // ...和服务端完全一致的应用实例
    })
    
    // 在客户端挂载一个 SSR 应用时会假定
    // HTML 是预渲染的，然后执行激活过程，
    // 而不是挂载新的 DOM 节点
    app.mount('#app')

### 代码结构 [​](#code-structure)

想想我们该如何在客户端复用服务端的应用实现。这时我们就需要开始考虑 SSR 应用中的代码结构了——我们如何在服务器和客户端之间共享相同的应用代码呢？

这里我们将演示最基础的设置。首先，让我们将应用的创建逻辑拆分到一个单独的文件 `app.js` 中：

js

    // app.js (在服务器和客户端之间共享)
    import { createSSRApp } from 'vue'
    
    export function createApp() {
      return createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button @click="count++">{{ count }}</button>`
      })
    }

该文件及其依赖项在服务器和客户端之间共享——我们称它们为**通用代码**。编写通用代码时有一些注意事项，我们将[在下面讨论](#writing-ssr-friendly-code)。

我们在客户端入口导入通用代码，创建应用并执行挂载：

js

    // client.js
    import { createApp } from './app.js'
    
    createApp().mount('#app')

服务器在请求处理函数中使用相同的应用创建逻辑：

js

    // server.js (不相关的代码省略)
    import { createApp } from './app.js'
    
    server.get('/', (req, res) => {
      const app = createApp()
      renderToString(app).then(html => {
        // ...
      })
    })

此外，为了在浏览器中加载客户端文件，我们还需要：

1.  在 `server.js` 中添加 `server.use(express.static('.'))` 来托管客户端文件。
2.  将 `<script type="module" src="/client.js"></script>` 添加到 HTML 外壳以加载客户端入口文件。
3.  通过在 HTML 外壳中添加 [Import Map](https://github.com/WICG/import-maps) 以支持在浏览器中使用 `import * from 'vue'`。

[在 StackBlitz 上尝试完整的示例](https://stackblitz.com/fork/vue-ssr-example?file=index.js)。按钮现在可以交互了！

更通用的解决方案 [​](#higher-level-solutions)
-------------------------------------

从上面的例子到一个生产就绪的 SSR 应用还需要很多工作。我们将需要：

*   支持 Vue SFC 且满足其他构建步骤要求。事实上，我们需要为同一个应用执行两次构建过程：一次用于客户端，一次用于服务器。
    
    TIP
    
    Vue 组件用在 SSR 时的编译产物不同——模板被编译为字符串拼接而不是 render 函数，以此提高渲染性能。
    
*   在服务器请求处理函数中，确保返回的 HTML 包含正确的客户端资源链接和最优的资源加载提示 (如 prefetch 和 preload)。我们可能还需要在 SSR 和 SSG 模式之间切换，甚至在同一个应用中混合使用这两种模式。
    
*   以一种通用的方式管理路由、数据获取和状态存储。
    

完整的实现会非常复杂，并且取决于你选择使用的构建工具链。因此，我们强烈建议你使用一种更通用的、更集成化的解决方案，帮你抽象掉那些复杂的东西。下面推荐几个 Vue 生态中的 SSR 解决方案。

### Nuxt [​](#nuxt)

[Nuxt](https://nuxt.com/) 是一个构建于 Vue 生态系统之上的全栈框架，它为编写 Vue SSR 应用提供了丝滑的开发体验。更棒的是，你还可以把它当作一个静态站点生成器来用！我们强烈建议你试一试。

### Quasar [​](#quasar)

[Quasar](https://quasar.dev) 是一个基于 Vue 的完整解决方案，它可以让你用同一套代码库构建不同目标的应用，如 SPA、SSR、PWA、移动端应用、桌面端应用以及浏览器插件。除此之外，它还提供了一整套 Material Design 风格的组件库。

### Vite SSR [​](#vite-ssr)

Vite 提供了内置的 [Vue 服务端渲染支持](https://cn.vitejs.dev/guide/ssr.html)，但它在设计上是偏底层的。如果你想要直接使用 Vite，可以看看 [vite-plugin-ssr](https://vite-plugin-ssr.com/)，一个帮你抽象掉许多复杂细节的社区插件。

你也可以在[这里](https://github.com/vitejs/vite-plugin-vue/tree/main/playground/ssr-vue)查看一个使用手动配置的 Vue + Vite SSR 的示例项目，以它作为基础来构建。请注意，这种方式只有在你有丰富的 SSR 和构建工具经验，并希望对应用的架构做深入的定制时才推荐使用。

书写 SSR 友好的代码 [​](#writing-ssr-friendly-code)
--------------------------------------------

无论你的构建配置或顶层框架的选择如何，下面的原则在所有 Vue SSR 应用中都适用。

### 服务端的响应性 [​](#reactivity-on-the-server)

在 SSR 期间，每一个请求 URL 都会映射到我们应用中的一个期望状态。因为没有用户交互和 DOM 更新，所以响应性在服务端是不必要的。为了更好的性能，默认情况下响应性在 SSR 期间是禁用的。

### 组件生命周期钩子 [​](#component-lifecycle-hooks)

因为没有任何动态更新，所以像 `mounted``onMounted` 或者 `updated``onUpdated` 这样的生命周期钩子**不会**在 SSR 期间被调用，而只会在客户端运行。只有 `beforeCreate` 和 `created` 这两个钩子会在 SSR 期间被调用。

你应该避免在 `beforeCreate` 和 `created``setup()` 或者 `<script setup>` 的根作用域中使用会产生副作用且需要被清理的代码。这类副作用的常见例子是使用 `setInterval` 设置定时器。我们可能会在客户端特有的代码中设置定时器，然后在 `beforeUnmount``onBeforeUnmount` 或 `unmounted``onUnmounted` 中清除。然而，由于 unmount 钩子不会在 SSR 期间被调用，所以定时器会永远存在。为了避免这种情况，请将含有副作用的代码放到 `mounted``onMounted` 中。

### 访问平台特有 API [​](#access-to-platform-specific-apis)

通用代码不能访问平台特有的 API，如果你的代码直接使用了浏览器特有的全局变量，比如 `window` 或 `document`，他们会在 Node.js 运行时报错，反过来也一样。

对于在服务器和客户端之间共享，但使用了不同的平台 API 的任务，建议将平台特定的实现封装在一个通用的 API 中，或者使用能为你做这件事的库。例如你可以使用 [`node-fetch`](https://github.com/node-fetch/node-fetch) 在服务端和客户端使用相同的 fetch API。

对于浏览器特有的 API，通常的方法是在仅客户端特有的生命周期钩子中惰性地访问它们，例如 `mounted``onMounted`。

请注意，如果一个第三方库编写时没有考虑到通用性，那么要将它集成到一个 SSR 应用中可能会很棘手。你_或许_可以通过模拟一些全局变量来让它工作，但这只是一种 hack 手段并且可能会影响到其他库的环境检测代码。

### 跨请求状态污染 [​](#cross-request-state-pollution)

在状态管理一章中，我们介绍了一种[使用响应式 API 的简单状态管理模式](./state-management.html#simple-state-management-with-reactivity-api)。而在 SSR 环境中，这种模式需要一些额外的调整。

上述模式在一个 JavaScript 模块的根作用域中声明共享的状态。这是一种**单例模式**——即在应用的整个生命周期中只有一个响应式对象的实例。这在纯客户端的 Vue 应用中是可以的，因为对于浏览器的每一个页面访问，应用模块都会重新初始化。

然而，在 SSR 环境下，应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样。如果我们用单个用户特定的数据对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个用户的请求。我们把这种情况称为**跨请求状态污染**。

从技术上讲，我们可以在每个请求上重新初始化所有 JavaScript 模块，就像我们在浏览器中所做的那样。但是，初始化 JavaScript 模块的成本可能很高，因此这会显著影响服务器性能。

推荐的解决方案是在每个请求中为整个应用创建一个全新的实例，包括 router 和全局 store。然后，我们使用[应用层级的 provide 方法](/guide/components/provide-inject.html#app-level-provide)来提供共享状态，并将其注入到需要它的组件中，而不是直接在组件中将其导入：

js

    // app.js （在服务端和客户端间共享）
    import { createSSRApp } from 'vue'
    import { createStore } from './store.js'
    
    // 每次请求时调用
    export function createApp() {
      const app = createSSRApp(/* ... */)
      // 对每个请求都创建新的 store 实例
      const store = createStore(/* ... */)
      // 提供应用级别的 store
      app.provide('store', store)
      // 也为激活过程暴露出 store
      return { app, store }
    }

像 Pinia 这样的状态管理库在设计时就考虑到了这一点。请参考 [Pinia 的 SSR 指南](https://pinia.vuejs.org/zh/ssr/)以了解更多细节。

### 激活不匹配 [​](#hydration-mismatch)

如果预渲染的 HTML 的 DOM 结构不符合客户端应用的期望，就会出现激活不匹配。最常见的激活不匹配是以下几种原因导致的：

1.  组件模板中存在不符合规范的 HTML 结构，渲染后的 HTML 被浏览器原生的 HTML 解析行为纠正导致不匹配。举例来说，一个常见的错误是 [`<div>` 不能被放在 `<p>` 中](https://stackoverflow.com/questions/8397852/why-cant-the-p-tag-contain-a-div-tag-inside-it)：
    
    html
    
        <p><div>hi</div></p>
    
    如果我们在服务器渲染的 HTML 中出现这样的代码，当遇到 `<div>` 时，浏览器会结束第一个 `<p>`，并解析为以下 DOM 结构：
    
    html
    
        <p></p>
        <div>hi</div>
        <p></p>
    
2.  渲染所用的数据中包含随机生成的值。由于同一个应用会在服务端和客户端执行两次，每次执行生成的随机数都不能保证相同。避免随机数不匹配有两种选择：
    
    1.  利用 `v-if` + `onMounted` 让需要用到随机数的模板只在客户端渲染。你所用的上层框架可能也会提供简化这个用例的内置 API，比如 VitePress 的 `<ClientOnly>` 组件。
        
    2.  使用一个能够接受随机种子的随机数生成库，并确保服务端和客户端使用同样的随机数种子 (比如把种子包含在序列化的状态中，然后在客户端取回)。
        
3.  服务端和客户端的时区不一致。有时候我们可能会想要把一个时间转换为用户的当地时间，但在服务端的时区跟用户的时区可能并不一致，我们也并不能可靠的在服务端预先知道用户的时区。这种情况下，当地时间的转换也应该作为纯客户端逻辑去执行。
    

当 Vue 遇到激活不匹配时，它将尝试自动恢复并调整预渲染的 DOM 以匹配客户端的状态。这将导致一些渲染性能的损失，因为需要丢弃不匹配的节点并渲染新的节点，但大多数情况下，应用应该会如预期一样继续工作。尽管如此，最好还是在开发过程中发现并避免激活不匹配。

### 自定义指令 [​](#custom-directives)

因为大多数的自定义指令都包含了对 DOM 的直接操作，所以它们会在 SSR 时被忽略。但如果你想要自己控制一个自定义指令在 SSR 时应该如何被渲染 (即应该在渲染的元素上添加哪些 attribute)，你可以使用 `getSSRProps` 指令钩子：

js

    const myDirective = {
      mounted(el, binding) {
        // 客户端实现：
        // 直接更新 DOM
        el.id = binding.value
      },
      getSSRProps(binding) {
        // 服务端实现：
        // 返回需要渲染的 prop
        // getSSRProps 只接收一个 binding 参数
        return {
          id: binding.value
        }
      }
    }

### Teleports [​](#teleports)

在 SSR 的过程中 Teleport 需要特殊处理。如果渲染的应用包含 Teleport，那么其传送的内容将不会包含在主应用渲染出的字符串中。在大多数情况下，更推荐的方案是在客户端挂载时条件式地渲染 Teleport。

如果你需要激活 Teleport 内容，它们会暴露在服务端渲染上下文对象的 `teleports` 属性下：

js

    const ctx = {}
    const html = await renderToString(app, ctx)
    
    console.log(ctx.teleports) // { '#teleported': 'teleported content' }

跟主应用的 HTML 一样，你需要自己将 Teleport 对应的 HTML 嵌入到最终页面上的正确位置处。

TIP

请避免在 SSR 的同时把 Teleport 的目标设为 `body`——通常 `<body>` 会包含其他服务端渲染出来的内容，这会使得 Teleport 无法确定激活的正确起始位置。

推荐用一个独立的只包含 teleport 的内容的容器，例如 `<div id="teleported"></div>`。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/scaling-up/ssr.md)
生产部署 [​](#production-deployment)
================================

开发环境 vs. 生产环境 [​](#development-vs-production)
---------------------------------------------

在开发过程中，Vue 提供了许多功能来提升开发体验：

*   对常见错误和隐患的警告
*   对组件 props / 自定义事件的校验
*   [响应性调试钩子](/guide/extras/reactivity-in-depth.html#reactivity-debugging)
*   开发工具集成

然而，这些功能在生产环境中并不会被使用，一些警告检查也会产生少量的性能开销。当部署到生产环境中时，我们应该移除所有未使用的、仅用于开发环境的代码分支，来获得更小的包体积和更好的性能。

不使用构建工具 [​](#without-build-tools)
---------------------------------

如果你没有使用任何构建工具，而是从 CDN 或其他源来加载 Vue，请确保在部署时使用的是生产环境版本（以 `.prod.js` 结尾的构建文件）。生产环境版本会被最小化，并移除了所有仅用于开发环境的代码分支。

*   如果需要使用全局变量版本（通过 `Vue` 全局变量访问）：请使用 `vue.global.prod.js`。
*   如果需要 ESM 版本（通过原生 ESM 导入访问）：请使用 `vue.esm-browser.prod.js`。

更多细节请参考[构建文件指南](https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use)。

使用构建工具 [​](#with-build-tools)
-----------------------------

通过 `create-vue`（基于 Vite）或是 Vue CLI（基于 webpack）搭建的项目都已经预先做好了针对生产环境的配置。

如果使用了自定义的构建，请确保：

1.  `vue` 被解析为 `vue.runtime.esm-bundler.js`。
2.  [编译时功能标记](https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags)已被正确配置。
3.  `process.env.NODE_ENV` 会在构建时被替换为 `"production"`。

其他参考：

*   [Vite 生产环境指南](https://cn.vitejs.dev/guide/build.html)
*   [Vite 部署指南](https://cn.vitejs.dev/guide/static-deploy.html)
*   [Vue CLI 部署指南](https://cli.vuejs.org/zh/guide/deployment.html)

追踪运行时错误 [​](#tracking-runtime-errors)
-------------------------------------

[应用级错误处理](/api/application.html#app-config-errorhandler) 可以用来向追踪服务报告错误：

js

    import { createApp } from 'vue'
    const app = createApp(...)
    app.config.errorHandler = (err, instance, info) => {
      // 向追踪服务报告错误
    }

诸如 [Sentry](https://docs.sentry.io/platforms/javascript/guides/vue/) 和 [Bugsnag](https://docs.bugsnag.com/platforms/javascript/vue/) 等服务也为 Vue 提供了官方集成。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/best-practices/production-deployment.md)
性能优化 [​](#performance)
======================

概述 [​](#overview)
-----------------

Vue 在大多数常见场景下性能都是很优秀的，通常不需要手动优化。然而，总会有一些具有挑战性的场景需要进行针对性的微调。在本节中，我们将讨论用 Vue 开发的应用在性能方面该注意些什么。

首先，让我们区分一下 web 应用性能的两个主要方面：

*   **页面加载性能**：首次访问时，应用展示出内容与达到可交互状态的速度。这通常会用 Google 所定义的一系列 [Web 指标](https://web.dev/vitals/#core-web-vitals) (Web Vitals) 来进行衡量，如[最大内容绘制](https://web.dev/lcp/) (Largest Contentful Paint，缩写为 LCP) 和[首次输入延迟](https://web.dev/fid/) (First Input Delay，缩写为 FID)。
    
*   **更新性能**：应用响应用户输入更新的速度。比如当用户在搜索框中输入时结果列表的更新速度，或者用户在一个单页面应用 (SPA) 中点击链接跳转页面时的切换速度。
    

虽然最理想的情况是将两者都最大化，但是不同的前端架构往往会影响到在这些方面是否能达到更理想的性能。此外，你所构建的应用的类型极大地影响了你在性能方面应该优先考虑的问题。因此，优化性能的第一步是为你的应用类型确定合适的架构：

*   查看[使用 Vue 的多种方式](/guide/extras/ways-of-using-vue.html)这一章看看如何用不同的方式围绕 Vue 组织架构。
    
*   Jason Miller 在 [Application Holotypes](https://jasonformat.com/application-holotypes/) 一文中讨论了 Web 应用的类型以及它们各自的理想实现/交付方式。
    

分析选项 [​](#profiling-options)
----------------------------

为了提高性能，我们首先需要知道如何衡量它。在这方面，有一些很棒的工具可以提供帮助：

用于生产部署的负载性能分析：

*   [PageSpeed Insights](https://pagespeed.web.dev/)
*   [WebPageTest](https://www.webpagetest.org/)

用于本地开发期间的性能分析：

*   [Chrome 开发者工具“性能”面板](https://developer.chrome.com/docs/devtools/evaluate-performance/)
    *   [`app.config.performance`](/api/application.html#app-config-performance) 将会开启 Vue 特有的性能标记，标记在 Chrome 开发者工具的性能时间线上。
*   [Vue 开发者扩展](/guide/scaling-up/tooling.html#browser-devtools)也提供了性能分析的功能。

页面加载优化 [​](#page-load-optimizations)
------------------------------------

页面加载优化有许多跟框架无关的方面 - 这份 [web.dev 指南](https://web.dev/fast/)提供了一个全面的总结。这里，我们将主要关注和 Vue 相关的技巧。

### 选用正确的架构 [​](#choosing-the-right-architecture)

如果你的用例对页面加载性能很敏感，请避免将其部署为纯客户端的 SPA，而是让服务器直接发送包含用户想要查看的内容的 HTML 代码。纯客户端渲染存在首屏加载缓慢的问题，这可以通过[服务器端渲染 (SSR)](/guide/extras/ways-of-using-vue.html#fullstack-ssr) 或[静态站点生成 (SSG)](/guide/extras/ways-of-using-vue.html#jamstack-ssg) 来缓解。查看 [SSR 指南](/guide/scaling-up/ssr.html)以了解如何使用 Vue 实现 SSR。如果应用对交互性要求不高，你还可以使用传统的后端服务器来渲染 HTML，并在客户端使用 Vue 对其进行增强。

如果你的主应用必须是 SPA，但还有其他的营销相关页面 (落地页、关于页、博客等)，请单独部署这些页面！理想情况下，营销页面应该是包含尽可能少 JS 的静态 HTML，并用 SSG 方式部署。

### 包体积与 Tree-shaking 优化 [​](#bundle-size-and-tree-shaking)

一个最有效的提升页面加载速度的方法就是压缩 JavaScript 打包产物的体积。当使用 Vue 时有下面一些办法来减小打包产物体积：

*   尽可能地采用构建步骤
    
    *   如果使用的是相对现代的打包工具，许多 Vue 的 API 都是可以被 [tree-shake](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) 的。举例来说，如果你根本没有使用到内置的 `<Transition>` 组件，它将不会被打包进入最终的产物里。Tree-shaking 也可以移除你源代码中其他未使用到的模块。
        
    *   当使用了构建步骤时，模板会被预编译，因此我们无须在浏览器中载入 Vue 编译器。这在同样最小化加上 gzip 优化下会相对缩小 **14kb** 并避免运行时的编译开销。
        
*   在引入新的依赖项时要小心包体积膨胀！在现实的应用中，包体积膨胀通常因为无意识地引入了过重的依赖导致的。
    
    *   如果使用了构建步骤，应当尽量选择提供 ES 模块格式的依赖，它们对 tree-shaking 更友好。举例来说，选择 `lodash-es` 比 `lodash` 更好。
        
    *   查看依赖的体积，并评估与其所提供的功能之间的性价比。如果依赖对 tree-shaking 友好，实际增加的体积大小将取决于你从它之中导入的 API。像 [bundlejs.com](https://bundlejs.com/) 这样的工具可以用来做快速的检查，但是根据实际的构建设置来评估总是最准确的。
        
*   如果你只在渐进式增强的场景下使用 Vue，并想要避免使用构建步骤，请考虑使用 [petite-vue](https://github.com/vuejs/petite-vue) (只有 **6kb**) 来代替。
    

### 代码分割 [​](#code-splitting)

代码分割是指构建工具将构建后的 JavaScript 包拆分为多个较小的，可以按需或并行加载的文件。通过适当的代码分割，页面加载时需要的功能可以立即下载，而额外的块只在需要时才加载，从而提高性能。

像 Rollup (Vite 就是基于它之上开发的) 或者 webpack 这样的打包工具可以通过分析 ESM 动态导入的语法来自动进行代码分割：

js

    // lazy.js 及其依赖会被拆分到一个单独的文件中
    // 并只在 `loadLazy()` 调用时才加载
    function loadLazy() {
      return import('./lazy.js')
    }

懒加载对于页面初次加载时的优化帮助极大，它帮助应用暂时略过了那些不是立即需要的功能。在 Vue 应用中，这可以与 Vue 的[异步组件](/guide/components/async.html)搭配使用，为组件树创建分离的代码块：

js

    import { defineAsyncComponent } from 'vue'
    
    // 会为 Foo.vue 及其依赖创建单独的一个块
    // 它只会按需加载
    //（即该异步组件在页面中被渲染时）
    const Foo = defineAsyncComponent(() => import('./Foo.vue'))

对于使用了 Vue Router 的应用，强烈建议使用异步组件作为路由组件。Vue Router 已经显性地支持了独立于 `defineAsyncComponent` 的懒加载。查看[懒加载路由](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)了解更多细节。

更新优化 [​](#update-optimizations)
-------------------------------

### Props 稳定性 [​](#props-stability)

在 Vue 之中，一个子组件只会在其至少一个 props 改变时才会更新。思考以下示例：

template

    <ListItem
      v-for="item in list"
      :id="item.id"
      :active-id="activeId" />

在 `<ListItem>` 组件中，它使用了 `id` 和 `activeId` 两个 props 来确定它是否是当前活跃的那一项。虽然这是可行的，但问题是每当 `activeId` 更新时，列表中的**每一个** `<ListItem>` 都会跟着更新！

理想情况下，只有活跃状态发生改变的项才应该更新。我们可以将活跃状态比对的逻辑移入父组件来实现这一点，然后让 `<ListItem>` 改为接收一个 `active` prop：

template

    <ListItem
      v-for="item in list"
      :id="item.id"
      :active="item.id === activeId" />

现在，对于大多数的组件来说，`activeId` 改变时，它们的 `active` prop 都会保持不变，因此它们无需再更新。总结一下，这个技巧的核心思想就是让传给子组件的 props 尽量保持稳定。

### `v-once` [​](#v-once)

`v-once` 是一个内置的指令，可以用来渲染依赖运行时数据但无需再更新的内容。它的整个子树都会在未来的更新中被跳过。查看它的 [API 参考手册](/api/built-in-directives.html#v-once)可以了解更多细节。

### `v-memo` [​](#v-memo)

`v-memo` 是一个内置指令，可以用来有条件地跳过某些大型子树或者 `v-for` 列表的更新。查看它的 [API 参考手册](/api/built-in-directives.html#v-memo)可以了解更多细节。

通用优化 [​](#general-optimizations)
--------------------------------

> 以下技巧能同时改善页面加载和更新性能。

### 大型虚拟列表 [​](#virtualize-large-lists)

所有的前端应用中最常见的性能问题就是渲染大型列表。无论一个框架性能有多好，渲染成千上万个列表项**都会**变得很慢，因为浏览器需要处理大量的 DOM 节点。

但是，我们并不需要立刻渲染出全部的列表。在大多数场景中，用户的屏幕尺寸只会展示这个巨大列表中的一小部分。我们可以通过**列表虚拟化**来提升性能，这项技术使我们只需要渲染用户视口中能看到的部分。

要实现列表虚拟化并不简单，幸运的是，你可以直接使用现有的社区库：

*   [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)
*   [vue-virtual-scroll-grid](https://github.com/rocwang/vue-virtual-scroll-grid)
*   [vueuc/VVirtualList](https://github.com/07akioni/vueuc)

### 减少大型不可变数据的响应性开销 [​](#reduce-reactivity-overhead-for-large-immutable-structures)

Vue 的响应性系统默认是深度的。虽然这让状态管理变得更直观，但在数据量巨大时，深度响应性也会导致不小的性能负担，因为每个属性访问都将触发代理的依赖追踪。好在这种性能负担通常只有在处理超大型数组或层级很深的对象时，例如一次渲染需要访问 100,000+ 个属性时，才会变得比较明显。因此，它只会影响少数特定的场景。

Vue 确实也为此提供了一种解决方案，通过使用 [`shallowRef()`](/api/reactivity-advanced.html#shallowref) 和 [`shallowReactive()`](/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 API 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理。这使得对深层级属性的访问变得更快，但代价是，我们现在必须将所有深层级对象视为不可变的，并且只能通过替换整个根状态来触发更新：

js

    const shallowArray = shallowRef([
      /* 巨大的列表，里面包含深层的对象 */
    ])
    
    // 这不会触发更新...
    shallowArray.value.push(newObject)
    // 这才会触发更新
    shallowArray.value = [...shallowArray.value, newObject]
    
    // 这不会触发更新...
    shallowArray.value[0].foo = 1
    // 这才会触发更新
    shallowArray.value = [
      {
        ...shallowArray.value[0],
        foo: 1
      },
      ...shallowArray.value.slice(1)
    ]

### 避免不必要的组件抽象 [​](#avoid-unnecessary-component-abstractions)

有些时候我们会去创建[无渲染组件](/guide/components/slots.html#renderless-components)或高阶组件 (用来渲染具有额外 props 的其他组件) 来实现更好的抽象或代码组织。虽然这并没有什么问题，但请记住，组件实例比普通 DOM 节点要昂贵得多，而且为了逻辑抽象创建太多组件实例将会导致性能损失。

需要提醒的是，只减少几个组件实例对于性能不会有明显的改善，所以如果一个用于抽象的组件在应用中只会渲染几次，就不用操心去优化它了。考虑这种优化的最佳场景还是在大型列表中。想象一下一个有 100 项的列表，每项的组件都包含许多子组件。在这里去掉一个不必要的组件抽象，可能会减少数百个组件实例的无谓性能消耗。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/best-practices/performance.md)
无障碍访问 [​](#accessibility)
=========================

Web 无障碍访问 (也称为 a11y) 是指创建可供任何人使用的网站的做法——无论是身患某种障碍、通过慢速的网络连接访问、使用老旧或损坏的硬件，还是仅处于某种不方便的环境。例如，在视频中添加字幕可以帮助失聪、有听力障碍或身处嘈杂环境而听不到手机的用户。同样地，确保文字样式没有处于太低的对比度，可以对低视力用户和在明亮的强光下使用手机的用户都有所帮助。

你是否已经准备开始却又无从下手？

请先阅读由[万维网联盟 (W3C)](https://www.w3.org/) 提供的 [Web 无障碍访问的规划和管理](https://www.w3.org/WAI/planning-and-managing/)。

跳过链接 [​](#skip-link)
--------------------

你应该在每个页面的顶部添加一个直接指向主内容区域的链接，这样用户就可以跳过在多个网页上重复的内容。

通常这个链接会放在 `App.vue` 的顶部，这样它就会是所有页面上的第一个可聚焦元素：

template

    <ul class="skip-links">
      <li>
        <a href="#main" ref="skipLink" class="skip-link">Skip to main content</a>
      </li>
    </ul>

若想在非聚焦状态下隐藏该链接，可以添加以下样式：

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

一旦用户改变路由，请将焦点放回到这个“跳过”链接。通过如下方式聚焦“跳过”链接的模板引用 (假设使用了 `vue-router`) 即可实现：

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

[阅读关于跳过链接到主要内容的文档](https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html)

内容结构 [​](#content-structure)
----------------------------

确保设计可以支持易于访问的实现是无障碍访问最重要的部分之一。设计不仅要考虑颜色对比度、字体选择、文本大小和语言，还要考虑应用中的内容是如何组织的。

### 标题 [​](#headings)

用户可以通过标题在应用中进行导航。为应用的每个部分设置描述性标题，这可以让用户更容易地预测每个部分的内容。说到标题，有几个推荐的无障碍访问实践：

*   按级别顺序嵌套标题：`<h1>` - `<h6>`
*   不要在一个章节内跳跃标题的级别
*   使用实际的标题标记，而不是通过对文本设置样式以提供视觉上的标题

[阅读更多有关标题的信息](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)

template

    <main role="main" aria-labelledby="main-title">
      <h1 id="main-title">Main title</h1>
      <section aria-labelledby="section-title-1">
        <h2 id="section-title-1"> Section Title </h2>
        <h3>Section Subtitle</h3>
        <!-- 内容 -->
      </section>
      <section aria-labelledby="section-title-2">
        <h2 id="section-title-2"> Section Title </h2>
        <h3>Section Subtitle</h3>
        <!-- 内容 -->
        <h3>Section Subtitle</h3>
        <!-- 内容 -->
      </section>
    </main>

### Landmarks [​](#landmarks)

[Landmark](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) 会为应用中的章节提供访问规划。依赖辅助技术的用户可以跳过内容直接导航到应用的每个部分。你可以使用 [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) 帮助你实现这个目标。

HTML

ARIA Role

地标的目的

header

role="banner"

主标题：页面的标题

nav

role="navigation"

适合用作文档或相关文档导航的链接集合

main

role="main"

文档的主体或中心内容

footer

role="contentinfo"

关于父级文档的信息：脚注/版权/隐私声明链接

aside

role="complementary"

用来支持主内容，同时其自身的内容是相对独立且有意义的

_无对应元素_

role="search"

该章节包含整个应用的搜索功能

form

role="form"

表单相关元素的集合

section

role="region"

相关的且用户可能会导航至此的内容。必须为该元素提供 label

提示：

建议同时使用 landmark HTML 元素和 role 属性，以最大程度地兼容[不支持 HTML5 语义元素的传统浏览器](https://caniuse.com/#feat=html5semantic)。

[阅读更多有关标题的细节](https://www.w3.org/TR/wai-aria-1.2/#landmark_roles)

语义化表单 [​](#semantic-forms)
--------------------------

当创建一个表单，你可能使用到以下几个元素：`<form>`、`<label>`、`<input>`、`<textarea>` 和 `<button>`。

标签通常放置在表格字段的顶部或左侧：

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

请注意这里我们是如何在表单元素中引入 `autocomplete='on'` 的，它将应用于表单中的所有 input 框。你也可以为每个 input 框都设置不同的 [autocomplete attribute 的值](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)。

### 标签 [​](#labels)

提供标签来描述所有表单控件的用途；使 `for` 和 `id` 链接起来：

template

    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name" />

如果你在 chrome 开发工具中检查这个元素，并打开 Elements 选项卡中的 Accessibility 选项卡，你将看到输入是如何从标签中获取其名称的：

![Chrome 开发者工具正在通过标签展示无障碍访问的 input 框的名字](/assets/AccessibleLabelChromeDevTools.8d40e8fa.png)

警告：

你可能还见过这样的包装 input 框的标签：

template

    <label>
      Name：
      <input type="text" name="name" id="name" v-model="name" />
    </label>

但我们仍建议你显式地为 input 元素设置 id 相匹配的标签，以更好地实现无障碍访问。

#### `aria-label` [​](#aria-label)

你也可以为 input 框配置一个带有 [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) 的无障碍访问名。

template

    <label for="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      v-model="name"
      :aria-label="nameLabel"
    />

在 Chrome DevTools 中审查此元素，查看无障碍名称是如何更改的：

![Chrome 开发者工具正在通过 aria-label 展示无障碍访问的 input 框名字](/assets/AccessibleARIAlabelDevTools.2b376a03.png)

#### `aria-labelledby` [​](#aria-labelledby)

使用 [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 类似于 `aria-label`，除非标签文本在屏幕上可见。它通过 `id` 与其他元素配对，你可以链接多个 `id`：

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

![Chrome 开发者工具通过 aria-labelledby 展示 input 的无障碍访问名称](/assets/AccessibleARIAlabelledbyDevTools.56ced2ed.png)

#### `aria-describedby` [​](#aria-describedby)

[aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 的用法与 `aria-labelledby` 相同，它提供了一条用户可能需要的附加描述信息。这可用于描述任何输入的标准：

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

你可以通过使用 Chrome 开发工具来查看说明：

![Chrome 开发者工具正在根据 aria-labelledby 和 aria-describedby 展示 input 的无障碍访问名和无障碍访问描述信息](/assets/AccessibleARIAdescribedby.659c43af.png)

### 占位符 [​](#placeholder)

避免使用占位符，因为它们可能会使许多用户感到困惑。

占位符的缺陷之一是默认情况下它们不符合[颜色对比度标准](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)；应当修改其颜色，让它看起来像是预先填入 input 框中的数据一样。查看以下示例，可以看到满足颜色对比度条件的姓氏占位符看起来像预填充的数据：

![可访问的占位文本](/assets/AccessiblePlaceholder.5dfc1226.png)

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

最好在表单外提供所有用户需要填写输入的信息。

### 用法说明 [​](#instructions)

添加用法说明时，请确保将其正确链接到目标 input 框。你可以提供附加用法说明并在 [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 内绑定多个 id。这可以使设计更加灵活。

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

或者，你可以通过 [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 将用法说明附加到 input 框上。

template

    <fieldset>
      <legend>Using aria-describedby</legend>
      <label id="dob" for="dob">Date of Birth:</label>
      <input type="date" name="dob" id="dob" aria-describedby="dob-instructions" />
      <p id="dob-instructions">MM/DD/YYYY</p>
    </fieldset>

### 隐藏内容 [​](#hiding-content)

通常，即使 input 框具有无障碍的名称，也不建议在视觉上隐藏标签。但是，如果可以借助周围的内容来理解输入的功能，那么我们也可以隐藏视觉标签。

让我们看看这个搜索框：

template

    <form role="search">
      <label for="search" class="hidden-visually">Search: </label>
      <input type="text" name="search" id="search" v-model="search" />
      <button type="submit">Search</button>
    </form>

现在，只要视力情况良好，用户可以就能通过按钮的内容识别出该 input 框的目的。

此时我们可以使用 CSS 从视觉上隐藏元素，同时也不会影响到无障碍访问：

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

添加 `aria-hidden="true"` 在无障碍访问时被隐藏，但对其他可视用户仍然是可见的。不要在可聚焦的元素上使用它，请只在装饰性的、重复的或屏幕外的内容上使用它。

template

    <p>This is not hidden from screen readers.</p>
    <p aria-hidden="true">This is hidden from screen readers.</p>

### 按钮 [​](#buttons)

在表单中使用按钮时，必须设置类型以防止提交表单。 你也可以使用一个 input 元素来创建按钮：

template

    <form action="/dataCollectionLocation" method="post" autocomplete="on">
      <!-- 按钮 -->
      <button type="button">Cancel</button>
      <button type="submit">Submit</button>
    
      <!-- 输入按钮 -->
      <input type="button" value="Cancel" />
      <input type="submit" value="Submit" />
    </form>

### 功能图片 [​](#functional-images)

你可以使用这种方式来创建一个带有功能的图片。

*   input 框
    
    *   这些图片会像一个类型为 submit 的表单按钮一样
    
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
    
*   图标
    

template

    <form role="search">
      <label for="searchIcon" class="hidden-visually">Search: </label>
      <input type="text" name="searchIcon" id="searchIcon" v-model="searchIcon" />
      <button type="submit">
        <i class="fas fa-search" aria-hidden="true"></i>
        <span class="hidden-visually">Search</span>
      </button>
    </form>

规范 [​](#standards)
------------------

万维网联盟 (W3C) Web 无障碍访问倡议 (WAI) 为不同的组件制定了 Web 无障碍性标准：

*   [用户代理无障碍访问指南 (UAAG)](https://www.w3.org/WAI/standards-guidelines/uaag/)
    *   浏览器和媒体查询，包括一些其他方面的辅助技术
*   [创作工具无障碍访问指南 (ATAG)](https://www.w3.org/WAI/standards-guidelines/atag/)
    *   创作工具
*   [Web 内容无障碍访问指南 (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
    *   网站内容 - 由开发者、创作工具和无障碍访问评估工具使用。

### 网络内容无障碍指南 (WCAG) [​](#web-content-accessibility-guidelines-wcag)

[WCAG 2.1](https://www.w3.org/TR/WCAG21/) 继承自 [WCAG 2.0](https://www.w3.org/TR/WCAG20/)，接纳 Web 演进过程中的新技术。W3C 鼓励在开发或更新 Web 无障碍访问策略时使用 WCAG 的最新版本。

#### WCAG 2.1 四大指导原则 (缩写 POUR)： [​](#wcag-2-1-four-main-guiding-principles-abbreviated-as-pour)

*   [可感知性](https://www.w3.org/TR/WCAG21/#perceivable)
    *   用户必须能够感知所渲染的信息
*   [可操作性](https://www.w3.org/TR/WCAG21/#operable)
    *   表单界面，控件和导航是可操作的
*   [可理解性](https://www.w3.org/TR/WCAG21/#understandable)
    *   信息和用户界面的操作必须为所有用户所理解
*   [健壮性](https://www.w3.org/TR/WCAG21/#robust)
    *   随着技术的进步，用户必须能够访问内容

#### Web 无障碍倡议 – 无障碍访问丰富的互联网应用 (WAI-ARIA) [​](#web-accessibility-initiative-–-accessible-rich-internet-applications-wai-aria)

W3C 的 WAI-ARIA 为如何构建动态内容和高阶用户界面控件提供了指导。

*   [可便捷访问的丰富互联网应用 (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
*   [WAI-ARIA 实践 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/)

资源 [​](#resources)
------------------

### 文档 [​](#documentation)

*   [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
*   [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
*   [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
*   [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/)

### 辅助技术 [​](#assistive-technologies)

*   屏幕助读器
    *   [NVDA](https://www.nvaccess.org/download/)
    *   [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
    *   [JAWS](https://www.freedomscientific.com/products/software/jaws/?utm_term=jaws%20screen%20reader&utm_source=adwords&utm_campaign=All+Products&utm_medium=ppc&hsa_tgt=kwd-394361346638&hsa_cam=200218713&hsa_ad=296201131673&hsa_kw=jaws%20screen%20reader&hsa_grp=52663682111&hsa_net=adwords&hsa_mt=e&hsa_src=g&hsa_acc=1684996396&hsa_ver=3&gclid=Cj0KCQjwnv71BRCOARIsAIkxW9HXKQ6kKNQD0q8a_1TXSJXnIuUyb65KJeTWmtS6BH96-5he9dsNq6oaAh6UEALw_wcB)
    *   [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)
*   缩放工具
    *   [MAGic](https://www.freedomscientific.com/products/software/magic/)
    *   [ZoomText](https://www.zoomtext.com/)
    *   [Magnifier](https://support.microsoft.com/en-us/help/11542/windows-use-magnifier-to-make-things-easier-to-see)

### 测试 [​](#testing)

*   自动化相关的工具
    *   [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
    *   [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
    *   [ARC Toolkit](https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?hl=en-US)
*   颜色相关的工具
    *   [WebAim Color Contrast](https://webaim.org/resources/contrastchecker/)
    *   [WebAim Link Color Contrast](https://webaim.org/resources/linkcontrastchecker)
*   其他有用的工具
    *   [HeadingMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en%E2%80%A6)
    *   [Color Oracle](https://colororacle.org)
    *   [Focus Indicator](https://chrome.google.com/webstore/detail/focus-indicator/heeoeadndnhebmfebjccbhmccmaoedlf?hl=en-US%E2%80%A6)
    *   [NerdeFocus](https://chrome.google.com/webstore/detail/nerdefocus/lpfiljldhgjecfepfljnbjnbjfhennpd?hl=en-US%E2%80%A6)
    *   [Visual Aria](https://chrome.google.com/webstore/detail/visual-aria/lhbmajchkkmakajkjenkchhnhbadmhmk?hl=en-US)
    *   [Silktide Website Accessibility Simulator](https://chrome.google.com/webstore/detail/silktide-website-accessib/okcpiimdfkpkjcbihbmhppldhiebhhaf?hl=en-US)

### 用户 [​](#users)

世界卫生组织估计，全世界 15% 的人口患有某种形式的残疾，其中约 2 - 4% 的人严重残疾。估计全世界有 10 亿残障人士，他们是世界上最大的少数群体。

残疾的种类繁多，大致可分为以下四类：

*   _[视觉](https://webaim.org/articles/visual/)_ - 可以为这些用户提供屏幕助读器、屏幕缩放、控制屏幕对比度或盲文显示等帮助。
*   _[听觉](https://webaim.org/articles/auditory/)_ - 可以为这些用户提供视频字幕、文字记录或手语视频。
*   _[运动能力](https://webaim.org/articles/motor/)_ - 可以为这些用户提供一系列[运动障碍辅助技术](https://webaim.org/articles/motor/assistive)中：比如语音识别软件、眼球跟踪、单刀式开关、超大轨迹球鼠标、自适应键盘等等。
*   _[认知能力](https://webaim.org/articles/cognitive/)_ - 可以为这些用户提供补充媒体、更清晰和简单、更结构化的内容。

你可以查看以下来自 WebAim 的链接，更深入地了解这些用户的需求：

*   [Web 无障碍愿景：探索改变 & 人人受益](https://www.w3.org/WAI/perspective-videos/)
*   [Web 用户的故事](https://www.w3.org/WAI/people-use-web/user-stories/)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/best-practices/accessibility.md)
安全 [​](#security)
=================

报告漏洞 [​](#reporting-vulnerabilities)
------------------------------------

当一个漏洞被上报时，它会立刻成为我们最关心的问题，会有全职的贡献者暂时搁置其他所有任务来解决这个问题。如需报告漏洞，请发送电子邮件至 [security@vuejs.org](mailto:security@vuejs.org)。

虽然很少发现新的漏洞，但我们仍建议始终使用最新版本的 Vue 及其官方配套库，以确保你的应用尽可能地安全。

首要规则：不要使用无法信赖的模板 [​](#rule-no-1-never-use-non-trusted-templates)
----------------------------------------------------------------

使用 Vue 时最基本的安全规则就是**不要将无法信赖的内容作为你的组件模板**。使用无法信赖的模板相当于允许任意的 JavaScript 在你的应用中执行。更糟糕的是，如果在服务端渲染时执行了这些代码，可能会导致服务器被攻击。举例来说：

js

    Vue.createApp({
      template: `<div>` + userProvidedString + `</div>` // 永远不要这样做！
    }).mount('#app')

Vue 模板会被编译成 JavaScript，而模板内的表达式将作为渲染过程的一部分被执行。尽管这些表达式在特定的渲染环境中执行，但由于全局执行环境的复杂性，Vue 作为一个开发框架，要在性能开销合理的前提下完全避免潜在的恶意代码执行是不现实的。避免这类问题最直接的方法是确保你的 Vue 模板始终是可信的，并且完全由你控制。

Vue 自身的安全机制 [​](#what-vue-does-to-protect-you)
----------------------------------------------

### HTML 内容 [​](#html-content)

无论是使用模板还是渲染函数，内容都是自动转义的。这意味着在这个模板中：

template

    <h1>{{ userProvidedString }}</h1>

如果 `userProvidedString` 包含了：

js

    '<script>alert("hi")</script>'

那么它将被转义为如下的 HTML：

template

    &lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;

从而防止脚本注入。这种转义是使用 `textContent` 这样的浏览器原生 API 完成的，所以只有当浏览器本身存在漏洞时，才会存在漏洞。

### Attribute 绑定 [​](#attribute-bindings)

同样地，动态 attribute 的绑定也会被自动转义。这意味着在这个模板中：

template

    <h1 :title="userProvidedString">
      hello
    </h1>

如果 `userProvidedString` 包含了：

js

    '" onclick="alert(\'hi\')'

那么它将被转义为如下的 HTML：

template

    &quot; onclick=&quot;alert('hi')

从而防止在 `title` attribute 解析时，注入任意的 HTML。这种转义是使用 `setAttribute` 这样的浏览器原生 API 完成的，所以只有当浏览器本身存在漏洞时，才会存在漏洞。

潜在的危险 [​](#potential-dangers)
-----------------------------

在任何 Web 应用中，允许以 HTML、CSS 或 JavaScript 形式执行未经无害化处理的、用户提供的内容都有潜在的安全隐患，因此这应尽可能避免。不过，有时候一些风险或许是可以接受的。

例如，像 CodePen 和 JSFiddle 这样的服务允许执行用户提供的内容，但这是在 iframe 这样一个可预期的沙盒环境中。当一个重要的功能本身会伴随某种程度的漏洞时，就需要你自行权衡该功能的重要性和该漏洞所带来的最坏情况。

### 注入 HTML [​](#html-injection)

我们现在已经知道 Vue 会自动转义 HTML 内容，防止你意外地将可执行的 HTML 注入到你的应用中。然而，**在你知道 HTML 安全的情况下**，你还是可以显式地渲染 HTML 内容。

*   使用模板：
    
    template
    
        <div v-html="userProvidedHtml"></div>
    
*   使用渲染函数：
    
    js
    
        h('div', {
          innerHTML: this.userProvidedHtml
        })
    
*   以 JSX 形式使用渲染函数：
    
    jsx
    
        <div innerHTML={this.userProvidedHtml}></div>
    

警告

用户提供的 HTML 永远不能被认为是 100% 安全的，除非它在 iframe 这样的沙盒环境中，或者该 HTML 只会被该用户看到。此外，允许用户编写自己的 Vue 模板也会带来类似的危险。

### URL 注入 [​](#url-injection)

在这样一个使用 URL 的场景中：

template

    <a :href="userProvidedUrl">
      click me
    </a>

如果这个 URL 允许通过 `javascript:` 执行 JavaScript，即没有进行无害化处理，那么就会有一些潜在的安全问题。可以使用一些库来解决此类问题，比如 [sanitize-url](https://www.npmjs.com/package/@braintree/sanitize-url)，但请注意：如果你发现你需要在前端做 URL 无害化处理，那你的应用已经存在一个更严重的安全问题了。**任何用户提供的 URL 在被保存到数据库之前在应该先在后端做无害化处理**。这样，连接到你 API 的_每一个_客户端都可以避免这个问题，包括原生移动应用。另外，即使是经过无害化处理的 URL，Vue 也不能保证它们指向安全的目的地。

### 样式注入 [​](#style-injection)

我们来看这样一个例子：

template

    <a
      :href="sanitizedUrl"
      :style="userProvidedStyles"
    >
      click me
    </a>

我们假设 `sanitizedUrl` 已进行无害化处理，它是一个正常 URL 而非 JavaScript。然而，由于 `userProvidedStyles` 的存在，恶意用户仍然能利用 CSS 进行“点击劫持”，例如，可以在“登录”按钮上方覆盖一个透明的链接。如果用户控制的页面 `https://user-controlled-website.com/` 专门仿造了你应用的登录页，那么他们就有可能捕获用户的真实登录信息。

你可以想象，如果允许在 `<style>` 元素中插入用户提供的内容，会造成更大的漏洞，因为这使得用户能控制整个页面的样式。因此 Vue 阻止了在模板中像这样渲染 style 标签：

template

    <style>{{ userProvidedStyles }}</style>

为了避免用户的点击被劫持，我们建议仅在沙盒环境的 iframe 中允许用户控制 CSS。或者，当用户控制样式绑定时，我们建议使用其[对象值形式](/guide/essentials/class-and-style.html#object-syntax-2)并仅允许用户提供能够安全控制的、特定的属性，就像这样：

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

### JavaScript 注入 [​](#javascript-injection)

我们强烈建议任何时候都不要在 Vue 中渲染 `<script>`，因为模板和渲染函数不应有其他副作用。但是，渲染 `<script>` 并不是插入在运行时执行的 JavaScript 字符串的唯一方法。

每个 HTML 元素都有能接受字符串形式 JavaScript 的 attribute，例如 `onclick`、`onfocus` 和 `onmouseenter`。绑定任何用户提供的 JavaScript 给这些事件 attribute 都具有潜在风险，因此需要避免这么做。

警告

用户提供的 JavaScript 永远不能被认为是 100% 安全的，除非它在 iframe 这样的沙盒环境中，或者该段代码只会在该用户登录的页面上被执行。

有时我们会收到漏洞报告，说在 Vue 模板中可以进行跨站脚本攻击 (XSS)。一般来说，我们不认为这种情况是真正的漏洞，因为没有切实可行的方法，能够在以下两种场景中保护开发者不受 XSS 的影响。

1.  开发者显式地将用户提供的、未经无害化处理的内容作为 Vue 模板渲染。这本身就是不安全的，Vue 也无从溯源。
    
2.  开发者将 Vue 挂载到可能包含服务端渲染或用户提供内容的 HTML 页面上，这与 #1 的问题基本相同，但有时开发者可能会不知不觉地这样做。攻击者提供的 HTML 可能在普通 HTML 中是安全的，但在 Vue 模板中是不安全的，这就会导致漏洞。最佳实践是：**不要将 Vue 挂载到可能包含服务端渲染或用户提供内容的 DOM 节点上**。
    

最佳实践 [​](#best-practices)
-------------------------

最基本的规则就是只要你允许执行未经无害化处理的、用户提供的内容 (无论是 HTML、JavaScript 还是 CSS)，你就可能面临攻击。无论是使用 Vue、其他框架，或是不使用框架，道理都是一样的。

除了上面为处理[潜在危险](#potential-dangers)提供的建议，我们也建议你熟读下面这些资源：

*   [HTML5 安全手册](https://html5sec.org/)
*   [OWASP 的跨站脚本攻击 (XSS) 防护手册](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

接着你可以利用学到的知识，来审查依赖项的源代码，看看是否有潜在的危险，防止它们中的任何一个以第三方组件或其他方式影响 DOM 渲染的内容。

后端协调 [​](#backend-coordination)
-------------------------------

类似跨站请求伪造 (CSRF/XSRF) 和跨站脚本引入 (XSSI) 这样的 HTTP 安全漏洞，主要由后端负责处理，因此它们不是 Vue 职责范围内的问题。但是，你应该与后端团队保持沟通，了解如何更好地与后端 API 进行交互，例如，在提交表单时附带 CSRF 令牌。

服务端渲染 (SSR) [​](#server-side-rendering-ssr)
-------------------------------------------

在使用 SSR 时还有一些其他的安全注意事项，因此请确保遵循我们的 [SSR 文档](/guide/scaling-up/ssr.html)给出的最佳实践来避免产生漏洞。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/best-practices/security.md)
搭配 TypeScript 使用 Vue [​](#using-vue-with-typescript)
====================================================

像 TypeScript 这样的类型系统可以在编译时通过静态分析检测出很多常见错误。这减少了生产环境中的运行时错误，也让我们在重构大型项目的时候更有信心。通过 IDE 中基于类型的自动补全，TypeScript 还改善了开发体验和效率。

Vue 本身就是用 TypeScript 编写的，并对 TypeScript 提供了一等公民的支持。所有的 Vue 官方库都自带了类型声明文件，开箱即用。

项目配置 [​](#project-setup)
------------------------

[`create-vue`](https://github.com/vuejs/create-vue)，即官方的项目脚手架工具，提供了搭建基于 [Vite](https://cn.vitejs.dev/) 且 TypeScript 就绪的 Vue 项目的选项。

### 总览 [​](#overview)

在基于 Vite 的配置中，开发服务器和打包器将只会对 TypeScript 文件执行语法转译，而不会执行任何类型检查，这保证了 Vite 开发服务器在使用 TypeScript 时也能始终保持飞快的速度。

*   在开发阶段，我们推荐你依赖一个好的 [IDE 配置](#ide-support)来获取即时的类型错误反馈。
    
*   对于单文件组件，你可以使用工具 [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) 在命令行检查类型和生成类型声明文件。`vue-tsc` 是对 TypeScript 自身命令行界面 `tsc` 的一个封装。它的工作方式基本和 `tsc` 一致。除了 TypeScript 文件，它还支持 Vue 的单文件组件。你可以在开启 Vite 开发服务器的同时以侦听模式运行 `vue-tsc`，或是使用 [vite-plugin-checker](https://vite-plugin-checker.netlify.app/) 这样在另一个 worker 线程里做静态检查的插件。
    
*   Vue CLI 也提供了对 TypeScript 的支持，但是已经不推荐了。详见[下方的说明](#note-on-vue-cli-and-ts-loader)。
    

### IDE 支持 [​](#ide-support)

*   强烈推荐 [Visual Studio Code](https://code.visualstudio.com/) (VSCode)，因为它对 TypeScript 有着很好的内置支持。
    
    *   [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 是官方的 VSCode 扩展，提供了 Vue 单文件组件中的 TypeScript 支持，还伴随着一些其他非常棒的特性。
        
        TIP
        
        Volar 取代了我们之前为 Vue 2 提供的官方 VSCode 扩展 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)。如果你之前已经安装了 Vetur，请确保在 Vue 3 的项目中禁用它。
        
    *   [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 用于支持在 TS 中 import `*.vue` 文件。
        
*   [WebStorm](https://www.jetbrains.com/webstorm/) 对 TypeScript 和 Vue 也都提供了开箱即用的支持。其他的 JetBrains IDE 也同样可以通过一个[免费插件](https://plugins.jetbrains.com/plugin/9442-vue-js)支持。
    

### 配置 `tsconfig.json` [​](#configuring-tsconfig-json)

通过 `create-vue` 搭建的项目包含了预先配置好的 `tsconfig.json`。其底层配置抽象于 [`@vue/tsconfig`](https://github.com/vuejs/tsconfig) 包中。在项目内我们使用 [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) 来确保运行在不同环境下的代码的类型正确 (比如应用代码和测试代码应该有不同的全局变量)。

手动配置 `tsconfig.json` 时，请留意以下选项：

*   [`compilerOptions.isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules) 应当设置为 `true`，因为 Vite 使用 [esbuild](https://esbuild.github.io/) 来转译 TypeScript，并受限于单文件转译的限制。
    
*   如果你正在使用选项式 API，需要将 [`compilerOptions.strict`](https://www.typescriptlang.org/tsconfig#strict) 设置为 `true` (或者至少开启 [`compilerOptions.noImplicitThis`](https://www.typescriptlang.org/tsconfig#noImplicitThis)，它是 `strict` 模式的一部分)，才可以获得对组件选项中 `this` 的类型检查。否则 `this` 会被认为是 `any`。
    
*   如果你在构建工具中配置了路径解析别名，例如 `@/*` 这个别名被默认配置在了 `create-vue` 项目中，你需要通过 [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths) 选项为 TypeScript 再配置一遍。
    

参考：

*   [官方 TypeScript 编译选项文档](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
*   [esbuild TypeScript 编译注意事项](https://esbuild.github.io/content-types/#typescript-caveats)

### Volar Takeover 模式 [​](#volar-takeover-mode)

> 这一章节仅针对 VSCode + Volar。

为了让 Vue 单文件组件和 TypeScript 一起工作，Volar 创建了一个针对 Vue 的 TS 语言服务实例，将其用于 Vue 单文件组件。同时，普通的 TS 文件依然由 VSCode 内置的 TS 语言服务来处理。这也是为什么我们需要安装 [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 来支持在 TS 文件中引入 Vue 单文件组件。这套默认设置能够工作，但在每个项目里我们都运行了两个语言服务实例：一个来自 Volar，一个来自 VSCode 的内置服务。这在大型项目里可能会带来一些性能问题。

为了优化性能，Volar 提供了一个叫做“Takeover 模式”的功能。在这个模式下，Volar 能够使用一个 TS 语言服务实例同时为 Vue 和 TS 文件提供支持。

要开启 Takeover 模式，你需要执行以下步骤来**在你的项目的工作空间中**禁用 VSCode 的内置 TS 语言服务：

1.  在当前项目的工作空间下，用 `Ctrl + Shift + P` (macOS：`Cmd + Shift + P`) 唤起命令面板。
2.  输入 `built`，然后选择“Extensions：Show Built-in Extensions”。
3.  在插件搜索框内输入 `typescript` (不要删除 `@builtin` 前缀)。
4.  点击“TypeScript and JavaScript Language Features”右下角的小齿轮，然后选择“Disable (Workspace)”。
5.  重新加载工作空间。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。

![](/assets/takeover-mode.54f7bbf6.png)

### 关于 Vue CLI 和 `ts-loader` [​](#note-on-vue-cli-and-ts-loader)

像 Vue CLI 这样的基于 webpack 搭建的项目，通常是在模块编译的过程中顺道执行类型检查，例如使用 `ts-loader`。然而这并不是一个理想的解决方案，因为类型系统需要了解整个模块关系才能执行类型检查。loader 中只适合单个模块的编译，并不做适合需要全局信息的工作。这导致了下面的问题：

*   `ts-loader` 只能对在它之前的 loader 编译转换后的代码执行类型检查，这和我们在 IDE 或 `vue-tsc` 中看到的基于源代码的错误提示并不一致。
    
*   类型检查可能会很慢。当它和代码转换在相同的线程/进程中执行时，它会显著影响整个应用的构建速度。
    
*   我们已经在 IDE 中通过单独的进程运行着类型检查了，却还要在构建流程中执行类型检查导致降低开发体验，这似乎不太划算。
    

如果你正通过 Vue CLI 使用 Vue 3 和 TypeScript，我们强烈建议你迁移到 Vite。我们也在为 CLI 开发仅执行 TS 语法转译的选项，以允许你切换至 `vue-tsc` 来执行类型检查。

常见使用说明 [​](#general-usage-notes)
--------------------------------

### `defineComponent()` [​](#definecomponent)

为了让 TypeScript 正确地推导出组件选项内的类型，我们需要通过 [`defineComponent()`](/api/general.html#definecomponent) 这个全局 API 来定义组件：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // 启用了类型推导
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
        this.name // 类型：string | undefined
        this.msg // 类型：string
        this.count // 类型：number
      }
    })

当没有结合 `<script setup>` 使用组合式 API 时，`defineComponent()` 也支持对传递给 `setup()` 的 prop 的推导：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // 启用了类型推导
      props: {
        message: String
      },
      setup(props) {
        props.message // 类型：string | undefined
      }
    })

参考：

*   [webpack Treeshaking 的注意事项](/api/general.html#note-on-webpack-treeshaking)
*   [对 `defineComponent` 的类型测试](https://github.com/vuejs/core/blob/main/packages/dts-test/defineComponent.test-d.tsx)

TIP

`defineComponent()` 也支持对纯 JavaScript 编写的组件进行类型推导。

### 在单文件组件中的用法 [​](#usage-in-single-file-components)

要在单文件组件中使用 TypeScript，需要在 `<script>` 标签上加上 `lang="ts"` 的 attribute。当 `lang="ts"` 存在时，所有的模板内表达式都将享受到更严格的类型检查。

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
      <!-- 启用了类型检查和自动补全 -->
      {{ count.toFixed(2) }}
    </template>

`lang="ts"` 也可以用于 `<script setup>`：

vue

    <script setup lang="ts">
    // 启用了 TypeScript
    import { ref } from 'vue'
    
    const count = ref(1)
    </script>
    
    <template>
      <!-- 启用了类型检查和自动补全 -->
      {{ count.toFixed(2) }}
    </template>

### 模板中的 TypeScript [​](#typescript-in-templates)

在使用了 `<script lang="ts">` 或 `<script setup lang="ts">` 后，`<template>` 在绑定表达式中也支持 TypeScript。这对需要在模板表达式中执行类型转换的情况下非常有用。

这里有一个假想的例子：

vue

    <script setup lang="ts">
    let x: string | number = 1
    </script>
    
    <template>
      <!-- 出错，因为 x 可能是字符串 -->
      {{ x.toFixed(2) }}
    </template>

可以使用内联类型强制转换解决此问题：

vue

    <script setup lang="ts">
    let x: string | number = 1
    </script>
    
    <template>
      {{ (x as number).toFixed(2) }}
    </template>

TIP

如果正在使用 Vue CLI 或基于 webpack 的配置，支持模板内表达式的 TypeScript 需要 `vue-loader@^16.8.0`。

特定 API 的使用指南 [​](#api-specific-recipes)
---------------------------------------

*   [TS 与组合式 API](./composition-api.html)
*   [TS 与选项式 API](./options-api.html)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/typescript/overview.md)
TypeScript 与组合式 API [​](#typescript-with-composition-api)
=========================================================

> 这一章假设你已经阅读了[搭配 TypeScript 使用 Vue](./overview.html) 的概览。

为组件的 props 标注类型 [​](#typing-component-props)
--------------------------------------------

### 使用 `<script setup>` [​](#using-script-setup)

当使用 `<script setup>` 时，`defineProps()` 宏函数支持从它的参数中推导类型：

vue

    <script setup lang="ts">
    const props = defineProps({
      foo: { type: String, required: true },
      bar: Number
    })
    
    props.foo // string
    props.bar // number | undefined
    </script>

这被称之为“运行时声明”，因为传递给 `defineProps()` 的参数会作为运行时的 `props` 选项使用。

然而，通过泛型参数来定义 props 的类型通常更直接：

vue

    <script setup lang="ts">
    const props = defineProps<{
      foo: string
      bar?: number
    }>()
    </script>

这被称之为“基于类型的声明”。编译器会尽可能地尝试根据类型参数推导出等价的运行时选项。在这种场景下，我们第二个例子中编译出的运行时选项和第一个是完全一致的。

基于类型的声明或者运行时声明可以择一使用，但是不能同时使用。

我们也可以将 props 的类型移入一个单独的接口中：

vue

    <script setup lang="ts">
    interface Props {
      foo: string
      bar?: number
    }
    
    const props = defineProps<Props>()
    </script>

#### 语法限制 [​](#syntax-limitations)

为了生成正确的运行时代码，传给 `defineProps()` 的泛型参数必须是以下之一：

*   一个类型字面量：
    
    ts
    
        defineProps<{ /*... */ }>()
    
*   对**同一个文件**中的一个接口或对象类型字面量的引用：
    
    ts
    
        interface Props {/* ... */}
        
        defineProps<Props>()
    

接口或对象字面类型可以包含从其他文件导入的类型引用，但是，传递给 `defineProps` 的泛型参数本身**不能**是一个导入的类型：

ts

    import { Props } from './other-file'
    
    // 不支持！
    defineProps<Props>()

这是因为 Vue 组件是单独编译的，编译器目前不会抓取导入的文件以分析源类型。我们计划在未来的版本中解决这个限制。

### Props 解构默认值 [​](#props-default-values)

当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 `withDefaults` 编译器宏解决：

ts

    export interface Props {
      msg?: string
      labels?: string[]
    }
    
    const props = withDefaults(defineProps<Props>(), {
      msg: 'hello',
      labels: () => ['one', 'two']
    })

这将被编译为等效的运行时 props `default` 选项。此外，`withDefaults` 帮助程序为默认值提供类型检查，并确保返回的 props 类型删除了已声明默认值的属性的可选标志。

### 非 `<script setup>` 场景下 [​](#without-script-setup)

如果没有使用 `<script setup>`，那么为了开启 props 的类型推导，必须使用 `defineComponent()`。传入 `setup()` 的 props 对象类型是从 `props` 选项中推导而来。

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      props: {
        message: String
      },
      setup(props) {
        props.message // <-- 类型：string
      }
    })

### 复杂的 prop 类型 [​](#complex-prop-types)

通过基于类型的声明，一个 prop 可以像使用其他任何类型一样使用一个复杂类型：

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

对于运行时声明，我们可以使用 `PropType` 工具类型：

ts

    import type { PropType } from 'vue'
    
    const props = defineProps({
      book: Object as PropType<Book>
    })

其工作方式与直接指定 `props` 选项基本相同：

ts

    import { defineComponent } from 'vue'
    import type { PropType } from 'vue'
    
    export default defineComponent({
      props: {
        book: Object as PropType<Book>
      }
    })

`props` 选项通常用于 Options API，因此你会在[选项式 API 与 TypeScript](/guide/typescript/options-api.html#typing-component-props) 指南中找到更详细的例子。这些例子中展示的技术也适用于使用 `defineProps()` 的运行时声明。

为组件的 emits 标注类型 [​](#typing-component-emits)
--------------------------------------------

在 `<script setup>` 中，`emit` 函数的类型标注也可以通过运行时声明或是类型声明进行：

vue

    <script setup lang="ts">
    // 运行时
    const emit = defineEmits(['change', 'update'])
    
    // 基于类型
    const emit = defineEmits<{
      (e: 'change', id: number): void
      (e: 'update', value: string): void
    }>()
    </script>

这个类型参数应该是一个带[调用签名](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)的类型字面量。这个类型字面量的类型就是返回的 `emit` 函数的类型。我们可以看到，基于类型的声明使我们可以对所触发事件的类型进行更细粒度的控制。

若没有使用 `<script setup>`，`defineComponent()` 也可以根据 `emits` 选项推导暴露在 setup 上下文中的 `emit` 函数的类型：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      emits: ['change'],
      setup(props, { emit }) {
        emit('change') // <-- 类型检查 / 自动补全
      }
    })

为 `ref()` 标注类型 [​](#typing-ref)
-------------------------------

ref 会根据初始化时的值推导其类型：

ts

    import { ref } from 'vue'
    
    // 推导出的类型：Ref<number>
    const year = ref(2020)
    
    // => TS Error: Type 'string' is not assignable to type 'number'.
    year.value = '2020'

有时我们可能想为 ref 内的值指定一个更复杂的类型，可以通过使用 `Ref` 这个类型：

ts

    import { ref } from 'vue'
    import type { Ref } from 'vue'
    
    const year: Ref<string | number> = ref('2020')
    
    year.value = 2020 // 成功！

或者，在调用 `ref()` 时传入一个泛型参数，来覆盖默认的推导行为：

ts

    // 得到的类型：Ref<string | number>
    const year = ref<string | number>('2020')
    
    year.value = 2020 // 成功！

如果你指定了一个泛型参数但没有给出初始值，那么最后得到的就将是一个包含 `undefined` 的联合类型：

ts

    // 推导得到的类型：Ref<number | undefined>
    const n = ref<number>()

为 `reactive()` 标注类型 [​](#typing-reactive)
-----------------------------------------

`reactive()` 也会隐式地从它的参数中推导类型：

ts

    import { reactive } from 'vue'
    
    // 推导得到的类型：{ title: string }
    const book = reactive({ title: 'Vue 3 指引' })

要显式地标注一个 `reactive` 变量的类型，我们可以使用接口：

ts

    import { reactive } from 'vue'
    
    interface Book {
      title: string
      year?: number
    }
    
    const book: Book = reactive({ title: 'Vue 3 指引' })

TIP

不推荐使用 `reactive()` 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。

为 `computed()` 标注类型 [​](#typing-computed)
-----------------------------------------

`computed()` 会自动从其计算函数的返回值上推导出类型：

ts

    import { ref, computed } from 'vue'
    
    const count = ref(0)
    
    // 推导得到的类型：ComputedRef<number>
    const double = computed(() => count.value * 2)
    
    // => TS Error: Property 'split' does not exist on type 'number'
    const result = double.value.split('')

你还可以通过泛型参数显式指定类型：

ts

    const double = computed<number>(() => {
      // 若返回值不是 number 类型则会报错
    })

为事件处理函数标注类型 [​](#typing-event-handlers)
---------------------------------------

在处理原生 DOM 事件时，应该为我们传递给事件处理函数的参数正确地标注类型。让我们看一下这个例子：

vue

    <script setup lang="ts">
    function handleChange(event) {
      // `event` 隐式地标注为 `any` 类型
      console.log(event.target.value)
    }
    </script>
    
    <template>
      <input type="text" @change="handleChange" />
    </template>

没有类型标注时，这个 `event` 参数会隐式地标注为 `any` 类型。这也会在 `tsconfig.json` 中配置了 `"strict": true` 或 `"noImplicitAny": true` 时报出一个 TS 错误。因此，建议显式地为事件处理函数的参数标注类型。此外，你在访问 `event` 上的属性时可能需要使用类型断言：

ts

    function handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }

为 provide / inject 标注类型 [​](#typing-provide-inject)
---------------------------------------------------

provide 和 inject 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：

ts

    import { provide, inject } from 'vue'
    import type { InjectionKey } from 'vue'
    
    const key = Symbol() as InjectionKey<string>
    
    provide(key, 'foo') // 若提供的是非字符串值会导致错误
    
    const foo = inject(key) // foo 的类型：string | undefined

建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。

当使用字符串注入 key 时，注入值的类型是 `unknown`，需要通过泛型参数显式声明：

ts

    const foo = inject<string>('foo') // 类型：string | undefined

注意注入的值仍然可以是 `undefined`，因为无法保证提供者一定会在运行时 provide 这个值。

当提供了一个默认值后，这个 `undefined` 类型就可以被移除：

ts

    const foo = inject<string>('foo', 'bar') // 类型：string

如果你确定该值将始终被提供，则还可以强制转换该值：

ts

    const foo = inject('foo') as string

为模板引用标注类型 [​](#typing-template-refs)
------------------------------------

模板引用需要通过一个显式指定的泛型参数和一个初始值 `null` 来创建：

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

注意为了严格的类型安全，有必要在访问 `el.value` 时使用可选链或类型守卫。这是因为直到组件被挂载前，这个 ref 的值都是初始的 `null`，并且在由于 `v-if` 的行为将引用的元素卸载时也可以被设置为 `null`。

为组件模板引用标注类型 [​](#typing-component-template-refs)
------------------------------------------------

有时，你可能需要为一个子组件添加一个模板引用，以便调用它公开的方法。举例来说，我们有一个 `MyModal` 子组件，它有一个打开模态框的方法：

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

为了获取 `MyModal` 的类型，我们首先需要通过 `typeof` 得到其类型，再使用 TypeScript 内置的 `InstanceType` 工具类型来获取其实例类型：

vue

    <!-- App.vue -->
    <script setup lang="ts">
    import MyModal from './MyModal.vue'
    
    const modal = ref<InstanceType<typeof MyModal> | null>(null)
    
    const openModal = () => {
      modal.value?.open()
    }
    </script>

注意，如果你想在 TypeScript 文件而不是在 Vue SFC 中使用这种技巧，需要开启 Volar 的 [Takeover 模式](./overview.html#volar-takeover-mode)。

如果组件的具体类型无法获得，或者你并不关心组件的具体类型，那么可以使用 `ComponentPublicInstance`。这只会包含所有组件都共享的属性，比如 `$el`。

ts

    import { ref } from 'vue'
    import type { ComponentPublicInstance } from 'vue'
    
    const child = ref<ComponentPublicInstance | null>(null)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/typescript/composition-api.md)
TypeScript 与选项式 API [​](#typescript-with-options-api)
=====================================================

> 这一章假设你已经阅读了[搭配 TypeScript 使用 Vue](./overview.html) 的概览。

TIP

虽然 Vue 的确支持在选项式 API 中使用 TypeScript，但在使用 TypeScript 的前提下更推荐使用组合式 API，因为它提供了更简单、高效和可靠的类型推导。

为组件的 props 标注类型 [​](#typing-component-props)
--------------------------------------------

选项式 API 中对 props 的类型推导需要用 `defineComponent()` 来包装组件。有了它，Vue 才可以通过 `props` 以及一些额外的选项，比如 `required: true` 和 `default` 来推导出 props 的类型：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      // 启用了类型推导
      props: {
        name: String,
        id: [Number, String],
        msg: { type: String, required: true },
        metadata: null
      },
      mounted() {
        this.name // 类型：string | undefined
        this.id // 类型：number | string | undefined
        this.msg // 类型：string
        this.metadata // 类型：any
      }
    })

然而，这种运行时 `props` 选项仅支持使用构造函数来作为一个 prop 的类型——没有办法指定多层级对象或函数签名之类的复杂类型。

我们可以使用 `PropType` 这个工具类型来标记更复杂的 props 类型：

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
          // 提供相对 `Object` 更确定的类型
          type: Object as PropType<Book>,
          required: true
        },
        // 也可以标记函数
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

### 注意事项 [​](#caveats)

如果你的 TypeScript 版本低于 `4.7`，在使用函数作为 prop 的 `validator` 和 `default` 选项值时需要格外小心——确保使用箭头函数：

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
          // 如果你的 TypeScript 版本低于 4.7，确保使用箭头函数
          default: () => ({
            title: 'Arrow Function Expression'
          }),
          validator: (book: Book) => !!book.title
        }
      }
    })

这会防止 TypeScript 将 `this` 根据函数内的环境作出不符合我们期望的类型推导。这是之前版本的一个[设计限制](https://github.com/microsoft/TypeScript/issues/38845)，不过现在已经在 [TypeScript 4.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#improved-function-inference-in-objects-and-methods) 中解决了。

为组件的 emits 标注类型 [​](#typing-component-emits)
--------------------------------------------

我们可以给 `emits` 选项提供一个对象来声明组件所触发的事件，以及这些事件所期望的参数类型。试图触发未声明的事件会抛出一个类型错误：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      emits: {
        addBook(payload: { bookName: string }) {
          // 执行运行时校验
          return payload.bookName.length > 0
        }
      },
      methods: {
        onSubmit() {
          this.$emit('addBook', {
            bookName: 123 // 类型错误
          })
    
          this.$emit('non-declared-event') // 类型错误
        }
      }
    })

为计算属性标记类型 [​](#typing-computed-properties)
------------------------------------------

计算属性会自动根据其返回值来推导其类型：

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
        this.greeting // 类型：string
      }
    })

在某些场景中，你可能想要显式地标记出计算属性的类型以确保其实现是正确的：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      data() {
        return {
          message: 'Hello!'
        }
      },
      computed: {
        // 显式标注返回类型
        greeting(): string {
          return this.message + '!'
        },
    
        // 标注一个可写的计算属性
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

在某些 TypeScript 因循环引用而无法推导类型的情况下，可能必须进行显式的类型标注。

为事件处理函数标注类型 [​](#typing-event-handlers)
---------------------------------------

在处理原生 DOM 事件时，应该为我们传递给事件处理函数的参数正确地标注类型。让我们看一下这个例子：

vue

    <script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
      methods: {
        handleChange(event) {
          // `event` 隐式地标注为 `any` 类型
          console.log(event.target.value)
        }
      }
    })
    </script>
    
    <template>
      <input type="text" @change="handleChange" />
    </template>

没有类型标注时，这个 `event` 参数会隐式地标注为 `any` 类型。这也会在 `tsconfig.json` 中配置了 `"strict": true` 或 `"noImplicitAny": true` 时抛出一个 TS 错误。因此，建议显式地为事件处理函数的参数标注类型。此外，在访问 `event` 上的属性时你可能需要使用类型断言：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      methods: {
        handleChange(event: Event) {
          console.log((event.target as HTMLInputElement).value)
        }
      }
    })

扩展全局属性 [​](#augmenting-global-properties)
-----------------------------------------

某些插件会通过 [`app.config.globalProperties`](/api/application.html#app-config-globalproperties) 为所有组件都安装全局可用的属性。举例来说，我们可能为了请求数据而安装了 `this.$http`，或者为了国际化而安装了 `this.$translate`。为了使 TypeScript 更好地支持这个行为，Vue 暴露了一个被设计为可以通过 [TypeScript 模块扩展](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)来扩展的 `ComponentCustomProperties` 接口：

ts

    import axios from 'axios'
    
    declare module 'vue' {
      interface ComponentCustomProperties {
        $http: typeof axios
        $translate: (key: string) => string
      }
    }

参考：

*   [对组件类型扩展的 TypeScript 单元测试](https://github.com/vuejs/core/blob/main/packages/dts-test/componentTypeExtensions.test-d.tsx)

### 类型扩展的位置 [​](#type-augmentation-placement)

我们可以将这些类型扩展放在一个 `.ts` 文件，或是一个影响整个项目的 `*.d.ts` 文件中。无论哪一种，都应确保在 `tsconfig.json` 中包括了此文件。对于库或插件作者，这个文件应该在 `package.json` 的 `types` 属性中被列出。

为了利用模块扩展的优势，你需要确保将扩展的模块放在 [TypeScript 模块](https://www.typescriptlang.org/docs/handbook/modules.html) 中。 也就是说，该文件需要包含至少一个顶级的 `import` 或 `export`，即使它只是 `export {}`。如果扩展被放在模块之外，它将覆盖原始类型，而不是扩展!

ts

    // 不工作，将覆盖原始类型。
    declare module 'vue' {
      interface ComponentCustomProperties {
        $translate: (key: string) => string
      }
    }

ts

    // 正常工作。
    export {}
    
    declare module 'vue' {
      interface ComponentCustomProperties {
        $translate: (key: string) => string
      }
    }

扩展自定义选项 [​](#augmenting-custom-options)
---------------------------------------

某些插件，比如 `vue-router`，提供了一些自定义的组件选项，比如 `beforeRouteEnter`：

ts

    import { defineComponent } from 'vue'
    
    export default defineComponent({
      beforeRouteEnter(to, from, next) {
        // ...
      }
    })

如果没有确切的类型标注，这个钩子函数的参数会隐式地标注为 `any` 类型。我们可以为 `ComponentCustomOptions` 接口扩展自定义的选项来支持：

ts

    import { Route } from 'vue-router'
    
    declare module 'vue' {
      interface ComponentCustomOptions {
        beforeRouteEnter?(to: Route, from: Route, next: () => void): void
      }
    }

现在这个 `beforeRouteEnter` 选项会被准确地标注类型。注意这只是一个例子——像 `vue-router` 这种类型完备的库应该在它们自己的类型定义中自动执行这些扩展。

这种类型扩展和全局属性扩展受到[相同的限制](#type-augmentation-placement)。

参考：

*   [对组件类型扩展的 TypeScript 单元测试](https://github.com/vuejs/core/blob/main/packages/dts-test/componentTypeExtensions.test-d.tsx)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/typescript/options-api.md)
使用 Vue 的多种方式 [​](#ways-of-using-vue)
====================================

我们相信在 Web 的世界里没有一种方案可以解决所有问题。正因如此，Vue 被设计成一个灵活的、可以渐进式集成的框架。根据使用场景的不同需要，相应地有多种不同的方式来使用 Vue，以此在技术栈复杂度、开发体验和性能表现间取得最佳平衡。

独立脚本 [​](#standalone-script)
----------------------------

Vue 可以以一个单独 JS 文件的形式使用，无需构建步骤！如果你的后端框架已经渲染了大部分的 HTML，或者你的前端逻辑并不复杂，不需要构建步骤，这是最简单的使用 Vue 的方式。在这些场景中你可以将 Vue 看作一个更加声明式的 jQuery 替代品。

Vue 也提供了另一个更适用于此类无构建步骤场景的版本 [petite-vue](https://github.com/vuejs/petite-vue)。它为渐进式增强已有的 HTML 作了特别的优化，功能更加精简，十分轻量。

作为 Web Component 嵌入 [​](#embedded-web-components)
-------------------------------------------------

你可以用 Vue 来[构建标准的 Web Component](/guide/extras/web-components.html)，这些 Web Component 可以嵌入到任何 HTML 页面中，无论它们是如何被渲染的。这个方式让你能够在不需要顾虑最终使用场景的情况下使用 Vue：因为生成的 Web Component 可以嵌入到旧应用、静态 HTML，甚至用其他框架构建的应用中。

单页面应用 (SPA) [​](#single-page-application-spa)
---------------------------------------------

一些应用在前端需要具有丰富的交互性、较深的会话和复杂的状态逻辑。构建这类应用的最佳方法是使用这样一种架构：Vue 不仅控制整个页面，还负责处理抓取新数据，并在无需重新加载的前提下处理页面切换。这种类型的应用通常称为单页应用 (Single-Page application，缩写为 SPA)。

Vue 提供了核心功能库和[全面的工具链支持](/guide/scaling-up/tooling.html)，为现代 SPA 提供了极佳的开发体验，覆盖以下方面：

*   客户端路由
*   极其快速的构建工具
*   IDE 支持
*   浏览器开发工具
*   TypeScript 支持
*   测试工具

SPA 一般要求后端提供 API 数据接口，但你也可以将 Vue 和如 [Inertia.js](https://inertiajs.com) 之类的解决方案搭配使用，在保留侧重服务端的开发模型的同时获得 SPA 的益处。

全栈 / SSR [​](#fullstack-ssr)
----------------------------

纯客户端的 SPA 在首屏加载和 SEO 方面有显著的问题，因为浏览器会收到一个巨大的 HTML 空页面，只有等到 JavaScript 加载完毕才会渲染出内容。

Vue 提供了一系列 API，支持将一个 Vue 应用在服务端渲染成 HTML 字符串。这能让服务器直接返回渲染好的 HTML，让用户在 JavaScript 下载完毕前就看到页面内容。Vue 之后会在客户端对应用进行“激活 (hydrate)”使其重获可交互性。这被称为[服务端渲染 (SSR)](/guide/scaling-up/ssr.html)，它能够极大地改善应用在 Web 核心指标上的性能表现，如[最大内容绘制 (LCP)](https://web.dev/lcp/)。

Vue 生态中有一些针对此类场景的、基于 Vue 的上层框架，比如 [NuxtJS](https://nuxt.com/)，能让你用 Vue 和 JavaScript 开发一个全栈应用。

JAMStack / SSG [​](#jamstack-ssg)
---------------------------------

如果所需的数据是静态的，那么服务端渲染可以提前完成。这意味着我们可以将整个应用预渲染为 HTML，并将其作为静态文件部署。这增强了站点的性能表现，也使部署变得更容易，因为我们无需根据请求动态地渲染页面。Vue 仍可通过激活在客户端提供交互。这一技术通常被称为静态站点生成 (SSG)，也被称为 [JAMStack](https://jamstack.org/what-is-jamstack/)。

SSG 有两种风格：单页和多页。这两种风格都能将站点预渲染为静态 HTML，区别在于：

*   单页 SSG 在初始页面加载后将其“激活”为 SPA。这需要更多的前期 JS 加载和激活成本，但后续的导航将更快，因为它只需要部分地更新页面内容，而无需重新加载整个页面。
    
*   多页 SSG 每次导航都会加载一个新页面。好处是它可以仅需最少的 JS——或者如果页面无需交互则根本不需要 JS！一些多页面 SSG 框架，如 [Astro](https://astro.build/) 也支持“部分激活”——它允许你通过 Vue 组件在静态 HTML 中创建交互式的“孤岛”。
    

单页 SSG 更适合于重交互、深会话的场景，或需要在导航之间持久化元素或状态。否则，多页 SSG 将是更好的选择。

Vue 团队也维护了一个名为 [VitePress](https://vitepress.vuejs.org/) 的静态站点生成器，你正在阅读的文档就是基于它构建的！VitePress 支持两种形式的 SSG。另外，[NuxtJS](https://nuxt.com/) 也支持 SSG。你甚至可以在同一个 Nuxt 应用中通过不同的路由提供 SSR 和 SSG。

Web 之外... [​](#beyond-the-web)
------------------------------

尽管 Vue 主要是为构建 Web 应用而设计的，但它绝不仅仅局限于浏览器。你还可以：

*   配合 [Electron](https://www.electronjs.org/) 或 [Tauri](https://tauri.studio/en/) 构建桌面应用
*   配合 [Ionic Vue](https://ionicframework.com/docs/vue/overview) 构建移动端应用
*   使用 [Quasar](https://quasar.dev/) 用同一套代码同时开发桌面端和移动端应用
*   使用 Vue 的[自定义渲染 API](/api/custom-renderer.html) 来构建不同目标的渲染器，比如 [WebGL](https://troisjs.github.io/) 甚至是[终端命令行](https://github.com/vue-terminal/vue-termui)！

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/ways-of-using-vue.md)
组合式 API 常见问答 [​](#composition-api-faq)
======================================

TIP

这个 FAQ 假定你已经有一些使用 Vue 的经验，特别是用选项式 API 使用 Vue 2 的经验。

什么是组合式 API？ [​](#what-is-composition-api)
-----------------------------------------

组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：

*   [响应式 API](/api/reactivity-core.html)：例如 `ref()` 和 `reactive()`，使我们可以直接创建响应式状态、计算属性和侦听器。
    
*   [生命周期钩子](/api/composition-api-lifecycle.html)：例如 `onMounted()` 和 `onUnmounted()`，使我们可以在组件各个生命周期阶段添加逻辑。
    
*   [依赖注入](/api/composition-api-dependency-injection.html)：例如 `provide()` 和 `inject()`，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。
    

组合式 API 是 Vue 3 及 [Vue 2.7](https://blog.vuejs.org/posts/vue-2-7-naruto.html) 的内置功能。对于更老的 Vue 2 版本，可以使用官方维护的插件 [`@vue/composition-api`](https://github.com/vuejs/composition-api)。在 Vue 3 中，组合式 API 基本上都会配合 [`<script setup>`](/api/sfc-script-setup.html) 语法在单文件组件中使用。下面是一个使用组合式 API 的组件示例：

vue

    <script setup>
    import { ref, onMounted } from 'vue'
    
    // 响应式状态
    const count = ref(0)
    
    // 更改状态、触发更新的函数
    function increment() {
      count.value++
    }
    
    // 生命周期钩子
    onMounted(() => {
      console.log(`计数器初始值为 ${count.value}。`)
    })
    </script>
    
    <template>
      <button @click="increment">点击了：{{ count }} 次</button>
    </template>

虽然这套 API 的风格是基于函数的组合，但**组合式 API 并不是函数式编程**。组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变。

如果你对如何通过组合式 API 使用 Vue 感兴趣，可以通过页面左侧边栏上方的开关将 API 偏好切换到组合式 API，然后重新从头阅读指引。

为什么要有组合式 API？ [​](#why-composition-api)
---------------------------------------

### 更好的逻辑复用 [​](#better-logic-reuse)

组合式 API 最基本的优势是它使我们能够通过[组合函数](/guide/reusability/composables.html)来实现更加简洁高效的逻辑复用。在选项式 API 中我们主要的逻辑复用机制是 mixins，而组合式 API 解决了 [mixins 的所有缺陷](/guide/reusability/composables.html#vs-mixins)。

组合式 API 提供的逻辑复用能力孵化了一些非常棒的社区项目，比如 [VueUse](https://vueuse.org/)，一个不断成长的工具型组合式函数集合。组合式 API 还为其他第三方状态管理库与 Vue 的响应式系统之间的集成提供了一套简洁清晰的机制，例如[不可变数据](/guide/extras/reactivity-in-depth.html#immutable-data)、[状态机](/guide/extras/reactivity-in-depth.html#state-machines)与 [RxJS](/guide/extras/reactivity-in-depth.html#rxjs)。

### 更灵活的代码组织 [​](#more-flexible-code-organization)

许多用户喜欢选项式 API 的原因是它在默认情况下就能够让人写出有组织的代码：大部分代码都自然地被放进了对应的选项里。然而，选项式 API 在单个组件的逻辑复杂到一定程度时，会面临一些无法忽视的限制。这些限制主要体现在需要处理多个**逻辑关注点**的组件中，这是我们在许多 Vue 2 的实际案例中所观察到的。

我们以 Vue CLI GUI 中的文件浏览器组件为例：这个组件承担了以下几个逻辑关注点：

*   追踪当前文件夹的状态，展示其内容
*   处理文件夹的相关操作 (打开、关闭和刷新)
*   支持创建新文件夹
*   可以切换到只展示收藏的文件夹
*   可以开启对隐藏文件夹的展示
*   处理当前工作目录中的变更

这个组件[最原始的版本](https://github.com/vuejs/vue-cli/blob/a09407dd5b9f18ace7501ddb603b95e31d6d93c0/packages/@vue/cli-ui/src/components/folder/FolderExplorer.vue#L198-L404)是由选项式 API 写成的。如果我们为相同的逻辑关注点标上一种颜色，那将会是这样：

![folder component before](https://user-images.githubusercontent.com/499550/62783021-7ce24400-ba89-11e9-9dd3-36f4f6b1fae2.png)

你可以看到，处理相同逻辑关注点的代码被强制拆分在了不同的选项中，位于文件的不同部分。在一个几百行的大组件中，要读懂代码中的一个逻辑关注点，需要在文件中反复上下滚动，这并不理想。另外，如果我们想要将一个逻辑关注点抽取重构到一个可复用的工具函数中，需要从文件的多个不同部分找到所需的正确片段。

而如果[用组合式 API 重构](https://gist.github.com/yyx990803/8854f8f6a97631576c14b63c8acd8f2e)这个组件，将会变成下面右边这样：

![重构后的文件夹组件](https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png)

现在与同一个逻辑关注点相关的代码被归为了一组：我们无需再为了一个逻辑关注点在不同的选项块间来回滚动切换。此外，我们现在可以很轻松地将这一组代码移动到一个外部文件中，不再需要为了抽象而重新组织代码，大大降低了重构成本，这在长期维护的大型项目中非常关键。

### 更好的类型推导 [​](#better-type-inference)

近几年来，越来越多的开发者开始使用 [TypeScript](https://www.typescriptlang.org/) 书写更健壮可靠的代码，TypeScript 还提供了非常好的 IDE 开发支持。然而选项式 API 是在 2013 年被设计出来的，那时并没有把类型推导考虑进去，因此我们不得不做了一些[复杂到夸张的类型体操](https://github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts#L132-L165)才实现了对选项式 API 的类型推导。但尽管做了这么多的努力，选项式 API 的类型推导在处理 mixins 和依赖注入类型时依然不甚理想。

因此，很多想要搭配 TS 使用 Vue 的开发者采用了由 `vue-class-component` 提供的 Class API。然而，基于 Class 的 API 非常依赖 ES 装饰器，在 2019 年我们开始开发 Vue 3 时，它仍是一个仅处于 stage 2 的语言功能。我们认为基于一个不稳定的语言提案去设计框架的核心 API 风险实在太大了，因此没有继续向 Class API 的方向发展。在那之后装饰器提案果然又发生了很大的变动，在 2022 年才终于到达 stage 3。另一个问题是，基于 Class 的 API 和选项式 API 在逻辑复用和代码组织方面存在相同的限制。

相比之下，组合式 API 主要利用基本的变量和函数，它们本身就是类型友好的。用组合式 API 重写的代码可以享受到完整的类型推导，不需要书写太多类型标注。大多数时候，用 TypeScript 书写的组合式 API 代码和用 JavaScript 写都差不太多！这也让许多纯 JavaScript 用户也能从 IDE 中享受到部分类型推导功能。

### 更小的生产包体积 [​](#smaller-production-bundle-and-less-overhead)

搭配 `<script setup>` 使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩也更友好。这是由于 `<script setup>` 形式书写的组件模板被编译为了一个内联函数，和 `<script setup>` 中的代码位于同一作用域。不像选项式 API 需要依赖 `this` 上下文对象访问属性，被编译的模板可以直接访问 `<script setup>` 中定义的变量，无需从实例中代理。这对代码压缩更友好，因为本地变量的名字可以被压缩，但对象的属性名则不能。

与选项式 API 的关系 [​](#relationship-with-options-api)
------------------------------------------------

### 取舍 [​](#trade-offs)

一些从选项式 API 迁移来的用户发现，他们的组合式 API 代码缺乏组织性，并得出了组合式 API 在代码组织方面“更糟糕”的结论。我们建议持有这类观点的用户换个角度思考这个问题。

组合式 API 不像选项式 API 那样会手把手教你该把代码放在哪里。但反过来，它却让你可以像编写普通的 JavaScript 那样来编写组件代码。这意味着**你能够，并且应该在写组合式 API 的代码时也运用上所有普通 JavaScript 代码组织的最佳实践**。如果你可以编写组织良好的 JavaScript，你也应该有能力编写组织良好的组合式 API 代码。

选项式 API 确实允许你在编写组件代码时“少思考”，这是许多用户喜欢它的原因。然而，在减少费神思考的同时，它也将你锁定在规定的代码组织模式中，没有摆脱的余地，这会导致在更大规模的项目中难以进行重构或提高代码质量。在这方面，组合式 API 提供了更好的长期可维护性。

### 组合式 API 是否覆盖了所有场景？ [​](#does-composition-api-cover-all-use-cases)

组合式 API 能够覆盖所有状态逻辑方面的需求。除此之外，只需要用到一小部分选项：`props`，`emits`，`name` 和 `inheritAttrs`。如果使用 `<script setup>`，那么 `inheritAttrs` 应该是唯一一个需要用额外的 `<script>` 块书写的选项了。

如果你在代码中**只**使用了组合式 API (以及上述必需的选项)，那么你可以通过配置[编译时标记](https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags)来去掉 Vue 运行时中针对选项式 API 支持的代码，从而减小生产包大概几 kb 左右的体积。注意这个配置也会影响你依赖中的 Vue 组件。

### 可以同时使用两种 API 吗？ [​](#can-i-use-both-apis-together)

可以。你可以在一个选项式 API 的组件中通过 [`setup()`](/api/composition-api-setup.html) 选项来使用组合式 API。

然而，我们只推荐你在一个已经基于选项式 API 开发了很久、但又需要和基于组合式 API 的新代码或是第三方库整合的项目中这样做。

### 选项式 API 会被废弃吗？ [​](#will-options-api-be-deprecated)

不会，我们没有任何计划这样做。选项式 API 也是 Vue 不可分割的一部分，也有很多开发者喜欢它。我们也意识到组合式 API 更适用于大型的项目，而对于中小型项目来说选项式 API 仍然是一个不错的选择。

与 Class API 的关系 [​](#relationship-with-class-api)
-------------------------------------------------

我们不再推荐在 Vue 3 中使用 Class API，因为组合式 API 提供了很好的 TypeScript 集成，并具有额外的逻辑重用和代码组织优势。

和 React Hooks 的对比 [​](#comparison-with-react-hooks)
---------------------------------------------------

组合式 API 提供了和 React Hooks 相同级别的逻辑组织能力，但它们之间有着一些重要的区别。

React Hooks 在组件每次更新时都会重新调用。这就产生了一些即使是经验丰富的 React 开发者也会感到困惑的问题。这也带来了一些性能问题，并且相当影响开发体验。例如：

*   Hooks 有严格的调用顺序，并不可以写在条件分支中。
    
*   React 组件中定义的变量会被一个钩子函数闭包捕获，若开发者传递了错误的依赖数组，它会变得“过期”。这导致了 React 开发者非常依赖 ESLint 规则以确保传递了正确的依赖，然而，这些规则往往不够智能，保持正确的代价过高，在一些边缘情况时会遇到令人头疼的、不必要的报错信息。
    
*   昂贵的计算需要使用 `useMemo`，这也需要传入正确的依赖数组。
    
*   在默认情况下，传递给子组件的事件处理函数会导致子组件进行不必要的更新。子组件默认更新，并需要显式的调用 `useCallback` 作优化。这个优化同样需要正确的依赖数组，并且几乎在任何时候都需要。忽视这一点会导致默认情况下对应用进行过度渲染，并可能在不知不觉中导致性能问题。
    
*   要解决变量闭包导致的问题，再结合并发功能，使得很难推理出一段钩子代码是什么时候运行的，并且很不好处理需要在多次渲染间保持引用 (通过 `useRef`) 的可变状态。
    

相比起来，Vue 的组合式 API：

*   仅调用 `setup()` 或 `<script setup>` 的代码一次。这使得代码更符合日常 JavaScript 的直觉，不需要担心闭包变量的问题。组合式 API 也并不限制调用顺序，还可以有条件地进行调用。
    
*   Vue 的响应性系统运行时会自动收集计算属性和侦听器的依赖，因此无需手动声明依赖。
    
*   无需手动缓存回调函数来避免不必要的组件更新。Vue 细粒度的响应性系统能够确保在绝大部分情况下组件仅执行必要的更新。对 Vue 开发者来说几乎不怎么需要对子组件更新进行手动优化。
    

我们承认 React Hooks 的创造性，它是组合式 API 的一个主要灵感来源。然而，它的设计也确实存在上面提到的问题，而 Vue 的响应性模型恰好提供了一种解决这些问题的方法。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/composition-api-faq.md)
深入响应式系统 [​](#reactivity-in-depth)
=================================

Vue 最标志性的功能就是其低侵入性的响应式系统。组件状态都是由响应式的 JavaScript 对象组成的。当更改它们时，视图会随即自动更新。这让状态管理更加简单直观，但理解它是如何工作的也是很重要的，这可以帮助我们避免一些常见的陷阱。在本节中，我们将深入研究 Vue 响应性系统的一些底层细节。

什么是响应性 [​](#what-is-reactivity)
-------------------------------

这个术语在今天的各种编程讨论中经常出现，但人们说它的时候究竟是想表达什么意思呢？本质上，响应性是一种可以使我们声明式地处理变化的编程范式。一个经常被拿来当作典型例子的用例即是 Excel 表格：

A

B

C

0

1

1

2

2

3

这里单元格 A2 中的值是通过公式 `= A0 + A1` 来定义的 (你可以在 A2 上点击来查看或编辑该公式)，因此最终得到的值为 3，正如所料。但如果你试着更改 A0 或 A1，你会注意到 A2 也随即自动更新了。

而 JavaScript 默认并不是这样的。如果我们用 JavaScript 写类似的逻辑：

js

    let A0 = 1
    let A1 = 2
    let A2 = A0 + A1
    
    console.log(A2) // 3
    
    A0 = 2
    console.log(A2) // 仍然是 3

当我们更改 `A0` 后，`A2` 不会自动更新。

那么我们如何在 JavaScript 中做到这一点呢？首先，为了能重新运行计算的代码来更新 `A2`，我们需要将其包装为一个函数：

js

    let A2
    
    function update() {
      A2 = A0 + A1
    }

然后，我们需要定义几个术语：

*   这个 `update()` 函数会产生一个**副作用**，或者就简称为**作用** (effect)，因为它会更改程序里的状态。
    
*   `A0` 和 `A1` 被视为这个作用的**依赖** (dependency)，因为它们的值被用来执行这个作用。因此这次作用也可以说是一个它依赖的**订阅者** (subscriber)。
    

我们需要一个魔法函数，能够在 `A0` 或 `A1` (这两个**依赖**) 变化时调用 `update()` (产生**作用**)。

js

    whenDepsChange(update)

这个 `whenDepsChange()` 函数有如下的任务：

1.  当一个变量被读取时进行追踪。例如我们执行了表达式 `A0 + A1` 的计算，则 `A0` 和 `A1` 都被读取到了。
    
2.  如果一个变量在当前运行的副作用中被读取了，就将该副作用设为此变量的一个订阅者。例如由于 `A0` 和 `A1` 在 `update()` 执行时被访问到了，则 `update()` 需要在第一次调用之后成为 `A0` 和 `A1` 的订阅者。
    
3.  探测一个变量的变化。例如当我们给 `A0` 赋了一个新的值后，应该通知其所有订阅了的副作用重新执行。
    

Vue 中的响应性是如何工作的 [​](#how-reactivity-works-in-vue)
-------------------------------------------------

我们无法直接追踪对上述示例中局部变量的读写，原生 JavaScript 没有提供任何机制能做到这一点。**但是**，我们是可以追踪**对象属性**的读写的。

在 JavaScript 中有两种劫持 property 访问的方式：[getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) / [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) 和 [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。Vue 2 使用 getter / setters 完全是出于支持旧版本浏览器的限制。而在 Vue 3 中则使用了 Proxy 来创建响应式对象，仅将 getter / setter 用于 ref。下面的伪代码将会说明它们是如何工作的：

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

这里和下面的代码片段皆旨在以最简单的形式解释核心概念，因此省略了许多细节和边界情况。

以上代码解释了我们在基础章节部分讨论过的一些 [`reactive()` 的局限性](/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive)：

*   当你将一个响应性对象的属性解构为一个局部变量时，响应性就会“断开连接”，因为对局部变量的访问不再触发 get / set 代理捕获。
    
*   从 `reactive()` 返回的代理尽管行为上表现得像原始对象，但我们通过使用 `===` 运算符还是能够比较出它们的不同。
    

在 `track()` 内部，我们会检查当前是否有正在运行的副作用。如果有，我们会查找到一个存储了所有追踪了该属性的订阅者的 Set，然后将当前这个副作用作为新订阅者添加到该 Set 中。

js

    // 这会在一个副作用就要运行之前被设置
    // 我们会在后面处理它
    let activeEffect
    
    function track(target, key) {
      if (activeEffect) {
        const effects = getSubscribersForProperty(target, key)
        effects.add(activeEffect)
      }
    }

副作用订阅将被存储在一个全局的 `WeakMap<target, Map<key, Set<effect>>>` 数据结构中。如果在第一次追踪时没有找到对相应属性订阅的副作用集合，它将会在这里新建。这就是 `getSubscribersForProperty()` 函数所做的事。为了简化描述，我们跳过了它其中的细节。

在 `trigger()` 之中，我们会再查找到该属性的所有订阅副作用。但这一次我们需要执行它们：

js

    function trigger(target, key) {
      const effects = getSubscribersForProperty(target, key)
      effects.forEach((effect) => effect())
    }

现在让我们回到 `whenDepsChange()` 函数中：

js

    function whenDepsChange(update) {
      const effect = () => {
        activeEffect = effect
        update()
        activeEffect = null
      }
      effect()
    }

它将原本的 `update` 函数包装在了一个副作用函数中。在运行实际的更新之前，这个外部函数会将自己设为当前活跃的副作用。这使得在更新期间的 `track()` 调用都能定位到这个当前活跃的副作用。

此时，我们已经创建了一个能自动跟踪其依赖的副作用，它会在任意依赖被改动时重新运行。我们称其为**响应式副作用**。

Vue 提供了一个 API 来让你创建响应式副作用 [`watchEffect()`](/api/reactivity-core.html#watcheffect)。事实上，你会发现它的使用方式和我们上面示例中说的魔法函数 `whenDepsChange()` 非常相似。我们可以用真正的 Vue API 改写上面的例子：

js

    import { ref, watchEffect } from 'vue'
    
    const A0 = ref(0)
    const A1 = ref(1)
    const A2 = ref()
    
    watchEffect(() => {
      // 追踪 A0 和 A1
      A2.value = A0.value + A1.value
    })
    
    // 将触发副作用
    A0.value = 2

使用一个响应式副作用来更改一个 ref 并不是最优解，事实上使用计算属性会更直观简洁：

js

    import { ref, computed } from 'vue'
    
    const A0 = ref(0)
    const A1 = ref(1)
    const A2 = computed(() => A0.value + A1.value)
    
    A0.value = 2

在内部，`computed` 会使用响应式副作用来管理失效与重新计算的过程。

那么，常见的响应式副作用的用例是什么呢？自然是更新 DOM！我们可以像下面这样实现一个简单的“响应式渲染”：

js

    import { ref, watchEffect } from 'vue'
    
    const count = ref(0)
    
    watchEffect(() => {
      document.body.innerHTML = `计数：${count.value}`
    })
    
    // 更新 DOM
    count.value++

实际上，这与 Vue 组件保持状态和 DOM 同步的方式非常接近——每个组件实例创建一个响应式副作用来渲染和更新 DOM。当然，Vue 组件使用了比 `innerHTML` 更高效的方式来更新 DOM。这会在[渲染机制](./rendering-mechanism.html)一章中详细介绍。

`ref()`、`computed()` 和 `watchEffect()` 这些 API 都是组合式 API 的一部分，如果你至今只使用过选项式 API，那么你需要知道的是组合式 API 更贴近 Vue 底层的响应式系统。事实上，Vue 3 中的选项式 API 正是基于组合式 API 建立的。对该组件实例 (`this`) 所有的属性访问都会触发 getter / setter 的响应式追踪，而像 `watch` 和 `computed` 这样的选项也是在内部调用相应等价的组合式 API。

运行时 vs. 编译时响应性 [​](#runtime-vs-compile-time-reactivity)
-------------------------------------------------------

Vue 的响应式系统基本是基于运行时的。追踪和触发都是在浏览器中运行时进行的。运行时响应性的优点是，它可以在没有构建步骤的情况下工作，而且边界情况较少。另一方面，这使得它受到了 JavaScript 语法的制约，导致需要使用一些例如 Vue ref 这样的值的容器。

一些框架，如 [Svelte](https://svelte.dev/)，选择通过编译时实现响应性来克服这种限制。它对代码进行分析和转换，以模拟响应性。该编译步骤允许框架改变 JavaScript 本身的语义——例如，隐式地注入执行依赖性分析的代码，以及围绕对本地定义的变量的访问进行作用触发。这样做的缺点是，该转换需要一个构建步骤，而改变 JavaScript 的语义实质上是在创造一种新语言，看起来像 JavaScript 但编译出来的东西是另外一回事。

Vue 团队确实曾通过一个名为[响应性语法糖](/guide/extras/reactivity-transform.html)的实验性功能来探索这个方向，但最后由于[这个原因](https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028)，我们认为它不适合这个项目。

响应性调试 [​](#reactivity-debugging)
--------------------------------

Vue 的响应性系统可以自动跟踪依赖关系，但在某些情况下，我们可能希望确切地知道正在跟踪什么，或者是什么导致了组件重新渲染。

### 组件调试钩子 [​](#component-debugging-hooks)

我们可以在一个组件渲染时使用 `renderTracked``onRenderTracked` 生命周期钩子来调试查看哪些依赖正在被使用，或是用 `renderTriggered``onRenderTriggered` 来确定哪个依赖正在触发更新。这些钩子都会收到一个调试事件，其中包含了触发相关事件的依赖的信息。推荐在回调中放置一个 `debugger` 语句，使你可以在开发者工具中交互式地查看依赖：

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

组件调试钩子仅会在开发模式下工作

调试事件对象有如下的类型定义：

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

### 计算属性调试 [​](#computed-debugging)

我们可以向 `computed()` 传入第二个参数，是一个包含了 `onTrack` 和 `onTrigger` 两个回调函数的对象：

*   `onTrack` 将在响应属性或引用作为依赖项被跟踪时被调用。
*   `onTrigger` 将在侦听器回调被依赖项的变更触发时被调用。

这两个回调都会作为组件调试的钩子，接受[相同格式](#debugger-event)的调试事件：

js

    const plusOne = computed(() => count.value + 1, {
      onTrack(e) {
        // 当 count.value 被追踪为依赖时触发
        debugger
      },
      onTrigger(e) {
        // 当 count.value 被更改时触发
        debugger
      }
    })
    
    // 访问 plusOne，会触发 onTrack
    console.log(plusOne.value)
    
    // 更改 count.value，应该会触发 onTrigger
    count.value++

TIP

计算属性的 `onTrack` 和 `onTrigger` 选项仅会在开发模式下工作。

### 侦听器调试 [​](#watcher-debugging)

和 `computed()` 类似，侦听器也支持 `onTrack` 和 `onTrigger` 选项：

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

侦听器的 `onTrack` 和 `onTrigger` 选项仅会在开发模式下工作。

与外部状态系统集成 [​](#integration-with-external-state-systems)
-------------------------------------------------------

Vue 的响应性系统是通过深度转换普通 JavaScript 对象为响应式代理来实现的。这种深度转换在一些情况下是不必要的，在和一些外部状态管理系统集成时，甚至是需要避免的 (例如，当一个外部的解决方案也用了 Proxy 时)。

将 Vue 的响应性系统与外部状态管理方案集成的大致思路是：将外部状态放在一个 [`shallowRef`](/api/reactivity-advanced.html#shallowref) 中。一个浅层的 ref 中只有它的 `.value` 属性本身被访问时才是有响应性的，而不关心它内部的值。当外部状态改变时，替换此 ref 的 `.value` 才会触发更新。

### 不可变数据 [​](#immutable-data)

如果你正在实现一个撤销/重做的功能，你可能想要对用户编辑时应用的状态进行快照记录。然而，如果状态树很大的话，Vue 的可变响应性系统没法很好地处理这种情况，因为在每次更新时都序列化整个状态对象对 CPU 和内存开销来说都是非常昂贵的。

[不可变数据结构](https://en.wikipedia.org/wiki/Persistent_data_structure)通过永不更改状态对象来解决这个问题。与 Vue 不同的是，它会创建一个新对象，保留旧的对象未发生改变的一部分。在 JavaScript 中有多种不同的方式来使用不可变数据，但我们推荐使用 [Immer](https://immerjs.github.io/immer/) 搭配 Vue，因为它使你可以在保持原有直观、可变的语法的同时，使用不可变数据。

我们可以通过一个简单的组合式函数来集成 Immer：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNplU8Fu2zAM/RXOlzpAYu82zEu67lhgpw3bJcrBs5VYqywJkpxmMPzvoyjZNRodbJF84iOppzH7ZkxxHXhWZXvXWGE8OO4H88iU6I22HkYYHH/ue25hgrPVPTwUpQh28dc9MAXAVKOV83AUnvduC4Npa8+fg3GCw3I8PwbwGD64vPCSV8Cy77y2Cn4PnGXbFGu1wpC36EPHRO67c78cD6fgVfgOiOB9gnMtXczA1GnDFFPnQTVeaAVeXy6SSsyFavltE/OvKs+pGTg8zsxkHwl9KgIBtvbhzkl0yIWU+zIOFEeJBgKNxORoAewHSX/cSQHX3VnbA8vyMXa3pfqxb0i1CRXZWZb6w1U1snYOT40JvQ4+NVI0Lxi865NliTisMRHChOVSNaUUscCSKtyXq7LRdP6fDNvYPw3G85vftbzRtg6TrUAKxXe+s3q4dF/mQdC5bJtFTe362qB4tELVURKWAthhNc87+OhSw2V33htXleWgzMulaHQfFfj0ufhYfCpb4XySJHc9Zv7a63aQqKh0+xNRR8kiZ1K2sYhqeBI1xVHPi+xdV0upX3/w8yJ8fCiIYIrfCLPIaZH4n9rxnx7nlQQVH4YLHpTLW8YV8A0W1Ye4PO7sZiU/ylFca4mSP8yl5yvv/O4sZcSmw8/iW8bXdSTcjDiFgUz/AcH6WZQ=)

### 状态机 [​](#state-machines)

[状态机](https://en.wikipedia.org/wiki/Finite-state_machine)是一种数据模型，用于描述应用可能处于的所有可能状态，以及从一种状态转换到另一种状态的所有可能方式。虽然对于简单的组件来说，这可能有些小题大做了，但它的确可以使得复杂的状态流更加健壮和易于管理。

[XState](https://xstate.js.org/) 是 JavaScript 中一个比较常用的状态机实现方案。这里是集成它的一个例子：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp1U81unDAQfpWRL7DSFqqqUiXEJumhyqVVpDa3ugcKZtcJjC1syEqId8/YBu/uIRcEM9/P/DGz71pn0yhYwUpTD1JbMMKO+o6j7LUaLMwwGvGrqk8SBSzQDqqHJMv7EMleTMIRgGOt0Fj4a2xlxZ5EsPkHhytuOjucbApIrDoeO5HsfQCllVVHUYlVbeW0xr2OKcCzHCwkKQAK3fP56fHx5w/irSyqbfFMgA+h0cKBHZYey45jmYfeqWv6sKLXHbnTF0D5f7RWITzUnaxfD5y5ztIkSCY7zjwKYJ5DyVlf2fokTMrZ5sbZDu6Bs6e25QwK94b0svgKyjwYkEyZR2e2Z2H8n/pK04wV0oL8KEjWJwxncTicnb23C3F2slabIs9H1K/HrFZ9HrIPX7Mv37LPuTC5xEacSfa+V83YEW+bBfleFkuW8QbqQZDEuso9rcOKQQ/CxosIHnQLkWJOVdept9+ijSA6NEJwFGePaUekAdFwr65EaRcxu9BbOKq1JDqnmzIi9oL0RRDu4p1u/ayH9schrhlimGTtOLGnjeJRAJnC56FCQ3SFaYriLWjA4Q7SsPOp6kYnEXMbldKDTW/ssCFgKiaB1kusBWT+rkLYjQiAKhkHvP2j3IqWd5iMQ+M=)

### RxJS [​](#rxjs)

[RxJS](https://rxjs.dev/) 是一个用于处理异步事件流的库。[VueUse](https://vueuse.org/) 库提供了 [`@vueuse/rxjs`](https://vueuse.org/rxjs/readme.html) 扩展来支持连接 RxJS 流与 Vue 的响应性系统。

与信号 (signal) 的联系 [​](#connection-to-signals)
--------------------------------------------

很多其他框架已经引入了与 Vue 组合式 API 中的 ref 类似的响应性基础类型，并称之为“信号”：

*   [Solid 信号](https://www.solidjs.com/docs/latest/api#createsignal)
*   [Angular 信号](https://github.com/angular/angular/discussions/49090)
*   [Preact 信号](https://preactjs.com/guide/v10/signals/)
*   [Qwik 信号](https://qwik.builder.io/docs/components/state/#usesignal)

从根本上说，信号是与 Vue 中的 ref 相同的响应性基础类型。它是一个在访问时跟踪依赖、在变更时触发副作用的值容器。这种基于响应性基础类型的范式在前端领域并不是一个特别新的概念：它可以追溯到十多年前的 [Knockout observables](https://knockoutjs.com/documentation/observables.html) 和 [Meteor Tracker](https://docs.meteor.com/api/tracker.html) 等实现。Vue 的选项式 API 和 React 的状态管理库 [MobX](https://mobx.js.org/) 也是基于同样的原则，只不过将基础类型这部分隐藏在了对象属性背后。

虽然这并不是信号的必要特征，但如今这个概念经常与细粒度订阅和更新的渲染模型一起讨论。由于使用了虚拟 DOM，Vue 目前[依靠编译器来实现类似的优化](/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom)。然而，我们也在探索一种新的受 Solid 启发的编译策略 (Vapor Mode)，它不依赖于虚拟 DOM，而是更多地利用 Vue 的内置响应性系统。

### API 设计权衡 [​](#api-design-trade-offs)

Preact 和 Qwik 的信号设计与 Vue 的 [shallowRef](/api/reactivity-advanced.html#shallowref) 非常相似：三者都通过 `.value` 属性提供了一个更改接口。我们将重点讨论 Solid 和 Angular 的信号。

#### Solid Signals [​](#solid-signals)

Solid 的 `createSignal()` API 设计强调了读/写隔离。信号通过一个只读的 getter 和另一个单独的 setter 暴露：

js

    const [count, setCount] = createSignal(0)
    
    count() // 访问值
    setCount(1) // 更新值

注意到 `count` 信号在没有 setter 的情况也能传递。这就保证了除非 setter 也被明确暴露，否则状态永远不会被改变。这种更冗长的语法带来的安全保证的合理性取决于项目的要求和个人品味——但如果你喜欢这种 API 风格，可以轻易地在 Vue 中复制它：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpdUk1TgzAQ/Ss7uQAjgr12oNXxH+ix9IAYaDQkMV/qMPx3N6G0Uy9Msu/tvn2PTORJqcI7SrakMp1myoKh1qldI9iopLYwQadpa+krG0TLYYZeyxGSojSSs/d7E8vFh0ka0YhOCmPh0EknbB4mPYfTEeqbIelD1oiqXPRQCS+WjoojAW8A1Wmzm1A39KYZzHNVYiUib85aKeCx46z7rBuySqQe6h14uINN1pDIBWACVUcqbGwtl17EqvIiR3LyzwcmcXFuTi3n8vuF9jlYzYaBajxfMsDcomv6E/m9E51luN2NV99yR3OQKkAmgykss+SkMZerxMLEZFZ4oBYJGAA600VEryAaD6CPaJwJKwnr9ldR2WMedV1Dsi6WwB58emZlsAV/zqmH9LzfvqBfruUmNvZ4QN7VearjenP4aHwmWsABt4x/+tiImcx/z27Jqw==)

#### Angular 信号 [​](#angular-signals)

Angular 正在经历一些底层的变化，它放弃了脏检查，并引入了自己的响应性基础类型实现。Angular 的信号 API 看起来像这样：

js

    const count = signal(0)
    
    count() // 访问值
    count.set(1) //设置值
    count.update((v) => v + 1) // 通过前值更新
    
    // 对具有相同身份的深层对象进行更改
    const state = signal({ count: 0 })
    state.mutate((o) => {
      o.count++
    })

同样，我们可以轻易地在 Vue 中复制这个 API：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNp9UslOwzAQ/ZVRLiRQEsqxpBUIvoADp0goTd3U4DiWl4AU5d8ZL3E3iZtn5r1Z3vOYvAiRD4Ykq6RUjaRCgyLaiE3FaSd6qWEERVteswU0fSeMJjuYYC/7Dm7youatYbW895D8S91UvOJNz5VGuOEa1oGePmRzYdebLSNYmRumaQbrjSfg8xYeEVsWfh/cBANNOsFqTTACKA/LzavrTtUKxjEyp6kssDZj3vygAPJjL1Bbo3XP4blhtPleV4nrlBuxw1npYLca4A6WWZU4PADljSQd4drRC8//rxfKaW+f+ZJg4oJbFvG8ZJFcaYreHL041Iz1P+9kvwAtadsS6d7Rm1rB55VRaLAzhvy6NnvDG01x1WAN5VTTmn3UzJAMRrudd0pa++LEc9wRpRDlHZT5YGu2pOzhWHAJWxvnakxOHufFxqx/4MxzcEinIYP+eV5ntOe5Rx94IYjopxOZUhnIEr+4xPMrjuG1LPFftkTj5DNJGhwYBZ4BJz3DV56FmJLpD1DrKXU=)

与 Vue 的 ref 相比，Solid 和 Angular 基于 getter 的 API 风格在 Vue 组件中使用时提供了一些有趣的权衡：

*   `()` 比 `.value` 略微省事，但更新值却更冗长；
*   没有 ref 解包：总是需要通过 `()` 来访问值。这使得值的访问在任何地方都是一致的。这也意味着你可以将原始信号作为组件的参数传递下去。

这些 API 风格是否适合你，在某种程度上是主观的。我们在这里的目标是展示这些不同的 API 设计之间的基本相似性和取舍。我们还想说明 Vue 是灵活的：你并没有真正被限定在现有的 API 中。如有必要，你可以创建你自己的响应性基础 API，以满足更多的具体需求。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/reactivity-in-depth.md)
渲染机制 [​](#rendering-mechanism)
==============================

Vue 是如何将一份模板转换为真实的 DOM 节点的，又是如何高效地更新这些节点的呢？我们接下来就将尝试通过深入研究 Vue 的内部渲染机制来解释这些问题。

虚拟 DOM [​](#virtual-dom)
------------------------

你可能已经听说过“虚拟 DOM”的概念了，Vue 的渲染系统正是基于这个概念构建的。

虚拟 DOM (Virtual DOM，简称 VDOM) 是一种编程概念，意为将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。这个概念是由 [React](https://reactjs.org/) 率先开拓，随后在许多不同的框架中都有不同的实现，当然也包括 Vue。

与其说虚拟 DOM 是一种具体的技术，不如说是一种模式，所以并没有一个标准的实现。我们可以用一个简单的例子来说明：

js

    const vnode = {
      type: 'div',
      props: {
        id: 'hello'
      },
      children: [
        /* 更多 vnode */
      ]
    }

这里所说的 `vnode` 即一个纯 JavaScript 的对象 (一个“虚拟节点”)，它代表着一个 `<div>` 元素。它包含我们创建实际元素所需的所有信息。它还包含更多的子节点，这使它成为虚拟 DOM 树的根节点。

一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为**挂载** (mount)。

如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为**更新** (patch)，又被称为“比对”(diffing) 或“协调”(reconciliation)。

虚拟 DOM 带来的主要收益是它让开发者能够灵活、声明式地创建、检查和组合所需 UI 的结构，同时只需把具体的 DOM 操作留给渲染器去处理。

渲染管线 [​](#render-pipeline)
--------------------------

从高层面的视角看，Vue 组件挂载时会发生如下几件事：

1.  **编译**：Vue 模板被编译为**渲染函数**：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。
    
2.  **挂载**：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为[响应式副作用](./reactivity-in-depth.html)执行，因此它会追踪其中所用到的所有响应式依赖。
    
3.  **更新**：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。
    

![render pipeline](/assets/render-pipeline.03805016.png)

模板 vs. 渲染函数 [​](#templates-vs-render-functions)
-----------------------------------------------

Vue 模板会被预编译成虚拟 DOM 渲染函数。Vue 也提供了 API 使我们可以不使用模板编译，直接手写渲染函数。在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。

那么为什么 Vue 默认推荐使用模板呢？有以下几点原因：

1.  模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。
    
2.  由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。
    

在实践中，模板对大多数的应用场景都是够用且高效的。渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用。想了解渲染函数的更多使用细节可以去到[渲染函数 & JSX](./render-function.html) 章节继续阅读。

带编译时信息的虚拟 DOM [​](#compiler-informed-virtual-dom)
-------------------------------------------------

虚拟 DOM 在 React 和大多数其他实现中都是纯运行时的：更新算法无法预知新的虚拟 DOM 树会是怎样，因此它总是需要遍历整棵树、比较每个 vnode 上 props 的区别来确保正确性。另外，即使一棵树的某个部分从未改变，还是会在每次重渲染时创建新的 vnode，带来了大量不必要的内存压力。这也是虚拟 DOM 最受诟病的地方之一：这种有点暴力的更新过程通过牺牲效率来换取声明式的写法和最终的正确性。

但实际上我们并不需要这样。在 Vue 中，框架同时控制着编译器和运行时。这使得我们可以为紧密耦合的模板渲染器应用许多编译时优化。编译器可以静态分析模板并在生成的代码中留下标记，使得运行时尽可能地走捷径。与此同时，我们仍旧保留了边界情况时用户想要使用底层渲染函数的能力。我们称这种混合解决方案为**带编译时信息的虚拟 DOM**。

下面，我们将讨论一些 Vue 编译器用来提高虚拟 DOM 运行时性能的主要优化：

### 静态提升 [​](#static-hoisting)

在模板中常常有部分内容是不带任何动态绑定的：

template

    <div>
      <div>foo</div> <!-- 需提升 -->
      <div>bar</div> <!-- 需提升 -->
      <div>{{ dynamic }}</div>
    </div>

[在模板编译预览中查看](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2PmZvbzwvZGl2PiA8IS0tIGhvaXN0ZWQgLS0+XG4gIDxkaXY+YmFyPC9kaXY+IDwhLS0gaG9pc3RlZCAtLT5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj5cbiIsIm9wdGlvbnMiOnsiaG9pc3RTdGF0aWMiOnRydWV9fQ==)

`foo` 和 `bar` 这两个 div 是完全静态的，没有必要在重新渲染时再次创建和比对它们。Vue 编译器自动地会提升这部分 vnode 创建函数到这个模板的渲染函数之外，并在每次渲染时都使用这份相同的 vnode，渲染器知道新旧 vnode 在这部分是完全相同的，所以会完全跳过对它们的差异比对。

此外，当有足够多连续的静态元素时，它们还会再被压缩为一个“静态 vnode”，其中包含的是这些节点相应的纯 HTML 字符串。([示例](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb1wiPmZvbzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj4iLCJzc3IiOmZhbHNlLCJvcHRpb25zIjp7ImhvaXN0U3RhdGljIjp0cnVlfX0=))。这些静态节点会直接通过 `innerHTML` 来挂载。同时还会在初次挂载后缓存相应的 DOM 节点。如果这部分内容在应用中其他地方被重用，那么将会使用原生的 `cloneNode()` 方法来克隆新的 DOM 节点，这会非常高效。

### 更新类型标记 [​](#patch-flags)

对于单个有动态绑定的元素来说，我们可以在编译时推断出大量信息：

template

    <!-- 仅含 class 绑定 -->
    <div :class="{ active }"></div>
    
    <!-- 仅含 id 和 value 绑定 -->
    <input :id="id" :value="value">
    
    <!-- 仅含文本子节点 -->
    <div>{{ dynamic }}</div>

[在模板编译预览中查看](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2IDpjbGFzcz1cInsgYWN0aXZlIH1cIj48L2Rpdj5cblxuPGlucHV0IDppZD1cImlkXCIgOnZhbHVlPVwidmFsdWVcIj5cblxuPGRpdj57eyBkeW5hbWljIH19PC9kaXY+Iiwib3B0aW9ucyI6e319)

在为这些元素生成渲染函数时，Vue 在 vnode 创建调用中直接编码了每个元素所需的更新类型：

js

    createElementVNode("div", {
      class: _normalizeClass({ active: _ctx.active })
    }, null, 2 /* CLASS */)

最后这个参数 `2` 就是一个[更新类型标记 (patch flag)](https://github.com/vuejs/core/blob/main/packages/shared/src/patchFlags.ts)。一个元素可以有多个更新类型标记，会被合并成一个数字。运行时渲染器也将会使用[位运算](https://en.wikipedia.org/wiki/Bitwise_operation)来检查这些标记，确定相应的更新操作：

js

    if (vnode.patchFlag & PatchFlags.CLASS /* 2 */) {
      // 更新节点的 CSS class
    }

位运算检查是非常快的。通过这样的更新类型标记，Vue 能够在更新带有动态绑定的元素时做最少的操作。

Vue 也为 vnode 的子节点标记了类型。举例来说，包含多个根节点的模板被表示为一个片段 (fragment)，大多数情况下，我们可以确定其顺序是永远不变的，所以这部分信息就可以提供给运行时作为一个更新类型标记。

js

    export function render() {
      return (_openBlock(), _createElementBlock(_Fragment, null, [
        /* children */
      ], 64 /* STABLE_FRAGMENT */))
    }

运行时会完全跳过对这个根片段中子元素顺序的重新协调过程。

### 树结构打平 [​](#tree-flattening)

再来看看上面这个例子中生成的代码，你会发现所返回的虚拟 DOM 树是经一个特殊的 `createElementBlock()` 调用创建的：

js

    export function render() {
      return (_openBlock(), _createElementBlock(_Fragment, null, [
        /* children */
      ], 64 /* STABLE_FRAGMENT */))
    }

这里我们引入一个概念“区块”，内部结构是稳定的一个部分可被称之为一个区块。在这个用例中，整个模板只有一个区块，因为这里没有用到任何结构性指令 (比如 `v-if` 或者 `v-for`)。

每一个块都会追踪其所有带更新类型标记的后代节点 (不只是直接子节点)，举例来说：

template

    <div> <!-- root block -->
      <div>...</div>         <!-- 不会追踪 -->
      <div :id="id"></div>   <!-- 要追踪 -->
      <div>                  <!-- 不会追踪 -->
        <div>{{ bar }}</div> <!-- 要追踪 -->
      </div>
    </div>

编译的结果会被打平为一个数组，仅包含所有动态的后代节点：

    div (block root)
    - div 带有 :id 绑定
    - div 带有 {{ bar }} 绑定

当这个组件需要重渲染时，只需要遍历这个打平的树而非整棵树。这也就是我们所说的**树结构打平**，这大大减少了我们在虚拟 DOM 协调时需要遍历的节点数量。模板中任何的静态部分都会被高效地略过。

`v-if` 和 `v-for` 指令会创建新的区块节点：

template

    <div> <!-- 根区块 -->
      <div>
        <div v-if> <!-- if 区块 -->
          ...
        <div>
      </div>
    </div>

一个子区块会在父区块的动态子节点数组中被追踪，这为他们的父区块保留了一个稳定的结构。

### 对 SSR 激活的影响 [​](#impact-on-ssr-hydration)

更新类型标记和树结构打平都大大提升了 Vue [SSR 激活](/guide/scaling-up/ssr.html#client-hydration)的性能表现：

*   单个元素的激活可以基于相应 vnode 的更新类型标记走更快的捷径。
    
*   在激活时只有区块节点和其动态子节点需要被遍历，这在模板层面上实现更高效的部分激活。
    

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/rendering-mechanism.md)
渲染函数 & JSX [​](#render-functions-jsx)
=====================================

在绝大多数情况下，Vue 推荐使用模板语法来创建应用。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时**渲染函数**就派上用场了。

> 如果你还不熟悉虚拟 DOM 和渲染函数的概念的话，请确保先阅读[渲染机制](/guide/extras/rendering-mechanism.html)章节。

基本用法 [​](#basic-usage)
----------------------

### 创建 Vnodes [​](#creating-vnodes)

Vue 提供了一个 `h()` 函数用于创建 vnodes：

js

    import { h } from 'vue'
    
    const vnode = h(
      'div', // type
      { id: 'foo', class: 'bar' }, // props
      [
        /* children */
      ]
    )

`h()` 是 **hyperscript** 的简称——意思是“能生成 HTML (超文本标记语言) 的 JavaScript”。这个名字来源于许多虚拟 DOM 实现默认形成的约定。一个更准确的名称应该是 `createVnode()`，但当你需要多次使用渲染函数时，一个简短的名字会更省力。

`h()` 函数的使用方式非常的灵活：

js

    // 除了类型必填以外，其他的参数都是可选的
    h('div')
    h('div', { id: 'foo' })
    
    // attribute 和 property 都能在 prop 中书写
    // Vue 会自动将它们分配到正确的位置
    h('div', { class: 'bar', innerHTML: 'hello' })
    
    // 像 `.prop` 和 `.attr` 这样的的属性修饰符
    // 可以分别通过 `.` 和 `^` 前缀来添加
    h('div', { '.name': 'some-name', '^width': '100' })
    
    // 类与样式可以像在模板中一样
    // 用数组或对象的形式书写
    h('div', { class: [foo, { bar }], style: { color: 'red' } })
    
    // 事件监听器应以 onXxx 的形式书写
    h('div', { onClick: () => {} })
    
    // children 可以是一个字符串
    h('div', { id: 'foo' }, 'hello')
    
    // 没有 props 时可以省略不写
    h('div', 'hello')
    h('div', [h('span', 'hello')])
    
    // children 数组可以同时包含 vnodes 与字符串
    h('div', ['hello', h('span', 'hello')])

得到的 vnode 为如下形式：

js

    const vnode = h('div', { id: 'foo' }, [])
    
    vnode.type // 'div'
    vnode.props // { id: 'foo' }
    vnode.children // []
    vnode.key // null

注意事项

完整的 `VNode` 接口包含其他内部属性，但是强烈建议避免使用这些没有在这里列举出的属性。这样能够避免因内部属性变更而导致的不兼容性问题。

### 声明渲染函数 [​](#declaring-render-function)

当组合式 API 与模板一起使用时，`setup()` 钩子的返回值是用于暴露数据给模板。然而当我们使用渲染函数时，可以直接把渲染函数返回：

js

    import { ref, h } from 'vue'
    
    export default {
      props: {
        /* ... */
      },
      setup(props) {
        const count = ref(1)
    
        // 返回渲染函数
        return () => h('div', props.msg + count.value)
      }
    }

在 `setup()` 内部声明的渲染函数天生能够访问在同一范围内声明的 props 和许多响应式状态。

除了返回一个 vnode，你还可以返回字符串或数组：

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
        // 使用数组返回多个根节点
        return () => [
          h('div'),
          h('div'),
          h('div')
        ]
      }
    }

TIP

请确保返回的是一个函数而不是一个值！`setup()` 函数在每个组件中只会被调用一次，而返回的渲染函数将会被调用多次。

我们可以使用 `render` 选项来声明渲染函数：

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

`render()` 函数可以访问同一个 `this` 组件实例。

除了返回一个单独的 vnode 之外，你还可以返回字符串或是数组：

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
        // 用数组来返回多个根节点
        return [
          h('div'),
          h('div'),
          h('div')
        ]
      }
    }

如果一个渲染函数组件不需要任何实例状态，为了简洁起见，它们也可以直接被声明为一个函数：

js

    function Hello() {
      return 'hello world!'
    }

没错，这就是一个合法的 Vue 组件！参阅[函数式组件](#functional-components)来了解更多语法细节。

### Vnodes 必须唯一 [​](#vnodes-must-be-unique)

组件树中的 vnodes 必须是唯一的。下面是错误示范：

js

    function render() {
      const p = h('p', 'hi')
      return h('div', [
        // 啊哦，重复的 vnodes 是无效的
        p,
        p
      ])
    }

如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。比如下面的这个渲染函数就可以完美渲染出 20 个相同的段落：

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

[JSX](https://facebook.github.io/jsx/) 是 JavaScript 的一个类似 XML 的扩展，有了它，我们可以用以下的方式来书写代码：

jsx

    const vnode = <div>hello</div>

在 JSX 表达式中，使用大括号来嵌入动态值：

jsx

    const vnode = <div id={dynamicId}>hello, {userName}</div>

`create-vue` 和 Vue CLI 都有预置的 JSX 语法支持。如果你想手动配置 JSX，请参阅 [`@vue/babel-plugin-jsx`](https://github.com/vuejs/jsx-next) 文档获取更多细节。

虽然最早是由 React 引入，但实际上 JSX 语法并没有定义运行时语义，并且能被编译成各种不同的输出形式。如果你之前使用过 JSX 语法，那么请注意 **Vue 的 JSX 编译方式与 React 中 JSX 的编译方式不同**，因此你不能在 Vue 应用中使用 React 的 JSX 编译。与 React JSX 语法的一些明显区别包括：

*   可以使用 HTML attributes 比如 `class` 和 `for` 作为 props - 不需要使用 `className` 或 `htmlFor`。
*   传递子元素给组件 (比如 slots) 的[方式不同](#passing-slots)。

Vue 的类型定义也提供了 TSX 语法的类型推导支持。当使用 TSX 语法时，确保在 `tsconfig.json` 中配置了 `"jsx": "preserve"`，这样的 TypeScript 就能保证 Vue JSX 语法编译过程中的完整性。

渲染函数案例 [​](#render-function-recipes)
------------------------------------

下面我们提供了几个常见的用等价的渲染函数 / JSX 语法，实现模板功能的案例：

### `v-if` [​](#v-if)

模板：

template

    <div>
      <div v-if="ok">yes</div>
      <span v-else>no</span>
    </div>

等价于使用如下渲染函数 / JSX 语法：

js

    h('div', [ok.value ? h('div', 'yes') : h('span', 'no')])

jsx

    <div>{ok.value ? <div>yes</div> : <span>no</span>}</div>

js

    h('div', [this.ok ? h('div', 'yes') : h('span', 'no')])

jsx

    <div>{this.ok ? <div>yes</div> : <span>no</span>}</div>

### `v-for` [​](#v-for)

模板：

template

    <ul>
      <li v-for="{ id, text } in items" :key="id">
        {{ text }}
      </li>
    </ul>

等价于使用如下渲染函数 / JSX 语法：

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

以 `on` 开头，并跟着大写字母的 props 会被当作事件监听器。比如，`onClick` 与模板中的 `@click` 等价。

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

### 事件修饰符 [​](#event-modifiers)

对于 `.passive`、`.capture` 和 `.once` 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面：

实例：

js

    h('input', {
      onClickCapture() {
        /* 捕捉模式中的监听器 */
      },
      onKeyupOnce() {
        /* 只触发一次 */
      },
      onMouseoverOnceCapture() {
        /* 单次 + 捕捉 */
      }
    })

jsx

    <input
      onClickCapture={() => {}}
      onKeyupOnce={() => {}}
      onMouseoverOnceCapture={() => {}}
    />

对于事件和按键修饰符，可以使用 [`withModifiers`](/api/render-function.html#withmodifiers) 函数：

js

    import { withModifiers } from 'vue'
    
    h('div', {
      onClick: withModifiers(() => {}, ['self'])
    })

jsx

    <div onClick={withModifiers(() => {}, ['self'])} />

### 组件 [​](#components)

在给组件创建 vnode 时，传递给 `h()` 函数的第一个参数应当是组件的定义。这意味着使用渲染函数时不再需要注册组件了 —— 可以直接使用导入的组件：

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

不管是什么类型的文件，只要从中导入的是有效的 Vue 组件，`h` 就能正常运作。

动态组件在渲染函数中也可直接使用：

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

如果一个组件是用名字注册的，不能直接导入 (例如，由一个库全局注册)，可以使用 [`resolveComponent()`](/api/render-function.html#resolvecomponent) 来解决这个问题。

### 渲染插槽 [​](#rendering-slots)

在渲染函数中，插槽可以通过 `setup()` 的上下文来访问。每个 `slots` 对象中的插槽都是一个**返回 vnodes 数组的函数**：

js

    export default {
      props: ['message'],
      setup(props, { slots }) {
        return () => [
          // 默认插槽：
          // <div><slot /></div>
          h('div', slots.default()),
    
          // 具名插槽：
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

等价 JSX 语法：

jsx

    // 默认插槽
    <div>{slots.default()}</div>
    
    // 具名插槽
    <div>{slots.footer({ text: props.message })}</div>

在渲染函数中，可以通过 [this.$slots](/api/component-instance.html#slots) 来访问插槽：

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

等价 JSX 语法：

jsx

    // <div><slot /></div>
    <div>{this.$slots.default()}</div>
    
    // <div><slot name="footer" :text="message" /></div>
    <div>{this.$slots.footer({ text: this.message })}</div>

### 传递插槽 [​](#passing-slots)

向组件传递子元素的方式与向元素传递子元素的方式有些许不同。我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。

js

    // 单个默认插槽
    h(MyComponent, () => 'hello')
    
    // 具名插槽
    // 注意 `null` 是必需的
    // 以避免 slot 对象被当成 prop 处理
    h(MyComponent, null, {
        default: () => 'default slot',
        foo: () => h('div', 'foo'),
        bar: () => [h('span', 'one'), h('span', 'two')]
    })

等价 JSX 语法：

jsx

    // 默认插槽
    <MyComponent>{() => 'hello'}</MyComponent>
    
    // 具名插槽
    <MyComponent>{{
      default: () => 'default slot',
      foo: () => <div>foo</div>,
      bar: () => [<span>one</span>, <span>two</span>]
    }}</MyComponent>

插槽以函数的形式传递使得它们可以被子组件懒调用。这能确保它被注册为子组件的依赖关系，而不是父组件。这使得更新更加准确及有效。

### 内置组件 [​](#built-in-components)

诸如 `<KeepAlive>`、`<Transition>`、`<TransitionGroup>`、`<Teleport>` 和 `<Suspense>` 等[内置组件](/api/built-in-components.html)在渲染函数中必须导入才能使用：

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

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 props：

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

### 自定义指令 [​](#custom-directives)

可以使用 [`withDirectives`](/api/render-function.html#withdirectives) 将自定义指令应用于 vnode：

js

    import { h, withDirectives } from 'vue'
    
    // 自定义指令
    const pin = {
      mounted() { /* ... */ },
      updated() { /* ... */ }
    }
    
    // <div v-pin:top.animate="200"></div>
    const vnode = withDirectives(h('div'), [
      [pin, 200, 'top', { animate: true }]
    ])

当一个指令是以名称注册并且不能被直接导入时，可以使用 [`resolveDirective`](/api/render-function.html#resolvedirective) 函数来解决这个问题。

### 模板引用 [​](#template-refs)

在组合式 API 中，模板引用通过将 `ref()` 本身作为一个属性传递给 vnode 来创建：

js

    import { h, ref } from 'vue'
    
    export default {
      setup() {
        const divEl = ref()
    
        // <div ref="divEl">
        return () => h('div', { ref: divEl })
      }
    }

在选项式 API 中，模板引用通过在 vnode 参数中传递字符串类型的引用名称来创建：

js

    export default {
      render() {
        // <div ref="divEl">
        return h('div', { ref: 'divEl' })
      }
    }

函数式组件 [​](#functional-components)
---------------------------------

函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 `this`)，也不会触发常规的组件生命周期钩子。

我们用一个普通的函数而不是一个选项对象来创建函数式组件。该函数实际上就是该组件的渲染函数。

函数式组件的签名与 `setup()` 钩子相同：

js

    function MyComponent(props, { slots, emit, attrs }) {
      // ...
    }

而因为函数式组件里没有 `this` 引用，Vue 会把 `props` 当作第一个参数传入：

js

    function MyComponent(props, context) {
      // ...
    }

第二个参数 `context` 包含三个属性：`attrs`、`emit` 和 `slots`。它们分别相当于组件实例的 [`$attrs`](/api/component-instance.html#attrs)、[`$emit`](/api/component-instance.html#emit) 和 [`$slots`](/api/component-instance.html#slots) 这几个属性。

大多数常规组件的配置选项在函数式组件中都不可用，除了 [`props`](/api/options-state.html#props) 和 [`emits`](/api/options-state.html#emits)。我们可以给函数式组件添加对应的属性来声明它们：

js

    MyComponent.props = ['value']
    MyComponent.emits = ['click']

如果这个 `props` 选项没有被定义，那么被传入函数的 `props` 对象就会像 `attrs` 一样会包含所有 attribute。除非指定了 `props` 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。

对于有明确 `props` 的函数式组件，[attribute 透传](/guide/components/attrs.html)的原理与普通组件基本相同。然而，对于没有明确指定 `props` 的函数式组件，只有 `class`、`style` 和 `onXxx` 事件监听器将默认从 `attrs` 中继承。在这两种情况下，可以将 `inheritAttrs` 设置为 `false` 来禁用属性继承：

js

    MyComponent.inheritAttrs = false

函数式组件可以像普通组件一样被注册和使用。如果你将一个函数作为第一个参数传入 `h`，它将会被当作一个函数式组件来对待。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/render-function.md)
Vue 与 Web Components [​](#vue-and-web-components)
=================================================

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 是一组 web 原生 API 的统称，允许开发者创建可复用的自定义元素 (custom elements)。

我们认为 Vue 和 Web Components 是互补的技术。Vue 为使用和创建自定义元素提供了出色的支持。无论你是将自定义元素集成到现有的 Vue 应用中，还是使用 Vue 来构建和分发自定义元素都很方便。

在 Vue 中使用自定义元素 [​](#using-custom-elements-in-vue)
-------------------------------------------------

Vue [在 Custom Elements Everywhere 测试中取得了 100% 的分数](https://custom-elements-everywhere.com/libraries/vue/results/results.html)。在 Vue 应用中使用自定义元素基本上与使用原生 HTML 元素的效果相同，但需要留意以下几点：

### 跳过组件解析 [​](#skipping-component-resolution)

默认情况下，Vue 会将任何非原生的 HTML 标签优先当作 Vue 组件处理，而将“渲染一个自定义元素”作为后备选项。这会在开发时导致 Vue 抛出一个“解析组件失败”的警告。要让 Vue 知晓特定元素应该被视为自定义元素并跳过组件解析，我们可以指定 [`compilerOptions.isCustomElement` 这个选项](/api/application.html#app-config-compileroptions)。

如果在开发 Vue 应用时进行了构建配置，则应该在构建配置中传递该选项，因为它是一个编译时选项。

#### 浏览器内编译时的示例配置 [​](#example-in-browser-config)

js

    // 仅在浏览器内编译时才会工作
    // 如果使用了构建工具，请看下面的配置示例
    app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-')

#### Vite 示例配置 [​](#example-vite-config)

js

    // vite.config.js
    import vue from '@vitejs/plugin-vue'
    
    export default {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              // 将所有带短横线的标签名都视为自定义元素
              isCustomElement: (tag) => tag.includes('-')
            }
          }
        })
      ]
    }

#### Vue CLI 示例配置 [​](#example-vue-cli-config)

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
              // 将所有带 ion- 的标签名都视为自定义元素
              isCustomElement: tag => tag.startsWith('ion-')
            }
          }))
      }
    }

### 传递 DOM 属性 [​](#passing-dom-properties)

由于 DOM attribute 只能为字符串值，因此我们只能使用 DOM 对象的属性来传递复杂数据。当为自定义元素设置 props 时，Vue 3 将通过 `in` 操作符自动检查该属性是否已经存在于 DOM 对象上，并且在这个 key 存在时，更倾向于将值设置为一个 DOM 对象的属性。这意味着，在大多数情况下，如果自定义元素遵循[推荐的最佳实践](https://web.dev/custom-elements-best-practices/)，你就不需要考虑这个问题。

然而，也会有一些特别的情况：必须将数据以一个 DOM 对象属性的方式传递，但该自定义元素无法正确地定义/反射这个属性 (因为 `in` 检查失败)。在这种情况下，你可以强制使用一个 `v-bind` 绑定、通过 `.prop` 修饰符来设置该 DOM 对象的属性：

template

    <my-element :user.prop="{ name: 'jack' }"></my-element>
    
    <!-- 等价简写 -->
    <my-element .user="{ name: 'jack' }"></my-element>

使用 Vue 构建自定义元素 [​](#building-custom-elements-with-vue)
------------------------------------------------------

自定义元素的主要好处是，它们可以在使用任何框架，甚至是在不使用框架的场景下使用。当你面向的最终用户可能使用了不同的前端技术栈，或是当你希望将最终的应用与它使用的组件实现细节解耦时，它们会是理想的选择。

### defineCustomElement [​](#definecustomelement)

Vue 提供了一个和定义一般 Vue 组件几乎完全一致的 [`defineCustomElement`](/api/general.html#definecustomelement) 方法来支持创建自定义元素。这个方法接收的参数和 [`defineComponent`](/api/general.html#definecomponent) 完全相同。但它会返回一个继承自 `HTMLElement` 的自定义元素构造器：

template

    <my-vue-element></my-vue-element>

js

    import { defineCustomElement } from 'vue'
    
    const MyVueElement = defineCustomElement({
      // 这里是同平常一样的 Vue 组件选项
      props: {},
      emits: {},
      template: `...`,
    
      // defineCustomElement 特有的：注入进 shadow root 的 CSS
      styles: [`/* inlined css */`]
    })
    
    // 注册自定义元素
    // 注册之后，所有此页面中的 `<my-vue-element>` 标签
    // 都会被升级
    customElements.define('my-vue-element', MyVueElement)
    
    // 你也可以编程式地实例化元素：
    // （必须在注册之后）
    document.body.appendChild(
      new MyVueElement({
        // 初始化 props（可选）
      })
    )

#### 生命周期 [​](#lifecycle)

*   当该元素的 [`connectedCallback`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks) 初次调用时，一个 Vue 自定义元素会在内部挂载一个 Vue 组件实例到它的 shadow root 上。
    
*   当此元素的 `disconnectedCallback` 被调用时，Vue 会在一个微任务后检查元素是否还留在文档中。
    
    *   如果元素仍然在文档中，那么说明它是一次移动操作，组件实例将被保留；
        
    *   如果该元素不再存在于文档中，那么说明这是一次移除操作，组件实例将被销毁。
        

#### Props [​](#props)

*   所有使用 `props` 选项声明了的 props 都会作为属性定义在该自定义元素上。Vue 会自动地、恰当地处理其作为 attribute 还是属性的反射。
    
    *   attribute 总是根据需要反射为相应的属性类型。
        
    *   基础类型的属性值 (`string`，`boolean` 或 `number`) 会被反射为 attribute。
        
*   当它们被设为 attribute 时 (永远是字符串)，Vue 也会自动将以 `Boolean` 或 `Number` 类型声明的 prop 转换为所期望的类型。比如下面这样的 props 声明：
    
    js
    
        props: {
          selected: Boolean,
          index: Number
        }
    
    并以下面这样的方式使用自定义元素：
    
    template
    
        <my-element selected index="1"></my-element>
    
    在组件中，`selected` 会被转换为 `true` (boolean 类型值) 而 `index` 会被转换为 `1` (number 类型值)。
    

#### 事件 [​](#events)

通过 `this.$emit` 或者 setup 中的 `emit` 触发的事件都会通过以 [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#adding_custom_data_%E2%80%93_customevent) 的形式从自定义元素上派发。额外的事件参数 (payload) 将会被暴露为 CustomEvent 对象上的一个 `detail` 数组。

#### 插槽 [​](#slots)

在一个组件中，插槽将会照常使用 `<slot/>` 渲染。然而，当使用最终的元素时，它只接受[原生插槽的语法](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)：

*   不支持[作用域插槽](/guide/components/slots.html#scoped-slots)。
    
*   当传递具名插槽时，应使用 `slot` attribute 而不是 `v-slot` 指令：
    
    template
    
        <my-element>
          <div slot="named">hello</div>
        </my-element>
    

#### 依赖注入 [​](#provide-inject)

[Provide / Inject API](/guide/components/provide-inject.html#provide-inject) 和[相应的组合式 API](/api/composition-api-dependency-injection.html#provide) 在 Vue 定义的自定义元素中都可以正常工作。但是请注意，依赖关系**只在自定义元素之间**起作用。例如一个 Vue 定义的自定义元素就无法注入一个由常规 Vue 组件所提供的属性。

### 将 SFC 编译为自定义元素 [​](#sfc-as-custom-element)

`defineCustomElement` 也可以搭配 Vue 单文件组件 (SFC) 使用。但是，根据默认的工具链配置，SFC 中的 `<style>` 在生产环境构建时仍然会被抽取和合并到一个单独的 CSS 文件中。当正在使用 SFC 编写自定义元素时，通常需要改为注入 `<style>` 标签到自定义元素的 shadow root 上。

官方的 SFC 工具链支持以“自定义元素模式”导入 SFC (需要 `@vitejs/plugin-vue@^1.4.0` 或 `vue-loader@^16.5.0`)。一个以自定义元素模式加载的 SFC 将会内联其 `<style>` 标签为 CSS 字符串，并将其暴露为组件的 `styles` 选项。这会被 `defineCustomElement` 提取使用，并在初始化时注入到元素的 shadow root 上。

要开启这个模式，只需要将你的组件文件以 `.ce.vue` 结尾即可：

js

    import { defineCustomElement } from 'vue'
    import Example from './Example.ce.vue'
    
    console.log(Example.styles) // ["/* 内联 css */"]
    
    // 转换为自定义元素构造器
    const ExampleElement = defineCustomElement(Example)
    
    // 注册
    customElements.define('my-example', ExampleElement)

如果你想要自定义如何判断是否将文件作为自定义元素导入 (例如将所有的 SFC 都视为用作自定义元素)，你可以通过给构建插件传递相应插件的 `customElement` 选项来实现：

*   [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#using-vue-sfcs-as-custom-elements)
*   [vue-loader](https://github.com/vuejs/vue-loader/tree/next#v16-only-options)

### 基于 Vue 构建自定义元素库 [​](#tips-for-a-vue-custom-elements-library)

当使用 Vue 构建自定义元素时，该元素将依赖于 Vue 的运行时。这会有大约 16kb 的基本打包大小，并视功能的使用情况而增长。这意味着如果只编写一个自定义元素，那么使用 Vue 并不是理想的选择。你可能想要使用原生 JavaScript、[petite-vue](https://github.com/vuejs/petite-vue)，或其他框架以追求更小的运行时体积。但是，如果你需要编写的是一组具有复杂逻辑的自定义元素，那么这个基本体积是非常合理的，因为 Vue 允许用更少的代码编写每个组件。在一起发布的元素越多，收益就会越高。

如果自定义元素将在同样使用 Vue 的应用中使用，那么你可以选择将构建包中的 Vue 外部化 (externalize)，这样这些自定义元素将与宿主应用使用同一份 Vue。

建议按元素分别导出构造函数，以便用户可以灵活地按需导入它们，并使用期望的标签名称注册它们。你还可以导出一个函数来方便用户自动注册所有元素。下面是一个 Vue 自定义元素库的入口文件示例：

js

    import { defineCustomElement } from 'vue'
    import Foo from './MyFoo.ce.vue'
    import Bar from './MyBar.ce.vue'
    
    const MyFoo = defineCustomElement(Foo)
    const MyBar = defineCustomElement(Bar)
    
    // 分别导出元素
    export { MyFoo, MyBar }
    
    export function register() {
      customElements.define('my-foo', MyFoo)
      customElements.define('my-bar', MyBar)
    }

如果你有非常多的组件，你也可以利用构建工具的功能，比如 Vite 的 [glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)或者 webpack 的 [`require.context`](https://webpack.js.org/guides/dependency-management/#requirecontext) 来从一个文件夹加载所有的组件。

Web Components vs. Vue 组件 [​](#web-components-vs-vue-components)
----------------------------------------------------------------

一些开发者认为应该避免使用框架专有的组件模型，而改为全部使用自定义元素来构建应用，因为这样可以使应用“永不过时”。在这里，我们将解释为什么我们认为这样的想法过于简单。

自定义元素和 Vue 组件之间确实存在一定程度的功能重叠：它们都允许我们定义具有数据传递、事件发射和生命周期管理的可重用组件。然而，Web Components 的 API 相对来说是更底层的和更基础的。要构建一个实际的应用，我们需要相当多平台没有涵盖的附加功能：

*   一个声明式的、高效的模板系统；
    
*   一个响应式的，利于跨组件逻辑提取和重用的状态管理系统；
    
*   一种在服务器上呈现组件并在客户端“激活”(hydrate) 组件的高性能方法 (SSR)，这对 SEO 和 [LCP 这样的 Web 关键指标](https://web.dev/vitals/)非常重要。原生自定义元素 SSR 通常需要在 Node.js 中模拟 DOM，然后序列化更改后的 DOM，而 Vue SSR 则尽可能地将其编译为拼接起来的字符串，这会高效得多。
    

Vue 的组件模型在设计时同时兼顾了这些需求，因此是一个更内聚的系统。

当你的团队有足够的技术水平时，可能可以在原生自定义元素的基础上构建具备同等功能的组件。但这也意味着你将承担长期维护内部框架的负担，同时失去了像 Vue 这样成熟的框架生态社区所带来的收益。

也有一些框架使用自定义元素作为其组件模型的基础，但它们都不可避免地要引入自己的专有解决方案来解决上面列出的问题。使用这些框架便意味着对它们针对这些问题的技术决策买单。不管这类框架怎么宣传它们“永不过时”，它们其实都无法保证你以后永远不需要重构。

除此之外，我们还发现自定义元素存在以下限制：

*   贪婪 (eager) 的插槽求值会阻碍组件之间的可组合性。Vue 的[作用域插槽](/guide/components/slots.html#scoped-slots)是一套强大的组件组合机制，而由于原生插槽的贪婪求值性质，自定义元素无法支持这样的设计。贪婪求值的插槽也意味着接收组件时不能控制何时或是否创建插槽内容的节点。
    
*   在当下要想使用 shadow DOM 书写局部作用域的 CSS，必须将样式嵌入到 JavaScript 中才可以在运行时将其注入到 shadow root 上。这也导致了 SSR 场景下需要渲染大量重复的样式标签。虽然有一些[平台功能](https://github.com/whatwg/html/pull/4898/)在尝试解决这一领域的问题，但是直到现在还没有达到通用支持的状态，而且仍有生产性能 / SSR 方面的问题需要解决。可与此同时，Vue 的 SFC 本身就提供了 [CSS 局域化机制](/api/sfc-css-features.html)，并支持抽取样式到纯 CSS 文件中。
    

Vue 将始终紧跟 Web 平台的最新标准，如果平台的新功能能让我们的工作变得更简单，我们将非常乐于利用它们。但是，我们的目标是提供“好用，且现在就能用”的解决方案。这意味着我们在采用新的原生功能时需要保持客观、批判性的态度，并在原生功能完成度不足的时候选择更适当的解决方案。

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/web-components.md)
动画技巧 [​](#animation-techniques)
===============================

Vue 提供了 [`<Transition>`](/guide/built-ins/transition.html) 和 [`<TransitionGroup>`](/guide/built-ins/transition-group.html) 组件来处理元素进入、离开和列表顺序变化的过渡效果。但除此之外，还有许多其他制作网页动画的方式在 Vue 应用中也适用。这里我们会探讨一些额外的技巧。

基于 CSS class 的动画 [​](#class-based-animations)
---------------------------------------------

对于那些不是正在进入或离开 DOM 的元素，我们可以通过给它们动态添加 CSS class 来触发动画：

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

状态驱动的动画 [​](#state-driven-animations)
-------------------------------------

有些过渡效果可以通过动态插值来实现，比如在交互时动态地给元素绑定样式。看下面这个例子：

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

除了颜色外，你还可以使用样式绑定 CSS transform、宽度或高度。你甚至可以通过运用弹性物理模拟为 SVG 添加动画，毕竟它们也只是 attribute 的数据绑定：

Drag Me

[Source code](https://play.vuejs.org/#eNqlVmtv2zYU/SsXboE6mC3bSdwVmpM9MAz9sAIdsA8b5gGhRUrWKpEESTl2DP/3HZKSbbkuUKBA4Ij3ce65D15pP/hZ62TTiEE6WNjMlNqRFa7Rj0tZ1loZR3sygmWu3IgRZarWjROcDpQbVdMbeL45WvKdZHWZ2VbXHZP/LGyWMlPSOloLxoV5L8pi7eiBZrdTr6uEo9L+alhRlLKAPGeVFZ2PdQzwD6CyTWk6oh1+6dBpM2g6isNgch4jWPeCHm4u2Xxkbg2QLrvh8IYeHmm/lARg1xhJTx+moyn9fnfr//nf1/tzzMMfr/dZsj1AnCW7Azhe6J+W8jwsfp2Q7qOypSuV/ELsaMt3Xp3saNxL48yA1Vp4DFg+ojA/0i2ldH/GPqAROcOkzZWpU3oKzxVzYui5wnPS4hz09gZsydc3Us4bidqCZWiD79FQ3ERMgagiydZMFoL/qZpsLSziX4r+mf4LRmgn9ZvsTBOEATjZBjDNCvHXSeiTj8K/wadHR8lv5ZLT8MSnhUFVA5PeyHxHw5YZutCyRW2C9alJLc+jya5n8VmXZsm865MP6hEugp61pevIRUOUDjVouX8hoWsXy8uPF5ThBvtRiGKQGXVPX3OdzozdTov0hGu1QdAR8cYwTzil76e4vrkpA/+Ubt+Fe+ydQzljhotJ3ETYQTg4UWs/qDgRLXi5aQtWMWsflgPuU2OrSiwHUfFTrRoruHqW0B5H9qh1fgyC+Ko6ONdqI6CNA9b3vK4KXo0OiLElfS8h+TVdcKsEC5B9bcgW+dpNcUx1BR09l9ytccASwmkdeoDj/C2OrRPctN9oqQ962nAwz8uqguzV3W/z2S9zOCwm3rILNkG07hmFPgaOGDD3/OiDWEygvWbY7jVESq3bVT6ti1UHkPeiqtQJontaTM46jWMAIJspLTgkybHRcaxXLPtUGNVIPs5UpUxKr/I8/yGo1HZs1wwj4N8T93pLs7f4McWKYdv5F4j/S2bzm2AeKpr6ra63QRCLium87yRouskrj7cuORcyCGtmcKfgCCtijVNBqttEUyxfJIN3UhA7sXVjVpUFFBnqIUwQ56jO2JYvuDUzED3JnlsOd9NpEGJQzNgPSwahVDKirpRBY8aG8bKxKb0LCLhByaqIVTqxYSurKrxhIhulUZrwWIkciPH5ZVxKLvw7toWJjccFT9o2XqL2cjy6z2IlGOe4/rFAp8aUL0HYUoeoF6t78/U72nUEXwvnRYqFuxX153VbqYpHYEy1nySM0GA0iF8q45ppfJUoia+eEG/ZKuxykHZbE6vl9AHj5bgHzmmbTiYZl4n9tNMYwYSLzaRn2O2xweF/7cIdbA==)

基于侦听器的动画 [​](#animating-with-watchers)
--------------------------------------

通过发挥一些创意，我们可以基于一些数字状态，配合侦听器给任何东西加上动画。例如，我们可以将数字本身变成动画：

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

[在演练场中尝试一下](https://play.vuejs.org/#eNpNUstygzAM/BWNLyEzBDKd6YWSdHrpsacefSGgJG7xY7BImhL+vTKv9ILllXYlr+jEm3PJpUWRidyXjXIEHql1e2mUdrYh6KDBY8yfoiR1wRiuBZVn6OHYWA0r5q6W2pMv3ISHkBPSlNZ4AtPqAzawC2LRdj3DdEU0WA34qB910sBUnsFWmp6LpRmaRo9UHMLIrGG3h4EBQ/OEbDRpxjx51TYFKWtYKHmOF9WP4Qzs+x22EDoA9NLwmaejC/x+vhBqVxeEfAPIK3WBsi6830lRobZSDDjA580hFIt8roxrCS4bbSuskxFmzhhIAenEy92id1CnzZzfd91szETmZ72rH6zYOej7PA3rYXrKE3GUp//m5KunWx3C5CE6enS0hjZXVKczZXCwdfWyoF79YgZPqBliJ9iGSUTEYlzuRrO9X94a/lUGNTklvBTZvAMpwhYCIMWZyPksTVvjvk9JaXUacq9sSlujFJPnvej/AElH3FQ=)

[在演练场中尝试一下](https://play.vuejs.org/#eNpNUctugzAQ/JWVLyESj6hSL5Sm6qXHnnr0xYENuAXbwus8Svj3GlxIJEvendHMvgb2bkx6cshyVtiyl4b2XMnO6J6gtsLAsdcdbKZwwxVXeJmpCo/CtQQDVwCVIBFtQwzQI7leLRmAct0B+xx28YLQGVFh5aGAjNM3zvRZUNnkizhII7V6w9xTSjqiRtoYBqhcL0hq5c3S5/hu/blKbzfYwbh9LMWVf0W2zusTws60gnDK6OtqEMTaeSGVcQSnpNMVtmmAXzkLAWeQzarCQNkKaz1zkHWysPthWNryjX/IC1bRbgvjWGTG64rssbQqLF3bKUzvHmH6o1aUnFHWDeVw0G31sqJW/mIOT9h5KEw2m7CYhUsmnV/at9XKX3n24v+E5WxdNmfTbieAs4bI2DzLnDI/dVrqLpu4Nz+/a5GzZYls/AM3dcFx)

[在 GitHub 上编辑此页](https://github.com/vuejs-translations/docs-zh-cn/edit/main/src/guide/extras/animation.md)
