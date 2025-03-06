import ServiceHero from "../_components/serviceCard";
import { installationDetail, maintenance } from "@/data";
import ServiceDetails from "../_components/serviceDetail";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <ServiceHero {...maintenance} />
      <ServiceDetails {...installationDetail} />
    </Container>
  );
}
