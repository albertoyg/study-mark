import Layout from "@/components/layouts/Layout";
import SearchArea from "@/components/SearchArea";
import type { StudyAreaProps } from "@/components/StudyAreaCard";
import { supabase } from "@/lib/supaBaseClient";

export default function Home({ data }: { data: StudyAreaProps[] }) {
  return (
    <Layout>
      {/* buttons here for posting */}
      <SearchArea study_data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  let { data } = await supabase
    .from("study_areas")
    .select()
    .order("id", { ascending: true });

  return {
    props: {
      data,
    },
  };
}
