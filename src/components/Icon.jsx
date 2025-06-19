export const Icon = ({ name, size = 24, fill = 0, weight = 400, grad = 0, opsz = 40, color = '#000'}) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: size,
      color,
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grad}, 'opsz' ${opsz}`
    }}
  >
    {name}
  </span>
);