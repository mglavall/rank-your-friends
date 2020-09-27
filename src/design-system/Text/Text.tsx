import { styled } from "~/styles/stitches.config";

const Text = styled("p", {
  fontSize: "$1",
  color: "$secondary",
  variants: {
    size: {
      s: {
        fontSize: "$1",
      },
      m: {
        fontSize: "$2",
      },
      l: {
        fontSize: "$3",
      },
      xl: {
        fontSize: "$4",
      },
    },
  },
});

export default Text;
