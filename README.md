# 🎓 Gyan Nova - AI-Powered Adaptive Learning Platform

**Gyan Nova** is an intelligent, adaptive learning platform designed for students in grades **6-12**. It provides personalized learning experiences with AI-powered quizzes, concept notes, and doubt-solving capabilities.

## ✨ Key Features

### 📚 **Comprehensive Content Coverage**
- **Grades Supported:** 6, 7, 8, 9, 10, 11, and 12
- **Subjects:** Mathematics, Science, English, and Social Studies
- **NCERT-Aligned:** All content follows NCERT curriculum
- **10+ Questions per Chapter:** Extensive question bank for practice

### 👥 **Dual Student Profiles**
- **Ram (Foundational Learner):** 
  - Needs step-by-step guidance
  - Gets simpler explanations
  - AI provides encouraging, patient feedback
  - Adaptive difficulty adjustment

- **Rahul (Advanced Learner):**
  - Ready for challenging problems
  - Deep conceptual understanding
  - Strict AI evaluation
  - Fast-paced learning

### 🔍 **Syllabus Search**
- Integrated Google search for NCERT topics
- Quick topic navigation
- Local database search with instant results

### 🤖 **AI-Powered Features**
- **Adaptive Quizzes:** Questions adjust based on performance
- **Concept Notes:** Comprehensive topic summaries
- **Doubt Solver:** Ask questions and get instant AI help
- **Progress Tracking:** Detailed analytics and insights

### 📊 **Progress Analytics**
- Real-time performance tracking
- Subject-wise breakdown
- Streak counters and achievements
- Time management insights

## 🚀 Quick Start

### Option 1: Local Development Server (Recommended)

1. **Navigate to the project directory:**
   ```bash
   cd ideatron_gyannova
   ```

2. **Run the local server:**
   ```bash
   python serve.py
   ```
   
   The server will automatically:
   - Start on `http://localhost:8000`
   - Open your default browser
   - Display available pages

3. **Access the application:**
   - Home: http://localhost:8000/
   - Dashboard: http://localhost:8000/dashboard.html
   - Learning: http://localhost:8000/learning.html
   - Progress: http://localhost:8000/progress.html

### Option 2: Simple Python Server

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Option 3: Node.js Server

If you have Node.js installed:

```bash
npx http-server -p 8000 -o
```

### Option 4: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to deploy your application

The application is already configured with `vercel.json` for seamless deployment.

### Deploy to Netlify

1. **Drag and drop** the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages** in repository settings
3. Select the `main` branch as source

## 📁 Project Structure

```
ideatron_gyannova/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard
├── learning.html           # Learning interface
├── progress.html           # Progress analytics
├── content_data.js         # Question database (6-12)
├── main.js                 # Core JavaScript
├── serve.py                # Local development server
├── adaptive_learning_engine.py  # Python AI backend
├── resources/              # Images and assets
│   └── logo.png
├── functions/              # Serverless functions
└── vercel.json             # Deployment config
```

## 🎯 Usage Guide

### For Students

1. **Select Your Profile:**
   - Choose between Ram (Foundational) or Rahul (Advanced)
   - Profile determines AI behavior and difficulty

2. **Choose Your Class:**
   - Select from Class 6 to Class 12

3. **Pick a Subject:**
   - Mathematics
   - Science
   - English
   - Social Studies

4. **Select a Topic:**
   - Browse available topics for your class and subject

5. **Start Learning:**
   - **Quiz Mode:** Practice questions with instant feedback
   - **Notes Mode:** Read comprehensive concept summaries
   - **Doubt Mode:** Ask the AI tutor any question

### Search Functionality

Use the **Syllabus Search** bar to:
- Search for specific topics across all subjects
- Get Google search results for NCERT content
- Quick-navigate to topics in the local database

## 🛠️ Technical Details

### Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Animations:** Anime.js
- **Charts:** ECharts
- **Backend:** Python (Flask) for AI features
- **Deployment:** Vercel/Netlify ready

### Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

### Content Database

The `content_data.js` file contains:
- **Classes:** 6, 7, 8, 9, 10, 11, 12
- **Subjects:** 4 major subjects
- **Questions:** 10+ per topic
- **Total:** 500+ NCERT-aligned questions

## 📝 Customization

### Adding New Questions

Edit `content_data.js`:

```javascript
{
    "id": "unique_id",
    "topic": "Topic Name",
    "difficulty": 1-3,
    "question": "Your question?",
    "answer": "Correct answer",
    "solution": ["Step-by-step solution"],
    "hint": "Helpful hint"
}
```

### Changing Student Profiles

Modify the profile settings in `learning.html`:
- Search for `selectProfile` function
- Adjust AI behavior parameters
- Update profile descriptions

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- NCERT for curriculum guidelines
- OpenAI for AI capabilities
- Tailwind CSS for styling framework
- All contributors and testers

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Contact: support@gyannova.edu (placeholder)

---

**Made with ❤️ for Indian Students**

*Transforming education, one student at a time.*
