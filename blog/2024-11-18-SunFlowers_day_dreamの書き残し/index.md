---
slug: Sunflowers Day Dreamの書き残し
title: Sunflowers Day Dreamの書き残し
authors: [GlinTFraulein]
tags: [技術, 演出, 天使のひまわり]
---

![集合写真]

先日、[天使のひまわり！](https://tenhima.himaminforce.com/) 3rd Live [Sunflowers Day Dream](https://tenhima.himaminforce.com/3rdlive)を無事に完遂いたしました。当イベントでは、ワールド作成、演出統括、ギミック開発、当日オペレーション等を担当しました。

今回の書き残しでは、まず語られることもないであろう裏側を色々と書き連ねていこうと思います。

> なお、このような文章を書くことについては、天使のひまわり！プロデューサーの[ひまみんと](https://x.com/hima_mint_VRC)さんより許可を……というか、「書いて！技術はガンガン共有しよう！OSS万歳！」みたいなことを言われていますので、安心してなんでもかんでも書きまくろうと思います。

<!-- truncate -->

## システム概観

演者のパフォーマンス周りについて、VRCDN2本(音声用/映像用)とSYNCROOMが使用されています。ワールド上のReSyncボタンはTopazの物に見えますが、Topazの中身がVRCDNに変更されているものです。1つのボタンから両方のVRCDNのReSyncをかけられるようにしています。

問題は演者のパフォーマンスとワールド演出を同期させる部分です。最終的にはVJがSYNCROOMで音を聞いて、音楽開始タイミングで信号を発信、ワールド側でラグを吸収する、という脳筋バンザイ！人力バンザイ！みたいな実装になりました。詳細は後述します。