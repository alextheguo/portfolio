export type Project = {
  id: string;
  title: string;
};

// Newest first.
export const COMMERCIAL: Project[] = [
  { id: "MNLG_Ar2ujQ", title: "“TARS’ First Day” | Hypercard Expense" },
  { id: "NQYnhVdDC2I", title: "BOTsession | LEMMA" },
  { id: "aIQLkbTeDBg", title: "“A Little Nudge” | Blinkko" },
  { id: "Opp97cZHprc", title: "Maruchan Instant Lunch, Flamin’ Hot® | Spot" },
  { id: "_Sr9eyDxCcM", title: "“All the Time in the World” | Truffle Pig" },
  { id: "QVqXPH-w6Zk", title: "“Hot Nerd” | Ditto AI" },
  { id: "QQAs6t2i9LM", title: "Onitsuka Tiger — “Find Your Pair” | Sublimity" },
  { id: "FzzhmVvXbpA", title: "Onitsuka Tiger — “Find Your Pair” | Raincheck" },
  { id: "f2MCBnZUSPc", title: "Onitsuka Tiger — “Find Your Pair” | Records" },
];

// Newest first.
export const NARRATIVE: Project[] = [
  { id: "R-of3WR9EVg", title: "Veins" },
  { id: "7AV_8Ull09g", title: "USB" },
  { id: "XAHEjHXXmYo", title: "Criterion" },
  { id: "UratXCFXYGw", title: "OCFF" },
  { id: "tQun-GQBrXk", title: "Best of Three" },
  { id: "aw1uku7Yz9c", title: "Free Ice Cream" },
];

export const ACTING = {
  dramatic: { id: "RT6Xv8AAvLk", title: "Dramatic Reel", meta: "DRAMA" },
  comedic: { id: "6DOFRy-SYH0", title: "Comedic Reel", meta: "COMEDY" },
};

export const HOME_REEL_ID = "vpCQx8PgZYM";

export function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
