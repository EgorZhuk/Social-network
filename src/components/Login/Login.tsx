import React from 'react';
import LoginForm, {FormDataType} from 'components/Login/LoginForm';
import {connect} from 'react-redux';
import {userLogin} from 'redux/auth-reducer';
import {LoginDataType} from 'api/auth-api';
import {AppRootState} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';


const Login = (props: LoginContainerPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    props.userLogin(formData);
  };
  if (props.isAuth) {

    return <Redirect to={'/profile'}/>;

  }
  return (
    <React.Fragment>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </React.Fragment>
  );
};

type MapStateToProps = {
  isAuth: boolean
}
type MapDispatchToProps = {
  userLogin: (data: LoginDataType) => void
}

const mapStateToProps = (state: AppRootState): MapStateToProps => ({
  isAuth: state.auth.isAuth,
});
export type LoginContainerPropsType = MapStateToProps & MapDispatchToProps
export default connect(mapStateToProps, {userLogin})(Login);