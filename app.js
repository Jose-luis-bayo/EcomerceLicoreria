/**
 * LICOFAST - Interactive E-Commerce & Management Platform
 * Client Script: Dynamic Catalog, Shopping Cart, Modals, Admin Demo & WhatsApp Dispatch
 */

// ==========================================
// 1. PRODUCTS DATA (Priced in Bs. Bolivianos)
// ==========================================
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Combo Fernet Branca 750ml + Coca-Cola 2L + Hielo',
    category: 'combos',
    price: 135,
    originalPrice: 155,
    volume: '750ml + 2 Litros',
    badge: 'Más Vendido 🔥',
    badgeType: 'amber',
    rating: 4.9,
    reviews: 142,
    image: 'imagenes/james-yarema-dSbxHp-o2M4-unsplash.jpg',
    description: 'El clásico combo fiestero. Incluye 1 botella de Fernet Branca italiana, 1 Coca-Cola bien fría de 2L y bolsa de hielo rolito de 2kg.'
  },
  {
    id: 'prod-2',
    name: 'Absolut Vodka Swedish Original (Ice Cold)',
    category: 'destilados',
    price: 110,
    originalPrice: 125,
    volume: '750ml • 40% Alc.',
    badge: 'Frío Garantizado ❄️',
    badgeType: 'purple',
    rating: 5.0,
    reviews: 98,
    image: 'imagenes/andrey-ilkevich-Daj8s0zVIFg-unsplash.jpg',
    description: 'Vodka prémium sueco destilado con trigo de invierno y agua de pozo profundo. Enviado con temperatura óptima para servir.'
  },
  {
    id: 'prod-3',
    name: 'Gin Artesanal Noteworthy New Western Dry',
    category: 'destilados',
    price: 175,
    originalPrice: 195,
    volume: '750ml • 43% Alc.',
    badge: 'Selección Exclusiva ✨',
    badgeType: 'emerald',
    rating: 4.9,
    reviews: 64,
    image: 'imagenes/zetong-li-ewZe8KPKIxw-unsplash.jpg',
    description: 'Ginebra artesanal botánica elaborada con enebro silvestre, notas cítricas y especias selectas. Ideal para Gin Tonic prémium.'
  },
  {
    id: 'prod-4',
    name: 'Cocktail Disco Shaker Special (Neon Green Mix)',
    category: 'combos',
    price: 95,
    originalPrice: 115,
    volume: 'Kit Cóctel + Shaker',
    badge: 'Edición Fiesta ⚡',
    badgeType: 'rose',
    rating: 4.9,
    reviews: 83,
    image: 'imagenes/kasey-kollross-eCiKxDegY6I-unsplash.jpg',
    description: 'Experiencia coctelera en casa: incluye mezcla cítrica fluorescente, licor base, vaso coctelero y garnish deshidratado.'
  },
  {
    id: 'prod-5',
    name: 'Trilogía Craft Cocktails (Mojito, Piña & Dragon Fruit)',
    category: 'combos',
    price: 85,
    originalPrice: 105,
    volume: '3x Copas Preparadas',
    badge: 'Combo 3x1 🍹',
    badgeType: 'amber',
    rating: 4.8,
    reviews: 110,
    image: 'imagenes/kobby-mendez-xBFTjrMIC0c-unsplash.jpg',
    description: 'Tres cócteles artesanales listos para servir: Mojito clásico con menta fresca, Sour tropical y Dragon Fruit infusion.'
  },
  {
    id: 'prod-6',
    name: 'Pack Mixers Fiestas (Coca Cola + Sprites + Red Bull)',
    category: 'mixers',
    price: 45,
    originalPrice: 55,
    volume: 'Pack 4 Latas + Hielo',
    badge: 'Super Heladas 🧊',
    badgeType: 'purple',
    rating: 4.9,
    reviews: 57,
    image: 'imagenes/james-yarema-dSbxHp-o2M4-unsplash.jpg',
    description: 'El complemento infaltable: 2 latas de Coca-Cola sabor original, 1 Sprite Zero y 1 lata energizante Red Bull, con bolsa de hielo.'
  },
  {
    id: 'prod-7',
    name: 'Whisky Johnnie Walker Black Label 12 Años',
    category: 'destilados',
    price: 230,
    originalPrice: 260,
    volume: '750ml • 40% Alc.',
    badge: 'Top Shelf 👑',
    badgeType: 'amber',
    rating: 5.0,
    reviews: 215,
    image: 'imagenes/nick-rickert-TUZva3dfRv4-unsplash.jpg',
    description: 'El ícono escocés blend de whiskies añejados un mínimo de 12 años. Notas ahumadas intensas, frutos secos y vainilla suave.'
  },
  {
    id: 'prod-8',
    name: 'Reserva Especial Bar Shelf (Licores & Aperitivos)',
    category: 'destilados',
    price: 190,
    originalPrice: 220,
    volume: 'Botella Selección 750ml',
    badge: 'Calidad Garantizada 🛡️',
    badgeType: 'emerald',
    rating: 4.8,
    reviews: 79,
    image: 'imagenes/adam-wilson-6UIonphZA5o-unsplash.jpg',
    description: 'Colección de botellas de bodega seleccionada de las mejores destilerías internacionales. 100% auténticos y sellados.'
  },
  {
    id: 'prod-9',
    name: 'Pack 6 Cerveza Huari Tradicional 354ml Heladas',
    category: 'cervezas',
    price: 55,
    originalPrice: 65,
    volume: '6x Latas 354ml',
    badge: 'Directo del Frío 🍺',
    badgeType: 'amber',
    rating: 4.9,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1608270199120-7521796d10ad?auto=format&fit=crop&w=700&q=80',
    description: 'La cerveza de origen boliviano con maltas nobles y agua de vertiente. Te la llevamos en cooler térmico a 3°C.'
  },
  {
    id: 'prod-10',
    name: 'Ron Flor de Caña 12 Años Gran Reserva',
    category: 'destilados',
    price: 165,
    originalPrice: 185,
    volume: '750ml • 40% Alc.',
    badge: 'Añejado Natural 🥃',
    badgeType: 'purple',
    rating: 4.9,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=700&q=80',
    description: 'Ron ultra prémium añejado lentamente al pie de un volcán activo. Con aroma a frutos rojos, miel y roble tostado.'
  },
  {
    id: 'prod-11',
    name: 'Vino Tinto Malbec Gran Reserva 750ml',
    category: 'cervezas',
    price: 85,
    originalPrice: 100,
    volume: '750ml • Valle Central',
    badge: 'Cepa Noble 🍷',
    badgeType: 'rose',
    rating: 4.8,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
    description: 'Vino tinto de cuerpo entero, taninos aterciopelados y final prolongado. El maridaje perfecto para cenas o brindis.'
  },
  {
    id: 'prod-12',
    name: 'Tequila Don Julio Reposado 100% Agave Azul',
    category: 'destilados',
    price: 380,
    originalPrice: 420,
    volume: '700ml • 38% Alc.',
    badge: 'Top Shelf Diamante 💎',
    badgeType: 'amber',
    rating: 5.0,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    description: 'Tequila prémium reposado 8 meses en barricas de roble blanco americano. Notas de chocolate negro, canela y vainilla.'
  }
];

