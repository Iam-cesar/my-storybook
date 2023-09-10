export function getCardBackgroundColor(points: number) {
  const container = {
    yellow: {
      primary: "#E1AD28",
      secondary: "#E4960A",
      tertiary: "#FFD133",
    },
    red: {
      primary: "#A42042",
      secondary: "#D72452",
      tertiary: "#EE3B52",
    },
    blue: {
      primary: "#1B5AC1",
      secondary: "#154293",
      tertiary: "#70A8FF",
    },
    purple: {
      primary: "#4D40AF",
      secondary: "#3F3394",
      tertiary: "#9776EF",
    },
    green: {
      primary: "#1B9C84",
      secondary: "#086152",
      tertiary: "#5EB8A8",
    },
  };

  if (points === 0) return container.green;
  if (points > 0 && points <= 100) return container.purple;
  if (points <= 250) return container.blue;
  if (points <= 500) return container.red;
  if (points > 500) return container.yellow;

  return container.green;
}
