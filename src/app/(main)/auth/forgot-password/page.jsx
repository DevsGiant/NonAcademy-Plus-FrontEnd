import Container from "@/components/ui/Container";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password | NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const ForgotPasswordPage = () => {
  return (
    <section className="bg-nad-primary-lite-1 2xl:min-h-screen">
      <Container>
        <div className="flex items-center justify-center py-8 lg:min-h-20 lg:py-0">
          <div className="w-full max-w-md bg-white p-8 text-center lg:rounded-lg lg:shadow-lg">
            <div className="mx-auto mb-4 max-w-[200px] md:mb-6 md:max-w-[250px]">
              <Link href="/">
                <LogoBlack />
              </Link>
            </div>
            <h1 className="mb-2 text-xl font-semibold md:text-2xl">
              Reset Your Password
            </h1>
            <p className="mb-4 text-gray-600 md:mb-6">
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </p>
            <ForgotPasswordForm />
            <p className="mt-4 text-gray-600">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-nad-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForgotPasswordPage;
