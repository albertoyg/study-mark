import { supabase } from "@/lib/supaBaseClient";

function Page({ study_areas }: any) {
  return (
    <ul>
      {study_areas.map((area: any) => (
        <li key={area.id}>
          {area.building_name} | {area.area_name}
        </li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("study_areas").select();
  return {
    props: {
      study_areas: data,
    },
  };
}

export default Page;
