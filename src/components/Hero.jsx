import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Hero() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/titles?limit=1`);
        const data = await res.json();
        setFeatured(data.items?.[0] || null);
      } catch (e) {
        setFeatured(null);
      }
    };
    load();
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-b-2xl">
      {featured ? (
        <>
          <img
            src={featured.backdrop_url || featured.poster_url || featured.thumb_url}
            alt={featured.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {featured.name}
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-white/80 line-clamp-3">
              {featured.description}
            </p>
            <div className="flex gap-3">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-white/90">
                Play
              </button>
              <button className="bg-white/20 text-white px-4 py-2 rounded-md font-semibold hover:bg-white/30">
                More Info
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      )}
    </div>
  );
}
