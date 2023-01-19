import Layout from "@/components/layouts/Layout";
import SearchArea from "@/components/SearchArea";
import type { StudyAreaProps } from "@/components/StudyAreaCard";
import { supabase } from "@/lib/supaBaseClient";

export default function Home({ data }: { data: StudyAreaProps[] }) {
  return (
    <Layout>
      <SearchArea study_data={data} />
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  let { data } = await supabase.from("study_areas").select();

  return {
    props: {
      data,
    },
  };
}
