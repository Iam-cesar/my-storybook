interface IContentSecurityPolicyPageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const ContentSecurityPolicyPage = ({
  children,
  ...props
}: IContentSecurityPolicyPageProps) => {
  return (
    <iframe
      src="https://testeluis.ensinioqa6.click"
      frameBorder="0"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
        minWidth: "500px",
      }}
    >
      Iframe not supported
    </iframe>
  );
};

export default ContentSecurityPolicyPage;
