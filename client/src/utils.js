export const BASE_URL = process.env.REACT_APP_API_URL;
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import EuroIcon from '@mui/icons-material/Euro';

export const CATEGORIES_URL = '/categories?populate[0]=image';

export const DEFAULT_CURRENCY = 'usd';
export const CURRENCIES = ['usd', 'euro', 'pound'];

export const currenciesIcons = {
  usd: <AttachMoneyIcon />,
  euro: <EuroIcon />,
  pound: <CurrencyPoundIcon />
};

export const getSelectCurrencyOptions = (CURRENCIES) =>
  CURRENCIES.map((currency) => {
    return { label: currency, value: currency };
  });

export const colorFilters = ['black', 'cyan', 'green', 'grey', 'pink', 'white', 'blue'];

export const sizeFilters = ['xl', 'l', 'm', 's', 'xs'];

export const brandFilters = ['ck', 'h&m', 'kalles', 'levis', 'monki', 'nike'];
