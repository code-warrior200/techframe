import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 space-y-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-lg text-muted-foreground">
        We are a modern business committed to delivering high-quality services
        with a focus on innovation and customer satisfaction.
      </p>

      <Card>
        <CardContent className="p-6">
          <p>
            Our team of professionals brings years of experience and creativity
            to help clients achieve their goals. We believe in building lasting
            relationships, driven by integrity, excellence, and passion for
            what we do.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
