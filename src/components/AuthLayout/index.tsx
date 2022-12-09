import { useLoaderData, useOutlet } from "react-router-dom";
import { AuthProvider } from "../../providers/auth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};