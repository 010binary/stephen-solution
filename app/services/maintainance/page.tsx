import ServiceHero from "../_components/serviceCard";
import { maintenanceDetail, maintenance } from "@/data";
import ServiceDetails from "../_components/serviceDetail";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <ServiceHero {...maintenance} />
      <ServiceDetails {...maintenanceDetail} />
    </Container>
  );
}
