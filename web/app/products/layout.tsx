import MarketingLayout from "@/components/marketing-layout";
import React from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
