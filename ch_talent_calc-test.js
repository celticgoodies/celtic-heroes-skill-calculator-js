function startCalc(){
  interval = setInterval("calc()",1);
}
function stopCalc(){
	clearInterval(interval);
}
function calc(){

	AutoDmg = document.autoSumForm.AutoDmg_field.value;
	Strength = document.autoSumForm.Strength_field.value;
	Dexterity = document.autoSumForm.Dexterity_field.value;
	Focus = document.autoSumForm.Focus_field.value;
	Vitality = document.autoSumForm.Vitality_field.value;
	Melee = document.autoSumForm.Melee_field.value;
	Cunning = document.autoSumForm.Cunning_field.value;
	Ranged = document.autoSumForm.Ranged_field.value;
	NatureMagic = document.autoSumForm.NatureMagic_field.value;
	FireMagic = document.autoSumForm.FireMagic_field.value;
	IceMagic = document.autoSumForm.IceMagic_field.value;



	document.autoSumForm.Abundance.value = Math.round((19.592 * Math.sqrt(Focus)) + (6.1866 * Math.sqrt(NatureMagic)) + Number(411.94));
	document.autoSumForm.NaturesTouch.value = Math.round((28.89 * Math.sqrt(Focus)) + (8.9361 * Math.sqrt(NatureMagic)) + 452.42);
	document.autoSumForm.NaturesBreath.value = Math.round((14.491 * Math.sqrt(Focus)) + (4.5689 * Math.sqrt(NatureMagic)) + Number(244.0));
	document.autoSumForm.Bark.value = Math.round((12.287 * Math.sqrt(Focus)) + (3.7807 * Math.sqrt(NatureMagic)) + 195.08);	
	document.autoSumForm.Vines.value = Math.round((49.811 * Math.sqrt(Focus)) + (15.81 * Math.sqrt(NatureMagic)) + 265.82);
	document.autoSumForm.HowlingWind.value = Math.round((38.207 * Math.sqrt(Focus)) + (10.886 * Math.sqrt(NatureMagic)) + 693.63);
	document.autoSumForm.LightningStrike.value = Math.round((73.547 * Math.sqrt(Focus)) + (20.743 * Math.sqrt(NatureMagic)) + 327.29);
	document.autoSumForm.EnergyHarvest.value = Math.round((16.908 * Math.sqrt(Focus)) + (4.7469 * Math.sqrt(NatureMagic)) + 132.4);
	document.autoSumForm.Sanctuary.value = Math.round((5.5015 * Math.sqrt(Focus)) + (2.6713 * Math.sqrt(NatureMagic)) + 520.82);
	document.autoSumForm.Wards.value = Math.round((12.214 * Math.sqrt(Focus)) + (3.8608 * Math.sqrt(NatureMagic)) + 193.29);	
	document.autoSumForm.SpringOfLife.value = Number(2500);

	document.autoSumForm.FireAttunement.value = Math.round((22.331 * Math.sqrt(Focus)) + (10.044 * Math.sqrt(FireMagic)) + 307.16);
	document.autoSumForm.FireBolt.value = Math.round((72.853 * Math.sqrt(Focus)) + (21.611 * Math.sqrt(FireMagic)) + 264.84);
	document.autoSumForm.Firestorm.value = Math.round((90.164 * Math.sqrt(Focus)) + (25.515 * Math.sqrt(FireMagic)) + 365.43);
	document.autoSumForm.FrostbiteInit.value = Math.round((31.766 * Math.sqrt(Focus)) + (14.633 * Math.sqrt(IceMagic)) + 183.29);
	document.autoSumForm.FrostbiteTick.value = Math.round((15.438 * Math.sqrt(Focus)) + (6.5069 * Math.sqrt(IceMagic)) + 139.0);
	document.autoSumForm.IceAttunement.value = Math.round((33.548 * Math.sqrt(Focus)) + (15.221 * Math.sqrt(IceMagic)) + 450.48);
	document.autoSumForm.IceBlast.value = Math.round((117.97 * Math.sqrt(Focus)) + (32.835 * Math.sqrt(IceMagic)) + 487.25);
	document.autoSumForm.IceShards.value = Math.round((96.322 * Math.sqrt(Focus)) + (30.47 * Math.sqrt(IceMagic)) + 702.43);
	document.autoSumForm.Incinerate.value = Math.round((27.879 * Math.sqrt(Focus)) + (12.521 * Math.sqrt(FireMagic)) + 227.05);
	document.autoSumForm.FireLure.value = Math.round((17.516 * Math.sqrt(Focus)) + (5.1609 * Math.sqrt(FireMagic)) + 219.08);
	document.autoSumForm.IceLure.value = Math.round((17.516 * Math.sqrt(Focus)) + (5.1609 * Math.sqrt(IceMagic)) + 219.08);

	document.autoSumForm.SharpenWeapons.value = Math.round((2.2751 * Math.sqrt(Dexterity)) + (0.57194 * Math.sqrt(RangedCombat)) + 53.973);
	document.autoSumForm.SteadyAimAttack.value = Math.round((8.273 * Math.sqrt(Dexterity)) + (3.8118 * Math.sqrt(RangedCombat)) + 133.95);
	document.autoSumForm.SteadyAimDamage.value = Math.round((2.6887 * Math.sqrt(Dexterity)) + (1.0223 * Math.sqrt(RangedCombat)) + 47.196);

	document.autoSumForm.ExposeWeakness.value = Math.round((34.648 * Math.sqrt(Dexterity)) + (9.7154 * Math.sqrt(Cunning)) + 356.56);
	document.autoSumForm.FastReflexes.value = Math.round((33.097 * Math.sqrt(Dexterity)) + (10.568 * Math.sqrt(Cunning)) + 208.2);
	document.autoSumForm.Lifesteal.value = Math.round((32.043 * Math.sqrt(Dexterity)) + (9.2872 * Math.sqrt(Cunning)) + 188.01);
	document.autoSumForm.PoisonWeapon.value = Math.round((2.1081 * Math.sqrt(Dexterity)) + (0.96074 * Math.sqrt(Cunning)) + 46.799);
	document.autoSumForm.Quickstrike.value = Math.round((72.848 * Math.sqrt(Strength)) + (20.526 * Math.sqrt(Cunning)) + 369.37);
	document.autoSumForm.Rend.value = Math.round((16.449 * Math.sqrt(Strength)) + (5.0892 * Math.sqrt(Cunning)) + 152.46);
	document.autoSumForm.Riposte.value = Math.round((85.576 * Math.sqrt(Strength)) + (37.999 * Math.sqrt(Cunning)) + 582.98);
	document.autoSumForm.Shadowstrike.value = Math.round((91.069 * Math.sqrt(Dexterity)) + (25.62 * Math.sqrt(Cunning)) + 432.54);
	document.autoSumForm.Smokebomb.value = Math.round((22.398 * Math.sqrt(Dexterity)) + (9.9277 * Math.sqrt(Cunning)) + 141.51);
	document.autoSumForm.SneakyAttack.value = Math.round((121.82 * Math.sqrt(Strength)) + (54.694*Math.sqrt(Cunning)) + Number(AutoDmg) + 1000.4);

	document.autoSumForm.DefensiveFormation.value = Math.round((16.664 * Math.sqrt(Vitality)) + (5.1654 * Math.sqrt(Melee)) + 101.07);
	document.autoSumForm.ProtectiveStance.value = Math.round((13.86 * Math.sqrt(Vitality)) + (3.9263 * Math.sqrt(Melee)) + 142.4);
	document.autoSumForm.ShieldWall.value = Math.round((65.35 * Math.sqrt(Vitality)) + (20.662 * Math.sqrt(Melee)) + 726.98);
}

