// ==================== WORD DATABASE - 12 CATEGORIES ====================
const WORDS_DB = {
    objects: { name: "Objects", icon: "fa-cube", words: [
        { word: "SMARTPHONE", hint: "touch, apps" },
        { word: "LAPTOP", hint: "portable, keyboard" },
        { word: "BACKPACK", hint: "carry, straps" },
        { word: "UMBRELLA", hint: "rain, protects" },
        { word: "WRISTWATCH", hint: "time, strap" },
        { word: "GLASSES", hint: "vision, frames" },
        { word: "KEYBOARD", hint: "type, keys" },
        { word: "MOUSE", hint: "click, scroll" },
        { word: "HEADPHONES", hint: "music, ears" },
        { word: "FRIDGE", hint: "cold, kitchen" },
        { word: "MICROWAVE", hint: "heat, popcorn" },
        { word: "TOASTER", hint: "bread, brown" },
        { word: "BLENDER", hint: "mix, smoothie" },
        { word: "VACUUM", hint: "suck, dust" },
        { word: "LAMP", hint: "light, bulb" },
        { word: "MIRROR", hint: "reflection, glass" },
        { word: "SOFA", hint: "sit, couch" },
        { word: "BED", hint: "sleep, mattress" },
        { word: "TABLE", hint: "eat, legs" },
        { word: "CHAIR", hint: "sit, backrest" },
        { word: "BOOK", hint: "read, pages" },
        { word: "PEN", hint: "write, ink" },
        { word: "NOTEBOOK", hint: "paper, notes" },
        { word: "SCISSORS", hint: "cut, blades" },
        { word: "TAPE", hint: "sticky, roll" },
        { word: "TOOTHBRUSH", hint: "teeth, bristles" },
        { word: "TOOTHPASTE", hint: "mint, tube" },
        { word: "TOWEL", hint: "bath, dry" },
        { word: "SHAMPOO", hint: "hair, wash" },
        { word: "SOAP", hint: "clean, bubbles" },
        { word: "COMB", hint: "hair, brush" },
        { word: "RAZOR", hint: "shave, blade" },
        { word: "TISSUE", hint: "nose, soft" },
        { word: "NAPKIN", hint: "wipe, meal" },
        { word: "PLATE", hint: "eat, dish" },
        { word: "BOWL", hint: "soup, round" },
        { word: "CUP", hint: "drink, handle" },
        { word: "MUG", hint: "coffee, ceramic" },
        { word: "SPOON", hint: "soup, silverware" },
        { word: "FORK", hint: "pierce, eat" },
        { word: "KNIFE", hint: "cut, sharp" },
        { word: "BOTTLE", hint: "water, container" },
        { word: "FLASK", hint: "thermos, metal" },
        { word: "JAR", hint: "glass, lid" },
        { word: "BOX", hint: "cardboard, storage" },
        { word: "BAG", hint: "carry, shopping" },
        { word: "WALLET", hint: "money, cards" },
        { word: "PURSE", hint: "handbag, carry" },
        { word: "SUITCASE", hint: "travel, wheels" },
        { word: "KEY", hint: "lock, door" },
        { word: "LOCK", hint: "secure, padlock" },
        { word: "CHAIN", hint: "metal, links" },
        { word: "RING", hint: "jewelry, finger" },
        { word: "NECKLACE", hint: "chain, pendant" },
        { word: "BRACELET", hint: "wrist, band" },
        { word: "EARRINGS", hint: "ears, pair" },
        { word: "WATCH", hint: "time, wrist" },
        { word: "CLOCK", hint: "time, wall" },
        { word: "ALARM", hint: "wake, sound" },
        { word: "CALCULATOR", hint: "math, buttons" },
        { word: "RULER", hint: "measure, inches" },
        { word: "ERASER", hint: "pencil, rubber" },
        { word: "SHARPENER", hint: "pencil, blade" },
        { word: "STAPLER", hint: "papers, staple" },
        { word: "HOLE PUNCH", hint: "paper, holes" },
        { word: "FOLDER", hint: "organize, file" },
        { word: "BINDER", hint: "rings, papers" },
        { word: "CLIP", hint: "paperclip, hold" },
        { word: "RUBBER BAND", hint: "stretch, elastic" },
        { word: "GLUE", hint: "stick, adhesive" },
        { word: "SCREWDRIVER", hint: "tool, screws" },
        { word: "HAMMER", hint: "tool, nails" },
        { word: "WRENCH", hint: "tool, bolts" },
        { word: "PLIERS", hint: "tool, grip" },
        { word: "NAIL", hint: "metal, pointy" },
        { word: "SCREW", hint: "spiral, fasten" },
        { word: "BATTERY", hint: "power, charge" },
        { word: "CHARGER", hint: "plug, cable" },
        { word: "CABLE", hint: "wire, connect" },
        { word: "ADAPTER", hint: "plug, convert" },
        { word: "POWER BANK", hint: "portable, charge" },
        { word: "USB DRIVE", hint: "storage, data" },
        { word: "SD CARD", hint: "memory, camera" },
        { word: "WEBCAM", hint: "camera, video" },
        { word: "MICROPHONE", hint: "audio, record" },
        { word: "SPEAKER", hint: "sound, music" },
        { word: "MONITOR", hint: "screen, display" },
        { word: "PRINTER", hint: "paper, ink" },
        { word: "SCANNER", hint: "scan, document" },
        { word: "PROJECTOR", hint: "screen, beam" },
        { word: "REMOTE", hint: "TV, control" },
        { word: "FAN", hint: "air, cool" },
        { word: "HEATER", hint: "warm, heat" },
        { word: "AC", hint: "cool, remote" },
        { word: "IRON", hint: "clothes, press" },
        { word: "WASHING MACHINE", hint: "laundry, spin" },
        { word: "DRYER", hint: "laundry, heat" },
        { word: "DISHWASHER", hint: "dishes, clean" },
        { word: "OVEN", hint: "bake, cook" },
        { word: "STOVE", hint: "cook, burner" },
        { word: "KETTLE", hint: "boil, tea" },
        { word: "COFFEE MAKER", hint: "coffee, brew" },
        { word: "TOASTER OVEN", hint: "toast, bake" },
        { word: "AIR FRYER", hint: "fry, hot" },
        { word: "RICE COOKER", hint: "rice, steam" },
        { word: "SLOW COOKER", hint: "stew, simmer" },
        { word: "PRESSURE COOKER", hint: "fast, steam" },
        { word: "GRILL", hint: "BBQ, outdoor" },
        { word: "SMOKE DETECTOR", hint: "fire, alarm" },
        { word: "THERMOSTAT", hint: "temperature, control" },
        { word: "DOORBELL", hint: "ring, visitor" },
        { word: "SECURITY CAMERA", hint: "surveillance, record" }
    ]},
    
    vehicles: { name: "Vehicles", icon: "fa-car", words: [
        { word: "TESLA", hint: "electric, Elon" },
        { word: "FERRARI", hint: "sports, red" },
        { word: "LAMBORGHINI", hint: "supercar, Italian" },
        { word: "MUSTANG", hint: "Ford, horse" },
        { word: "CAMARO", hint: "Chevy, Bumblebee" },
        { word: "JEEP", hint: "offroad, Wrangler" },
        { word: "PICKUP TRUCK", hint: "cargo, hauling" },
        { word: "MOTORCYCLE", hint: "two, wheels" },
        { word: "BICYCLE", hint: "pedal, ride" },
        { word: "SCOOTER", hint: "electric, kick" },
        { word: "BOAT", hint: "water, sail" },
        { word: "YACHT", hint: "luxury, cruise" },
        { word: "SUBMARINE", hint: "underwater, periscope" },
        { word: "HELICOPTER", hint: "rotors, fly" },
        { word: "AIRPLANE", hint: "wings, jet" },
        { word: "JET", hint: "fast, fighter" },
        { word: "SPACESHIP", hint: "rocket, NASA" },
        { word: "TRAIN", hint: "railway, track" },
        { word: "SUBWAY", hint: "underground, metro" },
        { word: "TRAM", hint: "street, rails" },
        { word: "BUS", hint: "public, transport" },
        { word: "SCHOOL BUS", hint: "yellow, kids" },
        { word: "AMBULANCE", hint: "emergency, siren" },
        { word: "FIRE TRUCK", hint: "ladder, siren" },
        { word: "POLICE CAR", hint: "enforcement, chase" },
        { word: "TAXI", hint: "yellow, meter" },
        { word: "BULLDOZER", hint: "construction, push" },
        { word: "EXCAVATOR", hint: "dig, arm" },
        { word: "CRANE", hint: "lift, tall" },
        { word: "FORKLIFT", hint: "warehouse, pallet" },
        { word: "TRACTOR", hint: "farm, plow" },
        { word: "COMBINE", hint: "harvest, grain" },
        { word: "DUMP TRUCK", hint: "haul, dirt" },
        { word: "CEMENT MIXER", hint: "concrete, rotating" },
        { word: "GARBAGE TRUCK", hint: "trash, waste" },
        { word: "TOW TRUCK", hint: "tow, hook" },
        { word: "ICE CREAM TRUCK", hint: "ice, music" },
        { word: "FOOD TRUCK", hint: "mobile, kitchen" },
        { word: "RV", hint: "recreational, camper" },
        { word: "VAN", hint: "cargo, family" },
        { word: "MINIVAN", hint: "sliding, seats" },
        { word: "SUV", hint: "sport, utility" },
        { word: "HATCHBACK", hint: "rear, compact" },
        { word: "SEDAN", hint: "four, trunk" },
        { word: "COUPE", hint: "two, sporty" },
        { word: "CONVERTIBLE", hint: "open, sun" },
        { word: "HYBRID", hint: "electric, gas" },
        { word: "ELECTRIC CAR", hint: "battery, charge" },
        { word: "GO-KART", hint: "small, racetrack" },
        { word: "ATV", hint: "four, wheeler" },
        { word: "DIRT BIKE", hint: "offroad, dirt" },
        { word: "MOPED", hint: "small, gas" },
        { word: "TRICYCLE", hint: "three, kids" },
        { word: "UNICYCLE", hint: "one, balance" },
        { word: "SEGWAY", hint: "self-balancing, stand" },
        { word: "HOVERBOARD", hint: "two, balance" },
        { word: "SKATEBOARD", hint: "kickflip, ollie" },
        { word: "LONGBOARD", hint: "longer, cruising" },
        { word: "ROLLER SKATES", hint: "boots, skate" },
        { word: "ICE SKATES", hint: "blades, hockey" },
        { word: "SNOWMOBILE", hint: "snow, tracks" },
        { word: "JET SKI", hint: "water, watercraft" },
        { word: "SPEED BOAT", hint: "fast, racing" },
        { word: "FERRY", hint: "passengers, commute" },
        { word: "CRUISE SHIP", hint: "vacation, large" },
        { word: "CARGO SHIP", hint: "containers, freight" },
        { word: "TANKER", hint: "oil, gas" },
        { word: "BARGE", hint: "flat, river" },
        { word: "CANOE", hint: "paddle, lightweight" },
        { word: "KAYAK", hint: "paddle, small" },
        { word: "ROWBOAT", hint: "oars, lake" },
        { word: "SAILBOAT", hint: "wind, mast" },
        { word: "CATAMARAN", hint: "two, hulls" },
        { word: "GONDOLA", hint: "Venice, canal" },
        { word: "HOVERCRAFT", hint: "air, cushion" },
        { word: "SEAPLANE", hint: "water, floats" },
        { word: "PRIVATE JET", hint: "luxury, small" },
        { word: "CARGO PLANE", hint: "freight, large" },
        { word: "FIGHTER JET", hint: "military, fast" },
        { word: "BOMBER", hint: "military, bombs" },
        { word: "DRONE", hint: "UAV, remote" },
        { word: "HOT AIR BALLOON", hint: "float, basket" },
        { word: "BLIMP", hint: "airship, advertising" },
        { word: "GLIDER", hint: "no, engine" },
        { word: "ROCKET", hint: "space, launch" },
        { word: "SPACE SHUTTLE", hint: "NASA, reusable" },
        { word: "ROVER", hint: "Mars, NASA" },
        { word: "BULLET TRAIN", hint: "high, speed" },
        { word: "MONORAIL", hint: "single, rail" },
        { word: "CABLE CAR", hint: "cable, hills" },
        { word: "HORSE CARRIAGE", hint: "horse, buggy" },
        { word: "RICKSHAW", hint: "pulled, taxi" },
        { word: "TUK-TUK", hint: "three, wheels" },
        { word: "LIMOUSINE", hint: "luxury, long" },
        { word: "HUMVEE", hint: "military, large" },
        { word: "MONSTER TRUCK", hint: "big, jumps" },
        { word: "FORMULA 1", hint: "race, fast" },
        { word: "NASCAR", hint: "stock, oval" },
        { word: "RALLY CAR", hint: "offroad, dirt" }
    ]},
    
    games: { name: "Games", icon: "fa-gamepad", words: [
        { word: "SUBWAY SURFERS", hint: "train, run" },
        { word: "TEMPLE RUN", hint: "monkey, run" },
        { word: "CANDY CRUSH", hint: "match, candy" },
        { word: "ANGRY BIRDS", hint: "slingshot, pig" },
        { word: "CUT THE ROPE", hint: "candy, Om Nom" },
        { word: "PLANTS VS ZOMBIES", hint: "pea, zombie" },
        { word: "FRUIT NINJA", hint: "slice, fruit" },
        { word: "CLASH OF CLANS", hint: "builder, barbarian" },
        { word: "CLASH ROYALE", hint: "tower, king" },
        { word: "BRAWL STARS", hint: "3v3, gem" },
        { word: "HILL CLIMB RACING", hint: "uphill, car" },
        { word: "FLAPPY BIRD", hint: "bird, pipe" },
        { word: "MONUMENT VALLEY", hint: "puzzle, optical" },
        { word: "MINI MILITIA", hint: "doodle, dual" },
        { word: "FREE FIRE", hint: "battle, Garena" },
        { word: "PUBG MOBILE", hint: "chicken, dinner" },
        { word: "GENSHIN IMPACT", hint: "anime, gacha" },
        { word: "MOBILE LEGENDS", hint: "MOBA, Bang Bang" },
        { word: "POKEMON GO", hint: "catch, evolve" },
        { word: "MINECRAFT", hint: "block, craft" },
        { word: "ROBLOX", hint: "create, avatar" },
        { word: "GRAND THEFT AUTO V", hint: "Los Santos, heist" },
        { word: "RED DEAD REDEMPTION 2", hint: "cowboy, Arthur" },
        { word: "CALL OF DUTY", hint: "MW, nuke" },
        { word: "COUNTER STRIKE 2", hint: "terrorist, bomb" },
        { word: "VALORANT", hint: "agent, spike" },
        { word: "OVERWATCH 2", hint: "hero, payload" },
        { word: "APEX LEGENDS", hint: "legend, revive" },
        { word: "FORTNITE", hint: "build, battle" },
        { word: "PUBG", hint: "battleground, chicken" },
        { word: "LEAGUE OF LEGENDS", hint: "MOBA, pentakill" },
        { word: "DOTA 2", hint: "ancient, Roshan" },
        { word: "AGE OF EMPIRES", hint: "castle, wololo" },
        { word: "FIFA", hint: "soccer, ultimate" },
        { word: "EAFC", hint: "football, career" },
        { word: "NBA 2K", hint: "basketball, MyCareer" },
        { word: "WWE 2K", hint: "wrestling, Undertaker" },
        { word: "PRAGMATA", hint: "space, astronaut" },
        { word: "BATTLEFIELD", hint: "war, conquest" },
        { word: "ASSASSINS CREED", hint: "hidden, blade" },
        { word: "GOD OF WAR", hint: "Kratos, axe" },
        { word: "BLACK MYTH WUKONG", hint: "monkey, legend" },
        { word: "COD", hint: "nuke, Price" },
        { word: "RESIDENT EVIL", hint: "zombie, umbrella" },
        { word: "CAR X STREET", hint: "racing, drift" },
        { word: "FORZA", hint: "racing, horizon" },
        { word: "UNCHARTED", hint: "Nathan, treasure" },
        { word: "BEN 10", hint: "omnitrix, alien" },
        { word: "GHOST OF TSUSHIMA", hint: "samurai, Jin" },
        { word: "RED DEAD REDEMPTION", hint: "cowboy, horse" },
        { word: "NEED FOR SPEED", hint: "racing, cops" },
        { word: "TRAIN SIM WORLD", hint: "railway, cabin" },
        { word: "MICROSOFT FLIGHT SIM", hint: "plane, fly" },
        { word: "POPPY PLAYTIME", hint: "horror, toy" },
        { word: "DELTA FORCE", hint: "military, shooter" },
        { word: "EURO TRUCK SIM", hint: "truck, cargo" },
        { word: "MAFIA 3", hint: "gangster, Lincoln" },
        { word: "WCC 2", hint: "cricket, WC" },
        { word: "THE SIMS", hint: "life, build" }
    ]},
    
    science: { name: "Science", icon: "fa-flask", words: [
        { word: "GRAVITY", hint: "apple, Newton" },
        { word: "MAGNETISM", hint: "metal, pole" },
        { word: "ENERGY", hint: "power, sun" },
        { word: "ELECTRICITY", hint: "wire, shock" },
        { word: "FRICTION", hint: "rub, heat" },
        { word: "INERTIA", hint: "rest, motion" },
        { word: "VELOCITY", hint: "speed, direction" },
        { word: "ACCELERATION", hint: "gas, pedal" },
        { word: "FORCE", hint: "push, pull" },
        { word: "MASS", hint: "weight, kg" },
        { word: "DENSITY", hint: "sink, float" },
        { word: "PRESSURE", hint: "tyre, air" },
        { word: "VOLTAGE", hint: "battery, volt" },
        { word: "RESISTANCE", hint: "ohms, wire" },
        { word: "CURRENT", hint: "amp, flow" },
        { word: "DNA", hint: "helix, gene" },
        { word: "CELL", hint: "microscope, unit" },
        { word: "PHOTOSYNTHESIS", hint: "sun, leaf" },
        { word: "EVOLUTION", hint: "Darwin, monkey" },
        { word: "BACTERIA", hint: "germ, infection" },
        { word: "VIRUS", hint: "cold, host" },
        { word: "NUCLEUS", hint: "brain, center" },
        { word: "MITOCHONDRIA", hint: "powerhouse, energy" },
        { word: "CHLOROPHYLL", hint: "green, leaf" },
        { word: "ECOSYSTEM", hint: "forest, ocean" },
        { word: "FOOD CHAIN", hint: "eat, predator" },
        { word: "HABITAT", hint: "home, animal" },
        { word: "SYMBIOSIS", hint: "together, benefit" },
        { word: "PARASITE", hint: "leech, host" },
        { word: "ANTIBIOTIC", hint: "penicillin, cure" },
        { word: "VACCINE", hint: "needle, immune" },
        { word: "OXYGEN", hint: "air, breath" },
        { word: "HYDROGEN", hint: "lightest, gas" },
        { word: "CARBON", hint: "diamond, life" },
        { word: "NITROGEN", hint: "air, 78" },
        { word: "WATER", hint: "H2O, drink" },
        { word: "SALT", hint: "NaCl, ocean" },
        { word: "ACID", hint: "sour, battery" },
        { word: "BASE", hint: "soap, bitter" },
        { word: "PH", hint: "scale, acid" },
        { word: "MOLECULE", hint: "bond, atoms" },
        { word: "ATOM", hint: "smallest, element" },
        { word: "PROTON", hint: "positive, nucleus" },
        { word: "NEUTRON", hint: "neutral, nucleus" },
        { word: "ELECTRON", hint: "negative, orbit" },
        { word: "PERIODIC TABLE", hint: "elements, rows" },
        { word: "CHEMICAL REACTION", hint: "change, color" },
        { word: "VOLCANO", hint: "mountain, lava" },
        { word: "EARTHQUAKE", hint: "shake, plates" },
        { word: "TSUNAMI", hint: "wave, ocean" },
        { word: "HURRICANE", hint: "storm, eye" },
        { word: "TORNADO", hint: "twister, funnel" },
        { word: "FOSSIL", hint: "ancient, bones" },
        { word: "DINOSAUR", hint: "T-Rex, extinct" },
        { word: "MAGMA", hint: "underground, liquid" },
        { word: "LAVA", hint: "molten, rock" },
        { word: "GLACIER", hint: "ice, river" },
        { word: "ATMOSPHERE", hint: "layer, air" },
        { word: "OZONE LAYER", hint: "UV, protect" },
        { word: "GREENHOUSE EFFECT", hint: "heat, trap" },
        { word: "BLACK HOLE", hint: "nothing, escapes" },
        { word: "GALAXY", hint: "billions, stars" },
        { word: "NEBULA", hint: "gas, dust" },
        { word: "SUPERNOVA", hint: "star, explode" },
        { word: "COMET", hint: "ice, tail" },
        { word: "ASTEROID", hint: "dinosaur, space" },
        { word: "ORBIT", hint: "path, planet" },
        { word: "SATELLITE", hint: "GPS, orbit" },
        { word: "TELESCOPE", hint: "stars, Galileo" },
        { word: "PLANET", hint: "human, water" }
    ]},
    
    tvshows: { name: "TV Shows", icon: "fa-tv", words: [
        { word: "GAME OF THRONES", hint: "Winter is coming, dragons, Jon Snow" },
        { word: "BREAKING BAD", hint: "Walter White, meth, Heisenberg" },
        { word: "FRIENDS", hint: "Central Perk, Rachel, Ross" },
        { word: "THE OFFICE", hint: "Dunder Mifflin, Jim, Dwight" },
        { word: "MONEY HEIST", hint: "La Casa de Papel, Dalí mask" },
        { word: "SQUID GAME", hint: "Red Light Green Light, shapes" },
        { word: "STRANGER THINGS", hint: "Eleven, Demogorgon, Upside Down" },
        { word: "WEDNESDAY", hint: "Addams Family, dance, Nevermore" },
        { word: "THE LAST OF US", hint: "Joel, Ellie, fungus zombies" },
        { word: "HOUSE OF THE DRAGON", hint: "Targaryen, dragons, civil war" },
        { word: "THE BOYS", hint: "Homelander, superheroes, Butcher" },
        { word: "FALLOUT", hint: "Vault dweller, nuclear apocalypse" },
        { word: "DAHMER", hint: "Jeffrey Dahmer, serial killer" },
        { word: "THE CROWN", hint: "Queen Elizabeth, royal family" },
        { word: "LUCIFER", hint: "Devil, detective, Amenadiel" },
        { word: "THE MANDALORIAN", hint: "Baby Yoda, Star Wars" },
        { word: "PEAKY BLINDERS", hint: "Thomas Shelby, razor caps" },
        { word: "THE WALKING DEAD", hint: "Zombies, Rick Grimes" },
        { word: "SUPERNATURAL", hint: "Winchesters, demons, Impala" },
        { word: "THE BIG BANG THEORY", hint: "Sheldon, physics, Bazinga" },
        { word: "HOW I MET YOUR MOTHER", hint: "Ted, Barney, legend" },
        { word: "THE SIMPSONS", hint: "Homer, yellow, D'oh" },
        { word: "FAMILY GUY", hint: "Peter Griffin, Stewie, Lois" },
        { word: "SOUTH PARK", hint: "Cartman, Kenny, Colorado" },
        { word: "SPONGEBOB", hint: "Bikini Bottom, Krabby Patty" },
        { word: "AVATAR LAST AIRBENDER", hint: "Aang, Zuko, elements" },
        { word: "VICTORIOUS", hint: "Tori Vega, Hollywood Arts" },
        { word: "MIRACULOUS", hint: "Ladybug, Cat Noir, Paris" },
        { word: "ONE PIECE LIVE ACTION", hint: "Luffy, pirate, treasure" },
        { word: "ALL OF US ARE DEAD", hint: "Korean zombie high school, Netflix" },
        { word: "SWEET HOME", hint: "Monsters, apartment, green home, Netflix" },
        { word: "BEN 10", hint: "Omnitrix, alien watch, boy hero" },
        { word: "POKEMON", hint: "Ash, Pikachu, Gotta catch 'em all" },
        { word: "DORA THE EXPLORER", hint: "Backpack, Map, Swiper, backpack" },
        { word: "NARUTO", hint: "Ninja, Rasengan, Hokage, anime" },
        { word: "ONE PIECE", hint: "Luffy, pirate, treasure, anime" },
        { word: "MR BEAST", hint: "YouTube, Jimmy, challenges, money" },
        { word: "WWE RAW", hint: "Wrestling, John Cena, Roman Reigns" },
        { word: "JURASSIC WORLD", hint: "Dinosaurs, camp Cretaceous, Indominus Rex" },
        { word: "THE WALKING DEAD", hint: "Zombies, Rick Grimes, Negan" },
        { word: "THE SILENT SEA", hint: "Moon, space, Korean sci-fi" },
        { word: "BOYS OVER FLOWERS", hint: "Korean drama, rich boys, F4" },
        { word: "GEN V", hint: "Superhero college, The Boys spin-off" },
        { word: "SUPERMAN", hint: "Clark Kent, Krypton, Lois Lane" },
        { word: "SHAUN THE SHEEP", hint: "Stop motion, sheep, Aardman" },
        { word: "LARVA", hint: "Red and yellow, funny bugs, cartoon" }
    ]},
    
    cartoons: { name: "Cartoons", icon: "fa-dragon", words: [
        { word: "TOM AND JERRY", hint: "cat, mouse, never talk" },
        { word: "SCOOBY-DOO", hint: "meddling kids, mask, dog scared" },
        { word: "THE POWERPUFF GIRLS", hint: "chemical X, professor, sugar spice" },
        { word: "POKEMON", hint: "yellow mouse, red hat, gotta catch" },
        { word: "DRAGON BALL Z", hint: "7 balls, orange suit, screaming" },
        { word: "NARUTO", hint: "orange jumpsuit, ramen, headband" },
        { word: "ONE PIECE", hint: "straw hat, rubber arm, pirate king" },
        { word: "DEATH NOTE", hint: "apple, notebook, potato chip" },
        { word: "ATTACK ON TITAN", hint: "walls, giant human, survey corps" },
        { word: "DEMON SLAYER", hint: "water breathing, boar mask, sister" },
        { word: "MY LITTLE PONY", hint: "magical, rainbow hair, friendship" },
        { word: "ADVENTURE TIME", hint: "dog, human, candy kingdom" },
        { word: "REGULAR SHOW", hint: "blue jay, raccoon, slacking" },
        { word: "THE AMAZING WORLD OF GUMBALL", hint: "blue cat, goldfish, sketchy" },
        { word: "BEN 10", hint: "watch, alien, grandpa" },
        { word: "TOTALLY SPIES", hint: "secret agent, fashion, gadgets" },
        { word: "THE FAIRLY ODDPARENTS", hint: "pink, green, fish" },
        { word: "JIMMY NEUTRON", hint: "pointy hair, rocket, Goddard" },
        { word: "DORA THE EXPLORER", hint: "purple backpack, monkey, fox" },
        { word: "BLUEY", hint: "blue pup, sister, magic xylophone" },
        { word: "PAW PATROL", hint: "puppies, tower, lookout" },
        { word: "PEPPA PIG", hint: "snort, muddy puddles, little brother" },
        { word: "MICKEY MOUSE CLUBHOUSE", hint: "ears, hot dog, Toodles" },
        { word: "SPONGEBOB SQUAREPANTS", hint: "pineapple, spatula, absorbent" },
        { word: "THE SIMPSONS", hint: "yellow, donut, couch gag" },
        { word: "FAMILY GUY", hint: "fat man, evil baby, talking dog" },
        { word: "SOUTH PARK", hint: "fart, kenny dies, canadian" },
        { word: "RICK AND MORTY", hint: "burping, portal, pickle" },
        { word: "GRAVITY FALLS", hint: "twin, journal, gnome" },
        { word: "PHINEAS AND FERB", hint: "stepbrothers, platypus, summer" },
        { word: "AVATAR LAST AIRBENDER", hint: "arrow head, honor, cabbage" },
        { word: "SWAPPED", hint: "body swap, animals, princess" },
        { word: "MR BEAN", hint: "teddy, green car, silent" },
        { word: "THE CROODS", hint: "cave family, pet, chase sun" },
        { word: "FROZEN", hint: "sisters, reindeer, snowman" },
        { word: "GUARDIANS OF THE GALAXY", hint: "mixtape, tree, raccoon" },
        { word: "CARS", hint: "v8, rust, lightning" },
        { word: "ANGRY BIRDS", hint: "flightless, eggs, catapult" },
        { word: "TINTIN", hint: "white dog, captain, reporter" },
        { word: "LIFE OF PI", hint: "boat, tiger, indian ocean" },
        { word: "FINDING NEMO", hint: "clownfish, missing son, shark" },
        { word: "THE SMURFS", hint: "blue, small, evil wizard" },
        { word: "UP", hint: "balloon, house, old man" },
        { word: "THE WILD ROBOT", hint: "crashed, AI, island" },
        { word: "THE BAD GUYS", hint: "wolf, snake, misunderstood" },
        { word: "KUNG FU PANDA", hint: "fat, noodle, dragon" },
        { word: "HOW TO TRAIN YOUR DRAGON", hint: "toothless, viking, fire" },
        { word: "PUSS IN BOOTS", hint: "boots, egg, milk" },
        { word: "GARFIELD", hint: "monday, lasagna, dog" },
        { word: "CHICKEN RUN", hint: "farm, escape, clay" },
        { word: "SPIDER-MAN SPIDERVERSE", hint: "nike, leap, comic dots" },
        { word: "THE BOSS BABY", hint: "suit, pacifier, puppy" },
        { word: "ANTZ", hint: "worker, colony, rebellion" },
        { word: "MONSTER HOUSE", hint: "neighbor, toy, eat" },
        { word: "THE EMOJI MOVIE", hint: "phone, text, expression" },
        { word: "THE LEGO MOVIE", hint: "block, song, space" },
        { word: "MR PEABODY AND SHERMAN", hint: "time machine, dog, egypt" },
        { word: "FLUSHED AWAY", hint: "sewer, rat, soccer" },
        { word: "HOTEL TRANSYLVANIA", hint: "vampire, daughter, human" },
        { word: "SHREK", hint: "ogre, layers, donkey" },
        { word: "MINIONS", hint: "yellow, evolution, villain" },
        { word: "SING", hint: "koala, stage, animal" },
        { word: "MADAGASCAR", hint: "zoo, penguins, foosa" },
        { word: "THE SECRET LIFE OF PETS", hint: "apartment, bunny, sausage" },
        { word: "SONIC", hint: "blue, rings, bald man" },
        { word: "TRANSFORMERS", hint: "more than meets, robot, cube" },
        { word: "CLOUDY WITH MEATBALLS", hint: "inventor, food, rain" },
        { word: "SURF'S UP", hint: "penguin, competition, camera" },
        { word: "OPEN SEASON", hint: "bear, deer, hunter" },
        { word: "MOANA", hint: "ocean, demigod, tattoo" },
        { word: "NIMONA", hint: "shapeshift, knight, wall" },
        { word: "ELEMENTAL", hint: "fire, water, shop" },
        { word: "MIGRATION", hint: "ducks, fly, jam" },
        { word: "RAYA THE LAST DRAGON", hint: "dragon gem, trust, boat" },
        { word: "SPACE JAM", hint: "looney, basketball, alien" },
        { word: "SON OF THE MASK", hint: "baby, green, chaos" },
        { word: "BEE MOVIE", hint: "pollen, lawsuit, van" },
        { word: "MEGAMIND", hint: "blue head, villain, hero" },
        { word: "TURBO", hint: "snail, speed, racing" },
        { word: "MONSTERS VS ALIENS", hint: "woman grows, blob, moth" },
        { word: "HOME", hint: "purple alien, girl, car" },
        { word: "ZOOTOPIA", hint: "bunny, fox, sloth" },
        { word: "BEAUTY AND THE BEAST", hint: "library, rose, clock" },
        { word: "ENCANTO", hint: "house alive, no gift, cracks" },
        { word: "THE LION KING", hint: "pride rock, uncle, hyena" },
        { word: "BIG HERO 6", hint: "inflatable robot, mask, nerd" },
        { word: "BOLT", hint: "superdog, hamster, actor" },
        { word: "TARZAN", hint: "ape, loincloth, slide" },
        { word: "TANGLED", hint: "long hair, frying pan, lantern" },
        { word: "RALPH BREAKS THE INTERNET", hint: "arcade, virus, princess" },
        { word: "THE JUNGLE BOOK", hint: "bear, panther, tiger" },
        { word: "THE GOOD DINOSAUR", hint: "dino boy, human pet" },
        { word: "ICE AGE", hint: "3 friends, ice collision, new land" },
        { word: "MUFASA", hint: "lion king father, prequel" },
        { word: "PLANES", hint: "crop duster, racer" },
        { word: "MONSTERS UNIVERSITY", hint: "college, scare games, ok" },
        { word: "ROBOTS", hint: "gears, big weld, upgrade" },
        { word: "HORTON HEARS A WHO", hint: "elephant, speck, clover" },
        { word: "TOY STORY", hint: "pull string, space ranger" },
        { word: "RIO", hint: "macaw, bird opens, carnival" },
        { word: "EPIC", hint: "tiny people, forest, queen" }
    ]},
    
    movies: { name: "Movies", icon: "fa-film", words: [
        { word: "AVENGERS", hint: "snap, hammer, war" },
        { word: "STRANGER THINGS", hint: "Eleven, Demogorgon, upside down" },
        { word: "ANGRY BIRDS", hint: "slingshot, pigs, Red" },
        { word: "TOY STORY", hint: "Woody, Buzz, Andy" },
        { word: "FROZEN", hint: "Elsa, Olaf, let it go" },
        { word: "SHREK", hint: "ogre, donkey, Fiona" },
        { word: "HARRY POTTER", hint: "wand, scar, Voldemort" },
        { word: "THE LION KING", hint: "Simba, Mufasa, Hakuna Matata" },
        { word: "FINDING NEMO", hint: "clownfish, Dory, ocean" },
        { word: "DESPICABLE ME", hint: "Gru, Minions, bananas" },
        { word: "MINIONS", hint: "yellow, goggles, gibberish" },
        { word: "SPIDER-MAN", hint: "web, Peter Parker, radioactive" },
        { word: "BATMAN", hint: "Gotham, Joker, dark knight" },
        { word: "THE DARK KNIGHT", hint: "Heath Ledger, Harvey Dent, chaos" },
        { word: "SUPER MARIO", hint: "plumber, mushroom, Princess" },
        { word: "SONIC", hint: "blue, rings, fast" },
        { word: "POKEMON", hint: "Pikachu, Ash, Pokemon" },
        { word: "CINDERELLA", hint: "glass slipper, pumpkin, midnight" },
        { word: "SNOW WHITE", hint: "apple, dwarfs, prince" },
        { word: "BEAUTY AND THE BEAST", hint: "rose, Belle, beast" },
        { word: "ALADDIN", hint: "genie, lamp, carpet" },
        { word: "MOANA", hint: "ocean, Maui, Te Fiti" },
        { word: "ENCANTO", hint: "Mirabel, Bruno, Casita" },
        { word: "COCO", hint: "guitar, grandma, skeleton" },
        { word: "INSIDE OUT", hint: "Joy, Sadness, memory" },
        { word: "UP", hint: "balloons, old man, house" },
        { word: "WRECK-IT RALPH", hint: "arcade, bad guy, Vanellope" },
        { word: "KUNG FU PANDA", hint: "Po, noodles, dragon warrior" },
        { word: "FAST AND FURIOUS", hint: "cars, family, Dom" },
        { word: "RESIDENT EVIL", hint: "Alice, zombies, Umbrella" },
        { word: "JURASSIC WORLD", hint: "dinosaurs, park, Indominus" },
        { word: "JURASSIC PARK", hint: "T-Rex, raptors, DNA" },
        { word: "MAZE RUNNER", hint: "Glade, Grievers, Thomas" },
        { word: "READY PLAYER ONE", hint: "VR, OASIS, eggs" },
        { word: "PIXELS", hint: "arcade, aliens, Pac-Man" },
        { word: "JUMANJI", hint: "board game, jungle, Robin" },
        { word: "THE MUMMY", hint: "Imhotep, Egypt, curse" },
        { word: "WORLD WAR Z", hint: "zombies, Brad Pitt, fast" },
        { word: "LORD OF THE RINGS", hint: "ring, Frodo, Middle Earth" },
        { word: "THE HOBBIT", hint: "Bilbo, dragon, dwarves" },
        { word: "IT", hint: "Pennywise, clown, balloon" },
        { word: "FREE GUY", hint: "NPC, video game, Ryan" },
        { word: "TITANIC", hint: "ship, ice, Jack" },
        { word: "INTERSTELLAR", hint: "black hole, time, Matthew" },
        { word: "INCEPTION", hint: "dream, totem, spin" },
        { word: "THE MATRIX", hint: "red pill, Neo, bullet" },
        { word: "GLADIATOR", hint: "Colosseum, revenge, emperor" },
        { word: "THE GODFATHER", hint: "mafia, horse, Corleone" },
        { word: "PULP FICTION", hint: "dance, burger, Ezekiel" },
        { word: "FIGHT CLUB", hint: "soap, Tyler, first rule" },
        { word: "FORREST GUMP", hint: "chocolate, run, shrimp" },
        { word: "MASTER", hint: "JD, college, Anirudh" },
        { word: "LEO", hint: "dash, bloodshed, Loki" },
        { word: "BEAST", hint: "mall, terrorists, Arabic Kuthu" },
        { word: "BIGIL", hint: "football, coach, Nayanthara" },
        { word: "MERSAL", hint: "triple role, doctor, medical" },
        { word: "THERI", hint: "daughter, cop, Samantha" },
        { word: "KATHTHI", hint: "farmer, machete, Samantha" },
        { word: "THUPPAKKI", hint: "bomb squad, table fan, Kajal" },
        { word: "NANBAN", hint: "college, friendship, 3 idiots" },
        { word: "GILLI", hint: "Muthupandi, kannukulle, Trisha" },
        { word: "GHAJINI", hint: "memory loss, Asin, tattoo" },
        { word: "SOORARAI POTTRU", hint: "farmer, flying, simple" },
        { word: "JAI BHIM", hint: "tribal, court, justice" },
        { word: "VIP", hint: "coolie, engineering, Amala" },
        { word: "VIP 2", hint: "architects, Kajol, sequel" },
        { word: "SINGAM", hint: "police, whistle, Anushka" },
        { word: "SINGAM 2", hint: "Myanmar, villain, Kajal" },
        { word: "ANJAAN", hint: "Raju Bhai, math, Samantha" },
        { word: "24", hint: "time travel, watch, Samantha" },
        { word: "VAARANAM AAYIRAM", hint: "army, Harris, love" },
        { word: "ASURAN", hint: "father-son, caste, sun" },
        { word: "KARNAN", hint: "village, collector, hero" },
        { word: "THIRUCHITRAMBALAM", hint: "brother, sentiment, Raashii" },
        { word: "MAARI", hint: "rowdy, comedy, Kajal" },
        { word: "MAARI 2", hint: "Sai Pallavi, Varalakshmi, sequel" },
        { word: "POLLADHAVAN", hint: "murder, screenplay, Shruti" },
        { word: "PATTAS", hint: "karate, Sneha, comedy" },
        { word: "AADUKALAM", hint: "cockfight, National Award" },
        { word: "VADACHENNAI", hint: "gangster, Vetrimaran, Ameer" },
        { word: "RAANJHANAA", hint: "Hindi debut, Sonam, Delhi" },
        { word: "MARYAN", hint: "ocean, love, desert" },
        { word: "VEERAM", hint: "family, comedy, Tamannaah" },
        { word: "VEDALAM", hint: "revenge, Shruti, Ajith" },
        { word: "VISWASAM", hint: "family, blockbuster, Nayanthara" },
        { word: "NERKONDA PAARVAI", hint: "blind, court, Ajith" },
        { word: "YENNAI ARINDHAAL", hint: "police, track, Ajith" },
        { word: "VALIMAI", hint: "action, H Vinoth, Ajith" },
        { word: "THUNIVU", hint: "cargo, Manju Warrier, Ajith" },
        { word: "VINNAITHAANDI VARUVAAYAA", hint: "Jessie, camera, Gautham" },
        { word: "VANDAAN VENDRAN", hint: "comedy, Soori, Simbu" },
        { word: "PATHU ENDRATHU NANBAN", hint: "gangster, KR, Simbu" },
        { word: "KO", hint: "photos, Karthika, Jeeva" },
        { word: "NEETHANE EN PONVASANTHAM", hint: "romance, family, Jeeva" },
        { word: "THANI ORUVAN", hint: "cop, Arvind Swamy, Jayam" },
        { word: "MIRUTHAN", hint: "zombie, horror, Jayam" },
        { word: "BHOOMI", hint: "farmer, agriculture, Jayam" },
        { word: "KOMALI", hint: "comedy, sports, Jayam" },
        { word: "LOVE TODAY", hint: "phone swap, couple, Pradeep" },
        { word: "DRAGON", hint: "Raghavan, college, topper" },
        { word: "COMALI", hint: "coma, Jayam Ravi, director" },
        { word: "BAHUBALI", hint: "Katappa, waterfall, Prabhas" },
        { word: "BAHUBALI 2", hint: "why Katappa killed, answer" },
        { word: "RRR", hint: "Naatu Naatu, Ram Charan, NTR" },
        { word: "KGF", hint: "Rocky Bhai, gold, Yash" },
        { word: "KGF 2", hint: "Rocky, king, Srinidhi" },
        { word: "PUSHPA", hint: "sandalwood, red sanders, Allu" },
        { word: "KALKI", hint: "Prabhas, sci-fi, time" }
    ]},
    
    animals: { name: "Animals", icon: "fa-paw", words: [
        { word: "LION", hint: "king" },
        { word: "TIGER", hint: "stripes" },
        { word: "ELEPHANT", hint: "trunk" },
        { word: "GIRAFFE", hint: "neck" },
        { word: "ZEBRA", hint: "black and white" },
        { word: "CHEETAH", hint: "fast" },
        { word: "LEOPARD", hint: "spots" },
        { word: "PANDA", hint: "bamboo" },
        { word: "KANGAROO", hint: "jump" },
        { word: "KOALA", hint: "sleep" },
        { word: "POLAR BEAR", hint: "arctic" },
        { word: "PENGUIN", hint: "waddle" },
        { word: "DOLPHIN", hint: "smart" },
        { word: "WHALE", hint: "huge" },
        { word: "SHARK", hint: "teeth" },
        { word: "OCTOPUS", hint: "eight" },
        { word: "CROCODILE", hint: "teeth" },
        { word: "SNAKE", hint: "slither" },
        { word: "FROG", hint: "jump" },
        { word: "MONKEY", hint: "banana" },
        { word: "GORILLA", hint: "strong" },
        { word: "HORSE", hint: "gallop" },
        { word: "COW", hint: "milk" },
        { word: "GOAT", hint: "climb" },
        { word: "SHEEP", hint: "wool" },
        { word: "PIG", hint: "mud" },
        { word: "DOG", hint: "bark" },
        { word: "CAT", hint: "meow" },
        { word: "RABBIT", hint: "hop" },
        { word: "FOX", hint: "sly" },
        { word: "WOLF", hint: "howl" },
        { word: "DEER", hint: "antlers" },
        { word: "BEAR", hint: "hibernate" },
        { word: "CAMEL", hint: "hump" },
        { word: "FISH", hint: "swim" },
        { word: "BIRD", hint: "fly" },
        { word: "BUTTERFLY", hint: "wings" },
        { word: "BEE", hint: "honey" }
    ]},
    
    tech: { name: "Technology", icon: "fa-microchip", words: [
        { word: "FACEBOOK", hint: "Meta, like" },
        { word: "INSTAGRAM", hint: "photos, reels" },
        { word: "TIKTOK", hint: "videos, viral" },
        { word: "YOUTUBE", hint: "video, subscribe" },
        { word: "WHATSAPP", hint: "green, messaging" },
        { word: "NETFLIX", hint: "streaming, binge" },
        { word: "DISNEY+", hint: "Marvel, Disney" },
        { word: "AMAZON PRIME", hint: "shopping, delivery" },
        { word: "SPOTIFY", hint: "music, podcast" },
        { word: "GOOGLE", hint: "search, chrome" },
        { word: "CHATGPT", hint: "AI, chatbot" },
        { word: "IPHONE", hint: "Apple, iOS" },
        { word: "ANDROID", hint: "Google, phone" },
        { word: "SAMSUNG", hint: "galaxy, korean" },
        { word: "XBOX", hint: "microsoft, gaming" },
        { word: "PLAYSTATION", hint: "sony, gaming" },
        { word: "NINTENDO SWITCH", hint: "mario, handheld" },
        { word: "WII", hint: "motion, nintendo" },
        { word: "TESLA", hint: "Elon, electric" },
        { word: "UBER", hint: "ride, taxi" },
        { word: "AIRBNB", hint: "rent, vacation" },
        { word: "ZOOM", hint: "video, call" },
        { word: "MICROSOFT TEAMS", hint: "work, chat" },
        { word: "SNAPCHAT", hint: "disappear, filters" },
        { word: "TWITTER", hint: "tweets, X" },
        { word: "REDDIT", hint: "forums, upvote" },
        { word: "PINTEREST", hint: "ideas, boards" },
        { word: "LINKEDIN", hint: "jobs, network" }
    ]},
    
    food: { name: "Food", icon: "fa-utensils", words: [
        { word: "MCDONALD'S", hint: "Golden arches, Big Mac, fries" },
        { word: "BURGER KING", hint: "Whopper, flame grilled" },
        { word: "KFC", hint: "Finger lickin', fried chicken" },
        { word: "PIZZA HUT", hint: "Pizza, stuffed crust, cheese" },
        { word: "DOMINO'S", hint: "Pizza delivery, 30 minutes" },
        { word: "STARBUCKS", hint: "Coffee, Frappuccino, Pumpkin spice" },
        { word: "DUNKIN'", hint: "Donuts, coffee, America runs on" },
        { word: "SUBWAY", hint: "Sandwich, footlong, eat fresh" },
        { word: "TACO BELL", hint: "Mexican, crunchy taco, nachos" },
        { word: "CHIPOTLE", hint: "Burrito bowl, guac, fast casual" },
        { word: "WENDY'S", hint: "Square burger, Frosty" },
        { word: "FIVE GUYS", hint: "Burger, peanut oil, free peanuts" },
        { word: "SHAKE SHACK", hint: "ShackBurger, crinkle fries" },
        { word: "POPEYES", hint: "Chicken sandwich, Louisiana" },
        { word: "CHICK-FIL-A", hint: "Chicken sandwich, cows, Sunday closed" },
        { word: "OLIVE GARDEN", hint: "Breadsticks, pasta, endless soup" },
        { word: "RED LOBSTER", hint: "Seafood, cheddar biscuits" },
        { word: "DENNY'S", hint: "Breakfast all day, grand slam" },
        { word: "IHOP", hint: "Pancakes, breakfast, rooty tooty" },
        { word: "PANDA EXPRESS", hint: "Orange chicken, Chinese fast food" },
        { word: "IN-N-OUT", hint: "Double double, animal style" },
        { word: "WHATABURGER", hint: "Texas burger, patty melt" },
        { word: "Sonic", hint: "Drive-in, slushies, tots" },
        { word: "DAIRY QUEEN", hint: "Blizzard, soft serve, ice cream" },
        { word: "BASKIN ROBBINS", hint: "31 flavors, ice cream cake" }
    ]},
    
    sports: { name: "Sports", icon: "fa-futbol", words: [
        { word: "CRICKET", hint: "bat, ball" },
        { word: "FOOTBALL", hint: "goal, messi" },
        { word: "RUGBY", hint: "oval, tackle" },
        { word: "HOCKEY", hint: "stick, goal" },
        { word: "BASKETBALL", hint: "hoop, jordan" },
        { word: "TENNIS", hint: "racket, federer" },
        { word: "BADMINTON", hint: "shuttle, smash" },
        { word: "TABLE TENNIS", hint: "ping, pong" },
        { word: "VOLLEYBALL", hint: "net, spike" },
        { word: "BASEBALL", hint: "bat, home" },
        { word: "GOLF", hint: "hole, tiger" },
        { word: "BOXING", hint: "punch, ring" },
        { word: "WRESTLING", hint: "mat, pin" },
        { word: "KABADDI", hint: "raid, tackle" },
        { word: "KHO KHO", hint: "tag, chase" },
        { word: "ATHLETICS", hint: "run, track" },
        { word: "SWIMMING", hint: "pool, laps" },
        { word: "ARCHERY", hint: "bow, arrow" },
        { word: "SHOOTING", hint: "gun, target" },
        { word: "FENCING", hint: "sword, duel" },
        { word: "JUDO", hint: "throw, belt" },
        { word: "TAEKWONDO", hint: "kick, board" },
        { word: "KARATE", hint: "chop, dojo" },
        { word: "MUAY THAI", hint: "elbow, knee" },
        { word: "MMA", hint: "cage, fight" },
        { word: "CYCLING", hint: "bike, tour" },
        { word: "SKATING", hint: "ice, blade" },
        { word: "SNOOKER", hint: "cue, ball" },
        { word: "BILLIARDS", hint: "pool, pocket" },
        { word: "CHESS", hint: "king, checkmate" },
        { word: "CARROM", hint: "striker, coin" },
        { word: "POLO", hint: "horse, mallet" },
        { word: "SURFING", hint: "wave, board" },
        { word: "SKIING", hint: "snow, slope" },
        { word: "SNOWBOARDING", hint: "snow, trick" },
        { word: "HANDBALL", hint: "throw, goal" },
        { word: "BEACH VOLLEYBALL", hint: "sand, spike" },
        { word: "WATER POLO", hint: "pool, goal" },
        { word: "ROWING", hint: "boat, oar" },
        { word: "SAILING", hint: "wind, boat" },
        { word: "CLIMBING", hint: "rock, rope" },
        { word: "WEIGHTLIFTING", hint: "bar, snatch" },
        { word: "POWERLIFTING", hint: "squat, deadlift" },
        { word: "GYMNASTICS", hint: "flip, beam" },
        { word: "DIVING", hint: "pool, flip" },
        { word: "SYNCHRONIZED SWIMMING", hint: "water, dance" },
        { word: "TRIATHLON", hint: "swim, run" },
        { word: "MARATHON", hint: "long, run" },
        { word: "PARKOUR", hint: "jump, wall" },
        { word: "DODGEBALL", hint: "throw, dodge" },
        { word: "CURLING", hint: "ice, broom" },
        { word: "BOCCE", hint: "throw, ball" },
        { word: "LAWN BOWLS", hint: "grass, roll" },
        { word: "SQUASH", hint: "racket, wall" },
        { word: "RACQUETBALL", hint: "racquet, court" }
    ]},
    
    travel: { name: "Travel", icon: "fa-plane", words: [
    { word: "DISNEYLAND", hint: "castle, mickey" },
    { word: "DISNEY WORLD", hint: "florida, magic" },
    { word: "UNIVERSAL STUDIOS", hint: "harry, jurassic" },
    { word: "PARIS", hint: "eiffel, france" },
    { word: "LONDON", hint: "bigben, england" },
    { word: "NEW YORK", hint: "liberty, york" },
    { word: "TOKYO", hint: "japan, sushi" },
    { word: "ROME", hint: "colosseum, italy" },
    { word: "BARCELONA", hint: "spain, messi" },
    { word: "DUBAI", hint: "burj, uae" },
    { word: "SYDNEY", hint: "opera, australia" },
    { word: "LAS VEGAS", hint: "casino, nevada" },
    { word: "HAWAII", hint: "volcano, beach" },
    { word: "BALI", hint: "indonesia, temple" },
    { word: "MALDIVES", hint: "ocean, honeymoon" },
    { word: "SANTORINI", hint: "greece, sunset" },
    { word: "MACHU PICCHU", hint: "peru, inca" },
    { word: "GRAND CANYON", hint: "arizona, river" },
    { word: "NIAGARA FALLS", hint: "canada, waterfall" },
    { word: "EGYPT", hint: "pyramids, cairo" },
    { word: "THAILAND", hint: "bangkok, elephants" },
    { word: "SWITZERLAND", hint: "alps, chocolate" },
    { word: "VENICE", hint: "italy, canal" },
    { word: "AMSTERDAM", hint: "netherlands, bike" },
    { word: "ISTANBUL", hint: "turkey, mosque" },
    { word: "ATHENS", hint: "greece, acropolis" },
    { word: "MUMBAI", hint: "india, bollywood" },
    { word: "DELHI", hint: "india, redfort" },
    { word: "JAIPUR", hint: "india, palace" },
    { word: "GOA", hint: "india, beach" },
    { word: "KERALA", hint: "india, backwaters" },
    { word: "SRILANKA", hint: "colombo, tea" },
    { word: "SINGAPORE", hint: "merlion, sentosa" },
    { word: "KUALA LUMPUR", hint: "malaysia, towers" },
    { word: "BANGKOK", hint: "thailand, market" },
    { word: "SEOUL", hint: "korea, kimchi" },
    { word: "BEIJING", hint: "china, greatwall" },
    { word: "SHANGHAI", hint: "china, tower" },
    { word: "HONG KONG", hint: "china, skyline" },
    { word: "TAIPEI", hint: "taiwan, night" },
    { word: "CAIRO", hint: "egypt, nile" },
    { word: "CAPE TOWN", hint: "southafrica, mountain" },
    { word: "MARRAKECH", hint: "morocco, market" },
    { word: "RIO", hint: "brazil, christ" },
    { word: "BUENOS AIRES", hint: "argentina, tango" },
    { word: "MEXICO CITY", hint: "mexico, tacos" },
    { word: "CANCUN", hint: "mexico, beach" },
    { word: "VANCOUVER", hint: "canada, forest" },
    { word: "TORONTO", hint: "canada, tower" },
    { word: "LOS ANGELES", hint: "hollywood, california" },
    { word: "CHICAGO", hint: "usa, pizza" },
    { word: "SAN FRANCISCO", hint: "bridge, alcatraz" },
    { word: "MIAMI", hint: "beach, florida" }
]}
};

