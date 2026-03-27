const pieces = [
  {
    id: 'arlekino-necklace',
    name: 'Ожерелье «Арлекино»',
    price: '2 590 ₽',
    priceValue: 2590,
    category: 'necklaces',
    palette: 'night',
    mood: 'bold',
    tags: ['готовое', 'драматичный стиль', 'ручная сборка'],
    image: '/assets/photo_2026-03-27_10.49.21-b328b376-810e-40a2-b151-185b74ba4fe2.png',
    images: ['/assets/photo_2026-03-27_10.49.21-b328b376-810e-40a2-b151-185b74ba4fe2.png'],
    accent: false
  },
  {
    id: 'hair-clips-bow-star',
    name: 'Заколки в любом цвете (бантик или звездочка)',
    price: '290 ₽',
    priceValue: 290,
    category: 'hair-clips',
    palette: 'day',
    mood: 'bright',
    tags: ['кастом цвет', 'бантик или звездочка', 'ручная сборка'],
    image: '/assets/photo_2026-03-27_10.48.27-9554581c-5318-4384-b1fa-a37988a0b5c0.png',
    images: [
      '/assets/photo_2026-03-27_10.48.27-9554581c-5318-4384-b1fa-a37988a0b5c0.png',
      '/assets/photo_2026-03-27_10.48.26-fe84d429-66c8-490d-96b4-1deeed58f46b.png'
    ],
    accent: false
  },
  {
    id: 'strawberry-necklace',
    name: 'Ожерелье «Клубничка»',
    price: '1 490 ₽',
    priceValue: 1490,
    category: 'necklaces',
    palette: 'day',
    mood: 'bright',
    tags: ['готовое', 'ягодный стиль', 'ручная сборка'],
    image: '/assets/photo_2026-03-27_10.47.34-38dfe8bc-7f18-4e4d-8639-2217ebf0c84d.png',
    images: ['/assets/photo_2026-03-27_10.47.34-38dfe8bc-7f18-4e4d-8639-2217ebf0c84d.png'],
    accent: false
  },
  {
    id: 'butterfly-wire-inserts',
    name: 'Бабочка (с проволочными вставками)',
    price: '3 490 ₽',
    priceValue: 3490,
    category: 'necklaces',
    palette: 'day',
    mood: 'bright',
    tags: ['в любом цвете', 'натуральные камушки', 'на заказ'],
    note: 'Почти ничего не меняла — получился шедевр. Оригинал и повтор ушли за 2690 ₽ в первые минуты 🐱',
    image: '/assets/photo_2026-03-27_10.43.34-369cbca9-72d4-4c32-8d1c-e672d8f8f255.png',
    images: [
      '/assets/photo_2026-03-27_10.43.34-369cbca9-72d4-4c32-8d1c-e672d8f8f255.png',
      '/assets/photo_2026-03-27_10.43.35-d68725ed-e54d-4b52-b909-599f48c9719d.png',
      '/assets/photo_2026-03-27_10.43.36-b2565278-e58b-4c68-a38e-d8c9554820f6.png'
    ],
    accent: true
  },
  {
    id: 'custom-mens-necklace',
    name: 'Мужское (и не только) ожерелье на заказ',
    price: '1 290 ₽',
    priceValue: 1290,
    category: 'necklaces',
    palette: 'night',
    mood: 'bold',
    tags: ['на заказ', 'унисекс', 'минимализм'],
    note: 'Кастомная сборка: можно адаптировать длину, цепи и акценты под ваш стиль ❤️',
    image: '/assets/photo_2026-03-27_10.45.16-d265f256-1236-482f-9b8a-d054aa38f02f.png',
    images: [
      '/assets/photo_2026-03-27_10.45.16-d265f256-1236-482f-9b8a-d054aa38f02f.png',
      '/assets/photo_2026-03-27_10.45.14-a1823847-d127-4514-a26d-ae55709e0fb2.png',
      '/assets/photo_2026-03-27_10.45.15-145f154b-4881-4740-8ccf-4c0925af57d7.png'
    ],
    accent: false
  },
  {
    id: 'butterfly-fast-delivery',
    name: 'Ожерелье «Бабочка»',
    price: '5 590 ₽',
    priceValue: 5590,
    category: 'necklaces',
    palette: 'day',
    mood: 'bright',
    tags: ['в наличии', 'единственное', 'доставка 3–5 дней'],
    note: 'Супер быстрая доставка. Могу сделать в любом цвете и с любой вышивкой. Кастом: ожерелье от 5590 ₽, браслет от 1890 ₽, заколка от 4890 ₽.',
    image: '/assets/photo_2026-03-27_10.43.35-d68725ed-e54d-4b52-b909-599f48c9719d.png',
    images: [
      '/assets/photo_2026-03-27_10.43.35-d68725ed-e54d-4b52-b909-599f48c9719d.png',
      '/assets/photo_2026-03-27_10.43.38-4acda742-7e4b-49a2-8fa6-20a0b3a714d9.png',
      '/assets/photo_2026-03-27_10.43.36-b2565278-e58b-4c68-a38e-d8c9554820f6.png',
      '/assets/photo_2026-03-27_10.43.37-b54e7b3d-3888-4279-b879-9f7d5100210f.png',
      '/assets/photo_2026-03-27_10.43.34-369cbca9-72d4-4c32-8d1c-e672d8f8f255.png'
    ],
    accent: true
  },
  {
    id: 'acotar-corset-necklace',
    name: 'Корсетное ожерелье «Королевство шипов и роз»',
    price: '3 190 ₽',
    priceValue: 3190,
    category: 'necklaces',
    palette: 'night',
    mood: 'bold',
    tags: ['единственное в наличии', 'книжное вдохновение', 'готовое'],
    note: 'Не видела, чтобы кто-то такое делал — возможно, первые в мире 🐾',
    image: '/assets/photo_2026-03-27_10.41.26-13e79ea1-6531-4d8d-bccc-bf8b232b7d28.png',
    images: [
      '/assets/photo_2026-03-27_10.41.26-13e79ea1-6531-4d8d-bccc-bf8b232b7d28.png',
      '/assets/photo_2026-03-27_10.41.24-ad82f8d3-b6aa-4be8-bd82-09d1880792b2.png',
      '/assets/photo_2026-03-27_10.41.27-c95a92d5-2906-49c3-ae0b-a87c1c208b2e.png'
    ],
    accent: true
  },
  {
    id: 'stranger-things-choker',
    name: 'Колье «Stranger Things»',
    price: '4 690 ₽',
    priceValue: 4690,
    category: 'necklaces',
    palette: 'night',
    mood: 'bold',
    tags: ['единственное в наличии', 'нержавеющая сталь', 'редкое стекло'],
    note: 'Вдохновлено изнанкой. Новая стилистика, детальки из нержавеющей стали. За покупкой: @wiillliix',
    image: '/assets/photo_2026-03-27_10.39.50-7f19edb9-689a-44fa-b657-750a9f4bf46d.png',
    images: [
      '/assets/photo_2026-03-27_10.39.50-7f19edb9-689a-44fa-b657-750a9f4bf46d.png',
      '/assets/photo_2026-03-27_10.39.52-c4c28b5d-aad9-47d7-907e-49a9105b1f53.png',
      '/assets/photo_2026-03-27_10.39.53-d3e62e53-54f7-44b5-9418-a93972aee090.png',
      '/assets/photo_2026-03-27_10.39.54-76225f3a-1dd1-4213-aa58-c4eca1f5f2b0.png',
      '/assets/photo_2026-03-27_10.39.55-16f71b7b-f813-4f79-9359-03006a73a308.png',
      '/assets/photo_2026-03-27_10.39.56-90ca04e9-390d-476e-b871-7d154343dd81.png'
    ],
    accent: true
  },
  {
    id: 'winx-choker',
    name: 'Колье «Винкс»',
    price: '2 490 ₽',
    priceValue: 2490,
    category: 'necklaces',
    palette: 'day',
    mood: 'bright',
    tags: ['готовое', 'только на повтор', 'любой цвет'],
    note: 'Весенний бабочкарий открыт 🐾',
    image: '/assets/photo_2026-03-27_10.38.37-2c86bdba-e87c-4aa2-8d81-bc784f3e856f.png',
    images: [
      '/assets/photo_2026-03-27_10.38.37-2c86bdba-e87c-4aa2-8d81-bc784f3e856f.png',
      '/assets/photo_2026-03-27_10.38.40-b20942b1-f4b9-4351-a56a-f140f5621b1d.png',
      '/assets/photo_2026-03-27_10.38.41-dac15206-a0a9-4260-ad2f-2670d0b9083c.png'
    ],
    accent: true
  }
];

