import React from 'react';
import {AppRootState} from 'redux/redux-store';
import Profile from 'components/Profile/Profile';
import {getProfile, UserProfileType} from 'redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
  profile: UserProfileType | null
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
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }


};
let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
  profile: state.profilePage.userProfile,
});

// let AuthRedirectComponent = (props: ProfileContainerPropsType) => {
//
//   return <ProfileContainer {...props}/>;
// };


export default compose<React.ComponentType>(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect)
(ProfileContainer);