"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

const categories = [
  "ALL",
  "ELECTRICAL",
  "SOLAR",
  "PRODUCTS",
  "services",
  "PROJECTS",
  "DELIVERY",
];

const faqs = [
  {
    category: "ELECTRICAL",
    question: "What electrical services does Dantown Electrical Kitale provide?",
    answer:
      "We provide a wide range of electrical solutions including electrical installation, wiring, lighting installation, maintenance, fault finding, repairs, commercial electrical systems and electrical project support.",
  },
  {
    category: "ELECTRICAL",
    question: "Do you handle residential electrical installations?",
    answer:
      "Yes. We support residential projects from new wiring and lighting to upgrades, repairs, distribution boards, security lighting and other electrical requirements.",
  },
  {
    category: "ELECTRICAL",
    question: "Do you work on commercial electrical projects?",
    answer:
      "Yes. We provide electrical solutions for shops, offices, businesses, institutions and other commercial projects. Larger projects can be assessed and planned according to their technical requirements.",
  },
  {
    category: "SOLAR",
    question: "Do you install solar systems?",
    answer:
      "Yes. We provide solar solutions including solar panels, batteries, hybrid inverters, charge controllers, solar cables, connectors and related installation services.",
  },
  {
    category: "SOLAR",
    question: "Can you help me choose the right solar system?",
    answer:
      "Yes. We can help evaluate your energy requirements and recommend a suitable system based on your appliances, usage, backup requirements and available budget.",
  },
  {
    category: "SOLAR",
    question: "Do you provide solar battery solutions?",
    answer:
      "Yes. We work with different battery technologies and can help you choose an appropriate storage solution for your solar or backup power requirements.",
  },
  {
    category: "PRODUCTS",
    question: "What electrical products do you sell?",
    answer:
      "Our product range includes electrical accessories, cables, switches, lighting products, solar equipment, batteries, inverters, connectors and other electrical and energy products.",
  },
  {
    category: "PRODUCTS",
    question: "Can I ask about product availability before visiting?",
    answer:
      "Yes. Contact our team with the product name, brand or specification you are looking for and we can assist you with availability and suitable alternatives.",
  },
  {
    category: "PRODUCTS",
    question: "Do you stock different brands?",
    answer:
      "Yes. We work with a variety of brands and product ranges. Availability can vary depending on the specific product and current stock.",
  },
  {
    category: "services",
    question: "Can I request a quotation?",
    answer:
      "Yes. You can contact us with your project requirements and we can help prepare a quotation based on the products, materials and services required.",
  },
  {
    category: "services",
    question: "Do you offer maintenance services?",
    answer:
      "Yes. We can assist with electrical and energy-system maintenance, troubleshooting and technical support depending on the system and project requirements.",
  },
  {
    category: "services",
    question: "Can you inspect an existing electrical system?",
    answer:
      "Yes. A site assessment can help identify electrical requirements, possible faults, upgrade opportunities and appropriate solutions.",
  },
  {
    category: "PROJECTS",
    question: "How do I start a project with Dantown?",
    answer:
      "Start by contacting us and describing your project. We can then discuss your requirements, arrange an assessment where appropriate and recommend the next steps.",
  },
  {
    category: "PROJECTS",
    question: "Do you work on both small and large projects?",
    answer:
      "Yes. We can support individual electrical needs as well as residential, commercial and larger energy projects depending on the scope.",
  },
  {
    category: "PROJECTS",
    question: "Can you help with project planning?",
    answer:
      "Yes. We can discuss the technical requirements, products, installation considerations and other important aspects needed to move a project forward.",
  },
  {
    category: "DELIVERY",
    question: "Do you provide product delivery?",
    answer:
      "Delivery options depend on the order, location and product requirements. Contact us with your order details so we can discuss the available options.",
  },
  {
    category: "DELIVERY",
    question: "Do you serve customers outside Kitale?",
    answer:
      "We primarily serve Kitale and surrounding areas, while other locations can be discussed depending on the project, product and services required.",
  },
  {
    category: "DELIVERY",
    question: "How can I contact Dantown Electrical Kitale?",
    answer:
      "You can contact us through phone, WhatsApp or email. For project enquiries, provide as much information as possible so our team can understand what you need.",
  },
];

