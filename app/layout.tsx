import Width from "@/app/components/Width";
import "./globals.css";
import ThemeRegistry from "@/app/ThemeRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1E1F21] flex items-center justify-center w-screen h-screen">
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>

        <Width />
      </body>
    </html>
  );
}
