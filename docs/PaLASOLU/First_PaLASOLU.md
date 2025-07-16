---
sidebar_position: 1
---

# PaLASOLUをとにかく最速で体験したいなら？

Unity上部のメニューバーから「Tools/PaLASOLU/Sample/PaLASOLU Introduction」をクリックし、出てきたPrefabをアバターに入れてアップロードしてみましょう！

# はじめてのPaLASOLU

PaLASOLUでは、大きく2つの機能が提供されています。
- Setup Optimization
- Low-effort Uploader

## Setup Optimization

パーティクルライブ向けのギミック、タイムラインなどのセットアップを爆速で行います！

まずは、Tools/PaLASOLU/ParticleLive Setupをクリックします。
[画像]

次に、楽曲名と、既にあれば楽曲ファイルを入力します。
[画像]

最後に、「セットアップ！」を押すと、シーン上にセットアップ済のプレハブが出現します。
[画像]

子を開いていくと、"WorldFixed/ParticleLive"のGameObjectがあるので、このGameObjectの子になるようにパーティクルライブを制作しましょう！

:::info[ポイント]
デフォルト設定では、"Assets/ParticleLive/[楽曲名]"フォルダが生成されます。パーティクルライブのために用意した画像やマテリアルなどの素材は、このフォルダに入れておくとよいでしょう。
:::

高度な設定などについては、[Setup Optimization](/docs/PaLASOLU/Document/SetupOptimization)をご覧ください。

## Low-effort Uploader

本来、VRChatにはタイムラインの付いているアバターをそのままアップロードすることはできません。
[画像]

しかし、Low-effort Uploader スクリプトを付けるだけで、アップロードすることができるようになります！
[画像]

上記のSetup Optimizatironからセットアップをした場合、セットアップで生成されたプレハブをアバター直下に含めるだけで、正しくアップロードできます。

:::info[ポイント]
Setup Optimizationからパーティクルライブをセットアップした場合、**Low-effort Uploaderもセットアップ済です！**

本来、PlayableDirectorについてVRCSDKがエラーを出しますが、**Low-effort Uploaderが付いている場合はエラーが出なくなります！**
:::

高度な設定などについては、[Low-effort Uploader](/docs/PaLASOLU/Document/LoweffortUploader)をご覧ください。