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
      rules: ['@[text^="跳过广告"] > [text~="[0-9]*"]'],
      snapshotUrls: ['https://i.gkd.li/i/18344806'],
    }
  ],
});
