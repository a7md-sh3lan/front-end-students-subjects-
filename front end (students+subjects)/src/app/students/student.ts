export class Student {
    constructor(
        public _id: number,
        public name: string,
        public age: number,
        public subjects: Degree[],
    ){}
}

// export class Subject {
//     constructor(
//         public name:string
//     ){}
// }
// export class Degree {
//     constructor(
//         public subject: Subject,
//         public degree: number,
//     ){}
// }
export class Degree {
    constructor(public subject: SubjectRef, public degree: number){}
}

export class SubjectRef {
    constructor(public name: string, public _id: number){}
}

