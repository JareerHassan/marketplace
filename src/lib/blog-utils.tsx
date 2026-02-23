import React from 'react';

// Helper function to render EditorJS blocks
export function renderEditorJSBlocks(blocks: any[] = []) {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {
    const key = block.id || `block-${index}`;

    switch (block.type) {
      case 'header':
        const level = block.data?.level || 2;
        const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
        return (
          <HeaderTag key={key} className="text-2xl font-bold my-4 text-gray-900">
            {block.data?.text}
          </HeaderTag>
        );

      case 'paragraph':
        return (
          <p key={key} className="my-4 text-gray-700 leading-relaxed">
            {block.data?.text}
          </p>
        );

      case 'list':
        const ListTag = block.data?.style === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag
            key={key}
            className={`my-4 ${block.data?.style === 'ordered' ? 'list-decimal' : 'list-disc'} pl-6 space-y-2`}
          >
            {block.data?.items?.map((item: any, idx: number) => (
              <li key={idx} className="text-gray-700">
                {typeof item === 'string' ? item : item.content || item}
              </li>
            ))}
          </ListTag>
        );

      case 'image':
        return (
          <div key={key} className="my-6">
            {block.data?.file?.url && (
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
                <img
                  src={block.data.file.url}
                  alt={block.data.caption || 'Blog image'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {block.data?.caption && (
              <p className="text-sm text-gray-500 mt-2 text-center italic">
                {block.data.caption}
              </p>
            )}
          </div>
        );

      case 'quote':
        return (
          <blockquote
            key={key}
            className="border-l-4 border-indigo-500 pl-4 italic my-6 text-gray-700"
          >
            <p className="text-lg">{block.data?.text}</p>
            {block.data?.caption && (
              <footer className="text-sm text-gray-500 mt-2">
                — {block.data.caption}
              </footer>
            )}
          </blockquote>
        );

      case 'linkTool':
        return (
          <div key={key} className="my-4 p-4 border border-gray-200 rounded-lg">
            {block.data?.link && (
              <a
                href={block.data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {block.data.meta?.title || block.data.link}
              </a>
            )}
            {block.data?.meta?.description && (
              <p className="text-sm text-gray-600 mt-2">
                {block.data.meta.description}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  });
}

// Calculate reading time from EditorJS blocks
export function calculateReadingTime(blocks: any[] = []): number {
  if (!Array.isArray(blocks)) return 0;

  let wordCount = 0;
  blocks.forEach((block) => {
    if (block.data?.text) {
      wordCount += block.data.text.split(/\s+/).length;
    }
    if (block.data?.items) {
      block.data.items.forEach((item: any) => {
        const text = typeof item === 'string' ? item : item.content || '';
        wordCount += text.split(/\s+/).length;
      });
    }
  });

  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}
