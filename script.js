(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return [].slice.call((c || document).querySelectorAll(s)); };
  var still = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* =====================================================================
     CONTENT
     ===================================================================== */
  var PROFILE = {
    name: 'Muhammad Abdul Hadi',
    role: 'Data Science Undergraduate · PAF-IAST',
    location: 'Islamabad, Pakistan',
    email: 'm.abdulhadi788@gmail.com',
    phone: '+92 322 6067576',
    github: 'https://github.com/mabdulhadi788',
    summary: 'Detail-oriented Data Science undergraduate at Pak-Austria Fachhochschule (PAF-IAST) with a strong foundation in Python and C++, object-oriented programming and data preprocessing. I build end-to-end software simulations and AI-driven monitoring prototypes from scratch, and I am seeking international graduate study and research opportunities in Data Science.'
  };

  var SKILLS = [
    { id: 'python', name: 'Python', ring: 0, angle: -90, status: 'Core', blurb: 'My main language for data work. I used it on FloraSentinel AI to collect, clean and preprocess image and sensor data and to flag anomalous readings.', projects: ['florasentinel'], links: ['numpy', 'pandas', 'ml'] },
    { id: 'cpp', name: 'C++', ring: 0, angle: 90, status: 'Core', blurb: 'Object-oriented C++11: inheritance, polymorphism, templates, operator overloading, dynamic memory, exception handling and file I/O. Used in the ER Simulator and Movie Management System.', projects: ['er-sim', 'movie-db'], links: [] },
    { id: 'numpy', name: 'NumPy', ring: 1, angle: -150, status: 'Learning', blurb: 'Vectorised numerical computing: arrays, broadcasting and the maths layer that sits under most of the Python data stack.', projects: [], links: ['pandas', 'stats'] },
    { id: 'pandas', name: 'Pandas', ring: 1, angle: -60, status: 'Learning', blurb: 'Tabular data wrangling: cleaning, joins, grouping and time-series handling, the toolkit behind a good preprocessing pipeline.', projects: [], links: ['matplotlib', 'sql'] },
    { id: 'matplotlib', name: 'Matplotlib', ring: 1, angle: 30, status: 'Learning', blurb: 'Plotting for exploration and reporting: trends, distributions and anomaly overlays like the ones in the Data Playground above.', projects: [], links: [] },
    { id: 'sql', name: 'SQL', ring: 1, angle: 120, status: 'Learning', blurb: 'Querying relational data: filtering, joins and aggregation. One of my next study targets for working with real datasets at scale.', projects: [], links: [] },
    { id: 'stats', name: 'Statistics', ring: 2, angle: -120, status: 'Learning', blurb: 'Distributions, z-scores, precision and recall: the ideas behind anomaly detection and how I benchmarked FloraSentinel against a fixed-threshold baseline.', projects: ['florasentinel'], links: ['ml'] },
    { id: 'ml', name: 'Machine Learning', ring: 2, angle: -20, status: 'Next up', blurb: 'The direction I am heading: moving from rule-based anomaly detection toward trained models, evaluated honestly against baselines.', projects: [], links: [] }
  ];

  var PROJECTS = [
    { id: 'florasentinel', title: 'FloraSentinel AI', subtitle: 'Plant growth monitoring & conservation support', role: 'Data collection & preprocessing', cats: ['AI', 'Data Analysis', 'Python'], tech: ['Python', 'Sensor data', 'Image data', 'Anomaly detection'], cmd: 'run anomaly', btn: 'Run the demo', preview: 'sensor',
      points: ['Led data collection and preprocessing workflows combining plant imagery with sensor readings (soil moisture, temperature, humidity, pH and light intensity) to detect early signs of plant stress.', 'Built clean data pipelines to extract visible growth trends (leaf area and greenness) and flag anomalous environmental readings against species-specific care rules.', 'Benchmarked anomaly precision, recall and false-alarm rate against a fixed-threshold baseline for dashboard reporting.'] },
    { id: 'er-sim', title: 'Rural Hospital ER Simulator', subtitle: 'OOP architecture & automated patient workflow', role: 'C++ OOP lab project', cats: ['C++'], tech: ['C++', 'OOP', 'Polymorphism', 'Templates', 'fstream'], cmd: 'project er-sim', btn: 'Inspect in terminal', preview: 'queue',
      points: ['Console ER simulator using inheritance across Person, Patient, CriticalPatient and StablePatient, plus encapsulation and pure virtual functions.', 'Dynamic memory for waiting-room queues and runtime polymorphic triage routing for critical versus stable admissions.', 'Billing with friend classes, operator overloading, a generic calculateTax<T> template (5%), custom InvalidDataException and file I/O persistence.'] },
    { id: 'movie-db', title: 'Movie Management System', subtitle: 'Data structures & search logic', role: 'C++ console application', cats: ['C++'], tech: ['C++', 'Arrays', 'Linear search', 'Validation'], cmd: 'project movie-db', btn: 'Inspect in terminal', preview: 'search',
      points: ['Interactive command-line app to store, browse, update and manage a library of film records.', 'Parallel arrays and linear search to filter and retrieve records, with full input validation.'] }
  ];

  var JOURNEY = [
    { state: 'done', when: 'Foundations', title: 'Programming fundamentals', text: 'Python and C++ coursework: control flow, arrays, functions and the habit of building things from scratch.' },
    { state: 'done', when: '2025', title: 'Started BSc Data Science at PAF-IAST', text: 'Began a four-year degree at Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology.' },
    { state: 'done', when: 'Coursework', title: 'Object-oriented C++', text: 'Shipped the Movie Management System, then the Rural Hospital ER Simulator with polymorphic triage, templates and file I/O.' },
    { state: 'done', when: 'Coursework', title: 'FloraSentinel AI', text: 'Owned data collection and preprocessing for an AI plant-monitoring prototype and benchmarked anomaly detection against a baseline.' },
    { state: 'done', when: 'Campus', title: 'Leadership', text: 'Deputy Director of Media Affairs (Data Science Society), hostel committee member, and organiser of environmental and animal-care drives.' },
    { state: 'now', when: 'Now', title: 'Building the data stack', text: 'Going deeper on Pandas, NumPy, Matplotlib, SQL and statistics so every project rests on solid analysis.' },
    { state: 'next', when: 'Next', title: 'Machine learning', text: 'Move from rule-based detection to trained models, with proper train/test splits and honest evaluation.' },
    { state: 'future', when: '2029', title: 'Graduate and go further', text: 'Complete the BSc and pursue international graduate study and research in Data Science.' }
  ];

  /* =====================================================================
     DATASET: seeded synthetic sensor data + anomaly detector
     Modelled on FloraSentinel-style readings. Faults are injected at known
     positions so precision / recall are real measurements.
     ===================================================================== */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function gauss(r) { return Math.sqrt(-2 * Math.log(Math.max(r(), 1e-9))) * Math.cos(2 * Math.PI * r()); }

  var HOURS = 168;
  var METRICS = {
    moisture: { label: 'Soil moisture', unit: '%', care: [35, 70], color: '#22d3ee' },
    temperature: { label: 'Temperature', unit: '°C', care: [18, 30], color: '#f59e0b' },
    humidity: { label: 'Humidity', unit: '%', care: [40, 75], color: '#60a5fa' },
    light: { label: 'Light', unit: 'klx', care: [0, 80], color: '#a78bfa' }
  };

  var DATA = (function () {
    var rng = mulberry32(20260508);
    var out = {};
    var day = function (h) { return (h / 24) * 2 * Math.PI; };
    var base = {
      moisture: function (h) { return 62 - 0.26 * (h % 48) + gauss(rng) * 0.7; },
      temperature: function (h) { return 24 + 4 * Math.sin(day(h - 9)) + gauss(rng) * 0.45; },
      humidity: function (h) { return 60 - 9 * Math.sin(day(h - 9)) + gauss(rng) * 1.1; },
      light: function (h) { return Math.max(0, 58 * Math.sin(day(h - 6)) + gauss(rng) * 1.6); }
    };
    var jump = { moisture: [13, 22], temperature: [4.5, 8], humidity: [12, 20], light: [22, 34] };
    Object.keys(METRICS).forEach(function (m) {
      var truth = [], guard = 0;
      while (truth.length < 7 && guard++ < 500) {
        var i = 26 + Math.floor(rng() * (HOURS - 27));
        if (truth.every(function (p) { return Math.abs(p - i) >= 9; })) truth.push(i);
      }
      var set = {};
      truth.forEach(function (t) { set[t] = true; });
      var values = [];
      for (var h = 0; h < HOURS; h++) {
        var v = base[m](h);
        if (set[h]) {
          var mag = jump[m][0] + rng() * (jump[m][1] - jump[m][0]);
          v += (rng() < 0.5 ? -1 : 1) * mag;
          if (m === 'light') v = Math.max(0, v);
        }
        values.push(+v.toFixed(2));
      }
      out[m] = { values: values, truth: set, truthCount: truth.length };
    });
    return out;
  })();

  function mean(a) { return a.reduce(function (s, x) { return s + x; }, 0) / (a.length || 1); }
  function sd(a, m) { return Math.sqrt(a.reduce(function (s, x) { return s + (x - m) * (x - m); }, 0) / (a.length || 1)); }
  function median(a) { var s = a.slice().sort(function (x, y) { return x - y; }), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }

  function detect(metric, o) {
    o = o || {};
    var k = o.k == null ? 3 : o.k, win = o.window || 12, deseason = o.deseason !== false;
    var values = DATA[metric].values, truth = DATA[metric].truth, care = METRICS[metric].care;
    var seasonal = [];
    for (var hr = 0; hr < 24; hr++) {
      var col = [];
      if (deseason) for (var q = hr; q < HOURS; q += 24) col.push(values[q]);
      seasonal.push(deseason ? median(col) : 0);
    }
    var resid = values.map(function (v, h) { return deseason ? v - seasonal[h % 24] : v; });
    var rows = values.map(function (v, h) {
      var expected = null, upper = null, lower = null, flagged = false;
      if (h >= win) {
        var w = resid.slice(h - win, h), m = mean(w), s = Math.max(sd(w, m), 1e-6), off = deseason ? seasonal[h % 24] : 0;
        expected = m + off; upper = expected + k * s; lower = expected - k * s;
        flagged = Math.abs(resid[h] - m) / s > k;
      }
      return { h: h, v: v, expected: expected, upper: upper, lower: lower, flagged: flagged, baseline: v < care[0] || v > care[1], truth: !!truth[h] };
    });
    function score(key) {
      var el = rows.filter(function (r) { return r.h >= win; });
      var tp = el.filter(function (r) { return r[key] && r.truth; }).length;
      var fp = el.filter(function (r) { return r[key] && !r.truth; }).length;
      var fn = el.filter(function (r) { return !r[key] && r.truth; }).length;
      return { tp: tp, fp: fp, fn: fn, precision: tp + fp ? tp / (tp + fp) : 0, recall: tp + fn ? tp / (tp + fn) : 0 };
    }
    var mu = mean(values);
    return { rows: rows, mean: mu, std: sd(values, mu), min: Math.min.apply(null, values), max: Math.max.apply(null, values), detector: score('flagged'), baseline: score('baseline'), truthCount: DATA[metric].truthCount };
  }

  function histogram(values, bins) {
    var lo = Math.min.apply(null, values), hi = Math.max.apply(null, values), step = (hi - lo) / bins || 1, out = [];
    for (var i = 0; i < bins; i++) out.push({ x: lo + step * (i + 0.5), n: 0 });
    values.forEach(function (v) { out[Math.min(bins - 1, Math.floor((v - lo) / step))].n++; });
    return out;
  }
  function hourLabel(h) { return 'D' + (Math.floor(h / 24) + 1) + ' ' + String(h % 24).padStart(2, '0') + 'h'; }

  /* =====================================================================
     NAV, PROGRESS, REVEAL, SPOTLIGHT
     ===================================================================== */
  var burger = $('#burger'), menu = $('#menu');
  function toggleMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () { toggleMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') toggleMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { toggleMenu(false); burger.focus(); } });
  document.addEventListener('click', function (e) { if (menu.classList.contains('open') && !menu.contains(e.target) && !burger.contains(e.target)) toggleMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 760) toggleMenu(false); });

  var progress = $('#progress'), tlFill = $('#tl-fill'), timeline = $('#timeline');
  function onScroll() {
    var h = root.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
    var r = timeline.getBoundingClientRect(), vh = window.innerHeight;
    var p = (vh * 0.65 - r.top) / (r.height || 1);
    tlFill.style.setProperty('--fill', Math.max(0, Math.min(1, p)).toFixed(3));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  var links = $$('.menu a');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { threshold: 0.08 });
    var observeReveals = function () { $$('.reveal:not(.in)').forEach(function (el) { ro.observe(el); }); };
    observeReveals();
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('active', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { so.observe(s); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.glass');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* =====================================================================
     HERO: pseudo-3D neural network on canvas
     ===================================================================== */
  (function heroNet() {
    var cv = $('#net'), hero = $('#top'), cx = cv.getContext('2d');
    if (!cx) return;
    var seed = 42;
    function r() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var LAYERS = [4, 6, 7, 6, 3], nodes = [], edges = [], outs = [], sigs = [], stars = [], i;
    LAYERS.forEach(function (n, l) {
      for (var j = 0; j < n; j++) nodes.push({ l: l, x: (l - 2) * 2.1, y: (j - (n - 1) / 2) * 1.05 + (r() - 0.5) * 0.25, z: (r() - 0.5) * 1.6, a: 0.4 });
    });
    nodes.forEach(function (a, ai) { outs[ai] = []; nodes.forEach(function (b, bi) { if (b.l === a.l + 1) { outs[ai].push(edges.length); edges.push([ai, bi]); } }); });
    for (i = 0; i < 44; i++) sigs.push({ e: Math.floor(r() * edges.length), t: r(), s: 0.25 + r() * 0.4 });
    for (i = 0; i < 140; i++) stars.push({ x: r(), y: r(), d: 0.2 + r() * 0.8 });

    var W = 0, H = 0, yaw = 0, pitch = 0, ty = 0, tp = 0, visible = true, last = 0, px = [], py = [], pf = [];
    function size() {
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      W = hero.clientWidth; H = hero.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) draw(0, 0);
    }
    hero.addEventListener('pointermove', function (e) {
      var b = hero.getBoundingClientRect();
      ty = ((e.clientX - b.left) / b.width - 0.5) * 0.9;
      tp = -((e.clientY - b.top) / b.height - 0.5) * 0.5;
    });

    function draw(t, dt) {
      cx.clearRect(0, 0, W, H);
      var wide = W > 900;
      var ccx = wide ? W * 0.7 : W * 0.5, ccy = H * 0.5;
      var unit = wide ? Math.min(W * 0.05, H * 0.11) : Math.min(W * 0.095, H * 0.1);
      var yw = yaw + (still ? 0 : Math.sin(t * 0.25) * 0.18), cy = Math.cos(yw), sy = Math.sin(yw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      var k, n, a, b, s;

      // star field
      cx.fillStyle = 'rgba(124,140,255,.5)';
      for (k = 0; k < stars.length; k++) {
        s = stars[k];
        var sx = ((s.x * W + yw * s.d * 80) % W + W) % W, sY = ((s.y * H + (still ? 0 : t * 4 * s.d)) % H);
        cx.globalAlpha = 0.25 + s.d * 0.5;
        cx.fillRect(sx, sY, 1 + s.d, 1 + s.d);
      }
      cx.globalAlpha = 1;

      // project
      for (k = 0; k < nodes.length; k++) {
        n = nodes[k];
        var x1 = n.x * cy + n.z * sy, z1 = -n.x * sy + n.z * cy;
        var y2 = n.y * cp - z1 * sp, z2 = n.y * sp + z1 * cp;
        var f = 9 / (9 - z2);
        px[k] = ccx + x1 * unit * f; py[k] = ccy - y2 * unit * f; pf[k] = f;
      }
      // edges
      cx.strokeStyle = 'rgba(79,124,255,.2)'; cx.lineWidth = 1; cx.beginPath();
      for (k = 0; k < edges.length; k++) { cx.moveTo(px[edges[k][0]], py[edges[k][0]]); cx.lineTo(px[edges[k][1]], py[edges[k][1]]); }
      cx.stroke();
      // signals travel forward through layers
      for (k = 0; k < sigs.length; k++) {
        s = sigs[k];
        s.t += dt * s.s;
        if (s.t >= 1) {
          var to = edges[s.e][1];
          nodes[to].a = 1;
          var nx = outs[to];
          s.e = nx.length ? nx[Math.floor(Math.random() * nx.length)] : Math.floor(Math.random() * edges.length);
          s.t = 0;
        }
        a = edges[s.e][0]; b = edges[s.e][1];
        cx.fillStyle = 'rgba(167,139,250,.95)';
        cx.beginPath(); cx.arc(px[a] + (px[b] - px[a]) * s.t, py[a] + (py[b] - py[a]) * s.t, 2.4 * pf[a], 0, 6.2832); cx.fill();
      }
      // nodes
      for (k = 0; k < nodes.length; k++) {
        n = nodes[k];
        if (!still) n.a = Math.max(0, n.a - dt * 1.4);
        var rr = Math.round(59 - 25 * n.a), gg = Math.round(130 + 81 * n.a), bb = Math.round(246 - 6 * n.a);
        if (n.a > 0.05) { cx.fillStyle = 'rgba(34,211,238,' + (0.2 * n.a).toFixed(3) + ')'; cx.beginPath(); cx.arc(px[k], py[k], 13 * pf[k] * n.a + 6, 0, 6.2832); cx.fill(); }
        cx.fillStyle = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
        cx.beginPath(); cx.arc(px[k], py[k], 4.5 * pf[k] * (1 + n.a * 0.7), 0, 6.2832); cx.fill();
      }
    }

    function frame(ts) {
      requestAnimationFrame(frame);
      if (!visible || document.hidden) { last = ts; return; }
      var dt = Math.min(0.05, (ts - last) / 1000 || 0.016); last = ts;
      yaw += (ty - yaw) * 0.05; pitch += (tp - pitch) * 0.05;
      draw(ts / 1000, dt);
    }
    size();
    window.addEventListener('resize', size);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(hero);
    if (!still) requestAnimationFrame(frame);
  })();

  /* typewriter */
  (function typer() {
    var el = $('#typed'), P = ['cleaning sensor data', 'detecting anomalies', 'building pipelines', 'plotting trends', 'learning machine learning'];
    if (still) { el.textContent = P[0]; return; }
    var i = 0, j = 0, del = false;
    (function tick() {
      var w = P[i], d = del ? 28 : 65;
      j += del ? -1 : 1;
      el.textContent = w.slice(0, j);
      if (!del && j === w.length) { del = true; d = 1500; }
      else if (del && j === 0) { del = false; i = (i + 1) % P.length; d = 300; }
      setTimeout(tick, d);
    })();
  })();

  /* =====================================================================
     PLAYGROUND
     ===================================================================== */
  (function playground() {
    var st = { metric: 'temperature', range: 168, k: 3, win: 12, deseason: true };
    var RANGES = [['24h', 24], ['3 days', 72], ['7 days', 168]];
    var metricsEl = $('#metrics'), rangesEl = $('#ranges'), chartEl = $('#chart');
    var cur = null;

    metricsEl.innerHTML = Object.keys(METRICS).map(function (id) { return '<button type="button" data-m="' + id + '" aria-pressed="false">' + METRICS[id].label + '</button>'; }).join('');
    rangesEl.innerHTML = '<span class="label" style="margin-right:.3rem;align-self:center">Window</span>' + RANGES.map(function (r) { return '<button type="button" data-r="' + r[1] + '" aria-pressed="false">' + r[0] + '</button>'; }).join('');

    function tween(el, to, dec, suf) {
      var from = +el.dataset.v || 0; el.dataset.v = to;
      if (el._r) cancelAnimationFrame(el._r);
      if (still) { el.textContent = to.toFixed(dec) + suf; return; }
      var t0 = performance.now();
      (function step(t) {
        var p = Math.min(1, (t - t0) / 600), e = 1 - Math.pow(1 - p, 3);
        el.textContent = (from + (to - from) * e).toFixed(dec) + suf;
        if (p < 1) el._r = requestAnimationFrame(step);
      })(t0);
    }

    function drawChart(rows, m, animate) {
      var W = 760, H = 320, L = 38, R = 10, T = 14, B = 26, n = rows.length, lo = Infinity, hi = -Infinity;
      rows.forEach(function (r) { [r.v, r.upper, r.lower].forEach(function (x) { if (x != null) { lo = Math.min(lo, x); hi = Math.max(hi, x); } }); });
      var pad = (hi - lo) * 0.06; lo -= pad; hi += pad;
      var X = function (i) { return L + i * (W - L - R) / Math.max(1, n - 1); };
      var Y = function (v) { return T + (hi - v) * (H - T - B) / (hi - lo); };
      var path = function (key) {
        var d = '', pen = false;
        rows.forEach(function (r, i) { var v = r[key]; if (v == null) { pen = false; return; } d += (pen ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1); pen = true; });
        return d;
      };
      var g = '', i, dec = hi - lo > 8 ? 0 : 1;
      for (i = 0; i < 5; i++) {
        var v = lo + (hi - lo) * i / 4;
        g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v).toFixed(1) + '" y2="' + Y(v).toFixed(1) + '" stroke="rgba(148,163,255,.1)"/><text x="' + (L - 6) + '" y="' + (Y(v) + 3).toFixed(1) + '" text-anchor="end">' + v.toFixed(dec) + '</text>';
      }
      var step = n <= 24 ? 4 : n <= 72 ? 12 : 24;
      rows.forEach(function (r, i) { if (r.h % step === 0) g += '<text x="' + X(i).toFixed(1) + '" y="' + (H - 8) + '" text-anchor="middle">' + hourLabel(r.h) + '</text>'; });
      var line = path('v');
      var area = line + 'L' + X(n - 1).toFixed(1) + ' ' + Y(lo).toFixed(1) + 'L' + X(0).toFixed(1) + ' ' + Y(lo).toFixed(1) + 'Z';
      var marks = '';
      rows.forEach(function (r, i) {
        if (r.truth) marks += '<circle cx="' + X(i).toFixed(1) + '" cy="' + Y(r.v).toFixed(1) + '" r="9" fill="none" stroke="#22d3ee" stroke-width="1.5"/>';
      });
      rows.forEach(function (r, i) {
        if (r.flagged) marks += '<circle cx="' + X(i).toFixed(1) + '" cy="' + Y(r.v).toFixed(1) + '" r="4.5" fill="#e879f9" stroke="#0a0f1c" stroke-width="1.5"/>';
      });
      chartEl.innerHTML =
        '<svg viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + m.color + '" stop-opacity=".25"/><stop offset="1" stop-color="' + m.color + '" stop-opacity="0"/></linearGradient></defs>' +
        '<g class="axis">' + g + '</g>' +
        '<path d="' + area + '" fill="url(#ar)"/>' +
        '<path d="' + path('upper') + '" fill="none" stroke="#94a3b8" stroke-opacity=".6" stroke-dasharray="4 4"/>' +
        '<path d="' + path('lower') + '" fill="none" stroke="#94a3b8" stroke-opacity=".6" stroke-dasharray="4 4"/>' +
        '<path d="' + line + '" fill="none" stroke="' + m.color + '" stroke-width="2" stroke-linejoin="round"' + (animate && !still ? ' pathLength="1" class="line-in"' : '') + '/>' +
        marks + '<line id="xh" y1="' + T + '" y2="' + (H - B) + '" stroke="rgba(34,211,238,.4)" opacity="0"/></svg><div class="tt" id="tt"></div>';
      cur = { rows: rows, X: X, n: n, W: W, L: L, R: R, m: m };
    }

    chartEl.addEventListener('pointermove', function (e) {
      if (!cur) return;
      var svg = $('svg', chartEl), rect = svg.getBoundingClientRect(), c = cur;
      var sx = (e.clientX - rect.left) / rect.width * c.W;
      var i = Math.max(0, Math.min(c.n - 1, Math.round((sx - c.L) / (c.W - c.L - c.R) * (c.n - 1))));
      var r = c.rows[i], xh = $('#xh'), tt = $('#tt');
      xh.setAttribute('x1', c.X(i)); xh.setAttribute('x2', c.X(i)); xh.setAttribute('opacity', '1');
      var status = r.truth ? (r.flagged ? '<span style="color:#e879f9">flagged · true fault</span>' : '<span style="color:#22d3ee">true fault (missed)</span>') : (r.flagged ? '<span style="color:#e879f9">flagged · false alarm</span>' : 'normal');
      tt.innerHTML = '<b>' + hourLabel(r.h) + '</b>' + c.m.label + ': <strong>' + r.v.toFixed(1) + ' ' + c.m.unit + '</strong>' + (r.expected != null ? '<br>expected ≈ ' + r.expected.toFixed(1) : '') + '<br>' + status;
      var left = c.X(i) / c.W * rect.width;
      tt.style.left = (left > rect.width * 0.6 ? left - tt.offsetWidth - 12 : left + 12) + 'px';
      tt.style.top = '8px';
      tt.classList.add('show');
    });
    chartEl.addEventListener('pointerleave', function () {
      var xh = $('#xh'), tt = $('#tt');
      if (xh) xh.setAttribute('opacity', '0');
      if (tt) tt.classList.remove('show');
    });

    function update(animateLine) {
      var m = METRICS[st.metric];
      var res = detect(st.metric, { k: st.k, window: st.win, deseason: st.deseason });
      var rows = res.rows.slice(-st.range);
      var d = res.detector, b = res.baseline;
      var flaggedNow = rows.filter(function (r) { return r.flagged; }).length;

      $$('[data-m]', metricsEl).forEach(function (btn) {
        var on = btn.dataset.m === st.metric;
        btn.setAttribute('aria-pressed', String(on));
        btn.style.background = on ? METRICS[btn.dataset.m].color : '';
        btn.style.color = on ? '#05070d' : '';
      });
      $$('[data-r]', rangesEl).forEach(function (btn) { btn.setAttribute('aria-pressed', String(+btn.dataset.r === st.range)); });
      $('#k-out').textContent = st.k.toFixed(1) + 'σ';
      $('#w-out').textContent = st.win + 'h';
      $('#lg-band').textContent = '±' + st.k.toFixed(1) + 'σ';
      $('#lg-color').style.background = m.color;
      $('#chart-title').innerHTML = m.label + ' <span style="color:var(--mute);font-weight:400">(' + m.unit + ')</span>';
      chartEl.setAttribute('aria-label', 'Line chart of ' + m.label + ' over ' + st.range + ' hours with ' + flaggedNow + ' flagged anomalies');

      tween($('#s-mean'), res.mean, 1, ' ' + m.unit);
      $('#s-std').textContent = 'σ = ' + res.std.toFixed(2);
      tween($('#s-flag'), flaggedNow, 0, '');
      $('#s-truth').textContent = res.truthCount + ' true faults this week';
      tween($('#s-prec'), d.precision * 100, 0, '%');
      $('#s-fp').textContent = d.fp + ' false alarm' + (d.fp === 1 ? '' : 's');
      tween($('#s-rec'), d.recall * 100, 0, '%');
      $('#s-tp').textContent = d.tp + ' of ' + (d.tp + d.fn) + ' faults caught';

      drawChart(rows, m, animateLine);

      var pct = function (x) { return Math.round(x * 100); };
      var grp = function (name, a, c) {
        return '<div class="bargroup"><div class="pair"><div class="bar a" style="height:' + Math.max(a, 1) + '%"><span>' + a + '%</span></div><div class="bar b" style="height:' + Math.max(c, 1) + '%"><span>' + c + '%</span></div></div><p class="name">' + name + '</p></div>';
      };
      $('#compare').innerHTML = grp('Precision', pct(d.precision), pct(b.precision)) + grp('Recall', pct(d.recall), pct(b.recall));

      var hist = histogram(rows.map(function (r) { return r.v; }), 14), mx = Math.max.apply(null, hist.map(function (h) { return h.n; })) || 1;
      $('#hist').innerHTML = hist.map(function (h) { return '<div style="height:' + (h.n / mx * 100).toFixed(1) + '%;--hc:' + m.color + '" title="≈ ' + h.x.toFixed(1) + ' ' + m.unit + ': ' + h.n + ' hours"></div>'; }).join('');
      $('#hist').setAttribute('aria-label', 'Histogram of ' + m.label + ' readings');

      var advice = d.fp > 2 ? 'Raise the threshold to cut false alarms.' : d.fn > 1 ? 'Lower the threshold to catch more faults.' : 'A good balance.';
      $('#insight').innerHTML = '<b>insight ›</b> At ' + st.k.toFixed(1) + 'σ the rolling detector caught ' + d.tp + ' of ' + (d.tp + d.fn) + ' injected faults with ' + d.fp + ' false alarm' + (d.fp === 1 ? '' : 's') + '; the fixed care-range rule caught ' + b.tp + ' of ' + (b.tp + b.fn) + ' with ' + b.fp + '. ' + advice + ' <span>Data is a seeded synthetic sample modelled on sensor readings, not a real deployment.</span>';
    }

    metricsEl.addEventListener('click', function (e) { var b = e.target.closest('[data-m]'); if (b) { st.metric = b.dataset.m; update(true); } });
    rangesEl.addEventListener('click', function (e) { var b = e.target.closest('[data-r]'); if (b) { st.range = +b.dataset.r; update(true); } });
    $('#k').addEventListener('input', function (e) { st.k = +e.target.value; update(false); });
    $('#w').addEventListener('input', function (e) { st.win = +e.target.value; update(false); });
    $('#deseason').addEventListener('click', function (e) {
      st.deseason = !st.deseason;
      e.currentTarget.setAttribute('aria-checked', String(st.deseason));
      e.currentTarget.classList.toggle('on', st.deseason);
      e.currentTarget.textContent = 'Remove daily cycle: ' + (st.deseason ? 'on' : 'off');
      update(false);
    });
    update(true);
  })();

  /* =====================================================================
     SKILLS: orbital constellation
     ===================================================================== */
  (function skills() {
    var C = 320, RAD = [108, 205, 285], svg = $('#skillmap'), panel = $('#skillpanel'), list = $('#skilllist');
    var STATUS = { 'Core': '#22d3ee', 'Learning': '#60a5fa', 'Next up': '#a78bfa' };
    var by = {};
    SKILLS.forEach(function (s) { var a = s.angle * Math.PI / 180; by[s.id] = { s: s, x: C + RAD[s.ring] * Math.cos(a), y: C + RAD[s.ring] * Math.sin(a) }; });
    var edges = [], seen = {};
    SKILLS.forEach(function (s) { s.links.forEach(function (t) { var key = [s.id, t].sort().join('-'); if (!seen[key]) { seen[key] = 1; edges.push([s.id, t]); } }); });
    SKILLS.filter(function (s) { return s.ring === 0; }).forEach(function (s) { edges.push(['core', s.id]); });
    var pt = function (id) { return id === 'core' ? { x: C, y: C } : by[id]; };
    var sel = 'python';

    function render(focusId) {
      var near = {}; near[sel] = 1;
      SKILLS.forEach(function (s) { if (s.id === sel) s.links.forEach(function (t) { near[t] = 1; }); if (s.links.indexOf(sel) > -1) near[s.id] = 1; });
      var h = '<defs><radialGradient id="cg"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#3b82f6"/></radialGradient><filter id="gl" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
      RAD.forEach(function (r) { h += '<circle class="ring" cx="' + C + '" cy="' + C + '" r="' + r + '" fill="none" stroke="rgba(148,163,255,.16)" stroke-dasharray="3 9"/>'; });
      edges.forEach(function (e) {
        var p = pt(e[0]), q = pt(e[1]), hot = e[0] === sel || e[1] === sel;
        h += '<line ' + (hot ? 'class="hot" stroke-dasharray="6 6" ' : '') + 'x1="' + p.x + '" y1="' + p.y + '" x2="' + q.x + '" y2="' + q.y + '" stroke="' + (hot ? '#22d3ee' : 'rgba(148,163,255,.2)') + '" stroke-width="' + (hot ? 2 : 1) + '"/>';
      });
      h += '<circle cx="' + C + '" cy="' + C + '" r="46" fill="url(#cg)" filter="url(#gl)" opacity=".95"/><text x="' + C + '" y="' + (C - 2) + '" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Data</text><text x="' + C + '" y="' + (C + 15) + '" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Science</text>';
      SKILLS.forEach(function (s) {
        var n = by[s.id], act = s.id === sel, op = near[s.id] ? 1 : 0.55, lbl = s.id === 'ml' ? 'ML' : s.name;
        h += '<g class="node" data-id="' + s.id + '" role="button" tabindex="0" aria-pressed="' + act + '" aria-label="' + s.name + ', ' + s.status + '" style="transform-box:fill-box;transform-origin:center"><circle cx="' + n.x + '" cy="' + n.y + '" r="' + (act ? 44 : 38) + '" fill="rgba(8,12,24,.9)" stroke="' + STATUS[s.status] + '" stroke-width="' + (act ? 3 : 1.5) + '"' + (act ? ' filter="url(#gl)"' : '') + ' opacity="' + op + '"/><text x="' + n.x + '" y="' + (n.y + 5) + '" opacity="' + (near[s.id] ? 1 : 0.6) + '" style="font-size:' + (s.name.length > 9 ? 11.5 : 14) + 'px">' + lbl + '</text></g>';
      });
      svg.innerHTML = h;
      if (focusId) { var f = $('[data-id="' + focusId + '"]', svg); if (f) f.focus(); }

      var s = by[sel].s;
      var used = s.projects.length ? '<div class="sub"><p class="label">Used in</p><div class="chips">' + s.projects.map(function (pid) { return '<a href="#projects">' + esc(PROJECTS.filter(function (p) { return p.id === pid; })[0].title) + '</a>'; }).join('') + '</div></div>' : '';
      var conn = s.links.length ? '<div class="sub"><p class="label">Connects to</p><div class="chips">' + s.links.map(function (id) { return '<button type="button" data-skill="' + id + '">' + by[id].s.name + '</button>'; }).join('') + '</div></div>' : '';
      panel.innerHTML = '<div class="skill-in"><p class="st" style="color:' + STATUS[s.status] + '">' + s.status + '</p><h3>' + s.name + '</h3><p class="body">' + esc(s.blurb) + '</p>' + used + conn + '</div>';
      list.innerHTML = SKILLS.map(function (k) { return '<button type="button" data-skill="' + k.id + '" aria-pressed="' + (k.id === sel) + '">' + k.name + '</button>'; }).join('');
    }
    function choose(id, focus) { sel = id; render(focus ? id : null); }
    svg.addEventListener('click', function (e) { var g = e.target.closest('.node'); if (g) choose(g.dataset.id, false); });
    svg.addEventListener('keydown', function (e) { var g = e.target.closest('.node'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); choose(g.dataset.id, true); } });
    $('#skills').addEventListener('click', function (e) { var b = e.target.closest('[data-skill]'); if (b) choose(b.dataset.skill, false); });
    render();
  })();

  /* =====================================================================
     PROJECTS
     ===================================================================== */
  var PREVIEWS = {
    sensor: '<svg viewBox="0 0 300 80" aria-hidden="true"><path d="M0 62H300M0 40H300M0 18H300" stroke="rgba(148,163,255,.1)"/><path class="pv-draw" pathLength="1" d="M0 52 C20 44 30 58 50 48 S80 40 100 50 S130 56 150 46 S178 12 190 8 S214 54 240 48 S270 40 300 50" fill="none" stroke="#22d3ee" stroke-width="2.2" stroke-linecap="round"/><circle class="pv-pulse" cx="190" cy="8" r="5" fill="#e879f9"/><text x="198" y="14" fill="#e879f9" font-size="9" font-family="JetBrains Mono,monospace">anomaly</text></svg>',
    queue: (function () {
      var dots = [['#f87171', -18], ['#34d399', 18], ['#34d399', 18], ['#f87171', -18], ['#34d399', 18]], s = '<svg viewBox="0 0 300 80" aria-hidden="true"><text x="6" y="14" fill="#8d9ab8" font-size="9" font-family="JetBrains Mono,monospace">queue</text><rect x="125" y="34" width="14" height="12" rx="3" fill="rgba(148,163,255,.25)"/><text x="232" y="22" fill="#f87171" font-size="9" font-family="JetBrains Mono,monospace">critical</text><text x="236" y="70" fill="#34d399" font-size="9" font-family="JetBrains Mono,monospace">stable</text>';
      dots.forEach(function (d, i) { s += '<circle class="pv-pt" cx="20" cy="40" r="6" fill="' + d[0] + '" style="--d:' + (i * 0.6) + 's;--y:' + d[1] + 'px"/>'; });
      return s + '</svg>';
    })(),
    search: (function () {
      var rows = ['Inception', 'Interstellar', 'The Matrix', 'Arrival', 'Tenet'], s = '<svg viewBox="0 0 300 80" aria-hidden="true">';
      rows.forEach(function (r, i) { s += '<rect x="10" y="' + (4 + i * 15) + '" width="' + (i === 3 ? 180 : 150 + (i * 23) % 40) + '" height="11" rx="3" fill="' + (i === 3 ? 'rgba(34,211,238,.28)' : 'rgba(148,163,255,.12)') + '"/><text x="16" y="' + (13 + i * 15) + '" fill="' + (i === 3 ? '#22d3ee' : '#8d9ab8') + '" font-size="8" font-family="JetBrains Mono,monospace">' + r + '</text>'; });
      return s + '<rect class="pv-scan" x="6" y="0" width="240" height="15" rx="4" fill="none" stroke="#a78bfa" stroke-width="1.5"/><text x="252" y="45" fill="#8d9ab8" font-size="8" font-family="JetBrains Mono,monospace">O(n)</text></svg>';
    })()
  };

  function runInTerminal(cmd) {
    $('#terminal').scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'center' });
    setTimeout(function () { window.dispatchEvent(new CustomEvent('terminal:run', { detail: cmd })); }, still ? 50 : 450);
  }

  (function projects() {
    var cardsEl = $('#cards'), filtersEl = $('#filters'), FILTERS = ['All', 'AI', 'Data Analysis', 'Python', 'C++'], active = 'All';
    cardsEl.innerHTML = PROJECTS.map(function (p) {
      return '<article class="glass card" data-cats="' + esc(p.cats.join('|')) + '"><div class="preview">' + PREVIEWS[p.preview] + '</div><div class="card-body">' +
        '<div class="cats">' + p.cats.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</div>' +
        '<h3>' + esc(p.title) + '</h3><p class="sub">' + esc(p.subtitle) + '</p><p class="role">Role: ' + esc(p.role) + '</p>' +
        '<div class="tech">' + p.tech.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<button class="more" type="button" aria-expanded="false" aria-controls="pts-' + p.id + '">Show details <i aria-hidden="true">⌄</i></button>' +
        '<div class="points" id="pts-' + p.id + '"><div><ul>' + p.points.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div></div>' +
        '<div class="card-actions"><button class="btn primary sm" type="button" data-cmd="' + esc(p.cmd) + '">⌘ ' + esc(p.btn) + '</button>' +
        '<a class="btn sm" href="' + PROFILE.github + '" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></article>';
    }).join('');
    filtersEl.innerHTML = FILTERS.map(function (f) { return '<button type="button" data-f="' + f + '" aria-pressed="' + (f === active) + '">' + f + '</button>'; }).join('');

    function apply() {
      var shown = 0;
      $$('.card', cardsEl).forEach(function (c) {
        var ok = active === 'All' || c.dataset.cats.split('|').indexOf(active) > -1;
        c.hidden = !ok;
        if (ok) { shown++; c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }
      });
      $$('[data-f]', filtersEl).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === active)); });
      $('#count').textContent = shown + ' project' + (shown === 1 ? '' : 's') + ' shown. GitHub buttons open my profile, where the code lives.';
    }
    filtersEl.addEventListener('click', function (e) { var b = e.target.closest('[data-f]'); if (b) { active = b.dataset.f; apply(); } });
    cardsEl.addEventListener('click', function (e) {
      var more = e.target.closest('.more');
      if (more) {
        var open = more.getAttribute('aria-expanded') !== 'true';
        more.setAttribute('aria-expanded', String(open));
        more.firstChild.textContent = open ? 'Hide details ' : 'Show details ';
        $('#' + more.getAttribute('aria-controls')).classList.toggle('open', open);
        return;
      }
      var run = e.target.closest('[data-cmd]');
      if (run) runInTerminal(run.dataset.cmd);
    });
    apply();
  })();

  /* =====================================================================
     JOURNEY
     ===================================================================== */
  (function journey() {
    var META = { done: ['✓', 'Completed'], now: ['✦', 'In progress'], next: ['◎', 'Next goal'], future: ['↗', 'Ambition'] };
    var TABS = [['all', 'Everything'], ['done', 'Completed'], ['now', 'Now'], ['ahead', 'Ahead']], tab = 'all';
    var tabsEl = $('#jtabs');
    JOURNEY.forEach(function (j) {
      var li = document.createElement('li');
      li.className = 'tl reveal'; li.dataset.state = j.state;
      li.innerHTML = '<span class="tl-ico ' + j.state + '" aria-hidden="true">' + META[j.state][0] + '</span><div class="glass"><div class="tl-meta"><b>' + esc(j.when) + '</b><span>' + META[j.state][1] + '</span></div><h3>' + esc(j.title) + '</h3><p>' + esc(j.text) + '</p></div>';
      timeline.appendChild(li);
      if ('IntersectionObserver' in window) ro.observe(li); else li.classList.add('in');
    });
    tabsEl.innerHTML = TABS.map(function (t) { return '<button type="button" data-t="' + t[0] + '" aria-pressed="' + (t[0] === tab) + '">' + t[1] + '</button>'; }).join('');
    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-t]'); if (!b) return;
      tab = b.dataset.t;
      $$('[data-t]', tabsEl).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('.tl', timeline).forEach(function (li) {
        var s = li.dataset.state;
        li.hidden = !(tab === 'all' || (tab === 'ahead' ? s === 'next' || s === 'future' : s === tab));
        li.classList.add('in');
      });
      onScroll();
    });
    onScroll();
  })();

  /* =====================================================================
     TERMINAL
     ===================================================================== */
  (function terminal() {
    var PROMPT = 'hadi@universe:~$', linesEl = $('#termlines'), body = $('#termbody'), input = $('#term-input');
    var history = [], hIdx = -1, busy = false, timers = [];
    var HELP = [['help', 'list commands'], ['about', 'who I am'], ['skills', 'my stack'], ['projects', 'list projects'], ['project <id>', 'details: florasentinel, er-sim, movie-db'], ['run anomaly [metric]', 'run the anomaly detector live (temperature, moisture, humidity, light)'], ['stats', 'dataset summary'], ['contact', 'how to reach me'], ['clear', 'clear the screen']];
    var ALIAS = { florasentinel: 'florasentinel', flora: 'florasentinel', er: 'er-sim', 'er-sim': 'er-sim', movie: 'movie-db', 'movie-db': 'movie-db' };
    var pad = function (s, n) { return String(s).padEnd(n, ' '); };

    function exec(raw) {
      var parts = raw.trim().split(/\s+/), cmd = (parts[0] || '').toLowerCase(), args = parts.slice(1);
      switch (cmd) {
        case '': return [];
        case 'help': return ['Available commands:'].concat(HELP.map(function (h) { return '  ' + pad(h[0], 24) + ' ' + h[1]; }));
        case 'about': return [PROFILE.summary, '', 'Location: ' + PROFILE.location];
        case 'whoami': return [PROFILE.name + ': ' + PROFILE.role];
        case 'skills': return SKILLS.map(function (s) { return '  ' + pad(s.name, 18) + ' [' + s.status + ']'; });
        case 'projects': return PROJECTS.map(function (p) { return '  ' + pad(p.id, 15) + ' ' + p.title + '  (' + p.cats.join(', ') + ')'; });
        case 'project': {
          var id = ALIAS[(args[0] || '').toLowerCase()], p = PROJECTS.filter(function (x) { return x.id === id; })[0];
          if (!p) return ['usage: project <florasentinel | er-sim | movie-db>'];
          return [p.title + ': ' + p.subtitle, 'Role: ' + p.role, 'Stack: ' + p.tech.join(', '), ''].concat(p.points.map(function (t) { return '  • ' + t; }));
        }
        case 'run': {
          if ((args[0] || '').toLowerCase() !== 'anomaly') return ['usage: run anomaly [temperature|moisture|humidity|light]'];
          var metric = (args[1] || 'temperature').toLowerCase();
          if (!METRICS[metric]) return ['unknown metric "' + args[1] + '". try: ' + Object.keys(METRICS).join(', ')];
          var k = 3, w = 12, r = detect(metric, { k: k, window: w, deseason: true }), unit = METRICS[metric].unit;
          var hits = r.rows.filter(function (x) { return x.flagged; });
          var out = ['loading 168 hourly ' + METRICS[metric].label.toLowerCase() + ' readings ... ok', 'preprocessing: remove daily cycle, rolling window = ' + w + 'h, threshold = ' + k + 'σ', 'mean = ' + r.mean.toFixed(2) + ' ' + unit + '   σ = ' + r.std.toFixed(2), '', 'flagged ' + hits.length + ' reading' + (hits.length === 1 ? '' : 's') + ':'];
          hits.slice(0, 10).forEach(function (x) { out.push('  D' + (Math.floor(x.h / 24) + 1) + ' ' + String(x.h % 24).padStart(2, '0') + ':00   ' + pad(x.v.toFixed(1) + ' ' + unit, 10) + ' ' + (x.truth ? '✔ true fault' : '✘ false alarm')); });
          if (hits.length > 10) out.push('  ... and ' + (hits.length - 10) + ' more');
          out.push('', 'detector  precision ' + Math.round(r.detector.precision * 100) + '%  recall ' + Math.round(r.detector.recall * 100) + '%  (' + r.detector.fp + ' false alarms)', 'baseline  precision ' + Math.round(r.baseline.precision * 100) + '%  recall ' + Math.round(r.baseline.recall * 100) + '%  (' + r.baseline.fp + ' false alarms)  ← fixed care-range rule', '(synthetic sample data, seeded. Tune it visually in the Playground.)');
          return out;
        }
        case 'stats': return Object.keys(METRICS).map(function (m) { var r = detect(m); return '  ' + pad(METRICS[m].label, 14) + ' mean ' + pad(r.mean.toFixed(1), 6) + ' min ' + pad(r.min.toFixed(1), 6) + ' max ' + pad(r.max.toFixed(1), 6) + ' ' + METRICS[m].unit; });
        case 'contact': return ['  email   ' + PROFILE.email, '  phone   ' + PROFILE.phone, '  github  ' + PROFILE.github];
        case 'sudo': return ['nice try. permission denied (but I do like the curiosity).'];
        default: return ['command not found: ' + parts[0] + '. type "help"'];
      }
    }

    function add(cls, text) {
      var d = document.createElement('div');
      d.className = 'term-line ' + cls;
      if (cls === 'cmd') { var p = document.createElement('span'); p.className = 'prompt'; p.textContent = PROMPT; d.appendChild(p); }
      d.appendChild(document.createTextNode(text));
      linesEl.appendChild(d);
      body.scrollTop = body.scrollHeight;
    }
    function submit(raw) {
      if (raw.trim() === 'clear') { linesEl.innerHTML = ''; return; }
      if (raw.trim()) { history.unshift(raw); hIdx = -1; }
      add('cmd', raw);
      var res = exec(raw);
      if (!res.length) return;
      busy = true;
      res.forEach(function (s, i) {
        timers.push(setTimeout(function () { add('out', s); if (i === res.length - 1) busy = false; }, still ? 0 : 60 + i * (res.length > 14 ? 25 : 45)));
      });
    }

    add('sys', 'Data Universe shell v1.0. Type "help" to begin.');
    body.addEventListener('click', function (e) { if (!e.target.closest('button')) input.focus(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); if (!busy) { var v = input.value; input.value = ''; submit(v); } }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (hIdx < history.length - 1) { hIdx++; input.value = history[hIdx]; } }
      else if (e.key === 'ArrowDown') { e.preventDefault(); hIdx = Math.max(-1, hIdx - 1); input.value = hIdx === -1 ? '' : history[hIdx]; }
    });
    $('.term-quick').addEventListener('click', function (e) { var b = e.target.closest('[data-cmd]'); if (b && !busy) submit(b.dataset.cmd); });

    // project cards type a command into the terminal, then run it
    window.addEventListener('terminal:run', function (e) {
      var cmd = e.detail, i = 0;
      input.value = '';
      if (still) { submit(cmd); return; }
      var t = setInterval(function () {
        i++; input.value = cmd.slice(0, i);
        if (i >= cmd.length) { clearInterval(t); setTimeout(function () { input.value = ''; submit(cmd); }, 250); }
      }, 35);
    });
  })();

  /* =====================================================================
     CONTACT FORM (opens the visitor's email app)
     ===================================================================== */
  (function contact() {
    var form = $('#form'), status = $('#status');
    function err(id, msg, field) { $('#e-' + id).textContent = msg; field.setAttribute('aria-invalid', msg ? 'true' : 'false'); return !msg; }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = form.elements.name, m = form.elements.email, t = form.elements.msg, ok = true;
      ok = err('name', n.value.trim() ? '' : 'Please enter your name.', n) && ok;
      ok = err('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim()) ? '' : 'Please enter a valid email address.', m) && ok;
      ok = err('msg', t.value.trim().length >= 10 ? '' : 'Message must be at least 10 characters.', t) && ok;
      if (!ok) { status.textContent = ''; form.querySelector('[aria-invalid="true"]').focus(); return; }
      var subject = encodeURIComponent('Portfolio enquiry from ' + n.value.trim());
      var bodyTxt = encodeURIComponent(t.value.trim() + '\n\nFrom: ' + n.value.trim() + ' (' + m.value.trim() + ')');
      window.location.href = 'mailto:' + PROFILE.email + '?subject=' + subject + '&body=' + bodyTxt;
      status.textContent = 'Opening your email app…';
      form.reset();
    });
  })();

  $('#year').textContent = new Date().getFullYear();
  onScroll();
})();
