import { Input } from 'antd';
import { CustomInputProps } from '../../../types/input';

const AntdInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, library = "prime-react", variant, ...rest }) => {
    return (
        <Input type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export default AntdInput;