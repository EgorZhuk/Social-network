import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {FriendsDataType, showFriendsAC} from '../../redux/friends-reducer';
import {AppRootState} from '../../redux/redux-store';

type MapStateToPropsType = {
  friendsData: Array<FriendsDataType>
}
type MapDispatchToProps = {
  showFriends: () => void
}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {

  return {
    friendsData: state.friendsPage.friendsData
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    showFriends: () => dispatch(showFriendsAC())
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;