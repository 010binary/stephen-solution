import ServiceHero from "../_components/serviceCard";
import { installationDetail, maintenance } from "@/data";
import ServiceDetails from "../_components/serviceDetail";

export default function Page() {
  return (
    <div className="p-4 md:p-8">
      <ServiceHero {...maintenance} />
      <ServiceDetails {...installationDetail} />
    </div>
  );
}
