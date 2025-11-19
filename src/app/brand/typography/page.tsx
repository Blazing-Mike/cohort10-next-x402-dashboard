export default function TypographyPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-display-lg mb-8">Typography</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-heading-lg mb-6">Font Families</h2>
            <div className="space-y-8">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-3xl font-display mb-4 text-moloch-400">
                  Mazius Display
                </h3>
                <div className="space-y-4">
                  <div className="text-display-lg">Display Large</div>
                  <div className="text-display-md">Display Medium</div>
                  <div className="text-display-sm">Display Small</div>
                </div>
                <p className="text-body-base text-muted-foreground mt-4">
                  Primary display font for headings and large text
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-3xl font-body mb-4 text-moloch-400">
                  EB Garamond
                </h3>
                <div className="space-y-4">
                  <div className="text-body-lg font-body">Body Large</div>
                  <div className="text-body-base font-body">Body Base</div>
                  <div className="text-body-sm font-body">Body Small</div>
                </div>
                <p className="text-body-base text-muted-foreground mt-4">
                  Secondary body font for readable content
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-3xl font-mono mb-4 text-moloch-400">
                  Ubuntu Mono
                </h3>
                <div className="space-y-4">
                  <div className="font-mono text-body-lg">Monospace Large</div>
                  <div className="font-mono text-body-base">Monospace Base</div>
                  <div className="font-mono text-body-sm">Monospace Small</div>
                </div>
                <p className="text-body-base text-muted-foreground mt-4">
                  Monospace font for code and technical content
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-heading-lg mb-6">Type Scale</h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg">
                <div className="text-display-lg mb-2">Display Large - 80px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 110% | Letter spacing: -2%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-display-md mb-2">
                  Display Medium - 60px
                </div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 120% | Letter spacing: -1%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-display-sm mb-2">Display Small - 48px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 120% | Letter spacing: 0%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-heading-lg mb-2">Heading Large - 36px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 120% | Letter spacing: 0%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-heading-md mb-2">
                  Heading Medium - 28px
                </div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 130% | Letter spacing: 0%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-body-lg mb-2">Body Large - 20px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 140% | Letter spacing: 0%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-body-base mb-2">Body Base - 16px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 160% | Letter spacing: 0%
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <div className="text-body-sm mb-2">Body Small - 12px</div>
                <p className="text-body-sm text-muted-foreground">
                  Line height: 160% | Letter spacing: 0%
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
