import { Outlet } from '@tanstack/react-router'
import { ConfigProvider, App as AntApp } from 'antd'

export function RootComponent() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#06B6D4', // Cyan/Teal color
          borderRadius: 6,
        },
      }}
    >
      <AntApp>
        <Outlet />
      </AntApp>
    </ConfigProvider>
  )
}