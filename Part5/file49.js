const students = [
    { id: 1, name: "Vansh", s1: true, s2: true, s3: false },
    { id: 2, name: "Vaishnav", s1: true, s2: true, s3: true },
    { id: 3, name: "Nikhil", s1: false, s2: true, s3: true },
]

//if id is 1 > vansh is abscent
//student info,s1,s2,s3

function getStudentInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id)
            if (found) {
                resolve("Student is resolved")
            } else {
                reject("Student does not exist")
            }
        }, 2000)
    })
}

function getAttendanceInfos1(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id)
            if (found) {
                resolve("present in class 1")
            } else {
                reject("Abscent in class 1")
            }
        }, 2000)
    })
}

function getAttendanceInfos2(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id && student.s2 === true)
            if (found) {
                resolve("present in class 2")
            } else {
                reject("Abscent in class 2")
            }
        }, 2000)
    })
}

function getAttendanceInfos3(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = students.find(student => student.id === id && student.s3 === true)
            if (found) {
                resolve("present in class 3")
            } else {
                reject("Abscent in class 3")
            }
        }, 2000)
    })
}

async function main() {
    try {
        const StudentId = 2
        const found = await getStudentInfo(StudentId)
        const result = await Promise.any([
            getAttendanceInfos1(StudentId),
            getAttendanceInfos2(StudentId),
            getAttendanceInfos3(StudentId)
        ])
        console.log("Student has been Promoted")
    } catch (error) {
        console.error("Error occurred:", error)
    }
}
main()