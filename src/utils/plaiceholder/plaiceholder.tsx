import { getPlaiceholder } from "plaiceholder";
import placeholder from "../../../public/PNG/banner.png";

export type Base64 = (url: string) => Promise<string>;

export const base64: Base64 = async (url) => {
  const response: { data: string } = { data: placeholder.blurDataURL ?? "" };

  try {
    const buffer = await fetch(url).then(async (response) =>
      Buffer.from(await response.arrayBuffer()),
    );
    const { base64 } = await getPlaiceholder(buffer);

    response.data = base64;
  } catch (error) {
    console.warn(error);
  }

  return response.data;
};
