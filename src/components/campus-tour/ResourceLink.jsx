/**
 * @param {object} props
 * @param {string} props.title - The title of the resource (e.g., "Downloadable Tour Brochure (PDF)")
 * @param {string} props.subtitle - The descriptive text
 */

function ResourceLink({ title, subtitle }) {
  return (
    <div className="py-2">
      {/* Use bold and slightly larger text for the main link/title */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  );
}
export default ResourceLink;
