import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { experimental_taintUniqueValue as taintUniqueValue } from "react";

export const getMyImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  // We don't want the session Id to pass to client
  // That's what taint is for:
  taintUniqueValue(
    "Do not pass the users session id to the client",
    user,
    user.sessionId,
  );

  return images;
};
