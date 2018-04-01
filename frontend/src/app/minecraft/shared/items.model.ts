export interface MinecraftItem {
  key: string;
  type: string;
  meta: number;
  name: string;
  image: string;
}

export const MINECRAFT_ITEMS = {
  'air': {'type': 0, 'meta': 0, 'name': 'Air'},
  'stone': {'type': 1, 'meta': 6, 'name': 'Polished Andesite'},
  'grass': {'type': 2, 'meta': 0, 'name': 'Grass'},
  'dirt': {'type': 3, 'meta': 2, 'name': 'Podzol'},
  'cobblestone': {'type': 4, 'meta': 0, 'name': 'Cobblestone'},
  'planks': {'type': 5, 'meta': 5, 'name': 'Dark Oak Wood Plank'},
  'sapling': {'type': 6, 'meta': 5, 'name': 'Dark Oak Sapling'},
  'bedrock': {'type': 7, 'meta': 0, 'name': 'Bedrock'},
  'flowing_water': {'type': 8, 'meta': 0, 'name': 'Flowing Water'},
  'water': {'type': 9, 'meta': 0, 'name': 'Still Water'},
  'flowing_lava': {'type': 10, 'meta': 0, 'name': 'Flowing Lava'},
  'lava': {'type': 11, 'meta': 0, 'name': 'Still Lava'},
  'sand': {'type': 12, 'meta': 1, 'name': 'Red Sand'},
  'gravel': {'type': 13, 'meta': 0, 'name': 'Gravel'},
  'gold_ore': {'type': 14, 'meta': 0, 'name': 'Gold Ore'},
  'iron_ore': {'type': 15, 'meta': 0, 'name': 'Iron Ore'},
  'coal_ore': {'type': 16, 'meta': 0, 'name': 'Coal Ore'},
  'log': {'type': 17, 'meta': 3, 'name': 'Jungle Wood'},
  'leaves': {'type': 18, 'meta': 3, 'name': 'Jungle Leaves'},
  'sponge': {'type': 19, 'meta': 1, 'name': 'Wet Sponge'},
  'glass': {'type': 20, 'meta': 0, 'name': 'Glass'},
  'lapis_ore': {'type': 21, 'meta': 0, 'name': 'Lapis Lazuli Ore'},
  'lapis_block': {'type': 22, 'meta': 0, 'name': 'Lapis Lazuli Block'},
  'dispenser': {'type': 23, 'meta': 0, 'name': 'Dispenser'},
  'sandstone': {'type': 24, 'meta': 2, 'name': 'Smooth Sandstone'},
  'noteblock': {'type': 25, 'meta': 0, 'name': 'Note Block'},
  'bed': {'type': 355, 'meta': 0, 'name': 'Bed'},
  'golden_rail': {'type': 27, 'meta': 0, 'name': 'Powered Rail'},
  'detector_rail': {'type': 28, 'meta': 0, 'name': 'Detector Rail'},
  'sticky_piston': {'type': 29, 'meta': 0, 'name': 'Sticky Piston'},
  'web': {'type': 30, 'meta': 0, 'name': 'Cobweb'},
  'tallgrass': {'type': 31, 'meta': 2, 'name': 'Fern'},
  'deadbush': {'type': 32, 'meta': 0, 'name': 'Dead Bush'},
  'piston': {'type': 33, 'meta': 0, 'name': 'Piston'},
  'piston_head': {'type': 34, 'meta': 0, 'name': 'Piston Head'},
  'wool': {'type': 35, 'meta': 15, 'name': 'Black Wool'},
  'yellow_flower': {'type': 37, 'meta': 0, 'name': 'Dandelion'},
  'red_flower': {'type': 38, 'meta': 8, 'name': 'Oxeye Daisy'},
  'brown_mushroom': {'type': 39, 'meta': 0, 'name': 'Brown Mushroom'},
  'red_mushroom': {'type': 40, 'meta': 0, 'name': 'Red Mushroom'},
  'gold_block': {'type': 41, 'meta': 0, 'name': 'Gold Block'},
  'iron_block': {'type': 42, 'meta': 0, 'name': 'Iron Block'},
  'double_stone_slab': {'type': 43, 'meta': 7, 'name': 'Double Quartz Slab'},
  'stone_slab': {'type': 44, 'meta': 7, 'name': 'Quartz Slab'},
  'brick_block': {'type': 45, 'meta': 0, 'name': 'Bricks'},
  'tnt': {'type': 46, 'meta': 0, 'name': 'TNT'},
  'bookshelf': {'type': 47, 'meta': 0, 'name': 'Bookshelf'},
  'mossy_cobblestone': {'type': 48, 'meta': 0, 'name': 'Moss Stone'},
  'obsidian': {'type': 49, 'meta': 0, 'name': 'Obsidian'},
  'torch': {'type': 50, 'meta': 0, 'name': 'Torch'},
  'fire': {'type': 51, 'meta': 0, 'name': 'Fire'},
  'mob_spawner': {'type': 52, 'meta': 0, 'name': 'Monster Spawner'},
  'oak_stairs': {'type': 53, 'meta': 0, 'name': 'Oak Wood Stairs'},
  'chest': {'type': 54, 'meta': 0, 'name': 'Chest'},
  'redstone_wire': {'type': 55, 'meta': 0, 'name': 'Redstone Wire'},
  'diamond_ore': {'type': 56, 'meta': 0, 'name': 'Diamond Ore'},
  'diamond_block': {'type': 57, 'meta': 0, 'name': 'Diamond Block'},
  'crafting_table': {'type': 58, 'meta': 0, 'name': 'Crafting Table'},
  'wheat': {'type': 296, 'meta': 0, 'name': 'Wheat'},
  'farmland': {'type': 60, 'meta': 0, 'name': 'Farmland'},
  'furnace': {'type': 61, 'meta': 0, 'name': 'Furnace'},
  'lit_furnace': {'type': 62, 'meta': 0, 'name': 'Burning Furnace'},
  'standing_sign': {'type': 63, 'meta': 0, 'name': 'Standing Sign Block'},
  'wooden_door': {'type': 324, 'meta': 0, 'name': 'Oak Door'},
  'ladder': {'type': 65, 'meta': 0, 'name': 'Ladder'},
  'rail': {'type': 66, 'meta': 0, 'name': 'Rail'},
  'stone_stairs': {'type': 67, 'meta': 0, 'name': 'Cobblestone Stairs'},
  'wall_sign': {'type': 68, 'meta': 0, 'name': 'Wall-mounted Sign Block'},
  'lever': {'type': 69, 'meta': 0, 'name': 'Lever'},
  'stone_pressure_plate': {'type': 70, 'meta': 0, 'name': 'Stone Pressure Plate'},
  'iron_door': {'type': 330, 'meta': 0, 'name': 'Iron Door'},
  'wooden_pressure_plate': {'type': 72, 'meta': 0, 'name': 'Wooden Pressure Plate'},
  'redstone_ore': {'type': 73, 'meta': 0, 'name': 'Redstone Ore'},
  'lit_redstone_ore': {'type': 74, 'meta': 0, 'name': 'Glowing Redstone Ore'},
  'unlit_redstone_torch': {'type': 75, 'meta': 0, 'name': 'Redstone Torch (off)'},
  'redstone_torch': {'type': 76, 'meta': 0, 'name': 'Redstone Torch (on)'},
  'stone_button': {'type': 77, 'meta': 0, 'name': 'Stone Button'},
  'snow_layer': {'type': 78, 'meta': 0, 'name': 'Snow'},
  'ice': {'type': 79, 'meta': 0, 'name': 'Ice'},
  'snow': {'type': 80, 'meta': 0, 'name': 'Snow Block'},
  'cactus': {'type': 81, 'meta': 0, 'name': 'Cactus'},
  'clay': {'type': 82, 'meta': 0, 'name': 'Clay'},
  'reeds': {'type': 338, 'meta': 0, 'name': 'Sugar Canes'},
  'jukebox': {'type': 84, 'meta': 0, 'name': 'Jukebox'},
  'fence': {'type': 85, 'meta': 0, 'name': 'Oak Fence'},
  'pumpkin': {'type': 86, 'meta': 0, 'name': 'Pumpkin'},
  'netherrack': {'type': 87, 'meta': 0, 'name': 'Netherrack'},
  'soul_sand': {'type': 88, 'meta': 0, 'name': 'Soul Sand'},
  'glowstone': {'type': 89, 'meta': 0, 'name': 'Glowstone'},
  'portal': {'type': 90, 'meta': 0, 'name': 'Nether Portal'},
  'lit_pumpkin': {'type': 91, 'meta': 0, 'name': 'Jack o\'Lantern'},
  'cake': {'type': 354, 'meta': 0, 'name': 'Cake'},
  'unpowered_repeater': {'type': 93, 'meta': 0, 'name': 'Redstone Repeater Block (off)'},
  'powered_repeater': {'type': 94, 'meta': 0, 'name': 'Redstone Repeater Block (on)'},
  'stained_glass': {'type': 95, 'meta': 15, 'name': 'Black Stained Glass'},
  'trapdoor': {'type': 96, 'meta': 0, 'name': 'Wooden Trapdoor'},
  'monster_egg': {'type': 97, 'meta': 5, 'name': 'Chiseled Stone Brick Monster Egg'},
  'stonebrick': {'type': 98, 'meta': 3, 'name': 'Chiseled Stone Bricks'},
  'brown_mushroom_block': {'type': 99, 'meta': 0, 'name': 'Brown Mushroom Block'},
  'red_mushroom_block': {'type': 100, 'meta': 0, 'name': 'Red Mushroom Block'},
  'iron_bars': {'type': 101, 'meta': 0, 'name': 'Iron Bars'},
  'glass_pane': {'type': 102, 'meta': 0, 'name': 'Glass Pane'},
  'melon_block': {'type': 103, 'meta': 0, 'name': 'Melon Block'},
  'pumpkin_stem': {'type': 104, 'meta': 0, 'name': 'Pumpkin Stem'},
  'melon_stem': {'type': 105, 'meta': 0, 'name': 'Melon Stem'},
  'vine': {'type': 106, 'meta': 0, 'name': 'Vines'},
  'fence_gate': {'type': 107, 'meta': 0, 'name': 'Oak Fence Gate'},
  'brick_stairs': {'type': 108, 'meta': 0, 'name': 'Brick Stairs'},
  'stone_brick_stairs': {'type': 109, 'meta': 0, 'name': 'Stone Brick Stairs'},
  'mycelium': {'type': 110, 'meta': 0, 'name': 'Mycelium'},
  'waterlily': {'type': 111, 'meta': 0, 'name': 'Lily Pad'},
  'nether_brick': {'type': 112, 'meta': 0, 'name': 'Nether Brick'},
  'nether_brick_fence': {'type': 113, 'meta': 0, 'name': 'Nether Brick Fence'},
  'nether_brick_stairs': {'type': 114, 'meta': 0, 'name': 'Nether Brick Stairs'},
  'nether_wart': {'type': 372, 'meta': 0, 'name': 'Nether Wart'},
  'enchanting_table': {'type': 116, 'meta': 0, 'name': 'Enchantment Table'},
  'brewing_stand': {'type': 379, 'meta': 0, 'name': 'Brewing Stand'},
  'cauldron': {'type': 380, 'meta': 0, 'name': 'Cauldron'},
  'end_portal': {'type': 119, 'meta': 0, 'name': 'End Portal'},
  'end_portal_frame': {'type': 120, 'meta': 0, 'name': 'End Portal Frame'},
  'end_stone': {'type': 121, 'meta': 0, 'name': 'End Stone'},
  'dragon_egg': {'type': 122, 'meta': 0, 'name': 'Dragon Egg'},
  'redstone_lamp': {'type': 123, 'meta': 0, 'name': 'Redstone Lamp (inactive)'},
  'lit_redstone_lamp': {'type': 124, 'meta': 0, 'name': 'Redstone Lamp (active)'},
  'double_wooden_slab': {'type': 125, 'meta': 5, 'name': 'Double Dark Oak Wood Slab'},
  'wooden_slab': {'type': 126, 'meta': 5, 'name': 'Dark Oak Wood Slab'},
  'cocoa': {'type': 127, 'meta': 0, 'name': 'Cocoa'},
  'sandstone_stairs': {'type': 128, 'meta': 0, 'name': 'Sandstone Stairs'},
  'emerald_ore': {'type': 129, 'meta': 0, 'name': 'Emerald Ore'},
  'ender_chest': {'type': 130, 'meta': 0, 'name': 'Ender Chest'},
  'tripwire_hook': {'type': 132, 'meta': 0, 'name': 'Tripwire'},
  'emerald_block': {'type': 133, 'meta': 0, 'name': 'Emerald Block'},
  'spruce_stairs': {'type': 134, 'meta': 0, 'name': 'Spruce Wood Stairs'},
  'birch_stairs': {'type': 135, 'meta': 0, 'name': 'Birch Wood Stairs'},
  'jungle_stairs': {'type': 136, 'meta': 0, 'name': 'Jungle Wood Stairs'},
  'command_block': {'type': 137, 'meta': 0, 'name': 'Command Block'},
  'beacon': {'type': 138, 'meta': 0, 'name': 'Beacon'},
  'cobblestone_wall': {'type': 139, 'meta': 1, 'name': 'Mossy Cobblestone Wall'},
  'flower_pot': {'type': 390, 'meta': 0, 'name': 'Flower Pot'},
  'carrots': {'type': 141, 'meta': 0, 'name': 'Carrots'},
  'potatoes': {'type': 142, 'meta': 0, 'name': 'Potatoes'},
  'wooden_button': {'type': 143, 'meta': 0, 'name': 'Wooden Button'},
  'skull': {'type': 397, 'meta': 5, 'name': 'Mob Head (Dragon)'},
  'anvil': {'type': 145, 'meta': 0, 'name': 'Anvil'},
  'trapped_chest': {'type': 146, 'meta': 0, 'name': 'Trapped Chest'},
  'light_weighted_pressure_plate': {'type': 147, 'meta': 0, 'name': 'Weighted Pressure Plate (light)'},
  'heavy_weighted_pressure_plate': {'type': 148, 'meta': 0, 'name': 'Weighted Pressure Plate (heavy)'},
  'unpowered_comparator': {'type': 149, 'meta': 0, 'name': 'Redstone Comparator (inactive)'},
  'powered_comparator': {'type': 150, 'meta': 0, 'name': 'Redstone Comparator (active)'},
  'daylight_detector': {'type': 151, 'meta': 0, 'name': 'Daylight Sensor'},
  'redstone_block': {'type': 152, 'meta': 0, 'name': 'Redstone Block'},
  'quartz_ore': {'type': 153, 'meta': 0, 'name': 'Nether Quartz Ore'},
  'hopper': {'type': 154, 'meta': 0, 'name': 'Hopper'},
  'quartz_block': {'type': 155, 'meta': 2, 'name': 'Pillar Quartz Block'},
  'quartz_stairs': {'type': 156, 'meta': 0, 'name': 'Quartz Stairs'},
  'activator_rail': {'type': 157, 'meta': 0, 'name': 'Activator Rail'},
  'dropper': {'type': 158, 'meta': 0, 'name': 'Dropper'},
  'stained_hardened_clay': {'type': 159, 'meta': 15, 'name': 'Black Hardened Clay'},
  'stained_glass_pane': {'type': 160, 'meta': 15, 'name': 'Black Stained Glass Pane'},
  'leaves2': {'type': 161, 'meta': 1, 'name': 'Dark Oak Leaves'},
  'log2': {'type': 162, 'meta': 1, 'name': 'Dark Oak Wood'},
  'acacia_stairs': {'type': 163, 'meta': 0, 'name': 'Acacia Wood Stairs'},
  'dark_oak_stairs': {'type': 164, 'meta': 0, 'name': 'Dark Oak Wood Stairs'},
  'slime': {'type': 165, 'meta': 0, 'name': 'Slime Block'},
  'barrier': {'type': 166, 'meta': 0, 'name': 'Barrier'},
  'iron_trapdoor': {'type': 167, 'meta': 0, 'name': 'Iron Trapdoor'},
  'prismarine': {'type': 168, 'meta': 2, 'name': 'Dark Prismarine'},
  'sea_lantern': {'type': 169, 'meta': 0, 'name': 'Sea Lantern'},
  'hay_block': {'type': 170, 'meta': 0, 'name': 'Hay Bale'},
  'carpet': {'type': 171, 'meta': 15, 'name': 'Black Carpet'},
  'hardened_clay': {'type': 172, 'meta': 0, 'name': 'Hardened Clay'},
  'coal_block': {'type': 173, 'meta': 0, 'name': 'Block of Coal'},
  'packed_ice': {'type': 174, 'meta': 0, 'name': 'Packed Ice'},
  'double_plant': {'type': 175, 'meta': 5, 'name': 'Peony'},
  'standing_banner': {'type': 176, 'meta': 0, 'name': 'Free-standing Banner'},
  'wall_banner': {'type': 177, 'meta': 0, 'name': 'Wall-mounted Banner'},
  'daylight_detector_inverted': {'type': 178, 'meta': 0, 'name': 'Inverted Daylight Sensor'},
  'red_sandstone': {'type': 179, 'meta': 2, 'name': 'Smooth Red Sandstone'},
  'red_sandstone_stairs': {'type': 180, 'meta': 0, 'name': 'Red Sandstone Stairs'},
  'double_stone_slab2': {'type': 181, 'meta': 0, 'name': 'Double Red Sandstone Slab'},
  'stone_slab2': {'type': 182, 'meta': 0, 'name': 'Red Sandstone Slab'},
  'spruce_fence_gate': {'type': 183, 'meta': 0, 'name': 'Spruce Fence Gate'},
  'birch_fence_gate': {'type': 184, 'meta': 0, 'name': 'Birch Fence Gate'},
  'jungle_fence_gate': {'type': 185, 'meta': 0, 'name': 'Jungle Fence Gate'},
  'dark_oak_fence_gate': {'type': 186, 'meta': 0, 'name': 'Dark Oak Fence Gate'},
  'acacia_fence_gate': {'type': 187, 'meta': 0, 'name': 'Acacia Fence Gate'},
  'spruce_fence': {'type': 188, 'meta': 0, 'name': 'Spruce Fence'},
  'birch_fence': {'type': 189, 'meta': 0, 'name': 'Birch Fence'},
  'jungle_fence': {'type': 190, 'meta': 0, 'name': 'Jungle Fence'},
  'dark_oak_fence': {'type': 191, 'meta': 0, 'name': 'Dark Oak Fence'},
  'acacia_fence': {'type': 192, 'meta': 0, 'name': 'Acacia Fence'},
  'spruce_door': {'type': 427, 'meta': 0, 'name': 'Spruce Door'},
  'birch_door': {'type': 428, 'meta': 0, 'name': 'Birch Door'},
  'jungle_door': {'type': 429, 'meta': 0, 'name': 'Jungle Door'},
  'acacia_door': {'type': 430, 'meta': 0, 'name': 'Acacia Door'},
  'dark_oak_door': {'type': 431, 'meta': 0, 'name': 'Dark Oak Door'},
  'end_rod': {'type': 198, 'meta': 0, 'name': 'End Rod'},
  'chorus_plant': {'type': 199, 'meta': 0, 'name': 'Chorus Plant'},
  'chorus_flower': {'type': 200, 'meta': 0, 'name': 'Chorus Flower'},
  'purpur_block': {'type': 201, 'meta': 0, 'name': 'Purpur Block'},
  'purpur_pillar': {'type': 202, 'meta': 0, 'name': 'Purpur Pillar'},
  'purpur_stairs': {'type': 203, 'meta': 0, 'name': 'Purpur Stairs'},
  'purpur_double_slab': {'type': 204, 'meta': 0, 'name': 'Purpur Double Slab'},
  'purpur_slab': {'type': 205, 'meta': 0, 'name': 'Purpur Slab'},
  'end_bricks': {'type': 206, 'meta': 0, 'name': 'End Stone Bricks'},
  'beetroots': {'type': 207, 'meta': 0, 'name': 'Beetroot Block'},
  'grass_path': {'type': 208, 'meta': 0, 'name': 'Grass Path'},
  'end_gateway': {'type': 209, 'meta': 0, 'name': 'End Gateway'},
  'repeating_command_block': {'type': 210, 'meta': 0, 'name': 'Repeating Command Block'},
  'chain_command_block': {'type': 211, 'meta': 0, 'name': 'Chain Command Block'},
  'frosted_ice': {'type': 212, 'meta': 0, 'name': 'Frosted Ice'},
  'magma': {'type': 213, 'meta': 0, 'name': 'Magma Block'},
  'nether_wart_block': {'type': 214, 'meta': 0, 'name': 'Nether Wart Block'},
  'red_nether_brick': {'type': 215, 'meta': 0, 'name': 'Red Nether Brick'},
  'bone_block': {'type': 216, 'meta': 0, 'name': 'Bone Block'},
  'structure_void': {'type': 217, 'meta': 0, 'name': 'Structure Void'},
  'observer': {'type': 218, 'meta': 0, 'name': 'Observer'},
  'white_shulker_box': {'type': 219, 'meta': 0, 'name': 'White Shulker Box'},
  'orange_shulker_box': {'type': 220, 'meta': 0, 'name': 'Orange Shulker Box'},
  'magenta_shulker_box': {'type': 221, 'meta': 0, 'name': 'Magenta Shulker Box'},
  'light_blue_shulker_box': {'type': 222, 'meta': 0, 'name': 'Light Blue Shulker Box'},
  'yellow_shulker_box': {'type': 223, 'meta': 0, 'name': 'Yellow Shulker Box'},
  'lime_shulker_box': {'type': 224, 'meta': 0, 'name': 'Lime Shulker Box'},
  'pink_shulker_box': {'type': 225, 'meta': 0, 'name': 'Pink Shulker Box'},
  'gray_shulker_box': {'type': 226, 'meta': 0, 'name': 'Gray Shulker Box'},
  'silver_shulker_box': {'type': 227, 'meta': 0, 'name': 'Light Gray Shulker Box'},
  'cyan_shulker_box': {'type': 228, 'meta': 0, 'name': 'Cyan Shulker Box'},
  'purple_shulker_box': {'type': 229, 'meta': 0, 'name': 'Purple Shulker Box'},
  'blue_shulker_box': {'type': 230, 'meta': 0, 'name': 'Blue Shulker Box'},
  'brown_shulker_box': {'type': 231, 'meta': 0, 'name': 'Brown Shulker Box'},
  'green_shulker_box': {'type': 232, 'meta': 0, 'name': 'Green Shulker Box'},
  'red_shulker_box': {'type': 233, 'meta': 0, 'name': 'Red Shulker Box'},
  'black_shulker_box': {'type': 234, 'meta': 0, 'name': 'Black Shulker Box'},
  'white_glazed_terracotta': {'type': 235, 'meta': 0, 'name': 'White Glazed Terracotta'},
  'orange_glazed_terracotta': {'type': 236, 'meta': 0, 'name': 'Orange Glazed Terracotta'},
  'magenta_glazed_terracotta': {'type': 237, 'meta': 0, 'name': 'Magenta Glazed Terracotta'},
  'light_blue_glazed_terracotta': {'type': 238, 'meta': 0, 'name': 'Light Blue Glazed Terracotta'},
  'yellow_glazed_terracotta': {'type': 239, 'meta': 0, 'name': 'Yellow Glazed Terracotta'},
  'lime_glazed_terracotta': {'type': 240, 'meta': 0, 'name': 'Lime Glazed Terracotta'},
  'pink_glazed_terracotta': {'type': 241, 'meta': 0, 'name': 'Pink Glazed Terracotta'},
  'gray_glazed_terracotta': {'type': 242, 'meta': 0, 'name': 'Gray Glazed Terracotta'},
  'light_gray_glazed_terracotta': {'type': 243, 'meta': 0, 'name': 'Light Gray Glazed Terracotta'},
  'cyan_glazed_terracotta': {'type': 244, 'meta': 0, 'name': 'Cyan Glazed Terracotta'},
  'purple_glazed_terracotta': {'type': 245, 'meta': 0, 'name': 'Purple Glazed Terracotta'},
  'blue_glazed_terracotta': {'type': 246, 'meta': 0, 'name': 'Blue Glazed Terracotta'},
  'brown_glazed_terracotta': {'type': 247, 'meta': 0, 'name': 'Brown Glazed Terracotta'},
  'green_glazed_terracotta': {'type': 248, 'meta': 0, 'name': 'Green Glazed Terracotta'},
  'red_glazed_terracotta': {'type': 249, 'meta': 0, 'name': 'Red Glazed Terracotta'},
  'black_glazed_terracotta': {'type': 250, 'meta': 0, 'name': 'Black Glazed Terracotta'},
  'concrete': {'type': 251, 'meta': 15, 'name': 'Black Concrete'},
  'concrete_powder': {'type': 252, 'meta': 15, 'name': 'Black Concrete Powder'},
  'structure_block': {'type': 255, 'meta': 0, 'name': 'Structure Block'},
  'iron_shovel': {'type': 256, 'meta': 0, 'name': 'Iron Shovel'},
  'iron_pickaxe': {'type': 257, 'meta': 0, 'name': 'Iron Pickaxe'},
  'iron_axe': {'type': 258, 'meta': 0, 'name': 'Iron Axe'},
  'flint_and_steel': {'type': 259, 'meta': 0, 'name': 'Flint and Steel'},
  'apple': {'type': 260, 'meta': 0, 'name': 'Apple'},
  'bow': {'type': 261, 'meta': 0, 'name': 'Bow'},
  'arrow': {'type': 262, 'meta': 0, 'name': 'Arrow'},
  'coal': {'type': 263, 'meta': 1, 'name': 'Charcoal'},
  'diamond': {'type': 264, 'meta': 0, 'name': 'Diamond'},
  'iron_ingot': {'type': 265, 'meta': 0, 'name': 'Iron Ingot'},
  'gold_ingot': {'type': 266, 'meta': 0, 'name': 'Gold Ingot'},
  'iron_sword': {'type': 267, 'meta': 0, 'name': 'Iron Sword'},
  'wooden_sword': {'type': 268, 'meta': 0, 'name': 'Wooden Sword'},
  'wooden_shovel': {'type': 269, 'meta': 0, 'name': 'Wooden Shovel'},
  'wooden_pickaxe': {'type': 270, 'meta': 0, 'name': 'Wooden Pickaxe'},
  'wooden_axe': {'type': 271, 'meta': 0, 'name': 'Wooden Axe'},
  'stone_sword': {'type': 272, 'meta': 0, 'name': 'Stone Sword'},
  'stone_shovel': {'type': 273, 'meta': 0, 'name': 'Stone Shovel'},
  'stone_pickaxe': {'type': 274, 'meta': 0, 'name': 'Stone Pickaxe'},
  'stone_axe': {'type': 275, 'meta': 0, 'name': 'Stone Axe'},
  'diamond_sword': {'type': 276, 'meta': 0, 'name': 'Diamond Sword'},
  'diamond_shovel': {'type': 277, 'meta': 0, 'name': 'Diamond Shovel'},
  'diamond_pickaxe': {'type': 278, 'meta': 0, 'name': 'Diamond Pickaxe'},
  'diamond_axe': {'type': 279, 'meta': 0, 'name': 'Diamond Axe'},
  'stick': {'type': 280, 'meta': 0, 'name': 'Stick'},
  'bowl': {'type': 281, 'meta': 0, 'name': 'Bowl'},
  'mushroom_stew': {'type': 282, 'meta': 0, 'name': 'Mushroom Stew'},
  'golden_sword': {'type': 283, 'meta': 0, 'name': 'Golden Sword'},
  'golden_shovel': {'type': 284, 'meta': 0, 'name': 'Golden Shovel'},
  'golden_pickaxe': {'type': 285, 'meta': 0, 'name': 'Golden Pickaxe'},
  'golden_axe': {'type': 286, 'meta': 0, 'name': 'Golden Axe'},
  'string': {'type': 287, 'meta': 0, 'name': 'String'},
  'feather': {'type': 288, 'meta': 0, 'name': 'Feather'},
  'gunpowder': {'type': 289, 'meta': 0, 'name': 'Gunpowder'},
  'wooden_hoe': {'type': 290, 'meta': 0, 'name': 'Wooden Hoe'},
  'stone_hoe': {'type': 291, 'meta': 0, 'name': 'Stone Hoe'},
  'iron_hoe': {'type': 292, 'meta': 0, 'name': 'Iron Hoe'},
  'diamond_hoe': {'type': 293, 'meta': 0, 'name': 'Diamond Hoe'},
  'golden_hoe': {'type': 294, 'meta': 0, 'name': 'Golden Hoe'},
  'wheat_seeds': {'type': 295, 'meta': 0, 'name': 'Wheat Seeds'},
  'bread': {'type': 297, 'meta': 0, 'name': 'Bread'},
  'leather_helmet': {'type': 298, 'meta': 0, 'name': 'Leather Helmet'},
  'leather_chestplate': {'type': 299, 'meta': 0, 'name': 'Leather Tunic'},
  'leather_leggings': {'type': 300, 'meta': 0, 'name': 'Leather Pants'},
  'leather_boots': {'type': 301, 'meta': 0, 'name': 'Leather Boots'},
  'chainmail_helmet': {'type': 302, 'meta': 0, 'name': 'Chainmail Helmet'},
  'chainmail_chestplate': {'type': 303, 'meta': 0, 'name': 'Chainmail Chestplate'},
  'chainmail_leggings': {'type': 304, 'meta': 0, 'name': 'Chainmail Leggings'},
  'chainmail_boots': {'type': 305, 'meta': 0, 'name': 'Chainmail Boots'},
  'iron_helmet': {'type': 306, 'meta': 0, 'name': 'Iron Helmet'},
  'iron_chestplate': {'type': 307, 'meta': 0, 'name': 'Iron Chestplate'},
  'iron_leggings': {'type': 308, 'meta': 0, 'name': 'Iron Leggings'},
  'iron_boots': {'type': 309, 'meta': 0, 'name': 'Iron Boots'},
  'diamond_helmet': {'type': 310, 'meta': 0, 'name': 'Diamond Helmet'},
  'diamond_chestplate': {'type': 311, 'meta': 0, 'name': 'Diamond Chestplate'},
  'diamond_leggings': {'type': 312, 'meta': 0, 'name': 'Diamond Leggings'},
  'diamond_boots': {'type': 313, 'meta': 0, 'name': 'Diamond Boots'},
  'golden_helmet': {'type': 314, 'meta': 0, 'name': 'Golden Helmet'},
  'golden_chestplate': {'type': 315, 'meta': 0, 'name': 'Golden Chestplate'},
  'golden_leggings': {'type': 316, 'meta': 0, 'name': 'Golden Leggings'},
  'golden_boots': {'type': 317, 'meta': 0, 'name': 'Golden Boots'},
  'flint': {'type': 318, 'meta': 0, 'name': 'Flint'},
  'porkchop': {'type': 319, 'meta': 0, 'name': 'Raw Porkchop'},
  'cooked_porkchop': {'type': 320, 'meta': 0, 'name': 'Cooked Porkchop'},
  'painting': {'type': 321, 'meta': 0, 'name': 'Painting'},
  'golden_apple': {'type': 322, 'meta': 1, 'name': 'Enchanted Golden Apple'},
  'sign': {'type': 323, 'meta': 0, 'name': 'Sign'},
  'bucket': {'type': 325, 'meta': 0, 'name': 'Bucket'},
  'water_bucket': {'type': 326, 'meta': 0, 'name': 'Water Bucket'},
  'lava_bucket': {'type': 327, 'meta': 0, 'name': 'Lava Bucket'},
  'minecart': {'type': 328, 'meta': 0, 'name': 'Minecart'},
  'saddle': {'type': 329, 'meta': 0, 'name': 'Saddle'},
  'redstone': {'type': 331, 'meta': 0, 'name': 'Redstone'},
  'snowball': {'type': 332, 'meta': 0, 'name': 'Snowball'},
  'boat': {'type': 333, 'meta': 0, 'name': 'Oak Boat'},
  'leather': {'type': 334, 'meta': 0, 'name': 'Leather'},
  'milk_bucket': {'type': 335, 'meta': 0, 'name': 'Milk Bucket'},
  'brick': {'type': 336, 'meta': 0, 'name': 'Brick'},
  'clay_ball': {'type': 337, 'meta': 0, 'name': 'Clay'},
  'paper': {'type': 339, 'meta': 0, 'name': 'Paper'},
  'book': {'type': 340, 'meta': 0, 'name': 'Book'},
  'slime_ball': {'type': 341, 'meta': 0, 'name': 'Slimeball'},
  'chest_minecart': {'type': 342, 'meta': 0, 'name': 'Minecart with Chest'},
  'furnace_minecart': {'type': 343, 'meta': 0, 'name': 'Minecart with Furnace'},
  'egg': {'type': 344, 'meta': 0, 'name': 'Egg'},
  'compass': {'type': 345, 'meta': 0, 'name': 'Compass'},
  'fishing_rod': {'type': 346, 'meta': 0, 'name': 'Fishing Rod'},
  'clock': {'type': 347, 'meta': 0, 'name': 'Clock'},
  'glowstone_dust': {'type': 348, 'meta': 0, 'name': 'Glowstone Dust'},
  'fish': {'type': 349, 'meta': 3, 'name': 'Pufferfish'},
  'cooked_fish': {'type': 350, 'meta': 1, 'name': 'Cooked Salmon'},
  'dye': {'type': 351, 'meta': 15, 'name': 'Bone Meal'},
  'bone': {'type': 352, 'meta': 0, 'name': 'Bone'},
  'sugar': {'type': 353, 'meta': 0, 'name': 'Sugar'},
  'repeater': {'type': 356, 'meta': 0, 'name': 'Redstone Repeater'},
  'cookie': {'type': 357, 'meta': 0, 'name': 'Cookie'},
  'filled_map': {'type': 358, 'meta': 0, 'name': 'Map'},
  'shears': {'type': 359, 'meta': 0, 'name': 'Shears'},
  'melon': {'type': 360, 'meta': 0, 'name': 'Melon'},
  'pumpkin_seeds': {'type': 361, 'meta': 0, 'name': 'Pumpkin Seeds'},
  'melon_seeds': {'type': 362, 'meta': 0, 'name': 'Melon Seeds'},
  'beef': {'type': 363, 'meta': 0, 'name': 'Raw Beef'},
  'cooked_beef': {'type': 364, 'meta': 0, 'name': 'Steak'},
  'chicken': {'type': 365, 'meta': 0, 'name': 'Raw Chicken'},
  'cooked_chicken': {'type': 366, 'meta': 0, 'name': 'Cooked Chicken'},
  'rotten_flesh': {'type': 367, 'meta': 0, 'name': 'Rotten Flesh'},
  'ender_pearl': {'type': 368, 'meta': 0, 'name': 'Ender Pearl'},
  'blaze_rod': {'type': 369, 'meta': 0, 'name': 'Blaze Rod'},
  'ghast_tear': {'type': 370, 'meta': 0, 'name': 'Ghast Tear'},
  'gold_nugget': {'type': 371, 'meta': 0, 'name': 'Gold Nugget'},
  'potion': {'type': 373, 'meta': 0, 'name': 'Potion'},
  'glass_bottle': {'type': 374, 'meta': 0, 'name': 'Glass Bottle'},
  'spider_eye': {'type': 375, 'meta': 0, 'name': 'Spider Eye'},
  'fermented_spider_eye': {'type': 376, 'meta': 0, 'name': 'Fermented Spider Eye'},
  'blaze_powder': {'type': 377, 'meta': 0, 'name': 'Blaze Powder'},
  'magma_cream': {'type': 378, 'meta': 0, 'name': 'Magma Cream'},
  'ender_eye': {'type': 381, 'meta': 0, 'name': 'Eye of Ender'},
  'speckled_melon': {'type': 382, 'meta': 0, 'name': 'Glistering Melon'},
  'spawn_egg': {'type': 383, 'meta': 120, 'name': 'Spawn Villager'},
  'experience_bottle': {'type': 384, 'meta': 0, 'name': 'Bottle o\' Enchanting'},
  'fire_charge': {'type': 385, 'meta': 0, 'name': 'Fire Charge'},
  'writable_book': {'type': 386, 'meta': 0, 'name': 'Book and Quill'},
  'written_book': {'type': 387, 'meta': 0, 'name': 'Written Book'},
  'emerald': {'type': 388, 'meta': 0, 'name': 'Emerald'},
  'item_frame': {'type': 389, 'meta': 0, 'name': 'Item Frame'},
  'carrot': {'type': 391, 'meta': 0, 'name': 'Carrot'},
  'potato': {'type': 392, 'meta': 0, 'name': 'Potato'},
  'baked_potato': {'type': 393, 'meta': 0, 'name': 'Baked Potato'},
  'poisonous_potato': {'type': 394, 'meta': 0, 'name': 'Poisonous Potato'},
  'map': {'type': 395, 'meta': 0, 'name': 'Empty Map'},
  'golden_carrot': {'type': 396, 'meta': 0, 'name': 'Golden Carrot'},
  'carrot_on_a_stick': {'type': 398, 'meta': 0, 'name': 'Carrot on a Stick'},
  'nether_star': {'type': 399, 'meta': 0, 'name': 'Nether Star'},
  'pumpkin_pie': {'type': 400, 'meta': 0, 'name': 'Pumpkin Pie'},
  'fireworks': {'type': 401, 'meta': 0, 'name': 'Firework Rocket'},
  'firework_charge': {'type': 402, 'meta': 0, 'name': 'Firework Star'},
  'enchanted_book': {'type': 403, 'meta': 0, 'name': 'Enchanted Book'},
  'comparator': {'type': 404, 'meta': 0, 'name': 'Redstone Comparator'},
  'netherbrick': {'type': 405, 'meta': 0, 'name': 'Nether Brick'},
  'quartz': {'type': 406, 'meta': 0, 'name': 'Nether Quartz'},
  'tnt_minecart': {'type': 407, 'meta': 0, 'name': 'Minecart with TNT'},
  'hopper_minecart': {'type': 408, 'meta': 0, 'name': 'Minecart with Hopper'},
  'prismarine_shard': {'type': 409, 'meta': 0, 'name': 'Prismarine Shard'},
  'prismarine_crystals': {'type': 410, 'meta': 0, 'name': 'Prismarine Crystals'},
  'rabbit': {'type': 411, 'meta': 0, 'name': 'Raw Rabbit'},
  'cooked_rabbit': {'type': 412, 'meta': 0, 'name': 'Cooked Rabbit'},
  'rabbit_stew': {'type': 413, 'meta': 0, 'name': 'Rabbit Stew'},
  'rabbit_foot': {'type': 414, 'meta': 0, 'name': 'Rabbit\'s Foot'},
  'rabbit_hide': {'type': 415, 'meta': 0, 'name': 'Rabbit Hide'},
  'armor_stand': {'type': 416, 'meta': 0, 'name': 'Armor Stand'},
  'iron_horse_armor': {'type': 417, 'meta': 0, 'name': 'Iron Horse Armor'},
  'golden_horse_armor': {'type': 418, 'meta': 0, 'name': 'Golden Horse Armor'},
  'diamond_horse_armor': {'type': 419, 'meta': 0, 'name': 'Diamond Horse Armor'},
  'lead': {'type': 420, 'meta': 0, 'name': 'Lead'},
  'name_tag': {'type': 421, 'meta': 0, 'name': 'Name Tag'},
  'command_block_minecart': {'type': 422, 'meta': 0, 'name': 'Minecart with Command Block'},
  'mutton': {'type': 423, 'meta': 0, 'name': 'Raw Mutton'},
  'cooked_mutton': {'type': 424, 'meta': 0, 'name': 'Cooked Mutton'},
  'banner': {'type': 425, 'meta': 0, 'name': 'Banner'},
  'end_crystal': {'type': 426, 'meta': 0, 'name': 'End Crystal'},
  'chorus_fruit': {'type': 432, 'meta': 0, 'name': 'Chorus Fruit'},
  'popped_chorus_fruit': {'type': 433, 'meta': 0, 'name': 'Popped Chorus Fruit'},
  'beetroot': {'type': 434, 'meta': 0, 'name': 'Beetroot'},
  'beetroot_seeds': {'type': 435, 'meta': 0, 'name': 'Beetroot Seeds'},
  'beetroot_soup': {'type': 436, 'meta': 0, 'name': 'Beetroot Soup'},
  'dragon_breath': {'type': 437, 'meta': 0, 'name': 'Dragon\'s Breath'},
  'splash_potion': {'type': 438, 'meta': 0, 'name': 'Splash Potion'},
  'spectral_arrow': {'type': 439, 'meta': 0, 'name': 'Spectral Arrow'},
  'tipped_arrow': {'type': 440, 'meta': 0, 'name': 'Tipped Arrow'},
  'lingering_potion': {'type': 441, 'meta': 0, 'name': 'Lingering Potion'},
  'shield': {'type': 442, 'meta': 0, 'name': 'Shield'},
  'elytra': {'type': 443, 'meta': 0, 'name': 'Elytra'},
  'spruce_boat': {'type': 444, 'meta': 0, 'name': 'Spruce Boat'},
  'birch_boat': {'type': 445, 'meta': 0, 'name': 'Birch Boat'},
  'jungle_boat': {'type': 446, 'meta': 0, 'name': 'Jungle Boat'},
  'acacia_boat': {'type': 447, 'meta': 0, 'name': 'Acacia Boat'},
  'dark_oak_boat': {'type': 448, 'meta': 0, 'name': 'Dark Oak Boat'},
  'totem_of_undying': {'type': 449, 'meta': 0, 'name': 'Totem of Undying'},
  'shulker_shell': {'type': 450, 'meta': 0, 'name': 'Shulker Shell'},
  'iron_nugget': {'type': 452, 'meta': 0, 'name': 'Iron Nugget'},
  'knowledge_book': {'type': 453, 'meta': 0, 'name': 'Knowledge Book'},
  'record_13': {'type': 2256, 'meta': 0, 'name': '13 Disc'},
  'record_cat': {'type': 2257, 'meta': 0, 'name': 'Cat Disc'},
  'record_blocks': {'type': 2258, 'meta': 0, 'name': 'Blocks Disc'},
  'record_chirp': {'type': 2259, 'meta': 0, 'name': 'Chirp Disc'},
  'record_far': {'type': 2260, 'meta': 0, 'name': 'Far Disc'},
  'record_mall': {'type': 2261, 'meta': 0, 'name': 'Mall Disc'},
  'record_mellohi': {'type': 2262, 'meta': 0, 'name': 'Mellohi Disc'},
  'record_stal': {'type': 2263, 'meta': 0, 'name': 'Stal Disc'},
  'record_strad': {'type': 2264, 'meta': 0, 'name': 'Strad Disc'},
  'record_ward': {'type': 2265, 'meta': 0, 'name': 'Ward Disc'},
  'record_11': {'type': 2266, 'meta': 0, 'name': '11 Disc'},
  'record_wait': {'type': 2267, 'meta': 0, 'name': 'Wait Disc'}
};
