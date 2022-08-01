export enum InputType {
    TEXT="text",
    NUMBER="number"
}

export interface FormInputProps {
    label: string;
    id: string;
    name: string;
    type: InputType;
    readonly?: boolean;
    value?: string | number;
    feedback?: string;
    invalidFeedback?: string;
}
