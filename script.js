
      const isStandalonePwa = window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;
      document.body.classList.toggle('is-pwa', isStandalonePwa);
      const DB_NAME = 'salary-tracker-db';
      const DB_VERSION = 6;
      const DAY_NAMES_BY_LANGUAGE = {
        ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      };
      const TRANSLATIONS = {
        ru: {
          weeklyTotal: 'Общая сумма за текущую неделю', shifts: 'Отработано смен', hours: 'Отработано часов', weeklyStats: 'Статистика за недели', shiftList: 'Список смен', settings: 'Настройки', language: 'Язык', theme: 'Тема', darkTheme: 'Тёмная', lightTheme: 'Светлая', databaseUsage: 'Данные IndexedDB', monthlyTotal: 'Общие траты в месяц', monthlyPayments: 'Ежемесячные платежи', addMonthlyPayment: 'Добавить плату', editMonthlyPayment: 'Редактировать плату', monthlyPaymentActions: 'Действия с платежом', monthlyPaymentName: 'Название', monthlyPaymentAmount: 'Сумма', nextPayment: 'Следующая оплата', expiredPayment: 'Дата оплаты истекла — обновить', invalidPastPayment: 'Выберите дату сегодня или позднее.', noMonthlyPayments: 'Пока нет ежемесячных платежей. Добавьте первый.', invalidMonthlyPayment: 'Заполните название, сумму и дату следующей оплаты корректно.', priceBookProducts: 'Товары', addProduct: 'Добавить товар', editProduct: 'Редактировать товар', productActions: 'Действия с товаром', productName: 'Название товара', productPrice: 'Стоимость', purchasePlace: 'Где купили', productPhoto: 'Фото (необязательно)', noProducts: 'Пока нет товаров. Добавьте первый.', invalidProduct: 'Заполните название, стоимость и место покупки корректно.', addShift: 'Добавить смену', editShift: 'Редактировать смену', editShifts: 'Редактировать смены', weekActions: 'Действия с неделей', shiftActions: 'Действия со сменой', close: 'Закрыть', workName: 'Название работы', workPlaceholder: 'Например: Смена в кафе', weekday: 'День недели', hoursLabel: 'Отработано часов', amount: 'Сумма', cancel: 'Отмена', back: 'Назад', continue: 'Продолжить', save: 'Сохранить', noShifts: 'Пока нет ни одной смены. Добавьте первую запись.', noStats: 'Статистика будет появляться после каждого сброса в понедельник.', unavailable: 'Детали смен для этой сохранённой недели недоступны.', weekShifts: 'Смены за неделю', invalidForm: 'Заполните название, часы и сумму корректно.', shiftsCount: 'смен', week: 'Неделя', hoursShort: 'ч', edit: 'Редактировать', remove: 'Удалить'
        },
        en: {
          weeklyTotal: 'Current week total', shifts: 'Shifts', hours: 'Hours worked', weeklyStats: 'Weekly statistics', shiftList: 'Shift list', settings: 'Settings', language: 'Language', theme: 'Theme', darkTheme: 'Dark', lightTheme: 'Light', databaseUsage: 'IndexedDB data', monthlyTotal: 'Total monthly spending', monthlyPayments: 'Monthly payments', addMonthlyPayment: 'Add payment', editMonthlyPayment: 'Edit payment', monthlyPaymentActions: 'Payment actions', monthlyPaymentName: 'Name', monthlyPaymentAmount: 'Amount', nextPayment: 'Next payment', expiredPayment: 'Payment date has passed — update', invalidPastPayment: 'Choose today or a later date.', noMonthlyPayments: 'No monthly payments yet. Add your first one.', invalidMonthlyPayment: 'Enter a valid name, amount, and next-payment date.', priceBookProducts: 'Products', addProduct: 'Add product', editProduct: 'Edit product', productActions: 'Product actions', productName: 'Product name', productPrice: 'Price', purchasePlace: 'Place of purchase', productPhoto: 'Photo (optional)', noProducts: 'No products yet. Add your first one.', invalidProduct: 'Enter a valid product name, price, and purchase place.', addShift: 'Add shift', editShift: 'Edit shift', editShifts: 'Edit shifts', weekActions: 'Week actions', shiftActions: 'Shift actions', close: 'Close', workName: 'Work name', workPlaceholder: 'For example: Café shift', weekday: 'Weekday', hoursLabel: 'Hours worked', amount: 'Amount', cancel: 'Cancel', back: 'Back', continue: 'Continue', save: 'Save', noShifts: 'No shifts yet. Add your first entry.', noStats: 'Statistics will appear after the next Monday reset.', unavailable: 'Shift details are unavailable for this saved week.', weekShifts: 'Shifts for week', invalidForm: 'Enter a valid work name, hours, and amount.', shiftsCount: 'shifts', week: 'Week', hoursShort: 'h', edit: 'Edit', remove: 'Delete'
        }
      };

      Object.assign(TRANSLATIONS.ru, { general: 'Общие', application: 'Приложение', developerMode: 'Режим разработчика' });
      Object.assign(TRANSLATIONS.en, { general: 'General', application: 'Application', developerMode: 'Developer mode' });

      Object.assign(TRANSLATIONS.ru, {
        shoppingSetupTitle: 'Сколько можно тратить в день?', saveShoppingLimit: 'Начать', dailyLimit: 'Дневной лимит', availableToday: 'Доступно', spentToday: 'Потрачено сегодня', shoppingInvalidLimit: 'Введите дневной лимит больше нуля.', carryOverLabel: 'Перерасход за вчера: {amount}', shoppingProgressStyle: 'Вид индикатора', shoppingProgressBar: 'Полоса', shoppingProgressCircle: 'Круг', shoppingSettingsSection: 'Shopping', shoppingQuickActions: 'Быстро добавить', shoppingEditTotal: 'Изменить сумму', addShoppingExpense: 'Добавить трату', shoppingExpenseAmount: 'Сумма траты', shoppingSpentDialogDescription: 'Введите итоговую сумму трат за сегодня.', shoppingInvalidSpent: 'Введите сумму больше нуля.', shoppingOverLimit: 'Лимит превышен на {amount}'
      });
      Object.assign(TRANSLATIONS.en, {
        shoppingSetupTitle: 'How much can you spend per day?', saveShoppingLimit: 'Start', dailyLimit: 'Daily limit', availableToday: 'Available', spentToday: 'Spent today', shoppingInvalidLimit: 'Enter a daily limit greater than zero.', carryOverLabel: 'Yesterday’s overspend: {amount}', shoppingProgressStyle: 'Indicator style', shoppingProgressBar: 'Bar', shoppingProgressCircle: 'Circle', shoppingSettingsSection: 'Shopping', shoppingQuickActions: 'Quick add', shoppingEditTotal: 'Edit total', addShoppingExpense: 'Add expense', shoppingExpenseAmount: 'Expense amount', shoppingSpentDialogDescription: 'Enter today’s total spending.', shoppingInvalidSpent: 'Enter an amount greater than zero.', shoppingOverLimit: 'Limit exceeded by {amount}'
      });

      Object.assign(TRANSLATIONS.ru, { priceBookLoading: 'Подготавливаем товары…' });
      Object.assign(TRANSLATIONS.en, { priceBookLoading: 'Preparing products…' });
      Object.assign(TRANSLATIONS.ru, {
        carryOverLabel: 'Остаток перерасхода: {amount}',
        shoppingCreditLabel: 'Накоплено с прошлых дней: {amount}',
        shoppingHistory: 'Расходы за прошлые дни',
        shoppingHistoryAvailable: 'Доступно: {amount}',
        shoppingHistoryEmpty: 'Пока нет прошлых дней.',
        shoppingDeveloperTools: 'Инструменты разработчика',
        shoppingDeveloperDate: 'Дата расхода',
        shoppingDeveloperAmount: 'Сумма расхода',
        shoppingDeveloperAdd: 'Добавить расход',
        shoppingDeveloperDelete: 'Удалить запись дня',
        shoppingDeveloperInvalid: 'Выберите корректную дату и сумму больше нуля.',
        shoppingDeveloperDeleteMissing: 'На выбранную дату нет записи.',
        shoppingDeveloperDisabled: 'Включите режим разработчика в настройках.',
        shoppingCarryBalance: 'Баланс с прошлых дней',
        shoppingCarryBalanceHint: 'Положительное число — накоплено, отрицательное — перерасход.',
        shoppingCarryEnabled: 'Перенос средств',
        shoppingInvalidCarryBalance: 'Введите корректный баланс с прошлых дней.'
      });
      Object.assign(TRANSLATIONS.en, {
        carryOverLabel: 'Remaining overspend: {amount}',
        shoppingCreditLabel: 'Saved from previous days: {amount}',
        shoppingHistory: 'Previous days',
        shoppingHistoryAvailable: 'Available: {amount}',
        shoppingHistoryEmpty: 'No previous days yet.',
        shoppingDeveloperTools: 'Developer tools',
        shoppingDeveloperDate: 'Expense date',
        shoppingDeveloperAmount: 'Expense amount',
        shoppingDeveloperAdd: 'Add expense',
        shoppingDeveloperDelete: 'Delete day entry',
        shoppingDeveloperInvalid: 'Enter a valid date and an amount greater than zero.',
        shoppingDeveloperDeleteMissing: 'There is no entry for the selected date.',
        shoppingDeveloperDisabled: 'Enable Developer mode in Settings.',
        shoppingCarryBalance: 'Balance from previous days',
        shoppingCarryBalanceHint: 'A positive value is saved money; a negative value is overspending.',
        shoppingCarryEnabled: 'Carry funds over',
        shoppingInvalidCarryBalance: 'Enter a valid balance from previous days.'
      });

      Object.assign(TRANSLATIONS.ru, {
        todoTasks: 'Задачи',
        addTodo: 'Добавить задачу',
        editTodo: 'Редактировать задачу',
        todoTaskTitle: 'Задача',
        todoTaskPlaceholder: 'Например: Купить продукты',
        todoDetails: 'Подробности',
        todoDetailsPlaceholder: 'Добавьте детали, если нужно',
        todoNoDetails: 'Подробностей пока нет.',
        todoEmpty: 'Пока нет задач. Добавьте первую.',
        todoInvalid: 'Введите название задачи.',
        todoCompletedCount: 'Готово: {done} из {total}'
      });
      Object.assign(TRANSLATIONS.en, {
        todoTasks: 'Tasks',
        addTodo: 'Add task',
        editTodo: 'Edit task',
        todoTaskTitle: 'Task',
        todoTaskPlaceholder: 'For example: Buy groceries',
        todoDetails: 'Details',
        todoDetailsPlaceholder: 'Add details if needed',
        todoNoDetails: 'No details yet.',
        todoEmpty: 'No tasks yet. Add your first one.',
        todoInvalid: 'Enter a task name.',
        todoCompletedCount: 'Done: {done} of {total}'
      });

      const form = document.getElementById('entryForm');
      const workNameInput = document.getElementById('workNameInput');
      const weekdaySelect = document.getElementById('weekdaySelect');
      const hoursInput = document.getElementById('hoursInput');
      const amountInput = document.getElementById('amountInput');
      const totalAmountEl = document.getElementById('totalAmount');
      const entryCountEl = document.getElementById('entryCount');
      const hoursCountEl = document.getElementById('hoursCount');
      const entryListEl = document.getElementById('entryList');
      const statsListEl = document.getElementById('statsList');
      const suggestionsList = document.getElementById('suggestionsList');
      const weekModal = document.getElementById('weekModal');
      const weekActionsModal = document.getElementById('weekActionsModal');
      const entryActionsModal = document.getElementById('entryActionsModal');
      const weekEntriesList = document.getElementById('weekEntriesList');
      const weekModalTitle = document.getElementById('weekModalTitle');
      const weekModalSummary = document.getElementById('weekModalSummary');
      const stepProgress = document.getElementById('stepProgress');
      const salaryApp = document.getElementById('salaryApp');
      const monthlyApp = document.getElementById('monthlyApp');
      const shoppingApp = document.getElementById('shoppingApp');
      const priceBookApp = document.getElementById('priceBookApp');
      const todoApp = document.getElementById('todoApp');
      const todoList = document.getElementById('todoList');
      const todoProgress = document.getElementById('todoProgress');
      const todoModal = document.getElementById('todoModal');
      const todoForm = document.getElementById('todoForm');
      const todoTitleInput = document.getElementById('todoTitleInput');
      const todoDetailsInput = document.getElementById('todoDetailsInput');
      const todoModalTitle = document.getElementById('todoModalTitle');
      const todoStepProgress = document.getElementById('todoStepProgress');
      const todoDetailModal = document.getElementById('todoDetailModal');
      const todoDetailTitle = document.getElementById('todoDetailTitle');
      const todoDetailText = document.getElementById('todoDetailText');
      const priceBookList = document.getElementById('priceBookList');
      const priceBookForm = document.getElementById('priceBookForm');
      const priceBookNameInput = document.getElementById('priceBookNameInput');
      const priceBookPriceInput = document.getElementById('priceBookPriceInput');
      const priceBookStoreInput = document.getElementById('priceBookStoreInput');
      const priceBookPhotoInput = document.getElementById('priceBookPhotoInput');
      const priceBookModal = document.getElementById('priceBookModal');
      const priceBookActionsModal = document.getElementById('priceBookActionsModal');
      const priceBookStepProgress = document.getElementById('priceBookStepProgress');
      const monthlyPaymentList = document.getElementById('monthlyPaymentList');
      const monthlyPaymentsTotal = document.getElementById('monthlyPaymentsTotal');
      const monthlyPaymentForm = document.getElementById('monthlyPaymentForm');
      const monthlyPaymentNameInput = document.getElementById('monthlyPaymentNameInput');
      const monthlyPaymentAmountInput = document.getElementById('monthlyPaymentAmountInput');
      const monthlyPaymentDateInput = document.getElementById('monthlyPaymentDateInput');
      const monthlyPaymentDateDisplay = document.querySelector('.monthlyDateDisplay');
      const monthlyPaymentModal = document.getElementById('monthlyPaymentModal');
      const monthlyPaymentActionsModal = document.getElementById('monthlyPaymentActionsModal');
      const monthlyPaymentStepProgress = document.getElementById('monthlyPaymentStepProgress');
      const shoppingSetupModal = document.getElementById('shoppingSetupModal');
      const shoppingDashboard = document.getElementById('shoppingDashboard');
      const shoppingDailyLimitInput = document.getElementById('shoppingDailyLimitInput');
      const shoppingAvailableValue = document.getElementById('shoppingAvailableValue');
      const shoppingCarryNote = document.getElementById('shoppingCarryNote');
      const shoppingCarryValue = document.getElementById('shoppingCarryValue');
      const shoppingSpentInput = document.getElementById('shoppingSpentInput');
      const shoppingSpentModal = document.getElementById('shoppingSpentModal');
      const shoppingSpentModalTitle = document.getElementById('shoppingSpentModalTitle');
      const shoppingSpentInputLabel = document.getElementById('shoppingSpentInputLabel');
      const shoppingProgressVisual = document.getElementById('shoppingProgressVisual');
      const shoppingProgressTrack = document.getElementById('shoppingProgressTrack');
      const shoppingProgressValue = document.getElementById('shoppingProgressValue');
      const shoppingProgressPercent = document.getElementById('shoppingProgressPercent');
      const shoppingProgressStatus = document.getElementById('shoppingProgressStatus');
      const shoppingHistoryToggle = document.getElementById('shoppingHistoryToggle');
      const shoppingHistoryBody = document.getElementById('shoppingHistoryBody');
      const shoppingHistoryList = document.getElementById('shoppingHistoryList');
      const shoppingDeveloperDateInput = document.getElementById('shoppingDeveloperDateInput');
      const shoppingDeveloperDateDisplay = document.querySelector('.shoppingDeveloperDateDisplay');
      const shoppingDeveloperAmountInput = document.getElementById('shoppingDeveloperAmountInput');
      const shoppingSettingsPage = document.getElementById('shoppingSettingsPage');
      const shoppingSettingsLimitInput = document.getElementById('shoppingSettingsLimitInput');
      const shoppingSettingsCarryInput = document.getElementById('shoppingSettingsCarryInput');
      const shoppingCarryEnabledToggle = document.getElementById('shoppingCarryEnabledToggle');
      const shoppingProgressStyleSelect = document.getElementById('shoppingProgressStyleSelect');
      const shoppingLanguageSelect = document.getElementById('shoppingLanguageSelect');
      const shoppingThemeSelect = document.getElementById('shoppingThemeSelect');
      const developerModeToggles = document.querySelectorAll('[data-developer-mode-toggle]');

      let db = null;
      let editingEntryId = null;
      let editingArchivedEntryId = null;
      let openedStatId = null;
      let selectedStatId = null;
      let selectedEntryId = null;
      let currentLanguage = 'ru';
      let DAY_NAMES = DAY_NAMES_BY_LANGUAGE[currentLanguage];
      let currentFormStep = 1;
      let isCompletingShift = false;
      let editingPriceBookId = null;
      let existingPriceBookPhoto = null;
      let selectedPriceBookId = null;
      let currentPriceBookStep = 1;
      let isCompletingProduct = false;
      let hasRenderedPriceBook = false;
      let priceBookRenderPromise = null;
      let priceBookRenderVersion = 0;
      const priceBookPhotoAssets = new Map();
      let editingMonthlyPaymentId = null;
      let selectedMonthlyPaymentId = null;
      let currentMonthlyPaymentStep = 1;
      let isSavingMonthlyPayment = false;
      let currentShoppingSpent = 0;
      let shoppingSpentModalMode = 'add';
      let shoppingSpentModalCloseTimer = null;
      let editingTodoId = null;
      let isSavingTodo = false;
      let currentTodoStep = 1;
      let todoDetailCloseTimer = null;

      function groupSettingsSections() {
        document.querySelectorAll('.shoppingSettingsFields').forEach((container) => {
          let group = null;
          Array.from(container.children).forEach((child) => {
            if (child.classList.contains('settingsSectionTitle')) {
              group = document.createElement('section');
              group.className = 'settingsGroup';
              container.insertBefore(group, child);
            }
            if (group) group.appendChild(child);
          });
        });
      }

      groupSettingsSections();

      function t(key) {
        return TRANSLATIONS[currentLanguage][key] || key;
      }

      function applyLanguage(language) {
        currentLanguage = TRANSLATIONS[language] ? language : 'ru';
        DAY_NAMES = DAY_NAMES_BY_LANGUAGE[currentLanguage];
        document.documentElement.lang = currentLanguage;
        document.querySelectorAll('[data-general-language]').forEach((control) => {
          control.value = currentLanguage;
        });
        document.querySelectorAll('[data-i18n]').forEach((element) => {
          element.textContent = t(element.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
          element.placeholder = t(element.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-weekday]').forEach((element) => {
          element.textContent = DAY_NAMES[Number(element.dataset.weekday)];
        });
        updateShoppingDeveloperDateDisplay();
        if (db) {
          renderPriceBook();
          renderMonthlyPayments();
          renderShopping();
          renderTodos();
        }
      }

      function applyTheme(theme) {
        const normalizedTheme = theme === 'light' ? 'light' : 'dark';
        document.body.classList.toggle('light-theme', normalizedTheme === 'light');
        document.querySelectorAll('[data-general-theme]').forEach((control) => {
          control.value = normalizedTheme;
        });
      }

      function applyDeveloperMode(enabled) {
        const isEnabled = Boolean(enabled);
        document.body.classList.toggle('developer-mode', isEnabled);
        developerModeToggles.forEach((toggle) => {
          toggle.checked = isEnabled;
        });
      }

      async function restoreSavedGeneralSettings() {
        const [savedLanguage, savedTheme, savedDeveloperMode] = await Promise.all([
          getSetting('language', 'ru'),
          getSetting('theme', 'dark'),
          getSetting('developerMode', false)
        ]);
        applyLanguage(savedLanguage);
        applyTheme(savedTheme);
        applyDeveloperMode(savedDeveloperMode);
      }

      async function saveGeneralSettings(languageControl, themeControl, developerControl) {
        const language = TRANSLATIONS[languageControl.value] ? languageControl.value : 'ru';
        const theme = themeControl.value === 'light' ? 'light' : 'dark';
        const developerMode = Boolean(developerControl.checked);
        await setSetting('language', language);
        await setSetting('theme', theme);
        await setSetting('developerMode', developerMode);
        applyLanguage(language);
        applyTheme(theme);
        applyDeveloperMode(developerMode);
        await refreshDatabaseUsage();
        await renderEntries();
        await loadStats();
      }

      function showFormStep(step, shouldFocus = true) {
        currentFormStep = step;
        form.querySelectorAll('.formStep').forEach((section) => {
          section.hidden = Number(section.dataset.step) !== step;
        });
        stepProgress.querySelectorAll('span').forEach((segment, index) => {
          segment.classList.toggle('is-active', index < step);
        });
        stepProgress.setAttribute('aria-label', `${step} / 4`);
        // Focus is left to the user so iOS does not open the keyboard automatically.
      }

      function canAdvanceFormStep(step) {
        if (step === 1 && !workNameInput.value.trim()) return false;
        if (step === 3 && (!Number.isFinite(Number(hoursInput.value)) || Number(hoursInput.value) <= 0)) return false;
        return true;
      }

      function closeAppSwitchers() {
        document.querySelectorAll('.appSwitcher.is-open').forEach((switcher) => switcher.classList.remove('is-open'));
        document.querySelectorAll('.appSwitcherButton').forEach((button) => button.setAttribute('aria-expanded', 'false'));
      }

      function showApp(appName) {
        const apps = { salary: salaryApp, monthly: monthlyApp, shopping: shoppingApp, priceBook: priceBookApp, todo: todoApp };
        const nextApp = apps[appName] || salaryApp;
        const currentApp = Object.values(apps).find((app) => !app.classList.contains('is-hidden'));
        if (!nextApp.classList.contains('is-hidden')) {
          closeAppSwitchers();
          return;
        }
        if (currentApp) currentApp.classList.add('is-hidden');
        nextApp.classList.remove('is-hidden');
        nextApp.classList.remove('is-entering');
        requestAnimationFrame(() => nextApp.classList.add('is-entering'));
        window.setTimeout(() => nextApp.classList.remove('is-entering'), 280);
        if (appName === 'priceBook') renderPriceBook();
        if (appName === 'monthly') renderMonthlyPayments();
        if (appName === 'shopping') renderShopping();
        if (appName === 'todo') renderTodos();
        closeAppSwitchers();
      }

      function uid() {
        if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
        return 'id-' + Date.now() + '-' + Math.random().toString(16).slice(2);
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }

      function formatCurrency(value) {
        return new Intl.NumberFormat(currentLanguage === 'en' ? 'en-IE' : 'ru-RU', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(Number(value || 0));
      }

      function formatHours(value) {
        return Number(value || 0).toFixed(1).replace(/\.0$/, '');
      }

      function getCurrentWeekdayIndex() {
        return new Date().getDay();
      }

      function getStartOfWeek(date) {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        const day = d.getDay();
        const diff = day === 0 ? -6 : 1 - day;
        d.setDate(d.getDate() + diff);
        return d;
      }

      function openDatabase() {
        return new Promise((resolve, reject) => {
          const request = indexedDB.open(DB_NAME, DB_VERSION);

          request.onupgradeneeded = (event) => {
            const database = event.target.result;
            if (!database.objectStoreNames.contains('entries')) database.createObjectStore('entries', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('workOptions')) database.createObjectStore('workOptions', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('stats')) database.createObjectStore('stats', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('settings')) database.createObjectStore('settings', { keyPath: 'key' });
            if (!database.objectStoreNames.contains('priceBook')) database.createObjectStore('priceBook', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('monthlyPayments')) database.createObjectStore('monthlyPayments', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('shoppingSettings')) database.createObjectStore('shoppingSettings', { keyPath: 'key' });
            if (!database.objectStoreNames.contains('shoppingDays')) database.createObjectStore('shoppingDays', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('todoTasks')) database.createObjectStore('todoTasks', { keyPath: 'id' });
          };

          request.onsuccess = () => {
            db = request.result;
            resolve(db);
          };

          request.onerror = () => reject(request.error);
          request.onblocked = () => reject(new Error('Database upgrade is blocked'));
        });
      }

      async function ensureMonthlyPaymentsStore() {
        if (db && db.objectStoreNames.contains('monthlyPayments')) return;
        if (db) db.close();
        db = null;
        await openDatabase();
        if (!db.objectStoreNames.contains('monthlyPayments')) {
          throw new Error('Monthly payments store is unavailable');
        }
      }

      async function ensureShoppingStores() {
        const storesReady = db && db.objectStoreNames.contains('shoppingSettings') && db.objectStoreNames.contains('shoppingDays');
        if (storesReady) return;
        if (db) db.close();
        db = null;
        await openDatabase();
        if (!db.objectStoreNames.contains('shoppingSettings') || !db.objectStoreNames.contains('shoppingDays')) {
          throw new Error('Shopping stores are unavailable');
        }
      }

      async function ensureTodoStore() {
        if (db && db.objectStoreNames.contains('todoTasks')) return;
        if (db) db.close();
        db = null;
        await openDatabase();
        if (!db.objectStoreNames.contains('todoTasks')) {
          throw new Error('Todo tasks store is unavailable');
        }
      }

      function readAllFromStore(storeName) {
        return new Promise((resolve, reject) => {
          if (!db) return reject(new Error('Database is not initialized'));
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);
          const request = store.getAll();
          request.onsuccess = () => resolve(request.result || []);
          request.onerror = () => reject(request.error);
        });
      }

      function readFromStore(storeName, key) {
        return new Promise((resolve, reject) => {
          if (!db) return reject(new Error('Database is not initialized'));
          const transaction = db.transaction(storeName, 'readonly');
          const store = transaction.objectStore(storeName);
          const request = store.get(key);
          request.onsuccess = () => resolve(request.result || null);
          request.onerror = () => reject(request.error);
        });
      }

      function writeToStore(storeName, value) {
        return new Promise((resolve, reject) => {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.put(value);
          request.onsuccess = () => resolve(value);
          request.onerror = () => reject(request.error);
        });
      }

      function deleteFromStore(storeName, key) {
        return new Promise((resolve, reject) => {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.delete(key);
          request.onsuccess = () => resolve(true);
          request.onerror = () => reject(request.error);
        });
      }

      function deleteAllFromStore(storeName) {
        return new Promise((resolve, reject) => {
          const transaction = db.transaction(storeName, 'readwrite');
          const store = transaction.objectStore(storeName);
          const request = store.clear();
          request.onsuccess = () => resolve(true);
          request.onerror = () => reject(request.error);
        });
      }

      async function setSetting(key, value) {
        await writeToStore('settings', { key, value });
      }

      async function getSetting(key, fallback = null) {
        const item = await readFromStore('settings', key);
        return item ? item.value : fallback;
      }

      function formatDatabaseSize(bytes) {
        const units = currentLanguage === 'en' ? ['B', 'KB', 'MB'] : ['Б', 'КБ', 'МБ'];
        if (bytes < 1024) return `${bytes} ${units[0]}`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} ${units[1]}`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} ${units[2]}`;
      }

      async function refreshDatabaseUsage() {
        if (!db) return;
        const storeNames = ['entries', 'workOptions', 'stats', 'settings', 'priceBook', 'monthlyPayments', 'shoppingSettings', 'shoppingDays', 'todoTasks'];
        const data = await Promise.all(storeNames.map((storeName) => readAllFromStore(storeName)));
        const bytes = new TextEncoder().encode(JSON.stringify(data)).length;
        const usage = `≈ ${formatDatabaseSize(bytes)}`;
        document.querySelectorAll('[data-database-usage]').forEach((element) => {
          element.textContent = usage;
        });
      }

      async function saveWorkOption(name) {
        const cleanName = name.trim();
        if (!cleanName) return;
        const existing = await readAllFromStore('workOptions');
        const found = existing.find((item) => item.name.toLowerCase() === cleanName.toLowerCase());
        if (found) return found;
        const option = { id: uid(), name: cleanName };
        await writeToStore('workOptions', option);
        return option;
      }

      async function loadAllEntries() {
        const entries = await readAllFromStore('entries');
        return entries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      function readFileAsDataUrl(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
      }

      function getPriceBookPhotoKey(product) {
        return `${product.id}:${product.updatedAt || product.createdAt || ''}:${product.photo}`;
      }

      function preloadPriceBookPhoto(product) {
        const cacheKey = getPriceBookPhotoKey(product);
        const cachedAsset = priceBookPhotoAssets.get(cacheKey);
        if (cachedAsset) return cachedAsset.ready;

        const image = new Image(142, 142);
        image.className = 'productPhoto';
        image.alt = product.name;

        const asset = { image, ok: false, ready: null };
        priceBookPhotoAssets.set(cacheKey, asset);
        asset.ready = new Promise((resolve) => {
          let settled = false;
          const finish = (loaded) => {
            if (settled) return;
            settled = true;
            Promise.resolve(loaded && typeof image.decode === 'function' ? image.decode() : null)
              .catch(() => {})
              .finally(() => {
                asset.ok = Boolean(loaded && image.naturalWidth);
                resolve(asset);
              });
          };

          image.addEventListener('load', () => finish(true), { once: true });
          image.addEventListener('error', () => finish(false), { once: true });
          image.src = product.photo;
          if (image.complete) finish(Boolean(image.naturalWidth));
        });
        return asset.ready;
      }

      function refreshPriceBookLabels() {
        const emptyState = priceBookList.querySelector('.emptyState');
        if (emptyState) emptyState.textContent = t('noProducts');
        const loadingLabel = priceBookList.querySelector('[data-price-book-loading-label]');
        if (loadingLabel) loadingLabel.textContent = t('priceBookLoading');
        priceBookList.querySelectorAll('[data-price-action="menu"]').forEach((button) => {
          button.setAttribute('aria-label', t('productActions'));
          button.title = t('productActions');
        });
      }

      function showPriceBookLoading() {
        priceBookList.innerHTML = `
          <div class="priceBookLoading" role="status" aria-live="polite">
            <div class="priceBookLoadingDots" aria-hidden="true"><span></span><span></span><span></span></div>
            <span data-price-book-loading-label>${t('priceBookLoading')}</span>
          </div>
        `;
      }

      async function renderPriceBook(force = false) {
        if (!force && hasRenderedPriceBook) {
          refreshPriceBookLabels();
          return;
        }
        if (!force && priceBookRenderPromise) return priceBookRenderPromise;

        if (force) hasRenderedPriceBook = false;
        if (!priceBookList.querySelector('.productCard')) showPriceBookLoading();
        const renderVersion = ++priceBookRenderVersion;
        const renderTask = (async () => {
          const products = await readAllFromStore('priceBook');
          products.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
          if (renderVersion !== priceBookRenderVersion) return;

          const activePhotoKeys = new Set(products.filter((product) => product.photo).map(getPriceBookPhotoKey));
          priceBookPhotoAssets.forEach((_, cacheKey) => {
            if (!activePhotoKeys.has(cacheKey)) priceBookPhotoAssets.delete(cacheKey);
          });

          if (!products.length) {
            priceBookList.innerHTML = `<div class="emptyState">${t('noProducts')}</div>`;
            hasRenderedPriceBook = true;
            return;
          }

          const photoAssets = new Map(await Promise.all(products.filter((product) => product.photo).map(async (product) => [
            product.id,
            await preloadPriceBookPhoto(product)
          ])));
          if (renderVersion !== priceBookRenderVersion) return;

          priceBookList.innerHTML = products.map((product) => {
            const photoAsset = photoAssets.get(product.id);
            return `
              <div class="productCard" data-product-id="${escapeHtml(product.id)}">
                ${photoAsset?.ok
                  ? `<div class="productPhotoFrame" data-price-book-photo="${escapeHtml(product.id)}"></div>`
                  : '<div class="productPhotoPlaceholder" aria-hidden="true">⌑</div>'}
                <div class="productMain">
                  <div class="entryTitle">${escapeHtml(product.name)}</div>
                  <div class="entryMeta">${escapeHtml(product.store)}</div>
                </div>
                <div class="productActions">
                  <div class="productPrice">${formatCurrency(product.price)}</div>
                  <button type="button" class="statMenuButton" data-price-action="menu" data-id="${product.id}" aria-label="${t('productActions')}" title="${t('productActions')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg></button>
                </div>
              </div>
            `;
          }).join('');

          priceBookList.querySelectorAll('[data-price-book-photo]').forEach((frame) => {
            const asset = photoAssets.get(frame.dataset.priceBookPhoto);
            if (asset?.ok) frame.appendChild(asset.image);
          });

          const setPriceBookCardExpanded = (card, expanded) => {
            const price = card.querySelector('.productPrice');
            const main = card.querySelector('.productMain');
            const actions = card.querySelector('.productActions');
            if (!price || !main || !actions) return;

            const firstPosition = price.getBoundingClientRect();
            price._priceMoveAnimation?.cancel();
            if (expanded) {
              main.appendChild(price);
              card.classList.add('is-expanded');
            } else {
              actions.prepend(price);
              card.classList.remove('is-expanded');
            }

            const lastPosition = price.getBoundingClientRect();
            const offsetX = firstPosition.left - lastPosition.left;
            const offsetY = firstPosition.top - lastPosition.top;
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && (offsetX || offsetY)) {
              const animation = price.animate([
                { transform: `translate(${offsetX}px, ${offsetY}px)` },
                { transform: 'translate(0, 0)' }
              ], {
                duration: 560,
                easing: 'cubic-bezier(.16, 1, .3, 1)'
              });
              price._priceMoveAnimation = animation;
              animation.onfinish = () => {
                if (price._priceMoveAnimation === animation) price._priceMoveAnimation = null;
              };
            }
          };

          priceBookList.querySelectorAll('.productCard').forEach((card) => {
            card.addEventListener('click', (event) => {
              if (event.target.closest('[data-price-action="menu"]')) return;
              const willExpand = !card.classList.contains('is-expanded');
              priceBookList.querySelectorAll('.productCard.is-expanded').forEach((otherCard) => {
                setPriceBookCardExpanded(otherCard, false);
              });
              setPriceBookCardExpanded(card, willExpand);
            });
          });

          priceBookList.querySelectorAll('[data-price-action="menu"]').forEach((button) => {
            button.addEventListener('click', (event) => {
              event.stopPropagation();
              openPriceBookActionsModal(button.dataset.id);
            });
          });
          hasRenderedPriceBook = true;
        })();

        priceBookRenderPromise = renderTask;
        try {
          return await renderTask;
        } finally {
          if (priceBookRenderPromise === renderTask) priceBookRenderPromise = null;
        }
      }

      function formatMonthlyPaymentDate(dateValue) {
        const date = new Date(`${dateValue}T00:00:00`);
        if (Number.isNaN(date.getTime())) return dateValue || '-';
        const months = currentLanguage === 'en'
          ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          : ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      }

      function updateShoppingDeveloperDateDisplay() {
        if (!shoppingDeveloperDateDisplay) return;
        shoppingDeveloperDateDisplay.value = shoppingDeveloperDateInput.value
          ? formatMonthlyPaymentDate(shoppingDeveloperDateInput.value)
          : '';
      }

      function getLocalDateKey(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

      function isMonthlyPaymentExpired(dateValue) {
        return Boolean(dateValue) && String(dateValue) < getLocalDateKey();
      }

      function formatMonthlyTotal(value) {
        const locale = currentLanguage === 'en' ? 'en-IE' : 'ru-RU';
        return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(Number(value || 0))} €`;
      }

      async function renderMonthlyPayments() {
        await ensureMonthlyPaymentsStore();
        const payments = await readAllFromStore('monthlyPayments');
        payments.sort((a, b) => String(a.nextPayment).localeCompare(String(b.nextPayment)));
        const total = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
        monthlyPaymentsTotal.textContent = formatMonthlyTotal(total);

        if (!payments.length) {
          monthlyPaymentList.innerHTML = `<div class="emptyState">${t('noMonthlyPayments')}</div>`;
          return;
        }

        monthlyPaymentList.innerHTML = payments.map((payment) => {
          const isExpired = isMonthlyPaymentExpired(payment.nextPayment);
          return `
          <div class="entryCard">
            <div class="entryMain">
              <div class="entryTitle">${escapeHtml(payment.name)}</div>
              <div class="entryMeta">${t('nextPayment')} • ${formatMonthlyPaymentDate(payment.nextPayment)}</div>
              ${isExpired ? `<button type="button" class="paymentExpiredWarning" data-monthly-action="update-date" data-id="${escapeHtml(payment.id)}">${t('expiredPayment')}</button>` : ''}
            </div>
            <div class="entryValue">
              <div class="amount">${formatCurrency(payment.amount)}</div>
              <button type="button" class="statMenuButton" data-monthly-action="menu" data-id="${escapeHtml(payment.id)}" aria-label="${t('monthlyPaymentActions')}" title="${t('monthlyPaymentActions')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg></button>
            </div>
          </div>
        `;
        }).join('');

        monthlyPaymentList.querySelectorAll('[data-monthly-action="menu"]').forEach((button) => {
          button.addEventListener('click', () => openMonthlyPaymentActionsModal(button.dataset.id));
        });
        monthlyPaymentList.querySelectorAll('[data-monthly-action="update-date"]').forEach((button) => {
          button.addEventListener('click', async () => {
            const payment = await readFromStore('monthlyPayments', button.dataset.id);
            if (payment) openMonthlyPaymentModal(payment, 3);
          });
        });
      }

      function getPreviousDateKey(dateKey) {
        const date = new Date(`${dateKey}T00:00:00`);
        date.setDate(date.getDate() - 1);
        return getLocalDateKey(date);
      }

      function parseShoppingAmount(value) {
        return Number(String(value || '').trim().replace(',', '.'));
      }

      async function getShoppingDailyLimit() {
        const setting = await readFromStore('shoppingSettings', 'dailyLimit');
        return setting ? Number(setting.value) : 0;
      }

      async function getShoppingProgressStyle() {
        const setting = await readFromStore('shoppingSettings', 'progressStyle');
        return ['bar', 'circle'].includes(setting?.value) ? setting.value : 'bar';
      }

      async function getShoppingCarryEnabled() {
        const setting = await readFromStore('shoppingSettings', 'carryEnabled');
        return setting ? setting.value !== false : true;
      }

      function updateShoppingCarryInputState(enabled = shoppingCarryEnabledToggle.checked) {
        shoppingSettingsCarryInput.disabled = !enabled;
        shoppingSettingsCarryInput.closest('.field')?.classList.toggle('is-disabled', !enabled);
      }

      function applyShoppingProgressStyle(style) {
        shoppingProgressVisual.classList.toggle('progress-circle', style === 'circle');
      }

      function getShoppingCarryBalance(day) {
        const storedBalance = Number(day?.carryBalance);
        if (Number.isFinite(storedBalance)) return storedBalance;
        // Records created before balances were introduced only know about debt.
        return -Math.max(0, Number(day?.debtAtStart ?? day?.carryOver ?? 0) || 0);
      }

      function getShoppingCarryBalanceOverride(day) {
        const override = Number(day?.carryBalanceOverride);
        return Number.isFinite(override) ? override : null;
      }

      function getShoppingAvailableLimit(day) {
        if (Number.isFinite(Number(day?.carryBalance))) {
          return Math.max(0, Number(day?.dailyLimit || 0) + getShoppingCarryBalance(day));
        }
        const savedAvailable = Number(day?.availableLimit);
        if (Number.isFinite(savedAvailable)) return Math.max(0, savedAvailable);
        return Math.max(0, Number(day?.dailyLimit || 0) + getShoppingCarryBalance(day));
      }

      function getShoppingBalanceAfterDay(day) {
        const storedBalance = Number(day?.balanceAfter);
        if (Number.isFinite(storedBalance)) return storedBalance;
        return getShoppingCarryBalance(day) + Number(day?.dailyLimit || 0) - Number(day?.total || 0);
      }

      function updateShoppingDayBalance(day, carryBalance = getShoppingCarryBalance(day)) {
        const dailyLimit = Math.max(0, Number(day.dailyLimit || 0));
        const normalizedBalance = Number.isFinite(Number(carryBalance)) ? Number(carryBalance) : 0;
        day.carryBalance = normalizedBalance;
        day.carryOver = Math.max(0, -normalizedBalance);
        day.rolloverCredit = Math.max(0, normalizedBalance);
        day.debtAtStart = Math.max(0, -normalizedBalance);
        day.availableLimit = Math.max(0, dailyLimit + normalizedBalance);
        day.balanceAfter = normalizedBalance + dailyLimit - Number(day.total || 0);
        day.debtForNext = Math.max(0, -day.balanceAfter);
        return day;
      }

      function getDateDistanceInDays(fromDateKey, toDateKey) {
        const from = new Date(`${fromDateKey}T12:00:00`);
        const to = new Date(`${toDateKey}T12:00:00`);
        return Math.max(0, Math.round((to - from) / 86400000));
      }

      async function getShoppingDay(dateKey, dailyLimit) {
        const existing = await readFromStore('shoppingDays', dateKey);
        if (existing) return existing;

        const savedDays = await readAllFromStore('shoppingDays');
        const previousDay = savedDays
          .filter((day) => day.id < dateKey)
          .sort((first, second) => String(second.id).localeCompare(String(first.id)))[0];
        const elapsedDays = previousDay ? getDateDistanceInDays(previousDay.id, dateKey) : 0;
        const carryBalance = previousDay
          ? getShoppingBalanceAfterDay(previousDay) + dailyLimit * Math.max(0, elapsedDays - 1)
          : 0;
        const availableLimit = Math.max(0, dailyLimit + carryBalance);
        const balanceAfter = carryBalance + dailyLimit;
        const day = {
          id: dateKey,
          dailyLimit,
          carryBalance,
          carryOver: Math.max(0, -carryBalance),
          rolloverCredit: Math.max(0, carryBalance),
          debtAtStart: Math.max(0, -carryBalance),
          debtForNext: Math.max(0, -balanceAfter),
          availableLimit,
          total: 0,
          balanceAfter,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        await writeToStore('shoppingDays', day);
        return day;
      }

      function isValidShoppingDateKey(dateKey) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(dateKey || ''))) return false;
        const date = new Date(`${dateKey}T12:00:00`);
        return !Number.isNaN(date.getTime()) && getLocalDateKey(date) === dateKey;
      }

      async function rebuildShoppingDayBalances() {
        const days = await readAllFromStore('shoppingDays');
        days.sort((first, second) => String(first.id).localeCompare(String(second.id)));

        let previousDay = null;
        for (const day of days) {
          const dailyLimit = Math.max(0, Number(day.dailyLimit || 0));
          const elapsedDays = previousDay ? getDateDistanceInDays(previousDay.id, day.id) : 0;
          const calculatedCarryBalance = previousDay
            ? getShoppingBalanceAfterDay(previousDay) + dailyLimit * Math.max(0, elapsedDays - 1)
            : 0;
          const carryBalance = getShoppingCarryBalanceOverride(day) ?? calculatedCarryBalance;
          day.dailyLimit = dailyLimit;
          updateShoppingDayBalance(day, carryBalance);
          day.updatedAt = new Date().toISOString();
          await writeToStore('shoppingDays', day);
          previousDay = day;
        }
      }

      function formatShoppingHistoryDate(dateKey) {
        const date = new Date(`${dateKey}T12:00:00`);
        const locale = currentLanguage === 'en' ? 'en-IE' : 'ru-RU';
        return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
      }

      async function renderShoppingHistory(currentDateKey) {
        const [days, carryEnabled] = await Promise.all([
          readAllFromStore('shoppingDays'),
          getShoppingCarryEnabled()
        ]);
        const history = days
          .filter((day) => day.id < currentDateKey)
          .sort((first, second) => String(second.id).localeCompare(String(first.id)));

        if (!history.length) {
          shoppingHistoryList.innerHTML = `<div class="shoppingHistoryEmpty">${t('shoppingHistoryEmpty')}</div>`;
          return;
        }

        shoppingHistoryList.innerHTML = history.map((day) => {
          const spent = Math.max(0, Number(day.total || 0));
          const available = carryEnabled
            ? getShoppingAvailableLimit(day)
            : Math.max(0, Number(day.dailyLimit || 0));
          const exceeded = spent > available;
          return `
            <div class="shoppingHistoryItem">
              <div>
                <div class="shoppingHistoryDate">${formatShoppingHistoryDate(day.id)}</div>
                <div class="shoppingHistoryMeta">${t('shoppingHistoryAvailable').replace('{amount}', formatMonthlyTotal(available))}</div>
              </div>
              <div class="shoppingHistoryAmount${exceeded ? ' is-exceeded' : ''}">${formatMonthlyTotal(spent)}</div>
            </div>
          `;
        }).join('');
      }

      async function renderShopping() {
        await ensureShoppingStores();
        const dailyLimit = await getShoppingDailyLimit();
        const hasLimit = Number.isFinite(dailyLimit) && dailyLimit > 0;
        shoppingDashboard.hidden = !hasLimit;
        if (!hasLimit) {
          if (!shoppingApp.classList.contains('is-hidden')) openShoppingSetupModal();
          return;
        }
        closeShoppingSetupModal();

        const day = await getShoppingDay(getLocalDateKey(), dailyLimit);
        const [progressStyle, carryEnabled] = await Promise.all([
          getShoppingProgressStyle(),
          getShoppingCarryEnabled()
        ]);
        const available = carryEnabled
          ? Number(day.availableLimit || 0)
          : Math.max(0, Number(day.dailyLimit || 0));
        const spent = Number(day.total || 0);
        currentShoppingSpent = spent;
        shoppingAvailableValue.textContent = `${formatMonthlyTotal(spent)} / ${formatMonthlyTotal(available)}`;
        const ratio = available > 0 ? spent / available : (spent > 0 ? 1 : 0);
        applyShoppingProgressStyle(progressStyle);
        shoppingProgressStyleSelect.value = progressStyle;
        shoppingProgressPercent.textContent = `${Math.round(ratio * 100)}%`;
        shoppingProgressValue.dataset.label = `${Math.round(ratio * 100)}%`;
        shoppingProgressTrack.style.setProperty('--shopping-progress', `${Math.min(100, Math.max(0, ratio * 100))}%`);
        shoppingProgressVisual.classList.toggle('is-exceeded', spent > available);
        shoppingProgressValue.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
        shoppingProgressValue.classList.toggle('is-exceeded', spent > available);
        const exceededBy = Math.max(0, spent - available);
        shoppingProgressStatus.classList.toggle('is-visible', exceededBy > 0);
        shoppingProgressStatus.setAttribute('aria-hidden', String(exceededBy <= 0));
        if (exceededBy > 0) {
          shoppingProgressStatus.textContent = t('shoppingOverLimit').replace('{amount}', formatMonthlyTotal(exceededBy));
        }
        const carryBalance = getShoppingCarryBalance(day);
        const hasCarryBalance = carryEnabled && carryBalance !== 0;
        shoppingCarryNote.classList.toggle('is-visible', hasCarryBalance);
        shoppingCarryNote.setAttribute('aria-hidden', String(!hasCarryBalance));
        if (hasCarryBalance) {
          const label = carryBalance < 0 ? 'carryOverLabel' : 'shoppingCreditLabel';
          shoppingCarryValue.textContent = t(label).replace('{amount}', formatMonthlyTotal(Math.abs(carryBalance)));
        }
        await renderShoppingHistory(day.id);
      }

      async function setShoppingDailyLimit() {
        const dailyLimit = parseShoppingAmount(shoppingDailyLimitInput.value);
        if (!Number.isFinite(dailyLimit) || dailyLimit <= 0) {
          alert(t('shoppingInvalidLimit'));
          return;
        }
        await ensureShoppingStores();
        await writeToStore('shoppingSettings', { key: 'dailyLimit', value: dailyLimit });
        await renderShopping();
      }

      async function saveShoppingSettings() {
        const dailyLimit = parseShoppingAmount(shoppingSettingsLimitInput.value);
        if (!Number.isFinite(dailyLimit) || dailyLimit <= 0) {
          alert(t('shoppingInvalidLimit'));
          return;
        }
        const carryEnabled = shoppingCarryEnabledToggle.checked;
        const carryInput = shoppingSettingsCarryInput.value.trim();
        const requestedCarryBalance = carryEnabled && carryInput !== '' ? parseShoppingAmount(carryInput) : null;
        if (requestedCarryBalance !== null && !Number.isFinite(requestedCarryBalance)) {
          alert(t('shoppingInvalidCarryBalance'));
          return;
        }

        await ensureShoppingStores();
        await writeToStore('shoppingSettings', { key: 'dailyLimit', value: dailyLimit });
        await writeToStore('shoppingSettings', { key: 'progressStyle', value: shoppingProgressStyleSelect.value });
        await writeToStore('shoppingSettings', { key: 'carryEnabled', value: carryEnabled });

        const dateKey = getLocalDateKey();
        const day = await getShoppingDay(dateKey, dailyLimit);
        day.dailyLimit = dailyLimit;
        if (carryEnabled && requestedCarryBalance === null) {
          delete day.carryBalanceOverride;
        } else if (carryEnabled) {
          const normalizedCarryBalance = Math.round(requestedCarryBalance * 100) / 100;
          const existingOverride = getShoppingCarryBalanceOverride(day);
          if (existingOverride !== null || Math.abs(normalizedCarryBalance - getShoppingCarryBalance(day)) > 0.0001) {
            day.carryBalanceOverride = normalizedCarryBalance;
          }
        }
        day.updatedAt = new Date().toISOString();
        await writeToStore('shoppingDays', day);
        await rebuildShoppingDayBalances();

        await saveGeneralSettings(
          shoppingLanguageSelect,
          shoppingThemeSelect,
          document.getElementById('shoppingDeveloperModeToggle')
        );
        await renderShopping();
        await refreshDatabaseUsage();
        closeShoppingSettingsPage();
      }

      async function setShoppingSpent(value) {
        const total = parseShoppingAmount(value);
        if (!Number.isFinite(total) || total < 0) return;
        await ensureShoppingStores();
        const dailyLimit = await getShoppingDailyLimit();
        if (!dailyLimit) return;
        const day = await getShoppingDay(getLocalDateKey(), dailyLimit);
        day.total = total;
        const carryBalance = getShoppingCarryBalance(day);
        updateShoppingDayBalance(day, carryBalance);
        day.updatedAt = new Date().toISOString();
        await writeToStore('shoppingDays', day);
        await rebuildShoppingDayBalances();
        await renderShopping();
      }

      async function addShoppingDeveloperExpense() {
        if (!document.body.classList.contains('developer-mode')) {
          alert(t('shoppingDeveloperDisabled'));
          return;
        }
        const dateKey = shoppingDeveloperDateInput.value;
        const amount = parseShoppingAmount(shoppingDeveloperAmountInput.value);
        if (!isValidShoppingDateKey(dateKey) || !Number.isFinite(amount) || amount <= 0) {
          alert(t('shoppingDeveloperInvalid'));
          return;
        }

        await ensureShoppingStores();
        const dailyLimit = await getShoppingDailyLimit();
        if (!Number.isFinite(dailyLimit) || dailyLimit <= 0) {
          alert(t('shoppingInvalidLimit'));
          return;
        }

        const day = await getShoppingDay(dateKey, dailyLimit);
        day.total = Math.round((Number(day.total || 0) + amount) * 100) / 100;
        day.updatedAt = new Date().toISOString();
        await writeToStore('shoppingDays', day);
        await rebuildShoppingDayBalances();
        shoppingDeveloperAmountInput.value = '';
        await renderShopping();
      }

      async function deleteShoppingDeveloperDay() {
        if (!document.body.classList.contains('developer-mode')) {
          alert(t('shoppingDeveloperDisabled'));
          return;
        }
        const dateKey = shoppingDeveloperDateInput.value;
        if (!isValidShoppingDateKey(dateKey)) {
          alert(t('shoppingDeveloperInvalid'));
          return;
        }

        const existing = await readFromStore('shoppingDays', dateKey);
        if (!existing) {
          alert(t('shoppingDeveloperDeleteMissing'));
          return;
        }
        await deleteFromStore('shoppingDays', dateKey);
        await rebuildShoppingDayBalances();
        await renderShopping();
      }

      function openShoppingSpentModal(mode = 'add') {
        window.clearTimeout(shoppingSpentModalCloseTimer);
        shoppingSpentModal.classList.remove('is-closing');
        shoppingSpentModalMode = mode;
        const isAdding = mode === 'add';
        shoppingSpentModalTitle.textContent = isAdding ? t('addShoppingExpense') : t('shoppingEditTotal');
        shoppingSpentInputLabel.textContent = isAdding ? t('shoppingExpenseAmount') : t('spentToday');
        shoppingSpentInput.value = isAdding ? '' : String(currentShoppingSpent || '');
        shoppingSpentModal.classList.add('open');
      }

      function closeShoppingSpentModal() {
        if (!shoppingSpentModal.classList.contains('open')) return;
        shoppingSpentModal.classList.add('is-closing');
        window.clearTimeout(shoppingSpentModalCloseTimer);
        shoppingSpentModalCloseTimer = window.setTimeout(() => {
          shoppingSpentModal.classList.remove('open', 'is-closing');
          shoppingSpentModalCloseTimer = null;
        }, 300);
      }

      async function saveShoppingSpent() {
        const amount = parseShoppingAmount(shoppingSpentInput.value);
        const isAdding = shoppingSpentModalMode === 'add';
        if (!Number.isFinite(amount) || amount < 0 || (isAdding && amount <= 0)) {
          alert(t('shoppingInvalidSpent'));
          return;
        }
        await setShoppingSpent(isAdding ? currentShoppingSpent + amount : amount);
        closeShoppingSpentModal();
      }

      function showMonthlyPaymentStep(step) {
        currentMonthlyPaymentStep = step;
        monthlyPaymentForm.querySelectorAll('[data-monthly-step]').forEach((section) => {
          section.hidden = Number(section.dataset.monthlyStep) !== step;
        });
        monthlyPaymentStepProgress.querySelectorAll('span').forEach((segment, index) => {
          segment.classList.toggle('is-active', index < step);
        });
        monthlyPaymentStepProgress.setAttribute('aria-label', `${step} / 3`);
      }

      function parseMonthlyPaymentAmount(value) {
        return Number(String(value || '').trim().replace(',', '.'));
      }

      function getMonthlyPaymentDate() {
        const match = monthlyPaymentDateInput.value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!match) return '';
        const [, year, month, day] = match;
        const date = new Date(Number(year), Number(month) - 1, Number(day));
        if (date.getFullYear() !== Number(year) || date.getMonth() !== Number(month) - 1 || date.getDate() !== Number(day)) return '';
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      }

      function updateMonthlyPaymentDateDisplay() {
        const date = getMonthlyPaymentDate();
        monthlyPaymentDateDisplay.value = date ? formatMonthlyPaymentDate(date) : '';
      }

      function canAdvanceMonthlyPaymentStep(step) {
        if (step === 1) return Boolean(monthlyPaymentNameInput.value.trim());
        if (step === 2) return Number.isFinite(parseMonthlyPaymentAmount(monthlyPaymentAmountInput.value)) && parseMonthlyPaymentAmount(monthlyPaymentAmountInput.value) >= 0;
        return true;
      }

      function openMonthlyPaymentModal(payment = null, startStep = 1) {
        editingMonthlyPaymentId = payment ? payment.id : null;
        monthlyPaymentForm.reset();
        monthlyPaymentDateInput.min = getLocalDateKey();
        if (payment) {
          monthlyPaymentNameInput.value = payment.name;
          monthlyPaymentAmountInput.value = String(payment.amount);
          monthlyPaymentDateInput.value = payment.nextPayment;
          document.getElementById('monthlyPaymentModalTitle').textContent = t('editMonthlyPayment');
        } else {
          document.getElementById('monthlyPaymentModalTitle').textContent = t('addMonthlyPayment');
        }
        updateMonthlyPaymentDateDisplay();
        monthlyPaymentModal.classList.add('open');
        showMonthlyPaymentStep(startStep);
      }

      function closeMonthlyPaymentModal() {
        monthlyPaymentModal.classList.remove('open');
        editingMonthlyPaymentId = null;
        monthlyPaymentForm.reset();
        updateMonthlyPaymentDateDisplay();
        showMonthlyPaymentStep(1);
      }

      function showPriceBookStep(step) {
        currentPriceBookStep = step;
        priceBookForm.querySelectorAll('[data-price-step]').forEach((section) => {
          section.hidden = Number(section.dataset.priceStep) !== step;
        });
        priceBookStepProgress.querySelectorAll('span').forEach((segment, index) => {
          segment.classList.toggle('is-active', index < step);
        });
        priceBookStepProgress.setAttribute('aria-label', `${step} / 4`);
      }

      function canAdvancePriceBookStep(step) {
        if (step === 1) return Boolean(priceBookNameInput.value.trim());
        if (step === 2) return Number.isFinite(Number(priceBookPriceInput.value)) && Number(priceBookPriceInput.value) >= 0;
        if (step === 3) return Boolean(priceBookStoreInput.value.trim());
        return true;
      }

      function openPriceBookModal(product = null) {
        editingPriceBookId = product ? product.id : null;
        existingPriceBookPhoto = product ? product.photo || null : null;
        priceBookForm.reset();
        if (product) {
          priceBookNameInput.value = product.name;
          priceBookPriceInput.value = String(product.price);
          priceBookStoreInput.value = product.store;
          document.getElementById('priceBookModalTitle').textContent = t('editProduct');
        } else {
          document.getElementById('priceBookModalTitle').textContent = t('addProduct');
        }
        priceBookModal.classList.add('open');
        showPriceBookStep(1);
      }

      function closePriceBookModal() {
        priceBookModal.classList.remove('open');
        editingPriceBookId = null;
        existingPriceBookPhoto = null;
        priceBookForm.reset();
        showPriceBookStep(1);
      }

      async function completePriceBookModal() {
        const productCard = document.querySelector('#priceBookModal .modalCard');
        isCompletingProduct = true;
        productCard.classList.add('is-completing');
        await new Promise((resolve) => window.setTimeout(resolve, 920));
        closePriceBookModal();
        productCard.classList.remove('is-completing');
        isCompletingProduct = false;
      }

      async function renderEntries() {
        const entries = await loadAllEntries();
        const total = entries.reduce((sum, item) => sum + Number(item.amount || 0), 0);
        const totalHours = entries.reduce((sum, item) => sum + Number(item.hours || 0), 0);

        totalAmountEl.textContent = formatCurrency(total);
        entryCountEl.textContent = String(entries.length);
        hoursCountEl.textContent = formatHours(totalHours);

        if (!entries.length) {
          entryListEl.innerHTML = `<div class="emptyState">${t('noShifts')}</div>`;
          return;
        }

        entryListEl.innerHTML = entries.map((entry) => `
          <div class="entryCard">
            <div class="entryMain">
              <div class="entryTitle">${escapeHtml(entry.workName)}</div>
              <div class="entryMeta">${DAY_NAMES[Number(entry.weekday)] || '-'} • ${formatHours(entry.hours)} ${t('hoursShort')}</div>
            </div>
            <div class="entryValue">
              <div class="amount">${formatCurrency(entry.amount)}</div>
                  <button type="button" class="statMenuButton" data-action="open-entry-menu" data-id="${entry.id}" aria-label="${t('shiftActions')}" title="${t('shiftActions')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg></button>
            </div>
          </div>
        `).join('');

        entryListEl.querySelectorAll('[data-action="open-entry-menu"]').forEach((button) => {
          button.addEventListener('click', (event) => {
            openEntryActionsModal(event.currentTarget.dataset.id);
          });
        });
      }

      async function renderWorkOptions(filtered = null) {
        const options = await readAllFromStore('workOptions');
        const items = filtered !== null ? filtered : options;
        items.sort((a, b) => a.name.localeCompare(b.name));

        if (!items.length) {
          suggestionsList.innerHTML = '<div class="suggestionEmpty">Нет сохранённых вариантов</div>';
          return;
        }

        suggestionsList.innerHTML = items.map((option) => `
          <div class="suggestionItem">
            <button type="button" class="suggestionSelect" data-name="${escapeHtml(option.name)}">${escapeHtml(option.name)}</button>
            <button type="button" class="suggestionDelete" data-remove-id="${option.id}" aria-label="Удалить ${escapeHtml(option.name)}">×</button>
          </div>
        `).join('');

        suggestionsList.querySelectorAll('.suggestionSelect').forEach((button) => {
          button.addEventListener('click', () => {
            workNameInput.value = button.dataset.name;
            suggestionsList.classList.remove('open');
            workNameInput.focus();
          });
        });

        suggestionsList.querySelectorAll('.suggestionDelete').forEach((button) => {
          button.addEventListener('click', async (event) => {
            event.stopPropagation();
            await deleteFromStore('workOptions', button.dataset.removeId);
            const query = workNameInput.value.trim();
            const all = await readAllFromStore('workOptions');
            const next = !query ? all : all.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
            renderWorkOptions(next);
          });
        });
      }

      async function loadStats() {
        const stats = await readAllFromStore('stats');
        stats.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (!stats.length) {
          statsListEl.innerHTML = `<div class="emptyState">${t('noStats')}</div>`;
          return;
        }

        statsListEl.innerHTML = stats.map((item) => {
          const locale = currentLanguage === 'en' ? 'en-GB' : 'ru-RU';
          const start = new Date(item.weekStart).toLocaleDateString(locale, { day: '2-digit', month: '2-digit' });
          const end = new Date(item.weekEnd).toLocaleDateString(locale, { day: '2-digit', month: '2-digit' });
          return `
            <div class="statCard">
              <div class="statCardTop">
                <div>
                  <div class="entryTitle">${t('week')} ${start} — ${end} · ${item.entriesCount} ${t('shiftsCount')}</div>
                </div>
                <div class="statCardControls">
                  <div class="amount">${formatCurrency(item.total)}</div>
                  <button type="button" class="statMenuButton" data-action="toggle-week-menu" data-id="${item.id}" aria-label="${t('editShifts')}" title="${t('editShifts')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg></button>
                </div>
              </div>
            </div>
          `;
        }).join('');

        statsListEl.querySelectorAll('[data-action="toggle-week-menu"]').forEach((button) => {
          button.addEventListener('click', async (event) => {
            const stat = await readFromStore('stats', event.currentTarget.dataset.id);
            if (stat) openWeekActionsModal(stat);
          });
        });
      }

      function resetForm() {
        editingEntryId = null;
        editingArchivedEntryId = null;
        form.reset();
        weekdaySelect.value = String(getCurrentWeekdayIndex());
        hoursInput.value = '';
        showFormStep(1, false);
      }

      async function openSettingsModal() {
        const settingsPage = document.getElementById('settingsModal');
        await restoreSavedGeneralSettings();
        settingsPage.style.display = 'block';
        settingsPage.classList.remove('is-hiding');
        requestAnimationFrame(() => settingsPage.classList.add('is-visible'));
        await refreshDatabaseUsage();
      }

      function closeSettingsModal() {
        const settingsPage = document.getElementById('settingsModal');
        if (settingsPage.style.display !== 'block') return;
        restoreSavedGeneralSettings().catch((error) => console.error('Failed to restore general settings', error));
        settingsPage.classList.remove('is-visible');
        settingsPage.classList.add('is-hiding');
        window.setTimeout(() => {
          settingsPage.style.display = 'none';
          settingsPage.classList.remove('is-hiding');
        }, 300);
      }

      function openShoppingSetupModal() {
        if (shoppingSetupModal.style.display === 'block') return;
        shoppingSetupModal.style.display = 'block';
        shoppingSetupModal.classList.remove('is-hiding');
        requestAnimationFrame(() => shoppingSetupModal.classList.add('is-visible'));
      }

      function closeShoppingSetupModal() {
        if (shoppingSetupModal.style.display !== 'block') return;
        shoppingSetupModal.classList.remove('is-visible');
        shoppingSetupModal.classList.add('is-hiding');
        window.setTimeout(() => {
          shoppingSetupModal.style.display = 'none';
          shoppingSetupModal.classList.remove('is-hiding');
        }, 300);
      }

      async function openShoppingSettingsPage() {
        await ensureShoppingStores();
        await restoreSavedGeneralSettings();
        shoppingSettingsPage.style.display = 'block';
        shoppingSettingsPage.classList.remove('is-hiding');
        const dailyLimit = await getShoppingDailyLimit();
        shoppingSettingsLimitInput.value = String(dailyLimit || '');
        const today = dailyLimit > 0 ? await getShoppingDay(getLocalDateKey(), dailyLimit) : null;
        shoppingSettingsCarryInput.value = today ? String(Math.round(getShoppingCarryBalance(today) * 100) / 100) : '';
        shoppingCarryEnabledToggle.checked = await getShoppingCarryEnabled();
        updateShoppingCarryInputState();
        shoppingProgressStyleSelect.value = await getShoppingProgressStyle();
        await refreshDatabaseUsage();
        requestAnimationFrame(() => shoppingSettingsPage.classList.add('is-visible'));
      }

      function closeShoppingSettingsPage() {
        if (shoppingSettingsPage.style.display !== 'block') return;
        Promise.all([
          getShoppingProgressStyle(),
          restoreSavedGeneralSettings()
        ]).then(([style]) => {
          shoppingProgressStyleSelect.value = style;
          applyShoppingProgressStyle(style);
        });
        shoppingSettingsPage.classList.remove('is-visible');
        shoppingSettingsPage.classList.add('is-hiding');
        window.setTimeout(() => {
          shoppingSettingsPage.style.display = 'none';
          shoppingSettingsPage.classList.remove('is-hiding');
        }, 300);
      }

      async function openGeneralSettingsPage(settingsPage) {
        await restoreSavedGeneralSettings();
        settingsPage.style.display = 'block';
        settingsPage.classList.remove('is-hiding');
        await refreshDatabaseUsage();
        requestAnimationFrame(() => settingsPage.classList.add('is-visible'));
      }

      function closeGeneralSettingsPage(settingsPage) {
        if (settingsPage.style.display !== 'block') return;
        restoreSavedGeneralSettings().catch((error) => console.error('Failed to restore general settings', error));
        settingsPage.classList.remove('is-visible');
        settingsPage.classList.add('is-hiding');
        window.setTimeout(() => {
          settingsPage.style.display = 'none';
          settingsPage.classList.remove('is-hiding');
        }, 300);
      }

      function openShiftModal() {
        document.getElementById('shiftModalTitle').textContent = t('addShift');
        document.getElementById('shiftModal').classList.add('open');
        showFormStep(1);
      }

      function openEditModal(entry) {
        editingEntryId = entry.id;
        workNameInput.value = entry.workName;
        weekdaySelect.value = String(entry.weekday);
        hoursInput.value = String(entry.hours);
        amountInput.value = String(entry.amount);
        document.getElementById('shiftModalTitle').textContent = t('editShift');
        document.getElementById('shiftModal').classList.add('open');
        showFormStep(1);
      }

      function closeShiftModal() {
        document.getElementById('shiftModal').classList.remove('open');
      }

      async function completeShiftModal() {
        const shiftCard = document.querySelector('#shiftModal .modalCard');
        isCompletingShift = true;
        shiftCard.classList.add('is-completing');
        await new Promise((resolve) => window.setTimeout(resolve, 920));
        closeShiftModal();
        shiftCard.classList.remove('is-completing');
        isCompletingShift = false;
        resetForm();
      }

      function formatWeekRange(stat) {
        const locale = currentLanguage === 'en' ? 'en-GB' : 'ru-RU';
        const start = new Date(stat.weekStart).toLocaleDateString(locale, { day: '2-digit', month: '2-digit' });
        const end = new Date(stat.weekEnd).toLocaleDateString(locale, { day: '2-digit', month: '2-digit' });
        return `${start} — ${end}`;
      }

      function renderWeekEntries(stat) {
        const entries = stat.entries || [];
        weekModalTitle.textContent = `${t('weekShifts')} ${formatWeekRange(stat)}`;
        weekModalSummary.textContent = `${entries.length} ${t('shiftsCount')} • ${formatCurrency(stat.total)}`;

        if (!entries.length) {
          weekEntriesList.innerHTML = `<div class="emptyState">${t('unavailable')}</div>`;
          return;
        }

        weekEntriesList.innerHTML = entries.map((entry) => `
          <div class="entryCard">
            <div class="entryMain">
              <div class="entryTitle">${escapeHtml(entry.workName)}</div>
              <div class="entryMeta">${DAY_NAMES[Number(entry.weekday)] || '-'} • ${formatHours(entry.hours)} ${t('hoursShort')}</div>
            </div>
            <div class="entryValue">
              <div class="amount">${formatCurrency(entry.amount)}</div>
              <button type="button" class="tinyButton secondary" data-action="edit-archived-entry" data-id="${entry.id}">${t('editShift')}</button>
            </div>
          </div>
        `).join('');

        weekEntriesList.querySelectorAll('[data-action="edit-archived-entry"]').forEach((button) => {
          button.addEventListener('click', () => openArchivedEntryEdit(stat, button.dataset.id));
        });
      }

      function openWeekModal(stat) {
        openedStatId = stat.id;
        renderWeekEntries(stat);
        weekModal.classList.add('open');
      }

      function closeWeekModal() {
        weekModal.classList.remove('open');
        openedStatId = null;
      }

      function openBottomSheet(modal) {
        modal.classList.remove('is-closing');
        modal.classList.add('open');
      }

      function closeBottomSheet(modal) {
        if (!modal.classList.contains('open')) return Promise.resolve();
        modal.classList.remove('open');
        modal.classList.add('is-closing');
        return new Promise((resolve) => {
          window.setTimeout(() => {
            modal.classList.remove('is-closing');
            resolve();
          }, 210);
        });
      }

      function openWeekActionsModal(stat) {
        selectedStatId = stat.id;
        openBottomSheet(weekActionsModal);
      }

      async function closeWeekActionsModal() {
        await closeBottomSheet(weekActionsModal);
        selectedStatId = null;
      }

      function openEntryActionsModal(entryId) {
        selectedEntryId = entryId;
        openBottomSheet(entryActionsModal);
      }

      async function closeEntryActionsModal() {
        await closeBottomSheet(entryActionsModal);
        selectedEntryId = null;
      }

      function openPriceBookActionsModal(productId) {
        selectedPriceBookId = productId;
        openBottomSheet(priceBookActionsModal);
      }

      async function closePriceBookActionsModal() {
        await closeBottomSheet(priceBookActionsModal);
        selectedPriceBookId = null;
      }

      function openMonthlyPaymentActionsModal(paymentId) {
        selectedMonthlyPaymentId = paymentId;
        openBottomSheet(monthlyPaymentActionsModal);
      }

      async function closeMonthlyPaymentActionsModal() {
        await closeBottomSheet(monthlyPaymentActionsModal);
        selectedMonthlyPaymentId = null;
      }

      [
        [weekActionsModal, closeWeekActionsModal],
        [entryActionsModal, closeEntryActionsModal],
        [priceBookActionsModal, closePriceBookActionsModal],
        [monthlyPaymentActionsModal, closeMonthlyPaymentActionsModal]
      ].forEach(([modal, close]) => {
        modal.addEventListener('click', (event) => {
          if (event.target === modal) close();
        });
      });

      function openArchivedEntryEdit(stat, entryId) {
        const entry = (stat.entries || []).find((item) => item.id === entryId);
        if (!entry) return;
        editingArchivedEntryId = entry.id;
        editingEntryId = null;
        workNameInput.value = entry.workName;
        weekdaySelect.value = String(entry.weekday);
        hoursInput.value = String(entry.hours);
        amountInput.value = String(entry.amount);
        document.getElementById('shiftModalTitle').textContent = t('editShift');
        document.getElementById('shiftModal').classList.add('open');
        showFormStep(1);
      }

      async function refreshSuggestions() {
        const all = await readAllFromStore('workOptions');
        const query = workNameInput.value.trim();
        const filtered = !query ? all : all.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
        renderWorkOptions(filtered);
      }

      async function renderTodos(newTaskId = null) {
        await ensureTodoStore();
        const tasks = await readAllFromStore('todoTasks');
        tasks.sort((first, second) => String(second.createdAt || '').localeCompare(String(first.createdAt || '')));

        updateTodoProgress(tasks.filter((task) => task.completed).length, tasks.length);

        if (!tasks.length) {
          todoList.innerHTML = `<div class="todoEmpty">${t('todoEmpty')}</div>`;
          return;
        }

        todoList.innerHTML = tasks.map((task) => {
          const taskId = escapeHtml(task.id);
          const isCompleted = Boolean(task.completed);
          return `
            <article class="todoCard${isCompleted ? ' is-completed' : ''}${task.id === newTaskId ? ' is-new' : ''}" data-todo-id="${taskId}">
              <button type="button" class="todoCheck${isCompleted ? ' is-completed' : ''}" data-todo-action="toggle" data-todo-id="${taskId}" aria-pressed="${isCompleted}" aria-label="${isCompleted ? 'Отметить как невыполненную' : 'Отметить как выполненную'}">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 12.5L10.2 16L17.5 8.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <button type="button" class="todoTaskName" data-todo-action="details" data-todo-id="${taskId}">${escapeHtml(task.title)}</button>
              <div class="todoActions">
                <button type="button" class="todoAction" data-todo-action="edit" data-todo-id="${taskId}" aria-label="${t('edit')}"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20H21M16.5 3.5C16.8978 3.10218 17.4374 2.87868 18 2.87868C18.5626 2.87868 19.1022 3.10218 19.5 3.5C19.8978 3.89783 20.1213 4.43739 20.1213 5C20.1213 5.56261 19.8978 6.10218 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button type="button" class="todoAction is-delete" data-todo-action="delete" data-todo-id="${taskId}" aria-label="${t('remove')}"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7H20M10 11V17M14 11V17M6 7L7 20H17L18 7M9 7V4H15V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              </div>
            </article>
          `;
        }).join('');
      }

      function updateTodoProgress(completedCount, totalCount) {
        todoProgress.textContent = t('todoCompletedCount')
          .replace('{done}', completedCount)
          .replace('{total}', totalCount);
      }

      function showTodoStep(step) {
        currentTodoStep = step;
        todoForm.querySelectorAll('[data-todo-step]').forEach((section) => {
          section.hidden = Number(section.dataset.todoStep) !== step;
        });
        todoStepProgress.querySelectorAll('span').forEach((segment, index) => {
          segment.classList.toggle('is-active', index < step);
        });
        todoStepProgress.setAttribute('aria-label', `${step} / 2`);
      }

      function canAdvanceTodoStep() {
        if (todoTitleInput.value.trim()) return true;
        alert(t('todoInvalid'));
        return false;
      }

      function openTodoModal(task = null) {
        editingTodoId = task ? task.id : null;
        todoForm.reset();
        todoTitleInput.value = task ? task.title : '';
        todoDetailsInput.value = task ? task.details || '' : '';
        todoModalTitle.textContent = task ? t('editTodo') : t('addTodo');
        todoModal.classList.add('open');
        todoModal.setAttribute('aria-hidden', 'false');
        showTodoStep(1);
      }

      function closeTodoModal(force = false) {
        if (isSavingTodo && !force) return;
        todoModal.classList.remove('open');
        todoModal.setAttribute('aria-hidden', 'true');
        todoForm.reset();
        editingTodoId = null;
        isSavingTodo = false;
        showTodoStep(1);
      }

      async function saveTodo() {
        if (isSavingTodo) return;
        const title = todoTitleInput.value.trim();
        if (!title) {
          alert(t('todoInvalid'));
          return;
        }
        isSavingTodo = true;
        try {
          await ensureTodoStore();
          const existing = editingTodoId ? await readFromStore('todoTasks', editingTodoId) : null;
          const savedTaskId = existing?.id || uid();
          const updatedAt = new Date().toISOString();
          await writeToStore('todoTasks', {
            id: savedTaskId,
            title,
            details: todoDetailsInput.value.trim(),
            completed: Boolean(existing?.completed),
            createdAt: existing?.createdAt || updatedAt,
            updatedAt
          });
          closeTodoModal(true);
          await renderTodos(existing ? null : savedTaskId);
        } catch (error) {
          isSavingTodo = false;
          throw error;
        }
      }

      function openTodoDetail(task, sourceCard) {
        window.clearTimeout(todoDetailCloseTimer);
        todoDetailModal.classList.remove('is-closing');
        todoDetailTitle.textContent = task.title;
        todoDetailText.textContent = task.details || t('todoNoDetails');
        const detailCard = todoDetailModal.querySelector('.todoDetailCard');
        const sourceBounds = sourceCard.getBoundingClientRect();
        detailCard.style.setProperty('--todo-origin-x', `${sourceBounds.left + sourceBounds.width / 2}px`);
        detailCard.style.setProperty('--todo-origin-y', `${sourceBounds.top + sourceBounds.height / 2}px`);
        todoDetailModal.classList.add('open');
        todoDetailModal.setAttribute('aria-hidden', 'false');
      }

      function closeTodoDetail() {
        if (!todoDetailModal.classList.contains('open') || todoDetailModal.classList.contains('is-closing')) return;
        todoDetailModal.classList.add('is-closing');
        window.clearTimeout(todoDetailCloseTimer);
        todoDetailCloseTimer = window.setTimeout(() => {
          todoDetailModal.classList.remove('open', 'is-closing');
          todoDetailModal.setAttribute('aria-hidden', 'true');
          todoDetailCloseTimer = null;
        }, 260);
      }

      async function toggleTodo(taskId) {
        const task = await readFromStore('todoTasks', taskId);
        if (!task) return;
        const card = Array.from(todoList.querySelectorAll('.todoCard')).find((item) => item.dataset.todoId === taskId);
        task.completed = !task.completed;
        task.updatedAt = new Date().toISOString();
        await writeToStore('todoTasks', task);
        if (!card) {
          await renderTodos();
          return;
        }
        const checkButton = card.querySelector('.todoCheck');
        card.classList.remove('is-new');
        card.classList.add('is-updating');
        requestAnimationFrame(() => {
          card.classList.toggle('is-completed', task.completed);
          checkButton.classList.toggle('is-completed', task.completed);
          checkButton.setAttribute('aria-pressed', String(task.completed));
          checkButton.setAttribute('aria-label', task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную');
          updateTodoProgress(todoList.querySelectorAll('.todoCard.is-completed').length, todoList.querySelectorAll('.todoCard').length);
          window.setTimeout(() => card.classList.remove('is-updating'), 380);
        });
      }

      async function deleteTodo(taskId) {
        const card = Array.from(todoList.querySelectorAll('.todoCard')).find((item) => item.dataset.todoId === taskId);
        if (card) {
          card.classList.add('is-removing');
          await new Promise((resolve) => window.setTimeout(resolve, 260));
        }
        await deleteFromStore('todoTasks', taskId);
        await renderTodos();
      }

      document.addEventListener('click', (event) => {
        const autocompleteWrap = document.querySelector('.autocompleteWrap');
        if (autocompleteWrap && !autocompleteWrap.contains(event.target)) {
          suggestionsList.classList.remove('open');
        }

        if (!event.target.closest('.appSwitcher')) closeAppSwitchers();
      });

      document.addEventListener('gesturestart', (event) => event.preventDefault(), { passive: false });
      document.addEventListener('gesturechange', (event) => event.preventDefault(), { passive: false });

      document.querySelectorAll('.appSwitcherButton').forEach((button) => {
        button.addEventListener('click', (event) => {
          const switcher = event.currentTarget.closest('.appSwitcher');
          const isOpen = switcher.classList.contains('is-open');
          closeAppSwitchers();
          if (!isOpen) {
            switcher.classList.add('is-open');
            button.setAttribute('aria-expanded', 'true');
          }
        });
      });

      document.querySelectorAll('[data-app-target]').forEach((button) => {
        button.addEventListener('click', () => showApp(button.dataset.appTarget));
      });

      document.getElementById('openTodoModalBtn').addEventListener('click', () => openTodoModal());
      document.getElementById('closeTodoModalBtn').addEventListener('click', closeTodoModal);
      document.getElementById('closeTodoDetailModalBtn').addEventListener('click', closeTodoDetail);
      todoModal.addEventListener('click', (event) => {
        if (event.target === todoModal) closeTodoModal();
      });
      todoDetailModal.addEventListener('click', (event) => {
        if (event.target === todoDetailModal) closeTodoDetail();
      });
      todoForm.querySelectorAll('[data-todo-step-next]').forEach((button) => {
        button.addEventListener('click', () => {
          if (canAdvanceTodoStep()) showTodoStep(Number(button.dataset.todoStepNext) + 1);
        });
      });
      todoForm.querySelectorAll('[data-todo-step-back]').forEach((button) => {
        button.addEventListener('click', () => showTodoStep(Number(button.dataset.todoStepBack)));
      });
      todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (currentTodoStep === 1) {
          if (canAdvanceTodoStep()) showTodoStep(2);
          return;
        }
        saveTodo().catch((error) => {
          console.error('Failed to save todo task', error);
          alert(currentLanguage === 'en' ? 'Could not save the task. Please try again.' : 'Не удалось сохранить задачу. Попробуйте ещё раз.');
        });
      });
      todoList.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-todo-action]');
        if (!actionButton) return;
        const { todoAction: action, todoId } = actionButton.dataset;
        if (!todoId) return;
        if (action === 'details') {
          readFromStore('todoTasks', todoId).then((task) => {
            const sourceCard = actionButton.closest('.todoCard');
            if (task && sourceCard) openTodoDetail(task, sourceCard);
          }).catch((error) => console.error('Failed to load todo task details', error));
          return;
        }
        if (action === 'edit') {
          readFromStore('todoTasks', todoId).then((task) => {
            if (task) openTodoModal(task);
          }).catch((error) => console.error('Failed to load todo task', error));
          return;
        }
        const operation = action === 'toggle'
          ? toggleTodo(todoId)
          : action === 'delete'
            ? deleteTodo(todoId)
            : null;
        if (!operation) return;
        operation.catch((error) => {
          console.error('Failed to update todo task', error);
          alert(currentLanguage === 'en' ? 'Could not update the task. Please try again.' : 'Не удалось обновить задачу. Попробуйте ещё раз.');
        });
      });

      document.getElementById('settingsBtn').addEventListener('click', openSettingsModal);
      document.getElementById('closeSettingsBtn').addEventListener('click', closeSettingsModal);
      document.getElementById('saveSettingsBtn').addEventListener('click', () => {
        saveGeneralSettings(
          document.getElementById('languageSelect'),
          document.getElementById('themeSelect'),
          document.getElementById('developerModeToggle')
        ).then(closeSettingsModal).catch((error) => {
          console.error('Failed to save general settings', error);
          alert(currentLanguage === 'en' ? 'Could not save the settings. Please try again.' : 'Не удалось сохранить настройки. Попробуйте ещё раз.');
        });
      });
      document.getElementById('openShoppingSettingsBtn').addEventListener('click', openShoppingSettingsPage);
      document.getElementById('closeShoppingSettingsBtn').addEventListener('click', closeShoppingSettingsPage);
      shoppingProgressStyleSelect.addEventListener('change', (event) => {
        applyShoppingProgressStyle(event.target.value);
      });
      shoppingCarryEnabledToggle.addEventListener('change', () => updateShoppingCarryInputState());
      document.getElementById('saveShoppingSettingsBtn').addEventListener('click', () => {
        saveShoppingSettings().catch((error) => {
          console.error('Failed to save Shopping settings', error);
          alert(currentLanguage === 'en' ? 'Could not save the settings. Please try again.' : 'Не удалось сохранить настройки. Попробуйте ещё раз.');
        });
      });
      document.getElementById('openShoppingAddModalBtn').addEventListener('click', () => openShoppingSpentModal('add'));
      document.getElementById('openShoppingSpentModalBtn').addEventListener('click', () => openShoppingSpentModal('edit'));
      document.getElementById('closeShoppingSpentModalBtn').addEventListener('click', closeShoppingSpentModal);
      document.getElementById('saveShoppingSpentBtn').addEventListener('click', () => {
        saveShoppingSpent().catch((error) => {
          console.error('Failed to save Shopping spending', error);
          alert(currentLanguage === 'en' ? 'Could not save the spending. Please try again.' : 'Не удалось сохранить траты. Попробуйте ещё раз.');
        });
      });
      shoppingSpentModal.addEventListener('click', (event) => {
        if (event.target === shoppingSpentModal) closeShoppingSpentModal();
      });
      document.querySelectorAll('[data-section-toggle]').forEach((button) => {
        button.addEventListener('click', () => {
          const section = document.getElementById(button.dataset.sectionToggle);
          if (!section) return;
          const isCollapsed = section.classList.toggle('is-collapsed');
          button.setAttribute('aria-expanded', String(!isCollapsed));
        });
      });
      document.getElementById('openShiftModalBtn').addEventListener('click', openShiftModal);
      document.getElementById('closeWeekModalBtn').addEventListener('click', closeWeekModal);
      document.getElementById('openWeekEditorBtn').addEventListener('click', async () => {
        if (!selectedStatId) return;
        const stat = await readFromStore('stats', selectedStatId);
        await closeWeekActionsModal();
        if (stat) openWeekModal(stat);
      });
      document.getElementById('openEntryEditorBtn').addEventListener('click', async () => {
        if (!selectedEntryId) return;
        const entry = (await loadAllEntries()).find((item) => item.id === selectedEntryId);
        await closeEntryActionsModal();
        if (entry) openEditModal(entry);
      });
      document.getElementById('deleteEntryBtn').addEventListener('click', async () => {
        if (!selectedEntryId) return;
        const entryId = selectedEntryId;
        await closeEntryActionsModal();
        await deleteFromStore('entries', entryId);
        await renderEntries();
      });
      document.getElementById('closeShiftModalBtn').addEventListener('click', () => {
        closeShiftModal();
        resetForm();
      });

      document.getElementById('openPriceBookModalBtn').addEventListener('click', () => openPriceBookModal());
      document.getElementById('openPriceBookSettingsBtn').addEventListener('click', () => {
        openGeneralSettingsPage(document.getElementById('priceBookSettingsPage'));
      });
      document.getElementById('closePriceBookSettingsBtn').addEventListener('click', () => {
        closeGeneralSettingsPage(document.getElementById('priceBookSettingsPage'));
      });
      document.getElementById('savePriceBookSettingsBtn').addEventListener('click', () => {
        saveGeneralSettings(
          document.getElementById('priceBookLanguageSelect'),
          document.getElementById('priceBookThemeSelect'),
          document.getElementById('priceBookDeveloperModeToggle')
        ).then(() => closeGeneralSettingsPage(document.getElementById('priceBookSettingsPage'))).catch((error) => {
          console.error('Failed to save Price Book settings', error);
          alert(currentLanguage === 'en' ? 'Could not save the settings. Please try again.' : 'Не удалось сохранить настройки. Попробуйте ещё раз.');
        });
      });
      document.getElementById('closePriceBookModalBtn').addEventListener('click', closePriceBookModal);
      priceBookForm.querySelectorAll('[data-price-step-next]').forEach((button) => {
        button.addEventListener('click', () => {
          const step = Number(button.dataset.priceStepNext);
          if (!canAdvancePriceBookStep(step)) {
            alert(t('invalidProduct'));
            return;
          }
          showPriceBookStep(step + 1);
        });
      });
      priceBookForm.querySelectorAll('[data-price-step-back]').forEach((button) => {
        button.addEventListener('click', () => showPriceBookStep(Number(button.dataset.priceStepBack)));
      });
      priceBookForm.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || currentPriceBookStep === 4) return;
        event.preventDefault();
        const nextButton = priceBookForm.querySelector(`[data-price-step-next="${currentPriceBookStep}"]`);
        if (nextButton) nextButton.click();
      });
      document.getElementById('openPriceBookEditorBtn').addEventListener('click', async () => {
        if (!selectedPriceBookId) return;
        const product = await readFromStore('priceBook', selectedPriceBookId);
        await closePriceBookActionsModal();
        if (product) openPriceBookModal(product);
      });
      document.getElementById('deletePriceBookBtn').addEventListener('click', async () => {
        if (!selectedPriceBookId) return;
        const productId = selectedPriceBookId;
        await closePriceBookActionsModal();
        const productCard = Array.from(priceBookList.querySelectorAll('.productCard')).find((card) => card.dataset.productId === productId);
        if (productCard) {
          productCard.classList.add('is-removing');
          await new Promise((resolve) => window.setTimeout(resolve, 240));
        }
        await deleteFromStore('priceBook', productId);
        await renderPriceBook(true);
      });

      priceBookForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (isCompletingProduct) return;
        const name = priceBookNameInput.value.trim();
        const price = Number(priceBookPriceInput.value);
        const store = priceBookStoreInput.value.trim();
        if (!name || !store || !Number.isFinite(price) || price < 0) {
          alert(t('invalidProduct'));
          return;
        }

        const photoFile = priceBookPhotoInput.files[0];
        const photo = photoFile ? await readFileAsDataUrl(photoFile) : existingPriceBookPhoto;
        const existing = editingPriceBookId ? await readFromStore('priceBook', editingPriceBookId) : null;
        await writeToStore('priceBook', {
          id: editingPriceBookId || uid(),
          name,
          price,
          store,
          photo,
          createdAt: existing ? existing.createdAt : new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        await completePriceBookModal();
        await renderPriceBook(true);
      });

      const saveShoppingLimitBtn = document.getElementById('saveShoppingLimitBtn');
      const startShoppingSetup = (event) => {
        event.preventDefault();
        setShoppingDailyLimit().catch((error) => {
          console.error('Failed to save shopping limit', error);
          alert(currentLanguage === 'en' ? 'Could not save the daily limit. Please try again.' : 'Не удалось сохранить дневной лимит. Попробуйте ещё раз.');
        });
      };
      saveShoppingLimitBtn.addEventListener('click', startShoppingSetup);
      saveShoppingLimitBtn.addEventListener('touchend', startShoppingSetup, { passive: false });
      document.querySelectorAll('[data-shopping-adjust]').forEach((button) => {
        button.addEventListener('click', async () => {
          const next = Math.max(0, currentShoppingSpent + Number(button.dataset.shoppingAdjust));
          await setShoppingSpent(Math.round(next * 100) / 100);
        });
      });
      shoppingHistoryToggle.addEventListener('click', () => {
        const isExpanded = shoppingHistoryToggle.getAttribute('aria-expanded') === 'true';
        shoppingHistoryToggle.setAttribute('aria-expanded', String(!isExpanded));
        shoppingHistoryBody.setAttribute('aria-hidden', String(isExpanded));
      });
      shoppingDeveloperDateInput.addEventListener('input', updateShoppingDeveloperDateDisplay);
      shoppingDeveloperDateInput.addEventListener('change', updateShoppingDeveloperDateDisplay);
      document.getElementById('addShoppingDeveloperExpenseBtn').addEventListener('click', () => {
        addShoppingDeveloperExpense().catch((error) => {
          console.error('Failed to add developer shopping expense', error);
          alert(currentLanguage === 'en' ? 'Could not add the expense. Please try again.' : 'Не удалось добавить расход. Попробуйте ещё раз.');
        });
      });
      document.getElementById('deleteShoppingDeveloperDayBtn').addEventListener('click', () => {
        deleteShoppingDeveloperDay().catch((error) => {
          console.error('Failed to delete developer shopping day', error);
          alert(currentLanguage === 'en' ? 'Could not delete the day entry. Please try again.' : 'Не удалось удалить запись дня. Попробуйте ещё раз.');
        });
      });

      document.getElementById('openMonthlyPaymentModalBtn').addEventListener('click', () => openMonthlyPaymentModal());
      document.getElementById('openMonthlySettingsBtn').addEventListener('click', () => {
        openGeneralSettingsPage(document.getElementById('monthlySettingsPage'));
      });
      document.getElementById('closeMonthlySettingsBtn').addEventListener('click', () => {
        closeGeneralSettingsPage(document.getElementById('monthlySettingsPage'));
      });
      document.getElementById('saveMonthlySettingsBtn').addEventListener('click', () => {
        saveGeneralSettings(
          document.getElementById('monthlyLanguageSelect'),
          document.getElementById('monthlyThemeSelect'),
          document.getElementById('monthlyDeveloperModeToggle')
        ).then(() => closeGeneralSettingsPage(document.getElementById('monthlySettingsPage'))).catch((error) => {
          console.error('Failed to save Mouthly Payments settings', error);
          alert(currentLanguage === 'en' ? 'Could not save the settings. Please try again.' : 'Не удалось сохранить настройки. Попробуйте ещё раз.');
        });
      });
      document.getElementById('closeMonthlyPaymentModalBtn').addEventListener('click', closeMonthlyPaymentModal);
      monthlyPaymentDateInput.addEventListener('input', updateMonthlyPaymentDateDisplay);
      monthlyPaymentDateInput.addEventListener('change', updateMonthlyPaymentDateDisplay);
      monthlyPaymentForm.querySelectorAll('[data-monthly-step-next]').forEach((button) => {
        button.addEventListener('click', () => {
          const step = Number(button.dataset.monthlyStepNext);
          if (!canAdvanceMonthlyPaymentStep(step)) {
            alert(t('invalidMonthlyPayment'));
            return;
          }
          showMonthlyPaymentStep(step + 1);
        });
      });
      monthlyPaymentForm.querySelectorAll('[data-monthly-step-back]').forEach((button) => {
        button.addEventListener('click', () => showMonthlyPaymentStep(Number(button.dataset.monthlyStepBack)));
      });
      monthlyPaymentForm.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || currentMonthlyPaymentStep === 3) return;
        event.preventDefault();
        const nextButton = monthlyPaymentForm.querySelector(`[data-monthly-step-next="${currentMonthlyPaymentStep}"]`);
        if (nextButton) nextButton.click();
      });
      document.getElementById('openMonthlyPaymentEditorBtn').addEventListener('click', async () => {
        if (!selectedMonthlyPaymentId) return;
        const payment = await readFromStore('monthlyPayments', selectedMonthlyPaymentId);
        await closeMonthlyPaymentActionsModal();
        if (payment) openMonthlyPaymentModal(payment);
      });
      document.getElementById('deleteMonthlyPaymentBtn').addEventListener('click', async () => {
        if (!selectedMonthlyPaymentId) return;
        const paymentId = selectedMonthlyPaymentId;
        await closeMonthlyPaymentActionsModal();
        await ensureMonthlyPaymentsStore();
        await deleteFromStore('monthlyPayments', paymentId);
        await renderMonthlyPayments();
      });
      async function saveMonthlyPayment() {
        if (isSavingMonthlyPayment) return;
        const name = monthlyPaymentNameInput.value.trim();
        const amount = parseMonthlyPaymentAmount(monthlyPaymentAmountInput.value);
        const nextPayment = getMonthlyPaymentDate();
        if (!name) {
          showMonthlyPaymentStep(1);
          monthlyPaymentNameInput.focus();
          return;
        }
        if (!Number.isFinite(amount) || amount < 0) {
          showMonthlyPaymentStep(2);
          monthlyPaymentAmountInput.focus();
          return;
        }
        if (!nextPayment) {
          showMonthlyPaymentStep(3);
          monthlyPaymentDateInput.focus();
          return;
        }
        if (isMonthlyPaymentExpired(nextPayment)) {
          showMonthlyPaymentStep(3);
          monthlyPaymentDateInput.focus();
          alert(t('invalidPastPayment'));
          return;
        }
        const saveButton = document.getElementById('saveMonthlyPaymentBtn');
        isSavingMonthlyPayment = true;
        saveButton.disabled = true;
        try {
          await ensureMonthlyPaymentsStore();
          const existing = editingMonthlyPaymentId ? await readFromStore('monthlyPayments', editingMonthlyPaymentId) : null;
          await writeToStore('monthlyPayments', {
            id: editingMonthlyPaymentId || uid(),
            name,
            amount,
            nextPayment,
            createdAt: existing ? existing.createdAt : new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
          closeMonthlyPaymentModal();
          await renderMonthlyPayments();
        } catch (error) {
          console.error('Failed to save monthly payment', error);
          alert(currentLanguage === 'en' ? 'Could not save the payment. Please try again.' : 'Не удалось сохранить плату. Попробуйте ещё раз.');
        } finally {
          isSavingMonthlyPayment = false;
          saveButton.disabled = false;
        }
      }

      monthlyPaymentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveMonthlyPayment();
      });
      const saveMonthlyPaymentBtn = document.getElementById('saveMonthlyPaymentBtn');
      saveMonthlyPaymentBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveMonthlyPayment();
      });
      saveMonthlyPaymentBtn.addEventListener('touchend', (event) => {
        event.preventDefault();
        saveMonthlyPayment();
      }, { passive: false });

      form.querySelectorAll('[data-step-next]').forEach((button) => {
        button.addEventListener('click', () => {
          const step = Number(button.dataset.stepNext);
          if (!canAdvanceFormStep(step)) {
            alert(t('invalidForm'));
            showFormStep(step);
            return;
          }
          showFormStep(step + 1);
        });
      });

      form.querySelectorAll('[data-step-back]').forEach((button) => {
        button.addEventListener('click', () => showFormStep(Number(button.dataset.stepBack)));
      });

      form.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || currentFormStep === 4) return;
        event.preventDefault();
        const nextButton = form.querySelector(`[data-step-next="${currentFormStep}"]`);
        if (nextButton) nextButton.click();
      });

      document.querySelectorAll('[data-general-language]').forEach((control) => {
        control.addEventListener('change', async (event) => {
          applyLanguage(event.currentTarget.value);
          await refreshDatabaseUsage();
          await renderEntries();
          await loadStats();
          if (openedStatId) {
            const stat = await readFromStore('stats', openedStatId);
            if (stat) renderWeekEntries(stat);
          }
        });
      });

      document.querySelectorAll('[data-general-theme]').forEach((control) => {
        control.addEventListener('change', (event) => {
          applyTheme(event.currentTarget.value);
        });
      });

      developerModeToggles.forEach((toggle) => {
        toggle.addEventListener('change', (event) => {
          applyDeveloperMode(event.currentTarget.checked);
        });
      });

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (isCompletingShift) return;

        const name = workNameInput.value.trim();
        const weekday = Number(weekdaySelect.value);
        const hours = Number(hoursInput.value);
        const amount = Number(amountInput.value);

        if (!name || !Number.isFinite(hours) || hours <= 0 || !Number.isFinite(amount) || amount <= 0) {
          alert(t('invalidForm'));
          return;
        }

        const entryPayload = {
          id: editingEntryId || editingArchivedEntryId || uid(),
          workName: name,
          weekday,
          hours,
          amount,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        if (editingArchivedEntryId && openedStatId) {
          const stat = await readFromStore('stats', openedStatId);
          if (!stat) return;
          const previousEntry = (stat.entries || []).find((item) => item.id === editingArchivedEntryId);
          if (previousEntry) entryPayload.createdAt = previousEntry.createdAt;
          stat.entries = (stat.entries || []).map((item) => item.id === editingArchivedEntryId ? entryPayload : item);
          stat.entriesCount = stat.entries.length;
          stat.total = stat.entries.reduce((sum, item) => sum + Number(item.amount || 0), 0);
          await writeToStore('stats', stat);
          renderWeekEntries(stat);
          await loadStats();
        } else if (editingEntryId) {
          const existing = await readFromStore('entries', editingEntryId);
          if (existing) entryPayload.createdAt = existing.createdAt;
          await writeToStore('entries', entryPayload);
          await renderEntries();
        } else {
          await writeToStore('entries', entryPayload);
          await renderEntries();
        }

        await completeShiftModal();
      });

      async function ensureWeeklyReset() {
        const now = new Date();
        const currentMonday = getStartOfWeek(now);
        const lastReset = await getSetting('lastReset', null);

        if (!lastReset) {
          await setSetting('lastReset', currentMonday.toISOString());
          return;
        }

        const lastResetDate = new Date(lastReset);
        if (!(currentMonday.getTime() > lastResetDate.getTime())) return;

        const entries = await loadAllEntries();
        const total = entries.reduce((sum, item) => sum + Number(item.amount || 0), 0);

        if (entries.length > 0 || total > 0) {
          await writeToStore('stats', {
            id: uid(),
            weekStart: lastResetDate.toISOString(),
            weekEnd: currentMonday.toISOString(),
            total,
            entriesCount: entries.length,
            entries: entries.map((entry) => ({ ...entry })),
            createdAt: new Date().toISOString()
          });
        }

        await deleteAllFromStore('entries');
        await setSetting('lastReset', currentMonday.toISOString());
        await renderEntries();
        await loadStats();
      }

      async function init() {
        await openDatabase();
        await ensureWeeklyReset();

        const savedLanguage = await getSetting('language', 'ru');
        const savedTheme = await getSetting('theme', 'dark');
        const savedDeveloperMode = await getSetting('developerMode', false);
        document.getElementById('languageSelect').value = TRANSLATIONS[savedLanguage] ? savedLanguage : 'ru';
        document.getElementById('themeSelect').value = savedTheme === 'light' ? 'light' : 'dark';
        applyLanguage(document.getElementById('languageSelect').value);
        applyTheme(document.getElementById('themeSelect').value);
        applyDeveloperMode(savedDeveloperMode);
        shoppingDeveloperDateInput.value = getLocalDateKey();
        updateShoppingDeveloperDateDisplay();

        await renderEntries();
        await refreshSuggestions();
        await loadStats();
        await renderPriceBook();
        await renderMonthlyPayments();
        await renderShopping();
        await renderTodos();
        resetForm();

        setInterval(async () => {
          await ensureWeeklyReset();
          await renderEntries();
          await loadStats();
        }, 60000);
      }

      init().catch((error) => {
        console.error('Failed to initialize app', error);
      });
    