// ==========================================
// 2. STATE & CART PERSISTENCE
// ==========================================
let cart = [];
let currentCategory = 'todos';
let searchQuery = '';

// Load initial cart from LocalStorage
try {
  const savedCart = localStorage.getItem('licofast_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn('LocalStorage error loading cart:', e);
}

function saveCart() {
  try {
    localStorage.setItem('licofast_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('LocalStorage error saving cart:', e);
  }
  updateCartBadges();
  renderCartDrawer();
}

// ==========================================
// 3. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message, icon = '🍾') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="text-lg">${icon}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

// ==========================================
// 4. CATALOG RENDERING & FILTERING
// ==========================================
function renderCatalog() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS.filter(prod => {
    const matchesCategory = (currentCategory === 'todos' || prod.category === currentCategory);
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center glass-panel rounded-2xl p-8 border border-white/10">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No se encontraron licores</h3>
        <p class="text-gray-400 text-sm max-w-md mx-auto mb-6">No encontramos productos que coincidan con "${searchQuery}". Prueba con "fernet", "vodka", "cerveza" o revisa nuestras categorías.</p>
        <button onclick="resetFilters()" class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition">
          Ver Todo el Catálogo
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    // Badge color class mapping
    let badgeClass = 'badge-neon-amber';
    if (prod.badgeType === 'purple') badgeClass = 'badge-neon-purple';
    if (prod.badgeType === 'emerald') badgeClass = 'badge-neon-emerald';
    if (prod.badgeType === 'rose') badgeClass = 'badge-neon-rose';

    return `
      <div class="group glass-panel rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_12px_30px_-10px_rgba(168,85,247,0.25)] hover:-translate-y-1 relative" data-prod-id="${prod.id}">
        <!-- Image Container -->
        <div class="relative w-full h-56 overflow-hidden bg-black/40">
          <img 
            src="${prod.image}" 
            alt="${prod.name}" 
            loading="lazy"
            class="w-full h-full object-cover card-img-zoom brightness-90 group-hover:brightness-105"
            onerror="this.src='https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80"></div>
          
          <!-- Badges -->
          <div class="absolute top-3 left-3 z-10">
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeClass} backdrop-blur-md">
              ${prod.badge}
            </span>
          </div>

          <div class="absolute top-3 right-3 z-10">
            <span class="px-2 py-0.5 rounded-lg text-xs font-medium bg-black/60 border border-white/10 text-gray-300 backdrop-blur-md">
              ${prod.volume}
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Rating & Category -->
            <div class="flex items-center justify-between text-xs mb-2 text-gray-400">
              <span class="flex items-center gap-1 text-amber-400 font-medium">
                ★ <span>${prod.rating}</span> <span class="text-gray-500">(${prod.reviews})</span>
              </span>
              <span class="uppercase font-semibold tracking-wider text-[10px] text-purple-400">
                ${prod.category}
              </span>
            </div>

            <!-- Product Title -->
            <h3 class="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5 leading-snug">
              ${prod.name}
            </h3>

            <!-- Description -->
            <p class="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
              ${prod.description}
            </p>
          </div>

          <!-- Price & Actions -->
          <div class="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
            <div>
              <div class="text-[11px] text-gray-400">Precio Oferta</div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-lg font-extrabold text-amber-400">Bs. ${prod.price}</span>
                ${prod.originalPrice ? `<span class="text-xs text-gray-500 line-through">Bs. ${prod.originalPrice}</span>` : ''}
              </div>
            </div>

            <button 
              onclick="addToCart('${prod.id}')" 
              class="btn-shimmer flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-purple-900/30 transition-all active:scale-95 whitespace-nowrap"
              title="Agregar al carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Pedir</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  currentCategory = 'todos';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.remove('bg-purple-600', 'text-white', 'border-purple-400');
    btn.classList.add('bg-white/5', 'text-gray-300', 'border-white/10');
    if (btn.dataset.category === 'todos') {
      btn.classList.add('bg-purple-600', 'text-white', 'border-purple-400');
      btn.classList.remove('bg-white/5', 'text-gray-300');
    }
  });

  renderCatalog();
}

// Category filter button listener
function setupCategoryFilters() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('bg-purple-600', 'text-white', 'border-purple-400', 'shadow-purple-500/25');
        p.classList.add('bg-white/5', 'text-gray-300', 'border-white/10');
      });
      pill.classList.add('bg-purple-600', 'text-white', 'border-purple-400', 'shadow-purple-500/25');
      pill.classList.remove('bg-white/5', 'text-gray-300', 'border-white/10');

      currentCategory = pill.dataset.category || 'todos';
      renderCatalog();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }
}

// ==========================================
// 5. SHOPPING CART OPERATIONS
// ==========================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      volume: product.volume,
      qty: qty
    });
  }

  saveCart();
  showToast(`¡Agregado: ${product.name}!`, '🛒');

  // Trigger brief bounce animation on cart buttons
  animateCartButtons();
}

function updateCartQty(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
    showToast('Producto retirado del carrito', '🗑️');
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Producto eliminado', '🗑️');
}

function clearCart() {
  cart = [];
  saveCart();
  showToast('Carrito vaciado', '✨');
}

function updateCartBadges() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Update navbar badge
  const navBadge = document.getElementById('nav-cart-badge');
  if (navBadge) {
    navBadge.textContent = totalCount;
    navBadge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  // Update floating button badge
  const floatBadge = document.getElementById('float-cart-badge');
  const floatTotal = document.getElementById('float-cart-total');
  const floatContainer = document.getElementById('floating-cart-btn');

  if (floatBadge) floatBadge.textContent = totalCount;
  if (floatTotal) floatTotal.textContent = `Bs. ${totalAmount}`;
  if (floatContainer) {
    if (totalCount > 0) {
      floatContainer.classList.remove('translate-y-24', 'opacity-0');
      floatContainer.classList.add('translate-y-0', 'opacity-100');
    } else {
      floatContainer.classList.add('translate-y-24', 'opacity-0');
      floatContainer.classList.remove('translate-y-0', 'opacity-100');
    }
  }
}

function animateCartButtons() {
  const btn = document.getElementById('floating-cart-btn');
  if (btn) {
    btn.classList.add('scale-110');
    setTimeout(() => btn.classList.remove('scale-110'), 200);
  }
  const navBtn = document.getElementById('nav-cart-btn');
  if (navBtn) {
    navBtn.classList.add('scale-110');
    setTimeout(() => navBtn.classList.remove('scale-110'), 200);
  }
}

// ==========================================
// 6. CART DRAWER RENDERING
// ==========================================
function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalElem = document.getElementById('cart-subtotal');
  const deliveryElem = document.getElementById('cart-delivery');
  const totalElem = document.getElementById('cart-total');
  const emptyState = document.getElementById('cart-empty-state');
  const footerElem = document.getElementById('cart-footer');

  if (!itemsContainer) return;

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  // Delivery promo: Free delivery over Bs. 150, else Bs. 15
  const deliveryFee = subtotal >= 150 || subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;

  if (totalCount === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (footerElem) footerElem.classList.add('hidden');
    itemsContainer.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footerElem) footerElem.classList.remove('hidden');

  itemsContainer.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition">
      <img 
        src="${item.image}" 
        alt="${item.name}" 
        class="w-16 h-16 rounded-lg object-cover bg-black/40 flex-shrink-0"
        onerror="this.src='https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=200&q=80'"
      />
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-semibold text-white truncate">${item.name}</h4>
        <div class="text-xs text-gray-400 mb-1.5">${item.volume || 'Presentación oficial'}</div>
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-amber-400">Bs. ${item.price * item.qty}</span>
          
          <!-- Stepper -->
          <div class="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-2 py-0.5">
            <button onclick="updateCartQty('${item.id}', -1)" class="text-gray-400 hover:text-white text-xs px-1 font-bold">-</button>
            <span class="text-xs font-semibold text-white px-1.5">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" class="text-gray-400 hover:text-white text-xs px-1 font-bold">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeFromCart('${item.id}')" class="text-gray-500 hover:text-red-400 transition p-1" title="Eliminar">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  `).join('');

  if (subtotalElem) subtotalElem.textContent = `Bs. ${subtotal}`;
  if (deliveryElem) {
    if (deliveryFee === 0) {
      deliveryElem.innerHTML = `<span class="text-emerald-400 font-bold">¡GRATIS! ⚡</span>`;
    } else {
      deliveryElem.textContent = `Bs. ${deliveryFee}`;
    }
  }
  if (totalElem) totalElem.textContent = `Bs. ${grandTotal}`;

  // Delivery progress bar towards free delivery (Bs. 150)
  const promoNotice = document.getElementById('cart-delivery-promo');
  if (promoNotice) {
    if (subtotal >= 150) {
      promoNotice.innerHTML = `
        <div class="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
          <span>🎉</span> ¡Genial! Tu pedido califica para <strong>Envío Express Gratis</strong>.
        </div>
      `;
    } else {
      const remaining = 150 - subtotal;
      promoNotice.innerHTML = `
        <div class="text-xs text-amber-300">
          Agrega <strong>Bs. ${remaining}</strong> más para obtener <strong>Envío Gratis</strong> 🛵
        </div>
      `;
    }
  }
}

// Drawer visibility toggle
function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-drawer-panel');
  if (drawer && panel) {
    drawer.classList.remove('pointer-events-none');
    drawer.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const panel = document.getElementById('cart-drawer-panel');
  if (drawer && panel) {
    drawer.classList.remove('active');
    panel.classList.remove('active');
    setTimeout(() => {
      drawer.classList.add('pointer-events-none');
      document.body.style.overflow = '';
    }, 300);
  }
}

// ==========================================
// 7. CHECKOUT & WHATSAPP ORDER BUILDER
// ==========================================
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('El carrito está vacío', '⚠️');
    return;
  }

  const addressInput = document.getElementById('checkout-address');
  const paymentSelect = document.getElementById('checkout-payment');
  const notesInput = document.getElementById('checkout-notes');

  const address = addressInput && addressInput.value.trim() ? addressInput.value.trim() : 'Coordinar por WhatsApp / Enviar ubicación actual';
  const payment = paymentSelect ? paymentSelect.value : 'Pago con QR Simple';
  const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : 'Ninguna';

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryFee = subtotal >= 150 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;

  let message = `¡Hola *LicoFast*! 🍾 Quiero realizar un pedido express:\n\n`;
  message += `📦 *DETALLE DEL PEDIDO:*\n`;
  cart.forEach(item => {
    message += `• ${item.qty}x ${item.name} - Bs. ${item.price * item.qty}\n`;
  });

  message += `\n💵 *Subtotal:* Bs. ${subtotal}\n`;
  message += `🛵 *Envío:* ${deliveryFee === 0 ? 'GRATIS (Promoción > Bs. 150)' : 'Bs. 15'}\n`;
  message += `💰 *TOTAL A PAGAR: Bs. ${grandTotal}*\n\n`;
  message += `📍 *Dirección de Entrega:* ${address}\n`;
  message += `💳 *Método de Pago:* ${payment}\n`;
  message += `📝 *Notas:* ${notes}\n\n`;
  message += `⚡ _Por favor confirmen tiempo estimado de llegada._`;

  const phone = '59170000000'; // Default Bolivia LicoFast Hotline
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Celebrate with confetti
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  showToast('Generando pedido en WhatsApp...', '🚀');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 400);
}

