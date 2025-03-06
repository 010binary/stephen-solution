import ServiceHero from "../_components/serviceCard";
import { retainershipDetail, Retainership } from "@/data";
import ServiceDetails from "../_components/serviceDetail";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <ServiceHero {...Retainership} />
      <ServiceDetails {...retainershipDetail} />
    </Container>
  );
}