// Game state
let currentGame = {
    category: null,
    players: [],
    wordObj: null,
    imposterIndex: null,
    revealed: [],
    votes: [],
    hasVoted: [],
    currentRevealIdx: 0
};

// ============ DOM Elements ============
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCategorySelection();
    initSetupModal();
    initGameModal();
    initSocialLinks();
    initFloatingButton();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = { home: document.getElementById('homePage'), howto: document.getElementById('howtoPage'), support: document.getElementById('supportPage') };
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.switchPage = (pageId) => {
        Object.values(pages).forEach(p => p?.classList.remove('active'));
        if (pages[pageId]) pages[pageId].classList.add('active');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        navMenu?.classList.remove('active');
    };

    navLinks.forEach(link => link.addEventListener('click', () => switchPage(link.getAttribute('data-page'))));
    if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
}

function initCategorySelection() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const playBtn = document.getElementById('playBtn');
    window.selectedCategory = null;
    
    categoriesGrid.innerHTML = '';
    const categoryOrder = ['objects', 'vehicles', 'games', 'science', 'tvshows', 'cartoons', 'movies', 'animals', 'tech', 'food', 'sports', 'travel'];
    
    categoryOrder.forEach(key => {
        const cat = WORDS_DB[key];
        if (cat) {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.setAttribute('data-category', key);
            card.innerHTML = `
                <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
                <span class="category-name">${cat.name}</span>
                <span class="category-count">${cat.words.length} words</span>
            `;
            card.addEventListener('click', () => {
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                window.selectedCategory = key;
                const hint = document.querySelector('.play-hint');
                if (hint) hint.textContent = `ready to play • ${cat.name}`;
                
                const floatingBtn = document.getElementById('floatingPlayBtn');
                if (floatingBtn) {
                    floatingBtn.style.display = 'flex';
                    floatingBtn.classList.add('pulse');
                    setTimeout(() => {
                        floatingBtn.classList.remove('pulse');
                    }, 600);
                }
            });
            categoriesGrid.appendChild(card);
        }
    });
    
    if (playBtn) playBtn.addEventListener('click', () => openSetupModal());
}

