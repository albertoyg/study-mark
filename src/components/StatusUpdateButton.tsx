import classNames from "@/lib/classNames";

export default function StatusUpdateButton(props: {
  handleStatusUpdate: Function;
  text: string;
  selected: string;
}) {
  return (
    <button
      onClick={() => props.handleStatusUpdate(props.text)}
      className={classNames("py-5 my-3 w-full bg-white shadow-md")}
    >
      {props.text}
    </button>
  );
}
