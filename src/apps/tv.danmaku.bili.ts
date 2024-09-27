import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['@[id="tv.danmaku.bili:id/count_down"][text^="跳过"]'],
      snapshotUrls: ['https://i.gkd.li/i/17083419'],
    },
  ],
});
