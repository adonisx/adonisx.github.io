(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{333:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),s("h2",{attrs:{id:"why"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why?")]),t._v(" "),s("p",[t._v("In real world, everybody needs more than saving and listing records. Everybody needs more complicated logic in their code. "),s("strong",[t._v("AdonisX")]),t._v(" provides you a basic structure of an API. It provides you basic CRUD actions with where dynamic query options. But when you need custom logics, you will not be alone. "),s("strong",[t._v("AdonisX")]),t._v(" provides your some points to extend your HTTP requests and manipulate them.")]),t._v(" "),s("p",[t._v("There are two different ways to add your business logic; "),s("strong",[t._v("Triggers")]),t._v(" and "),s("strong",[t._v("Events")]),t._v(".")]),t._v(" "),s("p",[t._v("You may use "),s("strong",[t._v("Triggers")]),t._v(" and "),s("strong",[t._v("Events")]),t._v(" in order to add your business logic. To use them, you should use "),s("code",[t._v("triggers.js")]),t._v(" or "),s("code",[t._v("events.js")]),t._v(" under "),s("strong",[t._v("start")]),t._v(" folder. "),s("strong",[t._v("Events")]),t._v(" are actually AdonisJS' features and you can read its documentation in "),s("a",{attrs:{href:"https://adonisjs.com/docs/4.1/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(". But also, we added "),s("strong",[t._v("Triggers")]),t._v(" to our structure to have more control over database actions such as GET, POST, UPDATE and DELETE.")]),t._v(" "),s("h2",{attrs:{id:"differences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#differences"}},[t._v("#")]),t._v(" Differences")]),t._v(" "),s("p",[t._v("The main difference between "),s("strong",[t._v("triggers")]),t._v(" and "),s("strong",[t._v("events")]),t._v(" is; events are "),s("strong",[t._v("asynchronous")]),t._v(". It means that if you are using trigger and handle an the action, HTTP request cycle waits for you to done your task. But in events, when you handle an action, HTTP requests cycle keeps working and return a responses. So that, if you want to send an e-mail to the user, you should use "),s("strong",[t._v("events")]),t._v(". On the other hand, if you want to be involved to the query or any business logics in HTTP request cycle, you should use "),s("strong",[t._v("triggers")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Trigger and event definitions are almost same.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Trigger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Trigger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Event'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nTrigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onBeforeCreateUser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UserListener.checkEmailExists'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onAfterCreateUser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UserListener.sendEmail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To define a trigger for a model, you should use this structure. In this structure, there are two argument which you can use;")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("when")]),t._v(": When your method will be triggerred.")]),t._v(" "),s("li",[s("code",[t._v("method")]),t._v(": Which method will be triggered.")])]),t._v(" "),s("p",[t._v("In this example, methods will be triggers in "),s("strong",[t._v("UserListener")]),t._v(" file for before create a new record on "),s("code",[t._v("User")]),t._v(" model.")]),t._v(" "),s("p",[t._v("This is how "),s("code",[t._v("UserListener.js")]),t._v(" looks under "),s("code",[t._v("app")]),t._v(" folder;")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkEmailExists")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Implement you business logic in here.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEmail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Implement you business logic in here...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserTrigger\n")])])]),s("h2",{attrs:{id:"extentable-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extentable-actions"}},[t._v("#")]),t._v(" Extentable Actions")]),t._v(" "),s("p",[t._v("You can handle almost every actions on models. Please look at following tables;")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("ActionName{Model}")]),t._v(" "),s("th",[t._v("Variables")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onBeforeCreate{User}")]),t._v(" "),s("td",[t._v("request, params, data")])]),t._v(" "),s("tr",[s("td",[t._v("onBeforeUpdate{User}")]),t._v(" "),s("td",[t._v("request, params, item")])]),t._v(" "),s("tr",[s("td",[t._v("onBeforeDelete{User}")]),t._v(" "),s("td",[t._v("request, params, query")])]),t._v(" "),s("tr",[s("td",[t._v("onBeforePaginate{User}")]),t._v(" "),s("td",[t._v("query")])]),t._v(" "),s("tr",[s("td",[t._v("onBeforeShow{User}")]),t._v(" "),s("td",[t._v("query")])]),t._v(" "),s("tr",[s("td",[t._v("onAfterCreate{User}")]),t._v(" "),s("td",[t._v("request, params, data, item")])]),t._v(" "),s("tr",[s("td",[t._v("onAfterUpdate{User}")]),t._v(" "),s("td",[t._v("request, params, item")])]),t._v(" "),s("tr",[s("td",[t._v("onAfterDelete{User}")]),t._v(" "),s("td",[t._v("item")])]),t._v(" "),s("tr",[s("td",[t._v("onAfterPaginate{User}")]),t._v(" "),s("td",[t._v("result")])]),t._v(" "),s("tr",[s("td",[t._v("onAfterShow{User}")]),t._v(" "),s("td",[t._v("item")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);