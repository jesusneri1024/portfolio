"use client";

import React, { useState } from 'react';


import { ChevronDown, ChevronRight, Code, Cpu, Settings, Monitor, FileText, ExternalLink, Github } from 'lucide-react';

interface ExpandedSections {
  overview: boolean;
  architecture: boolean;
  components: boolean;
  pipeline: boolean;
  tech: boolean;
  build: boolean;
}

interface TechStackItem {
  component: string;
  tech: string;
  purpose: string;
}

interface CodeSnippets {
  cmake: string;
  context: string;
  pipeline: string;
}

interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sectionKey: keyof ExpandedSections;
  children: React.ReactNode;
  expandedSections: ExpandedSections;
  toggleSection: (section: keyof ExpandedSections) => void;
}

interface CodeBlockProps {
  code: string;
  language?: string;
}

const MyEnginePortfolio: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    overview: true,
    architecture: false,
    components: false,
    pipeline: false,
    tech: false,
    build: false
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const codeSnippets: CodeSnippets = {
    cmake: `cmake_minimum_required(VERSION 3.10)
project(MyEngine)
set(CMAKE_CXX_STANDARD 17)

add_subdirectory(external/glfw)
include_directories(
    external/glfw/include
    external/glad/include
    external/glm
)
add_executable(MyEngine
    src/main.cpp
    external/glad/src/glad.c
)
target_link_libraries(MyEngine glfw)`,
    
    context: `glfwInit();
glfwCreateWindow();
glfwMakeContextCurrent();
gladLoadGLLoader();`,

    pipeline: `// Data flow through the rendering pipeline
Vertex Position (layout location 0)
+ Vertex Color (layout location 1)
+ Transform Matrix (uniform)
    ↓
Vertex Shader → Clip Space Position + Interpolated Color
    ↓
Rasterizer → Fragments
    ↓
Fragment Shader → Final Color
    ↓
Framebuffer → Display`
  };

  const techStack: TechStackItem[] = [
    { component: "Window System", tech: "GLFW", purpose: "Window creation and input" },
    { component: "OpenGL Loading", tech: "GLAD", purpose: "Function pointer loader" },
    { component: "Math Library", tech: "GLM", purpose: "Matrix and vector operations" },
    { component: "Shading Language", tech: "GLSL", purpose: "Shader programs" },
    { component: "Build System", tech: "CMake", purpose: "Cross-platform build system" },
    { component: "Language", tech: "C++17", purpose: "Core implementation language" }
  ];

  const capabilities: string[] = [
    "Window creation with OpenGL context using GLFW",
    "OpenGL function loading via GLAD",
    "Rendering primitives with custom shaders",
    "Matrix transformations via GLM",
    "Complete vertex-fragment rendering pipeline"
  ];

  const SectionHeader: React.FC<SectionHeaderProps> = ({ 
    icon: Icon, 
    title, 
    sectionKey, 
    children, 
    expandedSections, 
    toggleSection 
  }) => (
    <div className="mb-8">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center gap-3 w-full text-left p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 mb-4"
        aria-expanded={expandedSections[sectionKey]}
        aria-controls={`section-${sectionKey}`}
      >
        <Icon className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {expandedSections[sectionKey] ? 
          <ChevronDown className="w-5 h-5 text-slate-400 ml-auto" /> : 
          <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
        }
      </button>
      {expandedSections[sectionKey] && (
        <div id={`section-${sectionKey}`} className="pl-4 space-y-4">
          {children}
        </div>
      )}
    </div>
  );

  const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "cpp" }) => (
    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-slate-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-950 text-slate-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4">MyEngine</h1>
        <p className="text-xl text-slate-300 mb-6">
          Lightweight OpenGL Graphics Engine
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">C++17</span>
          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">OpenGL 4.1</span>
          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">CMake</span>
        </div>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a 
            href="https://github.com/jesusneri1024/myengine" 
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>

        </div>
      </div>

      {/* Demo GIF */}
        <div className="mt-8 mb-8 flex justify-center">
          <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <picture>
                <source srcSet="/consoleEngine.gif" type="image/gif" />
                <img src="/consoleEngine.gif" alt="Demo" />
            </picture>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <p className="text-white text-sm font-medium">Live Demo</p>
            </div>
          </div>
        </div>

      {/* Overview Section */}
      <SectionHeader 
        icon={FileText} 
        title="Overview" 
        sectionKey="overview"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="bg-slate-800/50 rounded-lg p-6">
          <p className="text-slate-300 mb-6 leading-relaxed">
            <strong className="text-white">MyEngine</strong> is a lightweight OpenGL-based graphics engine written in C++ 
            that demonstrates the fundamentals of 3D rendering with modern OpenGL. This project showcases 
            comprehensive understanding of graphics programming principles and low-level rendering techniques.
          </p>
          
          <h3 className="text-lg font-semibold text-white mb-4">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-slate-700/50 rounded">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">{capability}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
            <p className="text-blue-200 text-sm">
              <strong>Current Implementation:</strong> Renders a rotating, colored triangle with complete 
              vertex-fragment pipeline, providing foundation for advanced graphics applications.
            </p>
          </div>
        </div>
      </SectionHeader>

      {/* System Architecture */}
      <SectionHeader 
        icon={Cpu} 
        title="System Architecture" 
        sectionKey="architecture"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Architecture Components</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-400">External Libraries</h4>
                <p className="text-sm text-slate-300">GLFW, GLAD, GLM</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-green-500">
                <h4 className="font-semibold text-green-400">Application Layer</h4>
                <p className="text-sm text-slate-300">main.cpp, shaders</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400">Rendering Pipeline</h4>
                <p className="text-sm text-slate-300">VAO, VBO, Shaders</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Directory Structure</h3>
            <CodeBlock code={`/myengine
│
├── /external
│   ├── /glfw
│   ├── /glad
│   └── /glm
├── /src
│   ├── main.cpp
│   ├── shader.vert
│   └── shader.frag
├── CMakeLists.txt
└── README.md`} language="bash" />
          </div>
        </div>
      </SectionHeader>

      {/* Core Components */}
      <SectionHeader 
        icon={Settings} 
        title="Core Components" 
        sectionKey="components"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-400" />
                Window & OpenGL Context
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                GLFW handles window creation and OpenGL context management with event handling.
              </p>
              <CodeBlock code={codeSnippets.context} />
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Geometry System</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-700/50 rounded">
                  <h4 className="font-semibold text-blue-400 text-sm">VBOs</h4>
                  <p className="text-xs text-slate-300">Store vertex data</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded">
                  <h4 className="font-semibold text-green-400 text-sm">VAOs</h4>
                  <p className="text-xs text-slate-300">Store attribute config</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Shader System</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-900/20 border border-blue-800/50 rounded">
                  <h4 className="font-semibold text-blue-400 text-sm">Vertex Shader</h4>
                  <p className="text-xs text-slate-300">Handles vertex transformations</p>
                </div>
                <div className="p-3 bg-purple-900/20 border border-purple-800/50 rounded">
                  <h4 className="font-semibold text-purple-400 text-sm">Fragment Shader</h4>
                  <p className="text-xs text-slate-300">Manages fragment color output</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Transformation System</h3>
              <p className="text-slate-300 text-sm mb-3">Uses GLM for matrix operations:</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-700 text-green-100 rounded text-xs">Rotation</span>
                <span className="px-2 py-1 bg-blue-700 text-blue-100 rounded text-xs">Scaling</span>
              </div>
            </div>
          </div>
        </div>
      </SectionHeader>

      {/* Rendering Pipeline */}
      <SectionHeader 
        icon={Code} 
        title="Rendering Pipeline" 
        sectionKey="pipeline"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="bg-slate-800/50 rounded-lg p-6">
          <p className="text-slate-300 mb-6">
            The rendering pipeline transforms 3D vertex data into 2D pixels through several distinct stages:
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Pipeline Flow</h3>
            <CodeBlock code={codeSnippets.pipeline} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3">Rendering Loop Steps</h4>
              <ol className="space-y-2 text-sm">
                {[
                  "Clear screen (glClear)",
                  "Use shader program (glUseProgram)",
                  "Calculate transformation matrix",
                  "Update transform uniform",
                  "Bind VAO (glBindVertexArray)",
                  "Draw arrays (glDrawArrays)",
                  "Swap buffers (glfwSwapBuffers)",
                  "Poll events (glfwPollEvents)"
                ].map((step, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Memory Management</h4>
              <div className="space-y-2">
                {[
                  { action: "Create VAO/VBO", func: "glGenVertexArrays/glGenBuffers" },
                  { action: "Create Shader", func: "glCreateProgram" },
                  { action: "Delete Resources", func: "glDelete*" },
                  { action: "Cleanup GLFW", func: "glfwTerminate" }
                ].map((item, index) => (
                  <div key={index} className="p-2 bg-slate-700/50 rounded text-xs">
                    <div className="font-semibold text-slate-200">{item.action}</div>
                    <div className="text-slate-400 font-mono">{item.func}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionHeader>

      {/* Technology Stack */}
      <SectionHeader 
        icon={Monitor} 
        title="Technology Stack" 
        sectionKey="tech"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="bg-slate-800/50 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Component</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Technology</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((item, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/25">
                    <td className="py-3 px-4 text-slate-300 font-medium">{item.component}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-700 text-blue-100 rounded text-sm font-mono">
                        {item.tech}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-300 text-sm">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionHeader>

      {/* Build System */}
      <SectionHeader 
        icon={Settings} 
        title="Build System" 
        sectionKey="build"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">CMake Configuration</h3>
            <CodeBlock code={codeSnippets.cmake} />
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Build Requirements</h3>
              <div className="space-y-2">
                {[
                  "CMake 3.10+",
                  "C++17-compatible compiler",
                  "OpenGL 4.1+",
                  "Git"
                ].map((req, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
              <CodeBlock code={`git clone https://github.com/jesusneri1024/myengine.git
cd myengine
mkdir build && cd build
cmake ..
cmake --build .
./MyEngine`} language="bash" />
            </div>
          </div>
        </div>

        

      </SectionHeader>


    </div>
  );
};

export default MyEnginePortfolio;