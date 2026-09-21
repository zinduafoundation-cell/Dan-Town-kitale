import type { Brand, Product } from "../types"

const images = {
  cables: "/image/product/electrical-cable.webp",
  lighting: "/image/product/led-bulb.webp",
  outdoor: "/image/product/garden-light.webp",
  solar: "/image/product/solar-panel.webp",
  power: "/image/product/inverter.webp",
  battery: "/image/product/solar-battery.webp",
  security: "/image/product/security-light.webp",
  tools: "/image/cartegories/eletrical.webp",
  pumps: "/image/gallery/WaterPump.webp",
  smart: "/image/cartegories/smart-home.webp",
} as const

const imageSetFor = (category: string, image: string): [string, string, string] => {
  if (category.includes("Cable") || category.includes("Installation")) return [image, images.cables, images.power]
  if (category.includes("Lighting")) return [image, images.outdoor, images.security]
  if (category.includes("Solar")) return [image, images.power, images.battery]
  if (category.includes("Pump")) return [image, images.solar, images.power]
  if (category.includes("Tools")) return [image, images.power, images.cables]
  if (category.includes("Security") || category.includes("Networking")) return [image, images.smart, images.security]
  return [image, images.power, images.cables]
}

const product = (
  id: string,
  name: string,
  category: string,
  brand: string,
  description: string,
  image: string,
): Product => ({
  id,
  name,
  category,
  brand,
  description,
  image,
  images: imageSetFor(category, image),
  priceLabel: "Price on request",
})

