export default function SearchBox() {
  return (
    <div className="flex rounded py-10">
      <input
        type="text"
        className="block w-full px-4 py-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="search study spots"
      />
      <button className="px-4 text-white bg-blue-300 border-l rounded ">
        Search
      </button>
    </div>
  );
}
