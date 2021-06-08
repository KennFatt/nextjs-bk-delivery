import Container from "@/components/Container";

export default function LoginPage() {
  const onLoginButtonClicked = (ev) => {
    // NOOP
    ev.preventDefault();
  };

  return (
    <Container title="Login">
      <div className="max-w-lg px-4 mx-auto">
        <form className="font-secondary py-10 text-gray-600 bg-white rounded-md shadow-xl">
          <h2 className="font-primary text-branding-accent-secondary text-4xl text-center">
            Welcome!
          </h2>
          <p className="px-9 text-center">
            Enter your mobile number and password to login
          </p>

          {/* Login section */}
          <section className="px-9 py-6">
            <label
              htmlFor="user-phone-number"
              className="flex p-2 my-2 space-x-2 overflow-hidden bg-white border border-gray-300 rounded-md">
              <span>+62</span>
              <input
                className="flex-grow outline-none"
                type="tel"
                id="user-phone-number"
                name="phone_number"
                placeholder="8600123456 (Example)"
              />
            </label>
            <label
              htmlFor="user-password"
              className="flex p-2 my-2 overflow-hidden bg-white border border-gray-300 rounded-md">
              <input
                className="flex-grow outline-none"
                type="password"
                id="user-password"
                name="password"
                placeholder="Password"
              />
            </label>

            <button
              className="bg-branding-accent-primary-darker hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker w-full py-2 my-4 text-lg text-white rounded-md"
              type="submit"
              onClick={onLoginButtonClicked}>
              LOGIN
            </button>

            <a
              href="#forget-password"
              className="text-branding-accent-primary-darker">
              Forget password?
            </a>
          </section>
          <hr className="border-gray-300" />

          {/* Register section */}
          <section className="px-9 py-6 space-y-3">
            <h3 className="font-primary text-branding-accent-secondary text-xl">
              Not a member yet?
            </h3>
            <div className="lg:items-center flex items-end mx-auto space-x-2">
              <p>Register to get reward points and exclusive promotions.</p>
              <a
                href="#register"
                className="bg-branding-accent-primary hover:bg-branding-accent-primary-darker active:bg-branding-accent-primary p-2 text-lg text-white rounded-md">
                REGISTER
              </a>
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}
