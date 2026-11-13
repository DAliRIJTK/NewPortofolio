"use client";

import React, { useState } from "react";

interface ProjectVisualSpecimenProps {
  visualType:
    | "elearning-bsp"
    | "investasi-antam"
    | "analisis-geoapps"
    | "snapcash-mobile";
  interactive?: boolean;
}

export function ProjectVisualSpecimen({
  visualType,
  interactive = false,
}: ProjectVisualSpecimenProps) {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);
  const [activeBorehole, setActiveBorehole] = useState<string>("TS_85");

  // 1. ElearningBSP — Laravel 10 BFF + 11 Lumen Microservices
  if (visualType === "elearning-bsp") {
    const portals = ["JCT", "Sista Praja", "MyTalenta", "Wiscoverse", "Bakat Pesta"];
    const microservices = [
      { name: "kelola_akun", db: "MySQL + SSO" },
      { name: "kelola_pelatihan", db: "MySQL" },
      { name: "kelola_activity", db: "Redis + S3" },
      { name: "enrolment", db: "Elasticsearch" },
      { name: "coachingmentoring", db: "MySQL" },
      { name: "certificate", db: "QR + PDF" },
    ];

    return (
      <div className="relative h-full w-full min-h-[235px] bg-[#08090B] bg-architectural-grid p-5 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#9498A1]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4B483]" />
            <span>LARAVEL 10 BFF (`elearningv2`) + 11 LUMEN SERVICES</span>
          </div>
          <span className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[#ECEAE4] border border-white/[0.07]">
            5 PORTALS
          </span>
        </div>

        {/* 5 Multi-Brand Portals -> BFF Gateway -> Lumen Services */}
        <div className="my-3 space-y-2.5">
          <div className="flex flex-wrap gap-1">
            {portals.map((p) => (
              <span
                key={p}
                className="flex-1 text-center rounded border border-white/[0.08] bg-[#101216] py-1 px-1.5 font-mono text-[9px] text-[#ECEAE4] truncate"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="rounded-md border border-[#D4B483]/40 bg-[#D4B483]/10 py-1.5 px-3 flex items-center justify-between font-mono text-[10px]">
            <span className="text-[#D4B483] font-medium">
              Web BFF (`App\Helpers\MS`)
            </span>
            <span className="text-[#ECEAE4]">JWT Cookie + Inertia.js SPA</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {microservices.map((svc, idx) => (
              <button
                key={svc.name}
                type="button"
                onClick={(e) => {
                  if (!interactive) return;
                  e.stopPropagation();
                  setSelectedServiceIdx(idx);
                }}
                className={`rounded border p-2 text-left transition-all ${
                  selectedServiceIdx === idx
                    ? "border-[#D4B483] bg-[#151922]"
                    : "border-white/[0.08] bg-[#101216]"
                } ${interactive ? "cursor-pointer" : ""}`}
              >
                <div className="font-mono text-[9.5px] text-[#ECEAE4] truncate">
                  {svc.name}
                </div>
                <div className="font-mono text-[8.5px] text-[#D4B483] truncate">
                  {svc.db}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] pt-2.5 font-mono text-[10px] text-[#9498A1]">
          <span>70-20-10 FRAMEWORK · SCORM 1.2</span>
          <span className="text-[#34D399]">SSO JABAR + SIAP ASN</span>
        </div>
      </div>
    );
  }

  // 2. Investasi — PT Antam Dual Oracle + MySQL Dashboard
  if (visualType === "investasi-antam") {
    return (
      <div className="relative h-full w-full min-h-[235px] bg-[#08090B] bg-architectural-grid p-5 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#9498A1]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
            <span>PT ANTAM · ORACLE OCI8 + MYSQL DUAL DB</span>
          </div>
          <span className="text-[#D4B483]">PSAK 55 / 71</span>
        </div>

        <div className="my-3 space-y-2.5">
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                label: "YOI (`handleYoi`)",
                val: "USD × FX",
                sub: "YTD vs PYTD",
              },
              {
                label: "OCI Unrealized",
                val: "PSAK 71",
                sub: "SUN Amortized",
              },
              {
                label: "Reports Engine",
                val: "26+ Types",
                sub: "PDF & Excel",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-white/[0.09] bg-[#101216] p-2.5 space-y-1"
              >
                <div className="font-mono text-[9px] text-[#9498A1] truncate">
                  {card.label}
                </div>
                <div className="font-mono text-xs font-semibold text-[#ECEAE4]">
                  {card.val}
                </div>
                <div className="font-mono text-[9px] text-[#D4B483]">
                  {card.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Instrument Allocation Bar */}
          <div className="rounded-lg border border-white/[0.08] bg-[#101216] p-2.5 space-y-1.5">
            <div className="flex justify-between font-mono text-[9px] text-[#9498A1]">
              <span>MULTI-INSTRUMENT ORACLE PORTFOLIO</span>
              <span className="text-[#ECEAE4]">9 SECURITY TYPES</span>
            </div>
            <div className="flex h-2.5 w-full overflow-hidden rounded-xs bg-[#08090B]">
              <div className="w-[34%] bg-[#D4B483]" title="Deposito (1, 5)" />
              <div
                className="w-[26%] bg-[#34D399]"
                title="Obligasi Korporasi (3)"
              />
              <div className="w-[22%] bg-[#7CA6C8]" title="SUN / SBI Bonds" />
              <div
                className="w-[18%] bg-white/30"
                title="Reksadana, Saham, MTN, KIKEBA"
              />
            </div>
            <div className="flex justify-between font-mono text-[8.5px] text-[#9498A1]">
              <span>DEPOSITO · OBLIGASI</span>
              <span>SUN/SBI · SAHAM · REKSADANA</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] pt-2.5 font-mono text-[10px] text-[#9498A1]">
          <span>AZURE AD B2C + GRAPH API SYNC</span>
          <span className="text-[#34D399]">RAW ORACLE SQL</span>
        </div>
      </div>
    );
  }

  // 3. AnalisisGeoApps — Automated Geological Core Logging
  if (visualType === "analisis-geoapps") {
    const boreholes: Record<
      string,
      { depth: string; photos: string; segments: { label: string; type: string; color: string }[] }
    > = {
      TS_85: {
        depth: "3.00–227.00 m",
        photos: "57 Core Photos",
        segments: [
          { label: "R1-S1 · Coal (BB)", type: "Br: 45.2", color: "border-red-500/60 bg-red-500/15 text-red-300" },
          { label: "R1-S2 · Parting", type: "0.18m ≤ 0.3m", color: "border-yellow-500/60 bg-yellow-500/15 text-yellow-300" },
          { label: "R1-S3 · Coal (BB)", type: "Br: 52.8", color: "border-red-500/60 bg-red-500/15 text-red-300" },
          { label: "R2-S1 · Non-Coal (AL)", type: "GLCM Hom: 0.45", color: "border-emerald-500/60 bg-emerald-500/15 text-emerald-300" },
        ],
      },
      BTS_53: {
        depth: "3.00–43.00 m",
        photos: "10 Core Photos",
        segments: [
          { label: "R1-S1 · Weathering (SO)", type: "Red > 100 (<8m)", color: "border-cyan-500/60 bg-cyan-500/15 text-cyan-300" },
          { label: "R1-S2 · Non-Coal (AL)", type: "Br: 138.4", color: "border-emerald-500/60 bg-emerald-500/15 text-emerald-300" },
          { label: "R2-S1 · Coal (BB)", type: "Br: 61.0", color: "border-red-500/60 bg-red-500/15 text-red-300" },
          { label: "R2-S2 · Non-Coal (AL)", type: "Depth > 8.0m", color: "border-emerald-500/60 bg-emerald-500/15 text-emerald-300" },
        ],
      },
    };

    const current = boreholes[activeBorehole];

    return (
      <div className="relative h-full w-full min-h-[235px] bg-[#08090B] bg-architectural-grid p-5 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#9498A1]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C89D7C]" />
            <span>OPENCV 4.10 + SCIKIT-IMAGE GLCM</span>
          </div>
          {interactive ? (
            <div className="flex gap-1">
              {Object.keys(boreholes).map((bh) => (
                <button
                  key={bh}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveBorehole(bh);
                  }}
                  className={`px-1.5 py-0.5 rounded text-[9px] cursor-pointer ${
                    activeBorehole === bh
                      ? "bg-[#D4B483] text-[#08090B] font-semibold"
                      : "bg-white/[0.07] text-[#ECEAE4]"
                  }`}
                >
                  {bh}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-[#D4B483]">{current.depth}</span>
          )}
        </div>

        {/* Annotated Corebox Bounding Boxes Preview */}
        <div className="my-3 space-y-2">
          <div className="flex justify-between font-mono text-[9.5px] text-[#9498A1]">
            <span>BOREHOLE {activeBorehole} STRATIGRAPHY</span>
            <span className="text-[#ECEAE4]">{current.photos}</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {current.segments.map((seg) => (
              <div
                key={seg.label}
                className={`rounded border p-2 font-mono ${seg.color}`}
              >
                <div className="text-[10px] font-semibold truncate">
                  {seg.label}
                </div>
                <div className="text-[9px] opacity-80">{seg.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] pt-2.5 font-mono text-[10px] text-[#9498A1]">
          <span>1CM BLOCK SCAN · 8M DOMAIN RULE</span>
          <span className="text-[#ECEAE4]">PNG + JSON SCHEMA</span>
        </div>
      </div>
    );
  }

  // 4. SnapCash — Android Kotlin Jetpack Compose + AI Invoice Scanning
  return (
    <div className="relative h-full w-full min-h-[235px] bg-[#08090B] bg-architectural-grid p-5 flex flex-col justify-between overflow-hidden select-none">
      <div className="flex items-center justify-between font-mono text-[10px] text-[#9498A1]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7CA6C8]" />
          <span>KOTLIN 1.9 + JETPACK COMPOSE (MATERIAL 3)</span>
        </div>
        <span className="text-[#D4B483]">HILT MVVM</span>
      </div>

      <div className="my-3 grid grid-cols-12 gap-2.5 items-center">
        {/* CameraX -> GPT Extraction Pipeline */}
        <div className="col-span-7 rounded-lg border border-white/[0.08] bg-[#101216] p-3 space-y-2">
          <div className="flex items-center justify-between font-mono text-[9px]">
            <span className="text-[#D4B483]">CAMERAX → GPT OCR</span>
            <span className="text-[#34D399]">200 OK</span>
          </div>
          <div className="font-mono text-[9.5px] text-[#ECEAE4] bg-[#08090B] rounded p-2 border border-white/[0.06] space-y-1">
            <div>POST /generateInvoiceData</div>
            <div className="text-[#9498A1]">
              → Items: 3 Barang + TambahanBiaya
            </div>
            <div className="text-[#34D399]">
              → Auto-filled PengeluaranEntry
            </div>
          </div>
        </div>

        {/* Compose Analytics Preview */}
        <div className="col-span-5 rounded-lg border border-white/[0.08] bg-[#101216] p-3 flex flex-col items-center justify-center gap-1.5">
          <div className="h-12 w-12 rounded-full border-4 border-[#D4B483] border-r-[#34D399] border-b-[#7CA6C8] flex items-center justify-center">
            <span className="font-mono text-[8.5px] text-[#ECEAE4]">M3 UI</span>
          </div>
          <span className="font-mono text-[9px] text-[#9498A1]">
            13 Compose Screens
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.07] pt-2.5 font-mono text-[10px] text-[#9498A1]">
        <span>FIREBASE AUTH + RETROFIT2</span>
        <span className="text-[#ECEAE4]">DATASTORE + PAGING 3</span>
      </div>
    </div>
  );
}
