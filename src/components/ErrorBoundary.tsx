import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Zap } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('NEUROREEL Runtime Error caught by ErrorBoundary:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#02040A] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md glass-panel-glow p-8 rounded-3xl border-cyan-400/40 space-y-6 shadow-glass">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400 mx-auto flex items-center justify-center shadow-cyan-glow">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold font-display text-white">
                Neural Engine Recovery Mode
              </h2>
              <p className="text-xs text-slate-300 font-mono">
                A non-fatal rendering context pulse occurred. Click below to re-initialize the neural pipeline.
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-blue-glow hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 uppercase font-mono"
            >
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              <span>Re-Initialize NEUROREEL</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
