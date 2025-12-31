import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Indonesia', value: 'id' },
  ];

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem('language', value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      options={languages}
      style={{ width: 150 }}
      suffixIcon={<GlobalOutlined />}
    />
  );
};
