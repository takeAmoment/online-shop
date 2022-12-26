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
  closeWindow: () => void;
}

export interface IPaginationProps {
  contentPerPage: number;
  amount: number;
}
export interface IPaginationResult {
  page: number;
  totalPages: number;
  lastContentIndex: number;
  firstContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
}

export type UsePagination = (arg: IPaginationProps) => IPaginationResult;
