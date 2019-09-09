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

<script>
    console.log('Welcome to Local Storage');
    // https://gomakethings.com/how-to-update-localstorage-with-vanilla-javascript/
    const addWeight = document.querySelector('#add-weight');
    const weightList = document.querySelector('#weight-list');

    // Weight Inputs
    const weightDate = document.querySelector('#weight-date');
    const weightKilograms = document.querySelector('#weight-kilograms');
    const fatPercent = document.querySelector('#fat-perc');
    const weightBone = document.querySelector('#weight-bone');
    const waterPercent = document.querySelector('#water-perc');
    const weightMuscle = document.querySelector('#weight-muscle');
    const bellyIndex = document.querySelector('#belly-index');



    addWeight.addEventListener('submit', function (event) {
        // Don't submit the form
        event.preventDefault();

        if (weightKilograms.value <= 0) return;

        // Add input to list
        weightList.innerHTML += '<li>' + weightDate.value + ':' + weightKilograms.value + '</li>';

        const weight = {
            'date': weightDate.value,
            'kilograms': weightKilograms.value,
            'fatPercent': fatPercent.value,
            'Bone': weightBone.value,
            'waterPercent': waterPercent.value,
            'Muscle': weightMuscle.value,
            'bellyIndex': bellyIndex.value,
        };
        localStorage.setItem('weightValues', JSON.stringify(weight));;

        // Reset Values
        weightDate.value = '';
        weightKilograms.value = '';
        fatPercent.value = '';
        weightBone.value = '';
        waterPercent.value = '';
        weightMuscle.value = '';
        bellyIndex.value = '';

    }, false);

    // Check for saved wishlist items
    var saved = localStorage.getItem('weightValues');

    // If there are any saved items, update our list
    if (saved) {
        console.log(saved);

    }
</script>