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
      rules: [
        '[text="广告"] < * + * > @[text^="跳过"]',
        '[text="广告"] - * < * + * > @[text^="跳过"]',
        'TextView[text="立即查看"] - * < * +2 * > * + @[text^="跳过"]',
        'TextView[text="进入活动页"] - * < * +2 * > * + @[text^="跳过"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/17083419',
        'https://i.gkd.li/i/17083441',
      ],
    },
  ],
});
