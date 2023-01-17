import study_areas_data from "@/data/study_areas_data";
import StudyAreaCard from "@/components/StudyAreaCard";
import type { StudyAreaProps } from "@/components/StudyAreaCard";
import studyAreas from "@/data/study_areas_data";

export async function getStaticProps(context: any) {
  const data = study_areas_data.filter((studyArea: StudyAreaProps) => {
    return studyArea.id == context.params.id;
  });
  return {
    props: { studyArea: data },
  };
}

export async function getStaticPaths() {
  study_areas_data.map((studyArea: StudyAreaProps) => {
    return {studyArea.id};
  });
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}

export default function StudyArea(props: any) {
  return <StudyAreaCard {...props.studyArea} />;
}
