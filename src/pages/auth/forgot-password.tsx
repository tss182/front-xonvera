import { Link } from '@tanstack/react-router'
import { Form, Input, Button, Card, Typography, Result } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

const { Title, Text } = Typography

export function ForgotPasswordPage() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Forgot Password - Xonvera';
  }, []);

  const onFinish = (values: any) => {
    console.log('Forgot password values:', values)
    // TODO: Implement forgot password logic
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '20px',
        }}
      >
        <Card
          style={{
            width: '100%',
            maxWidth: '450px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          }}
        >
          <Result
            status="success"
            title={t('auth.forgotPassword.successTitle')}
            subTitle={t('auth.forgotPassword.successMessage')}
            extra={[
              <Link to="/login" key="login">
                <Button type="primary" size="large">
                  {t('auth.forgotPassword.backToLogin')}
                </Button>
              </Link>,
            ]}
          />
        </Card>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '450px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Title level={2} style={{ marginBottom: '8px' }}>
            {t('auth.forgotPassword.title')}
          </Title>
          <Text type="secondary">{t('auth.forgotPassword.subtitle')}</Text>
        </div>

        <Form form={form} name="forgot-password" onFinish={onFinish} size="large" layout="vertical">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: t('auth.forgotPassword.emailRequired') },
              { type: 'email', message: t('auth.forgotPassword.emailInvalid') },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder={t('auth.forgotPassword.emailPlaceholder')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              {t('auth.forgotPassword.submitButton')}
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link to="/login">
              <Text type="secondary">{t('auth.forgotPassword.backToLogin')}</Text>
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}
