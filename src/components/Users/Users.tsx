import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import User from './User';
import {ResponseType} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';
import Pagination from 'components/Users/Pagination';

class Users extends React.Component<UsersPropsType, AppRootState> {

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



    return <div className={s.userContainer}>
      <div className={s.pagesBlock}>
        <Pagination
          totalPages={pageCount}
          setCurrentPage={this.onClickCurrentPageHandler}
          currentPage={this.props.currentPage}

        />


      </div>
      {

        this.props.items.map((u, index) => {
          return (
            <User id={u.id}
                  key={index}
                  photos={u.photos}
                  followed={u.followed}
                  name={u.name}
                  status={u.status}
                  uniqueUrlName={u.uniqueUrlName}
              // location={u.location}
                  followCalback={this.followHandler}
                  unFollowCalback={this.unFollowHandler}/>
          );
        })
      }
      <div>
        <button onClick={this.showMoreHandler}>Show more</button>
      </div>
    </div>;

  }

}

export default Users;