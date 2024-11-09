import plugin from "tailwindcss/plugin";

const sizes = {
  14: {
    fontSize: "0.875rem",
  },
  16: {
    fontSize: "1rem",
  },
  18: {
    fontSize: "1.125rem",
  },
  20: {
    fontSize: "1.25rem",
  },
  24: {
    fontSize: "1.5rem",
  },
  32: {
    fontSize: "2rem",
  },
};

const weights = {
  sb: 600,
  r: 400,
  l: 300,
};

export const typographyPlugin = plugin(function ({ addComponents }) {
  const comps = Object.entries(weights).map(([weight, value]) => {
    return Object.entries(sizes).map(([size, props]) => {
      return {
        [`.t-${weight}-${size}`]: {
          fontWeight: value,
          ...props,
        },
      };
    });
  });
  //@ts-expect-error - TailwindCSS plugin types are not up-to-date
  addComponents(comps);
});
