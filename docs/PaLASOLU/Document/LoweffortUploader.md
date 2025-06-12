---
sidebar_position: 2
---

# Low-effort Uploader

[画像]
Low-effort Uploaderは、PlayableDirectorが付いたままでもVRChatにアバターを正常にアップロードできるようにします。

## いつ使うの？
Playable Director、すなわちTimelineを使ったアバターをアップロードしたい時！

## 使い方
:::info[ポイント]
Setup Optimizationからパーティクルライブをセットアップした場合、**Low-effort Uploaderもセットアップ済です！**

VRCSDKにはエラーが残りますが、そのままアップロードしてみてください。
:::

Setup Optimizatironからセットアップをした場合、セットアップで生成されたプレハブをアバター直下に含めるだけで、正しくアップロードできます。

そうでない場合、Playable Directorの付いているGameObjectに、"PaLASOLU Low-effort Uploader"コンポーネントを付けてください。正しくアップロードできます。

## 高度な設定

### Playable Director
Playable Directorコンポーネントの付いたGameObjectを手動で選択できます。

通常はLow-effort Uploaderをアタッチした時点でPlayableDirectorが設定されるので変更不要です。

:::warning[注意]
PlayableDirectorとLow-effort Uploaderが別のGameObjectにアタッチされている場合の動作は**未確認です！**
:::

## 制約
PaLASOLU v0.2.1時点では、以下の制約があります。

- Timelineの一番上のトラックがAnimationTrackである必要がある
- Timelineの一番上のAnimationTrackのみがアバターに含まれる
  - 複数のAnimationTrackがある場合の動作は保証されません！
  - 将来のアップデートで対応予定
- AudioTrackの音源は含まれない
  - 暫定対処として、音源のGameObjectを手動で作ってください。
  - 将来のアップデートで対応予定

制約を満たしていないPlayableDirectorに対する動作は、**未定義、かつ未保証**です。