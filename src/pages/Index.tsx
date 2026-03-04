import { Compass } from 'lucide-react';
import { SystemChecklist } from '@/components/SystemChecklist';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
            <Compass className="h-7 w-7 text-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Tiny Life Compass
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get a quick, honest cost reality check before committing to tiny, mobile, or alternative living.
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
          <SystemChecklist />
        </main>

        {/* Footer */}
        <footer className="mt-8 space-y-4 text-center">
          <p className="text-xs text-muted-foreground">
            Estimates are approximate. Actual costs vary by location, materials, and individual circumstances.
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <img
              src="/tiny-life-compass.png"
              alt="The Free Range Dev"
              className="h-6 w-auto"
            />
            <span className="text-sm text-foreground/70">Made by The Free Range Dev</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
