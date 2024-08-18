import { Modal } from "./modal";
import FullPageImageView from "~/components/FullImagePage";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(photoId);

  if (isNaN(idAsNum)) {
    throw new Error("Invalid photo id");
  }

  return (
    <Modal isOpen={true}>
      <FullPageImageView imgId={idAsNum} />
    </Modal>
  );
}
