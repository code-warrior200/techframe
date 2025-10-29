export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()}All rights reserved.
    </footer>
  );
}
