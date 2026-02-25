# Chatbot Flow Builder – Test Cases

---

## 1. Drag and Drop Node

**Steps:**
1. Open application
2. Drag "Message" node from left panel
3. Drop on canvas

**Expected Result:**
- A new node appears on the canvas
- Default text: "Text Message"

---

## 2. Connect Two Nodes

**Steps:**
1. Create two nodes
2. Drag from source handle of Node A
3. Connect to target handle of Node B

**Expected Result:**
- An edge is created between nodes

---

## 3. Restrict Multiple Outgoing Edges

**Steps:**
1. Create three nodes
2. Connect Node A → Node B
3. Try connecting Node A → Node C

**Expected Result:**
- Alert appears: "Source already connected!"
- Second edge is not created

---

## 4. Edit Node Text

**Steps:**
1. Click on a node
2. Settings panel opens
3. Change text in input field

**Expected Result:**
- Node text updates instantly on canvas

---

## 5. Save Validation – Invalid Case

**Steps:**
1. Create 3 nodes
2. Do NOT connect them
3. Click Save

**Expected Result:**
- Alert: "Error: More than one node has empty target handles"

---

## 6. Save Validation – Valid Case

**Steps:**
1. Create a proper chain (A → B → C)
2. Click Save

**Expected Result:**
- Alert: "Flow Saved Successfully!"

---

## 7. Back Button in Settings Panel

**Steps:**
1. Click on a node
2. Click "← Back"

**Expected Result:**
- Settings panel closes
- Nodes panel reappears