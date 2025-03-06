import ServiceHero from "../_components/serviceCard";
import { installation, installationDetail } from "@/data";
import ServiceDetails from "../_components/serviceDetail";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <ServiceHero {...installation} />
      <ServiceDetails {...installationDetail} />
    </Container>
  );
}
