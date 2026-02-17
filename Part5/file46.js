function getStudentInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userObj = {
                name: "John",
                email: "john@example.com",
                age: 20
            }
            resolve(userObj)
        }, 2000)
    })
}
function getAttendanceInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Attendance Info resolved")
        }, 2000)
    })
}

function getExamInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exam Info resolved")
        }, 2000)
    })
}



async function main() {
    const result = await Promise.all([getStudentInfo(), getAttendanceInfo(), getExamInfo()])
    console.log(result)
    console.log("Program completed Successfully")
}
main()
