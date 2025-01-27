import { TextField, Checkbox, FormControlLabel, Radio } from "@mui/material";
import { CustomInputProps } from "../../../types/input";

export const MuiInput: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <TextField label={label} type={type} onChange={() => { }} value={value} {...rest} />
    )
}

export const MuiCheckBox: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <FormControlLabel control={<Checkbox onChange={() => { }} checked={value} {...rest} />} label={label} />
    )
}

export const MuiRadio: React.FC<CustomInputProps> = ({ type, label, value, onChange, variant, ...rest }) => {
    return (
        <FormControlLabel control={<Radio onChange={() => { }} checked={value} {...rest} />} label={label} />
    )
}