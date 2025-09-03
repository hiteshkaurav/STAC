// Stock data
const stockData = [
  {"Stock": "ITC", "Sector": "FMCG", "Price": 406.75, "Target_Price": 569.45, "PE": 14.66, "ROE": 47.83, "ROCE": 42.10, "DebtEquity": 0.05, "Moat": "High", "CalculatedFundamentalScore": 100, "Investment_Quality": "Excellent", "Valuation": "Undervalued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Strong", "Expected_Return": "35-45%", "Time_Horizon": "2-3 years", "Support_Level": 374.21, "Resistance_Level": 439.29, "Price_Trend": "Bullish"},
  {"Stock": "Coal India", "Sector": "Mining", "Price": 374.75, "Target_Price": 524.65, "PE": 6.97, "ROE": 46.23, "ROCE": 48.04, "DebtEquity": 0.09, "Moat": "High", "CalculatedFundamentalScore": 97, "Investment_Quality": "Excellent", "Valuation": "Undervalued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Strong", "Expected_Return": "35-45%", "Time_Horizon": "2-3 years", "Support_Level": 344.77, "Resistance_Level": 404.73, "Price_Trend": "Bullish"},
  {"Stock": "Emami", "Sector": "FMCG", "Price": 591.05, "Target_Price": 827.47, "PE": 31.55, "ROE": 30.91, "ROCE": 32.42, "DebtEquity": 0.03, "Moat": "High", "CalculatedFundamentalScore": 95, "Investment_Quality": "Excellent", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Strong", "Expected_Return": "35-45%", "Time_Horizon": "2-3 years", "Support_Level": 543.77, "Resistance_Level": 638.33, "Price_Trend": "Bullish"},
  {"Stock": "Mazagon Dock", "Sector": "Defence", "Price": 2676.00, "Target_Price": 3077.40, "PE": 49.75, "ROE": 28.14, "ROCE": 43.19, "DebtEquity": 0.00, "Moat": "High", "CalculatedFundamentalScore": 93, "Investment_Quality": "Excellent", "Valuation": "Overvalued", "Risk_Level": "Low", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 2461.92, "Resistance_Level": 2890.08, "Price_Trend": "Neutral"},
  {"Stock": "Asian Paints", "Sector": "Paints", "Price": 2850.00, "Target_Price": 3277.50, "PE": 45.20, "ROE": 28.50, "ROCE": 35.80, "DebtEquity": 0.08, "Moat": "High", "CalculatedFundamentalScore": 93, "Investment_Quality": "Excellent", "Valuation": "Overvalued", "Risk_Level": "Low", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 2622.00, "Resistance_Level": 3078.00, "Price_Trend": "Neutral"},
  {"Stock": "Hindustan Aeronautics", "Sector": "Defence", "Price": 4451.50, "Target_Price": 6232.10, "PE": 35.59, "ROE": 26.09, "ROCE": 28.70, "DebtEquity": 0.05, "Moat": "High", "CalculatedFundamentalScore": 91, "Investment_Quality": "Excellent", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Strong", "Expected_Return": "35-45%", "Time_Horizon": "2-3 years", "Support_Level": 4095.38, "Resistance_Level": 4807.62, "Price_Trend": "Bullish"},
  {"Stock": "Bajaj Auto", "Sector": "Auto", "Price": 9030.50, "Target_Price": 12642.70, "PE": 34.42, "ROE": 22.84, "ROCE": 25.20, "DebtEquity": 0.12, "Moat": "High", "CalculatedFundamentalScore": 90, "Investment_Quality": "Excellent", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Strong", "Expected_Return": "35-45%", "Time_Horizon": "2-3 years", "Support_Level": 8308.06, "Resistance_Level": 9752.94, "Price_Trend": "Bullish"},
  {"Stock": "Bharat Electronics", "Sector": "Defence", "Price": 376.60, "Target_Price": 433.09, "PE": 51.73, "ROE": 29.29, "ROCE": 32.10, "DebtEquity": 0.08, "Moat": "High", "CalculatedFundamentalScore": 88, "Investment_Quality": "Excellent", "Valuation": "Overvalued", "Risk_Level": "Low", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 346.47, "Resistance_Level": 406.73, "Price_Trend": "Neutral"},
  {"Stock": "Dr Reddy's Labs", "Sector": "Pharma", "Price": 1253.45, "Target_Price": 1566.81, "PE": 18.42, "ROE": 17.96, "ROCE": 22.69, "DebtEquity": 0.14, "Moat": "High", "CalculatedFundamentalScore": 87, "Investment_Quality": "Excellent", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 1153.17, "Resistance_Level": 1353.73, "Price_Trend": "Bullish"},
  {"Stock": "Glaxo Pharma", "Sector": "Pharma", "Price": 2824.70, "Target_Price": 3248.40, "PE": 50.53, "ROE": 44.83, "ROCE": 63.25, "DebtEquity": 0.01, "Moat": "High", "CalculatedFundamentalScore": 86, "Investment_Quality": "Excellent", "Valuation": "Overvalued", "Risk_Level": "Low", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 2598.72, "Resistance_Level": 3050.68, "Price_Trend": "Neutral"},
  {"Stock": "Waaree Renewables", "Sector": "Renewable Energy", "Price": 1040.70, "Target_Price": 1300.88, "PE": 37.30, "ROE": 66.26, "ROCE": 84.91, "DebtEquity": 0.06, "Moat": "Medium", "CalculatedFundamentalScore": 83, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 957.44, "Resistance_Level": 1123.96, "Price_Trend": "Bullish"},
  {"Stock": "Cipla", "Sector": "Pharma", "Price": 1569.20, "Target_Price": 1961.50, "PE": 24.04, "ROE": 18.15, "ROCE": 19.80, "DebtEquity": 0.18, "Moat": "High", "CalculatedFundamentalScore": 82, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 1443.66, "Resistance_Level": 1694.74, "Price_Trend": "Bullish"},
  {"Stock": "Axis Bank", "Sector": "Banking", "Price": 1056.20, "Target_Price": 1320.25, "PE": 11.68, "ROE": 16.25, "ROCE": 18.50, "DebtEquity": 0.15, "Moat": "High", "CalculatedFundamentalScore": 82, "Investment_Quality": "Good", "Valuation": "Undervalued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 971.70, "Resistance_Level": 1140.70, "Price_Trend": "Bullish"},
  {"Stock": "ICICI Bank", "Sector": "Banking", "Price": 1394.20, "Target_Price": 1742.75, "PE": 19.50, "ROE": 17.04, "ROCE": 18.90, "DebtEquity": 0.18, "Moat": "High", "CalculatedFundamentalScore": 82, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 1282.66, "Resistance_Level": 1505.74, "Price_Trend": "Bullish"},
  {"Stock": "Kotak Mahindra Bank", "Sector": "Banking", "Price": 1942.50, "Target_Price": 2428.12, "PE": 17.46, "ROE": 15.39, "ROCE": 17.20, "DebtEquity": 0.20, "Moat": "High", "CalculatedFundamentalScore": 82, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 1787.10, "Resistance_Level": 2097.90, "Price_Trend": "Bullish"},
  {"Stock": "KPIT Technologies", "Sector": "IT", "Price": 1212.80, "Target_Price": 1515.00, "PE": 41.19, "ROE": 26.93, "ROCE": 40.88, "DebtEquity": 0.12, "Moat": "Medium", "CalculatedFundamentalScore": 79, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Low", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 1115.78, "Resistance_Level": 1309.82, "Price_Trend": "Bullish"},
  {"Stock": "CG Power", "Sector": "Power", "Price": 739.65, "Target_Price": 924.56, "PE": 119.50, "ROE": 27.62, "ROCE": 28.50, "DebtEquity": 0.25, "Moat": "Medium", "CalculatedFundamentalScore": 76, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Medium", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 680.48, "Resistance_Level": 798.82, "Price_Trend": "Bullish"},
  {"Stock": "Taparia Tools", "Sector": "Tools", "Price": 11.57, "Target_Price": 13.31, "PE": 0.14, "ROE": 27.29, "ROCE": 47.88, "DebtEquity": 0.01, "Moat": "Medium", "CalculatedFundamentalScore": 76, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "High", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 10.64, "Resistance_Level": 12.50, "Price_Trend": "Neutral"},
  {"Stock": "Ashok Leyland", "Sector": "Auto", "Price": 130.39, "Target_Price": 162.99, "PE": 24.65, "ROE": 22.46, "ROCE": 25.80, "DebtEquity": 0.28, "Moat": "Medium", "CalculatedFundamentalScore": 74, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "Medium", "Buy_Signal": "Yes", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "20-30%", "Time_Horizon": "1-2 years", "Support_Level": 119.96, "Resistance_Level": 140.82, "Price_Trend": "Bullish"},
  {"Stock": "Crestchem", "Sector": "Chemicals", "Price": 122.00, "Target_Price": 152.50, "PE": 14.76, "ROE": 34.88, "ROCE": 59.94, "DebtEquity": 0.00, "Moat": "Low", "CalculatedFundamentalScore": 72, "Investment_Quality": "Good", "Valuation": "Fair Valued", "Risk_Level": "High", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 112.24, "Resistance_Level": 131.76, "Price_Trend": "Neutral"},
  {"Stock": "South Indian Bank", "Sector": "Banking", "Price": 29.48, "Target_Price": 32.43, "PE": 5.92, "ROE": 13.76, "ROCE": 15.20, "DebtEquity": 0.35, "Moat": "Low", "CalculatedFundamentalScore": 68, "Investment_Quality": "Average", "Valuation": "Undervalued", "Risk_Level": "High", "Buy_Signal": "No", "Sell_Signal": "No", "Signal_Strength": "Moderate", "Expected_Return": "10-20%", "Time_Horizon": "1-2 years", "Support_Level": 27.12, "Resistance_Level": 31.84, "Price_Trend": "Neutral"}
];

// Global variables
let currentData = [...stockData];
let sortColumn = null;
let sortDirection = 'asc';

// Utility functions
function formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(value);
}

function getSignalClass(stock) {
    if (stock.Signal_Strength === 'Strong' && stock.Buy_Signal === 'Yes') {
        return 'signal-strong-buy';
    } else if (stock.Signal_Strength === 'Moderate' && stock.Buy_Signal === 'Yes') {
        return 'signal-moderate-buy';
    } else {
        return 'signal-hold';
    }
}

function getSignalText(stock) {
    if (stock.Signal_Strength === 'Strong' && stock.Buy_Signal === 'Yes') {
        return 'Strong Buy';
    } else if (stock.Signal_Strength === 'Moderate' && stock.Buy_Signal === 'Yes') {
        return 'Moderate Buy';
    } else {
        return 'Hold';
    }
}

// Show stock details modal - Make it a global function
window.showStockDetails = function(stockName) {
    const stock = stockData.find(s => s.Stock === stockName);
    if (!stock) return;

    const modal = document.getElementById('stockModal');
    const modalStockName = document.getElementById('modalStockName');
    const modalBody = document.getElementById('modalBody');

    modalStockName.textContent = `${stock.Stock} - Detailed Analysis`;
    
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-section">
                <h4>Basic Information</h4>
                <div class="modal-metric">
                    <span class="modal-metric-label">Sector:</span>
                    <span class="modal-metric-value">${stock.Sector}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Current Price:</span>
                    <span class="modal-metric-value">${formatCurrency(stock.Price)}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Target Price:</span>
                    <span class="modal-metric-value">${formatCurrency(stock.Target_Price)}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Investment Quality:</span>
                    <span class="modal-metric-value">${stock.Investment_Quality}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Fundamental Metrics</h4>
                <div class="modal-metric">
                    <span class="modal-metric-label">Fundamental Score:</span>
                    <span class="modal-metric-value">${stock.CalculatedFundamentalScore}/100</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">ROE:</span>
                    <span class="modal-metric-value">${stock.ROE}%</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">ROCE:</span>
                    <span class="modal-metric-value">${stock.ROCE}%</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">PE Ratio:</span>
                    <span class="modal-metric-value">${stock.PE}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Debt/Equity:</span>
                    <span class="modal-metric-value">${stock.DebtEquity}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Investment Analysis</h4>
                <div class="modal-metric">
                    <span class="modal-metric-label">Signal:</span>
                    <span class="modal-metric-value"><span class="status ${getSignalClass(stock)}">${getSignalText(stock)}</span></span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Expected Return:</span>
                    <span class="modal-metric-value">${stock.Expected_Return}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Time Horizon:</span>
                    <span class="modal-metric-value">${stock.Time_Horizon}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Risk Level:</span>
                    <span class="modal-metric-value">${stock.Risk_Level}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Valuation:</span>
                    <span class="modal-metric-value">${stock.Valuation}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Technical Levels</h4>
                <div class="modal-metric">
                    <span class="modal-metric-label">Support Level:</span>
                    <span class="modal-metric-value">${formatCurrency(stock.Support_Level)}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Resistance Level:</span>
                    <span class="modal-metric-value">${formatCurrency(stock.Resistance_Level)}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Price Trend:</span>
                    <span class="modal-metric-value">${stock.Price_Trend}</span>
                </div>
                <div class="modal-metric">
                    <span class="modal-metric-label">Economic Moat:</span>
                    <span class="modal-metric-value">${stock.Moat}</span>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
};

// Initialize the application
function initializeApp() {
    updateOverviewCards();
    populateTopRecommendations();
    populateFilters();
    populateStockTable();
    initializeEventListeners();
    createSectorChart();
}

// Update overview cards
function updateOverviewCards() {
    const strongBuy = stockData.filter(stock => stock.Signal_Strength === 'Strong' && stock.Buy_Signal === 'Yes').length;
    const moderateBuy = stockData.filter(stock => stock.Signal_Strength === 'Moderate' && stock.Buy_Signal === 'Yes').length;
    const hold = stockData.filter(stock => stock.Buy_Signal === 'No').length;
    const sell = stockData.filter(stock => stock.Sell_Signal === 'Yes').length;

    // Update the overview cards
    const overviewCards = document.querySelectorAll('.overview-card .overview-number');
    overviewCards[0].textContent = stockData.length;
    overviewCards[1].textContent = strongBuy;
    overviewCards[2].textContent = moderateBuy;
    overviewCards[3].textContent = hold;
    overviewCards[4].textContent = sell;
}

// Populate top recommendations
function populateTopRecommendations() {
    const strongBuyStocks = stockData
        .filter(stock => stock.Signal_Strength === 'Strong' && stock.Buy_Signal === 'Yes')
        .sort((a, b) => b.CalculatedFundamentalScore - a.CalculatedFundamentalScore)
        .slice(0, 5);

    const container = document.getElementById('topRecommendations');
    container.innerHTML = '';

    strongBuyStocks.forEach(stock => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <div class="recommendation-header">
                <div>
                    <h3 class="stock-name">${stock.Stock}</h3>
                    <p class="stock-sector">${stock.Sector}</p>
                </div>
                <div class="status ${getSignalClass(stock)}">${getSignalText(stock)}</div>
            </div>
            <div class="price-info">
                <div class="current-price">
                    <div class="price-label">Current Price</div>
                    <div class="price-value">${formatCurrency(stock.Price)}</div>
                </div>
                <div class="target-price">
                    <div class="price-label">Target Price</div>
                    <div class="price-value">${formatCurrency(stock.Target_Price)}</div>
                </div>
            </div>
            <div class="recommendation-metrics">
                <div class="metric">
                    <div class="metric-label">Fund. Score</div>
                    <div class="metric-value">${stock.CalculatedFundamentalScore}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Expected Return</div>
                    <div class="metric-value">${stock.Expected_Return}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">ROE</div>
                    <div class="metric-value">${stock.ROE}%</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Risk Level</div>
                    <div class="metric-value">${stock.Risk_Level}</div>
                </div>
            </div>
            <div class="recommendation-footer">
                <button class="action-btn" onclick="showStockDetails('${stock.Stock}')">View Details</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Populate filters
function populateFilters() {
    const sectors = [...new Set(stockData.map(stock => stock.Sector))].sort();
    const sectorFilter = document.getElementById('sectorFilter');
    
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
}

// Populate stock table
function populateStockTable() {
    const tbody = document.getElementById('stockTableBody');
    tbody.innerHTML = '';

    currentData.forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${stock.Stock}</strong></td>
            <td>${stock.Sector}</td>
            <td>${formatCurrency(stock.Price)}</td>
            <td>${formatCurrency(stock.Target_Price)}</td>
            <td><strong>${stock.CalculatedFundamentalScore}</strong></td>
            <td>${stock.Investment_Quality}</td>
            <td>${stock.Valuation}</td>
            <td>${stock.Risk_Level}</td>
            <td><span class="status ${getSignalClass(stock)}">${getSignalText(stock)}</span></td>
            <td>${stock.Expected_Return}</td>
            <td><button class="action-btn" onclick="showStockDetails('${stock.Stock}')">Details</button></td>
        `;
        tbody.appendChild(row);
    });

    // Re-attach sorting event listeners after table is populated
    attachSortingListeners();
}

// Attach sorting listeners
function attachSortingListeners() {
    document.querySelectorAll('.sortable').forEach(header => {
        header.removeEventListener('click', handleSort); // Remove existing listeners
        header.addEventListener('click', handleSort);
    });
}

// Handle sorting
function handleSort(e) {
    const column = e.currentTarget.dataset.sort;
    sortTable(column);
}

// Initialize event listeners
function initializeEventListeners() {
    // Filter event listeners
    document.getElementById('sectorFilter').addEventListener('change', applyFilters);
    document.getElementById('signalFilter').addEventListener('change', applyFilters);
    document.getElementById('qualityFilter').addEventListener('change', applyFilters);

    // Export button
    document.getElementById('exportBtn').addEventListener('click', exportToCSV);

    // Modal event listeners
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('stockModal').classList.add('hidden');
    });

    // Close modal when clicking outside
    document.getElementById('stockModal').addEventListener('click', (e) => {
        if (e.target.id === 'stockModal') {
            document.getElementById('stockModal').classList.add('hidden');
        }
    });

    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            switchTab(tabId);
        });
    });

    // Initial sorting listeners
    attachSortingListeners();
}

// Apply filters
function applyFilters() {
    const sectorFilter = document.getElementById('sectorFilter').value;
    const signalFilter = document.getElementById('signalFilter').value;
    const qualityFilter = document.getElementById('qualityFilter').value;

    currentData = stockData.filter(stock => {
        const sectorMatch = !sectorFilter || stock.Sector === sectorFilter;
        const signalMatch = !signalFilter || getSignalText(stock) === signalFilter;
        const qualityMatch = !qualityFilter || stock.Investment_Quality === qualityFilter;

        return sectorMatch && signalMatch && qualityMatch;
    });

    populateStockTable();
}

// Sort table
function sortTable(column) {
    const headers = document.querySelectorAll('.sortable');
    headers.forEach(h => h.classList.remove('asc', 'desc'));

    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection = 'asc';
        sortColumn = column;
    }

    const header = document.querySelector(`[data-sort="${column}"]`);
    header.classList.add(sortDirection);

    currentData.sort((a, b) => {
        let aVal, bVal;

        switch (column) {
            case 'stock':
                aVal = a.Stock;
                bVal = b.Stock;
                break;
            case 'sector':
                aVal = a.Sector;
                bVal = b.Sector;
                break;
            case 'price':
                aVal = a.Price;
                bVal = b.Price;
                break;
            case 'target':
                aVal = a.Target_Price;
                bVal = b.Target_Price;
                break;
            case 'score':
                aVal = a.CalculatedFundamentalScore;
                bVal = b.CalculatedFundamentalScore;
                break;
            case 'quality':
                aVal = a.Investment_Quality;
                bVal = b.Investment_Quality;
                break;
            case 'valuation':
                aVal = a.Valuation;
                bVal = b.Valuation;
                break;
            case 'risk':
                aVal = a.Risk_Level;
                bVal = b.Risk_Level;
                break;
            case 'signal':
                aVal = getSignalText(a);
                bVal = getSignalText(b);
                break;
            case 'return':
                aVal = a.Expected_Return;
                bVal = b.Expected_Return;
                break;
            default:
                return 0;
        }

        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    populateStockTable();
}

// Switch tabs
function switchTab(tabId) {
    // Remove active class from all buttons and panes
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    // Add active class to clicked button and corresponding pane
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Export to CSV
function exportToCSV() {
    const csvContent = [
        // Header
        ['Stock Name', 'Sector', 'Current Price', 'Target Price', 'Fundamental Score', 'Investment Quality', 'Valuation', 'Risk Level', 'Signal', 'Expected Return', 'Time Horizon', 'ROE', 'ROCE', 'PE Ratio', 'Debt/Equity', 'Support Level', 'Resistance Level'].join(','),
        // Data rows
        ...currentData.map(stock => [
            stock.Stock,
            stock.Sector,
            stock.Price,
            stock.Target_Price,
            stock.CalculatedFundamentalScore,
            stock.Investment_Quality,
            stock.Valuation,
            stock.Risk_Level,
            getSignalText(stock),
            stock.Expected_Return,
            stock.Time_Horizon,
            stock.ROE,
            stock.ROCE,
            stock.PE,
            stock.DebtEquity,
            stock.Support_Level,
            stock.Resistance_Level
        ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'Indian_Stock_Suggestions_2025.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Create sector distribution chart
function createSectorChart() {
    const ctx = document.getElementById('sectorChart').getContext('2d');
    
    // Count stocks by sector
    const sectorCounts = {};
    stockData.forEach(stock => {
        sectorCounts[stock.Sector] = (sectorCounts[stock.Sector] || 0) + 1;
    });

    const labels = Object.keys(sectorCounts);
    const data = Object.values(sectorCounts);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} stocks (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);