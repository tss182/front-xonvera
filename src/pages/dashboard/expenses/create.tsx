import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function CreateExpensePage() {
  useEffect(() => {
    document.title = 'Add Expense - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>Add New Expense</Title>
      <p>Expense creation form will be displayed here</p>
    </div>
  )
}
