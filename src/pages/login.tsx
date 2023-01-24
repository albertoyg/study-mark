import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { DispatchWithoutAction, useEffect, useState } from "react";

// Hello
const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const user = useUser();
  const [data, setData] = useState<any | null>();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user)
    return (
      <Layout>
        <div className="flex-col justify-center mt-5">
          <h2 className="text-xl text-center">
            To post study sessions, make an account with us!
          </h2>
          <h3 className="text-lg text-center">
            (Google sign in and other on the way)
          </h3>
        </div>
        <div className="mt-10">
          <Auth
            redirectTo="http://localhost:3000/"
            appearance={{ theme: ThemeSupa }}
            supabaseClient={supabaseClient}
            socialLayout="horizontal"
          />
        </div>
      </Layout>
    );

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        className="bg-slate-500"
        onClick={async () => {
          await supabaseClient.auth.signOut();
          router.push("/login");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default LoginPage;
