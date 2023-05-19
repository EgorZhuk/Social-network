import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';
import {Button} from 'antd';
import {emailValidation, requiredField} from 'utils/validators/validators';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}
const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={s.loginFormContainer}>
        <div>
          <Field placeholder={'Email'}
                 autoComplete={'username'}
                 name={'email'}
                 component={'input'}
                 type={'email'}
            // validate={[requiredField, emailValidation]}
                 className={s.loginFormInput}/>
        </div>
        <div>
          <Field placeholder={'Password'}
                 autoComplete={'current-password'}
                 name={'password'}
                 component={'input'}
                 type={'password'}
                 className={s.loginFormInput}/>
        </div>
        <div>
          <Field type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
        </div>
        <div>
          <Button type="primary" className={s.loginFormButton} htmlType={'submit'}>Login</Button>
        </div>
      </form>
    </div>

  );
};
export default reduxForm<FormDataType>({
  form: 'login'
})(LoginForm);