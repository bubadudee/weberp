const state = {
  operations: [
    {
      id: 1,
      type: "transfer",
      warehouse: "Склад №1",
      person: "Анна Смирнова",
      date: "2024-03-21",
      status: "completed",
      description: "Перемещение погрузчика к складу №2",
    },
    {
      id: 2,
      type: "writeoff",
      warehouse: "Склад №3",
      person: "Виктор Никитин",
      date: "2024-03-20",
      status: "pending",
      description: "Списание стеллажа по акту №2024-03",
    },
    {
      id: 3,
      type: "repair",
      warehouse: "Сервис",
      person: "Алексей Петров",
      date: "2024-03-19",
      status: "completed",
      description: "Отправка штабелёра в ремонт",
    },
    {
      id: 4,
      type: "transfer",
      warehouse: "Склад №2",
      person: "Мария Белова",
      date: "2024-03-18",
      status: "completed",
      description: "Перемещение паллетных весов",
    },
    {
      id: 5,
      type: "repair",
      warehouse: "Склад №1",
      person: "Артем Кузнецов",
      date: "2024-03-17",
      status: "in_progress",
      description: "Диагностика сканеров штрих-кодов",
    },
  ],
  equipment: [
    {
      id: 1,
      inventory: "EQ-001245",
      name: "Погрузчик электрический",
      serial: "SN-98123",
      warehouse: "Склад №1",
      state: "in_use",
      person: "Анна Смирнова",
    },
    {
      id: 2,
      inventory: "EQ-001248",
      name: "Ручной штабелер",
      serial: "SN-99183",
      warehouse: "Склад №2",
      state: "repair",
      person: "Алексей Петров",
    },
    {
      id: 3,
      inventory: "EQ-001251",
      name: "Тележка гидравлическая",
      serial: "SN-99733",
      warehouse: "Склад №3",
      state: "in_use",
      person: "Мария Белова",
    },
    {
      id: 4,
      inventory: "EQ-001255",
      name: "Стеллаж модульный",
      serial: "SN-90554",
      warehouse: "Склад №2",
      state: "in_use",
      person: "Иван Жуков",
    },
    {
      id: 5,
      inventory: "EQ-001259",
      name: "Конвейер ленточный",
      serial: "SN-90111",
      warehouse: "Склад №1",
      state: "repair",
      person: "Служба эксплуатации",
    },
    {
      id: 6,
      inventory: "EQ-001263",
      name: "Сканер штрих-кодов",
      serial: "SN-88811",
      warehouse: "Склад №3",
      state: "writeoff",
      person: "Артем Кузнецов",
    },
  ],
  warehouses: [
    {
      name: "Склад №1",
      city: "Москва",
      total: 520,
      repair: 14,
    },
    {
      name: "Склад №2",
      city: "Казань",
      total: 320,
      repair: 8,
    },
    {
      name: "Склад №3",
      city: "Новосибирск",
      total: 280,
      repair: 6,
    },
    {
      name: "Склад-Сервис",
      city: "Москва",
      total: 150,
      repair: 35,
    },
  ],
  transfers: [
    {
      id: 1,
      from: "Склад №1",
      to: "Склад №2",
      date: "2024-03-18",
      person: "Мария Белова",
    },
    {
      id: 2,
      from: "Склад №2",
      to: "Склад №3",
      date: "2024-03-15",
      person: "Антон Соловьев",
    },
    {
      id: 3,
      from: "Склад №3",
      to: "Сервис",
      date: "2024-03-12",
      person: "Алексей Петров",
    },
  ],
  documents: [
    {
      id: "PR-2024-031",
      type: "incoming",
      title: "Поступление партии сканеров",
      warehouse: "Склад №1",
      person: "Анна Смирнова",
      status: "completed",
      date: "2024-03-21",
      description: "20 единиц сканеров поступили от поставщика ООО «СканТех».",
    },
    {
      id: "TR-2024-118",
      type: "transfer",
      title: "Перемещение погрузчика",
      warehouse: "Склад №2",
      person: "Мария Белова",
      status: "completed",
      date: "2024-03-19",
      description: "Погрузчик EQ-001245 перемещён на площадку склада №2.",
    },
    {
      id: "WR-2024-044",
      type: "writeoff",
      title: "Списание оборудования",
      warehouse: "Склад №3",
      person: "Артем Кузнецов",
      status: "pending",
      date: "2024-03-17",
      description: "Списание сканера штрих-кодов SN-88811 в связи с поломкой.",
    },
    {
      id: "RP-2024-022",
      type: "repair",
      title: "Отправка на ремонт",
      warehouse: "Склад-Сервис",
      person: "Алексей Петров",
      status: "in_progress",
      date: "2024-03-16",
      description: "Штабелер EQ-001248 передан в сервисную службу.",
    },
    {
      id: "RT-2024-007",
      type: "return",
      title: "Возврат оборудования",
      warehouse: "Склад №1",
      person: "Иван Жуков",
      status: "completed",
      date: "2024-03-14",
      description: "Возврат тележки EQ-001251 из аренды.",
    },
  ],
  reports: [
    {
      id: 1,
      period: "Март 2024",
      items: 1240,
      warehouse: "Все склады",
      responsible: "Виктория М.",
    },
    {
      id: 2,
      period: "Февраль 2024",
      items: 1210,
      warehouse: "Склад №1",
      responsible: "Иван Жуков",
    },
    {
      id: 3,
      period: "Январь 2024",
      items: 1180,
      warehouse: "Склад №2",
      responsible: "Мария Белова",
    },
  ],
};