const grid = document.getElementById('collection-grid');
const moodboard = document.getElementById('moodboard-list');
const filterChips = [...document.querySelectorAll('.chip')];
const toggleModeBtn = document.getElementById('toggle-mode');
const sparkleBtn = document.getElementById('sparkle-btn');
const moodboardBtn = document.getElementById('moodboard-btn');
const heroCta = document.getElementById('hero-cta');
const lookbookCta = document.getElementById('lookbook-cta');
const pingBtn = document.getElementById('ping-btn');
const storyBtn = document.getElementById('story-btn');
const cartPanel = document.getElementById('cart-panel');
const cartCount = document.getElementById('cart-count');
const orderTotal = document.getElementById('order-total');
const checkoutForm = document.getElementById('checkout-form');
const cartToggle = document.getElementById('cart-toggle');
const joinLoyalty = document.getElementById('join-loyalty');
const learnLoyalty = document.getElementById('learn-loyalty');
const promoToast = document.getElementById('promo-toast');
const promoClose = document.getElementById('promo-close');
const telegramBtn = document.getElementById('telegram-btn');
const customBtn = document.getElementById('custom-btn');
const productModal = document.getElementById('product-modal');
const productModalClose = document.getElementById('product-modal-close');
const productModalImage = document.getElementById('product-modal-image');
const productModalPrev = document.getElementById('product-modal-prev');
const productModalNext = document.getElementById('product-modal-next');
const productModalCounter = document.getElementById('product-modal-counter');
const productModalTitle = document.getElementById('product-modal-title');
const productModalNote = document.getElementById('product-modal-note');
const productModalPrice = document.getElementById('product-modal-price');

