<script lang="ts">
    import { onMount } from "svelte";

    export let title: string;
    export let date: string;

    function format_date(date_string: string) {
        let [day, month, year] = date_string.split(".").map(e => Number(e));
        month = month - 1;
        return new Date(year, month, day).toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );
    }

    onMount(() => {
        date = format_date(date);
    });
</script>

<div class="header">
    <div class="title header-text">{title}</div>
    <div class="date header-text">{date}</div>
</div>

<style lang="scss">
    .header {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 0.5rem;

        padding: 0 1rem;
        box-sizing: border-box;
    }

    .header-text {
        font-family: "Albert Sans";
        color: white;
    }

    .title {
        line-height: 1.5rem;
        font-size: 1.5rem;
    }
</style>
