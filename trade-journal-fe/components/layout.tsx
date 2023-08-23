
interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (<div>{children}</div>);
}
export default Layout;