import {FormInputProps, InputType} from "~/src/inputForm"

interface DrugData {
    id?: FormInputProps;
    name: FormInputProps;
    doseForm: FormInputProps;
    levelOfUse: FormInputProps;
    strength: FormInputProps;
}

const state: DrugData = {
    name: {
        label: "Name",
        id: "name",
        name: "name",
        type: InputType.TEXT,
        feedback: "Looking Good!",
        invalidFeedback: "Please enter a name",
        readonly: false,
        value: "",
    },
    doseForm: {
        label: "Dose Form",
        id: "doseForm",
        name: "doseForm",
        type: InputType.TEXT,
        feedback: "Looking Good!",
        invalidFeedback: "Please enter a dose form",
        value: "500mg",
        readonly: false,
    },
    levelOfUse: {
        label: "Level of Use",
        id: "levelOfUse",
        name: "levelOfUse",
        type: InputType.NUMBER,
        feedback: "Looking Good!",
        invalidFeedback: "Please enter a level of use",
        readonly: false,
        value: 0,
    },
    strength: {
        label: "Strength",
        id: "strength",
        name: "strength",
        type: InputType.TEXT,
        feedback: "Looking Good!",
        invalidFeedback: "Please enter a strength",
        readonly: false,
        value: "",
    }
}

export default () => {
    return useState("drugFormInputData", () => {
        return state;
    })
}
