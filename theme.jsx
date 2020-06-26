import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/vsDark";
import * as themes from "@mdx-deck/themes";

// TODO fix to not just be JSX-only
// Yes this is hacky as hell but I was rushed ¯\_(ツ)_/¯
const CodeBlock = ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={codeTheme}
      code={children}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px 20px 0" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const theme = {
  ...themes.dark,
  colors: {
    background: "#111",
    text: "#fff",
  },
  styles: {
    a: {
      color: "#73dbeb",
    },
    li: {
      marginTop: 20,
      marginBottom: 20,
    },
    blockquote: {
      background: "#333",
      padding: "0 30px",
    },
  },
  components: {
    code: CodeBlock,
  },
};

export const Attribution = ({ children }) => (
  <div style={{ position: "absolute", bottom: 0, right: 20, fontSize: 20 }}>
    {children}
  </div>
);

export default theme;
