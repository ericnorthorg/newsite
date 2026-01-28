/* --- cms.js: Связь с Google Таблицами --- */
const SHEET_URLS = {
    // Ссылка на вкладку "Posts" (которую вы дали):
    posts: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQveSf6jrPxdd_Bo7nPkiIjztRBgy0nk3ENJC8kfVkrxIYbc2hs_vzfzonVI_AgOJk2gYgfXrU9RaL4/pub?gid=0&single=true&output=csv",
    
    // Сюда вставьте ссылки для других вкладок (Файл -> Поделиться -> Опубликовать -> CSV):
    books: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQveSf6jrPxdd_Bo7nPkiIjztRBgy0nk3ENJC8kfVkrxIYbc2hs_vzfzonVI_AgOJk2gYgfXrU9RaL4/pub?gid=1757696213&single=true&output=csv",     
    projects: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQveSf6jrPxdd_Bo7nPkiIjztRBgy0nk3ENJC8kfVkrxIYbc2hs_vzfzonVI_AgOJk2gYgfXrU9RaL4/pub?gid=423467618&single=true&output=csv",  
    notes: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQveSf6jrPxdd_Bo7nPkiIjztRBgy0nk3ENJC8kfVkrxIYbc2hs_vzfzonVI_AgOJk2gYgfXrU9RaL4/pub?gid=1777395998&single=true&output=csv"      
};

// Функция загрузки таблицы
function loadSheet(url) {
    return new Promise((resolve) => {
        if (!url) {
            console.log("Ссылка не указана, используем пустой список.");
            resolve([]); 
            return;
        }
        Papa.parse(url, {
            download: true,
            header: true, // Первая строка таблицы станет заголовками (id, title_ru...)
            skipEmptyLines: true,
            complete: (results) => resolve(results.data),
            error: (err) => { console.error("Ошибка загрузки:", err); resolve([]); }
        });
    });
}

// Главная функция старта
async function initCMS() {
    console.log("⏳ CMS: Загрузка данных из Google...");
    
    const [posts, books, projects, notes] = await Promise.all([
        loadSheet(SHEET_URLS.posts),
        loadSheet(SHEET_URLS.books),
        loadSheet(SHEET_URLS.projects),
        loadSheet(SHEET_URLS.notes)
    ]);

    // 1. Обрабатываем ПОСТЫ (превращаем в объект window.postsDB)
    window.postsDB = {};
    if (posts.length > 0) {
        posts.forEach(post => {
            if(post.id) {
                // Исправляем булевы значения (Excel возвращает строки "TRUE")
                post.hidden = (post.hidden === 'TRUE' || post.hidden === 'true' || post.hidden === true);
                window.postsDB[post.id] = post;
            }
        });
        console.log(`✅ CMS: Загружено ${posts.length} постов.`);
    }

    // 2. Обрабатываем КНИГИ
    if (books.length > 0) {
        window.booksDB = books;
        console.log(`✅ CMS: Загружено ${books.length} книг.`);
    }

    // 3. Обрабатываем ПРОЕКТЫ
    if (projects.length > 0) {
        window.projectsDB = projects.map(p => ({
            ...p,
            progress: parseInt(p.progress) || 0 // Убеждаемся, что прогресс — число
        }));
        console.log(`✅ CMS: Загружено ${projects.length} проектов.`);
    }

    // 4. Обрабатываем ЗАМЕТКИ
    if (notes.length > 0) {
        window.notesDB = notes;
        console.log(`✅ CMS: Загружено ${notes.length} заметок.`);
    }

    // Сообщаем сайту, что данные готовы
    document.dispatchEvent(new Event('db-ready'));
}

// Запускаем
initCMS();