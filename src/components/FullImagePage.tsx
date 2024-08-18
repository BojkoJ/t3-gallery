import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { imgId: number }) {
  const image = await getImage(props.imgId);

  return <img src={image.url} className="w-96" />;
}
