const projectsDB = [
    {
        statusClass: 'status-active', // Класс цвета (оранжевый)
        status_ru: 'В работе', status_en: 'In Progress',
        title_ru: 'Пепел Древних', title_en: 'Ashes of the Ancients',
        desc_ru: 'Прямое продолжение "Теней Эфира". Герои отправляются в Пустоши.',
        desc_en: 'Direct sequel to "Aether Shadows". Heroes journey into the Wastelands.',
        progressLabel_ru: 'Черновик', progressLabel_en: 'Drafting',
        progress: 75 // Процент выполнения
    },
    {
        statusClass: 'status-planning', // Класс цвета (серый)
        status_ru: 'Концепт', status_en: 'Concept',
        title_ru: 'Проект: Бездна', title_en: 'Project: Abyss',
        desc_ru: 'Темное фэнтези. Паладины спускаются в катакомбы к забытому богу.',
        desc_en: 'Dark fantasy. Paladins descend into catacombs to a forgotten god.',
        progressLabel_ru: 'Планирование', progressLabel_en: 'Planning',
        progress: 65
    },
    {
        statusClass: 'status-active',
        status_ru: 'Редактура', status_en: 'Editing',
        title_ru: 'Сборник "Легенды"', title_en: 'Collection "Legends"',
        desc_ru: 'Антология историй о драконах и магах. Готовится к публикации.',
        desc_en: 'Anthology of stories about dragons and mages. Preparing for publication.',
        progressLabel_ru: 'Финальная правка', progressLabel_en: 'Final Polish',
        progress: 90
    }
];