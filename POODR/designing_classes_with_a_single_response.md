# Designing Classes with a Single Response


## Deciding What Belongs in a Class


### Grouping Methods into Classes


### Organizing Code to Allow for Easy Changes


## Creating Classes That have a Single Responsibility


### An Example Application: Bicycles and Gears

```ruby
chainring = 52                    # number of teeth
cog       = 11
ratio     = chainring / cog.to_f
puts ratio                        # -> 4.72727272727273

chainring = 30
cog       = 27
ratio     = chainring / cog.to_f
puts ratio                        # -> 1.11111111111111
```

````ruby
class Gear
  attr_reader :chainring, :cog
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    chainring / cog.to_f
  end
end

puts Gear.new(52, 11).ratio        # -> 4.72727272727273
puts Gear.new(30, 27).ratio        # -> 1.11111111111111
```

```ruby 
class Gear
  attr_reader :chainring, :cog, :rim, :tire
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog       = cog
    @rim       = rim
    @tire      = tire
  end

  def ratio
    chainring / cog.to_f
  end

  def gear_inches
      # tire goes around rim twice for diameter
    ratio * (rim + (tire * 2))
  end
end

puts Gear.new(52, 11, 26, 1.5).gear_inches
# -> 137.090909090909

puts Gear.new(52, 11, 24, 1.25).gear_inches
# -> 125.272727272727
```

```ruby
puts Gear.new(52, 11).ratio # didn't this used to work?
# ArgumentError: wrong number of arguments (2 for 4)
#	 from (irb):20:in `initialize'
#	 from (irb):20:in `new'
#	 from (irb):20
```

### Why Single Responsibility Matters


### Determining If a Class Has a Single Responsibility


### Determining When to Make Design Decisions


## Writing Code That Embraces Change


### Depend on Behavior, Not Data

```ruby
class Gear
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    @chainring / @cog.to_f      # <-- road to ruin
  end
end
```

```ruby
class Gear
  attr_reader :chainring, :cog  # <-------
  def initialize(chainring, cog)
    @chainring = chainring
    @cog       = cog
  end

  def ratio
    chainring / cog.to_f        # <-------
  end
end
```

```ruby
  # default implementation via attr_reader
  def cog
    @cog
  end
```

```ruby
  # a simple reimplementation of cog
  def cog
    @cog * unanticipated_adjustment_factor
  end
```

```ruby
  # a more complex one
  def cog
    @cog * (foo? ? bar_adjustment : baz_adjustment)
  end
```

### Enforce Single Responsibility Everywhere


## Finally, the Real Wheel


## Summary



























