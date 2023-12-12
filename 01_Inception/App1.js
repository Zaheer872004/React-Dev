/**
    // nested html structure using the react //

    like this.

    <div id="paraent">
        <div id = "child">
            <h1> I'm an H1 html tag </h1>
            // what if I want to add the sibling or brother of h1 like this   -->just wrap the child into a array and add it
            <p>I'm an a para</p>
        </div>

        what if i want to make the another child name as id= "child2"

        <div id = "child2">
            <h1> I'm an H1 html tag </h1>
            // what if I want to add the sibling or brother of h1 like this   -->just wrap the child into a array and add it
            <p>I'm an a para</p>
        </div>

    </div>

    -> below parent is a ReactElement or a object in javascript.

 */

const parent = React.createElement(
  "div",
  { id: "parent", className: "parent-div" },
  [
    React.createElement("div", { id: "child1", className: "child-div" }, [
        React.createElement(
          "h1",
          { id: "heading", className: "heading-class" },
          "I'm an a H1 tag of HTML  :"
        ),
        React.createElement(
            "h2",
            { id: "heading", className: "heading-class" },
            "I'm an a H2 tag of HTML "
          ),
        React.createElement(
          "p",
          { id: "para", className: "para-class" },
          "Now I'm a para "
        ),
      ])
    ,
    React.createElement("div", { id: "child2", className: "child-div" }, [
        React.createElement(
          "h1",
          { id: "heading", className: "heading-class" },
          "  I'm an a H1 tag of HTML "
        ),
        React.createElement(
            "h2",
            { id: "heading", className: "heading-class" },
            "I'm an a H2 tag of HTML "
          ),
        React.createElement(
          "p",
          { id: "para", className: "para-class" },
          "Now I'm a para "
        ),
      ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
