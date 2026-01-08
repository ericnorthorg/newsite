/* --- УМНЫЙ ПОИСК ПО ВСЕМУ САЙТУ --- */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Настройка элементов
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.querySelector('.search-container');
    
    // Создаем блок для результатов, если его нет
    let resultsDiv = document.getElementById('search-results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results';
        resultsDiv.className = 'search-results';
        searchContainer.appendChild(resultsDiv);
    }

    // 2. Внедряем стили для результатов поиска прямо отсюда
    const style = document.createElement('style');
    style.innerHTML = `
        .search-results { text-align: left; margin-top: 20px; max-height: 60vh; overflow-y: auto; width: 100%; }
        .search-item { padding: 15px; border-bottom: 1px solid var(--border-color); transition: background 0.2s; display: block; text-decoration: none; }
        .search-item:hover { background-color: rgba(0,0,0,0.03); }
        .search-item-title { color: var(--accent-color); font-family: 'Merriweather', serif; font-size: 1.2rem; margin-bottom: 5px; }
        .search-item-type { font-size: 0.75rem; text-transform: uppercase; color: var(--secondary-text); font-weight: 700; letter-spacing: 1px; margin-bottom: 5px; }
        .search-item-text { color: var(--text-color); font-size: 0.9rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        [data-theme="dark"] .search-item:hover { background-color: rgba(255,255,255,0.05); }
    `;
    document.head.appendChild(style);

    // 3. Логика поиска
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value.toLowerCase());
        }
    });

    function performSearch(query) {
        resultsDiv.innerHTML = ''; // Очистить старое
        if (!query.trim()) return;

        let results = [];
        const lang = localStorage.getItem('lang') || 'ru'; // Проверяем текущий язык

        // --- ПОИСК ПО БЛОГУ (postsDB) ---
        if (typeof postsDB !== 'undefined') {
            for (const [id, post] of Object.entries(postsDB)) {
                if (post.hidden) continue; // Пропускаем скрытые посты
                
                // Ищем в заголовке и тексте
                const title = lang === 'ru' ? post.title_ru : post.title_en;
                const body = lang === 'ru' ? post.body_ru : post.body_en;
                
                if (title.toLowerCase().includes(query) || body.toLowerCase().includes(query)) {
                    results.push({
                        type: lang === 'ru' ? 'Блог' : 'Blog',
                        title: title,
                        text: stripHtml(body),
                        link: `posts.html?id=${id}`
                    });
                }
            }
        }

        // --- ПОИСК ПО КНИГАМ (booksDB) ---
        if (typeof booksDB !== 'undefined') {
            booksDB.forEach(book => {
                const title = lang === 'ru' ? book.title_ru : book.title_en;
                const desc = lang === 'ru' ? book.desc_ru : book.desc_en;

                if (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)) {
                    results.push({
                        type: lang === 'ru' ? 'Книга' : 'Book',
                        title: title,
                        text: desc,
                        link: 'books.html'
                    });
                }
            });
        }

        // --- ПОИСК ПО ПРОЕКТАМ (projectsDB) ---
        if (typeof projectsDB !== 'undefined') {
            projectsDB.forEach(proj => {
                const title = lang === 'ru' ? proj.title_ru : proj.title_en;
                const desc = lang === 'ru' ? proj.desc_ru : proj.desc_en;

                if (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)) {
                    results.push({
                        type: lang === 'ru' ? 'Проект' : 'Project',
                        title: title,
                        text: desc,
                        link: 'projects.html'
                    });
                }
            });
        }

        // --- ПОИСК ПО ЗАМЕТКАМ (notesDB) ---
        if (typeof notesDB !== 'undefined') {
            notesDB.forEach(note => {
                const title = lang === 'ru' ? (note.title_ru || 'Заметка') : (note.title_en || 'Note');
                const text = lang === 'ru' ? note.text_ru : note.text_en;

                if (title.toLowerCase().includes(query) || text.toLowerCase().includes(query)) {
                    results.push({
                        type: lang === 'ru' ? 'Заметка' : 'Note',
                        title: title,
                        text: text,
                        link: 'notes.html'
                    });
                }
            });
        }

        // 4. Вывод результатов
        if (results.length === 0) {
            resultsDiv.innerHTML = `<p style="margin-top:20px; color: var(--secondary-text)">${lang === 'ru' ? 'Ничего не найдено' : 'No results found'}</p>`;
        } else {
            results.forEach(item => {
                const el = document.createElement('a');
                el.className = 'search-item';
                el.href = item.link;
                el.innerHTML = `
                    <div class="search-item-type">${item.type}</div>
                    <div class="search-item-title">${item.title}</div>
                    <div class="search-item-text">${item.text}</div>
                `;
                resultsDiv.appendChild(el);
            });
        }
    }

    // Вспомогательная функция для очистки HTML-тегов из текста (чтобы искать внутри <p>...)
    function stripHtml(html) {
       let tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    }
});