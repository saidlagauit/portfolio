# Portfolio Next.js 🚀

Modern portfolio website built with Next.js 14, Tailwind CSS, and Lucide React icons.

## 📁 Structure / البنية

```
portfolio-project/
├── app/
│   ├── layout.jsx        # Layout رئيسي
│   ├── page.jsx          # الصفحة الرئيسية
│   └── globals.css       # Styles عامة
├── components/
│   ├── AnimatedBackground.jsx  # الخلفية المتحركة
│   ├── Header.jsx             # العنوان
│   ├── Hero.jsx               # Hero section
│   ├── Projects.jsx           # المشاريع
│   ├── SocialLinks.jsx        # الروابط الاجتماعية
│   ├── Contact.jsx            # معلومات الاتصال
│   └── Footer.jsx             # Footer
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Installation / التثبيت

### 1. Install dependencies / ثبت الحزم:
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

### 2. Run development server / شغل السيرفر:
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

### 3. Open browser / افتح المتصفح:
افتح [http://localhost:3000](http://localhost:3000)

## ✏️ Customization / التخصيص

### 1. **Personal Info / معلوماتك الشخصية:**
غير في `components/Hero.jsx`:
- اسمك / Your name
- عنوانك / Your title
- وصفك / Your description

### 2. **Projects / المشاريع:**
غير في `components/Projects.jsx`:
- أضف/حذف مشاريعك
- غير الأيقونات والوصف

### 3. **Social Links / الروابط الاجتماعية:**
غير في `components/SocialLinks.jsx`:
- أضف روابط حساباتك الحقيقية

### 4. **Contact / الاتصال:**
غير في `components/Contact.jsx`:
- الإيميل ديالك
- رابط Cal.com ديالك

### 5. **Colors / الألوان:**
غير الألوان في `tailwind.config.js` أو مباشرة في الكومبونونتات

## 🎨 Features / المميزات

- ✨ Animated background / خلفية متحركة
- 🎯 Smooth animations / حركات سلسة
- 📱 Fully responsive / متجاوب مع كل الشاشات
- 🌙 Dark theme / ثيم داكن
- 🎨 Modern design / تصميم عصري
- ⚡ Fast performance / أداء سريع

## 🛠️ Technologies / التقنيات

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React Icons

## 📦 Build for production / البيلد للإنتاج

```bash
npm run build
npm run start
```

## 📝 Notes / ملاحظات

- كل كومبونونت منفصل وسهل التعديل
- استعمل Tailwind CSS للستايل
- الأيقونات من Lucide React
- الخطوط من Google Fonts

---

Built with ❤️ by Your Name
