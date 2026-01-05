import { useEffect } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export function ExpensesPage() {
  useEffect(() => {
    document.title = 'Expenses - Xonvera'
  }, [])

  return (
    <div>
      <Title level={2}>All Expenses</Title>
      <p>Expense list will be displayed here</p>
    </div>
  )
}
