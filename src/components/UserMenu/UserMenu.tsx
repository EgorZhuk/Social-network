import React, {FC} from 'react';
import {DownOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Dropdown, Space, Button} from 'antd';

type PropsType = {}

const logoutHandler = () => {
  console.log('Exit');
};

const items: MenuProps['items'] = [
  {
    label: <a href="/profile">Profile</a>,
    key: '0',
  },
  {
    label: <a href="/settings">Settings</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <Button onClick={logoutHandler}>Logout</Button>,
    key: '3',
  },
];

const UserMenu: FC<PropsType> = (props) => {
  return (
    <Dropdown
      menu={{items}}
      trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {props.children}
          <DownOutlined/>
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserMenu;