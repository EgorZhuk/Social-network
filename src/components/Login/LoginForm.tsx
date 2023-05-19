import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';
import {Button} from 'antd';
import {emailValidation, passwordValidation, requiredField} from 'utils/validators/validators';
import {Input} from 'common/FormControls/FormControl';
import style from 'common/FormControls/FormControl.module.css';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}
const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
  console.log(error);
  return (
    <div>
      <form onSubmit={handleSubmit} className={s.loginFormContainer}>
        <div>
          <Field placeholder={'Email'}
                 autoComplete={'username'}
                 name={'email'}
                 component={Input}
                 type={'email'}
                 validate={[requiredField, emailValidation]}
                 className={s.loginFormInput}/>
        </div>
        <div>
          <Field placeholder={'Password'}
                 autoComplete={'current-password'}
                 name={'password'}
                 component={Input}
                 type={'password'}
                 validate={[requiredField, passwordValidation]}
                 className={s.loginFormInput}/>
        </div>
        {
          error && <div className={style.formSummaryError}>
            {error}
            </div>
        }
        <div>
          <Field type="checkbox" name={'rememberMe'} component={Input}/> Remember me
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