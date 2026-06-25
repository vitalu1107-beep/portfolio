export function findVisualBySrc(gallery = [], src) {
  if (!src) return undefined;
  return gallery.find((visual) => visual.src === src);
}

export function selectEvidenceStrip(gallery = [], evidenceSources) {
  if (!evidenceSources?.length) return gallery.slice(0, 5);

  return evidenceSources
    .map((src) => findVisualBySrc(gallery, src))
    .filter(Boolean);
}
