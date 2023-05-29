import {Context, Telegraf} from 'telegraf';
require('dotenv').config()

const questions = [
    {
        question: 'Что в переводе с греческого языка означает слово «криптография»?\n' +
            '1. шифр \n' +
            '2. тайнопись \n' +
            '3. преобразование \n' +
            '4. расшифровка \n',
        answer: '2',
    },
    {
        question: 'Что такое симметричное шифрование?\n' +
            '1. Симметричное шифрование - это процесс кодирования информации, при котором используются только ключи симметричной формы, такие как треугольники, квадраты и круги.\n' +
            '2. Симметричное шифрование - это метод защиты данных, при котором информация обрабатывается зеркальным отображением, чтобы сделать ее невидимой для посторонних.\n' +
            '3. Симметричное шифрование - это процесс преобразования данных в формат, при котором все символы меняются на символы с противоположной направленностью, чтобы затруднить их чтение.\n' +
            '4. Симметричное шифрование - это метод шифрования, при котором один и тот же ключ используется как для шифрования, так и для расшифровки данных.\n',
        answer: '4',
    },
    {
        question: 'Что такое хэширование и как оно используется в криптографии?\n' +
            '1. Хэширование - это процесс кодирования информации путем использования специального хеш-ключа, который делает данные невидимыми для посторонних.\n' +
            '2. Хэширование - это процесс преобразования данных в непрерывную строку фиксированной длины с помощью хеш-функции. Хэш-функции принимают входные данные и генерируют уникальный хеш-код, который сложно восстановить до исходных данных.\n' +
            '3. Хэширование - это метод шифрования, при котором данные преобразуются в случайную последовательность символов, чтобы сделать их непонятными для злоумышленников.\n' +
            '4. Хэширование - это процесс сжатия данных с помощью специального алгоритма, который удаляет ненужную информацию и сокращает размер файла.\n',
        answer: '2',
    },
    {
        question: 'Какие основные цели применения криптографии?\n' +
            '1. Основная цель применения криптографии - обеспечение конфиденциальности информации путем шифрования, чтобы только авторизованные лица имели доступ к содержимому.\n' +
            '2. Основная цель применения криптографии - создание сложночитаемого текста, чтобы делать сообщения более интересными и загадочными.\n' +
            '3. Основная цель применения криптографии - ограничение доступа к информации только для элитных групп людей.\n' +
            '4. Основная цель применения криптографии - создание сложноузнаваемых символов для украшения документов и искусства.\n',
        answer: '1',
    },
    {
        question: 'Что такое атака словарным перебором (Brute Force)?\n' +
            '1. Атака словарным перебором (Brute Force) - это метод атаки на защищенную систему или шифр путем последовательного перебора всех возможных комбинаций ключей или паролей до тех пор, пока не будет найдено правильное соответствие.\n' +
            '2. Атака словарным перебором (Brute Force) - это метод поиска неизвестного слова или выражения в словаре, чтобы узнать его значение.\n' +
            '3. Атака словарным перебором (Brute Force) - это процесс попыток проникновения в систему с использованием списка популярных паролей и имен пользователей.\n' +
            '4. Атака словарным перебором (Brute Force) - это метод рекурсивного перебора всех возможных комбинаций символов, чтобы найти правильный ключ шифрования.\n',
        answer: '1',
    },
    {
        question: 'Как называется «исторический» шифр, в котором каждая буква исходного текста заменялась буквой, стоящей на некоторое фиксированное число мест дальше в алфавите, о применении которого имеются документальные свидетельства?\n' +
            '1. шифр Маркова \n' +
            '2. шифр Цезаря \n' +
            '3. шифр Энигма \n' +
            '4. шифр Бэбиджа \n',
        answer: '2',
    },
    {
        question: 'Что в криптографии называют открытым текстом?\n' +
            '1. исходное сообщение (сообщение до шифрования) \n' +
            '2. открытый ключ шифрования \n' +
            '3. сообщение, получение после преобразования с использованием любого шифра \n' +
            '4. электронную цифровую подпись \n',
        answer: '1',
    },
    {
        question: 'Какая наука разрабатывает методы «вскрытия» шифров?\n' +
            '1. криптография \n' +
            '2.  линейная алгебра \n' +
            '3. теория чисел \n' +
            '4. тайнопись \n' +
            '5.  криптоанализ\n',
        answer: '5',
    },
    {
        question: 'Определите ключи шифра Цезаря, если известны следующая пара открытый текст – шифротекст: ЯБЛОКО – ЗЙФЧУЧ (АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ)\n'+ '\n' + 'В этом вопросе нужно указать только число!',
        answer: '9',
    },
    {
        question: 'Кем была дешифрована самая секретная шифровальная машина Третьего рейха — "Энигма"?\n' +
            '1. специалистами из США\n' +
            '2. с помощью суперкомпьютера\n' +
            '3. случайно, без участия конкретных лиц\n' +
            '4. командой криптоаналитиков и математиков в рамках британского проекта Ultra\n',
        answer: '4',
    },
    {
        question: 'Как расшифровывается CTF?\n' +
            '1. Capture-The-Flag\n' +
            '2. Computer threat Force\n' +
            '3. Computer tournire France\n' +
            '4. Combat tour force',
        answer: '1',
    },
    {
        question: 'Какое самое известное соревнование по CTF?\n' +
            '1. Academy CTF\n' +
            '2. RuCTF\n' +
            '3. UgraCTF\n' +
            '4. Defcon',
        answer: '4',
    },
    {
        question: 'Какого типа заданий не бывает на CTF?\n' +
            '1. Joy\n' +
            '2. OSINT\n' +
            '3. PPC\n' +
            '4. Algo\n' +
            '5. Reverse',
        answer: '4',
    },
    {
        question: 'Какая программа часто используется для реверсинга?\n' +
            '1. VS\n' +
            '2. Strings\n' +
            '3. GCC\n' +
            '4. NetCat',
        answer: '2',
    },
    {
        question: 'Какой base самый популярный?\n' +
            '1. base64\n' +
            '2. base32\n' +
            '3. base86\n' +
            '4. base16',
        answer: '1',
    },
    {
        question: 'Какую информацию можно получить из метаданных изображений?:\n' +
            '1. Информацию о том, какая погода была на момент съемки.\n' +
            '2. Информацию о том, какой фотограф сделал снимок.\n' +
            '3. Информацию о том, какой был уровень заряда батареи камеры.\n' +
            '4.Информацию о месте и времени съемки, модели камеры, настройках экспозиции и т. д. ',
        answer: '4',
    },
    {
        question: 'Какой инструмент можно использовать для поиска изображений в интернете?\n' +
            '1. Adobe Photoshop\n' +
            '2. Amazon Prime Video\n' +
            '3. Google Images\n' +
            '4. Dropbox',
        answer: '3',
    },
    {
        question: 'Какой из перечисленных инструментов относится к OSINT?\n' +
            '1. Wayback Machine\n' +
            '2. Cicada-3301\n' +
            '3. Photoshop\n' +
            '4. CyberChef',
        answer: '1',
    },
    {
        question: 'Что такое Cicada-3301?\n' +
            '1. Загадочная группа, которая предложила серию сложных криптографических заданий в Интернете\n' +
            '2. Инструмент для анализа данных\n' +
            '3. Ресторан в центре Москвы\n' +
            '4. Секретная разведывательная организация ',
        answer: '1',
    },
    
];
interface User {
    id: number;
    score: number;
}

