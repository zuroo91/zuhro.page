"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/20" />
        <div className="flex items-center justify-center py-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Zuhro's page.
          </p>
        </div>
      </div>
    </footer>
  );
}
