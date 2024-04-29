import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "IntroTitle": "Mobile Application For The Ummah!",
            "Intro1": `Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.`,
            "Intro2": `Our aim is to serve the islamic Community by combining Technical Acumen with Classical Islamic Science
            and Juriprudence to deliver Useful Applications for everyday use`,
            "LastApps": "Our latest apps",
            "LastAppsViewAll": "View All",
            "BrowserByCategory": `Browser by category`,
            "Categories": "Categories",
            "Price": "Kategoriler",
            "AppStore": "App Store",
            "Home": "Home",
            "ContactUs": "Contact Us",
            "ContactUSGreeting": "Assalamu Alaykum",
            "ContactUSGreeting2": "We would like to hear from you",
            "name": "name",
            "email": "email",
            "Choice1": "I have an issue",
            "Choice2": "I have a feedback",
            "Choice3": "I have a suggestion",
            "Choice4": "I want to collaborate",
            "SubjectTitle": "Subject title",
            "Message": "Message",
            "NameRequired": "name is required",
            "EmailRequired": "email is required",
            "SubjectRequired": "subject required",
            "MessageRequired": "message required",
            "Minimum": "min length is 3",
            "InvalidEmail": "invalid email",
            "SubjectMinimum": "min lenght is 5",
            "MessageMinimum": "min lenght is 10",
            "ContactInfo": "Our Contact Info",
            "ContactInfoEmail": "Email",
            "ContactInfoPhoneNumber": "Phone",
            "ContactInfoFacebook": "Facebbok",
            "ContactInfoYoutube": "Youtube"
        }
    },
    tr: {
        translation: {
            "IntroTitle": "Ümmet İçin Mobil Uygulama!",
            "Intro1": `Deenbook Inc, Müslüman Ümmeti için İslami Mobil Uygulamalar ve Yardımcı Programlar sağlayıcısıdır..`,
            "Intro2": `Amacımız Teknik Zekayı Klasik İslam Bilimiyle birleştirerek İslam Toplumuna hizmet etmektir.
            ve Günlük kullanım için Faydalı Uygulamalar sunmak için İçtihat`,
            'LastApps': "En yeni uygulamalarımız",
            "LastAppsViewAll": "Hepsini gör",
            "BrowserByCategory": `Kategoriye göre tarayıcı`,
            "Categories": "Kategoriler",
            "Price": "Fiyat",
            "AppStore": "Uygulama mağazası",
            "Home": "yuva",
            "Contact": "Bize Ulaşın",
            "ContactUSGreeting": "Assalamu Alaykum",
            "ContactUSGreeting2": "Sizden haber almak istiyoruz",
            "name": "isim",
            "email": "e-posta",
            "Choice1": "bir sorunum var",
            "Choice2": "bir geri bildirimim var",
            "Choice3": "bir önerim var",
            "Choice4": "İşbirliği yapmak istiyorum",
            "SubjectTitle": "Konu başlığı",
            "Message": "İleti",
            "NameRequired": "İsim gerekli",
            "EmailRequired": "Email gereklidir",
            "SubjectRequired": "Konu gerekli",
            "MessageRequired": "Mesaj gerekli",
            "Minimum": "minimum uzunluk 3",
            "InvalidEmail": "Geçersiz e-posta",
            "SubjectMinimum": "minimum uzunluk 5",
            "MessageMinimum": "minimum uzunluk 10",
            "ContactInfo": "İletişim bilgilerimiz",
            "ContactInfoEmail": "E-postamız",
            "ContactInfoPhoneNumber": "Telefon Numaramız",
            "ContactInfoFacebook": "Facebook hesabımız",
            "ContactInfoYoutube": "Youtube kanalımız"
        }
    },
    ar: {
        translation: {
            "IntroTitle": "تطبيقات الهاتف المتحرك للأمة",
            "Intro1": `شركة دين بوك هي شركة تطبيقات الهاتف المحمول الإسلامية للأمة الإسلامية`,
            "Intro2": `هدفنا هو خدمة المجتمع من خلال الجمع بين الذكاء التقني و العلوم الإسلاميه الكلاسيكيه و الفقه لتقديم تطبيقات مفيدة للاستخدام اليومي `,
            "LastApps": `تطبيقاتنا الاخيره`,
            "LastAppsViewAll": "عرض الجميع",
            "BrowserByCategory": `المتصفح حسب الفئة`,
            "Categories": `فئات`,
            "Price": `سعر`,
            "AppStore": "متجر البرامج",
            "Home": "الرئيسية",
            "Contact": "التواصل  معنا",
            "ContactUSGreeting": "السلام عليكم",
            "ContactUSGreeting2": "نود أن نسمع منك",
            "name": "أسم",
            "email": "البريد الإلكتروني",
            "Choice1": "لدي مشكلة",
            "Choice2": "لدي ردود فعل",
            "Choice3": "لدي اقتراح",
            "Choice4": "أريد التعاون",
            "SubjectTitle": "عنوان الموضوع",
            "Message": "الرساله",
            "NameRequired": "من فضلك الأسم",
            "EmailRequired": "البريد الاكتروني مطلوب",
            "SubjectRequired": "الموضوع مطلوب",
            "MessageRequired": "الرساله مطلوبه",
            "Minimum": "أقل عدد ثلاث أحرف",
            "InvalidEmail": "يجب كتابته بصيغة البريد الالكتروني",
            "SubjectMinimum": "أقل عدد خمسة أحرف",
            "MessageMinimum": "أقل عدد عشرة احرف",
            "ContactInfo": "معلومات الاتصال لدينا",
            "ContactInfoEmail": "بريدنا الاكتروني",
            "ContactInfoPhoneNumber": "رقم الهاتف الخاص بنا",
            "ContactInfoFacebook": "حساب الفيس بوك",
            "ContactInfoYoutube": "قناة اليوتيوب"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;