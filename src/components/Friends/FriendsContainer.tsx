import {compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Friends} from './Friends';
import {AppRootState} from '../../redux/redux-store';
import {follow, getUsers, ResponseUsersType, unfollow} from 'redux/users-reducer';
import React from 'react';
import Users from 'components/Users/Users';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {UsersPropsType} from 'components/Users/UsersContainer';
import {getFriends} from 'redux/friends-reducer';

type MapStateToPropsType = {
  items: ResponseUsersType[]
  pageSize: number,
  totalUsersCount: number
  currentPage: number
  isFetching: boolean,
  disableInProgress: number[],
}
type MapDispatchToProps = {
  getFriends: (currentPage: number, pageSize: number) => void
}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {

  return {
    items: state.friendsPage.items,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    disableInProgress: state.friendsPage.disableInProgress,
  };
};

class FriendAPIComponent extends React.Component<FriendsPropsType, AppRootState> {
  componentDidMount() {
    this.props.getFriends(this.props.currentPage, this.props.pageSize);
  }


  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.getFriends(pageNumber, this.props.pageSize);
  };

  render() {
    return <Friends
      totalPages={this.props.totalUsersCount}
      setCurrentPage={this.onClickCurrentPageHandler}
      currentPage={this.props.currentPage}
      items={this.props.items}
      isFetching={this.props.isFetching}
      disableInProgress={this.props.disableInProgress}
    />;
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, {getFriends}),
  withAuthRedirect
)(FriendAPIComponent);
