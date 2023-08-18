export default function Layout({ children }) {
  return (
    <div>
      <div className="fixed bg-black/40 top-0 left-0 w-screen h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
