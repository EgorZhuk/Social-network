import {connect} from 'react-redux';
import {
  follow,
  setUsers,
  unFollow,
  ResponseUsersType,
  setCurrentPage,
  setTotalCount,
  setLoader, UserContainerGetResponseType, ResponseType
} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';
import React from 'react';
import axios from 'axios';
import Users from 'components/Users/Users';


type MapStateToPropsType = {
  items: ResponseUsersType[]
  pageSize: number,
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type MapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (items: Array<ResponseUsersType>) => void
  setCurrentPage: (value: number) => void
  setTotalCount: (count: number) => void
  setLoader: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};


class UsersAPIComponent extends React.Component<UsersPropsType, AppRootState> {
  componentDidMount() {
    this.props.setLoader(true);
    axios.get<UserContainerGetResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {'API-KEY': 'c5890106-c6fd-4018-9323-f3f405f33b5d'}
    })
      .then(res => {
          this.props.setUsers(res.data.items);
          this.props.setTotalCount(res.data.totalCount);
          this.props.setLoader(false);
        }
      );
  }

  showMoreHandler = () => {
    this.props.setUsers(this.props.items);
  };
  followHandler = (userId: number) => {
    axios.post<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
      withCredentials: true,
      headers: {'API-KEY': 'c5890106-c6fd-4018-9323-f3f405f33b5d'}
    })
      .then(res => {
          if (res.data.resultCode === 0) {
            this.props.follow(userId);
          }
        }
      );
  };
  unFollowHandler = (userId: number) => {

    axios.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
      withCredentials: true,
      headers: {'API-KEY': 'c5890106-c6fd-4018-9323-f3f405f33b5d'}
    })
      .then(res => {
          if (res.data.resultCode === 0) {
            this.props.unFollow(userId);
          }
        }
      );
  };
  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setLoader(true);
    axios.get<UserContainerGetResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true,
    })
      .then(res => {
          this.props.setUsers(res.data.items);
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
    />;
  }
}

const UsersContainer = connect(mapStateToProps,
  {follow, unFollow, setUsers, setCurrentPage, setTotalCount, setLoader})(UsersAPIComponent);

export default UsersContainer;