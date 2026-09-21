"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Electrical Solutions",
    category: "ELECTRICAL",
    file: "/videos/eletrical.mp4",
    description:
      "Explore quality electrical materials, wiring solutions, accessories and professional electrical products supplied by Dantown Electrical.",
  },
  {
    title: "Professional Installation",
    category: "INSTALLATION",
    file: "/videos/installation.mp4",
    description:
      "See how Dantown Electrical approaches professional electrical, lighting, solar and security installations.",
  },
  {
    title: "Lighting Solutions",
    category: "LIGHTING",
    file: "/videos/lightings.mp4",
    description:
      "Discover modern indoor, outdoor, commercial, security and decorative lighting solutions.",
  },
  {
    title: "Security Systems",
    category: "SECURITY",
    file: "/videos/security.mp4",
    description:
      "Explore CCTV cameras, security lighting, surveillance equipment and other security solutions.",
  },
  {
    title: "Solar Energy",
    category: "SOLAR",
    file: "/videos/solar.mp4",
    description:
      "Discover solar panels, batteries, inverters, solar lighting and complete renewable energy solutions.",
  },
];

const categories = [
  "ALL",
  "ELECTRICAL",
  "INSTALLATION",
  "LIGHTING",
  "SECURITY",
  "SOLAR",
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos =
    activeCategory === "ALL"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const selected = videos.find(
    (video) => video.title === selectedVideo
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-32 md:py-44">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[160px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 flex items-center gap-3">

              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

              <span className="text-[10px] font-black tracking-[5px] text-orange-400">
                DANTOWN ELECTRICAL KITALE
              </span>

            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl md:text-9xl">

              POWERING
              <br />

              <span className="text-orange-500">
                POSSIBILITIES.
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              Discover Dantown Electrical through our product,
              installation, lighting, security and solar videos.
              Quality products. Professional solutions. One destination.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/products"
                className="rounded-full bg-orange-500 px-8 py-4 text-sm font-black text-black transition hover:scale-105"
              >
                Explore Products →
              </a>

              <a
                href="/request-quote"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black text-white transition hover:border-orange-400/50"
              >
                Request a Quote
              </a>

            </div>

          </motion.div>

          {/* Stats */}

          <div className="mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">

            {[
              ["05", "VIDEOS"],
              ["05", "SOLUTIONS"],
              ["100+", "PRODUCTS"],
              ["01", "DESTINATION"],
            ].map(([number, label], index) => (

              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-5"
              >

                <div className="text-3xl font-black text-orange-400">
                  {number}
                </div>

                <div className="mt-2 text-[8px] font-black tracking-[3px] text-white/25">
                  {label}
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="sticky top-0 z-40 border-y border-white/10 bg-black/90 px-6 py-4 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-[9px] font-black tracking-[2px] transition ${
                activeCategory === category
                  ? "border-orange-500 bg-orange-500 text-black"
                  : "border-white/10 bg-white/[0.03] text-white/40 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>

            <div className="text-[10px] font-black tracking-[5px] text-orange-400">
              DANTOWN MEDIA
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">
              See what
              <br />
              we deliver.
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-xl text-sm leading-8 text-white/35">
              From electrical materials and lighting systems to
              security solutions and solar energy, Dantown Electrical
              connects customers with products designed for homes,
              businesses, construction projects and professional
              installations.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO GRID
      ===================================================== */}

      <section className="px-6 pb-32">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          {filteredVideos.map((video, index) => (

            <motion.article
              key={video.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025]"
            >

              {/* Video */}

              <div className="relative aspect-video overflow-hidden bg-black">

                <video
                  src={video.file}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                {/* Category */}

                <div className="pointer-events-none absolute left-5 top-5">

                  <span className="rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[8px] font-black tracking-[2px] text-orange-400 backdrop-blur-xl">
                    {video.category}
                  </span>

                </div>

              </div>


              {/* Information */}

              <div className="p-7 md:p-8">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <div className="mb-3 text-[8px] font-black tracking-[4px] text-white/20">
                      DANTOWN ELECTRICAL
                    </div>

                    <h3 className="text-2xl font-black md:text-3xl">
                      {video.title}
                    </h3>

                  </div>

                  <button
                    onClick={() => setSelectedVideo(video.title)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-orange-400 transition hover:bg-orange-500 hover:text-black"
                  >
                    ↗
                  </button>

                </div>

                <p className="mt-5 text-sm leading-7 text-white/30">
                  {video.description}
                </p>

                <div className="mt-6 h-px w-full bg-white/10" />

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-[8px] font-black tracking-[3px] text-white/20">
                    WATCH VIDEO
                  </span>

                  <span className="text-orange-400">
                    →
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <div className="text-[10px] font-black tracking-[5px] text-orange-400">
              OUR PRODUCT ECOSYSTEM
            </div>

            <h2 className="mt-5 text-4xl font-black md:text-7xl">
              Everything
              <br />
              electrical.
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/35">
              Dantown Electrical provides access to a wide range of
              electrical and energy products for residential,
              commercial, industrial and construction applications.
            </p>

          </div>


          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {[
              {
                number: "01",
                title: "Electrical",
                text: "Cables, switches, sockets, breakers and accessories.",
              },
              {
                number: "02",
                title: "Lighting",
                text: "Indoor, outdoor, garden and commercial lighting.",
              },
              {
                number: "03",
                title: "Security",
                text: "CCTV, security lighting and surveillance solutions.",
              },
              {
                number: "04",
                title: "Solar",
                text: "Panels, batteries, inverters and solar systems.",
              },
              {
                number: "05",
                title: "Installation",
                text: "Professional electrical and energy installation.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="rounded-[28px] border border-white/10 bg-black/40 p-7 transition hover:-translate-y-2 hover:border-orange-400/30"
              >

                <div className="text-xs font-black text-orange-400">
                  {item.number}
                </div>

                <h3 className="mt-8 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/30">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DISTRIBUTION CTA
      ===================================================== */}

      <section className="px-6 py-32">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[45px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-black to-black p-10 text-center md:p-20"
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative">

            <div className="text-[10px] font-black tracking-[5px] text-orange-400">
              DANTOWN ELECTRICAL
            </div>

            <h2 className="mt-6 text-4xl font-black md:text-7xl">
              Your electrical
              <br />
              supply partner.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/35">
              Looking for electrical materials, lighting products,
              security equipment, solar products or a complete
              installation solution? Talk to Dantown Electrical.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="/products"
                className="rounded-full bg-orange-500 px-8 py-4 text-sm font-black text-black transition hover:scale-105"
              >
                Shop Products →
              </a>

              <a
                href="/request-quote"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black transition hover:border-orange-400"
              >
                Request Quote
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/10 px-8 py-4 text-sm font-black text-white/50 transition hover:text-white"
              >
                Contact Us
              </a>

            </div>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {selected && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5 backdrop-blur-xl"
          onClick={() => setSelectedVideo(null)}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-[#080808]"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-xl transition hover:bg-orange-500 hover:text-black"
            >
              ✕
            </button>

            <video
              src={selected.file}
              controls
              autoPlay
              playsInline
              className="max-h-[75vh] w-full bg-black object-contain"
            />

            <div className="p-7">

              <div className="text-[8px] font-black tracking-[4px] text-orange-400">
                {selected.category}
              </div>

              <h2 className="mt-2 text-3xl font-black">
                {selected.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/35">
                {selected.description}
              </p>

            </div>

          </motion.div>

        </div>

      )}


    </main>
  );
}