import {IUser} from "./interfaces";
import {StatusEnum} from "./enums";

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);


if (StatusEnum.UnAuthorization === 401) {
    console.log('UnAuthorization');
}