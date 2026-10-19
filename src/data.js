export const SHOP = {
  name: 'Shreeyogi',
  tagline: 'Shreeyogi Enterprise',
  phone: '9723063785',
  whatsapp: '919723063785',
  email: 'shreeyogiienterprise@gmail.com',
  address: 'D1-403, Suryam Residency, Singanpore, Surat',
}

const img = (file) => `/productimage/${encodeURIComponent(file)}`

export const whatsappLink = (message) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`

export const products = [
  { id: 'markers-48-dual', name: '48-Color Dual Tip Art Markers', category: 'Art & Craft', price: 899, image: img('Image.jpg'), badge: 'Best seller', desc: 'Professional 48-shade dual-tip marker set with a fine liner and broad chisel nib, packed in a zip carry case. Perfect for sketching, illustration and colouring.' },
  { id: 'art-set-150', name: '150-Piece Deluxe Art Set', category: 'Art & Craft', price: 1299, image: img('Image (1).jpg'), badge: 'Value pack', desc: 'An all-in-one creative studio: crayons, oil pastels, watercolours, sketch pencils and markers in a portable folding case. A thoughtful gift for every young artist.' },
  { id: 'steel-cable-5m', name: '5MT Steel Tie-Out Cable', category: 'Outdoor & Pet', price: 499, image: img('Image (2).jpg'), badge: 'Heavy duty', desc: 'Five metre rust-resistant braided steel cable with secure spring clasps on both ends. Great for pets, camping and general outdoor securing.' },
  { id: 'shoe-charms-30', name: 'Cute Shoe Charms (30 Pcs)', category: 'Kids', price: 349, image: img('Image (3).jpg'), badge: 'Kids favourite', desc: 'A colourful heart-shaped collection of 30 soft silicone charms. Decorate clogs, bands and bags with unicorns, fruits, rainbows and more.' },
  { id: 'rabbit-thermos', name: 'Little Rabbit Thermos Bottle', category: 'Kitchen', price: 649, image: img('Image (4).jpg'), badge: 'Keeps warm', desc: 'Adorable double-wall stainless steel flask that keeps drinks hot or cold for hours. Compact, leak-proof and available in pastel tones.' },
  { id: 'jewel-box', name: 'Travel Jewelry Organizer Box', category: 'Lifestyle', price: 799, image: img('Image (5).jpg'), badge: 'Gift ready', desc: 'Soft velvet-lined zip jewellery case with slots for rings, earrings, necklaces and bracelets. Keeps your favourites tangle-free on the go.' },
  { id: 'book-cover-set', name: 'Book Cover & Label Set', category: 'Stationery', price: 299, image: img('Image (6).jpg'), badge: 'Back to school', desc: 'Protective transparent book covers bundled with a sheet of neat subject name labels. Keep every notebook crisp through the year.' },
  { id: 'markers-24', name: '24-Color Art Marker Set', category: 'Art & Craft', price: 599, image: img('Image (7).jpg'), badge: 'New in', desc: 'Vibrant 24-shade twin-tip markers in a stand-up fabric case. Smooth alcohol-based ink that blends beautifully on paper.' },
  { id: 'squeeze-art-kit', name: 'Rainbow Squeeze Art Kit', category: 'Kids', price: 449, image: img('Image (8).jpg'), badge: 'Fun craft', desc: 'A mess-free squeeze-and-reveal painting activity set with cards, stickers and colour tubes. Hours of screen-free creative play.' },
  { id: 'nasal-dilator', name: 'Premier Nasal Dilator Kit', category: 'Wellness', price: 549, image: img('Image (9).jpg'), badge: 'Better sleep', desc: 'Sleep and sport nasal dilator starter kit that helps open the airway for easier breathing and quieter nights.' },
  { id: 'hair-claws-4', name: 'Trendy Hair Claw Clips (4 Pcs)', category: 'Lifestyle', price: 329, image: img('Image (10).jpg'), badge: 'Trending', desc: 'Set of four strong-grip fashion claw clips in glossy and tortoise finishes. A chic everyday upgrade for any hairstyle.' },
  { id: 'markers-48-case', name: '48-Piece Pro Marker Case', category: 'Art & Craft', price: 999, image: img('Image (11).jpg'), badge: 'Pro grade', desc: 'A professional 48-piece dual-ended marker collection in a sturdy zip case. Rich, consistent colour for artists and designers.' },
  { id: 'pogo-jumper', name: 'Kids Foam Pogo Jumper', category: 'Kids', price: 749, image: img('Image (12).jpg'), badge: 'Active play', desc: 'Safe foam pogo jumper with a fun squeak and durable bungee. Builds balance and burns energy for ages 3 and up.' },
  { id: 'grain-bags', name: 'Leak-Proof Grain Storage Bags', category: 'Kitchen', price: 399, image: img('Image (13).jpg'), badge: 'Space saver', desc: 'Reusable stand-up grain and pulse storage pouches with easy-pour spouts and carry handles. Keep your pantry tidy and fresh.' },
  { id: 'car-hooks', name: 'Car Seat Headrest Hooks (2 Pcs)', category: 'Auto', price: 279, image: img('Image (14).jpg'), badge: 'Handy', desc: 'A pair of premium leather headrest hooks to hang bags, groceries and more, keeping your car floor clutter-free.' },
  { id: 'car-flowers', name: 'Car Dashboard Spring Flowers (5 Pcs)', category: 'Auto', price: 299, image: img('Image (15).jpg'), badge: 'Cute decor', desc: 'A cheerful set of five bobbing spring daisies that add a pop of colour to your car dashboard or desk. Easy peel-and-stick base.' },
  { id: 'plant-clips', name: 'Self-Adhesive Plant Climbing Clips (20 Pcs)', category: 'Home & Garden', price: 249, image: img('Image (16).jpg'), badge: 'Garden help', desc: 'Invisible wall-sticking clips that guide climbing plants and vines neatly along walls and trellises. No nails or drilling needed.' },
  { id: 'tile-brush', name: '4-in-1 Tile & Groove Cleaning Brush', category: 'Kitchen', price: 399, image: img('Image (17).jpg'), badge: 'Deep clean', desc: 'A multi-head scrubbing brush with stiff bristles and a squeegee edge to tackle tiles, grout lines, corners and sinks with ease.' },
  { id: 'simple-flask', name: 'Simple Life Insulated Flask', category: 'Kitchen', price: 549, image: img('Image (18).jpg'), badge: 'Keeps warm', desc: 'A minimal double-wall stainless steel flask with a handy carry lid. Keeps beverages hot or cold for hours in soft pastel finishes.' },
  { id: 'markers-60', name: '60-Color Pro Marker Case', category: 'Art & Craft', price: 1499, image: img('Image (19).jpg'), badge: 'Complete set', desc: 'A premium 60-shade dual-tip marker collection in a padded zip organiser. Rich, blendable alcohol ink for serious artists.' },
  { id: 'glow-tape', name: 'Glow Anti-Slip Safety Tape', category: 'Home & Garden', price: 329, image: img('Image (20).jpg'), badge: 'Night safe', desc: 'Strong-grip anti-slip tape with a glow-in-the-dark strip for stairs, steps and edges. Keeps pathways visible and safe at night.' },
]

export const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]
