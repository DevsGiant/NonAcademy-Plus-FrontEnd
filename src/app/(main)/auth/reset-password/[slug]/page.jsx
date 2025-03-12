import Container from "@/components/ui/Container";
import LogoBlack from "@/components/ui/LogoBlack";
import Link from "next/link";
import ResetPasswordForm from "./_components/ResetPasswordForm";

export const metadata = {
  title: "Reset Password | NonAcademy",
  description: "With NonAcademy Plus Towards Fulfilling Your Dreams.",
};

const ResetPasswordPage = ({ params }) => {
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
              Set New Password
            </h1>
            <p className="mb-4 text-gray-600 md:mb-6">
              Enter a new password for your account below.
            </p>
            <ResetPasswordForm resetToken={params.slug} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResetPasswordPage;
