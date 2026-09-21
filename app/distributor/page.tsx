"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Truck,
  Package,
  Store,
  Building2,
  Users,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Boxes,
  ClipboardList,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Bulk Supply",
    text: "Electrical materials for contractors, businesses, institutions and large projects.",
  },
  {
    icon: Truck,
    title: "Project Delivery",
    text: "Organised supply for projects requiring multiple products and quantities.",
  },
  {
    icon: Store,
    title: "Retailer Supply",
    text: "Support for electrical shops and retailers looking to source quality products.",
  },
  {
    icon: Building2,
    title: "Commercial Supply",
    text: "Electrical materials for offices, commercial buildings and business premises.",
  },
];

const customers = [
  "Electrical contractors",
  "Construction companies",
  "Electrical retailers",
  "Hardware shops",
  "Property developers",
  "Schools & institutions",
  "Hotels & businesses",
  "Home builders",
];

const process = [
  {
    number: "01",
    title: "SEND YOUR REQUIREMENTS",
    text: "Tell us the products, quantities or project materials you need.",
  },
  {
    number: "02",
    title: "GET A QUOTATION",
    text: "Our team prepares a quotation based on your requirements.",
  },
  {
    number: "03",
    title: "CONFIRM YOUR ORDER",
    text: "Approve the quotation and confirm the products you want supplied.",
  },
  {
    number: "04",
    title: "WE PREPARE YOUR ORDER",
    text: "Your products are organised and prepared for collection or delivery.",
  },
];

export default function DistributorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-6 py-32">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 blur-[190px]"
        />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#050505]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-xs font-black tracking-[5px] text-orange-400">
              <span className="h-px w-10 bg-orange-400" />
              DANTOWN ELECTRICAL KITALE
            </div>

            <h1 className="mt-8 max-w-6xl text-6xl font-black leading-[0.88] tracking-tight md:text-8xl lg:text-[9rem]">
              DISTRIBUTE.
              <br />
              <span className="text-orange-400">SUPPLY.</span>
              <br />
              DELIVER.
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-xl">
              Your electrical materials supply partner for projects,
              contractors, retailers, businesses and institutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="group flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-black text-black transition hover:bg-orange-400"
              >
                Request Wholesale Quote
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black transition hover:border-orange-400/40"
              >
                View Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              ["BULK", "ORDERS"],
              ["PROJECT", "SUPPLY"],
              ["RETAILER", "SUPPLY"],
              ["FAST", "SERVICE"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="text-2xl font-black text-orange-400">
                  {value}
                </div>

                <div className="mt-2 text-[8px] font-black tracking-[2px] text-white/25">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-black tracking-[5px] text-orange-400">
                DANTOWN DISTRIBUTION
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">
                From one
                <br />
                product
                <br />
                <span className="text-white/25">
                  to an entire project.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-end"
            >
              <p className="max-w-xl text-sm leading-8 text-white/35 md:text-base">
                Dantown Electrical Kitale supplies electrical materials
                across different project sizes. Whether you need a few
                items for a home installation or a large material list
                for a construction project, our team can help organise
                your requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] p-8"
                >
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/10 blur-[100px] transition group-hover:bg-orange-500/20" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-orange-400 transition group-hover:scale-110">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-8 text-3xl font-black transition group-hover:text-orange-400">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/35">
                      {service.text}
                    </p>

                    <div className="mt-8 h-px w-10 bg-orange-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="text-xs font-black tracking-[5px] text-orange-400">
                WHO WE SUPPLY
              </div>

              <h2 className="mt-5 text-4xl font-black md:text-7xl">
                Built for
                <br />
                <span className="text-white/25">business.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/35">
                We work with different types of customers who need
                dependable access to electrical materials and
                equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {customers.map((customer, index) => (
                <motion.div
                  key={customer}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-orange-400"
                  />

                  <span className="text-sm font-bold text-white/65">
                    {customer}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORDER PROCESS */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-xs font-black tracking-[5px] text-orange-400">
              SIMPLE PROCESS
            </div>

            <h2 className="mt-5 text-4xl font-black md:text-7xl">
              How wholesale
              <br />
              <span className="text-white/25">supply works.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="text-4xl font-black text-orange-400">
                  {item.number}
                </div>

                <h3 className="mt-8 text-sm font-black tracking-[2px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/30">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.025] p-8 md:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-xs font-black tracking-[5px] text-orange-400">
                  WHAT WE SUPPLY
                </div>

                <h2 className="mt-5 text-4xl font-black md:text-6xl">
                  Electrical
                  <br />
                  materials.
                </h2>

                <p className="mt-6 text-sm leading-8 text-white/35">
                  Explore Dantown&apos;s product range covering electrical,
                  lighting, security, energy and other project
                  requirements.
                </p>

                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-black"
                >
                  Browse Products
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cables",
                  "Switches",
                  "Sockets",
                  "Breakers",
                  "Lighting",
                  "Solar",
                  "Security",
                  "Accessories",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-5"
                  >
                    <Boxes
                      size={16}
                      className="text-orange-400"
                    />

                    <span className="text-sm font-bold text-white/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[45px] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-black to-black p-10 text-center md:p-20"
        >
          <div className="relative">
            <div className="text-xs font-black tracking-[5px] text-orange-400">
              HAVE A PROJECT?
            </div>

            <h2 className="mt-6 text-4xl font-black md:text-7xl">
              Send us
              <br />
              your materials list.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/35">
              Tell Dantown what you need and our team can help you
              prepare a supply quotation for your project.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-black text-black"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black"
              >
                <Phone size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BOTTOM */}
      <div className="pb-16 text-center">
        <Link
          href="/"
          className="text-xs font-black uppercase tracking-[5px] text-white/20 transition hover:text-orange-400"
        >
          ← Dantown Electrical Kitale
        </Link>
      </div>
    </main>
  );
}