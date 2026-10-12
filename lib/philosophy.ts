export const quotes = {
  rising: {
    text: "I am rising to the work of a human being.",
    cite: "Marcus Aurelius · Meditations 5.1 · tr. George Long",
  },
  obstacle: {
    text: "That which is a hindrance is made a furtherance to an act; and that which is an obstacle on the road helps us on this road.",
    cite: "Marcus Aurelius · Meditations 5.20 · tr. George Long",
  },
  interval: {
    text: "Of universal time, of which a short and indivisible interval has been assigned to thee.",
    cite: "Marcus Aurelius · Meditations 5.24 · tr. George Long",
  },
  control: {
    text: "Some things are in our control and others not.",
    cite: "Epictetus · Enchiridion 1 · tr. Elizabeth Carter",
  },
  time: {
    text: "Nothing, Lucilius, is ours, except time.",
    cite: "Seneca · Moral Letters 1 · tr. Richard M. Gummere",
  },
  dyed: {
    text: "The soul is dyed by the thoughts.",
    cite: "Marcus Aurelius · Meditations 5.16 · tr. George Long",
  },
  liveWell: {
    text: "Where a man can live, there he can also live well.",
    cite: "Marcus Aurelius · Meditations 5.16 · tr. George Long",
  },
  disturbed: {
    text: "Men are disturbed, not by things, but by the principles and notions which they form concerning things.",
    cite: "Epictetus · Enchiridion 5 · tr. Elizabeth Carter",
  },
  wish: {
    text: "Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well.",
    cite: "Epictetus · Enchiridion 8 · tr. Elizabeth Carter",
  },
} as const

export const maxims = [
  quotes.control.text,
  quotes.dyed.text,
  quotes.time.text,
  quotes.liveWell.text,
  quotes.wish.text,
] as const

export const inOurControl = [
  "The build — websites, apps, and software, made to the brief.",
  "The system — automation and AI agents that carry the workflow.",
  "The career craft — coaching, resumes, interviews, and skill.",
  "The measure — reporting, then the next iteration.",
] as const

export const notInOurControl = [
  "The market’s mood on a given morning.",
  "What another company decides to do.",
  "A reputation that the work has not earned yet.",
  "Noise dressed up as urgency.",
] as const
