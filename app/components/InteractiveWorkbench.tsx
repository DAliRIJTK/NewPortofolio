"use client";

import React, { useState } from "react";

type WorkbenchMode = "geoapps-cv" | "microservices-bff" | "investasi-fx";

export function InteractiveWorkbench() {
  const [mode, setMode] = useState<WorkbenchMode>("geoapps-cv");

  // 1. AnalisisGeoApps CV Lithology Classifier state
  const [brightness, setBrightness] = useState<number>(62);
  const [redChannel, setRedChannel] = useState<number>(118);
  const [glcmContrast, setGlcmContrast] = useState<number>(150);
  const [midDepth, setMidDepth] = useState<number>(4.5);

  // Compute exact lithology from AnalisisGeoApps rules
  const computeLithology = () => {
    let primaryType: "Coal" | "Weathering" | "Non Coal" = "Non Coal";
    let code: "BB" | "SO" | "AL" = "AL";
    let ruleTriggered = "Primary: Brightness > 120 → Light sedimentary rock";

    if (brightness < 80) {
      primaryType = "Coal";
      code = "BB";
      ruleTriggered = "Primary: Brightness < 80 → Dark coal seam (BB)";
    } else if (brightness <= 120 && redChannel > 100) {
      primaryType = "Weathering";
      code = "SO";
      ruleTriggered =
        "Primary: 80 ≤ Brightness ≤ 120 & Red > 100 → Oxidized zone (SO)";
    }

    // GLCM & Depth-Domain Refinement Rules
    if (primaryType === "Weathering" && glcmContrast <= 50) {
      primaryType = "Non Coal";
      code = "AL";
      ruleTriggered =
        "GLCM Override: Weathering → Non Coal (contrast ≤ 50, homogeneous)";
    } else if (primaryType === "Weathering" && midDepth >= 8.0) {
      primaryType = "Non Coal";
      code = "AL";
      ruleTriggered =
        "Domain Rule: Weathering → Non Coal (mid-depth ≥ 8.0m subsurface)";
    } else if (primaryType === "Coal" && glcmContrast >= 900) {
      primaryType = "Non Coal";
      code = "AL";
      ruleTriggered =
        "GLCM Override: Coal → Non Coal (contrast ≥ 900, heterogeneous)";
    }

    const badgeColor =
      code === "BB"
        ? "text-red-400 border-red-400/40 bg-red-500/10"
        : code === "SO"
        ? "text-cyan-300 border-cyan-400/40 bg-cyan-500/10"
        : "text-emerald-300 border-emerald-400/40 bg-emerald-500/10";

    return { primaryType, code, ruleTriggered, badgeColor };
  };

  const geoResult = computeLithology();

  // 2. ElearningBSP Microservices Gateway state
  const [selectedPortal, setSelectedPortal] = useState<number>(0);
  const portals = [
    {
      code: "JCT",
      name: "Jabar CorpU Talent",
      role: "SuperApp Digital Learning",
      services: ["kelola_akun", "kelola_pelatihan", "kelola_activity", "enrolment"],
      auth: "SSO Jabar + SIAP ASN NIP",
    },
    {
      code: "SP",
      name: "Sista Praja",
      role: "Open Course ASN Platform",
      services: ["enrolment", "quiz", "certificate", "completion"],
      auth: "Google OAuth + Basic /join",
    },
    {
      code: "RC",
      name: "MyTalenta Jabar (Rancage)",
      role: "Evaluation & Coaching Suite",
      services: ["coachingmentoring", "submission", "administration", "jadwal"],
      auth: "SIAP ASN @jabarprov.go.id",
    },
    {
      code: "KMS",
      name: "Wiscoverse KMS",
      role: "Knowledge Management System",
      services: ["kelola_activity", "kelola_akun", "enrolment"],
      auth: "JWT Cookie BFF Gateway",
    },
  ];

  // 3. Antam Investasi YOI & PSAK Engine state
  const [psakMode, setPsakMode] = useState<"PSAK55" | "PSAK71">("PSAK71");
  const [fxDeltaPct, setFxDeltaPct] = useState<number>(2.4);
  const [usdBaseYield, setUsdBaseYield] = useState<number>(6.8);

  const computedYoi = (usdBaseYield * (1 + fxDeltaPct / 100)).toFixed(2);

  return (
    <div className="interactive-surface rounded-xl border border-white/[0.09] bg-[#101216]/90 backdrop-blur-md overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
      {/* Top Instrument Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-3 bg-[#0C0E12]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#D4B483]" />
          <span className="font-mono text-[11px] tracking-wider text-[#ECEAE4] uppercase">
            Live Engineering Workbench
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Interactive system simulators"
          className="flex items-center gap-1 rounded-lg bg-[#08090B] p-1 border border-white/[0.07]"
        >
          {(
            [
              { id: "geoapps-cv", label: "GeoApps CV" },
              { id: "microservices-bff", label: "11x Lumen BFF" },
              { id: "investasi-fx", label: "Oracle YOI" },
            ] as const
          ).map((tab) => {
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active}
                onClick={() => setMode(tab.id)}
                className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all cursor-pointer ${
                  active
                    ? "bg-[#1A1E26] text-[#D4B483] border border-[#D4B483]/30 shadow-xs"
                    : "text-[#9498A1] hover:text-[#ECEAE4]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mode 1: AnalisisGeoApps OpenCV + GLCM Simulator */}
      {mode === "geoapps-cv" && (
        <div className="p-5 space-y-4">
          <div className="rounded-lg border border-white/[0.08] bg-[#08090B] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-[#9498A1]">
                DRILL-CORE SEGMENT R1-S2 · DEPTH {midDepth.toFixed(1)}m
              </span>
              <span
                className={`rounded border px-2 py-0.5 font-mono text-[11px] font-medium ${geoResult.badgeColor}`}
              >
                {geoResult.primaryType.toUpperCase()} ({geoResult.code})
              </span>
            </div>

            {/* Simulated Stratigraphic Core Row */}
            <div className="grid grid-cols-4 gap-1.5 h-14 rounded-md border border-white/[0.08] bg-[#101216] p-1.5">
              <div className="rounded-xs border border-red-500/50 bg-red-500/15 flex flex-col justify-between p-1.5 font-mono text-[9px]">
                <span className="text-red-300">R1-S1 · BB</span>
                <span className="text-[#9498A1]">3.0–3.8m</span>
              </div>
              <div
                className={`rounded-xs border-2 flex flex-col justify-between p-1.5 font-mono text-[9px] transition-all ${geoResult.badgeColor}`}
              >
                <span className="font-semibold">
                  R1-S2 · {geoResult.code} (LIVE)
                </span>
                <span>
                  {midDepth.toFixed(1)}–{(midDepth + 0.9).toFixed(1)}m
                </span>
              </div>
              <div className="rounded-xs border border-yellow-500/50 bg-yellow-500/15 flex flex-col justify-between p-1.5 font-mono text-[9px]">
                <span className="text-yellow-300">R1-S3 · Parting</span>
                <span className="text-[#9498A1]">≤ 0.30m</span>
              </div>
              <div className="rounded-xs border border-emerald-500/50 bg-emerald-500/15 flex flex-col justify-between p-1.5 font-mono text-[9px]">
                <span className="text-emerald-300">R1-S4 · AL</span>
                <span className="text-[#9498A1]">Non-Coal</span>
              </div>
            </div>

            <div className="font-mono text-[11px] text-[#D4B483] bg-[#101216] rounded px-2.5 py-1.5 border border-white/[0.06]">
              {geoResult.ruleTriggered}
            </div>
          </div>

          {/* Interactive Sliders for OpenCV + GLCM Parameters */}
          <div className="grid grid-cols-2 gap-2.5">
            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">BRIGHTNESS</span>
                <span className="text-[#ECEAE4]">{brightness} / 255</span>
              </div>
              <input
                type="range"
                min={20}
                max={180}
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>

            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">RED CHANNEL</span>
                <span className="text-[#ECEAE4]">{redChannel}</span>
              </div>
              <input
                type="range"
                min={50}
                max={200}
                value={redChannel}
                onChange={(e) => setRedChannel(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>

            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">GLCM CONTRAST</span>
                <span className="text-[#ECEAE4]">{glcmContrast}</span>
              </div>
              <input
                type="range"
                min={20}
                max={1050}
                step={10}
                value={glcmContrast}
                onChange={(e) => setGlcmContrast(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>

            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">BOREHOLE DEPTH</span>
                <span className="text-[#ECEAE4]">{midDepth.toFixed(1)} m</span>
              </div>
              <input
                type="range"
                min={1.5}
                max={15.0}
                step={0.5}
                value={midDepth}
                onChange={(e) => setMidDepth(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}

      {/* Mode 2: ElearningBSP Microservices BFF Inspector */}
      {mode === "microservices-bff" && (
        <div className="p-5 space-y-3.5">
          <div className="grid grid-cols-4 gap-1.5">
            {portals.map((p, idx) => (
              <button
                key={p.code}
                type="button"
                onClick={() => setSelectedPortal(idx)}
                className={`rounded-lg border py-2 px-2 font-mono text-xs transition-all cursor-pointer ${
                  selectedPortal === idx
                    ? "border-[#D4B483] bg-[#161A22] text-[#D4B483] font-semibold"
                    : "border-white/[0.07] bg-[#0B0D11] text-[#9498A1] hover:text-[#ECEAE4]"
                }`}
              >
                {p.code}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-[#08090B] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-[#ECEAE4]">
                  {portals[selectedPortal].name}
                </div>
                <div className="font-mono text-[11px] text-[#9498A1]">
                  {portals[selectedPortal].role}
                </div>
              </div>
              <span className="rounded bg-[#34D399]/15 border border-[#34D399]/30 px-2 py-0.5 font-mono text-[10px] text-[#34D399]">
                BFF GATEWAY ACTIVE
              </span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/[0.07]">
              <div className="font-mono text-[10px] text-[#9498A1]">
                ROUTED LUMEN MICROSERVICES (`App\Helpers\MS::call`)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {portals[selectedPortal].services.map((svc) => (
                  <span
                    key={svc}
                    className="rounded border border-[#D4B483]/30 bg-[#D4B483]/10 px-2 py-1 font-mono text-[11px] text-[#ECEAE4]"
                  >
                    {svc} (Lumen)
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.07] font-mono text-[10px] text-[#9498A1]">
              <span>AUTH: {portals[selectedPortal].auth}</span>
              <span className="text-[#D4B483]">REDIS + ELASTICSEARCH</span>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Antam Investasi Oracle YOI & PSAK Simulator */}
      {mode === "investasi-fx" && (
        <div className="p-5 space-y-4">
          <div className="rounded-lg border border-white/[0.08] bg-[#08090B] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-[#9498A1]">
                ORACLE `DB::connection(&apos;oracle&apos;)`
              </span>
              <div className="flex items-center gap-1">
                {(["PSAK55", "PSAK71"] as const).map((std) => (
                  <button
                    key={std}
                    type="button"
                    onClick={() => setPsakMode(std)}
                    className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${
                      psakMode === std
                        ? "bg-[#D4B483] text-[#08090B] font-semibold"
                        : "bg-white/[0.06] text-[#9498A1]"
                    }`}
                  >
                    {std}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-lg border border-white/[0.06] bg-[#101216] p-3">
                <div className="font-mono text-[10px] text-[#9498A1]">
                  EFFECTIVE YOI (`handleYoi`)
                </div>
                <div className="font-display text-2xl text-[#ECEAE4] mt-0.5">
                  {computedYoi}%
                </div>
                <div className="font-mono text-[10px] text-[#34D399]">
                  USD Yield × FX Delta
                </div>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-[#101216] p-3">
                <div className="font-mono text-[10px] text-[#9498A1]">
                  ACTIVE ORACLE TABLE
                </div>
                <div className="font-mono text-xs text-[#D4B483] mt-1.5 truncate">
                  {psakMode === "PSAK71"
                    ? "HASIL_INVESTASI_PSAK71"
                    : "HASIL_INVESTASI"}
                </div>
                <div className="font-mono text-[10px] text-[#9498A1] mt-0.5">
                  26+ PDF/Excel Exports
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">BASE USD YIELD</span>
                <span className="text-[#ECEAE4]">{usdBaseYield.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={3.5}
                max={11.0}
                step={0.1}
                value={usdBaseYield}
                onChange={(e) => setUsdBaseYield(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>

            <label className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-[#0B0D11] p-2.5">
              <div className="flex justify-between font-mono text-[10px]">
                <span className="text-[#9498A1]">USD/IDR FX DELTA</span>
                <span className="text-[#ECEAE4]">
                  {fxDeltaPct >= 0 ? `+${fxDeltaPct}` : fxDeltaPct}%
                </span>
              </div>
              <input
                type="range"
                min={-5.0}
                max={8.0}
                step={0.2}
                value={fxDeltaPct}
                onChange={(e) => setFxDeltaPct(Number(e.target.value))}
                className="w-full accent-[#D4B483] cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}

      {/* Footer status bar */}
      <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#0B0D11] px-4 py-2.5 font-mono text-[10px] text-[#9498A1]">
        <span>DWIKA ALI RAMDHAN IBRAHIM · POLBAN JTK</span>
        <span className="text-[#ECEAE4]">PRODUCTION TELEMETRY</span>
      </div>
    </div>
  );
}
