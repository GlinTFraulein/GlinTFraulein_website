---
sidebar_position: 1
---

# Setup Optimization

[画像]
Setup Optimizationは、パーティクルライブ用の設定済みPrefab、ならびにフォルダを生成します。

## いつ使うの？
パーティクルライブを新しく作り始める時！

## 使い方
"Tools/PaLASOLU/ParticleLive Setup"から、ウィンドウを出してください。

次に、楽曲名と、既にあれば楽曲ファイルを入力します。楽曲ファイルは後で手動でTimelineに入れることもできます。

最後に、「セットアップ！」を押すと、シーン上にセットアップ済のプレハブが出現します。

子を開いていくと、"WorldFixed/ParticleLive"のGameObjectがあるので、このGameObjectの子になるようにパーティクルライブを制作しましょう！

アバターをアップロードする際は、"[楽曲名]_ParticleLive"のGameObjectを、アバター直下に入れて、VRCSDKのアップロードボタンを押しましょう。

:::info[ポイント]
デフォルト設定では、"Assets/ParticleLive/[楽曲名]"フォルダが生成されます。パーティクルライブのために用意した画像やマテリアルなどの素材は、このフォルダに入れておくとよいでしょう。
:::

## 高度な設定

### Select Folder Directory

フォルダの生成場所を変更することができます。

フォルダ生成ウィンドウで選択したフォルダの配下に、楽曲名フォルダを生成します。もしくは、デフォルト設定では"Assets/ParticleLive"が選択されている、と考えてもよいです。

### Move AudioClip File to Particle Live Directory

生成されたフォルダに、楽曲ファイルを移動します。

明示的にチェックを付けない限り、ファイルの移動は発生しません。これは、「楽曲ファイルがなくなった！」というトラブルを防止するためです。

### Timeline Lock Notice

Setup Optimizationは、セットアップ時に「TimelineウィンドウをLockしてね！」という旨のバナーを表示します。このバナーを出すかどうかの設定です。