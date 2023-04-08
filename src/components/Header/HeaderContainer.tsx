import React from 'react';
import Header from 'components/Header/Header';
import {AppRootState} from 'redux/redux-store';
import axios from 'axios';
import {AuthContainerResponseType, AuthStateType, setAuthUserData} from 'redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component<HeaderContainerPropsType, AppRootState> {
  componentDidMount() {
    axios.get<AuthContainerResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})

      .then(res => {
          if (res.data.resultCode === 0) {
            const {id, email, login} = res.data.data;
            this.props.setAuthUserData({id, email, login, isAuth: true});
          }
        }
      );
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
  setAuthUserData: (data: AuthStateType) => void
}
export type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);