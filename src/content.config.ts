import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    // 英語のひとこと。Display 書体で大きく出す
    statement: z.string().optional(),
    // 一覧のカードに出す一文
    summary: z.string(),
    started: z.coerce.date(),
    status: z.enum(['運用中', '開発中', '公開中', '完了', '休止']),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // 大きいほど一覧の上に出る。同じなら開始日が新しい順
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
