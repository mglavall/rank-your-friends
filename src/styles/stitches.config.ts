// stitches.config.ts
import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  prefix: "",
  tokens: {
    fontSizes: {
      $1: "12px",
      $2: "14px",
      $3: "18px",
      $4: "36px",
    },
    colors: {
      $primary: "#151515",
      $secondary: "#ffffff",
    },
  },
  breakpoints: {},
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
