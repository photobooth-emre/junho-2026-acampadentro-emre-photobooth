export interface Frame {
  id: string;
  name: string;
  src: string;
  category: "default" | "skz";
}

export const DEFAULT_FRAMES: Frame[] = [
  { id: "default-1", name: "AcampaDentro 1", src: "/frames/default/frame-1.png", category: "default" },
  { id: "default-2", name: "AcampaDentro 2", src: "/frames/default/frame-2.png", category: "default" },
];

export const SKZ_FRAMES: Frame[] = [
  { id: "skz-bangchan", name: "Bang Chan", src: "/frames/skz/bangchan.png", category: "skz" },
  { id: "skz-changbin", name: "Changbin", src: "/frames/skz/changbin.png", category: "skz" },
  { id: "skz-felix", name: "Felix", src: "/frames/skz/felix.png", category: "skz" },
  { id: "skz-hyunjin", name: "Hyunjin", src: "/frames/skz/hyunjin.png", category: "skz" },
  { id: "skz-in", name: "I.N", src: "/frames/skz/in.png", category: "skz" },
  { id: "skz-leeknow", name: "Lee Know", src: "/frames/skz/leeknow.png", category: "skz" },
  { id: "skz-seungmin", name: "Seungmin", src: "/frames/skz/seungmin.png", category: "skz" },
  { id: "skz-han", name: "Han", src: "/frames/skz/han.png", category: "skz" },
];

export const SECRET_CODE = "143";
