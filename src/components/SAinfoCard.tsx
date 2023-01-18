interface StudyAreaInfoCard {
    building_name: string;
    area_name: string;
    status: string;
    last_updated: string;
}
  
export default function AreainfoCard(props: StudyAreaInfoCard) {
    return (
          <header className="flex-col justify-center">
          <h1 className="text-2xl bg-slate-300 w-screen py-10 font-regular text-center">
            {props.building_name}
          <h2>
            {props.area_name}
          </h2>
          <h3>
            {props.status}
          </h3>
          <h4>
            {props.last_updated}
          </h4>
          </h1>
          
        </header>
    );
  }
  
  export type { StudyAreaInfoCard };
  