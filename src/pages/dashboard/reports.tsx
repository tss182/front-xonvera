import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function ReportsPage() {
  useEffect(() => {
    document.title = 'Reports - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>Financial Reports</Title>
      <p>Reports and analytics will be displayed here</p>
    </div>
  )
}
