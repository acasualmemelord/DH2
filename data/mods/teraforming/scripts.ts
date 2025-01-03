export const Scripts: ModdedBattleScriptsData = {
	init() {
		this.modData("Learnsets", "skeledirge").learnset.healbell = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.wish = ["9L1"];
		this.modData("Learnsets", "tinkaton").learnset.flipturn = ["9L1"];
		this.modData("Learnsets", "samurotthisui").learnset.bitterblade = ["9L1"];
		this.modData("Learnsets", "samurotthisui").learnset.ragingfury = ["9L1"];
	},
	actions: {
		inherit: true,
		terastallize(pokemon: Pokemon) {
	  		if (pokemon.illusion && ['Ogerpon', 'Terapagos'].includes(pokemon.illusion.species.baseSpecies)) {
	  			this.battle.singleEvent('End', this.dex.abilities.get('Illusion'), pokemon.abilityState, pokemon);
	  		}
	
			const type = pokemon.teraType;
			this.battle.add('-terastallize', pokemon, type);
			pokemon.terastallized = type;
			for (const ally of pokemon.side.pokemon) {
				ally.canTerastallize = null;
			}
			pokemon.addedType = '';
			pokemon.knownType = true;
			pokemon.apparentType = type;
			pokemon.side.addSideCondition('teraused', pokemon);
			if (pokemon.species.baseSpecies === 'Ogerpon') {
				const tera = pokemon.species.id === 'ogerpon' ? 'tealtera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
      if (pokemon.species.name === 'Terapagos-Terastal' && type === 'Stellar') {
        pokemon.formeChange('Terapagos-Stellar', null, true);
        pokemon.baseMaxhp = Math.floor(Math.floor(
          2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
        ) * pokemon.level / 100 + 10);
        const newMaxHP = pokemon.baseMaxhp;
        pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
        pokemon.maxhp = newMaxHP;
        this.battle.add('-heal', pokemon, pokemon.getHealth, '[silent]');
      	}
  			if (pokemon.species.baseSpecies === 'Samurott') {
				const tera = pokemon.species.id === 'samurott' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Skeledirge') {
				const tera = pokemon.species.id === 'skeledirge' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			if (pokemon.species.baseSpecies === 'Tinkaton') {
				const tera = pokemon.species.id === 'tinkaton' ? 'tera' : 'tera';
				pokemon.formeChange(pokemon.species.id + tera, null, true);
			}
			this.battle.runEvent('AfterTerastallization', pokemon);
		},
	},
};
