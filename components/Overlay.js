export default function Overlay(props) {
  return (
    <section className="bg-branding-dark lg:hidden pt-13 w-full min-h-screen">
      <div className="min-h-[calc(100vh-3.25rem)] flex items-center justify-center p-4">
        {props.children}
      </div>
    </section>
  );
}
