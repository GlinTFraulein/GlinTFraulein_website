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

### Generate Audio object
Timeline上に存在するAudioClipをアップロードするための設定です。

通常は演出内にAudioSourceを持つGameObjectがない想定なので、変更不要です。

もしあなたが、自分でAudioSourceを制御している場合、このチェックをOFFにしてください。

## 制約
PaLASOLU v0.5.0時点では、以下の制約があります。

- AnimationTrackが、Timelineに対するキー打ちによって作られており、AnimationClipをAnimationTrackに配置していない必要がある
  - すなわち、Timeline Assetのサブアセットとして存在する、"Recorded"から始まるAnimationファイルに全てのアニメーションデータが記録されている必要があります。
  - この制約を満たしているならば、AnimationTrackが複数になっても問題ありません。(複数になった場合、"Recorded (1)" "Recorded (2)"……という名称のAnimationファイルが生成されます。)

制約を満たしていないPlayableDirectorに対する動作は、**未定義、かつ未保証**です。