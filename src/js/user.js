
export default function heroes(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
