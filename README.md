# 🍽️ Grilli - Premium Restaurant Website

A modern, responsive restaurant website built with React and Vite. Featuring a stunning UI design, dynamic menu powered by Supabase, and smooth animations for an exceptional user experience.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## 🌐 Live Demo

👉 **[View Live Site](https://Siddharth-Lokhande.github.io/resto)**

---

## ✨ Features

### 🎨 Premium UI/UX
- **Hero Slider** - Auto-sliding hero section with stunning food imagery
- **Parallax Effects** - Smooth parallax animations on scroll and mouse movement
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern Aesthetics** - Dark theme with golden accents for a luxury restaurant feel

### 🍔 Dynamic Menu
- **Supabase Integration** - Menu items fetched dynamically from Supabase database
- **Search Functionality** - Real-time search to filter menu items
- **Add to Cart** - Interactive cart system with item management
- **Loading States** - Smooth loading indicators for better UX

### 📋 Key Sections
- **Home** - Welcoming hero with call-to-action buttons
- **Services** - Breakfast, Appetizers, and Drinks categories
- **About** - Restaurant story and contact information
- **Special Dish** - Featured dish highlight with pricing
- **Menu** - Dynamic food menu with search and cart
- **Testimonials** - Customer reviews section
- **Reservation** - Online table booking form
- **Features** - Why choose us section
- **Events** - Upcoming events and updates
- **Footer** - Newsletter subscription and social links

### 🛒 Shopping Cart
- Add/remove items from cart
- Quantity management
- Tax calculation (10%)
- Stripe payment integration ready

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Vite** | Build tool & dev server |
| **Supabase** | Backend database |
| **CSS3** | Custom styling |
| **Ionicons** | Icon library |
| **gh-pages** | Deployment |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Siddharth-Lokhande/resto.git
   cd resto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📁 Project Structure

```
grilli/
├── public/
│   └── assets/
│       └── images/          # Static images
├── src/
│   ├── components/
│   │   ├── Cart.jsx         # Shopping cart component
│   │   ├── Item.jsx         # Menu item card
│   │   ├── Menu.jsx         # Menu section with search
│   │   └── Panel.jsx        # Side panel component
│   ├── context/             # React context providers
│   ├── pages/
│   │   └── Home.jsx         # Main homepage
│   ├── utils/
│   │   └── supabase.js      # Supabase client config
│   ├── App.jsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🗄️ Database Schema

### food_items Table

| Column | Type | Description |
|--------|------|-------------|
| id | int8 | Primary key |
| alt | text | Image alt text |
| title | text | Item name |
| price | text | Item price |
| badge | text | Special badge (e.g., "Seasonal") |
| description | text | Item description |
| img_name | text | Image filename |

---

## 📸 Screenshots

### Hero Section
Beautiful full-screen hero slider with captivating food imagery

### Menu Section
Dynamic menu with search functionality and add-to-cart feature

### Reservation Form
Easy-to-use online booking form for table reservations

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Siddharth Lokhande**

- GitHub: [@Siddharth-Lokhande](https://github.com/Siddharth-Lokhande)

---

## 🙏 Acknowledgments

- Original design inspiration by [codewithsadee](https://github.com/codewithsadee)
- [Ionicons](https://ionic.io/ionicons) for beautiful icons
- [Supabase](https://supabase.com) for backend services

---

<p align="center">
  Made with ❤️ and React
</p>
