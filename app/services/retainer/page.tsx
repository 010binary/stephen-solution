import ServiceHero from "../_components/serviceCard";
import { installationDetail, Retainership } from "@/data";
import ServiceDetails from "../_components/serviceDetail";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <ServiceHero {...Retainership} />
      <ServiceDetails {...installationDetail} />
    </Container>
  );
}
