import React from 'react';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import {ResponseType} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';
import Users from 'components/Users/Users';

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

    let pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);



    return <Users
      totalPages={pageCount}
      setCurrentPage={this.onClickCurrentPageHandler}
      currentPage={this.props.currentPage}
      items={this.props.items}
      followCalback={this.followHandler}
      unFollowCalback={this.unFollowHandler}
    />;


  }

}

export default UsersAPIComponent;