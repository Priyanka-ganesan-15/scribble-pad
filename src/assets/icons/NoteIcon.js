export default function NoteIcon(props) {
    const { svgProps } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      className={svgProps}
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"></path>
      </g>
    </svg>
  );
}
