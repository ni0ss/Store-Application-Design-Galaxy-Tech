// ═══════════════════════════════════════════════
//  Galaxy Tech — app.js
// ═══════════════════════════════════════════════

// ── DATA STRUCTURES ─────────────────────────────

// Categories Array
const categories = [
  { id: 'all',         icon: '🏪', nameAr: 'كل المنتجات',    nameEn: 'All Products'   },
  { id: 'phones',      icon: '📱', nameAr: 'هواتف ذكية',     nameEn: 'Smartphones'    },
  { id: 'laptops',     icon: '💻', nameAr: 'حواسيب',          nameEn: 'Laptops'        },
  { id: 'audio',       icon: '🎧', nameAr: 'صوت وسماعات',    nameEn: 'Audio'          },
  { id: 'gaming',      icon: '🎮', nameAr: 'ألعاب',           nameEn: 'Gaming'         },
  { id: 'accessories', icon: '⌚', nameAr: 'إكسسوارات',      nameEn: 'Accessories'    }
];

// Products Array (Array of Objects)
const products = [
  // Phones
  { id:1,  catId:'phones',      nameAr:'آيفون 16 Pro Max',         nameEn:'iPhone 16 Pro Max',        descAr:'شاشة 6.9 بوصة، A18 Pro، كاميرا 48MP',         descEn:'6.9" display, A18 Pro, 48MP camera',         price:4299, icon:'📱', hot:true,  sale:false },
  { id:2,  catId:'phones',      nameAr:'سامسونج S24 Ultra',         nameEn:'Samsung S24 Ultra',         descAr:'شاشة 6.8 بوصة، Snapdragon 8 Gen 3',           descEn:'6.8" display, Snapdragon 8 Gen 3',           price:3799, icon:'📱', hot:false, sale:true  },
  { id:3,  catId:'phones',      nameAr:'بيكسل 9 Pro',               nameEn:'Pixel 9 Pro',               descAr:'شاشة 6.3 بوصة، Tensor G4، 50MP',              descEn:'6.3" display, Tensor G4, 50MP',              price:2999, icon:'📱', hot:false, sale:false },
  { id:4,  catId:'phones',      nameAr:'ون بلس 13',                 nameEn:'OnePlus 13',                descAr:'شاشة 6.82 بوصة، Snapdragon 8 Elite',          descEn:'6.82" display, Snapdragon 8 Elite',          price:2299, icon:'📱', hot:false, sale:false },
  // Laptops
  { id:5,  catId:'laptops',     nameAr:'ماك بوك برو M4',            nameEn:'MacBook Pro M4',            descAr:'شاشة 14 بوصة، Apple M4، 16GB RAM',            descEn:'14" display, Apple M4, 16GB RAM',            price:6499, icon:'💻', hot:true,  sale:false },
  { id:6,  catId:'laptops',     nameAr:'ديل XPS 15',                nameEn:'Dell XPS 15',               descAr:'Core i9، RTX 4070، OLED 4K',                  descEn:'Core i9, RTX 4070, OLED 4K',                 price:5299, icon:'💻', hot:false, sale:false },
  { id:7,  catId:'laptops',     nameAr:'لينوفو ثينك باد X1',        nameEn:'ThinkPad X1 Carbon',        descAr:'Ultra 7، 32GB، SSD 1TB',                      descEn:'Ultra 7, 32GB, 1TB SSD',                     price:4499, icon:'💻', hot:false, sale:true  },
  { id:8,  catId:'laptops',     nameAr:'آسوس ROG Zephyrus',         nameEn:'ASUS ROG Zephyrus',         descAr:'Ryzen 9، RTX 4080، 240Hz',                    descEn:'Ryzen 9, RTX 4080, 240Hz',                   price:5899, icon:'💻', hot:false, sale:false },
  // Audio
  { id:9,  catId:'audio',       nameAr:'سوني WH-1000XM6',           nameEn:'Sony WH-1000XM6',           descAr:'أفضل إلغاء ضوضاء، 40 ساعة',                  descEn:'Best ANC, 40hr battery',                     price:1399, icon:'🎧', hot:true,  sale:false },
  { id:10, catId:'audio',       nameAr:'آبل AirPods Pro 3',         nameEn:'AirPods Pro 3',             descAr:'صوت Spatial، ANC متطور',                       descEn:'Spatial Audio, Advanced ANC',                price:1099, icon:'🎧', hot:false, sale:false },
  { id:11, catId:'audio',       nameAr:'بوز QuietComfort 55',       nameEn:'Bose QC55',                 descAr:'صوت احترافي، مريح للغاية',                    descEn:'Professional sound, ultra comfortable',      price:1249, icon:'🎧', hot:false, sale:true  },
  { id:12, catId:'audio',       nameAr:'سماعة JBL Flip 7',          nameEn:'JBL Flip 7',                descAr:'مقاوم للماء، باس عميق، 16 ساعة',              descEn:'Waterproof, deep bass, 16hr',                price:499,  icon:'🔊', hot:false, sale:false },
  // Gaming
  { id:13, catId:'gaming',      nameAr:'بلايستيشن 5 Pro',           nameEn:'PlayStation 5 Pro',         descAr:'8K، 240fps، SSD 2TB',                         descEn:'8K gaming, 240fps, 2TB SSD',                 price:2299, icon:'🎮', hot:true,  sale:false },
  { id:14, catId:'gaming',      nameAr:'Xbox Series X',             nameEn:'Xbox Series X',             descAr:'4K 120fps، Game Pass Ultimate',                descEn:'4K 120fps, Game Pass Ultimate',              price:1999, icon:'🎮', hot:false, sale:false },
  { id:15, catId:'gaming',      nameAr:'نيو Razer BlackWidow',      nameEn:'Razer BlackWidow V4',       descAr:'مفاتيح ميكانيكية، RGB Chroma',                descEn:'Mechanical switches, RGB Chroma',            price:649,  icon:'⌨️', hot:false, sale:false },
  { id:16, catId:'gaming',      nameAr:'شاشة Samsung Odyssey G9',   nameEn:'Samsung Odyssey G9',        descAr:'49 بوصة منحنية، 240Hz، 1ms',                  descEn:'49" curved, 240Hz, 1ms',                     price:3299, icon:'🖥️', hot:false, sale:true  },
  // Accessories
  { id:17, catId:'accessories', nameAr:'أبل ووتش Series 10',        nameEn:'Apple Watch Series 10',     descAr:'صحة متقدمة، شاشة OLED',                       descEn:'Advanced health, OLED display',              price:1699, icon:'⌚', hot:true,  sale:false },
  { id:18, catId:'accessories', nameAr:'سامسونج Galaxy Watch 7',    nameEn:'Galaxy Watch 7',            descAr:'نيو Exynos W1000، بطارية 3 أيام',             descEn:'Exynos W1000, 3-day battery',                price:1299, icon:'⌚', hot:false, sale:false },
  { id:19, catId:'accessories', nameAr:'شاحن MagSafe 30W',          nameEn:'MagSafe 30W Charger',       descAr:'شحن مغناطيسي سريع، متوافق iPhone',            descEn:'Fast magnetic charge, iPhone compatible',    price:299,  icon:'🔋', hot:false, sale:false },
  { id:20, catId:'accessories', nameAr:'حقيبة برايمكاس الذكية',    nameEn:'PrimeCase Smart Bag',       descAr:'شحن لاسلكي، قفل بصمة',                        descEn:'Wireless charging, fingerprint lock',        price:749,  icon:'🎒', hot:false, sale:true  }
];