function initFloatingButton() {
    const floatingBtn = document.getElementById('floatingPlayBtn');
    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            if (window.selectedCategory) {
                openSetupModal();
            } else {
                floatingBtn.classList.add('pulse');
                setTimeout(() => floatingBtn.classList.remove('pulse'), 600);
                const hint = document.querySelector('.play-hint');
                if (hint) {
                    hint.textContent = '⚠️ Select a category first!';
                    hint.style.color = '#CC5500';
                    setTimeout(() => {
                        if (hint && !window.selectedCategory) {
                            hint.textContent = 'select a category to begin';
                            hint.style.color = '#BBBB99';
                        }
                    }, 2500);
                }
            }
        });
    }
}

// ============ Player Setup Modal ============
let currentPlayers = [];

function loadSavedPlayers() {
    const saved = localStorage.getItem('imposter_players');
    if (saved) { try { const p = JSON.parse(saved); if (p.length >= 3) { currentPlayers = p.slice(0,100); return; } } catch(e) {} }
    currentPlayers = ['Player 1', 'Player 2', 'Player 3'];
}

function savePlayers() { localStorage.setItem('imposter_players', JSON.stringify(currentPlayers)); }

function renderPlayerInputs() {
    const panel = document.getElementById('playerNamesPanel');
    if (!panel) return;
    panel.innerHTML = '';
    currentPlayers.forEach((name, idx) => {
        const row = document.createElement('div');
        row.className = 'player-name-row';
        row.innerHTML = `
            <div class="player-number">${idx+1}</div>
            <input type="text" value="${escapeHtml(name)}" data-index="${idx}" class="player-name-input">
            ${idx >= 3 ? `<button class="remove-player-btn" data-index="${idx}"><i class="fas fa-trash-alt"></i></button>` : ''}
        `;
        panel.appendChild(row);
    });
    document.getElementById('playerCountDisplay').innerText = currentPlayers.length;
    document.querySelectorAll('.player-name-input').forEach(inp => inp.addEventListener('change', (e) => { const i = parseInt(inp.dataset.index); if (inp.value.trim()) currentPlayers[i] = inp.value.trim(); savePlayers(); }));
    document.querySelectorAll('.remove-player-btn').forEach(btn => btn.addEventListener('click', (e) => { const i = parseInt(btn.dataset.index); if (currentPlayers.length > 3) { currentPlayers.splice(i,1); savePlayers(); renderPlayerInputs(); } }));
}

