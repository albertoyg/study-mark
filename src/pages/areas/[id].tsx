import study_areas_data from "@/data/study_areas_data";
import StudyAreaCard from "@/components/StudyAreaCard";
import type { StudyAreaProps } from "@/components/StudyAreaCard";

export async function getStaticProps(context: any) {
  const data = study_areas_data.filter((area: StudyAreaProps) => {
    return area.id == context.params.id;
  });
  return {
    props: { area: data[0] },
  };
}

export async function getStaticPaths() {
  const paths = study_areas_data.map((studyArea: StudyAreaProps) => {
    return { params: { id: String(studyArea.id) } };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function StudyArea(props: any) {
  return <StudyAreaCard area={props.area} />;
}
