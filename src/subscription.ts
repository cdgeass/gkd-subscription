import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1,
  name: 'Subscription',
  version: 1,
  author: 'cdgeass',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/cdgeass/gdk-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
