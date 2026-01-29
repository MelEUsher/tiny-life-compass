import { CheckCircle, AlertTriangle, XCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CalculationResult, VerdictType } from '@/lib/costCalculator';

interface ResultsViewProps {
  result: CalculationResult;
  onReset: () => void;
}

const verdictConfig: Record<VerdictType, {
  icon: typeof CheckCircle;
  label: string;
  className: string;
}> = {
  viable: {
    icon: CheckCircle,
    label: 'Looks Viable',
    className: 'verdict-viable',
  },
  risky: {
    icon: AlertTriangle,
    label: 'High Risk of Overruns',
    className: 'verdict-risky',
  },
  unrealistic: {
    icon: XCircle,
    label: 'Likely Unrealistic',
    className: 'verdict-unrealistic',
  },
};

export function ResultsView({ result, onReset }: ResultsViewProps) {
  const config = verdictConfig[result.verdict];
  const Icon = config.icon;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Verdict Banner */}
      <div className={`${config.className} rounded-lg p-6 text-center`}>
        <Icon className="mx-auto h-12 w-12 mb-3" />
        <h2 className="text-2xl font-bold">{config.label}</h2>
      </div>

      {/* Pressure Points */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">What to Know</h3>
        <ul className="space-y-3">
          {result.pressurePoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Future Unlock Placeholder */}
      <div className="border border-dashed border-border rounded-lg p-6 bg-muted/30">
        <div className="flex items-center gap-3 text-muted-foreground mb-2">
          <Lock className="h-5 w-5" />
          <span className="font-medium">Detailed Breakdown</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Itemized build costs, monthly expense breakdown, and personalized recommendations coming soon.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onReset} className="flex-1">
          Start Over
        </Button>
      </div>
    </div>
  );
}
