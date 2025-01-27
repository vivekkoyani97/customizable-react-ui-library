import { CustomInputProps } from "../../types/input";
import { AntdCheckBox, AntdInput, AntdRadio } from "./antdInput";
import { MuiCheckBox, MuiInput, MuiRadio } from "./muiInput";
import { PrimeCheckBox, PrimeInput, PrimeRadio } from "./primeInput";

const CustomInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, library = "material-ui", variant, ...rest }) => {
    if (library === 'material-ui') {
        switch (type) {
            case 'text':
            case 'number':
            case 'file':
                return (
                    <MuiInput label={label} type={type} onChange={() => { }} value={value} {...rest} />
                );
            case 'checkbox':
                return (
                    <MuiCheckBox label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            case 'radio':
                return (
                    <MuiRadio label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            default:
                return (
                    <MuiInput label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
        }
    }
    if (library === 'ant-design') {
        switch (type) {
            case 'text':
            case 'number':
            case 'file':
                return (
                    <AntdInput type={type} onChange={() => { }} value={value} {...rest} />
                );
            case 'checkbox':
                return (
                    <AntdCheckBox label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            case 'radio':
                return (
                    <AntdRadio label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            default:
                return (
                    <AntdInput type={type} onChange={() => { }} value={value} {...rest} />
                )
        }
    }
    if (library === 'prime-react') {
        switch (type) {
            case 'text':
            case 'number':
            case 'file':
                return (
                    <PrimeInput type={type} onChange={() => { }} value={value} {...rest} />
                );
            case 'checkbox':
                return (
                    <PrimeCheckBox label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            case 'radio':
                return (
                    <PrimeRadio label={label} type={type} onChange={() => { }} value={value} {...rest} />
                )
            default:
                return (
                    <PrimeInput type={type} onChange={() => { }} value={value} {...rest} />
                )
        }
    }
}

export default CustomInput;