// ── STATE ────────────────────────────────────────

let cart        = new Map();  // Map: productId → quantity
let currentCat  = 'all';
let currentLang = 'ar';
let sortMode    = 'default';
let isDark      = true;       // theme state

// ── TRANSLATIONS ─────────────────────────────────

const T = {
  ar: {
    logoSub:    'متجر الإلكترونيات',
    heroBadge:  '✦ أحدث المنتجات التقنية',
    heroLine1:  'عالم التقنية',
    heroLine2:  'بين يديك',
    heroDesc:   'اكتشف أحدث الأجهزة الإلكترونية والهواتف الذكية والحواسيب بأسعار تنافسية',
    stat1: 'منتج متاح', stat2: 'فئات متنوعة', stat3: 'دعم فني',
    sidebarTitle: 'التصنيفات',
    cartLabel: 'السلة', cartTitle: '🛒 سلة التسوق',
    addBtn: 'أضف إلى السلة', addedBtn: '✓ تمت الإضافة',
    sar: 'ر.س', hot: '🔥 الأكثر مبيعاً', sale: 'خصم',
    productsTitle: (cat) => cat === 'all' ? 'كل المنتجات' : categories.find(c => c.id === cat)?.nameAr,
    productsCount: (n)   => `${n} منتج`,
    subtotal: 'المجموع الفرعي', tax: 'ضريبة القيمة المضافة (15%)', total: 'الإجمالي',
    checkout: 'إتمام الطلب', clearCart: 'إفراغ السلة',
    emptyCart: 'السلة فارغة', emptyDesc: 'أضف منتجات لتراها هنا',
    modalTitle: 'تم الطلب بنجاح! 🎉', modalDesc: 'شكراً لتسوقك معنا. سيتم معالجة طلبك قريباً.',
    modalBtn: 'متابعة التسوق', orderNum: 'رقم الطلب', items: 'المنتجات',
    sortDef: 'الترتيب الافتراضي', sortPasc: 'السعر: من الأقل', sortPdesc: 'السعر: من الأعلى', sortName: 'حسب الاسم',
    themeBtn: '☀️', // icon when currently dark (click → go light)
    toastAdded:   (n) => `تمت إضافة "${n}" إلى السلة ✓`,
    toastRemoved: 'تم حذف المنتج',
    toastCleared: 'تم إفراغ السلة',
    toastOrder:   'تم تأكيد طلبك بنجاح! 🎉',
    toastLight:   '☀️ تم التبديل إلى المظهر الفاتح',
    toastDark:    '🌙 تم التبديل إلى المظهر الداكن'
  },
  en: {
    logoSub:    'Electronics Store',
    heroBadge:  '✦ Latest Tech Products',
    heroLine1:  'Tech World',
    heroLine2:  'In Your Hands',
    heroDesc:   'Discover the latest electronics, smartphones and computers at competitive prices',
    stat1: 'Products Available', stat2: 'Categories', stat3: 'Support 24/7',
    sidebarTitle: 'Categories',
    cartLabel: 'Cart', cartTitle: '🛒 Shopping Cart',
    addBtn: 'Add to Cart', addedBtn: '✓ Added',
    sar: 'SAR', hot: '🔥 Best Seller', sale: 'Sale',
    productsTitle: (cat) => cat === 'all' ? 'All Products' : categories.find(c => c.id === cat)?.nameEn,
    productsCount: (n)   => `${n} products`,
    subtotal: 'Subtotal', tax: 'VAT (15%)', total: 'Total',
    checkout: 'Checkout', clearCart: 'Clear Cart',
    emptyCart: 'Cart is Empty', emptyDesc: 'Add products to see them here',
    modalTitle: 'Order Placed! 🎉', modalDesc: 'Thank you for shopping with us. Your order will be processed soon.',
    modalBtn: 'Continue Shopping', orderNum: 'Order #', items: 'Items',
    sortDef: 'Default Sort', sortPasc: 'Price: Low to High', sortPdesc: 'Price: High to Low', sortName: 'By Name',
    themeBtn: '☀️',
    toastAdded:   (n) => `"${n}" added to cart ✓`,
    toastRemoved: 'Product removed',
    toastCleared: 'Cart cleared',
    toastOrder:   'Order confirmed successfully! 🎉',
    toastLight:   '☀️ Switched to light mode',
    toastDark:    '🌙 Switched to dark mode'
  }
};

