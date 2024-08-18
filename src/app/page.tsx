import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div className="flex w-48 flex-col" key={image.id}>
          <Image
            src={image.url}
            alt="image"
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
          />
          <div className="">{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
