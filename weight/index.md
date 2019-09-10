---
title: Weight
layout: layouts/home.njk
tags:
    - hidden
navtitle: Weight
date: 2019-09-09
---
<form id="add-weight">
        <label for="weight-date">Date</label>
        <input type="date" name="weight-date" id="weight-date">
        <br>
        <label for="weight">Enter weight?</label>
        <input type="number" step="0.1" min="0" name="weight-kilograms" id="weight-kilograms">
        <br>
        <label for="fat-perc">Fat %</label>
        <input type="number" step="0.1" min="0" name="fat-perc" id="fat-perc">
        <br>
        <label for="weight-bone">Bone Weight</label>
        <input type="number" step="0.1" min="0" name="weight-bone" id="weight-bone">
        <br>
        <label for="water-perc">Water %</label>
        <input type="number" step="0.1" min="0" name="water-perc" id="water-perc">
        <br>
        <label for="weight-muscle">Muscle</label>
        <input type="number" step="0.1" min="0" name="weight-muscle" id="weight-muscle">
        <br>
        <label for="belly-index">Belly Index</label>
        <input type="number" step="0.1" min="0" name="belly-index" id="belly-index">
        <br>
        <button type="submit">Add weight</button>
</form>

<ol id="weight-list"></ol>
<svg class="line-chart"></svg>
<script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1/dist/chart.xkcd.min.js"></script>
<script src="script.js">

</script>