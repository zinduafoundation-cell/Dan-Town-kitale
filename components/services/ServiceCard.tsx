"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Service } from "../types";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const number = service.number ?? "01";
  const items = service.items ?? [];

  return (
    <motion.article initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: index * 0.06 }} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.025] p-8 md:p-10">
      {service.image && (
        <div className="service-card-image">
          <Image src={service.image} alt={`${service.title} solution`} fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      )}
      <div className="absolute right-[-20px] top-[-55px] text-[13rem] font-black text-white/[0.025] transition duration-700 group-hover:text-orange-400/[0.07]">{number}</div>
      <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-orange-500/10 blur-[90px] opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-orange-400">{number}</span>
          <motion.div whileHover={{ rotate: 10, scale: 1.15 }} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-3xl">{service.icon ?? "⚡"}</motion.div>
        </div>
        <h3 className="mt-14 text-3xl font-black transition duration-500 group-hover:text-orange-400">{service.title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-8 text-white/30">{service.description}</p>
        <div className="mt-8 space-y-3">
          {items.map((item) => <div key={item} className="flex items-center gap-3 text-xs font-medium text-white/40"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />{item}</div>)}
        </div>
      </div>
    </motion.article>
  );
}