const translations = new Map();
let currentLang = "ru";
let currentDictionary = {};

const selectors = {
  views: document.querySelectorAll(".view"),
  sidebarLinks: document.querySelectorAll("[data-route-link]"),
  sidebar: document.querySelector(".sidebar"),
  collapseButton: document.getElementById("collapseSidebar"),
  burger: document.getElementById("toggleSidebar"),
  themeToggle: document.getElementById("themeToggle"),
  languageSelect: document.getElementById("languageSelect"),
  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  main: document.getElementById("mainContent"),
  appShell: document.querySelector(".app-shell"),
  authScreen: document.getElementById("authScreen"),
  authForm: document.getElementById("authForm"),
  authError: document.getElementById("authError"),
  authLogin: document.getElementById("authLogin"),
  authPassword: document.getElementById("authPassword"),
  importInput: document.getElementById("importFile"),
  actionCreate: document.querySelector('[data-action="create"]'),
  actionImport: document.querySelector('[data-action="import"]'),
  actionExport: document.querySelector('[data-action="export"]'),
};

let appInitialized = false;
const AUTH_STORAGE_KEY = "wms-authenticated";
const demoCredentials = {
  username: "admin",
  password: "warehouse123",
};

const badgeMap = {
  transfer: "badge--info",
  writeoff: "badge--err",
  repair: "badge--warn",
  incoming: "badge--ok",
  return: "badge--info",
  completed: "badge--ok",
  pending: "badge--warn",
  in_progress: "badge--warn",
};

const fallbackTypes = {
  transfer: "Перемещение",
  writeoff: "Списание",
  repair: "Ремонт",
  incoming: "Приход",
  return: "Возврат",
};

const fallbackStatuses = {
  completed: "Завершено",
  pending: "Ожидает",
  in_progress: "В процессе",
};

const routeMap = new Map(
  Array.from(selectors.views).map((view) => [view.dataset.route, view])
);

function t(key, fallback = "") {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), currentDictionary) ?? fallback ?? key;
}

