
import "./globals.css";


export const metadata = {
  title: "wiretree",
  description: "node-graph based wireframing tookit by anurag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
