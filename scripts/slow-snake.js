const fs = require('fs');
const path = require('path');

const multiplier = Number(process.env.SNAKE_SPEED_MULTIPLIER || 2);
const file = path.join(process.cwd(), 'dist/github-contribution-grid-snake.svg');
const svg = fs.readFileSync(file, 'utf8');

const slower = svg.replace(
  /(animation:none(?: linear)? )(\d+)ms/g,
  (_, prefix, ms) => `${prefix}${Number(ms) * multiplier}ms`,
);

fs.writeFileSync(file, slower);
