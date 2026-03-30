let transactions = JSON.parse(localStorage.getItem('fintrack_txs') || '[]');
  let currentType = 'expense';

  const catIcons = {
    Food:'', Transport:'', Shopping:'', Bills:'',
    Entertainment:'', Health:'', Education:'',
    Salary:'', Freelance:'', Other:''
  };

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').value = today;

  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.getElementById('nav-' + name).classList.add('active');
    if (name === 'reports') renderReports();
    if (name === 'dashboard') renderDashboard();
  }

  function setType(type) {
    currentType = type;
    document.getElementById('btn-expense').classList.remove('active');
    document.getElementById('btn-income').classList.remove('active');
    document.getElementById('btn-' + type).classList.add('active');
  }

  function formatAmt(n) {
    return '₹' + Number(n).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }

  function formatDate(d) {
    const dt = new Date(d + 'T00:00:00');
    return dt.toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'});
  }

  function saveTransaction() {
    const desc = document.getElementById('desc').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    if (!desc) { alert('Please enter a description.'); return; }
    if (!amount || amount <= 0) { alert('Please enter a valid amount.'); return; }
    if (!date) { alert('Please select a date.'); return; }

    const tx = { id: Date.now(), type: currentType, desc, amount, date, category };
    transactions.unshift(tx);
    localStorage.setItem('fintrack_txs', JSON.stringify(transactions));

    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = today;

    showToast('Transaction saved!');
    setTimeout(() => showPage('dashboard'), 800);
  }

  function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    localStorage.setItem('fintrack_txs', JSON.stringify(transactions));
    renderDashboard();
  }

  function renderDashboard() {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = totalIncome - totalExpense;

    document.getElementById('bal').textContent = formatAmt(balance);
    document.getElementById('inc').textContent = formatAmt(totalIncome);
    document.getElementById('exp').textContent = formatAmt(totalExpense);

    const list = document.getElementById('tx-list');
    const empty = document.getElementById('tx-empty');

    if (transactions.length === 0) {
      list.innerHTML = '<div class="tx-empty">No transactions yet. Start by adding one!</div>';
      return;
    }

    list.innerHTML = transactions.slice(0, 10).map(t => `
      <div class="tx-item">
        <div class="tx-dot ${t.type}">${catIcons[t.category] || '📦'}</div>
        <div class="tx-desc">
          <div class="tx-name">${t.desc}</div>
          <div class="tx-meta">${t.category} &middot; ${formatDate(t.date)}</div>
        </div>
        <div class="tx-amount ${t.type}">${t.type === 'expense' ? '−' : '+'}${formatAmt(t.amount)}</div>
        <button class="tx-delete" onclick="deleteTransaction(${t.id})" title="Delete">✕</button>
      </div>
    `).join('');
  }

  function renderReports() {
    const expenses = transactions.filter(t => t.type === 'expense');
    const catTotals = {};
    expenses.forEach(t => {
      catTotals[t.category] = (catTotals[t.category] || 0) + t.amount;
    });

    const sorted = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
    const max = sorted[0] ? sorted[0][1] : 1;

    const catList = document.getElementById('cat-list');
    const highest = document.getElementById('highest');

    if (sorted.length === 0) {
      catList.innerHTML = '<p style="color:var(--gray-400);font-size:14px;margin-top:8px;">No expense data to display.</p>';
      highest.textContent = 'N/A';
      return;
    }

    highest.textContent = sorted[0][0];
    catList.innerHTML = sorted.map(([cat, amt]) => `
      <div class="cat-row">
        <span class="cat-name">${catIcons[cat] || ''} ${cat}</span>
        <div class="bar-wrap"><div class="bar-fill" style="width:${Math.round((amt/max)*100)}%"></div></div>
        <span class="cat-amt">${formatAmt(amt)}</span>
      </div>
    `).join('');
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }

  renderDashboard();