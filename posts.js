const postsDB = {
    // ID поста: 'void' (совпадает с ссылкой ?id=void)
    'void': {
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        meta_ru: 'Рассказы | 10.05.2024', meta_en: 'Stories | 10.05.2024',
        title_ru: 'Шепот из пустоты', title_en: 'Whispers from the Void',
        body_ru: `
            <p>Они думали, что сигнал — это ошибка оборудования. Статическое напряжение, космическая пыль, эхо далекой звезды. Но когда экраны на мостике погасли, а аварийное освещение залило коридоры красным светом, начался настоящий кошмар.</p>
            <p>Капитан Торн смотрел на черную бездну за иллюминатором. Звезды исчезли. Осталась только тьма — густая, живая, пульсирующая.</p>
            <blockquote>«Мы не одни. Мы никогда не были одни».</blockquote>
            <p>Эти слова, нацарапанные на обшивке шлюза, были последним, что оставил механик перед тем, как открыть внешний люк и шагнуть в пустоту. Теперь пустота смотрела на них. И она была голодна.</p>
            <h2>Первый контакт</h2>
            <p>Связь с Землей оборвалась три часа назад. Инженеры клялись, что передатчики исправны, но эфир молчал. Словно кто-то накрыл Солнечную систему непроницаемым колпаком.</p>
        `,
        body_en: `
            <p>They thought the signal was an equipment error. Static tension, cosmic dust, an echo of a distant star. But when the screens on the bridge went dark, and emergency lighting flooded the corridors with red light, the real nightmare began.</p>
            <p>Captain Thorne stared into the black abyss beyond the viewport. The stars were gone. Only darkness remained—thick, alive, pulsating.</p>
            <blockquote>"We are not alone. We never were."</blockquote>
            <p>These words, scratched onto the airlock plating, were the last thing the mechanic left behind before opening the outer hatch and stepping into the void. Now the void was staring back at them. And it was hungry.</p>
            <h2>First Contact</h2>
            <p>Contact with Earth was lost three hours ago. The engineers swore the transmitters were functional, but the ether was silent. As if someone had covered the Solar System with an impenetrable dome.</p>
        `
    },

    'wind': {
        image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        meta_ru: 'Лор | 02.05.2024', meta_en: 'Lore | 02.05.2024',
        title_ru: 'История Дома Ветров', title_en: 'History of House Wind',
        body_ru: `
            <p>Древние хроники гласят, что изначально Дом Ветров владел огнем. Их крепости стояли в жерлах потухших вулканов, а клинки ковались в пламени драконов.</p>
            <p>Однако Великий Раскол изменил всё. Когда небо разорвалось, магия огня перестала подчиняться людям. Единственным спасением стало управление воздушными потоками.</p>
            <h2>Эпоха Перемен</h2>
            <p>Старейшины Дома приняли решение, которое навсегда изменило их судьбу...</p>
        `,
        body_en: `
            <p>Ancient chronicles say that House Wind originally commanded fire. Their fortresses stood in the mouths of extinct volcanoes, and their blades were forged in dragon flame.</p>
            <p>However, the Great Rift changed everything. When the sky tore open, fire magic ceased to obey humans. The only salvation was mastering the air currents.</p>
            <h2>Age of Change</h2>
            <p>The Elders of the House made a decision that forever changed their destiny...</p>
        `
    },

    'book_done': {
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        meta_ru: 'Новости | 28.04.2024', meta_en: 'News | 28.04.2024',
        title_ru: 'Книга завершена!', title_en: 'The Book is Finished!',
        body_ru: `
            <p>Это был долгий путь. 120 000 слов, литры кофе и бессонные ночи. Но черновик "Теней Эфира" наконец-то готов и отправлен редактору.</p>
            <p>Я хочу поблагодарить всех читателей, кто поддерживал меня в процессе написания. Ваши комментарии и теории давали мне силы двигаться дальше.</p>
            <blockquote>«Конец одной истории — это всегда начало новой».</blockquote>
        `,
        body_en: `
            <p>It was a long journey. 120,000 words, liters of coffee, and sleepless nights. But the draft of "Aether Shadows" is finally ready and sent to the editor.</p>
            <p>I want to thank all the readers who supported me during the writing process. Your comments and theories gave me the strength to move forward.</p>
            <blockquote>"The end of one story is always the beginning of another."</blockquote>
        `
    },

    'featured': {
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        meta_ru: 'Статья | 01.01.2024', meta_en: 'Article | 01.01.2024',
        title_ru: 'Искусство создания миров', title_en: 'The Art of World Building',
        body_ru: `<p>Полное руководство для тех, кто хочет вдохнуть жизнь в свои фантазии. Карты, религия, экономика и магия — как связать всё воедино.</p>`,
        body_en: `<p>A complete guide for those who want to breathe life into their fantasies. Maps, religion, economy, and magic — how to tie it all together.</p>`
    },

    // --- ОТРАБОТКА СКРЫТОГО ПОСТА ---
    'aether_sample': {
        hidden: true,  // <--- ЭТА МАГИЧЕСКАЯ СТРОЧКА СКРОЕТ ПОСТ ИЗ БЛОГА
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        meta_ru: 'Отрывок из книги', meta_en: 'Book Sample',
        title_ru: 'Тени Эфира: Глава 1', title_en: 'Shadows of Aether: Chapter 1',
        body_ru: `<p>Текст первой главы...</p>`,
        body_en: `<p>Chapter 1 text...</p>`
    }
};