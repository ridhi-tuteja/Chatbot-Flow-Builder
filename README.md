# 📌 Chatbot Flow Builder

## 🧠 Project Overview

Chatbot Flow Builder is a visual flow editor built using React and React Flow.  
It allows users to create chatbot conversation flows by dragging and dropping message nodes and connecting them visually.

Users can:
- Drag message nodes onto the canvas
- Connect nodes using edges
- Edit message text using a settings panel
- Validate flow structure before saving

This project demonstrates frontend architecture, state management, flow validation logic, and component-based testing.

---

# 🚀 Hosted Application

🔗 Live Demo:  
[(https://chatbot-flow-builder-tan-one.vercel.app/)]

---

# 🛠 Technology Stack

## Frontend
- React 19
- React Flow
- Vite
- UUID
- CSS (inline styling)

## Testing
- Vitest
- React Testing Library
- Jest DOM

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

git clone https://github.com/ridhi-tuteja/chatbot-flow-builder.git  
cd chatbot-flow-builder  

## 2️⃣ Install Dependencies

npm install  

## 3️⃣ Run Development Server

npm run dev  

Application runs at:
http://localhost:5173

---

# 🧪 Running Tests

Run all tests:

npm test  

Run tests with coverage:

npx vitest run --coverage  

---

# 📖 Application Usage (Frontend Guide)

## Step 1: Add Node
- Drag the "Message" node from the left panel.
- Drop it onto the canvas.

## Step 2: Connect Nodes
- Drag from the bottom handle of one node.
- Connect it to the top handle of another node.

## Step 3: Edit Node Text
- Click on a node.
- Settings panel appears.
- Modify the message text.
- Changes update instantly.

## Step 4: Flow Validation
- Flow ensures only one root node exists.
- Prevents invalid connections.

---

# 🏗 Project Structure

chatbot-flow-builder/

src/
-nodes/
  -Textnode.jsx
- components/
  - NodesPanel.jsx
  - SettingsPanel.jsx
- utils/
  - flowValidation.js
- App.jsx

__tests__/
- NodesPanel.test.jsx
- SettingsPanel.test.jsx
- flowValidation.test.js

package.json  
README.md  

---

# 🧩 Flow Validation Logic

Flow validation ensures:

- Only one starting node (root node)
- Proper edge connections
- No disconnected segments

Test cases include:
- Valid single node flow
- Valid chained flow
- Invalid multiple root nodes

---

# 🌐 Deployment Instructions

## Deploy to Vercel

1. Push project to GitHub
2. Go to https://vercel.com
3. Import repository
4. Click Deploy

Build Command:
npm run build  

Output Directory:
dist  

---

# 📈 Future Improvements

- Multiple node types (Condition, Delay, API call)
- Save flow to database
- Export/Import JSON
- UI improvements with TailwindCSS
- Authentication system

---

# 👩‍💻 Author

Ridhi Teja

---

# 🏁 Conclusion

This project demonstrates:

- React component architecture
- Drag-and-drop UI building
- Real-time state updates
- Flow validation logic
- Component & logic testing
- Scalable architecture for backend integration
