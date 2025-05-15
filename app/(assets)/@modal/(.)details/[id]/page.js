import DetailsModalSection from "@/components/details/DetailsModalSection";
import { getDataById } from "@/data/data";

export default function SVGDetailsModal({ params }) {
  const svgId = params.id;
  const svgDetails = getDataById(svgId);

  return <DetailsModalSection svgDetails={svgDetails} />;
}
