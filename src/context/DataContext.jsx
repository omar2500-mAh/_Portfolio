import { createContext, useContext, useEffect, useState, useCallback } from "react";
import * as base from "../data/portfolioData";

/**
 * DataContext
 * -----------
 * Single hook (useData) that gives every component its content.
 *
 * Priority:  localStorage override  →  portfolioData.js default
 *
 * The /admin panel writes overrides into localStorage. If the visitor
 * has never used the admin panel, the site simply uses portfolioData.js.
 * Clearing the override (admin "Reset") falls back to the file again.
 */

const STORAGE_KEY = "omar_portfolio_overrides_v1";

// The keys an admin can override. Each maps to an export in portfolioData.js.
const EDITABLE_KEYS = [
  "heroData",
  "aboutData",
  "highlightSections",
  "galleryItems",
  "galleryCategories",
  "researchProjects",
  "awardsCertificates",
  "skills",
  "education",
  "experience",
  "publications",
  "contactInfo",
  "socialLinks",
  "navLinks",
  "siteMeta",
];

function readOverrides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function buildData(overrides) {
  const merged = {};
  for (const key of EDITABLE_KEYS) {
    merged[key] =
      overrides[key] !== undefined ? overrides[key] : base[key];
  }
  return merged;
}

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [overrides, setOverrides] = useState(() => readOverrides());
  const [data, setData] = useState(() => buildData(readOverrides()));

  // Rebuild merged data whenever overrides change
  useEffect(() => {
    setData(buildData(overrides));
  }, [overrides]);

  // Keep multiple tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setOverrides(readOverrides());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((next) => {
    setOverrides(next);
    try {
      // Only store keys that actually differ — keeps storage small
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.error("Could not save to localStorage:", err);
    }
  }, []);

  // Replace a single section's data (used by the admin panel)
  const updateSection = useCallback(
    (key, value) => {
      persist({ ...overrides, [key]: value });
    },
    [overrides, persist]
  );

  // Remove all admin overrides → revert to portfolioData.js
  const resetAll = useCallback(() => {
    setOverrides({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  // Export current data as a portfolioData-style snapshot (for download)
  const exportData = useCallback(() => buildData(overrides), [overrides]);

  const value = {
    data,
    base,
    editableKeys: EDITABLE_KEYS,
    updateSection,
    resetAll,
    exportData,
    hasOverrides: Object.keys(overrides).length > 0,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used inside <DataProvider>");
  return ctx;
}