function startAutoCalc(){
  interval2 = setInterval("AutoCalc()",1);
}
function stopAutoCalc(){
	clearInterval(interval2);
}
function AutoCalc(){


	StrAutoCalc = document.autoDmgForm.StrAutoCalc.value;
	WeaponAbility = document.autoDmgForm.WeaponAbility.value;
	PhysicalDamage = document.autoDmgForm.PhysicalDamage.value;
	ElementalDamage = document.autoDmgForm.ElementalDamage.value;

	document.autoDmgForm.AutoDmgCalc.value = Math.round((((0.15818 * Math.sqrt(StrAutoCalc)) + (0.061069 * Math.sqrt(WeaponAbility)) + 0.96523) * Number(PhysicalDamage)) + Number(ElementalDamage));

}

function showRow(param){
	if(param == "Druid"){
		document.getElementById("Druid").style.display = 'table-row'; 
		document.getElementById("Mage").style.display = 'none';
		document.getElementById("Ranger").style.display = 'none';
		document.getElementById("Rogue").style.display = 'none';
		document.getElementById("Warrior").style.display = 'none';
	}
	else{
		document.getElementById("Druid").style.display = 'none'; 
		document.getElementById("Mage").style.display = 'none';
		document.getElementById("Ranger").style.display = 'none';
		document.getElementById("Rogue").style.display = 'none';
		document.getElementById("Warrior").style.display = 'none';
	}

}




