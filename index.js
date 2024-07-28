import React from "react";
// const element = <h1 title="foo">Hello</h1>;

// const container = document.getElementById("root");
// ReactDOM.render(element, container);


// ||
// V

// const element = React.createElement("h1", { title: "foo" }, "Hello");

// ||
// V

const element = {
    type:'h1',
    prop: {
        title: "foo",
        children: "Hello"
    }
}