function formatDate(value) {
  return new Date(value + "T00:00").toLocaleDateString(currentLang === "en" ? "en-GB" : `${currentLang}-RU`, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function applyRoute(route) {
  const target = routeMap.get(route);
  routeMap.forEach((view, key) => {
    const isActive = view === target;
    view.toggleAttribute("hidden", !isActive);
    view.classList.toggle("is-active", isActive);
    view.inert = !isActive;
  });

  selectors.sidebarLinks.forEach((link) => {
    const linkRoute = link.getAttribute("href").replace("#/", "");
    link.classList.toggle("is-active", linkRoute === route);
  });

  if (target && selectors.main) {
    selectors.main.setAttribute("aria-live", "polite");
    requestAnimationFrame(() => {
      selectors.main.focus({ preventScroll: false });
    });
  }

  if (window.innerWidth <= 1023 && selectors.sidebar?.classList.contains("is-open")) {
    selectors.sidebar.classList.remove("is-open");
    selectors.burger?.setAttribute("aria-expanded", "false");
  }
}

function handleRouting() {
  const hash = window.location.hash || "#/dashboard";
  const route = hash.replace("#/", "");
  if (!routeMap.has(route)) {
    window.location.hash = "#/dashboard";
    return;
  }
  applyRoute(route);
}

function renderOperations(data = state.operations) {
  const tbody = document.getElementById("operationsTable");
  tbody.innerHTML = "";
  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("is-interactive");
    tr.tabIndex = 0;
    tr.dataset.operationId = item.id;
    tr.innerHTML = `
      <td>${item.id}</td>
      <td><span class="badge ${badgeMap[item.type] || "badge--neutral"}">${typeLabel(item.type)}</span></td>
      <td>${item.warehouse}</td>
      <td>${item.person}</td>
      <td>${formatDate(item.date)}</td>
      <td><span class="badge ${badgeMap[item.status] || "badge--neutral"}">${statusLabel(item.status)}</span></td>
    `;
    tr.addEventListener("click", () => openOperationModal(item));
    tr.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        openOperationModal(item);
      }
    });
    tbody.appendChild(tr);
  });
}

function renderEquipment(list = state.equipment) {
  const tbody = document.getElementById("equipmentTable");
  tbody.innerHTML = "";
  list.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.inventory}</td>
      <td>${item.name}</td>
      <td>${item.serial}</td>
      <td>${item.warehouse}</td>
      <td><span class="status-pill status-pill--${item.state}">${translateState(item.state)}</span></td>
      <td>${item.person}</td>
      <td><button class="btn btn--ghost" type="button" data-action="view">${t("equipment.details", "Детали")}</button></td>
    `;
    tr.querySelector("[data-action='view']").addEventListener("click", () => {
      openModal({
        title: item.name,
        body: `
          <p><strong>${t("form.inventory", "Инвентарный номер")}:</strong> ${item.inventory}</p>
          <p><strong>${t("equipment.serial", "Серийный номер")}:</strong> ${item.serial}</p>
          <p><strong>${t("equipment.warehouse", "Склад")}:</strong> ${item.warehouse}</p>
          <p><strong>${t("form.responsible", "Ответственный")}:</strong> ${item.person}</p>
          <p><strong>${t("equipment.state", "Состояние")}:</strong> ${translateState(item.state)}</p>
        `,
      });
    });
    tbody.appendChild(tr);
  });
  const total = document.getElementById("equipmentTotal");
  if (total) {
    total.textContent = list.length.toString();
  }
}

function renderWarehouses() {
  const grid = document.getElementById("warehouseGrid");
  grid.innerHTML = "";
  state.warehouses.forEach((item) => {
    const card = document.createElement("article");
    card.className = "warehouse-card";
    card.innerHTML = `
      <h2>${item.name}</h2>
      <div class="warehouse-card__meta">
        <span>${item.city}</span>
      </div>
      <div class="warehouse-card__stats">
        <div><strong>${item.total}</strong> ед.</div>
        <div class="muted">В ремонте: ${item.repair}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderTransfers() {
  const tbody = document.getElementById("transfersTable");
  tbody.innerHTML = "";
  state.transfers.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${formatDate(item.date)}</td>
      <td>${item.person}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderDocuments(list = state.documents) {
  const timeline = document.getElementById("documentsTimeline");
  timeline.innerHTML = "";
  list.forEach((item) => {
    const node = document.createElement("article");
    node.className = "timeline__item";
    node.tabIndex = 0;
    node.setAttribute("role", "button");
    node.innerHTML = `
      <div class="timeline__header">
        <span class="badge ${badgeMap[item.type] || "badge--neutral"}">${typeLabel(item.type)}</span>
        <strong>${item.id}</strong>
        <span class="muted">${formatDate(item.date)}</span>
      </div>
      <div>
        <h3>${item.title}</h3>
        <p class="muted">${item.warehouse} • ${item.person} • ${statusLabel(item.status)}</p>
      </div>
    `;
    node.addEventListener("click", () => openModal({
      title: item.title,
      body: `
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>${t("form.date", "Дата")}:</strong> ${formatDate(item.date)}</p>
        <p><strong>${t("equipment.warehouse", "Склад")}:</strong> ${item.warehouse}</p>
        <p><strong>${t("form.responsible", "Ответственный")}:</strong> ${item.person}</p>
        <p>${item.description}</p>
      `,
    }));
    node.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        openModal({
          title: item.title,
          body: `
          <p><strong>ID:</strong> ${item.id}</p>
          <p><strong>${t("form.date", "Дата")}:</strong> ${formatDate(item.date)}</p>
          <p><strong>${t("equipment.warehouse", "Склад")}:</strong> ${item.warehouse}</p>
          <p><strong>${t("form.responsible", "Ответственный")}:</strong> ${item.person}</p>
          <p>${item.description}</p>
        `,
      });
      }
    });
    timeline.appendChild(node);
  });
}

