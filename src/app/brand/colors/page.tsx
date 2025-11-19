export default function ColorsPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-display-lg mb-8">Colors</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-heading-lg mb-6">Primary Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-moloch-800 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-scroll-100 text-body-lg font-bold">
                    Moloch 800
                  </span>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-heading-md mb-2">Moloch 800</h3>
                  <p className="text-body-base text-muted-foreground mb-2">
                    #29100A
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-moloch-400 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-scroll-100 text-body-lg font-bold">
                    Moloch 400
                  </span>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-heading-md mb-2">Moloch 400</h3>
                  <p className="text-body-base text-muted-foreground mb-2">
                    #D25C41
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-scroll-100 h-24 rounded-lg flex items-center justify-center border border-border">
                  <span className="text-moloch-800 text-body-lg font-bold">
                    Scroll 100
                  </span>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="text-heading-md mb-2">Scroll 100</h3>
                  <p className="text-body-base text-muted-foreground mb-2">
                    #F9F7E7
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-heading-lg mb-6">Secondary Palette</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-heading-md mb-4">Moloch Color Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  <div className="space-y-2">
                    <div className="bg-moloch-100 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 100</p>
                      <p className="text-body-sm text-muted-foreground">
                        #FAEEEB
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-200 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 200</p>
                      <p className="text-body-sm text-muted-foreground">
                        #EFC5BB
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-300 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 300</p>
                      <p className="text-body-sm text-muted-foreground">
                        #E39B8B
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-400 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 400</p>
                      <p className="text-body-sm text-muted-foreground">
                        #D25C41
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-500 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 500</p>
                      <p className="text-body-sm text-muted-foreground">
                        #BD482D
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-600 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 600</p>
                      <p className="text-body-sm text-muted-foreground">
                        #8B3521
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-700 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 700</p>
                      <p className="text-body-sm text-muted-foreground">
                        #5C2316
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-moloch-800 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Moloch 800</p>
                      <p className="text-body-sm text-muted-foreground">
                        #29100A
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md mb-4">Scroll Color Scale</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  <div className="space-y-2">
                    <div className="bg-scroll-100 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 100</p>
                      <p className="text-body-sm text-muted-foreground">
                        #F9F7E7
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-200 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 200</p>
                      <p className="text-body-sm text-muted-foreground">
                        #ECE5AC
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-300 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 300</p>
                      <p className="text-body-sm text-muted-foreground">
                        #DCCD6A
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-400 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 400</p>
                      <p className="text-body-sm text-muted-foreground">
                        #D2C141
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-500 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 500</p>
                      <p className="text-body-sm text-muted-foreground">
                        #B5A22C
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-600 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 600</p>
                      <p className="text-body-sm text-muted-foreground">
                        #837820
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-700 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 700</p>
                      <p className="text-body-sm text-muted-foreground">
                        #534A13
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-scroll-800 h-16 rounded-lg border border-border"></div>
                    <div className="text-center">
                      <p className="text-body-sm font-medium">Scroll 800</p>
                      <p className="text-body-sm text-muted-foreground">
                        #211E07
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
