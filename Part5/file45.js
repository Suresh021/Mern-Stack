function getStudentInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "John",
                email: "john@example.com",
                age: 20
            })
        }, 2000)
    })
}

function displayInfo(studentInfo) {
    console.log(studentInfo.name)
}

async function main() {
    const result = await getStudentInfo()
    try {
        // console.log(result)
        displayInfo(result)
        console.log("Program completed Successfully")
    } catch (err) {
        console.log(err)
    }
}
main()
//getStudentInfo should return name,email and age
