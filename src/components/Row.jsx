import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Row({ title, query = "", type = "", genre = "", limit = 12 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const qs = new URLSearchParams({ limit: String(limit) });
        if (query) qs.set("q", query);
        if (type) qs.set("type", type);
        if (genre) qs.set("genre", genre);
        const res = await fetch(`${API}/api/titles?${qs.toString()}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        setItems([]);
      }
    };
    load();
  }, [query, type, genre, limit]);

  return (
    <section className="space-y-3">
      <h3 className="text-white font-semibold text-lg md:text-xl px-2 md:px-0">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
        {items.map((it, idx) => (
          <div key={`${it.name}-${idx}`} className="aspect-[2/3] rounded-md overflow-hidden group relative bg-slate-800">
            <img src={it.thumb_url || it.poster_url} alt={it.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs line-clamp-2">
              {it.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
