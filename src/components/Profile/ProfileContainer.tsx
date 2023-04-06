import React from 'react';
import {AppRootState} from 'redux/redux-store';
import Profile from 'components/Profile/Profile';
import axios from 'axios';
import {setUserProfile, UserProfileType} from 'redux/profile-reducer';
import {connect} from 'react-redux';

type MapStateToPropsType = {
  profile: UserProfileType | null
}
type MapDispatchToProps = {
  setUserProfile: (profile: UserProfileType) => void
}
type ProfileContainerPropsType =
  MapStateToPropsType & MapDispatchToProps

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootState> {
  componentDidMount() {
    axios.get<UserProfileType>('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(res => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile}/>
      </div>
    );
  }


};
let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
  profile: state.profilePage.userProfile
});


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);