export const catalogueProducts: Product[] = [
  product("single-core-wire", "Single Core PVC Copper Wire", "Cables & Wires", "Elsewedy", "Building wire in sizes from 1mm² to 16mm².", images.cables),
  product("twin-earth-cable", "Twin & Earth Cable", "Cables & Wires", "Cable Connect", "Reliable cable for domestic and commercial installations.", images.cables),
  product("flexible-cable", "Flexible Copper Cable", "Cables & Wires", "Cable Connect", "2-core, 3-core and 4-core flexible copper cable.", images.cables),
  product("data-cables", "Data & Specialty Cables", "Cables & Wires", "Cable Connect", "CAT5e, CAT6, CCTV, coaxial, speaker and solar cables.", images.cables),
  product("modular-switches", "Modular Switches", "Switches, Sockets & Fittings", "Havells", "1-way, 2-way, multi-gang, bell push, dimmer and fan regulator switches.", images.lighting),
  product("sockets-plugs", "Sockets & Plug Tops", "Switches, Sockets & Fittings", "MK", "13A single/double, USB, universal, industrial and waterproof sockets.", images.lighting),
  product("boxes-plates", "Boxes & Switch Plates", "Switches, Sockets & Fittings", "Havells", "Surface, flush and back boxes with blank and finished plates.", images.lighting),
  product("mcbs", "MCBs", "Circuit Protection & Distribution", "CHINT", "Miniature circuit breakers from 6A to 100A.", images.power),
  product("rccb-rcbo", "RCCB, RCD & RCBO", "Circuit Protection & Distribution", "Schneider Electric", "Residual-current protection for safer installations.", images.power),
  product("mccb-fuses", "MCCB, Fuses & Holders", "Circuit Protection & Distribution", "ABB", "Circuit breakers, fuses and fuse holders for distribution systems.", images.power),
  product("surge-protection", "Surge Protection & Voltage Protectors", "Circuit Protection & Distribution", "ABB", "AC/DC SPDs, voltage protectors, isolators and changeover switches.", images.power),
  product("distribution-boards", "Distribution Boards", "Circuit Protection & Distribution", "CHINT", "4-way to 24-way single-phase and three-phase boards.", images.power),
  product("contactors-relays", "Contactors, Relays & Timers", "Control", "Schneider Electric", "Control components for motors, automation and panels.", images.power),
  product("led-bulbs", "LED Bulbs", "Indoor Lighting", "Philips", "Energy-efficient LED bulbs for homes and businesses.", images.lighting),
  product("led-tubes", "LED Tube Lights & Battens", "Indoor Lighting", "Osram", "Long-life tube and batten lighting for practical illumination.", images.lighting),
  product("panels-downlights", "LED Panels & Downlights", "Indoor Lighting", "Panasonic", "Recessed and surface lighting for modern interiors.", images.lighting),
  product("decorative-lights", "Ceiling & Decorative Lights", "Indoor Lighting", "Panasonic", "Decorative lighting for residential and commercial interiors.", images.lighting),
  product("floodlights", "LED Floodlights", "Outdoor Lighting", "Osram", "Bright outdoor lighting for compounds and projects.", images.outdoor),
  product("security-lights", "Security Lights", "Outdoor Lighting", "Dantown", "Practical lighting for safer homes and business premises.", images.security),
  product("garden-wall-lights", "Garden & Wall Lights", "Outdoor Lighting", "Philips", "Outdoor decorative and functional lights.", images.outdoor),
  product("street-highbay", "Street & High Bay Lights", "Commercial Lighting", "Osram", "High-output lighting for roads and warehouses.", images.outdoor),
  product("solar-floodlights", "Solar Floodlights", "Solar Lighting", "Dantown", "Solar-powered floodlights for dependable outdoor illumination.", images.solar),
  product("solar-street-lights", "Solar Street Lights", "Solar Lighting", "Dantown", "Complete solar street lighting for compounds and roads.", images.solar),
  product("solar-panels", "Solar Panels", "Solar & Power", "Dantown", "Mono, polycrystalline and bifacial panels in several wattages.", images.solar),
  product("hybrid-inverters", "Hybrid & Off-Grid Inverters", "Solar & Power", "Powermax", "1kW to 10kW+ inverters for solar and backup systems.", images.power),
  product("grid-tie-inverters", "Grid-Tie Inverters", "Solar & Power", "Powermax", "Inverters for compatible grid-connected solar systems.", images.power),
  product("solar-batteries", "Lithium & Deep Cycle Batteries", "Solar & Power", "Powermax", "Energy storage for solar, backup and off-grid systems.", images.battery),
  product("agm-gel-batteries", "AGM, Gel & Tubular Batteries", "Solar & Power", "Powermax", "Battery technologies for different backup applications.", images.battery),
  product("solar-accessories", "Solar Controllers & Accessories", "Solar & Power", "Dantown", "PWM/MPPT controllers, MC4 connectors and DC protection.", images.solar),
  product("solar-mounting", "Solar Cables & Mounting Hardware", "Solar & Power", "Dantown", "Cables, rails, clamps, roof hooks and installation accessories.", images.solar),
  product("generators", "Petrol & Diesel Generators", "Generators & Backup Power", "Dantown", "Portable, open-frame and silent generators subject to stock.", images.power),
  product("generator-accessories", "Generator Accessories", "Generators & Backup Power", "Dantown", "ATS, AVR, changeover switches, batteries and cables.", images.power),
  product("ups-inverter-chargers", "UPS & Inverter Chargers", "Generators & Backup Power", "Powermax", "Backup power equipment for homes, offices and businesses.", images.power),
  product("hand-tools", "Hand Tools", "Tools & Equipment", "Ingco", "Screwdrivers, pliers, spanners, socket sets and measuring tools.", images.tools),
  product("electrical-tools", "Electrical Installation Tools", "Tools & Equipment", "Ingco", "Wire strippers, cutters, crimpers, MC4 crimpers and testers.", images.tools),
  product("power-tools", "Power Tools", "Tools & Equipment", "Ingco", "Drills, hammers, grinders, cutting machines and heat guns.", images.tools),
  product("testing-equipment", "Testing Equipment", "Tools & Equipment", "Fluke", "Digital multimeters, clamp meters and voltage testers.", images.tools),
  product("conduits-trunking", "Conduits & Trunking", "Installation Accessories", "Dantown", "PVC/flexible conduit, trunking, bends, couplers and boxes.", images.cables),
  product("cable-management", "Cable Management", "Installation Accessories", "Dantown", "Clips, ties, glands, lugs, ferrules, markers and heat shrink.", images.cables),
  product("earthing-kits", "Earthing & Lightning Protection", "Installation Accessories", "ABB", "Earth rods, clamps, cable, bars and earthing kits.", images.power),
  product("water-pumps", "Water Pumps", "Water Pumps & Pumping", "Dantown", "Surface, submersible, borehole, booster and solar pumps.", images.pumps),
  product("pump-accessories", "Pump Controllers & Accessories", "Water Pumps & Pumping", "Dantown", "Controllers, float and pressure switches, cables and fittings.", images.pumps),
  product("hardware-consumables", "Hardware & Electrical Consumables", "Hardware & Safety", "Dantown", "Screws, anchors, tape, PVC glue and jointing materials.", images.tools),
  product("safety-equipment", "Electrical Safety Equipment", "Hardware & Safety", "Dantown", "Helmets, gloves, boots, glasses, harnesses and first aid kits.", images.tools),
  product("smart-home", "Smart Home Devices", "Smart Home & Security", "Hikvision", "Smart switches, plugs, bulbs, relays and motion sensors.", images.smart),
  product("cctv-security", "CCTV & Access Control", "Smart Home & Security", "Hikvision", "Cameras, DVR/NVR systems, cables and power supplies.", images.security),
  product("networking", "Networking Equipment", "Networking", "TP-Link", "Routers, switches, Wi-Fi access points and RJ45 accessories.", images.smart),
]

