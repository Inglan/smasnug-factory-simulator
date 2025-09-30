- Production - Build devices
- Pricing - Set prices for devices, balancing profit vs sales
- Advertising - Spend money on ads
- Expansion - Start producing more devices, and buy more factories

# Products
## Phone (Smasnug Galoxy)
- **Cost**: 300
- **Base Demand**: 100 devices/day
- **Production**: 50 devices/factory/day
- **Cost to start**: 1K
## Tablet (Smasnug Galoxy Tab)
- **Cost**: 400
- **Base Demand**: 20 devices/day
- **Production**: 10 devices/factory/day
- **Cost to start**: 100K
## TV (Smasnug The Frome)
- **Cost**: 1000
- **Base Demand**: 5 devices/day
- **Production**: 2 devices/factory/day
- **Cost to start**: 1M
## Earbuds (Smasnug Buds)
- **Cost**: 100
- **Base Demand**: 20 devices/day
- **Production**: 10 devices/factory/day
- **Cost to start**: 10K
## Smartwatch (Smasnug Watch)
- **Cost**: 200
- **Base Demand**: 20 devices/day
- **Production**: 10 devices/factory/day
- **Cost to start**: 10K
## Laptop (Galoxy Book)
- **Cost**: 800
- **Base Demand**: 10 devices/day
- **Production**: 5 devices/factory/day
- **Cost to start**: 100K

# Factories
- **Base Cost**: 1.5x product cost
- **Base Efficiency**: 100%
- **Scaling**: 1.1x more cost but also more efficient

# Demand
## Multiplier
This will multiply with the base demand. It will decrease over time, and it can be increased by advertising. It cannot exceed 5x.

# Advertising
Launching a campaign adds to the demand multiplier, based on the budget.

sqrt(min(Ad budget, 1000000)/100000)

# Mechanics
## Daily production per factory
Base production * Efficiency
## Total daily production
Sum of daily production per factory
## Demand
Base demand

# State
```typescript
{
  money: 10000,
  demandMultiplier: 1,
  factories: [
    {
      efficiency: 1,
      type: 'phone'
    }
  ],
  products: {
    phone: {
      startedProduction: false,
      sellingPrice: 500,
      stock: 0,
      demand: 0,
      earned: 0,
      sold: 0
    },
    ...
  }
}
```
