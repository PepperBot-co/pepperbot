export interface BaseInputData
  extends React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  id: string;
  inputType?: "input" | "textarea";
  containerCustomClasses?: string;
  labelCustomClasses?: string;
  inputCustomClasses?: string;
}
