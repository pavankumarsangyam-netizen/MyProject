export const normalizeImagePayload = (image) => {
  if (!image) return null

  return {
    url: image.url || '',
    altText: image.altText || '',
    mimeType: image.mimeType || 'image/webp',
    size: image.size || 0,
  }
}