function openSetupModal() {
    if (!window.selectedCategory) { alert('Please select a category first!'); return; }
    loadSavedPlayers();
    renderPlayerInputs();
    document.getElementById('setupModal').classList.add('active');
}

function closeSetupModal() { document.getElementById('setupModal').classList.remove('active'); }

function initSetupModal() {
    const setupModal = document.getElementById('setupModal');
    
    document.getElementById('closeModalBtn')?.addEventListener('click', closeSetupModal);
    document.getElementById('addPlayerBtn')?.addEventListener('click', () => { if (currentPlayers.length < 100) { currentPlayers.push(`Player ${currentPlayers.length+1}`); savePlayers(); renderPlayerInputs(); } else alert('Maximum 100 players!'); });
    document.getElementById('startGameModalBtn')?.addEventListener('click', () => { closeSetupModal(); startGame(); });
    
    setupModal.addEventListener('click', (e) => { e.stopPropagation(); });
}

// ============ GAME LOGIC ============
function startGame() {
    const categoryData = WORDS_DB[window.selectedCategory];
    const words = categoryData.words;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    const imposterIdx = Math.floor(Math.random() * currentPlayers.length);
    
    currentGame = {
        category: window.selectedCategory,
        players: [...currentPlayers],
        wordObj: randomWord,
        imposterIndex: imposterIdx,
        revealed: new Array(currentPlayers.length).fill(false),
        votes: new Array(currentPlayers.length).fill(0),
        hasVoted: new Array(currentPlayers.length).fill(false),
        currentRevealIdx: 0
    };
    
    document.getElementById('totalRevealPlayers').innerText = currentGame.players.length;
    document.getElementById('currentRevealIdx').innerText = 1;
    document.getElementById('revealPhase').classList.add('active');
    document.getElementById('votingPhase').classList.remove('active');
    
    // Next button starts DISABLED - player must flip first
    document.getElementById('nextPlayerRevealBtn').disabled = true;
    document.getElementById('finishRevealBtn').disabled = true;
    
    renderFlipCard();
    document.getElementById('gameModal').classList.add('active');
}

