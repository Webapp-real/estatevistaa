export default function SearchBar() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">Location</span>
          <input
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500"
            placeholder="Miami, FL"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">Property Type</span>
          <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500">
            <option>Any</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Townhouse</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-600">Budget</span>
          <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500">
            <option>Any Price</option>
            <option>$500K+</option>
            <option>$1M+</option>
            <option>$2M+</option>
          </select>
        </label>

        <button className="rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700">
          Search
        </button>
      </div>
    </div>
  )
}
