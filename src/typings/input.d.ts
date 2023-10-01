export interface InputGeneralProps extends LabelProps {
  placeholder: string;
  type: string;
  value: string;
  setValue: (string) => void;
}
export interface LabelProps {
  id: string;
  label: string;
}
export interface FieldProps {
  id: string;
  placeholder: string;
  type: string;
  value: string;
  setValue: (string) => void;
}
export interface InputFilePorps extends LabelProps {
  accept: string;
  multiple?: boolean;
  files?: File | File[] | FileList | undefined;
  save: (any) => void;
}
export interface ButtonProps {
  send: (any) => void;
  text: string;
}
