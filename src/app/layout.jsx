import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body> 
    </html>
  );
}
// Appending the inter.className to the className attribute of the <body> element ensures that the Inter font is applied globally throughout the application.
// Additionally, the antialiased class from Tailwind CSS is added to provide smoother font rendering, enhancing the visual appearance of the text.