import Layout from "@/components/layouts/Layout";
import type { StudyAreaProps } from "@/components/StudyAreaCard";
import { supabase } from "@/lib/supaBaseClient";

export async function getStaticProps(context: any) {
  let { params } = context;
  let { data } = await supabase
    .from("study_areas")
    .select()
    .eq("id", params.id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  let { data } = await supabase.from("study_areas").select();
  if (data) {
    const paths = data.map((studyArea: StudyAreaProps) => {
      return { params: { id: String(studyArea.id) } };
    });
    return {
      paths,
      fallback: false,
    };
  }
}

export default function StudyArea(props: any) {
  const { building_name, area_name, status, last_updated, id } = props.data[0];

  async function handleStatusUpdate(status: string) {
    const { error } = await supabase
      .from("study_areas")
      .update({ status: status })
      .eq("id", id);
    console.log(id, status);
  }

  return (
    <Layout>
      <div className="bg-slate-300 text-center mx-auto mt-10 py-5">
        <h3 className="text-xl">{building_name}</h3>
        <h4 className="text-lg">{area_name}</h4>
        <p>{status}</p>
        <p>Last updated: {last_updated}</p>
      </div>
      <h3 className="ext-xl font-medium py-10 text-center">
        Update the seating below
      </h3>
      <div className="bg-slate-300 text-center mx-auto p-3">
        <button
          onClick={() => handleStatusUpdate("No seating")}
          className="py-5 my-3 w-full bg-white shadow-md"
        >
          No seating
        </button>
        <button
          onClick={() => handleStatusUpdate("Some seating")}
          className="py-5 my-3 w-full bg-white shadow-md"
        >
          Some seating
        </button>
        <button
          onClick={() => handleStatusUpdate("Lots of seating")}
          className="py-5 my-3 w-full bg-white shadow-md"
        >
          Lots of seating
        </button>
      </div>
    </Layout>
  );
}
