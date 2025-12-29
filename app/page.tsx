import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loventia - Wedding Cinematography',
  description: 'Photo et Vidéo de mariage haut de gamme. Storytelling émotionnel.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF7] p-4 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-slate-900">
          LOVENTIA
        </h1>
        <div className="h-px w-24 bg-slate-300 mx-auto" />
        <p className="text-lg md:text-xl text-slate-500 font-light tracking-wide">
          Wedding Cinematography & Photography
        </p>
        <div className="pt-8">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            Site en construction
          </span>
        </div>
      </div>
    </main>
  );
}