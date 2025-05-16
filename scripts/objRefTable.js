const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{chao: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{boneco: 0},
	{moedo: 0},
	{lava: 0},
	{Texto: 0},
	{Sprite: 0},
	{Texto2: 0},
	{Sprite2: 0},
	{Botão: 0},
	{Texto3: 0},
	{Sprite3: 0},
	{ninja_10KDStudios_runbackwards_: 0},
	{moedas: 0}
];

self.InstanceType = {
	chao: class extends self.ISpriteInstance {},
	boneco: class extends self.ISpriteInstance {},
	moedo: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	ninja_10KDStudios_runbackwards_: class extends self.ISpriteInstance {}
}