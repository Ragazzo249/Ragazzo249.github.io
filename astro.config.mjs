// @ts-check
import { defineConfig } from 'astro/config';

// 公開先の URL は GitHub Actions から環境変数で渡す(.github/workflows/deploy.yml)。
// ユーザーサイト(<名前>.github.io)なら BASE_PATH は "/"、
// 通常のリポジトリなら "/<リポジトリ名>" になる。
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://ragazzo249.github.io',
  base: process.env.BASE_PATH ?? '/',
});
