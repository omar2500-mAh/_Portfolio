import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import * as base from "../data/portfolioData";

/**
 * DataContext
 * -----------
 * This file provides portfolio data to all website components.
 *
 * Priority:
 * localStorage admin data → portfolioData.js default data
 *
 * If the admin panel has saved any changes, those changes will be used.
 * Otherwise, data will come directly from portfolioData.js.
 */

const STORAGE_KEY = "omar_portfolio_overrides_v1";

/**
 * These sections can be edited from the admin panel.
 *
 * researchProjects has been removed because the Research and
 * Dynamic Highlights sections are now merged into highlightSections.
 */
const EDITABLE_KEYS = [
  "heroData",
  "aboutData",
  "highlightSections",
  "galleryItems",
  "galleryCategories",
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

/**
 * Read previously saved admin data from localStorage.
 */
function readOverrides() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);

    return rawData ? JSON.parse(rawData) : {};
  } catch (error) {
    console.error("Could not read portfolio data from localStorage:", error);

    return {};
  }
}

/**
 * Merge admin data with the default portfolioData.js content.
 */
function buildData(overrides = {}) {
  const mergedData = {};

  for (const key of EDITABLE_KEYS) {
    mergedData[key] =
      overrides[key] !== undefined ? overrides[key] : base[key];
  }

  return mergedData;
}

const DataContext = createContext(null);

/**
 * DataProvider
 *
 * Wraps the full application and provides portfolio data everywhere.
 */
export function DataProvider({ children }) {
  const [overrides, setOverrides] = useState(() => readOverrides());

  const [data, setData] = useState(() => buildData(readOverrides()));

  /**
   * Rebuild website data whenever admin changes are updated.
   */
  useEffect(() => {
    setData(buildData(overrides));
  }, [overrides]);

  /**
   * Keep portfolio data synchronized between multiple browser tabs.
   */
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === STORAGE_KEY) {
        setOverrides(readOverrides());
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  /**
   * Save admin changes into localStorage.
   */
  const persist = useCallback((nextOverrides) => {
    setOverrides(nextOverrides);

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(nextOverrides)
      );
    } catch (error) {
      console.error("Could not save portfolio data:", error);
    }
  }, []);

  /**
   * Update one portfolio section from the admin panel.
   */
  const updateSection = useCallback(
    (key, value) => {
      persist({
        ...overrides,
        [key]: value,
      });
    },
    [overrides, persist]
  );

  /**
   * Remove all admin changes and return to portfolioData.js defaults.
   */
  const resetAll = useCallback(() => {
    setOverrides({});

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Could not reset portfolio data:", error);
    }
  }, []);

  /**
   * Export the currently active portfolio data.
   */
  const exportData = useCallback(() => {
    return buildData(overrides);
  }, [overrides]);

  const contextValue = {
    data,
    base,
    editableKeys: EDITABLE_KEYS,
    updateSection,
    resetAll,
    exportData,
    hasOverrides: Object.keys(overrides).length > 0,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

/**
 * Custom hook used by portfolio components.
 */
export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      "useData must be used inside the DataProvider component."
    );
  }

  return context;
}
