import Container from "@/components/Container";
import AccountForm from "@/components/AccountForm";

export default function ResetPasswordPage() {
  const onSendButtonClicked = (ev) => {
    // NOOP
    ev.preventDefault();
  };

  return (
    <Container title="Reset Password">
      <AccountForm>
        <h2 className="font-primary text-branding-accent-secondary text-4xl text-center">
          Forget Password
        </h2>
        <p className="px-9 mt-4">
          Please fill in your email address below and we'll send you an email
          with instructions on how to reset your password.{" "}
        </p>

        <section className="px-9 py-6">
          <input
            className="w-full p-2 my-2 border border-gray-300 rounded-md outline-none"
            type="email"
            placeholder="Email"
          />
          <button
            className="bg-branding-accent-primary-darker hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker w-full py-2 my-4 text-lg text-white rounded-md"
            type="submit"
            onClick={onSendButtonClicked}>
            SEND
          </button>
        </section>
      </AccountForm>
    </Container>
  );
}
