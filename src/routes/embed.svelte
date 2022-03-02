<script>
	import { keys, mgps } from '$lib/stores';
	import { onMount } from 'svelte';

	let loaded = false;
	let keysContainer;
	let sl = 0;
	onMount(() => {
		sl = 2200 - (clientWidth - 700) / 2 - 50;
		keysContainer.scrollLeft = sl;
		loaded = true;
	});
	let advancedMode = false;

	let clientWidth, mleft;

	$: mleft = 100 - (((clientWidth - 700) / 2) % 100);
	$: sl = (clientWidth - 700) / 2;
</script>

<svelte:window bind:innerWidth={clientWidth} />

<div class="text-center pt-16 pb-6">
	<div class="flex items-center w-44 p-2 m-auto">
		<button
			on:click={() => {
				advancedMode = !advancedMode;
			}}
			type="button"
			class="{advancedMode
				? 'bg-blue-600'
				: 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			role="switch"
			aria-checked="false"
			aria-labelledby="annual-billing-label"
		>
			<span
				aria-hidden="true"
				class="{advancedMode
					? 'translate-x-5'
					: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
			/>
		</button>
		<span class="ml-3">
			<span class="text-sm font-medium text-gray-900">Advanced Mode </span>
		</span>
	</div>
</div>

<h2 class="text-center block md:hidden">Not yet mobile ready, view on desktop</h2>
<div class="hidden md:block pb-16">
	<div class="relative m-w-[5500px] m-auto">
		<div
			class="absolute bg-gradient-to-r from-white/100 to-red-400/0 z-10 backdrop-blur-none inset-y-0 w-[200px]"
		/>
		<div
			class="absolute right-0 bg-gradient-to-r from-white/50 to-white/100 z-10 backdrop-blur-none inset-y-0 w-[200px]"
		/>
		<div
			bind:this={keysContainer}
			class="hidescrollbar flex m-auto overflow-scroll max-w-full snap-x snap-start relative transition-all delay-75 duration-300"
			style="margin-left:-{mleft}px;"
			on:scroll={() => (sleft = keysContainer.scrollLeft)}
		>
			<!-- <div style="min-width:{sl + mleft}px" class="bg-white snap-start py-4 relative" /> -->
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />
			<div style="min-width:100px" class="bg-white snap-start py-4 relative" />

			{#each $keys as { key, color, anchor }}
				<div
					class="{color} snap-start text-3xl flex place-content-center align-middle border border-gray-500 min-w-[100px] py-4 relative"
				>
					<div>{@html key}</div>
				</div>
			{/each}
			<div style="min-width:{sl - mleft}px" class="bg-white snap-start py-4 relative" />
		</div>
	</div>
	<div />

	<div class="max-w-[700px] m-auto ">
		<div class="grid grid-cols-7">
			{#each $mgps as { shaded, step, textColor, name, fullname, scale, scale2, quality, scaletype, scaleuse, scaletype2, scaleTypeName, typeFrom1 }}
				<div class="border border-gray-500 {shaded ? 'bg-yellow-100' : ''}">
					<div class="text-center border-b py-2 text-2xl {textColor}">{step}</div>
					<div class="text-center border-b py-2 text-2xl">{name}</div>
					<div class={advancedMode ? '' : 'hidden'}>
						<div class="text-center border-b py-2 text-lg">{scale}</div>
						<div class="text-center border-b py-2 text-lg min-h-[45px]">{scale2}</div>
						<div class="text-center border-b py-2 text-lg text-red-500">{quality}</div>
						<div class="text-center border-b py-2 text-md min-h-[150px]">{scaletype}</div>
						<div class="text-center border-b py-2 text-xl min-h-[45px]">{scaleuse}</div>
						<div class="text-center border-b py-2 text-md min-h-[65px]">{scaletype2 || ''}</div>
						<div class="text-center border-b py-2 text-md min-h-[45px] text-red-500">
							{scaleTypeName}
						</div>
						<div class="text-center border-b py-2 text-md min-h-[45px]">{typeFrom1}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.hidescrollbar::-webkit-scrollbar {
		display: none;
	}

	.hidescrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
