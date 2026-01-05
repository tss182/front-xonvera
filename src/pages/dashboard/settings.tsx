import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function SettingsPage() {
  useEffect(() => {
    document.title = 'Settings - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>Settings</Title>
      <p>Application settings will be displayed here</p>
    </div>
  )
}
