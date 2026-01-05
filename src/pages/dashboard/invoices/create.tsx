import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function CreateInvoicePage() {
  useEffect(() => {
    document.title = 'Create Invoice - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>Create New Invoice</Title>
      <p>Invoice creation form will be displayed here</p>
    </div>
  )
}
