export const BASE_CSS = {
  color: {
    base: "#f6f6f6",
    main: "#2f9bff",
    accent: "#002134",
    danger: "#fa0e0e",
    disabled: "#696969",
    white: "white",
    black: "#000000",
    red: "#e60033",
    gray: "#e3e8ef",
  },
  text: {
    label: {
      color: "#00022e",
    },
    form: { title: "" },
  },
  page: {
    pc: { title: "30px" },
    tab: { title: "30px" },
    sp: { title: "20px" },
  },
  form: {
    pc: {
      title: "24px",
      overView: "20px",
      labelAreaBottom: "14px",
      labelTitleBottom: "16px",
      formFontSize: "20px",
      formHeight: "44px",
    },
    tab: {
      title: "",
      overView: "",
      labelAreaBottom: "",
      labelTitleBottom: "",
      formFontSize: "",
      formHeight: "",
    },
    sp: {
      title: "18px",
      overView: "12px",
      labelAreaBottom: "12px",
      labelTitleBottom: "8px",
      formFontSize: "14px",
      formHeight: "22px",
    },
  },
  link: {
    color: "#4c51bf",
  },
} as const;
