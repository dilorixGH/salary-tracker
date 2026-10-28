
      const isStandalonePwa = window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;
      document.body.classList.toggle('is-pwa', isStandalonePwa);
      const DB_NAME = 'salary-tracker-db';
      const DB_VERSION = 8;
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
        editWeek: 'Редактировать неделю', weekTaxAmount: 'Налог, € (необязательно)', weekTaxHint: 'Налог прибавляется к сумме смен. Процент считается от общей суммы с налогом. Очистите поле, чтобы убрать налог.', saveWeekTax: 'Сохранить налог', weekTaxLabel: 'Налог: {amount} · {rate}', weekGrossLabel: 'Итого с налогом: {amount}', weekNetLabel: 'Сумма смен: {amount}', weekTaxInvalid: 'Введите налог от нуля, не более двух знаков после точки.', weekTaxPastOnly: 'Налог можно указать только для прошедшей недели.', weekTaxSaved: 'Сохранено', weekTaxSaveError: 'Не удалось сохранить налог. Попробуйте ещё раз.'
      });
      Object.assign(TRANSLATIONS.en, {
        editWeek: 'Edit week', weekTaxAmount: 'Tax, € (optional)', weekTaxHint: 'Tax is added to shift earnings. Its percentage is calculated from the total including tax. Clear the field to remove tax.', saveWeekTax: 'Save tax', weekTaxLabel: 'Tax: {amount} · {rate}', weekGrossLabel: 'Total including tax: {amount}', weekNetLabel: 'Shift earnings: {amount}', weekTaxInvalid: 'Enter a non-negative tax amount with up to two decimal places.', weekTaxPastOnly: 'Tax can only be entered for a past week.', weekTaxSaved: 'Saved', weekTaxSaveError: 'Could not save the tax. Please try again.'
      });

      Object.assign(TRANSLATIONS.ru, {
        shoppingSetupTitle: 'Сколько можно тратить в день?', saveShoppingLimit: 'Начать', dailyLimit: 'Дневной лимит', availableToday: 'Доступно', spentToday: 'Потрачено сегодня', shoppingInvalidLimit: 'Введите дневной лимит больше нуля.', carryOverLabel: 'Перерасход за вчера: {amount}', shoppingProgressStyle: 'Вид индикатора', shoppingProgressBar: 'Полоса', shoppingProgressCircle: 'Круг', shoppingSettingsSection: 'Shopping', shoppingQuickActions: 'Быстро добавить', shoppingEditTotal: 'Изменить сумму', addShoppingExpense: 'Добавить трату', shoppingExpenseAmount: 'Сумма траты', shoppingSpentDialogDescription: 'Введите итоговую сумму трат за сегодня.', shoppingInvalidSpent: 'Введите сумму больше нуля.', shoppingOverLimit: 'Лимит превышен на {amount}'
      });
      Object.assign(TRANSLATIONS.en, {
        shoppingSetupTitle: 'How much can you spend per day?', saveShoppingLimit: 'Start', dailyLimit: 'Daily limit', availableToday: 'Available', spentToday: 'Spent today', shoppingInvalidLimit: 'Enter a daily limit greater than zero.', carryOverLabel: 'Yesterday’s overspend: {amount}', shoppingProgressStyle: 'Indicator style', shoppingProgressBar: 'Bar', shoppingProgressCircle: 'Circle', shoppingSettingsSection: 'Shopping', shoppingQuickActions: 'Quick add', shoppingEditTotal: 'Edit total', addShoppingExpense: 'Add expense', shoppingExpenseAmount: 'Expense amount', shoppingSpentDialogDescription: 'Enter today’s total spending.', shoppingInvalidSpent: 'Enter an amount greater than zero.', shoppingOverLimit: 'Limit exceeded by {amount}'
      });

      Object.assign(TRANSLATIONS.ru, { recipes: 'Рецепты', addRecipe: 'Добавить рецепт', editRecipe: 'Редактировать рецепт', recipeTitle: 'Название рецепта', recipeTitlePlaceholder: 'Например: Хот-дог', ingredients: 'Ингредиенты', addIngredient: 'Добавить', ingredientName: 'Ингредиент', ingredientCost: 'Стоимость', linkedRecipe: 'Связанный рецепт', noLinkedRecipe: 'Обычный ингредиент', recipeInstructions: 'Описание приготовления', recipeInstructionsPlaceholder: 'Например: Обжарить 5 мин и собрать блюдо.', recipeEmpty: 'Пока нет рецептов. Добавьте первый.', recipeInvalid: 'Введите название рецепта и добавьте хотя бы один ингредиент.', recipeNoInstructions: 'Описание пока не добавлено.', recipeTotal: 'Стоимость: {amount}' });
      Object.assign(TRANSLATIONS.en, { recipes: 'Recipes', addRecipe: 'Add recipe', editRecipe: 'Edit recipe', recipeTitle: 'Recipe name', recipeTitlePlaceholder: 'For example: Hot dog', ingredients: 'Ingredients', addIngredient: 'Add', ingredientName: 'Ingredient', ingredientCost: 'Cost', linkedRecipe: 'Linked recipe', noLinkedRecipe: 'Regular ingredient', recipeInstructions: 'Cooking instructions', recipeInstructionsPlaceholder: 'For example: Fry for 5 min and assemble.', recipeEmpty: 'No recipes yet. Add your first one.', recipeInvalid: 'Enter a recipe name and add at least one ingredient.', recipeNoInstructions: 'No instructions yet.', recipeTotal: 'Cost: {amount}' });

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
      const weekTaxForm = document.getElementById('weekTaxForm');
      const weekTaxInput = document.getElementById('weekTaxInput');
      const weekTaxPreview = document.getElementById('weekTaxPreview');
      let weekTaxStat = null;
      let isSavingWeekTax = false;
      const stepProgress = document.getElementById('stepProgress');
      const salaryApp = document.getElementById('salaryApp');
      Object.assign(TRANSLATIONS.ru, {
        wardrobeAdd: 'Добавить одежду', wardrobeEdit: 'Редактировать вещь', wardrobeName: 'Название', wardrobeNamePlaceholder: 'Например: Чёрная куртка', wardrobePhoto: 'Фото (необязательно)', wardrobeRemovePhoto: 'Убрать фото', wardrobeLink: 'Ссылка (необязательно)', wardrobeAll: 'Всё', wardrobeWanted: 'Хочу купить', wardrobePurchased: 'Куплено', wardrobeMarkPurchased: 'Отметить купленной', wardrobeMarkWanted: 'Вернуть в список желаний', wardrobeOpenLink: 'Открыть ссылку ↗', wardrobeActions: 'Действия с вещью', wardrobeEmpty: 'Добавьте первую вещь в свой гардероб.', wardrobeFilterEmpty: 'Здесь пока нет вещей.', wardrobeInvalidName: 'Введите название вещи.', wardrobeInvalidLink: 'Введите корректную ссылку на сайт.', wardrobeInvalidPhoto: 'Выберите изображение.', wardrobeError: 'Не удалось сохранить изменения. Попробуйте ещё раз.', wardrobePhotoError: 'Не удалось прочитать фото. Попробуйте другое изображение.'
      });
      Object.assign(TRANSLATIONS.en, {
        wardrobeAdd: 'Add clothing', wardrobeEdit: 'Edit item', wardrobeName: 'Name', wardrobeNamePlaceholder: 'For example: Black jacket', wardrobePhoto: 'Photo (optional)', wardrobeRemovePhoto: 'Remove photo', wardrobeLink: 'Link (optional)', wardrobeAll: 'All', wardrobeWanted: 'Wishlist', wardrobePurchased: 'Purchased', wardrobeMarkPurchased: 'Mark as purchased', wardrobeMarkWanted: 'Move to wishlist', wardrobeOpenLink: 'Open link ↗', wardrobeActions: 'Item actions', wardrobeEmpty: 'Add the first item to your wardrobe.', wardrobeFilterEmpty: 'No items here yet.', wardrobeInvalidName: 'Enter an item name.', wardrobeInvalidLink: 'Enter a valid website link.', wardrobeInvalidPhoto: 'Choose an image.', wardrobeError: 'Could not save the changes. Please try again.', wardrobePhotoError: 'Could not read the photo. Try another image.'
      });
      Object.assign(TRANSLATIONS.ru, {
        wardrobeAdd: 'Добавить предмет', wardrobeEdit: 'Редактировать предмет', wardrobeNamePlaceholder: 'Например: Настольная лампа', wardrobeEmpty: 'Добавьте первый предмет в Wishlist.', wardrobeFilterEmpty: 'Нет предметов с такими фильтрами.', wardrobeMarkPurchased: 'Отметить покупку', wardrobeActions: 'Действия с предметом', wardrobeInvalidName: 'Введите название предмета.', wishlistCategory: 'Категория', wishlistAllCategories: 'Все категории', wishlistChooseCategory: 'Выберите категорию', wishlistFurniture: 'Мебель', wishlistClothing: 'Одежда', wishlistOther: 'Другое', wishlistClothingType: 'Тип одежды', wishlistChooseClothingType: 'Выберите тип одежды', wishlistBoots: 'Ботинки', wishlistTshirt: 'Футболка', wishlistJacket: 'Куртка', wishlistHoodie: 'Худи', wishlistBelt: 'Ремень', wishlistZipHoodie: 'Зип худи', wishlistJeans: 'Джинсы', wishlistDesigner: 'Дизайнер', wishlistDesignerOptional: 'Дизайнер (необязательно)', wishlistAllDesigners: 'Все дизайнеры', wishlistPriceOptional: 'Цена, € (необязательно)', wishlistInvalidPrice: 'Введите цену от нуля, не более двух знаков после точки.'
      });
      Object.assign(TRANSLATIONS.en, {
        wardrobeAdd: 'Add item', wardrobeEdit: 'Edit item', wardrobeNamePlaceholder: 'For example: Desk lamp', wardrobeEmpty: 'Add your first item to Wishlist.', wardrobeFilterEmpty: 'No items match these filters.', wardrobeMarkPurchased: 'Mark as purchased', wardrobeActions: 'Item actions', wardrobeInvalidName: 'Enter an item name.', wishlistCategory: 'Category', wishlistAllCategories: 'All categories', wishlistChooseCategory: 'Choose a category', wishlistFurniture: 'Furniture', wishlistClothing: 'Clothing', wishlistOther: 'Other', wishlistClothingType: 'Clothing type', wishlistChooseClothingType: 'Choose a clothing type', wishlistBoots: 'Boots', wishlistTshirt: 'T-shirt', wishlistJacket: 'Jacket', wishlistHoodie: 'Hoodie', wishlistBelt: 'Belt', wishlistZipHoodie: 'Zip hoodie', wishlistJeans: 'Jeans', wishlistDesigner: 'Designer', wishlistDesignerOptional: 'Designer (optional)', wishlistAllDesigners: 'All designers', wishlistPriceOptional: 'Price, € (optional)', wishlistInvalidPrice: 'Enter a non-negative price with up to two decimal places.'
      });
      const WISHLIST_CATEGORIES = { furniture: 'wishlistFurniture', clothing: 'wishlistClothing', other: 'wishlistOther' };
      const WISHLIST_CLOTHING_TYPES = { boots: 'wishlistBoots', tshirt: 'wishlistTshirt', jacket: 'wishlistJacket', hoodie: 'wishlistHoodie', belt: 'wishlistBelt', zipHoodie: 'wishlistZipHoodie', jeans: 'wishlistJeans' };
      const wishlistCategoryInput = document.getElementById('wishlistCategoryInput');
      const wishlistClothingTypeInput = document.getElementById('wishlistClothingTypeInput');
      const wishlistDesignerInput = document.getElementById('wishlistDesignerInput');
      const wishlistPriceInput = document.getElementById('wishlistPriceInput');
      const wishlistCategoryFilter = document.getElementById('wishlistCategoryFilter');
      const wishlistDesignerFilter = document.getElementById('wishlistDesignerFilter');
      const wardrobeApp = document.getElementById('wardrobeApp');
      const wardrobeList = document.getElementById('wardrobeList');
      const wardrobeFormModal = document.getElementById('wardrobeFormModal');
      const wardrobeForm = document.getElementById('wardrobeForm');
      const wishlistStepProgress = document.getElementById('wishlistStepProgress');
      const wishlistStepBackBtn = document.getElementById('wishlistStepBackBtn');
      const wishlistStepNextBtn = document.getElementById('wishlistStepNextBtn');
      Object.assign(TRANSLATIONS.ru, { wishlistSkip: 'Пропустить' });
      Object.assign(TRANSLATIONS.en, { wishlistSkip: 'Skip' });
      const wardrobeNameInput = document.getElementById('wardrobeNameInput');
      const wardrobeLinkInput = document.getElementById('wardrobeLinkInput');
      const wardrobePhotoInput = document.getElementById('wardrobePhotoInput');
      const wardrobePurchasedInput = document.getElementById('wardrobePurchasedInput');
      const wardrobeDetailModal = document.getElementById('wardrobeDetailModal');
      const wardrobeActionsModal = document.getElementById('wardrobeActionsModal');
      const monthlyApp = document.getElementById('monthlyApp');
      const shoppingApp = document.getElementById('shoppingApp');
      const priceBookApp = document.getElementById('priceBookApp');
      const todoApp = document.getElementById('todoApp');
      const recipesApp = document.getElementById('recipesApp');
      const recipeList = document.getElementById('recipeList');
      const recipeCount = document.getElementById('recipeCount');
      const recipeModal = document.getElementById('recipeModal');
      const recipeForm = document.getElementById('recipeForm');
      const recipeTitleInput = document.getElementById('recipeTitleInput');
      const recipeIngredientRows = document.getElementById('recipeIngredientRows');
      const recipeInstructionsInput = document.getElementById('recipeInstructionsInput');
      const recipeModalTitle = document.getElementById('recipeModalTitle');
      const recipeStepProgress = document.getElementById('recipeStepProgress');
      const recipeDetailModal = document.getElementById('recipeDetailModal');
      const recipeDetailTitle = document.getElementById('recipeDetailTitle');
      const recipeDetailIngredients = document.getElementById('recipeDetailIngredients');
      const recipeDetailInstructions = document.getElementById('recipeDetailInstructions');
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
      let openedTodoId = null;
      let editingRecipeId = null;
      let openedRecipeId = null;
      let currentRecipeStep = 1;
      let recipeDetailCloseTimer = null;
      let wardrobeFilter = 'all';
      let wishlistCategory = 'all';
      let wishlistDesigner = '';
      let wardrobeItems = new Map();
      let editingWardrobeId = null;
      let openedWardrobeId = null;
      let wardrobePhoto = null;
      let wardrobePhotoReadVersion = 0;
      let wishlistPhotoLoading = false;
      let currentWishlistStep = 'category';
      let wardrobeBusy = false;
      let wardrobeRenderVersion = 0;
      const wardrobeCloseTimers = new Map();

      document.querySelectorAll('.appSwitcherMenu').forEach((menu) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.appTarget = 'wardrobe';
        button.setAttribute('role', 'menuitem');
        button.textContent = 'Wishlist';
        menu.appendChild(button);
      });

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
          renderRecipes();
          renderWardrobe();
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
        const apps = { salary: salaryApp, monthly: monthlyApp, shopping: shoppingApp, priceBook: priceBookApp, todo: todoApp, recipes: recipesApp, wardrobe: wardrobeApp };
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
        if (appName === 'recipes') renderRecipes();
        if (appName === 'wardrobe') renderWardrobe();
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
            if (!database.objectStoreNames.contains('recipes')) database.createObjectStore('recipes', { keyPath: 'id' });
            if (!database.objectStoreNames.contains('wardrobe')) database.createObjectStore('wardrobe', { keyPath: 'id' });
          };

          request.onsuccess = () => {
            db = request.result;
            const connection = db;
            connection.onversionchange = () => connection.close();
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

      async function ensureRecipeStore() {
        if (db && db.objectStoreNames.contains('recipes')) return;
        if (db) db.close();
        db = null;
        db = await openDatabase();
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
        const storeNames = ['entries', 'workOptions', 'stats', 'settings', 'priceBook', 'monthlyPayments', 'shoppingSettings', 'shoppingDays', 'todoTasks', 'recipes', 'wardrobe'];
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

      function isPastSalaryWeek(stat, now = new Date()) {
        const start = new Date(stat.weekStart).getTime();
        const end = new Date(stat.weekEnd).getTime();
        return Number.isFinite(start) && Number.isFinite(end) && start < end && end <= getStartOfWeek(now).getTime();
      }

      function parseWeekTaxAmount(value) {
        const text = String(value).trim().replace(',', '.');
        if (!text) return null;
        if (!/^(?:\d+(?:\.\d{0,2})?|\.\d{1,2})$/.test(text)) throw new Error('Invalid tax amount');
        const number = Number(text);
        const cents = Math.round((number + Number.EPSILON) * 100);
        if (!Number.isSafeInteger(cents) || cents < 0) throw new Error('Invalid tax amount');
        return cents / 100;
      }

      function getSalaryWeekTotals(stat) {
        const net = Math.round((Math.max(0, Number(stat.total) || 0) + Number.EPSILON) * 100) / 100;
        const storedTax = stat.taxAmount;
        const hasTax = storedTax !== undefined && storedTax !== null && storedTax !== '' && Number.isFinite(Number(storedTax)) && Number(storedTax) >= 0;
        const tax = hasTax ? Math.round((Number(storedTax) + Number.EPSILON) * 100) / 100 : 0;
        const gross = Math.round((net + tax + Number.EPSILON) * 100) / 100;
        return { net, tax, gross, hasTax, rate: gross > 0 ? tax / gross : 0 };
      }

      function formatWeekTaxSummary(totals) {
        const rate = new Intl.NumberFormat(currentLanguage === 'en' ? 'en-IE' : 'ru-RU', { style: 'percent', maximumFractionDigits: 2 }).format(totals.rate);
        return t('weekTaxLabel').replace('{amount}', formatCurrency(totals.tax)).replace('{rate}', rate);
      }

      function updateWeekTaxPreview() {
        if (!weekTaxStat || weekTaxForm.hidden) return;
        document.getElementById('weekTaxSaveStatus').textContent = '';
        weekTaxInput.setCustomValidity('');
        try {
          const taxAmount = parseWeekTaxAmount(weekTaxInput.value);
          const totals = getSalaryWeekTotals({ ...weekTaxStat, taxAmount });
          weekTaxPreview.textContent = totals.hasTax
            ? `${t('weekGrossLabel').replace('{amount}', formatCurrency(totals.gross))} · ${formatWeekTaxSummary(totals)}`
            : t('weekNetLabel').replace('{amount}', formatCurrency(totals.net));
        } catch (_) {
          weekTaxPreview.textContent = t('weekTaxInvalid');
          weekTaxInput.setCustomValidity(t('weekTaxInvalid'));
        }
      }

      async function saveWeekTax() {
        if (isSavingWeekTax || !openedStatId || weekTaxForm.hidden) return;
        let taxAmount;
        try { taxAmount = parseWeekTaxAmount(weekTaxInput.value); }
        catch (_) { weekTaxInput.setCustomValidity(t('weekTaxInvalid')); weekTaxInput.reportValidity(); return; }
        const statId = openedStatId;
        const saveButton = document.getElementById('saveWeekTaxBtn');
        isSavingWeekTax = true;
        saveButton.disabled = true;
        weekTaxInput.disabled = true;
        document.getElementById('weekTaxSaveStatus').textContent = '';
        try {
          const updated = await new Promise((resolve, reject) => {
            const transaction = db.transaction('stats', 'readwrite');
            const store = transaction.objectStore('stats');
            const request = store.get(statId);
            let stat;
            request.onsuccess = () => {
              stat = request.result;
              if (!stat || !isPastSalaryWeek(stat)) {
                transaction.abort();
                reject(new Error('Week is not in the past'));
                return;
              }
              if (taxAmount === null) delete stat.taxAmount;
              else stat.taxAmount = taxAmount;
              stat.updatedAt = new Date().toISOString();
              store.put(stat);
            };
            transaction.oncomplete = () => resolve(stat);
            transaction.onerror = () => reject(transaction.error);
            transaction.onabort = () => reject(transaction.error || new Error('Tax update aborted'));
          });
          await loadStats();
          if (openedStatId === statId) {
            renderWeekEntries(updated);
            document.getElementById('weekTaxSaveStatus').textContent = t('weekTaxSaved');
          }
          await refreshDatabaseUsage();
        } catch (error) {
          console.error('Failed to save week tax', error);
          alert(t('weekTaxSaveError'));
        } finally {
          isSavingWeekTax = false;
          saveButton.disabled = false;
          weekTaxInput.disabled = false;
        }
      }

      weekTaxInput.addEventListener('input', () => {
        weekTaxInput.value = weekTaxInput.value.replace(/,/g, '.');
        updateWeekTaxPreview();
      });
      weekTaxForm.addEventListener('submit', (event) => { event.preventDefault(); saveWeekTax(); });

      async function loadStats() {
        const stats = await readAllFromStore('stats');
        stats.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (!stats.length) {
          statsListEl.innerHTML = `<div class="emptyState">${t('noStats')}</div>`;
          return;
        }

        statsListEl.innerHTML = stats.map((item) => {
          const locale = currentLanguage === 'en' ? 'en-GB' : 'ru-RU';
          const startDate = new Date(item.weekStart);
          const endDate = new Date(new Date(item.weekEnd).getTime() - 1);
          const start = startDate.toLocaleDateString(locale, { day: 'numeric', month: 'short' });
          const end = endDate.toLocaleDateString(locale, { day: 'numeric', month: 'short' });
          const totals = getSalaryWeekTotals(item);
          const count = item.entriesCount ?? item.entries?.length ?? 0;
          const totalLabel = totals.hasTax ? (currentLanguage === 'en' ? 'Including tax' : 'С учётом налога') : (currentLanguage === 'en' ? 'Earned' : 'Заработано');
          return `
            <article class="statCard salaryWeekCard">
              <button type="button" class="salaryWeekOpen" data-action="open-salary-week" data-id="${escapeHtml(item.id)}">
                <span class="salaryWeekPeriod">${start} — ${end}</span>
                <span class="salaryWeekAmount">${formatCurrency(totals.gross)}</span>
                <span class="salaryWeekCount">${count} ${t('shiftsCount')} · ${startDate.getFullYear()}</span>
                <span class="salaryWeekTotalLabel">${totalLabel}</span>
                ${totals.hasTax ? `<span class="salaryWeekBreakdown"><span>${t('weekNetLabel').replace('{amount}', formatCurrency(totals.net))}</span><span>${formatWeekTaxSummary(totals)}</span></span>` : ''}
              </button>
            </article>
          `;
        }).join('');

        statsListEl.querySelectorAll('[data-action="open-salary-week"]').forEach((button) => {
          button.addEventListener('click', async () => {
            const stat = await readFromStore('stats', button.dataset.id);
            if (stat) openWeekModal(stat);
          });
        });
      }

      document.getElementById('openWeekActionsBtn').addEventListener('click', async () => {
        if (!openedStatId || isSavingWeekTax) return;
        const stat = await readFromStore('stats', openedStatId);
        if (stat) openWeekActionsModal(stat);
      });

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
        const totals = getSalaryWeekTotals(stat);
        weekModalTitle.textContent = `${t('weekShifts')} ${formatWeekRange(stat)}`;
        weekModalSummary.textContent = `${stat.entriesCount ?? entries.length} ${t('shiftsCount')} • ${formatCurrency(totals.gross)}${totals.hasTax ? ` • ${formatWeekTaxSummary(totals)}` : ''}`;
        weekTaxStat = stat;
        weekTaxForm.hidden = !isPastSalaryWeek(stat);
        weekTaxInput.value = totals.hasTax ? String(totals.tax) : '';
        weekTaxInput.setCustomValidity('');
        updateWeekTaxPreview();

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
        weekModal.setAttribute('aria-hidden', 'false');
      }

      function closeWeekModal() {
        if (isSavingWeekTax) return;
        weekModal.classList.remove('open');
        weekModal.setAttribute('aria-hidden', 'true');
        openedStatId = null;
        weekTaxStat = null;
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
        const deleteButton = document.getElementById('deleteWeekBtn');
        deleteButton.textContent = currentLanguage === 'en' ? 'Delete week' : 'Удалить неделю';
        deleteButton.hidden = !isPastSalaryWeek(stat);
        openBottomSheet(weekActionsModal);
        weekActionsModal.setAttribute('aria-hidden', 'false');
      }

      async function closeWeekActionsModal() {
        await closeBottomSheet(weekActionsModal);
        weekActionsModal.setAttribute('aria-hidden', 'true');
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
        if (isSavingWeekTax) return;
        const entry = (stat.entries || []).find(
          (item) => item.id === entryId
        );

        if (!entry) return;

        // Запоминаем редактируемую смену
        editingArchivedEntryId = entry.id;
        editingEntryId = null;

        // Заполняем форму существующими данными
        workNameInput.value = entry.workName;
        weekdaySelect.value = String(entry.weekday);
        hoursInput.value = String(entry.hours);
        amountInput.value = String(entry.amount);

        // Закрываем окно смен выбранной недели
        closeWeekModal();

        // Открываем редактирование выбранной смены
        document.getElementById('shiftModalTitle').textContent =
          t('editShift');

        document.getElementById('shiftModal').classList.add('open');

        // Показываем первый шаг редактирования
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
        tasks.sort((first, second) => {
          const completionOrder = Number(Boolean(first.completed)) - Number(Boolean(second.completed));
          if (completionOrder !== 0) return completionOrder;
          return String(second.updatedAt || second.createdAt || '').localeCompare(String(first.updatedAt || first.createdAt || ''));
        });

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
        document.getElementById('todoDetailMenu').classList.remove('is-open');
        todoDetailTitle.textContent = task.title;
        openedTodoId = task.id;
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
        document.getElementById('todoDetailMenu').classList.remove('is-open');
        window.clearTimeout(todoDetailCloseTimer);
        todoDetailCloseTimer = window.setTimeout(() => {
          todoDetailModal.classList.remove('open', 'is-closing');
          todoDetailModal.setAttribute('aria-hidden', 'true');
          openedTodoId = null;
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
          window.setTimeout(async () => {
            card.classList.remove('is-updating');
            await renderTodos();
          }, 380);
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

      function recipeCost(value) {
        const number = Number(value);
        return Number.isFinite(number) && number > 0 ? Math.round(number * 100) / 100 : null;
      }

      function formatRecipeInstructions(value) {
        const escaped = escapeHtml(value || t('recipeNoInstructions'));
        return escaped.replace(/\b(\d+(?:[.,]\d+)?\s*(?:мин(?:ут[аы]?)?|min(?:ute)?s?))\b/gi, '<mark class="recipeTime">$1</mark>').replace(/\n/g, '<br>');
      }

      async function getRecipes() {
        await ensureRecipeStore();
        const recipes = await readAllFromStore('recipes');
        return recipes.sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
      }

      function recipeReferenceOptions(recipes, selectedId = '') {
        return `<option value="">${t('noLinkedRecipe')}</option>${recipes.filter((recipe) => recipe.id !== editingRecipeId).map((recipe) => `<option value="${escapeHtml(recipe.id)}"${recipe.id === selectedId ? ' selected' : ''}>${escapeHtml(recipe.title)}</option>`).join('')}`;
      }

      async function addRecipeIngredientRow(ingredient = {}, append = false) {
        const recipes = await getRecipes();
        const row = document.createElement('div');
        row.className = 'recipeIngredientRow';
        row.innerHTML = `<input class="recipeIngredientName" maxlength="140" placeholder="${escapeHtml(t('ingredientName'))}" value="${escapeHtml(ingredient.name || '')}" /><input class="recipeIngredientCost" type="text" inputmode="decimal" lang="en-US" pattern="[0-9]*[.]?[0-9]*" placeholder="${escapeHtml(t('ingredientCost'))}" value="${ingredient.cost ?? ''}" /><select class="recipeIngredientLink">${recipeReferenceOptions(recipes, ingredient.recipeId || '')}</select><button type="button" class="recipeIngredientRemove" aria-label="${t('remove')}">×</button>`;
        row.querySelector('.recipeIngredientRemove').addEventListener('click', () => {
          row.classList.add('is-removing');
          window.setTimeout(() => row.remove(), 180);
        });
        row.querySelector('.recipeIngredientCost').addEventListener('input', (event) => {
          const input = event.currentTarget;
          let value = input.value.replace(',', '.').replace(/[^\d.]/g, '');
          const point = value.indexOf('.');
          if (point >= 0) value = value.slice(0, point + 1) + value.slice(point + 1).replace(/\./g, '');
          input.value = value;
        });
        if (append) recipeIngredientRows.appendChild(row);
        else recipeIngredientRows.prepend(row);
      }

      async function renderRecipes(newRecipeId = null) {
        const recipes = await getRecipes();
        recipeCount.textContent = String(recipes.length);
        if (!recipes.length) {
          recipeList.innerHTML = `<div class="todoEmpty">${t('recipeEmpty')}</div>`;
          return;
        }
        recipeList.innerHTML = recipes.map((recipe) => {
          const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
          const total = ingredients.reduce((sum, ingredient) => sum + (recipeCost(ingredient.cost) || 0), 0);
          return `<article class="recipeCard${recipe.id === newRecipeId ? ' is-new' : ''}" data-recipe-id="${escapeHtml(recipe.id)}"><button type="button" class="recipeCardMain" data-recipe-action="open" data-recipe-id="${escapeHtml(recipe.id)}"><strong>${escapeHtml(recipe.title)}</strong><span>${ingredients.length} ${t('ingredients').toLowerCase()}${total ? ` · ${formatMonthlyTotal(total)}` : ''}</span></button></article>`;
        }).join('');
      }

      async function openRecipeModal(recipe = null) {
        editingRecipeId = recipe?.id || null;
        recipeForm.reset();
        recipeIngredientRows.innerHTML = '';
        recipeTitleInput.value = recipe?.title || '';
        recipeInstructionsInput.value = recipe?.instructions || '';
        recipeModalTitle.textContent = recipe ? t('editRecipe') : t('addRecipe');
        const ingredients = recipe?.ingredients?.length ? recipe.ingredients : [{}];
        for (const ingredient of ingredients) await addRecipeIngredientRow(ingredient, true);
        recipeModal.classList.add('open');
        recipeModal.setAttribute('aria-hidden', 'false');
        showRecipeStep(1);
      }

      function showRecipeStep(step) {
        currentRecipeStep = step;
        recipeForm.querySelectorAll('[data-recipe-step]').forEach((section) => {
          section.hidden = Number(section.dataset.recipeStep) !== step;
        });
        recipeStepProgress.querySelectorAll('span').forEach((segment, index) => segment.classList.toggle('is-active', index < step));
        recipeStepProgress.setAttribute('aria-label', `${step} / 3`);
      }

      function canAdvanceRecipeStep(step) {
        if (step === 1 && !recipeTitleInput.value.trim()) { alert(t('recipeInvalid')); return false; }
        if (step === 2 && !Array.from(recipeIngredientRows.querySelectorAll('.recipeIngredientName')).some((input) => input.value.trim())) { alert(t('recipeInvalid')); return false; }
        return true;
      }

      function closeRecipeModal() {
        recipeModal.classList.remove('open');
        recipeModal.setAttribute('aria-hidden', 'true');
        editingRecipeId = null;
      }

      async function saveRecipe() {
        const title = recipeTitleInput.value.trim();
        const ingredients = Array.from(recipeIngredientRows.children).map((row) => ({
          id: uid(), name: row.querySelector('.recipeIngredientName').value.trim(), cost: recipeCost(parseShoppingAmount(row.querySelector('.recipeIngredientCost').value)), recipeId: row.querySelector('.recipeIngredientLink').value || null
        })).filter((ingredient) => ingredient.name || ingredient.recipeId);
        if (!title || !ingredients.length) { alert(t('recipeInvalid')); return; }
        await ensureRecipeStore();
        const existing = editingRecipeId ? await readFromStore('recipes', editingRecipeId) : null;
        const id = existing?.id || uid();
        const now = new Date().toISOString();
        await writeToStore('recipes', { id, title, ingredients, instructions: recipeInstructionsInput.value.trim(), createdAt: existing?.createdAt || now, updatedAt: now });
        closeRecipeModal();
        await renderRecipes(existing ? null : id);
      }

      async function openRecipeDetail(recipeId) {
        const recipe = await readFromStore('recipes', recipeId);
        if (!recipe) return;
        window.clearTimeout(recipeDetailCloseTimer);
        recipeDetailModal.classList.remove('is-closing');
        openedRecipeId = recipe.id;
        const allRecipes = await getRecipes();
        const recipeMap = new Map(allRecipes.map((item) => [item.id, item]));
        recipeDetailTitle.textContent = recipe.title;
        document.getElementById('recipeDetailMenu').classList.remove('is-open');
        recipeDetailIngredients.innerHTML = (recipe.ingredients || []).map((ingredient) => {
          const linked = ingredient.recipeId ? recipeMap.get(ingredient.recipeId) : null;
          const label = linked ? linked.title : ingredient.name;
          return `<div class="recipeDetailIngredient">${linked ? `<button type="button" data-recipe-open="${escapeHtml(linked.id)}">${escapeHtml(label)} ↗</button>` : `<span>${escapeHtml(label)}</span>`}${ingredient.cost ? `<strong>${formatMonthlyTotal(ingredient.cost)}</strong>` : ''}</div>`;
        }).join('');
        recipeDetailInstructions.innerHTML = formatRecipeInstructions(recipe.instructions);
        recipeDetailModal.classList.add('open');
        recipeDetailModal.setAttribute('aria-hidden', 'false');
      }

      function closeRecipeDetail() {
        if (!recipeDetailModal.classList.contains('open') || recipeDetailModal.classList.contains('is-closing')) return;
        recipeDetailModal.classList.add('is-closing');
        document.getElementById('recipeDetailMenu').classList.remove('is-open');
        window.clearTimeout(recipeDetailCloseTimer);
        recipeDetailCloseTimer = window.setTimeout(() => {
          recipeDetailModal.classList.remove('open', 'is-closing');
          recipeDetailModal.setAttribute('aria-hidden', 'true');
          openedRecipeId = null;
          recipeDetailCloseTimer = null;
        }, 260);
      }

      async function deleteRecipe(recipeId) {
        const card = Array.from(recipeList.querySelectorAll('[data-recipe-id]')).find((item) => item.dataset.recipeId === recipeId);
        card?.classList.add('is-removing');
        await new Promise((resolve) => window.setTimeout(resolve, 180));
        await deleteFromStore('recipes', recipeId);
        await renderRecipes();
      }

      function getWishlistCategory(item) {
        // Existing Wardrobe records were clothing; preserve them without rewriting their photos.
        return Object.hasOwn(WISHLIST_CATEGORIES, item.category) ? item.category : 'clothing';
      }

      function normalizeWishlistDesigner(value) {
        return String(value || '').trim().replace(/\s+/g, ' ').normalize('NFKC').toLocaleLowerCase();
      }

      function getWishlistDesigners(items) {
        const designers = new Map();
        items.filter((item) => getWishlistCategory(item) === 'clothing').forEach((item) => {
          const name = String(item.designer || '').trim().replace(/\s+/g, ' ');
          const key = normalizeWishlistDesigner(name);
          if (key && !designers.has(key)) designers.set(key, name);
        });
        return Array.from(designers).sort((a, b) => a[1].localeCompare(b[1]));
      }

      function updateWishlistClothingFields() {
        const clothing = wishlistCategoryInput.value === 'clothing';
        wishlistClothingTypeInput.disabled = !clothing;
        wishlistClothingTypeInput.required = clothing;
        wishlistDesignerInput.disabled = !clothing;
        wishlistCategoryInput.setCustomValidity('');
        wishlistClothingTypeInput.setCustomValidity('');
        if (!clothing && currentWishlistStep === 'clothing') showWishlistStep('category');
        else showWishlistStep(currentWishlistStep);
      }

      function getWishlistSteps() {
        return wishlistCategoryInput.value === 'clothing'
          ? ['category', 'clothing', 'name', 'price', 'photo', 'link']
          : ['category', 'name', 'price', 'photo', 'link'];
      }

      function refreshWishlistWizardControls() {
        const steps = getWishlistSteps();
        const index = steps.indexOf(currentWishlistStep);
        wishlistStepBackBtn.hidden = index <= 0;
        wishlistStepNextBtn.hidden = index === steps.length - 1;
        const save = document.getElementById('saveWardrobeBtn');
        save.hidden = index !== steps.length - 1;
        save.disabled = wardrobeBusy || wishlistPhotoLoading;
        wishlistStepNextBtn.disabled = wardrobeBusy || (currentWishlistStep === 'photo' && wishlistPhotoLoading);
        wishlistStepBackBtn.disabled = wardrobeBusy;
        const canSkip = (currentWishlistStep === 'price' && !wishlistPriceInput.value.trim()) || (currentWishlistStep === 'photo' && !wardrobePhoto);
        wishlistStepNextBtn.dataset.i18n = canSkip ? 'wishlistSkip' : 'continue';
        wishlistStepNextBtn.textContent = t(wishlistStepNextBtn.dataset.i18n);
      }

      function showWishlistStep(step) {
        const steps = getWishlistSteps();
        currentWishlistStep = steps.includes(step) ? step : 'category';
        wardrobeForm.querySelectorAll('[data-wishlist-step]').forEach((section) => {
          const hidden = section.dataset.wishlistStep !== currentWishlistStep;
          section.hidden = hidden;
          section.setAttribute('aria-hidden', String(hidden));
        });
        const index = steps.indexOf(currentWishlistStep);
        wishlistStepProgress.replaceChildren(...steps.map((_, position) => {
          const segment = document.createElement('span');
          segment.classList.toggle('is-active', position <= index);
          return segment;
        }));
        wishlistStepProgress.style.setProperty('--wishlist-steps', steps.length);
        wishlistStepProgress.setAttribute('aria-label', `${index + 1} / ${steps.length}`);
        wardrobeForm.scrollTop = 0;
        refreshWishlistWizardControls();
      }

      function validateWishlistStep(step) {
        let input;
        let message = '';
        if (step === 'category') {
          input = wishlistCategoryInput;
          if (!Object.hasOwn(WISHLIST_CATEGORIES, input.value)) message = t('wishlistChooseCategory');
        } else if (step === 'clothing') {
          input = wishlistClothingTypeInput;
          if (!Object.hasOwn(WISHLIST_CLOTHING_TYPES, input.value)) message = t('wishlistChooseClothingType');
        } else if (step === 'name') {
          input = wardrobeNameInput;
          if (!input.value.trim()) message = t('wardrobeInvalidName');
        } else if (step === 'price') {
          input = wishlistPriceInput;
          try { parseWishlistPrice(input.value); } catch (_) { message = t('wishlistInvalidPrice'); }
        } else if (step === 'link') {
          input = wardrobeLinkInput;
          try { normalizeWardrobeLink(input.value); } catch (_) { message = t('wardrobeInvalidLink'); }
        }
        if (input) input.setCustomValidity(message);
        if (!message) return true;
        showWishlistStep(step);
        input.reportValidity();
        return false;
      }

      function advanceWishlistStep() {
        if (wardrobeBusy || (currentWishlistStep === 'photo' && wishlistPhotoLoading)) return;
        if (!validateWishlistStep(currentWishlistStep)) return;
        const steps = getWishlistSteps();
        const next = steps[steps.indexOf(currentWishlistStep) + 1];
        if (next) showWishlistStep(next);
      }

      function parseWishlistPrice(value) {
        const text = value.trim().replace(',', '.');
        if (!text) return null;
        if (!/^(?:\d+(?:\.\d{0,2})?|\.\d{1,2})$/.test(text)) throw new Error('invalid-price');
        const number = Number(text);
        if (!Number.isFinite(number) || number < 0) throw new Error('invalid-price');
        return Math.round(number * 100) / 100;
      }

      function formatWishlistPrice(value) {
        return `${new Intl.NumberFormat(currentLanguage === 'en' ? 'en-IE' : 'ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(value))} €`;
      }

      function wishlistItemMeta(item) {
        const category = getWishlistCategory(item);
        const parts = [t(WISHLIST_CATEGORIES[category])];
        if (category === 'clothing') {
          if (Object.hasOwn(WISHLIST_CLOTHING_TYPES, item.clothingType)) parts.push(t(WISHLIST_CLOTHING_TYPES[item.clothingType]));
          if (item.designer) parts.push(item.designer);
        }
        return parts.join(' · ');
      }

      function normalizeWardrobeLink(value) {
        const text = value.trim();
        if (!text) return '';
        if (/^[a-z][a-z\d+.-]*:/i.test(text) && !/^https?:\/\//i.test(text)) throw new Error('invalid-link');
        const url = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`);
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || url.username || url.password) throw new Error('invalid-link');
        return url.href;
      }

      function writeWardrobeItem(item, remove = false) {
        return new Promise((resolve, reject) => {
          const transaction = db.transaction('wardrobe', 'readwrite');
          const store = transaction.objectStore('wardrobe');
          if (remove) store.delete(item.id);
          else store.put(item);
          transaction.oncomplete = () => resolve(item);
          transaction.onabort = () => reject(transaction.error || new Error('Wardrobe transaction aborted'));
          transaction.onerror = () => reject(transaction.error);
        });
      }

      function openWardrobeScreen(modal) {
        window.clearTimeout(wardrobeCloseTimers.get(modal));
        wardrobeCloseTimers.delete(modal);
        modal.classList.remove('is-closing');
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
      }

      function closeWardrobeScreen(modal) {
        if (!modal.classList.contains('open')) return Promise.resolve();
        modal.classList.add('is-closing');
        return new Promise((resolve) => {
          window.clearTimeout(wardrobeCloseTimers.get(modal));
          wardrobeCloseTimers.set(modal, window.setTimeout(() => {
            modal.classList.remove('open', 'is-closing');
            modal.setAttribute('aria-hidden', 'true');
            wardrobeCloseTimers.delete(modal);
            resolve();
          }, 260));
        });
      }

      function wardrobePhotoElement(photo, name) {
        if (photo) {
          const image = document.createElement('img');
          image.src = photo;
          image.alt = name;
          image.decoding = 'async';
          return image;
        }
        const placeholder = document.createElement('span');
        placeholder.className = 'wardrobePlaceholder';
        placeholder.innerHTML = '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 52 12 32C-1 18 18 3 32 19 46 3 65 18 52 32L32 52Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
        return placeholder;
      }

      async function renderWardrobe(newId = null, animate = false) {
        if (!db || !db.objectStoreNames.contains('wardrobe')) return;
        const version = ++wardrobeRenderVersion;
        const items = await readAllFromStore('wardrobe');
        if (version !== wardrobeRenderVersion) return;
        items.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
        wardrobeItems = new Map(items.map((item) => [item.id, item]));
        const designers = getWishlistDesigners(items);
        if (!designers.some(([key]) => key === wishlistDesigner)) wishlistDesigner = '';
        wishlistCategoryFilter.value = wishlistCategory;
        const designerField = document.getElementById('wishlistDesignerFilterField');
        designerField.hidden = wishlistCategory !== 'clothing' || !designers.length;
        if (designerField.hidden) wishlistDesigner = '';
        wishlistDesignerFilter.replaceChildren(new Option(t('wishlistAllDesigners'), ''), ...designers.map(([key, name]) => new Option(name, key)));
        wishlistDesignerFilter.value = wishlistDesigner;
        document.getElementById('wishlistDesigners').replaceChildren(...designers.map(([, name]) => new Option(name, name)));
        const filtered = items.filter((item) =>
          (wardrobeFilter === 'all' || Boolean(item.purchased) === (wardrobeFilter === 'purchased')) &&
          (wishlistCategory === 'all' || getWishlistCategory(item) === wishlistCategory) &&
          (!wishlistDesigner || normalizeWishlistDesigner(item.designer) === wishlistDesigner)
        );
        wardrobeList.replaceChildren();
        if (!filtered.length) {
          const empty = document.createElement('p');
          empty.className = 'wardrobeEmpty';
          empty.textContent = t(items.length ? 'wardrobeFilterEmpty' : 'wardrobeEmpty');
          wardrobeList.appendChild(empty);
        }
        filtered.forEach((item) => {
          const card = document.createElement('button');
          card.type = 'button';
          card.className = `wardrobeCard${item.id === newId ? ' is-new' : ''}`;
          card.dataset.wardrobeId = item.id;
          const photo = document.createElement('span');
          photo.className = 'wardrobeCardPhoto';
          photo.appendChild(wardrobePhotoElement(item.photo, item.name));
          const name = document.createElement('strong');
          name.textContent = item.name;
          const meta = document.createElement('span');
          meta.className = 'wishlistCardMeta';
          meta.textContent = getWishlistCategory(item) === 'clothing' ? String(item.designer || '').trim() : '';
          const badge = document.createElement('span');
          badge.className = `wardrobeBadge${item.purchased ? ' is-purchased' : ''}`;
          badge.textContent = t(item.purchased ? 'wardrobePurchased' : 'wardrobeWanted');
          card.append(photo, name);
          if (meta.textContent) card.appendChild(meta);
          if (item.price !== null && item.price !== undefined && Number.isFinite(Number(item.price))) {
            const price = document.createElement('span');
            price.className = 'wishlistCardPrice';
            price.textContent = formatWishlistPrice(item.price);
            card.appendChild(price);
          }
          card.appendChild(badge);
          wardrobeList.appendChild(card);
        });
        wardrobeApp.querySelectorAll('[data-wardrobe-filter]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.wardrobeFilter === wardrobeFilter)));
        if (openedWardrobeId && wardrobeItems.has(openedWardrobeId)) fillWardrobeDetail(wardrobeItems.get(openedWardrobeId));
        if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          wardrobeList.getAnimations().forEach((animation) => animation.cancel());
          wardrobeList.animate([{ opacity: .25 }, { opacity: 1 }], { duration: 280, easing: 'ease-out' });
        }
      }

      function updateWardrobePhotoPreview() {
        const image = document.getElementById('wardrobePreviewImage');
        document.getElementById('wardrobePhotoPreview').hidden = !wardrobePhoto;
        if (wardrobePhoto) image.src = wardrobePhoto;
        else image.removeAttribute('src');
      }

      function openWardrobeForm(item = null) {
        editingWardrobeId = item?.id || null;
        wardrobePhotoReadVersion++;
        wishlistPhotoLoading = false;
        wardrobePhoto = item?.photo || null;
        wardrobeForm.reset();
        wishlistCategoryInput.value = item ? getWishlistCategory(item) : '';
        wishlistClothingTypeInput.value = item?.clothingType || '';
        wishlistDesignerInput.value = item?.designer || '';
        wishlistPriceInput.value = item?.price === null || item?.price === undefined ? '' : String(item.price);
        wishlistPriceInput.setCustomValidity('');
        updateWishlistClothingFields();
        wardrobeNameInput.value = item?.name || '';
        wardrobeNameInput.setCustomValidity('');
        wardrobeLinkInput.value = item?.link || '';
        wardrobeLinkInput.setCustomValidity('');
        wardrobePurchasedInput.checked = Boolean(item?.purchased);
        document.getElementById('wardrobeFormTitle').textContent = t(item ? 'wardrobeEdit' : 'wardrobeAdd');
        document.getElementById('saveWardrobeBtn').disabled = false;
        updateWardrobePhotoPreview();
        showWishlistStep('category');
        openWardrobeScreen(wardrobeFormModal);
      }

      function fillWardrobeDetail(item) {
        document.getElementById('wardrobeDetailTitle').textContent = item.name;
        const photo = document.getElementById('wardrobeDetailPhoto');
        const currentImage = photo.querySelector('img');
        if (!currentImage || currentImage.getAttribute('src') !== item.photo) photo.replaceChildren(wardrobePhotoElement(item.photo, item.name));
        document.getElementById('wardrobeDetailStatus').textContent = t(item.purchased ? 'wardrobePurchased' : 'wardrobeWanted');
        document.getElementById('wishlistDetailMeta').textContent = wishlistItemMeta(item);
        const price = document.getElementById('wishlistDetailPrice');
        price.hidden = item.price === null || item.price === undefined || !Number.isFinite(Number(item.price));
        price.textContent = price.hidden ? '' : formatWishlistPrice(item.price);
        document.getElementById('toggleWardrobePurchasedBtn').textContent = t(item.purchased ? 'wardrobeMarkWanted' : 'wardrobeMarkPurchased');
        const link = document.getElementById('wardrobeDetailLink');
        link.setAttribute('aria-label', t('wardrobeOpenLink'));
        link.title = t('wardrobeOpenLink');
        let safeLink = '';
        try { safeLink = normalizeWardrobeLink(item.link || ''); } catch (_) { /* Invalid saved links stay hidden. */ }
        link.hidden = !safeLink;
        if (safeLink) link.href = safeLink;
        else link.removeAttribute('href');
      }

      function openWardrobeDetail(item) {
        openedWardrobeId = item.id;
        fillWardrobeDetail(item);
        openWardrobeScreen(wardrobeDetailModal);
      }

      async function runWardrobeMutation(action) {
        if (wardrobeBusy) return;
        wardrobeBusy = true;
        const buttons = ['saveWardrobeBtn', 'toggleWardrobePurchasedBtn', 'editWardrobeBtn', 'deleteWardrobeBtn'].map((id) => document.getElementById(id));
        buttons.forEach((button) => { button.disabled = true; });
        refreshWishlistWizardControls();
        try { await action(); }
        catch (error) { console.error('Wardrobe update failed', error); alert(t('wardrobeError')); }
        finally { wardrobeBusy = false; buttons.forEach((button) => { button.disabled = false; }); refreshWishlistWizardControls(); }
      }

      document.getElementById('openWardrobeFormBtn').addEventListener('click', () => openWardrobeForm());
      document.getElementById('closeWardrobeFormBtn').addEventListener('click', () => {
        if (!wardrobeBusy) { wardrobePhotoReadVersion++; closeWardrobeScreen(wardrobeFormModal); }
      });
      document.getElementById('closeWardrobeDetailBtn').addEventListener('click', () => {
        if (!wardrobeBusy) { openedWardrobeId = null; closeWardrobeScreen(wardrobeDetailModal); }
      });
      wardrobeApp.querySelectorAll('[data-wardrobe-filter]').forEach((button) => button.addEventListener('click', () => {
        wardrobeFilter = button.dataset.wardrobeFilter;
        renderWardrobe(null, true);
      }));
      wishlistCategoryInput.addEventListener('change', updateWishlistClothingFields);
      wishlistClothingTypeInput.addEventListener('change', () => wishlistClothingTypeInput.setCustomValidity(''));
      wardrobeNameInput.addEventListener('input', () => wardrobeNameInput.setCustomValidity(''));
      wishlistStepNextBtn.addEventListener('click', advanceWishlistStep);
      wishlistStepBackBtn.addEventListener('click', () => {
        if (wardrobeBusy) return;
        const steps = getWishlistSteps();
        const previous = steps[steps.indexOf(currentWishlistStep) - 1];
        if (previous) showWishlistStep(previous);
      });
      wishlistCategoryFilter.addEventListener('change', () => {
        wishlistCategory = wishlistCategoryFilter.value;
        wishlistDesigner = '';
        renderWardrobe(null, true);
      });
      wishlistDesignerFilter.addEventListener('change', () => {
        wishlistDesigner = wishlistDesignerFilter.value;
        renderWardrobe(null, true);
      });
      wishlistPriceInput.addEventListener('input', () => {
        wishlistPriceInput.setCustomValidity('');
        wishlistPriceInput.value = wishlistPriceInput.value.replace(/,/g, '.');
        refreshWishlistWizardControls();
      });
      wardrobeList.addEventListener('click', (event) => {
        const card = event.target.closest('[data-wardrobe-id]');
        const item = card ? wardrobeItems.get(card.dataset.wardrobeId) : null;
        if (item) openWardrobeDetail(item);
      });
      wardrobePhotoInput.addEventListener('change', async () => {
        const file = wardrobePhotoInput.files[0];
        if (!file) return;
        if (file.type && !file.type.startsWith('image/')) { alert(t('wardrobeInvalidPhoto')); wardrobePhotoInput.value = ''; return; }
        const version = ++wardrobePhotoReadVersion;
        wishlistPhotoLoading = true;
        refreshWishlistWizardControls();
        try {
          const photo = await readFileAsDataUrl(file);
          if (version !== wardrobePhotoReadVersion) return;
          wardrobePhoto = photo;
          updateWardrobePhotoPreview();
        } catch (error) { if (version === wardrobePhotoReadVersion) alert(t('wardrobePhotoError')); }
        finally {
          if (version === wardrobePhotoReadVersion) {
            wishlistPhotoLoading = false;
            refreshWishlistWizardControls();
          }
        }
      });
      document.getElementById('removeWardrobePhotoBtn').addEventListener('click', () => {
        wardrobePhotoReadVersion++;
        wishlistPhotoLoading = false;
        wardrobePhoto = null;
        wardrobePhotoInput.value = '';
        updateWardrobePhotoPreview();
        document.getElementById('saveWardrobeBtn').disabled = false;
        refreshWishlistWizardControls();
      });
      wardrobeLinkInput.addEventListener('input', () => wardrobeLinkInput.setCustomValidity(''));
      wardrobeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (document.getElementById('saveWardrobeBtn').disabled) return;
        if (currentWishlistStep !== 'link') { advanceWishlistStep(); return; }
        if (!getWishlistSteps().every((step) => validateWishlistStep(step))) return;
        const name = wardrobeNameInput.value.trim();
        const category = wishlistCategoryInput.value;
        const price = parseWishlistPrice(wishlistPriceInput.value);
        const link = normalizeWardrobeLink(wardrobeLinkInput.value);
        const existing = editingWardrobeId ? wardrobeItems.get(editingWardrobeId) : null;
        const now = new Date().toISOString();
        const item = { id: existing?.id || uid(), name, link, price, category, clothingType: category === 'clothing' ? wishlistClothingTypeInput.value : null, designer: category === 'clothing' ? wishlistDesignerInput.value.trim().replace(/\s+/g, ' ') : '', photo: wardrobePhoto, purchased: wardrobePurchasedInput.checked, createdAt: existing?.createdAt || now, updatedAt: now };
        runWardrobeMutation(async () => {
          await writeWardrobeItem(item);
          wardrobeFilter = 'all';
          wishlistCategory = 'all';
          wishlistDesigner = '';
          await closeWardrobeScreen(wardrobeFormModal);
          await renderWardrobe(existing ? null : item.id);
          await refreshDatabaseUsage();
        });
      });
      document.getElementById('toggleWardrobePurchasedBtn').addEventListener('click', () => {
        const item = wardrobeItems.get(openedWardrobeId);
        if (!item) return;
        runWardrobeMutation(async () => {
          await writeWardrobeItem({ ...item, purchased: !item.purchased, updatedAt: new Date().toISOString() });
          await renderWardrobe(null, true);
        });
      });
      document.getElementById('openWardrobeActionsBtn').addEventListener('click', () => { if (!wardrobeBusy) openWardrobeScreen(wardrobeActionsModal); });
      wardrobeActionsModal.addEventListener('click', (event) => { if (event.target === wardrobeActionsModal && !wardrobeBusy) closeWardrobeScreen(wardrobeActionsModal); });
      document.getElementById('editWardrobeBtn').addEventListener('click', () => {
        const item = wardrobeItems.get(openedWardrobeId);
        if (!item) return;
        runWardrobeMutation(async () => {
          await closeWardrobeScreen(wardrobeActionsModal);
          await closeWardrobeScreen(wardrobeDetailModal);
          openedWardrobeId = null;
          openWardrobeForm(item);
        });
      });
      document.getElementById('deleteWardrobeBtn').addEventListener('click', () => {
        const item = wardrobeItems.get(openedWardrobeId);
        if (!item) return;
        runWardrobeMutation(async () => {
          await writeWardrobeItem(item, true);
          await closeWardrobeScreen(wardrobeActionsModal);
          await closeWardrobeScreen(wardrobeDetailModal);
          openedWardrobeId = null;
          const card = Array.from(wardrobeList.querySelectorAll('[data-wardrobe-id]')).find((element) => element.dataset.wardrobeId === item.id);
          if (card) {
            card.classList.add('is-removing');
            await new Promise((resolve) => window.setTimeout(resolve, 220));
          }
          await renderWardrobe();
          await refreshDatabaseUsage();
        });
      });
      document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || wardrobeBusy) return;
        if (wardrobeActionsModal.classList.contains('open')) closeWardrobeScreen(wardrobeActionsModal);
        else if (wardrobeFormModal.classList.contains('open')) { wardrobePhotoReadVersion++; closeWardrobeScreen(wardrobeFormModal); }
        else if (wardrobeDetailModal.classList.contains('open')) { openedWardrobeId = null; closeWardrobeScreen(wardrobeDetailModal); }
      });

      document.addEventListener('click', (event) => {
        const autocompleteWrap = document.querySelector('.autocompleteWrap');
        if (autocompleteWrap && !autocompleteWrap.contains(event.target)) {
          suggestionsList.classList.remove('open');
        }

        if (!event.target.closest('.appSwitcher')) closeAppSwitchers();
        if (!event.target.closest('.recipeDetailMenuWrap')) document.getElementById('recipeDetailMenu').classList.remove('is-open');
        if (!event.target.closest('.todoDetailMenuWrap')) document.getElementById('todoDetailMenu').classList.remove('is-open');
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
      document.getElementById('openRecipeModalBtn').addEventListener('click', () => openRecipeModal());
      document.getElementById('closeRecipeModalBtn').addEventListener('click', closeRecipeModal);
      document.getElementById('closeRecipeDetailModalBtn').addEventListener('click', closeRecipeDetail);
      document.getElementById('recipeDetailMenuBtn').addEventListener('click', () => document.getElementById('recipeDetailMenu').classList.toggle('is-open'));
      document.getElementById('editRecipeDetailBtn').addEventListener('click', async () => {
        if (!openedRecipeId) return;
        const recipe = await readFromStore('recipes', openedRecipeId);
        if (!recipe) return;
        closeRecipeDetail();
        await openRecipeModal(recipe);
      });
      document.getElementById('deleteRecipeDetailBtn').addEventListener('click', async () => {
        if (!openedRecipeId) return;
        const recipeId = openedRecipeId;
        closeRecipeDetail();
        await deleteRecipe(recipeId);
      });
      document.getElementById('addRecipeIngredientBtn').addEventListener('click', () => addRecipeIngredientRow());
      recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (currentRecipeStep < 3) {
          if (canAdvanceRecipeStep(currentRecipeStep)) showRecipeStep(currentRecipeStep + 1);
          return;
        }
        saveRecipe().catch((error) => { console.error('Failed to save recipe', error); alert('Не удалось сохранить рецепт.'); });
      });
      recipeForm.querySelectorAll('[data-recipe-step-next]').forEach((button) => button.addEventListener('click', () => {
        if (canAdvanceRecipeStep(currentRecipeStep)) showRecipeStep(currentRecipeStep + 1);
      }));
      recipeForm.querySelectorAll('[data-recipe-step-back]').forEach((button) => button.addEventListener('click', () => showRecipeStep(Number(button.dataset.recipeStepBack))));
      recipeModal.addEventListener('click', (event) => { if (event.target === recipeModal) closeRecipeModal(); });
      recipeDetailModal.addEventListener('click', (event) => { if (event.target === recipeDetailModal) closeRecipeDetail(); });
      recipeList.addEventListener('click', async (event) => {
        const button = event.target.closest('[data-recipe-action]');
        if (!button) return;
        const id = button.dataset.recipeId;
        if (button.dataset.recipeAction === 'open') await openRecipeDetail(id);
      });
      recipeDetailIngredients.addEventListener('click', (event) => {
        const button = event.target.closest('[data-recipe-open]');
        if (button) openRecipeDetail(button.dataset.recipeOpen);
      });
      document.getElementById('closeTodoModalBtn').addEventListener('click', closeTodoModal);
      document.getElementById('closeTodoDetailModalBtn').addEventListener('click', closeTodoDetail);
      document.getElementById('todoDetailMenuBtn').addEventListener('click', () => document.getElementById('todoDetailMenu').classList.toggle('is-open'));
      document.getElementById('editTodoDetailBtn').addEventListener('click', async () => {
        if (!openedTodoId) return;
        const task = await readFromStore('todoTasks', openedTodoId);
        if (!task) return;
        closeTodoDetail();
        openTodoModal(task);
      });
      document.getElementById('deleteTodoDetailBtn').addEventListener('click', async () => {
        if (!openedTodoId) return;
        const taskId = openedTodoId;
        closeTodoDetail();
        await deleteTodo(taskId);
      });
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
      document.getElementById('deleteWeekBtn').addEventListener('click', async () => {
        if (!selectedStatId || isSavingWeekTax) return;
        const button = document.getElementById('deleteWeekBtn');
        if (button.disabled) return;
        const id = selectedStatId;
        button.disabled = true;
        try {
          const stat = await readFromStore('stats', id);
          if (!stat || !isPastSalaryWeek(stat)) return;
          const message = currentLanguage === 'en'
            ? `Delete week ${formatWeekRange(stat)} with its archived shifts and tax? This cannot be undone.`
            : `Удалить неделю ${formatWeekRange(stat)} вместе с её сохранёнными сменами и налогом? Отменить удаление нельзя.`;
          if (!window.confirm(message)) return;
          await new Promise((resolve, reject) => {
            const transaction = db.transaction('stats', 'readwrite');
            transaction.objectStore('stats').delete(id);
            transaction.oncomplete = resolve;
            transaction.onerror = () => reject(transaction.error);
            transaction.onabort = () => reject(transaction.error || new Error('Week deletion aborted'));
          });
          await closeWeekActionsModal();
          if (openedStatId === id) closeWeekModal();
          await loadStats();
          await refreshDatabaseUsage();
        } catch (error) {
          console.error('Failed to delete week', error);
          alert(currentLanguage === 'en' ? 'Could not delete the week. Please try again.' : 'Не удалось удалить неделю. Попробуйте ещё раз.');
        } finally { button.disabled = false; }
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

        if (
          isCompletingShift ||
          form.dataset.shiftSaving === 'true'
        ) {
          return;
        }

        const name = workNameInput.value.trim();
        const weekday = Number(weekdaySelect.value);
        const hours = Number(hoursInput.value);
        const amount = Number(amountInput.value);

        if (
          !name ||
          !Number.isFinite(hours) ||
          hours <= 0 ||
          !Number.isFinite(amount) ||
          amount <= 0
        ) {
          alert(t('invalidForm'));
          return;
        }

        form.dataset.shiftSaving = 'true';

        const saveButton = form.querySelector('[type="submit"]');

        if (saveButton) {
          saveButton.disabled = true;
        }

        try {
          const now = new Date().toISOString();
          let updatedStat = null;

          // Редактирование смены из статистики за недели
          if (editingArchivedEntryId !== null) {
            const allStats = await readAllFromStore('stats');

            // Ищем неделю, в которой находится исходная смена.
            // Не зависим от openedStatId, поскольку он может
            // сбрасываться при закрытии окна недели.
            const stat = allStats.find((week) =>
              Array.isArray(week.entries) &&
              week.entries.some(
                (entry) => entry.id === editingArchivedEntryId
              )
            );

            if (!stat) {
              throw new Error('Archived week not found');
            }

            const previousEntry = stat.entries.find(
              (entry) => entry.id === editingArchivedEntryId
            );

            if (!previousEntry) {
              throw new Error('Archived shift not found');
            }

            // Обновляем существующую смену с тем же ID.
            // Исходная дата создания также сохраняется.
            const updatedEntry = {
              ...previousEntry,
              workName: name,
              weekday,
              hours,
              amount,
              updatedAt: now
            };

            stat.entries = stat.entries.map((entry) =>
              entry.id === editingArchivedEntryId
                ? updatedEntry
                : entry
            );

            // Количество смен не увеличивается.
            stat.entriesCount = stat.entries.length;

            // Пересчитываем общую сумму недели.
            stat.total = stat.entries.reduce(
              (sum, entry) => sum + Number(entry.amount || 0),
              0
            );

            stat.updatedAt = now;

            // Сохраняем изменения в существующей неделе.
            await writeToStore('stats', stat);
            await loadStats();

            updatedStat = stat;

            if (openedStatId === stat.id) {
              renderWeekEntries(stat);
            }

          // Редактирование смены текущей недели
          } else if (editingEntryId !== null) {
            const existing = await readFromStore(
              'entries',
              editingEntryId
            );

            if (!existing) {
              throw new Error('Current shift not found');
            }

            const updatedEntry = {
              ...existing,
              workName: name,
              weekday,
              hours,
              amount,
              updatedAt: now
            };

            await writeToStore('entries', updatedEntry);
            await renderEntries();

          // Добавление совершенно новой смены
          } else {
            const newEntry = {
              id: uid(),
              workName: name,
              weekday,
              hours,
              amount,
              createdAt: now,
              updatedAt: now
            };

            await writeToStore('entries', newEntry);
            await renderEntries();
          }

          await completeShiftModal();

          // После редактирования архивной смены
          // показываем неделю с обновлёнными данными.
          if (updatedStat) {
            openWeekModal(updatedStat);
          }

        } catch (error) {
          console.error('Failed to save shift:', error);

          alert(
            currentLanguage === 'en'
              ? 'Could not save the shift. Please try again.'
              : 'Не удалось сохранить смену. Попробуйте ещё раз.'
          );

        } finally {
          delete form.dataset.shiftSaving;

          if (saveButton) {
            saveButton.disabled = false;
          }
        }
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
        await renderRecipes();
        resetForm();
        await renderWardrobe();

        setInterval(async () => {
          await ensureWeeklyReset();
          await renderEntries();
          await loadStats();
        }, 60000);
      }

      init().catch((error) => {
        console.error('Failed to initialize app', error);
      });
    
