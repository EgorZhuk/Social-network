import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
  followAC,
  setUsersAC,
  unFollowAC,
  ResponseUsersType,
  setCurrentAC,
  setTotalCountAC,
  ResponseType, setIsFetchingAC
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
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    setUsers: (items: ResponseUsersType[]) => dispatch(setUsersAC(items)),
    setCurrentPage: (value: number) => dispatch(setCurrentAC(value)),
    setTotalCount: (count: number) => dispatch(setTotalCountAC(count)),
    setLoader: isFetching => dispatch(setIsFetchingAC(isFetching))
  };
};

class UsersAPIComponent extends React.Component<UsersPropsType, AppRootState> {

  componentDidMount() {
    this.props.setLoader(true);
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

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
    this.props.follow(userId);
  };
  unFollowHandler = (userId: number) => {
    this.props.unFollow(userId);
  };
  onClickCurrentPageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setLoader(true);
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;