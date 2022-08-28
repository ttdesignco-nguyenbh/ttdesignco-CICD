import React from 'react';
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PicRightOutlined,
} from '@ant-design/icons';
import './style.css'
// import UserList from '../table/UserList';
// import ProductList from '../table/ProductList';
import CRUDTable from '../table/testTable/CRUDTable';


const { Header, Sider, Content } = Layout;

function PageWrapper() {
    const [open, setOpen] = React.useState(false)

function handleToggleOpen () {
    setOpen(!open);
}
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={open}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={ <UserOutlined />}>
                        Người dùng
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PicRightOutlined />}>
                        Sản phẩm
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(open ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: handleToggleOpen,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 875,
                    }}
                >
                    {/* <UserList />
                    <ProductList /> */}
                    <CRUDTable />
                </Content>
            </Layout>
        </Layout>
    );
}


export default PageWrapper;