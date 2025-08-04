# 🚀 Modern Authentication System

A beautiful, responsive signup/signin web application built with Express.js, MongoDB, and advanced 3D CSS animations.

![Authentication System](https://img.shields.io/badge/Status-Active-success)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)
![CSS3](https://img.shields.io/badge/CSS3-Advanced-orange)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Horizontal Form Layout** - Professional side-by-side design with optimal space utilization
- **Glass-morphism Effects** - Advanced backdrop blur and transparency with multi-layered shadows
- **3D Animations** - Smooth transitions, hover effects, and interactive elements
- **Responsive Design** - Seamlessly adapts from desktop to mobile devices
- **Character Animations** - Floating rocket and sparkle character with 3D rotations

### 🔐 **Authentication Features**
- **User Registration** - Secure account creation with username, email, and password
- **User Login** - Safe authentication with session management
- **Input Validation** - Client-side and server-side validation
- **Error Handling** - User-friendly error messages with animated displays
- **Duplicate Prevention** - Prevents duplicate usernames and emails

### 🎭 **Visual Elements**
- **Animated Backgrounds** - Floating shapes with rotating animations
- **Interactive Forms** - 3D input transformations on focus
- **Shimmer Effects** - Animated gradient borders and button hover states
- **Professional Icons** - Emoji-based iconography with 3D bounce animations
- **Success Pages** - Celebration animations after successful authentication

## 🏗️ Project Structure

```
signup_app/
├── 📁 models/
│   └── User.js              # MongoDB user schema
├── 📁 views/
│   ├── home.ejs            # Landing page with feature showcase
│   ├── signin.ejs          # Horizontal signin form
│   ├── signup.ejs          # Horizontal signup form
│   └── succesfully_signin.ejs  # Success confirmation page
├── server.js               # Express.js server and routes
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or cloud instance)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mandvisah/signup_app.git
   cd signup_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   ```bash
   # Start MongoDB service (if using local installation)
   mongod
   
   # Or configure your MongoDB connection string in server.js
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Dependencies

### Core Dependencies
```json
{
  "express": "^4.18.x",
  "mongoose": "^7.x.x",
  "ejs": "^3.1.x",
  "body-parser": "^1.20.x"
}
```

### Development Dependencies
```json
{
  "nodemon": "^3.0.x"
}
```

## 🎯 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/` | Home page | - |
| `GET` | `/signin` | Signin form | - |
| `GET` | `/signup` | Signup form | - |
| `POST` | `/signin` | User login | `username`, `password` |
| `POST` | `/signup` | User registration | `username`, `email`, `password` |

### Response Formats

**Successful Signup/Signin:**
```javascript
// Redirects to success page
res.render('succesfully_signin', { username: user.username });
```

**Error Response:**
```javascript
// Renders form with error message
res.render('signin', { error: 'Invalid credentials' });
res.render('signup', { error: 'Username already exists' });
```

## 🎨 UI Components

### Form Design Features

#### **Horizontal Layout**
- Left panel: Branding, icon, and descriptive text
- Right panel: Form inputs and action buttons
- Responsive breakpoints for mobile adaptation

#### **3D Visual Effects**
```css
/* Glass-morphism card */
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(40px);
border: 2px solid rgba(255, 255, 255, 0.18);

/* Multi-layered shadows */
box-shadow: 
    0 25px 60px rgba(0, 0, 0, 0.15),
    0 10px 30px rgba(102, 126, 234, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
```

#### **Interactive Elements**
- **Input Focus**: 3D lift with colored shadows and scaling
- **Button Hover**: Gradient transitions with shimmer effects
- **Icon Animations**: Bounce and rotation with multi-color shadows

### Responsive Breakpoints

| Device | Width | Layout |
|--------|--------|--------|
| Desktop | 1024px+ | Full horizontal layout |
| Tablet | 768px-1024px | Reduced spacing |
| Mobile | <768px | Vertical stacking |
| Small Mobile | <480px | Compact layout |

## 🗄️ Database Schema

### User Model
```javascript
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Install dependencies
npm install
```

### Code Structure

#### **Server Configuration** (`server.js`)
- Express.js setup with middleware
- MongoDB connection via Mongoose
- EJS view engine configuration
- Route handlers for authentication

#### **Database Models** (`models/User.js`)
- Mongoose schema definition
- Validation rules and constraints
- Index configuration for performance

#### **View Templates** (`views/*.ejs`)
- Responsive HTML templates
- Advanced CSS3 animations
- Client-side form validation
- Error message displays

## 🎭 Animation Details

### Character Animations
```css
/* Floating rocket with 3D rotation */
@keyframes characterRotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

/* Form icon bounce effect */
@keyframes iconBounce {
    0%, 100% { transform: translateZ(0px) scale(1); }
    50% { transform: translateZ(18px) scale(1.08); }
}
```

### Background Effects
- **Floating Shapes**: Multi-directional movement with rotation
- **Gradient Shimmer**: Animated color transitions on borders
- **Glass Blur**: Dynamic backdrop filter effects

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 88+ | ✅ Full |
| Firefox | 85+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 88+ | ✅ Full |

## 🔧 Configuration

### Environment Variables
```bash
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/signup_app

# Server Port
PORT=3000

# Session Secret (for future sessions)
SESSION_SECRET=your_secret_key_here
```

### Customization Options

#### **Color Scheme**
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
--primary-blue: #667eea;
--primary-purple: #764ba2;
--accent-pink: #f093fb;
```

#### **Animation Timing**
```css
/* Form entrance */
animation: cardSlideIn 1s ease-out;

/* Icon bounce */
animation: iconBounce 2s ease-in-out infinite;

/* Character rotation */
animation: characterRotate 4s linear infinite;
```

## 🚧 Future Enhancements

### Planned Features
- [ ] **Password Reset** - Email-based password recovery
- [ ] **Email Verification** - Account activation via email
- [ ] **Social Login** - Google, GitHub, Facebook integration
- [ ] **Profile Management** - User dashboard and settings
- [ ] **2FA Authentication** - Two-factor authentication
- [ ] **Password Strength** - Real-time password validation
- [ ] **Session Management** - Secure session handling
- [ ] **Admin Panel** - User management interface

### Technical Improvements
- [ ] **Input Sanitization** - Enhanced security measures
- [ ] **Rate Limiting** - API request throttling
- [ ] **Logging System** - Error and access logging
- [ ] **Unit Testing** - Comprehensive test suite
- [ ] **Docker Support** - Containerization
- [ ] **CI/CD Pipeline** - Automated deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mandvi Sharma**
- GitHub: [@Mandvisah](https://github.com/Mandvisah)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Inter Font Family** - Google Fonts
- **CSS3 Animations** - Modern browser capabilities
- **MongoDB** - Database solution
- **Express.js** - Web framework
- **EJS** - Templating engine

## 📸 Screenshots

### Desktop View
- Horizontal form layout with side-by-side panels
- Advanced 3D animations and glass-morphism effects
- Professional color scheme with gradient backgrounds

### Mobile View
- Responsive vertical stacking
- Optimized touch interactions
- Maintained visual hierarchy

### Interactive States
- Form focus effects with 3D transformations
- Button hover states with shimmer animations
- Error message displays with slide-in effects

---

<div align="center">

**Built with ❤️ and lots of CSS animations**

[⭐ Star this repo](https://github.com/Mandvisah/signup_app) | [🐛 Report Issues](https://github.com/Mandvisah/signup_app/issues) | [💬 Discussions](https://github.com/Mandvisah/signup_app/discussions)

</div>
