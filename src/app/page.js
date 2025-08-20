export default function Home() {
  return (
    <>
      <main className="relative min-h-[80vh] flex items-center justify-center text-white">
        {/* Background image — swap this filename when you have your real photo */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Your existing content */}
        <div className="relative z-10 bg-black/70 p-6 rounded-xl text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Topwater Reaction</h1>
          <p className="text-lg mb-6">
            Handmade bass lures crafted for serious topwater strikes.
          </p>
        </div>
      </main>
      <section className="w-full px-6 py-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            {name: 'Feather Pop 2 1/2', image: '/feather-pop-placeholder.jpg', link: '/feather-pop', id: 'feather-pop' },
            {name: 'Gilled Popper 2 1/2', image: '/gilled-popper-placeholder.jpg', link: '/gilled-popper', id: 'gilled-popper' },
            {name: 'TopWalker 3 1/2', image: '/topwalker-placeholder.jpg', link: '/topwalker', id: 'topwalker' },
          ].map((style, idx) => (
            <a key={idx} href={style.link}>
              <section id={style.id} className="relative aspect-[11/4] w-full bg-black text-white group overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 flex-col justify-center items-center bg-black/50 group-hover:bg-black/30 transition duration-300">
                  <h2 className="text-4xl font-bold group-hover:text-odgreen transition">{style.name}</h2>
                  <p className="mt-4 text-xl">Shop Now</p>
                </div>
              </section>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}