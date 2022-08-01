import {DrugData} from "~/data/drugs";

const state: DrugData = {
    name: "",
    doseForm: "",
    levelOfUse: 0,
    strength: ""
}

export default () => {
    return useState('drugData', () => {
        return state;
    })
}
