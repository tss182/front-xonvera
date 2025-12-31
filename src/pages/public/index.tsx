import { 
  Layout, 
  Typography, 
  Button, 
  Space, 
  Card, 
  Row, 
  Col, 
  Tag, 
  ConfigProvider, 
  Badge,
  theme,
  Divider,
} from 'antd';
import { 
  CheckCircleFilled, 
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useToken } = theme;

export const IndexPage = () => {
  const { token } = useToken();
  const { t } = useTranslation(); 

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#06B6D4', // Teal Xonvera
          borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        
        {/* --- 1. NAVBAR --- */}
        <Header style={{ 
          background: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)', 
          position: 'sticky', 
          top: 0, 
          zIndex: 10, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 50px'
        }}>
          <img src="/favicon.svg" style={{ height: 60 }} />
          <Space>
            <LanguageSwitcher />
            <Button type="primary" ghost>{t('nav.login')}</Button>
            <Button type="primary">{t('nav.register')}</Button>
          </Space>
        </Header>

        <Content>
          {/* --- 2. HERO SECTION --- */}
          <div style={{ padding: '80px 20px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <img src="/logo.svg" style={{ height: 200, marginBottom: 5 }} />
          </div>

          {/* --- 3. FEATURES SECTION --- */}
          <div style={{ background: '#F8FAFC', padding: '80px 50px' }}>
            <Row gutter={[48, 48]} justify="center">
              <Col xs={24} md={10}>
                <Card bordered={false} style={{ height: '100%', background: 'transparent', boxShadow: 'none' }}>
                  <Title level={2}>The Hybrid Life</Title>
                  <Paragraph style={{ fontSize: 16, color: '#64748b' }}>
                    Masalah utama freelancer adalah tercampurnya uang makan siang dan uang modal proyek. Xonvera memisahkan itu dengan elegan.
                  </Paragraph>
                  <Space direction="vertical" size="large" style={{ marginTop: 20 }}>
                    <FeatureItem title="Personal Expense" desc="Catat pengeluaran harian dalam hitungan detik." />
                    <FeatureItem title="Business Invoice" desc="Buat & kirim invoice PDF profesional ke klien." />
                    <FeatureItem title="Profit Tracking" desc="Lihat berapa uang 'bersih' yang sebenarnya Anda miliki." />
                  </Space>
                </Card>
              </Col>
              
              {/* Mockup Visual Sederhana (Placeholder UI) */}
              <Col xs={24} md={10}>
                <Card 
                  style={{ 
                    background: '#fff', 
                    borderRadius: 16, 
                    boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.15)',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden'
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div style={{ padding: 20, background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#eab308' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                    </div>
                  </div>
                  <div style={{ padding: 40, textAlign: 'center' }}>
                    <Title level={4} style={{ color: token.colorPrimary }}>Total Balance</Title>
                    <Title level={1} style={{ margin: 0 }}>Rp 15.450.000</Title>
                    <Divider />
                    <Space size={40}>
                      <div>
                        <Text type="secondary">Income (Business)</Text>
                        <div style={{ color: '#22c55e', fontWeight: 'bold' }}>+ Rp 25.000.000</div>
                      </div>
                      <div>
                        <Text type="secondary">Expense (Personal)</Text>
                        <div style={{ color: '#ef4444', fontWeight: 'bold' }}>- Rp 9.550.000</div>
                      </div>
                    </Space>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          {/* --- 4. PRICING SECTION --- */}
          <div style={{ padding: '80px 20px', textAlign: 'center' }}>
            <Title level={2}>Simple Pricing for Complex Lives</Title>
            <Paragraph type="secondary" style={{ marginBottom: 60 }}>
              Investasi kecil untuk ketenangan pikiran finansial Anda.
            </Paragraph>

            <Row gutter={[24, 24]} justify="center" align="middle">
              
              {/* Plan: Monthly */}
              <Col xs={24} md={6}>
                <PricingCard 
                  title="Bulanan" 
                  price="Rp 40.000" 
                  oldPrice="Rp 50.000" 
                  period="/ bulan"
                  features={["Unlimited Invoice", "Expense Tracking", "Export PDF"]}
                />
              </Col>

              {/* Plan: Yearly (BEST VALUE) */}
              <Col xs={24} md={7}>
                <Badge.Ribbon text="BEST VALUE" color="#84CC16">
                  <PricingCard 
                    active
                    title="Tahunan" 
                    price="Rp 360.000" 
                    oldPrice="Rp 600.000" 
                    period="/ tahun"
                    saveText="Hemat 40%"
                    features={["Semua Fitur Bulanan", "Prioritas Support", "Early Access Fitur Baru"]}
                    buttonType="primary"
                  />
                </Badge.Ribbon>
              </Col>

              {/* Plan: 6 Months */}
              <Col xs={24} md={6}>
                <PricingCard 
                  title="6 Bulan" 
                  price="Rp 200.000" 
                  oldPrice="Rp 300.000" 
                  period="/ semester"
                  features={["Unlimited Invoice", "Expense Tracking", "Export PDF"]}
                />
              </Col>
            </Row>
          </div>

        </Content>

        {/* --- 5. FOOTER --- */}
        <Footer style={{ textAlign: 'center', background: '#0f172a', color: '#94a3b8' }}>
          <Space direction="vertical">
            <img src="/logo.svg" style={{ height: 30, filter: 'grayscale(1) brightness(2)' }} />
            <Text style={{ color: '#64748b' }}>{t('footer.copyright')}</Text>
            <Space split={<Divider type="vertical" style={{ borderColor: '#334155' }} />}>
              <a href="#" style={{ color: '#94a3b8' }}>{t('footer.privacy')}</a>
              <a href="#" style={{ color: '#94a3b8' }}>{t('footer.terms')}</a>
              <a href="#" style={{ color: '#94a3b8' }}>Contact</a>
            </Space>
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

// --- SUB-COMPONENTS ---

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div style={{ 
        background: '#ecfeff', 
        padding: 8, 
        borderRadius: 8, 
        height: 'fit-content',
        color: '#06B6D4'
      }}>
        <CheckCircleFilled style={{ fontSize: 20 }} />
      </div>
      <div>
        <Text strong style={{ fontSize: 16 }}>{title}</Text>
        <p style={{ margin: 0, color: '#64748b' }}>{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  oldPrice, 
  period, 
  active = false, 
  saveText,
  buttonType = 'default'
}: any) {
  const { token } = useToken();
  
  return (
    <Card 
      hoverable 
      style={{ 
        borderColor: active ? token.colorPrimary : '#f0f0f0',
        borderWidth: active ? 2 : 1,
        transform: active ? 'scale(1.05)' : 'none',
        boxShadow: active ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <Title level={4} style={{ color: active ? token.colorPrimary : 'inherit' }}>{title}</Title>
      
      {saveText && <Tag color="lime" style={{ marginBottom: 8 }}>{saveText}</Tag>}
      
      <div>
        <Text delete type="secondary">{oldPrice}</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>{price}</Title>
        <Text type="secondary">{period}</Text>
      </div>

      <Button type={buttonType} block size="large" style={{ marginBottom: 24 }}>
        Pilih Paket
      </Button>
    </Card>
  );
}