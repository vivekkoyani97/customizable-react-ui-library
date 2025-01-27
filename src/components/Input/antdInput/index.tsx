import { Input, Checkbox, Radio } from 'antd';
import { CustomInputProps } from '../../../types/input';

export const AntdInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <Input type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export const AntdCheckBox: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <Checkbox checked={value} onChange={() => { }} value={value} {...rest}>{label}</Checkbox>
    )
}

export const AntdRadio: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <Radio checked={value} onChange={() => { }} value={value} {...rest}>{label}</Radio>
    )
}