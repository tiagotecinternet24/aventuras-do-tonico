const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{FundoGame: 0},
	{Espinhos: 0},
	{Sólido: 0},
	{BlocoChao: 0},
	{BlocoAereo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Tonico: 0},
	{Teclado: 0},
	{Moeda: 0},
	{Áudio: 0},
	{Pontuacao: 0},
	{pontos: 0}
];

self.InstanceType = {
	FundoGame: class extends self.ITiledBackgroundInstance {},
	Espinhos: class extends self.ITiledBackgroundInstance {},
	BlocoChao: class extends self.ITiledBackgroundInstance {},
	BlocoAereo: class extends self.ITiledBackgroundInstance {},
	Tonico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Pontuacao: class extends self.ITextInstance {}
}