import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from 'utils/validators/validators';
import s from './AddItemForm.module.css';
import {Button} from 'antd';

export type AddItemFormType = {
  newText: string
}
type PropsType = {
  placeholder?: string
}
const maxLength = maxLengthCreator(10);
const AddItemForm: FC<InjectedFormProps<AddItemFormType>> = (props) => {
  const {handleSubmit, children} = props;

  return (
    <form onSubmit={handleSubmit} className={s.formContainer}>
      <Field
        component={'textarea'}
        name={'newText'}
        placeholder={'Enter your ' + children}
        validate={[requiredField, maxLength]}
        className={s.textField}
      >

      </Field>
      <Button htmlType={'submit'}>Add {props.children}</Button>
    </form>
  );
};

// export default AddItemForm;
export default reduxForm<AddItemFormType, PropsType>({
  form: 'addItemForm'
})(AddItemForm);