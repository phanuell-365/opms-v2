import {useNuxtApp} from "#app";
const {$_} = useNuxtApp();

export default (camelCase: string) => {
    return useState('toNormalCase', () => {
        return $_.startCase(camelCase);
    })
}
