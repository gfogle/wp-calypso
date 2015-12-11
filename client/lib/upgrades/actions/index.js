import * as cart from './cart';
import * as checkout from './checkout';
import * as domainManagement from './domain-management';
import * as domainSearch from './domain-search';
import * as purchases from './purchases';

export default {
	...cart,
	...checkout,
	...domainManagement,
	...domainSearch,
	...purchases
};
