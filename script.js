async function fetchData() { 
    try {
      const response = await fetch('data.json');
      const data = await response.json();
  
      const jobsListPhotosnap = document.getElementById('job-photosnap');
      const jobsListManage = document.getElementById('job-manage');
      const jobsListAccount = document.getElementById('job-account');
      const jobsListMyHome = document.getElementById('job-myhome');
      const jobsListLoopStudios = document.getElementById('job-loopstudios');
      const jobsListFaceIt = document.getElementById('job-FaceIt');
      const jobsListShortly = document.getElementById('job-shortly');
      const jobsListInsure = document.getElementById('job-Insure');
      const jobsListEyecamCo = document.getElementById('job-EyecamCo');
      const jobsListTheAirFilterCompany = document.getElementById('job-TheAirFilterCompany');

  
      data.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
          <img src="${job.logo}" alt="${job.company} Logo">
          <h2>${job.company}</h2>
          <p id="position">${job.position}</p>
          <p>${job.role} - ${job.level}</p>
          <p>${job.location}</p>
          <p>${job.languages.join(', ')}</p>
          <p>${job.tools.join(', ')}</p>
          <p>${job.postedAt}</p>
          <p>${job.contract}</p>
      `;

      if (job.company === 'Photosnap') {
        jobsListPhotosnap.appendChild(jobCard);

      } else if (job.company === 'Manage') {
        jobsListManage.appendChild(jobCard);  

      } else if (job.company === 'Account'){
        jobsListAccount.appendChild(jobCard);
        
      } else if (job.company === 'MyHome'){
        jobsListMyHome.appendChild(jobCard);

      } else if (job.company === 'Loop Studios'){
        jobsListLoopStudios.appendChild(jobCard);

      } else if (job.company === 'FaceIt'){
        jobsListFaceIt.appendChild(jobCard);

      } else if (job.company === 'Shortly'){
        jobsListShortly.appendChild(jobCard);

      } else if (job.company === 'Insure'){
        jobsListInsure.appendChild(jobCard);

      } else if (job.company === 'Eyecam Co.'){
        jobsListEyecamCo.appendChild(jobCard);

      } else if (job.company === 'The Air Filter Company'){
        jobsListTheAirFilterCompany.appendChild(jobCard);
      } 
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

fetchData();


          document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-button');
        const filteredItemsContainer = document.getElementById('filtered-items');
        const items = [];

       let activeFilter = null;

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    // Adiciona a classe ativa ao botão selecionado
    button.classList.add('active');
        activeFilter = filterValue;

        const filteredItems = items.filter(item => {
            return item.languages.includes(filterValue) || item.tools.includes(filterValue);
        });
        displayFilteredItems(filteredItems);

    if (filterValue === activeFilter) {
        // Se o botão já estiver ativo, desativa o filtro
        activeFilter = null;
        button.classList.remove('active');
        displayFilteredItems(items);
    } 
    
    else {
        // Remove a classe ativa de todos os botões
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

    }
});
});

function displayFilteredItems(filteredItems) {
// Limpa os itens anteriores
filteredItemsContainer.innerHTML = '';

if (filteredItems.length === 0) {
    filteredItemsContainer.innerHTML = '<p>Nenhum item encontrado.</p>';
    return;
}

filteredItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'filtered-item';

    // Criar elementos para mostrar informações do item
    const companyElement = document.createElement('h2');
    companyElement.textContent = item.company;
    const positionElement = document.createElement('h1');
    positionElement.textContent = item.position;
    const logoElement = document.createElement('img');
    logoElement.imageContent = item.image;

    itemDiv.appendChild(companyElement);
    itemDiv.appendChild(positionElement);
    itemDiv.appendChild(logoElement);

    filteredItemsContainer.appendChild(itemDiv);
});
}
      });