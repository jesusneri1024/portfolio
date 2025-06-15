"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Gamepad2, Cpu, Settings, Monitor, FileText, Github, Play, Zap, Users, Brain } from 'lucide-react';

import UnityGame from './UnityGame';

interface ExpandedSections {
  overview: boolean;
  architecture: boolean;
  player: boolean;
  generation: boolean;
  combat: boolean;
  tech: boolean;
  assets: boolean;
}

interface TechStackItem {
  component: string;
  tech: string;
  purpose: string;
}

interface SystemFeature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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

const SynapseRunnerPortfolio: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    overview: true,
    architecture: false,
    player: false,
    generation: false,
    combat: false,
    tech: false,
    assets: false
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const techStack: TechStackItem[] = [
    { component: "Game Engine", tech: "Unity 6000.0.36f1", purpose: "Core game framework" },
    { component: "Rendering", tech: "Universal Render Pipeline", purpose: "Modern rendering pipeline" },
    { component: "Physics", tech: "Unity 3D Physics", purpose: "Rigidbody-based movement" },
    { component: "Input System", tech: "Legacy Unity Input", purpose: "Player controls" },
    { component: "Scene Management", tech: "Unity SceneManager", purpose: "Menu/Game transitions" },
    { component: "Audio System", tech: "Unity AudioSource", purpose: "Sound effects and music" },
    { component: "UI Framework", tech: "TextMeshPro", purpose: "Advanced text rendering" },
    { component: "Build System", tech: "Unity Build Pipeline", purpose: "Cross-platform deployment" }
  ];

  const gameFeatures: SystemFeature[] = [
    {
      name: "Infinite Scrolling",
      description: "Procedural corridor generation with dynamic content spawning",
      icon: Zap
    },
    {
      name: "First-Person Controls",
      description: "WASD movement with mouse look, jumping, and combat mechanics",
      icon: Gamepad2
    },
    {
      name: "Dynamic Enemies",
      description: "AI-driven drone enemies with detection and combat systems",
      icon: Brain
    },
    {
      name: "Cyberpunk Aesthetic",
      description: "Industrial environment with glitch-style UI and audio design",
      icon: Monitor
    }
  ];

  const playerControls = [
    { input: "WASD", action: "Player movement" },
    { input: "Mouse", action: "Camera control" },
    { input: "Space", action: "Jump (double jump available)" },
    { input: "Left Shift", action: "Crouch/Fast fall" },
    { input: "E", action: "Climb obstacles" },
    { input: "Left Click", action: "Shoot weapon" },
    { input: "R", action: "Reload weapon" }
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
        <Icon className="w-6 h-6 text-cyan-400" />
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

  const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "csharp" }) => (
    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-slate-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-950 text-slate-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl border border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          SynapseRunner
        </h1>
        <p className="text-xl text-slate-300 mb-6">
          3D Endless Runner with Cyberpunk Aesthetic
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm">Unity 3D</span>
          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">First-Person</span>
          <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">Procedural</span>
          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Combat</span>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://github.com/jesusneri1024/SynapseRunner" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
          <a 
            href="https://www.jesusneri1024.com/unitygame/index.html" 
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
          >
            <Play className="w-4 h-4" />
            Play Demo
          </a>
        </div>
      </div>

      {/* Game Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {gameFeatures.map((feature, index) => (
          <div key={index} className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-600/20 rounded-lg">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overview Section */}
      <SectionHeader 
        icon={FileText} 
        title="Project Overview" 
        sectionKey="overview"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="bg-slate-800/50 rounded-lg p-6">
          <p className="text-slate-300 mb-6 leading-relaxed">
            <strong className="text-white">SynapseRunner</strong> is a sophisticated 3D endless runner built in Unity 
            that combines fast-paced gameplay with procedural level generation and cyberpunk aesthetics. The game 
            features first-person controls, dynamic enemy AI, and an infinite scrolling world system.
          </p>
          
          <h3 className="text-lg font-semibold text-white mb-4">Core Game Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-400">Player Systems</h4>
                <p className="text-sm text-slate-300">Movement, shooting, health management</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400">Procedural Generation</h4>
                <p className="text-sm text-slate-300">ChunkGenerator and dynamic content spawning</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-pink-500">
                <h4 className="font-semibold text-pink-400">AI Combat</h4>
                <p className="text-sm text-slate-300">DroneAI with detection and targeting</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-400">Asset Management</h4>
                <p className="text-sm text-slate-300">External asset system with 53 files</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-800/50 rounded-lg">
            <p className="text-cyan-200 text-sm">
              <strong>Technical Achievement:</strong> Implements a complete infinite runner with modular architecture, 
              demonstrating expertise in Unity development, procedural generation, and game systems design.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Scene Architecture</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-400">Menu.unity</h4>
                <p className="text-sm text-slate-300">Game navigation and setup</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400">Test1.unity</h4>
                <p className="text-sm text-slate-300">Main game loop and systems</p>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-4 mt-6">Component Structure</h3>
            <CodeBlock code={`GameObject Hierarchy:
├── Capsula (Player)
│   ├── PlayerMovement
│   ├── Shoot
│   ├── PlayerHealth
│   └── Camera + Gun Model
├── ChunkGenerator
│   └── ChunkController
├── Canvas (UI System)
│   ├── Game HUD
│   └── Death UI
└── AudioSources
    └── Environmental Audio`} language="yaml" />
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">System Communication</h3>
            <div className="space-y-4">
              <div className="p-3 bg-cyan-900/20 border border-cyan-800/50 rounded">
                <h4 className="font-semibold text-cyan-400 text-sm">Event-Driven</h4>
                <p className="text-xs text-slate-300">Player death → UI activation → Generator stop</p>
              </div>
              <div className="p-3 bg-purple-900/20 border border-purple-800/50 rounded">
                <h4 className="font-semibold text-purple-400 text-sm">Tag System</h4>
                <p className="text-xs text-slate-300">Collision detection via Unity tags</p>
              </div>
              <div className="p-3 bg-pink-900/20 border border-pink-800/50 rounded">
                <h4 className="font-semibold text-pink-400 text-sm">Component References</h4>
                <p className="text-xs text-slate-300">Direct GameObject connections</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4 mt-6">Performance Features</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Dynamic chunk lifecycle management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Automatic memory cleanup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Progressive difficulty scaling</span>
              </div>
            </div>
          </div>
        </div>
      </SectionHeader>

      {/* Player Systems */}
      <SectionHeader 
        icon={Gamepad2} 
        title="Player Systems" 
        sectionKey="player"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Controls & Input</h3>
            <div className="space-y-2">
              {playerControls.map((control, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                  <span className="font-mono text-cyan-400 text-sm">{control.input}</span>
                  <span className="text-slate-300 text-sm">{control.action}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Combat System</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-700/50 rounded">
                  <h4 className="font-semibold text-cyan-400 text-sm">Weapon</h4>
                  <p className="text-xs text-slate-300">6 rounds, 2s reload</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded">
                  <h4 className="font-semibold text-purple-400 text-sm">Health</h4>
                  <p className="text-xs text-slate-300">100 HP system</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Movement Features</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Double jump mechanics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Crouch and climb interactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Physics-based Rigidbody movement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionHeader>

      {/* Procedural Generation */}
      <SectionHeader 
        icon={Zap} 
        title="Procedural Generation" 
        sectionKey="generation"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="bg-slate-800/50 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">ChunkGenerator System</h3>
              <CodeBlock code={`public class ChunkGenerator : MonoBehaviour
{
    public GameObject[] chunkPrefabs;
    public float chunkLength = 10f;
    public int chunksAhead = 5;
    public float scrollSpeed = 5f;
    
    private List<GameObject> activeChunks;
    
    void Update()
    {
        MoveChunks();
        CheckSpawnChunk();
        CleanupChunks();
        IncreaseSpeed();
    }
}`} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Dynamic Content</h3>
              <div className="space-y-3">
                <div className="p-3 bg-cyan-900/20 border border-cyan-800/50 rounded">
                  <h4 className="font-semibold text-cyan-400 text-sm">Corridor Prefabs</h4>
                  <p className="text-xs text-slate-300">8 unique corridor templates (PasilloJ1-J8)</p>
                </div>
                <div className="p-3 bg-purple-900/20 border border-purple-800/50 rounded">
                  <h4 className="font-semibold text-purple-400 text-sm">Dynamic Spawning</h4>
                  <p className="text-xs text-slate-300">Enemies, obstacles, and power-ups</p>
                </div>
                <div className="p-3 bg-pink-900/20 border border-pink-800/50 rounded">
                  <h4 className="font-semibold text-pink-400 text-sm">Optimization</h4>
                  <p className="text-xs text-slate-300">Automatic cleanup and memory management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Generation Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { step: "1", title: "Spawn Check", desc: "Distance-based trigger" },
                { step: "2", title: "Prefab Select", desc: "Random corridor choice" },
                { step: "3", title: "Content Gen", desc: "Dynamic element spawning" },
                { step: "4", title: "Cleanup", desc: "Remove distant chunks" }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-slate-700/50 rounded text-center">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionHeader>

      {/* Combat & AI */}
      <SectionHeader 
        icon={Brain} 
        title="Combat & AI Systems" 
        sectionKey="combat"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">DroneAI Behavior</h3>
            <CodeBlock code={`public class DroneAI : MonoBehaviour
{
    public float detectionRange = 10f;
    public GameObject projectilePrefab;
    public Transform target;
    
    void Update()
    {
        if (PlayerInRange())
        {
            RotateTowardsPlayer();
            Shoot();
        }
    }
}`} />
          </div>

          <div >
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Enemy Types</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-slate-700/50 rounded">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Ground Enemies - Floor-based threats</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-slate-700/50 rounded">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300 text-sm">Floating Enemies - Aerial drones</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Interactive Elements</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-red-900/20 border border-red-800/50 rounded text-center">
                  <span className="text-red-400 text-xs font-semibold">Laser Hazards</span>
                </div>
                <div className="p-2 bg-green-900/20 border border-green-800/50 rounded text-center">
                  <span className="text-green-400 text-xs font-semibold">Health Packs</span>
                </div>
                <div className="p-2 bg-blue-900/20 border border-blue-800/50 rounded text-center">
                  <span className="text-blue-400 text-xs font-semibold">Climbable Objects</span>
                </div>
                <div className="p-2 bg-yellow-900/20 border border-yellow-800/50 rounded text-center">
                  <span className="text-yellow-400 text-xs font-semibold">Obstacles</span>
                </div>
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
                      <span className="px-2 py-1 bg-cyan-700 text-cyan-100 rounded text-sm font-mono">
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

      {/* Asset Management */}
      <SectionHeader 
        icon={Settings} 
        title="Asset Management" 
        sectionKey="assets"
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">External Asset System</h3>
            <p className="text-slate-300 text-sm mb-4">
              Manages 53 external files through a README.txt manifest system for large media assets.
            </p>
            
            <div className="space-y-3">
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-400">Audio Assets (15+)</h4>
                <p className="text-xs text-slate-300">Combat sounds, background music, UI feedback</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-400">Visual Assets (30+)</h4>
                <p className="text-xs text-slate-300">Textures, UI graphics, environmental materials</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded border-l-4 border-pink-500">
                <h4 className="font-semibold text-pink-400">Typography (2)</h4>
                <p className="text-xs text-slate-300">Custom glitch-style fonts for cyberpunk aesthetic</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Development Workflow</h3>
              <CodeBlock code={`# Git Workflow
git checkout -b feature-branch
# Make changes
git commit -m "feat: description"
git push origin feature-branch
# Create Pull Request
# Review & Merge to main`} language="bash" />
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Structure</h3>
              <CodeBlock code={`Assets/
├── Scenes/
│   ├── Menu.unity
│   └── Test1.unity
├── Scripts/
│   ├── Player/
│   ├── Map/
│   └── Combat/
├── Prefabs/
└── ExternalAssets/
    └── README.txt`} language="yaml" />
            </div>
          </div>
        </div>
      </SectionHeader>
    </div>
  );
};

export default SynapseRunnerPortfolio;