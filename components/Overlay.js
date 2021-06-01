export default function Overlay(props) {
  return (
    <section className="min-h-[calc(100vh-3.25rem)] flex flex-col justify-center space-y-8 px-4 bg-branding-dark">
      {props.children}
    </section>
  );
}
