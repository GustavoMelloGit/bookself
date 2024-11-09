import plugin from "tailwindcss/plugin";

const sizes = {
  14: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  16: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  18: {
    fontSize: "1.125rem",
    lineHeight: "1.625rem",
  },
  20: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  24: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  32: {
    fontSize: "2rem",
    lineHeight: "2.625rem",
  },
};

const weights = {
  sb: 600,
  m: 500,
  r: 400,
};

export const typographyPlugin = plugin(function ({ addComponents }) {
  const comps = Object.entries(weights).map(([weight, value]) => {
    return Object.entries(sizes).map(([size, { fontSize, lineHeight }]) => {
      return {
        [`.t-${weight}-${size}`]: {
          fontWeight: value,
          fontSize,
          lineHeight,
        },
      };
    });
  });
  //@ts-expect-error - TailwindCSS plugin types are not up-to-date
  addComponents(comps);
});
