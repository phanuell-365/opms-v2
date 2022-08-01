import {useNuxtApp} from "#app";

export const toNormalCase = (camelCase: string) => {
    const {$_} = useNuxtApp();
    return $_.startCase(camelCase);
}

export const arrayToNormalCase = (camelCase: Array<string>) => {
    let tmpArray: Array<string> = [];

    camelCase.forEach((value) => {
        tmpArray.push(toNormalCase(value));
    })

    return tmpArray;
}


