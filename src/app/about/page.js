

export const metadata = {
  title: "About | Topwater Reaction Baits",
  description:
    "Handmade topwater lures painted, assembled, and packaged in Lafayette, Tennessee.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-zinc-100">
      {/* Accent stripe to match site vibe */}
      <div className="h-1 w-full bg-odgreen/70" />

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          About <span className="text-odgreen">Topwater Reaction Baits</span>
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          We paint, assemble, and package our unique poppers in our shop in
          <span className="font-medium text-white"> Lafayette, Tennessee</span>.
          As the name implies, <span className="font-semibold">TOP WATER REACTION BAITS</span> might
          just be the answer to maximize your topwater fishing experience.
        </p>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          After fishing with these lures for many years, topwater enthusiasts find fish are easily
          attracted to these simple baits. You should be able to choose one of these unique lures to
          match your fishing conditions.
        </p>

        {/* Content grid */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          {/* Photo / card — swap the bg for a real image when ready */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[url('/smallbass.jpg')] bg-cover bg-center">
            {/* Size spacer so the card has a fixed aspect ratio */}
            <div className="aspect-[4/3] w-full" />

            {/* Bottom gradient overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3
                            bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-lg font-medium text-white">Handmade. Tuned. Ready.</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Small-batch poppers crafted for serious topwater strikes—painted, cleared,
                and assembled in Tennessee.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Why anglers choose us</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
                Consistent action and castability—tested on local rivers & lakes.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
                Durable finishes with crisp, high-contrast patterns.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-odgreen" />
                Built by anglers—each lure is checked before it ships.
              </li>
            </ul>

            {/* Info tiles */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <div className="text-xs uppercase text-zinc-400">Made in</div>
                <div className="text-sm font-medium">Lafayette, TN</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <div className="text-xs uppercase text-zinc-400">Contact</div>
                <div className="text-sm font-medium">topwaterreactionbaits.com</div>
              </div>
            </div>

            {/* CTA back to products */}
          </div>
        </div>
      </section>
    </main>
  );
}
