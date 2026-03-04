import { useState } from "react";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { SYSTEMS } from "@/data/systems";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type VehicleType = "van" | "skoolie";
type ComponentCosts = Record<string, number>;
type SystemChecked = Record<string, boolean>;

export function SystemChecklist() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("van");
  const [vehiclePrice, setVehiclePrice] = useState<number>(0);
  const [componentCosts, setComponentCosts] = useState<ComponentCosts>({});
  const [checked, setChecked] = useState<SystemChecked>({});

  const handleComponentCostChange = (componentId: string, value: string) => {
    const parsed = parseFloat(value);
    setComponentCosts((prev) => ({
      ...prev,
      [componentId]: isNaN(parsed) ? 0 : parsed,
    }));
  };

  const handleCheckedChange = (systemId: string, value: boolean) => {
    setChecked((prev) => ({ ...prev, [systemId]: value }));
  };

  const systemComponentTotal = (systemId: string) => {
    const system = SYSTEMS.find((s) => s.id === systemId);
    if (!system) return 0;
    return system.components.reduce(
      (sum, c) => sum + (componentCosts[c.id] ?? 0),
      0,
    );
  };

  const grandTotal =
    vehiclePrice +
    SYSTEMS.reduce((sum, system) => sum + systemComponentTotal(system.id), 0);

  const systemsWithCosts = Object.values(checked).filter(Boolean).length;

  // Verdict
  let verdictIcon: typeof CheckCircle;
  let verdictLabel: string;
  let verdictClass: string;

  if (systemsWithCosts === 6) {
    verdictIcon = CheckCircle;
    verdictLabel = "All systems accounted for";
    verdictClass = "verdict-banner verdict-viable";
  } else if (systemsWithCosts >= 3) {
    verdictIcon = AlertTriangle;
    verdictLabel = "Some systems missing";
    verdictClass = "verdict-banner verdict-risky";
  } else {
    verdictIcon = XCircle;
    verdictLabel = "Major systems unaccounted for";
    verdictClass = "verdict-banner verdict-unrealistic";
  }

  const VerdictIcon = verdictIcon;

  return (
    <div className="space-y-5">
      {/* Vehicle selection */}
      <div className="rounded-lg border border-border p-5 space-y-4">
        <h2 className="text-base font-semibold text-foreground">
          Your Vehicle
        </h2>

        <div className="space-y-1.5">
          <Label htmlFor="vehicle-type">Vehicle type</Label>
          <Select
            value={vehicleType}
            onValueChange={(v) => setVehicleType(v as VehicleType)}
          >
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
            value={vehiclePrice || ""}
            onChange={(e) => {
              const parsed = parseFloat(e.target.value);
              setVehiclePrice(isNaN(parsed) ? 0 : parsed);
            }}
            className="max-w-xs"
          />
        </div>
      </div>

      {/* System cards */}
      {SYSTEMS.map((system) => (
        <div
          key={system.id}
          className="rounded-lg border border-border p-5 space-y-3"
        >
          <div className="flex items-baseline justify-between">
            <h4 className="text-sm font-semibold text-foreground">
              {system.name}
            </h4>
            <span className="text-sm font-medium text-foreground">
              ${systemComponentTotal(system.id).toLocaleString()}
            </span>
          </div>

          <ul className="space-y-2">
            {system.components.map((component) => (
              <li
                key={component.id}
                className="grid grid-cols-[1fr_auto] items-center gap-4"
              >
                <Label
                  htmlFor={`cost-${component.id}`}
                  className="text-sm font-normal text-muted-foreground"
                >
                  {component.name}
                </Label>
                <Input
                  id={`cost-${component.id}`}
                  type="number"
                  min="0"
                  step="10"
                  placeholder="0"
                  value={componentCosts[component.id] ?? ""}
                  onChange={(e) =>
                    handleComponentCostChange(component.id, e.target.value)
                  }
                  className="w-32 text-right"
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 pt-1">
            <Checkbox
              id={`checked-${system.id}`}
              checked={checked[system.id] ?? false}
              onCheckedChange={(v) =>
                handleCheckedChange(system.id, v === true)
              }
            />
            <Label
              htmlFor={`checked-${system.id}`}
              className="text-sm font-normal cursor-pointer"
            >
              I have accounted for this system
            </Label>
          </div>
        </div>
      ))}

      {/* Results summary */}
      <div className="rounded-lg border border-border bg-secondary/30 p-6 space-y-4">
        <h2 className="text-base font-semibold text-foreground">
          Build Cost Summary
        </h2>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              Total estimated build cost
            </span>
            <span className="text-2xl font-bold text-foreground">
              ${grandTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              Systems accounted for
            </span>
            <span className="text-sm font-medium text-foreground">
              {systemsWithCosts} of 6
            </span>
          </div>
        </div>

        <div
          className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${verdictClass}`}
        >
          <VerdictIcon className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm font-medium">{verdictLabel}</span>
        </div>

        <div className="flex items-baseline justify-between rounded-lg border border-border bg-secondary/30 px-5 py-4">
          <span className="text-sm font-semibold text-foreground">
            Grand total (all components)
          </span>
          <span className="text-2xl font-bold text-foreground">
            ${grandTotal.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
