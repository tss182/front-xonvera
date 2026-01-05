import { Link, useNavigate } from '@tanstack/react-router'
import { Form, Input, Button, Card, Typography, Divider } from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const { Title, Text } = Typography

export function LoginPage() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Login - Xonvera';
  }, []);

  const onFinish = (values: any) => {
    console.log('Login values:', values)
    // TODO: Implement actual login logic with API
    // Simulate successful login and redirect to dashboard
    navigate({ to: '/dashboard' })
  }

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
    // TODO: Implement Google OAuth login
    // Simulate successful login and redirect to dashboard
    navigate({ to: '/dashboard' })
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
            {t('auth.login.title')}
          </Title>
          <Text type="secondary">{t('auth.login.subtitle')}</Text>
        </div>

        <Form form={form} name="login" onFinish={onFinish} size="large" layout="vertical">
          <Form.Item
            name="emailOrPhone"
            rules={[
              { required: true, message: t('auth.login.emailOrPhoneRequired') },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('auth.login.emailOrPhonePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: t('auth.login.passwordRequired') }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('auth.login.passwordPlaceholder')}
            />
          </Form.Item>

          <Form.Item>
            <div style={{ textAlign: 'right' }}>
              <Link to="/forgot-password">
                <Text type="secondary" style={{ fontSize: '14px' }}>
                  {t('auth.login.forgotPassword')}
                </Text>
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              {t('auth.login.loginButton')}
            </Button>
          </Form.Item>

          <Divider>{t('auth.login.or')}</Divider>

          <Form.Item>
            <Button
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
              block
              size="large"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {t('auth.login.loginWithGoogle')}
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Text type="secondary">{t('auth.login.noAccount')} </Text>
            <Link to="/register">
              <Text strong style={{ color: '#06B6D4' }}>
                {t('auth.login.registerLink')}
              </Text>
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}
