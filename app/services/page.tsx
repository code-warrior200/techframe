import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, BarChart } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Consulting", desc: "Professional advice and strategy for your business." },
  { icon: Globe, title: "Web Development", desc: "Custom websites built with modern technology." },
  { icon: BarChart, title: "Marketing", desc: "Data-driven marketing campaigns to boost your growth." },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="hover:shadow-lg transition">
            <CardHeader>
              <service.icon className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
