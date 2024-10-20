<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Conservation Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h3 {
            color: #007bff;
        }
        p {
            color: #333;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background-color: #218838;
        }
        .result {
            margin-top: 20px;
        }
        .tips {
            margin-top: 20px;
            background-color: #f8d7da;
            padding: 15px;
            border-radius: 5px;
            color: #721c24;
        }
        .chart-container {
            margin-top: 30px;
        }
        canvas {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Water Conservation Calculator</h1>
        <p>Enter your daily water usage habits to see how much water you consume and how you can save it!</p>

        <label for="shower">Minutes spent showering (per day):</label>
        <input type="number" id="shower" placeholder="e.g., 10">

        <label for="toilet">Number of toilet flushes (per day):</label>
        <input type="number" id="toilet" placeholder="e.g., 5">

        <label for="dishes">Number of times dishes are washed (per day):</label>
        <input type="number" id="dishes" placeholder="e.g., 2">

        <label for="laundry">Loads of laundry (per week):</label>
        <input type="number" id="laundry" placeholder="e.g., 3">

        <button onclick="calculateWaterUsage()">Calculate Water Usage</button>

        <div class="result" id="result"></div>
        <div class="tips" id="tips"></div>

        <div class="chart-container">
            <canvas id="waterChart"></canvas>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        function calculateWaterUsage() {
            // Getting user inputs
            const showerTime = document.getElementById('shower').value;
            const toiletFlushes = document.getElementById('toilet').value;
            const dishWashing = document.getElementById('dishes').value;
            const laundryLoads = document.getElementById('laundry').value;

            // Constants for water usage in liters
            const showerWaterPerMin = 9.5;  // Average water used per minute in a shower
            const toiletWaterPerFlush = 6;  // Average water per toilet flush
            const dishWaterHandWash = 18;   // Hand-washing dishes
            const laundryWaterPerLoad = 70; // Average water per laundry load

            // Calculating total water usage
            let totalShowerUsage = showerTime * showerWaterPerMin;
            let totalToiletUsage = toiletFlushes * toiletWaterPerFlush;
            let totalDishUsage = dishWashing * dishWaterHandWash;
            let totalLaundryUsage = (laundryLoads / 7) * laundryWaterPerLoad;  // Dividing by 7 to get daily usage

            let totalWaterUsage = totalShowerUsage + totalToiletUsage + totalDishUsage + totalLaundryUsage;

            // Displaying the result
            document.getElementById('result').innerHTML = `
                <h3>Your Daily Water Usage</h3>
                <p>Total water used per day: <strong>${totalWaterUsage.toFixed(2)} liters</strong></p>
            `;

            // Display water-saving tips
            displayWaterSavingTips(totalShowerUsage, totalToiletUsage, totalDishUsage, totalLaundryUsage);

            // Call the function to display the chart
            displayChart(totalShowerUsage, totalToiletUsage, totalDishUsage, totalLaundryUsage);
        }

        function displayWaterSavingTips(shower, toilet, dishes, laundry) {
            let tips = '<h3>Water Saving Tips:</h3>';

            if (shower > 95) {  // If more than 10 min showers
                tips += '<p>Consider reducing your shower time to 5 minutes. You can save up to 50 liters of water!</p>';
            }
            if (toilet > 30) {  // If more than 5 toilet flushes per day
                tips += '<p>Switching to a low-flow toilet can save up to 3 liters per flush.</p>';
            }
            if (dishes > 36) {  // Washing dishes multiple times
                tips += '<p>Using a dishwasher can save 50% of the water compared to hand-washing dishes.</p>';
            }
            if (laundry > 70) {  // More than 1 laundry load per day
                tips += '<p>Try washing full loads of laundry less frequently to save water.</p>';
            }

            document.getElementById('tips').innerHTML = tips;
        }

        function displayChart(shower, toilet, dishes, laundry) {
            // Destroy the previous chart if it exists
            if (window.waterChartInstance) {
                window.waterChartInstance.destroy();
            }

            // Get the canvas context
            const ctx = document.getElementById('waterChart').getContext('2d');

            // Create the chart
            window.waterChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Shower', 'Toilet Flushes', 'Dishes', 'Laundry'],
                    datasets: [{
                        label: 'Water Usage (liters)',
                        data: [shower, toilet, dishes, laundry],
                        backgroundColor: [
                            '#007bff',
                            '#28a745',
                            '#ff6384',
                            '#ffcd56'
                        ],
                        borderColor: [
                            '#0056b3',
                            '#218838',
                            '#e63946',
                            '#ffa500'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    responsive: true
                }
            });
        }
    </script>

</body>
</html>