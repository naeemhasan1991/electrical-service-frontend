<script lang="ts">
	
    export let caption: string;
	
</script>

<div class="caption-container">
	
	<!-- Caption -->
	<p class="py-3" id="caption">{caption}</p>
		
</div>

<style>
    /* Container for image text */
    .caption-container {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 1.2rem;
        padding: 2px 16px;
        color: black;
    }	
	
</style>