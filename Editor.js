import React ,{useState} from 'react';
import 'codemirror/lib/codemirror.css'; 
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';

const Editor = ({ language, displayName, value, onChange }) => {
    const [open, setOpen]=useState(true);
    function handleChange(editor, data, value) {
        onChange(value);
    }
    return(
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button>X</button>
            </div>
            <Controlled
               onBeforeChange={handleChange}
               value={value}
               className="code-mirror-wrapper"
               options={{ 
                   linewrapping: true,
                     lint: true,
                        mode: language,
                        theme: 'material',
               }}
            />
        </div>

        
    )
}
export default Editor;