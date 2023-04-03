import {connect} from 'react-redux';
import Users from './Users';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unFollowAC, ResponseUsersType, setCurrentAC, setTotalCountAC} from 'redux/users-reducer';
import {AppRootState} from 'redux/redux-store';


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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;