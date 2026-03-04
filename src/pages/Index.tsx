import { SystemChecklist } from '@/components/SystemChecklist';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl pt-2 md:pt-3 pb-8 md:pb-12">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="-mb-12">
            <img
              src="/Tiny-Life-Compass.png"
              alt="Tiny Life Compass"
              className="site-logo"
            />
          </div>
          <h1 className="site-title text-foreground mb-2">
            Tiny Life Compass
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get a complete cost reality check before committing to tiny, mobile, or alternative living.
          </p>
        </header>

        {/* Main Content */}
        <main className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
          <SystemChecklist />
        </main>

        {/* Footer */}
        <footer className="site-footer mt-8 text-center py-6 px-4">
          <p className="text-xs mb-4">
            © 2026 The Free Range Dev. All rights reserved.
          </p>
          <img
            src="/Free-Range-Dev-Logo-No-Background.png"
            alt="The Free Range Dev"
            className="footer-logo"
          />
        </footer>
      </div>
    </div>
  );
};

export default Index;
