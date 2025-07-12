"use client";

export function HtmlWrapper({
  children,
  fontVars,
}: {
  children: React.ReactNode;
  fontVars: string;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontVars} antialiased`}>{children}</body>
    </html>
  );
}