// ============ FIXED FUNCTIONS ============
function renderFlipCard() {
    const container = document.getElementById('flipCardContainer');
    const idx = currentGame.currentRevealIdx;
    const player = currentGame.players[idx];
    const isImposter = (idx === currentGame.imposterIndex);
    
    container.innerHTML = `
        <div class="flip-card" id="activeFlipCard">
            <div class="flip-card-inner">
                <div class="flip-front">
                    <i class="fas fa-question-circle"></i>
                    <p>${escapeHtml(player)}</p>
                    <small style="margin-top:20px;">tap & hold to reveal</small>
                </div>
                <div class="flip-back">
                    ${isImposter ? 
                        `<i class="fas fa-mask" style="font-size:2rem"></i>
                         <div class="imposter-text">🃟 YOU ARE THE IMPOSTER</div>
                         <div class="hint-text">🔍 Hint: ${escapeHtml(currentGame.wordObj.hint)}</div>` :
                        `<i class="fas fa-eye" style="font-size:2rem"></i>
                         <div class="secret-word">${escapeHtml(currentGame.wordObj.word)}</div>
                         <div class="hint-text">📖 keep this secret</div>`
                    }
                </div>
            </div>
        </div>
    `;
    
    const card = document.getElementById('activeFlipCard');
    let holdTimer = null;
    
    const startHold = () => {
        holdTimer = setTimeout(() => {
            card.classList.add('flipped');
            // Check if this is the FIRST time this player flips
            if (!currentGame.revealed[idx]) {
                currentGame.revealed[idx] = true;
                updateRevealButtons();
            }
        }, 150);
    };
    
    const endHold = () => {
        if (holdTimer) {
            clearTimeout(holdTimer);
            holdTimer = null;
        }
        card.classList.remove('flipped');
    };
    
    card.addEventListener('mousedown', startHold);
    card.addEventListener('mouseup', endHold);
    card.addEventListener('mouseleave', endHold);
    card.addEventListener('touchstart', startHold, {passive: false});
    card.addEventListener('touchend', endHold);
    card.addEventListener('touchcancel', endHold);
    
    container.classList.remove('enter-right');
    void container.offsetWidth;
    container.classList.add('enter-right');
}

