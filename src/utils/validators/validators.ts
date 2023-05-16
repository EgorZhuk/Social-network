export type FieldValidatorType = (value: string) => string | undefined
export const requiredField: FieldValidatorType = (value) => {
  if (value) return undefined;
  return 'Field is required';
};
export const maxLengthCreator = (maxLength: number) => (value: any) => {
  if (value && value.length > maxLength) return `Maximum length is ${maxLength} symbols`;
  return undefined;
};
export const emailValidation = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) return undefined;
  return 'Invalid email address';
};
export const passwordValidation = (password: string) => {
  if (password.length < 3) return 'Password must be minimum 3 symbols';
  return undefined;
};