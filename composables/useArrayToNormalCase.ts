import {toNormalCase} from "~/composables/users";

export default (camelCase: Array<string>) => {
    return useState('arrayToNormalCase', () => {
        let tmpArray: Array<string> = [];

        camelCase.forEach((value) => {
            tmpArray.push(toNormalCase(value));
        })

        return tmpArray;
    })
}
