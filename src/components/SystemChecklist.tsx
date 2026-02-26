import { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { SYSTEMS } from '@/data/systems';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type VehicleType = 'van' | 'skoolie';
type SystemBudgets = Record<string, number>;
type SystemChecked = Record<string, boolean>;

export function SystemChecklist() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('van');
  const [vehiclePrice, setVehiclePrice] = useState<number>(0);
  const [budgets, setBudgets] = useState<SystemBudgets>({});
  const [checked, setChecked] = useState<SystemChecked>({});

  const systemsTotal = Object.values(budgets).reduce((sum, v) => sum + v, 0);
  const totalBudget = vehiclePrice + systemsTotal;
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const handleBudgetChange = (systemId: string, value: string) => {
    const parsed = parseFloat(value);
    setBudgets(prev => ({ ...prev, [systemId]: isNaN(parsed) ? 0 : parsed }));
  };

  const handleCheckedChange = (systemId: string, value: boolean) => {
    setChecked(prev => ({ ...prev, [systemId]: value }));
  };

  let verdictIcon: typeof CheckCircle;
  let verdictLabel: string;
  let verdictClass: string;

  if (checkedCount === 6) {
    verdictIcon = CheckCircle;
    verdictLabel = 'All systems accounted for';
    verdictClass = 'border-green-200 bg-green-50 text-green-700';
  } else if (checkedCount >= 3) {
    verdictIcon = AlertTriangle;
    verdictLabel = 'Some systems missing';
    verdictClass = 'border-yellow-200 bg-yellow-50 text-yellow-700';
  } else {
    verdictIcon = XCircle;
    verdictLabel = 'Major systems unaccounted for';
    verdictClass = 'border-red-200 bg-red-50 text-red-700';
  }

  const VerdictIcon = verdictIcon;

  return (
    <div className="space-y-5">
      {/* Vehicle selection */}
      <div className="rounded-lg border border-border p-5 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Your Vehicle</h2>

        <div className="space-y-1.5">
          <Label htmlFor="vehicle-type">Vehicle type</Label>
          <Select value={vehicleType} onValueChange={v => setVehicleType(v as VehicleType)}>
            <SelectTrigger id="vehicle-type" className="max-w-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="van">Van</SelectItem>
              <SelectItem value="skoolie">Skoolie</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="vehicle-price">Vehicle purchase price ($)</Label>
          <Input
            id="vehicle-price"
            type="number"
            min="0"
            step="500"
            placeholder="0"
            value={vehiclePrice || ''}
            onChange={e => {
              const parsed = parseFloat(e.target.value);
              setVehiclePrice(isNaN(parsed) ? 0 : parsed);
            }}
            className="max-w-xs"
          />
        </div>
      </div>

      {SYSTEMS.map(system => (
        <div key={system.id} className="rounded-lg border border-border p-5 space-y-4">
          {/* System header */}
          <div>
            <h2 className="text-base font-semibold text-foreground">{system.name}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{system.description}</p>
          </div>

          {/* Read-only component list */}
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            {system.components.map(component => (
              <li key={component.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-muted-foreground/50" />
                {component.name}
              </li>
            ))}
          </ul>

          {/* Budget input */}
          <div className="space-y-1.5 pt-1">
            <Label htmlFor={`budget-${system.id}`} className="text-sm">
              Your estimated budget for this system ($)
            </Label>
            <Input
              id={`budget-${system.id}`}
              type="number"
              min="0"
              step="100"
              placeholder="0"
              value={budgets[system.id] ?? ''}
              onChange={e => handleBudgetChange(system.id, e.target.value)}
              className="max-w-xs"
            />
          </div>

          {/* Accounted-for checkbox */}
          <div className="flex items-center gap-2.5">
            <Checkbox
              id={`checked-${system.id}`}
              checked={checked[system.id] ?? false}
              onCheckedChange={v => handleCheckedChange(system.id, v === true)}
            />
            <Label
              htmlFor={`checked-${system.id}`}
              className="text-sm font-normal cursor-pointer"
            >
              I have accounted for this system in my budget
            </Label>
          </div>
        </div>
      ))}

      {/* Results summary */}
      <div className="rounded-lg border border-border bg-secondary/30 p-6 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Build Cost Summary</h2>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Total estimated build cost</span>
            <span className="text-2xl font-bold text-foreground">
              ${totalBudget.toLocaleString()}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Systems accounted for</span>
            <span className="text-sm font-medium text-foreground">{checkedCount} of 6</span>
          </div>
        </div>

        <div className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${verdictClass}`}>
          <VerdictIcon className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm font-medium">{verdictLabel}</span>
        </div>
      </div>
    </div>
  );
}
