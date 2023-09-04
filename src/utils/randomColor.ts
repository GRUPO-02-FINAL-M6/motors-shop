export const randomColor = () => {

  const colors ={
    0: "#CE7B91",
    1: "#1a281f",
    2: "#635255",
    3: "#C0E8F9",
    4: "#B8D3D1",
    5: "#F5D3C8",
    6: "#8A8D91",
    7: "#861657",
    8: "#BBDBB4",
    9: "#C44536",
    10: "#283D3B",
    11: "#197278",
    12: "#EDDDD4",
    13: "#271F30",
    14: "#C8AD55",
    15: "#9BC59D",
    16: "#7EA3CC",
    17: "#8AAA79",
    18: "#B7B6C2",
    19: "#A5BE00",
    20: "#05668D",
  }

  const number = Math.floor(Math.random() * 21)

  return colors[number]
}