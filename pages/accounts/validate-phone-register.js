import Container from "@/components/layouts/Container";
import AccountForm from "@/components/sections/AccountForm";

export default function RegisterPage() {
  const onRegisterButtonClicked = (ev) => {
    // TODO: handle the form?
    ev.preventDefault();
  };

  return (
    <Container title="Validate Mobile Number">
      <AccountForm>
        <h2 className="font-primary text-branding-accent-secondary text-4xl text-center">
          register
        </h2>

        <section className="px-9 py-6">
          <label htmlFor="mobile-number">
            <span>Mobile number:</span>
            <input
              className="w-full p-2 my-2 border border-gray-300 rounded-md outline-none"
              type="tel"
              id="mobile-number"
              name="mobile_number"
            />
          </label>

          <button
            className="bg-branding-accent-primary-darker hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker w-full py-2 my-4 text-lg text-white rounded-md"
            type="submit"
            onClick={onRegisterButtonClicked}>
            REGISTER
          </button>
        </section>

        <div className="-mb-9 flex justify-center pointer-events-none select-none">
          <img
            src="https://bkdelivery.co.id/static/website/img/burger-1x.c5408eaf310c.jpg"
            alt="Burger image on register form"
          />
        </div>
      </AccountForm>
    </Container>
  );
}
