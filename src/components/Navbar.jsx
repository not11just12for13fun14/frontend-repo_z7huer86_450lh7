export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-red-600 font-black text-2xl md:text-3xl tracking-tight">NETFLIX</div>
          <nav className="hidden md:flex items-center gap-4 text-white/80 text-sm">
            <a className="hover:text-white" href="#">Home</a>
            <a className="hover:text-white" href="#">Series</a>
            <a className="hover:text-white" href="#">Films</a>
            <a className="hover:text-white" href="#">New & Popular</a>
            <a className="hover:text-white" href="#">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="text-sm bg-white/10 rounded px-2 py-1 hover:bg-white/20">Search</button>
          <div className="w-8 h-8 rounded bg-white/20" />
        </div>
      </div>
    </div>
  );
}
