import SearchBar from "@/components/SearchBar";
import study_areas_data from "@/data/study_areas_data";

export default function Search() {
  return <SearchBar {...{ study_areas: study_areas_data }} />;
}
