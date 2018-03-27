const DATAS = {
    ru: {
        title: "Классификация программного обеспечения",
        grade: "8 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'T. Hoare',
            phrase: 'Есть два метода создания программного обеспечения. Один из них — сделать программу настолько простой, что, очевидно, в ней нет недостатков. И другой, сделать приложение настолько сложным, что в нем невидно явных недостатков.',
        },
        parts: [
            {
                title: 'Что такое ПО?',
                info: 'Предлагаем познакомиться с понятием «программное обеспечение» компьютера ',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Что такое ПО?',
                            subTitle: 'Классификация|программного|обеспечения',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 900,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Можно ли работать на компьютере без программ?',
                                big: true,
                                extra: null,
                                text: ['Без программ любой компьютер – просто «железо».  Для того, чтобы работать на компьютере необходимы не только устройства, но и программы. Программ много, каждая имеет свое назначение.',
                                    'В зависимости от программы, можно превращать компьютер в рабочее место писателя или ученого, дизайнера или видеорежиссера, радиоведущего или архитектора.\n']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-1.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-2.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-3.png',
                            }],
                            {
                                name: 'm-text',
                                title: 'Программа',
                                big: true,
                                extra: null,
                                text: ['Это описание на формальном языке, «<b>понятном</b>» компьютеру, последовательности действий, которые необходимо выполнить над данными для решения поставленной задачи.',
                                    'Совокупность всех программ, предназначенных для выполнения на компьютере, называют <b>программным обеспечением</b> (ПО) компьютера.',
                                    'Первой компанией по разработке ПО стала <b>Computer Sciences Corporation</b>.',
                                    'Термин «программное обеспечение» вошёл в широкий обиход с начала 1960-х годов. В этот период происходило разделение команд, управляющих компьютером, и его физических компонентов - аппаратного обеспечения.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt-1.png',
                                    // backgroundColor: '#cdd9d9',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Правовые нормы',
                                    big: true,
                                    text: ['Следует отметить, что существуют правовые нормы использования ПО:',
                                        '1. ПО, являющееся частной собственностью авторов или правообладателей;',
                                        '2. Свободное ПО, обеспечивает доступ всем желающим к исходным  кодам программ.'],
                                }
                            ],
                            {
                                name: 'm-text',
                                title: 'Что входит в структуру ПО?',
                                big: true,
                                text: ['В любой сфере деятельности человеку нужен компьютер. На компьютере мы слушаем музыку, смотрим фильмы, печатаем доклады, выполняем расчеты, ищем информацию в Интернете и многое другое. Для выполнения этих функций необходимы компьютерные программы. Все программы можно разделить на три группы:'],
                            },
                            {
                                name: 'm-video',
                                backgroundColor: '#98aaac',
                                src: 'public/1/po.mp4',
                                // bg: 'public/1/kt-2.png',
                                isImage: true,
                                bg: 'public/1/kt-2.png',
                            }, {
                                name: 'shape',
                                full: true,
                                subTitle: 'Итак, следует отметить, что программы нужны для работы не только человеку, но и компьютеру! Работоспособность компьютера обеспечивают программы, составляющие системное программное обеспечение (СПО). В состав СПО входит операционная система и сервисные программы.' +
                                '|Главным компонентом СПО является операционная система (ОС).' +
                                '|Наиболее распространённые ОС для персональных компьютеров:',
                                backgroundColor: 'transparent',
                                color: '#000',
                                bg: {
                                    parallax: 'public/1/k2.jpg',
                                    // video: 'public/video4.mp4',
                                    height: 900,
                                }
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['ОС служит посредником при организации диалога пользователя с компьютером, управляет распределением и использованием компьютерных ресурсов, руководит работой всех аппаратных средств компьютера. От ОС зависит и качество работы компьютера, и удобство работы пользователя. Поэтому не случайно по функциональным возможностям ее сравнивают с нервной системой человека.']
                            }, {
                                name: 'm-text',
                                title: 'В процессе загрузки ОС:',
                                text: ['- производится тестирование работоспособности процессора, памяти и других устройств;',
                                    '- на экран монитора выводятся краткие диагностические сообщения о процессе тестирования;',
                                    '- после окончания загрузки ОС пользователь получает возможность управлять компьютером с использование графического интерфейса ОС – меню.'],
                            }],
                            {
                                name: 'm-video',
                                full: true,
                                src: 'public/1/launch_os.mp4',
                                bg: 'public/1/k3.jpg',
                            },
                        ],
                    }
                }
            },
            {
                title: 'Системное ПО',
                info: 'Что входит в структуру ПО?',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Системное ПО',
                            subTitle: 'Классификация|программного|обеспечения',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                src: 'public/2/kt-1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-text',
                                text: ['Давайте вспомним, что процессор понимает только сигналы (есть сигнал или нет сигнала). А, например, жесткий диск имеет только намагниченные и не магниченные участки. Как же эти два устройства понимают друг друга? А для этого им нужна программа, которая будет "переводчиком" между ними. Такие программы называются драйверами. Они нужны для каждого подключенного устройства.',
                                    'Именно драйверы отвечают за обработку информации, поступающей от таких устройств, как мышь, клавиатура, принтер и др.']
                            }],
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-2.png'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Следующий вид системного программного обеспечения составляет большая группа программ, которые называют утилитами или сервисными программами.',
                                    'Часть утилит входит в состав операционной системы, а другая часть функционирует независимо от неё, т.е. автономно.']
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Утилиты в зависимости от их функционального назначения, условно можно разделить на программы-архиваторы, антивирусные программы и программы обслуживания дисков и операционной системы.']
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Архиваторы (программы-упаковщики) ',
                                text: ['Позволяют за счет применения специальных методов сжатия уплотнять информацию, освобождая место на носителях.']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-4.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Антивирусные программы',
                                text: ['Предназначены для предотвращения заражения компьютера компьютерными вирусами и ликвидации последствий заражения, если оно произошло.']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-5.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['И последняя большая группа программ-утилит – это программы обслуживания дисков и операционной системы.',
                                    'Программы обслуживания дисков отвечают за системную обработку дисковой информации.']
                            }, {
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-3.png'
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: [' К таким программам относят:\n',
                                    '- Программы оптимизации и контроля качества дискового пространства;',
                                    '- Программы восстановления информации, форматирования, защиты данных;',
                                    '- Программы для управления памятью, которые обеспечивают более гибкое использование оперативной памяти;',
                                    '- Программы для записи CD-ROM, CD-RW, DVD-RW и т.д.',
                                    '- Программы контроля, тестирования и диагностики, которые используются для проверки правильности функционирования устройств компьютера и обнаружения неисправностей в процессе эксплуатации, указывают причину и место неисправности.']
                            },
                            {
                                name: 'm-video',
                                bg: 'public/2/k2.jpg',
                                src: 'public/2/service-programs.mp4'
                            },
                            {
                                name: 'm-text',
                                title: 'Системы программирования',
                                big: true,
                                text: ['Это инструмент для работы профессиональных программистов. Каждая такая система ориентирована на определенный язык программирования: Паскаль, Бейсик, Фортран, Си, Ассемблер и др.',
                                    'Системы программирования позволяют создавать тексты программ, отлаживать и исполнять программы. Все перечисленные выше виды ПО создаются программистами с помощью систем программирования.']
                            },
                            {
                                name: 'm-video',
                                full: true,
                                bgVideo: true,
                                src: 'public/2/code.mp4'
                            }
                        ]
                    }
                }
            },
            {
                title: 'Проверь себя',
                image: 'part3.png',
                info: 'Закрась клетки таблицы соответствующим цветом, разделяя иконки программ на типы ПО.',
                interactive: {
                    name: 'paint',
                    items: {
                        title: 'Закрась клетки таблицы соответствующим цветом, разделяя иконки программ на типы ПО.',
                        partNames: ['Системные программы', 'Прикладные программы', 'Системы программирования'],
                        partImages: [
                            [
                                'public/3/eset.png',
                                'public/3/kasper.png',
                                'public/3/linux.png',
                                'public/3/windows.png',
                                'public/3/winrar.png',
                                'public/3/winzip.png'
                            ], [
                                'public/3/excel.png',
                                'public/3/photoshop.png',
                                'public/3/word.png',
                            ], [
                                'public/3/cplus.png',
                                'public/3/html.png',
                                'public/3/pascal.png',
                            ],
                        ],
                    }
                }
            }
        ]
    },
    kz: {
        title: "Программалық жасақтаманы жіктеу",
        grade: "8-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'T. Hoare',
            phrase: 'Программалық қамтамасыз етудің екі әдісі бар. Біріншісі еш кедергісіз программаны соншалықты қарапайым етіп жасау. Екіншісі қосымшаны барынша күрделендіру арқылы онда айқын кемшіліктерінің болмауы.',
        },
        parts: [
            {
                title: 'ПЖ дегеніміз не?',
                info: 'Компьютердің «программалық жасақтама» түсінігімен танысуды ұсынамыз',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'ПЖ дегеніміз не?',
                            subTitle: 'Программалық|жасақтаманы|жіктеу',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 900,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Компьютерде программаларсыз жұмыс жасауға болады ма?',
                                big: true,
                                extra: null,
                                text: ['Программасыз кез келген компьютер - жай ғана «темір».  Компьютерде жұмыс жасау үшін тек құрылғы ғана емес, сондай-ақ программалар да қажет. программалар өте көп, әр қайсысының өз мағынасы бар.',
                                    'программаға байланысты компьютерді жазушының немесе ғалымның, дизайнердің немесе бейнережиссердің, радио жүргізушінің немесе архитектордың жұмыс орнына айналдыруға болады.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-1.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-2.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-3.png',
                            }],
                            {
                                name: 'm-text',
                                title: 'Программа',
                                big: true,
                                text: ['бұл қойылған тапсырманы шешу үшін деректерге жасау қажет әрекеттер тізбегін компьютерге «түсінікті» ресми тілде сипаттау.',
                                    'Компьютерде орындауға арналған барлық программалардың жиынтығын компьютердің программалық жасақтама (ПЖ) деп атайды.',
                                    'ПЖ жасаған алғашқы компания Computer Sciences Corporation болды.',
                                    '«программалық жасақтама» термині 1960 жылдардың басынан бастап күнделікті қолданысқа кеңінен енді. Осы кезеңде компьютерді басқаратын командаларды және оның физикалық компоненттерін - аппараттық жасақтаманы бөлу орын алды.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt-1.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Құқықтық нормалар',
                                    big: true,
                                    text: ['ПЖ қолданудың құқықтық нормалары бар екендігін айта кеткен жөн:',
                                        '1. Авторлардың немесе құқық иемденушілердің жеке меншігі болып табылатын ПЖ;',
                                        '2. Еркін ПЖ, қалағандардың барлығының программалардың бастапқы кодтарына қатынауын қамтамасыз етеді.'],
                                }
                            ],
                            {
                                name: 'm-text',
                                title: 'ПЖ құрамына не кіреді?',
                                big: true,
                                text: ['Кез келген қызмет саласында адамға компьютер керек. Компьютерден біз музыка тыңдаймыз, фильмдер көреміз, баяндамалар жазамыз, есептер шығарамыз, Интернеттен ақпараттар іздейміз және басқалары. Осы функцияларды орындау үшін компьютерлік программалар қажет. программалардың барлығын үш топқа бөлуге болады:'],
                            },
                            {
                                name: 'm-video',
                                backgroundColor: '#98aaac',
                                src: 'public/1/po.mp4',
                                // bg: 'public/1/kt-2.png',
                                isImage: true,
                                bg: 'public/1/kt-2.png',
                            }, {
                                name: 'shape',
                                full: true,
                                subTitle: 'Сонымен, программалар адамдардың жұмыс жасауына ғана емес, сондай-ақ компьютерге де қажет! Компьютердің жұмыс жасау қабілетін жүйелік программалық жасақтаманы (ЖПЖ) құрайтын программалар қамтамасыз етеді. ЖПЖ құрамына операциялық жүйе және сервистік программалар кіреді.' +
                                '|ЖПЖ негізгі компоненті болып операциялық жүйе (ОЖ) табылады. ' +
                                '|Дербес компьютерлерге арналған ең көп таралған ОЖ.',
                                backgroundColor: 'transparent',
                                color: '#000',
                                bg: {
                                    parallax: 'public/1/k2.jpg',
                                    height: 900,
                                }
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['ОЖ пайдаланушының компьютермен диалогын ұйымдастыру кезінде делдал болады, компьютерлік ресурстарды таратуды және қолдануды басқарады, компьютердің барлық аппараттық құралдарының жұмысына басшылық етеді. Компьютер жұмысының сапасы мен пайдаланушы жұмысының ыңғайлығы да ОЖ-ға тәуелді. Сондықтан функционалдық мүмкіндіктері бойынша оны адамның жүйке жүйесімен салыстыру кездейсоқ емес.']
                            }, {
                                name: 'm-text',
                                title: 'ОЖ жүктеу процесінде:',
                                text: ['- Процессордың жұмыс жасау қабілетін, жадыны және басқа да құрылғыларды тестілеу орындалады;',
                                    '- монитор экранына тестілеу процесі туралы қысқа диагностикалық хабарлар шығарылады;',
                                    '- ОЖ жүктеу аяқталғаннан кейін пайдаланушы ОЖ графикалық интерфейсін - мәзірді қолданып компьютерді басқару мүмкіндігіне ие болады.'],
                            }],
                            {
                                name: 'm-video',
                                full: true,
                                src: 'public/1/launch_os.mp4',
                                bg: 'public/1/k3.jpg',
                            },
                        ],
                    }
                }
            },
            {
                title: 'Жүйелік ПЖ',
                info: 'ПЖ құрамына не кіреді?',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Жүйелік ПЖ',
                            subTitle: 'Программалық|жасақтаманы|жіктеу',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                src: 'public/2/kt-1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-text',
                                text: ['Процессордың тек сигналдарды ғана түсінетіндігін еске түсірейік (сигнал бар немесе сигнал жоқ). Мысалы, қатты дисктің тек магниттелген және магниттелмеген бөліктері ғана бар. Бұл екі құрылғы бірін-бірі қалай түсінеді? Ол үшін оларға олардың арасында "аудармашы" болатын программа қажет. Мұндай программаларды драйверлер деп атайды. Олар әр жалғанған құрылғы үшін қажет.',
                                    'Осы драйверлер тінтуір, пернетақта, принтер және т.б. сияқты құрылғылардан келіп түсетін ақпараттарды өңдеуге жауап береді.']
                            }],
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-2.png'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Жүйелік программалық жасақтаманың келесі түрін утилиттер немесе сервистік программалар деп аталатын программалардың үлкен тобы құрайды.',
                                    'Утилиттердің бір бөлігі операциялық жүйенің құрамына кіреді, ал екінші бөлігі оған тәуелсіз, яғни автономды жұмыс жасайды.']
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Утилиттерді олардың функционалдық мақсатына байланысты архиватор программаларға, вирусқа қарсы программаларға және дисктер мен операциялық жүйелерге қызмет көрсететін программаларға бөлуге болады.']
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Архиваторлар (мұрағаттаушы программа)',
                                text: ['қысудың арнайы әдісін қолдану есебінен тасымалдағыштағы орынды босату арқылы ақпаратты тығыздауға мүмкіндік береді. ']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-4.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Вирусқа қарсы программалар',
                                text: ['компьютердің компьютер вирустарымен зақымдалуының алдын алуға және егер ол орын алған болса, зақымдау салдарын жоюға арналған. ']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-5.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['Утилит программалардың соң үлкен тобы - бұл дисктер мен операциялық жүйелерге қызмет көрсету программалары.',
                                    'Дисктерге қызмет көрсету программалары диск ақпараттарын жүйелік өңдеуге жауап береді.']
                            }, {
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-3.png'
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Мұндай программаларға:',
                                    '- Диск кеңістігін оңтайландыру және сапасын бақылау программалары;',
                                    '- Ақпаратты қалпына келтіру, форматтау, деректерді қорғау программалары;',
                                    '- Жедел жадыны барынша ыңғайлы қолдануды қамтамасыз ететін жадыны басқаруға арналған программалар;',
                                    '- CD-ROM, CD-RW, DVD-RW және т.б. жазуға арналған программалар.',
                                    '- Пайдалану процесінде компьютер құрылғыларының жұмыс жасау дұрыстығын тексеру және ақаулықтарды анықтау үшін қолданылатын бақылау, тестілеу және диагностикалау программалары ақау себебі мен орнын көрсетеді.']
                            },
                            {
                                name: 'm-video',
                                bg: 'public/2/k2.jpg',
                                src: 'public/2/service-programs.mp4'
                            },
                            {
                                name: 'm-text',
                                title: 'Программалау жүйелері',
                                big: true,
                                text: ['кәсіби программашылардың жұмыс жасауына арналған құрал. Мұндай әр жүйе программалаудың белгілі бір тіліне бағдарланған: Паскаль, Бейсик, Фортран, Си, Ассемблер және басқалары.',
                                    'программалау жүйелері программа мәтіндерін жасауға, программаларды қадағалауға және орындауға мүмкіндік береді. Жоғарыда аталған ПЖ барлық түрлерін программашылар программалау жүйелерінің көмегімен жасайды.']
                            },
                            {
                                name: 'm-video',
                                full: true,
                                bgVideo: true,
                                src: 'public/2/code.mp4'
                            }
                        ]
                    }
                }
            },
            {
                title: 'Өзіңді тексер',
                image: 'part3.png',
                info: 'Программа белгілерін ПЖ түрлеріне бөле отырып, кесте торларын тиісті түстермен боя.',
                interactive: {
                    name: 'paint',
                    items: {
                        title: 'Программа белгілерін ПЖ түрлеріне бөле отырып, кесте торларын тиісті түстермен боя.',
                        partNames: ['Жүйелік программалар', 'Қолданбалы программалар', 'программалау жүйелері'],
                        partImages: [
                            [
                                'public/3/eset.png',
                                'public/3/kasper.png',
                                'public/3/linux.png',
                                'public/3/windows.png',
                                'public/3/winrar.png',
                                'public/3/winzip.png'
                            ], [
                                'public/3/excel.png',
                                'public/3/photoshop.png',
                                'public/3/word.png',
                            ], [
                                'public/3/cplus.png',
                                'public/3/html.png',
                                'public/3/pascal.png',
                            ],
                        ],
                    }
                }
            }
        ]
    },
    en: {
        title: "Classification of software",
        grade: "Grade 8",
        typeder: "On-line lecture",
        prologue: {
            author: 'T. Hoare',
            phrase: 'There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult. ',
        },
        parts: [
            {
                title: 'What is software?',
                info: 'We suggest to get aсquanted with definition of “software” of computer',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'What is software?',
                            subTitle: 'Classification|of software',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                height: 900,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Is it possible to work on computer without programs?',
                                big: true,
                                text: ['Any computer without program is only “hardware”. For working on computer not only devices are necessary, and programs. There are many programs, each one has its own assignment.',
                                    'Depending on program it is possible to convert a computer into workplace of writer or scientist, designer or production director, radio presenter or architect.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-1.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-2.png',
                            }, {
                                name: 'm-image',
                                backgroundColor: 'white',
                                src: 'public/1/k2-3.png',
                            }],
                            {
                                name: 'm-text',
                                title: 'Program',
                                big: true,
                                text: ['Program is a description in the official language, “understandable” for computer, in sequence of actions which necessary to perform with data for given problem-solving.',
                                    'Complex of all programs, assigned for implementation on computer is software of computer.',
                                    'The first company for software development was Computer Sciences Corporation.',
                                    'The term “software” passed into generic usage from beginning of 1960s. At this time teams were dividing, who managing by computer and its physical components – equipment hardware.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt-1.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Legal norms',
                                    big: true,
                                    text: ['It should be emphasized that legal norms for software using are existing:',
                                        '1. Software which is a private property of referrals or owners;',
                                        '2. Free Software provides access to all wishing to source code of the program.'],
                                }
                            ],
                            {
                                name: 'm-text',
                                title: 'What does software structure have? ',
                                big: true,
                                text: ['A man needs a computer in any sphere of activity. We listen to the music, watch films, print reports, calculate, search information in Internet and more on computer. Computer programs are necessary for performance of these functions. It is possible to divide all programs into three groups: '],
                            },
                            {
                                name: 'm-video',
                                backgroundColor: '#98aaac',
                                src: 'public/1/po.mp4',
                                isImage: true,
                                bg: 'public/1/kt-2.png',
                            }, {
                                name: 'shape',
                                full: true,
                                subTitle: 'So, it should be emphasized that programs are necessary for work not only for man and for computer itself!' +
                                'Computer health provides programs building systems software. SS includes operating system and service software.' +
                                '|A main component of SS is operating system (OS).' +
                                '|The most commonly used OS for personal computers are:',
                                backgroundColor: 'transparent',
                                color: '#000',
                                bg: {
                                    parallax: 'public/1/k2.jpg',
                                    height: 900,
                                }
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['OS mediates at dialogue organization of user with computer, controls allocation and usage by computer resources, manages work of all computer hardware. Computer work quantity and work convenient of user depend on OS. That’s why there is good reason it compares with human nervous system under its capability. ']
                            }, {
                                name: 'm-text',
                                title: 'In process of OS downloading:',
                                text: ['- Testing of processors health, memory and other devices are performed;',
                                    '- Short diagnostics about testing process are showed on the screen; ',
                                    '- after finishing of OS downloading user gets possibility to control computer by graphical user interface of OS – menu.'],
                            }],
                            {
                                name: 'm-video',
                                full: true,
                                src: 'public/1/launch_os.mp4',
                                bg: 'public/1/k3.jpg',
                            },
                        ],
                    }
                }
            },
            {
                title: 'System software',
                info: 'What does software structure have? ',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'System software',
                            subTitle: 'Classification|of software',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                src: 'public/2/kt-1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-text',
                                text: ['Let’s remind that processor understands only signals (there is signal or no signal). And for example, hard disk has only magnetized and not magnetized spots. How do these two devices understand each other? And for that they need program which will be an “translator” between them. Such programs are drivers. They are need for each connected device.',
                                    'Just drivers answer for information processing coming from this kind of devices as mouse,  keyboard, printer and others.']
                            }],
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-2.png'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Following type of hard software is a big group of programs which are utilities or service programs.',
                                    'A part of utilities composes operating system and other part works independently from it, i.e. off line.']
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Depending on their functional use, utilities conditionally can be divided into archiving programs, antivirus programs and disk utility programs and operating system.'],
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Archivers (packager programs)',
                                text: ['Archivers (packager programs) allow to compact information, making free place on carriers. by applying special methods of compression.']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-4.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                title: 'Antivirus programs',
                                text: ['Next group is antivirus programs. Antivirus programs are assigned for prevention of computer infection by computer viruses and liquidation of infection consequences if it happened.']
                            }, {
                                name: 'm-image',
                                src: 'public/2/kt-5.png'
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['And last big group of utilities is service programs of disks and operating system.',
                                    'Service programs of dicks are responsible for system processing of disk information.']
                            }, {
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt-3.png'
                            }],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Such programs are:',
                                    '- optimizing programs and quality control of storage space;',
                                    '- rerun routine, formatting programs, protecting data;',
                                    '- programs for memory control which provide more flexible using of operating system;',
                                    '- programs for CD-ROM, CD-RW, DVD-RW recording and etc.',
                                    '- programs of control, testing and diagnostic which using for fault detection in the course of operation of computer organization and fault detection in process of maintenance indicating a reason and spots.']
                            },
                            {
                                name: 'm-video',
                                bg: 'public/2/k2.jpg',
                                src: 'public/2/service-programs.mp4'
                            },
                            {
                                name: 'm-text',
                                title: 'Programming system',
                                big: true,
                                text: ['Programming system is a tool for work of professional software researchers. Each such system is orienting on determined language of programming: Pascal, Basic, FORTRAN,  Si, Assembler and others. Programming systems allow to create program texts, to debug and to implement programs. All above mentioned types of software have been created by software researchers by programming system.']
                            },
                            {
                                name: 'm-video',
                                full: true,
                                bgVideo: true,
                                src: 'public/2/code.mp4'
                            }
                        ]
                    }
                }
            },
            {
                title: 'Check yourself',
                image: 'part3.png',
                info: 'Paint cells of table by relevant color dividing program icons on types of software.',
                interactive: {
                    name: 'paint',
                    items: {
                        title: 'Paint cells of table by relevant color dividing program icons on types of software.',
                        partNames: ['System programs', 'Application programs', 'Programming system'],
                        partImages: [
                            [
                                'public/3/eset.png',
                                'public/3/kasper.png',
                                'public/3/linux.png',
                                'public/3/windows.png',
                                'public/3/winrar.png',
                                'public/3/winzip.png'
                            ], [
                                'public/3/excel.png',
                                'public/3/photoshop.png',
                                'public/3/word.png',
                            ], [
                                'public/3/cplus.png',
                                'public/3/html.png',
                                'public/3/pascal.png',
                            ],
                        ],
                    }
                }
            }
        ]
    }
}