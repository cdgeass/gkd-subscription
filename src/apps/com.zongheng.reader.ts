import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zongheng.reader',
  name: '纵横小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['TextView[text="立即查看"] < * - * > @[text^="跳过广告"]'],
      snapshotUrls: ['https://i.gkd.li/i/17161250'],
    },
    {
      key: 1,
      name: '征集大赛',
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['@ImageView[vid="tb"] - ImageView < RelativeLayout'],
      snapshotUrls: ['https://i.gkd.li/i/17177780'],
    },
  ],
});
