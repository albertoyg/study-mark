import { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import { supabase } from "@/lib/supaBaseClient";
import formatDate from "@/lib/formateDate";
import Link from "next/link";

export default function StudyArea(props: any) {
  const [studyArea, setStudyArea] = useState(props.data[0]);

  useEffect(() => {
    const channel = supabase
      .channel("study-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "study_areas",
        },
        (payload) => {
          setStudyArea(payload.new);
        }
      )
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function handleStatusUpdate(status: string) {
    const { error } = await supabase
      .from("study_areas")
      .update({ status: status })
      .eq("id", studyArea.id);
  }

  return (
    <Layout>
      <div className="bg-slate-300 text-center mx-auto mt-10 py-5">
        <h3 className="text-xl">{studyArea.building_name}</h3>
        <h4 className="text-lg">{studyArea.area_name}</h4>
        <p>{studyArea.status}</p>
        <p>Last updated: {formatDate(studyArea.updated_at)}</p>
      </div>
      <h3 className="ext-xl font-medium py-10 text-center">
        Update the seating below
      </h3>
      <Link className="flex items-center bg-slate-200 p-5" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        <p className="ml-2">Back</p>
      </Link>
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

export async function getServerSideProps(context: any) {
  let { params } = context;
  let { data } = await supabase
    .from("study_areas")
    .select()
    .eq("id", params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}

export {};
