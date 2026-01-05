import { useEffect } from 'react'
import { Card, Row, Col, Statistic, Typography, Table, Tag, Space } from 'antd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DollarOutlined,
  FileTextOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

export function DashboardPage() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = 'Dashboard - Xonvera'
  }, [])

  const recentInvoices = [
    {
      key: '1',
      invoice: 'INV-001',
      client: 'ABC Corp',
      amount: 'Rp 5.000.000',
      status: 'paid',
      date: '2026-01-03',
    },
    {
      key: '2',
      invoice: 'INV-002',
      client: 'XYZ Ltd',
      amount: 'Rp 3.500.000',
      status: 'pending',
      date: '2026-01-04',
    },
    {
      key: '3',
      invoice: 'INV-003',
      client: 'Tech Solutions',
      amount: 'Rp 7.200.000',
      status: 'paid',
      date: '2026-01-05',
    },
  ]

  const columns = [
    {
      title: t('dashboard.table.invoice'),
      dataIndex: 'invoice',
      key: 'invoice',
    },
    {
      title: t('dashboard.table.client'),
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: t('dashboard.table.amount'),
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: t('dashboard.table.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'paid' ? 'green' : 'orange'}>
          {status === 'paid' ? t('dashboard.status.paid') : t('dashboard.status.pending')}
        </Tag>
      ),
    },
    {
      title: t('dashboard.table.date'),
      dataIndex: 'date',
      key: 'date',
    },
  ]

  return (
    <div>
      <Title level={2}>{t('dashboard.title')}</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title={t('dashboard.stats.totalBalance')}
              value={15450000}
              precision={0}
              prefix="Rp"
              valueStyle={{ color: '#06B6D4' }}
              suffix={<DollarOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title={t('dashboard.stats.totalIncome')}
              value={25000000}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title={t('dashboard.stats.totalExpenses')}
              value={9550000}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title={t('dashboard.recentInvoices')} extra={<a href="#">{t('dashboard.viewAll')}</a>}>
            <Table
              columns={columns}
              dataSource={recentInvoices}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title={t('dashboard.quickStats')}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>
                    <FileTextOutlined /> {t('dashboard.quickStats.invoices')}
                  </span>
                  <strong>12</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>
                    <WalletOutlined /> {t('dashboard.quickStats.expenses')}
                  </span>
                  <strong>48</strong>
                </div>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
