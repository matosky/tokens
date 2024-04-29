import { DEFAULT_APP_DATA } from './app-data';
import { DEFAULT_META_DATA } from './meta-data';

export const DEFAULT_CONFIG = {
  appName: 'CashToken Dashboard',
  favicon: '/assets/default/favicon.ico',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      logoPng:
        'https://res.cloudinary.com/aviabird/image/upload/h_250/v1539065176/aviacommerce/logo/main.png',
      name: 'CashToken',
      height: '40',
      width: '135',
    },
    searchPlaceholder: 'Search for products',
  },
  currency_symbol: '₦', // Naira ₦

  ...DEFAULT_APP_DATA,
  ...DEFAULT_META_DATA,
};
