import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, BarChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Briefcase, title: "Consulting", desc: "Strategic business insights to help you grow." },
  { icon: Globe, title: "Web Development", desc: "Fast, modern, and scalable websites." },
  { icon: BarChart, title: "Marketing", desc: "Creative campaigns backed by data." },
];

export default function ServicesPreview() {
  return (
    <section id="next-section"  className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Expertise</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {services.map((s) => (
          <Card key={s.title} className="hover:shadow-lg transition">
            <CardHeader>
              <s.icon className="w-10 h-10 mx-auto mb-2 text-primary" />
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/services"><Button>View All Services</Button></Link>
    </section>
  );
}