function updateRevealButtons() {
    const currentIdx = currentGame.currentRevealIdx;
    const nextBtn = document.getElementById('nextPlayerRevealBtn');
    const finishBtn = document.getElementById('finishRevealBtn');
    const totalPlayers = currentGame.players.length;
    const isLastPlayer = (currentIdx + 1 === totalPlayers);
    
    // If current player has flipped at least once, unlock next button
    if (currentGame.revealed[currentIdx]) {
        if (isLastPlayer) {
            // Last player: Next button disabled, check if Start Voting should unlock
            nextBtn.disabled = true;
            // Check if ALL players have flipped (including last)
            const allRevealed = currentGame.revealed.every(r => r === true);
            finishBtn.disabled = !allRevealed;
        } else {
            // Not last player: Next button enabled
            nextBtn.disabled = false;
            finishBtn.disabled = true;
        }
    } else {
        // Player hasn't flipped yet: Next button disabled
        nextBtn.disabled = true;
        finishBtn.disabled = true;
    }
}

function nextPlayer() {
    if (currentGame.currentRevealIdx + 1 < currentGame.players.length) {
        const container = document.getElementById('flipCardContainer');
        
        container.classList.remove('enter-right');
        container.classList.add('exit-left');
        
        setTimeout(() => {
            currentGame.currentRevealIdx++;
            document.getElementById('currentRevealIdx').innerText = currentGame.currentRevealIdx + 1;
            
            // Next button starts DISABLED for new player
            document.getElementById('nextPlayerRevealBtn').disabled = true;
            document.getElementById('finishRevealBtn').disabled = true;
            
            container.classList.remove('exit-left');
            renderFlipCard();
        }, 250);
    }
}

