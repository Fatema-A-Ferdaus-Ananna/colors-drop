import DetailsModalSection from "@/components/details/DetailsModalSection";

export default function SVGDetailsModal({ params }) {
  const svgId = params.id;

  return <DetailsModalSection assetInfo={svgId} />;
}
