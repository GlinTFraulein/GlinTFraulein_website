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

本来、PlayableDirectorについてVRCSDKがエラーを出しますが、**Low-effort Uploaderが付いている場合はエラーが出なくなります！**
:::

Setup Optimizatironからセットアップをした場合、セットアップで生成されたプレハブをアバター直下に含めるだけで、正しくアップロードできます。

そうでない場合、Playable Directorの付いているGameObjectに、"PaLASOLU Low-effort Uploader"コンポーネントを付けてください。正しくアップロードできます。

## 高度な設定

### Playable Director
Playable Directorコンポーネントの付いたGameObjectを手動で選択できます。

通常はLow-effort Uploaderをアタッチした時点でPlayableDirectorが設定されるので変更不要です。

:::warning[注意]
PlayableDirectorとLow-effort Uploaderが別のGameObjectにアタッチされている場合の動作は**未確認です！**

`PaLASOLU 1.1.0`現在、そのような場合はVRCSDKはエラーを表示します。
:::

### Generate Audio object
Timeline上に存在するAudioClipをアップロードするための設定です。

通常は演出内にAudioSourceを持つGameObjectがない想定なので、変更不要です。

もしあなたが、自分でAudioSourceを制御している場合、このチェックをOFFにしてください。

### Affect AudioTrack Volume

Generate Audio objectがONの場合、AudioClipをアップロードしますが、その際にAudio Playable AssetのVolume設定を参照するかを決める設定です。

Audio Playable AssetのVolumeを前提として音量調節をしている場合はONに、そうでない場合(制作中のみ音を小さくしている場合など)はOFFのままにしてください。

:::warning[注意]
本機能は**まだ少し不安定です！**現在調整中ですが、もしうまくいかなかった場合は報告をしてほしいです！
:::

## 制約
PaLASOLU v1.1.0時点では、以下の制約があります。いろいろ書いてありますが、ほとんどのユースケースでは気にする必要がないはずです。

### Animation Track
- AnimationTrackに指定されたAnimatorを持つGameObjectのアクティブ状態は、パーティクルライブ再生中に常にActiveである必要がある
- AnimationTrack上にAnimationClipを置いた場合
  - TimelineClipが2つ重なってAnimationClipがブレンドされている状態を作ってはならない
  - AnimationClipをLoopさせる場合、"ちょうどループの境界の長さに"TimelineClipが設定されている必要がある
    - 例えばAnimationClipが1秒、 Loop Pose = 0 だった場合、1秒、2秒、3秒、…… は問題ないですが、1.5秒など「整数倍ではない」時にうまくいきません。
  
### Audio Track
- AudioSourceを前から短くしてはならない
  - 後ろを切る分には問題ありません
- VRChatへのアップロード時、「Load in Background」がOFFならば、自動的にONになる

### Activation Track (上級者向け)
- 操作対象のGameObjectは、Low-effort Uploaderが参照するPlayableDirectorよりも子階層に存在する必要がある

### Control Track (上級者向け)
:::warning[注意]
本機能は**まだ機能が不十分な可能性があります！**現在調整中ですが、もしうまくいかなかった場合は報告をしてほしいです！

特に、Control Activation, Post Playbackを活用している場合、多分うまく動きません。その場合はむしろ私を助けてほしいです。
:::
- Parent Objectは、Low-effort Uploaderが参照するPlayableDirectorよりも子階層に存在する必要がある
  - Parent Objectが(定義されていない or Scene内にない)場合、自動的にLow-effort Uploaderが参照するPlayableDirectorを親とする
- Prefabは、Prefabを含めたアバターがVRChat Avatarとしてアップロードできる必要がある(VRCSDKのアップロード前アラートに引っかからない可能性があるため、人力で確認する必要があります。)

### その他
- AnimationTrack、AudioTrack、ActivationTrack、Control Track**以外の**トラックを使用してはならない

制約を満たしていないPlayableDirectorに対する動作は、**未定義、かつ未保証**です。