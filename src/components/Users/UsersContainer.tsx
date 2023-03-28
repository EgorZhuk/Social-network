import {connect} from 'react-redux';
import Users from './Users';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unFollowAC, usersType} from '../../redux/users-reducer';
import {AppRootState} from '../../redux/redux-store';

type MapStateToPropsType = {
  users: usersType[]
}
type MapDispatchToProps = {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: Array<usersType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    setUsers: (users: Array<usersType>) => dispatch(setUsersAC(users))
  }


}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer