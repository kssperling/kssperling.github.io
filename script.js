const pieces = [
  {
    id: 'lunar-tail',
    name: 'Кольцо «Лунный хвост»',
    price: '18 900 ₽',
    priceValue: 18900,
    palette: 'night',
    mood: 'bold',
    tags: ['серебро', 'опал', 'регулируемое'],
    accent: true
  },
  {
    id: 'soft-paw',
    name: 'Подвес «Мягкая лапа»',
    price: '12 400 ₽',
    priceValue: 12400,
    palette: 'day',
    mood: 'calm',
    tags: ['золото 14k', 'жемчуг'],
    accent: false
  },
  {
    id: 'whisker-line',
    name: 'Серьги «Линия усов»',
    price: '15 100 ₽',
    priceValue: 15100,
    palette: 'night',
    mood: 'bold',
    tags: ['серебро', 'оксидирование'],
    accent: false
  },
  {
    id: 'aurora-cat',
    name: 'Браслет «Аврора»',
    price: '21 700 ₽',
    priceValue: 21700,
    palette: 'day',
    mood: 'bright',
    tags: ['золото 14k', 'топаз'],
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

let theme = 'night';
const moodSet = new Set();
const cart = new Map();

const formatPrice = (value) =>
  value
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

function renderPieces(filter = 'all') {
  grid.innerHTML = '';
  const filtered = pieces.filter((p) =>
    filter === 'all' ? true : p.palette === filter || p.mood === filter
  );

  filtered.forEach((piece) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = piece.id;
    card.innerHTML = `
      <div class="thumb">
        <div class="shine"></div>
      </div>
      <h3>${piece.name}</h3>
      <div class="price">${piece.price}</div>
      <div class="badges">
        ${piece.accent ? '<span class="badge accent">хит</span>' : ''}
        <span class="badge">${piece.palette}</span>
        ${piece.tags.map((t) => `<span class="badge">${t}</span>`).join('')}
      </div>
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

    grid.appendChild(card);
  });
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

  lookbookCta.addEventListener('click', () => {
    document.getElementById('lookbook').scrollIntoView({ behavior: 'smooth' });
  });

  moodboardBtn.addEventListener('click', () => {
    const first = pieces[0];
    addToMoodboard(first);
    focusCard(document.querySelector(`[data-id="${first.id}"]`));
  });

  toggleModeBtn.addEventListener('click', toggleMode);
  sparkleBtn.addEventListener('click', sparkle);
  pingBtn.addEventListener('click', ping);
  storyBtn.addEventListener('click', sparkle);
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      promoToast.classList.add('hidden');
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

