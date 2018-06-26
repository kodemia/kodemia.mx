const Code = ({ children, syntax, mode = 'dark' }) => (
  <pre
    className={(mode === 'dark' ? 'dark' : '') + (syntax ? ` ${syntax}` : '')}
  >
    <code>{children}</code>
    <style jsx>
      {`
        pre {
          background: #272822;
          box-shadow: 0px 2px 4px -2px #000;
          padding: 20px;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        code {
          font-family: 'IBM Plex Mono';
          font-size: 13px;
          line-height: 20px;
        }

        pre.dark {
          border-color: #333;
        }

        .dark code {
          color: #fff;
        }

        .dark.shell code {
          color: #50e3c2;
        }
      `}
    </style>
  </pre>
)

export default Code
