# 🎓 Gyan Nova - Quick Start Guide

## 🚀 Server is Running!

Your Gyan Nova application is now hosted locally at:

### 📍 **Main URL:** http://localhost:8000

---

## 📱 Available Pages

| Page | URL | Description |
|------|-----|-------------|
| 🏠 **Home** | http://localhost:8000/ | Landing page with overview |
| 📊 **Dashboard** | http://localhost:8000/dashboard.html | Main dashboard |
| 📚 **Learning** | http://localhost:8000/learning.html | Interactive learning interface |
| 📈 **Progress** | http://localhost:8000/progress.html | Analytics and insights |

---

## 👥 Student Profiles

### 🌱 **Ram** (Weak/Foundational Student)
- **Profile Type:** Foundational
- **Learning Style:** Step-by-step guidance
- **AI Behavior:** Patient and encouraging
- **Best For:** Students who need more support

### 🚀 **Rahul** (Strong/Advanced Student)
- **Profile Type:** Advanced
- **Learning Style:** Fast-paced, challenging
- **AI Behavior:** Strict evaluation
- **Best For:** Students ready for advanced concepts

---

## 📚 Content Coverage

### **Grades:** 6, 7, 8, 9, 10, 11, 12

### **Subjects:**
- 📐 **Mathematics** (500+ questions)
- 🔬 **Science** (Physics, Chemistry, Biology)
- 📖 **English** (Grammar, Literature)
- 🌍 **Social Studies** (History, Geography, Civics)

### **Questions Per Chapter:** 10+

---

## 🔍 New Features

### **Syllabus Search**
- Search for any NCERT topic
- Google search integration
- Local database search
- Quick topic navigation

### **How to Use:**
1. Type your topic in the search bar
2. Press Enter or click Search
3. View results from local database
4. Click on a topic to start learning
5. Or view Google search results in new tab

---

## 🎯 How to Get Started

### **Step 1: Choose Your Profile**
- Select Ram (Foundational) or Rahul (Advanced)

### **Step 2: Select Your Class**
- Choose from Class 6 to Class 12

### **Step 3: Pick a Subject**
- Mathematics, Science, English, or Social Studies

### **Step 4: Choose a Topic**
- Browse available topics for your selection

### **Step 5: Start Learning**
- **📝 Quiz Mode:** Practice with instant feedback
- **📖 Notes Mode:** Read concept summaries
- **🤔 Doubt Mode:** Ask the AI tutor

---

## ⚙️ Server Controls

### **To Stop the Server:**
Press `Ctrl + C` in the terminal

### **To Restart the Server:**
```bash
python serve.py
```

### **Alternative Servers:**

**Python Simple Server:**
```bash
python -m http.server 8000
```

**Node.js Server:**
```bash
npx http-server -p 8000 -o
```

---

## 🌐 Deployment Options

### **Deploy to Vercel:**
```bash
vercel
```

### **Deploy to Netlify:**
```bash
netlify deploy
```

### **Deploy to GitHub Pages:**
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Select main branch

---

## 📊 Statistics

- **Total Questions:** 500+
- **Grades Covered:** 6-12 (7 grades)
- **Subjects:** 4 major subjects
- **Topics:** 100+ topics
- **NCERT Aligned:** ✅ Yes

---

## 🆘 Troubleshooting

### **Port Already in Use:**
- Close other applications using port 8000
- Or change PORT in `serve.py`

### **Browser Doesn't Open:**
- Manually visit http://localhost:8000

### **Content Not Loading:**
- Check if `content_data.js` exists
- Refresh the browser (Ctrl + F5)

### **Search Not Working:**
- Ensure JavaScript is enabled
- Check browser console for errors

---

## 📞 Quick Help

### **File Locations:**
- **Questions Database:** `content_data.js`
- **Main Pages:** `*.html` files
- **Server Script:** `serve.py`
- **Documentation:** `README.md`

### **Key Features:**
- ✅ Adaptive learning
- ✅ Dual profiles (Ram/Rahul)
- ✅ Syllabus search
- ✅ Progress tracking
- ✅ AI-powered quizzes

---

## 🎉 You're All Set!

**Your Gyan Nova application is ready to use!**

Visit: **http://localhost:8000**

Happy Learning! 📚✨

---

**Made with ❤️ for Indian Students**
