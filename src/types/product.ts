export interface Product {
  id: number;
  name: string;
  type: "console" | "manga" | "jogos";
  description: string;
  price: number;
  urlImg: string;
}
