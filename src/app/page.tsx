import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} alt="image" />
            <div className="">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
