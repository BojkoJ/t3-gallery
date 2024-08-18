import FullPageImageView from "~/components/FullImagePage";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(photoId);

  if (isNaN(idAsNum)) {
    throw new Error("Invalid photo id");
  }

  return <FullPageImageView imgId={idAsNum} />;
}
