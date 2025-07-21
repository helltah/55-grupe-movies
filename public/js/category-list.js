const deleteButtonsDom = document.querySelectorAll('table button');

for (const btnDOM of deleteButtonsDom) {
    btnDOM.addEventListener('click', () => {
        console.log('delete', btnDOM.dataset.url);
        
        fetch('/api/admin/categories/' + btnDOM.dataset.url,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(console.error);
    });
}