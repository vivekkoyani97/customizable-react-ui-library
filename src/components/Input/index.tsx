import { CustomInputProps } from "../../types/input";
import AntdInput from "./antdInput";
import MuiInput from "./muiInput";
import PrimeInput from "./primeInput";

const CustomInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, library = "prime-react", variant, ...rest }) => {
    if (library === 'material-ui') {
        switch (type) {
            case 'text':
            case 'number':
            case 'file':
                return (
                    <MuiInput label={label} type={type} onChange={() => { }} value={value} {...rest} />
                );
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
            default:
                return (
                    <PrimeInput type={type} onChange={() => { }} value={value} {...rest} />
                )
        }
    }
}

export default CustomInput;