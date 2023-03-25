import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Friends} from '../Friends/Friends';
import {FriendsDataType} from '../../redux/friends-reducer';
import {AppRootState} from '../../redux/redux-store';

type MapStateToPropsType = {
  friendsData: FriendsDataType[]
}
type MapDispatchToProps = {}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {

  return {
    friendsData: state.friendsPage.friendsData
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;