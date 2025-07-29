// 🔧 CLEANUP SCRIPT: Remove Duplicates and Organize Files in a JS Project
// This is a Node.js script to help clean your project directory

const fs = require('fs');
const path = require('path');

const ROOT_DIR = './'; // start from root of project
const visited = new Set();
const duplicates = [];

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.git') return; // skip
      walk(filepath);
    } else {
      const key = file.toLowerCase();
      if (visited.has(key)) {
        duplicates.push(filepath);
      } else {
        visited.add(key);
      }
    }
  });
}

function deleteDuplicates() {
  duplicates.forEach(file => {
    fs.unlinkSync(file);
    console.log(`🗑️ Deleted duplicate: ${file}`);
  });
}

function organizeFolders() {
  const folders = ['components', 'pages', 'public', 'utils', 'config'];
  folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
      console.log(`📁 Created folder: ${folder}`);
    }
  });
}

console.log('🚀 Cleaning project...');
walk(ROOT_DIR);
deleteDuplicates();
organizeFolders();
console.log('✅ Cleanup complete.');
