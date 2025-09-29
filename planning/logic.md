This logic was AI written, and is what I'm basing the game off losely.

# Game Logic Planning

## Core Game Loop
1. **Production** - Build devices using materials and manufacturing capacity
2. **Pricing** - Set prices for your devices to balance profit vs sales volume
3. **Advertising** - Spend money on ads to increase demand
4. **Sales** - Automatically sell devices based on demand and pricing
5. **Expansion** - Use profits to buy more factories and increase production

## Economic Model

### Demand Formula
```
demand = base_demand * price_multiplier * advertising_multiplier
price_multiplier = max(0.1, 1 - (price - cost_price) / price_sensitivity)
advertising_multiplier = 1 + sqrt(advertising_budget / 1000) * 0.5
```

### Pricing Strategy
- **Cost Price**: Base manufacturing cost per unit
- **Price Sensitivity**: How much customers care about price (varies by product)
- **Sweet Spot**: Price that maximizes total profit

### Revenue Calculation
```
units_sold = min(demand, production_capacity)
revenue = units_sold * selling_price
profit = revenue - (production_cost + advertising_budget)
```

## Products & Categories

### Smartphones (Smasnug Galaxy)
- **Cost Price**: $200
- **Price Sensitivity**: $800 (customers very price sensitive above $1000)
- **Base Demand**: 100 units/day
- **Factory Capacity**: 50 units/day per factory

### Tablets (Smasnug Galaxy Tab)
- **Cost Price**: $300
- **Price Sensitivity**: $500 (customers moderately price sensitive)
- **Base Demand**: 40 units/day
- **Factory Capacity**: 30 units/day per factory
- **Unlocks**: After earning $100K total

### Smart TV (Smasnug The Frame)
- **Cost Price**: $500
- **Price Sensitivity**: $1000 (customers less price sensitive for premium TVs)
- **Base Demand**: 20 units/day
- **Factory Capacity**: 10 units/day per factory
- **Unlocks**: After earning $1M total

### Earbuds (Smasnug Buds)
- **Cost Price**: $50
- **Price Sensitivity**: $150 (very price sensitive market)
- **Base Demand**: 80 units/day
- **Factory Capacity**: 100 units/day per factory
- **Unlocks**: After owning 3 total factories

### Smartwatch (Smasnug Watch)
- **Cost Price**: $150
- **Price Sensitivity**: $300 (moderate price sensitivity)
- **Base Demand**: 30 units/day
- **Factory Capacity**: 40 units/day per factory
- **Unlocks**: After earning $5M total

### Laptop (Galaxy Book)
- **Cost Price**: $600
- **Price Sensitivity**: $1200 (business customers less price sensitive)
- **Base Demand**: 15 units/day
- **Factory Capacity**: 8 units/day per factory
- **Unlocks**: After owning 10 total factories

## Production & Manufacturing

### Factory System
- **Base Cost**: $10K for first factory of each product type
- **Cost Scaling**: Each additional factory costs 1.5x more than the previous
- **Capacity**: Fixed production capacity per factory per product
- **Efficiency**: All factories operate at 100% efficiency (simplified)

### Production Mechanics
```
total_capacity = number_of_factories * factory_capacity
daily_production = min(demand, total_capacity)
production_cost = daily_production * cost_price
```

## Advertising System

### Advertising Mechanics
- **Budget**: Set daily advertising spend for each product
- **Effect**: More advertising = more demand (with diminishing returns)
- **Cost**: Advertising budget is spent daily regardless of sales

### Advertising Effectiveness
```
demand_boost = sqrt(daily_ad_budget / 1000) * 0.5
effective_demand = base_demand * (1 + demand_boost)
```

## Progression & Unlocks

### Product Unlocks
| Product | Requirement |
|---------|-------------|
| Smartphones | Available at start |
| Tablets | $100K total earnings |
| Earbuds | Own 3 factories total |
| Smart TV | $1M total earnings |
| Smartwatch | $5M total earnings |
| Laptop | Own 10 factories total |

### Milestone Rewards
- **$10K**: Can buy second factory
- **$100K**: Tablets unlock
- **$1M**: Smart TVs unlock
- **$10M**: Advertising becomes more effective (+25%)
- **$100M**: Factory costs increase slower (1.4x instead of 1.5x)

## Game Balance & Progression

### Early Game
- Start with $50K and ability to make smartphones
- Focus on finding optimal price point
- Buy more factories when profitable
- Simple decision: price vs volume

### Mid Game
- Multiple product lines
- Balancing advertising spend across products
- Managing factory expansion costs
- More complex optimization

### Late Game
- All products unlocked
- Focus on optimization and efficiency
- Very large numbers (millions/billions)
- Satisfying idle progress

### Idle Mechanics
- **Offline Progress**: Game simulates up to 24 hours when closed
- **Auto-pricing**: Optional feature to automatically adjust prices for maximum profit
- **Bulk Buying**: Buy multiple factories at once in late game

## Technical Implementation

### Core Game State
```javascript
{
  money: 50000,
  totalEarnings: 0,
  products: {
    smartphone: {
      factories: 0,
      price: 400,
      advertisingBudget: 0
    }
    // ... other products
  }
}
```

### Update Loop
1. Calculate demand for each product
2. Calculate production and sales
3. Update money and statistics
4. Check for unlocks
5. Update UI displays

### Save System
- Auto-save to localStorage every 30 seconds
- Save on page close
- Load on page open

## Endless Gameplay
- No victory conditions - play as long as you want
- Numbers can grow infinitely large
- Focus on optimization and watching numbers grow
- New players can always start over for different strategies
