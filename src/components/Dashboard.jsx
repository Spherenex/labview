import { useState,useEffect } from 'react';

// Main component
function CodeSysClone() {
  return (
    <div className="codesys-container">
      <MenuBar />
      <ToolBar />
      <div className="main-content">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <StatusBar />
    </div>
  );
}

// Menu Bar Component
function MenuBar() {
  const menuItems = ['File', 'Edit', 'View', 'Project', 'FBD/LD/IL', 'Ladder', 'Build', 'Online', 'Debug', 'Tools', 'Window', 'Help'];
  
  return (
    <div className="menu-bar">
      <div className="title-bar">
        <div className="title">Untitled2.project - CODESYS</div>
        <div className="window-controls">
          <button className="minimize">−</button>
          <button className="maximize">□</button>
          <button className="close">×</button>
        </div>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">{item}</div>
        ))}
      </div>
    </div>
  );
}

// Toolbar Component

// Toolbar Component with Updated Icons
function ToolBar() {
  return (
    <div className="toolbar">
      <div className="toolbar-row">
        <div className="toolbar-group">
          <button className="tool-button"><span>📄</span></button>
          <button className="tool-button"><span>📁</span></button>
          <button className="tool-button"><span>💾</span></button>
          <button className="tool-button"><span>🖨️</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>✂️</span></button>
          <button className="tool-button"><span>📋</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>↩️</span></button>
          <button className="tool-button"><span>↪️</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>🔍</span></button>
          <button className="tool-button"><span>👓</span></button>
          <button className="tool-button"><span>🔎</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>📌</span></button>
          <button className="tool-button"><span>📢</span></button>
          <button className="tool-button"><span>📊</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>▶️</span></button>
          <button className="tool-button"><span>⏹️</span></button>
          <button className="tool-button"><span>⏸️</span></button>
          <button className="tool-button"><span>⏭️</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>📊</span></button>
          <button className="tool-button"><span>🔧</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>📈</span></button>
        </div>
        <div className="toolbar-group">
          <div className="dropdown">
            <span>Application [Device: PLC Logic]</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <div className="toolbar-group right">
          <button className="tool-button"><span>➡️</span></button>
          <button className="tool-button"><span>⬅️</span></button>
          <span className="toolbar-separator">|</span>
          <button className="tool-button"><span>🔍</span></button>
          <button className="tool-button"><span>📝</span></button>
          <button className="tool-button"><span>📄</span></button>
          <button className="tool-button"><span>🔧</span></button>
          <button className="tool-button"><span>⚙️</span></button>
          <button className="tool-button"><span>🔍+</span></button>
          <button className="tool-button"><span>⚡</span></button>
          <button className="tool-button"><span className="dump-loader-icon"></span></button>
        </div>
      </div>
      <div className="toolbar-row">
        <div className="toolbar-group">
          {/* Network icon */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M7 6h10M7 6v12M17 6v12M7 18h10" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Connection icon */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M10 6l4 0M10 6v12M14 6v12M10 18h4" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M7 12h3M14 12h3" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Two vertical bars */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M9 6v12M15 6v12" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Parentheses */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M9 6c-2 3-2 9 0 12M15 6c2 3 2 9 0 12" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Double brackets */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M7 6v12M10 6v12M14 6v12M17 6v12" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Square brackets */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M8 6h2M8 6v12M8 18h2M14 6h2M16 6v12M14 18h2" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Connected lines */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M8 6v12M16 6v12M8 12h8" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Horizontal line */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M4 12h16" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Open contact */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M4 12h4M16 12h4" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M8 8v8M16 8v8" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Closed contact */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M4 12h4M16 12h4" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M8 8v8M16 8v8" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M8 12h8" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Coil */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M4 12h4M16 12h4" strokeWidth="1" />
              <circle fill="none" stroke="currentColor" cx="12" cy="12" r="4" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Box */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <rect fill="none" stroke="currentColor" x="7" y="7" width="10" height="10" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Function block */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <rect fill="none" stroke="currentColor" x="8" y="7" width="8" height="10" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M4 12h4M16 12h4" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Right arrow */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M5 12h11" strokeWidth="1" />
              <path fill="currentColor" d="M16 9l3 3-3 3z" />
            </svg>
          </button>
          
          {/* Left arrow */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M19 12H8" strokeWidth="1" />
              <path fill="currentColor" d="M8 9l-3 3 3 3z" />
            </svg>
          </button>
          
          {/* T-junction */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M12 5v14M5 12h14" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Cross junction */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M12 5v14M5 12h14" strokeWidth="1" />
              <circle fill="white" stroke="currentColor" cx="12" cy="12" r="1.5" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Jump */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M5 15c0 0 3 0 5 0 4 0 5-6 7-6 2 0 2 0 2 0" strokeWidth="1" />
              <path fill="currentColor" d="M18 6l2 3-2 3" />
            </svg>
          </button>
          
          {/* Return */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M19 15c0 0-3 0-5 0-4 0-5-6-7-6-2 0-2 0-2 0" strokeWidth="1" />
              <path fill="currentColor" d="M6 6l-2 3 2 3" />
            </svg>
          </button>
          
          {/* Positive edge */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M5 12h4M15 12h4" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M9 15V9h6" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Negative edge */}
          <button className="tool-button">
            <svg className="tool-icon" viewBox="0 0 24 24" width="16" height="16">
              <path fill="none" stroke="currentColor" d="M5 12h4M15 12h4" strokeWidth="1" />
              <path fill="none" stroke="currentColor" d="M9 9v6h6" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { ToolBar };
// Note: Don't add export default - just replace your existing ToolBar component with this one

// Note: Don't add export default - just replace your existing ToolBar component with this one

// Note: Don't add export default - just replace your existing ToolBar component with this one

// Left Panel (Project Explorer)
function LeftPanel() {
  const [activeTab, setActiveTab] = useState('Devices');
  
  return (
    <div className="left-panel">
      <div className="panel-tabs">
        <div 
          className={`panel-tab ${activeTab === 'Devices' ? 'active' : ''}`}
          onClick={() => setActiveTab('Devices')}
        >
          Devices
        </div>
        <div 
          className={`panel-tab ${activeTab === 'POUs' ? 'active' : ''}`}
          onClick={() => setActiveTab('POUs')}
        >
          POUs
        </div>
      </div>
      
      <div className="panel-content">
        <div className="tree-view">
          <div className="tree-item expanded">
            <span className="tree-icon">📁</span>
            <span className="tree-label">Untitled2</span>
          </div>
          
          <div className="tree-item expanded indent-1">
            <span className="tree-icon">💻</span>
            <span className="tree-label">Device (CODESYS Control Win V3 x64)</span>
          </div>
          
          <div className="tree-item expanded indent-2">
            <span className="tree-icon">📟</span>
            <span className="tree-label">PLC Logic</span>
          </div>
          
          <div className="tree-item expanded indent-3">
            <span className="tree-icon">🔧</span>
            <span className="tree-label">Application</span>
          </div>
          
          <div className="tree-item indent-4">
            <span className="tree-icon">📚</span>
            <span className="tree-label">Library Manager</span>
          </div>
          
          <div className="tree-item indent-4">
            <span className="tree-icon">📄</span>
            <span className="tree-label">PLC_PRG (PRG)</span>
          </div>
          
          <div className="tree-item expanded indent-4">
            <span className="tree-icon">⚙️</span>
            <span className="tree-label">Task Configuration</span>
          </div>
          
          <div className="tree-item indent-5">
            <span className="tree-icon">⏱️</span>
            <span className="tree-label">MainTask (IEC Tasks)</span>
          </div>
          
          <div className="tree-item indent-6">
            <span className="tree-icon">📄</span>
            <span className="tree-label">PLC_PRG</span>
          </div>
          
          <div className="tree-item expanded indent-5">
            <span className="tree-icon">⏱️</span>
            <span className="tree-label">VISU_TASK (IEC Tasks)</span>
          </div>
          
          <div className="tree-item indent-6">
            <span className="tree-icon">📄</span>
            <span className="tree-label">VisElems_Visu_Prg</span>
          </div>
          
          <div className="tree-item expanded indent-4">
            <span className="tree-icon">🖼️</span>
            <span className="tree-label">Visualization Manager</span>
          </div>
          
          <div className="tree-item indent-5">
            <span className="tree-icon">🎯</span>
            <span className="tree-label">TargetVisu</span>
          </div>
          
          <div className="tree-item indent-5">
            <span className="tree-icon">🌐</span>
            <span className="tree-label">WebVisu</span>
          </div>
          
          <div className="tree-item indent-4">
            <span className="tree-icon">🖼️</span>
            <span className="tree-label">Visualization</span>
          </div>
          
          <div className="tree-item indent-4 selected">
            <span className="tree-icon">🖼️</span>
            <span className="tree-label">Visualization_1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Center Panel (Code and Ladder Logic)

// Center Panel (Code and Ladder Logic)

// Center Panel (Code and Ladder Logic)
// Updated CenterPanel component to display the PDF directly

// Updated CenterPanel component to match the PDF viewer interface in the screenshot

function CenterPanel() {
  const [activeTab, setActiveTab] = useState('PLC_PRG');
  const [pdfPage, setPdfPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const totalPages = 2; // We have 2 images
  
  // Base64 encoded image data - this would be replaced with your actual images
  // You would typically import these images instead of using base64
  const images = {
    1: "/ladder_diagram_page1.png", // Replace with actual image path or import
    2: "/ladder_diagram_page2.png"  // Replace with actual image path or import
  };
  
  // Function to change pages
  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPdfPage(newPage);
    }
  };
  
  // Function to handle zoom
  const changeZoom = (delta) => {
    const newZoom = zoomLevel + delta;
    if (newZoom >= 50 && newZoom <= 200) {
      setZoomLevel(newZoom);
    }
  };
  
  return (
    <div className="center-panel">
      <div className="center-tabs">
        <div 
          className={`center-tab ${activeTab === 'PLC_PRG' ? 'active' : ''}`}
          onClick={() => setActiveTab('PLC_PRG')}
        >
          <span className="tab-icon">📄</span>
          <span className="tab-text">PLC_PRG</span>
          <span className="tab-close">×</span>
        </div>
      </div>
      
      <div className="center-content">
        <div className="code-editor">
          <div className="line-numbers">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="line-number">{i + 1}</div>
            ))}
          </div>
          <div className="code-content">
            <div className="code-line"><span className="keyword">PROGRAM</span> PLC_PRG</div>
            <div className="code-line"><span className="keyword">VAR</span></div>
            <div className="code-line indent">START: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">STOP: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">EFF: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">ON: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">ILS: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">LEVEL_A: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">VALVE_1: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">LEVEL_B: <span className="type">BOOL</span>;</div>
            <div className="code-line indent">VALVE_2: <span className="type">BOOL</span>;</div>
            
            <div className="code-line indent">U1, U2, U3, U4: <span className="type">INT</span>; <span className="comment">// Distances from ultrasonic sensors (cm)</span></div>
            <div className="code-line indent">threshold: <span className="type">INT</span> := 50; <span className="comment">// Distance threshold in cm</span></div>
            <div className="code-line indent">LaneGreen: <span className="type">INT</span> := 1; <span className="comment">// Current active lane (1 to 4)</span></div>
            <div className="code-line indent">L1, L2, L3, L4: <span className="type">STRING</span>; <span className="comment">// Traffic light states (RED or GREEN)</span></div>
            <div className="code-line indent">TimeCounter: <span className="type">TIME</span> := T#0s;</div>
            <div className="code-line indent">SwitchInterval: <span className="type">TIME</span> := T#5s; <span className="comment">// Interval to switch lanes</span></div>
            <div className="code-line indent">LastSwitch: <span className="type">TIME</span> := T#0s;</div>
            <div className="code-line indent">S1, S2, S3, S4: <span className="type">INT</span>; <span className="comment">// Servo angles: 0 = Closed, 90 = Open</span></div>
            <div className="code-line"><span className="keyword">END_VAR</span></div>
            
            <div className="code-line indent"><span className="comment">// === Timer Logic ===</span></div>
            <div className="code-line indent">TimeCounter := TIME(); <span className="comment">// Get system time</span></div>
            <div className="code-line indent"><span className="keyword">IF</span> (TimeCounter - LastSwitch) {'>'} SwitchInterval <span className="keyword">THEN</span></div>
            <div className="code-line indent indent">LaneGreen := LaneGreen + 1;</div>
            <div className="code-line indent indent"><span className="keyword">IF</span> LaneGreen {'>'} 4 <span className="keyword">THEN</span></div>
            <div className="code-line indent indent indent">LaneGreen := 1;</div>
            <div className="code-line indent indent"><span className="keyword">END_IF</span></div>
            <div className="code-line indent indent">LastSwitch := TimeCounter;</div>
            <div className="code-line indent"><span className="keyword">END_IF</span></div>
            
            <div className="code-line indent"><span className="comment">// === Traffic Light Logic ===</span></div>
            <div className="code-line indent">L1 := <span className="keyword">IF</span> LaneGreen = 1 <span className="keyword">THEN</span> 'GREEN' <span className="keyword">ELSE</span> 'RED' <span className="keyword">END_IF</span>;</div>
            <div className="code-line indent">L2 := <span className="keyword">IF</span> LaneGreen = 2 <span className="keyword">THEN</span> 'GREEN' <span className="keyword">ELSE</span> 'RED' <span className="keyword">END_IF</span>;</div>
            <div className="code-line indent">L3 := <span className="keyword">IF</span> LaneGreen = 3 <span className="keyword">THEN</span> 'GREEN' <span className="keyword">ELSE</span> 'RED' <span className="keyword">END_IF</span>;</div>
            <div className="code-line indent">L4 := <span className="keyword">IF</span> LaneGreen = 4 <span className="keyword">THEN</span> 'GREEN' <span className="keyword">ELSE</span> 'RED' <span className="keyword">END_IF</span>;</div>
          </div>
        </div>
        
        <div className="ladder-editor">
          {/* PDF Viewer Navigation Toolbar - Matching the screenshot */}
          <div className="pdf-toolbar">
            <div className="pdf-navigation">
              <button 
                className="nav-button"
                onClick={() => changePage(pdfPage - 1)}
                disabled={pdfPage === 1}
              >
                Previous
              </button>
              
              <div className="page-indicator">
                Page {pdfPage} of {totalPages}
              </div>
              
              <button 
                className="nav-button"
                onClick={() => changePage(pdfPage + 1)}
                disabled={pdfPage === totalPages}
              >
                Next
              </button>
            </div>
            
            <div className="zoom-controls">
              <div className="zoom-indicator">{zoomLevel} %</div>
              
              <button className="zoom-button zoom-out" onClick={() => changeZoom(-10)}>
                <div className="zoom-button-content">
                  <span className="magnifier">🔍</span>
                  <span className="zoom-sign">−</span>
                </div>
              </button>
              
              <button className="zoom-button zoom-in" onClick={() => changeZoom(10)}>
                <div className="zoom-button-content">
                  <span className="magnifier">🔍</span>
                  <span className="zoom-sign">+</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* PDF Display Area */}
          <div className="pdf-display">
            <div 
              className="pdf-content"
              style={{ transform: `scale(${zoomLevel / 100})` }}
            >
              {/* Display the current ladder diagram image */}
              <img 
                src={images[pdfPage]} 
                alt={`Ladder Logic Diagram Page ${pdfPage}`}
                className="pdf-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Ladder editor takes the remaining height */
        .ladder-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }
        
        /* PDF Viewer Styles - Matching the screenshot */
        .pdf-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 10px;
          background-color: #f0f0f0;
          border-bottom: 1px solid #ccc;
        }
        
        .pdf-navigation {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .nav-button {
          padding: 3px 10px;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 2px;
          font-size: 12px;
          cursor: pointer;
        }
        
        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-indicator {
          font-size: 12px;
          color: #333;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .zoom-indicator {
          font-size: 12px;
          color: #333;
        }
        
        .zoom-button {
          width: 40px;
          height: 30px;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 2px;
          position: relative;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .zoom-button-content {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .magnifier {
          position: absolute;
          font-size: 16px;
          left: 5px;
          top: 5px;
          color: #0078d7;
        }
        
        .zoom-sign {
          position: absolute;
          font-size: 16px;
          right: 10px;
          top: 5px;
          font-weight: bold;
          color: #0078d7;
        }
        
        /* PDF Display Area */
        .pdf-display {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
          overflow: auto;
          padding: 20px;
        }
        
        .pdf-content {
          transform-origin: center;
          transition: transform 0.2s ease;
        }
        
        .pdf-image {
          display: block;
          max-width: 100%;
          max-height: 100%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          background-color: white;
          margin-top: 70vh;
        }
      `}</style>
    </div>
  );
}
// Right Panel (Visualization)

// Updated Right Panel (Visualization) with interactive buttons

// Updated Right Panel (Visualization) with interactive buttons

// Right Panel with Direct Serial Communication
function RightPanel() {
  // State for the indicators
  const [indicators, setIndicators] = useState({
    indicator1: false,
    indicator2: false,
    indicator3: false,
    indicator4: false,
    indicator5: false,
    indicator6: false,
    indicator7: false
  });
  
  // State for sensor distances
  const [distances, setDistances] = useState({
    sensor1: '--',
    sensor2: '--',
    sensor3: '--',
    sensor4: '--'
  });
  
  // State for serial port
  const [serialPort, setSerialPort] = useState(null);
  const [message, setMessage] = useState('');
  
  // Function to initialize serial port
  const initializeSerial = async () => {
    if (!('serial' in navigator)) {
      console.error('Web Serial API not supported');
      setMessage('Serial API not supported. Use Chrome/Edge browser.');
      return;
    }
    
    try {
      // Request a serial port and open it
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      
      setSerialPort(port);
      setMessage('Serial connected - Ready to send commands');
      
      console.log('Connected to serial port');
      
      // Start reading data
      readSerialData(port);
      
    } catch (error) {
      console.error('Error connecting to serial port:', error);
      setMessage(`Serial error: ${error.message}`);
    }
  };
  
  // Function to read data from serial port
  const readSerialData = async (port) => {
    if (!port) return;
    
    const reader = port.readable.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        
        const chunk = decoder.decode(value);
        buffer += chunk;
        
        // Process complete lines
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep any incomplete line
        
        for (const line of lines) {
          if (line.trim()) {
            processData(line.trim());
          }
        }
      }
    } catch (error) {
      console.error('Error reading data:', error);
    } finally {
      reader.releaseLock();
    }
  };
  
  // Process incoming data
  const processData = (data) => {
    console.log('Received data:', data);
    
    // Check if this is a sensor data line (contains "Sensor")
    if (data.includes('Sensor')) {
      // Create a new distances object
      const newDistances = {...distances};
      let updated = false;
      
      // Parse sensor values - matches format: "Sensor 1: 78.62 cm"
      // We use a regex that captures the number and decimal value
      
      // Sensor 1
      const sensor1Match = data.match(/Sensor 1: ([\d.]+) cm/);
      if (sensor1Match) {
        newDistances.sensor1 = sensor1Match[1];
        updated = true;
      }
      
      // Sensor 2
      const sensor2Match = data.match(/Sensor 2: ([\d.]+) cm/);
      if (sensor2Match) {
        newDistances.sensor2 = sensor2Match[1];
        updated = true;
      }
      
      // Sensor 3
      const sensor3Match = data.match(/Sensor 3: ([\d.]+) cm/);
      if (sensor3Match) {
        newDistances.sensor3 = sensor3Match[1];
        updated = true;
      }
      
      // Sensor 4
      const sensor4Match = data.match(/Sensor 4: ([\d.]+) cm/);
      if (sensor4Match) {
        newDistances.sensor4 = sensor4Match[1];
        updated = true;
      }
      
      // Update state if any values changed
      if (updated) {
        console.log('Updating distances:', newDistances);
        setDistances(newDistances);
      }
    }
    
    // We can also check for switch state data if needed
    if (data.includes('Switch')) {
      // Parse switch states if needed
      // For now, we'll just log it
      console.log('Switch data received:', data);
      
      // You can add code here to update switch states if needed
    }
  };
  
  // Function to send command to serial port
  const sendCommand = async (command) => {
    if (!serialPort) {
      console.log('No serial port - initializing');
      await initializeSerial();
      
      // If initialization failed, exit
      if (!serialPort) return;
    }
    
    try {
      const encoder = new TextEncoder();
      const writer = serialPort.writable.getWriter();
      
      // Send the command followed by a newline
      await writer.write(encoder.encode(command + '\n'));
      console.log(`Sent command: ${command}`);
      setMessage(`Sent command: ${command}`);
      
      // Release the writer
      writer.releaseLock();
    } catch (error) {
      console.error('Error sending command:', error);
      setMessage(`Error sending ${command}: ${error.message}`);
      
      // Try to reconnect
      setSerialPort(null);
    }
  };
  
  // Simple toggle function for each button that also sends the command
  const toggleIndicator = (name, command) => {
    // Toggle the indicator state
    setIndicators(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
    
    // Send the command to the serial port
    sendCommand(command);
  };
  
  // For testing - simulate some distance values like your real data
  const simulateDistances = () => {
    const simulated = {
      sensor1: (Math.random() * 100).toFixed(2),
      sensor2: (Math.random() * 100).toFixed(2),
      sensor3: (Math.random() * 100).toFixed(2),
      sensor4: (Math.random() * 100).toFixed(2)
    };
    console.log('Setting simulated distances:', simulated);
    setDistances(simulated);
  };

  return (
    <div className="right-panel">
      <div className="right-panel-header">
        <div className="right-panel-tab active">
          <span className="tab-icon">🖼️</span>
          <span className="tab-text">Visualization_1</span>
          <span className="tab-close">×</span>
        </div>
        <div className="header-controls">
          <button className="header-button">▾</button>
        </div>
      </div>
      
      <div className="right-panel-content">
        {/* Connect buttons */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button 
            className="connect-button"
            onClick={initializeSerial}
          >
            Connect Serial
          </button>
          
          
        </div>
        
        {/* Serial status message */}
       
        
        <div className="visualization-area">
          <div className="visualization-grid">
            {/* Row 1 - M1 and S1 */}
            <div 
              className={`visualization-button silver ${indicators.indicator1 ? 'active' : ''}`}
              onClick={() => toggleIndicator('indicator1', 'M1')}
              title="Send M1 command"
            >
              <div className="command-label">M1</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div 
                className={`visualization-button silver ${indicators.indicator2 ? 'active' : ''}`}
                onClick={() => toggleIndicator('indicator2', 'S1')}
                title="Send S1 command"
              >
                <div className="command-label">S1</div>
              </div>
              <div style={{ marginTop: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                {distances.sensor1} cm
              </div>
            </div>
            <div 
              className={`visualization-button ${indicators.indicator1 ? 'green' : 'amber'} on`}
            ></div>
            
            {/* Row 2 - S2 and S3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div 
                className={`visualization-button silver ${indicators.indicator3 ? 'active' : ''}`}
                onClick={() => toggleIndicator('indicator3', 'S2')}
                title="Send S2 command"
              >
                <div className="command-label">S2</div>
              </div>
              <div style={{ marginTop: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                {distances.sensor2} cm
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div 
                className={`visualization-button silver ${indicators.indicator4 ? 'active' : ''}`}
                onClick={() => toggleIndicator('indicator4', 'S3')}
                title="Send S3 command"
              >
                <div className="command-label">S3</div>
              </div>
              <div style={{ marginTop: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                {distances.sensor3} cm
              </div>
            </div>
            <div 
              className={`visualization-button ${indicators.indicator2 ? 'green' : 'amber'} on`}
            ></div>
            
            {/* Row 3 - S4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div 
                className={`visualization-button silver ${indicators.indicator5 ? 'active' : ''}`}
                onClick={() => toggleIndicator('indicator5', 'S4')}
                title="Send S4 command"
              >
                <div className="command-label">S4</div>
              </div>
              <div style={{ marginTop: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                {distances.sensor4} cm
              </div>
            </div>
            <div 
              className={`visualization-button ${indicators.indicator5 ? 'green' : 'amber'} on`}
            ></div>
            <div 
              className={`visualization-button ${indicators.indicator3 ? 'green' : 'amber'} on`}
            ></div>
            
            {/* Row 4 - R */}
            <div 
              className={`visualization-button silver ${indicators.indicator6 ? 'active' : ''}`}
              onClick={() => toggleIndicator('indicator6', 'R')}
              title="Send R command"
            >
              <div className="command-label">R</div>
            </div>
            <div 
              className={`visualization-button ${indicators.indicator4 ? 'green' : 'amber'} on`}
            ></div>
            
            {/* Row 5 - M0 */}
            <div 
              className={`visualization-button ${indicators.indicator6 ? 'green' : 'amber'} on`}
            ></div>
            <div 
              className={`visualization-button silver ${indicators.indicator7 ? 'active' : ''}`}
              onClick={() => toggleIndicator('indicator7', 'M0')}
              title="Send M0 command"
            >
              <div className="command-label">M0</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="right-panel-sidebar">
        <div className="properties-header">
          <span>Properties</span>
          <button className="properties-button">▾</button>
        </div>
        <div className="properties-filter">
          <div className="filter-checkbox">
            <input type="checkbox" id="filter" />
            <label htmlFor="filter">Filter</label>
          </div>
          <div className="sort-by">
            <span>Sort by:</span>
            <button className="sort-button">▾</button>
          </div>
        </div>
        <div className="properties-sort-order">
          <div className="sort-order-dropdown">
            <span>Sort order</span>
            <button className="sort-order-button">▾</button>
          </div>
          <div className="advanced-checkbox">
            <input type="checkbox" id="advanced" />
            <label htmlFor="advanced">Advanced</label>
          </div>
        </div>
        <div className="properties-list">
          <div className="properties-header-row">
            <div className="property-name">Property</div>
            <div className="property-value">Value</div>
          </div>
          <div className="property-row">
            <div className="property-name">Serial Port</div>
            <div className="property-value">{serialPort ? 'Connected' : 'Disconnected'}</div>
          </div>
          <div className="property-row">
            <div className="property-name">Sensor 1</div>
            <div className="property-value">{distances.sensor1} cm</div>
          </div>
          <div className="property-row">
            <div className="property-name">Sensor 2</div>
            <div className="property-value">{distances.sensor2} cm</div>
          </div>
          <div className="property-row">
            <div className="property-name">Sensor 3</div>
            <div className="property-value">{distances.sensor3} cm</div>
          </div>
          <div className="property-row">
            <div className="property-name">Sensor 4</div>
            <div className="property-value">{distances.sensor4} cm</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .connect-button, .test-button {
          padding: 5px 10px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 3px;
          cursor: pointer;
        }
        
        .serial-status-banner {
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 5px 10px;
          margin-bottom: 10px;
          font-size: 12px;
          color: #333;
          text-align: center;
        }
      `}</style>
    </div>
  );
}


// Status Bar Component
function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-messages">Messages - Total: 0 error(s), 0 warning(s), 0 message(s)</div>
      </div>
      <div className="status-center">
        <div className="build-status">
          <span>Last build:</span>
          <span className="build-icon">🔴 0 🟠 0 🟢 0</span>
          <span className="precompile">Precompile ✓</span>
        </div>
        <div className="project-user">
          <span>Project user: (nobody)</span>
        </div>
      </div>
      <div className="status-right">
        <div className="coordinates">X : 12, Y : 248</div>
      </div>
    </div>
  );
}

// Add CSS
const styles = document.createElement('style');

styles.textContent = `
  /* Global Styles */

  /* Add these additional styles to your existing CSS */

.comment {
  color: #6A9955; /* Green color for comments */
  font-style: italic;
}

/* Increase the height of the code editor to accommodate more lines */
.code-editor {
  height: 50%; /* Adjust as needed */
}

/* Add a second level of indentation */
.indent.indent {
  margin-left: 40px;
}

/* Add a third level of indentation for nested if statements */
.indent.indent.indent {
  margin-left: 60px;
}

/* Make sure the code container has proper scrolling */
.code-content {
  max-height: 100%;
  overflow-y: auto;
}
.command-label{
    display: flex;
    justify-content: center;
    /* margin-left: 28px; */
    align-items: center;
    text-align: center;
        margin-top: 25px;

}
/* Ensure line numbers are properly displayed */
.line-numbers {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 5px 0;
  text-align: right;
  border-right: 1px solid #ccc;
  user-select: none;
  overflow-y: hidden;
}

.line-number {
  color: #999;
  font-size: 10px;
  padding: 0 5px;
  height: 1.2em; /* Ensure consistent height */
}
  /* Add these styles to your existing CSS file */

.visualization-button.green {
  background: radial-gradient(circle at 30% 30%, #4CAF50, #2E7D32);
  box-shadow: 0 0 15px rgba(76, 175, 80, 0.7);
}

.visualization-button.silver.active {
  background: radial-gradient(circle at 30% 30%, #e0e0e0, #a0a0a0);
  box-shadow: 0 0 10px rgba(160, 160, 160, 0.5) inset;
}

.visualization-button {
  cursor: pointer;
  transition: all 0.2s ease;
}

.visualization-button:hover {
  transform: scale(1.05);
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  .codesys-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f0f0;
    overflow: hidden;
  }
  
  /* Menu Bar Styles */
  .menu-bar {
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
  }
  
  .title-bar {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    color: black;
  }
  
  .window-controls {
    display: flex;
  }
  
  .window-controls button {
    background: none;
    border: none;
    color: white;
    font-size: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .menu-items {
    display: flex;
    padding: 2px 10px;
  }
  
  .menu-item {
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .menu-item:hover {
    background-color: #e0e0e0;
  }
  
  /* Toolbar Styles */
  .toolbar {
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
  }
  
  .toolbar-row {
    display: flex;
    padding: 2px 5px;
  }
  
  .toolbar-group {
    display: flex;
    align-items: center;
    margin-right: 5px;
    font-size: 14px;
  }
  
  .toolbar-separator {
    color: #ccc;
    margin: 0 3px;
  }
  
  .tool-button {
    background: none;
    border: 1px solid transparent;
    padding: 2px 4px;
    margin: 0 1px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .tool-button:hover {
    border: 1px solid #ccc;
    background-color: #e0e0e0;
  }
  
  .dropdown {
    display: flex;
    align-items: center;
    padding: 3px 6px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
  }
  
  .dropdown-arrow {
    margin-left: 5px;
  }
  
  .right {
    margin-left: auto;
  }
  
  /* Main Content Styles */
  .main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  
  /* Left Panel Styles */
  .left-panel {
    width: 280px;
    background-color: white;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  
  .panel-tabs {
    display: flex;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
  }
  
  .panel-tab {
    padding: 5px 10px;
    cursor: pointer;
    border-right: 1px solid #ccc;
  }
  
  .panel-tab.active {
    background-color: #e0e0e0;
  }
  
  .panel-content {
    flex: 1;
    overflow: auto;
  }
  
  .tree-view {
    padding: 5px;
    font-size: 12px;
  }
  
  .tree-item {
    padding: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .tree-item:hover {
    background-color: #e8e8e8;
  }
  
  .tree-item.selected {
    background-color: #cce8ff;
  }
  
  .tree-item.expanded > .tree-icon:before {
    content: "▼";
    font-size: 8px;
    margin-right: 2px;
  }
  
  .tree-icon {
    margin-right: 5px;
  }
  
  .indent-1 { margin-left: 15px; }
  .indent-2 { margin-left: 30px; }
  .indent-3 { margin-left: 45px; }
  .indent-4 { margin-left: 60px; }
  .indent-5 { margin-left: 75px; }
  .indent-6 { margin-left: 90px; }
  
  /* Center Panel Styles */
  .center-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    border-right: 1px solid #ccc;
  }
  
  .center-tabs {
    display: flex;
    background-color: #e0e0e0;
    border-bottom: 1px solid #ccc;
  }
  
  .center-tab {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: #f5f5f5;
    border-right: 1px solid #ccc;
    cursor: pointer;
  }
  
  .center-tab.active {
    background-color: white;
    border-bottom: 1px solid white;
    margin-bottom: -1px;
    font-size: 12px;
    font-weight: bold;
  }
  
  .tab-icon {
    margin-right: 5px;
  }
  
  .tab-close {
    margin-left: 5px;
    font-size: 10px;
  }
  
  .center-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  /* Code Editor Styles */
  .code-editor {
    display: flex;
    background-color: white;
    height: 40%;
    overflow: auto;
    border-bottom: 1px solid #ccc;
  }
  
  .line-numbers {
    background-color: #f0f0f0;
    padding: 5px;
    text-align: right;
    border-right: 1px solid #ccc;
    user-select: none;
  }
  
  .line-number {
    color: #999;
    font-size: 10px;
    padding: 0 5px;
  }
  
  .code-content {
    flex: 1;
    padding: 5px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
  }
  
  .code-line {
    padding: 0 5px;
    white-space: pre;
  }
  
  .indent {
    margin-left: 20px;
  }
  
  .keyword {
    color: blue;
    font-weight: bold;
  }
  
  .type {
    color: blue;
  }
  
  /* Ladder Editor Styles */
  .ladder-editor {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: hidden;
  }
  
  .ladder-toolbar, .ladder-footer {
    display: flex;
    justify-content: flex-end;
    padding: 3px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
  }
  
  .ladder-footer {
    border-top: 1px solid #ccc;
    border-bottom: none;
  }
  
  .zoom {
    margin-right: 5px;
  }
  
  .zoom-controls {
    display: flex;
  }
  
  .zoom-button {
    background: none;
    border: 1px solid #ccc;
    margin: 0 2px;
    cursor: pointer;
  }
  
  .ladder-content {
    flex: 1;
    overflow: auto;
    padding: 5px;
  }
  
  .rung {
    display: flex;
    margin-bottom: 10px;
  }
  
  .rung-number {
    width: 20px;
    text-align: center;
    color: #999;
    user-select: none;
  }
  
  .ladder-diagram {
    flex: 1;
    border-left: 1px solid #ccc;
    padding-left: 10px;
  }
  
  .ladder-row {
    display: flex;
    align-items: center;
    height: 30px;
  }
  
  .ladder-element {
    min-width: 70px;
    text-align: center;
    font-size: 10px;
  }
  
  .ladder-wire {
    font-family: 'Courier New', monospace;
    user-select: none;
  }
  
  /* Right Panel Styles */
  .right-panel {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  
  .right-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e0e0e0;
    border-bottom: 1px solid #ccc;
  }
  
  .right-panel-tab {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
  
  .header-controls {
    margin-right: 5px;
  }
  
  .header-button {
    background: none;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  .right-panel-content {
    flex: 1;
    overflow: auto;
    padding: 10px;
  }
  
  .visualization-area {
    width: 100%;
    height: 100%;
  }
  
  .visualization-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
  }
  
  .visualization-button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
  
  .visualization-button.silver {
    background: radial-gradient(circle at 30% 30%, #f0f0f0, #c0c0c0);
  }
  
  .visualization-button.amber {
    background: radial-gradient(circle at 30% 30%, #ffcc00, #cc9900);
  }
  
  .visualization-button.amber.on {
    background: radial-gradient(circle at 30% 30%, #ffcc00, #cc9900);
    box-shadow: 0 0 15px rgba(255, 204, 0, 0.7);
  }
  
  .right-panel-sidebar {
    width: 100%;
    border-top: 1px solid #ccc;
    background-color: #f5f5f5;
  }
  
  .properties-header {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    background-color: #e0e0e0;
    border-bottom: 1px solid #ccc;
  }
  
  .properties-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .properties-filter, .properties-sort-order {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .filter-checkbox, .advanced-checkbox {
    display: flex;
    align-items: center;
  }
  
  .sort-by {
    display: flex;
    align-items: center;
  }
  
  .sort-button, .sort-order-button {
    background: none;
    border: 1px solid #ccc;
    margin-left: 5px;
    cursor: pointer;
  }
  
  .properties-list {
    padding: 5px 10px;
  }
  
  .properties-header-row {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
  }
  
  /* Status Bar Styles */
  .status-bar {
    display: flex;
    padding: 3px 10px;
    background-color: #f0f0f0;
    border-top: 1px solid #ccc;
    font-size: 10px;
  }
  
  .status-left {
    flex: 1;
  }
  
  .status-center {
    display: flex;
    align-items: center;
  }
  
  .build-status {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  
  .build-icon {
    margin: 0 5px;
  }
  
  .precompile {
    margin-left: 5px;
  }
  
  .status-right {
    margin-left: 20px;
  }
`;

document.head.appendChild(styles);

export default CodeSysClone;