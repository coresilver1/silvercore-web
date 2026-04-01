import { useMemo, useState } from "react";
import { SeoHead } from "../components/site/SeoHead";
import { SectionHeader } from "../components/site/SectionHeader";
import { buildOrganizationSchema } from "../lib/seo";

export default function InvestmentsPage({ content }) {
  const [selectedGeography, setSelectedGeography] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedBand, setSelectedBand] = useState("All");

  const geographies = useMemo(
    () => ["All", ...new Set(content.investments.categories.flatMap((item) => item.geographies))],
    [content.investments.categories],
  );
  const sectors = useMemo(
    () => ["All", ...new Set(content.investments.categories.flatMap((item) => item.sectors))],
    [content.investments.categories],
  );
  const sizeBands = useMemo(
    () => ["All", ...new Set(content.investments.categories.map((item) => item.deal_size_band))],
    [content.investments.categories],
  );

  const filteredItems = content.investments.categories.filter((item) => {
    const geographyMatch = selectedGeography === "All" || item.geographies.includes(selectedGeography);
    const sectorMatch = selectedSector === "All" || item.sectors.includes(selectedSector);
    const sizeMatch = selectedBand === "All" || item.deal_size_band === selectedBand;

    return geographyMatch && sectorMatch && sizeMatch;
  });

  return (
    <>
      <SeoHead
        title="Investments | Silver Core Partners"
        description="Filter Silver Core Partners investment and transaction categories by geography, sector and deal size."
        structuredData={[buildOrganizationSchema(content)]}
      />

      <section className="page-section px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Investment categories"
            title="Interactive deal categories shaped by geography, sector and size."
            description={content.investments.intro}
          />

          <div className="mt-12 grid gap-6 border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr]" data-testid="investment-filters-panel">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Geography</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {geographies.map((geography) => (
                  <button
                    key={geography}
                    type="button"
                    onClick={() => setSelectedGeography(geography)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedGeography === geography
                        ? "border-sky-300 bg-sky-300/10 text-sky-100"
                        : "border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                    data-testid={`investment-geography-filter-${geography.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {geography}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Sector</span>
              <select
                value={selectedSector}
                onChange={(event) => setSelectedSector(event.target.value)}
                className="mt-4 w-full border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-slate-100 outline-none"
                data-testid="investment-sector-filter"
              >
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Deal size band</span>
              <select
                value={selectedBand}
                onChange={(event) => setSelectedBand(event.target.value)}
                className="mt-4 w-full border border-white/10 bg-[#0b1221] px-4 py-3 text-sm text-slate-100 outline-none"
                data-testid="investment-size-filter"
              >
                {sizeBands.map((band) => (
                  <option key={band} value={band}>
                    {band}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-6 text-sm text-slate-400" data-testid="investment-filter-results">
            Showing {filteredItems.length} category{filteredItems.length === 1 ? "" : "ies"}.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredItems.map((item, index) => (
              <article key={item.slug} className="editorial-frame p-8" data-testid={`investment-card-${index}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="font-['Cormorant_Garamond'] text-3xl text-white" data-testid={`investment-title-${index}`}>
                    {item.title}
                  </h3>
                  <span className="border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-sky-200" data-testid={`investment-size-${index}`}>
                    {item.deal_size}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300" data-testid={`investment-outcome-${index}`}>
                  {item.outcome}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Geographies</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200" data-testid={`investment-geographies-${index}`}>
                      {item.geographies.join(" • ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sectors</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200" data-testid={`investment-sectors-${index}`}>
                      {item.sectors.join(" • ")}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}