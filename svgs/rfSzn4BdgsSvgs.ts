/* eslint-disable  prefer-const */

const fs = require("fs");

export const baadges = [
  badge("BitBeast-RF-SZN4-Trophy-CHAMP-RARITY"),
  badge("BitBeast-RF-SZN4-Trophy-CHAMP-KINSHIP"),
  badge("BitBeast-RF-SZN4-Trophy-CHAMP-XP"),
  badge("BitBeast-RF-SZN4-Trophy-2ND-RARITY"),
  badge("BitBeast-RF-SZN4-Trophy-2ND-KINSHIP"),
  badge("BitBeast-RF-SZN4-Trophy-2ND-XP"),
  badge("BitBeast-RF-SZN4-Trophy-3RD-RARITY"),
  badge("BitBeast-RF-SZN4-Trophy-3RD-KINSHIP"),
  badge("BitBeast-RF-SZN4-Trophy-3RD-XP"),

  badge("BitBeast-RF-SZN4-Baadge-RAANKED"),
  badge("BitBeast-RF-SZN4-Baadge-TOP10-RARITY"),
  badge("BitBeast-RF-SZN4-Baadge-TOP10-KINSHIP"),
  badge("BitBeast-RF-SZN4-Baadge-TOP10-XP"),
  badge("BitBeast-RF-SZN4-Baadge-T100-RARITY"),
  badge("BitBeast-RF-SZN4-Baadge-T100-KINSHIP"),
  badge("BitBeast-RF-SZN4-Baadge-T100-XP"),
];

function stripSvg(svg: string) {
  // removes svg tag
  if (svg.includes("viewBox")) {
    svg = svg.slice(svg.indexOf(">") + 1);
    svg = svg.replace("</svg>", "");
  }
  return svg;
}

function readSvg(name: string) {
  return stripSvg(fs.readFileSync(`./svgs/sZN4Baadges/${name}.svg`, "utf8"));
}

function badge(name: string) {
  const svg = readSvg(name);
  return svg;
}
