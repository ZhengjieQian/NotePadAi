import { ExampleCard } from "@/app/components/example-card";

export default function ExamplePage() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-5xl px-2 py-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Example Card
          </h1>
          <ExampleCard />
        </div>
      </section>
    </div>
  );
}
