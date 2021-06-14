import Container from "@/components/layouts/Container";

export default function FallbackContainer() {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-[calc(100vh-6.75rem)]">
        <h2 className="font-primary text-branding-accent-secondary animate-pulse text-2xl">
          Loading...
        </h2>
      </div>
    </Container>
  );
}
