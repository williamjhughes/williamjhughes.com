<script>
	const colours = ["#5EBD3E", "#FFB900", "#F78200", "#E23838", "#973999", "#009CDF"];
</script>

<div class="w-full h-[5px] grid grid-cols-6">
  {#each colours as colour}
    <div style="background-color: {colour}"></div>
  {/each}
</div>