function finishReveal() {
    document.getElementById('revealPhase').classList.remove('active');
    document.getElementById('votingPhase').classList.add('active');
    renderVotingUI();
}

function renderVotingUI() {
    const container = document.getElementById('votingList');
    container.innerHTML = '';
    
    currentGame.votes = new Array(currentGame.players.length).fill(0);
    currentGame.hasVoted = new Array(currentGame.players.length).fill(false);
    
    const instruction = document.createElement('div');
    instruction.className = 'voting-instruction';
    instruction.innerHTML = '<i class="fas fa-info-circle"></i> Each player clicks ONCE on who they think is the imposter';
    container.appendChild(instruction);
    
    currentGame.players.forEach((player, idx) => {
        const voteCard = document.createElement('div');
        voteCard.className = 'vote-card';
        voteCard.dataset.idx = idx;
        voteCard.innerHTML = `
            <span class="voter-name"><i class="fas fa-user"></i> ${escapeHtml(player)}</span>
            <div class="vote-stats">
                <div class="vote-progress"><div class="vote-fill" id="voteFill-${idx}" style="width:0%"></div></div>
                <span class="vote-count" id="voteCount-${idx}">0</span>
            </div>
        `;
        
        voteCard.addEventListener('click', () => {
            const votedCount = currentGame.hasVoted.filter(v => v === true).length;
            const totalPlayers = currentGame.players.length;
            
            if (votedCount >= totalPlayers) {
                showVotingToast('All players have already voted! Click "Reveal Imposter"', '#FF8888');
                return;
            }
            
            const nextVoterIndex = currentGame.hasVoted.findIndex(v => v === false);
            if (nextVoterIndex !== -1) {
                const voterName = currentGame.players[nextVoterIndex];
                currentGame.hasVoted[nextVoterIndex] = true;
                currentGame.votes[idx]++;
                updateVoteDisplay();
                
                showVotingToast(`${voterName} voted for ${escapeHtml(player)}`, '#FFE87C');
                
                voteCard.style.transform = 'scale(0.98)';
                setTimeout(() => { voteCard.style.transform = ''; }, 150);
                
                const allVoted = currentGame.hasVoted.every(v => v === true);
                if (allVoted) {
                    setTimeout(() => {
                        showVotingToast('✅ All votes cast! Click "Reveal Imposter" to see the result', '#00AA00');
                    }, 300);
                }
            }
        });
        container.appendChild(voteCard);
    });
    
    const voteCountDisplay = document.createElement('div');
    voteCountDisplay.className = 'vote-count-display';
    voteCountDisplay.id = 'voteCountDisplay';
    voteCountDisplay.innerHTML = `<i class="fas fa-chart-simple"></i> 🗳️ VOTES CAST: 0 / ${currentGame.players.length} 🗳️`;
    container.appendChild(voteCountDisplay);
}

