// const person1 = {
//     name: "Zaheer",
//     Roll_no: 24,
//     Class : "SEf"
// }
// const person2 = {
//     name: "Shadab",
//     Roll_no: 27,
//     Class : "FE"
// }

// function  x() {
//     console.log(this);
//     function y() {
//         console.log(this);
//     }
//     function z() {
//         console.log(this);
//     }
//     // y.call(person2);
//     y.call(person2);
//     // y();

//     // z();
// }



// x.call(person1);
// // x();


const person1 = {
        name: "Zaheer",
        // Roll_no: 24,
        // Class : "SEf"
        print: function (){
            console.log(this);
        }
    }

    person1.print();