import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import SVG from 'react-inlinesvg';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import icons from '../assets/icons';

interface CodeBlockProps {
    code: string;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = (props: CodeBlockProps) => {
    const { code } = props;
    return (
        <div className='relative w-full'>
            <SyntaxHighlighter
                language='typescript'
                showLineNumbers
                style={anOldHope}
                customStyle={{
                    width: '100%',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    fontSize: '14px',
                    lineHeight: '1.75rem',
                    backgroundColor: 'transparent',
                }}
            >
                {code}
            </SyntaxHighlighter>
            <button
                type='button'
                onClick={() => navigator.clipboard.writeText(code)}
                className='absolute top-0 right-0 duration-150 hover:scale-125'
            >
                <SVG src={icons.copy} />
            </button>
        </div>
    );
};

export default CodeBlock;
