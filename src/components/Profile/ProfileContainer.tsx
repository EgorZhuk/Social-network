import React from 'react';
import {AppRootState} from 'redux/redux-store';
import Profile from 'components/Profile/Profile';
import axios from 'axios';
import {setUserProfile, UserProfileType} from 'redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type MapStateToPropsType = {
  profile: UserProfileType | null
}
type MapDispatchToProps = {
  setUserProfile: (profile: UserProfileType) => void
}

export type ProfileContainerPropsType =
  MapStateToPropsType & MapDispatchToProps & RouteComponentProps<{ userId?: string }>

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootState> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    axios.get<UserProfileType>('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(res => {
        this.props.setUserProfile(res.data);
      });
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
  profile: state.profilePage.userProfile
});


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));