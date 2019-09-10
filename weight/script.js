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

// Global variables
//let weightHistory = [];

addWeight.addEventListener('submit', function (event) {
    try {
        // Don't submit the form
        event.preventDefault();

        if (weightKilograms.value <= 0) {
            alert('Weight is required');
            return;
        }

        const weight = {
            'date': weightDate.value,
            'kilograms': weightKilograms.value,
            'fatPercent': fatPercent.value ? fatPercent.value : 0,
            'bone': weightBone.value ? weightBone.value : 0,
            'waterPercent': waterPercent.value ? waterPercent.value : 0,
            'muscle': weightMuscle.value ? weightMuscle.value : 0,
            'bellyIndex': bellyIndex.value ? bellyIndex.value : 0
        };
        console.log('Weight', weight);

        // Add value to the array
        let currentWeightHistory = localStorage.getItem('weightValues') ? JSON.parse(localStorage.getItem('weightValues')) : [];
        currentWeightHistory.push(weight);
        currentWeightHistory.sort((a, b) => new Date(a.date) - new Date(b.date));
        localStorage.setItem('weightValues', JSON.stringify(currentWeightHistory));;
        console.table(currentWeightHistory);

        // Update the chart
        updateChart();

        // Reset Values
        weightDate.value = '';
        weightKilograms.value = '';
        fatPercent.value = '';
        weightBone.value = '';
        waterPercent.value = '';
        weightMuscle.value = '';
        bellyIndex.value = '';
    } catch (err) {
        console.log(err);
    }
}, false);

const updateChart = () => {
    // Check if there is already saved data
    let saved = localStorage.getItem('weightValues');
    let weightHistory = [];
    if (saved) {
        weightHistory = JSON.parse(saved);
    } else {
        return;
    };

    console.debug('Updating Chart');
    const svg = document.querySelector('.line-chart');
    let labelsDataSet = [];
    let weightDataSet = [];
    let muscleDataSet = [];
    weightHistory.forEach((weight, index) => {
        labelsDataSet.push(weight.date);
        weightDataSet.push(weight.kilograms);

        // Calculate muscle value if 0
        let muscleWeight = weight.muscle;

        // Get the previous muscle weight if 0
        if ((muscleWeight === 0) & !(index === 0)) {
            muscleWeight = weightHistory[index - 1].muscle;
        }
        muscleDataSet.push(muscleWeight);

    });

    const lineChart = new chartXkcd.Line(svg, {
        title: 'Weight over time', // optional
        xLabel: 'Date', // optional
        yLabel: 'Weight (kg)', // optional
        data: {
            labels: labelsDataSet, //['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'Weight ',
                //data: [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000],
                data: weightDataSet,
            }, {
                label: 'Muscle ',
                //data: [0, 1, 30, 70, 80, 100, 50, 80, 40, 150],
                data: muscleDataSet,
            }],
        },
        options: { // optional
            yTickCount: 10,
            legendPosition: chartXkcd.config.positionType.upRight
        }
    });
};

window.load = updateChart();