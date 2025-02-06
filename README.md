# MoodCheck

MoodCheck საშუალებას გაძლევთ შეაფასოთ თქვენი დღე 5-ქულიანი სისტემით, დაამატოთ დახასიათება და შეინახოთ Firebase-ის სერვერზე, რომელიც მორგებულია თქვენს ანგარიშზე. გვერდს ასევე აქვს დამატებითი ფუნქციები, როგორიცაა სტატისტიკა და ხუმრობები.

## 🔗 [MoodCheck](https://mood-check.vercel.app/) - დაიწყეთ ახლავე!

---

## 📌 გამოყენებული ხელსაწყოები

- **Firebase** - ბექენდისთვის (ინფორმაციის შენახვა, წამოღება, აუთენტიფიკაცია და ავტორიზაცია)
- **API** - [API Ninjas](https://api.api-ninjas.com) (ხუმრობების API, გამოყენებულია Custom Hook - useGetJoke.js Axios-ით)
- **React Hooks** (useState, useEffect, Custom Hooks)

---

## ⚙️ Custom Hooks

### `useGetJoke.js` - ხუმრობის API
![useGetJoke](https://github.com/user-attachments/assets/de85b928-3d79-45af-8e5f-2ac77d9c87db)

### `useHover.js` - About Us გვერდზე მაუსის გადატარების ეფექტი
![useHover](https://github.com/user-attachments/assets/71eb6489-e3c8-4881-a335-9c024ad817f0)

### `useLocalStorage.js` - (ამჟამად არ გამოიყენება Vercel-ის შეცდომების გამო)

### `useMediaQuery.js` - მოწყობილობის ზომის ამოცნობა (არ გამოიყენება Vercel-ის შეცდომების გამო)
![useMediaQuery](https://github.com/user-attachments/assets/7afb3c8c-0cfb-4265-819f-6ff1f8c4615e)

---

## 💾 LocalStorage
**LocalStorage** გამოიყენება **Header.js**-ში, რათა შეინახოს მომხმარებლის თემა (Dark/Light mode).
**LocalStorage** გამოიყენება useAuth-ში, რათა უკვე შესული მომხმარებლები დაიმახსოვროს და არ მოუწიოთ ყოველთვის ხელახლა შესვლა.
---

## 🎨 Animations
საიტზე სხვადასხვა გვერდზე შეხვდებით ჰოვერზე მოქმედ, გადაბმულ ანიმაციებს.

---

## 🚀 პროექტის გაშვება

```bash
# 1. Repository-ის დაკლონირება
$ git clone https://github.com/KlasniMisho123/MoodCheck.git

# 2. პროექტის დირექტორიაში გადასვლა
$ cd MoodCheck

# 3. საჭირო პაკეტების დაინსტალირება
$ npm install
```

### 🔑 .env ფაილის შექმნა (Firebase და API გასაღებები)

```ini
NEXT_PUBLIC_API_KEY=თქვენი_გასაღები
NEXT_PUBLIC_AUTH_DOMAIN=თქვენი_გასაღები
NEXT_PUBLIC_PROJECT_ID=თქვენი_გასაღები
NEXT_PUBLIC_STORAGE_BUCKET=თქვენი_გასაღები
NEXT_PUBLIC_MESSAGING_SENDER_ID=თქვენი_გასაღები
NEXT_PUBLIC_APP_ID=თქვენი_გასაღები
NEXT_PUBLIC_JOKE_API_KEY=თქვენი_გასაღები
```

### ▶️ პროექტის გაშვება
```bash
$ npm run dev
```

---

📢 **MoodCheck** - შეაფასე შენი დღე და შეინახე ემოციები! 🎭

















































































