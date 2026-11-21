import React from 'react';
import { ProjectDiagramId } from '../data/portfolioData';

interface ProjectVisualizerProps {
  diagramId: ProjectDiagramId;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({
  diagramId,
}) => {
  switch (diagramId) {
    case 'sentinelflow':
      return (
        <svg
          viewBox="0 0 360 150"
          role="img"
          aria-label="SentinelFlow conceptual security signal correlation network"
          className="h-full w-full"
        >
          <rect width="360" height="150" fill="#101110" />
          {/* Signal Nodes & Correlations */}
          <line x1="65" y1="42" x2="180" y2="75" stroke="#30352F" strokeWidth="1.5" />
          <line x1="65" y1="108" x2="180" y2="75" stroke="#30352F" strokeWidth="1.5" />
          <line x1="180" y1="75" x2="292" y2="42" stroke="#C5F467" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="180" y1="75" x2="292" y2="108" stroke="#30352F" strokeWidth="1.5" />

          <rect x="20" y="26" width="84" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="32" y="46" fill="#A4AAA2" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">AUTH LOGS</text>

          <rect x="20" y="92" width="84" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="32" y="112" fill="#A4AAA2" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">ENDPOINT</text>

          <rect x="132" y="54" width="96" height="42" rx="4" fill="#20251F" stroke="#C5F467" />
          <text x="145" y="72" fill="#C5F467" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">AGENT TRIAGE</text>
          <text x="145" y="86" fill="#F2F1EA" fontSize="9.5" fontFamily="Space Grotesk, sans-serif">Correlate</text>

          <rect x="256" y="26" width="84" height="32" rx="4" fill="#171917" stroke="#C5F467" strokeOpacity="0.6" />
          <text x="267" y="46" fill="#F2F1EA" fontSize="9" fontFamily="IBM Plex Mono, monospace">APPROVAL</text>

          <rect x="256" y="92" width="84" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="267" y="112" fill="#A4AAA2" fontSize="9" fontFamily="IBM Plex Mono, monospace">RUNBOOK</text>
        </svg>
      );

    case 'atlas':
      return (
        <svg
          viewBox="0 0 360 150"
          role="img"
          aria-label="Atlas Intelligence layered document retrieval pipeline"
          className="h-full w-full"
        >
          <rect width="360" height="150" fill="#101110" />
          {/* Layered Documents */}
          <rect x="24" y="34" width="68" height="76" rx="4" fill="#171917" stroke="#30352F" />
          <rect x="30" y="40" width="68" height="76" rx="4" fill="#171917" stroke="#30352F" />
          <rect x="36" y="46" width="68" height="76" rx="4" fill="#20251F" stroke="#A4AAA2" strokeOpacity="0.6" />
          <line x1="46" y1="64" x2="92" y2="64" stroke="#A4AAA2" strokeWidth="1.5" />
          <line x1="46" y1="76" x2="86" y2="76" stroke="#30352F" strokeWidth="1.5" />
          <line x1="46" y1="88" x2="90" y2="88" stroke="#30352F" strokeWidth="1.5" />

          <path d="M 104 82 L 146 82" stroke="#C5F467" strokeWidth="1.5" />
          <rect x="146" y="48" width="82" height="58" rx="4" fill="#171917" stroke="#C5F467" />
          <text x="157" y="72" fill="#C5F467" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">HYBRID RAG</text>
          <text x="157" y="88" fill="#F2F1EA" fontSize="9.5" fontFamily="Space Grotesk, sans-serif">Vector + BM25</text>

          <path d="M 228 82 L 260 82" stroke="#30352F" strokeWidth="1.5" />
          <rect x="260" y="38" width="76" height="76" rx="4" fill="#171917" stroke="#30352F" />
          <text x="272" y="60" fill="#F2F1EA" fontSize="9" fontFamily="IBM Plex Mono, monospace">GROUNDED</text>
          <text x="272" y="74" fill="#A4AAA2" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">[src_01]</text>
          <text x="272" y="88" fill="#A4AAA2" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">[src_04]</text>
          <line x1="272" y1="100" x2="322" y2="100" stroke="#C5F467" strokeWidth="1.5" />
        </svg>
      );

    case 'predictiq':
      return (
        <svg
          viewBox="0 0 360 150"
          role="img"
          aria-label="PredictIQ model evaluation curve and feature importance plot"
          className="h-full w-full"
        >
          <rect width="360" height="150" fill="#101110" />
          {/* ROC-style Curve Panel */}
          <rect x="22" y="22" width="145" height="106" rx="4" fill="#171917" stroke="#30352F" />
          <line x1="38" y1="112" x2="150" y2="112" stroke="#30352F" strokeWidth="1" />
          <line x1="38" y1="36" x2="38" y2="112" stroke="#30352F" strokeWidth="1" />
          <line x1="38" y1="112" x2="148" y2="38" stroke="#30352F" strokeDasharray="3 3" strokeWidth="1" />
          <path
            d="M 38 112 Q 52 46 148 38"
            fill="none"
            stroke="#C5F467"
            strokeWidth="2"
          />
          <text x="46" y="46" fill="#A4AAA2" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">EVALUATION CURVE</text>

          {/* Feature Attribution Bars */}
          <rect x="184" y="22" width="154" height="106" rx="4" fill="#171917" stroke="#30352F" />
          <text x="198" y="42" fill="#A4AAA2" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">FEATURE SIGNALS</text>
          <rect x="198" y="54" width="112" height="10" rx="2" fill="#C5F467" />
          <rect x="198" y="72" width="84" height="10" rx="2" fill="#F2F1EA" fillOpacity="0.7" />
          <rect x="198" y="90" width="58" height="10" rx="2" fill="#A4AAA2" fillOpacity="0.6" />
          <rect x="198" y="108" width="34" height="10" rx="2" fill="#30352F" />
        </svg>
      );

    case 'flowpilot':
      return (
        <svg
          viewBox="0 0 360 150"
          role="img"
          aria-label="FlowPilot multi-agent planner, research, execution, and verification topology"
          className="h-full w-full"
        >
          <rect width="360" height="150" fill="#101110" />
          {/* Orchestration Graph */}
          <path d="M 92 75 L 146 42" stroke="#30352F" strokeWidth="1.5" />
          <path d="M 92 75 L 146 108" stroke="#30352F" strokeWidth="1.5" />
          <path d="M 224 42 L 264 75" stroke="#C5F467" strokeWidth="1.5" />
          <path d="M 224 108 L 264 75" stroke="#30352F" strokeWidth="1.5" />

          <rect x="20" y="56" width="74" height="38" rx="4" fill="#20251F" stroke="#C5F467" />
          <text x="31" y="79" fill="#F2F1EA" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">PLANNER</text>

          <rect x="146" y="24" width="82" height="36" rx="4" fill="#171917" stroke="#30352F" />
          <text x="157" y="46" fill="#A4AAA2" fontSize="9" fontFamily="IBM Plex Mono, monospace">RESEARCH</text>

          <rect x="146" y="90" width="82" height="36" rx="4" fill="#171917" stroke="#30352F" />
          <text x="157" y="112" fill="#A4AAA2" fontSize="9" fontFamily="IBM Plex Mono, monospace">EXECUTE</text>

          <rect x="262" y="56" width="78" height="38" rx="4" fill="#171917" stroke="#C5F467" strokeOpacity="0.7" />
          <text x="274" y="79" fill="#C5F467" fontSize="9.5" fontFamily="IBM Plex Mono, monospace">VERIFY</text>
        </svg>
      );

    case 'devmind':
      return (
        <svg
          viewBox="0 0 360 150"
          role="img"
          aria-label="DevMind codebase dependency and architecture graph"
          className="h-full w-full"
        >
          <rect width="360" height="150" fill="#101110" />
          {/* Module Dependency Graph */}
          <path d="M 102 44 L 180 75 L 264 44" stroke="#30352F" strokeWidth="1.5" fill="none" />
          <path d="M 102 106 L 180 75 L 264 106" stroke="#C5F467" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />

          <rect x="24" y="28" width="82" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="35" y="48" fill="#A4AAA2" fontSize="9" fontFamily="IBM Plex Mono, monospace">routes.ts</text>

          <rect x="24" y="90" width="82" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="35" y="110" fill="#A4AAA2" fontSize="9" fontFamily="IBM Plex Mono, monospace">schema.py</text>

          <rect x="142" y="56" width="78" height="38" rx="4" fill="#20251F" stroke="#C5F467" />
          <text x="154" y="79" fill="#C5F467" fontSize="9" fontFamily="IBM Plex Mono, monospace">AST INDEX</text>

          <rect x="256" y="28" width="80" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="266" y="48" fill="#F2F1EA" fontSize="9" fontFamily="IBM Plex Mono, monospace">DEPS MAP</text>

          <rect x="256" y="90" width="80" height="32" rx="4" fill="#171917" stroke="#30352F" />
          <text x="266" y="110" fill="#F2F1EA" fontSize="9" fontFamily="IBM Plex Mono, monospace">CODE Q&amp;A</text>
        </svg>
      );
  }
};
