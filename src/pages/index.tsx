import Layout from "@/components/layouts/Layout";
import SearchBar from "@/components/SearchBar";
import study_areas_data from "@/data/study_areas_data";

export default function Home() {
  return (
    <Layout>
      <SearchBar data={study_areas_data} />
    </Layout>
  );
}
