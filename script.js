(() => {
  const LIST = [
    { name: 'artur.nyaorim', reason: 'For being a bitch, extracting and leaving teammates behind', date: '10.02.2025' },
    { name: 'That stupid idiot from gas service', reason: 'For being a stupid idiot', date: '11.02.2025' }
  ];

  const listTable = document.querySelector('#list');
  const loadingIndicatorElement = document.querySelector('#loadingIndicator');

  function setLoadingIndicatorState(isLoading) {
    if (isLoading) {
      listTable.classList.add('hidden');
      loadingIndicatorElement.classList.remove('hidden');
    } else {
      listTable.classList.remove('hidden');
      loadingIndicatorElement.classList.add('hidden');
    }
  }

  function addBitch(bitch) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const reasonCell = document.createElement('td');
    const dateCell = document.createElement('td');

    nameCell.innerText = bitch.name;
    reasonCell.innerText = bitch.reason;
    dateCell.innerText = bitch.date;

    row.appendChild(nameCell);
    row.appendChild(reasonCell);
    row.appendChild(dateCell);
    listTable.appendChild(row);
  }

  function fillList() {
    for (const bitch of LIST) {
      addBitch(bitch);
    }

    setLoadingIndicatorState(false);
  }

  fillList();
})();