import React from 'react';
import {AppRootState} from 'redux/redux-store';
import Profile from 'components/Profile/Profile';
import {getProfile, getStatus, updateStatus, UserProfileType} from 'redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from 'redux';

type MapStateToPropsType = {
  profile: UserProfileType | null
  status: string | null
}
type MapDispatchToProps = {
  getProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
}

export type ProfileContainerPropsType =
  MapStateToPropsType & MapDispatchToProps & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootState> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '27581';
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);

  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                 updateStatus={this.props.updateStatus}/>
      </div>
    );
  }


};
let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
  profile: state.profilePage.userProfile,
  status: state.profilePage.status
});

// let AuthRedirectComponent = (props: ProfileContainerPropsType) => {
//
//   return <ProfileContainer {...props}/>;
// };


export default compose<React.ComponentType>(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter)
(ProfileContainer);