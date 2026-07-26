import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Save,
  Trash2,
  Plus,
  RotateCcw,
  Download,
  Upload,
  ArrowLeft,
  Eye,
  Database,
} from "lucide-react";
import { useData } from "../context/DataContext";

/**
 * Admin panel (/admin)
 * --------------------
 * Edit every section live. Changes are saved to localStorage and instantly
 * reflected on the public site.
 */

// Friendly labels for each editable key
const SECTION_LABELS = {
  heroData: "Hero",
  aboutData: "About",
  highlightSections: "Research / Focus Areas",
  galleryItems: "Gallery Items",
  galleryCategories: "Gallery Categories",
  awardsCertificates: "Awards & Certificates",
  skills: "Skills",
  education: "Education",
  experience: "Experience",
  publications: "Publications",
  contactInfo: "Contact Info",
  socialLinks: "Social Links",
  navLinks: "Navigation",
  siteMeta: "Site Meta",
};

export default function Admin() {
  const {
    data,
    base,
    editableKeys,
    updateSection,
    resetAll,
    exportData,
  } = useData();

  const [activeKey, setActiveKey] = useState("heroData");

  const [draft, setDraft] = useState(() =>
    JSON.stringify(data[activeKey], null, 2)
  );

  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const isArray = Array.isArray(data[activeKey]);

  const selectSection = (key) => {
    setActiveKey(key);
    setDraft(JSON.stringify(data[key], null, 2));
    setError("");
    setSaved(false);
  };

  const save = () => {
    try {
      const parsed = JSON.parse(draft);

      updateSection(activeKey, parsed);

      setError("");
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);
    } catch (e) {
      setError(`Invalid JSON: ${e.message}`);
    }
  };

  const addItem = () => {
    try {
      const parsed = JSON.parse(draft);

      if (!Array.isArray(parsed)) {
        return;
      }

      const template = parsed[0]
        ? blankFrom(parsed[0])
        : {
            id: `new-${Date.now()}`,
          };

      if (template.id !== undefined) {
        template.id = `new-${Date.now()}`;
      }

      const next = [...parsed, template];

      setDraft(JSON.stringify(next, null, 2));
      setError("");
    } catch (e) {
      setError(`Fix JSON before adding: ${e.message}`);
    }
  };

  const resetSectionToFile = () => {
    setDraft(JSON.stringify(base[activeKey], null, 2));
    setError("");
    setSaved(false);
  };

  const doExport = () => {
    const blob = new Blob(
      [JSON.stringify(exportData(), null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "portfolio-content-backup.json";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  const doImport = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const importedData = JSON.parse(reader.result);

        Object.entries(importedData).forEach(([key, value]) => {
          if (editableKeys.includes(key)) {
            updateSection(key, value);
          }
        });

        selectSection(activeKey);

        alert("Backup imported successfully.");
      } catch (err) {
        alert(`Could not import file: ${err.message}`);
      }
    };

    reader.readAsText(file);
  };

  const resetEverything = () => {
    const shouldReset = window.confirm(
      "Reset ALL sections to the original portfolioData.js? This clears your saved edits."
    );

    if (!shouldReset) {
      return;
    }

    resetAll();

    setDraft(JSON.stringify(base[activeKey], null, 2));
    setError("");
    setSaved(false);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-navy-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-gold" />

            <h1 className="font-display text-lg font-bold">
              Content Manager
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={doExport}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />

              <span className="hidden sm:inline">
                Export
              </span>
            </button>

            <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5">
              <Upload className="h-4 w-4" />

              <span className="hidden sm:inline">
                Import
              </span>

              <input
                type="file"
                accept="application/json"
                hidden
                onChange={doImport}
              />
            </label>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gold-gradient px-3 py-2 text-sm font-semibold text-navy-900"
            >
              <Eye className="h-4 w-4" />

              <span className="hidden sm:inline">
                View Site
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-8 lg:grid-cols-12">
        {/* Left sidebar */}
        <aside className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Sections
            </div>

            <nav className="space-y-1">
              {editableKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => selectSection(key)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeKey === key
                      ? "bg-gold/15 text-gold"
                      : "text-white/65 hover:bg-white/5"
                  }`}
                >
                  <span>
                    {SECTION_LABELS[key] || key}
                  </span>

                  {Array.isArray(data[key]) && (
                    <span className="text-xs text-white/40">
                      {data[key].length}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-3 border-t border-white/10 pt-3">
              <button
                type="button"
                onClick={resetEverything}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-300/80 hover:bg-red-500/10"
              >
                <RotateCcw className="h-4 w-4" />

                Reset everything
              </button>
            </div>
          </div>
        </aside>

        {/* Main editor */}
        <main className="lg:col-span-9">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-bold">
                  {SECTION_LABELS[activeKey] || activeKey}
                </h2>

                <p className="text-sm text-white/45">
                  {isArray
                    ? "List of items. Edit values, add or remove items, then save."
                    : "Edit the fields below, then save."}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {isArray && (
                  <button
                    type="button"
                    onClick={addItem}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gold/30 px-3 py-2 text-sm font-medium text-gold hover:bg-gold/10"
                  >
                    <Plus className="h-4 w-4" />

                    Add item
                  </button>
                )}

                <button
                  type="button"
                  onClick={resetSectionToFile}
                  title="Revert this section to portfolioData.js"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={save}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gold-gradient px-4 py-2 text-sm font-semibold text-navy-900"
                >
                  <Save className="h-4 w-4" />

                  Save Section
                </button>
              </div>
            </div>

            {isArray && (
              <ArrayPreview
                draft={draft}
                setDraft={setDraft}
                setError={setError}
              />
            )}

            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">
              Edit content (JSON)
            </label>

            <textarea
              value={draft}
              onChange={(event) => {
                setDraft(event.target.value);
                setSaved(false);
              }}
              spellCheck={false}
              className="h-[460px] w-full rounded-xl border border-white/10 bg-navy-950 p-4 font-mono text-sm text-gold-soft/90 outline-none focus:border-gold/40"
            />

            {error && (
              <div className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
                {error}
              </div>
            )}

            {saved && (
              <div className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-300">
                ✓ Saved! Your site is updated.
              </div>
            )}

            <p className="mt-4 text-xs leading-relaxed text-white/40">
              Edits made here are stored in your browser.
              Use{" "}
              <span className="text-white/60">
                Export
              </span>{" "}
              to keep a backup. For permanent GitHub changes,
              edit{" "}
              <code className="text-gold-soft">
                src/data/portfolioData.js
              </code>
              .
            </p>
          </div>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/55 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to site
          </Link>
        </main>
      </div>
    </div>
  );
}

/**
 * Shows a compact preview of array items.
 * Each item can be deleted from this preview.
 */
function ArrayPreview({
  draft,
  setDraft,
  setError,
}) {
  const parsed = useMemo(() => {
    try {
      const value = JSON.parse(draft);

      return Array.isArray(value) ? value : null;
    } catch {
      return null;
    }
  }, [draft]);

  if (!parsed) {
    return null;
  }

  const remove = (indexToRemove) => {
    const next = parsed.filter(
      (_, index) => index !== indexToRemove
    );

    setDraft(JSON.stringify(next, null, 2));
    setError("");
  };

  if (parsed.length === 0) {
    return (
      <div className="mb-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/45">
        No items yet. Click “Add item” to create one.
      </div>
    );
  }

  return (
    <div className="mb-5 space-y-2">
      {parsed.map((item, index) => (
        <div
          key={`${index}-${item?.id || "item"}`}
          className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5"
        >
          <span className="truncate text-sm text-white/75">
            {typeof item === "string"
              ? item
              : item.title ||
                item.name ||
                item.category ||
                item.platform ||
                item.label ||
                `Item ${index + 1}`}
          </span>

          <button
            type="button"
            onClick={() => remove(index)}
            className="shrink-0 rounded-md p-1.5 text-red-300/70 transition-colors hover:bg-red-500/10 hover:text-red-300"
            title="Delete item"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

/**
 * Creates an empty copy of an existing object.
 * This is used when the Add Item button is clicked.
 */
function blankFrom(object) {
  if (
    typeof object !== "object" ||
    object === null
  ) {
    return "";
  }

  const output = Array.isArray(object) ? [] : {};

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "string") {
      output[key] = "";
    } else if (typeof value === "number") {
      output[key] = 0;
    } else if (Array.isArray(value)) {
      output[key] = [];
    } else if (
      typeof value === "object" &&
      value !== null
    ) {
      output[key] = blankFrom(value);
    } else {
      output[key] = value;
    }
  }

  return output;
}
