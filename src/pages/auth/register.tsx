import { Link } from '@tanstack/react-router'
import { Form, Input, Button, Card, Typography, Divider } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, GoogleOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const { Title, Text } = Typography

export function RegisterPage() {
  const { t } = useTranslation()
  const [form] = Form.useForm()

  useEffect(() => {
    document.title = 'Register - Xonvera';
  }, []);

  const onFinish = (values: any) => {
    console.log('Register values:', values)
    // TODO: Implement registration logic
  }

  const handleGoogleRegister = () => {
    console.log('Google register clicked')
    // TODO: Implement Google OAuth registration
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
            {t('auth.register.title')}
          </Title>
          <Text type="secondary">{t('auth.register.subtitle')}</Text>
        </div>

        <Form form={form} name="register" onFinish={onFinish} size="large" layout="vertical">
          <Form.Item
            name="name"
            rules={[
              { required: true, message: t('auth.register.nameRequired') },
              { min: 2, message: t('auth.register.nameMinLength') },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('auth.register.namePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: t('auth.register.emailRequired') },
              { type: 'email', message: t('auth.register.emailInvalid') },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder={t('auth.register.emailPlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: t('auth.register.phoneRequired') },
              {
                pattern: /^[0-9+\-\s()]*$/,
                message: t('auth.register.phoneInvalid'),
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder={t('auth.register.phonePlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: t('auth.register.passwordRequired') },
              { min: 8, message: t('auth.register.passwordMinLength') },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('auth.register.passwordPlaceholder')}
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: t('auth.register.confirmPasswordRequired') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error(t('auth.register.passwordMismatch')))
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('auth.register.confirmPasswordPlaceholder')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              {t('auth.register.registerButton')}
            </Button>
          </Form.Item>

          <Divider>{t('auth.register.or')}</Divider>

          <Form.Item>
            <Button
              icon={<GoogleOutlined />}
              onClick={handleGoogleRegister}
              block
              size="large"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {t('auth.register.registerWithGoogle')}
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Text type="secondary">{t('auth.register.haveAccount')} </Text>
            <Link to="/login">
              <Text strong style={{ color: '#06B6D4' }}>
                {t('auth.register.loginLink')}
              </Text>
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}
