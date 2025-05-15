export const bgContents = [
  {
    id: 1,
    thumbnail: "/svgData/bg/bg5.svg",
  },
  {
    id: 2,
    thumbnail: "/svgData/bg/bg2.svg",
  },
  {
    id: 3,
    thumbnail: "/svgData/bg/bg3.svg",
  },
  {
    id: 4,
    thumbnail: "/svgData/bg/bg4.svg",
  },
  {
    id: 5,
    thumbnail: "/svgData/bg/bg1.svg",
  },
];

export function getAllBg() {
  return bgContents;
}

export function getBgById(id) {
  const result = bgContents.find((bg) => bg.id === id);

  return result;
}
