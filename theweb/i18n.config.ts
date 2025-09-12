export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
        en: {
            app: {
                name: 'EZY TON',
                nav: {
                    about: 'About Us',
                    whyEzyTeam: 'Why Ezy Team?',
                    ezyTon: 'Ezy Ton',
                    tokenomics: 'Tokenomics',
                    products: 'Products',
                    roadMap: 'Road Map',
                    plans: 'Plans',
                    blog: 'Blog',
                    comment: 'Comment',
                },
            },
      
            features: {
                title: 'Features of the token',
                items: [
                    {
                        title: 'Low Fees',
                        description: 'With extremely low fees, our token enables cost-effective and economical transactions. This advantage makes everyday usage accessible and practical for all users.'
                    },
                    {
                        title: 'High Speed',
                        description: 'Our token is designed with ultra-fast processing speed, enabling transactions to be completed in a fraction of a second. This ensures a seamless, reliable, and lightning-fast user experience.'
                    },
                    {
                        title: 'Seamless Integration with TON Ecosystem',
                        description: 'Our token is seamlessly integrated with the TON ecosystem, enabling direct interaction with its wallets, apps, and smart contracts. This integration ensures a smooth and uninterrupted user experience.'
                    },
                    {
                        title: 'High Security',
                        description: 'High security is a core principle of our token. Utilizing advanced encryption standards and a reliable blockchain infrastructure, we protect users\' assets and data against all potential threats.'
                    }
                ]
            },

            ezyTeam: {
                whoAre: {
                    title: 'Who Are Ezy Team',
                    text: 'Ezy Team is a group of creative and skilled professionals focused on technology, design, and user experience. We deliver innovative solutions for modern businesses and stand alongside our clients in building a smarter future.',
                    cta: 'Get Ezy Ton'
                },
                why: {
                    title: 'Why Ezy Team',
                    sections: [
                        { title: 'Who Are Ezy Team', text: 'Ezy Team is a group of creative and skilled professionals focused on technology, design, and user experience. We deliver innovative solutions for modern businesses and stand alongside our clients in building a smarter future.' },
                        { title: 'Our Vision', text: 'Ezy Team is a group of creative and skilled professionals focused on technology, design, and user experience. We deliver innovative solutions for modern businesses and stand alongside our clients in building a smarter future.' },
                        { title: 'Our Mission', text: 'Ezy Team is a group of creative and skilled professionals focused on technology, design, and user experience. We deliver innovative solutions for modern businesses and stand alongside our clients in building a smarter future.' },
                        { title: 'Why Choose Us', text: 'Ezy Team is a group of creative and skilled professionals focused on technology, design, and user experience. We deliver innovative solutions for modern businesses and stand alongside our clients in building a smarter future.' }
                    ]
                }
            },

            hero: {
                title: 'EZY CONNECT ON TON For cafes',
                titlePrefix: 'EZY CONNECT ON TON',
                typedSuffixes: ['For cafes', 'For restaurants', 'For shops'],
                annotations: {
                    waiter: 'Waiter dashboard',
                    personalization: 'Personalization',
                    menu: 'Menu digital',
                    builder: 'Page builder'
                },
                description: 'Join the next generation of technology with our cutting-edge products and exclusive token',
                roadMap: 'Road Map',
                buy: 'But Ezy',
             
            },
          
            faqSection: {
                title: 'Frequently Asked Questions'
            },
              
            faqs: [
                {
                    question: 'What exactly is a digital menu?',
                    answer: 'A digital menu is an online interactive version of your restaurant or cafe menu. Customers can view the menu and place orders just by scanning a QR code or tapping their phone on an NFC-enabled table.'
                },
                {
                    question: 'What are the advantages of a digital menu over a paper menu?',
                    answer: 'No need for reprinting (cost saving)\n' +
                        'Ability to update prices and items instantly\n' +
                        'Better visual appeal and user experience for customers\n' +
                        'More hygienic and safer than a paper menu'
                },
                {
                    question: 'Do customers need an app to use it?',
                    answer: 'No! No app is needed. The menu opens just by using the phone camera or tapping NFC.'
                },
                {
                    question: 'Can I have the menu design with my brand colors and logo?',
                    answer: 'Yes. The menu is fully customized according to your brand colors, logo, and even interior decoration of your space.'
                },
                {
                    question: 'If prices or items change, do I need to reprint the QR code?',
                    answer: 'No. The QR code and NFC remain the same, and you can make instant updates from the admin panel.'
                },
                {
                    question: 'Can the menu link to social networks or WhatsApp?',
                    answer: 'Yes. Customers can connect directly from the menu to WhatsApp, Instagram, or any of your social channels.'
                },
                {
                    question: 'How long does it take to set up a digital menu?',
                    answer: 'Between 24 to 72 hours depending on the amount of information and custom design.'
                },
            ],

            tokenomics: {
                title: 'Tokenomics',
                labels: ['Presale', 'Marketing', 'Team', 'Private Sale']
            },

            banner: {
                title: 'EZYTON available for all the operations',
                ston: 'STON.fi',
                dedust: 'Dedust.io',
                swap: 'swap.coffee'
            },

            ezyNetwork: {
                title: 'Join the',
                titleHighlight: 'EZY',
                titleSuffix: 'NETWORK Revolution',
                description: 'Become part of our global affiliate system and earn commissions by promoting EZY products worldwide. Smart contracts ensure transparent and automated commission distribution.',
                cta: 'Join as Affiliate',
                features: [
                    {
                        title: 'Automated Payouts',
                        description: 'Commissions are paid automatically and without delay.'
                    }
                ]
            },

            menuDigital: {
                title: "We're Products",
                description: "We're not just an idea — we're real, functional products designed to meet the needs of the modern world. From digital tools to blockchain-based solutions, we build products that make life smarter and simpler.",
                menuTitle: "Menu Digital",
                features: [
                    { text: "Waiter Dashboard" },
                    { text: "Ton Coin" },
                    { text: "Templates" },
                    { text: "Wallet" },
                    { text: "Barcode" }
                ],
                cta: "Let's Do It"
            },

            team: {
                title: 'Our Team',
                retry: 'Try Again'
            },

            comments: {
                noComments: 'No comments available at the moment.'
            },

            ezyPartner: {
                title: 'Our Partners'
            },
            blog: {
                title: 'Blog',
                loading: 'Loading blogs...',
                readMore: 'Read More',
                tableOfContents: 'WHAT YOU WILL READ IN THIS ARTICLE',
                author: {
                    role: 'Writer'
                },
                relatedBlogs: 'Related Blogs',
                noContent: 'No content available',
                defaultTitle: 'Blog or Learn Title',
                defaultDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...'
            },

            footer: {
                tagline: 'Empowering The Future Of Decentralization',
                signUpTitle: 'Sign Up For Filecoin Updates',
                emailPlaceholder: 'Write Your Email',
                copyright: '© 2025 Saint Bitts LLC Ezyton.Com All Rights Reserved. Support Ezyton.Com',
            },
        },
        fa: {
            app: {
                name: 'EZY TON',
                nav: {
                    about: 'درباره ما',
                    whyEzyTeam: 'چرا تیم ایزی؟',
                    ezyTon: 'ایزی تون',
                    tokenomics: 'توکنومیکس',
                    products: 'محصولات',
                    roadMap: 'نقشه راه',
                    plans: 'پلن‌ها',
                    blog: 'بلاگ',
                    comment: 'نظرات',
                },
            },
        
            features: {
                title: 'ویژگی‌های توکن',
                items: [
                    {
                        title: 'کارمزد پایین',
                        description: 'با کارمزدهای بسیار پایین، توکن ما تراکنش‌های مقرون‌به‌صرفه و اقتصادی را ممکن می‌کند و استفاده روزمره را برای همه کاربران در دسترس و کاربردی می‌سازد.'
                    },
                    {
                        title: 'سرعت بالا',
                        description: 'توکن ما با سرعت پردازش بسیار بالا طراحی شده است تا تراکنش‌ها در کسری از ثانیه انجام شوند و تجربه‌ای سریع، روان و قابل اعتماد ارائه شود.'
                    },
                    {
                        title: 'یکپارچگی با اکوسیستم TON',
                        description: 'توکن ما به‌صورت یکپارچه با اکوسیستم TON کار می‌کند و تعامل مستقیم با کیف‌پول‌ها، برنامه‌ها و قراردادهای هوشمند آن را فراهم می‌سازد تا تجربه‌ای بی‌وقفه حاصل شود.'
                    },
                    {
                        title: 'امنیت بالا',
                        description: 'امنیت بالا یکی از اصول کلیدی توکن ماست. با استفاده از استانداردهای رمزنگاری پیشرفته و زیرساخت بلاک‌چین قابل اعتماد، از دارایی‌ها و داده‌های کاربران در برابر تهدیدات محافظت می‌کنیم.'
                    }
                ]
            },

            ezyTeam: {
                whoAre: {
                    title: 'تیم ایزی چه کسانی هستند',
                    text: 'تیم ایزی گروهی از متخصصان خلاق و باتجربه در حوزه‌های فناوری، طراحی و تجربه کاربری است. ما راهکارهای نوآورانه برای کسب‌وکارهای مدرن ارائه می‌دهیم و در ساختن آینده‌ای هوشمند کنار مشتریانمان هستیم.',
                    cta: 'دریافت ایزی تون'
                },
                why: {
                    title: 'چرا تیم ایزی',
                    sections: [
                        { title: 'تیم ایزی چه کسانی هستند', text: 'تیم ایزی گروهی از متخصصان خلاق و باتجربه در حوزه‌های فناوری، طراحی و تجربه کاربری است. ما راهکارهای نوآورانه برای کسب‌وکارهای مدرن ارائه می‌دهیم و در ساختن آینده‌ای هوشمند کنار مشتریانمان هستیم.' },
                        { title: 'چشم‌انداز ما', text: 'تیم ایزی گروهی از متخصصان خلاق و باتجربه در حوزه‌های فناوری، طراحی و تجربه کاربری است. ما راهکارهای نوآورانه برای کسب‌وکارهای مدرن ارائه می‌دهیم و در ساختن آینده‌ای هوشمند کنار مشتریانمان هستیم.' },
                        { title: 'ماموریت ما', text: 'تیم ایزی گروهی از متخصصان خلاق و باتجربه در حوزه‌های فناوری، طراحی و تجربه کاربری است. ما راهکارهای نوآورانه برای کسب‌وکارهای مدرن ارائه می‌دهیم و در ساختن آینده‌ای هوشمند کنار مشتریانمان هستیم.' },
                        { title: 'چرا ما را انتخاب کنید', text: 'تیم ایزی گروهی از متخصصان خلاق و باتجربه در حوزه‌های فناوری، طراحی و تجربه کاربری است. ما راهکارهای نوآورانه برای کسب‌وکارهای مدرن ارائه می‌دهیم و در ساختن آینده‌ای هوشمند کنار مشتریانمان هستیم.' }
                    ]
                }
            },

            hero: {
                title: 'ایزی تون آن تون برای کافه‌ها',
                titlePrefix: 'ایزی تون آن تون',
                typedSuffixes: ['برای کافه‌ها', 'برای رستوران‌ها', 'برای فروشگاه‌ها'],
                annotations: {
                    waiter: 'پنل پیشخدمت',
                    personalization: 'شخصی‌سازی',
                    menu: 'منو دیجیتال',
                    builder: 'سازنده صفحه'
                },
                description: 'با پلتفرم ما، در عرض چند دقیقه یک صفحه اختصاصی با امکانات جامع بسازید. از منو دیجیتال و اسلایدرهای پویا گرفته تا پیوند به شبکه‌های اجتماعی.',
                roadMap: 'Road Map',
                buy: 'But Ezy',
             
              
            },
        
            faqSection: {
                title: 'سوالات متداول'
            },
        
            faqs: [
                {
                    question: 'منو دیجیتال دقیقا چیه؟',
                    answer: 'منو دیجیتال نسخه آنلاین و تعاملی منوی رستوران یا کافه شماست که مشتری می‌تونه فقط با اسکن QR یا نزدیک کردن موبایل به NFC روی میز، منو رو باز کنه و سفارش بده.'
                },
                {
                    question: 'مزیت منو دیجیتال نسبت به منوی کاغذی چیه؟',
                    answer: 'بدون نیاز به چاپ دوباره (صرفه‌جویی در هزینه)\n' +
                        'امکان تغییر قیمت و آیتم‌ها در لحظه\n' +
                        'جذابیت بصری و تجربه کاربری بهتر برای مشتری\n' +
                        'بهداشتی‌تر و ایمن‌تر نسبت به منوی کاغذی'
                },
                {
                    question: 'مشتری‌ها برای استفاده نیاز به اپلیکیشن دارن؟',
                    answer: 'نه! هیچ اپلیکیشنی لازم نیست. فقط با دوربین موبایل یا نزدیک کردن گوشی به NFC، منو باز می‌شه.'
                },
                {
                    question: 'می‌تونم طراحی منو رو با رنگ و لوگوی برند خودم داشته باشم؟',
                    answer: 'بله. منو کاملا اختصاصی طراحی می‌شه بر اساس رنگ سازمانی، لوگو و حتی دکوراسیون داخلی مجموعه شما.'
                },
                {
                    question: 'اگر قیمت یا آیتمی تغییر کنه باید دوباره QR چاپ کنم؟',
                    answer: 'نه. QR و NFC ثابت می‌مونه و شما می‌تونید تغییرات رو در لحظه داخل پنل مدیریتی اعمال کنید.'
                },
                {
                    question: 'آیا امکان اتصال منو به شبکه‌های اجتماعی یا واتساپ هست؟',
                    answer: 'بله. مشتری می‌تونه مستقیم از داخل منو به واتساپ، اینستاگرام یا هر شبکه اجتماعی شما وصل بشه.'
                },
                {
                    question: 'راه‌اندازی منو دیجیتال چقدر زمان می‌بره؟',
                    answer: 'بین ۲۴ تا ۷۲ ساعت بسته به حجم اطلاعات و طراحی اختصاصی.'
                },
            ],
         
          
         
      
            tokenomics: {
                title: 'توکنومیکس',
                labels: ['پیش‌فروش', 'مارکتینگ', 'تیم', 'فروش خصوصی']
            },

            banner: {
                title: 'ایزی تون برای تمامی عملیات‌ها در دسترس است',
                ston: 'STON.fi',
                dedust: 'Dedust.io',
                swap: 'swap.coffee'
            },

            ezyNetwork: {
                title: 'به انقلاب شبکه',
                titleHighlight: 'ایزی',
                titleSuffix: 'بپیوندید',
                description: 'بخشی از سیستم همکاری جهانی ما شوید و با تبلیغ محصولات ایزی در سراسر جهان، کمیسیون کسب کنید. قراردادهای هوشمند، توزیع شفاف و خودکار کمیسیون را تضمین می‌کنند.',
                cta: 'به عنوان همکار بپیوندید',
                features: [
                    {
                        title: 'پرداخت خودکار',
                        description: 'کمیسیون‌ها به صورت خودکار و بدون تاخیر پرداخت می‌شوند.'
                    }
                ]
            },

            menuDigital: {
                title: 'ما محصولات هستیم',
                description: 'ما فقط یک ایده نیستیم — ما محصولات واقعی و کاربردی هستیم که برای پاسخگویی به نیازهای جهان مدرن طراحی شده‌اند. از ابزارهای دیجیتال گرفته تا راه‌حل‌های مبتنی بر بلاک‌چین، ما محصولاتی می‌سازیم که زندگی را هوشمندتر و ساده‌تر می‌کنند.',
                menuTitle: 'منو دیجیتال',
                features: [
                    { text: 'پنل پیشخدمت' },
                    { text: 'توکن تون' },
                    { text: 'قالب‌ها' },
                    { text: 'کیف پول' },
                    { text: 'بارکد' }
                ],
                cta: 'بیایید شروع کنیم'
            },

            team: {
                title: 'تیم ما',
                retry: 'تلاش مجدد'
            },

            comments: {
                noComments: 'در حال حاضر هیچ نظری موجود نیست.'
            },

            ezyPartner: {
                title: 'همکاران ما'
            },
            blog: {
                title: 'بلاگ',
                loading: 'در حال بارگذاری بلاگ‌ها...',
                readMore: 'ادامه مطلب',
                tableOfContents: 'آنچه در این مقاله خواهید خواند',
                author: {
                    role: 'نویسنده'
                },
                relatedBlogs: 'مقالات مرتبط',
                noContent: 'محتوایی موجود نیست',
                defaultTitle: 'عنوان بلاگ یا یادگیری',
                defaultDescription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...'
            },

            footer: {
                tagline: 'توانمندسازی آینده غیرمتمرکز',
                signUpTitle: 'ثبت‌نام برای به‌روزرسانی‌های فایل‌کوین',
                emailPlaceholder: 'ایمیل خود را بنویسید',
                copyright: '© 2025 Ezyton.Com All Rights Reserved. Support Ezyton.Com',
            },
    
        },
    },
}))


