const mockUrls = [
  "https://utfs.io/f/7d53712b-ec35-4b9d-a3d1-655280fa34bb-34z34k.webp",
  "https://utfs.io/f/cfc3e9f2-fbdb-4406-9f06-28a0b83660aa-34n4a4.png",
  "https://utfs.io/f/52d6c121-ce48-4683-813d-108a190242bf-h86lnw.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