export default function FAQPage() {
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        category === "ALL" || faq.category === category;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020304] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[82vh] overflow-hidden">

        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/image/Faqs.webp"
            alt="Dantown Electrical Kitale"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/85" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 blur-[170px]"
        />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-[#020304]" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-32">

          <div className="w-full">

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                filter: "blur(15px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1 }}
              className="max-w-5xl"
            >

              <motion.div
                initial={{ letterSpacing: "0px" }}
                animate={{ letterSpacing: "7px" }}
                transition={{ duration: 1 }}
                className="text-sm font-black text-orange-400"
              >
                DANTOWN ELECTRICAL KITALE
              </motion.div>

              <h1 className="mt-8 text-6xl font-black leading-[0.88] md:text-9xl">

                GOT

                <br />

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 1,
                  }}
                  className="inline-block text-orange-400"
                >
                  QUESTIONS?
                </motion.span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
                Find quick answers about our electrical,
                solar, lighting, products, projects and
                services.
              </p>

            </motion.div>


            {/* SEARCH */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="mt-12 max-w-3xl"
            >

              <div className="group relative">

                <div className="absolute -inset-1 rounded-[25px] bg-orange-500/20 opacity-0 blur-xl transition group-focus-within:opacity-100" />

                <div className="relative flex items-center rounded-[25px] border border-white/10 bg-black/60 px-5 backdrop-blur-xl">

                  <span className="mr-4 text-2xl text-white/30">
                    ⌕
                  </span>

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your question..."
                    className="w-full bg-transparent py-5 text-white outline-none placeholder:text-white/25"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="text-white/30 transition hover:text-orange-400"
                    >
                      ✕
                    </button>
                  )}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <section className="sticky top-0 z-40 border-y border-white/10 bg-black/80 px-6 py-4 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">

          {categories.map((item, index) => (

            <motion.button
              key={item}
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                setCategory(item);
                setOpen(null);
              }}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-xs font-black tracking-[2px] transition ${
                category === item
                  ? "border-orange-400 bg-orange-500 text-black"
                  : "border-white/10 bg-white/[0.03] text-white/40 hover:border-orange-400/40 hover:text-white"
              }`}
            >
              {item}
            </motion.button>

          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ AREA
      ===================================================== */}

      <section className="relative px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="text-xs font-black tracking-[5px] text-orange-400">
                KNOWLEDGE CENTRE
              </div>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Answers,
                <span className="text-white/30">
                  {" "}
                  simplified.
                </span>
              </h2>

            </div>

            <div className="text-sm text-white/30">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1
                ? "question"
                : "questions"}{" "}
              found
            </div>

          </div>


          {/* FAQ LIST */}

          <div className="space-y-4">

            <AnimatePresence mode="popLayout">

              {filteredFAQs.map((faq, index) => {

                const isOpen = open === index;

                return (
                  <motion.div
                    layout
                    key={`${faq.category}-${faq.question}`}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`overflow-hidden rounded-[25px] border transition ${
                      isOpen
                        ? "border-orange-400/40 bg-orange-500/[0.05]"
                        : "border-white/10 bg-white/[0.025]"
                    }`}
                  >

                    <button
                      onClick={() =>
                        setOpen(isOpen ? null : index)
                      }
                      className="flex w-full items-center gap-5 p-6 text-left md:p-8"
                    >

                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          backgroundColor: isOpen
                            ? "rgb(249 115 22)"
                            : "rgba(255,255,255,.05)",
                          color: isOpen
                            ? "black"
                            : "rgba(255,255,255,.5)",
                        }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl"
                      >
                        +
                      </motion.div>


                      <div className="min-w-0 flex-1">

                        <div className="mb-2 text-[10px] font-black tracking-[3px] text-orange-400">
                          {faq.category}
                        </div>

                        <h3 className="text-base font-bold leading-7 text-white md:text-lg">
                          {faq.question}
                        </h3>

                      </div>

                    </button>


                    <AnimatePresence initial={false}>

                      {isOpen && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                        >

                          <div className="border-t border-white/10 px-6 pb-7 pl-[82px] pr-7 pt-6 md:px-8 md:pl-[92px]">

                            <p className="max-w-3xl text-sm leading-8 text-white/45 md:text-base">
                              {faq.answer}
                            </p>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </AnimatePresence>


            {/* NO RESULTS */}

            {filteredFAQs.length === 0 && (

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="rounded-[35px] border border-white/10 bg-white/[0.03] p-14 text-center"
              >

                <div className="text-5xl">
                  🔎
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  No matching question
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/35">
                  Try another search term or select a
                  different category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("ALL");
                  }}
                  className="mt-7 rounded-full bg-orange-500 px-7 py-3 text-sm font-black text-black"
                >
                  Reset Search
                </button>

              </motion.div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK CONTACT
      ===================================================== */}

      <section className="relative overflow-hidden bg-white/[0.025] px-6 py-32">

        <motion.div
          animate={{
            x: [-150, 150, -150],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                icon: "📞",
                title: "Call",
                text: "Speak with our team",
                href: "tel:0745917655",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                text: "Start a conversation",
                href: "https://wa.me/254745917655",
              },
              {
                icon: "✉️",
                title: "Email",
                text: "Send an enquiry",
                href: "mailto:dantownelectrical@gmail.com",
              },
            ].map((item, index) => (

              <motion.a
                key={item.title}
                href={item.href}
                target={
                  item.href.startsWith("https")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[30px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl"
              >

                <div className="text-4xl transition duration-500 group-hover:scale-125">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-xl font-black group-hover:text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/35">
                  {item.text}
                </p>

                <div className="mt-7 text-sm font-bold text-orange-400">
                  Contact →
                </div>

              </motion.a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 py-32">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[45px] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-black to-blue-500/10 p-10 text-center md:p-20"
        >

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />

          <div className="relative">

            <div className="text-xs font-black tracking-[6px] text-orange-400">
              STILL NEED HELP?
            </div>

            <h2 className="mt-6 text-4xl font-black md:text-7xl">
              Ask Dantown.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/40">
              If you cannot find the answer you need,
              contact our team directly and let us help.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.07,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full bg-orange-500 px-9 py-5 font-black text-black"
              >
                Contact Us →
              </motion.a>

              <motion.a
                href="https://wa.me/254745917655"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.07,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-white/10 bg-white/[0.05] px-9 py-5 font-black"
              >
                WhatsApp
              </motion.a>

            </div>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          FOOTER NAV
      ===================================================== */}

      <div className="pb-16 text-center">

        <Link
          href="/"
          className="text-xs font-black uppercase tracking-[5px] text-white/25 transition hover:text-orange-400"
        >
          ← Dantown Electrical Kitale
        </Link>

      </div>

    </main>
  );
}