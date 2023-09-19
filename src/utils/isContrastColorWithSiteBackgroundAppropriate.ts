function getLuminance(hexColor: string) {
  hexColor = hexColor.replace(/^#/, "");

  // Converter o código hexadecimal em valores RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calcular a luminância usando a fórmula Y = 0.299*R + 0.587*G + 0.114*B
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance;
}

function getContrastRatio(hexColor: string) {
  const colorLuminance = getLuminance(hexColor);
  const siteBackgroundLuminance = getLuminance("#27272a");

  // Calcular o contraste usando a fórmula (L1 + 0.05) / (L2 + 0.05), onde L1 e L2 são as luminâncias
  const contrastRatio = (colorLuminance + 0.05) / (siteBackgroundLuminance + 0.05);

  return contrastRatio;
}

export function isContrastColorWithSiteBackgroundAppropriate(hexColor: string | null) {
  if (!hexColor) return false;

  const cardBackgroundColor = hexColor; // Cor dinâmica
  const contrastRatio = getContrastRatio(cardBackgroundColor);

  // Você pode definir um valor mínimo aceitável para o contraste e verificar se atende aos seus requisitos.
  const minContrastRatio = 3; // Exemplo de um valor mínimo aceitável

  return contrastRatio >= minContrastRatio;
}
