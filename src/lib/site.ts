export const SITE = {
  name: 'Ragazzo249',
  title: 'Ragazzo249 の作品置き場',
  description: 'Minecraft のサーバーやツール、ちょっとした実験など、作ったものを並べています。',
  github: 'https://github.com/Ragazzo249',
  // Cloudflare Web Analytics のサイトトークン。ページに埋め込まれる公開の値で、秘密ではない
  cfBeaconToken: '79d8db3d1954406bbb9076a3363f3347',
};

/** base を付けたサイト内のパスを返す(GitHub Pages のサブパス公開に対応するため) */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** 2026.10 のような表記(作品の種別ラベル用) */
export function formatStamp(date: Date): string {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function formatMonth(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}
