import {connect} from 'react-redux';
import {
  follow,
  setUsers,
  unFollow,
  ResponseUsersType,
  setCurrentPage,
  setTotalCount,
  setLoader, isDisable
} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';
import React from 'react';
import Users from 'components/Users/Users';
import userAPI from 'api/api';


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
  unFollow: (userId: number) => void
  setUsers: (items: Array<ResponseUsersType>) => void
  setCurrentPage: (value: number) => void
  setTotalCount: (count: number) => void
  setLoader: (isFetching: boolean) => void
  isDisable: (disable: boolean, userId: number) => void
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
    this.props.setLoader(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
        this.props.setLoader(false);
      });
  }

  showMoreHandler = () => {
    this.props.setUsers(this.props.items);
  };
  followHandler = (userId: number) => {
    this.props.isDisable(true, userId);
    userAPI.followUser(userId)
      .then(resultCode => {
          if (resultCode === 0) {
            this.props.follow(userId);

            this.props.isDisable(false, userId);
          }
        }
      );
  };
  unFollowHandler = (userId: number) => {
    this.props.isDisable(true, userId);
    userAPI.unFollowUser(userId)
      .then(resultCode => {
          if (resultCode === 0) {
            this.props.unFollow(userId);
            this.props.isDisable(false, userId);
          }
        }
      );
  };
  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setLoader(true);
    userAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
          this.props.setUsers(data.items);
          this.props.setLoader(false);
        }
      );
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

const UsersContainer = connect(mapStateToProps,
  {follow, unFollow, setUsers, setCurrentPage, setTotalCount, setLoader, isDisable})(UsersAPIComponent);

export default UsersContainer;