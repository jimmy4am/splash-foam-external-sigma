import { getSalesBySlug } from "@/app/_utils/api";
import SalesPage from "@/app/_components/sales-page";
import { baseSales } from "@/lib/site-info";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const info = await getSalesBySlug(baseSales);

  return {
    title: info.metaTitle,
    description: info.metaDescription,
  };
}

export default async function Page() {
  const info = await getSalesBySlug(baseSales);

  return <SalesPage info={info} />;
}
