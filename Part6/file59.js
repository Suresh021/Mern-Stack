// const student = {
//     name:"Nikhil",
//     display:function(){
//         console.log(this.name)
//     }
// }
// student.display()

// const student = {
//     name: "Nikhil",
//     display: () => {
//         console.log(this.name)
//     }
// }
// student.display()

const student = {
    name: "Nikhil",
    display: () => {
        console.log(this.name)
    }
}
student.display()