import { readable } from 'svelte/store';
export const keys = readable([
	{
		anchor: 'bbb',
		key: 'B<span class="absolute text-sm">♭♭</span>',
		color: 'text-blue-700 bg-blue-100'
	},
	{
		anchor: 'fb',
		key: 'F<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'cb',
		key: 'C<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'gb',
		key: 'G<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'db',
		key: 'D<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'ab',
		key: 'A<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'eb',
		key: 'E<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{
		anchor: 'bb',
		key: 'B<span class="absolute text-sm">♭</span>',
		color: 'text-blue-600 bg-blue-50'
	},
	{ anchor: 'f', key: 'F', color: 'text-gray-800' },
	{ anchor: 'c', key: 'C', color: 'text-gray-800' },
	{ anchor: 'g', key: 'G', color: 'text-gray-800' },
	{ anchor: 'd', key: 'D', color: 'text-gray-800' },
	{ anchor: 'a', key: 'A', color: 'text-gray-800' },
	{ anchor: 'e', key: 'E', color: 'text-gray-800' },
	{ anchor: 'b', key: 'B', color: 'text-gray-800' },
	{
		anchor: 'fsharp',
		key: 'F<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'csharp',
		key: 'C<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'gsharp',
		key: 'G<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'dsharp',
		key: 'D<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'asharp',
		key: 'A<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'esharp',
		key: 'E<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'bsharp',
		key: 'B<span class="absolute text-sm">#</span>',
		color: 'text-red-600 bg-red-50'
	},
	{
		anchor: 'fdoublesharp',
		key: 'F<span class="absolute text-sm">##</span>',
		color: 'text-red-800 bg-red-100'
	}
]);

export const mgps = readable([
	{
		step: '4',
		shaded: true,
		textColor: '',
		name: 'Lyd',
		fullname: 'Lydian',
		scale: '#11',
		scale2: '(#4)',
		quality: 'Quixotic',
		scaletype: '',
		scaleuse: '7#11',
		scaletype2: 'Dom. 7',
		scaleTypeName: '"Lyd dom"',
		typeFrom1: '(Lyd ♭7)'
	},
	{
		step: '1',
		shaded: false,
		textColor: 'text-red-500',
		name: 'Ion',
		fullname: 'Ionian',
		scale: 'M7, 4♮',
		scale2: '',
		quality: '"major"',
		scaletype: '',
		scaleuse: '-Δ',
		scaletype2: 'm3, M7',
		scaleTypeName: 'Mel Min',
		typeFrom1: '(Ion ♭3)'
	},
	{
		step: '5',
		shaded: true,
		textColor: '',
		name: 'Mix',
		fullname: 'Mixolydian',
		scale: '7sus',
		scale2: 'M3, m7',
		quality: 'STRONG',
		scaletype: '',
		scaleuse: '',
		scaletype2: 'Not used much',
		scaleTypeName: '',
		typeFrom1: '(Mix ♭6)'
	},
	{
		step: '2',
		shaded: false,
		textColor: 'text-red-500',
		name: 'Dor',
		fullname: 'Dorian',
		scale: 'm7, M6',
		scale2: '',
		quality: '"minor lite"',
		scaletype: '',
		scaleuse: 'Sus♭9',
		scaletype2: '♭2, M6',
		scaleTypeName: 'Exotic Bright',
		typeFrom1: '(Dor ♭2)'
	},
	{
		step: '6',
		shaded: true,
		textColor: '',
		name: 'Aeo',
		fullname: 'Aeolian',
		scale: 'm7, m6',
		scale2: '',
		quality: '"minor"',
		scaletype: '',
		scaleuse: '½ dim 7',
		scaletype2: 'm7, ♭5',
		scaleTypeName: '"½ dim"',
		typeFrom1: '(Aeo ♭5)'
	},
	{
		step: '3',
		shaded: false,
		textColor: 'text-red-500',
		name: 'Phr',
		fullname: 'Phrygian',
		scale: 'm7, ♭9',
		scale2: 'm7, ♭2)',
		quality: 'EXOTIC',
		scaletype: 'MELODIC MINOR (major scale with flatted 3rd) ♭3',
		scaleuse: 'Δ+5',
		scaletype2: 'M7, #5',
		scaleTypeName: '"Lyd Aug"',
		typeFrom1: '(Phr ♭1)(!)'
	},
	{
		step: '7',
		shaded: true,
		textColor: '',
		name: 'Loc',
		fullname: 'Locrian',
		scale: '½ dim 7',
		scale2: 'm7, ♭5',
		quality: 'DARK',
		scaletype: '',
		scaleuse: 'ALT',
		scaletype2: '♭9, #9, #11, ♭13',
		scaleTypeName: '"Altered"',
		typeFrom1: '(Loc ♭4)'
	}
]);