function updateVoteDisplay() {
    const totalVotes = currentGame.votes.reduce((a,b) => a+b, 0);
    
    currentGame.votes.forEach((count, idx) => {
        const percent = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
        const fill = document.getElementById(`voteFill-${idx}`);
        const countSpan = document.getElementById(`voteCount-${idx}`);
        if (fill) fill.style.width = `${percent}%`;
        if (countSpan) countSpan.innerText = count;
    });
    
    const voteCountDisplay = document.getElementById('voteCountDisplay');
    if (voteCountDisplay) {
        const votedCount = currentGame.hasVoted.filter(v => v === true).length;
        voteCountDisplay.innerHTML = `<i class="fas fa-chart-simple"></i> 🗳️ VOTES CAST: ${votedCount} / ${currentGame.players.length} 🗳️`;
        
        if (votedCount === currentGame.players.length) {
            voteCountDisplay.classList.add('complete');
        } else {
            voteCountDisplay.classList.remove('complete');
        }
    }
}

function showVotingToast(message, color) {
    let toast = document.getElementById('votingToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'votingToast';
        toast.className = 'voting-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.style.backgroundColor = '#000000';
    toast.style.color = color || '#FFE87C';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function revealVerdict() {
    const totalVotesCast = currentGame.hasVoted.filter(v => v === true).length;
    if (totalVotesCast < currentGame.players.length) {
        showVotingToast(`⚠️ ${currentGame.players.length - totalVotesCast} player(s) haven't voted yet!`, '#FF8888');
        return;
    }
    
    let maxVotes = -1;
    let accusedIdx = 0;
    currentGame.votes.forEach((votes, idx) => { 
        if (votes > maxVotes) { 
            maxVotes = votes; 
            accusedIdx = idx; 
        } 
    });
    const wasCorrect = (accusedIdx === currentGame.imposterIndex);
    showResult(accusedIdx, wasCorrect);
}

function showResult(accusedIdx, wasCorrect) {
    document.getElementById('gameModal').classList.remove('active');
    const imposterName = currentGame.players[currentGame.imposterIndex];
    const accusedName = currentGame.players[accusedIdx];
    
    const resultTitle = document.getElementById('resultTitle');
    const resultBody = document.getElementById('resultBody');
    const resultHeader = document.getElementById('resultHeader');
    const resultCard = document.querySelector('.result-card');
    
    resultCard.classList.remove('win', 'loss');
    
    if (wasCorrect) {
        resultCard.classList.add('win');
        resultTitle.innerText = '🎭 IMPOSTER CAUGHT! 🎭';
        resultHeader.style.background = 'linear-gradient(135deg, #006400 0%, #00AA00 50%, #006400 100%)';
        resultBody.innerHTML = `
            <div style="text-align:center">
                <i class="fas fa-check-circle" style="font-size:3rem; color:#00AA00; margin-bottom:1rem"></i>
                <p>The crew voted out <strong style="color:#006400">${escapeHtml(accusedName)}</strong>!</p>
                <div class="result-word">🔍 ${escapeHtml(currentGame.wordObj.word)} 🔍</div>
                <p>The real imposter was <strong style="color:#006400">${escapeHtml(imposterName)}</strong>.</p>
                <p style="font-size:1.5rem; margin-top:0.5rem">🏆 CREW VICTORY! 🏆</p>
            </div>
        `;
    } else {
        resultCard.classList.add('loss');
        resultTitle.innerText = '😈 IMPOSTER WINS! 😈';
        resultHeader.style.background = 'linear-gradient(135deg, #4a0000 0%, #8B0000 50%, #4a0000 100%)';
        resultBody.innerHTML = `
            <div style="text-align:center">
                <i class="fas fa-skull-crossbones" style="font-size:3rem; color:#8B0000; margin-bottom:1rem"></i>
                <p>The crew accused <strong style="color:#8B0000">${escapeHtml(accusedName)}</strong>... but they were innocent!</p>
                <div class="result-word">🔍 The secret word was: ${escapeHtml(currentGame.wordObj.word)} 🔍</div>
                <p>The imposter <strong style="color:#8B0000">${escapeHtml(imposterName)}</strong> fooled everyone.</p>
                <p style="font-size:1.5rem; margin-top:0.5rem">💀 IMPOSTER VICTORY! 💀</p>
            </div>
        `;
    }
    document.getElementById('resultModal').classList.add('active');
}

function playAgain() {
    document.getElementById('resultModal').classList.remove('active');
    openSetupModal();
}

function endGame() {
    document.getElementById('resultModal').classList.remove('active');
    switchPage('home');
}

function initGameModal() {
    const gameModal = document.getElementById('gameModal');
    const resultModal = document.getElementById('resultModal');
    
    const closeGameBtn = document.getElementById('closeGameBtn');
    if (closeGameBtn) {
        closeGameBtn.addEventListener('click', () => {
            if (confirm('Exit game? Your progress will be lost.')) {
                gameModal.classList.remove('active');
            }
        });
    }
    
    const closeVotingBtn = document.getElementById('closeVotingBtn');
    if (closeVotingBtn) {
        closeVotingBtn.addEventListener('click', () => {
            if (confirm('Exit game? Your progress will be lost.')) {
                gameModal.classList.remove('active');
            }
        });
    }
    
    document.getElementById('nextPlayerRevealBtn')?.addEventListener('click', () => nextPlayer());
    document.getElementById('finishRevealBtn')?.addEventListener('click', () => finishReveal());
    document.getElementById('revealVerdictBtn')?.addEventListener('click', () => revealVerdict());
    document.getElementById('playAgainBtn')?.addEventListener('click', () => playAgain());
    document.getElementById('endGameBtn')?.addEventListener('click', () => endGame());
    
    gameModal.addEventListener('click', (e) => { e.stopPropagation(); });
    resultModal.addEventListener('click', (e) => { e.stopPropagation(); });
}

function initSocialLinks() {
    const instaLink = document.getElementById('instaLink');
    const tiktokLink = document.getElementById('tiktokLink');
    const githubLink = document.getElementById('githubLink');
    
    if (instaLink) instaLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://instagram.com/_arsu.x', '_blank'); });
    if (tiktokLink) tiktokLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://tiktok.com/@my.ville', '_blank'); });
    if (githubLink) githubLink.addEventListener('click', (e) => { e.preventDefault(); window.open('https://github.com/Arfadh-Subhan', '_blank'); });
    
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent('Play IMPOSTER - the ultimate bluffing party game! 🎭');
    document.getElementById('shareTwitter')?.addEventListener('click', () => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank'));
    document.getElementById('shareWhatsapp')?.addEventListener('click', () => window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank'));
    document.getElementById('shareTelegram')?.addEventListener('click', () => window.open(`https://t.me/share/url?url=${shareUrl}&text=${shareText}`, '_blank'));
}

function escapeHtml(str) { return String(str).replace(/[&<>]/g, (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;' }[m])); }
