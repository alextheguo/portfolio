// Unlike layout.tsx, a template remounts on every navigation, which lets each
// page ease in when you move between tabs.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
