export const getInitiations = (fullName: string) => {
  const names = fullName.split(" ");

  if (names.length === 1) {
    return names[0][0].toUpperCase() + names[0][1].toUpperCase();
  } else {
    let initiations = "";
    for (let i = 0; i < 2; i++) {
      initiations += names[i][0].toUpperCase();
    }
    return initiations;
  }
}