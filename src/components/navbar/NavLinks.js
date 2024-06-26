import NoteIcon from "../../assets/icons/NoteIcon.js";
import BinIcon from "../../assets/icons/BinIcon.js";
import ArchiveIcon from "../../assets/icons/ArchiveIcon.js";
import useNotesData from "../../hooks/useNotesData.js";
import { Link } from "react-router-dom";
import LabelIcon from "../../assets/icons/LabelIcon.js";

export default function NavLinks(props) {
  const { setSidebarOpen, setQuery, setPathName, collapsed } = props;
  const { labeledNotes } = useNotesData();

  function getAllLabels() {
    const labels = labeledNotes.map((n) => n.label);
    const mergedLabels = [].concat(...labels);
    const allLabels = [...new Set(mergedLabels)].sort((a, b) =>
      a.localeCompare(b)
    );
    return allLabels;
  }

  function handleClick() {
    setSidebarOpen(false);
    setQuery("");
  }

  return (
    <>
      <Link
        to="/"
        className={`text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all ${collapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <NoteIcon svgProps="mr-4 ml-4 flex-shrink-0 h-4 w-4"/>
        {!collapsed && <span className="ml-6 font-thin ml-1">Notes</span>}
      </Link>

      <Link
        to="/archive"
        className={`text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all ${collapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <ArchiveIcon svgProps="mr-4 ml-4 flex-shrink-0 h-4 w-4" />
        {!collapsed && <span className="ml-6 font-thin ml-1">Archive</span>}
      </Link>

      <Link
        to="/bin"
        className={`text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all ${collapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <BinIcon svgProps="mr-4 ml-4 flex-shrink-0 h-4 w-4" />
        {!collapsed && <span className="ml-6 font-thin ml-1">Bin</span>}
      </Link>

      {/* all labels */}
      {getAllLabels().map((label) => (
        <Link
          to={`/${label.replace(/\s/g, "-")}`}
          onClick={() => {
            setPathName(label.replace(/\s/g, "-"));
            handleClick();
          }}
          className={`text-white font-poppins hover:bg-sky-300/50 group flex items-center px-2 py-2 text-lg font-medium rounded-md break-all ${collapsed ? "justify-center" : ""}`}
          key={label}
        >
          <LabelIcon svgProps="mr-4 ml-4 flex-shrink-0 h-4 w-4" />
          {!collapsed && <span className="ml-6 font-thin ml-1">{label}</span>}
        </Link>
      ))}
    </>
  );
}
