import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from 'primereact/radiobutton';
import { CustomInputProps } from '../../../types/input';

export const PrimeInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <InputText type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export const PrimeCheckBox: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <>
            <Checkbox onChange={() => { }} checked={value} {...rest} />
            <label className="ml-2">{label}</label>
        </>
    )
}

export const PrimeRadio: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <>
            <RadioButton onChange={() => { }} checked={value} {...rest} />
            <label className="ml-2">{label}</label>
        </>
    )
}