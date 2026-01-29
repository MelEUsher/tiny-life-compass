import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { FormInputs, BuildType, BuildApproach, RegionLevel } from '@/lib/costCalculator';

interface CostFormProps {
  onSubmit: (inputs: FormInputs) => void;
}

export function CostForm({ onSubmit }: CostFormProps) {
  const [buildType, setBuildType] = useState<BuildType>('van');
  const [buildApproach, setBuildApproach] = useState<BuildApproach>('diy');
  const [regionLevel, setRegionLevel] = useState<RegionLevel>('medium');
  const [estimatedBuildBudget, setEstimatedBuildBudget] = useState<string>('15000');
  
  // Monthly costs
  const [monthlyFuel, setMonthlyFuel] = useState<string>('200');
  const [monthlyInsurance, setMonthlyInsurance] = useState<string>('150');
  const [monthlyParking, setMonthlyParking] = useState<string>('300');
  const [monthlyMaintenance, setMonthlyMaintenance] = useState<string>('100');
  const [monthlyUtilities, setMonthlyUtilities] = useState<string>('50');
  const [monthlyInternet, setMonthlyInternet] = useState<string>('75');
  const [monthlyGroceries, setMonthlyGroceries] = useState<string>('400');
  
  // Optional toggles
  const [hasStorage, setHasStorage] = useState(false);
  const [hasPets, setHasPets] = useState(false);
  const [hasRepairBuffer, setHasRepairBuffer] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      buildType,
      buildApproach,
      regionLevel,
      estimatedBuildBudget: parseFloat(estimatedBuildBudget) || 0,
      monthlyFuel: parseFloat(monthlyFuel) || 0,
      monthlyInsurance: parseFloat(monthlyInsurance) || 0,
      monthlyParking: parseFloat(monthlyParking) || 0,
      monthlyMaintenance: parseFloat(monthlyMaintenance) || 0,
      monthlyUtilities: parseFloat(monthlyUtilities) || 0,
      monthlyInternet: parseFloat(monthlyInternet) || 0,
      monthlyGroceries: parseFloat(monthlyGroceries) || 0,
      hasStorage,
      hasPets,
      hasRepairBuffer,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Build Configuration */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Build Configuration</h2>
        
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="buildType">Build Type</Label>
            <Select value={buildType} onValueChange={(v) => setBuildType(v as BuildType)}>
              <SelectTrigger id="buildType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tiny-home">Tiny Home</SelectItem>
                <SelectItem value="skoolie">Skoolie</SelectItem>
                <SelectItem value="van">Van</SelectItem>
                <SelectItem value="container">Shipping Container</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="buildApproach">Build Approach</Label>
            <Select value={buildApproach} onValueChange={(v) => setBuildApproach(v as BuildApproach)}>
              <SelectTrigger id="buildApproach">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diy">DIY</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="regionLevel">Region Cost Level</Label>
            <Select value={regionLevel} onValueChange={(v) => setRegionLevel(v as RegionLevel)}>
              <SelectTrigger id="regionLevel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="buildBudget">Your Estimated Build Budget ($)</Label>
          <Input
            id="buildBudget"
            type="number"
            min="0"
            step="100"
            value={estimatedBuildBudget}
            onChange={(e) => setEstimatedBuildBudget(e.target.value)}
            placeholder="e.g., 15000"
          />
        </div>
      </section>

      {/* Monthly Costs */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Monthly Cost Estimates</h2>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fuel">Fuel / Transportation ($)</Label>
            <Input
              id="fuel"
              type="number"
              min="0"
              value={monthlyFuel}
              onChange={(e) => setMonthlyFuel(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="insurance">Insurance ($)</Label>
            <Input
              id="insurance"
              type="number"
              min="0"
              value={monthlyInsurance}
              onChange={(e) => setMonthlyInsurance(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="parking">Parking / Campground ($)</Label>
            <Input
              id="parking"
              type="number"
              min="0"
              value={monthlyParking}
              onChange={(e) => setMonthlyParking(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="maintenance">Maintenance ($)</Label>
            <Input
              id="maintenance"
              type="number"
              min="0"
              value={monthlyMaintenance}
              onChange={(e) => setMonthlyMaintenance(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="utilities">Utilities ($)</Label>
            <Input
              id="utilities"
              type="number"
              min="0"
              value={monthlyUtilities}
              onChange={(e) => setMonthlyUtilities(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="internet">Internet ($)</Label>
            <Input
              id="internet"
              type="number"
              min="0"
              value={monthlyInternet}
              onChange={(e) => setMonthlyInternet(e.target.value)}
            />
          </div>
          
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="groceries">Groceries ($)</Label>
            <Input
              id="groceries"
              type="number"
              min="0"
              value={monthlyGroceries}
              onChange={(e) => setMonthlyGroceries(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Optional Toggles */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Optional Costs</h2>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="storage"
              checked={hasStorage}
              onCheckedChange={(checked) => setHasStorage(checked === true)}
            />
            <Label htmlFor="storage" className="text-sm font-normal cursor-pointer">
              Storage unit (+$150/mo)
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox
              id="pets"
              checked={hasPets}
              onCheckedChange={(checked) => setHasPets(checked === true)}
            />
            <Label htmlFor="pets" className="text-sm font-normal cursor-pointer">
              Pets (+$100/mo)
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox
              id="repairBuffer"
              checked={hasRepairBuffer}
              onCheckedChange={(checked) => setHasRepairBuffer(checked === true)}
            />
            <Label htmlFor="repairBuffer" className="text-sm font-normal cursor-pointer">
              Repairs / contingency buffer (+15%)
            </Label>
          </div>
        </div>
      </section>

      <Button type="submit" size="lg" className="w-full">
        Check My Budget Reality
      </Button>
    </form>
  );
}
