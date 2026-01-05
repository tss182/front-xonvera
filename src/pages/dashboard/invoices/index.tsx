import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function InvoicesPage() {
  useEffect(() => {
    document.title = 'Invoices - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>All Invoices</Title>
      <p>Invoice list will be displayed here</p>
    </div>
  )
}
