import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootState} from 'redux/redux-store';

type MapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    let {isAuth, ...restProps} = props;
    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return <Component {...restProps as T}/>;

  };

  return connect(mapStateToProps)(RedirectComponent);
};