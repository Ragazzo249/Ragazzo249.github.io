export const SITE = {
  name: 'Ragazzo249',
  title: 'Ragazzo249 の作品置き場',
  description: 'Minecraft のサーバーやツール、ちょっとした実験など、作ったものを並べています。',
  github: 'https://github.com/Ragazzo249',
};

/** base を付けたサイト内のパスを返す(GitHub Pages のサブパス公開に対応するため) */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatMonth(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}