// ==========================================
// 8. AUTHENTICATION & LOGIN MODALS
// ==========================================
function openAuthModal(initialTab = 'client') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;

  switchAuthTab(initialTab);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  const clientTabBtn = document.getElementById('tab-btn-client');
  const adminTabBtn = document.getElementById('tab-btn-admin');
  const clientForm = document.getElementById('auth-form-client');
  const adminForm = document.getElementById('auth-form-admin');

  if (tab === 'client') {
    clientTabBtn?.classList.add('text-white', 'border-purple-500', 'bg-white/10');
    clientTabBtn?.classList.remove('text-gray-400', 'border-transparent', 'bg-transparent');
    adminTabBtn?.classList.remove('text-white', 'border-amber-500', 'bg-white/10');
    adminTabBtn?.classList.add('text-gray-400', 'border-transparent', 'bg-transparent');

    clientForm?.classList.remove('hidden');
    adminForm?.classList.add('hidden');
  } else {
    adminTabBtn?.classList.add('text-white', 'border-amber-500', 'bg-white/10');
    adminTabBtn?.classList.remove('text-gray-400', 'border-transparent', 'bg-transparent');
    clientTabBtn?.classList.remove('text-white', 'border-purple-500', 'bg-white/10');
    clientTabBtn?.classList.add('text-gray-400', 'border-transparent', 'bg-transparent');

    adminForm?.classList.remove('hidden');
    clientForm?.classList.add('hidden');
  }
}

