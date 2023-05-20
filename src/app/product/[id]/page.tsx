import type { Metadata } from 'next';
import React from 'react';

import ProductScreen from '@/components/screens/ProductScreen/ProductScreen';
import { productListData } from '@/lib/productListData';

type Props = {
  params: { id: string };
};

const data = productListData;

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: data[+params.id].title
  };
}

export default function ProductPage({ params }: Props) {
  return <ProductScreen data={data[+params.id]} />;
}
