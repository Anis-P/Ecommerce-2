import veg1 from "@assets/stock_images/veg_1.jpg";
import veg2 from "@assets/stock_images/veg_2.jpg";
import veg3 from "@assets/stock_images/veg_3.jpg";
import veg4 from "@assets/stock_images/veg_4.jpg";
import veg5 from "@assets/stock_images/veg_5.jpg";
import veg6 from "@assets/stock_images/veg_6.jpg";
import veg7 from "@assets/stock_images/veg_7.jpg";
import veg8 from "@assets/stock_images/veg_8.jpg";
import fruit1 from "@assets/stock_images/fruit_1.jpg";
import fruit2 from "@assets/stock_images/fruit_2.jpg";
import fruit3 from "@assets/stock_images/fruit_3.jpg";
import fruit4 from "@assets/stock_images/fruit_4.jpg";
import fruit5 from "@assets/stock_images/fruit_5.jpg";
import fruit6 from "@assets/stock_images/fruit_6.jpg";
import fruit7 from "@assets/stock_images/fruit_7.jpg";
import fruit8 from "@assets/stock_images/fruit_8.jpg";
import dairy1 from "@assets/stock_images/dairy_1.jpg";
import dairy2 from "@assets/stock_images/dairy_2.jpg";
import dairy3 from "@assets/stock_images/dairy_3.jpg";
import dairy4 from "@assets/stock_images/dairy_4.jpg";
import dairy5 from "@assets/stock_images/dairy_5.jpg";
import dairy6 from "@assets/stock_images/dairy_6.jpg";
import meat1 from "@assets/stock_images/meat_1.jpg";
import meat2 from "@assets/stock_images/meat_2.jpg";
import meat3 from "@assets/stock_images/meat_3.jpg";
import meat4 from "@assets/stock_images/meat_4.jpg";
import meat5 from "@assets/stock_images/meat_5.jpg";
import meat6 from "@assets/stock_images/meat_6.jpg";
import snacks1 from "@assets/stock_images/snacks_1.jpg";
import snacks2 from "@assets/stock_images/snacks_2.jpg";
import snacks3 from "@assets/stock_images/snacks_3.jpg";
import snacks4 from "@assets/stock_images/snacks_4.jpg";
import snacks5 from "@assets/stock_images/snacks_5.jpg";
import snacks6 from "@assets/stock_images/snacks_6.jpg";
import bev1 from "@assets/stock_images/beverages_1.jpg";
import bev2 from "@assets/stock_images/beverages_2.jpg";
import bev3 from "@assets/stock_images/beverages_3.jpg";
import bev4 from "@assets/stock_images/beverages_4.jpg";
import bev5 from "@assets/stock_images/beverages_5.jpg";
import bev6 from "@assets/stock_images/beverages_6.jpg";
import ess1 from "@assets/stock_images/essentials_1.jpg";
import ess2 from "@assets/stock_images/essentials_2.jpg";
import ess3 from "@assets/stock_images/essentials_3.jpg";
import ess4 from "@assets/stock_images/essentials_4.jpg";
import ess5 from "@assets/stock_images/essentials_5.jpg";
import ess6 from "@assets/stock_images/essentials_6.jpg";
import bakery1 from "@assets/stock_images/bakery_1.jpg";
import bakery2 from "@assets/stock_images/bakery_2.jpg";
import bakery3 from "@assets/stock_images/bakery_3.jpg";
import bakery4 from "@assets/stock_images/bakery_4.jpg";
import bakery5 from "@assets/stock_images/bakery_5.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  unit: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // Vegetables
  { id: "p1", slug: "farm-fresh-tomatoes", name: "Farm Fresh Tomatoes", category: "vegetables", price: 45, mrp: 60, unit: "1 kg", rating: 4.5, reviewCount: 128, image: veg1, description: "Locally sourced, organic red tomatoes. Perfect for curries, salads, and sauces.", features: ["100% Organic", "Locally Sourced", "Rich in Vitamin C", "Pesticide Free"] },
  { id: "p2", slug: "organic-potatoes", name: "Organic Potatoes", category: "vegetables", price: 35, mrp: 50, unit: "1 kg", rating: 4.8, reviewCount: 342, image: veg2, description: "Versatile and essential for every Indian kitchen. Cleaned and dirt-free.", features: ["Farm Fresh", "No Preservatives", "Hand-picked"] },
  { id: "p3", slug: "fresh-onions", name: "Fresh Red Onions", category: "vegetables", price: 40, mrp: 55, unit: "1 kg", rating: 4.6, reviewCount: 256, image: veg3, description: "Crisp and flavorful onions, essential for your daily cooking.", features: ["Premium Quality", "Long Shelf Life", "Pungent Flavor"] },
  { id: "p4", slug: "broccoli-crowns", name: "Broccoli Crowns", category: "vegetables", price: 89, mrp: 120, unit: "500 g", rating: 4.7, reviewCount: 178, image: veg4, description: "Tender, deep green broccoli crowns harvested at peak freshness.", features: ["Hand Harvested", "High in Fiber", "Pesticide Free"] },
  { id: "p5", slug: "rainbow-bell-peppers", name: "Rainbow Bell Peppers", category: "vegetables", price: 99, mrp: 140, unit: "500 g", rating: 4.6, reviewCount: 142, image: veg5, description: "A vibrant trio of red, yellow and green capsicum — sweet and crunchy.", features: ["Mixed Pack", "Cold Stored", "No Wax"] },
  { id: "p6", slug: "baby-spinach", name: "Baby Spinach Leaves", category: "vegetables", price: 55, mrp: 75, unit: "200 g", rating: 4.8, reviewCount: 95, image: veg6, description: "Tender baby spinach with water drops — perfect for salads and smoothies.", features: ["Hydroponic", "Triple Washed", "Ready to Eat"] },
  { id: "p7", slug: "organic-carrots", name: "Organic Carrots", category: "vegetables", price: 49, mrp: 65, unit: "1 kg", rating: 4.7, reviewCount: 211, image: veg7, description: "Sweet, crunchy carrots from the foothills — ideal for halwa and salads.", features: ["Naturally Sweet", "Rich in Beta Carotene", "Single-Origin"] },
  { id: "p8", slug: "fresh-cabbage", name: "Fresh Green Cabbage", category: "vegetables", price: 39, mrp: 55, unit: "1 pc", rating: 4.5, reviewCount: 87, image: veg8, description: "A heavy, tightly packed head of cabbage — crisp and refreshing.", features: ["Heavy Head", "Tightly Packed", "Farm Fresh"] },

  // Fruits
  { id: "p9", slug: "shimla-apples", name: "Shimla Apples", category: "fruits", price: 180, mrp: 220, unit: "1 kg", rating: 4.7, reviewCount: 289, image: fruit1, description: "Crisp, juicy apples direct from Himachal orchards.", features: ["Single-Origin", "Hand-picked", "Naturally Ripened"] },
  { id: "p10", slug: "alphonso-mangoes", name: "Alphonso Mangoes", category: "fruits", price: 800, mrp: 1000, unit: "1 Dozen", rating: 4.9, reviewCount: 512, image: fruit2, description: "The king of fruits. Sweet, juicy, and naturally ripened.", features: ["Naturally Ripened", "Premium Export Quality", "Seasonal"] },
  { id: "p11", slug: "robusta-bananas", name: "Robusta Bananas", category: "fruits", price: 59, mrp: 80, unit: "1 dozen", rating: 4.6, reviewCount: 412, image: fruit3, description: "Plump, sweet bananas perfect for breakfast bowls and smoothies.", features: ["Tree Ripened", "Energy Booster", "Daily Essential"] },
  { id: "p12", slug: "valencia-oranges", name: "Valencia Oranges", category: "fruits", price: 149, mrp: 199, unit: "1 kg", rating: 4.5, reviewCount: 167, image: fruit4, description: "Juicy, tangy oranges — great for fresh juice or snacking.", features: ["High in Vitamin C", "Juice Grade", "Imported"] },
  { id: "p13", slug: "seedless-grapes", name: "Black Seedless Grapes", category: "fruits", price: 199, mrp: 260, unit: "500 g", rating: 4.6, reviewCount: 198, image: fruit5, description: "Plump, deep purple grapes — sweet and seedless.", features: ["Seedless", "Cold Chain", "Premium"] },
  { id: "p14", slug: "kashmir-pears", name: "Kashmir Pears", category: "fruits", price: 159, mrp: 210, unit: "1 kg", rating: 4.5, reviewCount: 102, image: fruit6, description: "Buttery, sweet pears from the Kashmir valley.", features: ["Single-Origin", "Hand-Picked", "Limited Stock"] },
  { id: "p15", slug: "watermelon", name: "Mini Watermelon", category: "fruits", price: 89, mrp: 120, unit: "1 pc", rating: 4.4, reviewCount: 76, image: fruit7, description: "Compact, sweet watermelons — refreshing summer staple.", features: ["Single Family Size", "Sweet & Juicy", "Hydrating"] },
  { id: "p16", slug: "kiwi-fruit", name: "New Zealand Kiwi", category: "fruits", price: 220, mrp: 280, unit: "6 pcs", rating: 4.7, reviewCount: 148, image: fruit8, description: "Tangy, vitamin-rich kiwi imported from New Zealand.", features: ["Imported", "Rich in Vitamin C & E", "Antioxidant"] },

  // Dairy
  { id: "p17", slug: "pure-cow-milk", name: "Pure Cow Milk", category: "dairy", price: 65, mrp: 75, unit: "1 L", rating: 4.8, reviewCount: 890, image: dairy1, description: "Fresh, unadulterated cow milk delivered straight from the farm.", features: ["No Added Preservatives", "Rich in Calcium", "Farm Fresh"] },
  { id: "p18", slug: "fresh-paneer", name: "Fresh Malai Paneer", category: "dairy", price: 120, mrp: 140, unit: "250 g", rating: 4.7, reviewCount: 320, image: dairy2, description: "Soft, creamy paneer perfect for your favorite curries and snacks.", features: ["Rich in Protein", "Soft Texture", "100% Vegetarian"] },
  { id: "p19", slug: "thick-curd", name: "Thick Set Curd", category: "dairy", price: 55, mrp: 70, unit: "400 g", rating: 4.7, reviewCount: 244, image: dairy3, description: "Traditionally set thick curd — cool, creamy and probiotic.", features: ["Probiotic", "Set in Cup", "No Stabilizers"] },
  { id: "p20", slug: "farmhouse-butter", name: "Farmhouse Butter", category: "dairy", price: 89, mrp: 110, unit: "200 g", rating: 4.8, reviewCount: 188, image: dairy4, description: "Rich, salted butter churned from the cream of grass-fed cows.", features: ["Salted", "Grass Fed", "Small Batch"] },
  { id: "p21", slug: "amul-cheese-block", name: "Cheddar Cheese Block", category: "dairy", price: 320, mrp: 380, unit: "400 g", rating: 4.6, reviewCount: 162, image: dairy5, description: "Sharp, mature cheddar — slice it, melt it, grate it.", features: ["Aged 6 Months", "Source of Calcium", "Pure Veg Rennet"] },
  { id: "p22", slug: "greek-yogurt", name: "Greek Yogurt", category: "dairy", price: 110, mrp: 140, unit: "400 g", rating: 4.7, reviewCount: 220, image: dairy6, description: "Thick, creamy strained yogurt — high in protein.", features: ["High Protein", "Live Cultures", "Unsweetened"] },

  // Meat & Seafood
  { id: "p23", slug: "raw-beef-cuts", name: "Raw Lamb Chops", category: "meat-seafood", price: 599, mrp: 750, unit: "500 g", rating: 4.7, reviewCount: 92, image: meat1, description: "Hand-cut lamb chops, ideal for grilling and curries.", features: ["Antibiotic Free", "Halal Certified", "Vacuum Packed"] },
  { id: "p24", slug: "lamb-ribs", name: "Tender Lamb Ribs", category: "meat-seafood", price: 649, mrp: 800, unit: "13 ribs", rating: 4.6, reviewCount: 64, image: meat2, description: "Tender, marbled lamb ribs — perfect for slow cooking.", features: ["Halal", "Pasture Raised", "Premium"] },
  { id: "p25", slug: "chicken-breast", name: "Boneless Chicken Breast", category: "meat-seafood", price: 299, mrp: 360, unit: "500 g", rating: 4.7, reviewCount: 318, image: meat3, description: "Skinless, boneless chicken breasts — high protein, low fat.", features: ["Antibiotic Free", "High Protein", "Skinless"] },
  { id: "p26", slug: "river-fish-fillet", name: "River Fish Fillet", category: "meat-seafood", price: 459, mrp: 560, unit: "500 g", rating: 4.5, reviewCount: 88, image: meat4, description: "Cleaned and filleted river fish — rich in Omega 3.", features: ["Omega 3", "Boneless", "Fresh Catch"] },
  { id: "p27", slug: "prawns-jumbo", name: "Jumbo Tiger Prawns", category: "meat-seafood", price: 749, mrp: 900, unit: "500 g", rating: 4.8, reviewCount: 132, image: meat5, description: "Plump, deshelled tiger prawns — flash frozen at sea.", features: ["Wild Caught", "Deveined", "Flash Frozen"] },
  { id: "p28", slug: "chicken-mince", name: "Fresh Chicken Mince", category: "meat-seafood", price: 269, mrp: 330, unit: "500 g", rating: 4.6, reviewCount: 198, image: meat6, description: "Freshly ground chicken mince — perfect for kebabs.", features: ["Fresh Ground", "Antibiotic Free", "Lean"] },

  // Snacks
  { id: "p29", slug: "masala-chips", name: "Masala Potato Chips", category: "snacks", price: 49, mrp: 60, unit: "150 g", rating: 4.5, reviewCount: 421, image: snacks1, description: "Crunchy, fiery masala chips — the ultimate evening snack.", features: ["Crisp & Crunchy", "Bold Spices", "Vegetarian"] },
  { id: "p30", slug: "namkeen-mix", name: "Bhujia Namkeen Mix", category: "snacks", price: 99, mrp: 130, unit: "400 g", rating: 4.7, reviewCount: 298, image: snacks2, description: "Classic Indian namkeen mix — savoury and addictive.", features: ["Authentic Recipe", "Crunchy", "Family Pack"] },
  { id: "p31", slug: "digestive-biscuits", name: "Digestive Biscuits", category: "snacks", price: 79, mrp: 95, unit: "250 g", rating: 4.6, reviewCount: 256, image: snacks3, description: "Wholewheat digestive biscuits — perfect with chai.", features: ["Whole Wheat", "Source of Fibre", "No Trans Fat"] },
  { id: "p32", slug: "almond-cookies", name: "Almond Butter Cookies", category: "snacks", price: 149, mrp: 180, unit: "200 g", rating: 4.7, reviewCount: 174, image: snacks4, description: "Buttery cookies studded with crunchy California almonds.", features: ["California Almonds", "Hand-baked", "No Preservatives"] },
  { id: "p33", slug: "cheese-crackers", name: "Cheese Crackers", category: "snacks", price: 89, mrp: 110, unit: "200 g", rating: 4.5, reviewCount: 142, image: snacks5, description: "Crisp savoury crackers with real cheese.", features: ["Real Cheese", "Baked Not Fried", "Snack Pack"] },
  { id: "p34", slug: "trail-mix", name: "Premium Trail Mix", category: "snacks", price: 269, mrp: 340, unit: "300 g", rating: 4.8, reviewCount: 256, image: snacks6, description: "A wholesome mix of nuts, seeds and dried fruit.", features: ["No Added Sugar", "Energy Booster", "Resealable"] },

  // Beverages
  { id: "p35", slug: "fresh-orange-juice", name: "Fresh Orange Juice", category: "beverages", price: 149, mrp: 180, unit: "1 L", rating: 4.7, reviewCount: 312, image: bev1, description: "Cold pressed orange juice — no added sugar or water.", features: ["Cold Pressed", "100% Juice", "No Added Sugar"] },
  { id: "p36", slug: "spring-water", name: "Himalayan Spring Water", category: "beverages", price: 49, mrp: 60, unit: "1 L (4 pk)", rating: 4.7, reviewCount: 522, image: bev2, description: "Naturally sourced from Himalayan springs.", features: ["Single-Source", "Natural Minerals", "BPA Free"] },
  { id: "p37", slug: "masala-chai", name: "Masala Chai Tea", category: "beverages", price: 199, mrp: 250, unit: "250 g", rating: 4.8, reviewCount: 412, image: bev3, description: "Aromatic Assam tea blended with whole spices.", features: ["Whole Leaf", "Single Estate", "Strong Brew"] },
  { id: "p38", slug: "ground-coffee", name: "Single Origin Coffee", category: "beverages", price: 449, mrp: 550, unit: "250 g", rating: 4.8, reviewCount: 288, image: bev4, description: "Arabica beans from Coorg, freshly ground for filter coffee.", features: ["Arabica", "Single Estate Coorg", "Medium Roast"] },
  { id: "p39", slug: "coconut-water", name: "Tender Coconut Water", category: "beverages", price: 99, mrp: 120, unit: "1 L", rating: 4.6, reviewCount: 188, image: bev5, description: "Pure tender coconut water — naturally sweet electrolytes.", features: ["No Added Sugar", "Electrolyte Rich", "Natural"] },
  { id: "p40", slug: "berry-smoothie", name: "Mixed Berry Smoothie", category: "beverages", price: 179, mrp: 220, unit: "500 ml", rating: 4.5, reviewCount: 124, image: bev6, description: "A blend of strawberry, blueberry and raspberry — chilled.", features: ["Real Fruit", "No Preservatives", "Vitamin Rich"] },

  // Daily Essentials
  { id: "p41", slug: "basmati-rice", name: "Aged Basmati Rice", category: "daily-essentials", price: 349, mrp: 420, unit: "5 kg", rating: 4.8, reviewCount: 612, image: ess1, description: "Long grain aged basmati — fragrant and fluffy.", features: ["Aged 24 Months", "Long Grain", "Premium Pack"] },
  { id: "p42", slug: "toor-dal", name: "Toor Dal (Split Pigeon Pea)", category: "daily-essentials", price: 189, mrp: 230, unit: "1 kg", rating: 4.7, reviewCount: 421, image: ess2, description: "Premium toor dal — the heart of every Indian thali.", features: ["Unpolished", "Sortex Cleaned", "Source of Protein"] },
  { id: "p43", slug: "sunflower-oil", name: "Cold Pressed Sunflower Oil", category: "daily-essentials", price: 269, mrp: 320, unit: "1 L", rating: 4.7, reviewCount: 388, image: ess3, description: "Heart-healthy sunflower oil, cold pressed for purity.", features: ["Cold Pressed", "No Cholesterol", "Heart Healthy"] },
  { id: "p44", slug: "rock-salt", name: "Pink Himalayan Rock Salt", category: "daily-essentials", price: 99, mrp: 130, unit: "500 g", rating: 4.6, reviewCount: 244, image: ess4, description: "Natural pink salt with trace minerals.", features: ["Unrefined", "Mineral Rich", "Stone Ground"] },
  { id: "p45", slug: "wheat-atta", name: "Sharbati Wheat Atta", category: "daily-essentials", price: 359, mrp: 420, unit: "5 kg", rating: 4.7, reviewCount: 512, image: ess5, description: "Stone-ground sharbati wheat flour — soft rotis every time.", features: ["Stone Ground", "Sharbati Wheat", "High Fibre"] },
  { id: "p46", slug: "spice-set", name: "Whole Spice Starter Set", category: "daily-essentials", price: 449, mrp: 580, unit: "6 pc set", rating: 4.8, reviewCount: 178, image: ess6, description: "Six essential whole spices in resealable jars.", features: ["6-jar Pack", "Whole Spices", "Resealable Jars"] },

  // Bakery
  { id: "p47", slug: "sourdough-loaf", name: "Sourdough Loaf", category: "bakery", price: 199, mrp: 240, unit: "500 g", rating: 4.8, reviewCount: 168, image: bakery1, description: "Slow fermented sourdough with a crisp golden crust.", features: ["48-hr Fermented", "Hand Shaped", "Wild Yeast"] },
  { id: "p48", slug: "butter-croissant", name: "Butter Croissants", category: "bakery", price: 159, mrp: 200, unit: "4 pcs", rating: 4.7, reviewCount: 142, image: bakery2, description: "Flaky French croissants made with European butter.", features: ["French Butter", "Hand Laminated", "Bake Fresh Daily"] },
  { id: "p49", slug: "chocolate-muffins", name: "Chocolate Muffins", category: "bakery", price: 179, mrp: 220, unit: "6 pcs", rating: 4.6, reviewCount: 198, image: bakery3, description: "Moist chocolate muffins loaded with dark chocolate chunks.", features: ["Real Cocoa", "Eggless Option", "Bakery Fresh"] },
  { id: "p50", slug: "multigrain-loaf", name: "Multigrain Bread Loaf", category: "bakery", price: 129, mrp: 160, unit: "400 g", rating: 4.7, reviewCount: 256, image: bakery4, description: "Hearty multigrain loaf packed with seeds.", features: ["7 Grains", "High Fibre", "No Maida"] },
  { id: "p51", slug: "oat-cookies", name: "Oat & Honey Cookies", category: "bakery", price: 149, mrp: 180, unit: "200 g", rating: 4.6, reviewCount: 124, image: bakery5, description: "Chewy oat cookies sweetened with raw honey.", features: ["Raw Honey", "Whole Oats", "No Preservatives"] },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
