(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(t,e,s){},323:function(t,e,s){"use strict";var a=s(287);s.n(a).a},329:function(t,e,s){"use strict";s.r(e);s(323);var a=s(33),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[s("strong",[t._v("AdonisX")]),t._v(" is a "),s("em",[t._v("fastest")]),t._v(" way to create simple "),s("strong",[t._v("Rest API")]),t._v(" by defining only database models and their relationships between them. It is built on "),s("a",{attrs:{href:"https://adonisjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdonisJs"),s("OutboundLink")],1),t._v(", and it's awesome ORM library, "),s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/lucid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lucid"),s("OutboundLink")],1),t._v(". AdonisX takes AdonisJs' power and speed it up!")]),t._v(" "),s("p",[t._v("You are going to be able to develop an API "),s("strong",[t._v("10 times faster!")])]),t._v(" "),s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How It Works?")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://adonisjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdonisJs"),s("OutboundLink")],1),t._v(" is a very beautiful web framework based on "),s("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJs"),s("OutboundLink")],1),t._v(". You can create great applications with using it. It uses "),s("a",{attrs:{href:"http://knexjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Knex.js"),s("OutboundLink")],1),t._v(" as database provider and it supports all major relational databases such as "),s("em",[t._v("Postgres")]),t._v(", "),s("em",[t._v("MSSQL")]),t._v(", "),s("em",[t._v("MySQL")]),t._v(", "),s("em",[t._v("MariaDB")]),t._v(", "),s("em",[t._v("SQLite3")]),t._v(", "),s("em",[t._v("Oracle")]),t._v(", and "),s("em",[t._v("Amazon Redshift")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("AdonisX")]),t._v(" uses basic structure of "),s("em",[t._v("AdonisJs")]),t._v(". It is actually a very simple "),s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/service-providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Provider"),s("OutboundLink")],1),t._v(" which works in the initialization proces of the application. It analyzes models and their relationships and creates all Rest API routes automatically.")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Let's assume that you have a very simple table model like this;")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" XModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'APIX/Models/XModel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XModel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User\n")])])]),s("p",[t._v("When you execute the application, you will have following endpoint for your Rest API;")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("GET api/users")])]),t._v(" "),s("li",[s("code",[t._v("POST api/users")])]),t._v(" "),s("li",[s("code",[t._v("GET api/users/:id")])]),t._v(" "),s("li",[s("code",[t._v("PUT api/users/:id")])]),t._v(" "),s("li",[s("code",[t._v("DELETE api/users/:id")])])]),t._v(" "),s("p",[t._v("You "),s("strong",[t._v("don't")]),t._v(" have to code all CRUD actions. You "),s("strong",[t._v("don't")]),t._v(" have to implement advanced query features. The only thing to do is "),s("strong",[t._v("defining models")]),t._v(" and "),s("strong",[t._v("their relations")]),t._v(" between each others. That's all! "),s("Emoji",{attrs:{code:"1f389"}})],1),t._v(" "),s("h2",{attrs:{id:"roadmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[t._v("#")]),t._v(" Roadmap")]),t._v(" "),s("p",[t._v("There are several thing we already done and there are many thing we want to implement in the future. If you have any opinion about it, please don't hesitate to open an issue for your brialliant ideas on our "),s("a",{attrs:{href:"https://github.com/adonisx/adonisx/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue page"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("You can see what we've done before and what we will work on in the future;")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Basic API structure")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Easy installation")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Extenting an action before or update.")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Form validation support")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Adding custom middlewares for actions")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Strong query features")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Recursive resource support")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Processing time on HTTP requests")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Rate Limit support")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Caching support on HTTP requests")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" System variables in queries ($now, $currentDate, $tomorrow)")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Transaction support")]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Auto generated API documentations")])]),t._v(" "),s("h2",{attrs:{id:"contribution-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guide"}},[t._v("#")]),t._v(" Contribution Guide")]),t._v(" "),s("h3",{attrs:{id:"what-do-i-need-to-know-to-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-need-to-know-to-help"}},[t._v("#")]),t._v(" What do I need to know to help?")]),t._v(" "),s("p",[t._v("If you are looking to help to with a code contribution our project uses NodeJs and AdonisJs. If you don't feel ready to make a code contribution yet, no problem! You can also check out the "),s("a",{attrs:{href:"https://github.com/adonisx/adonisx/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("any issues"),s("OutboundLink")],1),t._v(" that we have.")]),t._v(" "),s("p",[t._v("If you are interested in making a code contribution and would like to learn more about the technologies that we use, check out the list below.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdonisJs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/service-providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Provider"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/lucid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lucid"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://knexjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Knex.js"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"how-do-i-make-a-contribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-make-a-contribution"}},[t._v("#")]),t._v(" How do I make a contribution?")]),t._v(" "),s("p",[t._v("Never made an open source contribution before? Wondering how contributions work in the in our project? Here's a quick rundown!")]),t._v(" "),s("ul",[s("li",[t._v("Find an issue that you are interested in addressing or a feature that you would like to add.")]),t._v(" "),s("li",[t._v("Fork the repository associated with the issue to your local GitHub organization. This means that you will have a copy of the repository under your-GitHub-username/repository-name.")]),t._v(" "),s("li",[t._v("Clone the repository to your local machine using git clone https://github.com/github-username/repository-name.git.")]),t._v(" "),s("li",[t._v("Create a new branch for your fix using git checkout -b branch-name-here.")]),t._v(" "),s("li",[t._v("Make the appropriate changes for the issue you are trying to address or the feature that you want to add.")]),t._v(" "),s("li",[t._v('Use git add insert-paths-of-changed-files-here to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.')]),t._v(" "),s("li",[t._v('Use git commit -m "Insert a short message of the changes made here" to store the contents of the index with a descriptive message.')]),t._v(" "),s("li",[t._v("Push the changes to the remote repository using git push origin branch-name-here.")]),t._v(" "),s("li",[t._v("Submit a pull request to the upstream repository.")]),t._v(" "),s("li",[t._v('Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Fixed #4352".')]),t._v(" "),s("li",[t._v("In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!")]),t._v(" "),s("li",[t._v("Wait for the pull request to be reviewed by a maintainer.")]),t._v(" "),s("li",[t._v("Make changes to the pull request if the reviewing maintainer recommends them.")]),t._v(" "),s("li",[t._v("Celebrate your success after your pull request is merged!")])]),t._v(" "),s("h3",{attrs:{id:"where-can-i-go-for-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-go-for-help"}},[t._v("#")]),t._v(" Where can I go for help?")]),t._v(" "),s("p",[t._v("If you need help, you can ask questions on our "),s("a",{attrs:{href:"https://github.com/adonisx/adonisx/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue list"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"what-does-the-code-of-conduct-mean-for-me"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-the-code-of-conduct-mean-for-me"}},[t._v("#")]),t._v(" What does the Code of Conduct mean for me?")]),t._v(" "),s("p",[t._v("Our Code of Conduct means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any inappropriate behavior or comments as described in our Code of Conduct, we are here for you and will do the best to ensure that the abuser is reprimanded appropriately, per our code.")])])}),[],!1,null,null,null);e.default=o.exports}}]);