function renderReports(list = state.reports) {
  const tbody = document.getElementById("reportsTable");
  tbody.innerHTML = "";
  list.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.period}</td>
      <td>${item.items}</td>
      <td>${item.warehouse}</td>
      <td>${item.responsible}</td>
    `;
    tbody.appendChild(tr);
  });
}

function openOperationModal(item) {
  openModal({
    title: `${t("dashboard.operations.detailTitle", "Операция")} #${item.id}`,
    body: `
      <p><strong>${t("table.type", "Тип")}:</strong> ${typeLabel(item.type)}</p>
      <p><strong>${t("equipment.warehouse", "Склад")}:</strong> ${item.warehouse}</p>
      <p><strong>${t("form.responsible", "Ответственный")}:</strong> ${item.person}</p>
      <p><strong>${t("form.date", "Дата")}:</strong> ${formatDate(item.date)}</p>
      <p>${item.description}</p>
    `,
  });
}

function openModal({ title, body }) {
  if (!selectors.modal) return;
  selectors.modalTitle.textContent = title;
  selectors.modalBody.innerHTML = body;
  if (typeof selectors.modal.showModal === "function") {
    selectors.modal.showModal();
  }
}

function setAuthError(message = "") {
  if (!selectors.authError) return;
  selectors.authError.textContent = message;
}

function showAuthScreen() {
  selectors.authScreen?.removeAttribute("hidden");
  selectors.authScreen?.setAttribute("aria-hidden", "false");
  if (selectors.authScreen) {
    selectors.authScreen.inert = false;
  }
  if (selectors.appShell) {
    selectors.appShell.setAttribute("hidden", "true");
    selectors.appShell.setAttribute("aria-hidden", "true");
    selectors.appShell.inert = true;
  }
  selectors.authLogin?.focus({ preventScroll: false });
}

function showAppShell() {
  selectors.authScreen?.setAttribute("hidden", "true");
  selectors.authScreen?.setAttribute("aria-hidden", "true");
  if (selectors.authScreen) {
    selectors.authScreen.inert = true;
  }
  selectors.appShell?.removeAttribute("hidden");
  selectors.appShell?.setAttribute("aria-hidden", "false");
  if (selectors.appShell) {
    selectors.appShell.inert = false;
  }
}

function initAuth() {
  const authenticated = localStorage.getItem(AUTH_STORAGE_KEY) === "true";
  if (authenticated) {
    showAppShell();
    initializeApp();
  } else {
    setAuthError("");
    showAuthScreen();
  }

  selectors.authForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameValue = selectors.authLogin?.value ?? "";
    const username = usernameValue.trim();
    const password = selectors.authPassword?.value ?? "";
    const success =
      typeof username === "string" &&
      username.toLowerCase() === demoCredentials.username.toLowerCase() &&
      password === demoCredentials.password;

    if (success) {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
      setAuthError("");
      showAppShell();
      selectors.authForm.reset();
      initializeApp();
    } else {
      setAuthError(t("auth.error", "Неверный логин или пароль"));
      selectors.authPassword?.focus({ preventScroll: true });
    }
  });

  [selectors.authLogin, selectors.authPassword].forEach((field) => {
    field?.addEventListener("input", () => setAuthError(""));
  });
}

function translateState(code) {
  return t(`states.${code}`, {
    in_use: "В работе",
    repair: "В ремонте",
    writeoff: "Списано",
  }[code] || code);
}

function typeLabel(type) {
  return t(`types.${type}`, fallbackTypes[type] || type);
}

function statusLabel(status) {
  return t(`statuses.${status}`, fallbackStatuses[status] || status);
}

