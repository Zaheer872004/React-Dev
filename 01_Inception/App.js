const heading = React.createElement("h1", {id: "heading",name:"main-heading"}, "Hello Zaheer world!");

console.log(heading); // this gives an a object.    

// here object under heading are =>
// 1 h1 tag but not tag it's a object which is a type
// 2 props like argument or attributes =>  other are id or class name you give whatever you want to give make custom(name as above make) like id or class
// 3 hello Zaheer world! is a child which append on the h1 tag/type 





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
