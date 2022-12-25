import React from "react";

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductCardProps {
  product: IProduct;
}

export interface CartSlice {
  cart: IProduct[];
}

export interface SelectedProduct {
  product: IProduct | null;
}

export interface ModalWindowProps {
  children: React.ReactNode;
  isActive: boolean;
}
