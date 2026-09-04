import { Activity, ShieldAlert, TrendingUp } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h1 className="text-xl font-bold tracking-tight">IBKR Trading Bot</h1>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
            Phase 1 Ready
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-medium mb-1">
              <Activity className="w-4 h-4" />
              <span>Status</span>
            </div>
            <p className="text-base font-semibold text-slate-200">Scaffolded</p>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
            <div className="flex items-center space-x-2 text-slate-400 text-xs font-medium mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Kill Switch</span>
            </div>
            <p className="text-base font-semibold text-slate-200">Armed</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center">
          Vite + React + TypeScript + Tailwind CSS configured.
        </p>
      </div>
    </div>
  );
}