function handleClientLogin(e) {
  e.preventDefault();
  const phone = document.getElementById('client-phone')?.value;
  showToast(`¡Bienvenido! Sesión iniciada con +591 ${phone || ''}`, '🎉');
  closeAuthModal();
}

function handleAdminLogin(e) {
  e.preventDefault();
  showToast('Acceso Administrador verificado. Cargando panel...', '🔑');
  closeAuthModal();
  setTimeout(() => {
    openAdminDemoModal();
  }, 400);
}

// ==========================================
// 9. INTERACTIVE ADMIN DASHBOARD SIMULATION
// ==========================================
function openAdminDemoModal() {
  const modal = document.getElementById('admin-demo-modal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAdminDemoModal() {
  const modal = document.getElementById('admin-demo-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function simulateQuickPosSale() {
  const revenueElem = document.getElementById('admin-kpi-revenue');
  const ordersElem = document.getElementById('admin-kpi-orders');

  let currentRev = 3480;
  let currentOrders = 28;

  if (revenueElem) {
    currentRev = parseInt(revenueElem.innerText.replace(/\D/g, '')) || 3480;
    currentRev += 135;
    revenueElem.innerText = `Bs. ${currentRev.toLocaleString()}`;
  }

  if (ordersElem) {
    currentOrders = parseInt(ordersElem.innerText) || 28;
    currentOrders += 1;
    ordersElem.innerText = currentOrders;
  }

  showToast('¡Venta de mostrador registrada con éxito en Caja (+Bs. 135)!', '💵');
}

function simulateStockRestock() {
  const stockElem = document.getElementById('admin-stock-sample');
  if (stockElem) {
    let count = parseInt(stockElem.innerText) || 4;
    count += 12;
    stockElem.innerText = `${count} botellas`;
    showToast('Reposición de stock exitosa (+12 botellas Fernet Branca)', '📦');
  }
}

// ==========================================
// 10. AGE VERIFICATION MODAL (18+ COMPLIANCE)
// ==========================================
function checkAgeVerification() {
  const verified = localStorage.getItem('licofast_age_verified');
  const modal = document.getElementById('age-modal');
  if (!verified && modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function confirmAge(isAdult) {
  const modal = document.getElementById('age-modal');
  if (isAdult) {
    localStorage.setItem('licofast_age_verified', 'true');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    showToast('¡Bienvenido a LicoFast! 🍾', '🥂');
  } else {
    alert('Lo sentimos. El acceso a LicoFast está restringido a mayores de 18 años conforme a la Ley N° 259 de Control al Expendio y Consumo de Bebidas Alcohólicas.');
    window.location.href = 'https://www.google.com';
  }
}

// ==========================================
// 11. MOBILE MENU DRAWER
// ==========================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// ==========================================
// 12. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupCategoryFilters();
  updateCartBadges();
  renderCartDrawer();
  checkAgeVerification();

  // Close modals on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeAuthModal();
      closeAdminDemoModal();
    }
  });

  // Modal backdrop click handlers
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});