let theme = 'night';
const moodSet = new Set();
const cart = new Map();
let productModalImages = [];
let productModalIndex = 0;

const formatPrice = (value) =>
  value
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

function renderPieces(filter = 'all') {
  grid.innerHTML = '';
  const filtered = pieces.filter((p) => (filter === 'all' ? true : p.category === filter));

  filtered.forEach((piece) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = piece.id;
    card.innerHTML = `
      <div class="thumb">
        ${(piece.images?.[0] || piece.image) ? `<img src="${piece.images?.[0] || piece.image}" alt="${piece.name}" loading="lazy" />` : ''}
        <div class="shine"></div>
      </div>
      <h3>${piece.name}</h3>
      ${piece.note ? `<p class="microcopy">${piece.note}</p>` : ''}
      <div class="price">${piece.price}</div>
      <div class="card-actions">
        <button class="pill primary small cart-btn">В корзину</button>
        <div class="card-icons">
          <button class="icon-btn add-btn" title="В мудборд">+</button>
          <button class="icon-btn pulse-btn" title="Пульс">♡</button>
        </div>
      </div>
    `;

    const shine = card.querySelector('.shine');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 120 - 60;
      shine.style.transform = `translateX(${x}%)`;
    });

    card.querySelector('.add-btn').addEventListener('click', () => addToMoodboard(piece));
    card.querySelector('.pulse-btn').addEventListener('click', () => pulseCard(card));
    card.querySelector('.cart-btn').addEventListener('click', () => addToCart(piece));
    card.querySelector('.add-btn').addEventListener('click', (e) => e.stopPropagation());
    card.querySelector('.pulse-btn').addEventListener('click', (e) => e.stopPropagation());
    card.querySelector('.cart-btn').addEventListener('click', (e) => e.stopPropagation());

    card.addEventListener('click', () => openProductModal(piece));

    grid.appendChild(card);
  });
}

function openProductModal(piece) {
  if (!productModal) return;
  productModalTitle.textContent = piece.name;
  productModalPrice.textContent = piece.price;
  productModalNote.textContent = piece.note || 'Детали и доступные варианты уточняются в личке.';

  productModalImages = piece.images?.length ? piece.images : piece.image ? [piece.image] : [];
  productModalIndex = 0;

  if (productModalImages.length) {
    productModalImage.src = productModalImages[0];
    productModalImage.alt = piece.name;
    productModalImage.parentElement.classList.remove('hidden');
    const multiple = productModalImages.length > 1;
    productModalPrev?.classList.toggle('hidden', !multiple);
    productModalNext?.classList.toggle('hidden', !multiple);
    productModalCounter.textContent = `${productModalIndex + 1} / ${productModalImages.length}`;
  } else {
    productModalImage.parentElement.classList.add('hidden');
    productModalCounter.textContent = '';
  }

  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  if (!productModal) return;
  productModal.classList.add('hidden');
  document.body.style.overflow = '';
}

