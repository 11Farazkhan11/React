/*
const heading=React.createElement("h1",{},"hello kaise ho");
                                 //tag,obj,content
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/
const parent=React.createElement("div",{id:parent},[
    Reat.createElement("div",{id:child1},[
        React.createElement("h1",{},"hello h1"),
        React.createElement("h1",{},"hello h2")
    ]),
    Reat.createElement("div",{id:child2},[
        React.createElement("h1",{},"hello h1"),
        React.createElement("h1",{},"hello h2")
    ])
]);

const root=ReactDOM.createRoot(createElementById(parent));

root.render(parent);