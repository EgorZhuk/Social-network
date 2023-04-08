import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {AuthStateType} from 'redux/auth-reducer';
import {HeaderContainerPropsType} from 'components/Header/HeaderContainer';


const Header = (props: HeaderContainerPropsType) => {
  return (
    <header className={s.header}>
      <div>
        <h1><span>S</span>ocial<span>N</span>etwork</h1>
      </div>

      <div className={s.loginBlock}>
        {

          props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>
        }


      </div>
    </header>
  );
};

export default Header;