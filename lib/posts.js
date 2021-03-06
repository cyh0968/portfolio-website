import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    a.date < b.date ? 1 : -1;
  });
}

export function getAllPostsIds() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostdata(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
