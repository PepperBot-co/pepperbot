export interface BaseInputData
  extends React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  inputType?: "input" | "textarea";
  containerCustomClasses?: string;
  labelCustomClasses?: string;
  inputCustomClasses?: string;
}
