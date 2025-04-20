export default function DesignLayout({ children }) {
  return (
    <>
      <div className="w-full bg-white">
        <div id="modal-root" />
        {children}
      </div>
    </>
  );
}
