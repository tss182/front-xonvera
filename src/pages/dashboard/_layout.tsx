import { useState, useEffect } from 'react'
import { Layout, Menu, Avatar, Dropdown, Typography, Space, Button } from 'antd'
import { Outlet, Link, useLocation } from '@tanstack/react-router'
import {
  DashboardOutlined,
  FileTextOutlined,
  WalletOutlined,
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

const { Header, Sider, Content } = Layout
const { Text } = Typography

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">{t('dashboard.menu.overview')}</Link>,
    },
    {
      key: 'invoices',
      icon: <FileTextOutlined />,
      label: t('dashboard.menu.invoices'),
      children: [
        {
          key: '/dashboard/invoices',
          label: <Link to="/dashboard/invoices">{t('dashboard.menu.allInvoices')}</Link>,
        },
        {
          key: '/dashboard/invoices/create',
          label: <Link to="/dashboard/invoices/create">{t('dashboard.menu.createInvoice')}</Link>,
        },
      ],
    },
    {
      key: 'expenses',
      icon: <WalletOutlined />,
      label: t('dashboard.menu.expenses'),
      children: [
        {
          key: '/dashboard/expenses',
          label: <Link to="/dashboard/expenses">{t('dashboard.menu.allExpenses')}</Link>,
        },
        {
          key: '/dashboard/expenses/create',
          label: <Link to="/dashboard/expenses/create">{t('dashboard.menu.addExpense')}</Link>,
        },
      ],
    },
    {
      key: '/dashboard/reports',
      icon: <BarChartOutlined />,
      label: <Link to="/dashboard/reports">{t('dashboard.menu.reports')}</Link>,
    },
    {
      key: '/dashboard/settings',
      icon: <SettingOutlined />,
      label: <Link to="/dashboard/settings">{t('dashboard.menu.settings')}</Link>,
    },
  ]

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: t('dashboard.user.profile'),
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: t('dashboard.user.logout'),
      danger: true,
    },
  ]

  const handleUserMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      console.log('Logout clicked')
      // TODO: Implement logout logic
      window.location.href = '/login'
    }
  }

  // Get current selected key based on pathname
  const selectedKey = location.pathname

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <img
            src={collapsed ? '/favicon.svg' : '/logo.svg'}
            alt="Xonvera"
            style={{
              height: collapsed ? 30 : 40,
              transition: 'all 0.2s',
            }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultOpenKeys={['invoices', 'expenses']}
          items={menuItems}
          style={{ marginTop: 16 }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'all 0.2s' }}>
        <Header
          style={{
            padding: '0 24px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #f0f0f0',
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <Space size="middle">
            <LanguageSwitcher />
            <Dropdown
              menu={{
                items: userMenuItems,
                onClick: handleUserMenuClick,
              }}
              placement="bottomRight"
            >
              <Space style={{ cursor: 'pointer', padding: '8px 12px', borderRadius: '8px' }} className="user-menu-trigger">
                <Avatar size="large" style={{ backgroundColor: '#06B6D4' }}>
                  <UserOutlined />
                </Avatar>
                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                  <Text strong style={{ lineHeight: '20px' }}>John Doe</Text>
                  <Text type="secondary" style={{ fontSize: 12, lineHeight: '16px' }}>
                    john@example.com
                  </Text>
                </div>
              </Space>
            </Dropdown>
          </Space>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#f5f5f5',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
