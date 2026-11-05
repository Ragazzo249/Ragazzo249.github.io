# portfolio

作ったものを置いておくサイト。[Astro](https://astro.build/) で作り、GitHub Pages で公開する。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # dist/ に出力
npm run preview  # ビルド結果を確認
```

## 作品の追加

`src/content/works/` に Markdown を 1 つ置くと、一覧と作品ページが増える。ファイル名がそのまま URL になる(`foo.md` → `/works/foo/`)。

```md
---
title: 作品名
statement: Short English line.   # 任意。英語のひとこと
summary: 一覧のカードに出す一文
started: 2026-11-01
status: 開発中        # 運用中 / 開発中 / 公開中 / 完了 / 休止
tags: [TypeScript, Astro]
links:
  - { label: GitHub, href: https://github.com/... }
order: 0              # 大きいほど上に出る
draft: false          # true にすると公開しない
---

本文(Markdown)
```

非公開リポジトリの作品には、ソースへのリンクを書かない。サーバーのアドレスなど公開したくない情報も本文に書かない。

## 公開

`main` に push すると `.github/workflows/deploy.yml` が動き、GitHub Pages に公開される。初回だけ、リポジトリの Settings → Pages → Source を「GitHub Actions」にする。
