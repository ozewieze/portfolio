type Detail = {
  label: string;
  content: string;
  ref: string;
  download?: boolean;
  external?: boolean;
};

export const details: Detail[] = [
  {
    label: "E-mail",
    content: "stefballyn@hotmail.com",
    ref: "mailto:stefballyn@hotmail.com",
  },
  {
    label: "GitHub",
    content: "github.com/ozewieze",
    ref: "https://github.com/ozewieze",
    external: true,
  },
  {
    label: "CV",
    content: "Download mijn cv",
    ref: "CV_Stef_Ballyn_stage.pdf",
    download: true,
  },
];
