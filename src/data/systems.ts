export type Zone =
  | 'cab'
  | 'sleeping'
  | 'lounging'
  | 'kitchen'
  | 'bathroom'
  | 'garage'
  | 'entertainment'

export interface Component {
  id: string
  name: string
  description: string
  zones: Zone[]
}

export interface System {
  id: string
  name: string
  description: string
  components: Component[]
}

export const SYSTEMS: System[] = [
  {
    id: 'structural',
    name: 'Structural',
    description: 'Framing, insulation, and shell — the foundation of every build.',
    components: [
      {
        id: 'str-rust-treatment',
        name: 'Rust treatment / rust proofing',
        description: 'Treatment of existing rust and protective coating applied to the vehicle exterior and undercarriage.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-subfloor-substrate',
        name: 'Subfloor substrate',
        description: 'Plywood, Advantech, or similar sheet material installed over the vehicle floor as the base layer.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-floor-insulation',
        name: 'Floor insulation',
        description: 'Foam board, spray foam, or similar insulation layer installed beneath the subfloor substrate.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-floor-vapor-barrier',
        name: 'Floor vapor barrier',
        description: 'Moisture barrier installed between the vehicle floor and insulation or substrate to prevent condensation.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-finished-flooring',
        name: 'Finished flooring',
        description: 'Vinyl plank, tile, or other finish flooring material installed over the subfloor substrate.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-wall-furring',
        name: 'Wall furring strips / framing lumber',
        description: 'Strips or studs attached to the interior walls to create a cavity for insulation and a surface for paneling.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-wall-insulation',
        name: 'Wall insulation',
        description: 'Spray foam, rigid foam board, Thinsulate, or similar insulation filling the wall cavity.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-wall-vapor-barrier',
        name: 'Wall vapor barrier',
        description: 'Moisture barrier applied to wall cavities to prevent condensation within the wall assembly.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-wall-paneling',
        name: 'Wall paneling / cladding',
        description: 'Plywood, shiplap, or other finish material applied to the interior walls.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-ceiling-framing',
        name: 'Ceiling framing / furring strips',
        description: 'Framing or furring strips attached to the interior ceiling to support insulation and ceiling panels.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-ceiling-insulation',
        name: 'Ceiling insulation',
        description: 'Insulation material installed within the ceiling framing cavity.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-ceiling-paneling',
        name: 'Ceiling paneling',
        description: 'Finish panel material installed on the interior ceiling.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-roof-reinforcement',
        name: 'Roof reinforcement',
        description: 'Structural reinforcement of the roof to support solar panels, AC units, roof fans, or a roof raise (especially on skoolies).',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-roof-vent-cutouts',
        name: 'Roof vent cutouts and sealing',
        description: 'Cutting and waterproofing the roof openings for fan vents, and sealing around flanges.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom'],
      },
      {
        id: 'str-window-installation',
        name: 'Window installation',
        description: 'Added windows, including cutting, framing, sealing, and weatherproofing.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-interior-doors',
        name: 'Interior doors / curtains / room dividers',
        description: 'Doors, curtain rods, or partition panels used to divide interior spaces.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-weatherstripping',
        name: 'Weatherstripping and seam sealing',
        description: 'Sealing of all gaps, seams, doors, and windows to prevent air and water infiltration.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-fasteners',
        name: 'Adhesives, fasteners, screws, hardware',
        description: 'General construction hardware used throughout the build.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'str-caulking',
        name: 'Caulking / sealants',
        description: 'Sealant applied to joints, seams, penetrations, and edges throughout the build.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical / Power',
    description: 'Battery bank, solar, shore power, and all wiring and distribution.',
    components: [
      {
        id: 'elec-battery-bank',
        name: 'Battery bank',
        description: 'Primary energy storage — lithium LiFePO4 or AGM batteries wired in parallel or series.',
        zones: ['garage'],
      },
      {
        id: 'elec-battery-enclosure',
        name: 'Battery enclosure / mounting',
        description: 'Box, tray, or mounting structure securing the battery bank in place.',
        zones: ['garage'],
      },
      {
        id: 'elec-inverter-charger',
        name: 'Inverter / charger',
        description: 'Pure sine wave inverter/charger converting DC battery power to AC and charging from shore power.',
        zones: ['garage'],
      },
      {
        id: 'elec-solar-panels',
        name: 'Solar panels',
        description: 'Photovoltaic panels mounted on the roof to harvest solar energy.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-solar-mounting',
        name: 'Solar panel mounting hardware and brackets',
        description: 'Rails, brackets, and hardware used to attach solar panels to the roof.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-charge-controller',
        name: 'Solar charge controller',
        description: 'MPPT or PWM controller regulating solar input to the battery bank.',
        zones: ['garage'],
      },
      {
        id: 'elec-dc-dc-charger',
        name: 'DC-DC charger',
        description: 'Isolates and charges the house battery bank from the vehicle alternator while driving.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'elec-shore-power-inlet',
        name: 'Shore power inlet',
        description: '30A or 50A exterior inlet for connecting to campground or dock power.',
        zones: ['garage'],
      },
      {
        id: 'elec-shore-power-converter',
        name: 'Shore power converter / adapter',
        description: 'Adapter or converter for connecting to different shore power plug configurations.',
        zones: ['garage'],
      },
      {
        id: 'elec-main-fuse',
        name: 'Main fuse / breaker',
        description: 'Primary overcurrent protection between the battery bank and the rest of the electrical system.',
        zones: ['garage'],
      },
      {
        id: 'elec-fuse-block',
        name: 'Fuse block',
        description: 'Distribution block providing individual fused circuits for all DC loads.',
        zones: ['garage'],
      },
      {
        id: 'elec-ac-breaker-panel',
        name: 'AC breaker panel',
        description: 'Breaker panel distributing AC power from the inverter or shore power to AC circuits.',
        zones: ['garage'],
      },
      {
        id: 'elec-bus-bars',
        name: 'Positive and negative bus bars',
        description: 'Copper bus bars centralizing positive and negative connections within the electrical system.',
        zones: ['garage'],
      },
      {
        id: 'elec-battery-monitor',
        name: 'Battery monitor / shunt',
        description: 'Device measuring current flow and calculating state of charge (e.g. Victron BMV).',
        zones: ['garage'],
      },
      {
        id: 'elec-wiring',
        name: 'All wiring',
        description: 'All wire runs in multiple gauges (2/0, 4AWG, 10AWG, 12AWG, etc.) throughout the system.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-grounding',
        name: 'Grounding system / chassis ground',
        description: 'Negative return paths and chassis ground connections throughout the electrical system.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-interior-lighting',
        name: 'Interior LED lighting',
        description: 'LED light fixtures and strips installed throughout all living zones.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-exterior-lighting',
        name: 'Exterior lighting',
        description: 'Porch light, under-vehicle lighting, and other exterior LED fixtures.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-12v-usb-outlets',
        name: '12V / USB outlets',
        description: '12V accessory and USB charging outlets distributed throughout the living areas.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-ac-outlets',
        name: 'Standard AC outlets',
        description: '120V AC outlets distributed throughout living zones, wired to the AC breaker panel.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'entertainment'],
      },
      {
        id: 'elec-appliance-wiring',
        name: 'Wiring for all appliances',
        description: 'Dedicated wiring runs to water heater, pump, fans, HVAC, and other fixed appliances.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'elec-generator-hookup',
        name: 'Generator hookup / transfer switch',
        description: 'Optional external generator connection with transfer switch to prevent backfeed.',
        zones: ['garage'],
      },
      {
        id: 'elec-surge-protector',
        name: 'Surge protector',
        description: 'Surge protection device installed on the shore power inlet to protect against power surges.',
        zones: ['garage'],
      },
    ],
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Heating, cooling, and ventilation to keep the interior comfortable year-round.',
    components: [
      {
        id: 'hvac-primary-heater',
        name: 'Primary heater',
        description: 'Main heating source — diesel heater, propane heater, mini split, or wood stove.',
        zones: ['lounging'],
      },
      {
        id: 'hvac-heater-fuel-lines',
        name: 'Heater fuel lines and fittings',
        description: 'Fuel supply lines running from the fuel tank or propane tank to the heater.',
        zones: ['garage', 'lounging'],
      },
      {
        id: 'hvac-heater-exhaust',
        name: 'Heater exhaust / flue',
        description: 'Exhaust pipe or flue routing combustion gases out of the vehicle.',
        zones: ['lounging', 'garage'],
      },
      {
        id: 'hvac-heater-mounting',
        name: 'Heater mounting hardware',
        description: 'Brackets, standoffs, and hardware securing the heater in place.',
        zones: ['lounging'],
      },
      {
        id: 'hvac-heater-wiring',
        name: 'Heater wiring and controls',
        description: 'Electrical wiring and control harness for the heater unit.',
        zones: ['lounging'],
      },
      {
        id: 'hvac-thermostat',
        name: 'Thermostat / temperature controller',
        description: 'Wall-mounted or inline thermostat or controller for the heater or HVAC system.',
        zones: ['lounging'],
      },
      {
        id: 'hvac-roof-vent-fans',
        name: 'Roof vent fans',
        description: 'Powered roof vents (e.g. Maxxair, Fan-Tastic Vent) providing ventilation and air exchange.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom'],
      },
      {
        id: 'hvac-roof-vent-wiring',
        name: 'Roof vent fan wiring',
        description: 'Electrical wiring runs to each roof vent fan.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'hvac-roof-vent-covers',
        name: 'Roof vent fan covers / rain shields',
        description: 'Protective covers or deflectors allowing fans to run in rain.',
        zones: ['sleeping', 'lounging', 'kitchen', 'bathroom'],
      },
      {
        id: 'hvac-mini-split',
        name: 'Mini split system',
        description: 'Ductless mini split heat pump used for both heating and cooling.',
        zones: ['lounging', 'sleeping'],
      },
      {
        id: 'hvac-mini-split-line-set',
        name: 'Mini split line set and refrigerant',
        description: 'Refrigerant lines connecting the indoor and outdoor mini split units.',
        zones: ['lounging', 'garage'],
      },
      {
        id: 'hvac-mini-split-wiring',
        name: 'Mini split wiring',
        description: 'Electrical wiring for a 240V or 12V DC mini split system.',
        zones: ['garage', 'lounging'],
      },
      {
        id: 'hvac-portable-ac',
        name: 'Portable or window AC unit',
        description: 'Portable or window-mounted air conditioner as an alternative to a mini split.',
        zones: ['lounging', 'sleeping'],
      },
      {
        id: 'hvac-air-filtration',
        name: 'Air filtration / purifier',
        description: 'Standalone air purifier or filtration unit improving interior air quality.',
        zones: ['lounging'],
      },
      {
        id: 'hvac-co-detector',
        name: 'Carbon monoxide detector',
        description: 'CO detector protecting occupants from carbon monoxide buildup.',
        zones: ['sleeping', 'lounging'],
      },
      {
        id: 'hvac-propane-co-detector',
        name: 'Propane / CO detector',
        description: 'Combination propane and CO detector, typically installed near the floor where gas accumulates.',
        zones: ['kitchen', 'lounging'],
      },
      {
        id: 'hvac-ducting',
        name: 'Ducting',
        description: 'Flexible or rigid ducting distributing conditioned air through the vehicle if applicable.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
    ],
  },
  {
    id: 'water',
    name: 'Water',
    description: 'Fresh water storage, delivery, filtration, and fixtures.',
    components: [
      {
        id: 'wtr-fresh-tank',
        name: 'Fresh water tank',
        description: 'Primary potable water storage tank, sized based on the build and usage needs.',
        zones: ['garage'],
      },
      {
        id: 'wtr-tank-mounting',
        name: 'Tank mounting hardware and straps',
        description: 'Brackets and straps securing the fresh water tank in position.',
        zones: ['garage'],
      },
      {
        id: 'wtr-fill-port',
        name: 'External fill port / cap',
        description: 'Exterior access port for filling the fresh water tank from a hose.',
        zones: ['garage'],
      },
      {
        id: 'wtr-water-lines',
        name: 'Water lines / tubing',
        description: 'PEX, polyethylene, or similar tubing running from the tank to all fixtures.',
        zones: ['kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'wtr-fittings',
        name: 'Line fittings, connectors, elbows',
        description: 'Push-fit, compression, or barb fittings used throughout the water system.',
        zones: ['kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'wtr-pump',
        name: '12V water pump',
        description: 'Demand or pressure pump (e.g. Shurflo, Flojet) drawing water from the tank and pressurizing the system.',
        zones: ['garage'],
      },
      {
        id: 'wtr-accumulator-tank',
        name: 'Accumulator tank',
        description: 'Small pressurized tank installed after the pump to reduce pump cycling and smooth pressure.',
        zones: ['garage'],
      },
      {
        id: 'wtr-pressure-regulator',
        name: 'Pressure regulator',
        description: 'Inline regulator limiting water pressure to protect fixtures and fittings.',
        zones: ['garage'],
      },
      {
        id: 'wtr-water-filter',
        name: 'Water filter',
        description: 'Inline sediment and carbon block filter for potable water quality.',
        zones: ['kitchen', 'garage'],
      },
      {
        id: 'wtr-water-heater',
        name: 'Tankless water heater',
        description: 'On-demand propane or electric water heater providing hot water at the fixtures.',
        zones: ['kitchen', 'bathroom'],
      },
      {
        id: 'wtr-water-heater-mounting',
        name: 'Water heater mounting and venting',
        description: 'Mounting hardware and exterior venting for a propane tankless water heater.',
        zones: ['kitchen', 'bathroom'],
      },
      {
        id: 'wtr-water-heater-supply',
        name: 'Water heater wiring or gas lines',
        description: 'Electrical wiring (electric heater) or propane supply lines (propane heater) to the water heater.',
        zones: ['kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'wtr-kitchen-sink',
        name: 'Kitchen sink',
        description: 'Single or double basin kitchen sink.',
        zones: ['kitchen'],
      },
      {
        id: 'wtr-kitchen-faucet',
        name: 'Kitchen faucet',
        description: 'Single or dual-handle faucet for the kitchen sink.',
        zones: ['kitchen'],
      },
      {
        id: 'wtr-bathroom-sink',
        name: 'Bathroom sink',
        description: 'Sink for the bathroom or wet bath area.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-bathroom-faucet',
        name: 'Bathroom faucet',
        description: 'Faucet for the bathroom sink.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-shower-pan',
        name: 'Shower pan / wet bath floor',
        description: 'Waterproof shower floor pan or wet bath flooring.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-shower-walls',
        name: 'Shower walls / surround',
        description: 'Waterproof wall panels or tile surround for the shower or wet bath.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-shower-head',
        name: 'Shower head and valve',
        description: 'Shower head, arm, and mixing valve for the shower.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-shower-door',
        name: 'Shower door / curtain',
        description: 'Hinged door, sliding panel, or curtain enclosing the shower area.',
        zones: ['bathroom'],
      },
      {
        id: 'wtr-drain-rough-in',
        name: 'All drain rough-in',
        description: 'Drain lines and rough-in plumbing connecting fixtures to the gray water system.',
        zones: ['kitchen', 'bathroom'],
      },
      {
        id: 'wtr-shutoff-valves',
        name: 'Shutoff valves throughout',
        description: 'Individual shutoff valves at fixtures and at the main supply for serviceability.',
        zones: ['kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'wtr-winterization-valves',
        name: 'Winterization drain valves',
        description: 'Low-point drain valves allowing the water system to be fully drained for winterization.',
        zones: ['garage'],
      },
    ],
  },
  {
    id: 'sewer',
    name: 'Sewer / Waste',
    description: 'Gray and black water holding, draining, and toilet systems.',
    components: [
      {
        id: 'swr-gray-tank',
        name: 'Gray water tank',
        description: 'Holding tank collecting wastewater from sinks and the shower.',
        zones: ['garage'],
      },
      {
        id: 'swr-gray-tank-vent',
        name: 'Gray water tank vent',
        description: 'Vent line allowing air into the gray tank to prevent siphoning and odors.',
        zones: ['garage'],
      },
      {
        id: 'swr-gray-drain-lines',
        name: 'Gray water drain lines',
        description: 'Drain pipes routing gray water from sinks and shower to the holding tank.',
        zones: ['kitchen', 'bathroom', 'garage'],
      },
      {
        id: 'swr-gray-dump-valve',
        name: 'Gray water dump valve',
        description: 'Gate valve at the tank outlet used to empty the gray tank at a dump station.',
        zones: ['garage'],
      },
      {
        id: 'swr-p-traps',
        name: 'P-traps',
        description: 'Water seal traps under sinks and the shower drain to block sewer gases.',
        zones: ['kitchen', 'bathroom'],
      },
      {
        id: 'swr-black-tank',
        name: 'Black water tank',
        description: 'Holding tank for toilet waste when using a wet flush toilet.',
        zones: ['garage'],
      },
      {
        id: 'swr-black-tank-vent',
        name: 'Black water tank vent',
        description: 'Vent line for the black tank, exiting through the roof or exterior wall.',
        zones: ['garage'],
      },
      {
        id: 'swr-black-drain-lines',
        name: 'Black water drain lines',
        description: 'Drain pipes routing toilet waste to the black water holding tank.',
        zones: ['bathroom', 'garage'],
      },
      {
        id: 'swr-black-dump-valve',
        name: 'Black water dump valve',
        description: 'Gate valve at the black tank outlet for emptying at a dump station.',
        zones: ['garage'],
      },
      {
        id: 'swr-toilet',
        name: 'Toilet',
        description: 'Toilet unit — composting, cassette, wet flush, or incinerating.',
        zones: ['bathroom'],
      },
      {
        id: 'swr-toilet-mounting',
        name: 'Toilet mounting hardware',
        description: 'Bolts, flanges, and hardware securing the toilet to the floor.',
        zones: ['bathroom'],
      },
      {
        id: 'swr-composting-vent',
        name: 'Composting toilet ventilation fan and exhaust',
        description: 'Small fan and ducted exhaust line venting odors from a composting toilet to the exterior.',
        zones: ['bathroom'],
      },
      {
        id: 'swr-sewer-hose',
        name: 'Sewer hose and fittings',
        description: 'Flexible sewer hose and adapter fittings used to connect to a dump station.',
        zones: ['garage'],
      },
      {
        id: 'swr-cleanout-ports',
        name: 'Cleanout access ports',
        description: 'Access ports on the tanks or drain lines for inspection and flushing.',
        zones: ['garage'],
      },
      {
        id: 'swr-tank-monitors',
        name: 'Tank level monitors',
        description: 'Sensors on gray and black tanks with a display panel showing fill levels.',
        zones: ['garage', 'lounging'],
      },
      {
        id: 'swr-tank-heater-pads',
        name: 'Tank heater pads',
        description: 'Electric heating pads applied to tanks to prevent freezing in cold weather.',
        zones: ['garage'],
      },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    description: 'Vehicle systems — engine, drivetrain, chassis, and build-specific modifications.',
    components: [
      {
        id: 'mech-pre-purchase-inspection',
        name: 'Pre-purchase inspection',
        description: 'Professional mechanic inspection of the vehicle before purchase.',
        zones: ['cab'],
      },
      {
        id: 'mech-engine-tune-up',
        name: 'Engine tune-up',
        description: 'Spark plugs, filters, belts, hoses, and other routine engine maintenance.',
        zones: ['cab'],
      },
      {
        id: 'mech-engine-rebuild',
        name: 'Engine rebuild or major repair',
        description: 'Major engine work required if the engine has significant wear or failure.',
        zones: ['cab'],
      },
      {
        id: 'mech-transmission',
        name: 'Transmission service or rebuild',
        description: 'Transmission fluid service or full rebuild if needed.',
        zones: ['cab'],
      },
      {
        id: 'mech-cooling-system',
        name: 'Cooling system',
        description: 'Radiator, hoses, coolant flush, and thermostat service or replacement.',
        zones: ['cab'],
      },
      {
        id: 'mech-exhaust',
        name: 'Exhaust system inspection / repair / replacement',
        description: 'Inspection and repair or replacement of exhaust manifold, pipes, and muffler.',
        zones: ['cab'],
      },
      {
        id: 'mech-fuel-system',
        name: 'Fuel system',
        description: 'Fuel pump, filter, and injector service or replacement as needed.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-brakes',
        name: 'Brake inspection and replacement',
        description: 'Inspection and replacement of brake pads, rotors, drums, and lines.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-suspension-inspection',
        name: 'Suspension inspection and repair',
        description: 'Inspection and repair of shocks, springs, bushings, and related components.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-suspension-lift',
        name: 'Suspension lift kit',
        description: 'Lift kit to increase ground clearance — common on skoolies with heavy builds.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-steering',
        name: 'Steering system inspection / repair',
        description: 'Inspection and repair of steering gear, tie rods, and related components.',
        zones: ['cab'],
      },
      {
        id: 'mech-tires',
        name: 'Tires',
        description: 'Full set of tires sized and rated for the loaded vehicle weight.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-alignment',
        name: 'Wheel alignment and balancing',
        description: 'Alignment and balancing after any suspension, lift, or tire work.',
        zones: ['cab', 'garage'],
      },
      {
        id: 'mech-roof-raise',
        name: 'Roof raise / lift',
        description: 'Raising the skoolie roofline to increase interior standing height — skoolie specific.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'mech-roof-raise-welding',
        name: 'Roof raise welding and structural reinforcement',
        description: 'Welding and structural steel work to reinforce the raised roofline on a skoolie.',
        zones: ['cab', 'sleeping', 'lounging', 'kitchen', 'bathroom', 'garage', 'entertainment'],
      },
      {
        id: 'mech-fuel-conversion',
        name: 'Diesel to gas or gas to diesel conversion',
        description: 'Engine or fuel system conversion if changing fuel type — uncommon but applicable.',
        zones: ['cab'],
      },
      {
        id: 'mech-vehicle-electrical',
        name: 'Vehicle electrical system',
        description: 'Alternator, starter, chassis wiring, and other OEM vehicle electrical components.',
        zones: ['cab'],
      },
      {
        id: 'mech-odometer-docs',
        name: 'Odometer / mileage documentation',
        description: 'Recording and verifying vehicle mileage for insurance and resale purposes.',
        zones: ['cab'],
      },
      {
        id: 'mech-registration',
        name: 'Registration, title transfer, vehicle inspection fees',
        description: 'Government fees for transferring title, registering, and inspecting the vehicle.',
        zones: ['cab'],
      },
      {
        id: 'mech-fluid-services',
        name: 'Oil and all fluid services at start of build',
        description: 'Full fluid service — oil, transmission, coolant, brake fluid, power steering — at build start.',
        zones: ['cab'],
      },
    ],
  },
]