const t = () => T[currentLang];

// ── THEME ────────────────────────────────────────

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle('light', !isDark);
  document.getElementById('theme-btn').textContent = isDark ? '☀️' : '🌙';
  showToast(isDark ? t().toastDark : t().toastLight);
  localStorage.setItem('gt-theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  const saved = localStorage.getItem('gt-theme');
  if (saved === 'light') { isDark = false; document.documentElement.classList.add('light'); }
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// ── RENDER ───────────────────────────────────────

function render() {
  renderCategories();
  renderProducts();
  renderCart();
  updateTexts();
}

function updateTexts() {
  const tx = t();
  const ids = {
    'logo-sub': tx.logoSub, 'hero-badge': tx.heroBadge,
    'hero-line1': tx.heroLine1, 'hero-line2': tx.heroLine2,
    'hero-desc': tx.heroDesc,
    'stat1': tx.stat1, 'stat2': tx.stat2, 'stat3': tx.stat3,
    'sidebar-title': tx.sidebarTitle,
    'cart-label': tx.cartLabel, 'cart-title': tx.cartTitle,
    'sort-def': tx.sortDef, 'sort-pasc': tx.sortPasc,
    'sort-pdesc': tx.sortPdesc, 'sort-name': tx.sortName
  };
  Object.entries(ids).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  document.documentElement.dir  = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
}

function renderCategories() {
  const list = document.getElementById('cat-list');
  list.innerHTML = categories.map(cat => {
    const count = cat.id === 'all'
      ? products.length
      : products.filter(p => p.catId === cat.id).length;
    const name = currentLang === 'ar' ? cat.nameAr : cat.nameEn;
    return `<div class="cat-item ${currentCat === cat.id ? 'active' : ''}" onclick="selectCat('${cat.id}')">
      <span class="cat-icon">${cat.icon}</span>
      <span>${name}</span>
      <span class="cat-count">${count}</span>
    </div>`;
  }).join('');
}

function renderProducts() {
  const tx = t();
  let filtered = currentCat === 'all'
    ? [...products]
    : products.filter(p => p.catId === currentCat);

  // ── Sort Algorithm ──
  if (sortMode === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
  if (sortMode === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortMode === 'name') {
    filtered.sort((a, b) => {
      const na = currentLang === 'ar' ? a.nameAr : a.nameEn;
      const nb = currentLang === 'ar' ? b.nameAr : b.nameEn;
      return na.localeCompare(nb);
    });
  }

  document.getElementById('products-title').textContent = tx.productsTitle(currentCat);
  document.getElementById('products-count').textContent = tx.productsCount(filtered.length);

  const grid = document.getElementById('products-grid');

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-products"><div class="big">🔍</div><div>لا توجد منتجات في هذه الفئة</div></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const name    = currentLang === 'ar' ? p.nameAr : p.nameEn;
    const desc    = currentLang === 'ar' ? p.descAr : p.descEn;
    const catName = currentLang === 'ar'
      ? categories.find(c => c.id === p.catId)?.nameAr
      : categories.find(c => c.id === p.catId)?.nameEn;
    const qty = cart.get(p.id) || 1;

    return `
    <div class="product-card">
      <div class="product-image">
        ${p.hot  ? `<div class="badge-hot">${tx.hot}</div>`  : ''}
        ${p.sale ? `<div class="badge-sale">${tx.sale}</div>` : ''}
        ${p.icon}
      </div>
      <div class="product-body">
        <div class="product-cat">${catName}</div>
        <div class="product-name">${name}</div>
        <div class="product-desc">${desc}</div>
        <div class="product-price">${p.price.toLocaleString()} <span>${tx.sar}</span></div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <input class="qty-val" type="number" min="1" max="99" value="${qty}" id="qty-${p.id}" onchange="setQty(${p.id}, this.value)">
          <button class="qty-btn" onclick="changeQty(${p.id}, +1)">+</button>
        </div>
        <button class="add-btn" id="add-${p.id}" onclick="addToCart(${p.id})">${tx.addBtn}</button>
      </div>
    </div>`;
  }).join('');
}

