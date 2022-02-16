import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface CodeBlockProps {
    language: string;
    value: React.ReactNode;
}

export const CodeBlock = ({ language, value }: CodeBlockProps) => {
    return (
        <div className="code-block">
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
                {value}
            </SyntaxHighlighter>
        </div>
    );
};
