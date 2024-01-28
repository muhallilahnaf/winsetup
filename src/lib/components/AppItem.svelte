<script>
	export let appId = '';
	export let appDetails = {};
	export let pacId = '';
	const disabled = appDetails[pacId] == '';
	const checked = !disabled;
	const id = appId + '-' + pacId;
</script>

<div class="field-row">
	<input {checked} {disabled} type="checkbox" {id} />
	<label for={id}>{appDetails['name']}</label>
	<a href={appDetails['link']} target="_blank">
		<i class="fas fa-external-link-alt fa-xs"></i>
	</a>
</div>
