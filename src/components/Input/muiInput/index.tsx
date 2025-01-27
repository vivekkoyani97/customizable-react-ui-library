import { TextField } from "@mui/material";
import { CustomInputProps } from "../../../types/input";

const MuiInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, library = "prime-react", variant, ...rest }) => {
    return(
        <TextField label={label} type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export default MuiInput