import { InputText } from 'primereact/inputtext';
import { CustomInputProps } from '../../../types/input';

const PrimeInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, library = "prime-react", variant, ...rest }) => {
    return (
        <InputText type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export default PrimeInput;