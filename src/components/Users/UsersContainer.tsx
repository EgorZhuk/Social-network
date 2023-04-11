import {connect} from 'react-redux';
import {
  follow,
  unfollow,
  ResponseUsersType,
  getUsers,

} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';
import React from 'react';
import Users from 'components/Users/Users';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStateToPropsType = {
  items: ResponseUsersType[]
  pageSize: number,
  totalUsersCount: number
  currentPage: number
  isFetching: boolean,
  disableInProgress: number[],
}
type MapDispatchToProps = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    disableInProgress: state.usersPage.disableInProgress,
  };
};


class UsersAPIComponent extends React.Component<UsersPropsType, AppRootState> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  followHandler = (userId: number) => {
    this.props.follow(userId);
  };
  unFollowHandler = (userId: number) => {
    this.props.unfollow(userId);
  };
  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <Users
      totalPages={this.props.totalUsersCount}
      setCurrentPage={this.onClickCurrentPageHandler}
      currentPage={this.props.currentPage}
      items={this.props.items}
      followCalback={this.followHandler}
      unFollowCalback={this.unFollowHandler}
      isFetching={this.props.isFetching}
      disableInProgress={this.props.disableInProgress}
    />;
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps,
    {
      follow,
      unfollow,
      getUsers
    }),
  withAuthRedirect
)(UsersAPIComponent);