import { useState } from "react";
import type { StudyAreaProps } from "./AreaCard";

export default function SearchBar(props: { study_areas: StudyAreaProps[] }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {props.study_areas.map((area: StudyAreaProps) => {
          return (
            <div className="bg-slate-500 my-5">
              <h2>{area.building_name}</h2>
              <h2>{area.area_name}</h2>
              <p>{area.status}</p>
              <p>{area.last_updated}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
