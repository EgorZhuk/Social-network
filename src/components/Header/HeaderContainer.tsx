import React from 'react';
import Header from 'components/Header/Header';
import {AppRootState} from 'redux/redux-store';
import {getAuthUserData, userLogout} from 'redux/auth-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';


class HeaderContainer extends React.Component<HeaderContainerPropsType, AppRootState> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
};
const mapStateToProps = (state: AppRootState): MapStateToProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

type MapStateToProps = {
  isAuth: boolean
  login: string | null
}
type MapDispatchToProps = {
  getAuthUserData: () => void
  userLogout: () => void
}
export type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps
export default compose(connect(mapStateToProps, {getAuthUserData, userLogout}))(HeaderContainer);