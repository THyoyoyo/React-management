import React, { Component, Fragment, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './layout/layout'
import Login from './view/login/login'
import { connect } from 'react-redux'
import { ActionSetUserInfo } from './redux/Action/setInfo'
import { getInfo } from './api/comm'
import { withRouter } from 'react-router-dom'
class app extends Component {


    componentDidMount() {
        // 判断上次登录是否大于7天
        let lastTime = localStorage.getItem('LoginTime')
        let atTime = new Date().getTime()
        if (atTime - lastTime > 86400000 * 7) {
            //   大于七天
        } else {
            // 获取用户信息
            getInfo().then(res_2 => {
                this.props.ActionSetUserInfo(res_2.data)
            })
        }

    }


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={'/login'} component={Login}></Route>
                    <Route path={'/'} component={Layout}>
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default connect(null, ({ ActionSetUserInfo }))(withRouter(app))
