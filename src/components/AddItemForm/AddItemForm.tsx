import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type AddItemFormType = {
  newText: string
}
const AddItemForm: FC<InjectedFormProps<AddItemFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'}
             name={'newText'}
             placeholder={'Enter your ' + props.children}
      >

      </Field>
      <button>Add {props.children}</button>
    </form>
  );
};

// export default AddItemForm;
export const AddItemReduxForm = reduxForm<AddItemFormType>({
  form: 'addItemForm'
})(AddItemForm);