import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['[vid="skip_layout"] > @[text$="跳过"]'],
      snapshotUrls: ['https://i.gkd.li/i/18344958'],
    }
  ],
});
