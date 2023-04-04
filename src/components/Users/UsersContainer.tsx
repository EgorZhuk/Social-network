import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
  followAC,
  setUsersAC,
  unFollowAC,
  ResponseUsersType,
  setCurrentAC,
  setTotalCountAC,
  ResponseType
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
}
type MapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (items: Array<ResponseUsersType>) => void
  setCurrentPage: (value: number) => void
  setTotalCount: (count: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    setUsers: (items: ResponseUsersType[]) => dispatch(setUsersAC(items)),
    setCurrentPage: (value: number) => dispatch(setCurrentAC(value)),
    setTotalCount: (count: number) => dispatch(setTotalCountAC(count))
  };
};

class UsersAPIComponent extends React.Component<UsersPropsType, AppRootState> {

  componentDidMount() {
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
          this.props.setUsers(res.data.items);
          this.props.setTotalCount(res.data.totalCount);
        }
      );
  }

  showMoreHandler = () => {
    this.props.setUsers(this.props.items);
  };
  followHandler = (userId: number) => {
    this.props.follow(userId);
  };
  unFollowHandler = (userId: number) => {
    this.props.unFollow(userId);
  };
  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
          this.props.setUsers(res.data.items);
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
    />;
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;