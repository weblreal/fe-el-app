type ITabContentProps = { label?: string; children: React.ReactNode };

const TabContent: React.FC<ITabContentProps> = ({ children }) => {
  return <>{children}</>;
};

export default TabContent;