// ── CART LOGIC ───────────────────────────────────

function addToCart(id) {
  const qty      = parseInt(document.getElementById(`qty-${id}`)?.value) || 1;
  const existing = cart.get(id) || 0;
  cart.set(id, existing + qty);                      // Map.set()

  // Button feedback
  const btn = document.getElementById(`add-${id}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = t().addedBtn;
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = t().addBtn; }, 1800);
  }

  // Bounce cart count badge
  const cc = document.getElementById('cart-count');
  cc.classList.remove('bounce');
  void cc.offsetWidth;  // force reflow
  cc.classList.add('bounce');

  updateCartCount();
  renderCart();
  const name = currentLang === 'ar'
    ? products.find(p => p.id === id)?.nameAr
    : products.find(p => p.id === id)?.nameEn;
  showToast(t().toastAdded(name));
}

function updateCartCount() {
  let total = 0;
  cart.forEach(qty => total += qty);                  // Map.forEach()
  document.getElementById('cart-count').textContent = total;
}

// ── Total Price Calculation Algorithm ──
function calculateTotal() {
  let subtotal = 0;
  cart.forEach((qty, id) => {                         // Map.forEach()
    const product = products.find(p => p.id === id);
    if (product) subtotal += product.price * qty;
  });
  const tax   = subtotal * 0.15;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

function renderCart() {
  const tx     = t();
  const list   = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');

  if (cart.size === 0) {
    list.innerHTML   = `<div class="cart-empty"><div class="big-icon">🛒</div><strong>${tx.emptyCart}</strong><div>${tx.emptyDesc}</div></div>`;
    footer.innerHTML = `<button class="checkout-btn" disabled>${tx.checkout}</button>`;
    return;
  }

  let html = '';
  cart.forEach((qty, id) => {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    const name      = currentLang === 'ar' ? p.nameAr : p.nameEn;
    const lineTotal = p.price * qty;
    html += `
    <div class="cart-item" id="ci-${id}">
      <div class="ci-icon">${p.icon}</div>
      <div class="ci-info">
        <div class="ci-name">${name}</div>
        <div class="ci-price">${p.price.toLocaleString()} × ${qty} = <strong>${lineTotal.toLocaleString()} ${tx.sar}</strong></div>
      </div>
      <div class="ci-qty">
        <button class="ci-qty-btn" onclick="cartQty(${id}, -1)">−</button>
        <div class="ci-qty-num">${qty}</div>
        <button class="ci-qty-btn" onclick="cartQty(${id}, +1)">+</button>
      </div>
      <button class="ci-remove" onclick="removeFromCart(${id})" title="حذف">✕</button>
    </div>`;
  });
  list.innerHTML = html;

  const { subtotal, tax, total } = calculateTotal();
  footer.innerHTML = `
    <div class="cart-subtotal"><span>${tx.subtotal}</span><span>${subtotal.toLocaleString()} ${tx.sar}</span></div>
    <div class="cart-tax"><span>${tx.tax}</span><span>${tax.toLocaleString('ar-SA', { maximumFractionDigits: 0 })} ${tx.sar}</span></div>
    <div class="cart-total"><span>${tx.total}</span><span class="total-amount">${total.toLocaleString('ar-SA', { maximumFractionDigits: 0 })} ${tx.sar}</span></div>
    <button class="checkout-btn" onclick="checkout()">${tx.checkout}</button>
    <button class="clear-btn" onclick="clearCart()">${tx.clearCart}</button>`;
}

function cartQty(id, delta) {
  const current = cart.get(id) || 0;
  const newQty  = current + delta;
  if (newQty <= 0) { removeFromCart(id); return; }
  cart.set(id, newQty);
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart.delete(id);                                    // Map.delete()
  updateCartCount();
  renderCart();
  showToast(t().toastRemoved);
}

function clearCart() {
  cart.clear();                                       // Map.clear()
  updateCartCount();
  renderCart();
  showToast(t().toastCleared);
}

function checkout() {
  const tx = t();
  const { subtotal, tax, total } = calculateTotal();
  const orderNum = Math.floor(Math.random() * 90000) + 10000;
  let itemCount = 0;
  cart.forEach(q => itemCount += q);

  document.getElementById('modal-title').textContent = tx.modalTitle;
  document.getElementById('modal-desc').textContent  = tx.modalDesc;
  document.getElementById('modal-btn').textContent   = tx.modalBtn;

  document.getElementById('modal-summary').innerHTML = `
    <div class="order-row"><span>${tx.orderNum}</span><span style="font-family:var(--font-en)">#${orderNum}</span></div>
    <div class="order-row"><span>${tx.items}</span><span style="font-family:var(--font-en)">${itemCount}</span></div>
    <div class="order-row"><span>${tx.subtotal}</span><span style="font-family:var(--font-en)">${subtotal.toLocaleString()} ${tx.sar}</span></div>
    <div class="order-row"><span>${tx.tax}</span><span style="font-family:var(--font-en)">${tax.toLocaleString('ar-SA', { maximumFractionDigits: 0 })} ${tx.sar}</span></div>
    <div class="order-row total"><span>${tx.total}</span><span>${total.toLocaleString('ar-SA', { maximumFractionDigits: 0 })} ${tx.sar}</span></div>`;

  closeCart();
  document.getElementById('modal-overlay').classList.add('open');
  showToast(tx.toastOrder);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  cart.clear();
  updateCartCount();
  renderCart();
}

// ── UI CONTROLS ──────────────────────────────────

function selectCat(id) {
  currentCat = id;
  renderCategories();
  renderProducts();
}

function sortProducts() {
  sortMode = document.getElementById('sort-select').value;
  renderProducts();
}

function changeQty(id, delta) {
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1)  val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

function setQty(id, val) {
  const input = document.getElementById(`qty-${id}`);
  let v = parseInt(val);
  if (isNaN(v) || v < 1) v = 1;
  if (v > 99) v = 99;
  if (input) input.value = v;
}

function openCart() {
  renderCart();
  const overlay = document.getElementById('cart-overlay');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.style.opacity = '1');
  document.getElementById('cart-panel').style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  overlay.style.opacity = '0';
  document.getElementById('cart-panel').style.transform = 'translateX(-100%)';
  setTimeout(() => { overlay.style.display = 'none'; }, 350);
  document.body.style.overflow = '';
}

function outsideClick(e) {
  if (e.target === document.getElementById('cart-overlay')) closeCart();
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.getElementById('lang-btn').textContent = currentLang === 'ar' ? 'EN' : 'عربي';
  render();
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast     = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

// ── INIT ─────────────────────────────────────────
initTheme();
render();
