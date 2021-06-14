import Link from "next/link";

import Container from "@/components/layouts/Container";
import AccountForm from "@/components/sections/AccountForm";

export default function LoginPage() {
  const onLoginButtonClicked = (ev) => {
    // TODO: handle the form?
    ev.preventDefault();
  };

  return (
    <Container title="Login">
      <AccountForm>
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

          <Link href="/accounts/reset-password">
            <a className="text-branding-accent-primary-darker">
              Forget password?
            </a>
          </Link>
        </section>
        <hr className="border-gray-300" />

        {/* Register section */}
        <section className="px-9 py-6 space-y-3">
          <h3 className="font-primary text-branding-accent-secondary text-xl">
            Not a member yet?
          </h3>
          <div className="lg:items-center flex items-end mx-auto space-x-2">
            <p>Register to get reward points and exclusive promotions.</p>
            <Link href="/accounts/validate-phone-register">
              <a className="bg-branding-accent-primary hover:bg-branding-accent-primary-darker active:bg-branding-accent-primary p-2 text-lg text-white rounded-md">
                REGISTER
              </a>
            </Link>
          </div>
        </section>
      </AccountForm>
    </Container>
  );
}
