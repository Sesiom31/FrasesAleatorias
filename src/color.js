
let colores = [
  "#ff7360",
  "#7052ff",
  "#b38471",
  "#6aa3b4",
  "#416864",
  "#5c5e36",
  "#1d3d33",
  "#ef43ef",
  "#ff5f7c",
  "#e6a15c",
  "#9e6788",
  "#394651",
  "#6f7357",
  "#273a2d",
  "#20c67a",
  "#3f8880",
  "#d6a735",
  "#ff8862",
  "#b93af8",
  "#b8575e",
  "#de787d",
  "#6d6d6d",
  "#137fd9",
  "#2196f3",
  "#ff0077",
  "#ff599e",
  "#8d4925",
  "#b96e48",
  "#7f00b2",
  "#ab3ed8",
  "#b28405",
  "#795300",
  "#efb810",
  "#664300",
  "#a87b05",
  "#efb810",
  "#CD7F32",
  "#ec9e51",
  "#d4a413",
  "#155db1",
  "#2196f3",
  "#f3111d",
  "#fa414a",
  "#745129",
  "#a98652",
  "#3d2c0f",
  "#547c8c",
  "#2c3e50",
  "#005227",
  "#038554",
  "#03bb85",
  "#038554",
  "#03bb85",
  "#666666",
  "#ff69b4",
  "#a6024f",
  "#1465bb",
  "#2196f3",
  "#e5097f",
  "#003817",
  "#026842",
  "#009d71",
  "#005227",
  "#2a8c4a",
  "#038554",
  "#64c27b",
  "#fa8072",
  "#009d71",
  "#952f57",
  "#ca668b",
];

let index = -1
export function generarColor() {
  let indexColor = Math.floor(Math.random() * colores.length)

  if(indexColor !== index){
    return colores[indexColor]
  }else{
    generarColor()
  }
  index = indexColor
}