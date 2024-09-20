import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[text="广告"] < * + * > @[text^="跳过"]',
        '[text="广告"] - * < * + * > @[text^="跳过"]',
        'FrameLayout[childCount=2] +2 * > * + @[text^="跳过"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/snapshot/1717143540802',
        'https://i.gkd.li/snapshot/1717152252564',
        'https://i.gkd.li/snapshot/1717580305192',
      ],
    },
  ],
});
