import React from 'react';
import {AppRootState} from 'redux/redux-store';
import Profile from 'components/Profile/Profile';
import {getProfile, UserProfileType} from 'redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';

type MapStateToPropsType = {
  profile: UserProfileType | null
  isAuth: boolean
}
type MapDispatchToProps = {
  getProfile: (userId: string) => void
}

export type ProfileContainerPropsType =
  MapStateToPropsType & MapDispatchToProps & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootState> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }


};
let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
  profile: state.profilePage.userProfile,
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));