function shiftProductModalImage(delta) {
  if (!productModalImages.length) return;
  productModalIndex = (productModalIndex + delta + productModalImages.length) % productModalImages.length;
  productModalImage.src = productModalImages[productModalIndex];
  productModalCounter.textContent = `${productModalIndex + 1} / ${productModalImages.length}`;
}

function addToMoodboard(piece) {
  if (moodSet.has(piece.id)) return;
  moodSet.add(piece.id);

  if (moodboard.classList.contains('empty')) {
    moodboard.classList.remove('empty');
    moodboard.innerHTML = '';
  }

  const item = document.createElement('div');
  item.className = 'mood-item';
  item.innerHTML = `
    <strong>${piece.name}</strong>
    <p class="microcopy">${piece.price} · ${piece.tags.join(', ')}</p>
  `;
  moodboard.appendChild(item);
}

function pulseCard(card) {
  card.style.boxShadow = '0 0 0 0 rgba(225, 200, 255, 0.6)';
  card.animate(
    [
      { boxShadow: '0 0 0 0 rgba(225, 200, 255, 0.6)' },
      { boxShadow: '0 0 0 18px rgba(225, 200, 255, 0)' }
    ],
    { duration: 480 }
  );
}

function focusCard(card) {
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  pulseCard(card);
}

function toggleMode() {
  theme = theme === 'night' ? 'day' : 'night';
  document.body.dataset.mode = theme;
  toggleModeBtn.textContent = theme === 'night' ? 'День' : 'Ночь';
}

function showPromo() {
  promoToast.classList.remove('hidden');
}

function sparkle() {
  const isDay = document.body.dataset.mode === 'day';
  const grad = isDay
    ? "radial-gradient(circle at 20% 30%, rgba(210,40,120,0.35), transparent 32%), radial-gradient(circle at 70% 40%, rgba(180,20,90,0.32), transparent 30%), radial-gradient(circle at 40% 70%, rgba(120,20,60,0.32), transparent 28%)"
    : "radial-gradient(circle at 20% 30%, rgba(255,138,197,0.2), transparent 30%), radial-gradient(circle at 70% 40%, rgba(255,166,216,0.2), transparent 28%), radial-gradient(circle at 40% 70%, rgba(255,209,232,0.18), transparent 25%)";
  const sparkleLayer = document.createElement('div');
  sparkleLayer.style.position = 'fixed';
  sparkleLayer.style.inset = '0';
  sparkleLayer.style.pointerEvents = 'none';
  sparkleLayer.style.background = grad;
  sparkleLayer.style.mixBlendMode = 'screen';
  sparkleLayer.style.opacity = '0';
  sparkleLayer.style.transition = 'opacity 280ms ease';
  document.body.appendChild(sparkleLayer);
  requestAnimationFrame(() => {
    sparkleLayer.style.opacity = '1';
    setTimeout(() => {
      sparkleLayer.style.opacity = '0';
      setTimeout(() => sparkleLayer.remove(), 320);
    }, 420);
  });

  const chance = Math.random();
  if (chance <= 0.1) {
    setTimeout(showPromo, 180);
  }

  const stars = document.createElement('div');
  stars.style.position = 'fixed';
  stars.style.inset = '0';
  stars.style.pointerEvents = 'none';
  stars.style.zIndex = '12';
  document.body.appendChild(stars);

  const starCount = 18;
  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 2;
    star.style.position = 'absolute';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.borderRadius = '50%';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.background = isDay ? 'rgba(180,20,90,0.9)' : 'rgba(255,166,216,0.9)';
    star.style.boxShadow = `0 0 6px ${isDay ? 'rgba(120,20,70,0.8)' : 'rgba(255,138,197,0.8)'}`;
    stars.appendChild(star);

    star.animate(
      [
        { transform: 'scale(0.6)', opacity: 0.7 },
        { transform: 'scale(1.2)', opacity: 1 },
        { transform: 'scale(0.8)', opacity: 0 }
      ],
      { duration: 800 + Math.random() * 300, easing: 'ease-in-out', fill: 'forwards' }
    );
  }

  setTimeout(() => stars.remove(), 1200);
}

