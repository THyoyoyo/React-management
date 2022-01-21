import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import { withRouter, Link } from 'react-router-dom'
import { setLoginInfo } from '../redux/Action/loginUserInfo'
import { ActionSetUserInfo, ActionOutUser } from '../redux/Action/setInfo'
import { logout } from "../api/comm"



class Haeder extends Component {
    //  菜单
    menu = () => (<Menu>
        <Menu.Item key="0" onClick={this.outLogin()}>
            <span>退出登录</span>
        </Menu.Item>
        <Menu.Item key="1">
            <span onClick={() => { this.props.history.push('/userHome') }}>修改个人信息</span>
        </Menu.Item></Menu >)


    // 退出登录
    outLogin = () => {
        return () => {
            //  清除Redux
            this.props.setLoginInfo({ hasLogin: false, info: null })
            this.props.ActionOutUser()
            logout()
            sessionStorage.clear()
        }
    }
    
    render() {
        let { nickName = null, avatarImage = null, id = null } = this.props.userInfo.getUser ? this.props.userInfo.getUser : {}
        return (
            <div className='Header'>
                <div className="header-left">React后台管理</div>
                <div className="header-right">
                    {
                        // 判断是否存在ID(是否登录)
                        id ? <div className='userName'>
                            <Dropdown overlay={this.menu} placement='bottomRight' trigger={['click']} arrow>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <span className='userInfo'>
                                        <img className='avatarImage' src={avatarImage} alt="" />
                                        <span className='nickName'>{nickName}</span>
                                    </span>
                                    <DownOutlined className='DownOutlined' />
                                </a>
                            </Dropdown>
                        </div>
                            :
                            <Button type="primary" className='table_btn' href='/login'>登录</Button>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({ userInfo: state.setInfo, LoginUserInfo: state.LoginUserInfo }), ({ setLoginInfo, ActionSetUserInfo, ActionOutUser })
)(withRouter(Haeder))