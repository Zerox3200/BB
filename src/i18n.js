import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'IntroTitle': 'Mobile Application For The Ummah!',
      'Intro1': `Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.`,
      'Intro2': `Our aim is to serve the islamic Community by combining Technical Acumen with Classical Islamic Science
            and Juriprudence to deliver Useful Applications for everyday use`,
      'LastApps': 'Our latest apps',
      'LastAppsViewAll': 'View All',
      'BrowserByCategory': `Browser by category`,
      'Categories': 'Categories',
      'Price': 'Price',
      'AppStore': 'App Store',
      'Home': 'Home',
      'ContactUs': 'Contact us',
      'ContactUSGreeting': 'Assalamu Alaykum',
      'ContactUSGreeting2': 'We would like to hear from you',
      'name': 'name',
      'email': 'email',
      'Choice1': 'I have an issue',
      'Choice2': 'I have a feedback',
      'Choice3': 'I have a suggestion',
      'Choice4': 'I want to collaborate',
      'SubjectTitle': 'Subject title',
      'Message': 'Message',
      'NameRequired': 'name is required',
      'EmailRequired': 'email is required',
      'SubjectRequired': 'subject required',
      'MessageRequired': 'message required',
      'Minimum': 'min length is 3',
      'InvalidEmail': 'invalid email',
      'SubjectMinimum': 'min lenght is 5',
      'MessageMinimum': 'min lenght is 10',
      'ContactInfo': 'Our Contact Info',
      'ContactInfoEmail': 'Email',
      'ContactInfoPhoneNumber': 'Phone',
      'ContactInfoFacebook': 'Facebbok',
      'ContactInfoYoutube': 'Youtube',
      'quraaninfo': 'Holy Quran',
      'tajweed': 'tajwed',
      'relatedappsinfo': 'Related apps',
      'you': 'you might also like',
      'submit': 'Submit',
      'Homeside': 'Home',
      'Apside': 'Apps',
      'contactside': 'Contact us',
      'policyside': 'policy',
      'All': 'All',
      'Free': 'Free',
      'Paid': 'Paid',
      'Search': 'Search',
      'appstore': 'App store',
      "Details": "More Details",
      "WhatsNew": "What's new",
      "Appdescription": "App description",
      "AppInfo": "App Info",
      "AppArchitecture": "App Architecture",
      "AppPackageName": "App Package Name",
      "AppReleaseDate": "App Release Date",
      "AppUbdateDate": "App Update Date",
      "AppLanguage": "App language",
      "AppRequired": "App Required",
      "AppVersion": "App Version",
      "AppSize": "App Size",
      "GetItOn": "Get it on",
      "GooglePlay": "google play"
    }
  },
  tr: {
    translation: {
      'IntroTitle': 'Ümmet İçin Mobil Uygulama!',
      'Intro1': `Deenbook Inc, Müslüman Ümmet için İslami Mobil Uygulamalar ve Araçlar sağlayıcısıdır.`,
      'Intro2': `Amacımız, Teknik Yetenekleri Klasik İslami Bilim ve Fıkıh ile birleştirerek Günlük Kullanım için Faydalı Uygulamalar sunarak İslam Topluluğuna hizmet etmektir.`,
      'LastApps': 'En Son Uygulamalarımız',
      'LastAppsViewAll': 'Hepsini Gör',
      'BrowserByCategory': `Kategoriye göre göz at`,
      'Categories': 'Kategoriler',
      'Price': 'Fiyat',
      'AppStore': 'Uygulama mağazası',
      'Home': 'Ana Sayfa',
      'ContactUs': 'Bize Ulaşın',
      'ContactUSGreeting': 'Selamün Aleyküm',
      'ContactUSGreeting2': 'Sizden duymak isteriz',
      'name': 'isim',
      'email': 'e-posta',
      'Choice1': 'Sorunum var',
      'Choice2': 'Geri bildirimim var',
      'Choice3': 'Önerim var',
      'Choice4': 'İş birliği yapmak istiyorum',
      'SubjectTitle': 'Konu başlığı',
      'Message': 'Mesaj',
      'NameRequired': 'İsim gereklidir',
      'EmailRequired': 'E-posta gereklidir',
      'SubjectRequired': 'Konu gereklidir',
      'MessageRequired': 'Mesaj gereklidir',
      'Minimum': 'Minimum uzunluk 3',
      'InvalidEmail': 'Geçersiz e-posta',
      'SubjectMinimum': 'Minimum uzunluk 5',
      'MessageMinimum': 'Minimum uzunluk 10',
      'ContactInfo': 'İletişim Bilgilerimiz',
      'ContactInfoEmail': 'E-posta',
      'ContactInfoPhoneNumber': 'Telefon',
      'ContactInfoFacebook': 'Facebook',
      'ContactInfoYoutube': 'Youtube',

      'quraaninfo': "Kutsal Kur'an",
      'tajweed': 'Tecvid',
      'relatedappsinfo': 'İlgili uygulamalar',
      'you': 'belki de ilginizi çeker',
      'submit': 'Gönder',

      'Homeside': 'Ana Sayfa',
      'Apside': 'Uygulamalar',
      'contactside': 'Bizimle İletişime Geçin',
      'policyside': 'Politika',
      'Contact': 'Temas etmek',
      'All': 'Tüm',
      'Free': 'özgür',
      'Paid': 'paralı',
      'Search': 'Ara',
      "Details": "Daha fazla detay",
      "WhatsNew": "Ne var ne yok",
      "Appdescription": "Uygulama açıklaması",
      "AppInfo": "Uygulama bilgisi",
      "AppArchitecture": "Uygulama Mimarisi",
      "AppPackageName": "Uygulama Paketi Adı",
      "AppReleaseDate": "Uygulama Yayın Tarihi",
      "AppUbdateDate": "Uygulama Güncelleme Tarihi",
      "AppLanguage": "Uygulama dili",
      "AppRequired": "Uygulama Gerekli",
      "AppVersion": "Uygulama sürümü",
      "AppSize": "Uygulama Boyutu",
      "GetItOn": "Başla"
    }
  },
  ar: {
    translation: {
      'IntroTitle': 'تطبيقات الهاتف المحمول للأمه الأسلامية',
      'Intro1': `شركة دين بوك هي شركة تطبيقات الهاتف المحمول الإسلامية للأمة الإسلامية`,
      'Intro2': `هدفنا هو خدمة المجتمع من خلال الجمع بين الذكاء التقني و العلوم الإسلاميه الكلاسيكيه و الفقه لتقديم تطبيقات مفيدة للاستخدام اليومي `,
      'LastApps': `تطبيقاتنا الاخيره`,
      'LastAppsViewAll': 'عرض الجميع',
      'BrowserByCategory': `التصفح حسب الفئه`,
      'Categories': `فئات`,
      'Price': `سعر`,
      'AppStore': 'متجر البرامج',
      'Home': 'الرئيسية',
      'ContactUs': 'التواصل  معنا',
      'ContactUSGreeting': 'السلام عليكم',
      'ContactUSGreeting2': 'نود أن نسمع منك',
      'name': 'أسم',
      'email': 'البريد الإلكتروني',
      'Choice1': 'لدي مشكلة',
      'Choice2': 'لدي ردود فعل',
      'Choice3': 'لدي اقتراح',
      'Choice4': 'أريد التعاون',
      'SubjectTitle': 'عنوان الموضوع',
      'Message': 'الرساله',
      'NameRequired': 'من فضلك الأسم',
      'EmailRequired': 'البريد الاكتروني مطلوب',
      'SubjectRequired': 'الموضوع مطلوب',
      'MessageRequired': 'الرساله مطلوبه',
      'Minimum': 'أقل عدد ثلاث أحرف',
      'InvalidEmail': 'يجب كتابته بصيغة البريد الالكتروني',
      'SubjectMinimum': 'أقل عدد خمسة أحرف',
      'MessageMinimum': 'أقل عدد عشرة احرف',
      'ContactInfo': 'معلومات الاتصال لدينا',
      'ContactInfoEmail': 'بريدنا الاكتروني',
      'ContactInfoPhoneNumber': 'رقم الهاتف الخاص بنا',
      'ContactInfoFacebook': 'حساب الفيس بوك',
      'ContactInfoYoutube': 'قناة اليوتيوب',

      'quraaninfo': 'قران',
      'tajweed': 'تجويد',
      'relatedappsinfo': 'التطبيقات ذات الصلة',
      'you': 'قد يعجبك ايضا',
      'submit': 'أرسال',

      'Homeside': 'الأساسية',
      'Apside': 'التطبيقات',
      'contactside': 'تواصل معنا',
      'policyside': 'السياسات',
      'All': 'الكل',
      'Free': 'مجاني',
      'Paid': 'مدفوع',
      'Search': 'بحث',
      'appstore': 'متجر التطبيقات',
      "Details": "المزيد من التفاصيل",
      "WhatsNew": "ما الجديد",
      "Appdescription": 'وصف التطبيق',
      "AppInfo": "معلومات التطبيق",
      "AppArchitecture": "هندسة التطبيق",
      "AppPackageName": "أسم مجموعة التطبيق",
      "AppReleaseDate": "تاريخ اصدار التطبيق",
      "AppUbdateDate": "تاريخ تحديث التصدير",
      "AppLanguage": "لغة التطبيق",
      "AppRequired": "المطلوب للتشغيل",
      "AppVersion": "نسخة التطبيق",
      "AppSize": "حجم التطبيق",
      "GetItOn": "التنزيل من"
    }
  },
  ur: {
    translation: {
      'IntroTitle': 'اسلامی امت کے لئے موبائل ایپلیکیشن!',
      'Intro1': `Deenbook Inc اسلامی موبائل ایپلیکیشنز اور مسلمان امت کے لئے آسانیوں کا فراہم کنندہ ہے۔`,
      'Intro2': `ہمارا مقصد اسلامی کمیونٹی کی خدمت کرنا ہے، جو تکنیکی استعداد کو کلاسیکی اسلامی سائنس اور فقہ کے ساتھ ملا کر روزمرہ کی استعمال کے لئے مفید ایپلیکیشنز فراہم کرتا ہے۔`,
      'LastApps': 'ہماری تازہ ترین ایپلیکیشنز',
      'LastAppsViewAll': 'سب دیکھیں',
      'BrowserByCategory': `زمرہ کے مطابق براؤز کریں`,
      'Categories': 'زمرے',
      'Price': 'قیمت',
      'AppStore': 'ایپ سٹور',
      'Home': 'گھر',
      'ContactUs': 'ہم سے رابطہ کریں',
      'ContactUSGreeting': 'السلام علیکم',
      'ContactUSGreeting2': 'ہمیں آپ سے ملنا پسند ہے',
      'name': 'نام',
      'email': 'ای میل',
      'Choice1': 'میرے پاس ایک مسئلہ ہے',
      'Choice2': 'میرے پاس ایک فیڈبیک ہے',
      'Choice3': 'میرے پاس ایک تجاویز ہیں',
      'Choice4': 'میں تعاون کرنا چاہتا ہوں',
      'SubjectTitle': 'موضوع کا عنوان',
      'Message': 'پیغام',
      'NameRequired': 'نام ضروری ہے',
      'EmailRequired': 'ای میل ضروری ہے',
      'SubjectRequired': 'موضوع ضروری ہے',
      'MessageRequired': 'پیغام ضروری ہے',
      'Minimum': 'کم از کم لمبائی 3 ہے',
      'InvalidEmail': 'غلط ای میل',
      'SubjectMinimum': 'کم از کم لمبائی 5 ہے',
      'MessageMinimum': 'کم از کم لمبائی 10 ہے',
      'ContactInfo': 'ہماری رابطہ کی معلومات',
      'ContactInfoEmail': 'ای میل',
      'ContactInfoPhoneNumber': 'فون نمبر',
      'ContactInfoFacebook': 'فیس بک',
      'ContactInfoYoutube': 'یوٹیوب',

      'quraaninfo': 'قرآن مجید',
      'tajweed': 'تجوید',
      'relatedappsinfo': 'متعلقہ ایپلیکیشنز',
      'you': 'شاید آپ کو بھی پسند آئیں',
      'submit': 'جمع کریں',

      'Homeside': 'ہوم',
      'Apside': 'ایپس',
      'contactside': 'ہم سے رابطہ کریں',
      'policyside': 'پالیسی',
      'Contact': 'رابطہ کریں۔',
      'All': 'سب',
      'Free': 'مفت',
      'Paid': 'ادائیگی',
      'Search': 'تلاش',
      'appstore': "ایپ اسٹور",
      "Details": "مزید تفصیلات",
      "WhatsNew": "نیا کیا ہے",
      "Appdescription": 'ایپ کی تفصیل',
      "AppInfo": "ایپ کی معلومات",
      "AppArchitecture": "ایپ آرکیٹیکچر",
      "AppPackageName": "ایپ پیکیج کا نام",
      "AppReleaseDate": "ایپ کی ریلیز کی تاریخ",
      "AppUbdateDate": "ایپ اپ ڈیٹ کی تاریخ",
      "AppLanguage": "ایپ کی زبان",
      "AppRequired": "ایپ درکار ہے۔",
      "AppVersion": "ایپ ورژن",
      "AppSize": "ایپ کا سائز",
      "GetItOn": "ڈاؤن لوڈ"
    }

  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false
    }, react: {
      useSuspense: true
    }
  })

export default i18n
