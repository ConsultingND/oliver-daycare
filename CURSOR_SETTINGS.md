# ⚙️ Cursor IDE Settings Guide

## 🔄 Enable Auto-Save

### Quick Method (Keyboard Shortcut):
**Mac:** `Cmd + ,` (opens settings)  
**Windows/Linux:** `Ctrl + ,` (opens settings)

### Step-by-Step:

1. **Open Settings:**
   - Click **Cursor** menu (top left) → **Settings**
   - Or use keyboard: `Cmd + ,` (Mac) / `Ctrl + ,` (Windows/Linux)

2. **Search for Auto Save:**
   - In the search bar at the top, type: `auto save`

3. **Configure Auto Save:**
   - Find **"Files: Auto Save"**
   - Change from `off` to one of these options:

#### Auto Save Options:

- **`afterDelay`** (Recommended) ⭐
  - Saves automatically after you stop typing
  - Default delay: 1000ms (1 second)
  - Best for most workflows

- **`onFocusChange`**
  - Saves when you switch to another file or window
  - Good if you want more control

- **`onWindowChange`**
  - Saves when you switch to a different application
  - Most conservative option

4. **Set Auto Save Delay (Optional):**
   - Search for: `auto save delay`
   - Find **"Files: Auto Save Delay"**
   - Default: `1000` (1 second)
   - Adjust if needed (e.g., `500` for faster, `2000` for slower)

### Recommended Settings:
```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

---

## 🎯 Additional Recommended Settings for This Project

### 1. Format on Save
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 2. Auto Fix Linting Issues
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 3. TypeScript Settings
```json
{
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### 4. File Associations
```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

---

## 🚀 Apply All Recommended Settings at Once

1. Open Settings: `Cmd + ,` (Mac) or `Ctrl + ,` (Windows/Linux)
2. Click the **"Open Settings (JSON)"** icon (top right)
3. Add these settings:

```json
{
  // Auto Save
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  
  // Formatting
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  
  // Linting
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  
  // TypeScript
  "typescript.updateImportsOnFileMove.enabled": "always",
  
  // Tailwind CSS
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  
  // Next.js specific
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

4. Save and close

---

## 🔍 Verify Auto Save is Working

1. Open any file in your project
2. Make a small change (add a space)
3. Wait 1 second
4. Check the file tab - the dot (•) should disappear
5. ✅ Auto-save is working!

---

## 💡 Pro Tips

### Show Auto Save Status
- Look at the file tab
- **White dot (•)** = Unsaved changes
- **No dot** = Saved

### Disable Auto Save Temporarily
- Search: `auto save`
- Change to `off`
- Or use Command Palette: `Toggle Auto Save`

### Force Save Anytime
- **Mac:** `Cmd + S`
- **Windows/Linux:** `Ctrl + S`
- Still works even with auto-save enabled!

---

## 🎨 Bonus: Recommended Cursor Extensions

For Next.js/React development:

1. **ES7+ React/Redux/React-Native snippets**
   - Quick component scaffolding
   
2. **Tailwind CSS IntelliSense**
   - Auto-complete for Tailwind classes
   
3. **Prettier - Code formatter**
   - Consistent code formatting
   
4. **ESLint**
   - Catch errors as you type

5. **Path Intellisense**
   - Auto-complete file paths

---

## 🆘 Troubleshooting

### Auto Save Not Working?
1. Check if file is read-only
2. Ensure you have write permissions
3. Try closing and reopening Cursor
4. Check settings.json for typos

### Files Saving Too Frequently?
- Increase `files.autoSaveDelay` to `2000` or higher

### Want Manual Control?
- Set `files.autoSave` to `onFocusChange`
- Only saves when you switch files

---

## ✅ Quick Setup Checklist

- [ ] Open Cursor Settings (`Cmd + ,`)
- [ ] Search for "auto save"
- [ ] Set to "afterDelay"
- [ ] Set delay to 1000ms
- [ ] Test by editing a file
- [ ] Verify dot disappears after 1 second
- [ ] (Optional) Add other recommended settings

**Done!** Your Cursor IDE is now configured for optimal development. 🎉

