import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 1,
      actionDelay: 300,
      resetMatch: 'app',
      rules: ['View[desc="启动图广告"] < * + * > @[text^="跳过"]'],
      snapshotUrls: ['https://i.gkd.li/i/19884786'],
    },
  ],
});
