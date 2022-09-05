export const Footer = () => (
  <footer className="bg-2 text-fluid-2 py-3">
    <div className="flex flex-col gap-2 items-center">
      <div>
        <span className="mr-2">Created by: Christian Penrod</span>
        <strong className="text-1">©{process.env.COPYRIGHT_YEAR}</strong>
      </div>
      <div>
        <span className="mr-2">Updated On:</span>
        <strong className="text-1">{process.env.LAST_UPDATE}</strong>
      </div>
    </div>
  </footer>
);
