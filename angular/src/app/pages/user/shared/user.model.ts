export class User{
    constructor(
        public id?:number,
        public name?:string,
        public username?:string,
        public password?:string,
        public progress?:number,
        public level?:number,
        public token?:string,
        public role?:string,
    ){}
}