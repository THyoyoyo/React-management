import React, { Component, Fragment, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Haeder'
import LeftNav from './LeftNav'
import Home from '../view/home/Home'
import { Spin } from 'antd';
import './layout.css'
let User = lazy(() => import('../view/user/user'))
let AddUser = lazy(() => import('../view/user/addUse'))
let product = lazy(() => import('../view/product/product'))
let productAll = lazy(() => import('../view/product/productAll'))
let userHome = lazy(() => import('../view/userHome/userHome'))
let management = lazy(() => import('../view/management/management'))
let ECharts = lazy(() => import('../view/ECharts/ECharts'))

export default class layout extends Component {
    render() {
        return (
            <div className='main'>
                <Header></Header>
                <div className='content'>
                    <LeftNav></LeftNav>
                    <div className='pages'>
                        <Suspense fallback={<div className='loading'><Spin size={'large'}></Spin></div>}>
                            <Switch>
                                <Route exact path={'/'} component={Home}></Route>
                                <Route exact path={'/user'} component={User}></Route>
                                <Route exact path={'/user/add'} component={AddUser}></Route>
                                <Route exact path={'/product'} component={product}></Route>
                                <Route exact path={'/userHome'} component={userHome}></Route>
                                <Route exact path={'/management'} component={management}></Route>
                                <Route exact path={'/ECharts'} component={ECharts}></Route>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}
