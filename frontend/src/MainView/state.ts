import { atom } from 'recoil'

export const nameState = atom({
  key: 'nameState',
  default: ''
})

const adjectives = [
  "Kind", "Intelligent",
  "Friendly", "Confident",
  "Compassionate", "Creative",
  "Hardworking", "Generous",
  "Patient", "Optimistic",
  "Energetic", "Enthusiastic",
  "Ambitious", "Joyful",
  "Reliable", "Playful",
  "Wise", "Honest",
  "Curious", "Polite"
]

const nouns = [
  "Human", "Alien",
  "Zombie", "Robot",
  "Vampire", "Werewolf",
  "Ghost", "Mermaid",
  "Sasquatch", "Elf",
  "Witch", "Goblin",
  "Fairy", "Mummy",
  "Demon", "Wizard",
  "Frankenstein", "Gnome",
  "Cyborg", "Merman"
]

const chooseRandom = <T>(array: T[]) => {
  const rnd = Math.random() * array.length;
  return array[~~rnd];
}

export const randomName = () => {
  const adjective = chooseRandom(adjectives)
  const noun = chooseRandom(nouns)
  return `${adjective} ${noun}`
}
