import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/7d53712b-ec35-4b9d-a3d1-655280fa34bb-34z34k.webp",
  "https://utfs.io/f/cfc3e9f2-fbdb-4406-9f06-28a0b83660aa-34n4a4.png",
  "https://utfs.io/f/52d6c121-ce48-4683-813d-108a190242bf-h86lnw.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="" key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
