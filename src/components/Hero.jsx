const ORBIT_POINTS = 72;

function buildEllipseOrbit(
  index,
  total,
  radiusX = 210,
  radiusY = 170
) {
  const safeTotal = Math.max(total, 1);

  const startingAngle =
    (index / safeTotal) * Math.PI * 2;

  const x = [];
  const y = [];
  const zIndex = [];

  for (
    let step = 0;
    step <= ORBIT_POINTS;
    step += 1
  ) {
    const angle =
      startingAngle +
      (step / ORBIT_POINTS) *
        Math.PI *
        2;

    const positionX =
      Math.cos(angle) * radiusX;

    const positionY =
      Math.sin(angle) * radiusY;

    x.push(positionX);
    y.push(positionY);

    /*
     * Upper half = behind portrait
     * Lower half = over portrait
     */
    zIndex.push(
      positionY >= 0 ? 40 : 10
    );
  }

  return {
    x,
    y,
    zIndex,
  };
}
