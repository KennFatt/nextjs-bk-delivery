export default function Overlay(props) {
  return (
    <section className="min-h-[calc(100vh-3.25rem)] flex justify-center items-center p-4 bg-branding-dark lg:hidden">
      {props.children}
    </section>
  );
}
