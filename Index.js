import TheData from "./TheData.js";
let currentPage = 1;
let itemsPerPage = 10;

const displayData = (page, itemsPerPage) => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = parseInt(startIndex) + parseInt(itemsPerPage);
    const paginatedItems = TheData.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="indexName">${item.id}</td>
        <td class="brandName">${item.brand}</td>
        <td class="modelName">${item.model}</td>
        <td class="capName">${item.engineOrBattery}</td>
        <td class="${item.type === 'Car' ? 'carType' : 'otherType'}">${item.type}</td>
        <td class="priceName">$${item.price}</td>`;
        tableBody.appendChild(row);
    });
    document.getElementById('items-count').textContent = `${startIndex + 1} - ${Math.min(endIndex, TheData.length)} of ${TheData.length}`;
    updatePagination();
};

window.handlePerPageChange = (newPerPage) => {
    itemsPerPage = newPerPage;
    currentPage = 1;
    displayData(currentPage, itemsPerPage);
};

window.changePage = (page) => {
    currentPage = page;
    displayData(currentPage, itemsPerPage);
};

const updatePagination = () => {
    const totalPages = Math.ceil(TheData.length / itemsPerPage);
    let pages = [];
    if (totalPages <= 6) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    else if (currentPage <= 4) {
        pages = [1, 2, 3, 4, 5, '...', totalPages];
    }
    else if (currentPage >= totalPages - 3) {
        pages = [1, '...', ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)];
    }
    else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
    
    let buttonHtml = `<button class="side-button" onclick="changePage(${currentPage > 1 ? currentPage - 1 : 1})" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;
    pages.forEach(p => {
        if (p === '...') {
            buttonHtml += '<span class="dots">...</span>';
        } else {
            buttonHtml += `<button class="page-button" onclick="changePage(${p})" ${p === currentPage ? 'disabled' : ''}>${p}</button>`;
        }
    });

    buttonHtml += `<button class="side-button" onclick="changePage(${currentPage < totalPages ? currentPage + 1 : totalPages})" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
    document.getElementById('pagination').innerHTML = buttonHtml;
};

document.addEventListener('DOMContentLoaded', () => {
    displayData(currentPage, itemsPerPage);
});