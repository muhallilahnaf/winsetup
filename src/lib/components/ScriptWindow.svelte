<script>
    import { showScript, script } from '$lib/stores.js';
    export let pacId = ''
    const copyScript = (p) => {
        const copyText = (p === 'exec-policy') 
            ? document.getElementById(p).value
            : $script
        navigator.clipboard.writeText(copyText)
    }
</script>

<div class="window glass active" id="script-window">
	<div class="title-bar">
		<div class="title-bar-text">Script</div>
		<div class="title-bar-controls">
			<button aria-label="Close" on:click={() => {$showScript = false}}></button>
		</div>
	</div>

	<div class="window-body has-space">

        <fieldset>
            <legend>Instructions</legend>

            {#if pacId == 'winget'}
                <ol>
                    <li>Open Windows Store app.</li>
                    <li>Search 'App Installer' and update it.</li>
                    <li>Open PowerShell as admin (press Win key, type Powershell, right-click on 'Windows PowerShell', click 'run as administrator', select 'Yes').</li>
                    <li>Paste the following and hit Enter:
                        <div class="textarea-wrapper">
                            <textarea id="winget-script" rows="15" readonly value={$script} />
                        </div>
                        <button on:click={copyScript}>
                            <i class="fa-solid fa-copy"></i> Copy to clipboard
                        </button>
                    </li>
                </ol>
            {/if}
        
            {#if pacId == 'chocolatey'}
                <ol>
                    <li>Open PowerShell as admin (press Win key, type Powershell, right-click on 'Windows PowerShell', click 'run as administrator', select 'Yes').</li>
                    <li>Paste the following and hit Enter:
                        <div class="textarea-wrapper">
                            <textarea rows="5" id="exec-policy"
                                readonly>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))</textarea>
                        </div>
                        <button on:click={() => copyScript('exec-policy')}>
                            <i class="fa-solid fa-copy"></i> Copy to clipboard
                        </button>
                    </li>
                    <li>Close PowerShell window.</li>
                    <li>Open PowerShell window as admin (again).</li>
                    <li>Paste the following and hit Enter:
                        <div class="textarea-wrapper">
                            <textarea id="chocolatey-script" rows="5" readonly value={$script} />
                        </div>
                        <button on:click={copyScript}>
                            <i class="fa-solid fa-copy"></i> Copy to clipboard
                        </button>
                    </li>
                </ol>
            {/if}
        </fieldset>
    </div>
</div>

<style>
    #script-window {
        max-width: 300px;
        position: absolute;
        z-index: 69;
        top: 30vh;
        left: 50vw;
    }
    @media only screen and (min-width: 768px) {
        #script-window {
            max-width: 40vw;
        }
    }
    li {
        margin-bottom: 0.7rem;
    }
    ol {
        margin: 0;
        padding-left: 15px;
    }
    textarea {
        width: 95%;
        resize: none;
    }
</style>