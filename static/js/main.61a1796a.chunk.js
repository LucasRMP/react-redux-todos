(this["webpackJsonptodos-redux"]=this["webpackJsonptodos-redux"]||[]).push([[0],{14:function(t,e,n){t.exports=n(24)},24:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),u=n(3),l=n(12),i=n(9),s=n(5),d=function(){try{var t=localStorage.getItem("todos");if(null===t)return;return JSON.parse(t)}catch(e){return}}()||{todos:["Do something 1","Do something 2","Do something 3","Do something 4"]},f=Object(s.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return Object(i.a)({},t,{todos:[].concat(Object(l.a)(t.todos),[e.todo])});case"REMOVE_TODO":return Object(i.a)({},t,{todos:t.todos.filter((function(t){return t!==e.todo}))});default:return t}})),m=Object(u.b)((function(t){return{todoList:t.todos,state:t}}),(function(t){return{removeTodo:function(e){return t({type:"REMOVE_TODO",todo:e})}}}))((function(t){var e=t.todoList,n=t.removeTodo,a=t.state;return Object(o.useEffect)((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("todos",e)}catch(n){}}(a)}),[a]),r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t},t+"  ",r.a.createElement("button",{onClick:function(){return n(t)}},"X"))})))})),O=n(13),E=Object(u.b)(null,(function(t){return{createTodo:function(e){return t({type:"ADD_TODO",todo:e})}}}))((function(t){var e=t.createTodo,n=Object(o.useState)(""),a=Object(O.a)(n,2),c=a[0],u=a[1];return r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:c,onChange:function(t){return u(t.target.value)}}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),e(c),u("")}},"ADD"))}));var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Todos"),r.a.createElement(u.a,{store:f},r.a.createElement(m,null),r.a.createElement(E,null)))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.61a1796a.chunk.js.map