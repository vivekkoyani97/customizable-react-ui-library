export interface CustomInputProps {
    type: "text" | "number" | "file" | "radio" | "checkbox";
    label?: string;
    value: any;
    onChange: (value: any) => void;
    library?: "material-ui" | "prime-react" | "ant-design" | "shadcn";
    variant?: string;
    [key: string]: any; // Allow other specific library props
}