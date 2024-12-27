// References to DOM elements
const productionForm = document.getElementById("productionForm");
const dataTable = document.getElementById("dataTable");
const productionChartCtx = document.getElementById("productionChart").getContext("2d");

// Data arrays for wells and production
let wellNames = [];
let productionData = [];

// Chart.js instance
let productionChart = new Chart(productionChartCtx, {
    type: 'bar',
    data: {
        labels: wellNames,
        datasets: [{
            label: 'Produksi (bbl)',
            data: productionData,
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Produksi Minyak per Sumur' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Add data to table and update chart
function addDataToTable(wellName, production) {
    // Add to data arrays
    wellNames.push(wellName);
    productionData.push(production);

    // Update table
    const row = document.createElement("tr");
    row.innerHTML = `<td>${wellName}</td><td>${production}</td>`;
    dataTable.appendChild(row);

    // Update chart
    productionChart.update();
}

// Form submission event
productionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const wellName = document.getElementById("wellName").value;
    const production = parseFloat(document.getElementById("production").value);

    // Add data to table and chart
    addDataToTable(wellName, production);

    // Reset form
    productionForm.reset();
});