function initEquipmentFilters() {
  const search = document.getElementById("equipmentSearch");
  if (!search) return;
  search.addEventListener("input", (evt) => {
    const query = evt.target.value.trim().toLowerCase();
    const filtered = state.equipment.filter((item) => {
      const values = [item.inventory, item.name, item.serial, item.warehouse, item.person];
      return values.some((value) => value.toLowerCase().includes(query));
    });
    renderEquipment(filtered);
  });
}

function initTransferForm() {
  const form = document.getElementById("transferForm");
  if (!form) return;
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    alert(t("transfers.saved", "Перемещение сохранено (демо)"));
    form.reset();
  });
}

function initWriteoffForm() {
  const form = document.getElementById("writeoffForm");
  if (!form) return;
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    alert(t("writeoff.saved", "Списание сохранено (демо)"));
    form.reset();
  });
}

function initEquipmentForm() {
  const form = document.getElementById("equipmentForm");
  if (!form) return;
  const warehouseSelect = form.querySelector("select[name='warehouse']");
  const personSelect = form.querySelector("select[name='person']");
  const warehouses = [...new Set(state.equipment.map((item) => item.warehouse))];
  const persons = [...new Set(state.equipment.map((item) => item.person))];
  warehouses.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    warehouseSelect.appendChild(option);
  });
  persons.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    personSelect.appendChild(option);
  });
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    state.equipment.push({
      id: state.equipment.length + 1,
      inventory: data.inventory,
      name: data.name,
      serial: data.serial,
      warehouse: data.warehouse,
      state: data.state,
      person: data.person,
    });
    renderEquipment(state.equipment);
    alert(t("equipmentAdd.saved", "Оборудование добавлено (демо)"));
    form.reset();
  });
}

function initDocumentsFilters() {
  const form = document.getElementById("documentsFilters");
  if (!form) return;
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const data = new FormData(form);
    const type = data.get("type");
    const from = data.get("from");
    const to = data.get("to");
    const search = data.get("search")?.toLowerCase();
    const filtered = state.documents.filter((doc) => {
      const matchType = type && type !== "all" ? doc.type === type : true;
      const matchFrom = from ? doc.date >= from : true;
      const matchTo = to ? doc.date <= to : true;
      const matchSearch = search
        ? [doc.id, doc.warehouse, doc.person].some((value) =>
            value.toLowerCase().includes(search)
          )
        : true;
      return matchType && matchFrom && matchTo && matchSearch;
    });
    renderDocuments(filtered);
  });
}

function initReportsFilters() {
  const form = document.getElementById("reportsFilters");
  const exportCsv = document.getElementById("exportCsv");
  const exportPdf = document.getElementById("exportPdf");
  if (form) {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // демо фильтрация
      alert("Фильтры отчётов применены (демо)");
    });
  }
  if (exportCsv) {
    exportCsv.addEventListener("click", () => {
      const header = ["ID", "Период", "Количество", "Склад", "Ответственный"];
      const rows = state.reports.map((item) => [item.id, item.period, item.items, item.warehouse, item.responsible]);
      const csv = [header, ...rows].map((row) => row.join(";")).join("\n");
      const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "reports.csv";
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
  if (exportPdf) {
    exportPdf.addEventListener("click", () => {
      window.print();
    });
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("wms-theme") || "light";
  setTheme(savedTheme);
  selectors.themeToggle?.addEventListener("click", () => {
    const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("wms-theme", theme);
  if (selectors.themeToggle) {
    selectors.themeToggle.textContent = theme === "dark" ? t("actions.themeDark", "Тёмная тема") : t("actions.themeLight", "Светлая тема");
    selectors.themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }
}

function initSidebar() {
  const closeSidebar = () => {
    if (selectors.sidebar?.classList.contains("is-open")) {
      selectors.sidebar.classList.remove("is-open");
      selectors.burger?.setAttribute("aria-expanded", "false");
    }
  };
  selectors.collapseButton?.addEventListener("click", () => {
    selectors.sidebar?.classList.toggle("is-collapsed");
    const expanded = !selectors.sidebar?.classList.contains("is-collapsed");
    selectors.collapseButton.setAttribute("aria-expanded", String(expanded));
  });
  selectors.burger?.addEventListener("click", () => {
    const opened = selectors.sidebar?.classList.toggle("is-open");
    selectors.burger.setAttribute("aria-expanded", String(Boolean(opened)));
  });
  selectors.main?.addEventListener("click", closeSidebar);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      closeSidebar();
    }
  });
}

async function loadTranslations(lang) {
  if (translations.has(lang)) {
    return translations.get(lang);
  }
  const response = await fetch(`i18n/${lang}.json`);
  if (!response.ok) {
    throw new Error("Не удалось загрузить переводы");
  }
  const data = await response.json();
  translations.set(lang, data);
  return data;
}

async function applyTranslations(lang) {
  const dict = await loadTranslations(lang);
  document.documentElement.lang = lang;
  currentDictionary = dict;
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = t(key, node.textContent?.trim());
    if (typeof value === "string" && value) {
      node.textContent = value;
    }
  });
  currentLang = lang;
  selectors.languageSelect.value = lang;
  localStorage.setItem("wms-lang", lang);
  setTheme(document.documentElement.dataset.theme || "light");
  renderOperations(state.operations);
  renderEquipment(state.equipment);
  renderDocuments(state.documents);
  renderReports(state.reports);
}

