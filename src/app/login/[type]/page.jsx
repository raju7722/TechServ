import SignIn from "../../../components/SignIn";

export default async function LoginPage({ params }) {
  const { type } = await params;

  return <SignIn type={type} />;
}
