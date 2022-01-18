<script>
	const keys = [
		{ anchor: 'bbb', key: 'B<span class="absolute text-sm">♭♭</span>', color: 'text-blue-800' },
		{ anchor: 'fb', key: 'F<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'cb', key: 'C<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'gb', key: 'G<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'db', key: 'D<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'ab', key: 'A<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'eb', key: 'E<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'bb', key: 'B<span class="absolute text-sm">♭</span>', color: 'text-blue-700' },
		{ anchor: 'f', key: 'F', color: 'text-gray-800' },
		{ anchor: 'c', key: 'C', color: 'text-gray-800' },
		{ anchor: 'g', key: 'G', color: 'text-gray-800' },
		{ anchor: 'd', key: 'D', color: 'text-gray-800' },
		{ anchor: 'a', key: 'A', color: 'text-gray-800' },
		{ anchor: 'e', key: 'E', color: 'text-gray-800' },
		{ anchor: 'b', key: 'B', color: 'text-gray-800' },
		{ anchor: 'fsharp', key: 'F<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{ anchor: 'csharp', key: 'C<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{ anchor: 'gsharp', key: 'G<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{ anchor: 'dsharp', key: 'D<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{ anchor: 'asharp', key: 'A<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{ anchor: 'esharp', key: 'E<span class="absolute text-sm">#</span>', color: 'text-red-700' },
		{
			anchor: 'bsharp',
			key: 'B<span class="absolute text-sm">#</span>',
			color: 'text-red-700'
		},
		{
			anchor: 'fdoublesharp',
			key: 'F<span class="absolute text-sm">#</span><span class="absolute text-sm">#</span>',
			color: 'text-red-800'
		}
	];
</script>

<div class="text-center p-16">
	<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
		<span class="block xl:inline">Musical</span>
		<span class="block text-blue-600 xl:inline">GPS</span>
	</h1>
	See more at&nbsp;<a href="https://musicistruth.com" target="_blank">musicistruth.com</a>
</div>
<div
	class="flex border-8 shadow-xl m-auto overflow-scroll max-w-[855px] snap-proximity snap-x scroll-pl-[15px]"
>
	{#each keys as { key, color, anchor }}
		<div
			id={anchor}
			class="{color} snap-start text-3xl flex place-content-center align-middle border shadow m-[15px] min-w-[90px] py-6 relative"
		>
			<div>{@html key}</div>
		</div>
	{/each}
</div>