function initLanguage() {
  const saved = localStorage.getItem("wms-lang") || "ru";
  applyTranslations(saved).catch(() => applyTranslations("ru"));
  selectors.languageSelect?.addEventListener("change", (evt) => {
    applyTranslations(evt.target.value).catch((error) => {
      console.error(error);
    });
  });
}

function initModal() {
  if (!selectors.modal) return;
  selectors.modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    selectors.modal.close();
  });
}

function initTopbarActions() {
  selectors.actionCreate?.addEventListener("click", () => {
    openModal({
      title: t("actions.createTitle", "Быстрые действия"),
      body: `
        <p>${t("actions.createBody", "Выберите необходимое действие")}</p>
        <div class="modal__actions">
          <a class="btn btn--primary" href="#/equipment-add">${t("actions.createEquipment", "Добавить оборудование")}</a>
          <a class="btn btn--ghost" href="#/transfers">${t("actions.createTransfer", "Создать перемещение")}</a>
        </div>
      `,
    });
  });

  selectors.actionImport?.addEventListener("click", () => {
    selectors.importInput?.click();
  });

  selectors.importInput?.addEventListener("change", (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) return;

    openModal({
      title: t("actions.importTitle", "Импорт данных"),
      body: `
        <p>${t("actions.importSuccess", "Файл успешно импортирован (демо)")}</p>
        <p class="muted">${t("actions.importHint", "Загруженный файл")}: <strong>${file.name}</strong></p>
      `,
    });

    input.value = "";
  });

  selectors.actionExport?.addEventListener("click", () => {
    const csv = generateEquipmentCsv();
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "equipment-export.csv";
    link.click();
    URL.revokeObjectURL(link.href);

    openModal({
      title: t("actions.exportTitle", "Экспорт данных"),
      body: `<p>${t("actions.exportSuccess", "Экспорт завершён и файл сохранён (демо)")}</p>`,
    });
  });
}

function generateEquipmentCsv() {
  const header = [
    t("equipment.inventory", "Инвентарный №"),
    t("equipment.name", "Наименование"),
    t("equipment.serial", "Серийный №"),
    t("equipment.warehouse", "Склад"),
    t("equipment.state", "Состояние"),
    t("equipment.person", "Ответственный"),
  ];
  const rows = state.equipment.map((item) => [
    item.inventory,
    item.name,
    item.serial,
    item.warehouse,
    translateState(item.state),
    item.person,
  ]);
  return [header, ...rows]
    .map((row) => row.join(";"))
    .join("\n");
}

function initializeApp() {
  if (appInitialized) return;
  appInitialized = true;

  document.getElementById("year").textContent = new Date().getFullYear();
  initSidebar();
  initTheme();
  initLanguage();
  initEquipmentFilters();
  initTransferForm();
  initWriteoffForm();
  initEquipmentForm();
  initDocumentsFilters();
  initReportsFilters();
  initModal();
  initTopbarActions();

  renderOperations();
  renderEquipment();
  renderWarehouses();
  renderTransfers();
  renderDocuments();
  renderReports();

  handleRouting();
  window.addEventListener("hashchange", handleRouting);
}

document.addEventListener("DOMContentLoaded", () => {
  initAuth();
});
