/**
 * Cost calculation logic for Tiny Life Compass
 * All multipliers and estimates are simplified for v0
 */

export type BuildType = 'tiny-home' | 'skoolie' | 'van' | 'container';
export type BuildApproach = 'diy' | 'mixed' | 'professional';
export type RegionLevel = 'low' | 'medium' | 'high';

export interface FormInputs {
  buildType: BuildType;
  buildApproach: BuildApproach;
  regionLevel: RegionLevel;
  estimatedBuildBudget: number;
  monthlyFuel: number;
  monthlyInsurance: number;
  monthlyParking: number;
  monthlyMaintenance: number;
  monthlyUtilities: number;
  monthlyInternet: number;
  monthlyGroceries: number;
  hasStorage: boolean;
  hasPets: boolean;
  hasRepairBuffer: boolean;
}

export type VerdictType = 'viable' | 'risky' | 'unrealistic';

export interface CalculationResult {
  verdict: VerdictType;
  estimatedBuildCost: number;
  estimatedMonthlyCost: number;
  pressurePoints: string[];
}

// Base build costs by type (minimum realistic costs)
const BASE_BUILD_COSTS: Record<BuildType, number> = {
  'tiny-home': 25000,
  'skoolie': 15000,
  'van': 12000,
  'container': 20000,
};

// Multipliers for build approach
const APPROACH_MULTIPLIERS: Record<BuildApproach, number> = {
  'diy': 1.0,
  'mixed': 1.5,
  'professional': 2.5,
};

// Multipliers for region cost level
const REGION_MULTIPLIERS: Record<RegionLevel, number> = {
  'low': 0.8,
  'medium': 1.0,
  'high': 1.4,
};

// Default optional costs
const STORAGE_COST = 150;
const PET_COST = 100;
const REPAIR_BUFFER_PERCENT = 0.15; // 15% of monthly costs

/**
 * Calculate estimated costs and return a verdict
 */
export function calculateCosts(inputs: FormInputs): CalculationResult {
  // Calculate estimated build cost
  const baseCost = BASE_BUILD_COSTS[inputs.buildType];
  const approachMultiplier = APPROACH_MULTIPLIERS[inputs.buildApproach];
  const regionMultiplier = REGION_MULTIPLIERS[inputs.regionLevel];
  
  const estimatedBuildCost = Math.round(baseCost * approachMultiplier * regionMultiplier);
  
  // Calculate monthly costs
  let monthlyTotal = 
    inputs.monthlyFuel +
    inputs.monthlyInsurance +
    inputs.monthlyParking +
    inputs.monthlyMaintenance +
    inputs.monthlyUtilities +
    inputs.monthlyInternet +
    inputs.monthlyGroceries;
  
  if (inputs.hasStorage) monthlyTotal += STORAGE_COST;
  if (inputs.hasPets) monthlyTotal += PET_COST;
  if (inputs.hasRepairBuffer) monthlyTotal += Math.round(monthlyTotal * REPAIR_BUFFER_PERCENT);
  
  const estimatedMonthlyCost = Math.round(monthlyTotal);
  
  // Determine pressure points and verdict
  const pressurePoints: string[] = [];
  let riskScore = 0;
  
  // Build budget analysis
  const budgetDiff = inputs.estimatedBuildBudget - estimatedBuildCost;
  const budgetRatio = inputs.estimatedBuildBudget / estimatedBuildCost;
  
  if (budgetRatio < 0.7) {
    pressurePoints.push(`Your build budget is ${Math.round((1 - budgetRatio) * 100)}% below typical costs for a ${formatBuildType(inputs.buildType)} with ${inputs.buildApproach} approach.`);
    riskScore += 3;
  } else if (budgetRatio < 0.9) {
    pressurePoints.push(`Build budget is tight—expect to make trade-offs on materials or timeline.`);
    riskScore += 1;
  }
  
  // Professional builds are often underestimated
  if (inputs.buildApproach === 'professional' && budgetRatio < 1.2) {
    pressurePoints.push(`Professional builds frequently exceed initial quotes by 20-40%.`);
    riskScore += 1;
  }
  
  // Region-specific notes
  if (inputs.regionLevel === 'high' && inputs.monthlyParking < 500) {
    pressurePoints.push(`Parking/land costs in high-cost regions often exceed $500/month.`);
    riskScore += 1;
  }
  
  // Maintenance reality check
  if (inputs.monthlyMaintenance < 100) {
    pressurePoints.push(`Maintenance budget may be optimistic—mobile dwellings need frequent repairs.`);
    riskScore += 1;
  }
  
  // No repair buffer
  if (!inputs.hasRepairBuffer && inputs.buildType !== 'tiny-home') {
    pressurePoints.push(`Without a repair buffer, unexpected breakdowns could strain your finances.`);
    riskScore += 1;
  }
  
  // Insurance for vans/skoolies
  if ((inputs.buildType === 'van' || inputs.buildType === 'skoolie') && inputs.monthlyInsurance < 100) {
    pressurePoints.push(`Full-coverage insurance for converted vehicles is often higher than standard auto.`);
    riskScore += 1;
  }
  
  // Ensure we have at least 3 points
  if (pressurePoints.length < 3) {
    if (budgetRatio >= 1.2) {
      pressurePoints.push(`Your budget provides a healthy cushion for unexpected costs.`);
    }
    if (inputs.hasRepairBuffer) {
      pressurePoints.push(`Including a repair buffer shows realistic planning.`);
    }
    if (pressurePoints.length < 3) {
      pressurePoints.push(`Your monthly estimates appear within reasonable ranges for this lifestyle.`);
    }
  }
  
  // Determine verdict
  let verdict: VerdictType;
  if (riskScore >= 4) {
    verdict = 'unrealistic';
  } else if (riskScore >= 2) {
    verdict = 'risky';
  } else {
    verdict = 'viable';
  }
  
  return {
    verdict,
    estimatedBuildCost,
    estimatedMonthlyCost,
    pressurePoints: pressurePoints.slice(0, 3),
  };
}

function formatBuildType(type: BuildType): string {
  const labels: Record<BuildType, string> = {
    'tiny-home': 'tiny home',
    'skoolie': 'skoolie',
    'van': 'van conversion',
    'container': 'shipping container',
  };
  return labels[type];
}
