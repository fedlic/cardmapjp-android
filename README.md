# CardMapJP Android

ポケモンカードショップ検索アプリ「CardMapJP」のAndroid版です。
Android version of CardMapJP - the ultimate Pokemon card shop finder for visitors to Japan.

**Web版 / Web version:** [cardmapjp.vercel.app](https://cardmapjp.vercel.app)
**Web版リポジトリ / Web repo:** [github.com/fedlic/cardmapjp](https://github.com/fedlic/cardmapjp)

---

## 機能 / Features

- **インタラクティブマップ** - Google Maps上に284店舗以上を表示、マーカークラスタリング対応
- **Interactive Map** - 284+ shops on Google Maps with marker clustering

- **ショップ検索・フィルター** - 営業中 / 英語対応スタッフ / PSAグレード / ブースターBOX / 初心者向け
- **Shop Search & Filters** - Open Now / EN Staff / PSA Graded / Booster Box / Beginner Friendly

- **現在地ソート** - 近い順に並び替え（GPS利用）
- **Near Me Sorting** - Sort by distance using device GPS

- **ショップ詳細** - AI生成サマリー、在庫情報、Googleレビュー、ルート案内
- **Shop Details** - AI summaries, inventory grid, Google Reviews, directions

- **ユーザーレビュー** - Googleアカウントでログインしてレビュー投稿
- **User Reviews** - Sign in with Google to post reviews

- **全国23エリア対応** - 秋葉原、日本橋、名古屋大須、札幌、福岡など
- **23 Regions** - Akihabara, Nipponbashi, Osu/Nagoya, Sapporo, Fukuoka, and more

---

## 技術スタック / Tech Stack

| レイヤー / Layer | 技術 / Technology |
|---|---|
| ネイティブラッパー / Native Wrapper | Capacitor 8 |
| フロントエンド / Frontend | Next.js 16 (TypeScript) |
| UI | Tailwind CSS 4 + shadcn/ui |
| 地図 / Maps | Google Maps JavaScript API |
| データベース / Database | Supabase (PostgreSQL + PostGIS) |
| AI | Anthropic Claude API |
| 認証 / Auth | Supabase Auth (Google OAuth) |

---

## セットアップ / Setup

### 前提条件 / Prerequisites

- Node.js 18+
- Android Studio (Panda 2 以降 / or later)
- Android SDK

### ビルド手順 / Build Steps

```bash
# リポジトリをクローン / Clone the repo
git clone https://github.com/fedlic/cardmapjp-android.git
cd cardmapjp-android

# 依存関係をインストール / Install dependencies
npm install

# Android プロジェクトを同期 / Sync Android project
npx cap sync android

# Android Studio で開く / Open in Android Studio
npx cap open android
```

Android Studio で **Run (▶)** を押してエミュレータまたは実機で実行してください。
In Android Studio, press **Run (▶)** to launch on an emulator or connected device.

### 実機デバッグ / Device Debugging

1. **開発者オプションを有効化** - 設定 > デバイス情報 > ビルド番号を7回タップ
2. **USBデバッグをON** - 設定 > 開発者オプション > USBデバッグ
3. **USBで接続** - 端末に表示されるダイアログで「許可」
4. Android Studio のデバイス選択で実機を選んで **Run**

1. **Enable Developer Options** - Settings > About Phone > Tap Build Number 7 times
2. **Enable USB Debugging** - Settings > Developer Options > USB Debugging
3. **Connect via USB** - Accept the dialog on your device
4. Select your device in Android Studio and press **Run**

---

## プロジェクト構成 / Project Structure

```
cardmapjp-android/
├── android/              # Android ネイティブプロジェクト / Native Android project
├── ios/                  # iOS プロジェクト (参考用) / iOS project (reference)
├── src/                  # Next.js ソースコード / Next.js source
│   ├── app/              # App Router ページ / Pages
│   ├── components/       # React コンポーネント / Components
│   ├── hooks/            # カスタムフック / Custom hooks
│   ├── lib/              # ユーティリティ / Utilities
│   └── types/            # TypeScript 型定義 / Type definitions
├── supabase/             # マイグレーション・シードデータ / Migrations & seeds
├── capacitor.config.ts   # Capacitor 設定 / Capacitor config
└── package.json
```

---

## ライセンス / License

Private project. All rights reserved.

---

Built with Capacitor, Next.js, Supabase, and Claude AI.
