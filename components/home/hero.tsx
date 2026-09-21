"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.background} />

      <div className={styles.grid} />

      <div className={styles.content}>

        <div className={styles.badge}>
          <span />
          Kitale&apos;s Electrical Partner
        </div>

        <h1>
          POWERING
          <br />

          YOUR
          <br />

          <strong>WORLD</strong>
        </h1>

        <p>
          Your trusted electrical partner in Kitale
          for quality products, professional
          solutions and reliable service.
        </p>

        <div className={styles.actions}>

          <Link
            href="/products"
            className={styles.primary}
          >
            <Zap size={18} />
            Explore Products
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/services"
            className={styles.secondary}
          >
            Our Services
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className={styles.stats}>

          <div>
            <strong>500+</strong>
            <span>Quality Products</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Top Brands</span>
          </div>

          <div>
            <strong>1000+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Expert Support</span>
          </div>

        </div>

      </div>

      <div className={styles.heroLight} />

    </section>
  )
}