const users: User[] = [];

const bot = new Telegraf(process.env.API_BOT || '');

bot.start((ctx) => {
    const userId = ctx.from?.id;

    const user = users.find((u) => u.id === userId);

    if (user) {
        ctx.reply('С возвращением! Вы уже участвуете в тесте.');
    } else {
        const newUser: User = {
            id: userId!,
            score: 0,
        };
        users.push(newUser);
        ctx.reply('Привет! Добро пожаловать в тест CTF Academy.\n' + '\n' + 'В каждом вопросе предоставлены варианты ответа, необходимо прислать ТОЛЬКО ЦИФРУ варианта ответа!\n'+ '\n' + 'Удачи!');
        sendQuestion(ctx);
    }
});


bot.on('text', (ctx) => {
    const userId = ctx.from?.id;
    const user = users.find((u) => u.id === userId);

    if (user) {
        const answer = ctx.message?.text;
        const currentQuestion = questions[user.score];

        if (currentQuestion && answer && answer.toLowerCase() === currentQuestion.answer.toLowerCase() && user.score < questions.length) {
            user.score++; // Увеличиваем очки пользователя
            ctx.reply('Верно! Поздравляю!');
        } else if(user.score < questions.length) {
            ctx.reply('Неверно. Попробуйте еще раз.');
        }
        sendQuestion(ctx);
    }
});


function sendQuestion(ctx: Context) {
    const userId = ctx.from?.id;
    const user = users.find((u) => u.id === userId);

    if (user && user.score < questions.length) {
        const currentQuestion = questions[user.score];
        ctx.reply(currentQuestion.question);
    } else if(user && user.score == questions.length){
        ctx.reply('Тест завершен. Ваши очки: ' + user?.score);
    }
}

bot.launch();