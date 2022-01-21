import React, { Children, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class LeftNav extends Component {
    state = {
        selectNavKey: "0",
        selectSubKey: [],
        menuList: [
            {
                name: "首页",
                url: "/",
                Children: []
            },
            {
                name: "用户管理",
                url: null,
                Children: [
                    {
                        name: "(静态)用户操作",
                        url: "/user"
                    },
                    {
                        name: "(Redux)用户操作",
                        url: "/user/add"
                    }
                ]
            },
            {
                name: "游戏管理",
                url: null,
                Children: [
                    {
                        name: "所有游戏",
                        url: "/product"
                    },
                ]
            },
            {
                name: "个人中心",
                url: null,
                Children: [
                    {
                        name: "修改个人信息",
                        url: "/userHome"
                    },
                ]
            },
            {
                name: "网站管理",
                url: null,
                Children: [
                    {
                        name: "网站公告",
                        url: "/management"
                    },
                ]
            },
            {
                name: "图表",
                url: null,
                Children: [
                    {
                        name: "ECharts for React",
                        url: "/ECharts"
                    },
                ]
            }
        ]
    }

    componentDidMount() {
        let { location: { pathname } } = this.props
        let { menuList } = this.state
        menuList.forEach((v, k) => {
            // 一级
            if (v.url === pathname) {
                // 获取当前路由
                this.setState({ selectNavKey: k + "", selectSubKey: [] })
            } else {
                // 二级
                v.Children.forEach((v2, k2) => {
                    if (v2.url === pathname) {
                        this.setState({ selectNavKey: `${k}-${k2}`, selectSubKey: [`sub${k}`] })
                    }
                })
            }
        })
        // 给当前路由加入监听事件
        this.props.history.listen(location => {
            // 判断当前路由地址 和 发生变化后的 路由地址 是否一致
            if (this.props.location.pathname !== location.pathname) {
                menuList.forEach((v, k) => {
                    // 一级
                    if (v.url === location.pathname) {
                        // 获取当前路由
                        this.setState({ selectNavKey: k + "", selectSubKey: [] })
                    } else {
                        // 二级
                        v.Children.forEach((v2, k2) => {
                            if (v2.url === location.pathname) {
                                this.setState({ selectNavKey: `${k}-${k2}`, selectSubKey: [`sub${k}`] })
                            }
                        })
                    }
                })
            }
        })
    }

    // 路由跳转
    skip = (url) => {
        return () => {
            this.props.history.push(`${url}`);
        }
    }
    // 选中子菜单
    ChanggeSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        this.setState({ selectNavKey: key })
    }
    // 展开关闭回调
    onOpenChange = (openKeys) => {
        this.setState({ selectSubKey: openKeys })
    }
    render() {
        return (
            <div className='LeftNav'>
                <Menu
                    onClick={this.skip}
                    style={{ width: 220 }}
                    defaultSelectedKeys={["0"]}
                    selectedKeys={[this.state.selectNavKey]}  //  选中当前子项
                    openKeys={this.state.selectSubKey}
                    mode="inline"
                    onSelect={this.ChanggeSelect}
                    onOpenChange={this.onOpenChange}
                >
                    {
                        this.state.menuList.map((v, k) => {
                            if (v.Children.length > 0) {
                                return <SubMenu key={`sub${k}`} title={v.name}>
                                    {v.Children.map((v2, k2) => {
                                        return <Menu.Item key={`${k}-${k2}`} onClick={this.skip(v2.url)}> {v2.name}</Menu.Item>
                                    })}
                                </SubMenu>
                            } else {
                                return <Menu.Item key={k} onClick={this.skip(v.url)}>首页</Menu.Item>
                            }

                        })
                    }
                </Menu>
            </div >
        )
    }
}

export default withRouter(LeftNav)
