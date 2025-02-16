import ServiceHero from "../_components/serviceCard";
import { installation } from "@/data";

export default function ExamplePage() {
  return (
    <div className="p-4 md:p-8">
      <ServiceHero {...installation} />
    </div>
  );
}
