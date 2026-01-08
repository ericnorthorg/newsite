const notesDB = [
    {
        type: 'idea', // Тип: 'idea' (текст), 'observation' (картинка), 'quote' (цитата)
        category: 'ideas', // Для фильтра
        date: '12.05.2024',
        title_ru: 'Новый проект', title_en: 'New Project',
        text_ru: 'Сегодня начал набрасывать план для новой повести. Это будет что-то среднее между киберпанком и готикой.',
        text_en: 'Started sketching a plan for a new novella today. It\'s going to be a mix of cyberpunk and gothic.'
    },
    {
        type: 'observation',
        category: 'observations',
        date: '08.05.2024',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title_ru: 'Вдохновение', title_en: 'Inspiration',
        text_ru: 'Провел весь день в старой библиотеке. Запах книг — лучший наркотик для писателя.',
        text_en: 'Spent the whole day in an old library. The smell of books is the best drug for a writer.'
    },
    {
        type: 'quote',
        category: 'quotes',
        text_ru: '"Мы создаем миры не для того, чтобы сбежать от реальности, а чтобы лучше понять её."',
        text_en: '"We create worlds not to escape reality, but to understand it better."',
        author: 'Eric North'
    }
];