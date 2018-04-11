import React from 'react';
import  Dropdown from 'antd/lib/Dropdown';
import  Menu  from 'antd/lib/Menu';
import  Icon from 'antd/lib/Icon';
import './App.css';

export default class App extends React.Component {
    render() {
        const menu = <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">3d menu item</a>
            </Menu.Item>
        </Menu>
        
        return <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>
        </Dropdown>;
        
    }
}