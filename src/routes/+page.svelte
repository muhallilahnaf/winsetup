<script>
	import { apps, pacman, showScript, script } from '$lib/stores.js';
	import AppItem from '$lib/components/AppItem.svelte';
	import ScriptWindow from '$lib/components/ScriptWindow.svelte';
	let openId = Object.keys($pacman)[0]
	const selectAll = (pacId) => {
		document.querySelectorAll(`#${pacId} input`).forEach(n => {
			if (!n.hasAttribute('disabled')) {
				n.checked = true
			}
		})
	}
	const selectNone = (pacId) => {
		document.querySelectorAll(`#${pacId} input`).forEach(n => {
			n.checked = false
		})
	}
	const createScript = (pacId) => {
		let str = ''
		document.querySelectorAll(`#${pacId} input`).forEach(n => {
			if (n.checked) {
				const id = n.id.slice(0, n.id.lastIndexOf('-'))
				const cmd = $apps[id][pacId]
				if (pacId == 'winget') {
					str = `${str}winget install --id "${cmd}" -e -h -s winget --accept-package-agreements --accept-source-agreements & `
				}
				if (pacId == 'chocolatey') {
					str = `${str}${cmd} `
				}
			}
		})
		if (pacId == 'winget') {
			str = (str == '') ? 'winget search virus' : str.slice(0, -3)
		}
		if (pacId == 'chocolatey') {
			str = (str == '') ? 'virus' : str
			str = `cinst ${str} -yr`
		}
		$script = str
		$showScript = true
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<div id="main-container">
<div class="window glass active" id="main-window">
	<div class="title-bar">
		<div class="title-bar-text">Winsetup</div>
		<div class="title-bar-controls">
			<button aria-label="Close"></button>
		</div>
	</div>

	<div class="window-body has-space">
		<menu role="tablist" aria-label="Window with Tabs">
			{#each Object.entries($pacman) as [pacId, pacValue]}
				<button role="tab" aria-controls={pacId} aria-selected={pacId === openId} on:click={() => openId = pacId} >
					{pacValue['name']}
				</button>
			{/each}
		</menu>

		{#each Object.entries($pacman) as [pacId, pacValue]}
			<article role="tabpanel" id={pacId} hidden={pacId !== openId}>
				<section class="field-row">
					{pacValue['heading']}&nbsp;
					<a href={pacValue['link']} target="_blank">{pacValue['name']}</a>
				</section>

				<section class="field-row">
					<button on:click={() => selectAll(pacId)}>Select all</button>
					<button on:click={() => selectNone(pacId)}>Select none</button>
				</section>

				<fieldset>
					<legend>Apps</legend>
					<div id="appitem-container">
						{#each Object.entries($apps) as [appId, appDetails]}
						<AppItem {appId} {appDetails} {pacId} />
						{/each}
					</div>
				</fieldset>
				<section class="field-row" id="bottom-btn-row">
					<button class="default" on:click={() => createScript(pacId)}>OK</button>
				</section>
			</article>
		{/each}
	</div>
	<div class="status-bar">
		<p class="status-bar-field">
			&#169; 2024
		</p>

		<p class="status-bar-field">
			<a href="https://github.com/muhallilahnaf/winsetup">
				<span><i class="fa-brands fa-github"></i> Github</span>
			</a>
		</p>
	  </div>
</div>
</div>

{#if $showScript}
	<ScriptWindow pacId={openId}/>
{/if}

<style>
	#main-container {
		display: flex; 
		justify-content: center;
	}
	#main-window {
		min-width: 300px;
	}
	@media only screen and (min-width: 768px) {
		#main-container {
			margin: 2rem 0;
		}
		#main-window {
			min-width: None;
			max-width: 768px;
		}
		#appitem-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
		}
	}
	#bottom-btn-row {
		justify-content: flex-end;
	}
</style>