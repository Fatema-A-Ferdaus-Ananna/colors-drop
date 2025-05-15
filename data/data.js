export const contents = [
  {
    title: "Idea",
    id: "1",
    thumbnail: "/svgData/icons/project1.svg",
    type: "icon",
  },
  {
    title: "Home",
    id: "2",
    thumbnail: "/svgData/icons/home1.svg",
    type: "icon",
  },
  {
    title: "Notion",
    id: "3",
    thumbnail: "/svgData/icons/notion1.svg",
    type: "icon",
  },
  {
    title: "Service",
    id: "4",
    thumbnail: "/svgData/icons/service1.svg",
    type: "icon",
  },
  {
    title: "View Details",
    id: "5",
    thumbnail: "/svgData/icons/viewDetails2.svg",
    type: "icon",
  },
  {
    title: "Gradient Background",
    id: "6",
    thumbnail: "/svgData/bg/bg5.svg",
    type: "bg",
  },
  {
    title: "Gradient Background 2",
    id: "7",
    thumbnail: "/svgData/bg/bg2.svg",
    type: "bg",
  },
  {
    title: "Gradient Background 3",
    id: "8",
    thumbnail: "/svgData/bg/bg3.svg",
    type: "bg",
  },
  {
    title: "Gradient Background 4",
    id: "9",
    thumbnail: "/svgData/bg/bg4.svg",
    type: "bg",
  },
  {
    title: "Gradient Background 5",
    id: "10",
    thumbnail: "/svgData/bg/bg1.svg",
    type: "bg",
  },
];

export function getAllData() {
  return contents;
}

export function getDataById(id) {
  const result = contents.find((content) => content.id === id);

  //console.log("result:", result);
  return result;
}

export function getAllSvgByType(svgDetails) {
  const allSvgData = getAllData();
  const result = allSvgData
    .filter((svgData) => svgData.id !== svgDetails.id)
    .filter((svg) => svg.type === svgDetails.type);
  return result;
}

export function getAllSvgIcon(allSvgData) {
  const result = allSvgData.filter((svgData) => svgData.type === "icon");
  return result;
}

export function getAllSvgBg(allSvgData) {
  const result = allSvgData.filter((svgData) => svgData.type === "bg");
  return result;
}
