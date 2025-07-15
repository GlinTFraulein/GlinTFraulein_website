---
sidebar_position: 3
---

# Extensions

ここでは、PaLASOLUが提供するEditor拡張機能の設定を行うことができます。

## Fix rotation for "Create Particle System"

通常、UnityでParticleSystemを右クリックメニューから生成した場合、`transform.rotate.x = -90`の状態で生成されます。

本機能は、ParticleSystemが生成された瞬間に、`transform.rotate.x = 0`に修正します。

ただし、「右クリックメニューから生成した場合」「Unityの画面上メニューの"GameObject"から生成した場合」以外は動きません。すなわち、パーティクルアセットなどを購入してPrefabを置いた場合などには機能しません。

:::info
本機能は可能な限り軽量に動作するよう設計していますが、Hierarchyの変更を監視しているのでEditor上の動作が若干重くなる可能性があります。

気になる場合は、本機能をOFFにしてください。
:::