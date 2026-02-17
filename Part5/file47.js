const students = [
    { id: 1, name: "Vansh", attendance: 90, examScore: 85 },
    { id: 2, name: "Vaishnav", attendance: 50, examScore: 50 },

]

function getStudentInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id)
            if (found) {
                resolve(found.name)
            } else {
                reject("Student does not exist")
            }
        }, 2000)
    })
}
function getAttendanceInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id && student.attendance > 70)
            if (found) {
                resolve(found.attendance)
            } else {
                reject("Student does not exist")
            }
        }, 2000)
    })
}

function getExamInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find((student) => student.id === id && student.examScore > 70)
            if (found) {
                resolve(found.examScore)
            } else {
                reject("Student does not exist")
            }
        }, 2000)
    })
}

async function main() {
    const StudentId = 2
    try {
        const result = await Promise.all([getStudentInfo(StudentId), getAttendanceInfo(StudentId)])
        console.log(result)
        console.log("Student has been Promoted")
    } catch (error) {
        console.error("Error occurred:", error)
    }
}
main()
