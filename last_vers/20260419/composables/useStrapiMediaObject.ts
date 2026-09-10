import type { Image } from "@/types/api/commons/image";

export const useStrapiMediaObject = () => {
  // TODO: substitute Image type with a more generic type
  /**
   * The function `getMediaBaseUrl` returns the URL of an image if it exists, otherwise it returns
   * null.
   * @param {Image} media - The `media` parameter is of type `Image`.
   * @returns The URL of the image if it exists, otherwise null.
   */
  const getMediaBaseUrl = (media: Image | null | undefined) => {
    return media?.data?.attributes?.url || undefined;
  };

  const img = useImage();

  // TODO: substitute Image type with a more generic type
  /**
   * The function `getMediaCompleteUrl` takes a media object or string and optional modifiers, and
   * returns the complete URL of the media with the applied modifiers.
   * @param {Image | string} media - The `media` parameter can be either an `Image` object or a string.
   * If it is an `Image` object, the function `getMediaBaseUrl` is called to retrieve the base URL of
   * the image. If it is a string, it is assumed to be the relative URL of the image
   * @param modifiers - The `modifiers` parameter is an optional object that contains additional
   * properties or options to modify the media URL. These modifiers can be used to customize the
   * appearance or behavior of the media, such as resizing, cropping, or applying filters.
   * @returns The function `getMediaCompleteUrl` returns either the complete URL of the media (image)
   * with applied modifiers, or `null` if the media URL is empty.
   */
  const getMediaCompleteUrl = (
    media: Image | string | null | undefined,
    modifiers = {},
  ) => {
    const mediaUrl =
      typeof media === "object" ? getMediaBaseUrl(media) : String(media);
    return mediaUrl ? img(mediaUrl, modifiers) : undefined;
  };

  return {
    getMediaBaseUrl,
    getMediaCompleteUrl,
  };
};
