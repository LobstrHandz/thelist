(() => {
  const LIST = [
    {
      ru: { name: 'artur.nyaorim', reason: 'За то что был сучкой, эвакуировался и оставил своих тиммейтов', date: '10.02.2025' },
      en: { name: 'artur.nyaorim', reason: 'For being a bitch, extracting and leaving teammates behind', date: '10.02.2025' }
    },
    {
      ru: { name: 'Тупой идиот из компании-поставщика газа', reason: 'За то, что тупой идиот', date: '11.02.2025' },
      en: { name: 'That stupid idiot from gas service', reason: 'For being a stupid idiot', date: '11.02.2025' }
    },
    {
      ru: { name: 'Группа молодых людей на лестнице у макдака', reason: 'За то, что растянулись на всю лестницу как тупые идиоты', date: '11.02.2025' },
      en: { name: 'A group of young man on the stairs in front of McDonalds', reason: 'For blocking the entire staircase like stupid idiots', date: '11.02.2025' }
    },
    {
      ru: { name: 'Прораб Александра', reason: 'За то, что не умеет планировать и документировать работы в моей новой квартире и доставляет мне много стресса', date: '12.02.2025' },
      en: { name: 'Alexandra the forewoman', reason: 'For being bad at planning and documenting works at my new apartment and causing me a lot of stress', date: '12.02.2025' }
    },
    { 
      ru: { name: 'Юлия из компании, которая делала мне окна', reason: 'За то что невероятно плохо делает свою работу и задержку установки на 5 месяцев', date: '17.04.2025' },
      en: { name: 'Julia from company that did my windows', reason: 'For being incredibly bad at her job and delaying the installation for 5 months', date: '17.04.2025' }
    },
    {
      ru: { name: 'Рабочие, которые ставили мне окна', reason: 'За то, что жопа вместо мозгов', date: '17.04.2025' },
      en: { name: 'Workers from company that did my windows', reason: 'For having ass for a brain', date: '17.04.2025' }
    },
    {
      ru: { name: 'Рабочие, которые делали ванную', reason: 'За то, что руки из жопы и запороли мне короб вокруг разводки', date: '05.08.2025' },
      en: { name: 'Workers that did my bathroom', reason: 'For having their hands growing from their asses thus fucking up the box around the plumbing', date: '05.08.2025' }
    },
    {
      ru: { name: 'Brings или как его там', reason: 'За то что маленькая плаксивая сучка с глаголом в качестве никнейма. Кто бл использует глагол в качестве никнейма?', date: '05.08.2025' },
      en: { name: 'Brings or whatever the name was', reason: 'For being a dumb whiny bitch and having a verb as a nickname. Who tf uses verb as a nickname?', date: '05.08.2025' }
    }
  ];

  const listTable = document.querySelector('#list');
  const loadingIndicatorElement = document.querySelector('#loadingIndicator');

  let locale;

  function setLoadingIndicatorState(isLoading) {
    if (isLoading) {
      listTable.classList.add('hidden');
      loadingIndicatorElement.classList.remove('hidden');
    } else {
      listTable.classList.remove('hidden');
      loadingIndicatorElement.classList.add('hidden');
    }
  }

  function createHeader() {
    const row = document.createElement('tr');
    const nameHeader = document.createElement('td');
    const reasonHeader = document.createElement('td');
    const dateHeader = document.createElement('td');

    row.classList.add("header-row");
    nameHeader.innerText = locale === 'en' ? 'Name': 'Имя';
    reasonHeader.innerText = locale === 'en' ? 'Reason': 'Причина';
    dateHeader.innerText = locale === 'en' ? 'Date': 'Дата';

    row.appendChild(nameHeader);
    row.appendChild(reasonHeader);
    row.appendChild(dateHeader);
    listTable.appendChild(row);
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

  function setInitialLocale() {
    switch (navigator.language) {
      case 'ru':
      case 'ru-RU':
        locale = 'ru';
        break;
      default:
        locale = 'en';
        break;
    }
  }

  function changeLocale() {
    locale = locale === 'en' ? 'ru' : 'en';
  }

  function fillList() {
    createHeader();

    for (const bitch of LIST) {
      addBitch(bitch[locale]);
    }

    setLoadingIndicatorState(false);
  }

  setInitialLocale();
  fillList();
  console.log(navigator.language);
  
})();
