import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Jane Doe", text: "Absolutely wonderful experience working with this team!" },
  { name: "John Smith", text: "Professional, efficient, and exceeded all expectations." },
  { name: "Sarah Lee", text: "They transformed our online presence completely!" },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <CardContent className="p-6">
              <p className="italic mb-4">{t.text}&quot;</p>
              <p className="font-semibold">{t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
