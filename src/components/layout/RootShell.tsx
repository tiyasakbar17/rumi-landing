import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";

export function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="py-10" style={{ paddingTop: "0px" }}>{children}</main>
      <footer className="border-t border-teak/30">
        <div className="container-ri h-14 flex items-center text-sm text-foreground/70">
          © {new Date().getFullYear()} Rumah Inggris
        </div>
      </footer>
    </div>
  );
}
