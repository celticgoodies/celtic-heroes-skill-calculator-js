cfunction startCalc(){
	interval = setInterval("calc()",1);
}
function stopCalc(){
	clearInterval(interval);
}
function calc(){

	Autodmg = document.autoSumForm.AutoDmg.value;
	Strength = document.autoSumForm.strength.value;
	Dexterity = document.autoSumForm.dexterity.value;
	Focus = document.autoSumForm.focus.value;
	Vitality = document.autoSumForm.vitality.value;
	Melee = document.autoSumForm.melee.value;
	Cunning = document.autoSumForm.cunning.value;
	Ranged = document.autoSumForm.ranged.value;
	NatureMagic = document.autoSumForm.naturemagic.value;
	FireMagic = document.autoSumForm.firemagic.value;
	IceMagic = document.autoSumForm.icemagic.value;


	document.autoSumForm.Abundance.value = (19.592 * Math.sqrt(Focus)) + (6.1866 * Math.sqrt(NatureMagic)) + 411.94;
	document.autoSumForm.NaturesTouch.value = (28.89 * Math.sqrt(Focus)) + (8.9361 * Math.sqrt(NatureMagic)) + 452.42;
	document.autoSumForm.Bark.value = (12.287 * Math.sqrt(Focus)) + (3.7807 * Math.sqrt(NatureMagic)) + 195.08;	
	document.autoSumForm.Vines.value = (49.811 * Math.sqrt(Focus)) + (15.81 * Math.sqrt(NatureMagic)) + 265.82;

	document.autoSumForm.FireAttunement.value = (22.331 * Math.sqrt(Focus)) + (10.044 * Math.sqrt(FireMagic)) + 307.16;
	document.autoSumForm.FireBolt.value = (72.853 * Math.sqrt(Focus)) + (21.611 * Math.sqrt(FireMagic)) + 264.84;
	document.autoSumForm.Firestorm.value = (90.164 * Math.sqrt(Focus)) + (25.515 * Math.sqrt(FireMagic)) + 365.43;
	document.autoSumForm.FrostbiteInit.value = (31.766 * Math.sqrt(Focus)) + (14.633 * Math.sqrt(IceMagic)) + 183.29;
	document.autoSumForm.FrostbiteTick.value = (15.438 * Math.sqrt(Focus)) + (6.5069 * Math.sqrt(IceMagic)) + 139.0;
	document.autoSumForm.IceAttunement.value = (33.548 * Math.sqrt(Focus)) + (15.221 * Math.sqrt(IceMagic)) + 450.48;
	document.autoSumForm.IceBlast.value = (117.97 * Math.sqrt(Focus)) + (32.835 * Math.sqrt(IceMagic)) + 487.25;
	document.autoSumForm.IceShards.value = (96.322 * Math.sqrt(Focus)) + (30.47 * Math.sqrt(IceMagic)) + 702.43;
	document.autoSumForm.Incinerate.value = (27.879 * Math.sqrt(Focus)) + (12.521 * Math.sqrt(FireMagic)) + 227.05;
	document.autoSumForm.FireLure.value = (17.516 * Math.sqrt(Focus)) + (5.1609 * Math.sqrt(FireMagic)) + 219.08;
	document.autoSumForm.IceLure.value = (17.516 * Math.sqrt(Focus)) + (5.1609 * Math.sqrt(IceMagic)) + 219.08;

	document.autoSumForm.ExposeWeakness.value = (34.648 * Math.sqrt(Dexterity)) + (9.7154 * Math.sqrt(Cunning)) + 356.56;
	document.autoSumForm.FastReflexes.value = (33.097 * Math.sqrt(Dexterity)) + (10.568 * Math.sqrt(Cunning)) + 208.2;
	document.autoSumForm.Lifesteal.value = (32.043 * Math.sqrt(Dexterity)) + (9.2872 * Math.sqrt(Cunning)) + 188.01;
	document.autoSumForm.PoisonWeapon.value = (2.1081 * Math.sqrt(Dexterity)) + (0.96074 * Math.sqrt(Cunning)) + 46.799;
	document.autoSumForm.QuickStrike.value = (72.848 * Math.sqrt(Strength)) + (20.526 * Math.sqrt(Cunning)) + 369.37;
	document.autoSumForm.Rend.value = (16.449 * Math.sqrt(Strength)) + (5.0892 * Math.sqrt(Cunning)) + 152.46;
	document.autoSumForm.Riposte.value = (85.576 * Math.sqrt(Strength)) + (37.999*sqrt(Cunning)) + 582.98;
	document.autoSumForm.Shadowstrike.value = (91.069 * Math.sqrt(Dexterity)) + (25.62 * Math.sqrt(Cunning) + 432.54;
	document.autoSumForm.SmokeBomb.value = (22.398 * Math.sqrt(Dexterity)) + (9.9277 * Math.sqrt(Cunning)) + 141.51;
	document.autoSumForm.Bark.value = (121.82 * Math.sqrt(Strength)) + (54.694*Math.sqrt(Cunning)) + Number(AutoDmg) + 1000.4;

	document.autoSumForm.DefensiveFormation.value = (16.664 * Math.sqrt(Vitality)) + (5.1654 * Math.sqrt(Melee)) + 101.07;
	document.autoSumForm.ProtectiveStance.value = (13.86 * Math.sqrt(Vitality)) + (3.9263 * Math.sqrt(Melee)) + 142.4;
	document.autoSumForm.ShieldWall.value = (65.35 * Math.sqrt(Vitality)) + (20.662 * Math.sqrt(Melee)) + 726.98;

}