function ping() {
  const halo = document.createElement('div');
  halo.style.position = 'fixed';
  halo.style.width = '260px';
  halo.style.height = '260px';
  halo.style.borderRadius = '50%';
  halo.style.border = '1px solid rgba(255,166,216,0.6)';
  halo.style.left = 'calc(50% - 130px)';
  halo.style.top = 'calc(50% - 130px)';
  halo.style.pointerEvents = 'none';
  halo.style.opacity = '0.8';
  halo.animate(
    [{ transform: 'scale(0.7)', opacity: 0.9 }, { transform: 'scale(1.4)', opacity: 0 }],
    { duration: 620, easing: 'ease-out' }
  );
  document.body.appendChild(halo);
  setTimeout(() => halo.remove(), 640);
}

function attachFilters() {
  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      renderPieces(chip.dataset.filter);
    });
  });
}

function initShortcuts() {
  heroCta.addEventListener('click', () => {
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
  });

  lookbookCta?.addEventListener('click', () => {
    document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' });
  });

  moodboardBtn.addEventListener('click', () => {
    const first = pieces[0];
    addToMoodboard(first);
    focusCard(document.querySelector(`[data-id="${first.id}"]`));
  });

  toggleModeBtn.addEventListener('click', toggleMode);
  sparkleBtn.addEventListener('click', sparkle);
  pingBtn?.addEventListener('click', ping);
  storyBtn?.addEventListener('click', sparkle);
  cartToggle.addEventListener('click', () => {
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
  });
  joinLoyalty?.addEventListener('click', sparkle);
  learnLoyalty?.addEventListener('click', ping);
  telegramBtn?.addEventListener('click', () => {
    window.open('https://t.me/meowmulia', '_blank', 'noreferrer');
  });
  customBtn?.addEventListener('click', sparkle);

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sparkle();
    checkoutForm.reset();
  });

  promoClose?.addEventListener('click', () => {
    promoToast.classList.add('hidden');
  });

  productModalClose?.addEventListener('click', closeProductModal);
  productModalPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    shiftProductModalImage(-1);
  });
  productModalNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    shiftProductModalImage(1);
  });
  productModal?.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      promoToast.classList.add('hidden');
      closeProductModal();
    }
  });
}

function addToCart(piece) {
  const entry = cart.get(piece.id) || { piece, qty: 0 };
  entry.qty += 1;
  cart.set(piece.id, entry);
  renderCart();
}

function changeQty(id, delta) {
  const entry = cart.get(id);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, entry);
  }
  renderCart();
}

function removeFromCart(id) {
  cart.delete(id);
  renderCart();
}

function renderCart() {
  cartPanel.innerHTML = '';
  if (cart.size === 0) {
    cartPanel.classList.add('empty');
    cartPanel.innerHTML = '<p class="placeholder">Корзина пуста. Добавьте изделие.</p>';
    cartCount.textContent = '0';
    orderTotal.textContent = 'Итого: 0 ₽';
    return;
  }

  cartPanel.classList.remove('empty');
  let total = 0;
  let count = 0;

  cart.forEach(({ piece, qty }) => {
    const item = document.createElement('div');
    item.className = 'cart-item';
    const subtotal = piece.priceValue * qty;
    total += subtotal;
    count += qty;

    item.innerHTML = `
      <div class="cart-meta">
        <strong>${piece.name}</strong>
        <span class="microcopy">${formatPrice(subtotal)}</span>
      </div>
      <div class="qty">
        <button aria-label="минус" data-id="${piece.id}" data-delta="-1">−</button>
        <span>${qty}</span>
        <button aria-label="плюс" data-id="${piece.id}" data-delta="1">+</button>
        <button class="remove" data-remove="${piece.id}">×</button>
      </div>
    `;
    cartPanel.appendChild(item);
  });

  cartPanel.querySelectorAll('[data-delta]').forEach((btn) => {
    btn.addEventListener('click', () => changeQty(btn.dataset.id, Number(btn.dataset.delta)));
  });

  cartPanel.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.remove));
  });

  cartCount.textContent = String(count);
  orderTotal.textContent = `Итого: ${formatPrice(total)}`;
}

function init() {
  renderPieces();
  attachFilters();
  initShortcuts();
  renderCart();
  document.body.dataset.mode = theme;
}

init();