const brand = (id: string, name: string, logo: string, color: string): Brand => ({
  id,
  name,
  logo,
  color,
  background: "#ffffff",
})

export const catalogueBrands: Brand[] = [
  brand("abb", "ABB", "/image/brands/abb.webp", "#e30613"),
  brand("afrilight", "Afrilight", "/image/brands/afrilight.webp", "#1f7a44"),
  brand("cable-connect", "Cable Connect", "/image/brands/cableconnect.webp", "#1b4d8c"),
  brand("chint", "CHINT", "/image/brands/chint.webp", "#e30613"),
  brand("coslec", "Coslec", "/image/brands/coslec.webp", "#0066a6"),
  brand("elsewedy", "Elsewedy", "/image/brands/elswedy.webp", "#0066a6"),
  brand("fame", "Fame", "/image/brands/fame.webp", "#ed1c24"),
  brand("havells", "Havells", "/image/brands/havells.webp", "#ed1c24"),
  brand("hikvision", "Hikvision", "/image/brands/hikvision.webp", "#e50000"),
  brand("itel", "Itel", "/image/brands/itel.webp", "#e30613"),
  brand("mk", "MK", "/image/brands/mk.webp", "#0066a6"),
  brand("osram", "Osram", "/image/brands/osram.webp", "#0056a6"),
  brand("panasonic", "Panasonic", "/image/brands/panasonic.webp", "#0056a6"),
  brand("philips", "Philips", "/image/brands/philips.webp", "#0056a6"),
  brand("powermax", "Powermax", "/image/brands/powermax.webp", "#ff8c00"),
  brand("schneider", "Schneider Electric", "/image/brands/schneider.webp", "#008b45"),
  brand("siemens", "Siemens", "/image/brands/siemens.webp", "#009999"),
  brand("ingco", "Ingco", "", "#f4c400"),
  brand("fluke", "Fluke", "", "#f4c400"),
  brand("tp-link", "TP-Link", "", "#1b4d8c"),
  brand("carl-and-gilbert", "Carl and Gilbert", "/image/brands/carl-and-gilbert.webp", "#ff9d00"),
]